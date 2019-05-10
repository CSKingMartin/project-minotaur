export const PageShell = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'PageShell',
    className
  ]);

  return (
    <div className={stack}>
    	{children}
    </div>
  );
};

export const PageShell__main = (props) => {
	const { children } = props;

	return (
		<main id="main" className="PageShell__main">
			{children}
		</main>
	);
};

export const PageShell__header = (props) => {
	const { children } = props;

	return (
		<header className="PageShell__header">
			{children}
		</header>
	);
};

export const PageShell__footer = (props) => {
	const { children } = props;

	return (
		<footer className="PageShell__footer">
			{children}
		</footer>
	);
};

/* PROPTYPES */

PageShell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

PageShell__header,
PageShell__footer,
PageShell__main.propTypes = {
	children: PropTypes.node
}

export default PageShell;
