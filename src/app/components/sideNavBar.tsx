'use client'
import React, {useState} from 'react'
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import {FiMail, FiUsers} from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";

const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome,
    },
    {
        name: "Users",
        href: "/users",
        icon: FiUsers,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: TiContacts,
    },
    {
        name: "About",
        href: "/about",
        icon: BsPeople,
    },
];
export default function SideNavBar(){
    const [isCollapsedSidebar, setIsCollapsedSidebar]= useState<boolean>(false);
    const toggleSidebarCollapsedHandler=() =>{
        setIsCollapsedSidebar((prev)=> !prev);
    }
    return (
        <div className="sidebar__wrapper">
            <button className="btn" onClick={toggleSidebarCollapsedHandler}>
               <MdOutlineKeyboardArrowLeft/>
            </button>
          <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar__top">
            <Image src={"/logo.jpg"} width={80} height={80} className={"sidebar_logo"} alt={"logo"}/>
        </div>
              <ul className="sidebar__list">
                  {
                      sidebarItems.map(({name, href, icon:Icon})=> (
                              <li className="sidebar__item" key={name}>
                                  <Link href={href} className="sidebar__link">
                                      <span className="sidebar__icon">
                                          <Icon/>
                                      </span>
                                      <span className="sidebar__name">{name}</span>
                                  </Link>
                              </li>
                          )
                      )
                  }
              </ul>
        </aside>
        </div>
    )
}