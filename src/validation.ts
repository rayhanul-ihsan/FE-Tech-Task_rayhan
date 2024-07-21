import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAddUser, ILogin } from "./interface/interface";

export const useLoginValidation = () => {
  const initialValues: ILogin = {
    username: "",
    password: "",
  };
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  const { control, handleSubmit } = useForm<ILogin>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });
  return { control, handleSubmit };
};

export const useModalAddUserValidation = () => {
  const initialValues: IAddUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    age: 0,
  };

  const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    username: yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    gender: yup.string().required('Gender is required'),
    age: yup.number().required('Age is required').min(0, 'Age must be a positive number'),
  });

  const { control, handleSubmit, formState } = useForm<IAddUser>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
    mode: "all",
    reValidateMode: "onChange",
  });

  return { control, handleSubmit, formState };
};
