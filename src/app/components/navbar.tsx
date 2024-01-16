import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (

        <nav className="bg-opacity-70  navbar text-white bg-black sticky top-0 z-50">
            <div className="flex-1">
                <Link href="/">
                    <Image src="/ph_banner.svg" alt="logo" width={300} height={128} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/team">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/partners">
                            Partners
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
