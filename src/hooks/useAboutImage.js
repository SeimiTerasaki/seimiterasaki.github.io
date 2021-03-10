import { useStaticQuery, graphql } from "gatsby"

export const useAboutImage = () => {
  const {allFile} = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "aboutme-image"}}) {
        edges {
          node {
            name
            childImageSharp {
                fluid(maxWidth: 589){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
          }
        }
      }
  }
`)
  return allFile
}