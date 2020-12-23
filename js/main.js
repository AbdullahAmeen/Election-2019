let map = L.map('map').setView([33.0553, 67.0075], 13);

let basemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 6,

		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(map);





$.getJSON("data/datafile.geojson",function(electionData){
    L.geoJson( electionData, {
      style: function(feature){
        var fillColor,
            density = feature.properties.VotesCast;
		if ( density > 115000 ) fillColor = "#253494";
		else if ( density > 90000 ) fillColor = "#2c7fb8";
        else if ( density > 70000 ) fillColor = "#41b6c4";
        else if ( density > 40000 ) fillColor = "#7fcdbb";
        else if ( density > 10000 ) fillColor = "#c7e9b4";
        else if ( density > 4000 ) fillColor = "#ffffcc";
        return { color: "#999", weight: 1, fillColor: fillColor, fillOpacity: .8 };
      },
      onEachFeature: function( feature, layer ){
		layer.bindPopup("<h4>"+ "Province Name: " + feature.properties.Province + "<br>" + "<strong>" + "Total Votes Cast: " +"</strong>"  + feature.properties.VotesCast + "<br>"+
		"<strong>" + "Dr. Ghani: " +"</strong>"+ feature.properties.Ghani + "<strong>" + "<br>" + "Dr. Abdullah: " +"</strong>"+ feature.properties.Abdullah +
		"<strong>" + "<br>" + "Others: " +"</strong>"+ feature.properties.Others + "</h4>" )
      }
    }).addTo(map);
  });
