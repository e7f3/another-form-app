import MySelect from "../components/elements/MySelect.jsx";
import MyCheckBox from "../components/elements/MyCheckbox.jsx";
import MyTextArea from "../components/elements/MyTextArea.jsx";
import MyInput from "../components/elements/MyInput.jsx";

// Выбор компонента поля формы в зависимости от переданного варианта

export const getFieldFromVariant = (variant) => {
  switch (variant) {
    case "select":
      return MySelect;
    case "checkbox":
      return MyCheckBox;
    case "textarea":
      return MyTextArea;
    default:
      return MyInput;
  }
};
