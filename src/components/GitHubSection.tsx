import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, CircularProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend, LineChart, CartesianGrid, Line } from 'recharts';
import { Code, Storage, Cloud, Timeline, Assessment, Speed } from '@mui/icons-material';
import { githubFetch, fetchPinnedRepos } from '../utils/github';

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
  url?: string;
  primaryLanguage?: {
    name: string;
    color: string;
  };
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
  commitTrends: {
    morning: number;
    afternoon: number;
    evening: number;
    night: number;
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
    domainFocus: { backend: 0, frontend: 0, infrastructure: 0 },
    commitTrends: {
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0
    }
  });
  const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([]);
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
        
        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }
        
        const allRepos = await reposResponse.json();
        
        if (!Array.isArray(allRepos)) {
          throw new Error('Invalid response format from GitHub API');
        }
        
        // Only filter for display in the featured section
        const publicReposData = allRepos
          .filter((repo: Repository) => repo && repo.visibility === 'public' && repo.name)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);
        
        if (!pinnedRepos.length) {
          setPinnedRepos(publicReposData);
        }

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
          domainFocus,
          commitTrends: {
            morning: 0,
            afternoon: 0,
            evening: 0,
            night: 0
          }
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  useEffect(() => {
    const loadPinnedRepos = async () => {
      try {
        const repos = await fetchPinnedRepos();
        if (Array.isArray(repos) && repos.length > 0) {
          setPinnedRepos(repos);
        } else {
          console.warn('No pinned repositories found or invalid data received');
          setPinnedRepos([]);
        }
      } catch (error) {
        console.error('Failed to load pinned repositories:', error);
        setPinnedRepos([]);
      }
    };

    loadPinnedRepos();
  }, []);

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
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={prepareProjectCountData()}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={65}
          paddingAngle={5}
          dataKey="value"
        >
          {prepareProjectCountData().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend 
          layout={window.innerWidth < 600 ? 'horizontal' : 'vertical'}
          align={window.innerWidth < 600 ? 'center' : 'right'}
          verticalAlign={window.innerWidth < 600 ? 'bottom' : 'middle'}
          wrapperStyle={{
            fontSize: window.innerWidth < 600 ? '0.75rem' : '0.875rem',
            paddingTop: window.innerWidth < 600 ? '20px' : '0'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );

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
        Open source contributions
      </Typography>

      <Grid container spacing={3}>
        {/* Key Metrics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            {renderMetrics()}
          </Paper>
        </Grid>

        {/* Projects per Language e Code Distribution */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', minHeight: 400 }}>
            <Typography variant="h6" gutterBottom>
              Projects per Language
            </Typography>
            {renderProjectDistribution()}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%', minHeight: 400 }}>
            <Typography variant="h6" gutterBottom>
              Code Distribution
            </Typography>
            {renderLanguageDistribution()}
          </Paper>
        </Grid>

        {/* Tech Evolution */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, minHeight: 400 }}>
            <Typography variant="h6" gutterBottom>
              Tech Evolution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={[
                  { year: '2019', Python: 30, JavaScript: 40, 'C++': 30 },
                  { year: '2020', Python: 40, JavaScript: 35, TypeScript: 25 },
                  { year: '2021', Python: 45, TypeScript: 35, React: 20 },
                  { year: '2022', Python: 40, TypeScript: 30, React: 30 },
                  { year: '2023', Python: 35, TypeScript: 35, React: 30 }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="Python" stroke="#bb86fc" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="JavaScript" stroke="#03dac6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="TypeScript" stroke="#cf6679" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="React" stroke="#018786" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="C++" stroke="#8bc34a" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Domain Focus - Ajustado para largura total */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Domain Focus
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around', 
              alignItems: 'center',
              mt: 2,
              gap: { xs: 3, md: 0 },
              maxWidth: 800,
              mx: 'auto'
            }}>
              {Object.entries(stats.domainFocus).map(([domain, bytes]) => {
                const total = Object.values(stats.domainFocus).reduce((a, b) => a + b, 0);
                const percentage = ((bytes / total) * 100).toFixed(1);
                
                return (
                  <Box
                    key={domain}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: { xs: 1, md: 2 },
                      flex: 1,
                      width: { xs: '100%', md: 'auto' },
                      maxWidth: { xs: '200px', md: '200px' },
                      p: { xs: 1, md: 2 }
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.paper',
                        border: '2px solid',
                        borderColor: 'primary.main',
                        mb: 1
                      }}
                    >
                      {domain === 'backend' ? <Storage sx={{ fontSize: 40 }} /> : 
                       domain === 'frontend' ? <Code sx={{ fontSize: 40 }} /> : 
                       <Cloud sx={{ fontSize: 40 }} />}
                    </Box>
                    <Typography variant="h6" color="primary.main">
                      {percentage}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                      {domain}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Paper>
        </Grid>

        {/* Featured Projects */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Featured Public Projects
          </Typography>
          <Grid container spacing={2}>
            {pinnedRepos?.filter(repo => repo && repo.name).map((repo) => (
              <Grid item xs={12} md={6} key={repo.name}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    minHeight: 150,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'background.paper',
                    }
                  }}
                  onClick={() => repo.url && window.open(repo.url, '_blank')}
                >
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {repo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repo.description || 'No description available'}
                  </Typography>
                  {repo.primaryLanguage && (
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: repo.primaryLanguage.color || '#ccc',
                        }}
                      />
                      <Typography variant="body2">
                        {repo.primaryLanguage.name}
                      </Typography>
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