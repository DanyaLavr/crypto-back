import {
  createBackpack,
  registerUser,
} from "@/entities/user/modules/redux/operations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useRegisterHandlers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFormSubmit = async (values) => {
    try {
      const res = await dispatch(registerUser(values)).unwrap();
      router.back();
      router.refresh();
      await dispatch(createBackpack(res.payload.uid));
    } catch {}
  };
  return { onFormSubmit };
};
