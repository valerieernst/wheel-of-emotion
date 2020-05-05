import React from 'react';
import Splash from './views/Splash/Splash';
import ResponseDemographic from './views/ResponseDemographic/ResponseDemographic';
import './styles/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";
import SelectDemographics from './views/SelectDemographics/SelectDemographics';
import OwnerResults from './views/OwnerResults/OwnerResults';
import SurveyResults from './views/SurveyResults/SurveyResults';
import ResponseWheel from './views/ResponseWheel/ResponseWheel';

const App = () => {
  return (
      <div className='app'>
        <Router>
            <Switch>
            <Route path="/survey">
                <Survey />
            </Route>
            <Route path="/response">
                <Response />
            </Route>
            <Route path="/">
                <Splash />
            </Route>
            </Switch>
        </Router>
      </div>
  );
}

function Survey() {
  let match = useRouteMatch();

  return (
        <Switch>
            <Route path={`${match.path}/create`}>
                <SelectDemographics />
            </Route>
            <Route path={`${match.path}/:surveyId`}>
                <OwnerResults />
            </Route>
        </Switch>
  );
}

function Response() {
  let match = useRouteMatch();
  const history = useHistory();

  return (
    <Switch>
        <Route path={`${match.path}/survey/:surveyId/wheel`}>
            <ResponseWheel history={history} />
        </Route>
        <Route path={`${match.path}/survey/:surveyId/result`}>
          <SurveyResults />
        </Route>
        <Route path={`${match.path}/survey/:surveyId`}>
            <ResponseDemographic history={history} />
        </Route>
      </Switch>
  );
}

export default App;
