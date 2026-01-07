import { useRouter } from "next/navigation";

export const useSuggestionsHandlers = () => {
  const router = useRouter();

  const handleSuggestionClick = (e) => {
    const li = e.target.closest("li");
    const id = li.dataset.id;
    router.push(`/chart/${id.slice(0, -11)}`);
  };
  const handleBgClick = (e) => {
    if (!e.target.closest(".finder")) router.back();
  };
  return { handleSuggestionClick, handleBgClick };
};
