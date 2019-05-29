import React, { Component } from 'react';

class Features extends Component{
    render(){
            return this.props.features.map((item, index) => {
                const selectedClass = item.name === this.props.selected.name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return (<li key={index} className="feature__item">
                            <div className={featureClass} onClick={() => this.props.updateFeature(this.props.id, item)}>
                                { item.name }
                            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(item.cost) })
                            </div>
                        </li>)
            });
    }
}
export default Features;