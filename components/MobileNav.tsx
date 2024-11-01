'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image 
                        src="/icons/hamburger.svg" height={30} width={30} alt="menu icon" className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-white'>
                    <VisuallyHidden>
                        <SheetTitle>Mobile Navigation Menu</SheetTitle>
                    </VisuallyHidden>
                    <Link href="/" className='cursor-pointer items-center gap-1 flex px-4'>
                        <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon logo' className='size-[24px] max-xl:size-14'></Image>
                        <h1 className='text-26 font-ibm-flex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-5 pt-16 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = item.route === pathname || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient' : isActive})}>
                                                <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({'brightness-[3] invert-0':isActive})}/>
                                                <p className={cn(
                                                    'text-16 font-semibold text-black-2',
                                                    {'!text-white': isActive}
                                                )}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}

                                USER
                            </nav>
                        </SheetClose>

                        FOOTER
                    </div>

                    
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav
