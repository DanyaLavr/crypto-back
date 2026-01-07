"use client";

import LoginForm from "@/features/auth/login/ui/login-form";
import { ModalBackground, Overlay } from "@/shared/ui";

export default function LoginModal() {
  return (
    <Overlay>
      <ModalBackground>
        <LoginForm />
      </ModalBackground>
    </Overlay>
  );
}
