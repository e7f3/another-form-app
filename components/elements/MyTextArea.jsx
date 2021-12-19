import MyInput from "./MyInput.jsx";

// Компонент - кастомный text-area для работы с react-hook-form

export default function MyTextArea({ ...props }) {
  const { label, required, ...restProps } = props;
  return (
    <MyInput
      label={required ? `${label} *` : label}
      multiline
      minRows="3"
      inputProps={{ style: { resize: "vertical" } }}
      {...restProps}
    />
  );
}
