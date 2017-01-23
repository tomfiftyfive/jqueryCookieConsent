#jqueryCookieConsent
Basic cookie alert script with jQuery. No css.

Init script.

    // init cookie consent, param.: cookie lifetime in days
    jqueryCookieConsent.initialize(365);
    
Setup alert.

    <div id="cookieConsent" style="display: none">
        <p>This website uses cookies so that we can provide you with the best user experience. Get more information
            <a href="#">here</a>.</p>
        <p class="cookieConsent-c">Hide</p>
    </div>
