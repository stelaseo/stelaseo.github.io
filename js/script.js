function setEmailAddress( )
{
    var json = $.getJSON( "contents/MailTo.json", function( )
    {
        var myName = $("#myName");
        json = json["responseJSON"];
        if( myName != undefined && myName != null && "email" in json )
        {
            var addr = json["email"].replace( "@A@T@", "@" );
            for( var i = 0; i < 4; i++ )
            {
                addr = addr.replace( "#D#O#T#", "." );
            }
            myName.attr( "href", "mailto:" + addr );
            myName.attr( "title", "Send an email" );
            var btnSendEmail = $("#btnSendEmail");
            if( btnSendEmail != undefined && btnSendEmail != null )
            {
                btnSendEmail.attr( "href", "mailto:" + addr );
            }
        }
    } );
}

function updateTheme( darkMode )
{
    if( darkMode )
    {
        $("#themeMarkerLight").css( "display", "none" );
        $("#themeMarkerDark").css( "display", "block" );
        localStorage.setItem( "theme", "dark-mode" );
    }
    else
    {
        $("#themeMarkerLight").css( "display", "block" );
        $("#themeMarkerDark").css( "display", "none" );
        localStorage.setItem( "theme", "" );
    }
}

window.addEventListener( "load", function( )
{
    setEmailAddress( );
    updateTheme( window.matchMedia && window.matchMedia( "(prefers-color-scheme: dark)" ).matches );
} );

window.matchMedia( "(prefers-color-scheme: dark)" ).addEventListener( "change", event =>
{
    updateTheme( event.matches );
} );
