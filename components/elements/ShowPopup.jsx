import { Button, Grid } from "@mui/material";

// Компонент кнопки для отображения Popup

export default function ShowPopup({ className, onClick }) {
  return (
    <Grid
      className={className}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Button onClick={onClick} variant="outlined">
          Show form
        </Button>
      </Grid>
    </Grid>
  );
}
