import React from 'react';
import SummaryList from '../SummaryList/SummaryList';

function Summary(props){
    return Object.keys(props.selected)
            .map(key => 
                <SummaryList 
                    key={key}
                    name={props.selected[key].name}
                    cost={props.selected[key].cost}
                />)
            
}
export default Summary;
