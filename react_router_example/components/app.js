import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';
import Repo from '../components/repo';


const App = () => (
    <HashRouter>
        <div>
            <h1>React Router Example</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/repo/Repo_Noah">Repo_Noah</Link></li>
                <li><Link to="/repo/Repo_Allie">Repo_Allie</Link></li>
            </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/repo/:name" component={Repo}/>
        </div>
    </HashRouter>
);

export default App;

//Please Notice the route of {Home}, there is a "exact" in front of path.
//That means {Home} is activated only when the url is "http://localhost:8008/#/" .
//Without the "exact", even the url like "http://localhost:8008/#/about" will activate {Home} too, both {About} & {Home} will show in screen.
//Because by default, react-router will activate the parent component when the child component is activated.

//And the react-router 3.0(3.0-) is very different from 4.0(4.0+)
//3.0(3.0-) is {react-router}, 4.0(4.0+) is {react-router-dom}, 
//3.0(3.0-) embedded route is allowed, but in 4.0(4.0+) is not.

