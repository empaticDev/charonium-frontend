import { useState } from 'react'
import { decode } from 'html-entities'

import classNames from 'classnames/bind'
import styles from './newsletterForm.module.scss'
import FeatherIcon from 'feather-icons-react'

let cx = classNames.bind(styles)

const NewsletterForm = ({ status, message, onValidated }) => {
	const [error, setError] = useState(null)
	const [email, setEmail] = useState(null)
	const [checked, setChecked] = useState(false)

	let className = cx({
		newsletterForm: true,
	})

	/**
	 * Handle form submit.
	 *
	 * @return {{value}|*|boolean|null}
	 */
	const handleFormSubmit = () => {
		setError(null)

		if (!email) {
			setError('Please enter a valid email address')
			return null
		}

		if (!checked) {
			setError('Please accept the terms and conditions.')
			return null
		}

		const isFormValidated = onValidated({ EMAIL: email })

		// On success return true
		return email && email.indexOf('@') > -1 && isFormValidated
	}

	/**
	 * Handle Input Key Event.
	 *
	 * @param event
	 */
	const handleInputKeyEvent = (event) => {
		setError(null)
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault()
			// Trigger the button element with a click
			handleFormSubmit()
		}
	}

	/**
	 * Extract message from string.
	 *
	 * @param {String} message
	 * @return {null|*}
	 */
	const getMessage = (message) => {
		if (!message) {
			return null
		}
		const result = message?.split('-') ?? null
		if ('0' !== result?.[0]?.trim()) {
			return decode(message)
		}
		const formattedMessage = result?.[1]?.trim() ?? null
		return formattedMessage ? decode(formattedMessage) : null
	}

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
			<div className={className}>
				<div className={styles.email}>
					<input
						onChange={(event) => setEmail(event?.target?.value ?? '')}
						type="email"
						placeholder="Your email"
						className="mr-2"
						onKeyUp={(event) => handleInputKeyEvent(event)}
					/>
					<button className={styles.button} onClick={handleFormSubmit}>
						<FeatherIcon icon={'send'} />
					</button>
				</div>
				<div className="button-wrap wp-block-button"></div>
			</div>
			<div className={styles.feedback}>
				{status === 'sending' && <div>Sending...</div>}
				{status === 'error' || error ? (
					<div
						className="newsletter-form-error"
						dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
					/>
				) : null}
				{status === 'success' && status !== 'error' && !error && (
					<div dangerouslySetInnerHTML={{ __html: decode(message) }} />
				)}
			</div>
			<div className={styles.legal}>
				<input
					type="checkbox"
					id="accept"
					onClick={() => setChecked(!checked)}
				/>
				<label htmlFor="accept">Accept the terms and condition.</label>
			</div>
		</>
	)
}

export default NewsletterForm
