import React from 'react';
import styles from '../../../../../styles/ListItem.module.css';

const ListItem = props => (
  <div className={styles.items}>
    <div className={styles.itemImg}>
      <img src={props.urlImg} />
    </div>
    <div className={styles.itemBody}>
      <h2>
        <a href={props.url} target='_blank'>{props.name}</a>
      </h2>
      <span>
Like:
        {props.like}
      </span>
      <span>
Follower:
        {props.follower}
      </span>
    </div>
  </div>
);

export default React.memo(ListItem);
