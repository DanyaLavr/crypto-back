import { loginInitialValues, loginUserSchema } from "../lib/formik/constants";

const loginFormConfig = {
  name: "loginUser",
  initialValues: loginInitialValues,
  validationSchema: loginUserSchema,
  inputs: [
    {
      name: "email",
    },
    {
      name: "password",
    },
  ],
  button: "Login",
  link: {
    name: "I haven't an account",
    path: "/registration",
  },
};
export default loginFormConfig;
