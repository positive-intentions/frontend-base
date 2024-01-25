import React from 'react';
import ReactDOM from 'react-dom';
import Example from './stories/components/Example.tsx';

const App = () => {
    return (
        <div>
            <Example>positive-intentions</Example>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

