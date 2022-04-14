import { BlockTextMedia } from '@components/block'

const getBlockComponent = ({ __typename, ...block }, index) => {
	let Block

	//console.log('blockData', block)

	switch (__typename) {
		case 'ComponentBlocksTextMedia':
			Block = BlockTextMedia
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
