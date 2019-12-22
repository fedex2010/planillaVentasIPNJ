//buhonbank.js

window.tracking.initUserMedia_ = function (element, opt_options) {
    window.navigator.mediaDevices.getUserMedia({
        video: true,
        audio: !!(opt_options && opt_options.audio)
    }, function (stream) {
        try {
            element.src = window.URL.createObjectURL(stream);
        } catch (err) {
            element.src = stream;
        }
    }, function () {
        throw Error('Cannot capture user camera.');
    }
    );
};

