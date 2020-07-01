import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
    return (
        <h2>
            Calling from App.js { message }
        </h2>
    )
};

Header.propTypes = {
    message: PropTypes.string
}

export default Header;
