import React from 'react';
import styles from './Header.less';
import lemonadeLogoImg from './lemonade-logo.png';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={styles['header-container']}>
          <img className={styles['main-logo']} src={lemonadeLogoImg} />
        </div>
      </div>
    );
  }
}

export default Header;
