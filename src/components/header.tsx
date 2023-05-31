'use client'

import Link from "next/link";
import DarkModeToggleButton from "./home/darkModeToggleButton";

export default function Header() {
  return (
    <>
      <header className="text-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl darkmode-span">
              Next Study
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold darkmode-headerlink">
            <Link href="/" className="mr-5 hover:text-gray-900">홈</Link>
            <Link href="/about-me" className="mr-5 hover:text-gray-900">자기소개</Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">프로젝트</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">연락하기</Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
};