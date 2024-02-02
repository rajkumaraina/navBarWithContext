import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={
            isDarkTheme ? 'mainContainer darkBackground' : 'mainContainer'
          }
        >
          <Navbar />
          <div className="bottomContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="icons"
            />
            <h1 className={isDarkTheme ? 'lightheading dark' : 'lightheading'}>
              Lost Your Way?
            </h1>
            <p className={isDarkTheme ? 'notFoundPara dark' : 'notFoundPara'}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
