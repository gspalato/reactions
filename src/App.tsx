import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';

import './index.css';

const App: React.FC = () => {
    return (
        <main className="bg-white-100">
            <AnimatePresence exitBeforeEnter>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </AnimatePresence>
        </main>
    );
}

export default App;
