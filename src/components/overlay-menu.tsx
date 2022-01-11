import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CloseIcon from "../assets/icons/close.svg";
import data from "../data/static.json";
import { menuOpenState, scrollLockState } from "../lib/state";
import Contact from "./contact";
import Container from "./container";

interface OverlayMenuProps {}

const OverlayMenu: React.FC<OverlayMenuProps> = () => {
  const { menu, phoneLink, opentimes__html } = data.topbar;
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);

  const closeHandler = () => {
    setMenuOpen(false);
  };

  const scrollLock = useRecoilValue(scrollLockState);

  // Close overlay on larger viewports
  useEffect(() => {
    // Set up media query & listen to it
    const mql = window.matchMedia("(min-width: 768px)");
    const listener = () => {
      // Close menu if mq matches
      mql.matches && setMenuOpen(false);
    };
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [setMenuOpen]);

  return (
    <Transition
      as={Fragment}
      show={menuOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition duration-200 ease-out"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <Dialog onClose={closeHandler} className="fixed z-40 inset-0 bg-gray-ci">
        <div className="overflow-auto h-full">
          {/* Double topbar */}
          <div
            className="bg-white pt-20 pb-30 md:py-30"
            style={{ paddingRight: scrollLock }}
          >
            <Container>
              <div className="grid grid-cols-[1fr,1fr,1fr] gap-x-20">
                <div>
                  {/* Menu closer */}
                  <button
                    className="md:hidden flex flex-col items-center gap-15 text-19 font-fracture text-red-ci"
                    onClick={closeHandler}
                  >
                    {/* Icon */}
                    <CloseIcon className="h-40 w-40" />
                  </button>
                </div>

                {/* Logo */}
                <Link href="/">
                  <a className="w-[200px] md:w-[305px] block">
                    <Image
                      src="/images/logo.svg"
                      alt="Zur Mühle"
                      width={305.232}
                      height={170.052}
                      layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Container>
          </div>

          {/* Content */}
          <Container className="py-30">
            <div style={{ paddingRight: scrollLock }}>
              <div className="max-w-[200px] mx-auto">
                {/* Menu */}
                <nav className="flex flex-col gap-y-8 w-fit">
                  {menu.map(({ href, label }) => (
                    <Link href={href} key={href}>
                      <a
                        className="inline-block text-38 leading-none font-fracture whitespace-nowrap"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </a>
                    </Link>
                  ))}
                </nav>

                {/* Contact */}
                <div className="mt-70">
                  <Contact
                    opentimes__html={opentimes__html}
                    phoneLink={phoneLink}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OverlayMenu;
