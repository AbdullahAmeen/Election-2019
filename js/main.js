//Setting up the map.

let map = L.map('map', {
    measureControl:true,
    zoomSnap: 0.25,
    zoomControl:true, maxZoom:45, minZoom:1,
    center: [34.2553, 67.5875],
    zoomDelta: 0.25,
    zoom: 6.35,
})

// Adding the highlighs.
function highlightFeature(e) {
  e.target.setStyle({

     color: '#030809',
     fillOpacity:1,
 });
}

function myOnEachFeature(feature, layer) {
 layer.on({
      mouseover: highlightFeature,
     mouseout: unHighlightFeature,
 });
}


function unHighlightFeature(e) {
 e.target.setStyle({
      color: "000000",
 });
}

// Adding color to the map to make it thematic
function chooseColor(density){
  if ( density > 115000 ) return "#253494";
		else if ( density > 90000 ) return "#2c7fb8";
        else if ( density > 70000 ) return "#41b6c4";
        else if ( density > 40000 ) return "#7fcdbb";
        else if ( density > 10000 ) return "#c7e9b4";
        else if ( density > 4000 ) return "#ffffcc";
};

// Loading the geojson file using jQuery.
let datafile = $.getJSON("data/datafile.geojson",function(electionData){
    L.geoJson( electionData, {
      style: function(feature){
        var fillColor = chooseColor(feature.properties.VotesCast);

        return { color: "#2e0404", weight: 0.8, fillColor: fillColor, fillOpacity: .8, };
      },

      onEachFeature:
      myOnEachFeature,

    }).bindPopup(function(layer ){
      return ("<h4>"+ "Province: " + layer.feature.properties.Province + "<br>" + "Total Votes Cast: " + layer
      .feature.properties.VotesCast + "<br>"+ "Dr. Abdullah: " + layer.feature.properties.Abdullah + "<br>" + "Dr. Ghani: " + layer.feature.properties.Ghani +
       "<br>" + "Other: " + layer.feature.properties.Others + "</h4>" )
        }).addTo(map);
  });

// Adding the legend to the map
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


// Adding  title to the map
L.Control.textbox = L.Control.extend({
  onAdd: function(map) {
    
  var text = L.DomUtil.create('div');
  text.id = "info_text";
  text.innerHTML = "<div class='Title'> <h3>Afghan Presidential Election - 2019 </h3></div>"
  return text;
  },

  onRemove: function(map) {
  
  }
});

L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
L.control.textbox({ position: 'topleft' }).addTo(map);


// Adding the scal bar
L.control.scale().addTo(map);


// Adding highlight and de highlights
function highlightFeature(e) {
  e.target.setStyle({

     fillColor: '#e5ef16',
 });
}

function myOnEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: unHighlightFeature,
  });
}

function unHighlightFeature(e) {
  e.target.setStyle({

    fillColor: chooseColor(e.target.feature.properties.VotesCast)
});
}
