import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
         }
    }

    render() { 
        return ( 
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Employee Management System</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sign Out</a>
                                        </li>
                                    </ul>
                                    <form class="d-flex" role="search">
                                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                        <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default HeaderComponent;