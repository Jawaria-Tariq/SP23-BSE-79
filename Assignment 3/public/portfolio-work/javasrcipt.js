$(document).ready(function() {
    console.log("Document ready");

    $('.load-project').click(function() {
        console.log("See More button clicked");

        const filePath = $(this).data('file');
        console.log("File path:", filePath);


        $.get(filePath, function(data) {
            console.log("File data loaded");
            $('#project-content').html('<pre>' + data + '</pre>');
            $('#project-modal').css('display', 'flex');
        }).fail(function() {
            console.log("Error loading file");
            $('#project-content').html('<p>Error loading project data.</p>');
        });
    });

    $('.close-btn').click(function() {
        console.log("Close button clicked");
        $('#project-modal').css('display', 'none');
    });

    $(window).click(function(event) {
        if ($(event.target).is('#project-modal')) {
            console.log("Clicked outside modal");
            $('#project-modal').css('display', 'none');
        }
    });
});
