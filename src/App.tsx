import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Hello from './components/Hello';

const App: React.FC = () => (
    <div>
        <Link to="/" />
        <Switch>
            <Route path="/" component={Hello} />
        </Switch>
    </div>
);

export default App;
