import Finder from "@/modules/finder/Finder";
import UserInfo from "@/modules/user-info/UserInfo";

export default function Header() {
  return (
    <header className="flex gap-20 py-8 px-4 bg-gray-950">
      <Finder />
      <UserInfo />
    </header>
  );
}
