import parse from "html-react-parser";
import data from "../data/static.json";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = () => {
  return (
    <header className="bg-white pt-20 pb-30 md:py-30">
      <Container>
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-x-30">
          {/* Menu */}
          <nav>
            {data.topbar.menu.map(({ href, label }) => (
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
            {data.topbar.opentimes__html.map((opentime, index) => (
              <p key={index}>{parse(opentime)}</p>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Topbar;
