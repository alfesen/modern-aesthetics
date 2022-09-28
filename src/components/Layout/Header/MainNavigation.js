import s from './MainNavigation.module.scss'
import IconButton from '@mui/material/IconButton'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const MainNavigation = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleMobileNav = () => {

    setShowNav(!showNav)
  }
  const hideMobileNav = () => {
    setShowNav(false)
  }
  showNav ? document.body.classList.add('sticky') : document.body.classList.remove('sticky') 
  return (
    <nav className={`container ${s.nav}`}>
      <div style={{zIndex: '151'}}>
        <Link onClick={hideMobileNav} className={s.nav__logo} to='/home' >
          <div>
            modern
            <br />
            ?aesthetics{' '}
          </div>
        </Link>
      </div>

      <IconButton onClick={toggleMobileNav} className={s.burger} >
        <DehazeIcon>
          <path d='M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' />
        </DehazeIcon>
      </IconButton>

      <ul className={`${s.nav__links} ${showNav && s.active}`}>
        <li>
          <NavLink onClick={hideMobileNav} to='/blog' activeClassName={s.nav__active}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideMobileNav} to='/recommendations' activeClassName={s.nav__active}>
            Recommendations
          </NavLink>
        </li>
        <li>
          <NavLink onClick={hideMobileNav} to='/info' activeClassName={s.nav__active}>
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
