$('#btnsearch').live('click', function () {

	$("#result").html('');
	$("#badges").html('');

	var search = $("#search-basic").val();

	$.ajax({
	    url: 'https://coderwall.com/' + search + '.json?callback=?',
	    dataType: "json",
	    timeout: 10000,
	    success: function (data) {

	        $.mobile.changePage($("#pagerest"), { transition: "slide"});

	        $.each(data, function (key, val) {

	            var username = val.username;
	            var name = val.name;
	            var location = val.location;
	            var github = val.accounts.github;
	            $('#result').append('<h2>' + name + '</h2>');
	            $('#result').append('<h3>' + location + '</h3>');
	            //$('#result').append('<p>Github account: <a class=ui-link rel=external target=_blank href=https://github.com/' + github + ' target=_blank>' + github + '</a></p><br/>');

	            $.each(val.badges, function (key2, val2) {
	                var badge_name = val2.name;
	                var badge_desp = val2.description;
	                var badge_img = val2.badge;
	                $('#badges').append('<li><img src=' + badge_img + '/><h3 >' + badge_name + '</h3><p>' + badge_desp + '</p></li>');
	                $('#badges').listview('refresh');

	            });

	        });
	    },
	    error: function (data) {
	        alert('Username does not found');
	    }
	});    

});