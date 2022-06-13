import GridViewIcon from '@mui/icons-material/GridView';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export const dashboardItems = [
  {
    icon: <SettingsOutlinedIcon />,
    label: 'Settings',
    route: '/settings',
  },
  {
    icon: <GridViewIcon />,
    label: 'Manage Users',
    route: '/manage-users',
  },
  {
    icon: <AddModeratorOutlinedIcon />,
    label: 'Make Admin',
    route: '/make-admin',
  },
  {
    icon: <RateReviewOutlinedIcon />,
    label: 'Review',
    route: '/review',
  },
  {
    icon: <AddCardOutlinedIcon />,
    label: 'Billing',
    route: '/billing',
  },
];
