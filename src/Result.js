import React, { Component } from 'react';

export class Result extends Component 
{
    state = {
        scene: "",
    }

    OnSubmit = (e) =>
    {
        this.props.OnChangeScene("end");
    }

    OnUpdateFoodCount = (name, value) =>
    {
        this.props.UpdateFood(name,value);
    }
    OnCancel = (e) =>
    {
        this.props.OnChangeScene("menu");
    }

    render() 
    {
        var selectedMenu = [];
        var allMenu = this.props.allMenu;

        for(var i = 0, j = allMenu.length; i < j; ++i)
        {
            if(allMenu[i].Count > 0)
            {
                selectedMenu.push(allMenu[i]);
            }
        }

        var index = -1;
        var columnCount = 6;

        for(var i = 0, j =selectedMenu.length; i < j; ++i)
        {
            if(i % columnCount == 0)
            {
                index++;
            }
            selectedMenu[i].Index = index;
        }

        var total = [];
        var result = [];
        var style = "col-md-" + parseInt(12 / columnCount);
        var totalCost = 0;

        for(var a = 0; a < index+1; a++)
        {
            total[a] = [];
            for(var i = 0, j = selectedMenu.length; i < j; ++i)
            {
                if(selectedMenu[i].Index != a) continue;
                totalCost += selectedMenu[i].Count * selectedMenu[i].Cost;
                total[a].push (
                    <div className={style}>
                        <div className="my-item-panel">
                            <h4>{selectedMenu[i].Name}</h4>
                            <img src={selectedMenu[i].Image} style={{width:"100%",height:"100px",objectFit:"cover"}}/>
                            <h4>ราคา: {selectedMenu[i].Cost}</h4>
                            <h4>จำนวน: {selectedMenu[i].Count}</h4>
                        </div>
                    </div>
                );
            }

            result.push( 
                <div className="row">
                    {total[a]}
                </div>
            );
        }



        return (
            <div className="App-Inner"> 
                <div className="row my-item-panel">
                    <h4 className="col-md-4">Name: {this.props.CName}</h4>
                    <h4 className="col-md-4">Address: {this.props.CAddress}</h4>
                    <h4 className="col-md-4">Tel: {this.props.CPhone}</h4>
                </div>
                <div className="my-item-panel">
                    <h2 style={{marginTop:"50px"}}>Menu</h2>
                    <hr style={{backgroundColor:"#000", borderColor:"#000"}}/>
                    {result}
                    <h3>Total: {totalCost}</h3>
                    <button className="btn btn-success" onClick={this.OnSubmit} style={{marginRight:"10px"}}>Confirm</button>
                    <button className="btn btn-success" onClick={this.OnCancel} style={{marginLeft:"10px"}}>Cancel</button>
                </div>
            </div>
        );
    }
}
