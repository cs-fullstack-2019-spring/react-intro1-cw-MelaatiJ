// import react //
import React, { Component } from 'react';

// component BankAccount //
class BankAccount extends Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.customerName} </h1>
                <h2>Your Account Balance Is : {this.props.balance}</h2>

            </div>

        );
    }
}

// export Component //
export default BankAccount;