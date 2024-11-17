import { useActiveSection } from "../hooks/useActiveSection"

export const Navbar = ({renderLinks, initialSection}) => {
  const {activeSection} = useActiveSection({initialSection: initialSection})
  return (
    <nav className="navbar">
      {renderLinks(activeSection)}
    </nav>
  )
}
