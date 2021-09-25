odoo.define("odoo.oepetstore", function(require) { 
    "use strict";
    var WebClient = require('web.WebClient');
    var Widget = require('web.Widget');
    var HomePage = Widget.extend({
        template: 'some.template',
        events: {
            'click button': '_onClick',
        },
        init: function (parent, value) {
            this._super(parent);
            this.count = value;
        },
        _onClick: function () {
            this.count++;
            this.$('.val').text(this.count);
        },
    });

    var AbstractAction = require('web.AbstractAction');

    var ClientAction = AbstractAction.extend({
        start: function() {
            console.log("pet store home page loaded");
        }
    });


    var core = require('web.core');

    core.action_registry.add('petstore.homepage', ClientAction);
  }
)