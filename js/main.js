let map = L.map('map', {
  measureControl:true,
  zoomSnap: 0.25,
  zoomControl:true, maxZoom:45, minZoom:1,
  zoomDelta: 1,
  zoom: 12,
}).setView([34.2553, 67.5875], 6.2);

let basemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      

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
        return { color: "#2e0404", weight: 0.4, fillColor: fillColor, fillOpacity: .8 };
      },
      onEachFeature: function( feature, layer ){
		layer.bindPopup("<h4>"+ "Province Name: " + feature.properties.Province + "<br>" + "Total Votes Cast: " + feature.properties.VotesCast + "<br>"+
		 "Dr. Abdullah: " + feature.properties.Abdullah + "<br>" + "Dr. Ghani: " + feature.properties.Ghani +
		 "<br>" + "Others: " + feature.properties.Others + "</h4>" )
      }
    }).addTo(map);
  });


var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Total Votes Cast</h4>";
  div.innerHTML += '<i style="background: #ffffcc"></i><span>4500 - 10000</span><br>';
  div.innerHTML += '<i style="background: #c7e9b4"></i><span>10001 - 40000</span><br>';
  div.innerHTML += '<i style="background: #7fcdbb"></i><span>40001 - 70000</span><br>';
  div.innerHTML += '<i style="background: #41b6c4"></i><span>70001 - 90000</span><br>';
  div.innerHTML += '<i style="background: #2c7fb8"></i><span>90001 - 115000</span><br>';
  div.innerHTML += '<i style="background: #253494"></i><span>115000 - 350000</span><br>';

  return div;
};

legend.addTo(map);

L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h2>Afghanistan Election - 2019 </h2></div>"
  return text;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});

L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(map);

L.control.scale().addTo(map);