var jqueryCookieConsent = (function() {

    var _$cookie,
        _cName = "cookieConsent",
        _lifetime,

        /**
         * Cookie checker
         */
        _checkCookie = function() {
            var cookieConsent = _getCookie();

            if (cookieConsent === "" || cookieConsent === " ") { // check if cookie is not set
                _showAlert();
            }
        },

        /**
         * Get cookie
         */
        _getCookie = function() {
            var name = _cName + "=";
            var cData = document.cookie.split(';');
            for(var i=0; i<cData.length; i++) {
                var r = cData[i];
                while (r.charAt(0)==' ') r = r.substring(1);
                if (r.indexOf(name) == 0) return r.substring(name.length,r.length);
            }
            return "";
        },

        /**
         * Create cookie
         */
        _createCookie = function() {
            var d = new Date();
            d.setTime(d.getTime() + (_lifetime*24*60*60*1000));
            var ex = "expires="+d.toUTCString();
            document.cookie = "cookieConsent=1; " + ex;
        },

        /**
         * Show cookie alert
         */
        _showAlert = function() {
            _$cookie.show();
        },

        /**
         * Bind events
         */
        _events = function () {
            $('body').on('click', '.cookieConsent-c', function(e_) {
                e_.preventDefault();
                _$cookie.hide(); // hide cookie alert
                _createCookie();
            });
        },

        /**
         * Constructor
         */
        _init = function(t_) {
            _$cookie = $("#cookieConsent");
            _lifetime = t_;

            _events();
            _checkCookie();
        };

    /**
     * Public API
     */
    return {

        /**
         * Constructor
         */
        initialize: _init
    };

})();