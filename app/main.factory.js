(function() {
    'use strict';

    angular
        .module('yodaApp')
        .factory('mainFactory', mainFactory);

    mainFactory.$inject = ['$http', '$q'];



    /* @ngInject */
    function mainFactory($http, $q) {
        var service = {
            speak: speak,
            talk: talk

        };
        return service;

        ////////////////
        function speak(word) {
            var defer = $q.defer();

            $http({
                    method: "GET",
                    url: "https://yoda.p.mashape.com/yoda",
                    params: {
                        sentence: word
                    },
                    headers: {
                        'X-Mashape-Key': '6L9I6AUh2emshZVJbQohXY3bKfPYp16jtpBjsnb6TG7Awedi5b'
                    }
                })
                .then(function(result) {
                    defer.resolve(result);
                });
            return defer.promise;
        }

        function talk(slang) {
            var defer = $q.defer();

            $http({
                    method: "GET",
                    url: "https://mashape-community-urban-dictionary.p.mashape.com/define",
                    params: {
                        term: slang
                    },
                    headers: {

                        'X-Mashape-Key': '6L9I6AUh2emshZVJbQohXY3bKfPYp16jtpBjsnb6TG7Awedi5b'
                    }
                })
                .then(function(result) {
                    defer.resolve(result);
                });
            return defer.promise;
        }


    }
})();
