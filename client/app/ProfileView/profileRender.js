$( document ).ready(function() {

	var profiles = [Shanna,Darryl,Bosa,Victor,Kristina];

	var profileGenerate = function(profileArray){
		for(var i=0;i<profileArray.length;i++){
			$('ul').append('<li>' +'<img src='+ profileArray[i].imgUrl + '>' + '<br>' + profileArray[i].name + '<br>' + profileArray[i].github  + '<br>' + profileArray[i].email + '<br>' + profileArray[i].summary + '</li>' + '<br>');
		}
	};










profileGenerate(profiles);

});