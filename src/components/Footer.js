import React from 'react';
import styles from './Footer.less';
import lemonadeLogoImg from './common/assets/lemonade-logo.png';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  render() {
    const { isReady } = this.state;
    // eslint-disable-next-line no-console
    console.log(isReady);
    return (
      <div>
        <div className={styles['footer-container']}>
          <img className={styles['main-logo']} src={lemonadeLogoImg} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Footer;
