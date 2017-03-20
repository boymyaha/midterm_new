import React, { Component } from 'react';
import {SubMenu} from './SubMenu.js';
export class Menu extends Component 
{
    state = {
        type: "Food",
    }

    OnTypeChange = (e) =>
    {
        this.setState({type: e.target.value});
    }

    OnUpdateFoodCount = (name, value) =>
    {
        this.props.OnUpdateFoodCount(name,value);
    }

    OnSendResult = (e) =>
    {
        this.props.OnChangeScene("result");
    }

    render() 
    {
        return (
            <div className="App-Inner"> 
                <center className="my-font">
                    <h1>Menu</h1>
                    <select className="my-control" onChange={this.OnTypeChange}>
                        <option value="Food">Food</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Drink">Drink</option>
                    </select>
                </center>
                <SubMenu OnChangeScene={this.props.OnChangeScene} type={this.state.type} allMenu={this.props.allMenu} UpdateFood={this.OnUpdateFoodCount}/>
                <button className="btn btn-primary" onClick={this.OnSendResult}>Total</button>
            </div>
        );
    }
}
