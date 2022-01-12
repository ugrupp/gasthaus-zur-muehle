import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import ArrowsRightIcon from "../assets/icons/arrows-right.svg";
import MenuIcon from "../assets/icons/menu.svg";
import staticData from "../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import { menuOpenState, topbarHeightState } from "../lib/state";
import Contact from "./contact";
import Container from "./container";

interface TopbarProps {
  data: typeof staticData.topbar;
}

const Topbar: React.FC<TopbarProps> = ({ data }) => {
  const { menu, phoneLink, opentimes__html } = data;

  // Topbar height
  const setTopbarHeight = useSetRecoilState(topbarHeightState);
  const topbarRef = useRef<HTMLElement>(null);

  const updateTopbarHeight = () => {
    !!topbarRef.current && setTopbarHeight(topbarRef.current.offsetHeight);
  };

  useEffect(() => {
    updateTopbarHeight();
    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        updateTopbarHeight();
      });
    });
  }, []);

  // Menu toggler
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
  const menuTogglerButtonHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white pt-20 pb-30 md:py-30" ref={topbarRef}>
      <Container>
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-x-20">
          <div>
            {/* Menu toggler */}
            <button
              className="md:hidden flex flex-col items-center gap-15 text-19 font-fracture font-normal text-red-ci"
              onClick={menuTogglerButtonHandler}
            >
              {/* Icon */}
              <MenuIcon className="h-40 w-40" />

              {/* Label */}
              <span className="[writing-mode:vertical-rl]">
                <span className="block rotate-180">Menü</span>
              </span>
            </button>

            {/* Menu */}
            <nav className="hidden md:flex flex-col gap-y-6 w-fit">
              {menu.map(({ href, label }) => (
                <Link href={href} key={href}>
                  <a className="flex items-center justify-between gap-20 md:text-28 lg:text-30 leading-none font-fracture font-normal transition-colors hover:text-red-ci group">
                    <span>{label}</span>
                    <ArrowsRightIcon className="opacity-0 group-hover:opacity-100 transition-opacity block h-[33px] w-[33px]" />
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <Link href="/">
            <a className="w-[200px] md:w-[305px] block">
              <Image
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                src="/images/logo.svg"
                alt="Zur Mühle"
                width={305.232}
                height={170.052}
                layout="responsive"
                priority={true}
              />
            </a>
          </Link>

          {/* Contact */}
          <div className="hidden md:block justify-self-end">
            <Contact opentimes__html={opentimes__html} phoneLink={phoneLink} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
