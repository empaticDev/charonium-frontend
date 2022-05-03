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
        menu {
          pages {
            text
            link
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
            id
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
            title
            label
            content
            alignment
            heading
            ctas {
              __typename
              label
              type
              style
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
              id
              date
              events {
                __typename
                id
                name
              }
            }
          }
          ... on ComponentBlocksTeam {
            __typename
            title
            content
            members {
              __typename
              data {
                attributes {
                  __typename
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
          ... on ComponentBlocksFaqs {
            __typename
            title
            content
            accordion {
              __typename
              title
              content
            }
          }
          ... on ComponentBlocksPartners {
            __typename
            title
            content
            label
            partners {
              __typename
              data {
                attributes {
                  __typename
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
            subtitle
            subcontent
            listTitle
            list {
              __typename
              content
            }
            cta {
              label
              type
              href
              style
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
