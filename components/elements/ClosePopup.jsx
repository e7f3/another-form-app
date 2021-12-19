import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Компонент кнопки, закрывающей попап

export default function ClosePopup({ className, onClick }) {
  return (
    <div className={className}>
      <IconButton onClick={onClick}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}
