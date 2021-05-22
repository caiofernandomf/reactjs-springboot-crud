import React, {Component} from 'react';
class ViewEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id = this.props.match.params.id
        };

    }

    render() {
        return (
            <div>
                <h2> View Employee </h2>
                
            </div>
        );
    }
}

export default ViewEmployeeComponent;