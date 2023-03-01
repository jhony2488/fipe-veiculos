import { ReactNode } from "react"
import {PropsButton} from '../Button/types'

export type PropsModal = {
  title: string;
  icon: 'success' | 'error' | 'warning' | 'info';
  buttons: Array<PropsButton>;
  show: boolean;
  message: string;
  onRequestClose?: ()=> void;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  transparent: boolean;
  typeContainerButton: 'vertical' | 'horizontal';
  typeContainerTitle: 'vertical' | 'horizontal';
  children?: ReactNode;
  showSignature?: boolean;
}
export type PropsContainerTitle = {
  typeContainerTitle: 'vertical' | 'horizontal';
};
export type PropsContainerButton = {
  typeContainerButton: 'vertical' | 'horizontal';
};

export type PropsContainerBox = {
  isMobile: boolean;
};
