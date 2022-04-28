import {
	BlockTextMedia,
	BlockCards,
	BlockTimeline,
	BlockTeam,
	BlockFAQ,
	BlockPartners,
} from '@components/block'
import {
	PartialButton,
	PartialCard,
	PartialTimelineDate,
	PartialFooterSection,
	PartialTeamMember,
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
		case 'ComponentFooterSocial':
			Block = PartialFooterSection
			break
		case 'ComponentFooterNewsletter':
			Block = PartialFooterSection
			break
		case 'ComponentFooterDownloads':
			Block = PartialFooterSection
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
		case 'Team':
			Block = PartialTeamMember
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
