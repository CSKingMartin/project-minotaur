import registry from '@catalog/registry.json';
import TextArea from '@molecules/TextArea';
import Toggle from '@molecules/Toggle';
import Select from '@molecules/Select';
import Input from '@molecules/Input';
import Table from '@atoms/Table';
import React, {useRef} from 'react';

const PropsTable__input = (props) => {
  const {
    placeholder,
    onChange,
    ...rest
  } = props;

  return (
    <Input onChange={onChange} placeholder={placeholder} {...rest} />
  );
};

const PropsTable__textarea = (props) => {
  const {
    placeholder,
    onChange,
    ...rest
  } = props;

  return (
    <TextArea placeholder={placeholder} onChange={onChange} {...rest} />
  );
};

const PropsTable__select = (props) => {
  const {
    unformattedOptions,
    onChange,
    ...rest
  } = props;

  const options = [];

  unformattedOptions.map(option => {
    const entry = {};

    entry.label = option;
    entry.value = option;

    options.push(entry);
  });

  return (
    <Select onChange={onChange} options={options} />
  );
};

const PropsTable__toggle = (props) => {
  const {
    onChange,
    ...rest
  } = props;

  const handle = () => {
    console.log('fucky');
  }

  return (
    <Toggle onChange={onChange} />
  );
};

const PropsTable__row = (props) => {
  const {
    entry,
    updateProps,
    ...rest
  } = props;

  const onChange = (e) => updateProps(entry.name, e.target.value);

  const handleEditor = (name, type) => {
    if (name === 'children') {
      return <PropsTable__textarea onChange={(e) => updateProps(entry.name, e.target.value)} placeholder={entry.value} />;
    }

    if (type.oneOf) { return <PropsTable__select onChange={onChange} unformattedOptions={type.oneOf} /> };

    switch(type) {
      case 'string':
        return <PropsTable__input onChange={(e) => updateProps(entry.name, e.target.value)} placeholder={entry.value} />
      case 'bool':
        return <PropsTable__toggle onChange={(bool) => updateProps(entry.name, bool)} />
      default:
        return <p>{entry.value}</p>
    }
  };

  return (
    <Table.Row className="PropsTable__row">
      <Table.Data>{entry.name}</Table.Data>
      <Table.Data>{typeof entry.type !== 'object' ? entry.type : 'one of' }</Table.Data>
      <Table.Data>
        {handleEditor(entry.name, entry.type)}
      </Table.Data>
    </Table.Row>
  );
};

export class PropsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.assignTableProps();
  // }

  // assignTableProps() {
  //   Object.keys(registry[this.props.query].props).map(name => {
  //     const copyProps = registry[this.props.query].props;
  //     const copyDefaultProps = registry[this.props.query].defaultProps;

  //     let emptyObject = {}

  //     if(copyDefaultProps[name]){
  //       let currentState = this.state.tableProps;
  //       emptyObject = copyDefaultProps[name];
  //       currentState[name] = emptyObject;
  //       this.setState({ tableProps: currentState });
  //     }
  //     else{
  //       let currentState = this.state.tableProps;
  //       emptyObject = copyDefaultProps[name];
  //       currentState[name] = emptyObject;
  //       this.setState({ tableProps: currentState });
  //     }
  //   })

  //   this.props.setPropState(this.state.tableProps);
  // }

  // getPropType(prop) {
  //   if (typeof(prop.type) === 'object') {
  //     let typeKey = Object.keys(prop.type);
  //     return typeKey;
  //   }
  //   else return prop.type;
  // }

  // handleArray(event, propName) {
  //   const copyProps = this.state.tableProps;
  //   const inputValue = event.target.value;
  //   const optionsArray = inputValue.split(",");
  //   const optionsArrayRefined = this.createOptions(optionsArray);
  //   copyProps[propName] = optionsArrayRefined;
  //   this.setState({ tableProps: copyProps });
  //   this.props.setPropState(this.state.tableProps)
  // }

  // handleChange(event, propName) {
  //   const copyProps = this.state.tableProps;
  //   copyProps[propName] = event.target.value;
  //   this.setState({ tableProps: copyProps });
  //   this.props.setPropState(this.state.tableProps)
  // }

  // handleClick(event, propName) {
  //   const copyProps = this.state.tableProps;
  //   copyProps[propName] = event.target.checked;
  //   this.setState({ tableProps: copyProps });
  //   this.props.setPropState(this.state.tableProps)
  // }

  // handleSelect(value, propName) {
  //   const copyProps = this.state.tableProps;
  //   copyProps[propName] = value;
  //   this.setState({ tableProps: copyProps });
  //   this.props.setPropState(this.state.tableProps)
  // }

  // selectInputForPropType(propType) {
  //   let props = this.state.tableProps;
  //   let type = propType.type;
  //   let name = propType.name;

  //   if (typeof(type) !== 'object') {
  //     switch(type){
  //       case 'array' :
  //         return <input
  //                 type="text"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange={() => this.handleArray(event, propType.name)}
  //                 />
  //       case 'string':
  //         return <input
  //                 type="text"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange={() => this.handleChange(event, propType.name)}
  //                 />;
  //       case 'string.isRequired':
  //         return <input
  //                 type="text"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange={() => this.handleChange(event, propType.name)}
  //                 />;
  //       case 'node' :
  //         return <input
  //                 type="text"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange= {() => this.handleChange(event, name)}
  //                 />;
  //       case 'node.isRequired' :
  //         return <input
  //                 type="text"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange= {() => this.handleChange(event, name)}
  //               />;
  //       case 'number':
  //         return <input
  //                 type="number"
  //                 name={name}
  //                 placeholder={props[name]}
  //                 onChange={() => this.handleChange(event, propType.name)}
  //                 />;
  //       case 'bool':
  //         return <Toggle
  //                 type="checkbox"
  //                 name={name}
  //                 isActive={props[name]}
  //                 onClick={() => this.handleClick(event, name)}
  //                 />;
  //       case 'object' :
  //         return "object";
  //       default :
  //         return "default return";
  //     }
  //   }
  //   return <Select options={this.selectOptions(propType.type)} onSelect={this.handleSelect} propName={name}/>
  // }

  // selectOptions(type) {
  //   const options = Object.values(type)[0];
  //   const optionArray = [];
  //   options.map(option => {
  //     optionArray.push({value: option, label: option});
  //   })

  //   return optionArray;
  // }

  // createOptions(arr) {
  //   const optionArray = [];
  //   arr.map(option => {
  //     optionArray.push({value: option, label: option});
  //   })

  //   return optionArray;
  // }

  render() {
    const {
      componentProps,
      sendProps,
      ...rest
    } = this.props;

    const updateProps = (name, value) => {
      console.log(name, value);
      const newObject = JSON.parse(JSON.stringify(componentProps));
      newObject[name].value = value;
      sendProps(newObject);
    };

    return (
      <Table {...rest}>
        <Table.Head>
          <Table.Row>
            <Table.Header>Name</Table.Header>
            <Table.Header>Type</Table.Header>
            <Table.Header>Value</Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {Object.keys(componentProps).map((entry, i) => {
            if (entry !== 'href') {
              return <PropsTable__row updateProps={updateProps} key={i} entry={componentProps[entry]} />
            }
          })}
        </Table.Body>
      </Table>
    );
  };
};

PropsTable.propTypes = {
  defaultProps: PropTypes.object
};

export default PropsTable;
