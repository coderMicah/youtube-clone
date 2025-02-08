import { SidebarTrigger } from '@/components/ui/sidebar';
import AuthButton from '@/modules/auth/ui/components/auth-button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import StudioUploadModal from '../studio-upload-modal';

const StudioNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center border-b bg-white px-2 pr-5 shadow-md">
      <div className="flex w-full items-center gap-4">
        {/* Menu Trigger and logo */}
        <div className="flex flex-shrink-0 items-center">
          <SidebarTrigger />
          <Link href={'/studio'} className="flex items-center gap-1 p-4">
            <Image src={'/logo.svg'} width={32} height={32} alt="logo-img" />
            <p className="text-xl font-semibold tracking-tight">Studio</p>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Auth Button */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <StudioUploadModal />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default StudioNavbar;
