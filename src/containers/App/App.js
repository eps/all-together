import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import Main from '../../components/Main/Main';
import styles from './App.scss';
import TopicsScreen from '../TopicsScreen';

const App = () => (
  <div className={styles.container}>
    <SideBarSection />
    <Main />
    <TopicsScreen />
  </div>
);


export default App;
