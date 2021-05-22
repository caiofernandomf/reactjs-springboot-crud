import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';
class ViewEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : this.props.match.params.id,
            employee : {}
        };

    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({employee: res.data})
        })
    }
    

    render() {
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Detais</h3>
                <div className="card-body">
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="">Employee First Name: </label>
                            <div>
                                <input readOnly="true" type="text" placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.employee.firstName} />
                            </div>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="">Employee Last Name: </label>
                            <div>
                                <input readOnly="true" type="text" placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.employee.lastName} />
                            </div>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="">Employee Email Id: </label>
                            <div>
                                <input readOnly="true" type="text" placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.employee.emailId} />
                            </div>
                        </div>    
                    </div>
                    
                </div>
            </div>    
            </div>
        );
    }
}

export default ViewEmployeeComponent;