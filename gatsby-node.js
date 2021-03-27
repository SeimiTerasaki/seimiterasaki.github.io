
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      slug: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPage = path.resolve('./src/templates/projectPage.js')        

  return graphql(`
  {
    allMarkdownRemark{
      edges {
        node {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  }
    `).then( result => {

      if(result.error){
        throw new Error(result.errors)
      }

      const Project = result.data.allMarkdownRemark.edges

      Project.forEach(({ node }) => {
        node.url = `projects/${node.frontmatter.slug}/`

      createPage({
          path: node.url,
          component:  projectPage,
          context: {
            slug: node.frontmatter.slug,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules'],
      alias: {
        TweenLite: 'gsap/src/minified/TweenLite.min.js',
        TweenMax: 'gsap/src/minified/TweenMax.min.js',
        TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
        TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
      },
    },
  })
}