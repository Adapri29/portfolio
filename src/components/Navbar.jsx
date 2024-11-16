import { useActiveSection } from "../hooks/useActiveSection"

export const Navbar = ({renderLinks}) => {
  const {activeSection} = useActiveSection({initialSection: "home"})
  return (
    <nav className="navbar">
      {renderLinks(activeSection)}
    </nav>
  )
}
