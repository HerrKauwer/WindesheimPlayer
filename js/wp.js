var audio = $("#audio")[0];

function PlaylistViewModel() {
    var self = this;

    self.tracks = ko.observableArray([
        {
            preview_url: "https://p.scdn.co/mp3-preview/0e1a3330527a1f570a4d1428f32be931c055232b",
            name: "Holiday - Faded Ending",
            artist: "Green Day",
            album: "Holiday"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/a823677ad1a9483fc6b1b63efbd105cc5b27096a",
            "name": "Lost & Found",
            "artist": "Feeder",
            "album": "The Singles"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/aeb7f40920f48fd89460be0e5580cfa4d262ff6e",
            "name": "Busy Earnin'",
            "artist": "Jungle",
            "album": "Jungle"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/cce5b59751aaef067b60006fb34dd6cb4bf6e7ad",
            "name": "Carbon Kid",
            "artist": "Alpinestars",
            "album": "White Noise"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/27df0a89036135748fd03fb67114abeb00c529a4",
            "name": "Cool Kids",
            "artist": "Echosmith",
            "album": "Talking Dreams (Deluxe Version)"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/1dfd4a1a87f54c2b959a00c2e1521e193f95c44b",
            "name": "Ich bin wie Du",
            "artist": "Marianne Rosenberg",
            "album": "Ich bin wie du"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/280d447a61ab0ad2b6c201a3c75bc1af6ba17d0a",
            "name": "Money For Nothing",
            "artist": "Dire Straits",
            "album": "Brothers In Arms (Remastered)"
        },
        {
            "preview_url": "https://p.scdn.co/mp3-preview/5ec427ac93acfe644dbc17c16e23c6a03baeb632",
            "name": "Born to Be Alive - Original Mix 79",
            "artist": "Village People",
            "album": "Born to Be Alive (Original Mix 79)"
        }
    ]);

    self.play = function (track) {
        audio.src = track.preview_url;
        audio.play();
        self.nowPlaying(track);
    };

    self.addTrack = function (track) {
        self.tracks.push(track);
    };

    self.searchResults = ko.observableArray([]);

    self.nowPlaying = ko.observable();

    self.nowPlayingName = ko.computed(function () {
        if (self.nowPlaying()) {
            return self.nowPlaying().artist + " - " + self.nowPlaying().name;
        }
    });
}

var playlistViewModel = new PlaylistViewModel();

ko.applyBindings(playlistViewModel);

$("#search-button").click(function () {
    var query = $("#search-text").val();
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'track'
        },
        success: function (response) {
            var tracks = [];
            response.tracks.items.forEach(function (track) {
                tracks.push(readSpotifyTrack(track));
            });
            $("#search-results-for").text(query);
            playlistViewModel.searchResults(tracks);
            $("#search-results").show();
        }
    });
});

function readSpotifyTrack(track) {
    return {
        preview_url: track.preview_url,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name
    };
}