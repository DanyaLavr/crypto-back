"use client";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";

import {
  selectUserError,
  selectUserIsLoading,
} from "@/entities/user/modules/redux/selectors";

import Link from "next/link";
import { FormItem, Button } from "@/shared/ui";

export default function AuthForm({ config, onSubmit }) {
  const loading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);

  const { name, initialValues, validationSchema, inputs, link, button } =
    config;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="grid gap-6">
        {inputs.map(({ name, placeholder, type }, idx) => (
          <FormItem
            key={idx}
            name={name}
            placeholder={placeholder}
            type={type}
          />
        ))}
        <div className="flex gap-8 items-center justify-self-end ">
          <Link className="underline" href={link.path} replace>
            {link.name}
          </Link>
          <Button color="light" type="submit" disabled={loading}>
            {button}
          </Button>
        </div>
        {error && <div>{error}</div>}
      </Form>
    </Formik>
  );
}
