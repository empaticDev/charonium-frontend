import {
	BlockTextMedia,
	BlockCards,
	BlockTimeline,
	BlockTeam,
	BlockFAQ,
	BlockPartners,
	BlockText,
	BlockShop,
	BlockCart,
} from '@components/block'

let productList = []

const getBlockComponent = ({ __typename, ...block }, index) => {
	let Block

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
		case 'ComponentBlocksText':
			Block = BlockText
			break
		case 'ComponentBlocksShop':
			Block = BlockShop
			break
		case 'ComponentBlocksCart':
			Block = BlockCart
			break
	}

	if (__typename === 'ComponentBlocksShop') {
		block['products'] = productList
	}

	return Block ? <Block key={`index-${index}`} {...block} /> : null
}

const BlockManager = ({ blocks, products }) => {
	productList = products

	return <>{blocks.map(getBlockComponent)}</>
}

BlockManager.defaultProps = {
	blocks: [],
	products: [],
}

export default BlockManager
