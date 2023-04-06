import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

type TimerItem = {
  date: string;
  addition?: string;
};

const Clock: React.FC = () => {
  const [timerDays, setTimerDays] = useState<number>(10);
  const [timerHours, setTimerHours] = useState<number>(10);
  const [timerMinutes, setTimerMinutes] = useState<number>(10);
  const [timerSeconds, setTimerSeconds] = useState<number>(10);

  const timerItems: TimerItem[] = [
    { date: `${timerDays}`, addition: ':' },
    { date: `${timerHours}`, addition: ':' },
    { date: `${timerMinutes}`, addition: ':' },
    { date: `${timerSeconds}` },
  ];
  const timerInformation: string[] = ['DAYS', 'HRS', 'MINS', 'SECS'];

  useEffect((): void => {
    let interval: any;

    const startTimer = (): void => {
      const countDownDate = new Date('April 29, 2023').getTime();

      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };

    startTimer();
  }, []);
  return (
    <>
      <Typography
        sx={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '60px',
          color: '#34394C',
        }}
      >
        Ends in
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxHeight: { sm: 83, xs: 150 },
          maxWidth: { sm: 413, xs: 275 },
        }}
      >
        {timerItems.map((item) => (
          <React.Fragment key={uuidv4()}>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: '83px',
                height: '83px',
                borderRadius: '50%',
                background: '#FFFFFF',
              }}
            >
              <Typography
                sx={{
                  marginTop: '13px',
                  textAlign: 'center',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '30px',
                  fontWeight: '300',
                  lineHeight: '60px',
                  color: '#34394C',
                }}
              >
                {item.date}
              </Typography>
            </Box>
            <Box component="span">{item.addition && item.addition}</Box>
          </React.Fragment>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 15px',
          textAlign: 'center',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '16px',
          fontWeight: '300',
          lineHeight: '60px',
          color: '#34394C',
          maxHeight: { sm: 83, xs: 150 },
          maxWidth: { sm: 373, xs: 260 },
        }}
      >
        {timerInformation.map((item) => (
          <Box key={uuidv4()}>{item}</Box>
        ))}
      </Box>
    </>
  );
};

export default Clock;
