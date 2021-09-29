$(document).ready( function( )
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
} );
