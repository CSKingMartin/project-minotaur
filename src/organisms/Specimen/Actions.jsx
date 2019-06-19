const Actions = ({
  view,
  handleCodeViewReact,
  handleCodeViewHtml
}) => (
  <div className="Actions">
    <div>
      <button
        onClick={handleCodeViewReact}
        className={utilities.createClassStack([
          'Actions__button', 'Actions__button--left', view === 'react' && 'is-active'
        ])}
        type="button"
      >
        React
      </button>
      <button
        onClick={handleCodeViewHtml}
        className={utilities.createClassStack([
          'Actions__button', 'Actions__button--right', view === 'html' && 'is-active'
        ])}
        type="button"
      >
        HTML
      </button>
    </div>
    <div>
      <button type="button">Copy Code</button>
    </div>
  </div>
);

Actions.propTypes = {
  view: PropTypes.string.isRequired,
  handleCodeViewReact: PropTypes.func,
  handleCodeViewHtml: PropTypes.func
};

export default Actions;
