'use client';

import React from 'react';
import Switch from '@mui/material/Switch';
import styled from '@emotion/styled';

type SwitchProps = {
  value: boolean;
  onChange: () => void;
};

const StyledSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase': {
    color: '#2b6efd',
  },
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#97A4AF',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&:before': {
      left: 12,
    },
    '&:after': {
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const SwitchBlue = ({ value, onChange }: SwitchProps) => {
  return (
    <StyledSwitch
      value={value}
      onClick={onChange}
      sx={{
        color: '#2b6efd',
        transition: '0.2s ease-in-out',
      }}
    />
  );
};

export default SwitchBlue;
