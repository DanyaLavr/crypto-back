import { getCryptos } from "@/api/getCryptos";
import CryptoList from "@/components/crypto-list/CryptoList";
import Loader from "@/shared/loader/Loader";
import Section from "@/shared/section/Section";
import { Suspense } from "react";

export const revalidate = 300;

export default async function Home() {
  let cryptos = [];

  try {
    cryptos = await getCryptos();
  } catch (e) {
    console.error("Ошибка загрузки крипты:", e.message);
  }

  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <CryptoList cryptos={cryptos} />
      </Suspense>
    </Section>
  );
}
