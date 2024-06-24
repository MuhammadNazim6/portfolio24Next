import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'


const socials = [
  { icon: <FaGithub />, path: "https://github.com/MuhammadNazim6" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/-muhammadnazim/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/n__zim/" },
  { icon: <FaTwitter />, path: "" },
]
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials