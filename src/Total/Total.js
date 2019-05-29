import React, { Component } from 'react';


class Total extends Component{
    render(){
        return(         
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                    <div className="summary__total__value">
                    {this.props.total}
                </div>
            </div>
        );
    }
}
export default Total;