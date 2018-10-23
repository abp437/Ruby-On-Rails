import ReactDOM from 'react-dom';
import _ from 'lodash';
import LoginSignUp from 'Components/loginSignUp/LoginSignUp';
import PageNotFound from 'Components/PageNotFound';
import UsersApp from 'Components/UsersApp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginSignUp} />
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
