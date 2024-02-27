/* eslint-disable jsx-a11y/no-static-element-interactions */
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import {FaUser, FaBars} from 'react-icons/fa'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <i onClick={onClickLogout} className="icons">
          <FaUser />
        </i>
        <i onClick={onClickLogout} className="icons">
          <FaBars />
        </i>
      </div>
    </nav>
  )
}

export default withRouter(Header)
