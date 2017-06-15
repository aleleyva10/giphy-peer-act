myApp.service('GiphyService', function($http) {
    sv = this;

    sv.getRandom = function() {
        console.log('in service');
        var searchUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
        return $http.get(searchUrl).then(function(response) {
            console.log(response);
            return response.data.data.image_url;
        }); // end $http request
    }; // end getRandom function

    sv.getGiphy = function(search) {

            var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
            searchUrl += search;
            searchUrl += '&api_key=dc6zaTOxFJmzC';
            return $http.get(searchUrl).then(function(response) {
                return response.data.data;
            }); //end $http 
    }; //end getGiphy
}); //end app.service
