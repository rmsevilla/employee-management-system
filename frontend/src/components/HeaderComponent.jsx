import React, { Component } from 'react';


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
         };
    }

    render() { 
        return ( 
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand ms-5" href="#">Employee Management System</a>

                                <form class="d-flex w-50" id="search-form" role="search">
                                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"></input>
                                        <button class="btn btn-outline-success" id="search-btn" type="submit">Search</button>
                                </form>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul className="navbar-nav ms-auto me-5">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sign Out</a>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
 
export default HeaderComponent;