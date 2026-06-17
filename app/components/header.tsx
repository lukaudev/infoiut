"use client";

import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import  { usePathname } from "next/navigation";

export default function Header() {

  const [page, setPage] = useState("");
  const pageRouter = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isResearchesOpen, setIsResearchesOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

 

  return (
    <header className="bg-white border-b border-gray-300 fixed top-0 left-0 right-0 z-50 h-20">
      <div className="flex items-center justify-between h-full px-4 md:px-12">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} >
          <Image
            src="/favicon.png"
            alt="Logo"
            width={250}
            height={250}
            className="inline-block w-auto h-25 enstage"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end gap-1 button-group h-full">
          <Link href="/" className="h-full flex items-center">
            <button className="h-full  rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 flex items-center">
              Accueil
            </button>
          </Link>
          <Link href="/lequipe" className="h-full flex items-center">
            <button className="h-full  rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 flex items-center">
              L&apos;equipe
            </button>
          </Link>
          <Link href="/galerie" className="h-full flex items-center">
            <button className="h-full  rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 flex items-center">
              Galerie
            </button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`h-full hover:bg-[#e1ebeb] active:bg-[#e1ebeb] cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 flex items-center outline-0`}>
                Recherches <span className="ml-1">▾</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
              <Link href="/lifat" onClick={closeMenu}>
                <DropdownMenuItem className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 py-2">
                  LIFAT
                </DropdownMenuItem>
              </Link>
              <Link href="/mmi" onClick={closeMenu}>
                <DropdownMenuItem className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 py-2">
                  MMI
                </DropdownMenuItem>
              </Link>
              <Link href="/rt" onClick={closeMenu}>
                <DropdownMenuItem className="hover:bg-[#00A8A8] rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-4 py-2">
                  R&T
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden  rounded cursor-pointer transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 transition-all duration-200 bg-opacity-50 md:hidden z-40 top-20"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-20 right-0 h-screen w-64 bg-gray-50 shadow-lg transform transition-transform duration-300 md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col py-4">
          <Link href="/lequipe" onClick={closeMenu}>
            <button className="w-full text-left  transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-6 py-3">
              L&apos;equipe
            </button>
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            <button className="w-full text-left  transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-6 py-3">
              Projects
            </button>
          </Link>
          <Link href="/galerie" onClick={closeMenu}>
            <button className="w-full text-left  transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-6 py-3">
              Galerie
            </button>
          </Link>
          <button
            onClick={() => setIsResearchesOpen(!isResearchesOpen)}
            className="w-full text-left hover:bg-gray-100 transition-colors duration-300 text-gray-700 px-6 py-3 flex items-center justify-between"
          >
            Recherches
            <span className={`transition-transform ${isResearchesOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {isResearchesOpen && (
            <div className="bg-gray-100">
              <Link href="/lifat" onClick={closeMenu}>
                <button className="w-full text-left transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-8 py-2">
                  LIFAT
                </button>
              </Link>
              <Link href="/mmi" onClick={closeMenu}>
                <button className="w-full text-left transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-8 py-2">
                  MMI
                </button>
              </Link>
              <Link href="/rt" onClick={closeMenu}>
                <button className="w-full text-left  transition-colors duration-300 text-gray-700 hover:text-[#0a9ca7] px-8 py-2">
                  R&T
                </button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}