export function cloneTemplate<T extends Node>(template: HTMLTemplateElement) {
  return template.content.firstElementChild!.cloneNode(true) as T
}

export function render(json: string) {
  return _render(JSON.parse(json)).replaceAll(/\n{3,}/g, '\n\n').trim()
}

function _render(node: CodeMirrorNode): string {
  if (!node) return ''
  if (node.type === 'text') return node.text
  if (node.type === 'hardBreak') return '\n'
  if (node.type === 'paragraph') return (node.content || []).map(_render).join('') + '\n\n'
  if (node.type === 'doc') return (node.content || []).map(_render).join('')
  return ''
}

type CodeMirrorNode = {
  type: 'text' | 'hardBreak' | 'paragraph' | 'doc'
  text: string
  content: CodeMirrorNode[]
}
