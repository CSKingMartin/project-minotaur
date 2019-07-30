import registry from '@catalog/registry.json';
import TextArea from '@atoms/TextArea';
import Toggle from '@molecules/Toggle';
import Select from '@molecules/Select';
import Input from '@molecules/Input';
import Frame from './Frame'; // local Frame partial
import Resizer from './Resizer'; // local Resizer partial
import React, {useRef} from 'react';

export class PropsTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableProps : {},
      queryProps : registry[this.props.query].props,
    }
  }

  componentDidMount(){
    this.assignTableProps();
  }

  assignTableProps = () => {
    Object.keys(registry[this.props.query].props).map(name => {
      const copyProps = registry[this.props.query].props;
      const copyDefaultProps = registry[this.props.query].defaultProps;

      let emptyObject = {}

      if(copyDefaultProps[name]){
        let currentState = this.state.tableProps;
        emptyObject = copyDefaultProps[name];
        currentState[name] = emptyObject;
        this.setState({ tableProps: currentState });
      }
      else{
        let currentState = this.state.tableProps;
        emptyObject = copyDefaultProps[name];
        currentState[name] = emptyObject;
        this.setState({ tableProps: currentState });
      }
    })

    this.props.setPropState(this.state.tableProps);
  }

  getPropType = (prop) => {
    if (typeof(prop.type) === 'object') {
      let typeKey = Object.keys(prop.type);
      return typeKey;
    }
    else return prop.type;
  }

  handleArray = (event, propName) => {
    const copyProps = this.state.tableProps;
    const inputValue = event.target.value;
    const optionsArray = inputValue.split(",");
    const optionsArrayRefined = this.createOptions(optionsArray);
    copyProps[propName] = optionsArrayRefined;
    this.setState({ tableProps: copyProps });
    this.props.setPropState(this.state.tableProps)
  }

  handleChange = (event, propName) => {
    const copyProps = this.state.tableProps;
    copyProps[propName] = event.target.value;
    this.setState({ tableProps: copyProps });
    this.props.setPropState(this.state.tableProps)
  }

  handleClick = (event, propName) => {
    const copyProps = this.state.tableProps;
    copyProps[propName] = event.target.checked;
    this.setState({ tableProps: copyProps });
    this.props.setPropState(this.state.tableProps)
  }

  handleSelect = (value, propName) => {
    const copyProps = this.state.tableProps;
    copyProps[propName] = value;
    this.setState({ tableProps: copyProps });
    this.props.setPropState(this.state.tableProps)
  }

  selectInputForPropType = (propType) => {
    let props = this.state.tableProps;
    let type = propType.type;
    let name = propType.name;

    if (typeof(type) !== 'object') {
      switch(type){
        case 'array' :
          return <input
                  type="text"
                  name={name}
                  placeholder={props[name]}
                  onChange={() => this.handleArray(event, propType.name)}
                  />
        case 'string':
          return <input
                  type="text"
                  name={name}
                  placeholder={props[name]}
                  onChange={() => this.handleChange(event, propType.name)}
                  />;
        case 'string.isRequired':
          return <input
                  type="text"
                  name={name}
                  placeholder={props[name]}
                  onChange={() => this.handleChange(event, propType.name)}
                  />;
        case 'node' :
          return <input
                  type="text"
                  name={name}
                  placeholder={props[name]}
                  onChange= {() => this.handleChange(event, name)}
                  />;
        case 'node.isRequired' :
          return <input
                  type="text"
                  name={name}
                  placeholder={props[name]}
                  onChange= {() => this.handleChange(event, name)}
                />;
        case 'number':
          return <input
                  type="number"
                  name={name}
                  placeholder={props[name]}
                  onChange={() => this.handleChange(event, propType.name)}
                  />;
        case 'bool':
          return <Toggle
                  type="checkbox"
                  name={name}
                  isActive={props[name]}
                  onClick={() => this.handleClick(event, name)}
                  />;
        case 'object' :
          return "object";
        default :
          return "default return";
      }
    }
    return <Select options={this.selectOptions(propType.type)} onSelect={this.handleSelect} propName={name}/>
  }

  selectOptions = (type) => {
    const options = Object.values(type)[0];
    const optionArray = [];
    options.map(option => {
      optionArray.push({value: option, label: option});
    })

    return optionArray;
  }

  createOptions = (arr) => {

    const optionArray = [];
    arr.map(option => {
      optionArray.push({value: option, label: option});
    })

    return optionArray;
  }

  mapGetProps = () => {
    return Object.keys(this.state.queryProps).map((prop,index) => {
      return (
        <div key={index} className="wrapper">
          <span className="key-column">{prop}: </span>
          <span className="value-column" >{this.getPropType(this.state.queryProps[prop])}</span>
          <span className="input-column" >{this.selectInputForPropType(this.state.queryProps[prop])}</span>
        </div>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Resizer>
          <Frame component={this.props.query} propState={this.props.propState}/>
        </Resizer>
        <div className="Specimen2">
          {this.mapGetProps()}
        </div>
      </React.Fragment>
    );
  }

};

export default PropsTable;
