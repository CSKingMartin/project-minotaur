import pretty from 'pretty';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import Dom from 'react-dom/server';
import reactElementToString from 'react-element-to-jsx-string';

const getTagName = (element) => {
  if (typeof element === 'string') return element
  if (typeof element.type === 'string') return element.type
  if (element.type.displayName) return element.type.displayName
  if (element.type.name) return element.type.name
  if (element.props && element.props.tagName) return element.props.tagName
  return 'unknown-element'
}

const renderReactCode = (component) => {
  if (Array.isArray(component)) {
    return component.map(renderReactCode).join('\n')
  }

  return reactElementToString(component, {
    displayName: getTagName,
    showDefaultProps: false,
    useFragmentShortSyntax: false
  })
}

const renderHtmlCode = (component) =>
  Dom.renderToStaticMarkup(component)

const getChildren = (children, context) =>
  typeof children === 'function' ? children(context) : children

const CodeView = ({ type, className, children }) =>
  <pre className={utilities.createClassStack(['Code__view', type && `language--${type}`, className])}>
    <code dangerouslySetInnerHTML={{ __html: children }} />
  </pre>

CodeView.propTypes = {
  type: PropTypes.oneOf(['react', 'html']),
  className: PropTypes.string,
  children: PropTypes.node
}

const Code = ({
  view = 'code',
  children
}) => (
  <StatefulContext.Consumer>
    {
      context => (
        <div className="Code">
          {
            view === 'react' &&
            <CodeView type="react" className="Code--react">
              {
                Prism.highlight(
                  renderReactCode(getChildren(children, context)),
                  Prism.languages.jsx
                )
              }
            </CodeView>
          }

          {
            view === 'html' &&
            <CodeView type="html" className="Code--html">
              {
                Prism.highlight(
                  pretty(
                    renderHtmlCode(getChildren(children, context))
                  ),
                  Prism.languages.html
                )
              }
            </CodeView>
          }
        </div>
      )
    }
  </StatefulContext.Consumer>
)

Code.propTypes = {
  view: PropTypes.oneOf(['react', 'html']),
  children: PropTypes.any
}

export default Code;
