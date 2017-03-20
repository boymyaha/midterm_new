import React, { Component } from 'react';

export class Item extends Component 
{
    state = {
        cost: 0,
        count: 0
    }

    OnSubmit = (e) =>
    {
        this.props.OnChangeScene("Menu");
    }

    OnAdd = (event) =>
    {
        this.props.UpdateFood(this.props.datas.Name, 1);
    }

    OnRemove = (event) =>
    {
        this.props.UpdateFood(this.props.datas.Name, -1);
    }

    render() 
    {
        var data = this.props.datas;
        var total = data.Count * data.Cost;
        return (
            <div className="my-item-panel"> 
                <div className="row">
                    <div className="col-md-3">
                        <img src={data.Image} width="200" height="200"/>
                    </div>
                    <div className="col-md-9" style={{marginTop:"20px"}}>
                        <div className="row">
                            <h3 className="col-md-6" style={{textAlign:"left"}}>{data.Name}</h3>
                            <h3 className="col-md-1">฿&nbsp;{total}</h3>
                        </div>
                        <br/>
                        <div className="row" style={{marginLeft:"2px"}}>
                            <buttun className="btn btn-danger col-md-1" style={{width:"32", height:"32"}} onClick={this.OnRemove}> - </buttun>
                            <h4 className="col-md-1">{data.Count}</h4>
                            <button className="btn btn-success col-md-1" style={{width:"32", height:"32"}} onClick={this.OnAdd}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
