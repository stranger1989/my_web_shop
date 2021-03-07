const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    {
      allContentfulProduct {
        nodes {
          images {
            file {
              url
            }
          }
          janCode
          name
          description {
            id
            description
          }
          size
          weight
          createdAt
          releaseDate
          price
          category
          brand
        }
      }
    }
  `)
  const productTemplate = path.resolve(`src/templates/product.tsx`)
  queryResults.data.allContentfulProduct.nodes.forEach(node => {
    createPage({
      path: `/products/${node.janCode}`,
      component: productTemplate,
      context: {
        product: node,
      },
    })
  })
}
