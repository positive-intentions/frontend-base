import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example.tsx';

const App = () => {
    return (
        <div>
            <h1>Hello world!!</h1>
            <Example>hello world</Example>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

