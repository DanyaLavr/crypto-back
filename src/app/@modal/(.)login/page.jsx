"use client";

import AuthForm from "@/components/auth/AuthForm";
import ModalBackground from "@/shared/modal-background/ModalBackground";
import Overlay from "@/shared/overlay/Overlay";

export default function LoginModal() {
  return (
    <Overlay>
      <ModalBackground>
        <AuthForm />
      </ModalBackground>
    </Overlay>
  );
}
