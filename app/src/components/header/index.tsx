import { HeaderContainer, Logo } from './styles'
import { Scroll, Timer } from 'phosphor-react'
import InLogo from '../../assets/INOrange.png'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <Logo src={InLogo} />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
