import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <div>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing post={node} />
    })}
  </div>
)

const PostListing = () => <div>hello</div>

export default IndexPage

export const query = graphql`
query MyQueryName {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MM-DD-YYYY")
        }
        html
      }
    }
  }
}
`
