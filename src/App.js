import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import All from "./containers/All/All";
import StarWars from "./containers/StarWars/StarWars";
import JamesBond from "./containers/JamesBond/JamesBond";
import JohnWick from "./containers/JohnWick/JohnWick";
import Humor from "./containers/Humor/Humor";
import Motivation from "./containers/Motivation/Motivation";
import AddQuote from "./containers/AddQuote/AddQuote";
import Editor from "./containers/Editor/Editor";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={All}/>
                        <Route path="/addQuote" component={AddQuote}/>
                        <Route path="/edit/:id" component={Editor}/>
                        <Route path="/starWars" component={StarWars}/>
                        <Route path="/jamesBond" component={JamesBond}/>
                        <Route path="/johnWick" component={JohnWick}/>
                        <Route path="/humor" component={Humor}/>
                        <Route path="/motivation" component={Motivation}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;