import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
query MyQueryName {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark( sort: {
    fields: [frontmatter__date],
    order: DESC
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MM-DD-YYYY")
        }
        fields {
          slug
        }
        html excerpt
      }
    }
  }
}
`
