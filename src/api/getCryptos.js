import { fetchCryptos } from "@/api/fetchCryptos";

const MAX_KEYS = 7;

export const getCryptos = async () => {
  for (let keyIndex = 0; keyIndex < MAX_KEYS; keyIndex++) {
    try {
      return await fetchCryptos(1, keyIndex);
    } catch (e) {
      if (
        e.response?.status === 429 ||
        e.response?.data?.status?.error_message?.includes("API Key Missing")
      ) {
        continue;
      }
      throw e;
    }
  }

  throw new Error("Все API ключи недоступны");
};
