import React, { Component } from 'react';

export class Login extends Component 
{
    state = {
        scene: "",
        txtName: "",
        txtAddress: "",
        txtPhone: "",
    }

    OnSubmit = (e) =>
    {
        if(this.state.txtName != "" && this.state.txtAddress != "" && this.state.txtPhone != "")
        {
            this.props.OnUpdateInfo(this.state.txtName,
                                this.state.txtAddress,
                                this.state.txtPhone);
            this.props.OnChangeScene("menu");
        }
        
    }

    OnNameChange = (e) =>
    {
        this.setState({txtName: e.target.value});
    }
    OnAddressChange = (e) =>
    {
        this.setState({txtAddress: e.target.value});
    }
    OnPhoneChange = (e) =>
    {
        this.setState({txtPhone: e.target.value});
    }

    render() 
    {
        return (
            <div className="App-Inner my-item-panel"> 
                <h1>Login</h1>
                <center>
                    <input type="text" onChange={this.OnNameChange} className="my-control" placeholder="Firstname/Lastname"/><br/>
                    <input type="text" onChange={this.OnAddressChange} className="my-control" placeholder="Address"/><br/>
                    <input type="text" onChange={this.OnPhoneChange} className="my-control" placeholder="Phone Number"/><br/>
                    <button className="btn btn-success" onClick={this.OnSubmit}>Submit</button>
                </center>
            </div>
        );
    }
}
