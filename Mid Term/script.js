
$(document).ready(function() {
    $('#load-projects').click(function() {
        $.get('project-1.txt', function(data) {
            $('#project-content').html('<pre>' + data + '</pre>');
        }).fail(function() {
            $('#project-content').html('<p>Error loading project data.</p>');
        });
    });
});
