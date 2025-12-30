import { fetchCryptos } from "@/api/fetchCryptos";

const MAX_KEYS = 7;

export async function GET() {
  try {
    let data;
    for (let keyIndex = 0; keyIndex < MAX_KEYS; keyIndex++) {
      try {
        data = await fetchCryptos(1, keyIndex);
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
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
