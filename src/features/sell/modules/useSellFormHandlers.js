import { selectCryptoById } from "@/entities/crypto/modules/redux/selectors";
import { updateBackpackOnSell } from "@/entities/user/modules/redux/operations";
import { selectUser } from "@/entities/user/modules/redux/selectors";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const useSellFormHandlers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { uid } = useSelector(selectUser);
  const { coin_id } = useParams();
  const selectedCrypto = useSelector(selectCryptoById(coin_id)) || {};

  const handleSubmit = async (values) => {
    await dispatch(
      updateBackpackOnSell({
        id: uid,
        data: {
          coin_id,
          base: selectedCrypto.base,
          price: Number(values.price),
          count: Number(values.count),
          sellAmount: Number(values.sellAmount),
        },
      })
    ).unwrap();
    router.back();
  };
  const handleChange = (e, values, setFieldValue) => {
    const { name, value } = e.target;
    setFieldValue(name, value);

    const updated = {
      ...values,
      [name]: Number(value),
    };

    if (updated.sellAmount && updated.price && name !== "count") {
      setFieldValue("count", updated.sellAmount / updated.price);
      return;
    }
    if (updated.count && updated.price && name !== "invested") {
      setFieldValue("sellAmount", updated.count * updated.price);
      return;
    }
    if (updated.count && updated.sellAmount && name !== "price") {
      setFieldValue("price", updated.sellAmount / updated.count);
      return;
    }
  };
  return { handleSubmit, handleChange };
};
