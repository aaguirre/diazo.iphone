		var jq = $;
	    $('#mainPage').live('pageinit', function () {
             //Your code for each page load here
             $("a[href^='http://localhost:8080/portal/']").each(function(){ 
		        this.href = this.href.replace("http://localhost:8080/portal/", "");
		     });
		    $("form[action^='http://localhost:8080/portal/']").each(function(){ 
		        this.action = this.action.replace("http://localhost:8080/portal/", "");
		    }); 
       });