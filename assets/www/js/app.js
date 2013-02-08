$('#btnsearch').live('click', function () {

	$("#result").hide();
	$("#badges").html('');
	$("#result").html('');

	$('#canvasloader-container').show();
	$('#centeror').html('');

	$.mobile.changePage('#dialog', 'pop', true, true);

	var search = $("#search").val();

	$.ajax({
	    url: 'https://coderwall.com/' + search + '.json?callback=?',
	    dataType: "json",
	    timeout: 10000,
	    success: function (data) {	

	    	$("#search").val('');   	  	

	        $.mobile.changePage($("#pagerest"), { transition: "pop"});
	        
	        $('.wrapper').hide();
	        $("#result").show();

	        $.each(data, function (key, val) {

	            var username = val.username;
	            var name = val.name;
	            var location = val.location;
	            var github = val.accounts.github;
	            $('#result').append('<h2>' + name + '</h2>');
	            $('#result').append('<h3>' + location + '</h3>');	            

	            $.each(val.badges, function (key2, val2) {
	                var badge_name = val2.name;
	                var badge_desp = val2.description;
	                var badge_img = val2.badge;
	                $('#badges').append('<li id=list><img class=imgb src=' + badge_img + '/><h3 >' + badge_name + '</h3><p class=rcontent >' + badge_desp + '</p></li>');
	                $('#badges').listview('refresh');

	            });

	        });
	    },
	    error: function (data) {
	    	$("#search").val('');
	    	$('#canvasloader-container').hide();	    	
	    	$('#centeror').append('<h2>Username does not found</h2>');	    	
	    	$('#centeror').append($('<a class="backinit" id="back" href="#container" />').text('Ok').buttonMarkup({
			    theme  : 'a',			    
			    mini   : false,
			    inline : false
			}));
	    }
	});  

});