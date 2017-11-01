%SCRIPT

// this does a straightforward substitution, i.e., Esc-a-Esc -> \alpha, 
// Esc-cq-Esc -> \vartheta, etc.
//
// Capitals are handled in the code, so Esc-A-Esc -> \Alpha, etc. 
//
// Other substitutions can also be added here, e.g., I use Esc-.-Esc -> \circ
// and Esc-1-Esc -> \mbf{1} (\mbf = \mathbf)
var dict = {
  "a" : "alpha"     ,
  "b" : "beta"      ,
  "c" : "chi"       ,
  "d" : "delta"     ,
  "e" : "epsilon"   ,
  "f" : "phi"       ,
  "g" : "gamma"     ,
  "h" : "eta"       ,
  "i" : "iota"      ,
  "j" : "varphi"    ,
  "k" : "kappa"     ,
  "l" : "lambda"    ,
  "m" : "mu"        ,
  "n" : "nu"        ,
  "o" : "omega"     ,
  "p" : "pi"        ,
  "q" : "theta"     ,
  "th": "theta"     ,
  "r" : "rho"       ,
  "s" : "sigma"     ,
  "t" : "tau"       ,
  "u" : "upsilon"   ,
//  "v" :
  "w" : "omega"     ,
  "x" : "xi"        ,
  "y" : "psi"       ,
  "z" : "zeta"      ,
 "cq" : "vartheta"  ,
 "ce" : "varepsilon",
 "ck" : "varkappa"  ,
 "cr" : "varrho"    ,
 "cp" : "varpi"     ,
 "cs" : "varsigma"  ,
 
 "."  : "circ"      ,
 "1"  : "mbf{1}"    ,
 "'"  : "dot{"
}

var ln = cursor.lineNumber()
var cn = cursor.columnNumber()

if (cn > 1) {
  var s = editor.document().cursor(ln,cn-3,ln,cn)
  var t = s.selectedText()
  var i = t.indexOf("¦");
  
  var key = t.slice(i+1)
  if (i != -1 && ((key.length == 1 && key.toLowerCase() in dict) 
	       || (key.length  > 1 && key in dict))) {
    for (var k = 0; k < t.length-i; k++) {
      cursor.deletePreviousChar()
    }
    if (key.length == 1 && /[A-Z]/.test(key)) {
      var sub = dict[key.toLowerCase()]
      editor.write("\\" + sub[0].toUpperCase() + sub.slice(1))
    } else {
      editor.write("\\" + dict[key])
    }
  } else {
    editor.write("¦");
  }
} else {
  editor.write("¦")
}

