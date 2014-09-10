define([
    "dojo/_base/declare",
    "require",

    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    
    'dojo/text!./HeaderNav.html'
], function (declare, require, _WidgetBase, _TemplatedMixin, template) {
    
	return declare([_WidgetBase, _TemplatedMixin], {
		
        templateString: template,

        logoUrl: require.toUrl("./resources/images/logo.png"),
        
        postCreate: function () {
            this.inherited(arguments);
            
            this.init();
        },
        
        init: function () {
        	// Create the dropdown bases
        	$("<select/>").appendTo("#navigation");

        	// Create default option "Go to..."
        	$("<option/>", {
        		"selected" : "selected",
        		"value" : "",
        		"text" : "Menu"
        	}).appendTo("#navigation select");

        	// Populate dropdowns with the first menu items
        	$("#navigation li a").each(function() {
        		var el = $(this);
        		$("<option/>", {
        			"value" : el.attr("href"),
        			"text" : el.text()
        		}).appendTo("#navigation select");
        	});

        	// make responsive dropdown menu actually work
        	$("#navigation select").change(function() {
        		window.location = $(this).find("option:selected").val();
        	});
        },

        destroy: function () {
        	this.inherited(arguments);
        }
        
    });
	
});