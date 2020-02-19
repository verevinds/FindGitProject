// @flow
import React from 'react'
import styles from '../../../../styles/Header.module.css'

interface HeaderParameters {
	search: string;
	onChange: {};
}

const Header = (props: HeaderParameters): React$Element<'div'> => {
	const { search, onChange } = props

	return (
		<div className={styles.header}>
			<div className={styles.body}>
				<h1>Search Project</h1>
				<input placeholder='Name project' value={search} onChange={onChange} />
			</div>
		</div>
	)
}

export default React.memo<void>(Header)
