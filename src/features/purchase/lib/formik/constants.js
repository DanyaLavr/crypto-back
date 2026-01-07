import * as Yup from "yup";

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
