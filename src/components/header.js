import { Link } from "gatsby"
import React from "react"
// import './header.module.scss'

import headerStyles from './header.module.scss'

const Header = () => (
  <header className={headerStyles.header}>
    <div>
      <h1>
        <Link to="/" className={headerStyles.title}>
          My Portfolio  
        </Link>  
      </h1>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link> 
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header