import { Meta, StoryObj } from '@storybook/react';
import { PropsModal} from './types'
import ModalCard from './index';

export default {
  title: 'Components/ModalCard',
  component: ModalCard,
  args: {
    color: 'primary',
  },
} as Meta<PropsModal>;

export const ModalCardSuccess: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'success',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'vertical',
    typeContainerTitle: 'horizontal',
    children:null,
    title: 'success'
  },
};

export const ModalCardWarning: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'warning',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'vertical',
    typeContainerTitle: 'horizontal',
    children:null,
    title: 'warning',
  },
};

export const ModalCardError: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'error',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'vertical',
    typeContainerTitle: 'horizontal',
    children:null,
    title: 'Error'
  },
};

export const ModalCardInfo: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'info',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'vertical',
    typeContainerTitle: 'horizontal',
    children:null,
    title: 'Error'
  },
};

export const ModalCardSucessHorizontalButtons: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'success',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'horizontal',
    typeContainerTitle: 'horizontal',
    children:null,
    title: 'Success'
  },
};

export const ModalCardSucessVerticalTitle: StoryObj<PropsModal> = {
  args: {
    message:'Sua nova senha foi criada com sucesso. No próximo login, é só utilizar a nova senha para acessar.',
    icon:'success',
    buttons:[{
      text:"clique aqui",
      type:"button",
      typeColor: "primary",
      onPress:()=>alert('clicou no botao')
    },{
      text:"clique aqui",
      type:"button",
      typeColor: "secondary",
      onPress:()=>alert('clicou no botao')
    }],
    show: true,
    onRequestClose:()=>null,
    typeContainerButton: 'horizontal',
    typeContainerTitle: 'vertical',
    children:null,
    title: 'Success'
  },
};

