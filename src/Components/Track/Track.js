import React from "react";
import './Track.css';

export class Track extends React.Component {
    renderAction () {
        //not sure what it means here
        //Create a method called renderAction that displays a 
        //<button> element with - as its content if the isRemoval
        //property is true, and a + <button> element if the
        // isRemoval property is false.
        //Set the class name to Track-action
        if(this.props.isRemoval) {
            return (<button className="Track-action" onClick={this.addTrack}>+</button>);}
        return (<button className="Track-action">-</button>);
    }
     
    render() {
        console.log('Track props',this.props);
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