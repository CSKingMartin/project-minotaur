export const Button = (props) => {
	const = {
		tagName = Tag,
		className,
		variant,
		href,
		disabled,
		children,
		...rest
	}	= props;

	const stack = utilitities.createClassStack([
		'Button',
		`Button--${variant}`,
		href && 'Button--link',
		className
	]);

	const Tag = href ? 'a' : tagName;

	return (
		<Tag className={stack} {...rest}>{children}</Tag>
	)
};

Button.defaultProps = {
	tagName: 'button',
	variant: 'default'
};

Button.propTypes = {
	tagName: PropTypes.string,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'secondary']),
	href: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node
};

export default Button;
