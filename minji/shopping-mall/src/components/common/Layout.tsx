import { Outlet, useNavigate } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AUTH_API } from "../../service/auth";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-screen text-3xl flex justify-between px-10 py-5 font-semibold border-b-2">
        <span>Shop</span>
        <div className="flex gap-5">
          <BsCart onClick={() => navigate("/cart")} />
          <BiExit onClick={() => AUTH_API.signOut()} />
        </div>
      </header>
      <main className="w-screen p-10">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
