import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Menu } from './components/common';
import { Page } from './components/page';
import { Home } from './components/home';
import { Form } from './components/form';
import { Guests } from './components/guests';
import { Invite } from './components/email-templates/Invite';
import './App.css'

function App() {

  const title= "Charlie and Jack's Wedding";

  useEffect(() => {
    document.title = title;


  }, [title]);

  return (
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '100%' }}>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/Success"><Home message="You're all done!"/></Route>
            <Route path="/Form/:id" children={<Form />} />
            <Route path="/Guests" children={<Guests />} />
            <Route path="/Invite" children={<Invite />} />
            <Route path="/:page" children={<Page />} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
