import classNames from 'classnames/bind'
import styles from './timelineDot.module.scss'
import dayjs from 'dayjs'
import 'dayjs/locale/de'
import 'dayjs/locale/en'

import { PartialTimelineEntry } from '@components/partial'

export default function TimelineEntry({ id, date, events }) {
	let cx = classNames.bind(styles)

	let className = cx({
		'dot': true,
	})

    const dateFormat = date && dayjs(date).locale('de').format('MMMM YYYY')
    
	return (
		<li className={className}>
            <div className={styles.header}>
                <span className={styles.marker}></span>
                <time className={styles.title} dateTime={date}>{dateFormat}</time>
            </div>
            <ul className={styles.entries}>
                {events && events.map((event) => (
				    <PartialTimelineEntry key={event.id} {...event} />
			    ))}
            </ul>
        </li>
	)
}
