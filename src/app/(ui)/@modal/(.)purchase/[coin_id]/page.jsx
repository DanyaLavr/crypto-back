"use client";

import PurchaseForm from "@/features/purchase/ui/PurchaseForm";
import { ModalBackground, Overlay } from "@/shared/ui";

export default function PurchaseModal() {
  return (
    <>
      <Overlay>
        <ModalBackground>
          <PurchaseForm />
        </ModalBackground>
      </Overlay>
    </>
  );
}
