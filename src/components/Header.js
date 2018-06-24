import styles from './Header.less';
import lemonadeLogoImg from './common/assets/lemonade-logo.png';

const Header = () => (
  <div>
    <div className={styles['header-container']}>
      <img className={styles['main-logo']} src={lemonadeLogoImg} alt="Logo" />
    </div>
  </div>
);

export default Header;
