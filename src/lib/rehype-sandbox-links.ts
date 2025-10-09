import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

const rehypeSandboxLinks = () => (tree: Root) => {
  visit(tree, 'element', node => {
    const href = node.properties?.href
    if (typeof href === 'string' && href.includes('sandbox.game')) {
      node.properties.target = '_blank'
      node.properties.rel = ['noopener', 'noreferrer']
    }
  })
}

export default rehypeSandboxLinks
