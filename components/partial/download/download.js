import classNames from 'classnames/bind'
import styles from './download.module.scss'
import FeatherIcon from 'feather-icons-react'

let cx = classNames.bind(styles)

export default function Download({ title, media }) {
	let className = cx({
		download: true,
	})

	let mediaURL = media.data.attributes.url

	return (
		<div className={className}>
			<a href={mediaURL} download={title}>
				{title && <p>{title}</p>}
				<FeatherIcon icon={'arrow-down'} />
			</a>
		</div>
	)
}
