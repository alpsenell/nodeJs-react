import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
    return (
        <h2>
            Mambo Header { message }
        </h2>
    )
};

const App = () => {
    return (
        <div className="App">
            <Header message="Hello Nigga" />
            <div>
                dfsds
            </div>
        </div>
    )
}

Header.propTypes = {
    message: PropTypes.string
};

ReactDOM.render(<App />, document.getElementById('root'));
