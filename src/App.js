import styles from './App.less';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <div className={styles['content-container']}>
      Hello from the coolest App.
      <br />
      I am happy we worked together!
      <br />
    </div>
    <Footer />
  </div>
);

export default App;
