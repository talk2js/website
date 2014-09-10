define([
    "dojo/_base/declare",
    "require",

    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    
    'dojo/text!./SliderShow.html'
], function (declare, require, _WidgetBase, _TemplatedMixin, template) {
    
	return declare([_WidgetBase, _TemplatedMixin], {
		
        templateString: template,

        image1: require.toUrl("./resources/images/slidershow/1.jpg"),
        
        image2: require.toUrl("./resources/images/slidershow/2.jpg"),
        
        image3: require.toUrl("./resources/images/slidershow/3.jpg"),
        
        image4: require.toUrl("./resources/images/slidershow/4.jpg"),
        
        image5: require.toUrl("./resources/images/slidershow/5.jpg"),
        
        postCreate: function () {
            this.inherited(arguments);
            
            this.init();
        },
        
        init: function () {
        	$("#prod_nav ul").tabs("#panes > div", {
    			effect : 'fade',
    			fadeOutSpeed : 300
    		});
        },

        destroy: function () {
        	this.inherited(arguments);
        }
        
    });
	
});