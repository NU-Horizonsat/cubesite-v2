import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className="navbar text-white bg-black sticky top-0 z-50">
            <div className="flex-1">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={300} height={128} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/link">
                            Partners
                        </Link>
                    </li>
                    <li>
                        <Link href="/link">
                            Teams
                        </Link>
                    </li>
                    <li>
                        <Link href="/link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
