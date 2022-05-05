import classNames from 'classnames/bind'
import styles from './input.module.scss'
import FeatherIcon from 'feather-icons-react'

import { useState } from 'react'

let cx = classNames.bind(styles)

export default function Input({ placeholder, link }) {
	let className = cx({
		input: true,
	})

	// todo: subscribe button icon

	const emailValidation =
		"^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$"

	const handleSubmit = async (event) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		// Get data from the form.
		const data = {
			email: event.target.value,
		}

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)

		// API endpoint where we send form data.
		const endpoint = '/api/emailForm'

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json()
		alert(`Is this your email: ${result.data}`)
	}

	//  	const Checkbox = () => {
	// 		const [isChecked, setIsChecked] = useState(false)
	// 		return (
	// 		<div>
	// 			<input type="checkbox" id="checkbox" checked={isChecked} />
	// <label htmlFor="checkbox">I agree to Terms of Service </label>
	// <p>The checkboxis {isChecked ? "checked" : "unchecked"}</p>
	//  </div>
	// )
	// }

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
