import * as yup from "yup";

// Конфигурация валидации в зависимости от настроек
const tuneYup = (yupSettings) => {
  let Yup = yup;
  const { type, required } = yupSettings;
  switch (type) {
    case "STRING":
      Yup = yup.string();
      break;
    case "NUMBER":
      Yup = yup.number();
      break;
    case "EMAIL":
      Yup = yup.string().email();
      break;
    default:
      Yup = yup.string();
      break;
  }
  if (required) {
    Yup = Yup.required();
  }
  return Yup;
};

// Создание схемы для валидации формы

export function createSchema(settings) {
  // Сообщения в случае ввода невалидных данных
  yup.setLocale({
    mixed: {
      required: "This field is required",
    },
    string: {
      required: "This field is required",
      email: "Must be a valid email address",
    },
  });

  const yupFields = {};

  for (let fieldSettings of settings) {
    const { name, ...yupSettings } = fieldSettings;
    yupFields[name] = tuneYup(yupSettings);
  }

  return yup.object().shape(yupFields);
}
