import * as Yup from "yup";

export const registerUserSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  copyPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Confirm your password"),
});

export const registerInitialValues = {
  login: "",
  email: "",
  password: "",
  copyPassword: "",
};
export const loginUserSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const loginInitialValues = {
  email: "",
  password: "",
};

export const purchaseSchema = Yup.object().shape({
  price: Yup.number().required(),
  count: Yup.number().required(),
  invested: Yup.number().required(),
});

export const purchaseInitialValues = ({ last = "" }) => {
  return {
    price: last,
    count: "",
    invested: "",
  };
};
