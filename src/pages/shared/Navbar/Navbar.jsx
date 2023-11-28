import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import TopBar from "./TopBar/TopBar";

const menuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/",
    title: "Packages",
  },
  {
    path: "/",
    title: "Hotels",
  },
  {
    path: "/",
    title: "Places",
  },
  {
    path: "/",
    title: "Gallery",
  },
  {
    path: "/",
    title: "Blog",
  },
  {
    path: "/",
    title: "Contact",
  },
];

const Navbar = () => {
  return (
    <header>
      {/* top navbar */}
      <TopBar />
      {/* main menu */}
      <nav className="flex items-center justify-between my-5 px-10">
        <Logo />
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 text-lg">
            {menuItems.map(({ path, title, idx }) => (
              <li key={idx}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
          <button className="my-btn">Book Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
