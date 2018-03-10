import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
// import Main from '../../components/Main/Main';
// import axios from 'axios';
import styles from './App.scss';

const App = () => {
  const websites = ['reddit', 'product hunt']
  return (
    <div className={styles.container}>
      <SideBarSection content={websites} />
    </div>
  );
}



export default App;
