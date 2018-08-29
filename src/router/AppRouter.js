import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import Home from './../components/Home';
import Portfolio from './../components/Portfolio';
import Contact from './../components/Contact';
import EditPortfolio from "../components/EditPortfolio";


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={EditPortfolio} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;