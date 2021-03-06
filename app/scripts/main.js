;(function (){

	//File Picker Key
	filepicker.setKey("AUqqkJMvRvC6XKQUxPl6Rz");

	// Set up Main Module
	angular.module('Beers', ['ngRoute', 'ngCookies'])

	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
				'X-Parse-Application-Id': '6DUYNUIpGv8KMieDZ3JCY6T49P6CM36rL3M5HYaf',
  			'X-Parse-REST-API-Key': 'JIiZJRXMlbchAdW7CnqbDRMFDUND0MiDLYimjS99',
  			'Content-Type': 'application/json'
			}
		}
	})

	.config( function ($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'scripts/welcome/welcome-template.html'
		})

		.when('/beerlist', {
			controller: 'BeerController',
			templateUrl: 'scripts/beer/beer-list-template.html'
		})

		.when('/addbeer', {
			controller: 'BeerController',
			templateUrl: 'scripts/beer/add-beer-template.html'
		})

		.when('/login', {
			controller: 'UserController',
			templateUrl: 'scripts/user/login-template.html'
		})

		.when('/register', {
			controller: 'UserController',
			templateUrl: 'scripts/user/signup-template.html'
		})

		.when('/profile', {
			controller: 'ProfileController',
			templateUrl: 'scripts/profile/profile-template.html'
		})

		.otherwise({
			redirectTo: '/'
		});

	})

	.run([ '$rootScope', 'UserFactory', 'PARSE',
		function ($rootScope, UserFactory, PARSE){

			$rootScope.$on('$routeChangeStart', function (){

				UserFactory.status();

				var user = UserFactory.user();

			});

		}
	])

}());
