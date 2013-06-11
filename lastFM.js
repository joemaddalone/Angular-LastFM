angular.module('lastfm',[]).
directive('lastfmArtists', function($http) {
    var ret = {
        restrict: 'A',
        link: function(scope, elm, attrs) {
        	var limit  = attrs.limit || '12';
            var period = attrs.period || '3month'
            $http.jsonp('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit='+limit+'&period='+period+'&user=' + attrs.lastfmArtists + '&api_key=' + attrs.key + '&format=json&callback=JSON_CALLBACK').success(function(data, status) {
                scope.artists = data
            })
        },
        template: 	'<li ng-repeat="artist in artists.topartists.artist">' +
					'<a href="{{artist.url}}"" style="background-image: url({{artist.image[2][\'#text\']}})"><span>{{artist.name}}<br />' +
					'{{artist.playcount}} plays</span>' + 
					'</a>' +
					'</li>'
    }
    return ret;
}).
directive('lastfmAlbums', function($http) {
    var ret = {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var limit  = attrs.limit || '12';
            var period = attrs.period || '3month'
            $http.jsonp('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&limit='+limit+'&period='+period+'&user=' + attrs.lastfmAlbums + '&api_key=' + attrs.key + '&format=json&callback=JSON_CALLBACK').success(function(data, status) {
                scope.albums = data
            })
        },
        template:   '<li ng-repeat="album in albums.topalbums.album">' +
                    '<a href="{{album.url}}"" style="background-image: url({{album.image[2][\'#text\']}})"><span>{{album.name}}<br />' +
                    '{{album.playcount}} plays</span>' + 
                    '</a>' +
                    '</li>'
    }
    return ret;
}).
directive('lastfmTracks', function($http) {
    var ret = {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var limit  = attrs.limit || '12';
            var period = attrs.period || '3month'
            $http.jsonp('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit='+limit+'&period='+period+'&user=' + attrs.lastfmTracks + '&api_key=' + attrs.key + '&format=json&callback=JSON_CALLBACK').success(function(data, status) {
                scope.tracks = data
            })
        },
        template:   '<li ng-repeat="track in tracks.toptracks.track">' +
                    '<a href="{{track.url}}"" style="background-image: url({{track.image[2][\'#text\']}})"><span>{{track.name}}<br />' +
                    '{{track.playcount}} plays</span>' + 
                    '</a>' +
                    '</li>'
    }
    return ret;
});