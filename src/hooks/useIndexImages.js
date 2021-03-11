import { useStaticQuery, graphql } from "gatsby"

export const useIndexImages = () => {
  const {allFile} = useStaticQuery(graphql`
  {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "main"}}) {
        edges {
          node {
            name
            childImageSharp {
                fluid(maxWidth: 2000){
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