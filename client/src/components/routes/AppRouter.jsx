import ReactDOM from 'react-dom';
import SignUp from 'Components/loginSignUp/SignUp';
import PageNotFound from 'Components/PageNotFound';
import UsersApp from 'Components/UsersApp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/users-app" component={UsersApp} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('usersApp')
);

export default AppRouter;
