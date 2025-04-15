'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
    const [navHeight, setNavHeight] = useState<number>(0);
    const buttonText = 'Action';
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const nav = document.querySelector('.nav');
        const navSpace = document.querySelector('.nav-space') as HTMLElement; // Type assertion to HTMLElement
        const handleResize = () => {
            setNavHeight(nav?.clientHeight || 0);
            if (navSpace) {
                navSpace.style.height = `${navHeight}px`;
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [navHeight]);

    function handleMenuToggle() {
        setMenu(prevMenu => !prevMenu);
    }

    const menuClass = menu ? 'translate-0' : 'translate-x-full';

    const menuItems = [
        { key: 'About', value: '/about' },
        { key: 'Blog', value: '/blog' },
        { key: 'Contact', value: '/contact' }
    ];

    return (
        <>
            <nav className="nav px-regular py-large bg-blue-100 items-center fixed w-full z-100">
                <div className="max-w-500 mx-auto flex items-center justify-between">
                    <Link className="lg:w-3/12 w-2/3 h1" href="/">
                        Hello Next.js!
                    </Link>
                    <div className="menu w-9/12 md:block hidden">
                        <div className="flex items-center space-x-5 justify-end">
                            <ul className="flex space-x-5 justify-end text-2xl">
                                {menuItems.map((el) => (
                                    <li key={el.key}>
                                        <Link href={el.value}>{el.key}</Link>
                                    </li>
                                ))}
                            </ul>
                            <button className={`border-2 rounded-3xl py-2 px-4 relative cursor-pointer hover:bg-blue-950 hover:text-white transition-all duration-200 after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-blue-950 overflow-hidden transition-width ease-in-out hover:after:w-full hover:after:animate-width-slide after:opacity-0 after:content-['${buttonText}']`}>{buttonText}</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="border-2 rounded-3xl py-2 px-4 relative cursor-pointer">Menu</button>
                    </div>
                </div>
            </nav>
            <nav className={`nav-mobile bg-blue-100 items-center fixed top-30 z-13 w-full h-full transition-all md:hidden ${menuClass}`}>
                <div className="mx-auto flex items-center w-full h-full">
                    <div className="flex flex-col items-center justify-center align-items-center space-y-5 w-full text-center mb-50">
                        <ul className="space-y-5 justify-end text-2xl">
                            {menuItems.map((el) => (
                                <li key={el.key}>
                                    <Link href={el.value}>{el.key}</Link>
                                </li>
                            ))}
                        </ul>
                        <button className={`border-2 rounded-3xl py-2 px-4 relative cursor-pointer hover:bg-blue-950 hover:text-white transition-all duration-200 after:absolute after:w-0 after:h-full after:top-0 after:left-0 after:bg-blue-950 overflow-hidden transition-width ease-in-out hover:after:w-full hover:after:animate-width-slide after:opacity-0 after:content-['${buttonText}']`}>{buttonText}</button>
                    </div>
                </div>
            </nav>
            <div className="nav-space mb-4"></div>
        </>
     );
}
