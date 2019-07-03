import PropTypes from 'prop-types';
import React from 'react';

class Resizer extends React.Component {
  handleResize(width) {
    const { handleResize } = this.props;

    handleResize({ width });
  }

  renderWidth(width, name) {
    const isInfinity = width === Infinity;
    const { screenWidth } = this.props;

    return (
      <button
        onClick={() => this.handleResize(width)}
        className="Resizer__button"
        type="button"
        style={{
          display: isInfinity || screenWidth > width + 32 ? 'block' : 'none',
          maxWidth: isInfinity ? undefined : `${width}px`,
          zIndex: isInfinity ? 100 : 10000 - width
        }}
      >
        {name}
      </button>
    );
  }

  render() {
    const { maxWidth, previewHeight } = this.props;

    return (
      <div className="Resizer">
        <div
          className="Resizer__current"
          style={{ maxWidth: maxWidth === Infinity ? undefined : `${maxWidth}px` }}
        >
          <span>{ maxWidth === Infinity ? 'Full Width' : `${maxWidth}px` }</span>
          &nbsp; &times; &nbsp;
          <span>{`${previewHeight}px`}</span>
        </div>

        <div className="Resizer__button-wrapper">
          {this.renderWidth(Infinity, 'Full Width')}
          {this.renderWidth(2560, '4k – 2560px')}
          {this.renderWidth(1920, 'Desktop – 1920px')}
          {this.renderWidth(1440, 'Laptop Large – 1440px')}
          {this.renderWidth(1280, 'Laptop Medium – 1280px')}
          {this.renderWidth(1024, 'Laptop – 1024px')}
          {this.renderWidth(768, 'Tablet – 768px')}
          {this.renderWidth(425, 'Mobile Large – 425px')}
          {this.renderWidth(375, 'Mobile Medium – 375px')}
          {this.renderWidth(320, 'Mobile Small – 320px')}
        </div>
      </div>
    );
  }
}

Resizer.propTypes = {
  maxWidth: PropTypes.number,
  screenWidth: PropTypes.number,
  previewHeight: PropTypes.number,
  handleResize: PropTypes.func
};

export default Resizer;
