import { BlockTextMedia, BlockCards } from '@components/block'
import { PartialButton, PartialCard } from '@components/partial'

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
		case 'ComponentPartialsButton':
			Block = PartialButton
			break
		case 'ComponentPartialsCard':
			Block = PartialCard
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
