(function() {
    'use strict';

    angular
        .module('yodaApp')
        .controller('MainController', MainController);

    MainController.$inject = ['mainFactory'];

    /* @ngInject */
    function MainController(mainFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.getYoda = getYoda;
        vm.getUrban = getUrban;


        activate();

        ////////////////
        function activate() {};

        function getYoda(word) {
            mainFactory.speak(word).then(function(result) {
                vm.trans = result.data;

            })
        }

        function getUrban(slang) {
            mainFactory.talk(slang).then(function(result) {
                vm.flip = result.data;
            })
        }
    }
})();
