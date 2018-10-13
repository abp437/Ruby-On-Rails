import axios from 'axios';
import UserDetails from 'Components/UserDetails';

class UsersApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
      selectedUser: 1
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
      .then(res => res.data)
      .then(result => {
        this.setState({
          users: result,
          isLoaded: true
        });
      });
  }

  selectUser(userId) {
    this.setState({
      selectedUser: userId
    });
  }

  render() {
    const { selectedUser, isLoaded, users } = this.state;
    if (isLoaded) {
      return (
        <div className='container'>
          <div className='row'>
            <ul className='list-unstyled col-5'>
              <li className='d-flex mb-3'>
                <span className='font-weight-bold col-4'>Users:</span>
              </li>
              {
                users.map((user, i) => {
                  return (
                    <li key={i} className='mb-3 d-flex align-items-center'>
                      <span className='col-4 text-truncate'>{user.username}</span>
                      <button type='button' className='col-4 btn btn-outline-primary btn-sm' onClick={this.selectUser.bind(this, user.id)} >Show Details</button>
                    </li>
                  )
                })
              }
            </ul>
            <UserDetails selectedUserPassed={selectedUser} />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

export default UsersApp;
