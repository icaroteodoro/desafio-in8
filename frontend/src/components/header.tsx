import Link from "next/link";
import CartDropdown from "./cart-dropdown";
import ProfileDropdown from "./profile-dropdown";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <nav className="fixed bg-white w-screen border-b">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <Link href="/home" >
          <h1 className="text-3xl font-semibold">Minha Loja</h1>
        </Link>
        <div className="flex gap-5">
            <CartDropdown/>
            <ProfileDropdown/>
        </div>
      </div>
    </nav>
  );
}
