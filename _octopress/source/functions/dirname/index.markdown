---
layout: page
title: "JavaScript dirname function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/dirname:388
- /functions/view/dirname
- /functions/view/388
- /functions/dirname:388
- /functions/388
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's dirname

{% codeblock filesystem/dirname.js lang:js https://raw.github.com/kvz/phpjs/master/functions/filesystem/dirname.js raw on github %}
function dirname (path) {
  // http://kevin.vanzonneveld.net
  // +   original by: Ozh
  // +   improved by: XoraX (http://www.xorax.info)
  // *     example 1: dirname('/etc/passwd');
  // *     returns 1: '/etc'
  // *     example 2: dirname('c:/Temp/x');
  // *     returns 2: 'c:/Temp'
  // *     example 3: dirname('/dir/test/');
  // *     returns 3: '/dir'
  return path.replace(/\\/g, '/').replace(/\/[^\/]*\/?$/, '');
}
{% endcodeblock %}

 - [view on github](https://github.com/kvz/phpjs/blob/master/functions/filesystem/dirname.js)
 - [edit on github](https://github.com/kvz/phpjs/edit/master/functions/filesystem/dirname.js)

### Example 1
This code
{% codeblock lang:js example %}
dirname('/etc/passwd');
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
'/etc'
{% endcodeblock %}

### Example 2
This code
{% codeblock lang:js example %}
dirname('c:/Temp/x');
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
'c:/Temp'
{% endcodeblock %}

### Example 3
This code
{% codeblock lang:js example %}
dirname('/dir/test/');
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
'/dir'
{% endcodeblock %}


### Other PHP functions in the filesystem extension
{% render_partial _includes/custom/filesystem.html %}
