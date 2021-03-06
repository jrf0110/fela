# Global & Third-Party Styles

It is a common technique to start the whole styling process by adding some global styles such as CSS resets.<br>
In addition you might also include some third-party styles. To do so, the renderer provides a method called `renderStatic`.
It accepts either a valid CSS string or a basic style object with a custom selector to be rendered into.<br>

### Style Object
If you prefer using style objects, do not forget to provide a selector as well.
> **Note**: Style objects will also be processed with all applied plugins.

```javascript
import { createRenderer } from 'fela'

const renderer = createRenderer()

const styleObject = {
  fontSize: '12px',
  width: '100%',
  display: 'flex'
}

renderer.renderStatic(styleObject, 'html,body,#app')
```

### CSS String
Rendering CSS strings is especially helpful if you want to use third-party or legacy styles written in CSS.<br>
This method is **not recommended as no further processing with plugins** is done. It should only be used to insert large third-party CSS files.

```javascript
import { createRenderer } from 'fela'

const renderer = createRenderer()

renderer.renderStatic('*{margin:0;padding:0}')
```

Using [ECMAScript 2015 template strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings) we can even write multi-line CSS styles. <br>This is helpful if we want to copy large CSS files directly into our JavaScript file.
```javascript
import { createRenderer } from 'fela'

const renderer = createRenderer()

renderer.renderStatic(`
  * {
    margin: 0;
    padding: 0
  }

  body, html {
    width: 100%;
    height: 100%
  }

  div {
    display: -webkit-flex;
    display: -moz-flex;
    display: flex
  }
`)
```

### Existing CSS Files
We can even directly import and use existing CSS files.<br>

> **Note**: We still need a tool like [Webpack](https://github.com/webpack/webpack) combined with [css-loader](https://github.com/webpack-contrib/css-loader) to import CSS files within JavaScript files.

```javascript
import css from 'react-aspect-ratio/aspect-ratio.css';
import { createRenderer } from 'fela'

const renderer = createRenderer()

renderer.renderStatic(css.toString())
```

<br>

---

### Related
* [API reference - `Renderer.renderStatic`](../api/fela/Renderer.md#renderstaticstyle-selector)
