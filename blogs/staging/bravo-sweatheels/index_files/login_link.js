// TODO: this could be replaced with $.cookie plugin
function get_cookie(check_name) {
    // first we'll split this cookie up into name/value pairs
    // note: document.cookie only returns name=value, not the other components
    var a_all_cookies = document.cookie.split(';');
    var a_temp_cookie = '';
    var cookie_name = '';
    var cookie_value = '';
    var b_cookie_found = false; // set boolean t/f default f

    for (i = 0; i < a_all_cookies.length; i++) {
        // now we'll split apart each name=value pair
        a_temp_cookie = a_all_cookies[i].split('=');
        // and trim left/right whitespace while we're at it
        cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
        // if the extracted name matches passed check_name
        if (cookie_name == check_name) {
            b_cookie_found = true;
            // we need to handle case where cookie has no value but exists (no = sign, that is):
            if (a_temp_cookie.length > 1) {
                cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
            }
            // note that in cases where cookie is initialized but no value, null is returned
            return cookie_value;
        }
        a_temp_cookie = null;
        cookie_name = '';
    }
    if (!b_cookie_found) {
        return null;
    }
}

function load_login() {
    var name = get_cookie('bravo_username');
    var uid = get_cookie('bravo_uid');

    // Determine the current path; remove leading slash, encode.
    var url = window.location.pathname + window.location.search + window.location.hash;
    var url_cleaned = encodeURIComponent(url.replace(/^\/|\/$/g, ''));

    // Define the destination path.
    var dest = '';
    if (url_cleaned && url_cleaned != '' && url_cleaned != '/user' && !url_cleaned.match(/profile/g) && !url_cleaned.match(/user/g)) {
        dest = '?destination=' + url_cleaned;
    }

    // Set links and destination.
    if (uid && uid != 0) {
        $("#login-link").html('<li><a href="/user/' + uid + '/edit">Me</a></li><li class="last"><a href="/logout' + dest + '">Log Out</a></li>');
    } else {
        $("#login-link").html('<li><a href="/user' + dest + '">Log In</a></li><li class="last"><a href="/user/register' + dest + '">Register</a></li>');
    }
}
