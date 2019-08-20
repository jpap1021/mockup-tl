import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Item from './item/item';
import "./body.css"

class Body extends React.Component {
    constructor(){
        super();
        this.state={
            search:'',
            itemList:[{
                date:"Monday 10th 2:28 PM",
                departureCity:"Houstound, TX, 33619",
                arriveCity:"Atlanta, GA, 306123",
                value:"$250.00",
                quantity:1
            },{
                date:"Monday 10th 2:28 PM",
                departureCity:"Houstound, TX, 33619",
                arriveCity:"Atlanta, GA, 306123",
                value:"$250.00",
                quantity:1
            },{
                date:"Monday 10th 2:28 PM",
                departureCity:"Houstound, TX, 33619",
                arriveCity:"Atlanta, GA, 306123",
                value:"$250.00",
                quantity:1
            }]
        }
        this.deleteElement = this.deleteElement.bind(this);
    }
    searchChange(e){
        this.setState({search:e.value})
    }
    addItem(){
        let newValue = {
            date:"Monday 10th 2:28 PM",
            departureCity:"Houstound, TX, 33619",
            arriveCity:"Atlanta, GA, 306123",
            value:"$250.00",
            quantity:1
        };
        this.setState({itemList:[...this.state.itemList, newValue]})
    }
    deleteElement(item){
        let deletedItem = this.state.itemList.filter((value) => {
            return value !== item;
        });
        this.setState({itemList:deletedItem});
    }
    render(){
        return (
            <div className="body-component">
                <div className="body-search">
                    <TextField
                        variant="filled"
                        label="Search"
                        value={this.state.search}
                        onChange={(e) => this.searchChange(e)}
                        InputProps={{
                        startAdornment: <InputAdornment position="start"><i className="material-icons">
                        search
                        </i></InputAdornment>,
                    }}/>
                </div>
                <div>
                    {this.state.itemList.map((value, index) => {
                        return  <Item key={index} data={value} deleteItem={this.deleteElement}></Item>
                    })}
                </div>
                <i className="material-icons add-item" onClick={() => {this.addItem()}}>
                    add
                </i>
            </div>
          );
    };
  
}

export default Body;