import { SelectChangeEvent } from '@mui/material';

export interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: SelectChangeEvent) => void;
  options?: string[];
  placeholder: string;
  error?: string;
}
