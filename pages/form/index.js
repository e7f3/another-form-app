import getConfig from "next/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddFieldsSettingsAction } from "../../store/formReducer.js";
import FormPage from "../../components/templates/FormPage.jsx";

// Страница с формой

export default function MyForm({ data }) {
  const { fieldsSettings } = data;
  const dispatch = useDispatch();

  // Запись данных о полях формы в store

  useEffect(() => {
    dispatch(AddFieldsSettingsAction(fieldsSettings));
  }, [fieldsSettings]);
  
  return <FormPage />;
}

// Запрос данных о полях формы

export async function getServerSideProps() {
  // Получение url из serverRuntimeConfig
  const {
    serverRuntimeConfig: { API_URL },
  } = getConfig();

  // Запрос данных по API
  const response = await fetch(`${API_URL}/api/form/getFields`);
  const data = await response.json();

  // Если данных нет - вернуть Not found
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
