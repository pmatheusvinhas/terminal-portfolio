import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState<{ hours: string; minutes: string }>({ hours: '', minutes: '' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const [hours, minutes] = timeStr.split(':');
      setTime({ hours, minutes });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography 
      component="span" 
      sx={{ 
        color: '#03dac6',
        '& .blink': {
          animation: `${blinkAnimation} 1s step-start infinite`,
          display: 'inline-block',
        },
        '& .timezone': {
          opacity: 0.7,
          ml: 1,
          fontSize: '0.85em'
        }
      }}
    >
      • {time.hours}<span className="blink">:</span>{time.minutes}<span className="timezone">(UTC-3)</span>
    </Typography>
  );
}; 