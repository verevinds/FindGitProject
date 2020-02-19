// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeSearch, fetchProject } from '../../redux/actionCreators'
import styles from '../../styles/project.module.css'
import Header from './Project/Header/Header'
import List from './Project/List/List'

type Props = {
	changeSearch: (text: string) => void,
	fetchProject: (search: string) => void,
	items: { github: { search: string } }
}

class ProjectComponent extends PureComponent<Props> {
	onChange = (event: { target: { value: string } }) => {
		const { changeSearch, fetchProject } = this.props
		const valInputSearch = event.target.value

		changeSearch(valInputSearch)
		if (valInputSearch.length >= 3) {
			fetchProject(valInputSearch)
		}
	}

	render() {
		const { props, onChange } = this

		return (
			<div className={styles.body}>
				<Header search={props.items.github.search} onChange={onChange} />
				<List store={props.items.github} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	items: state
})

export default connect(mapStateToProps, { fetchProject, changeSearch })(ProjectComponent)
