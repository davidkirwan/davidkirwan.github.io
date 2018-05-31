    var settings = {
        showForks: false, // For Github
        title: {
            color: "white",
            bold: false,
            italic: true
        },
        command: {
            color: "green",
            bold: true,
            italic: false,
            backgroundColor: "pink"
        },
        name: {
            color: "purple"
        }
    };
    $(document).ready(function() { 
        $("body").CMDResume("/resume/details.json", "/resume/extra-details.json", settings); 
    });
