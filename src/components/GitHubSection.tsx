import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { TechIcon } from './TechIcon';
import { resumeData } from '../data/resume';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Code, Storage, Cloud, Timeline, Assessment, Speed } from '@mui/icons-material';
import { githubFetch } from '../utils/github';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  visibility: string;
  languages_url: string;
  created_at: string;
  pushed_at: string;
  size: number;
}

interface GithubStats {
  languages: { [key: string]: number };
  topTopics: { [key: string]: number };
  languagesByRepo: { [key: string]: { [key: string]: number } };
  totalBytes: number;
  activityByMonth: { [key: string]: number };
  domainFocus: {
    backend: number;
    frontend: number;
    infrastructure: number;
  };
}

interface LanguageData {
  name: string;
  percentage: number;
  bytes: number;
}

interface ProjectCountData {
  name: string;
  value: number;
  color: string;
}

const COLORS = [
  '#bb86fc', '#03dac6', '#cf6679', '#018786', 
  '#8bc34a', '#ff9800', '#e91e63', '#607d8b'
];

export const GitHubSection: React.FC = () => {
  const [stats, setStats] = useState<GithubStats>({
    languages: {},
    topTopics: {},
    languagesByRepo: {},
    totalBytes: 0,
    activityByMonth: {},
    domainFocus: { backend: 0, frontend: 0, infrastructure: 0 }
  });
  const [publicRepos, setPublicRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const username = resumeData.header.github.split('/').pop();

  const categorizeTech = (language: string): 'backend' | 'frontend' | 'infrastructure' => {
    const frontendTechs = ['JavaScript', 'TypeScript', 'React', 'Vue', 'CSS', 'HTML'];
    const infrastructureTechs = ['Docker', 'Shell', 'HCL', 'Terraform'];
    return frontendTechs.includes(language) ? 'frontend' 
         : infrastructureTechs.includes(language) ? 'infrastructure' 
         : 'backend';
  };

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch ALL repos (including private ones)
        const reposResponse = await githubFetch(
          `https://api.github.com/user/repos?per_page=100&type=all&sort=updated`
        );
        const allRepos = await reposResponse.json();
        
        // Only filter for display in the featured section
        const publicReposData = allRepos
          .filter((repo: Repository) => repo.visibility === 'public')
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        
        setPublicRepos(publicReposData);

        const languages: { [key: string]: number } = {};
        const topics: { [key: string]: number } = {};
        const languagesByRepo: { [key: string]: { [key: string]: number } } = {};
        const activityByMonth: { [key: string]: number } = {};
        let totalBytes = 0;
        const domainFocus = { backend: 0, frontend: 0, infrastructure: 0 };

        // Process ALL repos for statistics
        for (const repo of allRepos) {
          try {
            const langResponse = await githubFetch(repo.languages_url);
            const langData = await langResponse.json();
            languagesByRepo[repo.name] = langData;

            // Aggregate language bytes from all repos
            Object.entries(langData).forEach(([lang, bytes]) => {
              const byteCount = Number(bytes);
              languages[lang] = (languages[lang] || 0) + byteCount;
              totalBytes += byteCount;
              domainFocus[categorizeTech(lang)] += byteCount;
            });

            // Track activity
            const pushDate = new Date(repo.pushed_at);
            const monthKey = `${pushDate.getFullYear()}-${pushDate.getMonth() + 1}`;
            activityByMonth[monthKey] = (activityByMonth[monthKey] || 0) + 1;

            // Collect topics from all repos
            repo.topics?.forEach((topic: string) => {
              topics[topic] = (topics[topic] || 0) + 1;
            });
          } catch (error) {
            console.error('Error fetching language details:', error);
          }
        }

        setStats({
          languages,
          topTopics: Object.fromEntries(
            Object.entries(topics)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 10)
          ),
          languagesByRepo,
          totalBytes,
          activityByMonth,
          domainFocus
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const prepareLanguageData = (): LanguageData[] => {
    return Object.entries(stats.languages)
      .map(([name, bytes]) => ({
        name,
        percentage: (bytes / stats.totalBytes) * 100,
        bytes
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 8); // Top 8 languages
  };

  const prepareProjectCountData = (): ProjectCountData[] => {
    const langCount: { [key: string]: number } = {};
    Object.values(stats.languagesByRepo).forEach(repoLangs => {
      Object.keys(repoLangs).forEach(lang => {
        langCount[lang] = (langCount[lang] || 0) + 1;
      });
    });

    return Object.entries(langCount)
      .map(([name, count], index) => ({
        name,
        value: count,
        color: COLORS[index % COLORS.length]
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  };

  const renderLanguageDistribution = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={prepareLanguageData()}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
      >
        <XAxis type="number" domain={[0, 100]} unit="%" />
        <YAxis type="category" dataKey="name" width={100} />
        <RechartsTooltip
          content={({ payload }) => {
            if (!payload?.length) return null;
            const data = payload[0].payload as LanguageData;
            return (
              <Box sx={{ bgcolor: 'background.paper', p: 1, borderRadius: 1 }}>
                <Typography variant="body2">{data.name}</Typography>
                <Typography variant="body2">
                  {data.percentage.toFixed(1)}% ({(data.bytes / 1024 / 1024).toFixed(2)} MB)
                </Typography>
              </Box>
            );
          }}
        />
        <Bar
          dataKey="percentage"
          fill="#bb86fc"
          animationDuration={2000}
          animationBegin={0}
        />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderProjectDistribution = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={prepareProjectCountData()}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {prepareProjectCountData().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend 
          layout="vertical" 
          align="right"
          verticalAlign="middle"
          formatter={(value: string) => {
            const data = prepareProjectCountData().find(d => d.name === value);
            return `${value} (${data?.value} projects)`;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderDomainFocus = () => {
    const total = Object.values(stats.domainFocus).reduce((a, b) => a + b, 0);
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
        {Object.entries(stats.domainFocus).map(([domain, bytes]) => (
          <Box
            key={domain}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1
            }}
          >
            {domain === 'backend' ? <Storage /> : domain === 'frontend' ? <Code /> : <Cloud />}
            <Typography variant="body2">
              {domain.charAt(0).toUpperCase() + domain.slice(1)}
            </Typography>
            <Typography variant="body2" color="primary.main">
              {((bytes / total) * 100).toFixed(1)}%
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  const renderMetrics = () => {
    const totalProjects = Object.keys(stats.languagesByRepo).length;
    const avgBytesPerProject = stats.totalBytes / totalProjects;
    const mostUsedLang = prepareLanguageData()[0];

    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Assessment color="primary" />
          <Box>
            <Typography variant="body2" color="text.secondary">Total Projects</Typography>
            <Typography variant="h6">{totalProjects}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Speed color="primary" />
          <Box>
            <Typography variant="body2" color="text.secondary">Avg. Project Size</Typography>
            <Typography variant="h6">{(avgBytesPerProject / 1024 / 1024).toFixed(1)} MB</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Timeline color="primary" />
          <Box>
            <Typography variant="body2" color="text.secondary">Most Used</Typography>
            <Typography variant="h6">{mostUsedLang?.name}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h2" gutterBottom sx={{ 
        color: 'text.primary',
        '&::before': {
          content: '"## "',
          color: 'primary.main'
        }
      }}>
        GitHub Analytics
      </Typography>

      <Grid container spacing={3}>
        {/* Key Metrics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            {renderMetrics()}
          </Paper>
        </Grid>

        {/* Project Count Distribution */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Projects per Language
            </Typography>
            {renderProjectDistribution()}
          </Paper>
        </Grid>

        {/* Language Distribution by Bytes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Code Distribution
            </Typography>
            {renderLanguageDistribution()}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Domain Focus
            </Typography>
            {renderDomainFocus()}
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Featured Public Projects
          </Typography>
          <Grid container spacing={2}>
            {publicRepos.map((repo) => (
              <Grid item xs={12} md={6} key={repo.name}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'background.paper',
                    }
                  }}
                  onClick={() => window.open(repo.html_url, '_blank')}
                >
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {repo.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {repo.topics.map((topic) => (
                      <Typography
                        key={topic}
                        variant="caption"
                        sx={{
                          bgcolor: 'background.default',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {topic}
                      </Typography>
                    ))}
                  </Box>
                  {stats.languagesByRepo[repo.name] && (
                    <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                      {Object.keys(stats.languagesByRepo[repo.name]).map((lang) => (
                        <TechIcon key={lang} tech={lang} size={20} />
                      ))}
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}; 