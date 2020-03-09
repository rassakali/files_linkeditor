$(document).ready(function () {
	
	// A little bit of a hack - changing file icon...
    PluginLinkeditor_ChangeIcons = function () {
    	$("#filestable")
        .find("tr[data-type=file]")
        .each(function() {
            if (($(this).attr("data-mime") == "application/internet-shortcut") && ($(this).find("div.thumbnail").length > 0)) {
                if ($(this).find("div.thumbnail").hasClass("icon-link-custom") == false) {
                    $(this).find("div.thumbnail").addClass("icon icon-link-custom");
                }
            }
        });
    	
    	$("#recommendations")
        .find(".recommendation")
        .each(function() {
        	if(($(this).find(".extension").text() == '.URL' || $(this).find(".extension").text() == '.WEBLOC') && ($(this).find("div.thumbnail").length > 0)){
        		if ($(this).find("div.thumbnail").hasClass("icon-link-custom") == false) {
                    $(this).find("div.thumbnail").addClass("icon icon-link-custom");
                }
        	}
        });
    };
    
	if ($('#filesApp').val()) {
		    $('#app-content-files')
		        .add('#app-content-extstoragemounts')
		        .on('changeDirectory', function(e) {
		        	PluginLinkeditor_ChangeIcons();
		        })
		        .on('fileActionsReady', function(e) {
		        	PluginLinkeditor_ChangeIcons();
		        });
	}

});
