import classNames from 'classnames/bind'
import styles from './input.module.scss'

import { useState } from 'react'

let cx = classNames.bind(styles)

export default function Input({ placeholder, link }) {
	let className = cx({
		input: true,
	})

	const [email, setEmail] = useState(' ')

	const handleInput = (event) => {
		setEmail(event.target.value)
	}

	const logValue = () => {
		console.log(email)
	}

	// todo: subscribe button icon

	return (
		<>
			<div className={className}>
				<input
					className={styles.field}
					onChange={handleInput}
					placeholder={placeholder}
				/>
				<button className={styles.button} onClick={logValue}>
					Subscribe
				</button>
			</div>
		</>
	)
}
