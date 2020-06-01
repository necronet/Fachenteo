const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
            query {
                allFile(filter: {relativeDirectory:{eq:"main"}}) {
                edges { node { name id } }}
            }
    `)
    
    result.data.allFile.edges.forEach(({node})=>{
        const nodePath = `photo/${node.name.toLowerCase().replace(/ /g,"-")}`;
        createPage({
            path: nodePath,
            component: path.resolve(`./src/templates/PhotoViewer.js`),
            context: {
                id: node.id
            }

        })
    }); 

  }