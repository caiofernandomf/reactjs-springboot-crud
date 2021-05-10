import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">
                        All Rights reserved 2021 <a href="https://github.com/caiofernandomf">@Caio Fernando</a>
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;