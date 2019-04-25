import Loadable from 'react-loadable';

const LoadingComponent = (props) => {
  if (props.error) {
    // When the loader has errored
    return <div>Error! <button onClick={props.retry}>Retry</button></div>
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>
  } else {
    // When the loader has just started
    return null
  }
}

class Viewer extends React.Component {
	renderLoader (children) {
		const ViewerComponent = Loadable({
			loader: children,
			loading: () => <LoadingComponent />
		})

		return ViewerComponent;
	}

	render () {
		if (typeof this.props.children === 'function') {

			const ViewerComponent = this.renderLoader(this.props.children);
			return <ViewerComponent />
		}
		return this.props.children;
	}
}

Viewer.defaultProps = {
	children: <p>No entry for viewer!</p>
}

Viewer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
}

export default Viewer;
