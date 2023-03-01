import { Meta, StoryObj } from '@storybook/react';
import { PropsButton } from './types'
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    loading: false,
    disabled:false,
    text: 'button',
    onPress: ()=>alert('button press'),
    typeColor:'primary',
    type:'button'
  },
} as Meta<PropsButton>;

export const ButtonPrimary: StoryObj<PropsButton> = {

};

export const ButtonSecondary: StoryObj<PropsButton> = {
  args: {
    typeColor:'secondary',
  },
};

export const ButtonOrange: StoryObj<PropsButton> = {
  args: {
    typeColor:'orange',
  },
};

export const ButtonLoading: StoryObj<PropsButton> = {
  args: {
    loading: true,
  },
};

export const ButtonDisabled: StoryObj<PropsButton> = {
  args: {
    disabled:true,
  },
};
