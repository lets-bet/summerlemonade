import React from 'react';
import styles from './Footer.less';
import lemonadeLogoImg from './lemonade-logo.png';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  render() {
    return (
      <div>
        <div className={styles['footer-container']}>
          <img className={styles['main-logo']} src={lemonadeLogoImg} />
        </div>
      </div>
    );
  }
}

export default Footer;
