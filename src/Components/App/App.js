//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../PlayList/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [
      {title: 'hey jude', artist: 'beatles', album: 'not sure', id: '001'},
      {title: 'hard life', artist: 'Queen', album: 'Greatest hits', id: '002'},
      {title: 'spy spong', artist: 'J Bond', album: 'eye spy', id: '007'}
      ],
      playlistName: 'my playlist',
      playlistTracks: [
        {title: 'gold digger', artist: 'kanye', album: 'rap album1', id: '101'},
        {title: 'hit em up', artist: '2pac', album: 'hip hop top', id: '102'},
        {title: 'hard life', artist: 'Queen', album: 'Greatest hits', id: '002'}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find((savedTrack) => {
      return savedTrack.id === track.id;
    })) {
      return;
    }
    const newPlaylist = this.state.playlistTracks;
    newPlaylist.push(track);
    this.setState( {playlistTracks: newPlaylist} );
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist 
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
