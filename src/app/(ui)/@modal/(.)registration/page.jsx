"use client";

import RegisterForm from "@/features/auth/register/ui/register-from";
import { ModalBackground, Overlay } from "@/shared/ui";

export default function RegistrationModal() {
  return (
    <Overlay>
      <ModalBackground>
        <RegisterForm />
      </ModalBackground>
    </Overlay>
  );
}
