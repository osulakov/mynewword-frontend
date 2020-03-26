import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { changeDeleteMode } from '../../actions/mainActions';

import TrashCanSVG from './TrashCanSVG';

import TrashCanImg from '../../images/trash-can.png';

const DayButton = styled.div`
    background: ${props => (props.filterMode === 'day' ? '#bdbdbd' : 'grey')};
    color: white;
    text-align: center;
    padding: 4px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;
const WeekButton = styled.div`
    background: ${props => (props.filterMode === 'week' ? '#bdbdbd' : 'grey')};
    color: white;  
    text-align: center;
    padding: 4px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;
const MonthButton = styled.div`
    background: ${props => (props.filterMode === 'month' ? '#bdbdbd' : 'grey')};
    color: white;
    text-align: center;
    padding: 4px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;
const AllButton = styled.div`
    background: ${props => (props.filterMode === 'all' ? '#bdbdbd' : 'grey')};
    color: white;
    text-align: center;
    padding: 4px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;

const SortingButton = styled.div`
    background: grey;
    color: white;
    text-align: center;
    padding: 4px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;

const DeleteModeButton = styled.div`
    background: ${props => (props.deleteMode ? 'red' : 'grey')};
    color: white;
    text-align: center;
    padding: 1px;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;
`;

const WordListTool = (props) => {
    return (
        <div className='row'>
            <div className='col s2'>
                <DayButton onClick={props.dayFilter} filterMode={props.filterMode}>Day</DayButton>
            </div>
            <div className='col s2'>
                <WeekButton onClick={props.weekFilter} filterMode={props.filterMode}>Week</WeekButton>
            </div>
            <div className='col s2'>
                <MonthButton onClick={props.monthFilter} filterMode={props.filterMode}>Month</MonthButton>
            </div>
            <div className='col s2'>
                <AllButton onClick={props.allFilter} filterMode={props.filterMode}>All</AllButton>
            </div>
            <div className='col s2'>
                {props.sortingMode 
                    ? <SortingButton onClick={props.sortingSwitcher}>&#8595;</SortingButton>
                    : <SortingButton onClick={props.sortingSwitcher}>&#8593;</SortingButton>
                }
            </div>
            <div className='col s2'>
                <DeleteModeButton 
                    onClick={() => {props.changeDeleteMode(props.deleteMode)}}
                    deleteMode={props.deleteMode}
                >
                   <img src={TrashCanImg} width='25' height='25' color='white'/>
                </DeleteModeButton>
            </div>
        </div>
    )
}

const MapStateToProps = (state) => {
    return {
        deleteMode: state.mainReducer.deleteMode
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        changeDeleteMode: (deleteMode) => dispatch(changeDeleteMode(deleteMode))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(WordListTool);



{/* <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{width: '15%', padding: '0px'}}><DayButton onClick={props.dayFilter} filterMode={props.filterMode}>Day</DayButton></td>
                        <td style={{width: '15%', padding: '0px'}}><WeekButton onClick={props.weekFilter} filterMode={props.filterMode}>Week</WeekButton></td>
                        <td style={{width: '15%', padding: '0px'}}><MonthButton onClick={props.monthFilter} filterMode={props.filterMode}>Month</MonthButton></td>
                        <td style={{width: '15%', padding: '0px'}}><AllButton onClick={props.allFilter} filterMode={props.filterMode}>All</AllButton></td>
                        <td style={{width: '15%', padding: '0px'}}>
                            {props.sortingMode 
                                ? <SortingButton onClick={props.sortingSwitcher}>&#8595;</SortingButton>
                                : <SortingButton onClick={props.sortingSwitcher}>&#8593;</SortingButton>
                            }
                            
                        </td>
                        <td style={{width: '25%', padding: '0px'}}>
                            <DeleteModeButton onClick={props.deleteModeSwitcher} deleteMode={props.deleteMode}>&#128465;</DeleteModeButton>
                        </td>
                    </tr>
                </tbody>
            </table> 
        </div> */}



        // <Grid columns={18}>
        //     <Cell width={3}>
        //         <DayButton onClick={props.dayFilter} filterMode={props.filterMode}>Day</DayButton>
        //     </Cell>
        //     <Cell width={3}>
        //         <WeekButton onClick={props.weekFilter} filterMode={props.filterMode}>Week</WeekButton>
        //     </Cell>
        //     <Cell width={3}>
        //         <MonthButton onClick={props.monthFilter} filterMode={props.filterMode}>Month</MonthButton>
        //     </Cell>
        //     <Cell width={3}>
        //         <AllButton onClick={props.allFilter} filterMode={props.filterMode}>All</AllButton>
        //     </Cell>
        //     <Cell width={3}>
        //         {props.sortingMode 
        //             ? <SortingButton onClick={props.sortingSwitcher}>&#8595;</SortingButton>
        //             : <SortingButton onClick={props.sortingSwitcher}>&#8593;</SortingButton>
        //         }
        //     </Cell>
        //     <Cell width={3}>
        //         <DeleteModeButton 
        //             onClick={() => {props.changeDeleteMode(props.deleteMode)}}
        //             deleteMode={props.deleteMode}
        //         >
        //            <img src={TrashCanImg} width='25' height='25' color='white'/>
        //         </DeleteModeButton>
        //     </Cell>
        // </Grid>