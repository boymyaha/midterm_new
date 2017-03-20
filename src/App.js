import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import {Login} from './Login.js';
import {Menu} from './Menu.js';
import {Result} from './Result.js';
import {End} from './End.js';

class App extends Component 
{
    state = {
      scene: "login",
        name: "",
        address: "",
        phone: "",
        all_menu: [
                    {Type:"Food", Name:"Spaghetti", Cost:170, Count:0, Image:"./image/pasta.jpg"},
                    {Type:"Food", Name:"Pizza", Cost:200, Count:0, Image:"./image/pizza.jpg"},
                    {Type:"Food", Name:"Hamburger", Cost:150, Count:0, Image:"./image/hamburger.jpg"},
                    {Type:"Food", Name:"Rice", Cost:150, Count:0, Image:"./image/rice.jpg"},
                    {Type:"Food", Name:"Soup", Cost:80, Count:0, Image:"./image/soup.jpg"},

                    {Type:"Dessert", Name:"Banoffee", Cost:100, Count:0, Image:"./image/banoffee.jpg"},
                    {Type:"Dessert", Name:"Brownie", Cost:70, Count:0, Image:"./image/brownie.jpg"},
                    {Type:"Dessert", Name:"Cheesecake", Cost:120, Count:0, Image:"./image/cheesecake.jpg"},
                    {Type:"Dessert", Name:"Macaron", Cost:70, Count:0, Image:"./image/macaroo.jpg"},
                    {Type:"Dessert", Name:"Pancake", Cost:150, Count:0, Image:"./image/pancake.jpg"},

                    {Type:"Drink", Name:"Smoothie", Cost:80, Count:0, Image:"./image/smoothie.jpg"},
                    {Type:"Drink", Name:"Hot cocao", Cost:70, Count:0, Image:"./image/hotcocao.jpg"},
                    {Type:"Drink", Name:"Milkshake", Cost:70, Count:0, Image:"./image/milk.jpg"},
                    {Type:"Drink", Name:"Matcha", Cost:80, Count:0, Image:"./image/tea.jpg"},
                    {Type:"Drink", Name:"Butter beer", Cost:100, Count:0, Image:"./image/butterbeer.jpg"}
                  ]
    }

    OnChangeScene = (value) =>
    {
        this.setState({scene:value});
    }

    OnUpdateInfo = (_name, _address, _phone) =>
    {
      this.setState({name: _name,
                     address: _address,
                     phone: _phone});
    }

    OnUpdateFoodCount = (name, value) =>
    {
        var allMenu = this.state.all_menu;
        for(var i = 0, j = allMenu.length; i < j; ++i)
        {
            if(allMenu[i].Name == name)
            {
                allMenu[i].Count += value;
                if(allMenu[i].Count < 0)
                {
                    allMenu[i].Count = 0;
                }
            }
        }

        this.setState({all_menu: allMenu});
    }

    render() 
    {
      var currentScene = null;
      if(this.state.scene == "login")
      {
          currentScene = <Login OnChangeScene={this.OnChangeScene} OnUpdateInfo={this.OnUpdateInfo}/>
      }
      else if(this.state.scene == "menu")
      {
          currentScene = <Menu OnChangeScene={this.OnChangeScene} OnUpdateFoodCount={this.OnUpdateFoodCount} allMenu={this.state.all_menu}/>
      }
      else if(this.state.scene == "result")
      {
          currentScene = <Result OnChangeScene={this.OnChangeScene} allMenu={this.state.all_menu} CName={this.state.name} CAddress={this.state.address} CPhone={this.state.phone}/>
      }
      else if(this.state.scene == "end")
      {
          currentScene = <End OnChangeScene={this.OnChangeScene}/>
      }
      
      return (
        <div className="App">
          {currentScene}
        </div>
      );
    }
}

export default App;
