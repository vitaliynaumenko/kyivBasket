'use client'
import Image from "next/image";
import Link from "next/link";

import '../styles/header.scss'
import {IMenuProps, ISubMenuItem} from "@/app/types/types";



export default function Header({menuItems}: IMenuProps) {

    const renderSubMenu = (item:ISubMenuItem)=>(
        <div className='header__menu--submenu'>
            <ul className='header__menu--submenu-nav'>
                {
                    item.map((subItem: any) => (
                        <li key={subItem.label} >
                            <Link href={`${subItem.url}`}>{subItem.label}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    )



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
                            menuItems.items.map((item: any) => (
                                    <li key={item.order} className='header__menu--item'>
                                        <Link href={`${item.url}`}>{item.label}</Link>
                                        {item.submenu.length > 0 && (
                                            renderSubMenu(item.submenu)
                                        )}
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