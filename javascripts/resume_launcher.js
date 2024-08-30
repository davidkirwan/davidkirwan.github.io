$(document).ready(function() {
	var settings = {
		showForks: false,
		title: {
			color: 'white',
			bold: false,
			italic: true
		},
		command: {
			color: 'green',
			bold: true,
			italic: false,
			backgroundColor: 'pink'
		},
		name: {
			color: 'purple'
		},
		extraDetails: '/resume/extra-details.json',
		customCommands: [
			{
				name: 'countries',
				title: 'Countries',
				description: 'countries that I\'ve been to',
				type: 'array',
				data: ['extra', 'countriestravelledto'],
				handlers: {
					organisation: function(value) {
						return value.name;
					},
					title: function(value) {
						return value.cities.join(', ');
					},
					date: function(value) {
						return value.timeperiod;
					}
				}
			}
		]
	};
	$('body').CMDResume('/resume/details.json', settings);
});

