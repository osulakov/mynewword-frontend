import React, { Component } from 'react'

class WordName extends Component {

    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        let backgroundColor;
        if(this.state.hover) {
            backgroundColor = '#e0e0e0'
        } else {
            backgroundColor = '#bdbdbd'
        }
        let styles = {
            padding: '8px',
            borderRadius: '3px',
            backgroundColor: backgroundColor,
            fontSize: '20px'
        }
        return (
            <div style={styles} onMouseEnter={ this.toggleHover } onMouseLeave={ this.toggleHover }>
                {!this.state.hover ? (
                    <>{this.props.name}</>
                ):(
                    <>
                        {this.props.name}
                        <button>Edit</button>
                    </>
                )}
            </div>
        )
    }
}

export default WordName;