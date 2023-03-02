export type PropsButton = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  typeColor?: 'primary' | 'secondary' | 'orange';
  type:'button' | 'submit' | 'reset';
}

export type ButtonProps = {
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  typeColor?: 'primary' | 'secondary' | 'orange';
}
