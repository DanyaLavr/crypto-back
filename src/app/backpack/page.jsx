import { getCryptos } from "@/api/getCryptos";
import { getNextCrypto } from "@/api/getNextCrypto";
import CryptoList from "@/components/crypto-list/CryptoList";
import Loader from "@/shared/loader/Loader";
import Section from "@/shared/section/Section";
import { Suspense } from "react";

export const revalidate = 300;

export default async function Backpack() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cryptos`, {
    next: { revalidate: 300 },
  });
  const cryptos = await res.json();
  console.log("Backpack");

  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <CryptoList cryptos={cryptos} />
      </Suspense>
    </Section>
  );
}
