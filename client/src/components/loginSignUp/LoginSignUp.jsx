import appConstants from 'Components/common/appConstants';
import LoginForm from 'Components/loginSignUp/LoginForm';
import SignUpForm from 'Components/loginSignUp/SignUpForm';
import axios from 'axios';

const { TAB_LOGIN, TAB_SIGN_UP } = appConstants.LOGINSIGNUPTABS;
const { DEAD_LINK } = appConstants;

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TAB_LOGIN,
      cities: []
    }
  }

  componentDidMount() {
    this.transitionFloatingLine();
    axios.get("http://localhost:3000/cities")
      .then(res => res.data)
      .then(response => {
        this.setState({
          cities: response.map((item) => item.city_name)
        })
      })
  }

  componentDidUpdate() {
    this.transitionFloatingLine();
  }

  transitionFloatingLine() {
    const activeEle = document.querySelector('.loginRegisterTabs a.active');
    const floatingLine = document.querySelector('.loginRegisterTabs .floatingLine');
    floatingLine.style.right = `${activeEle.closest('.loginRegisterTabs').offsetWidth - (activeEle.offsetLeft + activeEle.offsetWidth)}px`;
    floatingLine.style.left = `${activeEle.offsetLeft}px`;
  }

  handleClickTabs(tab_value) {
    this.setState({
      activeTab: tab_value,
    });
  }

  handleSignUpFormSubmit(event) {
    event.preventDefault();
    if (!_.isEmpty(this.state.userNameSignUpValue, '') && !_.isEmpty(this.state.emailSignUpValue, '') && !_.isEmpty(this.state.passwordSignUpValue, '')) {
      axios.post("http://localhost:3000/users",
        {
          "username": this.state.userNameSignUpValue,
          "email": this.state.emailSignUpValue,
          "password": this.state.passwordSignUpValue,
          "city_id": 4
        })
        .then(response => response)
        .catch(error => error)
    } else {
      alert('Empty fields.')
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center loginSignBox">
        <div className="loginSignUpWrapper boxShadow-1 borderRadius-2">
          <ul className="nav loginRegisterTabs">
            <li>
              <a
                href={DEAD_LINK}
                className={`d-block text-center ${this.state.activeTab == TAB_LOGIN ? 'fw600 active' : ''}`}
                onClick={() => this.handleClickTabs.call(this, TAB_LOGIN)}>LOGIN</a>
            </li>
            <li>
              <a
                href={DEAD_LINK}
                className={`d-block text-center ${this.state.activeTab == TAB_SIGN_UP ? 'fw600 active' : ''}`}
                onClick={() => this.handleClickTabs.call(this, TAB_SIGN_UP)}>SIGN UP</a>
            </li>
            <span className="floatingLine"></span>
          </ul>
          {
            this.state.activeTab == TAB_LOGIN &&
            <LoginForm />
          }
          {
            this.state.activeTab == TAB_SIGN_UP &&
            <SignUpForm cities={this.state.cities}/>
          }
        </div>
      </div>
    );
  }
}

export default LoginSignUp;
