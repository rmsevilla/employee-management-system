import React, { Component } from 'react';


class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
         }
    }

    render() { 
        return ( 
            <div>
                <footer className="footer">
                    <span classNam="text-muted">All Rights Reserved 2022</span>
                </footer>
            
            </div>
        );
    }
}
 
export default FooterComponent;