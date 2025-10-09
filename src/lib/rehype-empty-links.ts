import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

const rehypeEmptyLinks = () => (tree: Root) => {
  visit(tree, 'element', node => {
    if (node.tagName === 'a' && node.properties?.href && node.children && node.children.length === 0) {
      node.children = [{ type: 'text', value: node.properties.href as string }]
    }
  })
}

export default rehypeEmptyLinks
