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
    const { isLoaded, users } = this.state;
    if (isLoaded) {
      return (
        <div className='container'>
          <div className='row'>
            <ul className='list-unstyled col-8'>
              <li className='d-flex mb-3'>
                <span className='font-weight-bold col-4'>Username</span>
                <span className='font-weight-bold col-4'>Email</span>
              </li>
              {
                users.map((user, i) => {
                  return (
                    <li key={i} className='mb-3 d-flex align-items-center'>
                      <span className='col-4 text-truncate'>{user.username}</span>
                      <span className='col-4 text-truncate'>{user.email}</span>
                      <button type='button' className='col-4 btn btn-primary'>Show Details</button>
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
