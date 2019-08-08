import React from 'react';
import styles from '../../../../styles/Header.module.css';

const Header = props => (
  <div className={styles.header}>
    <div className={styles.body}>
      <h1>Search Project</h1>
      <input placeholder="Name project" value={props.store.search} onChange={props.onChange} />
    </div>
  </div>
);

export default React.memo(Header);
