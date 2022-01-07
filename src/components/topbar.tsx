import Image from "next/image";
import Link from "next/link";
import data from "../data/static.json";
import Contact from "./contact";
import Container from "./container";

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  const { menu, phoneLink, opentimes__html } = data.topbar;

  return (
    <header className="bg-white pt-20 pb-30 md:py-30">
      <Container>
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-x-20">
          {/* Menu */}
          <nav>
            {menu.map(({ href, label }) => (
              <Link href={href} key={href}>
                <a className="block">{label}</a>
              </Link>
            ))}
          </nav>

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
