// Создание и настройка темы Material UI

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

// Responsive шрифты

theme = responsiveFontSizes(theme);

export default theme;
