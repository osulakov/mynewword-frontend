import React from 'react';

const TrashCan = (props) => {
    let svgStyle = {
        backgroundColor: 'transparent',
        margin: 'auto'
    }
    let lineStyle = {
        stroke: 'white',
        strokeWidth: '2'
    }

    return (
        <div>
            <svg height="25" width="25" style={svgStyle}>
                <line x1="3" y1="0" x2="27" y2="0" style={lineStyle} />
                <line x1="0" y1="4" x2="30" y2="4" style={lineStyle} />

                <line x1="6" y1="4" x2="6" y2="27" style={lineStyle} />
                <line x1="24" y1="4" x2="24" y2="27" style={lineStyle} />

                <line x1="10" y1="6" x2="10" y2="25" style={lineStyle} />
                <line x1="15" y1="6" x2="15" y2="25" style={lineStyle} />
                <line x1="20" y1="6" x2="20" y2="25" style={lineStyle} />

                <line x1="7" y1="29" x2="23" y2="29" style={lineStyle} />
            </svg>
        
        </div>
    )
}

export default TrashCan;