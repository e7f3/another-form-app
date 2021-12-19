import CustomForm from "../modules/CustomForm.jsx";
import { useState } from "react";
import Popup from "../modules/Pupup.jsx";
import ShowPopup from "../elements/ShowPopup.jsx";

// Компонент страницы с формой

export default function FormPage() {

  // Состояние для работы с Popup
  const [isShow, setIsShow] = useState(true);

  const onClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="form-page">
      <div className="form-page__inner">
        <ShowPopup className="form-page__show-popup" onClick={onClick} />
        <Popup className="form-page__popup" onClose={onClick} isShow={isShow}>
          <CustomForm className="form-page__custom-form" />
        </Popup>
      </div>
    </div>
  );
}
