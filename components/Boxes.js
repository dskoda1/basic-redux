import React, { PropTypes } from 'react';
import _ from 'lodash';

const Boxes = ({boxes, onBoxClick}) => {
    
    let className = 'col-xs-6 col-sm-4';
    let newBoxes = _.map(boxes, (box) => {
        
        var divStyle = {
            border: '1px solid ' + box.color,
            textAlign: 'center',
            height: '100px',
        };
        return (<div 
                key={box.id} 
                style={divStyle} 
                className={className} 
                onClick={() => onBoxClick(box.id)} >
                <h3>{box.id}</h3>
            </div>);
        
        
    });
    console.log(newBoxes);
    return (
        <div>
            {newBoxes}
        </div>
    );
};


export default Boxes;