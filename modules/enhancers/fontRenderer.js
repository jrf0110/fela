import createRenderer from '../createRenderer'
import render from '../render'

function fontRenderer(renderer, mountNode) {
  renderer.fontRenderer = createRenderer()

  if (mountNode) {
    render(renderer.fontRenderer, mountNode)
  }

  renderer.renderFont = (family, files, properties) => {
    return renderer.fontRenderer.renderFont(family, files, properties)
  }

  return renderer
}

export default mountNode => renderer => fontRenderer(renderer, mountNode)
