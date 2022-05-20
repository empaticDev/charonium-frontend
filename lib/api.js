import { config } from '@lib/config'

async function fetchAPI(query, { variables } = {}) {
	const res = await fetch(`${config.nextPublicStrapiApiUrl}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${config.dbBearer}`,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}

	return json.data
}

const footerQuery = `footer {
    data {
      id
      attributes {
        anchor {
          name
          id
        }
        menu {
          pages {
            text
            page {
              data {
                attributes {
                  slug
                }
              }
            }
          }
        }
        footerBlocks {
          __typename
          ... on ComponentFooterSocial {
            header {
              title
              description
            }
            links {
              __typename
              text
              link
              target
            }
          }
          ... on ComponentFooterNewsletter {
            header {
              title
              description
            }
            input {
              __typename
              placeholder
              link
            }
          }
          ... on ComponentFooterDownloads {
            header {
              title
              description
            }
            downloads {
              __typename
              title
              media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  aboutUs {
    data {
      attributes {
        title
        description
      }
    }
  }
`

const pageQuery = `data {
      id
      attributes {
        title
        slug
        hero {
          __typename
          ... on ComponentHeroDefault {
            textBlock {
              title
              label
              heading
            }
            content
            ctas {
              __typename
              label
              type
              page {
                data {
                  attributes {
                    slug
                  }
                }
              }
              href
              download {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        blocks {
          __typename
          ... on ComponentBlocksCards {
            decoration {
              type
            }
            cards {
              __typename
              title
              content
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentBlocksTextMedia {
            id
            title
            label
            content
            alignment
            heading
            decoration {
              type
            }
            anchor {
              name
            }
            ctas {
              __typename
              label
              type
              style
              icon
              page {
                data {
                  attributes {
                    slug
                  }
                }
              }
              href
              download {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          ... on ComponentBlocksTimeline {
            title
            content
            dates {
              __typename
              ... on ComponentPartialsTimelineDate {
                id
                date
                events {
                  __typename
                  ... on ComponentPartialsEvent {
                    id
                    name
                    title
                  }
                }
              }
            }
          }
          ... on ComponentBlocksTeam {
            id
            title
            anchor {
              name
            }
            content
            members {
              __typename
              ... on TeamRelationResponseCollection {
                data {
                  attributes {
                    __typename
                    ... on Team {
                      Name
                      Nickname
                      avatar {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      image {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      interest
                      position
                    }
                  }
                }
              }
            }
          }
          ... on ComponentBlocksFaqs {
            title
            content
            decoration {
              type
            }
            accordion {
              __typename
              ... on ComponentPartialsAccordionItem {
                title
                content
              }
            }
          }
          ... on ComponentBlocksPartners {
            id
            title
            content
            label
            decoration {
              type
            }
            anchor {
              name
            }
            partners {
              __typename
              data {
                attributes {
                  __typename
                  ... on Partner {
                    name
                    link
                    logo {
                      data {
                        attributes {
                          url
                          width
                          height
                        }
                      }
                    }
                  }
                }
              }
            }
            subtitle
            subcontent
            listTitle
            list {
              __typename
              ... on ComponentPartialsListElement {
                content
              }
            }
            cta {
              __typename
              label
              type
              page {
                data {
                  attributes {
                    slug
                  }
                }
              }
              href
              download {
                data {
                  attributes {
                    url
                  }
                }
              }
              style
              icon
            }
          }
          ... on ComponentBlocksText {
            title
            text
          }
          ... on ComponentBlocksShop {
            __typename
            decoration {
              type
            }
            header: heading {
              title
              label
              heading
            }
            description
          }
          ... on ComponentBlocksCart {
            __typename
            header {
              title
              label
              heading
            }
            content
          }
          ... on ComponentBlocksDoubleTextMedia {
            __typename
            id
            label
            align: alignment
            hstyle: heading
            textblocks {
              __typename
              text
              title
            }
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentBlocksProductAnimation {
            label
            title
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`

export async function getAllPages() {
	const data = fetchAPI(`
    query {
      pages {
        ${pageQuery}
      },
      ${footerQuery}
    }
  `)
	return data
}

export async function getAllPagesWithSlug() {
	const data = fetchAPI(`
  query {
    pages {
      data {
        id
        attributes {
          slug
          locale
        }
      }
    }
  }  
  `)
	return data
}

export async function getPageBySlug(slug) {
	const data = await fetchAPI(
		`
    query PageBySlug($where: String) {
      pages(filters: { slug: { eq: $where } }) {
        ${pageQuery}
      }
      ${footerQuery}
    }
  `,
		{
			variables: {
				where: slug,
			},
		}
	)
	return data
}

export function redirectToHomepage() {
	return {
		redirect: {
			destination: `/`,
			permanent: false,
		},
	}
}
