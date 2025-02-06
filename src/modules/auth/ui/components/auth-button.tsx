'use client';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { UserCircleIcon } from 'lucide-react';

const AuthButton = () => {
  return (
    <>
    <SignedIn>
      <UserButton/>
    </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button
            variant={'outline'}
            className="rounded-full border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-600 shadow-none hover:text-blue-500">
            <UserCircleIcon />
            Sign Up
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
