define([
    "dojo/_base/declare",
    "require",

    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    
    'dojo/text!./Footer.html'
], function (declare, require, _WidgetBase, _TemplatedMixin, template) {
    
	return declare([_WidgetBase, _TemplatedMixin], {
		
        templateString: template,

        logoUrl: require.toUrl("./resources/images/logo.png"),
        
        phoneUrl: require.toUrl("./resources/images/phone.png"),
        
        addressUrl: require.toUrl("./resources/images/address.png"),
        
        mailUrl: require.toUrl("./resources/images/mail.png"),
        
        destroy: function () {
        	this.inherited(arguments);
        }
        
    });
	
});