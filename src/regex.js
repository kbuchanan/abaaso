/**
 * Regex patterns used through abaaso
 *
 * `url` was authored by Diego Perini
 * 
 * @class regex
 * @namespace abaaso
 */
var regex = {
	android                 : /android/i,
	alphanum                : /^[a-zA-Z0-9]+$/,
	asc                     : /\s*asc/ig,
	blackberry              : /blackberry/i,
	"boolean"               : /^(0|1|true|false)?$/,
	boolean_number_string   : /boolean|number|string/,
	caps                    : /([A-Z])/g,
	cdata_value             : /\&|\<|\>|\"|\'|\t|\r|\n|\@|\$/g,
	checked_disabled        : /checked|disabled/i,
	chrome                  : /chrome/i,
	complete_loaded         : /^(complete|loaded)$/i,
	del                     : /^del/,
	desc                    : /\s*desc$/ig,
	domain                  : /^[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/,
	down_up                 : /down|up/,
	email                   : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	element_update          : /innerHTML|innerText|textContent|type|src/,
	escape                  : /[-[\]{}()*+?.,\\^$|#\s]/g,
	firefox                 : /firefox/i,
	get_headers             : /^(head|get|options)$/,
	hash                    : /\#/,
	header_value            : /:.*/,
	http_ports              : /80|443/,
	hyphen                  : /-/g,
	ie                      : /msie|ie/i,
	input_button            : /button|submit|reset/,
	integer                 : /(^-?\d\d*$)/,
	ip                      : /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
	is_xml                  : /<[^>]+>[^<]*]+>/,
	item_xml                : /item|xml/g,
	ios                     : /ipad|iphone/i,
	json_maybe              : /json|plain|javascript/,
	json_wrap               : /[\{\[].*[\}\]]/,
	jsonp_1                 : /]|'|"/g,
	jsonp_2                 : /\./g,
	linux                   : /linux|bsd|unix/i,
	nil                     : /^null/i,
	no                      : /no/i,
	not_endpoint            : /.*\//,
	notEmpty                : /\w{1,}/,
	number                  : /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)|number/,
	number_format_1         : /.*\./,
	number_format_2         : /\..*/,
	number_present          : /\d{1,}/,
	number_string           : /number|string/i,
	null_undefined          : /null|undefined/,
	observer_allowed        : /click|error|key|mousedown|mouseup|submit/i,
	observer_globals        : /body|document|window/i,
	object_undefined        : /object|undefined/,
	opera                   : /opera/i,
	osx                     : /macintosh/i,
	phone                   : /^([0-9\(\)\/\+ \-\.]+)$/,
	placeholders            : /\{\{.*\}\}/g,
	placeholder_bars        : /\{\{|\}\}/g,
	playbook                : /playbook/i,
	plural                  : /s$/,
	put_post                : /^(post|put)$/i,
	quotes                  : /(^")|("$)/g,
	radio_checkbox          : /^(radio|checkbox)$/i,
	reflect                 : /function\s+\w*\s*\((.*?)\)/,
	root                    : /^\/[^\/]/,
	route_bang              : /\#|\!\//g,
	route_nget              : /^(head|options)$/i,
	route_methods           : /^(all|delete|get|put|post|head|options)$/i,
	safari                  : /safari/i,
	scheme                  : /.*\/\//,
	select                  : /select/i,
	selector_many           : /\:|\./,
	selector_complex        : /\s|\>/,
	sensitivity_types       : /ci|cs|ms/,
	set_del                 : /^(set|del|delete)$/,
	slash_forward           : /\//g,
	sort_needle             : /:::(.*)$/,
	space_hyphen            : /\s|-/,
	spaces                  : /\s+/g,
	string_boolean          : /^(true|false)$/i,
	string_object           : /string|object/i,
	string_true             : /^true$/i,
	svg                     : /svg/i,
	top_bottom              : /top|bottom/i,
	true_undefined          : /true|undefined/i,
	url                     : /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
	walk_1                  : /\]$/,
	walk_2                  : /\]/g,
	walk_3                  : /\.|\[/,
	webos                   : /webos/i,
	whitespace              : /^\s+|\s+$/g,
	windows                 : /windows/i,
	xml                     : /xml/i
};
