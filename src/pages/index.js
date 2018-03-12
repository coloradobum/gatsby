import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <div>
    <h1>Hello people</h1>
    <Img sizes={data.background.sizes} />
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
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
  background: imageSharp(id: {regex: "/bg.jpeg/"}) {
    sizes(maxWidth: 1240) {
      ...GatsbyImageSharpSizes
    }
  }
}
`
