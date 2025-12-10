"use client";

import AuthForm from "@/components/auth/AuthForm";
import ModalBackground from "@/shared/modal-background/ModalBackground";
import Overlay from "@/shared/overlay/Overlay";

export default function RegistrationModal() {
  return (
    <Overlay>
      <ModalBackground>
        <AuthForm />
      </ModalBackground>
    </Overlay>
  );
}
