import { TextField } from "@mui/material";

// Компонент - кастомный input для работы с react-hook-form

export default function MyInput({ register, name, inputProps, ...props }) {
  const { label, required, ...restProps } = props;
  return (
    <TextField
      label={required ? `${label} *` : label}
      {...register(name)}
      inputProps={inputProps}
      {...restProps}
    />
  );
}
