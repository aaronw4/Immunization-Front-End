import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../actions';

const PatientHome = props => {

    useEffect(() => {
        props.loginAction('parents', {email: 'parent1@test.com', password: '1234'});
    }, [props]);

    return(
        <div>
            Patient Home
        </div>
    )
}

export default connect(null, {loginAction})(PatientHome);