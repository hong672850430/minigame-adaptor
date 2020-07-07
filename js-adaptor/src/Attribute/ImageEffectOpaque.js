Bridge.assembly("unity_project", function ($asm, globals) {
    "use strict";

    Bridge.define("MiniGameAdaptor.ImageEffectOpaque", {
        inherits: [System.Attribute],
        ctors: {
            get $ctorDefault() { return this.ctor },
            ctor: function () {
                this.$initialize();
                System.Attribute.ctor.call(this);
            }
        }
    });
});
