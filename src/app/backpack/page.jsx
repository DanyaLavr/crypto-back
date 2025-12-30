import CryptoList from "@/components/crypto-list/CryptoList";
import Loader from "@/shared/loader/Loader";
import Section from "@/shared/section/Section";
import { Suspense } from "react";

export default async function Backpack() {
  let cryptos = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cryptos`, {
      next: { revalidate: 300 },
    });
    if (res.ok) {
      cryptos = await res.json();
    }
  } catch (e) {
    console.error(e.message);
  }

  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <CryptoList cryptos={cryptos} />
      </Suspense>
    </Section>
  );
}
