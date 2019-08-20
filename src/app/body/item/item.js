import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './item.css';

class Item extends React.Component {
    constructor(){
        super();
        this.state={
            checked:false,
            openMenu:null
        }
    }

    checkedChange(){
        this.setState({checked:!this.state.checked})
    }   
    openMenu(e) {
        this.setState({openMenu:e.currentTarget})
    }
    closeMenu() {
        this.setState({openMenu:null})
    }

    delete(){
        this.props.deleteItem(this.props.data);
        this.setState({openMenu:null});
    }

    render(){
        return (
            <div className="item-component">
               <Checkbox
                    checked={this.state.checked}
                    onChange={() => this.checkedChange()}
                    value="checked"
                    color="primary"
                />
                <div className="item-content">
                    <div className="item-name">
                       <div className="date-field">{this.props.data.date}</div>
                    </div>
                    <div className="item-place">
                        <i className="material-icons send-icon">
                            send
                        </i>
                        <div className="item-destination">
                            <div>{this.props.data.departureCity}</div>
                            <i className="material-icons arrow-down">
                                keyboard_arrow_down
                            </i>
                            <div>{this.props.data.arriveCity}</div>
                        </div>
                    </div>
                    <div className="item-price">
                        <i className="material-icons shipping">
                            local_shipping
                        </i>
                            <div className="item-value">{this.props.data.value}</div>
                            <div className="item-cant">{this.props.data.quantity}</div>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => this.openMenu(e)}>
                            <i className="material-icons">
                                more_vert
                            </i>
                            </Button>
                            <Menu
                                keepMounted
                                anchorEl={this.state.openMenu}
                                open={Boolean(this.state.openMenu)}
                                onClose={() => this.closeMenu()}
                            >
                                <MenuItem onClick={() => this.delete()}>Eliminar</MenuItem>
                            </Menu>
                    </div>
                </div>
            </div>
          );
    };
  
}

export default Item;