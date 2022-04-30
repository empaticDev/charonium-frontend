import {
	BlockTextMedia,
	BlockCards,
	BlockTimeline,
	BlockTeam,
	BlockFAQ,
	BlockPartners,
} from '@components/block'

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
		case 'ComponentBlocksTeam':
			Block = BlockTeam
			break
		case 'ComponentBlocksFaqs':
			Block = BlockFAQ
			break
		case 'ComponentBlocksPartners':
			Block = BlockPartners
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
