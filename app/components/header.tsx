import Link from "next/link";
import Image from "next/image";
export default function Header() {

    return ( 
        <header className="bg-gray-50 border-b border-gray-300 flex items-center max-h-25">
            <Image src="/favicon.png" alt="Logo" width={250} height={250} className="inline-block" />
            
            <nav className="flex justify-end w-full pr-12">
                <ul className="flex space-x-2">
                    <li><Link href="/" ><button className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">LINFAT</button></Link></li>
                    <li><Link href="/about" className="hover:underline h-full"><button className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">MMI</button></Link></li>
                    <li><Link href="/contact" className="hover:underline h-full"><button className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">R&T</button></Link></li>
                </ul>
            </nav>

        </header>
    );
}   