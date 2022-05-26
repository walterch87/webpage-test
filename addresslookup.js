/*

AddressLookupResult
	SuggestedAddress
		Address
			PremisesAddress


				EngPremisesAddress
					BuildingName
					EngStreet
						StreetName
						BuildingNoFrom
						BuildingNoTo      (optional)
					EngDistrict
						DcDistrict
					Region

				ChiPremisesAddress
					BuildingName
					ChiStreet
						StreetName
						BuildingNoFrom
						BuildingNoTo      (optional)
					ChiDistrict
						DcDistrict
					Region


				GeospatialInformation  (can be more than once)
					Northing
					Easting
					Latitude
					Longitude

*/


function extractElementfromDOM(DOM, tagName) {
	if (DOM.getElementsByTagName(tagName).length != 0) {
		var x = DOM.getElementsByTagName(tagName)[0];
		var y = x.childNodes[0];
		console.log(tagName+":"+y.nodeValue);
		return y.nodeValue;

	} 
	else {
		console.log(tagName+" is null");
		return null;
	}
}

$(document).ready(function(){

  $("#buttonDisplayAddress").click(function(){
    $.get("https://www.als.ogcio.gov.hk/lookup?q="+$("#address").val(), function(data, status){

    	/*
    	var x = data.getElementsByTagName('BuildingName')[0];
    	var y = x.childNodes[0];
    	console.log("Value: "+y.nodeValue);
    	*/

    	$("#addressdiv").html("<table class=\"table table-bordered\" id=\"suggestaddresstable\" ></table>");
    	$("#suggestaddresstable").html("<thead id=\"suggestaddressthead\" ></thead>");
    	$("#suggestaddresstable").append("<tbody id=\"suggestaddresstbody\" ></tbody>");

    	var tableheadhtml = "<tr><th>Building Name<br>大廈名稱</th><th>BuildingNoFrom<br>門牌號數</th>";
    	tableheadhtml += "<th>Street Name<br>街名</th><th>DcDistrict<br>區議會分區</th><th>Region<br>地區</th>";
    	tableheadhtml += "<th>Northing</th><th>Easting</th><th>Latitude<br>緯度</th>";
    	tableheadhtml += "<th>Longitude<br>經度</th></tr>";

    	$("#suggestaddressthead").html(tableheadhtml);


    	var suggestedAddressDOM = data.getElementsByTagName('SuggestedAddress');
    	for (var i = 0; i < suggestedAddressDOM.length; i++) {
    		console.log("Index:"+i);

    		Latitude

    		var engAddressDOM = suggestedAddressDOM[i].getElementsByTagName('EngPremisesAddress');

    		var EngBuildingName = extractElementfromDOM(engAddressDOM[0], "BuildingName");
    		var EngStreetName = extractElementfromDOM(engAddressDOM[0], "StreetName");
    		var EngBuildingNoFrom = extractElementfromDOM(engAddressDOM[0], "BuildingNoFrom");
    		var EngBuildingNoTo = extractElementfromDOM(engAddressDOM[0], "BuildingNoTo");
    		var EngDcDistrict = extractElementfromDOM(engAddressDOM[0], "DcDistrict");
    		var EngRegion = extractElementfromDOM(engAddressDOM[0], "Region");

    		var chiAddressDOM = suggestedAddressDOM[i].getElementsByTagName('ChiPremisesAddress');

    		var chiBuildingName = extractElementfromDOM(chiAddressDOM[0], "BuildingName");
    		var chiStreetName = extractElementfromDOM(chiAddressDOM[0], "StreetName");
    		var chiBuildingNoFrom = extractElementfromDOM(chiAddressDOM[0], "BuildingNoFrom");
    		var chiBuildingNoTo = extractElementfromDOM(chiAddressDOM[0], "BuildingNoTo");
    		var chiDcDistrict = extractElementfromDOM(chiAddressDOM[0], "DcDistrict");
    		var chiRegion = extractElementfromDOM(chiAddressDOM[0], "Region");


    		var Northing = extractElementfromDOM(suggestedAddressDOM[i], "Northing");
    		var Easting = extractElementfromDOM(suggestedAddressDOM[i], "Easting");
    		var Latitude = extractElementfromDOM(suggestedAddressDOM[i], "Latitude");
    		var Longitude = extractElementfromDOM(suggestedAddressDOM[i], "Longitude");

    		var tablebodyhtml = "<tr>";
	    	tablebodyhtml += "<td>"+EngBuildingName+"<br>"+chiBuildingName+"</td>";
	    	tablebodyhtml += "<td>"+EngBuildingNoFrom+(EngBuildingNoTo?"-"+EngBuildingNoTo:"")+"</td>";
	    	tablebodyhtml += "<td>"+EngStreetName+"<br>"+chiStreetName+"</td>";
	    	tablebodyhtml += "<td>"+EngDcDistrict+"<br>"+chiDcDistrict+"</td>";
	    	tablebodyhtml += "<td>"+EngRegion+"<br>"+chiRegion+"</td>";
	    	tablebodyhtml += "<td>"+Northing+"</td>";
	    	tablebodyhtml += "<td>"+Easting+"</td>";
	    	tablebodyhtml += "<td>"+Latitude+"</td>";
	    	tablebodyhtml += "<td>"+Longitude+"</td>";
	    	tablebodyhtml += "</tr>";


    		$("#suggestaddresstbody").append(tablebodyhtml);

    	}

    	console.log("Length:"+suggestedAddressDOM.length);


    	/*

        var long = data.getElementsByTagName("Longitude");
        var lat = data.getElementsByTagName("Latitude");

        $("#long").val(long[0].innerHTML);
        $("#lat").val(lat[0].innerHTML);

        dataDOM = data;

        var nlong = parseFloat(long[0].innerHTML);
        var nlat = parseFloat(lat[0].innerHTML);

        //loadmap_new(nlong,nlat);

        suggestedAddressDOM = data.getElementsByTagName("SuggestedAddress");

        for (var item in suggestedAddressDOM) {
        	console.log("Index:"+item);
        	console.log("BuildingName:"+suggestedAddressDOM[item].getElementsByTagName("BuildingName")[0].nodeValue);
        	console.log("Latitude:"+suggestedAddressDOM[item].getElementsByTagName("Latitude")[0].nodeValue);
        	console.log("Longitude:"+suggestedAddressDOM[item].getElementsByTagName("Longitude")[0].nodeValue);
        	console.log("Latitude"+suggestedAddressDOM[item].getElementsByTagName("Latitude")[0].nodeValue);
        }

        */

    });

	/*

	$.get("books.xml", function(data, status){
	    var x = data.getElementsByTagName('title')[1];
	    var y = x.childNodes[0];
	    console.log("Value");
	    console.log("Value"+y.nodeValue);

    });*/

  });

});
