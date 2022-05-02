import {
	PartialAccordion,
	PartialButton,
	PartialCard,
	PartialFooterSection,
	PartialTeamMember,
	PartialPartner,
	PartialInput,
	PartialDownload,
	PartialListItem,
} from '@components/partial'

const getPartialComponent = ({ __typename, ...partial }, index) => {
	let Partial

	switch (__typename) {
		case 'ComponentPartialsButton':
			Partial = PartialButton
			break
		case 'ComponentPartialsCard':
			Partial = PartialCard
			break
		case 'ComponentPartialsAccordionItem':
			Partial = PartialAccordion
			break
		case 'ComponentFooterSocial':
			Partial = PartialFooterSection
			break
		case 'ComponentFooterNewsletter':
			Partial = PartialFooterSection
			break
		case 'ComponentFooterDownloads':
			Partial = PartialFooterSection
			break
		case 'Team':
			Partial = PartialTeamMember
			break
		case 'Partner':
			Partial = PartialPartner
			break
		case 'ComponentPartialsInput':
			Partial = PartialInput
			break
		case 'ComponentPartialsDownload':
			Partial = PartialDownload
			break
		case 'ComponentPartialsListElement':
			Partial = PartialListItem
			break
	}

	return Partial ? <Partial key={`index-${index}`} {...partial} /> : null
}

const PartialManager = ({ partials }) => {
	return <>{partials.map(getPartialComponent)}</>
}

PartialManager.defaultProps = {
	partials: [],
}

export default PartialManager
