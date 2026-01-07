import { updateCryptoInBackpack } from "@/entities/user/modules/redux/operations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const usePurchaseFormHandlers = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (values) => {
    dispatch(
      updateCryptoInBackpack({
        id: uid,
        data: {
          coin_id,
          base: selectedCrypto.base,
          price: Number(values.price),
          count: Number(values.count),
          invested: Number(values.invested),
        },
      })
    );
    router.back();
  };
  const handleChange = (e, values, setFieldValue) => {
    const value = e.target.value;
    setFieldValue(name, value);

    const updated = {
      ...values,
      [name]: Number(value),
    };

    if (updated.invested && updated.price && name !== "count") {
      setFieldValue("count", updated.invested / updated.price);
      return;
    }
    if (updated.count && updated.price && name !== "invested") {
      setFieldValue("invested", updated.count * updated.price);
      return;
    }
    if (updated.count && updated.invested && name !== "price") {
      setFieldValue("price", updated.invested / updated.count);
      return;
    }
  };
  return { handleSubmit, handleChange };
};
