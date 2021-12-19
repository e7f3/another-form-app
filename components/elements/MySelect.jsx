import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

// Компонент - кастомный select для работы с react-hook-form

export default function MySelect({ labelId, ...props }) {
  const {
    options,
    settings,
    label,
    required,
    register,
    name,
    error,
    helperText,
    ...restProps
  } = props;

  const id = uuidv4();

  const [selectValue, setSelectValue] = useState("");
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div className="select">
      <Typography>{required ? `${label} *` : label}</Typography>
      <FormControl>
        <InputLabel error={error} id={id} size="small">
          {settings.placeholder}
        </InputLabel>
        <Select
          labelId={id}
          label={settings.placeholder}
          value={selectValue}
          onChange={handleChange}
          inputProps={{ ...register(name) }}
          size="small"
          error={error}
        >
          {options ? (
            options.map((option) => {
              const optionId = uuidv4();
              return (
                <MenuItem key={optionId} value={option.optionValue}>
                  {option.optionText}
                </MenuItem>
              );
            })
          ) : (
            <></>
          )}
        </Select>
        {error ? (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        ) : (
          <></>
        )}
      </FormControl>
    </div>
  );
}
