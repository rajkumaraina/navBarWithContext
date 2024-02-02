import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeChange = () => {
        toggleTheme()
      }
      return (
        <nav
          className={
            isDarkTheme
              ? 'navBarContainer darkThemeContainer'
              : 'navBarContainer'
          }
        >
          <ul className="navBarUnorderedList">
            <li className="navbarListItem">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="webisiteLogo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="webisiteLogo"
                />
              )}
            </li>
            <li className="navbarListItem">
              <div className="NavItemsContainer">
                <Link to="/" className="linkElement">
                  <p
                    className={
                      isDarkTheme ? 'navItemPara light' : 'navItemPara'
                    }
                  >
                    Home
                  </p>
                </Link>

                <Link to="/about" className="linkElement">
                  <p
                    className={
                      isDarkTheme ? 'navItemPara light' : 'navItemPara'
                    }
                  >
                    About
                  </p>
                </Link>
              </div>
            </li>
            <li className="navbarListItem">
              <button
                className="themeButton"
                type="button"
                onClick={themeChange}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme"
                  />
                )}
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
