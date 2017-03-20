import React, { Component } from 'react';

export class End extends Component 
{
    OnSubmit = (e) =>
    {
        this.props.OnChangeScene("login");
    }

    render() 
    {

        return (
            <div className="App-Inner"> 
                <div className="my-item-panel">
                    <h4>Successfully completed, Thank you</h4>
                    <button className="btn btn-success" onClick={this.OnSubmit}>Back to home</button>
                </div>
            </div>
        );
    }
}
