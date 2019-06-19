class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null; // eslint-disable-line
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ])
};

export default Error;
