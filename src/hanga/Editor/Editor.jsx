import Select from './Select'
import Text from './Text'
import Toggle from './Toggle'

const Editor = ({ name, options, defaultValue, ...props }) => {
  if (Array.isArray(options)) {
    return (
      <Select name={name} options={options} defaultValue={defaultValue || options[0]} {...props} />
    )
  } else if (typeof options === 'boolean' || typeof defaultValue === 'boolean') {
    return (
      <Toggle name={name} defaultValue={defaultValue || options} {...props} />
    )
  } else {
    return (
      <Text name={name} defaultValue={defaultValue || options} {...props} />
    )
  }
}

Editor.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.oneOf([PropTypes.string, PropTypes.bool])
}

Editor.Select = Select
Editor.Text = Text
Editor.Toggle = Toggle

export default Editor
