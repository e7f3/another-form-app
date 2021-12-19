import { Container } from "@mui/material";

// Основная разметка

export default function Layout({ children }) {
  return (
    <main className="main">
      <Container fixed>{children}</Container>
    </main>
  );
}
