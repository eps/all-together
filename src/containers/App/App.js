import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import Main from '../../components/Main/Main';
import styles from './App.scss';

const App = () => (
  <div className={styles.container}>
    <SideBarSection />
    <Main />
  </div>
);


export default App;
