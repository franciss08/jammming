import React from "react";
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    
    renderAction () {
        //not sure what it means here
        //Create a method called renderAction that displays a 
        //<button> element with - as its content if the isRemoval
        //property is true, and a + <button> element if the
        // isRemoval property is false.
        //Set the class name to Track-action
        if(this.props.isRemoval) {
            return (<button className="Track-action" onClick={this.removeTrack}>-</button>);}
        return (<button className="Track-action" onClick={this.addTrack}>+</button>);
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }
     
    render() {
        //console.log('Track props',this.props);
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.title}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}