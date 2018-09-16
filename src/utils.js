export const centerGameObjects = (objects) => {
    objects.forEach(function (object) {
        object.anchor.setTo(0.5);
    });
};

export const initializeCordova = () => {
    const app = {
        initialize: function () {
            document.addEventListener(
                'deviceready',
                this.onDeviceReady.bind(this),
                false
            )
        },

        onDeviceReady: function () {
            this.receivedEvent('deviceready')

            // When the device is ready, start Phaser Boot state.
            window.game.state.start('Boot')
        },

        receivedEvent: function (id) {
            console.log('Received Event: ' + id)
        }
    };

    app.initialize();
};
