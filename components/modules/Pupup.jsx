import { Fade, Grid } from "@mui/material";
import ClosePopup from "../elements/ClosePopup.jsx";

// Комонент - попап, закрывается по клику на кнопку ClosePopup

export default function Popup({ className, children, isShow, onClose }) {
  return (
    <Fade in={isShow}>
      <Grid
        className={className}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <div className="popup">
            <ClosePopup className="popup__close" onClick={onClose} />
            {children}
          </div>
        </Grid>
      </Grid>
    </Fade>
  );
}
