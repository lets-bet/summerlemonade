import React from 'react';
import styles from './App.less';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
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
  }
}

export default App;
