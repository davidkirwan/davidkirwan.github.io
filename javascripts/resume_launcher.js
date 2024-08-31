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
        customCommands: [{
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
        }, {
            name: 'projects',
            title: 'Projects',
            description: 'List of interesting projects I\'ve been involved with or worked on.',
            type: 'array',
            data: ['extra', 'projectscompleted'],
            handlers: {
                title: function(value) {
                    return value.title;
                },
                description: function(value) {
                    return value.description;
                },
                url: function(value) {
                    return value.url;
                }
            }
        }]
    };
    $('body').CMDResume('/resume/details.json', settings);
});
