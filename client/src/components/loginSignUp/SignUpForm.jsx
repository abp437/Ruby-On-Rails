import InputField from 'Components/common/InputField';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameSignUpValue: '',
      emailSignUpValue: '',
      passwordSignUpValue: '',
    }
    this.handleOnChangeSignUpUsername = this.handleOnChangeSignUpUsername.bind(this);
    this.handleOnChangeSignUpEmail = this.handleOnChangeSignUpEmail.bind(this);
    this.handleOnChangeSignUpPass = this.handleOnChangeSignUpPass.bind(this);
  }

  handleOnChangeSignUpUsername(value) {
    this.setState({
      userNameSignUpValue: value
    });
  }

  handleOnChangeSignUpEmail(value) {
    this.setState({
      emailSignUpValue: value
    });
  }

  handleOnChangeSignUpPass(value) {
    this.setState({
      passwordSignUpValue: value
    });
  }
  
  renderCities() {
    if (this.props.cities.length) {
      return this.props.cities.map((item, i) => (
        <option key={i} value={i}>{item}</option>
      ))
    } else {
      return <option>Not Available</option>
    }
  }

  render() {
    return (
      <form>
        <InputField
          type="text"
          labelText="Username"
          handleOnChange={this.handleOnChangeSignUpUsername}
          value={this.state.userNameSignUpValue} />
        <InputField
          type="text"
          labelText="Email"
          handleOnChange={this.handleOnChangeSignUpEmail}
          value={this.state.emailSignUpValue} />
        <InputField
          type="password"
          labelText="Password"
          handleOnChange={this.handleOnChangeSignUpPass}
          value={this.state.passwordSignUpValue} />
        <select className="form-control mt-3 selectCities">
          <option value=''>Select City</option>
          {
            this.renderCities()
          }
        </select>
        <button
          className="btn fw600 signUpBtn"
          onClick={(event) => this.handleSignUpFormSubmit.call(this, event)}>Sign Up</button>
      </form>
    )
  }
}

export default SignUpForm;
