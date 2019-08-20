import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import './status.css';

class Status extends React.Component {
    constructor(){
        super();
        this.state={
            search:''
        }
    }

    searchChange(e){
        this.setState({search:e.value})
    }
    render(){
        return (
            <div className="status-component">
                <h3>Status</h3>
                <TextField
                    variant="filled"
                    label="Search"
                    value={this.state.search}
                    onChange={(e) => this.searchChange(e)}
                    InputProps={{
                    startAdornment: <InputAdornment position="start">
                        <i className="material-icons">
                            search
                        </i>
                    </InputAdornment>,
                }}/>
                <Button color="default">DELIVERED</Button>
            </div>
          );
    };
  
}

export default Status;