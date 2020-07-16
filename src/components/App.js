import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    componentDidMount() {
        console.log()
    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    render () {
        return (
            <div className="App">
                <Header message={ this.state.pageHeader } />
                <div>
                    {
                        this.props.contests.map(contest =>
                            <ContestPreview { ...contest } />
                        )
                    }
                </div>
            </div>
        )
    }
}

App.propTypes = {
    contests: PropTypes.array
};

export default App;
