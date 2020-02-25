'use strict';

angular.module("app")

.factory('catalog', ['$http', '$q', 'COOLSTORE_CONFIG', 'Auth', '$location', function($http, $q, COOLSTORE_CONFIG, $auth, $location) {
	var factory = {}, products, baseUrl;

	if ($location.protocol() === 'https') {
		baseUrl = (COOLSTORE_CONFIG.SECURE_API_ENDPOINT.startsWith("https://") ? COOLSTORE_CONFIG.SECURE_API_ENDPOINT : "https://" + COOLSTORE_CONFIG.SECURE_API_ENDPOINT + '.' + $location.host().replace(/^.*?\.(.*)/g,"$1")) + '/api/products';
	} else {
		baseUrl = (COOLSTORE_CONFIG.API_ENDPOINT.startsWith("http://") ? COOLSTORE_CONFIG.API_ENDPOINT : "http://" + COOLSTORE_CONFIG.API_ENDPOINT + '.' + $location.host().replace(/^.*?\.(.*)/g,"$1")) + '/api/products';
	}
    baseUrl = "https://api-2445582949711.production.gw.apicast.io/products?user_key=6167941de39fe0002892669da8ee4562"
    factory.getProducts = function() {
		var deferred = $q.defer();
        if (products) {
            deferred.resolve(products);
        } else {
            $http({
                method: 'GET',
								url: baseUrl
            }).then(function(resp) {
                products = resp.data;
                deferred.resolve(resp.data);
            }, function(err) {
                deferred.reject(err);
            });
        }
	   return deferred.promise;
	};

	return factory;
}]);
