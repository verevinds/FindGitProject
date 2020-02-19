import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/NavBar.module.css'

const NavBar = () => (
	<div className={styles.body}>
		<NavLink to='/project' className={styles.item}>
			Project page
		</NavLink>
		<NavLink to='/task' className={styles.item}>
			Task page
		</NavLink>
	</div>
)

export default React.memo(NavBar)
