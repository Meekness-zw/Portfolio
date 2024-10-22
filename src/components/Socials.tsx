'use client';
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Meekness-zw' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/meekness-tendwai-kaboti-6a75372ab' }, // Fixed the URL
    { icon: <FaWhatsapp />, path: 'https://wa.me/+263785209322' }, // Fixed the URL
    { icon: <FaTwitter />, path: 'https://twitter.com/' } // Update with a valid URL
];

// Define props interface for better type safety
interface SocialsProps {
    containerStyles?: string;
    iconStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Socials;
