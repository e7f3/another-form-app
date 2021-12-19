// Reducer для хранения и операций с данными о форме

/*  
    Default состояние : 
    formData - значения полей при отправки данных формы
    fieldsSettings - данные о настройке полей формы
    total - итоговое значение
*/

const defaultStore = {
  formData: {},
  fieldsSettings: [],
  total: 0,
};

export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
export const ADD_FIELDS_SETTINGS = "ADD_FIELDS_SETTINGS";
export const SET_TOTAL = "SET_TOTAL";

export const formReducer = (store = defaultStore, action) => {
  switch (action.type) {
    // Обновить данные полей формы
    case UPDATE_FORM_DATA:
      const { fieldName, value } = action.payload;
      return {
        ...store,
        formData: {
          ...store.formData,
          [fieldName]: value,
        },
      };
    // Добавить настройки полей формы
    case ADD_FIELDS_SETTINGS: {
      return {
        ...store,
        fieldsSettings: [...action.payload],
      };
    }
    // Установить итоговое значение
    case SET_TOTAL: {
      return {
        ...store,
        total: action.payload,
      };
    }
    default:
      return store;
  }
};

// Actions для комфортной работы с reducer

export const UpdateFormDataAction = (payload) => ({
  type: UPDATE_FORM_DATA,
  payload,
});
export const AddFieldsSettingsAction = (payload) => ({
  type: ADD_FIELDS_SETTINGS,
  payload,
});
export const SetTotalAction = (payload) => ({
  type: SET_TOTAL,
  payload,
});
