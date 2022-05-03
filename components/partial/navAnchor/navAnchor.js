import classNames from 'classnames/bind'
import styles from './navAnchor.module.scss'

import { PartialNavAnchorLink } from '@components/partial'

export default function NavAnchor({anchorItems}) {
	let cx = classNames.bind(styles)

	let className = cx({
		'nav--anchor': true,
	})

	return (
		<nav className={className}>
            <ul className={styles.list} >
                {anchorItems && anchorItems.map((item) => (
						<li key={item.anchor?.name}>
							<PartialNavAnchorLink id={item.id} name={item.anchor.name} />
						</li>
					))}
            </ul>
		</nav>
	)
}