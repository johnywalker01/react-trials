import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import { indigo, green } from '@mui/material/colors';

export const FancyLinearProgress = styled(LinearProgress)({
  '&': {
    backgroundColor: 'var(--bgColorBase)',
  },
  '& .MuiLinearProgress-bar1Determinate': {
    backgroundColor: 'var(--bgColor)',
  },
});

export const successVars = {
  '--bgColor': green[500],
  '--bgColorBase': green[100],
} as React.CSSProperties;

export const defaultVars = {
  '--bgColor': indigo[500],
  '--bgColorBase': indigo[100],
} as React.CSSProperties;
