import { SidebarTrigger } from "@/components/ui/sidebar";
import AuthButton from "@/modules/auth/ui/components/auth-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu Trigger and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/"} className="flex items-center gap-1 p-4">
            <Image src={"/logo.svg"} width={32} height={32} alt="logo-img" />
            <p className="text-xl font-semibold tracking-tight">NewTube</p>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-[720px] flex justify-center mx-auto">
          <SearchInput />
        </div>

        {/* Auth Button */}
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
