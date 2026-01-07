"use client";

import { Form, Formik } from "formik";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { purchaseFormConfig } from "../config";
import { purchaseInitialValues, purchaseSchema } from "../lib/formik/constants";
import { selectCryptoById } from "@/entities/crypto/modules/redux/selectors";
import {
  getBackpack,
  updateCryptoInBackpack,
} from "@/entities/user/modules/redux/operations";
import {
  selectBackpack,
  selectUser,
} from "@/entities/user/modules/redux/selectors";

import { usePurchaseFormHandlers } from "../modules";

import { Button, FormItem, Loader } from "@/shared/ui";

export default function PurchaseForm() {
  const { coin_id } = useParams();
  const pathname = usePathname();
  const { uid } = useSelector(selectUser);
  const backpackCrypto = useSelector(selectBackpack);
  const selectedCrypto = useSelector(selectCryptoById(coin_id)) || {};
  const dispatch = useDispatch();
  const crypto = { ...selectedCrypto };
  const { handleSubmit, handleChange } = usePurchaseFormHandlers();
  useEffect(() => {
    if (!pathname.includes("/purchase")) return;
    const fetchData = async () => {
      if (!backpackCrypto) await dispatch(getBackpack(uid));
    };
    fetchData();
  }, [pathname, dispatch, uid]);

  if (!crypto || !crypto.coin_id)
    return (
      <Loader
        color="#000"
        cssOverride={{ marginBottom: "40px", marginTop: "40px" }}
      />
    );

  return (
    <Formik
      initialValues={purchaseInitialValues(crypto)}
      validationSchema={purchaseSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="grid gap-6">
          {purchaseFormConfig.map(({ name, placeholder }, idx) => (
            <FormItem
              key={idx}
              name={name}
              placeholder={placeholder}
              type="number"
              onChange={(e) => handleChange(e, values, setFieldValue)}
            />
          ))}
          <div className="flex justify-self-end">
            <Button type="submit" color="light">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
