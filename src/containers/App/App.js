import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import styles from './App.scss';
import TopicsScreen from '../TopicsScreen';

const App = () => (
  <div className={styles.container}>
    <SideBarSection />
    <TopicsScreen />
  </div>
);


export default App;
