import { useStaticQuery, graphql } from "gatsby"

export const useSiteMarkdown = () => {
  const {allMarkdownRemark} = useStaticQuery(graphql`
  {
  allMarkdownRemark(sort: {fields: frontmatter___title}){
    edges {
      node {
        id
        frontmatter {
          slug
          title
          description
          link
          features
          content
          image {
            name
            childImageSharp {
              fluid(maxWidth: 1920){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}
`)
  return allMarkdownRemark
}
