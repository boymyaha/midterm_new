import React, { Component } from 'react';
import {Item} from './Item.js';

export class SubMenu extends Component 
{
    state = {
        scene: "",
    }

    OnUpdateFoodCount = (name, value) =>
    {
        this.props.UpdateFood(name,value);
    }

    render() 
    {
        var menus = [];

        var allMenu = this.props.allMenu;
        var renderer = [];

        for(var i = 0, j = allMenu.length; i < j; ++i)
        {
            if(allMenu[i].Type != this.props.type) continue;

            renderer.push(
                <Item datas={allMenu[i]} UpdateFood={this.OnUpdateFoodCount} />
            )
        }

        return (
            <div className="App-Inner"> 
                {renderer}
            </div>
        );
    }
}
