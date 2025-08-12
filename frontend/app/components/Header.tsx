'use client'

import Image from "next/image";
import Link from "next/link";

import '../styles/header.scss'
import {IMenuItem, IMenuProps, ISubMenuItem} from "@/app/types/types";


function SubMenu({ items }: { items: ISubMenuItem[] }) {

    if (!items?.length) return null;

    return (
        <div className='header__menu--submenu'>
            <ul className='header__menu--submenu-nav'>
                {items.map((subItem, index) => (
                    <li key={index}>
                        <Link href={subItem.url ?? '#'}>{subItem.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Header({menuItems}: IMenuProps) {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link href={'/'}>
                        <Image src={'/logo.png'} width='100' height={100} priority={true} alt={'Київ Баскет'}/>
                    </Link>
                </div>
                <nav className="header__menu">
                    <ul className="header__menu--nav">
                        {
                            menuItems.items.map((item: IMenuItem) => (
                                    <li key={item.order} className='header__menu--item'>
                                        <Link href={`${item.url}`}>{item.label}</Link>
                                        <SubMenu items={item.submenu ?? []}/>
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <div className="header__search">
                        <input type="text" placeholder='Пошук' className='header__search-input'/>
                    </div>
                </nav>
            </div>
        </header>
    )
}