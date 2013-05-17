APP.directive('lastfm', function($http) {
    var ret = {
        restrict: 'A',
        link: function(scope, elm, attrs) {
        	var limit  = attrs.limit || '12';
            var period = attrs.period || '3month'
            $http.jsonp('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit='+limit+'&period='+period+'&user=' + attrs.lastfm + '&api_key=' + attrs.key + '&format=json&callback=JSON_CALLBACK').success(function(data, status) {
                scope.listening = data
            })
        },
        template: 	'<li ng-repeat="artist in listening.topartists.artist">' +
					'<a href="{{artist.url}}"" style="background-image: url({{artist.image[2][\'#text\']}})"><span>{{artist.name}}<br />' +
					'{{artist.playcount}} plays</span>' + 
					'</a>' +
					'</li>'
    }
    return ret;
});