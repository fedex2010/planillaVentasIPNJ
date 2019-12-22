onRecaptchaLoadCallback =  () => {
    var clientId = grecaptcha.render('recaptchaV3', {
        'sitekey': '6LfEgL8UAAAAAEKZ2ZWSBeNYd8dg6HuUZl35CrI5',
        'badge': 'inline',
        'size': 'invisible'
    });

    grecaptcha.ready( () => {
        grecaptcha.execute(clientId, {
                action: 'homepage'
            })
            .then( token => {
                window.tokenCatpcha = token

                console.log( "window.tokenCatpcha ")
                console.log(  window.tokenCatpcha )
            });
    });
}