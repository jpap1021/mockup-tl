import React from 'react';
import Filter from './filter/filter';
import Status from './status/status';
import './search.css'


class Search extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <div className="search-component">
                <img src="logo.png" alt="logo"></img>
                <div className="search-items">
                    <Filter></Filter>
                    <Status></Status>
                </div>
                
            </div>
          );
    };
  
}

export default Search;