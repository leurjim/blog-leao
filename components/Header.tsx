import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import headerNavLinks from "data/headerNavLinks"
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <header className="flex items-center w-full justify-between py-10">
            <Link href="/">
                <div className="flex items-center justify-between">
                    <div className="hidden h-10 text-2xl font-semibold sm:block">
                        <svg className="relative flex h-10 w-52">
                            <text className="fill-black dark:fill-white text-3xl animate-jump-in animate-normal" x="5" y="30">Leao Urbina</text>
                        </svg>
                    </div>
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
                    {headerNavLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="block font-medium text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-500"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <ThemeSwitch />
                <MobileNav />
            </div>  
        </header>
    )
}