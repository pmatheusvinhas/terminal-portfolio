import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { githubFetch } from '../utils/github';

export const AvatarPixel: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const username = resumeData.header.github.split('/').pop();

  useEffect(() => {
    const fetchGithubAvatar = async () => {
      try {
        const response = await githubFetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setAvatarUrl(data.avatar_url);
      } catch (error) {
        console.error('Error fetching GitHub avatar:', error);
        setAvatarUrl('/your-local-avatar.jpg');
      }
    };

    fetchGithubAvatar();
  }, [username]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        width: 128,
        height: 128,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        filter: 'drop-shadow(0 0 8px rgba(187,134,252,0.3))',
      }}
    >
      {avatarUrl && (
        <Box
          component="img"
          src={avatarUrl}
          alt="Profile"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </Box>
  );
}; 