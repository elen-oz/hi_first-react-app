import Header from './Header';
import Food from './Food';
import Footer from './Footer';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Food />
      <Footer />
    </div>
  );
};

export default App;
