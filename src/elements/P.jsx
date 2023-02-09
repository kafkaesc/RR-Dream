export default function P(props) {
	const classNames = props.className ? 'mb-4 ' + props.className : 'mb-4';
	return <p {...props} className={classNames}></p>;
}
