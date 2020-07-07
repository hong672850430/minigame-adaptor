Bridge.assembly("unity-script-converter", function ($asm, globals) {
    "use strict";

    Bridge.define("MiniGameAdaptor.UI.Scrollbar", {
        inherits: [MiniGameAdaptor.UI.Selectable,MiniGameAdaptor.UI.ICanvasElement,MiniGameAdaptor.EventSystems.IBeginDragHandler,MiniGameAdaptor.EventSystems.IInitializePotentialDragHandler,MiniGameAdaptor.EventSystems.IDragHandler],
        props: {
            direction: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            handleRect: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            numberOfSteps: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            onValueChanged: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            size: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            value: {
                get: function () {
                    throw new System.Exception("not impl");
                },
                set: function (value) {
                    throw new System.Exception("not impl");
                }
            },
            MiniGameAdaptor$UI$ICanvasElement$transform: {
                get: function () {
                    throw new System.Exception("not impl");
                }
            }
        },
        alias: [
            "OnMove", "MiniGameAdaptor$EventSystems$IMoveHandler$OnMove",
            "OnPointerDown", "MiniGameAdaptor$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "MiniGameAdaptor$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            FindSelectableOnDown: function () {
                throw new System.Exception("not impl");
            },
            FindSelectableOnLeft: function () {
                throw new System.Exception("not impl");
            },
            FindSelectableOnRight: function () {
                throw new System.Exception("not impl");
            },
            FindSelectableOnUp: function () {
                throw new System.Exception("not impl");
            },
            GraphicUpdateComplete: function () {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$UI$ICanvasElement$GraphicUpdateComplete: function () {
                throw new System.Exception("Exception");
            },
            LayoutComplete: function () {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$UI$ICanvasElement$LayoutComplete: function () {
                throw new System.Exception("Exception");
            },
            OnBeginDrag: function (eventData) {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$EventSystems$IBeginDragHandler$OnBeginDrag: function (eventData) {
                throw new System.Exception("Exception");
            },
            OnDrag: function (eventData) {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$EventSystems$IDragHandler$OnDrag: function (eventData) {
                throw new System.Exception("Exception");
            },
            OnInitializePotentialDrag: function (eventData) {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$EventSystems$IInitializePotentialDragHandler$OnInitializePotentialDrag: function (eventData) {
                throw new System.Exception("Exception");
            },
            OnMove: function (eventData) {
                throw new System.Exception("not impl");
            },
            OnPointerDown: function (eventData) {
                throw new System.Exception("not impl");
            },
            OnPointerUp: function (eventData) {
                throw new System.Exception("not impl");
            },
            Rebuild: function (executing) {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$UI$ICanvasElement$Rebuild: function (executing) {
                throw new System.Exception("Exception");
            },
            SetDirection: function (direction, includeRectLayouts) {
                throw new System.Exception("not impl");
            },
            MiniGameAdaptor$UI$ICanvasElement$IsDestroyed: function () {
                throw new System.Exception("Exception");
            }
        }
    });
});

 
