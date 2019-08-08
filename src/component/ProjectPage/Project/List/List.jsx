import React from 'react';
import styles from '../../../../styles/List.module.css';
import ListItem from './ListItem/ListItem';

const List = props => (
  <div className={styles.body}>
    {props.store.github.uploadData ? props.store.github.items === undefined
      ? <h1>Nothing found.</h1> : props.store.github.items.map(items => (
        <ListItem
          key={items.html_url}
          name={items.name}
          url={items.html_url}
          urlImg={items.owner.avatar_url}
          follower={items.watchers_count}
          like={items.stargazers_count}
        />
      )) : <h1>Enter the name of the project to search</h1>}
  </div>
);

export default React.memo(List);
