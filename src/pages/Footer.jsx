import { Container } from "../components/Layout";
import { PrimaryBtn } from "../components/Button";
import { H4 } from "../components/Typography";


const Footer = () => {
  const links = [
    {
      title: "Company",
      links: [
        {
          name: "About Us",
          href: "",
        },
        {
          name: "Courses",
          href: "",
        },
        {
          name: "Career",
          href: "",
        },
        {
          name: "Affiliate",
          href: "",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          name: "Help & Supports",
          href: "",
        },
        {
          name: "Privacy Policy",
          href: "",
        },
        {
          name: "FAQs",
          href: "",
        },
        {
          name: "Contact Us",
          href: "",
        },
      ],
    },
    {
      title: "Quick Links",
      links: [
        {
          name: "Events",
          href: "",
        },
        {
          name: "Become a Instructor",
          href: "",
        },
        {
          name: "Partnerships",
          href: "",
        },
        {
          name: "Get the app",
          href: "",
        },
      ],
    },
  ];

  const FooterLink = ({ section, id }) => {
    return (
      <div key={section.title + id} className="w-full">
        <h2 className="text-lg font-medium text-gray-100 mb-3">
          {section.title}
        </h2>
        <nav className="list-none mb-10">
          {section.links.map((link, index) => {
            return (
              <li key={link.name + index}>
                <a
                  href={link.href}
                  className="text-base py-3 text-navGray hover:text-gray-300 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    );
  };

  return (
    <div className="bg-logoColor pt-16">
      <Container className="text-center relative">

        <div className="flex justify-center">
          <div className="">
            <img src="logo.svg" alt="" />
            <p className="text-navGray text-sm my-4">
              The school of learning skills.
            </p>
            {/* <div className="flex justify-between w-44 my-4">
              <img src="/Instagram.svg" alt="" />
              <img src="/Linkedin.svg" alt="" />
              <img src="/Twitter.svg" alt="" />
              <img src="/Facebook.svg" alt="" />
            </div> */}
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3">
            {links.map((section, index) => {
              return <FooterLink key={index} section={section} id={index}></FooterLink>;
            })}
          </div> */}
        </div>

        <div className="flex justify-between border-gray-600 border-t w-full p-4">
          <p className="text-gray-300 font-thin">
            e-learning.com
          </p>
          <p className="text-gray-300 font-thin text-right">
            © 2021 - All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
