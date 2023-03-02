import { SelectChangeEvent } from '@mui/material';

export interface optionProps{nome:string, codigo: string | number}

export interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: SelectChangeEvent) => void;
  options?: string[] | optionProps[];
  placeholder: string;
  error?: string;
}
