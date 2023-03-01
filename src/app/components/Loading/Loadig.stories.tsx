import { Meta, StoryObj } from '@storybook/react';
import {CircularProgressProps} from '@mui/material';
import Loading from './index';

export default {
  title: 'Components/Loading',
  component: Loading,
  args: {
    color: 'primary',
  },
} as Meta<CircularProgressProps>;

export const LoadingPrimary: StoryObj<CircularProgressProps> = {
  args: {
    color: 'primary',
  },
};

export const LoadingSecondary: StoryObj<CircularProgressProps> = {
  args: {
    color: 'secondary'
  },
};

export const LoadingSuccess: StoryObj<CircularProgressProps> = {
  args: {
    color: 'success'
  },
};

export const LoadingError: StoryObj<CircularProgressProps> = {
  args: {
    color:  'error'
  },
};

export const LoadingWarning: StoryObj<CircularProgressProps> = {
  args: {
    color:  'warning'
  },
};

export const LoadingInfo: StoryObj<CircularProgressProps> = {
  args: {
    color: 'info'
  },
};

export const LoadingInherit: StoryObj<CircularProgressProps> = {
  args: {
    color: 'inherit'
  },
};

