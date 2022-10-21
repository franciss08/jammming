import React from "react";
import {Track} from '../Track/Track';
import './TrackList.css';

export class TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
    }
    
    addTrack() {
        this.props.onAdd(this.props.track);
    }

    render() {
        //const tracksH = this.props.tracks;
        console.log('track list props',this.props);
        const tracksArray = this.props.tracks;
        console.log('tracks array',tracksArray);
        //const tracksArrayItem1 = tracksArray[0];
        //console.log('att',tracksArrayItem1['title']);
        let mappedArray =[];
        if(tracksArray) {mappedArray = tracksArray.map((arrayItem) => {
            console.log(arrayItem);
            return <Track 
                key={arrayItem.id} 
                track={arrayItem}
                onAdd={this.props.onAdd} 
                isRemoval={this.props.isRemoval}/>
        })}
        //console.log(mappedArray, 'mapped');
        return (
        <div className="TrackList">
            <div>{mappedArray !== undefined ? mappedArray : ''}</div>
        </div>
        );
    }
}