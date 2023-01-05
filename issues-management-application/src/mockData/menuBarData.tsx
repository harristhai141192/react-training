// Libraries
import {
  UpDownIcon,
  SunIcon,
  HamburgerIcon,
  ArrowBackIcon,
  DragHandleIcon,
  InfoIcon,
  SettingsIcon,
  MinusIcon,
  LockIcon,
} from '@chakra-ui/icons';

export const menuBar = [
  {
    name: 'Code',
    icon: <UpDownIcon />,
  },
  {
    name: 'Issues',
    icon: <SunIcon />,
  },
  {
    name: 'Pull Requests',
    icon: <HamburgerIcon />,
  },
  {
    name: 'Actions',
    icon: <ArrowBackIcon />,
  },
  {
    name: 'Projects',
    icon: <DragHandleIcon />,
  },
  {
    name: 'Wiki',
    icon: <InfoIcon />,
  },
  {
    name: 'Security',
    icon: <LockIcon />,
  },
  {
    name: 'Insights',
    icon: <MinusIcon />,
  },
  {
    name: 'Settings',
    icon: <SettingsIcon />,
  },
];
