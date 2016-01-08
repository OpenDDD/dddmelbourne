/*global $*/

var ddd = (function() {

    "use strict";

    var mapView= document.getElementById("map-view");

    if (mapView == null) return;
    
	var latlng = new google.maps.LatLng(-37.822137,145.038916);

	var myOptions = {
		zoom: 17,
		center: latlng,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};

	var map = new google.maps.Map(mapView, myOptions);

	if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function (fn, scope) {
	        for (var i = 0, len = this.length; i < len; ++i) {
	            fn.call(scope, this[i], i, this);
	        }
	    };
	}

}());