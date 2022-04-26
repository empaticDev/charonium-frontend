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

export async function getAllPages() {
	const data = fetchAPI(`
   query {
      pages {
        data {
          id
          attributes {
            title
            slug
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
              ...on ComponentBlocksTextMedia {
                title
                label
                content
                alignment
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
              ...on ComponentBlocksTimeline {
                title
                description
                dates {
                  __typename
                  date
                  events {
                    __typename
                    name
                  }
                }
              }
              ...on ComponentLayoutsFooter {
                SocialTitle {
                  title
                  description
                }
                SocialLinks {
                  links {
                    title
                  }
                }
                NewsletterTitle {
                  title
                  description
                }
                Input {
                  placeholder
                  link
                }
                DownloadsTitle {
                  title
                  description
                }
                Download {
                  title
                  link
                }
              }
            }
          }
        }
      }
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
        data {
          id
          attributes {
            title
            slug
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
              ...on ComponentBlocksTextMedia {
                title
                label
                content
                alignment
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
              ...on ComponentBlocksTimeline {
                title
                description
                dates {
                  __typename
                  date
                  events {
                    __typename
                    name
                  }
                }
              }
              ...on ComponentLayoutsFooter {
                SocialTitle {
                  title
                  description
                }
                SocialLinks {
                  links {
                    title
                  }
                }
                NewsletterTitle {
                  title
                  description
                }
                Input {
                  placeholder
                  link
                }
                DownloadsTitle {
                  title
                  description
                }
                Download {
                  title
                  link
                }
              }
            }
          }
        }
      }
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
