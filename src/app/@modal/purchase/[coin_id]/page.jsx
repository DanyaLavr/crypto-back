"use client";
import PurchaseForm from "@/components/purchase-form/PurchaseForm";
import ModalBackground from "@/shared/modal-background/ModalBackground";
import Overlay from "@/shared/overlay/Overlay";
import PrivateRoute from "@/shared/private-route/PrivateRoute";

export default function PurchaseModal() {
  return (
    <PrivateRoute>
      <Overlay>
        <ModalBackground>
          <PurchaseForm />
        </ModalBackground>
      </Overlay>
    </PrivateRoute>
  );
}
