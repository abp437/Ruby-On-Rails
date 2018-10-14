import InputField from 'Components/common/InputField';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      userNameValue: 'Hitesh',
      passwordValue: 'Hitesh123',
    }
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this);
    this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
  }

  handleOnChangeUsername(value) {
    this.setState({
      userNameValue: value
    });
  }

  handleOnChangePassword(value) {
    this.setState({
      passwordValue: value
    });
  }

  render() {
    return (
      <form>
        <InputField
          type="text"
          labelText="Username/Email"
          handleOnChange={this.handleOnChangeUsername}
          value={this.state.userNameValue} />

        <InputField
          type="password"
          labelText="Password"
          handleOnChange={this.handleOnChangePassword}
          value={this.state.passwordValue} />
        <button className="btn btn-primary">Login</button>
      </form>
    )
  }
}

export default LoginForm;
