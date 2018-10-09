import axios from 'axios';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      selectedUser: {}
    };
    this.getUserDetails = this.getUserDetails.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedUserPassed !== prevProps.selectedUserPassed) {
      this.getUserDetails();
    }
  }

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails() {
    axios.get(`http://localhost:3000/users/${this.props.selectedUserPassed}`)
      .then(res => res.data)
      .then(result => {
        this.setState({
          isLoaded: true,
          selectedUser: result
        });
      });
  }

  render() {
    const { selectedUser, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className='col-7'>
          <h1>Details:</h1>
          <ul className='list-unstyled'>
            <li>
              <span className='font-weight-bold'>Username: </span>
              <span>{selectedUser.username}</span>
            </li>
            <li>
              <span className='font-weight-bold'>Email: </span>
              <span>{selectedUser.email}</span>
            </li>
            <li>
              <span className='font-weight-bold'>City: </span>
              <span>{selectedUser.city_id === null ? 'Not Selected Yet.' : selectedUser.city_id}</span>
            </li>
          </ul>
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }
  }
};
