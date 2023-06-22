import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

export const optionsClient: Option[] = [
  {
    name: 'Produtos',
    slug: 'products',
    icon: <DashboardIcon />,
  },
  {
    name: 'Vouchers',
    slug: 'vouchers',
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    name: 'Minha conta',
    slug: 'account',
    icon: <PersonIcon />,
  },
];

export const optionsManager: Option[] = [
  {
    name: 'Produtos',
    slug: 'admin/products',
    icon: <DashboardIcon />,
  },
  {
    name: 'Clientes',
    slug: 'admin/clients',
    icon: <GroupIcon />,
  },
  {
    name: 'Vouchers',
    slug: 'admin/vouchers',
    icon: <AccountBalanceOutlinedIcon />,
  },
  {
    name: 'Minha conta',
    slug: 'admin/account',
    icon: <PersonIcon />,
  },
];
