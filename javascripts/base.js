/**
 * [parseURL 解析url]
 * @param  {[String]} url [url]
 * @return {[Object]}     [返回解析好的对象]
 */
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for ( ; i < len ; i++ ) {
                if ( !seg[i] ) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}

/*全屏*/
function fullScreen(){
    var body = document.getElementsByTagName('body')[0];
    if ( body.className.indexOf('j-fluid') >= 0 ){
        return body.className = '';
    }
    return body.className = 'j-fluid';
}
/**
 * [scrollToWindowTop 返回顶部]
 * @return {[type]} [description]
 */
function scrollToWindowTop(){
    var bodyDom = document.getElementById('J_body');
    bodyDom.scrollTop = 0;
}
function removeClassName(classStr , className){
    var regExp = new RegExp(' ' + className + ' ' , 'mg');
    return (' ' + classStr + ' ').replace(regExp , ' ').replace(/\s+/img ,' ').replace(/^\s*/mg ,'').replace(/\s*$/mg ,'');
}
/**
 * [showMenu 展示菜单]
 * @return {[type]} [description]
 */
function showMenu(target){
    var menuDom = document.getElementById('J_menu');
    if ( menuDom.className.indexOf('show') >= 0 ){
        target.className = removeClassName(target.className ,'show');
        return menuDom.className = removeClassName(menuDom.className , 'show');
    }
    target.className += ' show';
    menuDom.className += ' show';
}