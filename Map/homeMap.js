$(function(){

	var testimonials = ["<b>'We recently hired a bootcamp grad at SolarCity, best decision we've ever made'</b> - Ilan Musk (CEO Tesla)","<b>'Since 2013, we've constantly recruited bootcamp alum. They create a hardworking atmosphere that makes me love coming to work everyday'</b> - Mark Zuckerberg (CEO Facebook)", "<b>'I met 2 of the most intelligent people I've ever known while at Telegraph Academy...3 months later we have a million-dollar business'</b> - Eric Eng(CEO bullcrap.com)","<b>'My first job was at a company that had already hired alumni of another school, afterwards I was told they put in a good word'</b> - Bosa Saposki (Software Engineer Twitter)"];

	var alpha = ['a','b','c','d'];

// console.log(testimonials.length);
	$('h1').append(testimonials[Math.floor(Math.random()*testimonials.length)]);

	function randomQuote(){
		$('h1').empty();
		$('h1').hide().append(testimonials[Math.floor(Math.random()*testimonials.length)]).fadeIn('slow');
	}


	setInterval(randomQuote, 5000);

 	$(".mapcontainer").mapael({
		map : {
			name : "usa_states",
            defaultPlot: {
                size:40,
                eventHandlers: {
                    mouseover: function (e, id, mapElem, textElem, elemOptions) {
                        if (typeof elemOptions.myText != 'undefined') {
                            $('.myText span').html(elemOptions.myText).css({display:'none'}).fadeIn('slow');
                        }
                    }
                }
            }
		},
		plots: {
			'ny' : {
				latitude: 40.717079,
				longitude: -74.00116,
				tooltip: {content : "New York : 32 Boot Camps"},
                myText: "<img src='photos/newyork/ga.png'><img src ='photos/newyork/byteacademy.png'><img src ='photos/newyork/dsl.jpg'><img src ='photos/newyork/flatironschool.png'><img src ='photos/newyork/fullstack.png'><img src ='photos/newyork/makeschool.png'>"
			},
			'atl' : {
				latitude: 33.7489954,
				longitude:  -84.3879824,
				tooltip: {content : "Atlanta : 6 Boot Camps"},
                myText: "<img src ='photos/atl/atlantacode.jpeg'><img src ='photos/atl/codeu.png'><img src ='photos/atl/cribb.png'><img src ='photos/atl/tts.png'><img src ='photos/atl/lampcamp.png'><img src ='photos/atl/theironyard.png'> "
			},
			'sf' : {
				latitude: 37.792032,
				longitude: -122.394613,
				tooltip: {content : "San Francisco : 38 Boot Camps, 4 registered grads"},
                myText: "<img src ='photos/sf/appac.png'><img src ='photos/sf/codinghouse.png'><img src ='photos/sf/galvanize.png'><img src ='photos/sf/hack-reactor-logo.png'><img src ='photos/sf/learntechlabs.jpg'><img src ='photos/sf/tga.jpg'>"
			},
			'au' : {
				latitude: 30.267153,
				longitude: -97.7430608,
				tooltip: {content : "Austin : 14 Boot Camps"},
                myText: "<img src ='photos/austin/aca.jpeg'><img src ='photos/austin/codercamps.png'><img src ='photos/austin/codeup-logo.png'><img src ='photos/austin/galvanize.png'><img src ='photos/austin/makersquare.png'><img src ='photos/austin/scale.png'>"
			},
            'la' : {
				latitude: 34.025052,
				longitude: -118.192006,
				tooltip: {content : "Los Angeles : 13 Boot Camps"},
                myText: "<img src ='photos/la/angelhack.jpg'><img src ='photos/la/codesmith.png'><img src ='photos/la/learning-fuze-20logo-202-compressor.png'><img src ='photos/la/orangecounty.png'><img src ='photos/la/notch8.png'><img src ='photos/la/makersquare-logo.png'>"
			},
            'dallas' : {
				latitude: 32.784881,
				longitude: -96.808244,
				tooltip: {content : "Dallas : 12 Boot Camps"},
                myText: "<img src ='photos/dallas/codingdojo.png'><img src ='photos/dallas/dev-mountain-logo.png'><img src ='photos/dallas/guild.png'>"
			},
            'miami' : {
				latitude: 25.789125,
				longitude:  -80.205674,
				tooltip: {content : "Miami : 6 Boot Camps"},
                myText: "<img src ='photos/mia/ironhack.png'><img src ='photos/mia/thinkful.png'><img src ='photos/mia/wyncode.jpg'>"
			},
            'chi' : {
				latitude: 41.8781136,
				longitude:  -87.6297982,
				tooltip: {content : "Chicago : 14 Boot Camps, 1 Registered Grad"},
                myText: "<img src ='photos/chicago/aclc.png'><img src ='photos/chicago/code-fellows.png'><img src ='photos/chicago/codechicagologo.png'><img src ='photos/chicago/codingtemple.png'><img src ='photos/chicago/mobilemakersa.png'><img src ='photos/chicago/starterleague.jpeg'>"
			},'port' : {
				latitude: 45.5230622,
				longitude:  -122.6764816,
				tooltip: {content : "Portland : 19 Boot Camps"},
                myText: "<img src ='photos/portland/epicodus-logo.png'><img src ='photos/portland/guild.png'><img src ='photos/portland/portland-code-school-logo.png'>"
			},'indy' : {
				latitude: 39.768403,
				longitude:  -86.158068,
				tooltip: {content : "Indianapolis : 2 Boot Camps"},
                myText: "<img src ='photos/indy/1150.png'><img src ='photos/indy/the-iron-yard.png'>"
			},'bost' : {
				latitude: 42.3600825,
				longitude:  -71.0588801,
				tooltip: {content : "Boston : 19 Boot Camps"},
                myText: "<img src ='photos/boston/apprentice.png'><img src ='photos/boston/koru.png'><img src ='photos/boston/launch-academy-logo.jpg'><img src ='photos/boston/startup.png'><img src ='photos/boston/agi.png'>"
			},
            'seattle' : {
				latitude: 47.599571,
				longitude: -122.319426,
				tooltip: {content : "Seattle : 12 Boot Camps"},
                myText: "<img src ='photos/seattle/ada-logo.png'><img src ='photos/seattle/codebuild.png'><img src ='photos/seattle/codecore.jpg'><img src ='photos/seattle/datascience.jpg'><img src ='photos/seattle/lighthouse.png'>"
			}
		}
	});
});