'use client'
import Link from "next/link"
import path from "path"
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedin />, path: '' },
    { icon: <FaWhatsapp />, path: '' },
    { icon: <FaTwitter />, path: '' }
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((items, index) => {
                return (
                    <Link key={index} href={items.path} className={iconStyles}>
                        {items.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
