import ReactDOM from 'react-dom';
import axios from 'axios';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/users')
    .then(res =>  res.data)
    .then(result => {
      this.setState({
        users: result,
        isLoaded: true
      });
    });
  }

  render() {
    const { isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className='container'>
          <div className='row'>
            <ul className='list-unstyled col-6'>
              <li className='row'>
                <span className='font-weight-bold col-6'>Username</span>
                <span className='font-weight-bold col-6'>Email</span>
              </li>
              {
                this.state.users.map((user, i) => {
                  return (
                    <li key={i} className='row'>
                      <span className='col-6'>{user.username}</span>
                      <span className='col-6'>{user.email}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('usersApp')
);
