import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

// Компонент с итоговым значением 

export default function Total({ className }) {
  const total = useSelector((store) => store.formReducer.total);

  return (
    <div className={className}>
      <Typography>Total price</Typography>
      <Typography>${total}</Typography>
    </div>
  );
}
