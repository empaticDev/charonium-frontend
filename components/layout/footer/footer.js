import classNames from 'classnames/bind'
import styles from './footer.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)

export default function Footer(props) {
	let className = cx({
		footer: true,
		'footer--alternate': props.alternate,
	})

	return (
		<footer className={className}>
			<span className={styles.footer__title}>here comes the footer - nice</span>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer">
				Powered by{' '}
				<span className={styles.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</footer>
	)
}
