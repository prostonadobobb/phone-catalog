import './Header.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import logoImg from '../../images/LOGO.svg';
import favoriteIcon from '../../images/Favorite_icon.svg';
import basketIcon from '../../images/Basket_icon.svg';
import { SearchField } from '../SearchField/SearchField';
import { useSearchContext } from '../Context/Context';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => classNames('navbar__list-item', {
  'is-active': isActive,
});

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const searchShow = pathname === '/phones';
  const favoriteShow = pathname === '/basket';

  const { defaultStateValue } = useSearchContext();
  const [burgerOpen, setBurgerOpen] = useState(false);

  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuBtnRef.current && !menuBtnRef.current.contains(event.target as Node)) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuBtnRef]);

  return (
    <header className="header">
      <div className="navigation">

        <div className="navigation__left">
          <Link to="/" className="navigation__logo">
            <img src={logoImg} className="navigation__logo-image" alt="logo_image" />
          </Link>

          <button
            ref={menuBtnRef}
            className={classNames('menu__btn', {
              'menu__btn-active': burgerOpen,
            })}
            type="button"
            onClick={() => setBurgerOpen(!burgerOpen)}
            aria-label="Toggle Menu"
          >
            <span />
          </button>

          <nav className={classNames('navbar',
            { 'navbar--active': burgerOpen })}
          >
            <ul className="navbar__list">
              <NavLink to="/" className={getLinkClass}>home</NavLink>
              <NavLink to="phones" className={getLinkClass}>phones</NavLink>
              <NavLink to="tablets" className={getLinkClass}>tablets</NavLink>
              <NavLink to="accessory" className={getLinkClass}>accessories</NavLink>
            </ul>
          </nav>
        </div>

        <div className="navigation__right">
          {searchShow && (
            <div className="navigation__serchField">
              <SearchField />
            </div>
          )}

          {!favoriteShow && (

            <Link to="favorites" className="navigation__icon">
              <img src={favoriteIcon} alt="icon_favorite" className="navigation__icon-favorite" />

              {defaultStateValue.countFavorite !== 0 && (
                <div className="navigation__icon-basket--counter">
                  <span className="navigation__icon-basket--length">
                    {defaultStateValue.countFavorite}
                  </span>
                </div>
              )}
            </Link>
          )}
          <Link to="basket" className="navigation__icon">
            <img src={basketIcon} alt="icon-basket" className="navigation__icon-basket" />

            {defaultStateValue.countBasket !== 0 && (
              <div className="navigation__icon-basket--counter">
                <span className="navigation__icon-basket--length">
                  {defaultStateValue.countBasket}
                </span>
              </div>
            )}

          </Link>
        </div>

      </div>
    </header>
  );
};
