import PropTypes from 'prop-types';
import { getClassSet } from 'Components/common/Utility';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isInputFocused: false,
    }
    this.inputEle = React.createRef();
  }

  componentDidMount() {
    this.inputEle.current.value = this.props.value
  }

  handleInputFocused(flag) {
    this.setState({
      isInputFocused: flag,
    })
  }

  render() {
    const { handleOnChange, inputId, type, className, labelText, value } = this.props;
    let textField = getClassSet({
      textField: true,
      hasValue: value !== "",
      isInputFocused: this.state.isInputFocused
    });

    return (
      <div className={textField}>
        <input
          ref={this.inputEle}
          type={type}
          className={className}
          onFocus={this.handleInputFocused.bind(this, true)}
          onBlur={this.handleInputFocused.bind(this, false)}
          onChange={(event) => handleOnChange(event.target.value)} />
        <label className="m-0 floatingLabel">{labelText}</label>
        <span className="expandLine"></span>
      </div>
    )
  }
}

InputField.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
}

InputField.defaultProps = {
  className: null,
  labelText: '',
  value: '',
  type: 'text',
  handleOnChange: () => { },
}

export default InputField;
