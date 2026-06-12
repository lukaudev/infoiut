"use client";

import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-300 flex items-center max-h-25">
      <Image
        src="/favicon.png"
        alt="Logo"
        width={250}
        height={250}
        className="inline-block"
      />

      <nav className="flex justify-end w-full pr-12">
        <ul className="flex space-x-2">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">
                  Recherches <span className="ml-1">▾</span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-40 text-2xl" align="start">
                <Link href="/lifat">
                  <DropdownMenuItem className="hover:bg-[#00A8A8] text-lg rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">
                    LIFAT
                  </DropdownMenuItem>
                </Link>
                <Link href="/mmi">
                  <DropdownMenuItem className="hover:bg-[#00A8A8] text-lg rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">
                    MMI
                  </DropdownMenuItem>
                </Link>
                <Link href="/rt">
                  <DropdownMenuItem className="hover:bg-[#00A8A8] text-lg rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-white px-4 py-2">
                    R&T
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
}