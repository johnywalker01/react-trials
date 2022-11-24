import Link from '@mui/material/Link';
import React from 'react';
import { NsBox } from './base-navigation.style';

type FcProps = {
  customProp?: any;
};

export const ErrorNavBar: React.FC<FcProps> = (props) => {
  return (
    <NsBox>
      Some Error Occurred while rendering; Goto
      <Link href="/" underline="hover">
        Home
      </Link>
    </NsBox>
  );
};
