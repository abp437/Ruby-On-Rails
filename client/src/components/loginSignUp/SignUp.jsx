import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

export default class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Card className="col-3 mx-auto mt-5">
          <ul className="row list-unstyled mb-3 loginRegisterTabs">
            <li><a href="javascript:void(0)" className="d-block text-center active">LOGIN</a></li>
            <li><a href="javascript:void(0)" className="d-block text-center">REGISTER</a></li>
          </ul>
          <form className="px-4 d-flex flex-column">
            <TextField label="Email" className="mb-3" />
            <TextField label="Password" />
            <Button variant="contained" className="mt-4 mb-4" color="secondary">REGISTER</Button>
          </form>
        </Card>
      </div>
    );
  }
}
