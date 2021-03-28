import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

    return (
      <nav className="header">
        {/* app name on the left  */}
        <Link to="/" className="header-link">
          <h1 className="header-title">CoolCrafts</h1>
        </Link>

        {/* search box */}
        <div className="header-search">
          <input type="text" className="header-search-bar" />
          <SearchIcon className="header-search-icon" />
        </div>

        {/* 2 links: favourites + profile */}
        <div className="header-nav">
          {/* 1st link: favourites */}
          <Link to="/favourites" className="header-link">
            <FavoriteIcon className="header-option" />
          </Link>
          {/* 2nd link: profile */}
          <Link to="/profile" className="header-link">
            <AccountCircleIcon className="header-option" />
          </Link>
          {/* 3rd link: checkout */}
          <Link to="/checkout" className="header-link">
            <div className="header-basket header-option">
              <ShoppingBasketIcon />
              <span>{basket.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
