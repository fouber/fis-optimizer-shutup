module.exports = function(content){
    return content.replace(/"(?:[^\\"\r\n\f]|\\[\s\S])*"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|(?:\/\/[^\r\n\f]+|\/\*[\s\S]*?(?:\*\/|$))|(^|[^.\w])(debugger|(?:alert|console|console(\.\w+)+)\s*\([^()]+\))\s*;?/g, function(m, $1, $2){
        if($2) return $1;
        return m;
    }); 
};