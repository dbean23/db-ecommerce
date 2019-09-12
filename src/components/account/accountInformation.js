import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountinformationForm';

onSubmit = (fields) => {
    console.log(fields);
}

export default class AccountInformation extends Component {
    render () {
        return (
            <div className='account-information'>
                <PageTitle className='account-information' title='Acccount Information'/>
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form' />
            </div>
        );
    }
}