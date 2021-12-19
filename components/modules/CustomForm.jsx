import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "@mui/material";
import { getFieldFromVariant } from "../../utils/getFieldFromVariant.js";
import { createSchema } from "../../utils/createSchema.js";
import { UpdateFormDataAction } from "../../store/formReducer.js";
import Title from "../elements/Title.jsx";
import Form from "../elements/Form.jsx";
import Total from "../elements/Total.jsx";

// Компонент - кастомная форма.

export default function CustomForm({ className }) {
  // Диспетчер для работы с Redux
  const dispatch = useDispatch();

  // Получение данных из store
  const fieldsSettings = useSelector(
    (store) => store.formReducer.fieldsSettings
  );

  // Создание schema для валидации формы с помощью yup
  const schema = createSchema(fieldsSettings);

  // Обработка submit
  const handleSubmit = (data) => {
    // Обновить состояние данных формы в redux
    for (let fieldName in data) {
      dispatch(UpdateFormDataAction({ fieldName, value: data[fieldName] }));
    }
    console.log(data)
  };

  return (
    <div className={className}>
      <Container maxWidth="s">
        <div className="custom-form">
          <Title variant="h5" className="custom-form__title">
            Title form
          </Title>
          <Form
            className="custom-form__form"
            onSubmit={handleSubmit}
            schema={schema}
          >
            {/* Создание полей формы в зависимости от полученных настроек */}
            {fieldsSettings.map((fieldSettings) => {
              const { variant, type, ...props } = fieldSettings;
              const Field = getFieldFromVariant(variant);
              return <Field key={props.name} {...props} />;
            })}

            {/* Поле формы с итоговой суммой */}
            <Total className="custom-form__total" />
            <Button
              className="custom-form__submit-button"
              type="submit"
              variant="contained"
              sx={{margin: "0 auto"}}
            >
              Send Form
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
