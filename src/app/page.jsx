import { getCryptos } from "@/api/getCrypto";
import CryptoList from "@/components/crypto-list/CryptoList";
import Loader from "@/shared/loader/Loader";
import Section from "@/shared/section/Section";
import { Suspense } from "react";

export const revalidate = 300;

export default async function Home() {
  const cryptos = await getCryptos();
  return (
    <Section>
      <Suspense
        fallback={
          <Loader
            color="#fff"
            cssOverride={{ justifySelf: "center", marginTop: "20px" }}
          />
        }
      >
        <CryptoList cryptos={cryptos} />
      </Suspense>
    </Section>
  );
}
