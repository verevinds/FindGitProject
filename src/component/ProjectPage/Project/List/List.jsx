// @flow
import React from 'react'
import styles from '../../../../styles/List.module.css'
import ListItem from './ListItem/ListItem'
import T from 'prop-types'

const List = props => {
	const { uploadData, items } = props.store

	return (
		<div className={styles.body}>
			{uploadData ? (
				items === undefined ? (
					<h1>Nothing found.</h1>
				) : (
					items.map(items => (
						<ListItem
							key={items.html_url}
							name={items.name}
							url={items.html_url}
							urlImg={items.owner.avatar_url}
							follower={items.watchers_count}
							like={items.stargazers_count}
						/>
					))
				)
			) : (
				<h1>Enter the name of the project to search</h1>
			)}
		</div>
	)
}

List.propTypes = {
	uploadData: T.bool,
	items: T.arrayOf(T.object)
}

export default React.memo(List)
