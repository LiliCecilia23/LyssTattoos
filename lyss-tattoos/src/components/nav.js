"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from "../../public/LyssLogo.png";
import Image from 'next/image'


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
        name:"About Lyss",
        link: "/about"
    },
    {
        name: "FAQ",
        link: "/faq"
    },
    {
        name: "Contact",
        link: "/contact"
    },
    {
        name: "flash",
        link: "/flash"
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            <a href="/">
                <div>
                    <Image className="logo" src={ Logo }>
                    </Image>
                </div>     
            </a>  
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {menuItems.map((item, index) => (
          <NavbarItem key={`${item.link}-${index}`}>
            <Link
              color={"primary"}
              className="w-full pushForward"
              href={item.link}
              size="xl"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="danger" href="/booking" variant="flat">
            Book Here
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu id="mobileNav" style={{alignItems: "center", justifyContent: "center", marginTop: "-100px", zIndex: 40}}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.link}-${index}`}>
            <Link
              color={"primary"}
              className="w-full pushForward"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
