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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    //console.log('running!')
    if (this.state.playlistTracks.find((savedTrack) => {
      return savedTrack.id === track.id;
    })) {
      return;
    }
    //console.log('running 2')
    const newPlaylist = this.state.playlistTracks;
    //console.log('new paylist',newPlaylist);
    newPlaylist.push(track);
    this.setState( {playlistTracks: newPlaylist} );
    //console.log('state obj',this.state)
  }

  removeTrack(track) {
    const playlist = this.state.playlistTracks;
    const filteredPlaylist = playlist.filter(element => {
      return element.id !== track.id;
    })
    this.setState( {playlistTracks: filteredPlaylist} );
  }

  updatePlaylistName(name) {
    this.setState( {playlistName: name} );
    //console.log('hello', this.state.playlistName)
    //console.log(this.state);
  }
  
  render() {
    console.log(this.state)
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
              playlistTracks={this.state.playlistTracks} 
              onRemove ={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
