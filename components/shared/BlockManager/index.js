import { BlockTextMedia, BlockCards, BlockTimeline } from '@components/block'
import {
	PartialButton,
	PartialCard,
	PartialTimelineDate,
	PartialFooterSection,
} from '@components/partial'

const getBlockComponent = ({ __typename, ...block }, index) => {
	let Block

	//console.log('blockData', block)

	switch (__typename) {
		case 'ComponentBlocksTextMedia':
			Block = BlockTextMedia
			break
		case 'ComponentBlocksCards':
			Block = BlockCards
			break
		case 'ComponentBlocksTimeline':
			Block = BlockTimeline
			break
		case 'ComponentPartialsButton':
			Block = PartialButton
			break
		case 'ComponentPartialsCard':
			Block = PartialCard
			break
		case 'ComponentPartialsTimelineDate':
			Block = PartialTimelineDate
			break
		case 'ComponentPartialsFooterSection':
			Block = PartialFooterSection
			break
	}

	return Block ? <Block key={`index-${index}`} {...block} /> : null
}

const BlockManager = ({ blocks }) => {
	return <>{blocks.map(getBlockComponent)}</>
}

BlockManager.defaultProps = {
	blocks: [],
}

export default BlockManager
