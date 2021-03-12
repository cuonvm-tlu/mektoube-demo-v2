import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from './Pages/SignIn/index'
import EntityForm from './Pages/Signup/entityForm/index'
import DobForm from './Pages/Signup/dobForm/index'
import OriginForm from './Pages/Signup/originForm/index'
import FromForm from './Pages/Signup/fromForm/index'
import CountryForm from './Pages/Signup/countryForm/index'
import RegionForm from './Pages/Signup/regionForm/index'
import CityForm from './Pages/Signup/cityForm/index'
import SignUp from './Pages/Signup/signup/index'
import HomePage from './Pages/Homepage/index'
import HomePage2 from './Pages/Homepage2/index'
import NotFound from './Pages/404/index'
import PrivateRoute from  './Components/protectedRoute/index'

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/entityForm/" component={EntityForm}/>
      <Route exact path="/dobForm/" component={DobForm}/>
      <Route exact path="/originForm/" component={OriginForm}/>
      <Route exact path="/fromForm/" component={FromForm}/>
      <Route exact path='/countryForm/' component={CountryForm}/>
      <Route exact path='/regionForm/' component={RegionForm}/>
      <Route exact path='/cityForm/' component={CityForm}/>
      <Route exact path='/signup/' component={SignUp}/>
      {/* <Route exact path='/homePage2/' component={HomePage2}/> */}
      <PrivateRoute  path='/homePage/' component={HomePage2}/>
      <Route exact path='/404/' component={NotFound}/>
    </Switch>
 </Router>
  );
}

export default App;
