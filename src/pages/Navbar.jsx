import { Container } from "../components/Layout";
import { PrimaryBtn } from "../components/Button";
import {H5} from '../components/Typography'
// type NavbarProps = {};

const Button = ({ children, className }) => {
  return (
    <button
      className={`py-2 px-4 rounded hover:text-navLinkActive focus:outline-none ${className}`}>
      {children}
    </button>
  );
};

const NavbarItem = ({ children, href, id }) => {
  return (
    <a
      id={id}
      className="h-full border-b-2 border-transparent hover:border-primary text-black-4 font-medium cursor-pointer"
      href={href}
    >
      <div className="h-full px-4 flex items-center">{children}</div>
    </a>
  );
};

const Navbar = () => {
  return (
    <div className="absolute top-0 h-16 w-full py-3 bg-white text-black-5 z-50">
      <Container className="flex justify-between ">
        {/* <img src="/logo.svg" alt="" className="w-24 md:w-44" /> */}
        <H5 className="font-serif font-medium">E-Learning</H5>
        <div className="hidden font-poppins md:flex items-center">
          <NavbarItem id="About" href="">
            About
          </NavbarItem>
          <NavbarItem id="Events" href="">
            Pricing
          </NavbarItem>
          <NavbarItem id="Contact" href="">
            Contact
          </NavbarItem>
        </div>
        <div className="font-poppins flex place-items-center font-semibold">
          <Button className="hidden sm:block text-navLink font-semibold">Sign in</Button>
          <PrimaryBtn className="h-10 leading-10" small>Sign Up</PrimaryBtn>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
