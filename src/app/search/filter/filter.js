import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './filter.css';

const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#0a3949',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#0a3949',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

class Filter extends React.Component {
    constructor(){
        super();
        this.state={
            sale:false,
            date:false,
            like:false
        }
    }

    saleChange(){
        this.setState({sale:!this.state.sale})
    }

    dateChange(){
        this.setState({date:!this.state.date})
    }

    likeChange(){
        this.setState({like:!this.state.like})
    }

    render(){
        return (
            <div className="filter-component">
                <div className="filters-title">
                    <img src="idea.png" alt="idea"></img>
                    <h3>Smart Filters</h3>
                </div>
                <div className="filter-items">
                <FormGroup>
                    <div className="filter-item">
                        <img src="sale.png" alt="sale"></img>   
                            <FormControlLabel
                                control={
                                <IOSSwitch
                                    checked={this.state.sale}
                                    onChange={() => this.saleChange()}
                                    value="sale"
                                />
                                }
                                label=""
                            />
                    </div>

                    <div className="filter-item">
                        <img src="date.png" alt="date"></img>   
                        
                            <FormControlLabel
                                control={
                                <IOSSwitch
                                    checked={this.state.date}
                                    onChange={() => this.dateChange()}
                                    value="date"
                                />
                                }
                                label=""
                            />
                    </div>
                    <div className="filter-item">
                        <img src="like.png" alt="like"></img>   
                            <FormControlLabel
                                control={
                                <IOSSwitch
                                    checked={this.state.like}
                                    onChange={() => this.likeChange()}
                                    value="like"
                                />
                                }
                                label=""
                            />
                       
                    </div>
                    </FormGroup>
                </div>
            </div>
          );
    };
  
}

export default Filter;