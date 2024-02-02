import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
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
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
              className="icons"
            />
            <h1 className={isDarkTheme ? 'lightheading dark' : 'lightheading'}>
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
