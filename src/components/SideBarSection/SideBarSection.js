import styles from './SideBarSection.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBarSection = () => {
  return (
    <div className={styles.leftPanel}>
    <Link to="/"><h1>all together</h1></Link>
      <ul className={styles.website}>
        <li className={styles.item}>
          <Link to="/reddit">Reddit</Link>
        </li>
        <li className={styles.item}>
          <Link to="/product-hunt">Product Hunt</Link>
        </li>
        <li className={styles.item}>
          <Link to="/product-hunt">Product Hunt</Link>
        </li>
        <li className={styles.item}>
          <Link to="/product-hunt">Product Hunt</Link>
        </li>
        <li className={styles.item}>
          <Link to="/product-hunt">Product Hunt</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarSection;
