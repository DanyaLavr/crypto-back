import { Suspense } from "react";

import { getCryptos } from "@/api/getCrypto";

import CryptoList from "@/components/crypto-list/CryptoList";
import Section from "@/shared/section/Section";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const revalidate = 300;

export default async function Backpack() {
  const cryptos = await getCryptos();

  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session) {
    redirect("/login");
  }

  return (
    <Section>
      <Suspense>
        <CryptoList cryptos={cryptos} />
      </Suspense>
    </Section>
  );
}
