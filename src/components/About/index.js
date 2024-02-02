import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
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
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="icons"
            />
            <h1 className={isDarkTheme ? 'lightheading dark' : 'lightheading'}>
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
