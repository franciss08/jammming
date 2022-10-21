import React from "react";
import {TrackList} from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component {
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New PlayList'}/>
            <TrackList playlistTracks={this.props.playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        )
    }
}