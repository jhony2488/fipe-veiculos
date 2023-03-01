import { Meta, StoryObj } from '@storybook/react';
import { SelectInputProps } from './interface';
import { SelectFieldInput } from '.';

export default {
  title: 'Components/forms/SelectFieldInput',
  component: SelectFieldInput,
  args: {
    icon:'buildings',
    label:'Label',
    options:['option1', 'option2', 'option3'],
    placeholder:'escolha uma opção',
    value:''
  },
} as Meta<SelectInputProps>;

export const Default: StoryObj<SelectInputProps> = {};

