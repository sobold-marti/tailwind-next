'use client';

import { useEffect, useState } from "react";

export default function Breakpoints() {
    const [breakpoint, setBreakpoint] = useState('');

    useEffect(() => {
        const check = () => {
            const width = window.innerWidth;
            if (width >= 1440) return setBreakpoint('xl');
            if (width >= 1200) return setBreakpoint('lg');
            if (width >= 768) return setBreakpoint('md');
            if (width >= 575) return setBreakpoint('sm');
            
            return setBreakpoint('default');
        };

        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check); // Cleanup
    }, []);

    return (
        <div className="container breakpoints h-50 mx-auto p-regular">
            <div className="h-full bg-amber-300 sm:bg-blue-400 md: md:bg-cyan-400 lg:bg-emerald-400 xl:bg-fuchsia-400 flex justify-center items-center">
                <p className="text-2xl text-white">Current breakpoint: {breakpoint}</p>
            </div>
        </div>
    );
}
