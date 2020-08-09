import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        remainingTodoCount: PropTypes.number.isRequired
    };

    extraClassName = () => this.props.remainingTodoCount > 0 ? 'todos-remaining' : 'todos-accomplished';

    render () {
        return (
            <h2 className={ `remaining-todos-container ${this.extraClassName()}` }>
                { this.props.remainingTodoCount } Todos Left!
            </h2>
        );
    }
}

export default Header;
