function call_user_method_array(method, obj, params) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir
    // %        note 1: Deprecated in PHP
    // *     example 1: call_user_method_array('alert', 'window', ['Hello!']);
    // *     returns 1: 'Hello!'
    
    var func;
    func = eval(obj+"['"+method+"']");

    if (typeof func != 'function') {
        throw new Exception(func + ' is not a valid method');
    }

    return func.apply(null, params);
}
