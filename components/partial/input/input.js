import classNames from 'classnames/bind'
import styles from './input.module.scss'
import FeatherIcon from 'feather-icons-react'

let cx = classNames.bind(styles)

export default function Input({ placeholder, link }) {
	let className = cx({
		input: true,
	})

	return (
		<>
			<svg
				style={{ width: 0, height: 0, position: 'absolute' }}
				aria-hidden="true"
				focusable="false">
				<linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
					<stop offset="0%" stopColor="#22C1C3" />
					<stop offset="100%" stopColor="#FDBB2D" />
				</linearGradient>
			</svg>
			<form className={className} onSubmit={handleSubmit}>
				<div className={styles.email}>
					<input type="email" placeholder={placeholder} required />
					<button type="submit">
						<FeatherIcon icon={'send'} />
					</button>
				</div>
				<div className={styles.legal}>
					<input type="checkbox" id="accept" />
					<label htmlFor="accept">Accept the terms and condition.</label>
				</div>
			</form>
		</>
	)
}
