import { loginUser } from "@/entities/user/modules/redux/operations";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export const useLoginHandlers = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFormSubmit = async (values) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      router.back();
      router.refresh();
    } catch (e) {}
  };
  return { onFormSubmit };
};
