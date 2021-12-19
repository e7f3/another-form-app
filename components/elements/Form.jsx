import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SetTotalAction } from "../../store/formReducer";
const { yupResolver } = require("@hookform/resolvers/yup");

// Компонент формы для работы с react-hook form

export default function Form({
  defaultValues,
  schema,
  onSubmit,
  children,
  ...props
}) {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  // Подсчёт итоговой суммы
  const dispatch = useDispatch();
  const total = [];

  useEffect(() => {
    // При изменении в списке отслеживаемых полей - пересчёт итоговой суммы
    dispatch(
      SetTotalAction(
        total.reduce((item, prev) => Number(item) + Number(prev), 0) || 0
      )
    );
  }, [total]);

  // Регистрация дочерних input-ов для работы с react-hook-form

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      {React.Children.map(children, (child) => {
        if (child.props.name) {
          // Если prop totalize == true - отслеживать value этого поля
          if (child.props.totalize) {
            total.push(watch(child.props.name));
          }
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name,
              error: !!errors[child.props.name],
              helperText: errors[child.props.name]?.message,
            },
          });
        } else {
          return child;
        }
      })}
    </form>
  );
}
