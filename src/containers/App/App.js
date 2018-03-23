import React from 'react';
import SideBarSection from '../../components/SideBarSection/SideBarSection';
import styles from './App.scss';
import RedditScreen from '../RedditScreen/RedditScreen';

const App = () => (
  <div className={styles.container}>
    <SideBarSection />
    <RedditScreen />
  </div>
);


export default App;
