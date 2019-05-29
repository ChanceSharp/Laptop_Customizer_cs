import React, { Component } from 'react';
import Features from '../Features/Features';

class FeatureList extends Component{
    
    render(){
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {Object.keys(this.props.features)
                .map(key => {
                    return (<div className='feature' key={key}>
                                <div className="feature__name">{key}</div>
                                <ul className="feature__list">
                                    <Features
                                        key={key}
                                        id={key}
                                        features={this.props.features[key]}
                                        selected={this.props.selected[key]}
                                        updateFeature={this.props.updateFeature}
                                    />
                                </ul>
                            </div>)
                })}
            </section>
        );
    }
}

export default FeatureList;