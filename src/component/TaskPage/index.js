/* На этой странице учился пользоваться Hook */

import React, { useState } from 'react'
import UploadForm from './UploadForm/UploadForm'
import ListUrl from './UploadForm/ListUrl/ListUrl'

const TaskComponent = () => {
	const [paths, setPaths] = useState([])

	const onUpdateList = path => {
		setPaths(paths.concat(path))
	}

	return (
		<div>
			<UploadForm onUpdateList={onUpdateList} />
			<ListUrl data={paths} />
		</div>
	)
}

export default TaskComponent
