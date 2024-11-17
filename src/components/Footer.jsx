import { LinkIcons } from "./LinkIcons"
import { social_links } from "../models/data"

export const Footer = () => {
  return (
    <footer className="footer">
        <LinkIcons icons={social_links}/>
        <p className="copyright">
          2024 Alberto Adamuz Priego
        </p>
    </footer>
  )
}
