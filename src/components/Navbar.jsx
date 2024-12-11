import { NavLink } from "react-router-dom";
// React icons
import {MdOutlineAddShoppingCart} from "react-icons/md"

const Navbar = () => {
  const navLinks = [
    {
      lable: "Home",
      link: "/",
    },
    {
      lable: "Shop",
      link: "/shop",
    },
    {
      lable: "About",
      link: "/about",
    },
    {
      lable: "Contact",
      link: "/contact",
    },
  ];
  return (
    <section className="bg-[#7DC08E] px-10">
      <div className="flex justify-between items-center h-[80px]">
        <div>
          <h1 className="text-black text-2xl font-bold">
            E-<span className="text-[#89f93e]">Store</span>
          </h1>
        </div>
        <div>
          <ul className="flex gap-5 items-center">
            {navLinks.map((data) => (
              <li key={data.lable}>
                <NavLink to={data.link} className=" nav font-bold text-white" >{data.lable}</NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/cart" className=" nav font-bold text-white">
              <MdOutlineAddShoppingCart size={22}/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className=" nav font-bold text-white">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
