import React from 'react';
import {Route, Link} from 'react-router-dom'

/* HOMEPAGE */

import Homepage from './Homepage/Homepage';

/* CHATBOT */

import Chatbot from 'react-chatbot-kit';
import config from "./Chatbot/config";
import ActionProvider from "../src/Chatbot/ActionProvider"
import MessageParser from "../src/Chatbot/MessageParser"

/* TRANSFERT STEPS */

import Step1 from '../src/Transfer/Step1/Step1';
import Step2 from '../src/Transfer/Step2/Step2';
import Step3 from '../src/Transfer/Step3/Step3';
import Step4 from '../src/Transfer/Step4/Step4';
import Step5 from '../src/Transfer/Step5/Step5';
import Step6 from '../src/Transfer/Step6/Step6';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Homepage} />
      <Route exact path = "/Chatbot" component = {Chatbot}>
        <Chatbot 
          config = {config}
          actionProvider = {ActionProvider}
          messageParser = {MessageParser}
          />
      </Route>
      <Route exact path = "/Step1" component = {Step1} />
      <Route exact path = "/Step2" component = {Step2} />
      <Route exact path = "/Step3" component = {Step3} />
      <Route exact path = "/Step4" component = {Step4} />
      <Route exact path = "/Step5" component = {Step5} />
      <Route exact path = "/Step6" component = {Step6} />
    </div>
  );
}

export default App;