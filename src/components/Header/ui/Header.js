import React, { useContext, useState } from 'react';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { MainLink } from 'features/main-link';
import { AuthTab } from './AuthTab/AuthTab';
import { HeaderNavLinkList } from './HeaderNavLinkList/HeaderNavLinkList';
import { AccountLinkDefault } from 'shared/ui';
import { AccountLinkPromo } from 'shared/ui';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Menu } from 'entities/menu';
import { authLinks, navigationLinks, mainLink, accountLink } from 'shared/config';
import { menuLinks } from '../config/config';
import { AuthorizedContext } from 'shared/contexts';

export const Header = () => {
  const { isAuthorized } = useContext(AuthorizedContext);

  const location = useLocation();

  const [isMenuVisible, setMenuVisible] = useState(false);

  const headerColorClassname = location.pathname === mainLink.href
    ? styles.header_theme_promo
    : styles.header_theme_default;

  const menuLayoutHiddenClassname = isMenuVisible
    ? ''
    : styles.menuLayout_hidden;

  function showMenu() {
    setMenuVisible(true);
  }

  function closeMenu() {
    setMenuVisible(false);
  }

  return (
    <header className={`${styles.header} ${headerColorClassname}`}>
      <div className={styles.content}>
        { isAuthorized ? (
          <>
            <div className={styles.container}>
              <MainLink href={mainLink.href} />
              <HeaderNavLinkList links={navigationLinks} />
            </div>

            <div className={styles.accountLayout}>
              {
                location.pathname === mainLink.href
                ? <AccountLinkPromo href={accountLink.href} />
                : <AccountLinkDefault href={accountLink.href} />
              }
            </div>
            <div className={styles.burgerLayout}>
              <BurgerMenu onClick={showMenu} />
            </div>

            <div className={`${styles.menuLayout} ${menuLayoutHiddenClassname}`}>
              <Menu
                links={menuLinks}
                onClose={closeMenu}
                AccountLinkComponent={<AccountLinkDefault href={accountLink.href} />}
              />
            </div>
          </>
        ) : (
          <>
            <MainLink href={mainLink.href} />
            <AuthTab links={authLinks} />
          </>
        )}
      </div>
    </header>
  )
}
