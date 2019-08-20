import React from 'react';
import "./header.css";

class Header extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return (
            <div className="header-component">
                 <div className="current-view">
                    <i className="material-icons">
                    home
                    </i>
                    Home
                </div>
                <div>
                    <i className="material-icons">
                    mail
                    </i>
                    Mail
                </div>
                <div>
                    <i className="material-icons">
                    star
                    </i>
                    Whislist
                </div>
                <div>
                    <i className="material-icons">
                    settings
                    </i>
                    Settings
                </div>
                <div>
                    <i className="material-icons">
                    person
                    </i>
                    My account
                </div>
            </div>
          );
    };
  
}

export default Header;