import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext, useCartContext } from "../../context";

import { ShoppingCartIcon } from "@heroicons/react/20/solid";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  activeStyle?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, activeStyle }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};

const Navbar: React.FC = () => {
  const { cartProducts } = useCartContext();

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavItem to="/">Shopi</NavItem>
        </li>
        <li>
          <NavItem to="/all" activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to="/clothes" activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to="/electronics" activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to="/furnitures" activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to="/toys" activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to="/others" activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">juanesgarciamar@outlook.com</li>
        <li>
          <NavItem to="/my-orders" activeStyle={activeStyle}>
            My Orders
          </NavItem>
        </li>
        <li>
          <NavItem to="/my-account" activeStyle={activeStyle}>
            My Account
          </NavItem>
        </li>
        <li>
          <NavItem to="/sign-in" activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        <li className="flex items-center gap-2">
          <ShoppingCartIcon className="h-5" />
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
