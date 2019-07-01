import ReactResizeDetector from 'react-resize-detector';
import Editor from '@molecules/Editor/';
import Wrapper from '@atoms/Wrapper';

/* local partials */
import Actions from './Actions';
import Code from './Code';
import Editors from './Editors';
import Preview from './Preview';
import Resizer from './Resizer';

class Specimen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullWidth: false,
      codeView: 'react',
      maxWidth: 1024, // defaults to this
      previewHeight: 150,
      screenWidth: 1440
    };

    this.handleCodeViewReact = this.handleCodeViewReact.bind(this);
    this.handleCodeViewHtml = this.handleCodeViewHtml.bind(this);
    this.handlePageResize = this.handlePageResize.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  handleCodeViewReact() {
    this.setState({ codeView: 'react' });
  }

  handleCodeViewHtml() {
    this.setState({ codeView: 'html' });
  }

  handleFullWidth() {
    const { isFullWidth } = this.state;
    this.setState({
      isFullWidth: !isFullWidth
    });
  }

  handlePageResize(width) {
    this.setState({
      screenWidth: width
    });
  }

  handleResize({ width, height }) {
    if (width !== undefined) this.setState({ maxWidth: width });
    if (height !== undefined) this.setState({ previewHeight: height });
  }

  renderQuickEditors() {
    /* eslint-disable-next-line */
    if (!this.props.quickEditors) return;

    const { quickEditors } = this.props;
    const editorList = Array.isArray(quickEditors)
      ? quickEditors
      : Object.keys(quickEditors).map((name) => ({
        name,
        options: quickEditors[name]
      }));

    const returnList = editorList.map((editor) => (
      <Editor
        key={editor.name}
        name={editor.name}
        options={editor.options}
      />
    ));

    /* eslint-disable-next-line */
    return returnList;
  }

  render() {
    const {
      Head,
      Editors: EditorContent,
      hideResizer,
      hideCode,
      darkMode,
      children
    } = this.props;
    const {
      maxWidth,
      previewHeight,
      screenWidth,
      codeView
    } = this.state;

    return (
      <div className="Specimen" data-specimen>
        <ReactResizeDetector handleWidth onResize={this.handlePageResize} />

        <Editors>
          {EditorContent && <EditorContent />}
          {this.renderQuickEditors()}
        </Editors>

        {
          !hideResizer
          && (
            <Resizer
              handleResize={this.handleResize}
              maxWidth={maxWidth}
              screenWidth={screenWidth}
              previewHeight={previewHeight}
            />
          )
        }
        <Preview
          Head={Head}
          handleResize={this.handleResize}
          maxWidth={maxWidth}
          screenWidth={screenWidth}
          hideResizer={hideResizer}
          darkMode={darkMode}
          data-specimen-preview
        >
          {children}
        </Preview>

        {
          !hideCode
          && (
            <Wrapper data-specimen-code>
              <Actions
                view={codeView}
                handleCodeViewReact={this.handleCodeViewReact}
                handleCodeViewHtml={this.handleCodeViewHtml}
              />
              <Code view={codeView}>{children}</Code>
            </Wrapper>
          )
        }
      </div>
    );
  }
}

Specimen.propTypes = {
  Head: PropTypes.any,
  Editors: PropTypes.any,
  quickEditors: PropTypes.object,
  hideResizer: PropTypes.bool,
  hideCode: PropTypes.bool,
  darkMode: PropTypes.bool,
  children: PropTypes.any
};

export default Specimen;
