import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Grid, Cell} from 'styled-css-grid';

//import { deleteTopic } from '../../actions/topicActions';

const TopicListCell = props => {

    return (

        <td>
            <Grid columns={3}>
                <Cell width={3}>
                    <div className="left-align blue-text text-darken-2">{props.topic.topicName}</div>
                </Cell>
                {/* <Cell width={2}>
                    <div className="left-align blue-text text-darken-2">0</div>
                </Cell> */}
            </Grid>
            
        </td>
        
    )
}

const MapStateToProps = (state) => {
    return {
        
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(TopicListCell);


