import { FormControlLabel, Switch } from "@mui/material";

// Компонент - кастомный чекбокс для работы с react-hook-form

export default function MyCheckBox({
  register,
  name,
  error,
  helperText,
  ...props
}) {
  const { label, required, ...restProps } = props;
  return (
    <FormControlLabel
      label={required ? `${label} *` : label}
      labelPlacement="start"
      className="checkbox"
      {...register(name)}
      control={<Switch />}
      {...restProps}
    />
  );
}
