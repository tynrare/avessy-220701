(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _markdownIt = _interopRequireDefault(require("markdown-it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var md = new _markdownIt["default"]();
var palette = null;
var textarea = null;
main();

function onkeypress(keyboardEvent) {
  switch (keyboardEvent.key) {
    case "Enter":
      if (keyboardEvent.ctrlKey) {
        resetInput();
      }

      if (keyboardEvent.shiftKey) {
        muteText();
      }

      insertNewLine();
      randomizePallete();
      break;

    default:
      insertText(keyboardEvent.key);
      break;
  }
}

function getActiveInput() {
  var c = textarea.children;
  var input = c[c.length - 2]; // last on is a brick element

  return input;
}

function insertText(text) {
  getActiveInput().innerHTML += text;
}

function muteText() {
  getActiveInput().classList.add("mute");
}

function insertNewLine() {
  var active = getActiveInput();

  if (active) {
    active.innerHTML = md.render(active.innerHTML);
  }

  var el = document.createElement("p");
  textarea.appendChild(el);
  var bar = textarea.querySelector("b");

  if (bar) {
    bar.parentElement.removeChild(bar);
    textarea.appendChild(bar);
  } else {
    textarea.innerHTML += "<b>▮</b>";
  }
}

function resetInput() {
  textarea.innerHTML = "";
}

function main() {
  window.addEventListener("keypress", onkeypress);
  window.addEventListener("click", _onclick);
  window.addEventListener("paste", _onpaste);
  textarea = document.querySelector("bb#main text");
}

function _onpaste(event) {
  var paste = (event.clipboardData || window.clipboardData).getData("text");

  if (!paste.length) {
    insertText("🍍");
    return;
  }

  insertText(paste);
}

function _onclick() {
  randomizePallete();
}

function _loadPalette() {
  palette = document.querySelector("db#palette").innerHTML;
  palette = palette.split("\n"); // Array[32]. Palette from https://lospec.com/palette-list/pineapple-32
}

function randomizePallete() {
  if (!palette) {
    _loadPalette();
  }

  var colors = palette.length;
  var colorA = Math.round(Math.random() * colors);
  var colorB = Math.round(Math.random() * colors);

  if (colorA == colorB) {
    randomizePallete();
    return;
  }

  document.body.style.setProperty("--color-a", "#" + palette[colorA]);
  document.body.style.setProperty("--color-b", "#" + palette[colorB]);
}

},{"markdown-it":5}],2:[function(require,module,exports){
module.exports={"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

},{}],3:[function(require,module,exports){
'use strict'; ////////////////////////////////////////////////////////////////////////////////
// Helpers
// Merge objects
//

function assign(obj
/*from1, from2, from3, ...*/
) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    if (!source) {
      return;
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });
  return obj;
}

function _class(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return _class(obj) === '[object String]';
}

function isObject(obj) {
  return _class(obj) === '[object Object]';
}

function isRegExp(obj) {
  return _class(obj) === '[object RegExp]';
}

function isFunction(obj) {
  return _class(obj) === '[object Function]';
}

function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
} ////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};

function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}

var defaultSchemas = {
  'http:': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
      }

      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }

      return 0;
    }
  },
  'https:': 'http:',
  'ftp:': 'http:',
  '//': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http = new RegExp('^' + self.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' + self.re.src_port + self.re.src_host_terminator + self.re.src_path, 'i');
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') {
          return 0;
        }

        if (pos >= 3 && text[pos - 3] === '/') {
          return 0;
        }

        return tail.match(self.re.no_http)[0].length;
      }

      return 0;
    }
  },
  'mailto:': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
      }

      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }

      return 0;
    }
  }
};
/*eslint-disable max-len*/
// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)

var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]'; // DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead

var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');
/*eslint-enable max-len*/
////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }

    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
} // Schemas compiler. Build regexps.
//


function compile(self) {
  // Load & clone RE patterns.
  var re = self.re = require('./lib/re')(self.__opts__); // Define dynamic patterns


  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }

  tlds.push(re.src_xn);
  re.src_tlds = tlds.join('|');

  function untpl(tpl) {
    return tpl.replace('%TLDS%', re.src_tlds);
  }

  re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i'); //
  // Compile each schema
  //

  var aliases = [];
  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name]; // skip disabled methods

    if (val === null) {
      return;
    }

    var compiled = {
      validate: null,
      link: null
    };
    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  }); //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  }); //
  // Fake record for guessed links
  //

  self.__compiled__[''] = {
    validate: null,
    normalize: createNormalizer()
  }; //
  // Build schema condition
  //

  var slist = Object.keys(self.__compiled__).filter(function (name) {
    // Filter disabled & fake schemas
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join('|'); // (?!_) cause 1.5x slowdown

  self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + '))(' + slist + ')', 'ig');
  self.re.schema_at_start = RegExp('^' + self.re.schema_search.source, 'i');
  self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@', 'i'); //
  // Cleanup
  //

  resetScanCache(self);
}
/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/


function Match(self, shift) {
  var start = self.__index__,
      end = self.__last_index__,
      text = self.__text_cache__.slice(start, end);
  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/


  this.schema = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/

  this.index = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/

  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/

  this.raw = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/

  this.text = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/

  this.url = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}
/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/


function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__ = assign({}, defaultOptions, options); // Cache last tested result. Used to skip repeating steps on next `match` call.

  this.__index__ = -1;
  this.__last_index__ = -1; // Next scan position

  this.__schema__ = '';
  this.__text_cache__ = '';
  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};
  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;
  this.re = {};
  compile(this);
}
/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/


LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};
/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/


LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};
/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/


LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__ = -1;

  if (!text.length) {
    return false;
  }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos; // try to scan for link with schema - that's the most simple rule

  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;

    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);

      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);

    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = '';
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');

    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {
        shift = me.index + me[1].length;
        next = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = 'mailto:';
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};
/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/


LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};
/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/


LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }

  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};
/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/


LinkifyIt.prototype.match = function match(text) {
  var shift = 0,
      result = []; // Try to take previous element from cache, if .test() called before

  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  } // Cut head if cache was used


  var tail = shift ? text.slice(shift) : text; // Scan string until end reached

  while (this.test(tail)) {
    result.push(createMatch(this, shift));
    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};
/**
 * LinkifyIt#matchAtStart(text) -> Match|null
 *
 * Returns fully-formed (not fuzzy) link if it starts at the beginning
 * of the string, and null otherwise.
 **/


LinkifyIt.prototype.matchAtStart = function matchAtStart(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__ = -1;
  if (!text.length) return null;
  var m = this.re.schema_at_start.exec(text);
  if (!m) return null;
  var len = this.testSchemaAt(text, m[2], m[0].length);
  if (!len) return null;
  this.__schema__ = m[2];
  this.__index__ = m.index + m[1].length;
  this.__last_index__ = m.index + m[0].length + len;
  return createMatch(this, 0);
};
/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/


LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [list];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list).sort().filter(function (el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();
  compile(this);
  return this;
};
/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/


LinkifyIt.prototype.normalize = function normalize(match) {
  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1
  if (!match.schema) {
    match.url = 'http://' + match.url;
  }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};
/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/


LinkifyIt.prototype.onCompile = function onCompile() {};

module.exports = LinkifyIt;

},{"./lib/re":4}],4:[function(require,module,exports){
'use strict';

module.exports = function (opts) {
  var re = {};
  opts = opts || {}; // Use direct extract instead of `regenerate` to reduse browserified size

  re.src_Any = require('uc.micro/properties/Any/regex').source;
  re.src_Cc = require('uc.micro/categories/Cc/regex').source;
  re.src_Z = require('uc.micro/categories/Z/regex').source;
  re.src_P = require('uc.micro/categories/P/regex').source; // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)

  re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join('|'); // \p{\Z\Cc} (white spaces + control)

  re.src_ZCc = [re.src_Z, re.src_Cc].join('|'); // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text

  var text_separators = "[><\uFF5C]"; // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)

  re.src_pseudo_letter = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')'; // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';
  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'; // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.

  re.src_auth = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';
  re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';
  re.src_host_terminator = '(?=$|' + text_separators + '|' + re.src_ZPCc + ')' + '(?!' + (opts['---'] ? '-(?!--)|' : '-|') + '_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';
  re.src_path = '(?:' + '[/?#]' + '(?:' + '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' + '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' + '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' + '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + '|[-])|' + // allow `I'm_king` if no pair found
  '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
  // github has ... in commit range links,
  // Restrict to
  // - english
  // - percent-encoded
  // - parts of file path
  // - params separator
  // until more examples found.
  '\\.(?!' + re.src_ZCc + '|[.]|$)|' + (opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
  : '\\-+|') + ',(?!' + re.src_ZCc + '|$)|' + // allow `,,,` in paths
  ';(?!' + re.src_ZCc + '|$)|' + // allow `;` if not followed by space-like char
  '\\!+(?!' + re.src_ZCc + '|[!]|$)|' + // allow `!!!` in paths, but not at the end
  '\\?(?!' + re.src_ZCc + '|[?]|$)' + ')+' + '|\\/' + ')?'; // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common

  re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
  re.src_xn = 'xn--[a-z0-9\\-]{1,59}'; // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root = // Allow letters & digits (http://test1)
  '(?:' + re.src_xn + '|' + re.src_pseudo_letter + '{1,63}' + ')';
  re.src_domain = '(?:' + re.src_xn + '|' + '(?:' + re.src_pseudo_letter + ')' + '|' + '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' + ')';
  re.src_host = '(?:' + // Don't need IP check, because digits are already allowed in normal domain names
  //   src_ip4 +
  // '|' +
  '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain
  /*_root*/
  + ')' + ')';
  re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|' + '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' + ')';
  re.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';
  re.src_host_strict = re.src_host + re.src_host_terminator;
  re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
  re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
  re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
  re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator; ////////////////////////////////////////////////////////////////////////////////
  // Main rules
  // Rude test fuzzy links by host, for quick deny

  re.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';
  re.tpl_email_fuzzy = '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' + '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';
  re.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + '))' + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ')';
  re.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + '))' + "((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';
  return re;
};

},{"uc.micro/categories/Cc/regex":65,"uc.micro/categories/P/regex":67,"uc.micro/categories/Z/regex":68,"uc.micro/properties/Any/regex":70}],5:[function(require,module,exports){
'use strict';

module.exports = require('./lib/');

},{"./lib/":14}],6:[function(require,module,exports){
// HTML5 entities map: { name -> utf16string }
//
'use strict';
/*eslint quotes:0*/

module.exports = require('entities/lib/maps/entities.json');

},{"entities/lib/maps/entities.json":2}],7:[function(require,module,exports){
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks
'use strict';

module.exports = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'source', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];

},{}],8:[function(require,module,exports){
// Regexps to match html elements
'use strict';

var attr_name = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';
var attr_value = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';
var attribute = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';
var open_tag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var close_tag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?][\\s\\S]*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');
module.exports.HTML_TAG_RE = HTML_TAG_RE;
module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;

},{}],9:[function(require,module,exports){
// Utilities
//
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _class(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return _class(obj) === '[object String]';
}

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
} // Merge objects
//


function assign(obj
/*from1, from2, from3, ...*/
) {
  var sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    if (!source) {
      return;
    }

    if (_typeof(source) !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });
  return obj;
} // Remove element from array and put another array at those position.
// Useful for some operations with tokens


function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
} ////////////////////////////////////////////////////////////////////////////////


function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) {
    return false;
  } // never used


  if (c >= 0xFDD0 && c <= 0xFDEF) {
    return false;
  }

  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) {
    return false;
  } // control codes


  if (c >= 0x00 && c <= 0x08) {
    return false;
  }

  if (c === 0x0B) {
    return false;
  }

  if (c >= 0x0E && c <= 0x1F) {
    return false;
  }

  if (c >= 0x7F && c <= 0x9F) {
    return false;
  } // out of range


  if (c > 0x10FFFF) {
    return false;
  }

  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);
    return String.fromCharCode(surrogate1, surrogate2);
  }

  return String.fromCharCode(c);
}

var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

var entities = require('./entities');

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23
  /* # */
  && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}
/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/


function unescapeMd(str) {
  if (str.indexOf('\\') < 0) {
    return str;
  }

  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) {
    return str;
  }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) {
      return escaped;
    }

    return replaceEntityPattern(match, entity);
  });
} ////////////////////////////////////////////////////////////////////////////////


var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }

  return str;
} ////////////////////////////////////////////////////////////////////////////////


var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
} ////////////////////////////////////////////////////////////////////////////////


function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }

  return false;
} // Zs (unicode class) || [\t\f\v\r\n]


function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) {
    return true;
  }

  switch (code) {
    case 0x09: // \t

    case 0x0A: // \n

    case 0x0B: // \v

    case 0x0C: // \f

    case 0x0D: // \r

    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }

  return false;
} ////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/


var UNICODE_PUNCT_RE = require('uc.micro/categories/P/regex'); // Currently without astral characters support.


function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
} // Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//


function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21
    /* ! */
    :
    case 0x22
    /* " */
    :
    case 0x23
    /* # */
    :
    case 0x24
    /* $ */
    :
    case 0x25
    /* % */
    :
    case 0x26
    /* & */
    :
    case 0x27
    /* ' */
    :
    case 0x28
    /* ( */
    :
    case 0x29
    /* ) */
    :
    case 0x2A
    /* * */
    :
    case 0x2B
    /* + */
    :
    case 0x2C
    /* , */
    :
    case 0x2D
    /* - */
    :
    case 0x2E
    /* . */
    :
    case 0x2F
    /* / */
    :
    case 0x3A
    /* : */
    :
    case 0x3B
    /* ; */
    :
    case 0x3C
    /* < */
    :
    case 0x3D
    /* = */
    :
    case 0x3E
    /* > */
    :
    case 0x3F
    /* ? */
    :
    case 0x40
    /* @ */
    :
    case 0x5B
    /* [ */
    :
    case 0x5C
    /* \ */
    :
    case 0x5D
    /* ] */
    :
    case 0x5E
    /* ^ */
    :
    case 0x5F
    /* _ */
    :
    case 0x60
    /* ` */
    :
    case 0x7B
    /* { */
    :
    case 0x7C
    /* | */
    :
    case 0x7D
    /* } */
    :
    case 0x7E
    /* ~ */
    :
      return true;

    default:
      return false;
  }
} // Hepler to unify [reference labels].
//


function normalizeReference(str) {
  // Trim and collapse whitespace
  //
  str = str.trim().replace(/\s+/g, ' '); // In node v10 'ẞ'.toLowerCase() === 'Ṿ', which is presumed to be a bug
  // fixed in v12 (couldn't find any details).
  //
  // So treat this one as a special case
  // (remove this when node v10 is no longer supported).
  //

  if ('ẞ'.toLowerCase() === 'Ṿ') {
    str = str.replace(/ẞ/g, 'ß');
  } // .toLowerCase().toUpperCase() should get rid of all differences
  // between letter variants.
  //
  // Simple .toLowerCase() doesn't normalize 125 code points correctly,
  // and .toUpperCase doesn't normalize 6 of them (list of exceptions:
  // İ, ϴ, ẞ, Ω, K, Å - those are already uppercased, but have differently
  // uppercased versions).
  //
  // Here's an example showing how it happens. Lets take greek letter omega:
  // uppercase U+0398 (Θ), U+03f4 (ϴ) and lowercase U+03b8 (θ), U+03d1 (ϑ)
  //
  // Unicode entries:
  // 0398;GREEK CAPITAL LETTER THETA;Lu;0;L;;;;;N;;;;03B8;
  // 03B8;GREEK SMALL LETTER THETA;Ll;0;L;;;;;N;;;0398;;0398
  // 03D1;GREEK THETA SYMBOL;Ll;0;L;<compat> 03B8;;;;N;GREEK SMALL LETTER SCRIPT THETA;;0398;;0398
  // 03F4;GREEK CAPITAL THETA SYMBOL;Lu;0;L;<compat> 0398;;;;N;;;;03B8;
  //
  // Case-insensitive comparison should treat all of them as equivalent.
  //
  // But .toLowerCase() doesn't change ϑ (it's already lowercase),
  // and .toUpperCase() doesn't change ϴ (already uppercase).
  //
  // Applying first lower then upper case normalizes any character:
  // '\u0398\u03f4\u03b8\u03d1'.toLowerCase().toUpperCase() === '\u0398\u0398\u0398\u0398'
  //
  // Note: this is equivalent to unicode case folding; unicode normalization
  // is a different step that is not required here.
  //
  // Final result should be uppercased, because it's later stored in an object
  // (this avoid a conflict with Object.prototype members,
  // most notably, `__proto__`)
  //


  return str.toLowerCase().toUpperCase();
} ////////////////////////////////////////////////////////////////////////////////
// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//


exports.lib = {};
exports.lib.mdurl = require('mdurl');
exports.lib.ucmicro = require('uc.micro');
exports.assign = assign;
exports.isString = isString;
exports.has = has;
exports.unescapeMd = unescapeMd;
exports.unescapeAll = unescapeAll;
exports.isValidEntityCode = isValidEntityCode;
exports.fromCodePoint = fromCodePoint; // exports.replaceEntities     = replaceEntities;

exports.escapeHtml = escapeHtml;
exports.arrayReplaceAt = arrayReplaceAt;
exports.isSpace = isSpace;
exports.isWhiteSpace = isWhiteSpace;
exports.isMdAsciiPunct = isMdAsciiPunct;
exports.isPunctChar = isPunctChar;
exports.escapeRE = escapeRE;
exports.normalizeReference = normalizeReference;

},{"./entities":6,"mdurl":62,"uc.micro":69,"uc.micro/categories/P/regex":67}],10:[function(require,module,exports){
// Just a shortcut for bulk export
'use strict';

exports.parseLinkLabel = require('./parse_link_label');
exports.parseLinkDestination = require('./parse_link_destination');
exports.parseLinkTitle = require('./parse_link_title');

},{"./parse_link_destination":11,"./parse_link_label":12,"./parse_link_title":13}],11:[function(require,module,exports){
// Parse link destination
//
'use strict';

var unescapeAll = require('../common/utils').unescapeAll;

module.exports = function parseLinkDestination(str, pos, max) {
  var code,
      level,
      lines = 0,
      start = pos,
      result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ''
  };

  if (str.charCodeAt(pos) === 0x3C
  /* < */
  ) {
    pos++;

    while (pos < max) {
      code = str.charCodeAt(pos);

      if (code === 0x0A
      /* \n */
      ) {
        return result;
      }

      if (code === 0x3C
      /* < */
      ) {
        return result;
      }

      if (code === 0x3E
      /* > */
      ) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }

      if (code === 0x5C
      /* \ */
      && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    } // no closing '>'


    return result;
  } // this should be ... } else { ... branch


  level = 0;

  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) {
      break;
    } // ascii control characters


    if (code < 0x20 || code === 0x7F) {
      break;
    }

    if (code === 0x5C
    /* \ */
    && pos + 1 < max) {
      if (str.charCodeAt(pos + 1) === 0x20) {
        break;
      }

      pos += 2;
      continue;
    }

    if (code === 0x28
    /* ( */
    ) {
      level++;

      if (level > 32) {
        return result;
      }
    }

    if (code === 0x29
    /* ) */
    ) {
      if (level === 0) {
        break;
      }

      level--;
    }

    pos++;
  }

  if (start === pos) {
    return result;
  }

  if (level !== 0) {
    return result;
  }

  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};

},{"../common/utils":9}],12:[function(require,module,exports){
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';

module.exports = function parseLinkLabel(state, start, disableNested) {
  var level,
      found,
      marker,
      prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;
  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);

    if (marker === 0x5D
    /* ] */
    ) {
      level--;

      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);

    if (marker === 0x5B
    /* [ */
    ) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  } // restore old state


  state.pos = oldPos;
  return labelEnd;
};

},{}],13:[function(require,module,exports){
// Parse link title
//
'use strict';

var unescapeAll = require('../common/utils').unescapeAll;

module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ''
  };

  if (pos >= max) {
    return result;
  }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22
  /* " */
  && marker !== 0x27
  /* ' */
  && marker !== 0x28
  /* ( */
  ) {
    return result;
  }

  pos++; // if opening marker is "(", switch it to closing marker ")"

  if (marker === 0x28) {
    marker = 0x29;
  }

  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x28
    /* ( */
    && marker === 0x29
    /* ) */
    ) {
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C
    /* \ */
    && pos + 1 < max) {
      pos++;

      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};

},{"../common/utils":9}],14:[function(require,module,exports){
// Main parser class
'use strict';

var utils = require('./common/utils');

var helpers = require('./helpers');

var Renderer = require('./renderer');

var ParserCore = require('./parser_core');

var ParserBlock = require('./parser_block');

var ParserInline = require('./parser_inline');

var LinkifyIt = require('linkify-it');

var mdurl = require('mdurl');

var punycode = require('punycode');

var config = {
  "default": require('./presets/default'),
  zero: require('./presets/zero'),
  commonmark: require('./presets/commonmark')
}; ////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();
  return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
} ////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = ['http:', 'https:', 'mailto:'];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
        /**/
      }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
        /**/
      }
    }
  } // add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720


  return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + '%');
}
/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/


function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }
  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/


  this.inline = new ParserInline();
  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/

  this.block = new ParserBlock();
  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/

  this.core = new ParserCore();
  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/

  this.renderer = new Renderer();
  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/

  this.linkify = new LinkifyIt();
  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/

  this.validateLink = validateLink;
  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/

  this.normalizeLink = normalizeLink;
  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/

  this.normalizeLinkText = normalizeLinkText; // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/

  this.utils = utils;
  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/

  this.helpers = utils.assign({}, helpers);
  this.options = {};
  this.configure(presetName);

  if (options) {
    this.set(options);
  }
}
/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/


MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};
/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you will - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/


MarkdownIt.prototype.configure = function (presets) {
  var self = this,
      presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];

    if (!presets) {
      throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
    }
  }

  if (!presets) {
    throw new Error('Wrong `markdown-it` preset, can\'t be empty');
  }

  if (presets.options) {
    self.set(presets.options);
  }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }

      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }

  return this;
};
/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/


MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) {
    list = [list];
  }

  ['core', 'block', 'inline'].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);
  result = result.concat(this.inline.ruler2.enable(list, true));
  var missed = list.filter(function (name) {
    return result.indexOf(name) < 0;
  });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};
/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/


MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) {
    list = [list];
  }

  ['core', 'block', 'inline'].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);
  result = result.concat(this.inline.ruler2.disable(list, true));
  var missed = list.filter(function (name) {
    return result.indexOf(name) < 0;
  });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }

  return this;
};
/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/


MarkdownIt.prototype.use = function (plugin
/*, params, ... */
) {
  var args = [this].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};
/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and return list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/


MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);
  this.core.process(state);
  return state.tokens;
};
/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/


MarkdownIt.prototype.render = function (src, env) {
  env = env || {};
  return this.renderer.render(this.parse(src, env), this.options, env);
};
/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/


MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/


MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(src, env), this.options, env);
};

module.exports = MarkdownIt;

},{"./common/utils":9,"./helpers":10,"./parser_block":15,"./parser_core":16,"./parser_inline":17,"./presets/commonmark":18,"./presets/default":19,"./presets/zero":20,"./renderer":21,"linkify-it":3,"mdurl":62,"punycode":64}],15:[function(require,module,exports){
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/
'use strict';

var Ruler = require('./ruler');

var _rules = [// First 2 params - rule name & source. Secondary array - list of rules,
// which can be terminated by this one.
['table', require('./rules_block/table'), ['paragraph', 'reference']], ['code', require('./rules_block/code')], ['fence', require('./rules_block/fence'), ['paragraph', 'reference', 'blockquote', 'list']], ['blockquote', require('./rules_block/blockquote'), ['paragraph', 'reference', 'blockquote', 'list']], ['hr', require('./rules_block/hr'), ['paragraph', 'reference', 'blockquote', 'list']], ['list', require('./rules_block/list'), ['paragraph', 'reference', 'blockquote']], ['reference', require('./rules_block/reference')], ['html_block', require('./rules_block/html_block'), ['paragraph', 'reference', 'blockquote']], ['heading', require('./rules_block/heading'), ['paragraph', 'reference', 'blockquote']], ['lheading', require('./rules_block/lheading')], ['paragraph', require('./rules_block/paragraph')]];
/**
 * new ParserBlock()
 **/

function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], {
      alt: (_rules[i][2] || []).slice()
    });
  }
} // Generate tokens for input range
//


ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok,
      i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);

    if (line >= endLine) {
      break;
    } // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists


    if (state.sCount[line] < state.blkIndent) {
      break;
    } // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.


    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    } // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true


    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);

      if (ok) {
        break;
      }
    } // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count


    state.tight = !hasEmptyLines; // paragraph might "eat" one newline after it in nested lists

    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};
/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/


ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) {
    return;
  }

  state = new this.State(src, md, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};

ParserBlock.prototype.State = require('./rules_block/state_block');
module.exports = ParserBlock;

},{"./ruler":22,"./rules_block/blockquote":23,"./rules_block/code":24,"./rules_block/fence":25,"./rules_block/heading":26,"./rules_block/hr":27,"./rules_block/html_block":28,"./rules_block/lheading":29,"./rules_block/list":30,"./rules_block/paragraph":31,"./rules_block/reference":32,"./rules_block/state_block":33,"./rules_block/table":34}],16:[function(require,module,exports){
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/
'use strict';

var Ruler = require('./ruler');

var _rules = [['normalize', require('./rules_core/normalize')], ['block', require('./rules_core/block')], ['inline', require('./rules_core/inline')], ['linkify', require('./rules_core/linkify')], ['replacements', require('./rules_core/replacements')], ['smartquotes', require('./rules_core/smartquotes')], // `text_join` finds `text_special` tokens (for escape sequences)
// and joins them with the rest of the text
['text_join', require('./rules_core/text_join')]];
/**
 * new Core()
 **/

function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}
/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/


Core.prototype.process = function (state) {
  var i, l, rules;
  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = require('./rules_core/state_core');
module.exports = Core;

},{"./ruler":22,"./rules_core/block":35,"./rules_core/inline":36,"./rules_core/linkify":37,"./rules_core/normalize":38,"./rules_core/replacements":39,"./rules_core/smartquotes":40,"./rules_core/state_core":41,"./rules_core/text_join":42}],17:[function(require,module,exports){
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/
'use strict';

var Ruler = require('./ruler'); ////////////////////////////////////////////////////////////////////////////////
// Parser rules


var _rules = [['text', require('./rules_inline/text')], ['linkify', require('./rules_inline/linkify')], ['newline', require('./rules_inline/newline')], ['escape', require('./rules_inline/escape')], ['backticks', require('./rules_inline/backticks')], ['strikethrough', require('./rules_inline/strikethrough').tokenize], ['emphasis', require('./rules_inline/emphasis').tokenize], ['link', require('./rules_inline/link')], ['image', require('./rules_inline/image')], ['autolink', require('./rules_inline/autolink')], ['html_inline', require('./rules_inline/html_inline')], ['entity', require('./rules_inline/entity')]]; // `rule2` ruleset was created specifically for emphasis/strikethrough
// post-processing and may be changed in the future.
//
// Don't use this for anything except pairs (plugins working with `balance_pairs`).
//

var _rules2 = [['balance_pairs', require('./rules_inline/balance_pairs')], ['strikethrough', require('./rules_inline/strikethrough').postProcess], ['emphasis', require('./rules_inline/emphasis').postProcess], // rules for pairs separate '**' into its own text tokens, which may be left unused,
// rule below merges unused segments back with the rest of the text
['fragments_join', require('./rules_inline/fragments_join')]];
/**
 * new ParserInline()
 **/

function ParserInline() {
  var i;
  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/

  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/


  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
} // Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//


ParserInline.prototype.skipToken = function (state) {
  var ok,
      i,
      pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;

  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) {
        break;
      }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) {
    state.pos++;
  }

  cache[pos] = state.pos;
}; // Generate tokens for input range
//


ParserInline.prototype.tokenize = function (state) {
  var ok,
      i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true
    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);

        if (ok) {
          break;
        }
      }
    }

    if (ok) {
      if (state.pos >= end) {
        break;
      }

      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};
/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/


ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);
  this.tokenize(state);
  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};

ParserInline.prototype.State = require('./rules_inline/state_inline');
module.exports = ParserInline;

},{"./ruler":22,"./rules_inline/autolink":43,"./rules_inline/backticks":44,"./rules_inline/balance_pairs":45,"./rules_inline/emphasis":46,"./rules_inline/entity":47,"./rules_inline/escape":48,"./rules_inline/fragments_join":49,"./rules_inline/html_inline":50,"./rules_inline/image":51,"./rules_inline/link":52,"./rules_inline/linkify":53,"./rules_inline/newline":54,"./rules_inline/state_inline":55,"./rules_inline/strikethrough":56,"./rules_inline/text":57}],18:[function(require,module,exports){
// Commonmark default options
'use strict';

module.exports = {
  options: {
    html: true,
    // Enable HTML tags in source
    xhtmlOut: true,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",

    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20 // Internal protection, recursion limit

  },
  components: {
    core: {
      rules: ['normalize', 'block', 'inline', 'text_join']
    },
    block: {
      rules: ['blockquote', 'code', 'fence', 'heading', 'hr', 'html_block', 'lheading', 'list', 'reference', 'paragraph']
    },
    inline: {
      rules: ['autolink', 'backticks', 'emphasis', 'entity', 'escape', 'html_inline', 'image', 'link', 'newline', 'text'],
      rules2: ['balance_pairs', 'emphasis', 'fragments_join']
    }
  }
};

},{}],19:[function(require,module,exports){
// markdown-it default options
'use strict';

module.exports = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",

    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100 // Internal protection, recursion limit

  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
};

},{}],20:[function(require,module,exports){
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.
'use strict';

module.exports = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-',
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "\u201C\u201D\u2018\u2019",

    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20 // Internal protection, recursion limit

  },
  components: {
    core: {
      rules: ['normalize', 'block', 'inline', 'text_join']
    },
    block: {
      rules: ['paragraph']
    },
    inline: {
      rules: ['text'],
      rules2: ['balance_pairs', 'fragments_join']
    }
  }
};

},{}],21:[function(require,module,exports){
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/
'use strict';

var assign = require('./common/utils').assign;

var unescapeAll = require('./common/utils').unescapeAll;

var escapeHtml = require('./common/utils').escapeHtml; ////////////////////////////////////////////////////////////////////////////////


var default_rules = {};

default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];
  return '<code' + slf.renderAttrs(token) + '>' + escapeHtml(tokens[idx].content) + '</code>';
};

default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];
  return '<pre' + slf.renderAttrs(token) + '><code>' + escapeHtml(tokens[idx].content) + '</code></pre>\n';
};

default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      langAttrs = '',
      highlighted,
      i,
      arr,
      tmpAttrs,
      tmpToken;

  if (info) {
    arr = info.split(/(\s+)/g);
    langName = arr[0];
    langAttrs = arr.slice(2).join('');
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  } // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .deepClone() for token and simplify this part, but
  // now we prefer to keep things local.


  if (info) {
    i = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push(['class', options.langPrefix + langName]);
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice();
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    } // Fake token just to render attributes


    tmpToken = {
      attrs: tmpAttrs
    };
    return '<pre><code' + slf.renderAttrs(tmpToken) + '>' + highlighted + '</code></pre>\n';
  }

  return '<pre><code' + slf.renderAttrs(token) + '>' + highlighted + '</code></pre>\n';
};

default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx]; // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env);
  return slf.renderToken(tokens, idx, options);
};

default_rules.hardbreak = function (tokens, idx, options
/*, env */
) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};

default_rules.softbreak = function (tokens, idx, options
/*, env */
) {
  return options.breaks ? options.xhtmlOut ? '<br />\n' : '<br>\n' : '\n';
};

default_rules.text = function (tokens, idx
/*, options, env */
) {
  return escapeHtml(tokens[idx].content);
};

default_rules.html_block = function (tokens, idx
/*, options, env */
) {
  return tokens[idx].content;
};

default_rules.html_inline = function (tokens, idx
/*, options, env */
) {
  return tokens[idx].content;
};
/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/


function Renderer() {
  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}
/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/


Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) {
    return '';
  }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};
/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/


Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx]; // Tight list paragraphs

  if (token.hidden) {
    return '';
  } // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //


  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  } // Add token name, e.g. `<img`


  result += (token.nesting === -1 ? '</' : '<') + token.tag; // Encode attributes, e.g. `<img src="foo"`

  result += this.renderAttrs(token); // Add a slash for self-closing tags, e.g. `<img src="foo" /`

  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  } // Check if we need to add a newline after this tag


  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;
        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';
  return result;
};
/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/


Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};
/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/


Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    } else if (tokens[i].type === 'softbreak') {
      result += '\n';
    }
  }

  return result;
};
/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to render
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/


Renderer.prototype.render = function (tokens, options, env) {
  var i,
      len,
      type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;

},{"./common/utils":9}],22:[function(require,module,exports){
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/
'use strict';
/**
 * new Ruler()
 **/

function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = []; // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //

  this.__cache__ = null;
} ////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly
// Find rule index by name
//


Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }

  return -1;
}; // Build rules lookup cache
//


Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = ['']; // collect unique names

  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) {
      return;
    }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};
  chains.forEach(function (chain) {
    self.__cache__[chain] = [];

    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) {
        return;
      }

      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }

      self.__cache__[chain].push(rule.fn);
    });
  });
};
/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/


Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);

  var opt = options || {};

  if (index === -1) {
    throw new Error('Parser rule not found: ' + name);
  }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};
/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/


Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);

  var opt = options || {};

  if (index === -1) {
    throw new Error('Parser rule not found: ' + beforeName);
  }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};
/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/


Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);

  var opt = options || {};

  if (index === -1) {
    throw new Error('Parser rule not found: ' + afterName);
  }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};
/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/


Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};
/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/


Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) {
    list = [list];
  }

  var result = []; // Search by name and enable

  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }

      throw new Error('Rules manager: invalid rule name ' + name);
    }

    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/


Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) {
    list = [list];
  }

  this.__rules__.forEach(function (rule) {
    rule.enabled = false;
  });

  this.enable(list, ignoreInvalid);
};
/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/


Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) {
    list = [list];
  }

  var result = []; // Search by name and disable

  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) {
        return;
      }

      throw new Error('Rules manager: invalid rule name ' + name);
    }

    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);
  this.__cache__ = null;
  return result;
};
/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/


Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  } // Chain can be empty, if rules disabled. But we still have to return Array.


  return this.__cache__[chainName] || [];
};

module.exports = Ruler;

},{}],23:[function(require,module,exports){
// Block quotes
'use strict';

var isSpace = require('../common/utils').isSpace;

module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      isOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  } // check the block quote marker


  if (state.src.charCodeAt(pos++) !== 0x3E
  /* > */
  ) {
    return false;
  } // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode


  if (silent) {
    return true;
  } // set offset past spaces and ">"


  initial = offset = state.sCount[startLine] + 1; // skip one optional space after '>'

  if (state.src.charCodeAt(pos) === 0x20
  /* space */
  ) {
    // ' >   test '
    //     ^ -- position start of line here:
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 0x09
  /* tab */
  ) {
    spaceAfterMarker = true;

    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      // '  >\t  test '
      //       ^ -- position start of line here (tab has width===1)
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      // ' >\t  test '
      //    ^ -- position start of line here + shift bsCount slightly
      //         to make extra space appear
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }

  oldBMarks = [state.bMarks[startLine]];
  state.bMarks[startLine] = pos;

  while (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (isSpace(ch)) {
      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }

    pos++;
  }

  oldBSCount = [state.bsCount[startLine]];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
  lastLineEmpty = pos >= max;
  oldSCount = [state.sCount[startLine]];
  state.sCount[startLine] = offset - initial;
  oldTShift = [state.tShift[startLine]];
  state.tShift[startLine] = pos - state.bMarks[startLine];
  terminatorRules = state.md.block.ruler.getRules('blockquote');
  oldParentType = state.parentType;
  state.parentType = 'blockquote'; // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```

  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    isOutdented = state.sCount[nextLine] < state.blkIndent;
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E
    /* > */
    && !isOutdented) {
      // This line is inside the blockquote.
      // set offset past spaces and ">"
      initial = offset = state.sCount[nextLine] + 1; // skip one optional space after '>'

      if (state.src.charCodeAt(pos) === 0x20
      /* space */
      ) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09
      /* tab */
      ) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;
      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;
      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    } // Case 2: line is not inside the blockquote, and the last line was empty.


    if (lastLineEmpty) {
      break;
    } // Case 3: another tag found.


    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]); // A negative indentation means that this is a paragraph continuation
    //

    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;
  token = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map = lines = [startLine, 0];
  state.md.block.tokenize(state, startLine, nextLine);
  token = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';
  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line; // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.

  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }

  state.blkIndent = oldIndent;
  return true;
};

},{"../common/utils":9}],24:[function(require,module,exports){
// Code block (4 spaces padded)
'use strict';

module.exports = function code(state, startLine, endLine
/*, silent*/
) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) {
    return false;
  }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }

    break;
  }

  state.line = last;
  token = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + '\n';
  token.map = [startLine, state.line];
  return true;
};

},{}],25:[function(require,module,exports){
// fences (``` lang, ~~~ lang)
'use strict';

module.exports = function fence(state, startLine, endLine, silent) {
  var marker,
      len,
      params,
      nextLine,
      mem,
      token,
      markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  if (pos + 3 > max) {
    return false;
  }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E
  /* ~ */
  && marker !== 0x60
  /* ` */
  ) {
    return false;
  } // scan marker length


  mem = pos;
  pos = state.skipChars(pos, marker);
  len = pos - mem;

  if (len < 3) {
    return false;
  }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (marker === 0x60
  /* ` */
  ) {
    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
      return false;
    }
  } // Since start is found, we can report success here in validation mode


  if (silent) {
    return true;
  } // search end of block


  nextLine = startLine;

  for (;;) {
    nextLine++;

    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) {
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker); // closing code fence must be at least as long as the opening one

    if (pos - mem < len) {
      continue;
    } // make sure tail has spaces only


    pos = state.skipSpaces(pos);

    if (pos < max) {
      continue;
    }

    haveEndMarker = true; // found!

    break;
  } // If a fence has heading spaces, they should be removed from its inner block


  len = state.sCount[startLine];
  state.line = nextLine + (haveEndMarker ? 1 : 0);
  token = state.push('fence', 'code', 0);
  token.info = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup = markup;
  token.map = [startLine, state.line];
  return true;
};

},{}],26:[function(require,module,exports){
// heading (#, ##, ...)
'use strict';

var isSpace = require('../common/utils').isSpace;

module.exports = function heading(state, startLine, endLine, silent) {
  var ch,
      level,
      tmp,
      token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  ch = state.src.charCodeAt(pos);

  if (ch !== 0x23
  /* # */
  || pos >= max) {
    return false;
  } // count heading level


  level = 1;
  ch = state.src.charCodeAt(++pos);

  while (ch === 0x23
  /* # */
  && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || pos < max && !isSpace(ch)) {
    return false;
  }

  if (silent) {
    return true;
  } // Let's cut tails like '    ###  ' from the end of string


  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #

  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;
  token = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map = [startLine, state.line];
  token = state.push('inline', '', 0);
  token.content = state.src.slice(pos, max).trim();
  token.map = [startLine, state.line];
  token.children = [];
  token = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);
  return true;
};

},{"../common/utils":9}],27:[function(require,module,exports){
// Horizontal rule
'use strict';

var isSpace = require('../common/utils').isSpace;

module.exports = function hr(state, startLine, endLine, silent) {
  var marker,
      cnt,
      ch,
      token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  marker = state.src.charCodeAt(pos++); // Check hr marker

  if (marker !== 0x2A
  /* * */
  && marker !== 0x2D
  /* - */
  && marker !== 0x5F
  /* _ */
  ) {
    return false;
  } // markers can be mixed with spaces, but there should be at least 3 of them


  cnt = 1;

  while (pos < max) {
    ch = state.src.charCodeAt(pos++);

    if (ch !== marker && !isSpace(ch)) {
      return false;
    }

    if (ch === marker) {
      cnt++;
    }
  }

  if (cnt < 3) {
    return false;
  }

  if (silent) {
    return true;
  }

  state.line = startLine + 1;
  token = state.push('hr', 'hr', 0);
  token.map = [startLine, state.line];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
  return true;
};

},{"../common/utils":9}],28:[function(require,module,exports){
// HTML block
'use strict';

var block_names = require('../common/html_blocks');

var HTML_OPEN_CLOSE_TAG_RE = require('../common/html_re').HTML_OPEN_CLOSE_TAG_RE; // An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//


var HTML_SEQUENCES = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true], [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'), /^$/, false]];

module.exports = function html_block(state, startLine, endLine, silent) {
  var i,
      nextLine,
      token,
      lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine]; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  if (!state.md.options.html) {
    return false;
  }

  if (state.src.charCodeAt(pos) !== 0x3C
  /* < */
  ) {
    return false;
  }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) {
      break;
    }
  }

  if (i === HTML_SEQUENCES.length) {
    return false;
  }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1; // If we are here - we detected HTML block.
  // Let's roll down till block end.

  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) {
        break;
      }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) {
          nextLine++;
        }

        break;
      }
    }
  }

  state.line = nextLine;
  token = state.push('html_block', '', 0);
  token.map = [startLine, nextLine];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
  return true;
};

},{"../common/html_blocks":7,"../common/html_re":8}],29:[function(require,module,exports){
// lheading (---, ===)
'use strict';

module.exports = function lheading(state, startLine, endLine
/*, silent*/
) {
  var content,
      terminate,
      i,
      l,
      token,
      pos,
      max,
      level,
      marker,
      nextLine = startLine + 1,
      oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph'); // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules
  // jump line-by-line until empty one or EOF

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    } //
    // Check for underline in setext header
    //


    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D
        /* - */
        || marker === 0x3D
        /* = */
        ) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = marker === 0x3D
            /* = */
            ? 1 : 2;
            break;
          }
        }
      }
    } // quirk for blockquotes, this line should already be checked by that rule


    if (state.sCount[nextLine] < 0) {
      continue;
    } // Some tags can terminate paragraph without empty line.


    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine + 1;
  token = state.push('heading_open', 'h' + String(level), 1);
  token.markup = String.fromCharCode(marker);
  token.map = [startLine, state.line];
  token = state.push('inline', '', 0);
  token.content = content;
  token.map = [startLine, state.line - 1];
  token.children = [];
  token = state.push('heading_close', 'h' + String(level), -1);
  token.markup = String.fromCharCode(marker);
  state.parentType = oldParentType;
  return true;
};

},{}],30:[function(require,module,exports){
// Lists
'use strict';

var isSpace = require('../common/utils').isSpace; // Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.


function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;
  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];
  marker = state.src.charCodeAt(pos++); // Check bullet

  if (marker !== 0x2A
  /* * */
  && marker !== 0x2D
  /* - */
  && marker !== 0x2B
  /* + */
  ) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
} // Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.


function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine]; // List marker should have at least 2 chars (digit + dot)

  if (pos + 1 >= max) {
    return -1;
  }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30
  /* 0 */
  || ch > 0x39
  /* 9 */
  ) {
    return -1;
  }

  for (;;) {
    // EOL -> fail
    if (pos >= max) {
      return -1;
    }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30
    /* 0 */
    && ch <= 0x39
    /* 9 */
    ) {
      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) {
        return -1;
      }

      continue;
    } // found valid marker


    if (ch === 0x29
    /* ) */
    || ch === 0x2e
    /* . */
    ) {
      break;
    }

    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }

  return pos;
}

function markTightParagraphs(state, idx) {
  var i,
      l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}

module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      nextLine,
      offset,
      oldListIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      isTerminatingParagraph = false,
      tight = true; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  } // Special case:
  //  - item 1
  //   - item 2
  //    - item 3
  //     - item 4
  //      - this one is a paragraph continuation


  if (state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
    return false;
  } // limit conditions when list can interrupt
  // a paragraph (validation mode only)


  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.sCount[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  } // Detect list type and position after marker


  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.slice(start, posAfterMarker - 1)); // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.

    if (isTerminatingParagraph && markerValue !== 1) return false;
  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  } // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.


  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
  } // We should terminate list on style change. Remember first one to compare.


  markerCharCode = state.src.charCodeAt(posAfterMarker - 1); // For validation mode we can terminate immediately

  if (silent) {
    return true;
  } // Start list


  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token = state.push('ordered_list_open', 'ol', 1);

    if (markerValue !== 1) {
      token.attrs = [['start', markerValue]];
    }
  } else {
    token = state.push('bullet_list_open', 'ul', 1);
  }

  token.map = listLines = [startLine, 0];
  token.markup = String.fromCharCode(markerCharCode); //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');
  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];
    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    } // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)


    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    } // "  -  test"
    //  ^^^^^ - calculating total length of this thing


    indent = initial + indentAfterMarker; // Run subparser & write tokens

    token = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map = itemLines = [startLine, 0];

    if (isOrdered) {
      token.info = state.src.slice(start, posAfterMarker - 1);
    } // change current state, then restore it after parser subcall


    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldSCount = state.sCount[startLine]; //  - example list
    // ^ listIndent position will be here
    //   ^ blkIndent position will be here
    //

    oldListIndent = state.listIndent;
    state.listIndent = state.blkIndent;
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;

    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    } // If any of list item is tight, mark list as tight


    if (!state.tight || prevEmptyEnd) {
      tight = false;
    } // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish


    prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
    state.blkIndent = state.listIndent;
    state.listIndent = oldListIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldSCount;
    state.tight = oldTight;
    token = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);
    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) {
      break;
    } //
    // Try to check if list is terminated or continued.
    //


    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    } // if it's indented more than 3 spaces, it should be a code block


    if (state.sCount[startLine] - state.blkIndent >= 4) {
      break;
    } // fail if terminating block found


    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    } // fail if list has another type


    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);

      if (posAfterMarker < 0) {
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);

      if (posAfterMarker < 0) {
        break;
      }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  } // Finalize list


  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }

  token.markup = String.fromCharCode(markerCharCode);
  listLines[1] = nextLine;
  state.line = nextLine;
  state.parentType = oldParentType; // mark paragraphs tight if needed

  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{"../common/utils":9}],31:[function(require,module,exports){
// Paragraph
'use strict';

module.exports = function paragraph(state, startLine
/*, endLine*/
) {
  var content,
      terminate,
      i,
      l,
      token,
      oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph'),
      endLine = state.lineMax;
  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // jump line-by-line until empty one or EOF

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    } // quirk for blockquotes, this line should already be checked by that rule


    if (state.sCount[nextLine] < 0) {
      continue;
    } // Some tags can terminate paragraph without empty line.


    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  state.line = nextLine;
  token = state.push('paragraph_open', 'p', 1);
  token.map = [startLine, state.line];
  token = state.push('inline', '', 0);
  token.content = content;
  token.map = [startLine, state.line];
  token.children = [];
  token = state.push('paragraph_close', 'p', -1);
  state.parentType = oldParentType;
  return true;
};

},{}],32:[function(require,module,exports){
'use strict';

var normalizeReference = require('../common/utils').normalizeReference;

var isSpace = require('../common/utils').isSpace;

module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1; // if it's indented more than 3 spaces, it should be a code block

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  if (state.src.charCodeAt(pos) !== 0x5B
  /* [ */
  ) {
    return false;
  } // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54


  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D
    /* ] */
    && state.src.charCodeAt(pos - 1) !== 0x5C
    /* \ */
    ) {
      if (pos + 1 === max) {
        return false;
      }

      if (state.src.charCodeAt(pos + 1) !== 0x3A
      /* : */
      ) {
        return false;
      }

      break;
    }
  }

  endLine = state.lineMax; // jump line-by-line until empty one or EOF

  terminatorRules = state.md.block.ruler.getRules('reference');
  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) {
      continue;
    } // quirk for blockquotes, this line should already be checked by that rule


    if (state.sCount[nextLine] < 0) {
      continue;
    } // Some tags can terminate paragraph without empty line.


    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);

    if (ch === 0x5B
    /* [ */
    ) {
      return false;
    } else if (ch === 0x5D
    /* ] */
    ) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A
    /* \n */
    ) {
      lines++;
    } else if (ch === 0x5C
    /* \ */
    ) {
      pos++;

      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A
  /* : */
  ) {
    return false;
  } // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here


  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);

    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  } // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this


  res = state.md.helpers.parseLinkDestination(str, pos, max);

  if (!res.ok) {
    return false;
  }

  href = state.md.normalizeLink(res.str);

  if (!state.md.validateLink(href)) {
    return false;
  }

  pos = res.pos;
  lines += res.lines; // save cursor state, we could require to rollback later

  destEndPos = pos;
  destEndLineNo = lines; // [label]:   destination   'title'
  //                       ^^^ skipping those spaces

  start = pos;

  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);

    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  } // [label]:   destination   'title'
  //                          ^^^^^^^ parse this


  res = state.md.helpers.parseLinkTitle(str, pos, max);

  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  } // skip trailing spaces until the rest of the line


  while (pos < max) {
    ch = str.charCodeAt(pos);

    if (!isSpace(ch)) {
      break;
    }

    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;

      while (pos < max) {
        ch = str.charCodeAt(pos);

        if (!isSpace(ch)) {
          break;
        }

        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));

  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  } // Reference can not terminate anything. This check is for safety only.

  /*istanbul ignore if*/


  if (silent) {
    return true;
  }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }

  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = {
      title: title,
      href: href
    };
  }

  state.parentType = oldParentType;
  state.line = startLine + lines + 1;
  return true;
};

},{"../common/utils":9}],33:[function(require,module,exports){
// Parser state class
'use strict';

var Token = require('../token');

var isSpace = require('../common/utils').isSpace;

function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;
  this.src = src; // link to parser instance

  this.md = md;
  this.env = env; //
  // Internal state vartiables
  //

  this.tokens = tokens;
  this.bMarks = []; // line begin offsets for fast jumps

  this.eMarks = []; // line end offsets for fast jumps

  this.tShift = []; // offsets of the first non-space characters (tabs not expanded)

  this.sCount = []; // indents for each line (tabs expanded)
  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //

  this.bsCount = []; // block parser variables

  this.blkIndent = 0; // required block content indent (for example, if we are
  // inside a list, it would be positioned after list marker)

  this.line = 0; // line index in src

  this.lineMax = 0; // lines count

  this.tight = false; // loose/tight mode for lists

  this.ddIndent = -1; // indent of the current dd block (-1 if there isn't any)

  this.listIndent = -1; // indent of the current list block (-1 if there isn't any)
  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph

  this.parentType = 'root';
  this.level = 0; // renderer

  this.result = ''; // Create caches
  // Generate markers.

  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }

        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) {
        pos++;
      }

      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);
      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  } // Push fake entry to simplify cache bounds checks


  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);
  this.lineMax = this.bMarks.length - 1; // don't count last fake line
} // Push new token to "stream".
//


StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;
  if (nesting < 0) this.level--; // closing tag

  token.level = this.level;
  if (nesting > 0) this.level++; // opening tag

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }

  return from;
}; // Skip spaces from given position.


StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      break;
    }
  }

  return pos;
}; // Skip spaces from given position in reverse.


StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) {
    return pos;
  }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) {
      return pos + 1;
    }
  }

  return pos;
}; // Skip char codes from given position


StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) {
      break;
    }
  }

  return pos;
}; // Skip char codes reverse from given position - 1


StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) {
    return pos;
  }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }

  return pos;
}; // cut lines range from source.


StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i,
      lineIndent,
      ch,
      first,
      last,
      queue,
      lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
}; // re-export Token class to use in block rules


StateBlock.prototype.Token = Token;
module.exports = StateBlock;

},{"../common/utils":9,"../token":58}],34:[function(require,module,exports){
// GFM table, https://github.github.com/gfm/#tables-extension-
'use strict';

var isSpace = require('../common/utils').isSpace;

function getLine(state, line) {
  var pos = state.bMarks[line] + state.tShift[line],
      max = state.eMarks[line];
  return state.src.slice(pos, max);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      isEscaped = false,
      lastPos = 0,
      current = '';
  ch = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x7c
    /* | */
    ) {
      if (!isEscaped) {
        // pipe separating cells, '|'
        result.push(current + str.substring(lastPos, pos));
        current = '';
        lastPos = pos + 1;
      } else {
        // escaped pipe, '\|'
        current += str.substring(lastPos, pos - 1);
        lastPos = pos;
      }
    }

    isEscaped = ch === 0x5c
    /* \ */
    ;
    pos++;
    ch = str.charCodeAt(pos);
  }

  result.push(current + str.substring(lastPos));
  return result;
}

module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh; // should have at least two lines

  if (startLine + 2 > endLine) {
    return false;
  }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) {
    return false;
  } // if it's indented more than 3 spaces, it should be a code block


  if (state.sCount[nextLine] - state.blkIndent >= 4) {
    return false;
  } // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp


  pos = state.bMarks[nextLine] + state.tShift[nextLine];

  if (pos >= state.eMarks[nextLine]) {
    return false;
  }

  firstCh = state.src.charCodeAt(pos++);

  if (firstCh !== 0x7C
  /* | */
  && firstCh !== 0x2D
  /* - */
  && firstCh !== 0x3A
  /* : */
  ) {
    return false;
  }

  if (pos >= state.eMarks[nextLine]) {
    return false;
  }

  secondCh = state.src.charCodeAt(pos++);

  if (secondCh !== 0x7C
  /* | */
  && secondCh !== 0x2D
  /* - */
  && secondCh !== 0x3A
  /* : */
  && !isSpace(secondCh)) {
    return false;
  } // if first character is '-', then second character must not be a space
  // (due to parsing ambiguity with list)


  if (firstCh === 0x2D
  /* - */
  && isSpace(secondCh)) {
    return false;
  }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C
    /* | */
    && ch !== 0x2D
    /* - */
    && ch !== 0x3A
    /* : */
    && !isSpace(ch)) {
      return false;
    }

    pos++;
  }

  lineText = getLine(state, startLine + 1);
  columns = lineText.split('|');
  aligns = [];

  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();

    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) {
      return false;
    }

    if (t.charCodeAt(t.length - 1) === 0x3A
    /* : */
    ) {
      aligns.push(t.charCodeAt(0) === 0x3A
      /* : */
      ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A
    /* : */
    ) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();

  if (lineText.indexOf('|') === -1) {
    return false;
  }

  if (state.sCount[startLine] - state.blkIndent >= 4) {
    return false;
  }

  columns = escapedSplit(lineText);
  if (columns.length && columns[0] === '') columns.shift();
  if (columns.length && columns[columns.length - 1] === '') columns.pop(); // header row will define an amount of columns in the entire table,
  // and align row should be exactly the same (the rest of the rows can differ)

  columnCount = columns.length;

  if (columnCount === 0 || columnCount !== aligns.length) {
    return false;
  }

  if (silent) {
    return true;
  }

  oldParentType = state.parentType;
  state.parentType = 'table'; // use 'blockquote' lists for termination because it's
  // the most similar to tables

  terminatorRules = state.md.block.ruler.getRules('blockquote');
  token = state.push('table_open', 'table', 1);
  token.map = tableLines = [startLine, 0];
  token = state.push('thead_open', 'thead', 1);
  token.map = [startLine, startLine + 1];
  token = state.push('tr_open', 'tr', 1);
  token.map = [startLine, startLine + 1];

  for (i = 0; i < columns.length; i++) {
    token = state.push('th_open', 'th', 1);

    if (aligns[i]) {
      token.attrs = [['style', 'text-align:' + aligns[i]]];
    }

    token = state.push('inline', '', 0);
    token.content = columns[i].trim();
    token.children = [];
    token = state.push('th_close', 'th', -1);
  }

  token = state.push('tr_close', 'tr', -1);
  token = state.push('thead_close', 'thead', -1);

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) {
      break;
    }

    terminate = false;

    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      break;
    }

    lineText = getLine(state, nextLine).trim();

    if (!lineText) {
      break;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      break;
    }

    columns = escapedSplit(lineText);
    if (columns.length && columns[0] === '') columns.shift();
    if (columns.length && columns[columns.length - 1] === '') columns.pop();

    if (nextLine === startLine + 2) {
      token = state.push('tbody_open', 'tbody', 1);
      token.map = tbodyLines = [startLine + 2, 0];
    }

    token = state.push('tr_open', 'tr', 1);
    token.map = [nextLine, nextLine + 1];

    for (i = 0; i < columnCount; i++) {
      token = state.push('td_open', 'td', 1);

      if (aligns[i]) {
        token.attrs = [['style', 'text-align:' + aligns[i]]];
      }

      token = state.push('inline', '', 0);
      token.content = columns[i] ? columns[i].trim() : '';
      token.children = [];
      token = state.push('td_close', 'td', -1);
    }

    token = state.push('tr_close', 'tr', -1);
  }

  if (tbodyLines) {
    token = state.push('tbody_close', 'tbody', -1);
    tbodyLines[1] = nextLine;
  }

  token = state.push('table_close', 'table', -1);
  tableLines[1] = nextLine;
  state.parentType = oldParentType;
  state.line = nextLine;
  return true;
};

},{"../common/utils":9}],35:[function(require,module,exports){
'use strict';

module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token = new state.Token('inline', '', 0);
    token.content = state.src;
    token.map = [0, 1];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};

},{}],36:[function(require,module,exports){
'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens,
      tok,
      i,
      l; // Parse inlines

  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];

    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};

},{}],37:[function(require,module,exports){
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//
'use strict';

var arrayReplaceAt = require('../common/utils').arrayReplaceAt;

function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}

function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

module.exports = function linkify(state) {
  var i,
      j,
      l,
      tokens,
      token,
      currentToken,
      nodes,
      ln,
      text,
      pos,
      lastPos,
      level,
      htmlLinkLevel,
      url,
      fullUrl,
      urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) {
    return;
  }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' || !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;
    htmlLinkLevel = 0; // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match

    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i]; // Skip content of markdown links

      if (currentToken.type === 'link_close') {
        i--;

        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }

        continue;
      } // Skip content of html tag links


      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }

        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }

      if (htmlLinkLevel > 0) {
        continue;
      }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {
        text = currentToken.content;
        links = state.md.linkify.match(text); // Now split string to nodes

        nodes = [];
        level = currentToken.level;
        lastPos = 0; // forbid escape sequence at the start of the string,
        // this avoids http\://example.com/ from being linkified as
        // http:<a href="//example.com/">//example.com/</a>

        if (links.length > 0 && links[0].index === 0 && i > 0 && tokens[i - 1].type === 'text_special') {
          links = links.slice(1);
        }

        for (ln = 0; ln < links.length; ln++) {
          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);

          if (!state.md.validateLink(fullUrl)) {
            continue;
          }

          urlText = links[ln].text; // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //

          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level = level;
            nodes.push(token);
          }

          token = new state.Token('link_open', 'a', 1);
          token.attrs = [['href', fullUrl]];
          token.level = level++;
          token.markup = 'linkify';
          token.info = 'auto';
          nodes.push(token);
          token = new state.Token('text', '', 0);
          token.content = urlText;
          token.level = level;
          nodes.push(token);
          token = new state.Token('link_close', 'a', -1);
          token.level = --level;
          token.markup = 'linkify';
          token.info = 'auto';
          nodes.push(token);
          lastPos = links[ln].lastIndex;
        }

        if (lastPos < text.length) {
          token = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level = level;
          nodes.push(token);
        } // replace current node


        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};

},{"../common/utils":9}],38:[function(require,module,exports){
// Normalize input string
'use strict'; // https://spec.commonmark.org/0.29/#line-ending

var NEWLINES_RE = /\r\n?|\n/g;
var NULL_RE = /\0/g;

module.exports = function normalize(state) {
  var str; // Normalize newlines

  str = state.src.replace(NEWLINES_RE, '\n'); // Replace NULL characters

  str = str.replace(NULL_RE, "\uFFFD");
  state.src = str;
};

},{}],39:[function(require,module,exports){
// Simple typographic replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
'use strict'; // TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - multiplications 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/; // Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time

var SCOPED_ABBR_TEST_RE = /\((c|tm|r)\)/i;
var SCOPED_ABBR_RE = /\((c|tm|r)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i,
      token,
      inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i,
      token,
      inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content.replace(/\+-/g, '±') // .., ..., ....... -> …
        // but ?..... & !..... -> ?.. & !..
        .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..').replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',') // em-dash
        .replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014") // en-dash
        .replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) {
    return;
  }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== 'inline') {
      continue;
    }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }
  }
};

},{}],40:[function(require,module,exports){
// Convert straight quotation marks to typographic ones
//
'use strict';

var isWhiteSpace = require('../common/utils').isWhiteSpace;

var isPunctChar = require('../common/utils').isPunctChar;

var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = "\u2019";
/* ’ */

function replaceAt(str, index, ch) {
  return str.slice(0, index) + ch + str.slice(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];
    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) {
        break;
      }
    }

    stack.length = j + 1;

    if (token.type !== 'text') {
      continue;
    }

    text = token.content;
    pos = 0;
    max = text.length;
    /*eslint no-labels:0,block-scoped-var:0*/

    OUTER: while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);

      if (!t) {
        break;
      }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = t[0] === "'"; // Find previous character,
      // default to space if it's the beginning of the line
      //

      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20

          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      } // Find next character,
      // default to space if it's the end of the line
      //


      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20

          if (!tokens[j].content) continue; // should skip all tokens except 'text', 'html_inline' or 'code_inline'

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22
      /* " */
      && t[0] === '"') {
        if (lastChar >= 0x30
        /* 0 */
        && lastChar <= 0x39
        /* 9 */
        ) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // Replace quotes in the middle of punctuation sequence, but not
        // in the middle of the words, i.e.:
        //
        // 1. foo " bar " baz - not replaced
        // 2. foo-"-bar-"-baz - replaced
        // 3. foo"bar"baz     - not replaced
        //
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }

        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];

          if (stack[j].level < thisLevel) {
            break;
          }

          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            } // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1


            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, openQuote);
            pos += closeQuote.length - 1;

            if (item.token === i) {
              pos += openQuote.length - 1;
            }

            text = token.content;
            max = text.length;
            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}

module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) {
    return;
  }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state.tokens[blkIdx].type !== 'inline' || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};

},{"../common/utils":9}],41:[function(require,module,exports){
// Core state object
//
'use strict';

var Token = require('../token');

function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
} // re-export Token class to use in core rules


StateCore.prototype.Token = Token;
module.exports = StateCore;

},{"../token":58}],42:[function(require,module,exports){
// Join raw text tokens with the rest of the text
//
// This is set as a separate rule to provide an opportunity for plugins
// to run text replacements after text join, but before escape join.
//
// For example, `\:)` shouldn't be replaced with an emoji.
//
'use strict';

module.exports = function text_join(state) {
  var j,
      l,
      tokens,
      curr,
      max,
      last,
      blockTokens = state.tokens;

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline') continue;
    tokens = blockTokens[j].children;
    max = tokens.length;

    for (curr = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text_special') {
        tokens[curr].type = 'text';
      }
    }

    for (curr = last = 0; curr < max; curr++) {
      if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
        // collapse two adjacent text nodes
        tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
      } else {
        if (curr !== last) {
          tokens[last] = tokens[curr];
        }

        last++;
      }
    }

    if (curr !== last) {
      tokens.length = last;
    }
  }
};

},{}],43:[function(require,module,exports){
// Process autolinks '<protocol:...>'
'use strict';
/*eslint max-len:0*/

var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;

module.exports = function autolink(state, silent) {
  var url,
      fullUrl,
      token,
      ch,
      start,
      max,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C
  /* < */
  ) {
    return false;
  }

  start = state.pos;
  max = state.posMax;

  for (;;) {
    if (++pos >= max) return false;
    ch = state.src.charCodeAt(pos);
    if (ch === 0x3C
    /* < */
    ) return false;
    if (ch === 0x3E
    /* > */
    ) break;
  }

  url = state.src.slice(start + 1, pos);

  if (AUTOLINK_RE.test(url)) {
    fullUrl = state.md.normalizeLink(url);

    if (!state.md.validateLink(fullUrl)) {
      return false;
    }

    if (!silent) {
      token = state.push('link_open', 'a', 1);
      token.attrs = [['href', fullUrl]];
      token.markup = 'autolink';
      token.info = 'auto';
      token = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);
      token = state.push('link_close', 'a', -1);
      token.markup = 'autolink';
      token.info = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  if (EMAIL_RE.test(url)) {
    fullUrl = state.md.normalizeLink('mailto:' + url);

    if (!state.md.validateLink(fullUrl)) {
      return false;
    }

    if (!silent) {
      token = state.push('link_open', 'a', 1);
      token.attrs = [['href', fullUrl]];
      token.markup = 'autolink';
      token.info = 'auto';
      token = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);
      token = state.push('link_close', 'a', -1);
      token.markup = 'autolink';
      token.info = 'auto';
    }

    state.pos += url.length + 2;
    return true;
  }

  return false;
};

},{}],44:[function(require,module,exports){
// Parse backticks
'use strict';

module.exports = function backtick(state, silent) {
  var start,
      max,
      marker,
      token,
      matchStart,
      matchEnd,
      openerLength,
      closerLength,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60
  /* ` */
  ) {
    return false;
  }

  start = pos;
  pos++;
  max = state.posMax; // scan marker length

  while (pos < max && state.src.charCodeAt(pos) === 0x60
  /* ` */
  ) {
    pos++;
  }

  marker = state.src.slice(start, pos);
  openerLength = marker.length;

  if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
    if (!silent) state.pending += marker;
    state.pos += openerLength;
    return true;
  }

  matchStart = matchEnd = pos; // Nothing found in the cache, scan until the end of the line (or until marker is found)

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1; // scan marker length

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60
    /* ` */
    ) {
      matchEnd++;
    }

    closerLength = matchEnd - matchStart;

    if (closerLength === openerLength) {
      // Found matching closer length.
      if (!silent) {
        token = state.push('code_inline', 'code', 0);
        token.markup = marker;
        token.content = state.src.slice(pos, matchStart).replace(/\n/g, ' ').replace(/^ (.+) $/, '$1');
      }

      state.pos = matchEnd;
      return true;
    } // Some different length found, put it in cache as upper limit of where closer can be found


    state.backticks[closerLength] = matchStart;
  } // Scanned through the end, didn't find anything


  state.backticksScanned = true;
  if (!silent) state.pending += marker;
  state.pos += openerLength;
  return true;
};

},{}],45:[function(require,module,exports){
// For each opening emphasis-like marker find a matching closing one
//
'use strict';

function processDelimiters(state, delimiters) {
  var closerIdx,
      openerIdx,
      closer,
      opener,
      minOpenerIdx,
      newMinOpenerIdx,
      isOddMatch,
      lastJump,
      openersBottom = {},
      max = delimiters.length;
  if (!max) return; // headerIdx is the first delimiter of the current (where closer is) delimiter run

  var headerIdx = 0;
  var lastTokenIdx = -2; // needs any value lower than -1

  var jumps = [];

  for (closerIdx = 0; closerIdx < max; closerIdx++) {
    closer = delimiters[closerIdx];
    jumps.push(0); // markers belong to same delimiter run if:
    //  - they have adjacent tokens
    //  - AND markers are the same
    //

    if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
      headerIdx = closerIdx;
    }

    lastTokenIdx = closer.token; // Length is only used for emphasis-specific "rule of 3",
    // if it's not defined (in strikethrough or 3rd party plugins),
    // we can default it to 0 to disable those checks.
    //

    closer.length = closer.length || 0;
    if (!closer.close) continue; // Previously calculated lower bounds (previous fails)
    // for each marker, each delimiter length modulo 3,
    // and for whether this closer can be an opener;
    // https://github.com/commonmark/cmark/commit/34250e12ccebdc6372b8b49c44fab57c72443460

    if (!openersBottom.hasOwnProperty(closer.marker)) {
      openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
    }

    minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
    openerIdx = headerIdx - jumps[headerIdx] - 1;
    newMinOpenerIdx = openerIdx;

    for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
      opener = delimiters[openerIdx];
      if (opener.marker !== closer.marker) continue;

      if (opener.open && opener.end < 0) {
        isOddMatch = false; // from spec:
        //
        // If one of the delimiters can both open and close emphasis, then the
        // sum of the lengths of the delimiter runs containing the opening and
        // closing delimiters must not be a multiple of 3 unless both lengths
        // are multiples of 3.
        //

        if (opener.close || closer.open) {
          if ((opener.length + closer.length) % 3 === 0) {
            if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
              isOddMatch = true;
            }
          }
        }

        if (!isOddMatch) {
          // If previous delimiter cannot be an opener, we can safely skip
          // the entire sequence in future checks. This is required to make
          // sure algorithm has linear complexity (see *_*_*_*_*_... case).
          //
          lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
          jumps[closerIdx] = closerIdx - openerIdx + lastJump;
          jumps[openerIdx] = lastJump;
          closer.open = false;
          opener.end = closerIdx;
          opener.close = false;
          newMinOpenerIdx = -1; // treat next token as start of run,
          // it optimizes skips in **<...>**a**<...>** pathological case

          lastTokenIdx = -2;
          break;
        }
      }
    }

    if (newMinOpenerIdx !== -1) {
      // If match for this delimiter run failed, we want to set lower bound for
      // future lookups. This is required to make sure algorithm has linear
      // complexity.
      //
      // See details here:
      // https://github.com/commonmark/cmark/issues/178#issuecomment-270417442
      //
      openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
    }
  }
}

module.exports = function link_pairs(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;
  processDelimiters(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      processDelimiters(state, tokens_meta[curr].delimiters);
    }
  }
};

},{}],46:[function(require,module,exports){
// Process *this* and _that_
//
'use strict'; // Insert each marker as a separate text token, and add it to delimiter list
//

module.exports.tokenize = function emphasis(state, silent) {
  var i,
      scanned,
      token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) {
    return false;
  }

  if (marker !== 0x5F
  /* _ */
  && marker !== 0x2A
  /* * */
  ) {
    return false;
  }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);
    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,
      // Total length of these series of delimiters.
      //
      length: scanned.length,
      // A position of the token this delimiter corresponds to.
      //
      token: state.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: scanned.can_open,
      close: scanned.can_close
    });
  }

  state.pos += scanned.length;
  return true;
};

function postProcess(state, delimiters) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      max = delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F
    /* _ */
    && startDelim.marker !== 0x2A
    /* * */
    ) {
      continue;
    } // Process only opening markers


    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end]; // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //

    isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && // check that first two markers match and adjacent
    delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    delimiters[startDelim.end + 1].token === endDelim.token + 1;
    ch = String.fromCharCode(startDelim.marker);
    token = state.tokens[startDelim.token];
    token.type = isStrong ? 'strong_open' : 'em_open';
    token.tag = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup = isStrong ? ch + ch : ch;
    token.content = '';
    token = state.tokens[endDelim.token];
    token.type = isStrong ? 'strong_close' : 'em_close';
    token.tag = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
} // Walk through delimiter list and replace text tokens with tags
//


module.exports.postProcess = function emphasis(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;
  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};

},{}],47:[function(require,module,exports){
// Process html entity - &#123;, &#xAF;, &quot;, ...
'use strict';

var entities = require('../common/entities');

var has = require('../common/utils').has;

var isValidEntityCode = require('../common/utils').isValidEntityCode;

var fromCodePoint = require('../common/utils').fromCodePoint;

var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;

module.exports = function entity(state, silent) {
  var ch,
      code,
      match,
      token,
      pos = state.pos,
      max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x26
  /* & */
  ) return false;
  if (pos + 1 >= max) return false;
  ch = state.src.charCodeAt(pos + 1);

  if (ch === 0x23
  /* # */
  ) {
    match = state.src.slice(pos).match(DIGITAL_RE);

    if (match) {
      if (!silent) {
        code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
        token = state.push('text_special', '', 0);
        token.content = isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        token.markup = match[0];
        token.info = 'entity';
      }

      state.pos += match[0].length;
      return true;
    }
  } else {
    match = state.src.slice(pos).match(NAMED_RE);

    if (match) {
      if (has(entities, match[1])) {
        if (!silent) {
          token = state.push('text_special', '', 0);
          token.content = entities[match[1]];
          token.markup = match[0];
          token.info = 'entity';
        }

        state.pos += match[0].length;
        return true;
      }
    }
  }

  return false;
};

},{"../common/entities":6,"../common/utils":9}],48:[function(require,module,exports){
// Process escaped chars and hardbreaks
'use strict';

var isSpace = require('../common/utils').isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) {
  ESCAPED.push(0);
}

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'.split('').forEach(function (ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});

module.exports = function escape(state, silent) {
  var ch1,
      ch2,
      origStr,
      escapedStr,
      token,
      pos = state.pos,
      max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x5C
  /* \ */
  ) return false;
  pos++; // '\' at the end of the inline block

  if (pos >= max) return false;
  ch1 = state.src.charCodeAt(pos);

  if (ch1 === 0x0A) {
    if (!silent) {
      state.push('hardbreak', 'br', 0);
    }

    pos++; // skip leading whitespaces from next line

    while (pos < max) {
      ch1 = state.src.charCodeAt(pos);
      if (!isSpace(ch1)) break;
      pos++;
    }

    state.pos = pos;
    return true;
  }

  escapedStr = state.src[pos];

  if (ch1 >= 0xD800 && ch1 <= 0xDBFF && pos + 1 < max) {
    ch2 = state.src.charCodeAt(pos + 1);

    if (ch2 >= 0xDC00 && ch2 <= 0xDFFF) {
      escapedStr += state.src[pos + 1];
      pos++;
    }
  }

  origStr = '\\' + escapedStr;

  if (!silent) {
    token = state.push('text_special', '', 0);

    if (ch1 < 256 && ESCAPED[ch1] !== 0) {
      token.content = escapedStr;
    } else {
      token.content = origStr;
    }

    token.markup = origStr;
    token.info = 'escape';
  }

  state.pos = pos + 1;
  return true;
};

},{"../common/utils":9}],49:[function(require,module,exports){
// Clean up tokens after emphasis and strikethrough postprocessing:
// merge adjacent text nodes into one and re-calculate all token levels
//
// This is necessary because initially emphasis delimiter markers (*, _, ~)
// are treated as their own separate text tokens. Then emphasis rule either
// leaves them as text (needed to merge with adjacent text) or turns them
// into opening/closing tags (which messes up levels inside).
//
'use strict';

module.exports = function fragments_join(state) {
  var curr,
      last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels after emphasis/strikethrough turns some text nodes
    // into opening/closing tags
    if (tokens[curr].nesting < 0) level--; // closing tag

    tokens[curr].level = level;
    if (tokens[curr].nesting > 0) level++; // opening tag

    if (tokens[curr].type === 'text' && curr + 1 < max && tokens[curr + 1].type === 'text') {
      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) {
        tokens[last] = tokens[curr];
      }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};

},{}],50:[function(require,module,exports){
// Process html tags
'use strict';

var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;

function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}

function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}

function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case

  return lc >= 0x61
  /* a */
  && lc <= 0x7a
  /* z */
  ;
}

module.exports = function html_inline(state, silent) {
  var ch,
      match,
      max,
      token,
      pos = state.pos;

  if (!state.md.options.html) {
    return false;
  } // Check start


  max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x3C
  /* < */
  || pos + 2 >= max) {
    return false;
  } // Quick fail on second char


  ch = state.src.charCodeAt(pos + 1);

  if (ch !== 0x21
  /* ! */
  && ch !== 0x3F
  /* ? */
  && ch !== 0x2F
  /* / */
  && !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);

  if (!match) {
    return false;
  }

  if (!silent) {
    token = state.push('html_inline', '', 0);
    token.content = state.src.slice(pos, pos + match[0].length);
    if (isLinkOpen(token.content)) state.linkLevel++;
    if (isLinkClose(token.content)) state.linkLevel--;
  }

  state.pos += match[0].length;
  return true;
};

},{"../common/html_re":8}],51:[function(require,module,exports){
// Process ![image](<src> "title")
'use strict';

var normalizeReference = require('../common/utils').normalizeReference;

var isSpace = require('../common/utils').isSpace;

module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21
  /* ! */
  ) {
    return false;
  }

  if (state.src.charCodeAt(state.pos + 1) !== 0x5B
  /* [ */
  ) {
    return false;
  }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false); // parser failed to find ']', so it's not a valid link

  if (labelEnd < 0) {
    return false;
  }

  pos = labelEnd + 1;

  if (pos < max && state.src.charCodeAt(pos) === 0x28
  /* ( */
  ) {
    //
    // Inline link
    //
    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;

    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);

      if (!isSpace(code) && code !== 0x0A) {
        break;
      }
    }

    if (pos >= max) {
      return false;
    } // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination


    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

    if (res.ok) {
      href = state.md.normalizeLink(res.str);

      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    } // [link](  <href>  "title"  )
    //                ^^ skipping these spaces


    start = pos;

    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);

      if (!isSpace(code) && code !== 0x0A) {
        break;
      }
    } // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title


    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos; // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces

      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);

        if (!isSpace(code) && code !== 0x0A) {
          break;
        }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29
    /* ) */
    ) {
      state.pos = oldPos;
      return false;
    }

    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') {
      return false;
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B
    /* [ */
    ) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);

      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    } // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)


    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }

    ref = state.env.references[normalizeReference(label)];

    if (!ref) {
      state.pos = oldPos;
      return false;
    }

    href = ref.href;
    title = ref.title;
  } //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //


  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);
    state.md.inline.parse(content, state.md, state.env, tokens = []);
    token = state.push('image', 'img', 0);
    token.attrs = attrs = [['src', href], ['alt', '']];
    token.children = tokens;
    token.content = content;

    if (title) {
      attrs.push(['title', title]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../common/utils":9}],52:[function(require,module,exports){
// Process [link](<to> "stuff")
'use strict';

var normalizeReference = require('../common/utils').normalizeReference;

var isSpace = require('../common/utils').isSpace;

module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      token,
      href = '',
      title = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B
  /* [ */
  ) {
    return false;
  }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true); // parser failed to find ']', so it's not a valid link

  if (labelEnd < 0) {
    return false;
  }

  pos = labelEnd + 1;

  if (pos < max && state.src.charCodeAt(pos) === 0x28
  /* ( */
  ) {
    //
    // Inline link
    //
    // might have found a valid shortcut link, disable reference parsing
    parseReference = false; // [link](  <href>  "title"  )
    //        ^^ skipping these spaces

    pos++;

    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);

      if (!isSpace(code) && code !== 0x0A) {
        break;
      }
    }

    if (pos >= max) {
      return false;
    } // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination


    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

    if (res.ok) {
      href = state.md.normalizeLink(res.str);

      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      } // [link](  <href>  "title"  )
      //                ^^ skipping these spaces


      start = pos;

      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);

        if (!isSpace(code) && code !== 0x0A) {
          break;
        }
      } // [link](  <href>  "title"  )
      //                  ^^^^^^^ parsing link title


      res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos; // [link](  <href>  "title"  )
        //                         ^^ skipping these spaces

        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);

          if (!isSpace(code) && code !== 0x0A) {
            break;
          }
        }
      }
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29
    /* ) */
    ) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }

    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') {
      return false;
    }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B
    /* [ */
    ) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);

      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    } // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)


    if (!label) {
      label = state.src.slice(labelStart, labelEnd);
    }

    ref = state.env.references[normalizeReference(label)];

    if (!ref) {
      state.pos = oldPos;
      return false;
    }

    href = ref.href;
    title = ref.title;
  } //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //


  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;
    token = state.push('link_open', 'a', 1);
    token.attrs = attrs = [['href', href]];

    if (title) {
      attrs.push(['title', title]);
    }

    state.linkLevel++;
    state.md.inline.tokenize(state);
    state.linkLevel--;
    token = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../common/utils":9}],53:[function(require,module,exports){
// Process links like https://example.org/
'use strict'; // RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )

var SCHEME_RE = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;

module.exports = function linkify(state, silent) {
  var pos, max, match, proto, link, url, fullUrl, token;
  if (!state.md.options.linkify) return false;
  if (state.linkLevel > 0) return false;
  pos = state.pos;
  max = state.posMax;
  if (pos + 3 > max) return false;
  if (state.src.charCodeAt(pos) !== 0x3A
  /* : */
  ) return false;
  if (state.src.charCodeAt(pos + 1) !== 0x2F
  /* / */
  ) return false;
  if (state.src.charCodeAt(pos + 2) !== 0x2F
  /* / */
  ) return false;
  match = state.pending.match(SCHEME_RE);
  if (!match) return false;
  proto = match[1];
  link = state.md.linkify.matchAtStart(state.src.slice(pos - proto.length));
  if (!link) return false;
  url = link.url; // disallow '*' at the end of the link (conflicts with emphasis)

  url = url.replace(/\*+$/, '');
  fullUrl = state.md.normalizeLink(url);
  if (!state.md.validateLink(fullUrl)) return false;

  if (!silent) {
    state.pending = state.pending.slice(0, -proto.length);
    token = state.push('link_open', 'a', 1);
    token.attrs = [['href', fullUrl]];
    token.markup = 'linkify';
    token.info = 'auto';
    token = state.push('text', '', 0);
    token.content = state.md.normalizeLinkText(url);
    token = state.push('link_close', 'a', -1);
    token.markup = 'linkify';
    token.info = 'auto';
  }

  state.pos += url.length - proto.length;
  return true;
};

},{}],54:[function(require,module,exports){
// Proceess '\n'
'use strict';

var isSpace = require('../common/utils').isSpace;

module.exports = function newline(state, silent) {
  var pmax,
      max,
      ws,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A
  /* \n */
  ) {
    return false;
  }

  pmax = state.pending.length - 1;
  max = state.posMax; // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.

  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        // Find whitespaces tail of pending chars.
        ws = pmax - 1;

        while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 0x20) {
          ws--;
        }

        state.pending = state.pending.slice(0, ws);
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }
    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++; // skip heading spaces for next line

  while (pos < max && isSpace(state.src.charCodeAt(pos))) {
    pos++;
  }

  state.pos = pos;
  return true;
};

},{"../common/utils":9}],55:[function(require,module,exports){
// Inline parser state
'use strict';

var Token = require('../token');

var isWhiteSpace = require('../common/utils').isWhiteSpace;

var isPunctChar = require('../common/utils').isPunctChar;

var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;

function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;
  this.tokens_meta = Array(outTokens.length);
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0; // Stores { start: end } pairs. Useful for backtrack
  // optimization of pairs parse (emphasis, strikes).

  this.cache = {}; // List of emphasis-like delimiters for current tag

  this.delimiters = []; // Stack of delimiter lists for upper level tags

  this._prev_delimiters = []; // backtick length => last seen position

  this.backticks = {};
  this.backticksScanned = false; // Counter used to disable inline linkify-it execution
  // inside <a> and markdown links

  this.linkLevel = 0;
} // Flush pending text
//


StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
}; // Push new token to "stream".
// If pending text exists - flush it as text token
//


StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);
  var token_meta = null;

  if (nesting < 0) {
    // closing tag
    this.level--;
    this.delimiters = this._prev_delimiters.pop();
  }

  token.level = this.level;

  if (nesting > 0) {
    // opening tag
    this.level++;

    this._prev_delimiters.push(this.delimiters);

    this.delimiters = [];
    token_meta = {
      delimiters: this.delimiters
    };
  }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  this.tokens_meta.push(token_meta);
  return token;
}; // Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//


StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start,
      lastChar,
      nextChar,
      count,
      can_open,
      can_close,
      isLastWhiteSpace,
      isLastPunctChar,
      isNextWhiteSpace,
      isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start); // treat beginning of the line as a whitespace

  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) {
    pos++;
  }

  count = pos - start; // treat end of the line as a whitespace

  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;
  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open = left_flanking && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking || isNextPunctChar);
  } else {
    can_open = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open: can_open,
    can_close: can_close,
    length: count
  };
}; // re-export Token class to use in block rules


StateInline.prototype.Token = Token;
module.exports = StateInline;

},{"../common/utils":9,"../token":58}],56:[function(require,module,exports){
// ~~strike through~~
//
'use strict'; // Insert each marker as a separate text token, and add it to delimiter list
//

module.exports.tokenize = function strikethrough(state, silent) {
  var i,
      scanned,
      token,
      len,
      ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) {
    return false;
  }

  if (marker !== 0x7E
  /* ~ */
  ) {
    return false;
  }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) {
    return false;
  }

  if (len % 2) {
    token = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token = state.push('text', '', 0);
    token.content = ch + ch;
    state.delimiters.push({
      marker: marker,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: state.tokens.length - 1,
      end: -1,
      open: scanned.can_open,
      close: scanned.can_close
    });
  }

  state.pos += scanned.length;
  return true;
};

function postProcess(state, delimiters) {
  var i,
      j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      max = delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E
    /* ~ */
    ) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];
    token = state.tokens[startDelim.token];
    token.type = 's_open';
    token.tag = 's';
    token.nesting = 1;
    token.markup = '~~';
    token.content = '';
    token = state.tokens[endDelim.token];
    token.type = 's_close';
    token.tag = 's';
    token.nesting = -1;
    token.markup = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' && state.tokens[endDelim.token - 1].content === '~') {
      loneMarkers.push(endDelim.token - 1);
    }
  } // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //


  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
} // Walk through delimiter list and replace text tokens with tags
//


module.exports.postProcess = function strikethrough(state) {
  var curr,
      tokens_meta = state.tokens_meta,
      max = state.tokens_meta.length;
  postProcess(state, state.delimiters);

  for (curr = 0; curr < max; curr++) {
    if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
      postProcess(state, tokens_meta[curr].delimiters);
    }
  }
};

},{}],57:[function(require,module,exports){
// Skip text characters for text token, place those to pending buffer
// and increment current pos
'use strict'; // Rule to skip pure text
// '{}$%@~+=:' reserved for extentions
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character

function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A
    /* \n */
    :
    case 0x21
    /* ! */
    :
    case 0x23
    /* # */
    :
    case 0x24
    /* $ */
    :
    case 0x25
    /* % */
    :
    case 0x26
    /* & */
    :
    case 0x2A
    /* * */
    :
    case 0x2B
    /* + */
    :
    case 0x2D
    /* - */
    :
    case 0x3A
    /* : */
    :
    case 0x3C
    /* < */
    :
    case 0x3D
    /* = */
    :
    case 0x3E
    /* > */
    :
    case 0x40
    /* @ */
    :
    case 0x5B
    /* [ */
    :
    case 0x5C
    /* \ */
    :
    case 0x5D
    /* ] */
    :
    case 0x5E
    /* ^ */
    :
    case 0x5F
    /* _ */
    :
    case 0x60
    /* ` */
    :
    case 0x7B
    /* { */
    :
    case 0x7D
    /* } */
    :
    case 0x7E
    /* ~ */
    :
      return true;

    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) {
    return false;
  }

  if (!silent) {
    state.pending += state.src.slice(state.pos, pos);
  }

  state.pos = pos;
  return true;
}; // Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/

},{}],58:[function(require,module,exports){
// Token class
'use strict';
/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/

function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type = type;
  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/

  this.tag = tag;
  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/

  this.attrs = null;
  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/

  this.map = null;
  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/

  this.nesting = nesting;
  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/

  this.level = 0;
  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/

  this.children = null;
  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/

  this.content = '';
  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/

  this.markup = '';
  /**
   * Token#info -> String
   *
   * Additional information:
   *
   * - Info string for "fence" tokens
   * - The value "auto" for autolink "link_open" and "link_close" tokens
   * - The string value of the item marker for ordered-list "list_item_open" tokens
   **/

  this.info = '';
  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/

  this.meta = null;
  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/

  this.block = false;
  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/

  this.hidden = false;
}
/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/


Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) {
    return -1;
  }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) {
      return i;
    }
  }

  return -1;
};
/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/


Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [attrData];
  }
};
/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/


Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [name, value];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};
/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/


Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name),
      value = null;

  if (idx >= 0) {
    value = this.attrs[idx][1];
  }

  return value;
};
/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/


Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([name, value]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};

module.exports = Token;

},{}],59:[function(require,module,exports){
'use strict';
/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i,
      ch,
      cache = decodeCache[exclude];

  if (cache) {
    return cache;
  }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
} // Decode percent-encoded string.
//


function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);
  return string.replace(/(%[a-f0-9]{2})+/gi, function (seq) {
    var i,
        l,
        b1,
        b2,
        b3,
        b4,
        chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && i + 3 < l) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = b1 << 6 & 0x7C0 | b2 & 0x3F;

          if (chr < 0x80) {
            result += "\uFFFD\uFFFD";
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && i + 6 < l) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = b1 << 12 & 0xF000 | b2 << 6 & 0xFC0 | b3 & 0x3F;

          if (chr < 0x800 || chr >= 0xD800 && chr <= 0xDFFF) {
            result += "\uFFFD\uFFFD\uFFFD";
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && i + 9 < l) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = b1 << 18 & 0x1C0000 | b2 << 12 & 0x3F000 | b3 << 6 & 0xFC0 | b4 & 0x3F;

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += "\uFFFD\uFFFD\uFFFD\uFFFD";
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += "\uFFFD";
    }

    return result;
  });
}

decode.defaultChars = ';/?:@&=+$,#';
decode.componentChars = '';
module.exports = decode;

},{}],60:[function(require,module,exports){
'use strict';

var encodeCache = {}; // Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//

function getEncodeCache(exclude) {
  var i,
      ch,
      cache = encodeCache[exclude];

  if (cache) {
    return cache;
  }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
} // Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//


function encode(string, exclude, keepEscaped) {
  var i,
      l,
      code,
      nextCode,
      cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25
    /* % */
    && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);

        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }

      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
module.exports = encode;

},{}],61:[function(require,module,exports){
'use strict';

module.exports = function format(url) {
  var result = '';
  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';
  return result;
};

},{}],62:[function(require,module,exports){
'use strict';

module.exports.encode = require('./encode');
module.exports.decode = require('./decode');
module.exports.format = require('./format');
module.exports.parse = require('./parse');

},{"./decode":59,"./encode":60,"./format":61,"./parse":63}],63:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict'; //
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
} // Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.

/* eslint-disable no-script-url */
// protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
};
/* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) {
    return url;
  }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, slashesDenoteHost) {
  var i,
      l,
      lowerProto,
      hec,
      slashes,
      rest = url; // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"

  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);

    if (simplePath) {
      this.pathname = simplePath[1];

      if (simplePath[2]) {
        this.search = simplePath[2];
      }

      return this;
    }
  }

  var proto = protocolPattern.exec(rest);

  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  } // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.


  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';

    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c
    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.
    // find the first instance of any hostEndingChars
    var hostEnd = -1;

    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);

      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    } // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.


    var auth, atSign;

    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    } // Now we have a portion which is definitely the auth.
    // Pull that off.


    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    } // the host is the remaining to the left of the first non-host char


    hostEnd = -1;

    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);

      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    } // if we still have not hit it, then the entire thing is a host.


    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') {
      hostEnd--;
    }

    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd); // pull out port.

    this.parseHost(host); // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.

    this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.

    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);

      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];

        if (!part) {
          continue;
        }

        if (!part.match(hostnamePartPattern)) {
          var newpart = '';

          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          } // we test again with ASCII char only


          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);

            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }

            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }

            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } // strip [ and ] from the hostname
    // the host field still retains them, though


    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  } // chop off from the tail first.


  var hash = rest.indexOf('#');

  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }

  var qm = rest.indexOf('?');

  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }

  if (rest) {
    this.pathname = rest;
  }

  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function (host) {
  var port = portPattern.exec(host);

  if (port) {
    port = port[0];

    if (port !== ':') {
      this.port = port.substr(1);
    }

    host = host.substr(0, host.length - port.length);
  }

  if (host) {
    this.hostname = host;
  }
};

module.exports = urlParse;

},{}],64:[function(require,module,exports){
(function (global){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! https://mths.be/punycode v1.4.1 by @mathias */
;

(function (root) {
  /** Detect free variables */
  var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  var freeModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */


  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var length = array.length;
    var result = [];

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }

    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }

    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }

    return base;
  }
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;; k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output

      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT; // Convert the input in UCS-2 to Unicode

    input = ucs2decode(input); // Cache the length

    inputLength = input.length; // Initialize the state

    n = initialN;
    delta = 0;
    bias = initialBias; // Handle the basic code points

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow


      handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;; k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (q < t) {
              break;
            }

            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  }
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.4.1',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (typeof define == 'function' && _typeof(define.amd) == 'object' && define.amd) {
    define('punycode', function () {
      return punycode;
    });
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.punycode = punycode;
  }
})(void 0);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],65:[function(require,module,exports){
"use strict";

module.exports = /[\0-\x1F\x7F-\x9F]/;

},{}],66:[function(require,module,exports){
"use strict";

module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;

},{}],67:[function(require,module,exports){
"use strict";

module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

},{}],68:[function(require,module,exports){
"use strict";

module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;

},{}],69:[function(require,module,exports){
'use strict';

exports.Any = require('./properties/Any/regex');
exports.Cc = require('./categories/Cc/regex');
exports.Cf = require('./categories/Cf/regex');
exports.P = require('./categories/P/regex');
exports.Z = require('./categories/Z/regex');

},{"./categories/Cc/regex":65,"./categories/Cf/regex":66,"./categories/P/regex":67,"./categories/Z/regex":68,"./properties/Any/regex":70}],70:[function(require,module,exports){
"use strict";

module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvbWFwcy9lbnRpdGllcy5qc29uIiwibm9kZV9tb2R1bGVzL2xpbmtpZnktaXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbGlua2lmeS1pdC9saWIvcmUuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2NvbW1vbi9lbnRpdGllcy5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL2h0bWxfYmxvY2tzLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9jb21tb24vaHRtbF9yZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvY29tbW9uL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9oZWxwZXJzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfZGVzdGluYXRpb24uanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvaGVscGVycy9wYXJzZV9saW5rX3RpdGxlLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcGFyc2VyX2Jsb2NrLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wYXJzZXJfY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcGFyc2VyX2lubGluZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcHJlc2V0cy9jb21tb25tYXJrLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9wcmVzZXRzL2RlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3ByZXNldHMvemVyby5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcmVuZGVyZXIuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVyLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9ibG9ja3F1b3RlLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9mZW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaGVhZGluZy5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svaHIuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2h0bWxfYmxvY2suanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL2xoZWFkaW5nLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9saXN0LmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19ibG9jay9wYXJhZ3JhcGguanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL3JlZmVyZW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfYmxvY2svc3RhdGVfYmxvY2suanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2Jsb2NrL3RhYmxlLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2Jsb2NrLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL2lubGluZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9saW5raWZ5LmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19jb3JlL25vcm1hbGl6ZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS9yZXBsYWNlbWVudHMuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2NvcmUvc21hcnRxdW90ZXMuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2NvcmUvc3RhdGVfY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfY29yZS90ZXh0X2pvaW4uanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9hdXRvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2JhY2t0aWNrcy5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2JhbGFuY2VfcGFpcnMuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9lbXBoYXNpcy5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2VzY2FwZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2ZyYWdtZW50c19qb2luLmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvaHRtbF9pbmxpbmUuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9pbWFnZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL2xpbmsuanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS9saW5raWZ5LmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi9ydWxlc19pbmxpbmUvbmV3bGluZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZS5qcyIsIm5vZGVfbW9kdWxlcy9tYXJrZG93bi1pdC9saWIvcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2guanMiLCJub2RlX21vZHVsZXMvbWFya2Rvd24taXQvbGliL3J1bGVzX2lubGluZS90ZXh0LmpzIiwibm9kZV9tb2R1bGVzL21hcmtkb3duLWl0L2xpYi90b2tlbi5qcyIsIm5vZGVfbW9kdWxlcy9tZHVybC9kZWNvZGUuanMiLCJub2RlX21vZHVsZXMvbWR1cmwvZW5jb2RlLmpzIiwibm9kZV9tb2R1bGVzL21kdXJsL2Zvcm1hdC5qcyIsIm5vZGVfbW9kdWxlcy9tZHVybC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tZHVybC9wYXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9wdW55Y29kZS9wdW55Y29kZS5qcyIsIm5vZGVfbW9kdWxlcy91Yy5taWNyby9jYXRlZ29yaWVzL0NjL3JlZ2V4LmpzIiwibm9kZV9tb2R1bGVzL3VjLm1pY3JvL2NhdGVnb3JpZXMvQ2YvcmVnZXguanMiLCJub2RlX21vZHVsZXMvdWMubWljcm8vY2F0ZWdvcmllcy9QL3JlZ2V4LmpzIiwibm9kZV9tb2R1bGVzL3VjLm1pY3JvL2NhdGVnb3JpZXMvWi9yZWdleC5qcyIsIm5vZGVfbW9kdWxlcy91Yy5taWNyby9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy91Yy5taWNyby9wcm9wZXJ0aWVzL0FueS9yZWdleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQSxJQUFNLEVBQUUsR0FBRyxJQUFJLHNCQUFKLEVBQVg7QUFFQSxJQUFJLE9BQU8sR0FBRyxJQUFk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WixFQUFzQjtRQUNyQixRQUFRLENBQUMsY0FBVCxDQUF3QixHQUF4QixNQUFpQyxXQUFXLENBQUMsR0FBRCxDQUFYLEdBQW1CLFFBQVEsQ0FBQyxHQUFELENBQTVEO01BQ0E7SUFDRDtFQUNELENBVk0sTUFVQTtJQUNOO0lBQ0EsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsUUFBaEI7RUFDQTtBQUVELENBbmhCQyxTQUFEOzs7Ozs7O0FDREQsTUFBTSxDQUFDLE9BQVAsR0FBZSxvQkFBZjs7Ozs7QUNBQSxNQUFNLENBQUMsT0FBUCxHQUFlLHVOQUFmOzs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWUsbzJEQUFmOzs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQLEdBQWUsMERBQWY7OztBQ0FBOztBQUVBLE9BQU8sQ0FBQyxHQUFSLEdBQWMsT0FBTyxDQUFDLHdCQUFELENBQXJCO0FBQ0EsT0FBTyxDQUFDLEVBQVIsR0FBYyxPQUFPLENBQUMsdUJBQUQsQ0FBckI7QUFDQSxPQUFPLENBQUMsRUFBUixHQUFjLE9BQU8sQ0FBQyx1QkFBRCxDQUFyQjtBQUNBLE9BQU8sQ0FBQyxDQUFSLEdBQWMsT0FBTyxDQUFDLHNCQUFELENBQXJCO0FBQ0EsT0FBTyxDQUFDLENBQVIsR0FBYyxPQUFPLENBQUMsc0JBQUQsQ0FBckI7Ozs7O0FDTkEsTUFBTSxDQUFDLE9BQVAsR0FBZSxrSUFBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBNYXJrZG93bkl0IGZyb20gXCJtYXJrZG93bi1pdFwiO1xuY29uc3QgbWQgPSBuZXcgTWFya2Rvd25JdCgpO1xuXG5sZXQgcGFsZXR0ZSA9IG51bGw7XG5sZXQgdGV4dGFyZWEgPSBudWxsO1xuXG5tYWluKCk7XG5cbmZ1bmN0aW9uIG9ua2V5cHJlc3Moa2V5Ym9hcmRFdmVudCkge1xuICBzd2l0Y2ggKGtleWJvYXJkRXZlbnQua2V5KSB7XG4gICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICBpZiAoa2V5Ym9hcmRFdmVudC5jdHJsS2V5KSB7XG4gICAgICAgIHJlc2V0SW5wdXQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXlib2FyZEV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIG11dGVUZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGluc2VydE5ld0xpbmUoKTtcbiAgICAgIHJhbmRvbWl6ZVBhbGxldGUoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbnNlcnRUZXh0KGtleWJvYXJkRXZlbnQua2V5KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUlucHV0KCkge1xuICBjb25zdCBjID0gdGV4dGFyZWEuY2hpbGRyZW47XG4gIGNvbnN0IGlucHV0ID0gY1tjLmxlbmd0aCAtIDJdOyAvLyBsYXN0IG9uIGlzIGEgYnJpY2sgZWxlbWVudFxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0VGV4dCh0ZXh0KSB7XG4gIGdldEFjdGl2ZUlucHV0KCkuaW5uZXJIVE1MICs9IHRleHQ7XG59XG5cbmZ1bmN0aW9uIG11dGVUZXh0KCkge1xuICBnZXRBY3RpdmVJbnB1dCgpLmNsYXNzTGlzdC5hZGQoXCJtdXRlXCIpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnROZXdMaW5lKCkge1xuICBjb25zdCBhY3RpdmUgPSBnZXRBY3RpdmVJbnB1dCgpO1xuICBpZiAoYWN0aXZlKSB7XG4gICAgYWN0aXZlLmlubmVySFRNTCA9IG1kLnJlbmRlcihhY3RpdmUuaW5uZXJIVE1MKTtcbiAgfVxuXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHRhcmVhLmFwcGVuZENoaWxkKGVsKTtcblxuICBjb25zdCBiYXIgPSB0ZXh0YXJlYS5xdWVyeVNlbGVjdG9yKFwiYlwiKTtcbiAgaWYgKGJhcikge1xuICAgIGJhci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJhcik7XG4gICAgdGV4dGFyZWEuYXBwZW5kQ2hpbGQoYmFyKTtcbiAgfSBlbHNlIHtcbiAgICB0ZXh0YXJlYS5pbm5lckhUTUwgKz0gXCI8Yj7ilq48L2I+XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcbiAgdGV4dGFyZWEuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBvbmtleXByZXNzKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfb25jbGljayk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgX29ucGFzdGUpO1xuICB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYiNtYWluIHRleHRcIik7XG59XG5cbmZ1bmN0aW9uIF9vbnBhc3RlKGV2ZW50KSB7XG4gIGxldCBwYXN0ZSA9IChldmVudC5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhKS5nZXREYXRhKFwidGV4dFwiKTtcblxuICBpZiAoIXBhc3RlLmxlbmd0aCkge1xuICAgIGluc2VydFRleHQoXCLwn42NXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluc2VydFRleHQocGFzdGUpO1xufVxuXG5mdW5jdGlvbiBfb25jbGljaygpIHtcbiAgcmFuZG9taXplUGFsbGV0ZSgpO1xufVxuXG5mdW5jdGlvbiBfbG9hZFBhbGV0dGUoKSB7XG4gIHBhbGV0dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGIjcGFsZXR0ZVwiKS5pbm5lckhUTUw7XG4gIHBhbGV0dGUgPSBwYWxldHRlLnNwbGl0KFwiXFxuXCIpOyAvLyBBcnJheVszMl0uIFBhbGV0dGUgZnJvbSBodHRwczovL2xvc3BlYy5jb20vcGFsZXR0ZS1saXN0L3BpbmVhcHBsZS0zMlxufVxuXG5mdW5jdGlvbiByYW5kb21pemVQYWxsZXRlKCkge1xuICBpZiAoIXBhbGV0dGUpIHtcbiAgICBfbG9hZFBhbGV0dGUoKTtcbiAgfVxuXG4gIGNvbnN0IGNvbG9ycyA9IHBhbGV0dGUubGVuZ3RoO1xuICBjb25zdCBjb2xvckEgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMpO1xuICBjb25zdCBjb2xvckIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMpO1xuXG4gIGlmIChjb2xvckEgPT0gY29sb3JCKSB7XG4gICAgcmFuZG9taXplUGFsbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXCItLWNvbG9yLWFcIiwgXCIjXCIgKyBwYWxldHRlW2NvbG9yQV0pO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvci1iXCIsIFwiI1wiICsgcGFsZXR0ZVtjb2xvckJdKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzPXtcIkFhY3V0ZVwiOlwiw4FcIixcImFhY3V0ZVwiOlwiw6FcIixcIkFicmV2ZVwiOlwixIJcIixcImFicmV2ZVwiOlwixINcIixcImFjXCI6XCLiiL5cIixcImFjZFwiOlwi4oi/XCIsXCJhY0VcIjpcIuKIvsyzXCIsXCJBY2lyY1wiOlwiw4JcIixcImFjaXJjXCI6XCLDolwiLFwiYWN1dGVcIjpcIsK0XCIsXCJBY3lcIjpcItCQXCIsXCJhY3lcIjpcItCwXCIsXCJBRWxpZ1wiOlwiw4ZcIixcImFlbGlnXCI6XCLDplwiLFwiYWZcIjpcIuKBoVwiLFwiQWZyXCI6XCLwnZSEXCIsXCJhZnJcIjpcIvCdlJ5cIixcIkFncmF2ZVwiOlwiw4BcIixcImFncmF2ZVwiOlwiw6BcIixcImFsZWZzeW1cIjpcIuKEtVwiLFwiYWxlcGhcIjpcIuKEtVwiLFwiQWxwaGFcIjpcIs6RXCIsXCJhbHBoYVwiOlwizrFcIixcIkFtYWNyXCI6XCLEgFwiLFwiYW1hY3JcIjpcIsSBXCIsXCJhbWFsZ1wiOlwi4qi/XCIsXCJhbXBcIjpcIiZcIixcIkFNUFwiOlwiJlwiLFwiYW5kYW5kXCI6XCLiqZVcIixcIkFuZFwiOlwi4qmTXCIsXCJhbmRcIjpcIuKIp1wiLFwiYW5kZFwiOlwi4qmcXCIsXCJhbmRzbG9wZVwiOlwi4qmYXCIsXCJhbmR2XCI6XCLiqZpcIixcImFuZ1wiOlwi4oigXCIsXCJhbmdlXCI6XCLipqRcIixcImFuZ2xlXCI6XCLiiKBcIixcImFuZ21zZGFhXCI6XCLipqhcIixcImFuZ21zZGFiXCI6XCLipqlcIixcImFuZ21zZGFjXCI6XCLipqpcIixcImFuZ21zZGFkXCI6XCLipqtcIixcImFuZ21zZGFlXCI6XCLipqxcIixcImFuZ21zZGFmXCI6XCLipq1cIixcImFuZ21zZGFnXCI6XCLipq5cIixcImFuZ21zZGFoXCI6XCLipq9cIixcImFuZ21zZFwiOlwi4oihXCIsXCJhbmdydFwiOlwi4oifXCIsXCJhbmdydHZiXCI6XCLiir5cIixcImFuZ3J0dmJkXCI6XCLipp1cIixcImFuZ3NwaFwiOlwi4oiiXCIsXCJhbmdzdFwiOlwiw4VcIixcImFuZ3phcnJcIjpcIuKNvFwiLFwiQW9nb25cIjpcIsSEXCIsXCJhb2dvblwiOlwixIVcIixcIkFvcGZcIjpcIvCdlLhcIixcImFvcGZcIjpcIvCdlZJcIixcImFwYWNpclwiOlwi4qmvXCIsXCJhcFwiOlwi4omIXCIsXCJhcEVcIjpcIuKpsFwiLFwiYXBlXCI6XCLiiYpcIixcImFwaWRcIjpcIuKJi1wiLFwiYXBvc1wiOlwiJ1wiLFwiQXBwbHlGdW5jdGlvblwiOlwi4oGhXCIsXCJhcHByb3hcIjpcIuKJiFwiLFwiYXBwcm94ZXFcIjpcIuKJilwiLFwiQXJpbmdcIjpcIsOFXCIsXCJhcmluZ1wiOlwiw6VcIixcIkFzY3JcIjpcIvCdkpxcIixcImFzY3JcIjpcIvCdkrZcIixcIkFzc2lnblwiOlwi4omUXCIsXCJhc3RcIjpcIipcIixcImFzeW1wXCI6XCLiiYhcIixcImFzeW1wZXFcIjpcIuKJjVwiLFwiQXRpbGRlXCI6XCLDg1wiLFwiYXRpbGRlXCI6XCLDo1wiLFwiQXVtbFwiOlwiw4RcIixcImF1bWxcIjpcIsOkXCIsXCJhd2NvbmludFwiOlwi4oizXCIsXCJhd2ludFwiOlwi4qiRXCIsXCJiYWNrY29uZ1wiOlwi4omMXCIsXCJiYWNrZXBzaWxvblwiOlwiz7ZcIixcImJhY2twcmltZVwiOlwi4oC1XCIsXCJiYWNrc2ltXCI6XCLiiL1cIixcImJhY2tzaW1lcVwiOlwi4ouNXCIsXCJCYWNrc2xhc2hcIjpcIuKIllwiLFwiQmFydlwiOlwi4qunXCIsXCJiYXJ2ZWVcIjpcIuKKvVwiLFwiYmFyd2VkXCI6XCLijIVcIixcIkJhcndlZFwiOlwi4oyGXCIsXCJiYXJ3ZWRnZVwiOlwi4oyFXCIsXCJiYnJrXCI6XCLijrVcIixcImJicmt0YnJrXCI6XCLijrZcIixcImJjb25nXCI6XCLiiYxcIixcIkJjeVwiOlwi0JFcIixcImJjeVwiOlwi0LFcIixcImJkcXVvXCI6XCLigJ5cIixcImJlY2F1c1wiOlwi4oi1XCIsXCJiZWNhdXNlXCI6XCLiiLVcIixcIkJlY2F1c2VcIjpcIuKItVwiLFwiYmVtcHR5dlwiOlwi4qawXCIsXCJiZXBzaVwiOlwiz7ZcIixcImJlcm5vdVwiOlwi4oSsXCIsXCJCZXJub3VsbGlzXCI6XCLihKxcIixcIkJldGFcIjpcIs6SXCIsXCJiZXRhXCI6XCLOslwiLFwiYmV0aFwiOlwi4oS2XCIsXCJiZXR3ZWVuXCI6XCLiiaxcIixcIkJmclwiOlwi8J2UhVwiLFwiYmZyXCI6XCLwnZSfXCIsXCJiaWdjYXBcIjpcIuKLglwiLFwiYmlnY2lyY1wiOlwi4pevXCIsXCJiaWdjdXBcIjpcIuKLg1wiLFwiYmlnb2RvdFwiOlwi4qiAXCIsXCJiaWdvcGx1c1wiOlwi4qiBXCIsXCJiaWdvdGltZXNcIjpcIuKoglwiLFwiYmlnc3FjdXBcIjpcIuKohlwiLFwiYmlnc3RhclwiOlwi4piFXCIsXCJiaWd0cmlhbmdsZWRvd25cIjpcIuKWvVwiLFwiYmlndHJpYW5nbGV1cFwiOlwi4pazXCIsXCJiaWd1cGx1c1wiOlwi4qiEXCIsXCJiaWd2ZWVcIjpcIuKLgVwiLFwiYmlnd2VkZ2VcIjpcIuKLgFwiLFwiYmthcm93XCI6XCLipI1cIixcImJsYWNrbG96ZW5nZVwiOlwi4qerXCIsXCJibGFja3NxdWFyZVwiOlwi4paqXCIsXCJibGFja3RyaWFuZ2xlXCI6XCLilrRcIixcImJsYWNrdHJpYW5nbGVkb3duXCI6XCLilr5cIixcImJsYWNrdHJpYW5nbGVsZWZ0XCI6XCLil4JcIixcImJsYWNrdHJpYW5nbGVyaWdodFwiOlwi4pa4XCIsXCJibGFua1wiOlwi4pCjXCIsXCJibGsxMlwiOlwi4paSXCIsXCJibGsxNFwiOlwi4paRXCIsXCJibGszNFwiOlwi4paTXCIsXCJibG9ja1wiOlwi4paIXCIsXCJibmVcIjpcIj3ig6VcIixcImJuZXF1aXZcIjpcIuKJoeKDpVwiLFwiYk5vdFwiOlwi4qutXCIsXCJibm90XCI6XCLijJBcIixcIkJvcGZcIjpcIvCdlLlcIixcImJvcGZcIjpcIvCdlZNcIixcImJvdFwiOlwi4oqlXCIsXCJib3R0b21cIjpcIuKKpVwiLFwiYm93dGllXCI6XCLii4hcIixcImJveGJveFwiOlwi4qeJXCIsXCJib3hkbFwiOlwi4pSQXCIsXCJib3hkTFwiOlwi4pWVXCIsXCJib3hEbFwiOlwi4pWWXCIsXCJib3hETFwiOlwi4pWXXCIsXCJib3hkclwiOlwi4pSMXCIsXCJib3hkUlwiOlwi4pWSXCIsXCJib3hEclwiOlwi4pWTXCIsXCJib3hEUlwiOlwi4pWUXCIsXCJib3hoXCI6XCLilIBcIixcImJveEhcIjpcIuKVkFwiLFwiYm94aGRcIjpcIuKUrFwiLFwiYm94SGRcIjpcIuKVpFwiLFwiYm94aERcIjpcIuKVpVwiLFwiYm94SERcIjpcIuKVplwiLFwiYm94aHVcIjpcIuKUtFwiLFwiYm94SHVcIjpcIuKVp1wiLFwiYm94aFVcIjpcIuKVqFwiLFwiYm94SFVcIjpcIuKVqVwiLFwiYm94bWludXNcIjpcIuKKn1wiLFwiYm94cGx1c1wiOlwi4oqeXCIsXCJib3h0aW1lc1wiOlwi4oqgXCIsXCJib3h1bFwiOlwi4pSYXCIsXCJib3h1TFwiOlwi4pWbXCIsXCJib3hVbFwiOlwi4pWcXCIsXCJib3hVTFwiOlwi4pWdXCIsXCJib3h1clwiOlwi4pSUXCIsXCJib3h1UlwiOlwi4pWYXCIsXCJib3hVclwiOlwi4pWZXCIsXCJib3hVUlwiOlwi4pWaXCIsXCJib3h2XCI6XCLilIJcIixcImJveFZcIjpcIuKVkVwiLFwiYm94dmhcIjpcIuKUvFwiLFwiYm94dkhcIjpcIuKVqlwiLFwiYm94VmhcIjpcIuKVq1wiLFwiYm94VkhcIjpcIuKVrFwiLFwiYm94dmxcIjpcIuKUpFwiLFwiYm94dkxcIjpcIuKVoVwiLFwiYm94VmxcIjpcIuKVolwiLFwiYm94VkxcIjpcIuKVo1wiLFwiYm94dnJcIjpcIuKUnFwiLFwiYm94dlJcIjpcIuKVnlwiLFwiYm94VnJcIjpcIuKVn1wiLFwiYm94VlJcIjpcIuKVoFwiLFwiYnByaW1lXCI6XCLigLVcIixcImJyZXZlXCI6XCLLmFwiLFwiQnJldmVcIjpcIsuYXCIsXCJicnZiYXJcIjpcIsKmXCIsXCJic2NyXCI6XCLwnZK3XCIsXCJCc2NyXCI6XCLihKxcIixcImJzZW1pXCI6XCLigY9cIixcImJzaW1cIjpcIuKIvVwiLFwiYnNpbWVcIjpcIuKLjVwiLFwiYnNvbGJcIjpcIuKnhVwiLFwiYnNvbFwiOlwiXFxcXFwiLFwiYnNvbGhzdWJcIjpcIuKfiFwiLFwiYnVsbFwiOlwi4oCiXCIsXCJidWxsZXRcIjpcIuKAolwiLFwiYnVtcFwiOlwi4omOXCIsXCJidW1wRVwiOlwi4qquXCIsXCJidW1wZVwiOlwi4omPXCIsXCJCdW1wZXFcIjpcIuKJjlwiLFwiYnVtcGVxXCI6XCLiiY9cIixcIkNhY3V0ZVwiOlwixIZcIixcImNhY3V0ZVwiOlwixIdcIixcImNhcGFuZFwiOlwi4qmEXCIsXCJjYXBicmN1cFwiOlwi4qmJXCIsXCJjYXBjYXBcIjpcIuKpi1wiLFwiY2FwXCI6XCLiiKlcIixcIkNhcFwiOlwi4ouSXCIsXCJjYXBjdXBcIjpcIuKph1wiLFwiY2FwZG90XCI6XCLiqYBcIixcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6XCLihYVcIixcImNhcHNcIjpcIuKIqe+4gFwiLFwiY2FyZXRcIjpcIuKBgVwiLFwiY2Fyb25cIjpcIsuHXCIsXCJDYXlsZXlzXCI6XCLihK1cIixcImNjYXBzXCI6XCLiqY1cIixcIkNjYXJvblwiOlwixIxcIixcImNjYXJvblwiOlwixI1cIixcIkNjZWRpbFwiOlwiw4dcIixcImNjZWRpbFwiOlwiw6dcIixcIkNjaXJjXCI6XCLEiFwiLFwiY2NpcmNcIjpcIsSJXCIsXCJDY29uaW50XCI6XCLiiLBcIixcImNjdXBzXCI6XCLiqYxcIixcImNjdXBzc21cIjpcIuKpkFwiLFwiQ2RvdFwiOlwixIpcIixcImNkb3RcIjpcIsSLXCIsXCJjZWRpbFwiOlwiwrhcIixcIkNlZGlsbGFcIjpcIsK4XCIsXCJjZW1wdHl2XCI6XCLiprJcIixcImNlbnRcIjpcIsKiXCIsXCJjZW50ZXJkb3RcIjpcIsK3XCIsXCJDZW50ZXJEb3RcIjpcIsK3XCIsXCJjZnJcIjpcIvCdlKBcIixcIkNmclwiOlwi4oStXCIsXCJDSGN5XCI6XCLQp1wiLFwiY2hjeVwiOlwi0YdcIixcImNoZWNrXCI6XCLinJNcIixcImNoZWNrbWFya1wiOlwi4pyTXCIsXCJDaGlcIjpcIs6nXCIsXCJjaGlcIjpcIs+HXCIsXCJjaXJjXCI6XCLLhlwiLFwiY2lyY2VxXCI6XCLiiZdcIixcImNpcmNsZWFycm93bGVmdFwiOlwi4oa6XCIsXCJjaXJjbGVhcnJvd3JpZ2h0XCI6XCLihrtcIixcImNpcmNsZWRhc3RcIjpcIuKKm1wiLFwiY2lyY2xlZGNpcmNcIjpcIuKKmlwiLFwiY2lyY2xlZGRhc2hcIjpcIuKKnVwiLFwiQ2lyY2xlRG90XCI6XCLiiplcIixcImNpcmNsZWRSXCI6XCLCrlwiLFwiY2lyY2xlZFNcIjpcIuKTiFwiLFwiQ2lyY2xlTWludXNcIjpcIuKKllwiLFwiQ2lyY2xlUGx1c1wiOlwi4oqVXCIsXCJDaXJjbGVUaW1lc1wiOlwi4oqXXCIsXCJjaXJcIjpcIuKXi1wiLFwiY2lyRVwiOlwi4qeDXCIsXCJjaXJlXCI6XCLiiZdcIixcImNpcmZuaW50XCI6XCLiqJBcIixcImNpcm1pZFwiOlwi4quvXCIsXCJjaXJzY2lyXCI6XCLip4JcIixcIkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOlwi4oiyXCIsXCJDbG9zZUN1cmx5RG91YmxlUXVvdGVcIjpcIuKAnVwiLFwiQ2xvc2VDdXJseVF1b3RlXCI6XCLigJlcIixcImNsdWJzXCI6XCLimaNcIixcImNsdWJzdWl0XCI6XCLimaNcIixcImNvbG9uXCI6XCI6XCIsXCJDb2xvblwiOlwi4oi3XCIsXCJDb2xvbmVcIjpcIuKptFwiLFwiY29sb25lXCI6XCLiiZRcIixcImNvbG9uZXFcIjpcIuKJlFwiLFwiY29tbWFcIjpcIixcIixcImNvbW1hdFwiOlwiQFwiLFwiY29tcFwiOlwi4oiBXCIsXCJjb21wZm5cIjpcIuKImFwiLFwiY29tcGxlbWVudFwiOlwi4oiBXCIsXCJjb21wbGV4ZXNcIjpcIuKEglwiLFwiY29uZ1wiOlwi4omFXCIsXCJjb25nZG90XCI6XCLiqa1cIixcIkNvbmdydWVudFwiOlwi4omhXCIsXCJjb25pbnRcIjpcIuKIrlwiLFwiQ29uaW50XCI6XCLiiK9cIixcIkNvbnRvdXJJbnRlZ3JhbFwiOlwi4oiuXCIsXCJjb3BmXCI6XCLwnZWUXCIsXCJDb3BmXCI6XCLihIJcIixcImNvcHJvZFwiOlwi4oiQXCIsXCJDb3Byb2R1Y3RcIjpcIuKIkFwiLFwiY29weVwiOlwiwqlcIixcIkNPUFlcIjpcIsKpXCIsXCJjb3B5c3JcIjpcIuKEl1wiLFwiQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbFwiOlwi4oizXCIsXCJjcmFyclwiOlwi4oa1XCIsXCJjcm9zc1wiOlwi4pyXXCIsXCJDcm9zc1wiOlwi4qivXCIsXCJDc2NyXCI6XCLwnZKeXCIsXCJjc2NyXCI6XCLwnZK4XCIsXCJjc3ViXCI6XCLiq49cIixcImNzdWJlXCI6XCLiq5FcIixcImNzdXBcIjpcIuKrkFwiLFwiY3N1cGVcIjpcIuKrklwiLFwiY3Rkb3RcIjpcIuKLr1wiLFwiY3VkYXJybFwiOlwi4qS4XCIsXCJjdWRhcnJyXCI6XCLipLVcIixcImN1ZXByXCI6XCLii55cIixcImN1ZXNjXCI6XCLii59cIixcImN1bGFyclwiOlwi4oa2XCIsXCJjdWxhcnJwXCI6XCLipL1cIixcImN1cGJyY2FwXCI6XCLiqYhcIixcImN1cGNhcFwiOlwi4qmGXCIsXCJDdXBDYXBcIjpcIuKJjVwiLFwiY3VwXCI6XCLiiKpcIixcIkN1cFwiOlwi4ouTXCIsXCJjdXBjdXBcIjpcIuKpilwiLFwiY3VwZG90XCI6XCLiio1cIixcImN1cG9yXCI6XCLiqYVcIixcImN1cHNcIjpcIuKIqu+4gFwiLFwiY3VyYXJyXCI6XCLihrdcIixcImN1cmFycm1cIjpcIuKkvFwiLFwiY3VybHllcXByZWNcIjpcIuKLnlwiLFwiY3VybHllcXN1Y2NcIjpcIuKLn1wiLFwiY3VybHl2ZWVcIjpcIuKLjlwiLFwiY3VybHl3ZWRnZVwiOlwi4ouPXCIsXCJjdXJyZW5cIjpcIsKkXCIsXCJjdXJ2ZWFycm93bGVmdFwiOlwi4oa2XCIsXCJjdXJ2ZWFycm93cmlnaHRcIjpcIuKGt1wiLFwiY3V2ZWVcIjpcIuKLjlwiLFwiY3V3ZWRcIjpcIuKLj1wiLFwiY3djb25pbnRcIjpcIuKIslwiLFwiY3dpbnRcIjpcIuKIsVwiLFwiY3lsY3R5XCI6XCLijK1cIixcImRhZ2dlclwiOlwi4oCgXCIsXCJEYWdnZXJcIjpcIuKAoVwiLFwiZGFsZXRoXCI6XCLihLhcIixcImRhcnJcIjpcIuKGk1wiLFwiRGFyclwiOlwi4oahXCIsXCJkQXJyXCI6XCLih5NcIixcImRhc2hcIjpcIuKAkFwiLFwiRGFzaHZcIjpcIuKrpFwiLFwiZGFzaHZcIjpcIuKKo1wiLFwiZGJrYXJvd1wiOlwi4qSPXCIsXCJkYmxhY1wiOlwiy51cIixcIkRjYXJvblwiOlwixI5cIixcImRjYXJvblwiOlwixI9cIixcIkRjeVwiOlwi0JRcIixcImRjeVwiOlwi0LRcIixcImRkYWdnZXJcIjpcIuKAoVwiLFwiZGRhcnJcIjpcIuKHilwiLFwiRERcIjpcIuKFhVwiLFwiZGRcIjpcIuKFhlwiLFwiRERvdHJhaGRcIjpcIuKkkVwiLFwiZGRvdHNlcVwiOlwi4qm3XCIsXCJkZWdcIjpcIsKwXCIsXCJEZWxcIjpcIuKIh1wiLFwiRGVsdGFcIjpcIs6UXCIsXCJkZWx0YVwiOlwizrRcIixcImRlbXB0eXZcIjpcIuKmsVwiLFwiZGZpc2h0XCI6XCLipb9cIixcIkRmclwiOlwi8J2Uh1wiLFwiZGZyXCI6XCLwnZShXCIsXCJkSGFyXCI6XCLipaVcIixcImRoYXJsXCI6XCLih4NcIixcImRoYXJyXCI6XCLih4JcIixcIkRpYWNyaXRpY2FsQWN1dGVcIjpcIsK0XCIsXCJEaWFjcml0aWNhbERvdFwiOlwiy5lcIixcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGVcIjpcIsudXCIsXCJEaWFjcml0aWNhbEdyYXZlXCI6XCJgXCIsXCJEaWFjcml0aWNhbFRpbGRlXCI6XCLLnFwiLFwiZGlhbVwiOlwi4ouEXCIsXCJkaWFtb25kXCI6XCLii4RcIixcIkRpYW1vbmRcIjpcIuKLhFwiLFwiZGlhbW9uZHN1aXRcIjpcIuKZplwiLFwiZGlhbXNcIjpcIuKZplwiLFwiZGllXCI6XCLCqFwiLFwiRGlmZmVyZW50aWFsRFwiOlwi4oWGXCIsXCJkaWdhbW1hXCI6XCLPnVwiLFwiZGlzaW5cIjpcIuKLslwiLFwiZGl2XCI6XCLDt1wiLFwiZGl2aWRlXCI6XCLDt1wiLFwiZGl2aWRlb250aW1lc1wiOlwi4ouHXCIsXCJkaXZvbnhcIjpcIuKLh1wiLFwiREpjeVwiOlwi0IJcIixcImRqY3lcIjpcItGSXCIsXCJkbGNvcm5cIjpcIuKMnlwiLFwiZGxjcm9wXCI6XCLijI1cIixcImRvbGxhclwiOlwiJFwiLFwiRG9wZlwiOlwi8J2Uu1wiLFwiZG9wZlwiOlwi8J2VlVwiLFwiRG90XCI6XCLCqFwiLFwiZG90XCI6XCLLmVwiLFwiRG90RG90XCI6XCLig5xcIixcImRvdGVxXCI6XCLiiZBcIixcImRvdGVxZG90XCI6XCLiiZFcIixcIkRvdEVxdWFsXCI6XCLiiZBcIixcImRvdG1pbnVzXCI6XCLiiLhcIixcImRvdHBsdXNcIjpcIuKIlFwiLFwiZG90c3F1YXJlXCI6XCLiiqFcIixcImRvdWJsZWJhcndlZGdlXCI6XCLijIZcIixcIkRvdWJsZUNvbnRvdXJJbnRlZ3JhbFwiOlwi4oivXCIsXCJEb3VibGVEb3RcIjpcIsKoXCIsXCJEb3VibGVEb3duQXJyb3dcIjpcIuKHk1wiLFwiRG91YmxlTGVmdEFycm93XCI6XCLih5BcIixcIkRvdWJsZUxlZnRSaWdodEFycm93XCI6XCLih5RcIixcIkRvdWJsZUxlZnRUZWVcIjpcIuKrpFwiLFwiRG91YmxlTG9uZ0xlZnRBcnJvd1wiOlwi4p+4XCIsXCJEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3dcIjpcIuKfulwiLFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjpcIuKfuVwiLFwiRG91YmxlUmlnaHRBcnJvd1wiOlwi4oeSXCIsXCJEb3VibGVSaWdodFRlZVwiOlwi4oqoXCIsXCJEb3VibGVVcEFycm93XCI6XCLih5FcIixcIkRvdWJsZVVwRG93bkFycm93XCI6XCLih5VcIixcIkRvdWJsZVZlcnRpY2FsQmFyXCI6XCLiiKVcIixcIkRvd25BcnJvd0JhclwiOlwi4qSTXCIsXCJkb3duYXJyb3dcIjpcIuKGk1wiLFwiRG93bkFycm93XCI6XCLihpNcIixcIkRvd25hcnJvd1wiOlwi4oeTXCIsXCJEb3duQXJyb3dVcEFycm93XCI6XCLih7VcIixcIkRvd25CcmV2ZVwiOlwizJFcIixcImRvd25kb3duYXJyb3dzXCI6XCLih4pcIixcImRvd25oYXJwb29ubGVmdFwiOlwi4oeDXCIsXCJkb3duaGFycG9vbnJpZ2h0XCI6XCLih4JcIixcIkRvd25MZWZ0UmlnaHRWZWN0b3JcIjpcIuKlkFwiLFwiRG93bkxlZnRUZWVWZWN0b3JcIjpcIuKlnlwiLFwiRG93bkxlZnRWZWN0b3JCYXJcIjpcIuKlllwiLFwiRG93bkxlZnRWZWN0b3JcIjpcIuKGvVwiLFwiRG93blJpZ2h0VGVlVmVjdG9yXCI6XCLipZ9cIixcIkRvd25SaWdodFZlY3RvckJhclwiOlwi4qWXXCIsXCJEb3duUmlnaHRWZWN0b3JcIjpcIuKHgVwiLFwiRG93blRlZUFycm93XCI6XCLihqdcIixcIkRvd25UZWVcIjpcIuKKpFwiLFwiZHJia2Fyb3dcIjpcIuKkkFwiLFwiZHJjb3JuXCI6XCLijJ9cIixcImRyY3JvcFwiOlwi4oyMXCIsXCJEc2NyXCI6XCLwnZKfXCIsXCJkc2NyXCI6XCLwnZK5XCIsXCJEU2N5XCI6XCLQhVwiLFwiZHNjeVwiOlwi0ZVcIixcImRzb2xcIjpcIuKntlwiLFwiRHN0cm9rXCI6XCLEkFwiLFwiZHN0cm9rXCI6XCLEkVwiLFwiZHRkb3RcIjpcIuKLsVwiLFwiZHRyaVwiOlwi4pa/XCIsXCJkdHJpZlwiOlwi4pa+XCIsXCJkdWFyclwiOlwi4oe1XCIsXCJkdWhhclwiOlwi4qWvXCIsXCJkd2FuZ2xlXCI6XCLipqZcIixcIkRaY3lcIjpcItCPXCIsXCJkemN5XCI6XCLRn1wiLFwiZHppZ3JhcnJcIjpcIuKfv1wiLFwiRWFjdXRlXCI6XCLDiVwiLFwiZWFjdXRlXCI6XCLDqVwiLFwiZWFzdGVyXCI6XCLiqa5cIixcIkVjYXJvblwiOlwixJpcIixcImVjYXJvblwiOlwixJtcIixcIkVjaXJjXCI6XCLDilwiLFwiZWNpcmNcIjpcIsOqXCIsXCJlY2lyXCI6XCLiiZZcIixcImVjb2xvblwiOlwi4omVXCIsXCJFY3lcIjpcItCtXCIsXCJlY3lcIjpcItGNXCIsXCJlRERvdFwiOlwi4qm3XCIsXCJFZG90XCI6XCLEllwiLFwiZWRvdFwiOlwixJdcIixcImVEb3RcIjpcIuKJkVwiLFwiZWVcIjpcIuKFh1wiLFwiZWZEb3RcIjpcIuKJklwiLFwiRWZyXCI6XCLwnZSIXCIsXCJlZnJcIjpcIvCdlKJcIixcImVnXCI6XCLiqppcIixcIkVncmF2ZVwiOlwiw4hcIixcImVncmF2ZVwiOlwiw6hcIixcImVnc1wiOlwi4qqWXCIsXCJlZ3Nkb3RcIjpcIuKqmFwiLFwiZWxcIjpcIuKqmVwiLFwiRWxlbWVudFwiOlwi4oiIXCIsXCJlbGludGVyc1wiOlwi4o+nXCIsXCJlbGxcIjpcIuKEk1wiLFwiZWxzXCI6XCLiqpVcIixcImVsc2RvdFwiOlwi4qqXXCIsXCJFbWFjclwiOlwixJJcIixcImVtYWNyXCI6XCLEk1wiLFwiZW1wdHlcIjpcIuKIhVwiLFwiZW1wdHlzZXRcIjpcIuKIhVwiLFwiRW1wdHlTbWFsbFNxdWFyZVwiOlwi4pe7XCIsXCJlbXB0eXZcIjpcIuKIhVwiLFwiRW1wdHlWZXJ5U21hbGxTcXVhcmVcIjpcIuKWq1wiLFwiZW1zcDEzXCI6XCLigIRcIixcImVtc3AxNFwiOlwi4oCFXCIsXCJlbXNwXCI6XCLigINcIixcIkVOR1wiOlwixYpcIixcImVuZ1wiOlwixYtcIixcImVuc3BcIjpcIuKAglwiLFwiRW9nb25cIjpcIsSYXCIsXCJlb2dvblwiOlwixJlcIixcIkVvcGZcIjpcIvCdlLxcIixcImVvcGZcIjpcIvCdlZZcIixcImVwYXJcIjpcIuKLlVwiLFwiZXBhcnNsXCI6XCLip6NcIixcImVwbHVzXCI6XCLiqbFcIixcImVwc2lcIjpcIs61XCIsXCJFcHNpbG9uXCI6XCLOlVwiLFwiZXBzaWxvblwiOlwizrVcIixcImVwc2l2XCI6XCLPtVwiLFwiZXFjaXJjXCI6XCLiiZZcIixcImVxY29sb25cIjpcIuKJlVwiLFwiZXFzaW1cIjpcIuKJglwiLFwiZXFzbGFudGd0clwiOlwi4qqWXCIsXCJlcXNsYW50bGVzc1wiOlwi4qqVXCIsXCJFcXVhbFwiOlwi4qm1XCIsXCJlcXVhbHNcIjpcIj1cIixcIkVxdWFsVGlsZGVcIjpcIuKJglwiLFwiZXF1ZXN0XCI6XCLiiZ9cIixcIkVxdWlsaWJyaXVtXCI6XCLih4xcIixcImVxdWl2XCI6XCLiiaFcIixcImVxdWl2RERcIjpcIuKpuFwiLFwiZXF2cGFyc2xcIjpcIuKnpVwiLFwiZXJhcnJcIjpcIuKlsVwiLFwiZXJEb3RcIjpcIuKJk1wiLFwiZXNjclwiOlwi4oSvXCIsXCJFc2NyXCI6XCLihLBcIixcImVzZG90XCI6XCLiiZBcIixcIkVzaW1cIjpcIuKps1wiLFwiZXNpbVwiOlwi4omCXCIsXCJFdGFcIjpcIs6XXCIsXCJldGFcIjpcIs63XCIsXCJFVEhcIjpcIsOQXCIsXCJldGhcIjpcIsOwXCIsXCJFdW1sXCI6XCLDi1wiLFwiZXVtbFwiOlwiw6tcIixcImV1cm9cIjpcIuKCrFwiLFwiZXhjbFwiOlwiIVwiLFwiZXhpc3RcIjpcIuKIg1wiLFwiRXhpc3RzXCI6XCLiiINcIixcImV4cGVjdGF0aW9uXCI6XCLihLBcIixcImV4cG9uZW50aWFsZVwiOlwi4oWHXCIsXCJFeHBvbmVudGlhbEVcIjpcIuKFh1wiLFwiZmFsbGluZ2RvdHNlcVwiOlwi4omSXCIsXCJGY3lcIjpcItCkXCIsXCJmY3lcIjpcItGEXCIsXCJmZW1hbGVcIjpcIuKZgFwiLFwiZmZpbGlnXCI6XCLvrINcIixcImZmbGlnXCI6XCLvrIBcIixcImZmbGxpZ1wiOlwi76yEXCIsXCJGZnJcIjpcIvCdlIlcIixcImZmclwiOlwi8J2Uo1wiLFwiZmlsaWdcIjpcIu+sgVwiLFwiRmlsbGVkU21hbGxTcXVhcmVcIjpcIuKXvFwiLFwiRmlsbGVkVmVyeVNtYWxsU3F1YXJlXCI6XCLilqpcIixcImZqbGlnXCI6XCJmalwiLFwiZmxhdFwiOlwi4pmtXCIsXCJmbGxpZ1wiOlwi76yCXCIsXCJmbHRuc1wiOlwi4paxXCIsXCJmbm9mXCI6XCLGklwiLFwiRm9wZlwiOlwi8J2UvVwiLFwiZm9wZlwiOlwi8J2Vl1wiLFwiZm9yYWxsXCI6XCLiiIBcIixcIkZvckFsbFwiOlwi4oiAXCIsXCJmb3JrXCI6XCLii5RcIixcImZvcmt2XCI6XCLiq5lcIixcIkZvdXJpZXJ0cmZcIjpcIuKEsVwiLFwiZnBhcnRpbnRcIjpcIuKojVwiLFwiZnJhYzEyXCI6XCLCvVwiLFwiZnJhYzEzXCI6XCLihZNcIixcImZyYWMxNFwiOlwiwrxcIixcImZyYWMxNVwiOlwi4oWVXCIsXCJmcmFjMTZcIjpcIuKFmVwiLFwiZnJhYzE4XCI6XCLihZtcIixcImZyYWMyM1wiOlwi4oWUXCIsXCJmcmFjMjVcIjpcIuKFllwiLFwiZnJhYzM0XCI6XCLCvlwiLFwiZnJhYzM1XCI6XCLihZdcIixcImZyYWMzOFwiOlwi4oWcXCIsXCJmcmFjNDVcIjpcIuKFmFwiLFwiZnJhYzU2XCI6XCLihZpcIixcImZyYWM1OFwiOlwi4oWdXCIsXCJmcmFjNzhcIjpcIuKFnlwiLFwiZnJhc2xcIjpcIuKBhFwiLFwiZnJvd25cIjpcIuKMolwiLFwiZnNjclwiOlwi8J2Su1wiLFwiRnNjclwiOlwi4oSxXCIsXCJnYWN1dGVcIjpcIse1XCIsXCJHYW1tYVwiOlwizpNcIixcImdhbW1hXCI6XCLOs1wiLFwiR2FtbWFkXCI6XCLPnFwiLFwiZ2FtbWFkXCI6XCLPnVwiLFwiZ2FwXCI6XCLiqoZcIixcIkdicmV2ZVwiOlwixJ5cIixcImdicmV2ZVwiOlwixJ9cIixcIkdjZWRpbFwiOlwixKJcIixcIkdjaXJjXCI6XCLEnFwiLFwiZ2NpcmNcIjpcIsSdXCIsXCJHY3lcIjpcItCTXCIsXCJnY3lcIjpcItCzXCIsXCJHZG90XCI6XCLEoFwiLFwiZ2RvdFwiOlwixKFcIixcImdlXCI6XCLiiaVcIixcImdFXCI6XCLiiadcIixcImdFbFwiOlwi4qqMXCIsXCJnZWxcIjpcIuKLm1wiLFwiZ2VxXCI6XCLiiaVcIixcImdlcXFcIjpcIuKJp1wiLFwiZ2Vxc2xhbnRcIjpcIuKpvlwiLFwiZ2VzY2NcIjpcIuKqqVwiLFwiZ2VzXCI6XCLiqb5cIixcImdlc2RvdFwiOlwi4qqAXCIsXCJnZXNkb3RvXCI6XCLiqoJcIixcImdlc2RvdG9sXCI6XCLiqoRcIixcImdlc2xcIjpcIuKLm++4gFwiLFwiZ2VzbGVzXCI6XCLiqpRcIixcIkdmclwiOlwi8J2UilwiLFwiZ2ZyXCI6XCLwnZSkXCIsXCJnZ1wiOlwi4omrXCIsXCJHZ1wiOlwi4ouZXCIsXCJnZ2dcIjpcIuKLmVwiLFwiZ2ltZWxcIjpcIuKEt1wiLFwiR0pjeVwiOlwi0INcIixcImdqY3lcIjpcItGTXCIsXCJnbGFcIjpcIuKqpVwiLFwiZ2xcIjpcIuKJt1wiLFwiZ2xFXCI6XCLiqpJcIixcImdsalwiOlwi4qqkXCIsXCJnbmFwXCI6XCLiqopcIixcImduYXBwcm94XCI6XCLiqopcIixcImduZVwiOlwi4qqIXCIsXCJnbkVcIjpcIuKJqVwiLFwiZ25lcVwiOlwi4qqIXCIsXCJnbmVxcVwiOlwi4ompXCIsXCJnbnNpbVwiOlwi4ounXCIsXCJHb3BmXCI6XCLwnZS+XCIsXCJnb3BmXCI6XCLwnZWYXCIsXCJncmF2ZVwiOlwiYFwiLFwiR3JlYXRlckVxdWFsXCI6XCLiiaVcIixcIkdyZWF0ZXJFcXVhbExlc3NcIjpcIuKLm1wiLFwiR3JlYXRlckZ1bGxFcXVhbFwiOlwi4omnXCIsXCJHcmVhdGVyR3JlYXRlclwiOlwi4qqiXCIsXCJHcmVhdGVyTGVzc1wiOlwi4om3XCIsXCJHcmVhdGVyU2xhbnRFcXVhbFwiOlwi4qm+XCIsXCJHcmVhdGVyVGlsZGVcIjpcIuKJs1wiLFwiR3NjclwiOlwi8J2SolwiLFwiZ3NjclwiOlwi4oSKXCIsXCJnc2ltXCI6XCLiibNcIixcImdzaW1lXCI6XCLiqo5cIixcImdzaW1sXCI6XCLiqpBcIixcImd0Y2NcIjpcIuKqp1wiLFwiZ3RjaXJcIjpcIuKpulwiLFwiZ3RcIjpcIj5cIixcIkdUXCI6XCI+XCIsXCJHdFwiOlwi4omrXCIsXCJndGRvdFwiOlwi4ouXXCIsXCJndGxQYXJcIjpcIuKmlVwiLFwiZ3RxdWVzdFwiOlwi4qm8XCIsXCJndHJhcHByb3hcIjpcIuKqhlwiLFwiZ3RyYXJyXCI6XCLipbhcIixcImd0cmRvdFwiOlwi4ouXXCIsXCJndHJlcWxlc3NcIjpcIuKLm1wiLFwiZ3RyZXFxbGVzc1wiOlwi4qqMXCIsXCJndHJsZXNzXCI6XCLiibdcIixcImd0cnNpbVwiOlwi4omzXCIsXCJndmVydG5lcXFcIjpcIuKJqe+4gFwiLFwiZ3ZuRVwiOlwi4omp77iAXCIsXCJIYWNla1wiOlwiy4dcIixcImhhaXJzcFwiOlwi4oCKXCIsXCJoYWxmXCI6XCLCvVwiLFwiaGFtaWx0XCI6XCLihItcIixcIkhBUkRjeVwiOlwi0KpcIixcImhhcmRjeVwiOlwi0YpcIixcImhhcnJjaXJcIjpcIuKliFwiLFwiaGFyclwiOlwi4oaUXCIsXCJoQXJyXCI6XCLih5RcIixcImhhcnJ3XCI6XCLihq1cIixcIkhhdFwiOlwiXlwiLFwiaGJhclwiOlwi4oSPXCIsXCJIY2lyY1wiOlwixKRcIixcImhjaXJjXCI6XCLEpVwiLFwiaGVhcnRzXCI6XCLimaVcIixcImhlYXJ0c3VpdFwiOlwi4pmlXCIsXCJoZWxsaXBcIjpcIuKAplwiLFwiaGVyY29uXCI6XCLiirlcIixcImhmclwiOlwi8J2UpVwiLFwiSGZyXCI6XCLihIxcIixcIkhpbGJlcnRTcGFjZVwiOlwi4oSLXCIsXCJoa3NlYXJvd1wiOlwi4qSlXCIsXCJoa3N3YXJvd1wiOlwi4qSmXCIsXCJob2FyclwiOlwi4oe/XCIsXCJob210aHRcIjpcIuKIu1wiLFwiaG9va2xlZnRhcnJvd1wiOlwi4oapXCIsXCJob29rcmlnaHRhcnJvd1wiOlwi4oaqXCIsXCJob3BmXCI6XCLwnZWZXCIsXCJIb3BmXCI6XCLihI1cIixcImhvcmJhclwiOlwi4oCVXCIsXCJIb3Jpem9udGFsTGluZVwiOlwi4pSAXCIsXCJoc2NyXCI6XCLwnZK9XCIsXCJIc2NyXCI6XCLihItcIixcImhzbGFzaFwiOlwi4oSPXCIsXCJIc3Ryb2tcIjpcIsSmXCIsXCJoc3Ryb2tcIjpcIsSnXCIsXCJIdW1wRG93bkh1bXBcIjpcIuKJjlwiLFwiSHVtcEVxdWFsXCI6XCLiiY9cIixcImh5YnVsbFwiOlwi4oGDXCIsXCJoeXBoZW5cIjpcIuKAkFwiLFwiSWFjdXRlXCI6XCLDjVwiLFwiaWFjdXRlXCI6XCLDrVwiLFwiaWNcIjpcIuKBo1wiLFwiSWNpcmNcIjpcIsOOXCIsXCJpY2lyY1wiOlwiw65cIixcIkljeVwiOlwi0JhcIixcImljeVwiOlwi0LhcIixcIklkb3RcIjpcIsSwXCIsXCJJRWN5XCI6XCLQlVwiLFwiaWVjeVwiOlwi0LVcIixcImlleGNsXCI6XCLCoVwiLFwiaWZmXCI6XCLih5RcIixcImlmclwiOlwi8J2UplwiLFwiSWZyXCI6XCLihJFcIixcIklncmF2ZVwiOlwiw4xcIixcImlncmF2ZVwiOlwiw6xcIixcImlpXCI6XCLihYhcIixcImlpaWludFwiOlwi4qiMXCIsXCJpaWludFwiOlwi4oitXCIsXCJpaW5maW5cIjpcIuKnnFwiLFwiaWlvdGFcIjpcIuKEqVwiLFwiSUpsaWdcIjpcIsSyXCIsXCJpamxpZ1wiOlwixLNcIixcIkltYWNyXCI6XCLEqlwiLFwiaW1hY3JcIjpcIsSrXCIsXCJpbWFnZVwiOlwi4oSRXCIsXCJJbWFnaW5hcnlJXCI6XCLihYhcIixcImltYWdsaW5lXCI6XCLihJBcIixcImltYWdwYXJ0XCI6XCLihJFcIixcImltYXRoXCI6XCLEsVwiLFwiSW1cIjpcIuKEkVwiLFwiaW1vZlwiOlwi4oq3XCIsXCJpbXBlZFwiOlwixrVcIixcIkltcGxpZXNcIjpcIuKHklwiLFwiaW5jYXJlXCI6XCLihIVcIixcImluXCI6XCLiiIhcIixcImluZmluXCI6XCLiiJ5cIixcImluZmludGllXCI6XCLip51cIixcImlub2RvdFwiOlwixLFcIixcImludGNhbFwiOlwi4oq6XCIsXCJpbnRcIjpcIuKIq1wiLFwiSW50XCI6XCLiiKxcIixcImludGVnZXJzXCI6XCLihKRcIixcIkludGVncmFsXCI6XCLiiKtcIixcImludGVyY2FsXCI6XCLiirpcIixcIkludGVyc2VjdGlvblwiOlwi4ouCXCIsXCJpbnRsYXJoa1wiOlwi4qiXXCIsXCJpbnRwcm9kXCI6XCLiqLxcIixcIkludmlzaWJsZUNvbW1hXCI6XCLigaNcIixcIkludmlzaWJsZVRpbWVzXCI6XCLigaJcIixcIklPY3lcIjpcItCBXCIsXCJpb2N5XCI6XCLRkVwiLFwiSW9nb25cIjpcIsSuXCIsXCJpb2dvblwiOlwixK9cIixcIklvcGZcIjpcIvCdlYBcIixcImlvcGZcIjpcIvCdlZpcIixcIklvdGFcIjpcIs6ZXCIsXCJpb3RhXCI6XCLOuVwiLFwiaXByb2RcIjpcIuKovFwiLFwiaXF1ZXN0XCI6XCLCv1wiLFwiaXNjclwiOlwi8J2SvlwiLFwiSXNjclwiOlwi4oSQXCIsXCJpc2luXCI6XCLiiIhcIixcImlzaW5kb3RcIjpcIuKLtVwiLFwiaXNpbkVcIjpcIuKLuVwiLFwiaXNpbnNcIjpcIuKLtFwiLFwiaXNpbnN2XCI6XCLii7NcIixcImlzaW52XCI6XCLiiIhcIixcIml0XCI6XCLigaJcIixcIkl0aWxkZVwiOlwixKhcIixcIml0aWxkZVwiOlwixKlcIixcIkl1a2N5XCI6XCLQhlwiLFwiaXVrY3lcIjpcItGWXCIsXCJJdW1sXCI6XCLDj1wiLFwiaXVtbFwiOlwiw69cIixcIkpjaXJjXCI6XCLEtFwiLFwiamNpcmNcIjpcIsS1XCIsXCJKY3lcIjpcItCZXCIsXCJqY3lcIjpcItC5XCIsXCJKZnJcIjpcIvCdlI1cIixcImpmclwiOlwi8J2Up1wiLFwiam1hdGhcIjpcIsi3XCIsXCJKb3BmXCI6XCLwnZWBXCIsXCJqb3BmXCI6XCLwnZWbXCIsXCJKc2NyXCI6XCLwnZKlXCIsXCJqc2NyXCI6XCLwnZK/XCIsXCJKc2VyY3lcIjpcItCIXCIsXCJqc2VyY3lcIjpcItGYXCIsXCJKdWtjeVwiOlwi0IRcIixcImp1a2N5XCI6XCLRlFwiLFwiS2FwcGFcIjpcIs6aXCIsXCJrYXBwYVwiOlwizrpcIixcImthcHBhdlwiOlwiz7BcIixcIktjZWRpbFwiOlwixLZcIixcImtjZWRpbFwiOlwixLdcIixcIktjeVwiOlwi0JpcIixcImtjeVwiOlwi0LpcIixcIktmclwiOlwi8J2UjlwiLFwia2ZyXCI6XCLwnZSoXCIsXCJrZ3JlZW5cIjpcIsS4XCIsXCJLSGN5XCI6XCLQpVwiLFwia2hjeVwiOlwi0YVcIixcIktKY3lcIjpcItCMXCIsXCJramN5XCI6XCLRnFwiLFwiS29wZlwiOlwi8J2VglwiLFwia29wZlwiOlwi8J2VnFwiLFwiS3NjclwiOlwi8J2SplwiLFwia3NjclwiOlwi8J2TgFwiLFwibEFhcnJcIjpcIuKHmlwiLFwiTGFjdXRlXCI6XCLEuVwiLFwibGFjdXRlXCI6XCLEulwiLFwibGFlbXB0eXZcIjpcIuKmtFwiLFwibGFncmFuXCI6XCLihJJcIixcIkxhbWJkYVwiOlwizptcIixcImxhbWJkYVwiOlwizrtcIixcImxhbmdcIjpcIuKfqFwiLFwiTGFuZ1wiOlwi4p+qXCIsXCJsYW5nZFwiOlwi4qaRXCIsXCJsYW5nbGVcIjpcIuKfqFwiLFwibGFwXCI6XCLiqoVcIixcIkxhcGxhY2V0cmZcIjpcIuKEklwiLFwibGFxdW9cIjpcIsKrXCIsXCJsYXJyYlwiOlwi4oekXCIsXCJsYXJyYmZzXCI6XCLipJ9cIixcImxhcnJcIjpcIuKGkFwiLFwiTGFyclwiOlwi4oaeXCIsXCJsQXJyXCI6XCLih5BcIixcImxhcnJmc1wiOlwi4qSdXCIsXCJsYXJyaGtcIjpcIuKGqVwiLFwibGFycmxwXCI6XCLihqtcIixcImxhcnJwbFwiOlwi4qS5XCIsXCJsYXJyc2ltXCI6XCLipbNcIixcImxhcnJ0bFwiOlwi4oaiXCIsXCJsYXRhaWxcIjpcIuKkmVwiLFwibEF0YWlsXCI6XCLipJtcIixcImxhdFwiOlwi4qqrXCIsXCJsYXRlXCI6XCLiqq1cIixcImxhdGVzXCI6XCLiqq3vuIBcIixcImxiYXJyXCI6XCLipIxcIixcImxCYXJyXCI6XCLipI5cIixcImxiYnJrXCI6XCLinbJcIixcImxicmFjZVwiOlwie1wiLFwibGJyYWNrXCI6XCJbXCIsXCJsYnJrZVwiOlwi4qaLXCIsXCJsYnJrc2xkXCI6XCLipo9cIixcImxicmtzbHVcIjpcIuKmjVwiLFwiTGNhcm9uXCI6XCLEvVwiLFwibGNhcm9uXCI6XCLEvlwiLFwiTGNlZGlsXCI6XCLEu1wiLFwibGNlZGlsXCI6XCLEvFwiLFwibGNlaWxcIjpcIuKMiFwiLFwibGN1YlwiOlwie1wiLFwiTGN5XCI6XCLQm1wiLFwibGN5XCI6XCLQu1wiLFwibGRjYVwiOlwi4qS2XCIsXCJsZHF1b1wiOlwi4oCcXCIsXCJsZHF1b3JcIjpcIuKAnlwiLFwibGRyZGhhclwiOlwi4qWnXCIsXCJsZHJ1c2hhclwiOlwi4qWLXCIsXCJsZHNoXCI6XCLihrJcIixcImxlXCI6XCLiiaRcIixcImxFXCI6XCLiiaZcIixcIkxlZnRBbmdsZUJyYWNrZXRcIjpcIuKfqFwiLFwiTGVmdEFycm93QmFyXCI6XCLih6RcIixcImxlZnRhcnJvd1wiOlwi4oaQXCIsXCJMZWZ0QXJyb3dcIjpcIuKGkFwiLFwiTGVmdGFycm93XCI6XCLih5BcIixcIkxlZnRBcnJvd1JpZ2h0QXJyb3dcIjpcIuKHhlwiLFwibGVmdGFycm93dGFpbFwiOlwi4oaiXCIsXCJMZWZ0Q2VpbGluZ1wiOlwi4oyIXCIsXCJMZWZ0RG91YmxlQnJhY2tldFwiOlwi4p+mXCIsXCJMZWZ0RG93blRlZVZlY3RvclwiOlwi4qWhXCIsXCJMZWZ0RG93blZlY3RvckJhclwiOlwi4qWZXCIsXCJMZWZ0RG93blZlY3RvclwiOlwi4oeDXCIsXCJMZWZ0Rmxvb3JcIjpcIuKMilwiLFwibGVmdGhhcnBvb25kb3duXCI6XCLihr1cIixcImxlZnRoYXJwb29udXBcIjpcIuKGvFwiLFwibGVmdGxlZnRhcnJvd3NcIjpcIuKHh1wiLFwibGVmdHJpZ2h0YXJyb3dcIjpcIuKGlFwiLFwiTGVmdFJpZ2h0QXJyb3dcIjpcIuKGlFwiLFwiTGVmdHJpZ2h0YXJyb3dcIjpcIuKHlFwiLFwibGVmdHJpZ2h0YXJyb3dzXCI6XCLih4ZcIixcImxlZnRyaWdodGhhcnBvb25zXCI6XCLih4tcIixcImxlZnRyaWdodHNxdWlnYXJyb3dcIjpcIuKGrVwiLFwiTGVmdFJpZ2h0VmVjdG9yXCI6XCLipY5cIixcIkxlZnRUZWVBcnJvd1wiOlwi4oakXCIsXCJMZWZ0VGVlXCI6XCLiiqNcIixcIkxlZnRUZWVWZWN0b3JcIjpcIuKlmlwiLFwibGVmdHRocmVldGltZXNcIjpcIuKLi1wiLFwiTGVmdFRyaWFuZ2xlQmFyXCI6XCLip49cIixcIkxlZnRUcmlhbmdsZVwiOlwi4oqyXCIsXCJMZWZ0VHJpYW5nbGVFcXVhbFwiOlwi4oq0XCIsXCJMZWZ0VXBEb3duVmVjdG9yXCI6XCLipZFcIixcIkxlZnRVcFRlZVZlY3RvclwiOlwi4qWgXCIsXCJMZWZ0VXBWZWN0b3JCYXJcIjpcIuKlmFwiLFwiTGVmdFVwVmVjdG9yXCI6XCLihr9cIixcIkxlZnRWZWN0b3JCYXJcIjpcIuKlklwiLFwiTGVmdFZlY3RvclwiOlwi4oa8XCIsXCJsRWdcIjpcIuKqi1wiLFwibGVnXCI6XCLii5pcIixcImxlcVwiOlwi4omkXCIsXCJsZXFxXCI6XCLiiaZcIixcImxlcXNsYW50XCI6XCLiqb1cIixcImxlc2NjXCI6XCLiqqhcIixcImxlc1wiOlwi4qm9XCIsXCJsZXNkb3RcIjpcIuKpv1wiLFwibGVzZG90b1wiOlwi4qqBXCIsXCJsZXNkb3RvclwiOlwi4qqDXCIsXCJsZXNnXCI6XCLii5rvuIBcIixcImxlc2dlc1wiOlwi4qqTXCIsXCJsZXNzYXBwcm94XCI6XCLiqoVcIixcImxlc3Nkb3RcIjpcIuKLllwiLFwibGVzc2VxZ3RyXCI6XCLii5pcIixcImxlc3NlcXFndHJcIjpcIuKqi1wiLFwiTGVzc0VxdWFsR3JlYXRlclwiOlwi4ouaXCIsXCJMZXNzRnVsbEVxdWFsXCI6XCLiiaZcIixcIkxlc3NHcmVhdGVyXCI6XCLiibZcIixcImxlc3NndHJcIjpcIuKJtlwiLFwiTGVzc0xlc3NcIjpcIuKqoVwiLFwibGVzc3NpbVwiOlwi4omyXCIsXCJMZXNzU2xhbnRFcXVhbFwiOlwi4qm9XCIsXCJMZXNzVGlsZGVcIjpcIuKJslwiLFwibGZpc2h0XCI6XCLipbxcIixcImxmbG9vclwiOlwi4oyKXCIsXCJMZnJcIjpcIvCdlI9cIixcImxmclwiOlwi8J2UqVwiLFwibGdcIjpcIuKJtlwiLFwibGdFXCI6XCLiqpFcIixcImxIYXJcIjpcIuKlolwiLFwibGhhcmRcIjpcIuKGvVwiLFwibGhhcnVcIjpcIuKGvFwiLFwibGhhcnVsXCI6XCLipapcIixcImxoYmxrXCI6XCLiloRcIixcIkxKY3lcIjpcItCJXCIsXCJsamN5XCI6XCLRmVwiLFwibGxhcnJcIjpcIuKHh1wiLFwibGxcIjpcIuKJqlwiLFwiTGxcIjpcIuKLmFwiLFwibGxjb3JuZXJcIjpcIuKMnlwiLFwiTGxlZnRhcnJvd1wiOlwi4oeaXCIsXCJsbGhhcmRcIjpcIuKlq1wiLFwibGx0cmlcIjpcIuKXulwiLFwiTG1pZG90XCI6XCLEv1wiLFwibG1pZG90XCI6XCLFgFwiLFwibG1vdXN0YWNoZVwiOlwi4o6wXCIsXCJsbW91c3RcIjpcIuKOsFwiLFwibG5hcFwiOlwi4qqJXCIsXCJsbmFwcHJveFwiOlwi4qqJXCIsXCJsbmVcIjpcIuKqh1wiLFwibG5FXCI6XCLiiahcIixcImxuZXFcIjpcIuKqh1wiLFwibG5lcXFcIjpcIuKJqFwiLFwibG5zaW1cIjpcIuKLplwiLFwibG9hbmdcIjpcIuKfrFwiLFwibG9hcnJcIjpcIuKHvVwiLFwibG9icmtcIjpcIuKfplwiLFwibG9uZ2xlZnRhcnJvd1wiOlwi4p+1XCIsXCJMb25nTGVmdEFycm93XCI6XCLin7VcIixcIkxvbmdsZWZ0YXJyb3dcIjpcIuKfuFwiLFwibG9uZ2xlZnRyaWdodGFycm93XCI6XCLin7dcIixcIkxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwi4p+3XCIsXCJMb25nbGVmdHJpZ2h0YXJyb3dcIjpcIuKfulwiLFwibG9uZ21hcHN0b1wiOlwi4p+8XCIsXCJsb25ncmlnaHRhcnJvd1wiOlwi4p+2XCIsXCJMb25nUmlnaHRBcnJvd1wiOlwi4p+2XCIsXCJMb25ncmlnaHRhcnJvd1wiOlwi4p+5XCIsXCJsb29wYXJyb3dsZWZ0XCI6XCLihqtcIixcImxvb3BhcnJvd3JpZ2h0XCI6XCLihqxcIixcImxvcGFyXCI6XCLipoVcIixcIkxvcGZcIjpcIvCdlYNcIixcImxvcGZcIjpcIvCdlZ1cIixcImxvcGx1c1wiOlwi4qitXCIsXCJsb3RpbWVzXCI6XCLiqLRcIixcImxvd2FzdFwiOlwi4oiXXCIsXCJsb3diYXJcIjpcIl9cIixcIkxvd2VyTGVmdEFycm93XCI6XCLihplcIixcIkxvd2VyUmlnaHRBcnJvd1wiOlwi4oaYXCIsXCJsb3pcIjpcIuKXilwiLFwibG96ZW5nZVwiOlwi4peKXCIsXCJsb3pmXCI6XCLip6tcIixcImxwYXJcIjpcIihcIixcImxwYXJsdFwiOlwi4qaTXCIsXCJscmFyclwiOlwi4oeGXCIsXCJscmNvcm5lclwiOlwi4oyfXCIsXCJscmhhclwiOlwi4oeLXCIsXCJscmhhcmRcIjpcIuKlrVwiLFwibHJtXCI6XCLigI5cIixcImxydHJpXCI6XCLiir9cIixcImxzYXF1b1wiOlwi4oC5XCIsXCJsc2NyXCI6XCLwnZOBXCIsXCJMc2NyXCI6XCLihJJcIixcImxzaFwiOlwi4oawXCIsXCJMc2hcIjpcIuKGsFwiLFwibHNpbVwiOlwi4omyXCIsXCJsc2ltZVwiOlwi4qqNXCIsXCJsc2ltZ1wiOlwi4qqPXCIsXCJsc3FiXCI6XCJbXCIsXCJsc3F1b1wiOlwi4oCYXCIsXCJsc3F1b3JcIjpcIuKAmlwiLFwiTHN0cm9rXCI6XCLFgVwiLFwibHN0cm9rXCI6XCLFglwiLFwibHRjY1wiOlwi4qqmXCIsXCJsdGNpclwiOlwi4qm5XCIsXCJsdFwiOlwiPFwiLFwiTFRcIjpcIjxcIixcIkx0XCI6XCLiiapcIixcImx0ZG90XCI6XCLii5ZcIixcImx0aHJlZVwiOlwi4ouLXCIsXCJsdGltZXNcIjpcIuKLiVwiLFwibHRsYXJyXCI6XCLipbZcIixcImx0cXVlc3RcIjpcIuKpu1wiLFwibHRyaVwiOlwi4peDXCIsXCJsdHJpZVwiOlwi4oq0XCIsXCJsdHJpZlwiOlwi4peCXCIsXCJsdHJQYXJcIjpcIuKmllwiLFwibHVyZHNoYXJcIjpcIuKlilwiLFwibHVydWhhclwiOlwi4qWmXCIsXCJsdmVydG5lcXFcIjpcIuKJqO+4gFwiLFwibHZuRVwiOlwi4omo77iAXCIsXCJtYWNyXCI6XCLCr1wiLFwibWFsZVwiOlwi4pmCXCIsXCJtYWx0XCI6XCLinKBcIixcIm1hbHRlc2VcIjpcIuKcoFwiLFwiTWFwXCI6XCLipIVcIixcIm1hcFwiOlwi4oamXCIsXCJtYXBzdG9cIjpcIuKGplwiLFwibWFwc3RvZG93blwiOlwi4oanXCIsXCJtYXBzdG9sZWZ0XCI6XCLihqRcIixcIm1hcHN0b3VwXCI6XCLihqVcIixcIm1hcmtlclwiOlwi4pauXCIsXCJtY29tbWFcIjpcIuKoqVwiLFwiTWN5XCI6XCLQnFwiLFwibWN5XCI6XCLQvFwiLFwibWRhc2hcIjpcIuKAlFwiLFwibUREb3RcIjpcIuKIulwiLFwibWVhc3VyZWRhbmdsZVwiOlwi4oihXCIsXCJNZWRpdW1TcGFjZVwiOlwi4oGfXCIsXCJNZWxsaW50cmZcIjpcIuKEs1wiLFwiTWZyXCI6XCLwnZSQXCIsXCJtZnJcIjpcIvCdlKpcIixcIm1ob1wiOlwi4oSnXCIsXCJtaWNyb1wiOlwiwrVcIixcIm1pZGFzdFwiOlwiKlwiLFwibWlkY2lyXCI6XCLiq7BcIixcIm1pZFwiOlwi4oijXCIsXCJtaWRkb3RcIjpcIsK3XCIsXCJtaW51c2JcIjpcIuKKn1wiLFwibWludXNcIjpcIuKIklwiLFwibWludXNkXCI6XCLiiLhcIixcIm1pbnVzZHVcIjpcIuKoqlwiLFwiTWludXNQbHVzXCI6XCLiiJNcIixcIm1sY3BcIjpcIuKrm1wiLFwibWxkclwiOlwi4oCmXCIsXCJtbnBsdXNcIjpcIuKIk1wiLFwibW9kZWxzXCI6XCLiiqdcIixcIk1vcGZcIjpcIvCdlYRcIixcIm1vcGZcIjpcIvCdlZ5cIixcIm1wXCI6XCLiiJNcIixcIm1zY3JcIjpcIvCdk4JcIixcIk1zY3JcIjpcIuKEs1wiLFwibXN0cG9zXCI6XCLiiL5cIixcIk11XCI6XCLOnFwiLFwibXVcIjpcIs68XCIsXCJtdWx0aW1hcFwiOlwi4oq4XCIsXCJtdW1hcFwiOlwi4oq4XCIsXCJuYWJsYVwiOlwi4oiHXCIsXCJOYWN1dGVcIjpcIsWDXCIsXCJuYWN1dGVcIjpcIsWEXCIsXCJuYW5nXCI6XCLiiKDig5JcIixcIm5hcFwiOlwi4omJXCIsXCJuYXBFXCI6XCLiqbDMuFwiLFwibmFwaWRcIjpcIuKJi8y4XCIsXCJuYXBvc1wiOlwixYlcIixcIm5hcHByb3hcIjpcIuKJiVwiLFwibmF0dXJhbFwiOlwi4pmuXCIsXCJuYXR1cmFsc1wiOlwi4oSVXCIsXCJuYXR1clwiOlwi4pmuXCIsXCJuYnNwXCI6XCLCoFwiLFwibmJ1bXBcIjpcIuKJjsy4XCIsXCJuYnVtcGVcIjpcIuKJj8y4XCIsXCJuY2FwXCI6XCLiqYNcIixcIk5jYXJvblwiOlwixYdcIixcIm5jYXJvblwiOlwixYhcIixcIk5jZWRpbFwiOlwixYVcIixcIm5jZWRpbFwiOlwixYZcIixcIm5jb25nXCI6XCLiiYdcIixcIm5jb25nZG90XCI6XCLiqa3MuFwiLFwibmN1cFwiOlwi4qmCXCIsXCJOY3lcIjpcItCdXCIsXCJuY3lcIjpcItC9XCIsXCJuZGFzaFwiOlwi4oCTXCIsXCJuZWFyaGtcIjpcIuKkpFwiLFwibmVhcnJcIjpcIuKGl1wiLFwibmVBcnJcIjpcIuKHl1wiLFwibmVhcnJvd1wiOlwi4oaXXCIsXCJuZVwiOlwi4omgXCIsXCJuZWRvdFwiOlwi4omQzLhcIixcIk5lZ2F0aXZlTWVkaXVtU3BhY2VcIjpcIuKAi1wiLFwiTmVnYXRpdmVUaGlja1NwYWNlXCI6XCLigItcIixcIk5lZ2F0aXZlVGhpblNwYWNlXCI6XCLigItcIixcIk5lZ2F0aXZlVmVyeVRoaW5TcGFjZVwiOlwi4oCLXCIsXCJuZXF1aXZcIjpcIuKJolwiLFwibmVzZWFyXCI6XCLipKhcIixcIm5lc2ltXCI6XCLiiYLMuFwiLFwiTmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIuKJq1wiLFwiTmVzdGVkTGVzc0xlc3NcIjpcIuKJqlwiLFwiTmV3TGluZVwiOlwiXFxuXCIsXCJuZXhpc3RcIjpcIuKIhFwiLFwibmV4aXN0c1wiOlwi4oiEXCIsXCJOZnJcIjpcIvCdlJFcIixcIm5mclwiOlwi8J2Uq1wiLFwibmdFXCI6XCLiiafMuFwiLFwibmdlXCI6XCLiibFcIixcIm5nZXFcIjpcIuKJsVwiLFwibmdlcXFcIjpcIuKJp8y4XCIsXCJuZ2Vxc2xhbnRcIjpcIuKpvsy4XCIsXCJuZ2VzXCI6XCLiqb7MuFwiLFwibkdnXCI6XCLii5nMuFwiLFwibmdzaW1cIjpcIuKJtVwiLFwibkd0XCI6XCLiiavig5JcIixcIm5ndFwiOlwi4omvXCIsXCJuZ3RyXCI6XCLiia9cIixcIm5HdHZcIjpcIuKJq8y4XCIsXCJuaGFyclwiOlwi4oauXCIsXCJuaEFyclwiOlwi4oeOXCIsXCJuaHBhclwiOlwi4quyXCIsXCJuaVwiOlwi4oiLXCIsXCJuaXNcIjpcIuKLvFwiLFwibmlzZFwiOlwi4ou6XCIsXCJuaXZcIjpcIuKIi1wiLFwiTkpjeVwiOlwi0IpcIixcIm5qY3lcIjpcItGaXCIsXCJubGFyclwiOlwi4oaaXCIsXCJubEFyclwiOlwi4oeNXCIsXCJubGRyXCI6XCLigKVcIixcIm5sRVwiOlwi4ommzLhcIixcIm5sZVwiOlwi4omwXCIsXCJubGVmdGFycm93XCI6XCLihppcIixcIm5MZWZ0YXJyb3dcIjpcIuKHjVwiLFwibmxlZnRyaWdodGFycm93XCI6XCLihq5cIixcIm5MZWZ0cmlnaHRhcnJvd1wiOlwi4oeOXCIsXCJubGVxXCI6XCLiibBcIixcIm5sZXFxXCI6XCLiiabMuFwiLFwibmxlcXNsYW50XCI6XCLiqb3MuFwiLFwibmxlc1wiOlwi4qm9zLhcIixcIm5sZXNzXCI6XCLiia5cIixcIm5MbFwiOlwi4ouYzLhcIixcIm5sc2ltXCI6XCLiibRcIixcIm5MdFwiOlwi4omq4oOSXCIsXCJubHRcIjpcIuKJrlwiLFwibmx0cmlcIjpcIuKLqlwiLFwibmx0cmllXCI6XCLii6xcIixcIm5MdHZcIjpcIuKJqsy4XCIsXCJubWlkXCI6XCLiiKRcIixcIk5vQnJlYWtcIjpcIuKBoFwiLFwiTm9uQnJlYWtpbmdTcGFjZVwiOlwiwqBcIixcIm5vcGZcIjpcIvCdlZ9cIixcIk5vcGZcIjpcIuKElVwiLFwiTm90XCI6XCLiq6xcIixcIm5vdFwiOlwiwqxcIixcIk5vdENvbmdydWVudFwiOlwi4omiXCIsXCJOb3RDdXBDYXBcIjpcIuKJrVwiLFwiTm90RG91YmxlVmVydGljYWxCYXJcIjpcIuKIplwiLFwiTm90RWxlbWVudFwiOlwi4oiJXCIsXCJOb3RFcXVhbFwiOlwi4omgXCIsXCJOb3RFcXVhbFRpbGRlXCI6XCLiiYLMuFwiLFwiTm90RXhpc3RzXCI6XCLiiIRcIixcIk5vdEdyZWF0ZXJcIjpcIuKJr1wiLFwiTm90R3JlYXRlckVxdWFsXCI6XCLiibFcIixcIk5vdEdyZWF0ZXJGdWxsRXF1YWxcIjpcIuKJp8y4XCIsXCJOb3RHcmVhdGVyR3JlYXRlclwiOlwi4omrzLhcIixcIk5vdEdyZWF0ZXJMZXNzXCI6XCLiiblcIixcIk5vdEdyZWF0ZXJTbGFudEVxdWFsXCI6XCLiqb7MuFwiLFwiTm90R3JlYXRlclRpbGRlXCI6XCLiibVcIixcIk5vdEh1bXBEb3duSHVtcFwiOlwi4omOzLhcIixcIk5vdEh1bXBFcXVhbFwiOlwi4omPzLhcIixcIm5vdGluXCI6XCLiiIlcIixcIm5vdGluZG90XCI6XCLii7XMuFwiLFwibm90aW5FXCI6XCLii7nMuFwiLFwibm90aW52YVwiOlwi4oiJXCIsXCJub3RpbnZiXCI6XCLii7dcIixcIm5vdGludmNcIjpcIuKLtlwiLFwiTm90TGVmdFRyaWFuZ2xlQmFyXCI6XCLip4/MuFwiLFwiTm90TGVmdFRyaWFuZ2xlXCI6XCLii6pcIixcIk5vdExlZnRUcmlhbmdsZUVxdWFsXCI6XCLii6xcIixcIk5vdExlc3NcIjpcIuKJrlwiLFwiTm90TGVzc0VxdWFsXCI6XCLiibBcIixcIk5vdExlc3NHcmVhdGVyXCI6XCLiibhcIixcIk5vdExlc3NMZXNzXCI6XCLiiarMuFwiLFwiTm90TGVzc1NsYW50RXF1YWxcIjpcIuKpvcy4XCIsXCJOb3RMZXNzVGlsZGVcIjpcIuKJtFwiLFwiTm90TmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIuKqosy4XCIsXCJOb3ROZXN0ZWRMZXNzTGVzc1wiOlwi4qqhzLhcIixcIm5vdG5pXCI6XCLiiIxcIixcIm5vdG5pdmFcIjpcIuKIjFwiLFwibm90bml2YlwiOlwi4ou+XCIsXCJub3RuaXZjXCI6XCLii71cIixcIk5vdFByZWNlZGVzXCI6XCLiioBcIixcIk5vdFByZWNlZGVzRXF1YWxcIjpcIuKqr8y4XCIsXCJOb3RQcmVjZWRlc1NsYW50RXF1YWxcIjpcIuKLoFwiLFwiTm90UmV2ZXJzZUVsZW1lbnRcIjpcIuKIjFwiLFwiTm90UmlnaHRUcmlhbmdsZUJhclwiOlwi4qeQzLhcIixcIk5vdFJpZ2h0VHJpYW5nbGVcIjpcIuKLq1wiLFwiTm90UmlnaHRUcmlhbmdsZUVxdWFsXCI6XCLii61cIixcIk5vdFNxdWFyZVN1YnNldFwiOlwi4oqPzLhcIixcIk5vdFNxdWFyZVN1YnNldEVxdWFsXCI6XCLii6JcIixcIk5vdFNxdWFyZVN1cGVyc2V0XCI6XCLiipDMuFwiLFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwi4oujXCIsXCJOb3RTdWJzZXRcIjpcIuKKguKDklwiLFwiTm90U3Vic2V0RXF1YWxcIjpcIuKKiFwiLFwiTm90U3VjY2VlZHNcIjpcIuKKgVwiLFwiTm90U3VjY2VlZHNFcXVhbFwiOlwi4qqwzLhcIixcIk5vdFN1Y2NlZWRzU2xhbnRFcXVhbFwiOlwi4ouhXCIsXCJOb3RTdWNjZWVkc1RpbGRlXCI6XCLiib/MuFwiLFwiTm90U3VwZXJzZXRcIjpcIuKKg+KDklwiLFwiTm90U3VwZXJzZXRFcXVhbFwiOlwi4oqJXCIsXCJOb3RUaWxkZVwiOlwi4omBXCIsXCJOb3RUaWxkZUVxdWFsXCI6XCLiiYRcIixcIk5vdFRpbGRlRnVsbEVxdWFsXCI6XCLiiYdcIixcIk5vdFRpbGRlVGlsZGVcIjpcIuKJiVwiLFwiTm90VmVydGljYWxCYXJcIjpcIuKIpFwiLFwibnBhcmFsbGVsXCI6XCLiiKZcIixcIm5wYXJcIjpcIuKIplwiLFwibnBhcnNsXCI6XCLiq73ig6VcIixcIm5wYXJ0XCI6XCLiiILMuFwiLFwibnBvbGludFwiOlwi4qiUXCIsXCJucHJcIjpcIuKKgFwiLFwibnByY3VlXCI6XCLii6BcIixcIm5wcmVjXCI6XCLiioBcIixcIm5wcmVjZXFcIjpcIuKqr8y4XCIsXCJucHJlXCI6XCLiqq/MuFwiLFwibnJhcnJjXCI6XCLipLPMuFwiLFwibnJhcnJcIjpcIuKGm1wiLFwibnJBcnJcIjpcIuKHj1wiLFwibnJhcnJ3XCI6XCLihp3MuFwiLFwibnJpZ2h0YXJyb3dcIjpcIuKGm1wiLFwiblJpZ2h0YXJyb3dcIjpcIuKHj1wiLFwibnJ0cmlcIjpcIuKLq1wiLFwibnJ0cmllXCI6XCLii61cIixcIm5zY1wiOlwi4oqBXCIsXCJuc2NjdWVcIjpcIuKLoVwiLFwibnNjZVwiOlwi4qqwzLhcIixcIk5zY3JcIjpcIvCdkqlcIixcIm5zY3JcIjpcIvCdk4NcIixcIm5zaG9ydG1pZFwiOlwi4oikXCIsXCJuc2hvcnRwYXJhbGxlbFwiOlwi4oimXCIsXCJuc2ltXCI6XCLiiYFcIixcIm5zaW1lXCI6XCLiiYRcIixcIm5zaW1lcVwiOlwi4omEXCIsXCJuc21pZFwiOlwi4oikXCIsXCJuc3BhclwiOlwi4oimXCIsXCJuc3FzdWJlXCI6XCLii6JcIixcIm5zcXN1cGVcIjpcIuKLo1wiLFwibnN1YlwiOlwi4oqEXCIsXCJuc3ViRVwiOlwi4quFzLhcIixcIm5zdWJlXCI6XCLiiohcIixcIm5zdWJzZXRcIjpcIuKKguKDklwiLFwibnN1YnNldGVxXCI6XCLiiohcIixcIm5zdWJzZXRlcXFcIjpcIuKrhcy4XCIsXCJuc3VjY1wiOlwi4oqBXCIsXCJuc3VjY2VxXCI6XCLiqrDMuFwiLFwibnN1cFwiOlwi4oqFXCIsXCJuc3VwRVwiOlwi4quGzLhcIixcIm5zdXBlXCI6XCLiiolcIixcIm5zdXBzZXRcIjpcIuKKg+KDklwiLFwibnN1cHNldGVxXCI6XCLiiolcIixcIm5zdXBzZXRlcXFcIjpcIuKrhsy4XCIsXCJudGdsXCI6XCLiiblcIixcIk50aWxkZVwiOlwiw5FcIixcIm50aWxkZVwiOlwiw7FcIixcIm50bGdcIjpcIuKJuFwiLFwibnRyaWFuZ2xlbGVmdFwiOlwi4ouqXCIsXCJudHJpYW5nbGVsZWZ0ZXFcIjpcIuKLrFwiLFwibnRyaWFuZ2xlcmlnaHRcIjpcIuKLq1wiLFwibnRyaWFuZ2xlcmlnaHRlcVwiOlwi4outXCIsXCJOdVwiOlwizp1cIixcIm51XCI6XCLOvVwiLFwibnVtXCI6XCIjXCIsXCJudW1lcm9cIjpcIuKEllwiLFwibnVtc3BcIjpcIuKAh1wiLFwibnZhcFwiOlwi4omN4oOSXCIsXCJudmRhc2hcIjpcIuKKrFwiLFwibnZEYXNoXCI6XCLiiq1cIixcIm5WZGFzaFwiOlwi4oquXCIsXCJuVkRhc2hcIjpcIuKKr1wiLFwibnZnZVwiOlwi4oml4oOSXCIsXCJudmd0XCI6XCI+4oOSXCIsXCJudkhhcnJcIjpcIuKkhFwiLFwibnZpbmZpblwiOlwi4qeeXCIsXCJudmxBcnJcIjpcIuKkglwiLFwibnZsZVwiOlwi4omk4oOSXCIsXCJudmx0XCI6XCI84oOSXCIsXCJudmx0cmllXCI6XCLiirTig5JcIixcIm52ckFyclwiOlwi4qSDXCIsXCJudnJ0cmllXCI6XCLiirXig5JcIixcIm52c2ltXCI6XCLiiLzig5JcIixcIm53YXJoa1wiOlwi4qSjXCIsXCJud2FyclwiOlwi4oaWXCIsXCJud0FyclwiOlwi4oeWXCIsXCJud2Fycm93XCI6XCLihpZcIixcIm53bmVhclwiOlwi4qSnXCIsXCJPYWN1dGVcIjpcIsOTXCIsXCJvYWN1dGVcIjpcIsOzXCIsXCJvYXN0XCI6XCLiiptcIixcIk9jaXJjXCI6XCLDlFwiLFwib2NpcmNcIjpcIsO0XCIsXCJvY2lyXCI6XCLiippcIixcIk9jeVwiOlwi0J5cIixcIm9jeVwiOlwi0L5cIixcIm9kYXNoXCI6XCLiip1cIixcIk9kYmxhY1wiOlwixZBcIixcIm9kYmxhY1wiOlwixZFcIixcIm9kaXZcIjpcIuKouFwiLFwib2RvdFwiOlwi4oqZXCIsXCJvZHNvbGRcIjpcIuKmvFwiLFwiT0VsaWdcIjpcIsWSXCIsXCJvZWxpZ1wiOlwixZNcIixcIm9mY2lyXCI6XCLipr9cIixcIk9mclwiOlwi8J2UklwiLFwib2ZyXCI6XCLwnZSsXCIsXCJvZ29uXCI6XCLLm1wiLFwiT2dyYXZlXCI6XCLDklwiLFwib2dyYXZlXCI6XCLDslwiLFwib2d0XCI6XCLip4FcIixcIm9oYmFyXCI6XCLiprVcIixcIm9obVwiOlwizqlcIixcIm9pbnRcIjpcIuKIrlwiLFwib2xhcnJcIjpcIuKGulwiLFwib2xjaXJcIjpcIuKmvlwiLFwib2xjcm9zc1wiOlwi4qa7XCIsXCJvbGluZVwiOlwi4oC+XCIsXCJvbHRcIjpcIuKngFwiLFwiT21hY3JcIjpcIsWMXCIsXCJvbWFjclwiOlwixY1cIixcIk9tZWdhXCI6XCLOqVwiLFwib21lZ2FcIjpcIs+JXCIsXCJPbWljcm9uXCI6XCLOn1wiLFwib21pY3JvblwiOlwizr9cIixcIm9taWRcIjpcIuKmtlwiLFwib21pbnVzXCI6XCLiipZcIixcIk9vcGZcIjpcIvCdlYZcIixcIm9vcGZcIjpcIvCdlaBcIixcIm9wYXJcIjpcIuKmt1wiLFwiT3BlbkN1cmx5RG91YmxlUXVvdGVcIjpcIuKAnFwiLFwiT3BlbkN1cmx5UXVvdGVcIjpcIuKAmFwiLFwib3BlcnBcIjpcIuKmuVwiLFwib3BsdXNcIjpcIuKKlVwiLFwib3JhcnJcIjpcIuKGu1wiLFwiT3JcIjpcIuKplFwiLFwib3JcIjpcIuKIqFwiLFwib3JkXCI6XCLiqZ1cIixcIm9yZGVyXCI6XCLihLRcIixcIm9yZGVyb2ZcIjpcIuKEtFwiLFwib3JkZlwiOlwiwqpcIixcIm9yZG1cIjpcIsK6XCIsXCJvcmlnb2ZcIjpcIuKKtlwiLFwib3JvclwiOlwi4qmWXCIsXCJvcnNsb3BlXCI6XCLiqZdcIixcIm9ydlwiOlwi4qmbXCIsXCJvU1wiOlwi4pOIXCIsXCJPc2NyXCI6XCLwnZKqXCIsXCJvc2NyXCI6XCLihLRcIixcIk9zbGFzaFwiOlwiw5hcIixcIm9zbGFzaFwiOlwiw7hcIixcIm9zb2xcIjpcIuKKmFwiLFwiT3RpbGRlXCI6XCLDlVwiLFwib3RpbGRlXCI6XCLDtVwiLFwib3RpbWVzYXNcIjpcIuKotlwiLFwiT3RpbWVzXCI6XCLiqLdcIixcIm90aW1lc1wiOlwi4oqXXCIsXCJPdW1sXCI6XCLDllwiLFwib3VtbFwiOlwiw7ZcIixcIm92YmFyXCI6XCLijL1cIixcIk92ZXJCYXJcIjpcIuKAvlwiLFwiT3ZlckJyYWNlXCI6XCLij55cIixcIk92ZXJCcmFja2V0XCI6XCLijrRcIixcIk92ZXJQYXJlbnRoZXNpc1wiOlwi4o+cXCIsXCJwYXJhXCI6XCLCtlwiLFwicGFyYWxsZWxcIjpcIuKIpVwiLFwicGFyXCI6XCLiiKVcIixcInBhcnNpbVwiOlwi4quzXCIsXCJwYXJzbFwiOlwi4qu9XCIsXCJwYXJ0XCI6XCLiiIJcIixcIlBhcnRpYWxEXCI6XCLiiIJcIixcIlBjeVwiOlwi0J9cIixcInBjeVwiOlwi0L9cIixcInBlcmNudFwiOlwiJVwiLFwicGVyaW9kXCI6XCIuXCIsXCJwZXJtaWxcIjpcIuKAsFwiLFwicGVycFwiOlwi4oqlXCIsXCJwZXJ0ZW5rXCI6XCLigLFcIixcIlBmclwiOlwi8J2Uk1wiLFwicGZyXCI6XCLwnZStXCIsXCJQaGlcIjpcIs6mXCIsXCJwaGlcIjpcIs+GXCIsXCJwaGl2XCI6XCLPlVwiLFwicGhtbWF0XCI6XCLihLNcIixcInBob25lXCI6XCLimI5cIixcIlBpXCI6XCLOoFwiLFwicGlcIjpcIs+AXCIsXCJwaXRjaGZvcmtcIjpcIuKLlFwiLFwicGl2XCI6XCLPllwiLFwicGxhbmNrXCI6XCLihI9cIixcInBsYW5ja2hcIjpcIuKEjlwiLFwicGxhbmt2XCI6XCLihI9cIixcInBsdXNhY2lyXCI6XCLiqKNcIixcInBsdXNiXCI6XCLiip5cIixcInBsdXNjaXJcIjpcIuKoolwiLFwicGx1c1wiOlwiK1wiLFwicGx1c2RvXCI6XCLiiJRcIixcInBsdXNkdVwiOlwi4qilXCIsXCJwbHVzZVwiOlwi4qmyXCIsXCJQbHVzTWludXNcIjpcIsKxXCIsXCJwbHVzbW5cIjpcIsKxXCIsXCJwbHVzc2ltXCI6XCLiqKZcIixcInBsdXN0d29cIjpcIuKop1wiLFwicG1cIjpcIsKxXCIsXCJQb2luY2FyZXBsYW5lXCI6XCLihIxcIixcInBvaW50aW50XCI6XCLiqJVcIixcInBvcGZcIjpcIvCdlaFcIixcIlBvcGZcIjpcIuKEmVwiLFwicG91bmRcIjpcIsKjXCIsXCJwcmFwXCI6XCLiqrdcIixcIlByXCI6XCLiqrtcIixcInByXCI6XCLiibpcIixcInByY3VlXCI6XCLiibxcIixcInByZWNhcHByb3hcIjpcIuKqt1wiLFwicHJlY1wiOlwi4om6XCIsXCJwcmVjY3VybHllcVwiOlwi4om8XCIsXCJQcmVjZWRlc1wiOlwi4om6XCIsXCJQcmVjZWRlc0VxdWFsXCI6XCLiqq9cIixcIlByZWNlZGVzU2xhbnRFcXVhbFwiOlwi4om8XCIsXCJQcmVjZWRlc1RpbGRlXCI6XCLiib5cIixcInByZWNlcVwiOlwi4qqvXCIsXCJwcmVjbmFwcHJveFwiOlwi4qq5XCIsXCJwcmVjbmVxcVwiOlwi4qq1XCIsXCJwcmVjbnNpbVwiOlwi4ouoXCIsXCJwcmVcIjpcIuKqr1wiLFwicHJFXCI6XCLiqrNcIixcInByZWNzaW1cIjpcIuKJvlwiLFwicHJpbWVcIjpcIuKAslwiLFwiUHJpbWVcIjpcIuKAs1wiLFwicHJpbWVzXCI6XCLihJlcIixcInBybmFwXCI6XCLiqrlcIixcInBybkVcIjpcIuKqtVwiLFwicHJuc2ltXCI6XCLii6hcIixcInByb2RcIjpcIuKIj1wiLFwiUHJvZHVjdFwiOlwi4oiPXCIsXCJwcm9mYWxhclwiOlwi4oyuXCIsXCJwcm9mbGluZVwiOlwi4oySXCIsXCJwcm9mc3VyZlwiOlwi4oyTXCIsXCJwcm9wXCI6XCLiiJ1cIixcIlByb3BvcnRpb25hbFwiOlwi4oidXCIsXCJQcm9wb3J0aW9uXCI6XCLiiLdcIixcInByb3B0b1wiOlwi4oidXCIsXCJwcnNpbVwiOlwi4om+XCIsXCJwcnVyZWxcIjpcIuKKsFwiLFwiUHNjclwiOlwi8J2Sq1wiLFwicHNjclwiOlwi8J2ThVwiLFwiUHNpXCI6XCLOqFwiLFwicHNpXCI6XCLPiFwiLFwicHVuY3NwXCI6XCLigIhcIixcIlFmclwiOlwi8J2UlFwiLFwicWZyXCI6XCLwnZSuXCIsXCJxaW50XCI6XCLiqIxcIixcInFvcGZcIjpcIvCdlaJcIixcIlFvcGZcIjpcIuKEmlwiLFwicXByaW1lXCI6XCLigZdcIixcIlFzY3JcIjpcIvCdkqxcIixcInFzY3JcIjpcIvCdk4ZcIixcInF1YXRlcm5pb25zXCI6XCLihI1cIixcInF1YXRpbnRcIjpcIuKollwiLFwicXVlc3RcIjpcIj9cIixcInF1ZXN0ZXFcIjpcIuKJn1wiLFwicXVvdFwiOlwiXFxcIlwiLFwiUVVPVFwiOlwiXFxcIlwiLFwickFhcnJcIjpcIuKHm1wiLFwicmFjZVwiOlwi4oi9zLFcIixcIlJhY3V0ZVwiOlwixZRcIixcInJhY3V0ZVwiOlwixZVcIixcInJhZGljXCI6XCLiiJpcIixcInJhZW1wdHl2XCI6XCLiprNcIixcInJhbmdcIjpcIuKfqVwiLFwiUmFuZ1wiOlwi4p+rXCIsXCJyYW5nZFwiOlwi4qaSXCIsXCJyYW5nZVwiOlwi4qalXCIsXCJyYW5nbGVcIjpcIuKfqVwiLFwicmFxdW9cIjpcIsK7XCIsXCJyYXJyYXBcIjpcIuKltVwiLFwicmFycmJcIjpcIuKHpVwiLFwicmFycmJmc1wiOlwi4qSgXCIsXCJyYXJyY1wiOlwi4qSzXCIsXCJyYXJyXCI6XCLihpJcIixcIlJhcnJcIjpcIuKGoFwiLFwickFyclwiOlwi4oeSXCIsXCJyYXJyZnNcIjpcIuKknlwiLFwicmFycmhrXCI6XCLihqpcIixcInJhcnJscFwiOlwi4oasXCIsXCJyYXJycGxcIjpcIuKlhVwiLFwicmFycnNpbVwiOlwi4qW0XCIsXCJSYXJydGxcIjpcIuKkllwiLFwicmFycnRsXCI6XCLihqNcIixcInJhcnJ3XCI6XCLihp1cIixcInJhdGFpbFwiOlwi4qSaXCIsXCJyQXRhaWxcIjpcIuKknFwiLFwicmF0aW9cIjpcIuKItlwiLFwicmF0aW9uYWxzXCI6XCLihJpcIixcInJiYXJyXCI6XCLipI1cIixcInJCYXJyXCI6XCLipI9cIixcIlJCYXJyXCI6XCLipJBcIixcInJiYnJrXCI6XCLinbNcIixcInJicmFjZVwiOlwifVwiLFwicmJyYWNrXCI6XCJdXCIsXCJyYnJrZVwiOlwi4qaMXCIsXCJyYnJrc2xkXCI6XCLipo5cIixcInJicmtzbHVcIjpcIuKmkFwiLFwiUmNhcm9uXCI6XCLFmFwiLFwicmNhcm9uXCI6XCLFmVwiLFwiUmNlZGlsXCI6XCLFllwiLFwicmNlZGlsXCI6XCLFl1wiLFwicmNlaWxcIjpcIuKMiVwiLFwicmN1YlwiOlwifVwiLFwiUmN5XCI6XCLQoFwiLFwicmN5XCI6XCLRgFwiLFwicmRjYVwiOlwi4qS3XCIsXCJyZGxkaGFyXCI6XCLipalcIixcInJkcXVvXCI6XCLigJ1cIixcInJkcXVvclwiOlwi4oCdXCIsXCJyZHNoXCI6XCLihrNcIixcInJlYWxcIjpcIuKEnFwiLFwicmVhbGluZVwiOlwi4oSbXCIsXCJyZWFscGFydFwiOlwi4oScXCIsXCJyZWFsc1wiOlwi4oSdXCIsXCJSZVwiOlwi4oScXCIsXCJyZWN0XCI6XCLilq1cIixcInJlZ1wiOlwiwq5cIixcIlJFR1wiOlwiwq5cIixcIlJldmVyc2VFbGVtZW50XCI6XCLiiItcIixcIlJldmVyc2VFcXVpbGlicml1bVwiOlwi4oeLXCIsXCJSZXZlcnNlVXBFcXVpbGlicml1bVwiOlwi4qWvXCIsXCJyZmlzaHRcIjpcIuKlvVwiLFwicmZsb29yXCI6XCLijItcIixcInJmclwiOlwi8J2Ur1wiLFwiUmZyXCI6XCLihJxcIixcInJIYXJcIjpcIuKlpFwiLFwicmhhcmRcIjpcIuKHgVwiLFwicmhhcnVcIjpcIuKHgFwiLFwicmhhcnVsXCI6XCLipaxcIixcIlJob1wiOlwizqFcIixcInJob1wiOlwiz4FcIixcInJob3ZcIjpcIs+xXCIsXCJSaWdodEFuZ2xlQnJhY2tldFwiOlwi4p+pXCIsXCJSaWdodEFycm93QmFyXCI6XCLih6VcIixcInJpZ2h0YXJyb3dcIjpcIuKGklwiLFwiUmlnaHRBcnJvd1wiOlwi4oaSXCIsXCJSaWdodGFycm93XCI6XCLih5JcIixcIlJpZ2h0QXJyb3dMZWZ0QXJyb3dcIjpcIuKHhFwiLFwicmlnaHRhcnJvd3RhaWxcIjpcIuKGo1wiLFwiUmlnaHRDZWlsaW5nXCI6XCLijIlcIixcIlJpZ2h0RG91YmxlQnJhY2tldFwiOlwi4p+nXCIsXCJSaWdodERvd25UZWVWZWN0b3JcIjpcIuKlnVwiLFwiUmlnaHREb3duVmVjdG9yQmFyXCI6XCLipZVcIixcIlJpZ2h0RG93blZlY3RvclwiOlwi4oeCXCIsXCJSaWdodEZsb29yXCI6XCLijItcIixcInJpZ2h0aGFycG9vbmRvd25cIjpcIuKHgVwiLFwicmlnaHRoYXJwb29udXBcIjpcIuKHgFwiLFwicmlnaHRsZWZ0YXJyb3dzXCI6XCLih4RcIixcInJpZ2h0bGVmdGhhcnBvb25zXCI6XCLih4xcIixcInJpZ2h0cmlnaHRhcnJvd3NcIjpcIuKHiVwiLFwicmlnaHRzcXVpZ2Fycm93XCI6XCLihp1cIixcIlJpZ2h0VGVlQXJyb3dcIjpcIuKGplwiLFwiUmlnaHRUZWVcIjpcIuKKolwiLFwiUmlnaHRUZWVWZWN0b3JcIjpcIuKlm1wiLFwicmlnaHR0aHJlZXRpbWVzXCI6XCLii4xcIixcIlJpZ2h0VHJpYW5nbGVCYXJcIjpcIuKnkFwiLFwiUmlnaHRUcmlhbmdsZVwiOlwi4oqzXCIsXCJSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIuKKtVwiLFwiUmlnaHRVcERvd25WZWN0b3JcIjpcIuKlj1wiLFwiUmlnaHRVcFRlZVZlY3RvclwiOlwi4qWcXCIsXCJSaWdodFVwVmVjdG9yQmFyXCI6XCLipZRcIixcIlJpZ2h0VXBWZWN0b3JcIjpcIuKGvlwiLFwiUmlnaHRWZWN0b3JCYXJcIjpcIuKlk1wiLFwiUmlnaHRWZWN0b3JcIjpcIuKHgFwiLFwicmluZ1wiOlwiy5pcIixcInJpc2luZ2RvdHNlcVwiOlwi4omTXCIsXCJybGFyclwiOlwi4oeEXCIsXCJybGhhclwiOlwi4oeMXCIsXCJybG1cIjpcIuKAj1wiLFwicm1vdXN0YWNoZVwiOlwi4o6xXCIsXCJybW91c3RcIjpcIuKOsVwiLFwicm5taWRcIjpcIuKrrlwiLFwicm9hbmdcIjpcIuKfrVwiLFwicm9hcnJcIjpcIuKHvlwiLFwicm9icmtcIjpcIuKfp1wiLFwicm9wYXJcIjpcIuKmhlwiLFwicm9wZlwiOlwi8J2Vo1wiLFwiUm9wZlwiOlwi4oSdXCIsXCJyb3BsdXNcIjpcIuKorlwiLFwicm90aW1lc1wiOlwi4qi1XCIsXCJSb3VuZEltcGxpZXNcIjpcIuKlsFwiLFwicnBhclwiOlwiKVwiLFwicnBhcmd0XCI6XCLippRcIixcInJwcG9saW50XCI6XCLiqJJcIixcInJyYXJyXCI6XCLih4lcIixcIlJyaWdodGFycm93XCI6XCLih5tcIixcInJzYXF1b1wiOlwi4oC6XCIsXCJyc2NyXCI6XCLwnZOHXCIsXCJSc2NyXCI6XCLihJtcIixcInJzaFwiOlwi4oaxXCIsXCJSc2hcIjpcIuKGsVwiLFwicnNxYlwiOlwiXVwiLFwicnNxdW9cIjpcIuKAmVwiLFwicnNxdW9yXCI6XCLigJlcIixcInJ0aHJlZVwiOlwi4ouMXCIsXCJydGltZXNcIjpcIuKLilwiLFwicnRyaVwiOlwi4pa5XCIsXCJydHJpZVwiOlwi4oq1XCIsXCJydHJpZlwiOlwi4pa4XCIsXCJydHJpbHRyaVwiOlwi4qeOXCIsXCJSdWxlRGVsYXllZFwiOlwi4qe0XCIsXCJydWx1aGFyXCI6XCLipahcIixcInJ4XCI6XCLihJ5cIixcIlNhY3V0ZVwiOlwixZpcIixcInNhY3V0ZVwiOlwixZtcIixcInNicXVvXCI6XCLigJpcIixcInNjYXBcIjpcIuKquFwiLFwiU2Nhcm9uXCI6XCLFoFwiLFwic2Nhcm9uXCI6XCLFoVwiLFwiU2NcIjpcIuKqvFwiLFwic2NcIjpcIuKJu1wiLFwic2NjdWVcIjpcIuKJvVwiLFwic2NlXCI6XCLiqrBcIixcInNjRVwiOlwi4qq0XCIsXCJTY2VkaWxcIjpcIsWeXCIsXCJzY2VkaWxcIjpcIsWfXCIsXCJTY2lyY1wiOlwixZxcIixcInNjaXJjXCI6XCLFnVwiLFwic2NuYXBcIjpcIuKqulwiLFwic2NuRVwiOlwi4qq2XCIsXCJzY25zaW1cIjpcIuKLqVwiLFwic2Nwb2xpbnRcIjpcIuKok1wiLFwic2NzaW1cIjpcIuKJv1wiLFwiU2N5XCI6XCLQoVwiLFwic2N5XCI6XCLRgVwiLFwic2RvdGJcIjpcIuKKoVwiLFwic2RvdFwiOlwi4ouFXCIsXCJzZG90ZVwiOlwi4qmmXCIsXCJzZWFyaGtcIjpcIuKkpVwiLFwic2VhcnJcIjpcIuKGmFwiLFwic2VBcnJcIjpcIuKHmFwiLFwic2VhcnJvd1wiOlwi4oaYXCIsXCJzZWN0XCI6XCLCp1wiLFwic2VtaVwiOlwiO1wiLFwic2Vzd2FyXCI6XCLipKlcIixcInNldG1pbnVzXCI6XCLiiJZcIixcInNldG1uXCI6XCLiiJZcIixcInNleHRcIjpcIuKctlwiLFwiU2ZyXCI6XCLwnZSWXCIsXCJzZnJcIjpcIvCdlLBcIixcInNmcm93blwiOlwi4oyiXCIsXCJzaGFycFwiOlwi4pmvXCIsXCJTSENIY3lcIjpcItCpXCIsXCJzaGNoY3lcIjpcItGJXCIsXCJTSGN5XCI6XCLQqFwiLFwic2hjeVwiOlwi0YhcIixcIlNob3J0RG93bkFycm93XCI6XCLihpNcIixcIlNob3J0TGVmdEFycm93XCI6XCLihpBcIixcInNob3J0bWlkXCI6XCLiiKNcIixcInNob3J0cGFyYWxsZWxcIjpcIuKIpVwiLFwiU2hvcnRSaWdodEFycm93XCI6XCLihpJcIixcIlNob3J0VXBBcnJvd1wiOlwi4oaRXCIsXCJzaHlcIjpcIsKtXCIsXCJTaWdtYVwiOlwizqNcIixcInNpZ21hXCI6XCLPg1wiLFwic2lnbWFmXCI6XCLPglwiLFwic2lnbWF2XCI6XCLPglwiLFwic2ltXCI6XCLiiLxcIixcInNpbWRvdFwiOlwi4qmqXCIsXCJzaW1lXCI6XCLiiYNcIixcInNpbWVxXCI6XCLiiYNcIixcInNpbWdcIjpcIuKqnlwiLFwic2ltZ0VcIjpcIuKqoFwiLFwic2ltbFwiOlwi4qqdXCIsXCJzaW1sRVwiOlwi4qqfXCIsXCJzaW1uZVwiOlwi4omGXCIsXCJzaW1wbHVzXCI6XCLiqKRcIixcInNpbXJhcnJcIjpcIuKlslwiLFwic2xhcnJcIjpcIuKGkFwiLFwiU21hbGxDaXJjbGVcIjpcIuKImFwiLFwic21hbGxzZXRtaW51c1wiOlwi4oiWXCIsXCJzbWFzaHBcIjpcIuKos1wiLFwic21lcGFyc2xcIjpcIuKnpFwiLFwic21pZFwiOlwi4oijXCIsXCJzbWlsZVwiOlwi4oyjXCIsXCJzbXRcIjpcIuKqqlwiLFwic210ZVwiOlwi4qqsXCIsXCJzbXRlc1wiOlwi4qqs77iAXCIsXCJTT0ZUY3lcIjpcItCsXCIsXCJzb2Z0Y3lcIjpcItGMXCIsXCJzb2xiYXJcIjpcIuKMv1wiLFwic29sYlwiOlwi4qeEXCIsXCJzb2xcIjpcIi9cIixcIlNvcGZcIjpcIvCdlYpcIixcInNvcGZcIjpcIvCdlaRcIixcInNwYWRlc1wiOlwi4pmgXCIsXCJzcGFkZXN1aXRcIjpcIuKZoFwiLFwic3BhclwiOlwi4oilXCIsXCJzcWNhcFwiOlwi4oqTXCIsXCJzcWNhcHNcIjpcIuKKk++4gFwiLFwic3FjdXBcIjpcIuKKlFwiLFwic3FjdXBzXCI6XCLiipTvuIBcIixcIlNxcnRcIjpcIuKImlwiLFwic3FzdWJcIjpcIuKKj1wiLFwic3FzdWJlXCI6XCLiipFcIixcInNxc3Vic2V0XCI6XCLiio9cIixcInNxc3Vic2V0ZXFcIjpcIuKKkVwiLFwic3FzdXBcIjpcIuKKkFwiLFwic3FzdXBlXCI6XCLiipJcIixcInNxc3Vwc2V0XCI6XCLiipBcIixcInNxc3Vwc2V0ZXFcIjpcIuKKklwiLFwic3F1YXJlXCI6XCLilqFcIixcIlNxdWFyZVwiOlwi4pahXCIsXCJTcXVhcmVJbnRlcnNlY3Rpb25cIjpcIuKKk1wiLFwiU3F1YXJlU3Vic2V0XCI6XCLiio9cIixcIlNxdWFyZVN1YnNldEVxdWFsXCI6XCLiipFcIixcIlNxdWFyZVN1cGVyc2V0XCI6XCLiipBcIixcIlNxdWFyZVN1cGVyc2V0RXF1YWxcIjpcIuKKklwiLFwiU3F1YXJlVW5pb25cIjpcIuKKlFwiLFwic3F1YXJmXCI6XCLilqpcIixcInNxdVwiOlwi4pahXCIsXCJzcXVmXCI6XCLilqpcIixcInNyYXJyXCI6XCLihpJcIixcIlNzY3JcIjpcIvCdkq5cIixcInNzY3JcIjpcIvCdk4hcIixcInNzZXRtblwiOlwi4oiWXCIsXCJzc21pbGVcIjpcIuKMo1wiLFwic3N0YXJmXCI6XCLii4ZcIixcIlN0YXJcIjpcIuKLhlwiLFwic3RhclwiOlwi4piGXCIsXCJzdGFyZlwiOlwi4piFXCIsXCJzdHJhaWdodGVwc2lsb25cIjpcIs+1XCIsXCJzdHJhaWdodHBoaVwiOlwiz5VcIixcInN0cm5zXCI6XCLCr1wiLFwic3ViXCI6XCLiioJcIixcIlN1YlwiOlwi4ouQXCIsXCJzdWJkb3RcIjpcIuKqvVwiLFwic3ViRVwiOlwi4quFXCIsXCJzdWJlXCI6XCLiioZcIixcInN1YmVkb3RcIjpcIuKrg1wiLFwic3VibXVsdFwiOlwi4quBXCIsXCJzdWJuRVwiOlwi4quLXCIsXCJzdWJuZVwiOlwi4oqKXCIsXCJzdWJwbHVzXCI6XCLiqr9cIixcInN1YnJhcnJcIjpcIuKluVwiLFwic3Vic2V0XCI6XCLiioJcIixcIlN1YnNldFwiOlwi4ouQXCIsXCJzdWJzZXRlcVwiOlwi4oqGXCIsXCJzdWJzZXRlcXFcIjpcIuKrhVwiLFwiU3Vic2V0RXF1YWxcIjpcIuKKhlwiLFwic3Vic2V0bmVxXCI6XCLiiopcIixcInN1YnNldG5lcXFcIjpcIuKri1wiLFwic3Vic2ltXCI6XCLiq4dcIixcInN1YnN1YlwiOlwi4quVXCIsXCJzdWJzdXBcIjpcIuKrk1wiLFwic3VjY2FwcHJveFwiOlwi4qq4XCIsXCJzdWNjXCI6XCLiibtcIixcInN1Y2NjdXJseWVxXCI6XCLiib1cIixcIlN1Y2NlZWRzXCI6XCLiibtcIixcIlN1Y2NlZWRzRXF1YWxcIjpcIuKqsFwiLFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6XCLiib1cIixcIlN1Y2NlZWRzVGlsZGVcIjpcIuKJv1wiLFwic3VjY2VxXCI6XCLiqrBcIixcInN1Y2NuYXBwcm94XCI6XCLiqrpcIixcInN1Y2NuZXFxXCI6XCLiqrZcIixcInN1Y2Nuc2ltXCI6XCLii6lcIixcInN1Y2NzaW1cIjpcIuKJv1wiLFwiU3VjaFRoYXRcIjpcIuKIi1wiLFwic3VtXCI6XCLiiJFcIixcIlN1bVwiOlwi4oiRXCIsXCJzdW5nXCI6XCLimapcIixcInN1cDFcIjpcIsK5XCIsXCJzdXAyXCI6XCLCslwiLFwic3VwM1wiOlwiwrNcIixcInN1cFwiOlwi4oqDXCIsXCJTdXBcIjpcIuKLkVwiLFwic3VwZG90XCI6XCLiqr5cIixcInN1cGRzdWJcIjpcIuKrmFwiLFwic3VwRVwiOlwi4quGXCIsXCJzdXBlXCI6XCLiiodcIixcInN1cGVkb3RcIjpcIuKrhFwiLFwiU3VwZXJzZXRcIjpcIuKKg1wiLFwiU3VwZXJzZXRFcXVhbFwiOlwi4oqHXCIsXCJzdXBoc29sXCI6XCLin4lcIixcInN1cGhzdWJcIjpcIuKrl1wiLFwic3VwbGFyclwiOlwi4qW7XCIsXCJzdXBtdWx0XCI6XCLiq4JcIixcInN1cG5FXCI6XCLiq4xcIixcInN1cG5lXCI6XCLiiotcIixcInN1cHBsdXNcIjpcIuKrgFwiLFwic3Vwc2V0XCI6XCLiioNcIixcIlN1cHNldFwiOlwi4ouRXCIsXCJzdXBzZXRlcVwiOlwi4oqHXCIsXCJzdXBzZXRlcXFcIjpcIuKrhlwiLFwic3Vwc2V0bmVxXCI6XCLiiotcIixcInN1cHNldG5lcXFcIjpcIuKrjFwiLFwic3Vwc2ltXCI6XCLiq4hcIixcInN1cHN1YlwiOlwi4quUXCIsXCJzdXBzdXBcIjpcIuKrllwiLFwic3dhcmhrXCI6XCLipKZcIixcInN3YXJyXCI6XCLihplcIixcInN3QXJyXCI6XCLih5lcIixcInN3YXJyb3dcIjpcIuKGmVwiLFwic3dud2FyXCI6XCLipKpcIixcInN6bGlnXCI6XCLDn1wiLFwiVGFiXCI6XCJcXHRcIixcInRhcmdldFwiOlwi4oyWXCIsXCJUYXVcIjpcIs6kXCIsXCJ0YXVcIjpcIs+EXCIsXCJ0YnJrXCI6XCLijrRcIixcIlRjYXJvblwiOlwixaRcIixcInRjYXJvblwiOlwixaVcIixcIlRjZWRpbFwiOlwixaJcIixcInRjZWRpbFwiOlwixaNcIixcIlRjeVwiOlwi0KJcIixcInRjeVwiOlwi0YJcIixcInRkb3RcIjpcIuKDm1wiLFwidGVscmVjXCI6XCLijJVcIixcIlRmclwiOlwi8J2Ul1wiLFwidGZyXCI6XCLwnZSxXCIsXCJ0aGVyZTRcIjpcIuKItFwiLFwidGhlcmVmb3JlXCI6XCLiiLRcIixcIlRoZXJlZm9yZVwiOlwi4oi0XCIsXCJUaGV0YVwiOlwizphcIixcInRoZXRhXCI6XCLOuFwiLFwidGhldGFzeW1cIjpcIs+RXCIsXCJ0aGV0YXZcIjpcIs+RXCIsXCJ0aGlja2FwcHJveFwiOlwi4omIXCIsXCJ0aGlja3NpbVwiOlwi4oi8XCIsXCJUaGlja1NwYWNlXCI6XCLigZ/igIpcIixcIlRoaW5TcGFjZVwiOlwi4oCJXCIsXCJ0aGluc3BcIjpcIuKAiVwiLFwidGhrYXBcIjpcIuKJiFwiLFwidGhrc2ltXCI6XCLiiLxcIixcIlRIT1JOXCI6XCLDnlwiLFwidGhvcm5cIjpcIsO+XCIsXCJ0aWxkZVwiOlwiy5xcIixcIlRpbGRlXCI6XCLiiLxcIixcIlRpbGRlRXF1YWxcIjpcIuKJg1wiLFwiVGlsZGVGdWxsRXF1YWxcIjpcIuKJhVwiLFwiVGlsZGVUaWxkZVwiOlwi4omIXCIsXCJ0aW1lc2JhclwiOlwi4qixXCIsXCJ0aW1lc2JcIjpcIuKKoFwiLFwidGltZXNcIjpcIsOXXCIsXCJ0aW1lc2RcIjpcIuKosFwiLFwidGludFwiOlwi4oitXCIsXCJ0b2VhXCI6XCLipKhcIixcInRvcGJvdFwiOlwi4oy2XCIsXCJ0b3BjaXJcIjpcIuKrsVwiLFwidG9wXCI6XCLiiqRcIixcIlRvcGZcIjpcIvCdlYtcIixcInRvcGZcIjpcIvCdlaVcIixcInRvcGZvcmtcIjpcIuKrmlwiLFwidG9zYVwiOlwi4qSpXCIsXCJ0cHJpbWVcIjpcIuKAtFwiLFwidHJhZGVcIjpcIuKEolwiLFwiVFJBREVcIjpcIuKEolwiLFwidHJpYW5nbGVcIjpcIuKWtVwiLFwidHJpYW5nbGVkb3duXCI6XCLilr9cIixcInRyaWFuZ2xlbGVmdFwiOlwi4peDXCIsXCJ0cmlhbmdsZWxlZnRlcVwiOlwi4oq0XCIsXCJ0cmlhbmdsZXFcIjpcIuKJnFwiLFwidHJpYW5nbGVyaWdodFwiOlwi4pa5XCIsXCJ0cmlhbmdsZXJpZ2h0ZXFcIjpcIuKKtVwiLFwidHJpZG90XCI6XCLil6xcIixcInRyaWVcIjpcIuKJnFwiLFwidHJpbWludXNcIjpcIuKoulwiLFwiVHJpcGxlRG90XCI6XCLig5tcIixcInRyaXBsdXNcIjpcIuKouVwiLFwidHJpc2JcIjpcIuKnjVwiLFwidHJpdGltZVwiOlwi4qi7XCIsXCJ0cnBleml1bVwiOlwi4o+iXCIsXCJUc2NyXCI6XCLwnZKvXCIsXCJ0c2NyXCI6XCLwnZOJXCIsXCJUU2N5XCI6XCLQplwiLFwidHNjeVwiOlwi0YZcIixcIlRTSGN5XCI6XCLQi1wiLFwidHNoY3lcIjpcItGbXCIsXCJUc3Ryb2tcIjpcIsWmXCIsXCJ0c3Ryb2tcIjpcIsWnXCIsXCJ0d2l4dFwiOlwi4omsXCIsXCJ0d29oZWFkbGVmdGFycm93XCI6XCLihp5cIixcInR3b2hlYWRyaWdodGFycm93XCI6XCLihqBcIixcIlVhY3V0ZVwiOlwiw5pcIixcInVhY3V0ZVwiOlwiw7pcIixcInVhcnJcIjpcIuKGkVwiLFwiVWFyclwiOlwi4oafXCIsXCJ1QXJyXCI6XCLih5FcIixcIlVhcnJvY2lyXCI6XCLipYlcIixcIlVicmN5XCI6XCLQjlwiLFwidWJyY3lcIjpcItGeXCIsXCJVYnJldmVcIjpcIsWsXCIsXCJ1YnJldmVcIjpcIsWtXCIsXCJVY2lyY1wiOlwiw5tcIixcInVjaXJjXCI6XCLDu1wiLFwiVWN5XCI6XCLQo1wiLFwidWN5XCI6XCLRg1wiLFwidWRhcnJcIjpcIuKHhVwiLFwiVWRibGFjXCI6XCLFsFwiLFwidWRibGFjXCI6XCLFsVwiLFwidWRoYXJcIjpcIuKlrlwiLFwidWZpc2h0XCI6XCLipb5cIixcIlVmclwiOlwi8J2UmFwiLFwidWZyXCI6XCLwnZSyXCIsXCJVZ3JhdmVcIjpcIsOZXCIsXCJ1Z3JhdmVcIjpcIsO5XCIsXCJ1SGFyXCI6XCLipaNcIixcInVoYXJsXCI6XCLihr9cIixcInVoYXJyXCI6XCLihr5cIixcInVoYmxrXCI6XCLiloBcIixcInVsY29yblwiOlwi4oycXCIsXCJ1bGNvcm5lclwiOlwi4oycXCIsXCJ1bGNyb3BcIjpcIuKMj1wiLFwidWx0cmlcIjpcIuKXuFwiLFwiVW1hY3JcIjpcIsWqXCIsXCJ1bWFjclwiOlwixatcIixcInVtbFwiOlwiwqhcIixcIlVuZGVyQmFyXCI6XCJfXCIsXCJVbmRlckJyYWNlXCI6XCLij59cIixcIlVuZGVyQnJhY2tldFwiOlwi4o61XCIsXCJVbmRlclBhcmVudGhlc2lzXCI6XCLij51cIixcIlVuaW9uXCI6XCLii4NcIixcIlVuaW9uUGx1c1wiOlwi4oqOXCIsXCJVb2dvblwiOlwixbJcIixcInVvZ29uXCI6XCLFs1wiLFwiVW9wZlwiOlwi8J2VjFwiLFwidW9wZlwiOlwi8J2VplwiLFwiVXBBcnJvd0JhclwiOlwi4qSSXCIsXCJ1cGFycm93XCI6XCLihpFcIixcIlVwQXJyb3dcIjpcIuKGkVwiLFwiVXBhcnJvd1wiOlwi4oeRXCIsXCJVcEFycm93RG93bkFycm93XCI6XCLih4VcIixcInVwZG93bmFycm93XCI6XCLihpVcIixcIlVwRG93bkFycm93XCI6XCLihpVcIixcIlVwZG93bmFycm93XCI6XCLih5VcIixcIlVwRXF1aWxpYnJpdW1cIjpcIuKlrlwiLFwidXBoYXJwb29ubGVmdFwiOlwi4oa/XCIsXCJ1cGhhcnBvb25yaWdodFwiOlwi4oa+XCIsXCJ1cGx1c1wiOlwi4oqOXCIsXCJVcHBlckxlZnRBcnJvd1wiOlwi4oaWXCIsXCJVcHBlclJpZ2h0QXJyb3dcIjpcIuKGl1wiLFwidXBzaVwiOlwiz4VcIixcIlVwc2lcIjpcIs+SXCIsXCJ1cHNpaFwiOlwiz5JcIixcIlVwc2lsb25cIjpcIs6lXCIsXCJ1cHNpbG9uXCI6XCLPhVwiLFwiVXBUZWVBcnJvd1wiOlwi4oalXCIsXCJVcFRlZVwiOlwi4oqlXCIsXCJ1cHVwYXJyb3dzXCI6XCLih4hcIixcInVyY29yblwiOlwi4oydXCIsXCJ1cmNvcm5lclwiOlwi4oydXCIsXCJ1cmNyb3BcIjpcIuKMjlwiLFwiVXJpbmdcIjpcIsWuXCIsXCJ1cmluZ1wiOlwixa9cIixcInVydHJpXCI6XCLil7lcIixcIlVzY3JcIjpcIvCdkrBcIixcInVzY3JcIjpcIvCdk4pcIixcInV0ZG90XCI6XCLii7BcIixcIlV0aWxkZVwiOlwixahcIixcInV0aWxkZVwiOlwixalcIixcInV0cmlcIjpcIuKWtVwiLFwidXRyaWZcIjpcIuKWtFwiLFwidXVhcnJcIjpcIuKHiFwiLFwiVXVtbFwiOlwiw5xcIixcInV1bWxcIjpcIsO8XCIsXCJ1d2FuZ2xlXCI6XCLipqdcIixcInZhbmdydFwiOlwi4qacXCIsXCJ2YXJlcHNpbG9uXCI6XCLPtVwiLFwidmFya2FwcGFcIjpcIs+wXCIsXCJ2YXJub3RoaW5nXCI6XCLiiIVcIixcInZhcnBoaVwiOlwiz5VcIixcInZhcnBpXCI6XCLPllwiLFwidmFycHJvcHRvXCI6XCLiiJ1cIixcInZhcnJcIjpcIuKGlVwiLFwidkFyclwiOlwi4oeVXCIsXCJ2YXJyaG9cIjpcIs+xXCIsXCJ2YXJzaWdtYVwiOlwiz4JcIixcInZhcnN1YnNldG5lcVwiOlwi4oqK77iAXCIsXCJ2YXJzdWJzZXRuZXFxXCI6XCLiq4vvuIBcIixcInZhcnN1cHNldG5lcVwiOlwi4oqL77iAXCIsXCJ2YXJzdXBzZXRuZXFxXCI6XCLiq4zvuIBcIixcInZhcnRoZXRhXCI6XCLPkVwiLFwidmFydHJpYW5nbGVsZWZ0XCI6XCLiirJcIixcInZhcnRyaWFuZ2xlcmlnaHRcIjpcIuKKs1wiLFwidkJhclwiOlwi4quoXCIsXCJWYmFyXCI6XCLiq6tcIixcInZCYXJ2XCI6XCLiq6lcIixcIlZjeVwiOlwi0JJcIixcInZjeVwiOlwi0LJcIixcInZkYXNoXCI6XCLiiqJcIixcInZEYXNoXCI6XCLiiqhcIixcIlZkYXNoXCI6XCLiiqlcIixcIlZEYXNoXCI6XCLiiqtcIixcIlZkYXNobFwiOlwi4qumXCIsXCJ2ZWViYXJcIjpcIuKKu1wiLFwidmVlXCI6XCLiiKhcIixcIlZlZVwiOlwi4ouBXCIsXCJ2ZWVlcVwiOlwi4omaXCIsXCJ2ZWxsaXBcIjpcIuKLrlwiLFwidmVyYmFyXCI6XCJ8XCIsXCJWZXJiYXJcIjpcIuKAllwiLFwidmVydFwiOlwifFwiLFwiVmVydFwiOlwi4oCWXCIsXCJWZXJ0aWNhbEJhclwiOlwi4oijXCIsXCJWZXJ0aWNhbExpbmVcIjpcInxcIixcIlZlcnRpY2FsU2VwYXJhdG9yXCI6XCLinZhcIixcIlZlcnRpY2FsVGlsZGVcIjpcIuKJgFwiLFwiVmVyeVRoaW5TcGFjZVwiOlwi4oCKXCIsXCJWZnJcIjpcIvCdlJlcIixcInZmclwiOlwi8J2Us1wiLFwidmx0cmlcIjpcIuKKslwiLFwidm5zdWJcIjpcIuKKguKDklwiLFwidm5zdXBcIjpcIuKKg+KDklwiLFwiVm9wZlwiOlwi8J2VjVwiLFwidm9wZlwiOlwi8J2Vp1wiLFwidnByb3BcIjpcIuKInVwiLFwidnJ0cmlcIjpcIuKKs1wiLFwiVnNjclwiOlwi8J2SsVwiLFwidnNjclwiOlwi8J2Ti1wiLFwidnN1Ym5FXCI6XCLiq4vvuIBcIixcInZzdWJuZVwiOlwi4oqK77iAXCIsXCJ2c3VwbkVcIjpcIuKrjO+4gFwiLFwidnN1cG5lXCI6XCLiiovvuIBcIixcIlZ2ZGFzaFwiOlwi4oqqXCIsXCJ2emlnemFnXCI6XCLipppcIixcIldjaXJjXCI6XCLFtFwiLFwid2NpcmNcIjpcIsW1XCIsXCJ3ZWRiYXJcIjpcIuKpn1wiLFwid2VkZ2VcIjpcIuKIp1wiLFwiV2VkZ2VcIjpcIuKLgFwiLFwid2VkZ2VxXCI6XCLiiZlcIixcIndlaWVycFwiOlwi4oSYXCIsXCJXZnJcIjpcIvCdlJpcIixcIndmclwiOlwi8J2UtFwiLFwiV29wZlwiOlwi8J2VjlwiLFwid29wZlwiOlwi8J2VqFwiLFwid3BcIjpcIuKEmFwiLFwid3JcIjpcIuKJgFwiLFwid3JlYXRoXCI6XCLiiYBcIixcIldzY3JcIjpcIvCdkrJcIixcIndzY3JcIjpcIvCdk4xcIixcInhjYXBcIjpcIuKLglwiLFwieGNpcmNcIjpcIuKXr1wiLFwieGN1cFwiOlwi4ouDXCIsXCJ4ZHRyaVwiOlwi4pa9XCIsXCJYZnJcIjpcIvCdlJtcIixcInhmclwiOlwi8J2UtVwiLFwieGhhcnJcIjpcIuKft1wiLFwieGhBcnJcIjpcIuKfulwiLFwiWGlcIjpcIs6eXCIsXCJ4aVwiOlwizr5cIixcInhsYXJyXCI6XCLin7VcIixcInhsQXJyXCI6XCLin7hcIixcInhtYXBcIjpcIuKfvFwiLFwieG5pc1wiOlwi4ou7XCIsXCJ4b2RvdFwiOlwi4qiAXCIsXCJYb3BmXCI6XCLwnZWPXCIsXCJ4b3BmXCI6XCLwnZWpXCIsXCJ4b3BsdXNcIjpcIuKogVwiLFwieG90aW1lXCI6XCLiqIJcIixcInhyYXJyXCI6XCLin7ZcIixcInhyQXJyXCI6XCLin7lcIixcIlhzY3JcIjpcIvCdkrNcIixcInhzY3JcIjpcIvCdk41cIixcInhzcWN1cFwiOlwi4qiGXCIsXCJ4dXBsdXNcIjpcIuKohFwiLFwieHV0cmlcIjpcIuKWs1wiLFwieHZlZVwiOlwi4ouBXCIsXCJ4d2VkZ2VcIjpcIuKLgFwiLFwiWWFjdXRlXCI6XCLDnVwiLFwieWFjdXRlXCI6XCLDvVwiLFwiWUFjeVwiOlwi0K9cIixcInlhY3lcIjpcItGPXCIsXCJZY2lyY1wiOlwixbZcIixcInljaXJjXCI6XCLFt1wiLFwiWWN5XCI6XCLQq1wiLFwieWN5XCI6XCLRi1wiLFwieWVuXCI6XCLCpVwiLFwiWWZyXCI6XCLwnZScXCIsXCJ5ZnJcIjpcIvCdlLZcIixcIllJY3lcIjpcItCHXCIsXCJ5aWN5XCI6XCLRl1wiLFwiWW9wZlwiOlwi8J2VkFwiLFwieW9wZlwiOlwi8J2VqlwiLFwiWXNjclwiOlwi8J2StFwiLFwieXNjclwiOlwi8J2TjlwiLFwiWVVjeVwiOlwi0K5cIixcInl1Y3lcIjpcItGOXCIsXCJ5dW1sXCI6XCLDv1wiLFwiWXVtbFwiOlwixbhcIixcIlphY3V0ZVwiOlwixblcIixcInphY3V0ZVwiOlwixbpcIixcIlpjYXJvblwiOlwixb1cIixcInpjYXJvblwiOlwixb5cIixcIlpjeVwiOlwi0JdcIixcInpjeVwiOlwi0LdcIixcIlpkb3RcIjpcIsW7XCIsXCJ6ZG90XCI6XCLFvFwiLFwiemVldHJmXCI6XCLihKhcIixcIlplcm9XaWR0aFNwYWNlXCI6XCLigItcIixcIlpldGFcIjpcIs6WXCIsXCJ6ZXRhXCI6XCLOtlwiLFwiemZyXCI6XCLwnZS3XCIsXCJaZnJcIjpcIuKEqFwiLFwiWkhjeVwiOlwi0JZcIixcInpoY3lcIjpcItC2XCIsXCJ6aWdyYXJyXCI6XCLih51cIixcInpvcGZcIjpcIvCdlatcIixcIlpvcGZcIjpcIuKEpFwiLFwiWnNjclwiOlwi8J2StVwiLFwienNjclwiOlwi8J2Tj1wiLFwiendqXCI6XCLigI1cIixcInp3bmpcIjpcIuKAjFwifVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBIZWxwZXJzXG5cbi8vIE1lcmdlIG9iamVjdHNcbi8vXG5mdW5jdGlvbiBhc3NpZ24ob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuOyB9XG5cbiAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgb2JqW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2NsYXNzKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7IH1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgeyByZXR1cm4gX2NsYXNzKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nOyB9XG5mdW5jdGlvbiBpc09iamVjdChvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBPYmplY3RdJzsgfVxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7IH1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJzsgfVxuXG5cbmZ1bmN0aW9uIGVzY2FwZVJFKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgJ1xcXFwkJicpOyB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBmdXp6eUxpbms6IHRydWUsXG4gIGZ1enp5RW1haWw6IHRydWUsXG4gIGZ1enp5SVA6IGZhbHNlXG59O1xuXG5cbmZ1bmN0aW9uIGlzT3B0aW9uc09iaihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaiB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGspIHtcbiAgICByZXR1cm4gYWNjIHx8IGRlZmF1bHRPcHRpb25zLmhhc093blByb3BlcnR5KGspO1xuICB9LCBmYWxzZSk7XG59XG5cblxudmFyIGRlZmF1bHRTY2hlbWFzID0ge1xuICAnaHR0cDonOiB7XG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uICh0ZXh0LCBwb3MsIHNlbGYpIHtcbiAgICAgIHZhciB0YWlsID0gdGV4dC5zbGljZShwb3MpO1xuXG4gICAgICBpZiAoIXNlbGYucmUuaHR0cCkge1xuICAgICAgICAvLyBjb21waWxlIGxhemlseSwgYmVjYXVzZSBcImhvc3RcIi1jb250YWluaW5nIHZhcmlhYmxlcyBjYW4gY2hhbmdlIG9uIHRsZHMgdXBkYXRlLlxuICAgICAgICBzZWxmLnJlLmh0dHAgPSAgbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXlxcXFwvXFxcXC8nICsgc2VsZi5yZS5zcmNfYXV0aCArIHNlbGYucmUuc3JjX2hvc3RfcG9ydF9zdHJpY3QgKyBzZWxmLnJlLnNyY19wYXRoLCAnaSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxmLnJlLmh0dHAudGVzdCh0YWlsKSkge1xuICAgICAgICByZXR1cm4gdGFpbC5tYXRjaChzZWxmLnJlLmh0dHApWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSxcbiAgJ2h0dHBzOic6ICAnaHR0cDonLFxuICAnZnRwOic6ICAgICdodHRwOicsXG4gICcvLyc6ICAgICAge1xuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAodGV4dCwgcG9zLCBzZWxmKSB7XG4gICAgICB2YXIgdGFpbCA9IHRleHQuc2xpY2UocG9zKTtcblxuICAgICAgaWYgKCFzZWxmLnJlLm5vX2h0dHApIHtcbiAgICAgIC8vIGNvbXBpbGUgbGF6aWx5LCBiZWNhdXNlIFwiaG9zdFwiLWNvbnRhaW5pbmcgdmFyaWFibGVzIGNhbiBjaGFuZ2Ugb24gdGxkcyB1cGRhdGUuXG4gICAgICAgIHNlbGYucmUubm9faHR0cCA9ICBuZXcgUmVnRXhwKFxuICAgICAgICAgICdeJyArXG4gICAgICAgICAgc2VsZi5yZS5zcmNfYXV0aCArXG4gICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgc2luZ2xlLWxldmVsIGRvbWFpbnMsIGJlY2F1c2Ugb2YgZmFsc2UgcG9zaXRpdmVzIGxpa2UgJy8vdGVzdCdcbiAgICAgICAgICAvLyB3aXRoIGNvZGUgY29tbWVudHNcbiAgICAgICAgICAnKD86bG9jYWxob3N0fCg/Oig/OicgKyBzZWxmLnJlLnNyY19kb21haW4gKyAnKVxcXFwuKSsnICsgc2VsZi5yZS5zcmNfZG9tYWluX3Jvb3QgKyAnKScgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX3BvcnQgK1xuICAgICAgICAgIHNlbGYucmUuc3JjX2hvc3RfdGVybWluYXRvciArXG4gICAgICAgICAgc2VsZi5yZS5zcmNfcGF0aCxcblxuICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5yZS5ub19odHRwLnRlc3QodGFpbCkpIHtcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBgOi8vYCAmIGAvLy9gLCB0aGF0IHByb3RlY3RzIGZyb20gZXJyb3JzIGluIHByb3RvY29sIG5hbWVcbiAgICAgICAgaWYgKHBvcyA+PSAzICYmIHRleHRbcG9zIC0gM10gPT09ICc6JykgeyByZXR1cm4gMDsgfVxuICAgICAgICBpZiAocG9zID49IDMgJiYgdGV4dFtwb3MgLSAzXSA9PT0gJy8nKSB7IHJldHVybiAwOyB9XG4gICAgICAgIHJldHVybiB0YWlsLm1hdGNoKHNlbGYucmUubm9faHR0cClbMF0ubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LFxuICAnbWFpbHRvOic6IHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKHRleHQsIHBvcywgc2VsZikge1xuICAgICAgdmFyIHRhaWwgPSB0ZXh0LnNsaWNlKHBvcyk7XG5cbiAgICAgIGlmICghc2VsZi5yZS5tYWlsdG8pIHtcbiAgICAgICAgc2VsZi5yZS5tYWlsdG8gPSAgbmV3IFJlZ0V4cChcbiAgICAgICAgICAnXicgKyBzZWxmLnJlLnNyY19lbWFpbF9uYW1lICsgJ0AnICsgc2VsZi5yZS5zcmNfaG9zdF9zdHJpY3QsICdpJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGYucmUubWFpbHRvLnRlc3QodGFpbCkpIHtcbiAgICAgICAgcmV0dXJuIHRhaWwubWF0Y2goc2VsZi5yZS5tYWlsdG8pWzBdLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxufTtcblxuLyplc2xpbnQtZGlzYWJsZSBtYXgtbGVuKi9cblxuLy8gUkUgcGF0dGVybiBmb3IgMi1jaGFyYWN0ZXIgdGxkcyAoYXV0b2dlbmVyYXRlZCBieSAuL3N1cHBvcnQvdGxkc18yY2hhcl9nZW4uanMpXG52YXIgdGxkc18yY2hfc3JjX3JlID0gJ2FbY2RlZmdpbG1ub3Fyc3R1d3h6XXxiW2FiZGVmZ2hpam1ub3JzdHZ3eXpdfGNbYWNkZmdoaWtsbW5vcnV2d3h5el18ZFtlamttb3pdfGVbY2VncnN0dV18Zltpamttb3JdfGdbYWJkZWZnaGlsbW5wcXJzdHV3eV18aFtrbW5ydHVdfGlbZGVsbW5vcXJzdF18altlbW9wXXxrW2VnaGltbnByd3l6XXxsW2FiY2lrcnN0dXZ5XXxtW2FjZGVnaGtsbW5vcHFyc3R1dnd4eXpdfG5bYWNlZmdpbG9wcnV6XXxvbXxwW2FlZmdoa2xtbnJzdHd5XXxxYXxyW2Vvc3V3XXxzW2FiY2RlZ2hpamtsbW5vcnR1dnh5el18dFtjZGZnaGprbG1ub3J0dnd6XXx1W2Fna3N5el18dlthY2VnaW51XXx3W2ZzXXx5W2V0XXx6W2Ftd10nO1xuXG4vLyBET04nVCB0cnkgdG8gbWFrZSBQUnMgd2l0aCBjaGFuZ2VzLiBFeHRlbmQgVExEcyB3aXRoIExpbmtpZnlJdC50bGRzKCkgaW5zdGVhZFxudmFyIHRsZHNfZGVmYXVsdCA9ICdiaXp8Y29tfGVkdXxnb3Z8bmV0fG9yZ3xwcm98d2VifHh4eHxhZXJvfGFzaWF8Y29vcHxpbmZvfG11c2V1bXxuYW1lfHNob3B80YDRhCcuc3BsaXQoJ3wnKTtcblxuLyplc2xpbnQtZW5hYmxlIG1heC1sZW4qL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiByZXNldFNjYW5DYWNoZShzZWxmKSB7XG4gIHNlbGYuX19pbmRleF9fID0gLTE7XG4gIHNlbGYuX190ZXh0X2NhY2hlX18gICA9ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWxpZGF0b3IocmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0ZXh0LCBwb3MpIHtcbiAgICB2YXIgdGFpbCA9IHRleHQuc2xpY2UocG9zKTtcblxuICAgIGlmIChyZS50ZXN0KHRhaWwpKSB7XG4gICAgICByZXR1cm4gdGFpbC5tYXRjaChyZSlbMF0ubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9ybWFsaXplcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgc2VsZikge1xuICAgIHNlbGYubm9ybWFsaXplKG1hdGNoKTtcbiAgfTtcbn1cblxuLy8gU2NoZW1hcyBjb21waWxlci4gQnVpbGQgcmVnZXhwcy5cbi8vXG5mdW5jdGlvbiBjb21waWxlKHNlbGYpIHtcblxuICAvLyBMb2FkICYgY2xvbmUgUkUgcGF0dGVybnMuXG4gIHZhciByZSA9IHNlbGYucmUgPSByZXF1aXJlKCcuL2xpYi9yZScpKHNlbGYuX19vcHRzX18pO1xuXG4gIC8vIERlZmluZSBkeW5hbWljIHBhdHRlcm5zXG4gIHZhciB0bGRzID0gc2VsZi5fX3RsZHNfXy5zbGljZSgpO1xuXG4gIHNlbGYub25Db21waWxlKCk7XG5cbiAgaWYgKCFzZWxmLl9fdGxkc19yZXBsYWNlZF9fKSB7XG4gICAgdGxkcy5wdXNoKHRsZHNfMmNoX3NyY19yZSk7XG4gIH1cbiAgdGxkcy5wdXNoKHJlLnNyY194bik7XG5cbiAgcmUuc3JjX3RsZHMgPSB0bGRzLmpvaW4oJ3wnKTtcblxuICBmdW5jdGlvbiB1bnRwbCh0cGwpIHsgcmV0dXJuIHRwbC5yZXBsYWNlKCclVExEUyUnLCByZS5zcmNfdGxkcyk7IH1cblxuICByZS5lbWFpbF9mdXp6eSAgICAgID0gUmVnRXhwKHVudHBsKHJlLnRwbF9lbWFpbF9mdXp6eSksICdpJyk7XG4gIHJlLmxpbmtfZnV6enkgICAgICAgPSBSZWdFeHAodW50cGwocmUudHBsX2xpbmtfZnV6enkpLCAnaScpO1xuICByZS5saW5rX25vX2lwX2Z1enp5ID0gUmVnRXhwKHVudHBsKHJlLnRwbF9saW5rX25vX2lwX2Z1enp5KSwgJ2knKTtcbiAgcmUuaG9zdF9mdXp6eV90ZXN0ICA9IFJlZ0V4cCh1bnRwbChyZS50cGxfaG9zdF9mdXp6eV90ZXN0KSwgJ2knKTtcblxuICAvL1xuICAvLyBDb21waWxlIGVhY2ggc2NoZW1hXG4gIC8vXG5cbiAgdmFyIGFsaWFzZXMgPSBbXTtcblxuICBzZWxmLl9fY29tcGlsZWRfXyA9IHt9OyAvLyBSZXNldCBjb21waWxlZCBkYXRhXG5cbiAgZnVuY3Rpb24gc2NoZW1hRXJyb3IobmFtZSwgdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcoTGlua2lmeUl0KSBJbnZhbGlkIHNjaGVtYSBcIicgKyBuYW1lICsgJ1wiOiAnICsgdmFsKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNlbGYuX19zY2hlbWFzX18pLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgdmFsID0gc2VsZi5fX3NjaGVtYXNfX1tuYW1lXTtcblxuICAgIC8vIHNraXAgZGlzYWJsZWQgbWV0aG9kc1xuICAgIGlmICh2YWwgPT09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgY29tcGlsZWQgPSB7IHZhbGlkYXRlOiBudWxsLCBsaW5rOiBudWxsIH07XG5cbiAgICBzZWxmLl9fY29tcGlsZWRfX1tuYW1lXSA9IGNvbXBpbGVkO1xuXG4gICAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICAgIGlmIChpc1JlZ0V4cCh2YWwudmFsaWRhdGUpKSB7XG4gICAgICAgIGNvbXBpbGVkLnZhbGlkYXRlID0gY3JlYXRlVmFsaWRhdG9yKHZhbC52YWxpZGF0ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsLnZhbGlkYXRlKSkge1xuICAgICAgICBjb21waWxlZC52YWxpZGF0ZSA9IHZhbC52YWxpZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbC5ub3JtYWxpemUpKSB7XG4gICAgICAgIGNvbXBpbGVkLm5vcm1hbGl6ZSA9IHZhbC5ub3JtYWxpemU7XG4gICAgICB9IGVsc2UgaWYgKCF2YWwubm9ybWFsaXplKSB7XG4gICAgICAgIGNvbXBpbGVkLm5vcm1hbGl6ZSA9IGNyZWF0ZU5vcm1hbGl6ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgYWxpYXNlcy5wdXNoKG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVtYUVycm9yKG5hbWUsIHZhbCk7XG4gIH0pO1xuXG4gIC8vXG4gIC8vIENvbXBpbGUgcG9zdHBvbmVkIGFsaWFzZXNcbiAgLy9cblxuICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgaWYgKCFzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0pIHtcbiAgICAgIC8vIFNpbGVudGx5IGZhaWwgb24gbWlzc2VkIHNjaGVtYXMgdG8gYXZvaWQgZXJyb25zIG9uIGRpc2FibGUuXG4gICAgICAvLyBzY2hlbWFFcnJvcihhbGlhcywgc2VsZi5fX3NjaGVtYXNfX1thbGlhc10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuX19jb21waWxlZF9fW2FsaWFzXS52YWxpZGF0ZSA9XG4gICAgICBzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0udmFsaWRhdGU7XG4gICAgc2VsZi5fX2NvbXBpbGVkX19bYWxpYXNdLm5vcm1hbGl6ZSA9XG4gICAgICBzZWxmLl9fY29tcGlsZWRfX1tzZWxmLl9fc2NoZW1hc19fW2FsaWFzXV0ubm9ybWFsaXplO1xuICB9KTtcblxuICAvL1xuICAvLyBGYWtlIHJlY29yZCBmb3IgZ3Vlc3NlZCBsaW5rc1xuICAvL1xuICBzZWxmLl9fY29tcGlsZWRfX1snJ10gPSB7IHZhbGlkYXRlOiBudWxsLCBub3JtYWxpemU6IGNyZWF0ZU5vcm1hbGl6ZXIoKSB9O1xuXG4gIC8vXG4gIC8vIEJ1aWxkIHNjaGVtYSBjb25kaXRpb25cbiAgLy9cbiAgdmFyIHNsaXN0ID0gT2JqZWN0LmtleXMoc2VsZi5fX2NvbXBpbGVkX18pXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIGRpc2FibGVkICYgZmFrZSBzY2hlbWFzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZS5sZW5ndGggPiAwICYmIHNlbGYuX19jb21waWxlZF9fW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChlc2NhcGVSRSlcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbignfCcpO1xuICAvLyAoPyFfKSBjYXVzZSAxLjV4IHNsb3dkb3duXG4gIHNlbGYucmUuc2NoZW1hX3Rlc3QgICAgID0gUmVnRXhwKCcoXnwoPyFfKSg/Ols+PFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKSgnICsgc2xpc3QgKyAnKScsICdpJyk7XG4gIHNlbGYucmUuc2NoZW1hX3NlYXJjaCAgID0gUmVnRXhwKCcoXnwoPyFfKSg/Ols+PFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKSgnICsgc2xpc3QgKyAnKScsICdpZycpO1xuICBzZWxmLnJlLnNjaGVtYV9hdF9zdGFydCA9IFJlZ0V4cCgnXicgKyBzZWxmLnJlLnNjaGVtYV9zZWFyY2guc291cmNlLCAnaScpO1xuXG4gIHNlbGYucmUucHJldGVzdCA9IFJlZ0V4cChcbiAgICAnKCcgKyBzZWxmLnJlLnNjaGVtYV90ZXN0LnNvdXJjZSArICcpfCgnICsgc2VsZi5yZS5ob3N0X2Z1enp5X3Rlc3Quc291cmNlICsgJyl8QCcsXG4gICAgJ2knXG4gICk7XG5cbiAgLy9cbiAgLy8gQ2xlYW51cFxuICAvL1xuXG4gIHJlc2V0U2NhbkNhY2hlKHNlbGYpO1xufVxuXG4vKipcbiAqIGNsYXNzIE1hdGNoXG4gKlxuICogTWF0Y2ggcmVzdWx0LiBTaW5nbGUgZWxlbWVudCBvZiBhcnJheSwgcmV0dXJuZWQgYnkgW1tMaW5raWZ5SXQjbWF0Y2hdXVxuICoqL1xuZnVuY3Rpb24gTWF0Y2goc2VsZiwgc2hpZnQpIHtcbiAgdmFyIHN0YXJ0ID0gc2VsZi5fX2luZGV4X18sXG4gICAgICBlbmQgICA9IHNlbGYuX19sYXN0X2luZGV4X18sXG4gICAgICB0ZXh0ICA9IHNlbGYuX190ZXh0X2NhY2hlX18uc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgLyoqXG4gICAqIE1hdGNoI3NjaGVtYSAtPiBTdHJpbmdcbiAgICpcbiAgICogUHJlZml4IChwcm90b2NvbCkgZm9yIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMuc2NoZW1hICAgID0gc2VsZi5fX3NjaGVtYV9fLnRvTG93ZXJDYXNlKCk7XG4gIC8qKlxuICAgKiBNYXRjaCNpbmRleCAtPiBOdW1iZXJcbiAgICpcbiAgICogRmlyc3QgcG9zaXRpb24gb2YgbWF0Y2hlZCBzdHJpbmcuXG4gICAqKi9cbiAgdGhpcy5pbmRleCAgICAgPSBzdGFydCArIHNoaWZ0O1xuICAvKipcbiAgICogTWF0Y2gjbGFzdEluZGV4IC0+IE51bWJlclxuICAgKlxuICAgKiBOZXh0IHBvc2l0aW9uIGFmdGVyIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMubGFzdEluZGV4ID0gZW5kICsgc2hpZnQ7XG4gIC8qKlxuICAgKiBNYXRjaCNyYXcgLT4gU3RyaW5nXG4gICAqXG4gICAqIE1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMucmF3ICAgICAgID0gdGV4dDtcbiAgLyoqXG4gICAqIE1hdGNoI3RleHQgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vdG1hbGl6ZWQgdGV4dCBvZiBtYXRjaGVkIHN0cmluZy5cbiAgICoqL1xuICB0aGlzLnRleHQgICAgICA9IHRleHQ7XG4gIC8qKlxuICAgKiBNYXRjaCN1cmwgLT4gU3RyaW5nXG4gICAqXG4gICAqIE5vcm1hbGl6ZWQgdXJsIG9mIG1hdGNoZWQgc3RyaW5nLlxuICAgKiovXG4gIHRoaXMudXJsICAgICAgID0gdGV4dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWF0Y2goc2VsZiwgc2hpZnQpIHtcbiAgdmFyIG1hdGNoID0gbmV3IE1hdGNoKHNlbGYsIHNoaWZ0KTtcblxuICBzZWxmLl9fY29tcGlsZWRfX1ttYXRjaC5zY2hlbWFdLm5vcm1hbGl6ZShtYXRjaCwgc2VsZik7XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5cbi8qKlxuICogY2xhc3MgTGlua2lmeUl0XG4gKiovXG5cbi8qKlxuICogbmV3IExpbmtpZnlJdChzY2hlbWFzLCBvcHRpb25zKVxuICogLSBzY2hlbWFzIChPYmplY3QpOiBPcHRpb25hbC4gQWRkaXRpb25hbCBzY2hlbWFzIHRvIHZhbGlkYXRlIChwcmVmaXgvdmFsaWRhdG9yKVxuICogLSBvcHRpb25zIChPYmplY3QpOiB7IGZ1enp5TGlua3xmdXp6eUVtYWlsfGZ1enp5SVA6IHRydWV8ZmFsc2UgfVxuICpcbiAqIENyZWF0ZXMgbmV3IGxpbmtpZmllciBpbnN0YW5jZSB3aXRoIG9wdGlvbmFsIGFkZGl0aW9uYWwgc2NoZW1hcy5cbiAqIENhbiBiZSBjYWxsZWQgd2l0aG91dCBgbmV3YCBrZXl3b3JkIGZvciBjb252ZW5pZW5jZS5cbiAqXG4gKiBCeSBkZWZhdWx0IHVuZGVyc3RhbmRzOlxuICpcbiAqIC0gYGh0dHAocyk6Ly8uLi5gICwgYGZ0cDovLy4uLmAsIGBtYWlsdG86Li4uYCAmIGAvLy4uLmAgbGlua3NcbiAqIC0gXCJmdXp6eVwiIGxpbmtzIGFuZCBlbWFpbHMgKGV4YW1wbGUuY29tLCBmb29AYmFyLmNvbSkuXG4gKlxuICogYHNjaGVtYXNgIGlzIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBrZXkvdmFsdWUgZGVzY3JpYmVzIHByb3RvY29sL3J1bGU6XG4gKlxuICogLSBfX2tleV9fIC0gbGluayBwcmVmaXggKHVzdWFsbHksIHByb3RvY29sIG5hbWUgd2l0aCBgOmAgYXQgdGhlIGVuZCwgYHNreXBlOmBcbiAqICAgZm9yIGV4YW1wbGUpLiBgbGlua2lmeS1pdGAgbWFrZXMgc2h1cmUgdGhhdCBwcmVmaXggaXMgbm90IHByZWNlZWRlZCB3aXRoXG4gKiAgIGFscGhhbnVtZXJpYyBjaGFyIGFuZCBzeW1ib2xzLiBPbmx5IHdoaXRlc3BhY2VzIGFuZCBwdW5jdHVhdGlvbiBhbGxvd2VkLlxuICogLSBfX3ZhbHVlX18gLSBydWxlIHRvIGNoZWNrIHRhaWwgYWZ0ZXIgbGluayBwcmVmaXhcbiAqICAgLSBfU3RyaW5nXyAtIGp1c3QgYWxpYXMgdG8gZXhpc3RpbmcgcnVsZVxuICogICAtIF9PYmplY3RfXG4gKiAgICAgLSBfdmFsaWRhdGVfIC0gdmFsaWRhdG9yIGZ1bmN0aW9uIChzaG91bGQgcmV0dXJuIG1hdGNoZWQgbGVuZ3RoIG9uIHN1Y2Nlc3MpLFxuICogICAgICAgb3IgYFJlZ0V4cGAuXG4gKiAgICAgLSBfbm9ybWFsaXplXyAtIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIG5vcm1hbGl6ZSB0ZXh0ICYgdXJsIG9mIG1hdGNoZWQgcmVzdWx0XG4gKiAgICAgICAoZm9yIGV4YW1wbGUsIGZvciBAdHdpdHRlciBtZW50aW9ucykuXG4gKlxuICogYG9wdGlvbnNgOlxuICpcbiAqIC0gX19mdXp6eUxpbmtfXyAtIHJlY29nbmlnZSBVUkwtcyB3aXRob3V0IGBodHRwKHMpOmAgcHJlZml4LiBEZWZhdWx0IGB0cnVlYC5cbiAqIC0gX19mdXp6eUlQX18gLSBhbGxvdyBJUHMgaW4gZnV6enkgbGlua3MgYWJvdmUuIENhbiBjb25mbGljdCB3aXRoIHNvbWUgdGV4dHNcbiAqICAgbGlrZSB2ZXJzaW9uIG51bWJlcnMuIERlZmF1bHQgYGZhbHNlYC5cbiAqIC0gX19mdXp6eUVtYWlsX18gLSByZWNvZ25pemUgZW1haWxzIHdpdGhvdXQgYG1haWx0bzpgIHByZWZpeC5cbiAqXG4gKiovXG5mdW5jdGlvbiBMaW5raWZ5SXQoc2NoZW1hcywgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTGlua2lmeUl0KSkge1xuICAgIHJldHVybiBuZXcgTGlua2lmeUl0KHNjaGVtYXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKGlzT3B0aW9uc09iaihzY2hlbWFzKSkge1xuICAgICAgb3B0aW9ucyA9IHNjaGVtYXM7XG4gICAgICBzY2hlbWFzID0ge307XG4gICAgfVxuICB9XG5cbiAgdGhpcy5fX29wdHNfXyAgICAgICAgICAgPSBhc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAvLyBDYWNoZSBsYXN0IHRlc3RlZCByZXN1bHQuIFVzZWQgdG8gc2tpcCByZXBlYXRpbmcgc3RlcHMgb24gbmV4dCBgbWF0Y2hgIGNhbGwuXG4gIHRoaXMuX19pbmRleF9fICAgICAgICAgID0gLTE7XG4gIHRoaXMuX19sYXN0X2luZGV4X18gICAgID0gLTE7IC8vIE5leHQgc2NhbiBwb3NpdGlvblxuICB0aGlzLl9fc2NoZW1hX18gICAgICAgICA9ICcnO1xuICB0aGlzLl9fdGV4dF9jYWNoZV9fICAgICA9ICcnO1xuXG4gIHRoaXMuX19zY2hlbWFzX18gICAgICAgID0gYXNzaWduKHt9LCBkZWZhdWx0U2NoZW1hcywgc2NoZW1hcyk7XG4gIHRoaXMuX19jb21waWxlZF9fICAgICAgID0ge307XG5cbiAgdGhpcy5fX3RsZHNfXyAgICAgICAgICAgPSB0bGRzX2RlZmF1bHQ7XG4gIHRoaXMuX190bGRzX3JlcGxhY2VkX18gID0gZmFsc2U7XG5cbiAgdGhpcy5yZSA9IHt9O1xuXG4gIGNvbXBpbGUodGhpcyk7XG59XG5cblxuLyoqIGNoYWluYWJsZVxuICogTGlua2lmeUl0I2FkZChzY2hlbWEsIGRlZmluaXRpb24pXG4gKiAtIHNjaGVtYSAoU3RyaW5nKTogcnVsZSBuYW1lIChmaXhlZCBwYXR0ZXJuIHByZWZpeClcbiAqIC0gZGVmaW5pdGlvbiAoU3RyaW5nfFJlZ0V4cHxPYmplY3QpOiBzY2hlbWEgZGVmaW5pdGlvblxuICpcbiAqIEFkZCBuZXcgcnVsZSBkZWZpbml0aW9uLiBTZWUgY29uc3RydWN0b3IgZGVzY3JpcHRpb24gZm9yIGRldGFpbHMuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZChzY2hlbWEsIGRlZmluaXRpb24pIHtcbiAgdGhpcy5fX3NjaGVtYXNfX1tzY2hlbWFdID0gZGVmaW5pdGlvbjtcbiAgY29tcGlsZSh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGVcbiAqIExpbmtpZnlJdCNzZXQob3B0aW9ucylcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogeyBmdXp6eUxpbmt8ZnV6enlFbWFpbHxmdXp6eUlQOiB0cnVlfGZhbHNlIH1cbiAqXG4gKiBTZXQgcmVjb2duaXRpb24gb3B0aW9ucyBmb3IgbGlua3Mgd2l0aG91dCBzY2hlbWEuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gIHRoaXMuX19vcHRzX18gPSBhc3NpZ24odGhpcy5fX29wdHNfXywgb3B0aW9ucyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCN0ZXN0KHRleHQpIC0+IEJvb2xlYW5cbiAqXG4gKiBTZWFyY2hlcyBsaW5raWZpYWJsZSBwYXR0ZXJuIGFuZCByZXR1cm5zIGB0cnVlYCBvbiBzdWNjZXNzIG9yIGBmYWxzZWAgb24gZmFpbC5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uIHRlc3QodGV4dCkge1xuICAvLyBSZXNldCBzY2FuIGNhY2hlXG4gIHRoaXMuX190ZXh0X2NhY2hlX18gPSB0ZXh0O1xuICB0aGlzLl9faW5kZXhfXyAgICAgID0gLTE7XG5cbiAgaWYgKCF0ZXh0Lmxlbmd0aCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB2YXIgbSwgbWwsIG1lLCBsZW4sIHNoaWZ0LCBuZXh0LCByZSwgdGxkX3BvcywgYXRfcG9zO1xuXG4gIC8vIHRyeSB0byBzY2FuIGZvciBsaW5rIHdpdGggc2NoZW1hIC0gdGhhdCdzIHRoZSBtb3N0IHNpbXBsZSBydWxlXG4gIGlmICh0aGlzLnJlLnNjaGVtYV90ZXN0LnRlc3QodGV4dCkpIHtcbiAgICByZSA9IHRoaXMucmUuc2NoZW1hX3NlYXJjaDtcbiAgICByZS5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlICgobSA9IHJlLmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgICBsZW4gPSB0aGlzLnRlc3RTY2hlbWFBdCh0ZXh0LCBtWzJdLCByZS5sYXN0SW5kZXgpO1xuICAgICAgaWYgKGxlbikge1xuICAgICAgICB0aGlzLl9fc2NoZW1hX18gICAgID0gbVsyXTtcbiAgICAgICAgdGhpcy5fX2luZGV4X18gICAgICA9IG0uaW5kZXggKyBtWzFdLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG0uaW5kZXggKyBtWzBdLmxlbmd0aCArIGxlbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuX19vcHRzX18uZnV6enlMaW5rICYmIHRoaXMuX19jb21waWxlZF9fWydodHRwOiddKSB7XG4gICAgLy8gZ3Vlc3Mgc2NoZW1hbGVzcyBsaW5rc1xuICAgIHRsZF9wb3MgPSB0ZXh0LnNlYXJjaCh0aGlzLnJlLmhvc3RfZnV6enlfdGVzdCk7XG4gICAgaWYgKHRsZF9wb3MgPj0gMCkge1xuICAgICAgLy8gaWYgdGxkIGlzIGxvY2F0ZWQgYWZ0ZXIgZm91bmQgbGluayAtIG5vIG5lZWQgdG8gY2hlY2sgZnV6enkgcGF0dGVyblxuICAgICAgaWYgKHRoaXMuX19pbmRleF9fIDwgMCB8fCB0bGRfcG9zIDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgaWYgKChtbCA9IHRleHQubWF0Y2godGhpcy5fX29wdHNfXy5mdXp6eUlQID8gdGhpcy5yZS5saW5rX2Z1enp5IDogdGhpcy5yZS5saW5rX25vX2lwX2Z1enp5KSkgIT09IG51bGwpIHtcblxuICAgICAgICAgIHNoaWZ0ID0gbWwuaW5kZXggKyBtbFsxXS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18pIHtcbiAgICAgICAgICAgIHRoaXMuX19zY2hlbWFfXyAgICAgPSAnJztcbiAgICAgICAgICAgIHRoaXMuX19pbmRleF9fICAgICAgPSBzaGlmdDtcbiAgICAgICAgICAgIHRoaXMuX19sYXN0X2luZGV4X18gPSBtbC5pbmRleCArIG1sWzBdLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5fX29wdHNfXy5mdXp6eUVtYWlsICYmIHRoaXMuX19jb21waWxlZF9fWydtYWlsdG86J10pIHtcbiAgICAvLyBndWVzcyBzY2hlbWFsZXNzIGVtYWlsc1xuICAgIGF0X3BvcyA9IHRleHQuaW5kZXhPZignQCcpO1xuICAgIGlmIChhdF9wb3MgPj0gMCkge1xuICAgICAgLy8gV2UgY2FuJ3Qgc2tpcCB0aGlzIGNoZWNrLCBiZWNhdXNlIHRoaXMgY2FzZXMgYXJlIHBvc3NpYmxlOlxuICAgICAgLy8gMTkyLjE2OC4xLjFAZ21haWwuY29tLCBteS5pbkBleGFtcGxlLmNvbVxuICAgICAgaWYgKChtZSA9IHRleHQubWF0Y2godGhpcy5yZS5lbWFpbF9mdXp6eSkpICE9PSBudWxsKSB7XG5cbiAgICAgICAgc2hpZnQgPSBtZS5pbmRleCArIG1lWzFdLmxlbmd0aDtcbiAgICAgICAgbmV4dCAgPSBtZS5pbmRleCArIG1lWzBdLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5fX2luZGV4X18gPCAwIHx8IHNoaWZ0IDwgdGhpcy5fX2luZGV4X18gfHxcbiAgICAgICAgICAgIChzaGlmdCA9PT0gdGhpcy5fX2luZGV4X18gJiYgbmV4dCA+IHRoaXMuX19sYXN0X2luZGV4X18pKSB7XG4gICAgICAgICAgdGhpcy5fX3NjaGVtYV9fICAgICA9ICdtYWlsdG86JztcbiAgICAgICAgICB0aGlzLl9faW5kZXhfXyAgICAgID0gc2hpZnQ7XG4gICAgICAgICAgdGhpcy5fX2xhc3RfaW5kZXhfXyA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5fX2luZGV4X18gPj0gMDtcbn07XG5cblxuLyoqXG4gKiBMaW5raWZ5SXQjcHJldGVzdCh0ZXh0KSAtPiBCb29sZWFuXG4gKlxuICogVmVyeSBxdWljayBjaGVjaywgdGhhdCBjYW4gZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMuIFJldHVybnMgdHJ1ZSBpZiBsaW5rIE1BWSBCRVxuICogY2FuIGV4aXN0cy4gQ2FuIGJlIHVzZWQgZm9yIHNwZWVkIG9wdGltaXphdGlvbiwgd2hlbiB5b3UgbmVlZCB0byBjaGVjayB0aGF0XG4gKiBsaW5rIE5PVCBleGlzdHMuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnByZXRlc3QgPSBmdW5jdGlvbiBwcmV0ZXN0KHRleHQpIHtcbiAgcmV0dXJuIHRoaXMucmUucHJldGVzdC50ZXN0KHRleHQpO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCN0ZXN0U2NoZW1hQXQodGV4dCwgbmFtZSwgcG9zaXRpb24pIC0+IE51bWJlclxuICogLSB0ZXh0IChTdHJpbmcpOiB0ZXh0IHRvIHNjYW5cbiAqIC0gbmFtZSAoU3RyaW5nKTogcnVsZSAoc2NoZW1hKSBuYW1lXG4gKiAtIHBvc2l0aW9uIChOdW1iZXIpOiB0ZXh0IG9mZnNldCB0byBjaGVjayBmcm9tXG4gKlxuICogU2ltaWxhciB0byBbW0xpbmtpZnlJdCN0ZXN0XV0gYnV0IGNoZWNrcyBvbmx5IHNwZWNpZmljIHByb3RvY29sIHRhaWwgZXhhY3RseVxuICogYXQgZ2l2ZW4gcG9zaXRpb24uIFJldHVybnMgbGVuZ3RoIG9mIGZvdW5kIHBhdHRlcm4gKDAgb24gZmFpbCkuXG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLnRlc3RTY2hlbWFBdCA9IGZ1bmN0aW9uIHRlc3RTY2hlbWFBdCh0ZXh0LCBzY2hlbWEsIHBvcykge1xuICAvLyBJZiBub3Qgc3VwcG9ydGVkIHNjaGVtYSBjaGVjayByZXF1ZXN0ZWQgLSB0ZXJtaW5hdGVcbiAgaWYgKCF0aGlzLl9fY29tcGlsZWRfX1tzY2hlbWEudG9Mb3dlckNhc2UoKV0pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gdGhpcy5fX2NvbXBpbGVkX19bc2NoZW1hLnRvTG93ZXJDYXNlKCldLnZhbGlkYXRlKHRleHQsIHBvcywgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I21hdGNoKHRleHQpIC0+IEFycmF5fG51bGxcbiAqXG4gKiBSZXR1cm5zIGFycmF5IG9mIGZvdW5kIGxpbmsgZGVzY3JpcHRpb25zIG9yIGBudWxsYCBvbiBmYWlsLiBXZSBzdHJvbmdseVxuICogcmVjb21tZW5kIHRvIHVzZSBbW0xpbmtpZnlJdCN0ZXN0XV0gZmlyc3QsIGZvciBiZXN0IHNwZWVkLlxuICpcbiAqICMjIyMjIFJlc3VsdCBtYXRjaCBkZXNjcmlwdGlvblxuICpcbiAqIC0gX19zY2hlbWFfXyAtIGxpbmsgc2NoZW1hLCBjYW4gYmUgZW1wdHkgZm9yIGZ1enp5IGxpbmtzLCBvciBgLy9gIGZvclxuICogICBwcm90b2NvbC1uZXV0cmFsICBsaW5rcy5cbiAqIC0gX19pbmRleF9fIC0gb2Zmc2V0IG9mIG1hdGNoZWQgdGV4dFxuICogLSBfX2xhc3RJbmRleF9fIC0gaW5kZXggb2YgbmV4dCBjaGFyIGFmdGVyIG1hdGhjaCBlbmRcbiAqIC0gX19yYXdfXyAtIG1hdGNoZWQgdGV4dFxuICogLSBfX3RleHRfXyAtIG5vcm1hbGl6ZWQgdGV4dFxuICogLSBfX3VybF9fIC0gbGluaywgZ2VuZXJhdGVkIGZyb20gbWF0Y2hlZCB0ZXh0XG4gKiovXG5MaW5raWZ5SXQucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gbWF0Y2godGV4dCkge1xuICB2YXIgc2hpZnQgPSAwLCByZXN1bHQgPSBbXTtcblxuICAvLyBUcnkgdG8gdGFrZSBwcmV2aW91cyBlbGVtZW50IGZyb20gY2FjaGUsIGlmIC50ZXN0KCkgY2FsbGVkIGJlZm9yZVxuICBpZiAodGhpcy5fX2luZGV4X18gPj0gMCAmJiB0aGlzLl9fdGV4dF9jYWNoZV9fID09PSB0ZXh0KSB7XG4gICAgcmVzdWx0LnB1c2goY3JlYXRlTWF0Y2godGhpcywgc2hpZnQpKTtcbiAgICBzaGlmdCA9IHRoaXMuX19sYXN0X2luZGV4X187XG4gIH1cblxuICAvLyBDdXQgaGVhZCBpZiBjYWNoZSB3YXMgdXNlZFxuICB2YXIgdGFpbCA9IHNoaWZ0ID8gdGV4dC5zbGljZShzaGlmdCkgOiB0ZXh0O1xuXG4gIC8vIFNjYW4gc3RyaW5nIHVudGlsIGVuZCByZWFjaGVkXG4gIHdoaWxlICh0aGlzLnRlc3QodGFpbCkpIHtcbiAgICByZXN1bHQucHVzaChjcmVhdGVNYXRjaCh0aGlzLCBzaGlmdCkpO1xuXG4gICAgdGFpbCA9IHRhaWwuc2xpY2UodGhpcy5fX2xhc3RfaW5kZXhfXyk7XG4gICAgc2hpZnQgKz0gdGhpcy5fX2xhc3RfaW5kZXhfXztcbiAgfVxuXG4gIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuXG4vKipcbiAqIExpbmtpZnlJdCNtYXRjaEF0U3RhcnQodGV4dCkgLT4gTWF0Y2h8bnVsbFxuICpcbiAqIFJldHVybnMgZnVsbHktZm9ybWVkIChub3QgZnV6enkpIGxpbmsgaWYgaXQgc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmdcbiAqIG9mIHRoZSBzdHJpbmcsIGFuZCBudWxsIG90aGVyd2lzZS5cbiAqKi9cbkxpbmtpZnlJdC5wcm90b3R5cGUubWF0Y2hBdFN0YXJ0ID0gZnVuY3Rpb24gbWF0Y2hBdFN0YXJ0KHRleHQpIHtcbiAgLy8gUmVzZXQgc2NhbiBjYWNoZVxuICB0aGlzLl9fdGV4dF9jYWNoZV9fID0gdGV4dDtcbiAgdGhpcy5fX2luZGV4X18gICAgICA9IC0xO1xuXG4gIGlmICghdGV4dC5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gIHZhciBtID0gdGhpcy5yZS5zY2hlbWFfYXRfc3RhcnQuZXhlYyh0ZXh0KTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcblxuICB2YXIgbGVuID0gdGhpcy50ZXN0U2NoZW1hQXQodGV4dCwgbVsyXSwgbVswXS5sZW5ndGgpO1xuICBpZiAoIWxlbikgcmV0dXJuIG51bGw7XG5cbiAgdGhpcy5fX3NjaGVtYV9fICAgICA9IG1bMl07XG4gIHRoaXMuX19pbmRleF9fICAgICAgPSBtLmluZGV4ICsgbVsxXS5sZW5ndGg7XG4gIHRoaXMuX19sYXN0X2luZGV4X18gPSBtLmluZGV4ICsgbVswXS5sZW5ndGggKyBsZW47XG5cbiAgcmV0dXJuIGNyZWF0ZU1hdGNoKHRoaXMsIDApO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBMaW5raWZ5SXQjdGxkcyhsaXN0IFssIGtlZXBPbGRdKSAtPiB0aGlzXG4gKiAtIGxpc3QgKEFycmF5KTogbGlzdCBvZiB0bGRzXG4gKiAtIGtlZXBPbGQgKEJvb2xlYW4pOiBtZXJnZSB3aXRoIGN1cnJlbnQgbGlzdCBpZiBgdHJ1ZWAgKGBmYWxzZWAgYnkgZGVmYXVsdClcbiAqXG4gKiBMb2FkIChvciBtZXJnZSkgbmV3IHRsZHMgbGlzdC4gVGhvc2UgYXJlIHVzZXIgZm9yIGZ1enp5IGxpbmtzICh3aXRob3V0IHByZWZpeClcbiAqIHRvIGF2b2lkIGZhbHNlIHBvc2l0aXZlcy4gQnkgZGVmYXVsdCB0aGlzIGFsZ29yeXRobSB1c2VkOlxuICpcbiAqIC0gaG9zdG5hbWUgd2l0aCBhbnkgMi1sZXR0ZXIgcm9vdCB6b25lcyBhcmUgb2suXG4gKiAtIGJpenxjb218ZWR1fGdvdnxuZXR8b3JnfHByb3x3ZWJ8eHh4fGFlcm98YXNpYXxjb29wfGluZm98bXVzZXVtfG5hbWV8c2hvcHzRgNGEXG4gKiAgIGFyZSBvay5cbiAqIC0gZW5jb2RlZCAoYHhuLS0uLi5gKSByb290IHpvbmVzIGFyZSBvay5cbiAqXG4gKiBJZiBsaXN0IGlzIHJlcGxhY2VkLCB0aGVuIGV4YWN0IG1hdGNoIGZvciAyLWNoYXJzIHJvb3Qgem9uZXMgd2lsbCBiZSBjaGVja2VkLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS50bGRzID0gZnVuY3Rpb24gdGxkcyhsaXN0LCBrZWVwT2xkKSB7XG4gIGxpc3QgPSBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdCA6IFsgbGlzdCBdO1xuXG4gIGlmICgha2VlcE9sZCkge1xuICAgIHRoaXMuX190bGRzX18gPSBsaXN0LnNsaWNlKCk7XG4gICAgdGhpcy5fX3RsZHNfcmVwbGFjZWRfXyA9IHRydWU7XG4gICAgY29tcGlsZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuX190bGRzX18gPSB0aGlzLl9fdGxkc19fLmNvbmNhdChsaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChlbCwgaWR4LCBhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbCAhPT0gYXJyW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKTtcblxuICBjb21waWxlKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTGlua2lmeUl0I25vcm1hbGl6ZShtYXRjaClcbiAqXG4gKiBEZWZhdWx0IG5vcm1hbGl6ZXIgKGlmIHNjaGVtYSBkb2VzIG5vdCBkZWZpbmUgaXQncyBvd24pLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWF0Y2gpIHtcblxuICAvLyBEbyBtaW5pbWFsIHBvc3NpYmxlIGNoYW5nZXMgYnkgZGVmYXVsdC4gTmVlZCB0byBjb2xsZWN0IGZlZWRiYWNrIHByaW9yXG4gIC8vIHRvIG1vdmUgZm9yd2FyZCBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbGlua2lmeS1pdC9pc3N1ZXMvMVxuXG4gIGlmICghbWF0Y2guc2NoZW1hKSB7IG1hdGNoLnVybCA9ICdodHRwOi8vJyArIG1hdGNoLnVybDsgfVxuXG4gIGlmIChtYXRjaC5zY2hlbWEgPT09ICdtYWlsdG86JyAmJiAhL15tYWlsdG86L2kudGVzdChtYXRjaC51cmwpKSB7XG4gICAgbWF0Y2gudXJsID0gJ21haWx0bzonICsgbWF0Y2gudXJsO1xuICB9XG59O1xuXG5cbi8qKlxuICogTGlua2lmeUl0I29uQ29tcGlsZSgpXG4gKlxuICogT3ZlcnJpZGUgdG8gbW9kaWZ5IGJhc2ljIFJlZ0V4cC1zLlxuICoqL1xuTGlua2lmeUl0LnByb3RvdHlwZS5vbkNvbXBpbGUgPSBmdW5jdGlvbiBvbkNvbXBpbGUoKSB7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2lmeUl0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgdmFyIHJlID0ge307XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIC8vIFVzZSBkaXJlY3QgZXh0cmFjdCBpbnN0ZWFkIG9mIGByZWdlbmVyYXRlYCB0byByZWR1c2UgYnJvd3NlcmlmaWVkIHNpemVcbiAgcmUuc3JjX0FueSA9IHJlcXVpcmUoJ3VjLm1pY3JvL3Byb3BlcnRpZXMvQW55L3JlZ2V4Jykuc291cmNlO1xuICByZS5zcmNfQ2MgID0gcmVxdWlyZSgndWMubWljcm8vY2F0ZWdvcmllcy9DYy9yZWdleCcpLnNvdXJjZTtcbiAgcmUuc3JjX1ogICA9IHJlcXVpcmUoJ3VjLm1pY3JvL2NhdGVnb3JpZXMvWi9yZWdleCcpLnNvdXJjZTtcbiAgcmUuc3JjX1AgICA9IHJlcXVpcmUoJ3VjLm1pY3JvL2NhdGVnb3JpZXMvUC9yZWdleCcpLnNvdXJjZTtcblxuICAvLyBcXHB7XFxaXFxQXFxDY1xcQ0Z9ICh3aGl0ZSBzcGFjZXMgKyBjb250cm9sICsgZm9ybWF0ICsgcHVuY3R1YXRpb24pXG4gIHJlLnNyY19aUENjID0gWyByZS5zcmNfWiwgcmUuc3JjX1AsIHJlLnNyY19DYyBdLmpvaW4oJ3wnKTtcblxuICAvLyBcXHB7XFxaXFxDY30gKHdoaXRlIHNwYWNlcyArIGNvbnRyb2wpXG4gIHJlLnNyY19aQ2MgPSBbIHJlLnNyY19aLCByZS5zcmNfQ2MgXS5qb2luKCd8Jyk7XG5cbiAgLy8gRXhwZXJpbWVudGFsLiBMaXN0IG9mIGNoYXJzLCBjb21wbGV0ZWx5IHByb2hpYml0ZWQgaW4gbGlua3NcbiAgLy8gYmVjYXVzZSBjYW4gc2VwYXJhdGUgaXQgZnJvbSBvdGhlciBwYXJ0IG9mIHRleHRcbiAgdmFyIHRleHRfc2VwYXJhdG9ycyA9ICdbPjxcXHVmZjVjXSc7XG5cbiAgLy8gQWxsIHBvc3NpYmxlIHdvcmQgY2hhcmFjdGVycyAoZXZlcnl0aGluZyB3aXRob3V0IHB1bmN0dWF0aW9uLCBzcGFjZXMgJiBjb250cm9scylcbiAgLy8gRGVmaW5lZCB2aWEgcHVuY3R1YXRpb24gJiBzcGFjZXMgdG8gc2F2ZSBzcGFjZVxuICAvLyBTaG91bGQgYmUgc29tZXRoaW5nIGxpa2UgXFxwe1xcTFxcTlxcU1xcTX0gKFxcdyBidXQgd2l0aG91dCBgX2ApXG4gIHJlLnNyY19wc2V1ZG9fbGV0dGVyICAgICAgID0gJyg/Oig/IScgKyB0ZXh0X3NlcGFyYXRvcnMgKyAnfCcgKyByZS5zcmNfWlBDYyArICcpJyArIHJlLnNyY19BbnkgKyAnKSc7XG4gIC8vIFRoZSBzYW1lIGFzIGFib3RoZSBidXQgd2l0aG91dCBbMC05XVxuICAvLyB2YXIgc3JjX3BzZXVkb19sZXR0ZXJfbm9uX2QgPSAnKD86KD8hWzAtOV18JyArIHNyY19aUENjICsgJyknICsgc3JjX0FueSArICcpJztcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHJlLnNyY19pcDQgPVxuXG4gICAgJyg/OigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFxcXC4pezN9KDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPyknO1xuXG4gIC8vIFByb2hpYml0IGFueSBvZiBcIkAvW10oKVwiIGluIHVzZXIvcGFzcyB0byBhdm9pZCB3cm9uZyBkb21haW4gZmV0Y2guXG4gIHJlLnNyY19hdXRoICAgID0gJyg/Oig/Oig/IScgKyByZS5zcmNfWkNjICsgJ3xbQC9cXFxcW1xcXFxdKCldKS4pK0ApPyc7XG5cbiAgcmUuc3JjX3BvcnQgPVxuXG4gICAgJyg/OjooPzo2KD86WzAtNF1cXFxcZHszfXw1KD86WzAtNF1cXFxcZHsyfXw1KD86WzAtMl1cXFxcZHwzWzAtNV0pKSl8WzEtNV0/XFxcXGR7MSw0fSkpPyc7XG5cbiAgcmUuc3JjX2hvc3RfdGVybWluYXRvciA9XG5cbiAgICAnKD89JHwnICsgdGV4dF9zZXBhcmF0b3JzICsgJ3wnICsgcmUuc3JjX1pQQ2MgKyAnKScgK1xuICAgICcoPyEnICsgKG9wdHNbJy0tLSddID8gJy0oPyEtLSl8JyA6ICctfCcpICsgJ198OlxcXFxkfFxcXFwuLXxcXFxcLig/ISR8JyArIHJlLnNyY19aUENjICsgJykpJztcblxuICByZS5zcmNfcGF0aCA9XG5cbiAgICAnKD86JyArXG4gICAgICAnWy8/I10nICtcbiAgICAgICAgJyg/OicgK1xuICAgICAgICAgICcoPyEnICsgcmUuc3JjX1pDYyArICd8JyArIHRleHRfc2VwYXJhdG9ycyArICd8WygpW1xcXFxde30uLFwiXFwnPyFcXFxcLTtdKS58JyArXG4gICAgICAgICAgJ1xcXFxbKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFxcXFxdKS4pKlxcXFxdfCcgK1xuICAgICAgICAgICdcXFxcKCg/Oig/IScgKyByZS5zcmNfWkNjICsgJ3xbKV0pLikqXFxcXCl8JyArXG4gICAgICAgICAgJ1xcXFx7KD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFt9XSkuKSpcXFxcfXwnICtcbiAgICAgICAgICAnXFxcXFwiKD86KD8hJyArIHJlLnNyY19aQ2MgKyAnfFtcIl0pLikrXFxcXFwifCcgK1xuICAgICAgICAgIFwiXFxcXCcoPzooPyFcIiArIHJlLnNyY19aQ2MgKyBcInxbJ10pLikrXFxcXCd8XCIgK1xuICAgICAgICAgIFwiXFxcXCcoPz1cIiArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJ3xbLV0pfCcgKyAgLy8gYWxsb3cgYEknbV9raW5nYCBpZiBubyBwYWlyIGZvdW5kXG4gICAgICAgICAgJ1xcXFwuezIsfVthLXpBLVowLTklLyZdfCcgKyAvLyBnb29nbGUgaGFzIG1hbnkgZG90cyBpbiBcImdvb2dsZSBzZWFyY2hcIiBsaW5rcyAoIzY2LCAjODEpLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdpdGh1YiBoYXMgLi4uIGluIGNvbW1pdCByYW5nZSBsaW5rcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0cmljdCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gZW5nbGlzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gcGVyY2VudC1lbmNvZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLSBwYXJ0cyBvZiBmaWxlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtIHBhcmFtcyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1bnRpbCBtb3JlIGV4YW1wbGVzIGZvdW5kLlxuICAgICAgICAgICdcXFxcLig/IScgKyByZS5zcmNfWkNjICsgJ3xbLl18JCl8JyArXG4gICAgICAgICAgKG9wdHNbJy0tLSddID9cbiAgICAgICAgICAgICdcXFxcLSg/IS0tKD86W14tXXwkKSkoPzotKil8JyAvLyBgLS0tYCA9PiBsb25nIGRhc2gsIHRlcm1pbmF0ZVxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgJ1xcXFwtK3wnXG4gICAgICAgICAgKSArXG4gICAgICAgICAgJywoPyEnICsgcmUuc3JjX1pDYyArICd8JCl8JyArICAgICAgIC8vIGFsbG93IGAsLCxgIGluIHBhdGhzXG4gICAgICAgICAgJzsoPyEnICsgcmUuc3JjX1pDYyArICd8JCl8JyArICAgICAgIC8vIGFsbG93IGA7YCBpZiBub3QgZm9sbG93ZWQgYnkgc3BhY2UtbGlrZSBjaGFyXG4gICAgICAgICAgJ1xcXFwhKyg/IScgKyByZS5zcmNfWkNjICsgJ3xbIV18JCl8JyArICAvLyBhbGxvdyBgISEhYCBpbiBwYXRocywgYnV0IG5vdCBhdCB0aGUgZW5kXG4gICAgICAgICAgJ1xcXFw/KD8hJyArIHJlLnNyY19aQ2MgKyAnfFs/XXwkKScgK1xuICAgICAgICAnKSsnICtcbiAgICAgICd8XFxcXC8nICtcbiAgICAnKT8nO1xuXG4gIC8vIEFsbG93IGFueXRoaW5nIGluIG1hcmtkb3duIHNwZWMsIGZvcmJpZCBxdW90ZSAoXCIpIGF0IHRoZSBmaXJzdCBwb3NpdGlvblxuICAvLyBiZWNhdXNlIGVtYWlscyBlbmNsb3NlZCBpbiBxdW90ZXMgYXJlIGZhciBtb3JlIGNvbW1vblxuICByZS5zcmNfZW1haWxfbmFtZSA9XG5cbiAgICAnW1xcXFwtOzomPVxcXFwrXFxcXCQsXFxcXC5hLXpBLVowLTlfXVtcXFxcLTs6Jj1cXFxcK1xcXFwkLFxcXFxcIlxcXFwuYS16QS1aMC05X10qJztcblxuICByZS5zcmNfeG4gPVxuXG4gICAgJ3huLS1bYS16MC05XFxcXC1dezEsNTl9JztcblxuICAvLyBNb3JlIHRvIHJlYWQgYWJvdXQgZG9tYWluIG5hbWVzXG4gIC8vIGh0dHA6Ly9zZXJ2ZXJmYXVsdC5jb20vcXVlc3Rpb25zLzYzODI2MC9cblxuICByZS5zcmNfZG9tYWluX3Jvb3QgPVxuXG4gICAgLy8gQWxsb3cgbGV0dGVycyAmIGRpZ2l0cyAoaHR0cDovL3Rlc3QxKVxuICAgICcoPzonICtcbiAgICAgIHJlLnNyY194biArXG4gICAgICAnfCcgK1xuICAgICAgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnezEsNjN9JyArXG4gICAgJyknO1xuXG4gIHJlLnNyY19kb21haW4gPVxuXG4gICAgJyg/OicgK1xuICAgICAgcmUuc3JjX3huICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyknICtcbiAgICAgICd8JyArXG4gICAgICAnKD86JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyg/Oi18JyArIHJlLnNyY19wc2V1ZG9fbGV0dGVyICsgJyl7MCw2MX0nICsgcmUuc3JjX3BzZXVkb19sZXR0ZXIgKyAnKScgK1xuICAgICcpJztcblxuICByZS5zcmNfaG9zdCA9XG5cbiAgICAnKD86JyArXG4gICAgLy8gRG9uJ3QgbmVlZCBJUCBjaGVjaywgYmVjYXVzZSBkaWdpdHMgYXJlIGFscmVhZHkgYWxsb3dlZCBpbiBub3JtYWwgZG9tYWluIG5hbWVzXG4gICAgLy8gICBzcmNfaXA0ICtcbiAgICAvLyAnfCcgK1xuICAgICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikqJyArIHJlLnNyY19kb21haW4vKl9yb290Ki8gKyAnKScgK1xuICAgICcpJztcblxuICByZS50cGxfaG9zdF9mdXp6eSA9XG5cbiAgICAnKD86JyArXG4gICAgICByZS5zcmNfaXA0ICtcbiAgICAnfCcgK1xuICAgICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikrKD86JVRMRFMlKSknICtcbiAgICAnKSc7XG5cbiAgcmUudHBsX2hvc3Rfbm9faXBfZnV6enkgPVxuXG4gICAgJyg/Oig/Oig/OicgKyByZS5zcmNfZG9tYWluICsgJylcXFxcLikrKD86JVRMRFMlKSknO1xuXG4gIHJlLnNyY19ob3N0X3N0cmljdCA9XG5cbiAgICByZS5zcmNfaG9zdCArIHJlLnNyY19ob3N0X3Rlcm1pbmF0b3I7XG5cbiAgcmUudHBsX2hvc3RfZnV6enlfc3RyaWN0ID1cblxuICAgIHJlLnRwbF9ob3N0X2Z1enp5ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS5zcmNfaG9zdF9wb3J0X3N0cmljdCA9XG5cbiAgICByZS5zcmNfaG9zdCArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS50cGxfaG9zdF9wb3J0X2Z1enp5X3N0cmljdCA9XG5cbiAgICByZS50cGxfaG9zdF9mdXp6eSArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuICByZS50cGxfaG9zdF9wb3J0X25vX2lwX2Z1enp5X3N0cmljdCA9XG5cbiAgICByZS50cGxfaG9zdF9ub19pcF9mdXp6eSArIHJlLnNyY19wb3J0ICsgcmUuc3JjX2hvc3RfdGVybWluYXRvcjtcblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIE1haW4gcnVsZXNcblxuICAvLyBSdWRlIHRlc3QgZnV6enkgbGlua3MgYnkgaG9zdCwgZm9yIHF1aWNrIGRlbnlcbiAgcmUudHBsX2hvc3RfZnV6enlfdGVzdCA9XG5cbiAgICAnbG9jYWxob3N0fHd3d1xcXFwufFxcXFwuXFxcXGR7MSwzfVxcXFwufCg/OlxcXFwuKD86JVRMRFMlKSg/OicgKyByZS5zcmNfWlBDYyArICd8PnwkKSknO1xuXG4gIHJlLnRwbF9lbWFpbF9mdXp6eSA9XG5cbiAgICAgICcoXnwnICsgdGV4dF9zZXBhcmF0b3JzICsgJ3xcInxcXFxcKHwnICsgcmUuc3JjX1pDYyArICcpJyArXG4gICAgICAnKCcgKyByZS5zcmNfZW1haWxfbmFtZSArICdAJyArIHJlLnRwbF9ob3N0X2Z1enp5X3N0cmljdCArICcpJztcblxuICByZS50cGxfbGlua19mdXp6eSA9XG4gICAgICAvLyBGdXp6eSBsaW5rIGNhbid0IGJlIHByZXBlbmRlZCB3aXRoIC46L1xcLSBhbmQgbm9uIHB1bmN0dWF0aW9uLlxuICAgICAgLy8gYnV0IGNhbiBzdGFydCB3aXRoID4gKG1hcmtkb3duIGJsb2NrcXVvdGUpXG4gICAgICAnKF58KD8hWy46L1xcXFwtX0BdKSg/OlskKzw9Pl5gfFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKScgK1xuICAgICAgJygoPyFbJCs8PT5eYHxcXHVmZjVjXSknICsgcmUudHBsX2hvc3RfcG9ydF9mdXp6eV9zdHJpY3QgKyByZS5zcmNfcGF0aCArICcpJztcblxuICByZS50cGxfbGlua19ub19pcF9mdXp6eSA9XG4gICAgICAvLyBGdXp6eSBsaW5rIGNhbid0IGJlIHByZXBlbmRlZCB3aXRoIC46L1xcLSBhbmQgbm9uIHB1bmN0dWF0aW9uLlxuICAgICAgLy8gYnV0IGNhbiBzdGFydCB3aXRoID4gKG1hcmtkb3duIGJsb2NrcXVvdGUpXG4gICAgICAnKF58KD8hWy46L1xcXFwtX0BdKSg/OlskKzw9Pl5gfFxcdWZmNWNdfCcgKyByZS5zcmNfWlBDYyArICcpKScgK1xuICAgICAgJygoPyFbJCs8PT5eYHxcXHVmZjVjXSknICsgcmUudHBsX2hvc3RfcG9ydF9ub19pcF9mdXp6eV9zdHJpY3QgKyByZS5zcmNfcGF0aCArICcpJztcblxuICByZXR1cm4gcmU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvJyk7XG4iLCIvLyBIVE1MNSBlbnRpdGllcyBtYXA6IHsgbmFtZSAtPiB1dGYxNnN0cmluZyB9XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludCBxdW90ZXM6MCovXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2VudGl0aWVzL2xpYi9tYXBzL2VudGl0aWVzLmpzb24nKTtcbiIsIi8vIExpc3Qgb2YgdmFsaWQgaHRtbCBibG9ja3MgbmFtZXMsIGFjY29ydGluZyB0byBjb21tb25tYXJrIHNwZWNcbi8vIGh0dHA6Ly9qZ20uZ2l0aHViLmlvL0NvbW1vbk1hcmsvc3BlYy5odG1sI2h0bWwtYmxvY2tzXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdiYXNlJyxcbiAgJ2Jhc2Vmb250JyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdjYXB0aW9uJyxcbiAgJ2NlbnRlcicsXG4gICdjb2wnLFxuICAnY29sZ3JvdXAnLFxuICAnZGQnLFxuICAnZGV0YWlscycsXG4gICdkaWFsb2cnLFxuICAnZGlyJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdmcmFtZScsXG4gICdmcmFtZXNldCcsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkJyxcbiAgJ2hlYWRlcicsXG4gICdocicsXG4gICdodG1sJyxcbiAgJ2lmcmFtZScsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbGluaycsXG4gICdtYWluJyxcbiAgJ21lbnUnLFxuICAnbWVudWl0ZW0nLFxuICAnbmF2JyxcbiAgJ25vZnJhbWVzJyxcbiAgJ29sJyxcbiAgJ29wdGdyb3VwJyxcbiAgJ29wdGlvbicsXG4gICdwJyxcbiAgJ3BhcmFtJyxcbiAgJ3NlY3Rpb24nLFxuICAnc291cmNlJyxcbiAgJ3N1bW1hcnknLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGl0bGUnLFxuICAndHInLFxuICAndHJhY2snLFxuICAndWwnXG5dO1xuIiwiLy8gUmVnZXhwcyB0byBtYXRjaCBodG1sIGVsZW1lbnRzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGF0dHJfbmFtZSAgICAgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonO1xuXG52YXIgdW5xdW90ZWQgICAgICA9ICdbXlwiXFwnPTw+YFxcXFx4MDAtXFxcXHgyMF0rJztcbnZhciBzaW5nbGVfcXVvdGVkID0gXCInW14nXSonXCI7XG52YXIgZG91YmxlX3F1b3RlZCA9ICdcIlteXCJdKlwiJztcblxudmFyIGF0dHJfdmFsdWUgID0gJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZV9xdW90ZWQgKyAnfCcgKyBkb3VibGVfcXVvdGVkICsgJyknO1xuXG52YXIgYXR0cmlidXRlICAgPSAnKD86XFxcXHMrJyArIGF0dHJfbmFtZSArICcoPzpcXFxccyo9XFxcXHMqJyArIGF0dHJfdmFsdWUgKyAnKT8pJztcblxudmFyIG9wZW5fdGFnICAgID0gJzxbQS1aYS16XVtBLVphLXowLTlcXFxcLV0qJyArIGF0dHJpYnV0ZSArICcqXFxcXHMqXFxcXC8/Pic7XG5cbnZhciBjbG9zZV90YWcgICA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPic7XG52YXIgY29tbWVudCAgICAgPSAnPCEtLS0tPnw8IS0tKD86LT9bXj4tXSkoPzotP1teLV0pKi0tPic7XG52YXIgcHJvY2Vzc2luZyAgPSAnPFs/XVtcXFxcc1xcXFxTXSo/Wz9dPic7XG52YXIgZGVjbGFyYXRpb24gPSAnPCFbQS1aXStcXFxccytbXj5dKj4nO1xudmFyIGNkYXRhICAgICAgID0gJzwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPic7XG5cbnZhciBIVE1MX1RBR19SRSA9IG5ldyBSZWdFeHAoJ14oPzonICsgb3Blbl90YWcgKyAnfCcgKyBjbG9zZV90YWcgKyAnfCcgKyBjb21tZW50ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHByb2Nlc3NpbmcgKyAnfCcgKyBkZWNsYXJhdGlvbiArICd8JyArIGNkYXRhICsgJyknKTtcbnZhciBIVE1MX09QRU5fQ0xPU0VfVEFHX1JFID0gbmV3IFJlZ0V4cCgnXig/OicgKyBvcGVuX3RhZyArICd8JyArIGNsb3NlX3RhZyArICcpJyk7XG5cbm1vZHVsZS5leHBvcnRzLkhUTUxfVEFHX1JFID0gSFRNTF9UQUdfUkU7XG5tb2R1bGUuZXhwb3J0cy5IVE1MX09QRU5fQ0xPU0VfVEFHX1JFID0gSFRNTF9PUEVOX0NMT1NFX1RBR19SRTtcbiIsIi8vIFV0aWxpdGllc1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBfY2xhc3Mob2JqKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTsgfVxuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBTdHJpbmddJzsgfVxuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gaGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBfaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSk7XG59XG5cbi8vIE1lcmdlIG9iamVjdHNcbi8vXG5mdW5jdGlvbiBhc3NpZ24ob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKCFzb3VyY2UpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc291cmNlICsgJ211c3QgYmUgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIG9ialtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbi8vIFJlbW92ZSBlbGVtZW50IGZyb20gYXJyYXkgYW5kIHB1dCBhbm90aGVyIGFycmF5IGF0IHRob3NlIHBvc2l0aW9uLlxuLy8gVXNlZnVsIGZvciBzb21lIG9wZXJhdGlvbnMgd2l0aCB0b2tlbnNcbmZ1bmN0aW9uIGFycmF5UmVwbGFjZUF0KHNyYywgcG9zLCBuZXdFbGVtZW50cykge1xuICByZXR1cm4gW10uY29uY2F0KHNyYy5zbGljZSgwLCBwb3MpLCBuZXdFbGVtZW50cywgc3JjLnNsaWNlKHBvcyArIDEpKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNWYWxpZEVudGl0eUNvZGUoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICAvLyBicm9rZW4gc2VxdWVuY2VcbiAgaWYgKGMgPj0gMHhEODAwICYmIGMgPD0gMHhERkZGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBuZXZlciB1c2VkXG4gIGlmIChjID49IDB4RkREMCAmJiBjIDw9IDB4RkRFRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKChjICYgMHhGRkZGKSA9PT0gMHhGRkZGIHx8IChjICYgMHhGRkZGKSA9PT0gMHhGRkZFKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBjb250cm9sIGNvZGVzXG4gIGlmIChjID49IDB4MDAgJiYgYyA8PSAweDA4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA9PT0gMHgwQikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPj0gMHgwRSAmJiBjIDw9IDB4MUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID49IDB4N0YgJiYgYyA8PSAweDlGKSB7IHJldHVybiBmYWxzZTsgfVxuICAvLyBvdXQgb2YgcmFuZ2VcbiAgaWYgKGMgPiAweDEwRkZGRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoYykge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICBpZiAoYyA+IDB4ZmZmZikge1xuICAgIGMgLT0gMHgxMDAwMDtcbiAgICB2YXIgc3Vycm9nYXRlMSA9IDB4ZDgwMCArIChjID4+IDEwKSxcbiAgICAgICAgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjICYgMHgzZmYpO1xuXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG4gIH1cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG59XG5cblxudmFyIFVORVNDQVBFX01EX1JFICA9IC9cXFxcKFshXCIjJCUmJygpKissXFwtLlxcLzo7PD0+P0BbXFxcXFxcXV5fYHt8fX5dKS9nO1xudmFyIEVOVElUWV9SRSAgICAgICA9IC8mKFthLXojXVthLXowLTldezEsMzF9KTsvZ2k7XG52YXIgVU5FU0NBUEVfQUxMX1JFID0gbmV3IFJlZ0V4cChVTkVTQ0FQRV9NRF9SRS5zb3VyY2UgKyAnfCcgKyBFTlRJVFlfUkUuc291cmNlLCAnZ2knKTtcblxudmFyIERJR0lUQUxfRU5USVRZX1RFU1RfUkUgPSAvXiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpL2k7XG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMnKTtcblxuZnVuY3Rpb24gcmVwbGFjZUVudGl0eVBhdHRlcm4obWF0Y2gsIG5hbWUpIHtcbiAgdmFyIGNvZGUgPSAwO1xuXG4gIGlmIChoYXMoZW50aXRpZXMsIG5hbWUpKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzW25hbWVdO1xuICB9XG5cbiAgaWYgKG5hbWUuY2hhckNvZGVBdCgwKSA9PT0gMHgyMy8qICMgKi8gJiYgRElHSVRBTF9FTlRJVFlfVEVTVF9SRS50ZXN0KG5hbWUpKSB7XG4gICAgY29kZSA9IG5hbWVbMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnID9cbiAgICAgIHBhcnNlSW50KG5hbWUuc2xpY2UoMiksIDE2KSA6IHBhcnNlSW50KG5hbWUuc2xpY2UoMSksIDEwKTtcblxuICAgIGlmIChpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG4vKmZ1bmN0aW9uIHJlcGxhY2VFbnRpdGllcyhzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCcmJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoRU5USVRZX1JFLCByZXBsYWNlRW50aXR5UGF0dGVybik7XG59Ki9cblxuZnVuY3Rpb24gdW5lc2NhcGVNZChzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCdcXFxcJykgPCAwKSB7IHJldHVybiBzdHI7IH1cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX01EX1JFLCAnJDEnKTtcbn1cblxuZnVuY3Rpb24gdW5lc2NhcGVBbGwoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCAmJiBzdHIuaW5kZXhPZignJicpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFVORVNDQVBFX0FMTF9SRSwgZnVuY3Rpb24gKG1hdGNoLCBlc2NhcGVkLCBlbnRpdHkpIHtcbiAgICBpZiAoZXNjYXBlZCkgeyByZXR1cm4gZXNjYXBlZDsgfVxuICAgIHJldHVybiByZXBsYWNlRW50aXR5UGF0dGVybihtYXRjaCwgZW50aXR5KTtcbiAgfSk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBIVE1MX0VTQ0FQRV9URVNUX1JFID0gL1smPD5cIl0vO1xudmFyIEhUTUxfRVNDQVBFX1JFUExBQ0VfUkUgPSAvWyY8PlwiXS9nO1xudmFyIEhUTUxfUkVQTEFDRU1FTlRTID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90Oydcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VVbnNhZmVDaGFyKGNoKSB7XG4gIHJldHVybiBIVE1MX1JFUExBQ0VNRU5UU1tjaF07XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gIGlmIChIVE1MX0VTQ0FQRV9URVNUX1JFLnRlc3Qoc3RyKSkge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFLCByZXBsYWNlVW5zYWZlQ2hhcik7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIFJFR0VYUF9FU0NBUEVfUkUgPSAvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nO1xuXG5mdW5jdGlvbiBlc2NhcGVSRShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYUF9FU0NBUEVfUkUsICdcXFxcJCYnKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNTcGFjZShjb2RlKSB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwOTpcbiAgICBjYXNlIDB4MjA6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFpzICh1bmljb2RlIGNsYXNzKSB8fCBbXFx0XFxmXFx2XFxyXFxuXVxuZnVuY3Rpb24gaXNXaGl0ZVNwYWNlKGNvZGUpIHtcbiAgaWYgKGNvZGUgPj0gMHgyMDAwICYmIGNvZGUgPD0gMHgyMDBBKSB7IHJldHVybiB0cnVlOyB9XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMHgwOTogLy8gXFx0XG4gICAgY2FzZSAweDBBOiAvLyBcXG5cbiAgICBjYXNlIDB4MEI6IC8vIFxcdlxuICAgIGNhc2UgMHgwQzogLy8gXFxmXG4gICAgY2FzZSAweDBEOiAvLyBcXHJcbiAgICBjYXNlIDB4MjA6XG4gICAgY2FzZSAweEEwOlxuICAgIGNhc2UgMHgxNjgwOlxuICAgIGNhc2UgMHgyMDJGOlxuICAgIGNhc2UgMHgyMDVGOlxuICAgIGNhc2UgMHgzMDAwOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKmVzbGludC1kaXNhYmxlIG1heC1sZW4qL1xudmFyIFVOSUNPREVfUFVOQ1RfUkUgPSByZXF1aXJlKCd1Yy5taWNyby9jYXRlZ29yaWVzL1AvcmVnZXgnKTtcblxuLy8gQ3VycmVudGx5IHdpdGhvdXQgYXN0cmFsIGNoYXJhY3RlcnMgc3VwcG9ydC5cbmZ1bmN0aW9uIGlzUHVuY3RDaGFyKGNoKSB7XG4gIHJldHVybiBVTklDT0RFX1BVTkNUX1JFLnRlc3QoY2gpO1xufVxuXG5cbi8vIE1hcmtkb3duIEFTQ0lJIHB1bmN0dWF0aW9uIGNoYXJhY3RlcnMuXG4vL1xuLy8gISwgXCIsICMsICQsICUsICYsICcsICgsICksICosICssICwsIC0sIC4sIC8sIDosIDssIDwsID0sID4sID8sIEAsIFssIFxcLCBdLCBeLCBfLCBgLCB7LCB8LCB9LCBvciB+XG4vLyBodHRwOi8vc3BlYy5jb21tb25tYXJrLm9yZy8wLjE1LyNhc2NpaS1wdW5jdHVhdGlvbi1jaGFyYWN0ZXJcbi8vXG4vLyBEb24ndCBjb25mdXNlIHdpdGggdW5pY29kZSBwdW5jdHVhdGlvbiAhISEgSXQgbGFja3Mgc29tZSBjaGFycyBpbiBhc2NpaSByYW5nZS5cbi8vXG5mdW5jdGlvbiBpc01kQXNjaWlQdW5jdChjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDIxLyogISAqLzpcbiAgICBjYXNlIDB4MjIvKiBcIiAqLzpcbiAgICBjYXNlIDB4MjMvKiAjICovOlxuICAgIGNhc2UgMHgyNC8qICQgKi86XG4gICAgY2FzZSAweDI1LyogJSAqLzpcbiAgICBjYXNlIDB4MjYvKiAmICovOlxuICAgIGNhc2UgMHgyNy8qICcgKi86XG4gICAgY2FzZSAweDI4LyogKCAqLzpcbiAgICBjYXNlIDB4MjkvKiApICovOlxuICAgIGNhc2UgMHgyQS8qICogKi86XG4gICAgY2FzZSAweDJCLyogKyAqLzpcbiAgICBjYXNlIDB4MkMvKiAsICovOlxuICAgIGNhc2UgMHgyRC8qIC0gKi86XG4gICAgY2FzZSAweDJFLyogLiAqLzpcbiAgICBjYXNlIDB4MkYvKiAvICovOlxuICAgIGNhc2UgMHgzQS8qIDogKi86XG4gICAgY2FzZSAweDNCLyogOyAqLzpcbiAgICBjYXNlIDB4M0MvKiA8ICovOlxuICAgIGNhc2UgMHgzRC8qID0gKi86XG4gICAgY2FzZSAweDNFLyogPiAqLzpcbiAgICBjYXNlIDB4M0YvKiA/ICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUMvKiBcXCAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVGLyogXyAqLzpcbiAgICBjYXNlIDB4NjAvKiBgICovOlxuICAgIGNhc2UgMHg3Qi8qIHsgKi86XG4gICAgY2FzZSAweDdDLyogfCAqLzpcbiAgICBjYXNlIDB4N0QvKiB9ICovOlxuICAgIGNhc2UgMHg3RS8qIH4gKi86XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIEhlcGxlciB0byB1bmlmeSBbcmVmZXJlbmNlIGxhYmVsc10uXG4vL1xuZnVuY3Rpb24gbm9ybWFsaXplUmVmZXJlbmNlKHN0cikge1xuICAvLyBUcmltIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG4gIC8vXG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuXG4gIC8vIEluIG5vZGUgdjEwICfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nLCB3aGljaCBpcyBwcmVzdW1lZCB0byBiZSBhIGJ1Z1xuICAvLyBmaXhlZCBpbiB2MTIgKGNvdWxkbid0IGZpbmQgYW55IGRldGFpbHMpLlxuICAvL1xuICAvLyBTbyB0cmVhdCB0aGlzIG9uZSBhcyBhIHNwZWNpYWwgY2FzZVxuICAvLyAocmVtb3ZlIHRoaXMgd2hlbiBub2RlIHYxMCBpcyBubyBsb25nZXIgc3VwcG9ydGVkKS5cbiAgLy9cbiAgaWYgKCfhup4nLnRvTG93ZXJDYXNlKCkgPT09ICfhub4nKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL+G6ni9nLCAnw58nKTtcbiAgfVxuXG4gIC8vIC50b0xvd2VyQ2FzZSgpLnRvVXBwZXJDYXNlKCkgc2hvdWxkIGdldCByaWQgb2YgYWxsIGRpZmZlcmVuY2VzXG4gIC8vIGJldHdlZW4gbGV0dGVyIHZhcmlhbnRzLlxuICAvL1xuICAvLyBTaW1wbGUgLnRvTG93ZXJDYXNlKCkgZG9lc24ndCBub3JtYWxpemUgMTI1IGNvZGUgcG9pbnRzIGNvcnJlY3RseSxcbiAgLy8gYW5kIC50b1VwcGVyQ2FzZSBkb2Vzbid0IG5vcm1hbGl6ZSA2IG9mIHRoZW0gKGxpc3Qgb2YgZXhjZXB0aW9uczpcbiAgLy8gxLAsIM+0LCDhup4sIOKEpiwg4oSqLCDihKsgLSB0aG9zZSBhcmUgYWxyZWFkeSB1cHBlcmNhc2VkLCBidXQgaGF2ZSBkaWZmZXJlbnRseVxuICAvLyB1cHBlcmNhc2VkIHZlcnNpb25zKS5cbiAgLy9cbiAgLy8gSGVyZSdzIGFuIGV4YW1wbGUgc2hvd2luZyBob3cgaXQgaGFwcGVucy4gTGV0cyB0YWtlIGdyZWVrIGxldHRlciBvbWVnYTpcbiAgLy8gdXBwZXJjYXNlIFUrMDM5OCAozpgpLCBVKzAzZjQgKM+0KSBhbmQgbG93ZXJjYXNlIFUrMDNiOCAozrgpLCBVKzAzZDEgKM+RKVxuICAvL1xuICAvLyBVbmljb2RlIGVudHJpZXM6XG4gIC8vIDAzOTg7R1JFRUsgQ0FQSVRBTCBMRVRURVIgVEhFVEE7THU7MDtMOzs7OztOOzs7OzAzQjg7XG4gIC8vIDAzQjg7R1JFRUsgU01BTEwgTEVUVEVSIFRIRVRBO0xsOzA7TDs7Ozs7Tjs7OzAzOTg7OzAzOThcbiAgLy8gMDNEMTtHUkVFSyBUSEVUQSBTWU1CT0w7TGw7MDtMOzxjb21wYXQ+IDAzQjg7Ozs7TjtHUkVFSyBTTUFMTCBMRVRURVIgU0NSSVBUIFRIRVRBOzswMzk4OzswMzk4XG4gIC8vIDAzRjQ7R1JFRUsgQ0FQSVRBTCBUSEVUQSBTWU1CT0w7THU7MDtMOzxjb21wYXQ+IDAzOTg7Ozs7Tjs7OzswM0I4O1xuICAvL1xuICAvLyBDYXNlLWluc2Vuc2l0aXZlIGNvbXBhcmlzb24gc2hvdWxkIHRyZWF0IGFsbCBvZiB0aGVtIGFzIGVxdWl2YWxlbnQuXG4gIC8vXG4gIC8vIEJ1dCAudG9Mb3dlckNhc2UoKSBkb2Vzbid0IGNoYW5nZSDPkSAoaXQncyBhbHJlYWR5IGxvd2VyY2FzZSksXG4gIC8vIGFuZCAudG9VcHBlckNhc2UoKSBkb2Vzbid0IGNoYW5nZSDPtCAoYWxyZWFkeSB1cHBlcmNhc2UpLlxuICAvL1xuICAvLyBBcHBseWluZyBmaXJzdCBsb3dlciB0aGVuIHVwcGVyIGNhc2Ugbm9ybWFsaXplcyBhbnkgY2hhcmFjdGVyOlxuICAvLyAnXFx1MDM5OFxcdTAzZjRcXHUwM2I4XFx1MDNkMScudG9Mb3dlckNhc2UoKS50b1VwcGVyQ2FzZSgpID09PSAnXFx1MDM5OFxcdTAzOThcXHUwMzk4XFx1MDM5OCdcbiAgLy9cbiAgLy8gTm90ZTogdGhpcyBpcyBlcXVpdmFsZW50IHRvIHVuaWNvZGUgY2FzZSBmb2xkaW5nOyB1bmljb2RlIG5vcm1hbGl6YXRpb25cbiAgLy8gaXMgYSBkaWZmZXJlbnQgc3RlcCB0aGF0IGlzIG5vdCByZXF1aXJlZCBoZXJlLlxuICAvL1xuICAvLyBGaW5hbCByZXN1bHQgc2hvdWxkIGJlIHVwcGVyY2FzZWQsIGJlY2F1c2UgaXQncyBsYXRlciBzdG9yZWQgaW4gYW4gb2JqZWN0XG4gIC8vICh0aGlzIGF2b2lkIGEgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIG1lbWJlcnMsXG4gIC8vIG1vc3Qgbm90YWJseSwgYF9fcHJvdG9fX2ApXG4gIC8vXG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS50b1VwcGVyQ2FzZSgpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBSZS1leHBvcnQgbGlicmFyaWVzIGNvbW1vbmx5IHVzZWQgaW4gYm90aCBtYXJrZG93bi1pdCBhbmQgaXRzIHBsdWdpbnMsXG4vLyBzbyBwbHVnaW5zIHdvbid0IGhhdmUgdG8gZGVwZW5kIG9uIHRoZW0gZXhwbGljaXRseSwgd2hpY2ggcmVkdWNlcyB0aGVpclxuLy8gYnVuZGxlZCBzaXplIChlLmcuIGEgYnJvd3NlciBidWlsZCkuXG4vL1xuZXhwb3J0cy5saWIgICAgICAgICAgICAgICAgID0ge307XG5leHBvcnRzLmxpYi5tZHVybCAgICAgICAgICAgPSByZXF1aXJlKCdtZHVybCcpO1xuZXhwb3J0cy5saWIudWNtaWNybyAgICAgICAgID0gcmVxdWlyZSgndWMubWljcm8nKTtcblxuZXhwb3J0cy5hc3NpZ24gICAgICAgICAgICAgID0gYXNzaWduO1xuZXhwb3J0cy5pc1N0cmluZyAgICAgICAgICAgID0gaXNTdHJpbmc7XG5leHBvcnRzLmhhcyAgICAgICAgICAgICAgICAgPSBoYXM7XG5leHBvcnRzLnVuZXNjYXBlTWQgICAgICAgICAgPSB1bmVzY2FwZU1kO1xuZXhwb3J0cy51bmVzY2FwZUFsbCAgICAgICAgID0gdW5lc2NhcGVBbGw7XG5leHBvcnRzLmlzVmFsaWRFbnRpdHlDb2RlICAgPSBpc1ZhbGlkRW50aXR5Q29kZTtcbmV4cG9ydHMuZnJvbUNvZGVQb2ludCAgICAgICA9IGZyb21Db2RlUG9pbnQ7XG4vLyBleHBvcnRzLnJlcGxhY2VFbnRpdGllcyAgICAgPSByZXBsYWNlRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZUh0bWwgICAgICAgICAgPSBlc2NhcGVIdG1sO1xuZXhwb3J0cy5hcnJheVJlcGxhY2VBdCAgICAgID0gYXJyYXlSZXBsYWNlQXQ7XG5leHBvcnRzLmlzU3BhY2UgICAgICAgICAgICAgPSBpc1NwYWNlO1xuZXhwb3J0cy5pc1doaXRlU3BhY2UgICAgICAgID0gaXNXaGl0ZVNwYWNlO1xuZXhwb3J0cy5pc01kQXNjaWlQdW5jdCAgICAgID0gaXNNZEFzY2lpUHVuY3Q7XG5leHBvcnRzLmlzUHVuY3RDaGFyICAgICAgICAgPSBpc1B1bmN0Q2hhcjtcbmV4cG9ydHMuZXNjYXBlUkUgICAgICAgICAgICA9IGVzY2FwZVJFO1xuZXhwb3J0cy5ub3JtYWxpemVSZWZlcmVuY2UgID0gbm9ybWFsaXplUmVmZXJlbmNlO1xuIiwiLy8gSnVzdCBhIHNob3J0Y3V0IGZvciBidWxrIGV4cG9ydFxuJ3VzZSBzdHJpY3QnO1xuXG5cbmV4cG9ydHMucGFyc2VMaW5rTGFiZWwgICAgICAgPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfbGFiZWwnKTtcbmV4cG9ydHMucGFyc2VMaW5rRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfZGVzdGluYXRpb24nKTtcbmV4cG9ydHMucGFyc2VMaW5rVGl0bGUgICAgICAgPSByZXF1aXJlKCcuL3BhcnNlX2xpbmtfdGl0bGUnKTtcbiIsIi8vIFBhcnNlIGxpbmsgZGVzdGluYXRpb25cbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHVuZXNjYXBlQWxsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVBbGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtEZXN0aW5hdGlvbihzdHIsIHBvcywgbWF4KSB7XG4gIHZhciBjb2RlLCBsZXZlbCxcbiAgICAgIGxpbmVzID0gMCxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBvazogZmFsc2UsXG4gICAgICAgIHBvczogMCxcbiAgICAgICAgbGluZXM6IDAsXG4gICAgICAgIHN0cjogJydcbiAgICAgIH07XG5cbiAgaWYgKHN0ci5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0MgLyogPCAqLykge1xuICAgIHBvcysrO1xuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIGNvZGUgPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgPT09IDB4MEEgLyogXFxuICovKSB7IHJldHVybiByZXN1bHQ7IH1cbiAgICAgIGlmIChjb2RlID09PSAweDNDIC8qIDwgKi8pIHsgcmV0dXJuIHJlc3VsdDsgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4M0UgLyogPiAqLykge1xuICAgICAgICByZXN1bHQucG9zID0gcG9zICsgMTtcbiAgICAgICAgcmVzdWx0LnN0ciA9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCArIDEsIHBvcykpO1xuICAgICAgICByZXN1bHQub2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgICBwb3MgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHBvcysrO1xuICAgIH1cblxuICAgIC8vIG5vIGNsb3NpbmcgJz4nXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIGJlIC4uLiB9IGVsc2UgeyAuLi4gYnJhbmNoXG5cbiAgbGV2ZWwgPSAwO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyMCkgeyBicmVhazsgfVxuXG4gICAgLy8gYXNjaWkgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAweDIwIHx8IGNvZGUgPT09IDB4N0YpIHsgYnJlYWs7IH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChwb3MgKyAxKSA9PT0gMHgyMCkgeyBicmVhazsgfVxuICAgICAgcG9zICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOCAvKiAoICovKSB7XG4gICAgICBsZXZlbCsrO1xuICAgICAgaWYgKGxldmVsID4gMzIpIHsgcmV0dXJuIHJlc3VsdDsgfVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAweDI5IC8qICkgKi8pIHtcbiAgICAgIGlmIChsZXZlbCA9PT0gMCkgeyBicmVhazsgfVxuICAgICAgbGV2ZWwtLTtcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gcG9zKSB7IHJldHVybiByZXN1bHQ7IH1cbiAgaWYgKGxldmVsICE9PSAwKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICByZXN1bHQuc3RyID0gdW5lc2NhcGVBbGwoc3RyLnNsaWNlKHN0YXJ0LCBwb3MpKTtcbiAgcmVzdWx0LmxpbmVzID0gbGluZXM7XG4gIHJlc3VsdC5wb3MgPSBwb3M7XG4gIHJlc3VsdC5vayA9IHRydWU7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gUGFyc2UgbGluayBsYWJlbFxuLy9cbi8vIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGZpcnN0IGNoYXJhY3RlciAoXCJbXCIpIGFscmVhZHkgbWF0Y2hlcztcbi8vIHJldHVybnMgdGhlIGVuZCBvZiB0aGUgbGFiZWxcbi8vXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXJ0LCBkaXNhYmxlTmVzdGVkKSB7XG4gIHZhciBsZXZlbCwgZm91bmQsIG1hcmtlciwgcHJldlBvcyxcbiAgICAgIGxhYmVsRW5kID0gLTEsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3M7XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuICBsZXZlbCA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyA8IG1heCkge1xuICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyk7XG4gICAgaWYgKG1hcmtlciA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldlBvcyA9IHN0YXRlLnBvcztcbiAgICBzdGF0ZS5tZC5pbmxpbmUuc2tpcFRva2VuKHN0YXRlKTtcbiAgICBpZiAobWFya2VyID09PSAweDVCIC8qIFsgKi8pIHtcbiAgICAgIGlmIChwcmV2UG9zID09PSBzdGF0ZS5wb3MgLSAxKSB7XG4gICAgICAgIC8vIGluY3JlYXNlIGxldmVsIGlmIHdlIGZpbmQgdGV4dCBgW2AsIHdoaWNoIGlzIG5vdCBhIHBhcnQgb2YgYW55IHRva2VuXG4gICAgICAgIGxldmVsKys7XG4gICAgICB9IGVsc2UgaWYgKGRpc2FibGVOZXN0ZWQpIHtcbiAgICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgbGFiZWxFbmQgPSBzdGF0ZS5wb3M7XG4gIH1cblxuICAvLyByZXN0b3JlIG9sZCBzdGF0ZVxuICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG5cbiAgcmV0dXJuIGxhYmVsRW5kO1xufTtcbiIsIi8vIFBhcnNlIGxpbmsgdGl0bGVcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIHVuZXNjYXBlQWxsID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVBbGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtUaXRsZShzdHIsIHBvcywgbWF4KSB7XG4gIHZhciBjb2RlLFxuICAgICAgbWFya2VyLFxuICAgICAgbGluZXMgPSAwLFxuICAgICAgc3RhcnQgPSBwb3MsXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG9rOiBmYWxzZSxcbiAgICAgICAgcG9zOiAwLFxuICAgICAgICBsaW5lczogMCxcbiAgICAgICAgc3RyOiAnJ1xuICAgICAgfTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gcmVzdWx0OyB9XG5cbiAgbWFya2VyID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDIyIC8qIFwiICovICYmIG1hcmtlciAhPT0gMHgyNyAvKiAnICovICYmIG1hcmtlciAhPT0gMHgyOCAvKiAoICovKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICBwb3MrKztcblxuICAvLyBpZiBvcGVuaW5nIG1hcmtlciBpcyBcIihcIiwgc3dpdGNoIGl0IHRvIGNsb3NpbmcgbWFya2VyIFwiKVwiXG4gIGlmIChtYXJrZXIgPT09IDB4MjgpIHsgbWFya2VyID0gMHgyOTsgfVxuXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjb2RlID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICByZXN1bHQucG9zID0gcG9zICsgMTtcbiAgICAgIHJlc3VsdC5saW5lcyA9IGxpbmVzO1xuICAgICAgcmVzdWx0LnN0ciA9IHVuZXNjYXBlQWxsKHN0ci5zbGljZShzdGFydCArIDEsIHBvcykpO1xuICAgICAgcmVzdWx0Lm9rID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDI4IC8qICggKi8gJiYgbWFya2VyID09PSAweDI5IC8qICkgKi8pIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDBBKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHg1QyAvKiBcXCAqLyAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgICBwb3MrKztcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9zKys7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIE1haW4gcGFyc2VyIGNsYXNzXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgdXRpbHMgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKTtcbnZhciBoZWxwZXJzICAgICAgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBSZW5kZXJlciAgICAgPSByZXF1aXJlKCcuL3JlbmRlcmVyJyk7XG52YXIgUGFyc2VyQ29yZSAgID0gcmVxdWlyZSgnLi9wYXJzZXJfY29yZScpO1xudmFyIFBhcnNlckJsb2NrICA9IHJlcXVpcmUoJy4vcGFyc2VyX2Jsb2NrJyk7XG52YXIgUGFyc2VySW5saW5lID0gcmVxdWlyZSgnLi9wYXJzZXJfaW5saW5lJyk7XG52YXIgTGlua2lmeUl0ICAgID0gcmVxdWlyZSgnbGlua2lmeS1pdCcpO1xudmFyIG1kdXJsICAgICAgICA9IHJlcXVpcmUoJ21kdXJsJyk7XG52YXIgcHVueWNvZGUgICAgID0gcmVxdWlyZSgncHVueWNvZGUnKTtcblxuXG52YXIgY29uZmlnID0ge1xuICBkZWZhdWx0OiByZXF1aXJlKCcuL3ByZXNldHMvZGVmYXVsdCcpLFxuICB6ZXJvOiByZXF1aXJlKCcuL3ByZXNldHMvemVybycpLFxuICBjb21tb25tYXJrOiByZXF1aXJlKCcuL3ByZXNldHMvY29tbW9ubWFyaycpXG59O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vIFRoaXMgdmFsaWRhdG9yIGNhbiBwcm9oaWJpdCBtb3JlIHRoYW4gcmVhbGx5IG5lZWRlZCB0byBwcmV2ZW50IFhTUy4gSXQncyBhXG4vLyB0cmFkZW9mZiB0byBrZWVwIGNvZGUgc2ltcGxlIGFuZCB0byBiZSBzZWN1cmUgYnkgZGVmYXVsdC5cbi8vXG4vLyBJZiB5b3UgbmVlZCBkaWZmZXJlbnQgc2V0dXAgLSBvdmVycmlkZSB2YWxpZGF0b3IgbWV0aG9kIGFzIHlvdSB3aXNoLiBPclxuLy8gcmVwbGFjZSBpdCB3aXRoIGR1bW15IGZ1bmN0aW9uIGFuZCB1c2UgZXh0ZXJuYWwgc2FuaXRpemVyLlxuLy9cblxudmFyIEJBRF9QUk9UT19SRSA9IC9eKHZic2NyaXB0fGphdmFzY3JpcHR8ZmlsZXxkYXRhKTovO1xudmFyIEdPT0RfREFUQV9SRSA9IC9eZGF0YTppbWFnZVxcLyhnaWZ8cG5nfGpwZWd8d2VicCk7LztcblxuZnVuY3Rpb24gdmFsaWRhdGVMaW5rKHVybCkge1xuICAvLyB1cmwgc2hvdWxkIGJlIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludCwgYW5kIGV4aXN0aW5nIGVudGl0aWVzIGFyZSBkZWNvZGVkXG4gIHZhciBzdHIgPSB1cmwudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIEJBRF9QUk9UT19SRS50ZXN0KHN0cikgPyAoR09PRF9EQVRBX1JFLnRlc3Qoc3RyKSA/IHRydWUgOiBmYWxzZSkgOiB0cnVlO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBSRUNPREVfSE9TVE5BTUVfRk9SID0gWyAnaHR0cDonLCAnaHR0cHM6JywgJ21haWx0bzonIF07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmsodXJsKSB7XG4gIHZhciBwYXJzZWQgPSBtZHVybC5wYXJzZSh1cmwsIHRydWUpO1xuXG4gIGlmIChwYXJzZWQuaG9zdG5hbWUpIHtcbiAgICAvLyBFbmNvZGUgaG9zdG5hbWVzIGluIHVybHMgbGlrZTpcbiAgICAvLyBgaHR0cDovL2hvc3QvYCwgYGh0dHBzOi8vaG9zdC9gLCBgbWFpbHRvOnVzZXJAaG9zdGAsIGAvL2hvc3QvYFxuICAgIC8vXG4gICAgLy8gV2UgZG9uJ3QgZW5jb2RlIHVua25vd24gc2NoZW1hcywgYmVjYXVzZSBpdCdzIGxpa2VseSB0aGF0IHdlIGVuY29kZVxuICAgIC8vIHNvbWV0aGluZyB3ZSBzaG91bGRuJ3QgKGUuZy4gYHNreXBlOm5hbWVgIHRyZWF0ZWQgYXMgYHNreXBlOmhvc3RgKVxuICAgIC8vXG4gICAgaWYgKCFwYXJzZWQucHJvdG9jb2wgfHwgUkVDT0RFX0hPU1ROQU1FX0ZPUi5pbmRleE9mKHBhcnNlZC5wcm90b2NvbCkgPj0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSShwYXJzZWQuaG9zdG5hbWUpO1xuICAgICAgfSBjYXRjaCAoZXIpIHsgLyoqLyB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kdXJsLmVuY29kZShtZHVybC5mb3JtYXQocGFyc2VkKSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmtUZXh0KHVybCkge1xuICB2YXIgcGFyc2VkID0gbWR1cmwucGFyc2UodXJsLCB0cnVlKTtcblxuICBpZiAocGFyc2VkLmhvc3RuYW1lKSB7XG4gICAgLy8gRW5jb2RlIGhvc3RuYW1lcyBpbiB1cmxzIGxpa2U6XG4gICAgLy8gYGh0dHA6Ly9ob3N0L2AsIGBodHRwczovL2hvc3QvYCwgYG1haWx0bzp1c2VyQGhvc3RgLCBgLy9ob3N0L2BcbiAgICAvL1xuICAgIC8vIFdlIGRvbid0IGVuY29kZSB1bmtub3duIHNjaGVtYXMsIGJlY2F1c2UgaXQncyBsaWtlbHkgdGhhdCB3ZSBlbmNvZGVcbiAgICAvLyBzb21ldGhpbmcgd2Ugc2hvdWxkbid0IChlLmcuIGBza3lwZTpuYW1lYCB0cmVhdGVkIGFzIGBza3lwZTpob3N0YClcbiAgICAvL1xuICAgIGlmICghcGFyc2VkLnByb3RvY29sIHx8IFJFQ09ERV9IT1NUTkFNRV9GT1IuaW5kZXhPZihwYXJzZWQucHJvdG9jb2wpID49IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZC5ob3N0bmFtZSA9IHB1bnljb2RlLnRvVW5pY29kZShwYXJzZWQuaG9zdG5hbWUpO1xuICAgICAgfSBjYXRjaCAoZXIpIHsgLyoqLyB9XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkICclJyB0byBleGNsdWRlIGxpc3QgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvaXNzdWVzLzcyMFxuICByZXR1cm4gbWR1cmwuZGVjb2RlKG1kdXJsLmZvcm1hdChwYXJzZWQpLCBtZHVybC5kZWNvZGUuZGVmYXVsdENoYXJzICsgJyUnKTtcbn1cblxuXG4vKipcbiAqIGNsYXNzIE1hcmtkb3duSXRcbiAqXG4gKiBNYWluIHBhcnNlci9yZW5kZXJlciBjbGFzcy5cbiAqXG4gKiAjIyMjIyBVc2FnZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIG5vZGUuanMsIFwiY2xhc3NpY1wiIHdheTpcbiAqIHZhciBNYXJrZG93bkl0ID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSxcbiAqICAgICBtZCA9IG5ldyBNYXJrZG93bkl0KCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqXG4gKiAvLyBub2RlLmpzLCB0aGUgc2FtZSwgYnV0IHdpdGggc3VnYXI6XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqXG4gKiAvLyBicm93c2VyIHdpdGhvdXQgQU1ELCBhZGRlZCB0byBcIndpbmRvd1wiIG9uIHNjcmlwdCBsb2FkXG4gKiAvLyBOb3RlLCB0aGVyZSBhcmUgbm8gZGFzaC5cbiAqIHZhciBtZCA9IHdpbmRvdy5tYXJrZG93bml0KCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVyKCcjIG1hcmtkb3duLWl0IHJ1bGV6eiEnKTtcbiAqIGBgYFxuICpcbiAqIFNpbmdsZSBsaW5lIHJlbmRlcmluZywgd2l0aG91dCBwYXJhZ3JhcGggd3JhcDpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVySW5saW5lKCdfX21hcmtkb3duLWl0X18gcnVsZXp6IScpO1xuICogYGBgXG4gKiovXG5cbi8qKlxuICogbmV3IE1hcmtkb3duSXQoW3ByZXNldE5hbWUsIG9wdGlvbnNdKVxuICogLSBwcmVzZXROYW1lIChTdHJpbmcpOiBvcHRpb25hbCwgYGNvbW1vbm1hcmtgIC8gYHplcm9gXG4gKiAtIG9wdGlvbnMgKE9iamVjdClcbiAqXG4gKiBDcmVhdGVzIHBhcnNlciBpbnN0YW5zZSB3aXRoIGdpdmVuIGNvbmZpZy4gQ2FuIGJlIGNhbGxlZCB3aXRob3V0IGBuZXdgLlxuICpcbiAqICMjIyMjIHByZXNldE5hbWVcbiAqXG4gKiBNYXJrZG93bkl0IHByb3ZpZGVzIG5hbWVkIHByZXNldHMgYXMgYSBjb252ZW5pZW5jZSB0byBxdWlja2x5XG4gKiBlbmFibGUvZGlzYWJsZSBhY3RpdmUgc3ludGF4IHJ1bGVzIGFuZCBvcHRpb25zIGZvciBjb21tb24gdXNlIGNhc2VzLlxuICpcbiAqIC0gW1wiY29tbW9ubWFya1wiXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvY29tbW9ubWFyay5qcykgLVxuICogICBjb25maWd1cmVzIHBhcnNlciB0byBzdHJpY3QgW0NvbW1vbk1hcmtdKGh0dHA6Ly9jb21tb25tYXJrLm9yZy8pIG1vZGUuXG4gKiAtIFtkZWZhdWx0XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvZGVmYXVsdC5qcykgLVxuICogICBzaW1pbGFyIHRvIEdGTSwgdXNlZCB3aGVuIG5vIHByZXNldCBuYW1lIGdpdmVuLiBFbmFibGVzIGFsbCBhdmFpbGFibGUgcnVsZXMsXG4gKiAgIGJ1dCBzdGlsbCB3aXRob3V0IGh0bWwsIHR5cG9ncmFwaGVyICYgYXV0b2xpbmtlci5cbiAqIC0gW1wiemVyb1wiXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3ByZXNldHMvemVyby5qcykgLVxuICogICBhbGwgcnVsZXMgZGlzYWJsZWQuIFVzZWZ1bCB0byBxdWlja2x5IHNldHVwIHlvdXIgY29uZmlnIHZpYSBgLmVuYWJsZSgpYC5cbiAqICAgRm9yIGV4YW1wbGUsIHdoZW4geW91IG5lZWQgb25seSBgYm9sZGAgYW5kIGBpdGFsaWNgIG1hcmt1cCBhbmQgbm90aGluZyBlbHNlLlxuICpcbiAqICMjIyMjIG9wdGlvbnM6XG4gKlxuICogLSBfX2h0bWxfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gZW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2UuIEJlIGNhcmVmdWwhXG4gKiAgIFRoYXQncyBub3Qgc2FmZSEgWW91IG1heSBuZWVkIGV4dGVybmFsIHNhbml0aXplciB0byBwcm90ZWN0IG91dHB1dCBmcm9tIFhTUy5cbiAqICAgSXQncyBiZXR0ZXIgdG8gZXh0ZW5kIGZlYXR1cmVzIHZpYSBwbHVnaW5zLCBpbnN0ZWFkIG9mIGVuYWJsaW5nIEhUTUwuXG4gKiAtIF9feGh0bWxPdXRfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gYWRkICcvJyB3aGVuIGNsb3Npbmcgc2luZ2xlIHRhZ3NcbiAqICAgKGA8YnIgLz5gKS4gVGhpcyBpcyBuZWVkZWQgb25seSBmb3IgZnVsbCBDb21tb25NYXJrIGNvbXBhdGliaWxpdHkuIEluIHJlYWxcbiAqICAgd29ybGQgeW91IHdpbGwgbmVlZCBIVE1MIG91dHB1dC5cbiAqIC0gX19icmVha3NfXyAtIGBmYWxzZWAuIFNldCBgdHJ1ZWAgdG8gY29udmVydCBgXFxuYCBpbiBwYXJhZ3JhcGhzIGludG8gYDxicj5gLlxuICogLSBfX2xhbmdQcmVmaXhfXyAtIGBsYW5ndWFnZS1gLiBDU1MgbGFuZ3VhZ2UgY2xhc3MgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzLlxuICogICBDYW4gYmUgdXNlZnVsIGZvciBleHRlcm5hbCBoaWdobGlnaHRlcnMuXG4gKiAtIF9fbGlua2lmeV9fIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBhdXRvY29udmVydCBVUkwtbGlrZSB0ZXh0IHRvIGxpbmtzLlxuICogLSBfX3R5cG9ncmFwaGVyX18gIC0gYGZhbHNlYC4gU2V0IGB0cnVlYCB0byBlbmFibGUgW3NvbWUgbGFuZ3VhZ2UtbmV1dHJhbFxuICogICByZXBsYWNlbWVudF0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cy5qcykgK1xuICogICBxdW90ZXMgYmVhdXRpZmljYXRpb24gKHNtYXJ0cXVvdGVzKS5cbiAqIC0gX19xdW90ZXNfXyAtIGDigJzigJ3igJjigJlgLCBTdHJpbmcgb3IgQXJyYXkuIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnRcbiAqICAgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCBhbmQgc21hcnRxdW90ZXMgb24uIEZvciBleGFtcGxlLCB5b3UgY2FuXG4gKiAgIHVzZSBgJ8KrwrvigJ7igJwnYCBmb3IgUnVzc2lhbiwgYCfigJ7igJzigJrigJgnYCBmb3IgR2VybWFuLCBhbmRcbiAqICAgYFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J11gIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAqIC0gX19oaWdobGlnaHRfXyAtIGBudWxsYC4gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24gZm9yIGZlbmNlZCBjb2RlIGJsb2Nrcy5cbiAqICAgSGlnaGxpZ2h0ZXIgYGZ1bmN0aW9uIChzdHIsIGxhbmcpYCBzaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTC4gSXQgY2FuIGFsc29cbiAqICAgcmV0dXJuIGVtcHR5IHN0cmluZyBpZiB0aGUgc291cmNlIHdhcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWRcbiAqICAgZXh0ZXJuYWx5LiBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIGNvbW1vbm1hcmsgbW9kZVxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgnY29tbW9ubWFyaycpO1xuICpcbiAqIC8vIGRlZmF1bHQgbW9kZVxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICpcbiAqIC8vIGVuYWJsZSBldmVyeXRoaW5nXG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKHtcbiAqICAgaHRtbDogdHJ1ZSxcbiAqICAgbGlua2lmeTogdHJ1ZSxcbiAqICAgdHlwb2dyYXBoZXI6IHRydWVcbiAqIH0pO1xuICogYGBgXG4gKlxuICogIyMjIyMgU3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIGBgYGpzXG4gKiB2YXIgaGxqcyA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpIC8vIGh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuICpcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcbiAqICAgICBpZiAobGFuZyAmJiBobGpzLmdldExhbmd1YWdlKGxhbmcpKSB7XG4gKiAgICAgICB0cnkge1xuICogICAgICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHQoc3RyLCB7IGxhbmd1YWdlOiBsYW5nLCBpZ25vcmVJbGxlZ2FsczogdHJ1ZSB9KS52YWx1ZTtcbiAqICAgICAgIH0gY2F0Y2ggKF9fKSB7fVxuICogICAgIH1cbiAqXG4gKiAgICAgcmV0dXJuICcnOyAvLyB1c2UgZXh0ZXJuYWwgZGVmYXVsdCBlc2NhcGluZ1xuICogICB9XG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIE9yIHdpdGggZnVsbCB3cmFwcGVyIG92ZXJyaWRlIChpZiB5b3UgbmVlZCBhc3NpZ24gY2xhc3MgdG8gYDxwcmU+YCk6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIGhsanMgPSByZXF1aXJlKCdoaWdobGlnaHQuanMnKSAvLyBodHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiAqXG4gKiAvLyBBY3R1YWwgZGVmYXVsdCB2YWx1ZXNcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0Jykoe1xuICogICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcbiAqICAgICBpZiAobGFuZyAmJiBobGpzLmdldExhbmd1YWdlKGxhbmcpKSB7XG4gKiAgICAgICB0cnkge1xuICogICAgICAgICByZXR1cm4gJzxwcmUgY2xhc3M9XCJobGpzXCI+PGNvZGU+JyArXG4gKiAgICAgICAgICAgICAgICBobGpzLmhpZ2hsaWdodChzdHIsIHsgbGFuZ3VhZ2U6IGxhbmcsIGlnbm9yZUlsbGVnYWxzOiB0cnVlIH0pLnZhbHVlICtcbiAqICAgICAgICAgICAgICAgICc8L2NvZGU+PC9wcmU+JztcbiAqICAgICAgIH0gY2F0Y2ggKF9fKSB7fVxuICogICAgIH1cbiAqXG4gKiAgICAgcmV0dXJuICc8cHJlIGNsYXNzPVwiaGxqc1wiPjxjb2RlPicgKyBtZC51dGlscy5lc2NhcGVIdG1sKHN0cikgKyAnPC9jb2RlPjwvcHJlPic7XG4gKiAgIH1cbiAqIH0pO1xuICogYGBgXG4gKlxuICoqL1xuZnVuY3Rpb24gTWFya2Rvd25JdChwcmVzZXROYW1lLCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXJrZG93bkl0KSkge1xuICAgIHJldHVybiBuZXcgTWFya2Rvd25JdChwcmVzZXROYW1lLCBvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIGlmICghdXRpbHMuaXNTdHJpbmcocHJlc2V0TmFtZSkpIHtcbiAgICAgIG9wdGlvbnMgPSBwcmVzZXROYW1lIHx8IHt9O1xuICAgICAgcHJlc2V0TmFtZSA9ICdkZWZhdWx0JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFya2Rvd25JdCNpbmxpbmUgLT4gUGFyc2VySW5saW5lXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbUGFyc2VySW5saW5lXV0uIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmlubGluZSA9IG5ldyBQYXJzZXJJbmxpbmUoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNibG9jayAtPiBQYXJzZXJCbG9ja1xuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW1BhcnNlckJsb2NrXV0uIFlvdSBtYXkgbmVlZCBpdCB0byBhZGQgbmV3IHJ1bGVzIHdoZW5cbiAgICogd3JpdGluZyBwbHVnaW5zLiBGb3Igc2ltcGxlIHJ1bGVzIGNvbnRyb2wgdXNlIFtbTWFya2Rvd25JdC5kaXNhYmxlXV0gYW5kXG4gICAqIFtbTWFya2Rvd25JdC5lbmFibGVdXS5cbiAgICoqL1xuICB0aGlzLmJsb2NrID0gbmV3IFBhcnNlckJsb2NrKCk7XG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjY29yZSAtPiBDb3JlXG4gICAqXG4gICAqIEluc3RhbmNlIG9mIFtbQ29yZV1dIGNoYWluIGV4ZWN1dG9yLiBZb3UgbWF5IG5lZWQgaXQgdG8gYWRkIG5ldyBydWxlcyB3aGVuXG4gICAqIHdyaXRpbmcgcGx1Z2lucy4gRm9yIHNpbXBsZSBydWxlcyBjb250cm9sIHVzZSBbW01hcmtkb3duSXQuZGlzYWJsZV1dIGFuZFxuICAgKiBbW01hcmtkb3duSXQuZW5hYmxlXV0uXG4gICAqKi9cbiAgdGhpcy5jb3JlID0gbmV3IFBhcnNlckNvcmUoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNyZW5kZXJlciAtPiBSZW5kZXJlclxuICAgKlxuICAgKiBJbnN0YW5jZSBvZiBbW1JlbmRlcmVyXV0uIFVzZSBpdCB0byBtb2RpZnkgb3V0cHV0IGxvb2suIE9yIHRvIGFkZCByZW5kZXJpbmdcbiAgICogcnVsZXMgZm9yIG5ldyB0b2tlbiB0eXBlcywgZ2VuZXJhdGVkIGJ5IHBsdWdpbnMuXG4gICAqXG4gICAqICMjIyMjIEV4YW1wbGVcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gICAqXG4gICAqIGZ1bmN0aW9uIG15VG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZikge1xuICAgKiAgIC8vLi4uXG4gICAqICAgcmV0dXJuIHJlc3VsdDtcbiAgICogfTtcbiAgICpcbiAgICogbWQucmVuZGVyZXIucnVsZXNbJ215X3Rva2VuJ10gPSBteVRva2VuXG4gICAqIGBgYFxuICAgKlxuICAgKiBTZWUgW1tSZW5kZXJlcl1dIGRvY3MgYW5kIFtzb3VyY2UgY29kZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9yZW5kZXJlci5qcykuXG4gICAqKi9cbiAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I2xpbmtpZnkgLT4gTGlua2lmeUl0XG4gICAqXG4gICAqIFtsaW5raWZ5LWl0XShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbGlua2lmeS1pdCkgaW5zdGFuY2UuXG4gICAqIFVzZWQgYnkgW2xpbmtpZnldKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9ibG9iL21hc3Rlci9saWIvcnVsZXNfY29yZS9saW5raWZ5LmpzKVxuICAgKiBydWxlLlxuICAgKiovXG4gIHRoaXMubGlua2lmeSA9IG5ldyBMaW5raWZ5SXQoKTtcblxuICAvKipcbiAgICogTWFya2Rvd25JdCN2YWxpZGF0ZUxpbmsodXJsKSAtPiBCb29sZWFuXG4gICAqXG4gICAqIExpbmsgdmFsaWRhdGlvbiBmdW5jdGlvbi4gQ29tbW9uTWFyayBhbGxvd3MgdG9vIG11Y2ggaW4gbGlua3MuIEJ5IGRlZmF1bHRcbiAgICogd2UgZGlzYWJsZSBgamF2YXNjcmlwdDpgLCBgdmJzY3JpcHQ6YCwgYGZpbGU6YCBzY2hlbWFzLCBhbmQgYWxtb3N0IGFsbCBgZGF0YTouLi5gIHNjaGVtYXNcbiAgICogZXhjZXB0IHNvbWUgZW1iZWRkZWQgaW1hZ2UgdHlwZXMuXG4gICAqXG4gICAqIFlvdSBjYW4gY2hhbmdlIHRoaXMgYmVoYXZpb3VyOlxuICAgKlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAgICogLy8gZW5hYmxlIGV2ZXJ5dGhpbmdcbiAgICogbWQudmFsaWRhdGVMaW5rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgKiBgYGBcbiAgICoqL1xuICB0aGlzLnZhbGlkYXRlTGluayA9IHZhbGlkYXRlTGluaztcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNub3JtYWxpemVMaW5rKHVybCkgLT4gU3RyaW5nXG4gICAqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZW5jb2RlIGxpbmsgdXJsIHRvIGEgbWFjaGluZS1yZWFkYWJsZSBmb3JtYXQsXG4gICAqIHdoaWNoIGluY2x1ZGVzIHVybC1lbmNvZGluZywgcHVueWNvZGUsIGV0Yy5cbiAgICoqL1xuICB0aGlzLm5vcm1hbGl6ZUxpbmsgPSBub3JtYWxpemVMaW5rO1xuXG4gIC8qKlxuICAgKiBNYXJrZG93bkl0I25vcm1hbGl6ZUxpbmtUZXh0KHVybCkgLT4gU3RyaW5nXG4gICAqXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZGVjb2RlIGxpbmsgdXJsIHRvIGEgaHVtYW4tcmVhZGFibGUgZm9ybWF0YFxuICAgKiovXG4gIHRoaXMubm9ybWFsaXplTGlua1RleHQgPSBub3JtYWxpemVMaW5rVGV4dDtcblxuXG4gIC8vIEV4cG9zZSB1dGlscyAmIGhlbHBlcnMgZm9yIGVhc3kgYWNjZXMgZnJvbSBwbHVnaW5zXG5cbiAgLyoqXG4gICAqIE1hcmtkb3duSXQjdXRpbHMgLT4gdXRpbHNcbiAgICpcbiAgICogQXNzb3J0ZWQgdXRpbGl0eSBmdW5jdGlvbnMsIHVzZWZ1bCB0byB3cml0ZSBwbHVnaW5zLiBTZWUgZGV0YWlsc1xuICAgKiBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9jb21tb24vdXRpbHMuanMpLlxuICAgKiovXG4gIHRoaXMudXRpbHMgPSB1dGlscztcblxuICAvKipcbiAgICogTWFya2Rvd25JdCNoZWxwZXJzIC0+IGhlbHBlcnNcbiAgICpcbiAgICogTGluayBjb21wb25lbnRzIHBhcnNlciBmdW5jdGlvbnMsIHVzZWZ1bCB0byB3cml0ZSBwbHVnaW5zLiBTZWUgZGV0YWlsc1xuICAgKiBbaGVyZV0oaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0L2Jsb2IvbWFzdGVyL2xpYi9oZWxwZXJzKS5cbiAgICoqL1xuICB0aGlzLmhlbHBlcnMgPSB1dGlscy5hc3NpZ24oe30sIGhlbHBlcnMpO1xuXG5cbiAgdGhpcy5vcHRpb25zID0ge307XG4gIHRoaXMuY29uZmlndXJlKHByZXNldE5hbWUpO1xuXG4gIGlmIChvcHRpb25zKSB7IHRoaXMuc2V0KG9wdGlvbnMpOyB9XG59XG5cblxuLyoqIGNoYWluYWJsZVxuICogTWFya2Rvd25JdC5zZXQob3B0aW9ucylcbiAqXG4gKiBTZXQgcGFyc2VyIG9wdGlvbnMgKGluIHRoZSBzYW1lIGZvcm1hdCBhcyBpbiBjb25zdHJ1Y3RvcikuIFByb2JhYmx5LCB5b3VcbiAqIHdpbGwgbmV2ZXIgbmVlZCBpdCwgYnV0IHlvdSBjYW4gY2hhbmdlIG9wdGlvbnMgYWZ0ZXIgY29uc3RydWN0b3IgY2FsbC5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpXG4gKiAgICAgICAgICAgICAuc2V0KHsgaHRtbDogdHJ1ZSwgYnJlYWtzOiB0cnVlIH0pXG4gKiAgICAgICAgICAgICAuc2V0KHsgdHlwb2dyYXBoZXIsIHRydWUgfSk7XG4gKiBgYGBcbiAqXG4gKiBfX05vdGU6X18gVG8gYWNoaWV2ZSB0aGUgYmVzdCBwb3NzaWJsZSBwZXJmb3JtYW5jZSwgZG9uJ3QgbW9kaWZ5IGFcbiAqIGBtYXJrZG93bi1pdGAgaW5zdGFuY2Ugb3B0aW9ucyBvbiB0aGUgZmx5LiBJZiB5b3UgbmVlZCBtdWx0aXBsZSBjb25maWd1cmF0aW9uc1xuICogaXQncyBiZXN0IHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXMgYW5kIGluaXRpYWxpemUgZWFjaCB3aXRoIHNlcGFyYXRlXG4gKiBjb25maWcuXG4gKiovXG5NYXJrZG93bkl0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB1dGlscy5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKiBjaGFpbmFibGUsIGludGVybmFsXG4gKiBNYXJrZG93bkl0LmNvbmZpZ3VyZShwcmVzZXRzKVxuICpcbiAqIEJhdGNoIGxvYWQgb2YgYWxsIG9wdGlvbnMgYW5kIGNvbXBlbmVudCBzZXR0aW5ncy4gVGhpcyBpcyBpbnRlcm5hbCBtZXRob2QsXG4gKiBhbmQgeW91IHByb2JhYmx5IHdpbGwgbm90IG5lZWQgaXQuIEJ1dCBpZiB5b3Ugd2lsbCAtIHNlZSBhdmFpbGFibGUgcHJlc2V0c1xuICogYW5kIGRhdGEgc3RydWN0dXJlIFtoZXJlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvdHJlZS9tYXN0ZXIvbGliL3ByZXNldHMpXG4gKlxuICogV2Ugc3Ryb25nbHkgcmVjb21tZW5kIHRvIHVzZSBwcmVzZXRzIGluc3RlYWQgb2YgZGlyZWN0IGNvbmZpZyBsb2Fkcy4gVGhhdFxuICogd2lsbCBnaXZlIGJldHRlciBjb21wYXRpYmlsaXR5IHdpdGggbmV4dCB2ZXJzaW9ucy5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcywgcHJlc2V0TmFtZTtcblxuICBpZiAodXRpbHMuaXNTdHJpbmcocHJlc2V0cykpIHtcbiAgICBwcmVzZXROYW1lID0gcHJlc2V0cztcbiAgICBwcmVzZXRzID0gY29uZmlnW3ByZXNldE5hbWVdO1xuICAgIGlmICghcHJlc2V0cykgeyB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGBtYXJrZG93bi1pdGAgcHJlc2V0IFwiJyArIHByZXNldE5hbWUgKyAnXCIsIGNoZWNrIG5hbWUnKTsgfVxuICB9XG5cbiAgaWYgKCFwcmVzZXRzKSB7IHRocm93IG5ldyBFcnJvcignV3JvbmcgYG1hcmtkb3duLWl0YCBwcmVzZXQsIGNhblxcJ3QgYmUgZW1wdHknKTsgfVxuXG4gIGlmIChwcmVzZXRzLm9wdGlvbnMpIHsgc2VsZi5zZXQocHJlc2V0cy5vcHRpb25zKTsgfVxuXG4gIGlmIChwcmVzZXRzLmNvbXBvbmVudHMpIHtcbiAgICBPYmplY3Qua2V5cyhwcmVzZXRzLmNvbXBvbmVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMpIHtcbiAgICAgICAgc2VsZltuYW1lXS5ydWxlci5lbmFibGVPbmx5KHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcyk7XG4gICAgICB9XG4gICAgICBpZiAocHJlc2V0cy5jb21wb25lbnRzW25hbWVdLnJ1bGVzMikge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyMi5lbmFibGVPbmx5KHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlczIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LmVuYWJsZShsaXN0LCBpZ25vcmVJbnZhbGlkKVxuICogLSBsaXN0IChTdHJpbmd8QXJyYXkpOiBydWxlIG5hbWUgb3IgbGlzdCBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZVxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogRW5hYmxlIGxpc3Qgb3IgcnVsZXMuIEl0IHdpbGwgYXV0b21hdGljYWxseSBmaW5kIGFwcHJvcHJpYXRlIGNvbXBvbmVudHMsXG4gKiBjb250YWluaW5nIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMuIElmIHJ1bGUgbm90IGZvdW5kLCBhbmQgYGlnbm9yZUludmFsaWRgXG4gKiBub3Qgc2V0IC0gdGhyb3dzIGV4Y2VwdGlvbi5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpXG4gKiAgICAgICAgICAgICAuZW5hYmxlKFsnc3ViJywgJ3N1cCddKVxuICogICAgICAgICAgICAgLmRpc2FibGUoJ3NtYXJ0cXVvdGVzJyk7XG4gKiBgYGBcbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHsgbGlzdCA9IFsgbGlzdCBdOyB9XG5cbiAgWyAnY29yZScsICdibG9jaycsICdpbmxpbmUnIF0uZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXNbY2hhaW5dLnJ1bGVyLmVuYWJsZShsaXN0LCB0cnVlKSk7XG4gIH0sIHRoaXMpO1xuXG4gIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5pbmxpbmUucnVsZXIyLmVuYWJsZShsaXN0LCB0cnVlKSk7XG5cbiAgdmFyIG1pc3NlZCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiByZXN1bHQuaW5kZXhPZihuYW1lKSA8IDA7IH0pO1xuXG4gIGlmIChtaXNzZWQubGVuZ3RoICYmICFpZ25vcmVJbnZhbGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNYXJrZG93bkl0LiBGYWlsZWQgdG8gZW5hYmxlIHVua25vd24gcnVsZShzKTogJyArIG1pc3NlZCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGNoYWluYWJsZVxuICogTWFya2Rvd25JdC5kaXNhYmxlKGxpc3QsIGlnbm9yZUludmFsaWQpXG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IHJ1bGUgbmFtZSBvciBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZGlzYWJsZS5cbiAqIC0gaWdub3JlSW52YWxpZCAoQm9vbGVhbik6IHNldCBgdHJ1ZWAgdG8gaWdub3JlIGVycm9ycyB3aGVuIHJ1bGUgbm90IGZvdW5kLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbTWFya2Rvd25JdC5lbmFibGVdXSwgYnV0IHR1cm4gc3BlY2lmaWVkIHJ1bGVzIG9mZi5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAobGlzdCwgaWdub3JlSW52YWxpZCkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbIGxpc3QgXTsgfVxuXG4gIFsgJ2NvcmUnLCAnYmxvY2snLCAnaW5saW5lJyBdLmZvckVhY2goZnVuY3Rpb24gKGNoYWluKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzW2NoYWluXS5ydWxlci5kaXNhYmxlKGxpc3QsIHRydWUpKTtcbiAgfSwgdGhpcyk7XG5cbiAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLmlubGluZS5ydWxlcjIuZGlzYWJsZShsaXN0LCB0cnVlKSk7XG5cbiAgdmFyIG1pc3NlZCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiByZXN1bHQuaW5kZXhPZihuYW1lKSA8IDA7IH0pO1xuXG4gIGlmIChtaXNzZWQubGVuZ3RoICYmICFpZ25vcmVJbnZhbGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNYXJrZG93bkl0LiBGYWlsZWQgdG8gZGlzYWJsZSB1bmtub3duIHJ1bGUocyk6ICcgKyBtaXNzZWQpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKiogY2hhaW5hYmxlXG4gKiBNYXJrZG93bkl0LnVzZShwbHVnaW4sIHBhcmFtcylcbiAqXG4gKiBMb2FkIHNwZWNpZmllZCBwbHVnaW4gd2l0aCBnaXZlbiBwYXJhbXMgaW50byBjdXJyZW50IHBhcnNlciBpbnN0YW5jZS5cbiAqIEl0J3MganVzdCBhIHN1Z2FyIHRvIGNhbGwgYHBsdWdpbihtZCwgcGFyYW1zKWAgd2l0aCBjdXJyaW5nLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgaXRlcmF0b3IgPSByZXF1aXJlKCdtYXJrZG93bi1pdC1mb3ItaW5saW5lJyk7XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKClcbiAqICAgICAgICAgICAgIC51c2UoaXRlcmF0b3IsICdmb29fcmVwbGFjZScsICd0ZXh0JywgZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XG4gKiAgICAgICAgICAgICAgIHRva2Vuc1tpZHhdLmNvbnRlbnQgPSB0b2tlbnNbaWR4XS5jb250ZW50LnJlcGxhY2UoL2Zvby9nLCAnYmFyJyk7XG4gKiAgICAgICAgICAgICB9KTtcbiAqIGBgYFxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiAvKiwgcGFyYW1zLCAuLi4gKi8pIHtcbiAgdmFyIGFyZ3MgPSBbIHRoaXMgXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIHBsdWdpbi5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuLyoqIGludGVybmFsXG4gKiBNYXJrZG93bkl0LnBhcnNlKHNyYywgZW52KSAtPiBBcnJheVxuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogUGFyc2UgaW5wdXQgc3RyaW5nIGFuZCByZXR1cm4gbGlzdCBvZiBibG9jayB0b2tlbnMgKHNwZWNpYWwgdG9rZW4gdHlwZVxuICogXCJpbmxpbmVcIiB3aWxsIGNvbnRhaW4gbGlzdCBvZiBpbmxpbmUgdG9rZW5zKS4gWW91IHNob3VsZCBub3QgY2FsbCB0aGlzXG4gKiBtZXRob2QgZGlyZWN0bHksIHVudGlsIHlvdSB3cml0ZSBjdXN0b20gcmVuZGVyZXIgKGZvciBleGFtcGxlLCB0byBwcm9kdWNlXG4gKiBBU1QpLlxuICpcbiAqIGBlbnZgIGlzIHVzZWQgdG8gcGFzcyBkYXRhIGJldHdlZW4gXCJkaXN0cmlidXRlZFwiIHJ1bGVzIGFuZCByZXR1cm4gYWRkaXRpb25hbFxuICogbWV0YWRhdGEgbGlrZSByZWZlcmVuY2UgaW5mbywgbmVlZGVkIGZvciB0aGUgcmVuZGVyZXIuIEl0IGFsc28gY2FuIGJlIHVzZWQgdG9cbiAqIGluamVjdCBkYXRhIGluIHNwZWNpZmljIGNhc2VzLiBVc3VhbGx5LCB5b3Ugd2lsbCBiZSBvayB0byBwYXNzIGB7fWAsXG4gKiBhbmQgdGhlbiBwYXNzIHVwZGF0ZWQgb2JqZWN0IHRvIHJlbmRlcmVyLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBkYXRhIHNob3VsZCBiZSBhIFN0cmluZycpO1xuICB9XG5cbiAgdmFyIHN0YXRlID0gbmV3IHRoaXMuY29yZS5TdGF0ZShzcmMsIHRoaXMsIGVudik7XG5cbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG5cbi8qKlxuICogTWFya2Rvd25JdC5yZW5kZXIoc3JjIFssIGVudl0pIC0+IFN0cmluZ1xuICogLSBzcmMgKFN0cmluZyk6IHNvdXJjZSBzdHJpbmdcbiAqIC0gZW52IChPYmplY3QpOiBlbnZpcm9ubWVudCBzYW5kYm94XG4gKlxuICogUmVuZGVyIG1hcmtkb3duIHN0cmluZyBpbnRvIGh0bWwuIEl0IGRvZXMgYWxsIG1hZ2ljIGZvciB5b3UgOikuXG4gKlxuICogYGVudmAgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGFkZGl0aW9uYWwgbWV0YWRhdGEgKGB7fWAgYnkgZGVmYXVsdCkuXG4gKiBCdXQgeW91IHdpbGwgbm90IG5lZWQgaXQgd2l0aCBoaWdoIHByb2JhYmlsaXR5LiBTZWUgYWxzbyBjb21tZW50XG4gKiBpbiBbW01hcmtkb3duSXQucGFyc2VdXS5cbiAqKi9cbk1hcmtkb3duSXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChzcmMsIGVudikge1xuICBlbnYgPSBlbnYgfHwge307XG5cbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3JjLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG5cbi8qKiBpbnRlcm5hbFxuICogTWFya2Rvd25JdC5wYXJzZUlubGluZShzcmMsIGVudikgLT4gQXJyYXlcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFRoZSBzYW1lIGFzIFtbTWFya2Rvd25JdC5wYXJzZV1dIGJ1dCBza2lwIGFsbCBibG9jayBydWxlcy4gSXQgcmV0dXJucyB0aGVcbiAqIGJsb2NrIHRva2VucyBsaXN0IHdpdGggdGhlIHNpbmdsZSBgaW5saW5lYCBlbGVtZW50LCBjb250YWluaW5nIHBhcnNlZCBpbmxpbmVcbiAqIHRva2VucyBpbiBgY2hpbGRyZW5gIHByb3BlcnR5LiBBbHNvIHVwZGF0ZXMgYGVudmAgb2JqZWN0LlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucGFyc2VJbmxpbmUgPSBmdW5jdGlvbiAoc3JjLCBlbnYpIHtcbiAgdmFyIHN0YXRlID0gbmV3IHRoaXMuY29yZS5TdGF0ZShzcmMsIHRoaXMsIGVudik7XG5cbiAgc3RhdGUuaW5saW5lTW9kZSA9IHRydWU7XG4gIHRoaXMuY29yZS5wcm9jZXNzKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGUudG9rZW5zO1xufTtcblxuXG4vKipcbiAqIE1hcmtkb3duSXQucmVuZGVySW5saW5lKHNyYyBbLCBlbnZdKSAtPiBTdHJpbmdcbiAqIC0gc3JjIChTdHJpbmcpOiBzb3VyY2Ugc3RyaW5nXG4gKiAtIGVudiAoT2JqZWN0KTogZW52aXJvbm1lbnQgc2FuZGJveFxuICpcbiAqIFNpbWlsYXIgdG8gW1tNYXJrZG93bkl0LnJlbmRlcl1dIGJ1dCBmb3Igc2luZ2xlIHBhcmFncmFwaCBjb250ZW50LiBSZXN1bHRcbiAqIHdpbGwgTk9UIGJlIHdyYXBwZWQgaW50byBgPHA+YCB0YWdzLlxuICoqL1xuTWFya2Rvd25JdC5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHNyYywgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcblxuICByZXR1cm4gdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5wYXJzZUlubGluZShzcmMsIGVudiksIHRoaXMub3B0aW9ucywgZW52KTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBNYXJrZG93bkl0O1xuIiwiLyoqIGludGVybmFsXG4gKiBjbGFzcyBQYXJzZXJCbG9ja1xuICpcbiAqIEJsb2NrLWxldmVsIHRva2VuaXplci5cbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgUnVsZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xuXG5cbnZhciBfcnVsZXMgPSBbXG4gIC8vIEZpcnN0IDIgcGFyYW1zIC0gcnVsZSBuYW1lICYgc291cmNlLiBTZWNvbmRhcnkgYXJyYXkgLSBsaXN0IG9mIHJ1bGVzLFxuICAvLyB3aGljaCBjYW4gYmUgdGVybWluYXRlZCBieSB0aGlzIG9uZS5cbiAgWyAndGFibGUnLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svdGFibGUnKSwgICAgICBbICdwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJyBdIF0sXG4gIFsgJ2NvZGUnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2NvZGUnKSBdLFxuICBbICdmZW5jZScsICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9mZW5jZScpLCAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2Jsb2NrcXVvdGUnLCByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2Jsb2NrcXVvdGUnKSwgWyAncGFyYWdyYXBoJywgJ3JlZmVyZW5jZScsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnaHInLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaHInKSwgICAgICAgICBbICdwYXJhZ3JhcGgnLCAncmVmZXJlbmNlJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdsaXN0JywgICAgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saXN0JyksICAgICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdyZWZlcmVuY2UnLCAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9yZWZlcmVuY2UnKSBdLFxuICBbICdodG1sX2Jsb2NrJywgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9odG1sX2Jsb2NrJyksIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdoZWFkaW5nJywgICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9oZWFkaW5nJyksICAgIFsgJ3BhcmFncmFwaCcsICdyZWZlcmVuY2UnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdsaGVhZGluZycsICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saGVhZGluZycpIF0sXG4gIFsgJ3BhcmFncmFwaCcsICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3BhcmFncmFwaCcpIF1cbl07XG5cblxuLyoqXG4gKiBuZXcgUGFyc2VyQmxvY2soKVxuICoqL1xuZnVuY3Rpb24gUGFyc2VyQmxvY2soKSB7XG4gIC8qKlxuICAgKiBQYXJzZXJCbG9jayNydWxlciAtPiBSdWxlclxuICAgKlxuICAgKiBbW1J1bGVyXV0gaW5zdGFuY2UuIEtlZXAgY29uZmlndXJhdGlvbiBvZiBibG9jayBydWxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnJ1bGVyLnB1c2goX3J1bGVzW2ldWzBdLCBfcnVsZXNbaV1bMV0sIHsgYWx0OiAoX3J1bGVzW2ldWzJdIHx8IFtdKS5zbGljZSgpIH0pO1xuICB9XG59XG5cblxuLy8gR2VuZXJhdGUgdG9rZW5zIGZvciBpbnB1dCByYW5nZVxuLy9cblBhcnNlckJsb2NrLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lKSB7XG4gIHZhciBvaywgaSxcbiAgICAgIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyksXG4gICAgICBsZW4gPSBydWxlcy5sZW5ndGgsXG4gICAgICBsaW5lID0gc3RhcnRMaW5lLFxuICAgICAgaGFzRW1wdHlMaW5lcyA9IGZhbHNlLFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZztcblxuICB3aGlsZSAobGluZSA8IGVuZExpbmUpIHtcbiAgICBzdGF0ZS5saW5lID0gbGluZSA9IHN0YXRlLnNraXBFbXB0eUxpbmVzKGxpbmUpO1xuICAgIGlmIChsaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cblxuICAgIC8vIFRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmb3IgbmVzdGVkIGNhbGxzLlxuICAgIC8vIE5lc3RlZCBjYWxscyBjdXJyZW50bHkgdXNlZCBmb3IgYmxvY2txdW90ZXMgJiBsaXN0c1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIC8vIElmIG5lc3RpbmcgbGV2ZWwgZXhjZWVkZWQgLSBza2lwIHRhaWwgdG8gdGhlIGVuZC4gVGhhdCdzIG5vdCBvcmRpbmFyeVxuICAgIC8vIHNpdHVhdGlvbiBhbmQgd2Ugc2hvdWxkIG5vdCBjYXJlIGFib3V0IGNvbnRlbnQuXG4gICAgaWYgKHN0YXRlLmxldmVsID49IG1heE5lc3RpbmcpIHtcbiAgICAgIHN0YXRlLmxpbmUgPSBlbmRMaW5lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5saW5lYFxuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS50b2tlbnNgXG4gICAgLy8gLSByZXR1cm4gdHJ1ZVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBsaW5lLCBlbmRMaW5lLCBmYWxzZSk7XG4gICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICAvLyBzZXQgc3RhdGUudGlnaHQgaWYgd2UgaGFkIGFuIGVtcHR5IGxpbmUgYmVmb3JlIGN1cnJlbnQgdGFnXG4gICAgLy8gaS5lLiBsYXRlc3QgZW1wdHkgbGluZSBzaG91bGQgbm90IGNvdW50XG4gICAgc3RhdGUudGlnaHQgPSAhaGFzRW1wdHlMaW5lcztcblxuICAgIC8vIHBhcmFncmFwaCBtaWdodCBcImVhdFwiIG9uZSBuZXdsaW5lIGFmdGVyIGl0IGluIG5lc3RlZCBsaXN0c1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICBpZiAobGluZSA8IGVuZExpbmUgJiYgc3RhdGUuaXNFbXB0eShsaW5lKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgICBsaW5lKys7XG4gICAgICBzdGF0ZS5saW5lID0gbGluZTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBQYXJzZXJCbG9jay5wYXJzZShzdHIsIG1kLCBlbnYsIG91dFRva2VucylcbiAqXG4gKiBQcm9jZXNzIGlucHV0IHN0cmluZyBhbmQgcHVzaCBibG9jayB0b2tlbnMgaW50byBgb3V0VG9rZW5zYFxuICoqL1xuUGFyc2VyQmxvY2sucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBzdGF0ZTtcblxuICBpZiAoIXNyYykgeyByZXR1cm47IH1cblxuICBzdGF0ZSA9IG5ldyB0aGlzLlN0YXRlKHNyYywgbWQsIGVudiwgb3V0VG9rZW5zKTtcblxuICB0aGlzLnRva2VuaXplKHN0YXRlLCBzdGF0ZS5saW5lLCBzdGF0ZS5saW5lTWF4KTtcbn07XG5cblxuUGFyc2VyQmxvY2sucHJvdG90eXBlLlN0YXRlID0gcmVxdWlyZSgnLi9ydWxlc19ibG9jay9zdGF0ZV9ibG9jaycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyQmxvY2s7XG4iLCIvKiogaW50ZXJuYWxcbiAqIGNsYXNzIENvcmVcbiAqXG4gKiBUb3AtbGV2ZWwgcnVsZXMgZXhlY3V0b3IuIEdsdWVzIGJsb2NrL2lubGluZSBwYXJzZXJzIGFuZCBkb2VzIGludGVybWVkaWF0ZVxuICogdHJhbnNmb3JtYXRpb25zLlxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBSdWxlciAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAnbm9ybWFsaXplJywgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvbm9ybWFsaXplJykgICAgICBdLFxuICBbICdibG9jaycsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9ibG9jaycpICAgICAgICAgIF0sXG4gIFsgJ2lubGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2lubGluZScpICAgICAgICAgXSxcbiAgWyAnbGlua2lmeScsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvbGlua2lmeScpICAgICAgICBdLFxuICBbICdyZXBsYWNlbWVudHMnLCAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9yZXBsYWNlbWVudHMnKSAgIF0sXG4gIFsgJ3NtYXJ0cXVvdGVzJywgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3NtYXJ0cXVvdGVzJykgICAgXSxcbiAgLy8gYHRleHRfam9pbmAgZmluZHMgYHRleHRfc3BlY2lhbGAgdG9rZW5zIChmb3IgZXNjYXBlIHNlcXVlbmNlcylcbiAgLy8gYW5kIGpvaW5zIHRoZW0gd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGV4dFxuICBbICd0ZXh0X2pvaW4nLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS90ZXh0X2pvaW4nKSAgICAgIF1cbl07XG5cblxuLyoqXG4gKiBuZXcgQ29yZSgpXG4gKiovXG5mdW5jdGlvbiBDb3JlKCkge1xuICAvKipcbiAgICogQ29yZSNydWxlciAtPiBSdWxlclxuICAgKlxuICAgKiBbW1J1bGVyXV0gaW5zdGFuY2UuIEtlZXAgY29uZmlndXJhdGlvbiBvZiBjb3JlIHJ1bGVzLlxuICAgKiovXG4gIHRoaXMucnVsZXIgPSBuZXcgUnVsZXIoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIENvcmUucHJvY2VzcyhzdGF0ZSlcbiAqXG4gKiBFeGVjdXRlcyBjb3JlIGNoYWluIHJ1bGVzLlxuICoqL1xuQ29yZS5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgaSwgbCwgcnVsZXM7XG5cbiAgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcblxuICBmb3IgKGkgPSAwLCBsID0gcnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcnVsZXNbaV0oc3RhdGUpO1xuICB9XG59O1xuXG5Db3JlLnByb3RvdHlwZS5TdGF0ZSA9IHJlcXVpcmUoJy4vcnVsZXNfY29yZS9zdGF0ZV9jb3JlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBDb3JlO1xuIiwiLyoqIGludGVybmFsXG4gKiBjbGFzcyBQYXJzZXJJbmxpbmVcbiAqXG4gKiBUb2tlbml6ZXMgcGFyYWdyYXBoIGNvbnRlbnQuXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFJ1bGVyICAgICAgICAgICA9IHJlcXVpcmUoJy4vcnVsZXInKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUGFyc2VyIHJ1bGVzXG5cbnZhciBfcnVsZXMgPSBbXG4gIFsgJ3RleHQnLCAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3RleHQnKSBdLFxuICBbICdsaW5raWZ5JywgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9saW5raWZ5JykgXSxcbiAgWyAnbmV3bGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvbmV3bGluZScpIF0sXG4gIFsgJ2VzY2FwZScsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2VzY2FwZScpIF0sXG4gIFsgJ2JhY2t0aWNrcycsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2JhY2t0aWNrcycpIF0sXG4gIFsgJ3N0cmlrZXRocm91Z2gnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2gnKS50b2tlbml6ZSBdLFxuICBbICdlbXBoYXNpcycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbXBoYXNpcycpLnRva2VuaXplIF0sXG4gIFsgJ2xpbmsnLCAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2xpbmsnKSBdLFxuICBbICdpbWFnZScsICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9pbWFnZScpIF0sXG4gIFsgJ2F1dG9saW5rJywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2F1dG9saW5rJykgXSxcbiAgWyAnaHRtbF9pbmxpbmUnLCAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvaHRtbF9pbmxpbmUnKSBdLFxuICBbICdlbnRpdHknLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbnRpdHknKSBdXG5dO1xuXG4vLyBgcnVsZTJgIHJ1bGVzZXQgd2FzIGNyZWF0ZWQgc3BlY2lmaWNhbGx5IGZvciBlbXBoYXNpcy9zdHJpa2V0aHJvdWdoXG4vLyBwb3N0LXByb2Nlc3NpbmcgYW5kIG1heSBiZSBjaGFuZ2VkIGluIHRoZSBmdXR1cmUuXG4vL1xuLy8gRG9uJ3QgdXNlIHRoaXMgZm9yIGFueXRoaW5nIGV4Y2VwdCBwYWlycyAocGx1Z2lucyB3b3JraW5nIHdpdGggYGJhbGFuY2VfcGFpcnNgKS5cbi8vXG52YXIgX3J1bGVzMiA9IFtcbiAgWyAnYmFsYW5jZV9wYWlycycsICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvYmFsYW5jZV9wYWlycycpIF0sXG4gIFsgJ3N0cmlrZXRocm91Z2gnLCAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0cmlrZXRocm91Z2gnKS5wb3N0UHJvY2VzcyBdLFxuICBbICdlbXBoYXNpcycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbXBoYXNpcycpLnBvc3RQcm9jZXNzIF0sXG4gIC8vIHJ1bGVzIGZvciBwYWlycyBzZXBhcmF0ZSAnKionIGludG8gaXRzIG93biB0ZXh0IHRva2Vucywgd2hpY2ggbWF5IGJlIGxlZnQgdW51c2VkLFxuICAvLyBydWxlIGJlbG93IG1lcmdlcyB1bnVzZWQgc2VnbWVudHMgYmFjayB3aXRoIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG4gIFsgJ2ZyYWdtZW50c19qb2luJywgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2ZyYWdtZW50c19qb2luJykgXVxuXTtcblxuXG4vKipcbiAqIG5ldyBQYXJzZXJJbmxpbmUoKVxuICoqL1xuZnVuY3Rpb24gUGFyc2VySW5saW5lKCkge1xuICB2YXIgaTtcblxuICAvKipcbiAgICogUGFyc2VySW5saW5lI3J1bGVyIC0+IFJ1bGVyXG4gICAqXG4gICAqIFtbUnVsZXJdXSBpbnN0YW5jZS4gS2VlcCBjb25maWd1cmF0aW9uIG9mIGlubGluZSBydWxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVyID0gbmV3IFJ1bGVyKCk7XG5cbiAgZm9yIChpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VySW5saW5lI3J1bGVyMiAtPiBSdWxlclxuICAgKlxuICAgKiBbW1J1bGVyXV0gaW5zdGFuY2UuIFNlY29uZCBydWxlciB1c2VkIGZvciBwb3N0LXByb2Nlc3NpbmdcbiAgICogKGUuZy4gaW4gZW1waGFzaXMtbGlrZSBydWxlcykuXG4gICAqKi9cbiAgdGhpcy5ydWxlcjIgPSBuZXcgUnVsZXIoKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgX3J1bGVzMi5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIyLnB1c2goX3J1bGVzMltpXVswXSwgX3J1bGVzMltpXVsxXSk7XG4gIH1cbn1cblxuXG4vLyBTa2lwIHNpbmdsZSB0b2tlbiBieSBydW5uaW5nIGFsbCBydWxlcyBpbiB2YWxpZGF0aW9uIG1vZGU7XG4vLyByZXR1cm5zIGB0cnVlYCBpZiBhbnkgcnVsZSByZXBvcnRlZCBzdWNjZXNzXG4vL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS5za2lwVG9rZW4gPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIG9rLCBpLCBwb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpLFxuICAgICAgbGVuID0gcnVsZXMubGVuZ3RoLFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZyxcbiAgICAgIGNhY2hlID0gc3RhdGUuY2FjaGU7XG5cblxuICBpZiAodHlwZW9mIGNhY2hlW3Bvc10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUucG9zID0gY2FjaGVbcG9zXTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPCBtYXhOZXN0aW5nKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAvLyBJbmNyZW1lbnQgc3RhdGUubGV2ZWwgYW5kIGRlY3JlbWVudCBpdCBsYXRlciB0byBsaW1pdCByZWN1cnNpb24uXG4gICAgICAvLyBJdCdzIGhhcm1sZXNzIHRvIGRvIGhlcmUsIGJlY2F1c2Ugbm8gdG9rZW5zIGFyZSBjcmVhdGVkLiBCdXQgaWRlYWxseSxcbiAgICAgIC8vIHdlJ2QgbmVlZCBhIHNlcGFyYXRlIHByaXZhdGUgc3RhdGUgdmFyaWFibGUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgIC8vXG4gICAgICBzdGF0ZS5sZXZlbCsrO1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgdHJ1ZSk7XG4gICAgICBzdGF0ZS5sZXZlbC0tO1xuXG4gICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVG9vIG11Y2ggbmVzdGluZywganVzdCBza2lwIHVudGlsIHRoZSBlbmQgb2YgdGhlIHBhcmFncmFwaC5cbiAgICAvL1xuICAgIC8vIE5PVEU6IHRoaXMgd2lsbCBjYXVzZSBsaW5rcyB0byBiZWhhdmUgaW5jb3JyZWN0bHkgaW4gdGhlIGZvbGxvd2luZyBjYXNlLFxuICAgIC8vICAgICAgIHdoZW4gYW4gYW1vdW50IG9mIGBbYCBpcyBleGFjdGx5IGVxdWFsIHRvIGBtYXhOZXN0aW5nICsgMWA6XG4gICAgLy9cbiAgICAvLyAgICAgICBbW1tbW1tbW1tbW1tbW1tbW1tbW1tmb29dKClcbiAgICAvL1xuICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBDTSBzdGFuZGFyZCB3aWxsIGFsbG93IG5lc3RlZCBsaW5rc1xuICAgIC8vICAgICAgICh3ZSBjYW4gcmVwbGFjZSBpdCBieSBwcmV2ZW50aW5nIGxpbmtzIGZyb20gYmVpbmcgcGFyc2VkIGluXG4gICAgLy8gICAgICAgdmFsaWRhdGlvbiBtb2RlKVxuICAgIC8vXG4gICAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4O1xuICB9XG5cbiAgaWYgKCFvaykgeyBzdGF0ZS5wb3MrKzsgfVxuICBjYWNoZVtwb3NdID0gc3RhdGUucG9zO1xufTtcblxuXG4vLyBHZW5lcmF0ZSB0b2tlbnMgZm9yIGlucHV0IHJhbmdlXG4vL1xuUGFyc2VySW5saW5lLnByb3RvdHlwZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB2YXIgb2ssIGksXG4gICAgICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpLFxuICAgICAgbGVuID0gcnVsZXMubGVuZ3RoLFxuICAgICAgZW5kID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWF4TmVzdGluZyA9IHN0YXRlLm1kLm9wdGlvbnMubWF4TmVzdGluZztcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgZW5kKSB7XG4gICAgLy8gVHJ5IGFsbCBwb3NzaWJsZSBydWxlcy5cbiAgICAvLyBPbiBzdWNjZXNzLCBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5wb3NgXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnRva2Vuc2BcbiAgICAvLyAtIHJldHVybiB0cnVlXG5cbiAgICBpZiAoc3RhdGUubGV2ZWwgPCBtYXhOZXN0aW5nKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgZmFsc2UpO1xuICAgICAgICBpZiAob2spIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2spIHtcbiAgICAgIGlmIChzdGF0ZS5wb3MgPj0gZW5kKSB7IGJyZWFrOyB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyY1tzdGF0ZS5wb3MrK107XG4gIH1cblxuICBpZiAoc3RhdGUucGVuZGluZykge1xuICAgIHN0YXRlLnB1c2hQZW5kaW5nKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBQYXJzZXJJbmxpbmUucGFyc2Uoc3RyLCBtZCwgZW52LCBvdXRUb2tlbnMpXG4gKlxuICogUHJvY2VzcyBpbnB1dCBzdHJpbmcgYW5kIHB1c2ggaW5saW5lIHRva2VucyBpbnRvIGBvdXRUb2tlbnNgXG4gKiovXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgbWQsIGVudiwgb3V0VG9rZW5zKSB7XG4gIHZhciBpLCBydWxlcywgbGVuO1xuICB2YXIgc3RhdGUgPSBuZXcgdGhpcy5TdGF0ZShzdHIsIG1kLCBlbnYsIG91dFRva2Vucyk7XG5cbiAgdGhpcy50b2tlbml6ZShzdGF0ZSk7XG5cbiAgcnVsZXMgPSB0aGlzLnJ1bGVyMi5nZXRSdWxlcygnJyk7XG4gIGxlbiA9IHJ1bGVzLmxlbmd0aDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBydWxlc1tpXShzdGF0ZSk7XG4gIH1cbn07XG5cblxuUGFyc2VySW5saW5lLnByb3RvdHlwZS5TdGF0ZSA9IHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VySW5saW5lO1xuIiwiLy8gQ29tbW9ubWFyayBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICB0cnVlLCAgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICB0cnVlLCAgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnbm9ybWFsaXplJyxcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICd0ZXh0X2pvaW4nXG4gICAgICBdXG4gICAgfSxcblxuICAgIGJsb2NrOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2ZlbmNlJyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaHRtbF9ibG9jaycsXG4gICAgICAgICdsaGVhZGluZycsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ3JlZmVyZW5jZScsXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2F1dG9saW5rJyxcbiAgICAgICAgJ2JhY2t0aWNrcycsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdlbnRpdHknLFxuICAgICAgICAnZXNjYXBlJyxcbiAgICAgICAgJ2h0bWxfaW5saW5lJyxcbiAgICAgICAgJ2ltYWdlJyxcbiAgICAgICAgJ2xpbmsnLFxuICAgICAgICAnbmV3bGluZScsXG4gICAgICAgICd0ZXh0J1xuICAgICAgXSxcbiAgICAgIHJ1bGVzMjogW1xuICAgICAgICAnYmFsYW5jZV9wYWlycycsXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdmcmFnbWVudHNfam9pbidcbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG4iLCIvLyBtYXJrZG93bi1pdCBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBDb3VsZCBiZSBlaXRoZXIgYSBTdHJpbmcgb3IgYW4gQXJyYXkuXG4gICAgLy9cbiAgICAvLyBGb3IgZXhhbXBsZSwgeW91IGNhbiB1c2UgJ8KrwrvigJ7igJwnIGZvciBSdXNzaWFuLCAn4oCe4oCc4oCa4oCYJyBmb3IgR2VybWFuLFxuICAgIC8vIGFuZCBbJ8KrXFx4QTAnLCAnXFx4QTDCuycsICfigLlcXHhBMCcsICdcXHhBMOKAuiddIGZvciBGcmVuY2ggKGluY2x1ZGluZyBuYnNwKS5cbiAgICBxdW90ZXM6ICdcXHUyMDFjXFx1MjAxZFxcdTIwMThcXHUyMDE5JywgLyog4oCc4oCd4oCY4oCZICovXG5cbiAgICAvLyBIaWdobGlnaHRlciBmdW5jdGlvbi4gU2hvdWxkIHJldHVybiBlc2NhcGVkIEhUTUwsXG4gICAgLy8gb3IgJycgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaXMgbm90IGNoYW5nZWQgYW5kIHNob3VsZCBiZSBlc2NhcGVkIGV4dGVybmFseS5cbiAgICAvLyBJZiByZXN1bHQgc3RhcnRzIHdpdGggPHByZS4uLiBpbnRlcm5hbCB3cmFwcGVyIGlzIHNraXBwZWQuXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMTAwICAgICAgICAgICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge30sXG4gICAgYmxvY2s6IHt9LFxuICAgIGlubGluZToge31cbiAgfVxufTtcbiIsIi8vIFwiWmVyb1wiIHByZXNldCwgd2l0aCBub3RoaW5nIGVuYWJsZWQuIFVzZWZ1bCBmb3IgbWFudWFsIGNvbmZpZ3VyaW5nIG9mIHNpbXBsZVxuLy8gbW9kZXMuIEZvciBleGFtcGxlLCB0byBwYXJzZSBib2xkL2l0YWxpYyBvbmx5LlxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIGZhbHNlLCAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIGZhbHNlLCAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIENvdWxkIGJlIGVpdGhlciBhIFN0cmluZyBvciBhbiBBcnJheS5cbiAgICAvL1xuICAgIC8vIEZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSAnwqvCu+KAnuKAnCcgZm9yIFJ1c3NpYW4sICfigJ7igJzigJrigJgnIGZvciBHZXJtYW4sXG4gICAgLy8gYW5kIFsnwqtcXHhBMCcsICdcXHhBMMK7JywgJ+KAuVxceEEwJywgJ1xceEEw4oC6J10gZm9yIEZyZW5jaCAoaW5jbHVkaW5nIG5ic3ApLlxuICAgIHF1b3RlczogJ1xcdTIwMWNcXHUyMDFkXFx1MjAxOFxcdTIwMTknLCAvKiDigJzigJ3igJjigJkgKi9cblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiB0aGUgc291cmNlIHN0cmluZyBpcyBub3QgY2hhbmdlZCBhbmQgc2hvdWxkIGJlIGVzY2FwZWQgZXh0ZXJuYWx5LlxuICAgIC8vIElmIHJlc3VsdCBzdGFydHMgd2l0aCA8cHJlLi4uIGludGVybmFsIHdyYXBwZXIgaXMgc2tpcHBlZC5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uICgvKnN0ciwgbGFuZyovKSB7IHJldHVybiAnJzsgfVxuICAgIC8vXG4gICAgaGlnaGxpZ2h0OiBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAyMCAgICAgICAgICAgIC8vIEludGVybmFsIHByb3RlY3Rpb24sIHJlY3Vyc2lvbiBsaW1pdFxuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcblxuICAgIGNvcmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdub3JtYWxpemUnLFxuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnaW5saW5lJyxcbiAgICAgICAgJ3RleHRfam9pbidcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdwYXJhZ3JhcGgnXG4gICAgICBdXG4gICAgfSxcblxuICAgIGlubGluZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ3RleHQnXG4gICAgICBdLFxuICAgICAgcnVsZXMyOiBbXG4gICAgICAgICdiYWxhbmNlX3BhaXJzJyxcbiAgICAgICAgJ2ZyYWdtZW50c19qb2luJ1xuICAgICAgXVxuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuICogY2xhc3MgUmVuZGVyZXJcbiAqXG4gKiBHZW5lcmF0ZXMgSFRNTCBmcm9tIHBhcnNlZCB0b2tlbiBzdHJlYW0uIEVhY2ggaW5zdGFuY2UgaGFzIGluZGVwZW5kZW50XG4gKiBjb3B5IG9mIHJ1bGVzLiBUaG9zZSBjYW4gYmUgcmV3cml0dGVuIHdpdGggZWFzZS4gQWxzbywgeW91IGNhbiBhZGQgbmV3XG4gKiBydWxlcyBpZiB5b3UgY3JlYXRlIHBsdWdpbiBhbmQgYWRkcyBuZXcgdG9rZW4gdHlwZXMuXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGFzc2lnbiAgICAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuYXNzaWduO1xudmFyIHVuZXNjYXBlQWxsICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVBbGw7XG52YXIgZXNjYXBlSHRtbCAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5lc2NhcGVIdG1sO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBkZWZhdWx0X3J1bGVzID0ge307XG5cblxuZGVmYXVsdF9ydWxlcy5jb2RlX2lubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG5cbiAgcmV0dXJuICAnPGNvZGUnICsgc2xmLnJlbmRlckF0dHJzKHRva2VuKSArICc+JyArXG4gICAgICAgICAgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArXG4gICAgICAgICAgJzwvY29kZT4nO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLmNvZGVfYmxvY2sgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2xmKSB7XG4gIHZhciB0b2tlbiA9IHRva2Vuc1tpZHhdO1xuXG4gIHJldHVybiAgJzxwcmUnICsgc2xmLnJlbmRlckF0dHJzKHRva2VuKSArICc+PGNvZGU+JyArXG4gICAgICAgICAgZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KSArXG4gICAgICAgICAgJzwvY29kZT48L3ByZT5cXG4nO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLmZlbmNlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNsZikge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XSxcbiAgICAgIGluZm8gPSB0b2tlbi5pbmZvID8gdW5lc2NhcGVBbGwodG9rZW4uaW5mbykudHJpbSgpIDogJycsXG4gICAgICBsYW5nTmFtZSA9ICcnLFxuICAgICAgbGFuZ0F0dHJzID0gJycsXG4gICAgICBoaWdobGlnaHRlZCwgaSwgYXJyLCB0bXBBdHRycywgdG1wVG9rZW47XG5cbiAgaWYgKGluZm8pIHtcbiAgICBhcnIgPSBpbmZvLnNwbGl0KC8oXFxzKykvZyk7XG4gICAgbGFuZ05hbWUgPSBhcnJbMF07XG4gICAgbGFuZ0F0dHJzID0gYXJyLnNsaWNlKDIpLmpvaW4oJycpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgaGlnaGxpZ2h0ZWQgPSBvcHRpb25zLmhpZ2hsaWdodCh0b2tlbi5jb250ZW50LCBsYW5nTmFtZSwgbGFuZ0F0dHJzKSB8fCBlc2NhcGVIdG1sKHRva2VuLmNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZ2hsaWdodGVkID0gZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KTtcbiAgfVxuXG4gIGlmIChoaWdobGlnaHRlZC5pbmRleE9mKCc8cHJlJykgPT09IDApIHtcbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWQgKyAnXFxuJztcbiAgfVxuXG4gIC8vIElmIGxhbmd1YWdlIGV4aXN0cywgaW5qZWN0IGNsYXNzIGdlbnRseSwgd2l0aG91dCBtb2RpZnlpbmcgb3JpZ2luYWwgdG9rZW4uXG4gIC8vIE1heSBiZSwgb25lIGRheSB3ZSB3aWxsIGFkZCAuZGVlcENsb25lKCkgZm9yIHRva2VuIGFuZCBzaW1wbGlmeSB0aGlzIHBhcnQsIGJ1dFxuICAvLyBub3cgd2UgcHJlZmVyIHRvIGtlZXAgdGhpbmdzIGxvY2FsLlxuICBpZiAoaW5mbykge1xuICAgIGkgICAgICAgID0gdG9rZW4uYXR0ckluZGV4KCdjbGFzcycpO1xuICAgIHRtcEF0dHJzID0gdG9rZW4uYXR0cnMgPyB0b2tlbi5hdHRycy5zbGljZSgpIDogW107XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRtcEF0dHJzLnB1c2goWyAnY2xhc3MnLCBvcHRpb25zLmxhbmdQcmVmaXggKyBsYW5nTmFtZSBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wQXR0cnNbaV0gPSB0bXBBdHRyc1tpXS5zbGljZSgpO1xuICAgICAgdG1wQXR0cnNbaV1bMV0gKz0gJyAnICsgb3B0aW9ucy5sYW5nUHJlZml4ICsgbGFuZ05hbWU7XG4gICAgfVxuXG4gICAgLy8gRmFrZSB0b2tlbiBqdXN0IHRvIHJlbmRlciBhdHRyaWJ1dGVzXG4gICAgdG1wVG9rZW4gPSB7XG4gICAgICBhdHRyczogdG1wQXR0cnNcbiAgICB9O1xuXG4gICAgcmV0dXJuICAnPHByZT48Y29kZScgKyBzbGYucmVuZGVyQXR0cnModG1wVG9rZW4pICsgJz4nXG4gICAgICAgICAgKyBoaWdobGlnaHRlZFxuICAgICAgICAgICsgJzwvY29kZT48L3ByZT5cXG4nO1xuICB9XG5cblxuICByZXR1cm4gICc8cHJlPjxjb2RlJyArIHNsZi5yZW5kZXJBdHRycyh0b2tlbikgKyAnPidcbiAgICAgICAgKyBoaWdobGlnaHRlZFxuICAgICAgICArICc8L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblxuZGVmYXVsdF9ydWxlcy5pbWFnZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG5cbiAgLy8gXCJhbHRcIiBhdHRyIE1VU1QgYmUgc2V0LCBldmVuIGlmIGVtcHR5LiBCZWNhdXNlIGl0J3MgbWFuZGF0b3J5IGFuZFxuICAvLyBzaG91bGQgYmUgcGxhY2VkIG9uIHByb3BlciBwb3NpdGlvbiBmb3IgdGVzdHMuXG4gIC8vXG4gIC8vIFJlcGxhY2UgY29udGVudCB3aXRoIGFjdHVhbCB2YWx1ZVxuXG4gIHRva2VuLmF0dHJzW3Rva2VuLmF0dHJJbmRleCgnYWx0JyldWzFdID1cbiAgICBzbGYucmVuZGVySW5saW5lQXNUZXh0KHRva2VuLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpO1xuXG4gIHJldHVybiBzbGYucmVuZGVyVG9rZW4odG9rZW5zLCBpZHgsIG9wdGlvbnMpO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLmhhcmRicmVhayA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucyAvKiwgZW52ICovKSB7XG4gIHJldHVybiBvcHRpb25zLnhodG1sT3V0ID8gJzxiciAvPlxcbicgOiAnPGJyPlxcbic7XG59O1xuZGVmYXVsdF9ydWxlcy5zb2Z0YnJlYWsgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy5icmVha3MgPyAob3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nKSA6ICdcXG4nO1xufTtcblxuXG5kZWZhdWx0X3J1bGVzLnRleHQgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gZXNjYXBlSHRtbCh0b2tlbnNbaWR4XS5jb250ZW50KTtcbn07XG5cblxuZGVmYXVsdF9ydWxlcy5odG1sX2Jsb2NrID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLmNvbnRlbnQ7XG59O1xuZGVmYXVsdF9ydWxlcy5odG1sX2lubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS5jb250ZW50O1xufTtcblxuXG4vKipcbiAqIG5ldyBSZW5kZXJlcigpXG4gKlxuICogQ3JlYXRlcyBuZXcgW1tSZW5kZXJlcl1dIGluc3RhbmNlIGFuZCBmaWxsIFtbUmVuZGVyZXIjcnVsZXNdXSB3aXRoIGRlZmF1bHRzLlxuICoqL1xuZnVuY3Rpb24gUmVuZGVyZXIoKSB7XG5cbiAgLyoqXG4gICAqIFJlbmRlcmVyI3J1bGVzIC0+IE9iamVjdFxuICAgKlxuICAgKiBDb250YWlucyByZW5kZXIgcnVsZXMgZm9yIHRva2Vucy4gQ2FuIGJlIHVwZGF0ZWQgYW5kIGV4dGVuZGVkLlxuICAgKlxuICAgKiAjIyMjIyBFeGFtcGxlXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogdmFyIG1kID0gcmVxdWlyZSgnbWFya2Rvd24taXQnKSgpO1xuICAgKlxuICAgKiBtZC5yZW5kZXJlci5ydWxlcy5zdHJvbmdfb3BlbiAgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnPGI+JzsgfTtcbiAgICogbWQucmVuZGVyZXIucnVsZXMuc3Ryb25nX2Nsb3NlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJzwvYj4nOyB9O1xuICAgKlxuICAgKiB2YXIgcmVzdWx0ID0gbWQucmVuZGVySW5saW5lKC4uLik7XG4gICAqIGBgYFxuICAgKlxuICAgKiBFYWNoIHJ1bGUgaXMgY2FsbGVkIGFzIGluZGVwZW5kZW50IHN0YXRpYyBmdW5jdGlvbiB3aXRoIGZpeGVkIHNpZ25hdHVyZTpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBmdW5jdGlvbiBteV90b2tlbl9yZW5kZXIodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgcmVuZGVyZXIpIHtcbiAgICogICAvLyAuLi5cbiAgICogICByZXR1cm4gcmVuZGVyZWRIVE1MO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBTZWUgW3NvdXJjZSBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQvYmxvYi9tYXN0ZXIvbGliL3JlbmRlcmVyLmpzKVxuICAgKiBmb3IgbW9yZSBkZXRhaWxzIGFuZCBleGFtcGxlcy5cbiAgICoqL1xuICB0aGlzLnJ1bGVzID0gYXNzaWduKHt9LCBkZWZhdWx0X3J1bGVzKTtcbn1cblxuXG4vKipcbiAqIFJlbmRlcmVyLnJlbmRlckF0dHJzKHRva2VuKSAtPiBTdHJpbmdcbiAqXG4gKiBSZW5kZXIgdG9rZW4gYXR0cmlidXRlcyB0byBzdHJpbmcuXG4gKiovXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVyQXR0cnMgPSBmdW5jdGlvbiByZW5kZXJBdHRycyh0b2tlbikge1xuICB2YXIgaSwgbCwgcmVzdWx0O1xuXG4gIGlmICghdG9rZW4uYXR0cnMpIHsgcmV0dXJuICcnOyB9XG5cbiAgcmVzdWx0ID0gJyc7XG5cbiAgZm9yIChpID0gMCwgbCA9IHRva2VuLmF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHJlc3VsdCArPSAnICcgKyBlc2NhcGVIdG1sKHRva2VuLmF0dHJzW2ldWzBdKSArICc9XCInICsgZXNjYXBlSHRtbCh0b2tlbi5hdHRyc1tpXVsxXSkgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXJlci5yZW5kZXJUb2tlbih0b2tlbnMsIGlkeCwgb3B0aW9ucykgLT4gU3RyaW5nXG4gKiAtIHRva2VucyAoQXJyYXkpOiBsaXN0IG9mIHRva2Vuc1xuICogLSBpZHggKE51bWJlZCk6IHRva2VuIGluZGV4IHRvIHJlbmRlclxuICogLSBvcHRpb25zIChPYmplY3QpOiBwYXJhbXMgb2YgcGFyc2VyIGluc3RhbmNlXG4gKlxuICogRGVmYXVsdCB0b2tlbiByZW5kZXJlci4gQ2FuIGJlIG92ZXJyaWRlbiBieSBjdXN0b20gZnVuY3Rpb25cbiAqIGluIFtbUmVuZGVyZXIjcnVsZXNdXS5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbiA9IGZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VucywgaWR4LCBvcHRpb25zKSB7XG4gIHZhciBuZXh0VG9rZW4sXG4gICAgICByZXN1bHQgPSAnJyxcbiAgICAgIG5lZWRMZiA9IGZhbHNlLFxuICAgICAgdG9rZW4gPSB0b2tlbnNbaWR4XTtcblxuICAvLyBUaWdodCBsaXN0IHBhcmFncmFwaHNcbiAgaWYgKHRva2VuLmhpZGRlbikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEluc2VydCBhIG5ld2xpbmUgYmV0d2VlbiBoaWRkZW4gcGFyYWdyYXBoIGFuZCBzdWJzZXF1ZW50IG9wZW5pbmdcbiAgLy8gYmxvY2stbGV2ZWwgdGFnLlxuICAvL1xuICAvLyBGb3IgZXhhbXBsZSwgaGVyZSB3ZSBzaG91bGQgaW5zZXJ0IGEgbmV3bGluZSBiZWZvcmUgYmxvY2txdW90ZTpcbiAgLy8gIC0gYVxuICAvLyAgICA+XG4gIC8vXG4gIGlmICh0b2tlbi5ibG9jayAmJiB0b2tlbi5uZXN0aW5nICE9PSAtMSAmJiBpZHggJiYgdG9rZW5zW2lkeCAtIDFdLmhpZGRlbikge1xuICAgIHJlc3VsdCArPSAnXFxuJztcbiAgfVxuXG4gIC8vIEFkZCB0b2tlbiBuYW1lLCBlLmcuIGA8aW1nYFxuICByZXN1bHQgKz0gKHRva2VuLm5lc3RpbmcgPT09IC0xID8gJzwvJyA6ICc8JykgKyB0b2tlbi50YWc7XG5cbiAgLy8gRW5jb2RlIGF0dHJpYnV0ZXMsIGUuZy4gYDxpbWcgc3JjPVwiZm9vXCJgXG4gIHJlc3VsdCArPSB0aGlzLnJlbmRlckF0dHJzKHRva2VuKTtcblxuICAvLyBBZGQgYSBzbGFzaCBmb3Igc2VsZi1jbG9zaW5nIHRhZ3MsIGUuZy4gYDxpbWcgc3JjPVwiZm9vXCIgL2BcbiAgaWYgKHRva2VuLm5lc3RpbmcgPT09IDAgJiYgb3B0aW9ucy54aHRtbE91dCkge1xuICAgIHJlc3VsdCArPSAnIC8nO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBhZGQgYSBuZXdsaW5lIGFmdGVyIHRoaXMgdGFnXG4gIGlmICh0b2tlbi5ibG9jaykge1xuICAgIG5lZWRMZiA9IHRydWU7XG5cbiAgICBpZiAodG9rZW4ubmVzdGluZyA9PT0gMSkge1xuICAgICAgaWYgKGlkeCArIDEgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRUb2tlbiA9IHRva2Vuc1tpZHggKyAxXTtcblxuICAgICAgICBpZiAobmV4dFRva2VuLnR5cGUgPT09ICdpbmxpbmUnIHx8IG5leHRUb2tlbi5oaWRkZW4pIHtcbiAgICAgICAgICAvLyBCbG9jay1sZXZlbCB0YWcgY29udGFpbmluZyBhbiBpbmxpbmUgdGFnLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgbmVlZExmID0gZmFsc2U7XG5cbiAgICAgICAgfSBlbHNlIGlmIChuZXh0VG9rZW4ubmVzdGluZyA9PT0gLTEgJiYgbmV4dFRva2VuLnRhZyA9PT0gdG9rZW4udGFnKSB7XG4gICAgICAgICAgLy8gT3BlbmluZyB0YWcgKyBjbG9zaW5nIHRhZyBvZiB0aGUgc2FtZSB0eXBlLiBFLmcuIGA8bGk+PC9saT5gLlxuICAgICAgICAgIC8vXG4gICAgICAgICAgbmVlZExmID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXN1bHQgKz0gbmVlZExmID8gJz5cXG4nIDogJz4nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVySW5saW5lKHRva2Vucywgb3B0aW9ucywgZW52KSAtPiBTdHJpbmdcbiAqIC0gdG9rZW5zIChBcnJheSk6IGxpc3Qgb24gYmxvY2sgdG9rZW5zIHRvIHJlbmRlclxuICogLSBvcHRpb25zIChPYmplY3QpOiBwYXJhbXMgb2YgcGFyc2VyIGluc3RhbmNlXG4gKiAtIGVudiAoT2JqZWN0KTogYWRkaXRpb25hbCBkYXRhIGZyb20gcGFyc2VkIGlucHV0IChyZWZlcmVuY2VzLCBmb3IgZXhhbXBsZSlcbiAqXG4gKiBUaGUgc2FtZSBhcyBbW1JlbmRlcmVyLnJlbmRlcl1dLCBidXQgZm9yIHNpbmdsZSB0b2tlbiBvZiBgaW5saW5lYCB0eXBlLlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgdHlwZSxcbiAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgcnVsZXMgPSB0aGlzLnJ1bGVzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB0eXBlID0gdG9rZW5zW2ldLnR5cGU7XG5cbiAgICBpZiAodHlwZW9mIHJ1bGVzW3R5cGVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ICs9IHJ1bGVzW3R5cGVdKHRva2VucywgaSwgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVyVG9rZW4odG9rZW5zLCBpLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogaW50ZXJuYWxcbiAqIFJlbmRlcmVyLnJlbmRlcklubGluZUFzVGV4dCh0b2tlbnMsIG9wdGlvbnMsIGVudikgLT4gU3RyaW5nXG4gKiAtIHRva2VucyAoQXJyYXkpOiBsaXN0IG9uIGJsb2NrIHRva2VucyB0byByZW5kZXJcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcGFyYW1zIG9mIHBhcnNlciBpbnN0YW5jZVxuICogLSBlbnYgKE9iamVjdCk6IGFkZGl0aW9uYWwgZGF0YSBmcm9tIHBhcnNlZCBpbnB1dCAocmVmZXJlbmNlcywgZm9yIGV4YW1wbGUpXG4gKlxuICogU3BlY2lhbCBrbHVkZ2UgZm9yIGltYWdlIGBhbHRgIGF0dHJpYnV0ZXMgdG8gY29uZm9ybSBDb21tb25NYXJrIHNwZWMuXG4gKiBEb24ndCB0cnkgdG8gdXNlIGl0ISBTcGVjIHJlcXVpcmVzIHRvIHNob3cgYGFsdGAgY29udGVudCB3aXRoIHN0cmlwcGVkIG1hcmt1cCxcbiAqIGluc3RlYWQgb2Ygc2ltcGxlIGVzY2FwaW5nLlxuICoqL1xuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlcklubGluZUFzVGV4dCA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICh0b2tlbnNbaV0udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICByZXN1bHQgKz0gdG9rZW5zW2ldLmNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0b2tlbnNbaV0udHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVySW5saW5lQXNUZXh0KHRva2Vuc1tpXS5jaGlsZHJlbiwgb3B0aW9ucywgZW52KTtcbiAgICB9IGVsc2UgaWYgKHRva2Vuc1tpXS50eXBlID09PSAnc29mdGJyZWFrJykge1xuICAgICAgcmVzdWx0ICs9ICdcXG4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyZXIucmVuZGVyKHRva2Vucywgb3B0aW9ucywgZW52KSAtPiBTdHJpbmdcbiAqIC0gdG9rZW5zIChBcnJheSk6IGxpc3Qgb24gYmxvY2sgdG9rZW5zIHRvIHJlbmRlclxuICogLSBvcHRpb25zIChPYmplY3QpOiBwYXJhbXMgb2YgcGFyc2VyIGluc3RhbmNlXG4gKiAtIGVudiAoT2JqZWN0KTogYWRkaXRpb25hbCBkYXRhIGZyb20gcGFyc2VkIGlucHV0IChyZWZlcmVuY2VzLCBmb3IgZXhhbXBsZSlcbiAqXG4gKiBUYWtlcyB0b2tlbiBzdHJlYW0gYW5kIGdlbmVyYXRlcyBIVE1MLiBQcm9iYWJseSwgeW91IHdpbGwgbmV2ZXIgbmVlZCB0byBjYWxsXG4gKiB0aGlzIG1ldGhvZCBkaXJlY3RseS5cbiAqKi9cblJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAodG9rZW5zLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIGksIGxlbiwgdHlwZSxcbiAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgcnVsZXMgPSB0aGlzLnJ1bGVzO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHR5cGUgPSB0b2tlbnNbaV0udHlwZTtcblxuICAgIGlmICh0eXBlID09PSAnaW5saW5lJykge1xuICAgICAgcmVzdWx0ICs9IHRoaXMucmVuZGVySW5saW5lKHRva2Vuc1tpXS5jaGlsZHJlbiwgb3B0aW9ucywgZW52KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBydWxlc1t0eXBlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCArPSBydWxlc1t0b2tlbnNbaV0udHlwZV0odG9rZW5zLCBpLCBvcHRpb25zLCBlbnYsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJUb2tlbih0b2tlbnMsIGksIG9wdGlvbnMsIGVudik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVuZGVyZXI7XG4iLCIvKipcbiAqIGNsYXNzIFJ1bGVyXG4gKlxuICogSGVscGVyIGNsYXNzLCB1c2VkIGJ5IFtbTWFya2Rvd25JdCNjb3JlXV0sIFtbTWFya2Rvd25JdCNibG9ja11dIGFuZFxuICogW1tNYXJrZG93bkl0I2lubGluZV1dIHRvIG1hbmFnZSBzZXF1ZW5jZXMgb2YgZnVuY3Rpb25zIChydWxlcyk6XG4gKlxuICogLSBrZWVwIHJ1bGVzIGluIGRlZmluZWQgb3JkZXJcbiAqIC0gYXNzaWduIHRoZSBuYW1lIHRvIGVhY2ggcnVsZVxuICogLSBlbmFibGUvZGlzYWJsZSBydWxlc1xuICogLSBhZGQvcmVwbGFjZSBydWxlc1xuICogLSBhbGxvdyBhc3NpZ24gcnVsZXMgdG8gYWRkaXRpb25hbCBuYW1lZCBjaGFpbnMgKGluIHRoZSBzYW1lKVxuICogLSBjYWNoZWluZyBsaXN0cyBvZiBhY3RpdmUgcnVsZXNcbiAqXG4gKiBZb3Ugd2lsbCBub3QgbmVlZCB1c2UgdGhpcyBjbGFzcyBkaXJlY3RseSB1bnRpbCB3cml0ZSBwbHVnaW5zLiBGb3Igc2ltcGxlXG4gKiBydWxlcyBjb250cm9sIHVzZSBbW01hcmtkb3duSXQuZGlzYWJsZV1dLCBbW01hcmtkb3duSXQuZW5hYmxlXV0gYW5kXG4gKiBbW01hcmtkb3duSXQudXNlXV0uXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cblxuLyoqXG4gKiBuZXcgUnVsZXIoKVxuICoqL1xuZnVuY3Rpb24gUnVsZXIoKSB7XG4gIC8vIExpc3Qgb2YgYWRkZWQgcnVsZXMuIEVhY2ggZWxlbWVudCBpczpcbiAgLy9cbiAgLy8ge1xuICAvLyAgIG5hbWU6IFhYWCxcbiAgLy8gICBlbmFibGVkOiBCb29sZWFuLFxuICAvLyAgIGZuOiBGdW5jdGlvbigpLFxuICAvLyAgIGFsdDogWyBuYW1lMiwgbmFtZTMgXVxuICAvLyB9XG4gIC8vXG4gIHRoaXMuX19ydWxlc19fID0gW107XG5cbiAgLy8gQ2FjaGVkIHJ1bGUgY2hhaW5zLlxuICAvL1xuICAvLyBGaXJzdCBsZXZlbCAtIGNoYWluIG5hbWUsICcnIGZvciBkZWZhdWx0LlxuICAvLyBTZWNvbmQgbGV2ZWwgLSBkaWdpbmFsIGFuY2hvciBmb3IgZmFzdCBmaWx0ZXJpbmcgYnkgY2hhcmNvZGVzLlxuICAvL1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBIZWxwZXIgbWV0aG9kcywgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5XG5cblxuLy8gRmluZCBydWxlIGluZGV4IGJ5IG5hbWVcbi8vXG5SdWxlci5wcm90b3R5cGUuX19maW5kX18gPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX19ydWxlc19fLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuX19ydWxlc19fW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8vIEJ1aWxkIHJ1bGVzIGxvb2t1cCBjYWNoZVxuLy9cblJ1bGVyLnByb3RvdHlwZS5fX2NvbXBpbGVfXyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2hhaW5zID0gWyAnJyBdO1xuXG4gIC8vIGNvbGxlY3QgdW5pcXVlIG5hbWVzXG4gIHNlbGYuX19ydWxlc19fLmZvckVhY2goZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBpZiAoIXJ1bGUuZW5hYmxlZCkgeyByZXR1cm47IH1cblxuICAgIHJ1bGUuYWx0LmZvckVhY2goZnVuY3Rpb24gKGFsdE5hbWUpIHtcbiAgICAgIGlmIChjaGFpbnMuaW5kZXhPZihhbHROYW1lKSA8IDApIHtcbiAgICAgICAgY2hhaW5zLnB1c2goYWx0TmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHNlbGYuX19jYWNoZV9fID0ge307XG5cbiAgY2hhaW5zLmZvckVhY2goZnVuY3Rpb24gKGNoYWluKSB7XG4gICAgc2VsZi5fX2NhY2hlX19bY2hhaW5dID0gW107XG4gICAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgaWYgKCFydWxlLmVuYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmIChjaGFpbiAmJiBydWxlLmFsdC5pbmRleE9mKGNoYWluKSA8IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHNlbGYuX19jYWNoZV9fW2NoYWluXS5wdXNoKHJ1bGUuZm4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5hdChuYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gbmFtZSAoU3RyaW5nKTogcnVsZSBuYW1lIHRvIHJlcGxhY2UuXG4gKiAtIGZuIChGdW5jdGlvbik6IG5ldyBydWxlIGZ1bmN0aW9uLlxuICogLSBvcHRpb25zIChPYmplY3QpOiBuZXcgcnVsZSBvcHRpb25zIChub3QgbWFuZGF0b3J5KS5cbiAqXG4gKiBSZXBsYWNlIHJ1bGUgYnkgbmFtZSB3aXRoIG5ldyBmdW5jdGlvbiAmIG9wdGlvbnMuIFRocm93cyBlcnJvciBpZiBuYW1lIG5vdFxuICogZm91bmQuXG4gKlxuICogIyMjIyMgT3B0aW9uczpcbiAqXG4gKiAtIF9fYWx0X18gLSBhcnJheSB3aXRoIG5hbWVzIG9mIFwiYWx0ZXJuYXRlXCIgY2hhaW5zLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBSZXBsYWNlIGV4aXN0aW5nIHR5cG9ncmFwaGVyIHJlcGxhY2VtZW50IHJ1bGUgd2l0aCBuZXcgb25lOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5jb3JlLnJ1bGVyLmF0KCdyZXBsYWNlbWVudHMnLCBmdW5jdGlvbiByZXBsYWNlKHN0YXRlKSB7XG4gKiAgIC8vLi4uXG4gKiB9KTtcbiAqIGBgYFxuICoqL1xuUnVsZXIucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuX19maW5kX18obmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHsgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBuYW1lKTsgfVxuXG4gIHRoaXMuX19ydWxlc19fW2luZGV4XS5mbiA9IGZuO1xuICB0aGlzLl9fcnVsZXNfX1tpbmRleF0uYWx0ID0gb3B0LmFsdCB8fCBbXTtcbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmJlZm9yZShiZWZvcmVOYW1lLCBydWxlTmFtZSwgZm4gWywgb3B0aW9uc10pXG4gKiAtIGJlZm9yZU5hbWUgKFN0cmluZyk6IG5ldyBydWxlIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoaXMgb25lLlxuICogLSBydWxlTmFtZSAoU3RyaW5nKTogbmFtZSBvZiBhZGRlZCBydWxlLlxuICogLSBmbiAoRnVuY3Rpb24pOiBydWxlIGZ1bmN0aW9uLlxuICogLSBvcHRpb25zIChPYmplY3QpOiBydWxlIG9wdGlvbnMgKG5vdCBtYW5kYXRvcnkpLlxuICpcbiAqIEFkZCBuZXcgcnVsZSB0byBjaGFpbiBiZWZvcmUgb25lIHdpdGggZ2l2ZW4gbmFtZS4gU2VlIGFsc29cbiAqIFtbUnVsZXIuYWZ0ZXJdXSwgW1tSdWxlci5wdXNoXV0uXG4gKlxuICogIyMjIyMgT3B0aW9uczpcbiAqXG4gKiAtIF9fYWx0X18gLSBhcnJheSB3aXRoIG5hbWVzIG9mIFwiYWx0ZXJuYXRlXCIgY2hhaW5zLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuYmxvY2sucnVsZXIuYmVmb3JlKCdwYXJhZ3JhcGgnLCAnbXlfcnVsZScsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAqICAgLy8uLi5cbiAqIH0pO1xuICogYGBgXG4gKiovXG5SdWxlci5wcm90b3R5cGUuYmVmb3JlID0gZnVuY3Rpb24gKGJlZm9yZU5hbWUsIHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaW5kZXggPSB0aGlzLl9fZmluZF9fKGJlZm9yZU5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7IHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYmVmb3JlTmFtZSk7IH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaW5kZXgsIDAsIHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmFmdGVyKGFmdGVyTmFtZSwgcnVsZU5hbWUsIGZuIFssIG9wdGlvbnNdKVxuICogLSBhZnRlck5hbWUgKFN0cmluZyk6IG5ldyBydWxlIHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhpcyBvbmUuXG4gKiAtIHJ1bGVOYW1lIChTdHJpbmcpOiBuYW1lIG9mIGFkZGVkIHJ1bGUuXG4gKiAtIGZuIChGdW5jdGlvbik6IHJ1bGUgZnVuY3Rpb24uXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHJ1bGUgb3B0aW9ucyAobm90IG1hbmRhdG9yeSkuXG4gKlxuICogQWRkIG5ldyBydWxlIHRvIGNoYWluIGFmdGVyIG9uZSB3aXRoIGdpdmVuIG5hbWUuIFNlZSBhbHNvXG4gKiBbW1J1bGVyLmJlZm9yZV1dLCBbW1J1bGVyLnB1c2hdXS5cbiAqXG4gKiAjIyMjIyBPcHRpb25zOlxuICpcbiAqIC0gX19hbHRfXyAtIGFycmF5IHdpdGggbmFtZXMgb2YgXCJhbHRlcm5hdGVcIiBjaGFpbnMuXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBtZCA9IHJlcXVpcmUoJ21hcmtkb3duLWl0JykoKTtcbiAqXG4gKiBtZC5pbmxpbmUucnVsZXIuYWZ0ZXIoJ3RleHQnLCAnbXlfcnVsZScsIGZ1bmN0aW9uIHJlcGxhY2Uoc3RhdGUpIHtcbiAqICAgLy8uLi5cbiAqIH0pO1xuICogYGBgXG4gKiovXG5SdWxlci5wcm90b3R5cGUuYWZ0ZXIgPSBmdW5jdGlvbiAoYWZ0ZXJOYW1lLCBydWxlTmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5fX2ZpbmRfXyhhZnRlck5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7IHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYWZ0ZXJOYW1lKTsgfVxuXG4gIHRoaXMuX19ydWxlc19fLnNwbGljZShpbmRleCArIDEsIDAsIHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBSdWxlci5wdXNoKHJ1bGVOYW1lLCBmbiBbLCBvcHRpb25zXSlcbiAqIC0gcnVsZU5hbWUgKFN0cmluZyk6IG5hbWUgb2YgYWRkZWQgcnVsZS5cbiAqIC0gZm4gKEZ1bmN0aW9uKTogcnVsZSBmdW5jdGlvbi5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogcnVsZSBvcHRpb25zIChub3QgbWFuZGF0b3J5KS5cbiAqXG4gKiBQdXNoIG5ldyBydWxlIHRvIHRoZSBlbmQgb2YgY2hhaW4uIFNlZSBhbHNvXG4gKiBbW1J1bGVyLmJlZm9yZV1dLCBbW1J1bGVyLmFmdGVyXV0uXG4gKlxuICogIyMjIyMgT3B0aW9uczpcbiAqXG4gKiAtIF9fYWx0X18gLSBhcnJheSB3aXRoIG5hbWVzIG9mIFwiYWx0ZXJuYXRlXCIgY2hhaW5zLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiB2YXIgbWQgPSByZXF1aXJlKCdtYXJrZG93bi1pdCcpKCk7XG4gKlxuICogbWQuY29yZS5ydWxlci5wdXNoKCdteV9ydWxlJywgZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICogICAvLy4uLlxuICogfSk7XG4gKiBgYGBcbiAqKi9cblJ1bGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLl9fcnVsZXNfXy5wdXNoKHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuXG4vKipcbiAqIFJ1bGVyLmVuYWJsZShsaXN0IFssIGlnbm9yZUludmFsaWRdKSAtPiBBcnJheVxuICogLSBsaXN0IChTdHJpbmd8QXJyYXkpOiBsaXN0IG9mIHJ1bGUgbmFtZXMgdG8gZW5hYmxlLlxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogRW5hYmxlIHJ1bGVzIHdpdGggZ2l2ZW4gbmFtZXMuIElmIGFueSBydWxlIG5hbWUgbm90IGZvdW5kIC0gdGhyb3cgRXJyb3IuXG4gKiBFcnJvcnMgY2FuIGJlIGRpc2FibGVkIGJ5IHNlY29uZCBwYXJhbS5cbiAqXG4gKiBSZXR1cm5zIGxpc3Qgb2YgZm91bmQgcnVsZSBuYW1lcyAoaWYgbm8gZXhjZXB0aW9uIGhhcHBlbmVkKS5cbiAqXG4gKiBTZWUgYWxzbyBbW1J1bGVyLmRpc2FibGVdXSwgW1tSdWxlci5lbmFibGVPbmx5XV0uXG4gKiovXG5SdWxlci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKGxpc3QsIGlnbm9yZUludmFsaWQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7IGxpc3QgPSBbIGxpc3QgXTsgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZW5hYmxlXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuXG4gICAgaWYgKGlkeCA8IDApIHtcbiAgICAgIGlmIChpZ25vcmVJbnZhbGlkKSB7IHJldHVybjsgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtYW5hZ2VyOiBpbnZhbGlkIHJ1bGUgbmFtZSAnICsgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX19ydWxlc19fW2lkeF0uZW5hYmxlZCA9IHRydWU7XG4gICAgcmVzdWx0LnB1c2gobmFtZSk7XG4gIH0sIHRoaXMpO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5lbmFibGVPbmx5KGxpc3QgWywgaWdub3JlSW52YWxpZF0pXG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBlbmFibGUgKHdoaXRlbGlzdCkuXG4gKiAtIGlnbm9yZUludmFsaWQgKEJvb2xlYW4pOiBzZXQgYHRydWVgIHRvIGlnbm9yZSBlcnJvcnMgd2hlbiBydWxlIG5vdCBmb3VuZC5cbiAqXG4gKiBFbmFibGUgcnVsZXMgd2l0aCBnaXZlbiBuYW1lcywgYW5kIGRpc2FibGUgZXZlcnl0aGluZyBlbHNlLiBJZiBhbnkgcnVsZSBuYW1lXG4gKiBub3QgZm91bmQgLSB0aHJvdyBFcnJvci4gRXJyb3JzIGNhbiBiZSBkaXNhYmxlZCBieSBzZWNvbmQgcGFyYW0uXG4gKlxuICogU2VlIGFsc28gW1tSdWxlci5kaXNhYmxlXV0sIFtbUnVsZXIuZW5hYmxlXV0uXG4gKiovXG5SdWxlci5wcm90b3R5cGUuZW5hYmxlT25seSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gWyBsaXN0IF07IH1cblxuICB0aGlzLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7IHJ1bGUuZW5hYmxlZCA9IGZhbHNlOyB9KTtcblxuICB0aGlzLmVuYWJsZShsaXN0LCBpZ25vcmVJbnZhbGlkKTtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5kaXNhYmxlKGxpc3QgWywgaWdub3JlSW52YWxpZF0pIC0+IEFycmF5XG4gKiAtIGxpc3QgKFN0cmluZ3xBcnJheSk6IGxpc3Qgb2YgcnVsZSBuYW1lcyB0byBkaXNhYmxlLlxuICogLSBpZ25vcmVJbnZhbGlkIChCb29sZWFuKTogc2V0IGB0cnVlYCB0byBpZ25vcmUgZXJyb3JzIHdoZW4gcnVsZSBub3QgZm91bmQuXG4gKlxuICogRGlzYWJsZSBydWxlcyB3aXRoIGdpdmVuIG5hbWVzLiBJZiBhbnkgcnVsZSBuYW1lIG5vdCBmb3VuZCAtIHRocm93IEVycm9yLlxuICogRXJyb3JzIGNhbiBiZSBkaXNhYmxlZCBieSBzZWNvbmQgcGFyYW0uXG4gKlxuICogUmV0dXJucyBsaXN0IG9mIGZvdW5kIHJ1bGUgbmFtZXMgKGlmIG5vIGV4Y2VwdGlvbiBoYXBwZW5lZCkuXG4gKlxuICogU2VlIGFsc28gW1tSdWxlci5lbmFibGVdXSwgW1tSdWxlci5lbmFibGVPbmx5XV0uXG4gKiovXG5SdWxlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBpZ25vcmVJbnZhbGlkKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkgeyBsaXN0ID0gWyBsaXN0IF07IH1cblxuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgLy8gU2VhcmNoIGJ5IG5hbWUgYW5kIGRpc2FibGVcbiAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG5cbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgaWYgKGlnbm9yZUludmFsaWQpIHsgcmV0dXJuOyB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fX3J1bGVzX19baWR4XS5lbmFibGVkID0gZmFsc2U7XG4gICAgcmVzdWx0LnB1c2gobmFtZSk7XG4gIH0sIHRoaXMpO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqXG4gKiBSdWxlci5nZXRSdWxlcyhjaGFpbk5hbWUpIC0+IEFycmF5XG4gKlxuICogUmV0dXJuIGFycmF5IG9mIGFjdGl2ZSBmdW5jdGlvbnMgKHJ1bGVzKSBmb3IgZ2l2ZW4gY2hhaW4gbmFtZS4gSXQgYW5hbHl6ZXNcbiAqIHJ1bGVzIGNvbmZpZ3VyYXRpb24sIGNvbXBpbGVzIGNhY2hlcyBpZiBub3QgZXhpc3RzIGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBEZWZhdWx0IGNoYWluIG5hbWUgaXMgYCcnYCAoZW1wdHkgc3RyaW5nKS4gSXQgY2FuJ3QgYmUgc2tpcHBlZC4gVGhhdCdzXG4gKiBkb25lIGludGVudGlvbmFsbHksIHRvIGtlZXAgc2lnbmF0dXJlIG1vbm9tb3JwaGljIGZvciBoaWdoIHNwZWVkLlxuICoqL1xuUnVsZXIucHJvdG90eXBlLmdldFJ1bGVzID0gZnVuY3Rpb24gKGNoYWluTmFtZSkge1xuICBpZiAodGhpcy5fX2NhY2hlX18gPT09IG51bGwpIHtcbiAgICB0aGlzLl9fY29tcGlsZV9fKCk7XG4gIH1cblxuICAvLyBDaGFpbiBjYW4gYmUgZW1wdHksIGlmIHJ1bGVzIGRpc2FibGVkLiBCdXQgd2Ugc3RpbGwgaGF2ZSB0byByZXR1cm4gQXJyYXkuXG4gIHJldHVybiB0aGlzLl9fY2FjaGVfX1tjaGFpbk5hbWVdIHx8IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlcjtcbiIsIi8vIEJsb2NrIHF1b3Rlc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJsb2NrcXVvdGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBhZGp1c3RUYWIsXG4gICAgICBjaCxcbiAgICAgIGksXG4gICAgICBpbml0aWFsLFxuICAgICAgbCxcbiAgICAgIGxhc3RMaW5lRW1wdHksXG4gICAgICBsaW5lcyxcbiAgICAgIG5leHRMaW5lLFxuICAgICAgb2Zmc2V0LFxuICAgICAgb2xkQk1hcmtzLFxuICAgICAgb2xkQlNDb3VudCxcbiAgICAgIG9sZEluZGVudCxcbiAgICAgIG9sZFBhcmVudFR5cGUsXG4gICAgICBvbGRTQ291bnQsXG4gICAgICBvbGRUU2hpZnQsXG4gICAgICBzcGFjZUFmdGVyTWFya2VyLFxuICAgICAgdGVybWluYXRlLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgdG9rZW4sXG4gICAgICBpc091dGRlbnRlZCxcbiAgICAgIG9sZExpbmVNYXggPSBzdGF0ZS5saW5lTWF4LFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGNoZWNrIHRoZSBibG9jayBxdW90ZSBtYXJrZXJcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKSAhPT0gMHgzRS8qID4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gd2Uga25vdyB0aGF0IGl0J3MgZ29pbmcgdG8gYmUgYSB2YWxpZCBibG9ja3F1b3RlLFxuICAvLyBzbyBubyBwb2ludCB0cnlpbmcgdG8gZmluZCB0aGUgZW5kIG9mIGl0IGluIHNpbGVudCBtb2RlXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBzZXQgb2Zmc2V0IHBhc3Qgc3BhY2VzIGFuZCBcIj5cIlxuICBpbml0aWFsID0gb2Zmc2V0ID0gc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gKyAxO1xuXG4gIC8vIHNraXAgb25lIG9wdGlvbmFsIHNwYWNlIGFmdGVyICc+J1xuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCAvKiBzcGFjZSAqLykge1xuICAgIC8vICcgPiAgIHRlc3QgJ1xuICAgIC8vICAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZTpcbiAgICBwb3MrKztcbiAgICBpbml0aWFsKys7XG4gICAgb2Zmc2V0Kys7XG4gICAgYWRqdXN0VGFiID0gZmFsc2U7XG4gICAgc3BhY2VBZnRlck1hcmtlciA9IHRydWU7XG4gIH0gZWxzZSBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgwOSAvKiB0YWIgKi8pIHtcbiAgICBzcGFjZUFmdGVyTWFya2VyID0gdHJ1ZTtcblxuICAgIGlmICgoc3RhdGUuYnNDb3VudFtzdGFydExpbmVdICsgb2Zmc2V0KSAlIDQgPT09IDMpIHtcbiAgICAgIC8vICcgID5cXHQgIHRlc3QgJ1xuICAgICAgLy8gICAgICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmUgKHRhYiBoYXMgd2lkdGg9PT0xKVxuICAgICAgcG9zKys7XG4gICAgICBpbml0aWFsKys7XG4gICAgICBvZmZzZXQrKztcbiAgICAgIGFkanVzdFRhYiA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAnID5cXHQgIHRlc3QgJ1xuICAgICAgLy8gICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmUgKyBzaGlmdCBic0NvdW50IHNsaWdodGx5XG4gICAgICAvLyAgICAgICAgIHRvIG1ha2UgZXh0cmEgc3BhY2UgYXBwZWFyXG4gICAgICBhZGp1c3RUYWIgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzcGFjZUFmdGVyTWFya2VyID0gZmFsc2U7XG4gIH1cblxuICBvbGRCTWFya3MgPSBbIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdIF07XG4gIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdID0gcG9zO1xuXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICBvZmZzZXQgKz0gNCAtIChvZmZzZXQgKyBzdGF0ZS5ic0NvdW50W3N0YXJ0TGluZV0gKyAoYWRqdXN0VGFiID8gMSA6IDApKSAlIDQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcG9zKys7XG4gIH1cblxuICBvbGRCU0NvdW50ID0gWyBzdGF0ZS5ic0NvdW50W3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuYnNDb3VudFtzdGFydExpbmVdID0gc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gKyAxICsgKHNwYWNlQWZ0ZXJNYXJrZXIgPyAxIDogMCk7XG5cbiAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgb2xkU0NvdW50ID0gWyBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSA9IG9mZnNldCAtIGluaXRpYWw7XG5cbiAgb2xkVFNoaWZ0ID0gWyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdibG9ja3F1b3RlJyk7XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAnYmxvY2txdW90ZSc7XG5cbiAgLy8gU2VhcmNoIHRoZSBlbmQgb2YgdGhlIGJsb2NrXG4gIC8vXG4gIC8vIEJsb2NrIGVuZHMgd2l0aCBlaXRoZXI6XG4gIC8vICAxLiBhbiBlbXB0eSBsaW5lIG91dHNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID4gdGVzdFxuICAvL1xuICAvLyAgICAgYGBgXG4gIC8vICAyLiBhbiBlbXB0eSBsaW5lIGluc2lkZTpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPlxuICAvLyAgICAgdGVzdFxuICAvLyAgICAgYGBgXG4gIC8vICAzLiBhbm90aGVyIHRhZzpcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vICAgICAgLSAtIC1cbiAgLy8gICAgIGBgYFxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgLy8gY2hlY2sgaWYgaXQncyBvdXRkZW50ZWQsIGkuZS4gaXQncyBpbnNpZGUgbGlzdCBpdGVtIGFuZCBpbmRlbnRlZFxuICAgIC8vIGxlc3MgdGhhbiBzYWlkIGxpc3QgaXRlbTpcbiAgICAvL1xuICAgIC8vIGBgYFxuICAgIC8vIDEuIGFueXRoaW5nXG4gICAgLy8gICAgPiBjdXJyZW50IGJsb2NrcXVvdGVcbiAgICAvLyAyLiBjaGVja2luZyB0aGlzIGxpbmVcbiAgICAvLyBgYGBcbiAgICBpc091dGRlbnRlZCA9IHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQ7XG5cbiAgICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaWYgKHBvcyA+PSBtYXgpIHtcbiAgICAgIC8vIENhc2UgMTogbGluZSBpcyBub3QgaW5zaWRlIHRoZSBibG9ja3F1b3RlLCBhbmQgdGhpcyBsaW5lIGlzIGVtcHR5LlxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKSA9PT0gMHgzRS8qID4gKi8gJiYgIWlzT3V0ZGVudGVkKSB7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgaW5zaWRlIHRoZSBibG9ja3F1b3RlLlxuXG4gICAgICAvLyBzZXQgb2Zmc2V0IHBhc3Qgc3BhY2VzIGFuZCBcIj5cIlxuICAgICAgaW5pdGlhbCA9IG9mZnNldCA9IHN0YXRlLnNDb3VudFtuZXh0TGluZV0gKyAxO1xuXG4gICAgICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwIC8qIHNwYWNlICovKSB7XG4gICAgICAgIC8vICcgPiAgIHRlc3QgJ1xuICAgICAgICAvLyAgICAgXiAtLSBwb3NpdGlvbiBzdGFydCBvZiBsaW5lIGhlcmU6XG4gICAgICAgIHBvcysrO1xuICAgICAgICBpbml0aWFsKys7XG4gICAgICAgIG9mZnNldCsrO1xuICAgICAgICBhZGp1c3RUYWIgPSBmYWxzZTtcbiAgICAgICAgc3BhY2VBZnRlck1hcmtlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4MDkgLyogdGFiICovKSB7XG4gICAgICAgIHNwYWNlQWZ0ZXJNYXJrZXIgPSB0cnVlO1xuXG4gICAgICAgIGlmICgoc3RhdGUuYnNDb3VudFtuZXh0TGluZV0gKyBvZmZzZXQpICUgNCA9PT0gMykge1xuICAgICAgICAgIC8vICcgID5cXHQgIHRlc3QgJ1xuICAgICAgICAgIC8vICAgICAgIF4gLS0gcG9zaXRpb24gc3RhcnQgb2YgbGluZSBoZXJlICh0YWIgaGFzIHdpZHRoPT09MSlcbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgICBpbml0aWFsKys7XG4gICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgICAgYWRqdXN0VGFiID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gJyA+XFx0ICB0ZXN0ICdcbiAgICAgICAgICAvLyAgICBeIC0tIHBvc2l0aW9uIHN0YXJ0IG9mIGxpbmUgaGVyZSArIHNoaWZ0IGJzQ291bnQgc2xpZ2h0bHlcbiAgICAgICAgICAvLyAgICAgICAgIHRvIG1ha2UgZXh0cmEgc3BhY2UgYXBwZWFyXG4gICAgICAgICAgYWRqdXN0VGFiID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhY2VBZnRlck1hcmtlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBvbGRCTWFya3MucHVzaChzdGF0ZS5iTWFya3NbbmV4dExpbmVdKTtcbiAgICAgIHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gPSBwb3M7XG5cbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgICAgIGlmIChpc1NwYWNlKGNoKSkge1xuICAgICAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDQgLSAob2Zmc2V0ICsgc3RhdGUuYnNDb3VudFtuZXh0TGluZV0gKyAoYWRqdXN0VGFiID8gMSA6IDApKSAlIDQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuXG4gICAgICBsYXN0TGluZUVtcHR5ID0gcG9zID49IG1heDtcblxuICAgICAgb2xkQlNDb3VudC5wdXNoKHN0YXRlLmJzQ291bnRbbmV4dExpbmVdKTtcbiAgICAgIHN0YXRlLmJzQ291bnRbbmV4dExpbmVdID0gc3RhdGUuc0NvdW50W25leHRMaW5lXSArIDEgKyAoc3BhY2VBZnRlck1hcmtlciA/IDEgOiAwKTtcblxuICAgICAgb2xkU0NvdW50LnB1c2goc3RhdGUuc0NvdW50W25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS5zQ291bnRbbmV4dExpbmVdID0gb2Zmc2V0IC0gaW5pdGlhbDtcblxuICAgICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSk7XG4gICAgICBzdGF0ZS50U2hpZnRbbmV4dExpbmVdID0gcG9zIC0gc3RhdGUuYk1hcmtzW25leHRMaW5lXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIENhc2UgMjogbGluZSBpcyBub3QgaW5zaWRlIHRoZSBibG9ja3F1b3RlLCBhbmQgdGhlIGxhc3QgbGluZSB3YXMgZW1wdHkuXG4gICAgaWYgKGxhc3RMaW5lRW1wdHkpIHsgYnJlYWs7IH1cblxuICAgIC8vIENhc2UgMzogYW5vdGhlciB0YWcgZm91bmQuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICAvLyBRdWlyayB0byBlbmZvcmNlIFwiaGFyZCB0ZXJtaW5hdGlvbiBtb2RlXCIgZm9yIHBhcmFncmFwaHM7XG4gICAgICAvLyBub3JtYWxseSBpZiB5b3UgY2FsbCBgdG9rZW5pemUoc3RhdGUsIHN0YXJ0TGluZSwgbmV4dExpbmUpYCxcbiAgICAgIC8vIHBhcmFncmFwaHMgd2lsbCBsb29rIGJlbG93IG5leHRMaW5lIGZvciBwYXJhZ3JhcGggY29udGludWF0aW9uLFxuICAgICAgLy8gYnV0IGlmIGJsb2NrcXVvdGUgaXMgdGVybWluYXRlZCBieSBhbm90aGVyIHRhZywgdGhleSBzaG91bGRuJ3RcbiAgICAgIHN0YXRlLmxpbmVNYXggPSBuZXh0TGluZTtcblxuICAgICAgaWYgKHN0YXRlLmJsa0luZGVudCAhPT0gMCkge1xuICAgICAgICAvLyBzdGF0ZS5ibGtJbmRlbnQgd2FzIG5vbi16ZXJvLCB3ZSBub3cgc2V0IGl0IHRvIHplcm8sXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcmUtY2FsY3VsYXRlIGFsbCBvZmZzZXRzIHRvIGFwcGVhciBhc1xuICAgICAgICAvLyBpZiBpbmRlbnQgd2Fzbid0IGNoYW5nZWRcbiAgICAgICAgb2xkQk1hcmtzLnB1c2goc3RhdGUuYk1hcmtzW25leHRMaW5lXSk7XG4gICAgICAgIG9sZEJTQ291bnQucHVzaChzdGF0ZS5ic0NvdW50W25leHRMaW5lXSk7XG4gICAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgICAgICBvbGRTQ291bnQucHVzaChzdGF0ZS5zQ291bnRbbmV4dExpbmVdKTtcbiAgICAgICAgc3RhdGUuc0NvdW50W25leHRMaW5lXSAtPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgIG9sZEJTQ291bnQucHVzaChzdGF0ZS5ic0NvdW50W25leHRMaW5lXSk7XG4gICAgb2xkVFNoaWZ0LnB1c2goc3RhdGUudFNoaWZ0W25leHRMaW5lXSk7XG4gICAgb2xkU0NvdW50LnB1c2goc3RhdGUuc0NvdW50W25leHRMaW5lXSk7XG5cbiAgICAvLyBBIG5lZ2F0aXZlIGluZGVudGF0aW9uIG1lYW5zIHRoYXQgdGhpcyBpcyBhIHBhcmFncmFwaCBjb250aW51YXRpb25cbiAgICAvL1xuICAgIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPSAtMTtcbiAgfVxuXG4gIG9sZEluZGVudCA9IHN0YXRlLmJsa0luZGVudDtcbiAgc3RhdGUuYmxrSW5kZW50ID0gMDtcblxuICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdibG9ja3F1b3RlX29wZW4nLCAnYmxvY2txdW90ZScsIDEpO1xuICB0b2tlbi5tYXJrdXAgPSAnPic7XG4gIHRva2VuLm1hcCAgICA9IGxpbmVzID0gWyBzdGFydExpbmUsIDAgXTtcblxuICBzdGF0ZS5tZC5ibG9jay50b2tlbml6ZShzdGF0ZSwgc3RhcnRMaW5lLCBuZXh0TGluZSk7XG5cbiAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnYmxvY2txdW90ZV9jbG9zZScsICdibG9ja3F1b3RlJywgLTEpO1xuICB0b2tlbi5tYXJrdXAgPSAnPic7XG5cbiAgc3RhdGUubGluZU1heCA9IG9sZExpbmVNYXg7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuICBsaW5lc1sxXSA9IHN0YXRlLmxpbmU7XG5cbiAgLy8gUmVzdG9yZSBvcmlnaW5hbCB0U2hpZnQ7IHRoaXMgbWlnaHQgbm90IGJlIG5lY2Vzc2FyeSBzaW5jZSB0aGUgcGFyc2VyXG4gIC8vIGhhcyBhbHJlYWR5IGJlZW4gaGVyZSwgYnV0IGp1c3QgdG8gbWFrZSBzdXJlIHdlIGNhbiBkbyB0aGF0LlxuICBmb3IgKGkgPSAwOyBpIDwgb2xkVFNoaWZ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3RhdGUuYk1hcmtzW2kgKyBzdGFydExpbmVdID0gb2xkQk1hcmtzW2ldO1xuICAgIHN0YXRlLnRTaGlmdFtpICsgc3RhcnRMaW5lXSA9IG9sZFRTaGlmdFtpXTtcbiAgICBzdGF0ZS5zQ291bnRbaSArIHN0YXJ0TGluZV0gPSBvbGRTQ291bnRbaV07XG4gICAgc3RhdGUuYnNDb3VudFtpICsgc3RhcnRMaW5lXSA9IG9sZEJTQ291bnRbaV07XG4gIH1cbiAgc3RhdGUuYmxrSW5kZW50ID0gb2xkSW5kZW50O1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIENvZGUgYmxvY2sgKDQgc3BhY2VzIHBhZGRlZClcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29kZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBuZXh0TGluZSwgbGFzdCwgdG9rZW47XG5cbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50IDwgNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYXN0ID0gbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuXG4gIHdoaWxlIChuZXh0TGluZSA8IGVuZExpbmUpIHtcbiAgICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICAgIG5leHRMaW5lKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7XG4gICAgICBuZXh0TGluZSsrO1xuICAgICAgbGFzdCA9IG5leHRMaW5lO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUubGluZSA9IGxhc3Q7XG5cbiAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2NvZGVfYmxvY2snLCAnY29kZScsIDApO1xuICB0b2tlbi5jb250ZW50ID0gc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBsYXN0LCA0ICsgc3RhdGUuYmxrSW5kZW50LCBmYWxzZSkgKyAnXFxuJztcbiAgdG9rZW4ubWFwICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gZmVuY2VzIChgYGAgbGFuZywgfn5+IGxhbmcpXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZlbmNlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbWFya2VyLCBsZW4sIHBhcmFtcywgbmV4dExpbmUsIG1lbSwgdG9rZW4sIG1hcmt1cCxcbiAgICAgIGhhdmVFbmRNYXJrZXIgPSBmYWxzZSxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAocG9zICsgMyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4N0UvKiB+ICovICYmIG1hcmtlciAhPT0gMHg2MCAvKiBgICovKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gc2NhbiBtYXJrZXIgbGVuZ3RoXG4gIG1lbSA9IHBvcztcbiAgcG9zID0gc3RhdGUuc2tpcENoYXJzKHBvcywgbWFya2VyKTtcblxuICBsZW4gPSBwb3MgLSBtZW07XG5cbiAgaWYgKGxlbiA8IDMpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya3VwID0gc3RhdGUuc3JjLnNsaWNlKG1lbSwgcG9zKTtcbiAgcGFyYW1zID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KTtcblxuICBpZiAobWFya2VyID09PSAweDYwIC8qIGAgKi8pIHtcbiAgICBpZiAocGFyYW1zLmluZGV4T2YoU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpKSA+PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gU2luY2Ugc3RhcnQgaXMgZm91bmQsIHdlIGNhbiByZXBvcnQgc3VjY2VzcyBoZXJlIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2VhcmNoIGVuZCBvZiBibG9ja1xuICBuZXh0TGluZSA9IHN0YXJ0TGluZTtcblxuICBmb3IgKDs7KSB7XG4gICAgbmV4dExpbmUrKztcbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkge1xuICAgICAgLy8gdW5jbG9zZWQgYmxvY2sgc2hvdWxkIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIGRvY3VtZW50LlxuICAgICAgLy8gYWxzbyBibG9jayBzZWVtcyB0byBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBwYXJlbnRcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvcyA9IG1lbSA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNDb3VudFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIC8vIG5vbi1lbXB0eSBsaW5lIHdpdGggbmVnYXRpdmUgaW5kZW50IHNob3VsZCBzdG9wIHRoZSBsaXN0OlxuICAgICAgLy8gLSBgYGBcbiAgICAgIC8vICB0ZXN0XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gbWFya2VyKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7XG4gICAgICAvLyBjbG9zaW5nIGZlbmNlIHNob3VsZCBiZSBpbmRlbnRlZCBsZXNzIHRoYW4gNCBzcGFjZXNcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgICAvLyBjbG9zaW5nIGNvZGUgZmVuY2UgbXVzdCBiZSBhdCBsZWFzdCBhcyBsb25nIGFzIHRoZSBvcGVuaW5nIG9uZVxuICAgIGlmIChwb3MgLSBtZW0gPCBsZW4pIHsgY29udGludWU7IH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0YWlsIGhhcyBzcGFjZXMgb25seVxuICAgIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICAgIGlmIChwb3MgPCBtYXgpIHsgY29udGludWU7IH1cblxuICAgIGhhdmVFbmRNYXJrZXIgPSB0cnVlO1xuICAgIC8vIGZvdW5kIVxuICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gSWYgYSBmZW5jZSBoYXMgaGVhZGluZyBzcGFjZXMsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSBpdHMgaW5uZXIgYmxvY2tcbiAgbGVuID0gc3RhdGUuc0NvdW50W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lICsgKGhhdmVFbmRNYXJrZXIgPyAxIDogMCk7XG5cbiAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2ZlbmNlJywgJ2NvZGUnLCAwKTtcbiAgdG9rZW4uaW5mbyAgICA9IHBhcmFtcztcbiAgdG9rZW4uY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSArIDEsIG5leHRMaW5lLCBsZW4sIHRydWUpO1xuICB0b2tlbi5tYXJrdXAgID0gbWFya3VwO1xuICB0b2tlbi5tYXAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBoZWFkaW5nICgjLCAjIywgLi4uKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpc1NwYWNlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhlYWRpbmcoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbGV2ZWwsIHRtcCwgdG9rZW4sXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4MjMvKiAjICovIHx8IHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY291bnQgaGVhZGluZyBsZXZlbFxuICBsZXZlbCA9IDE7XG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpO1xuICB3aGlsZSAoY2ggPT09IDB4MjMvKiAjICovICYmIHBvcyA8IG1heCAmJiBsZXZlbCA8PSA2KSB7XG4gICAgbGV2ZWwrKztcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKTtcbiAgfVxuXG4gIGlmIChsZXZlbCA+IDYgfHwgKHBvcyA8IG1heCAmJiAhaXNTcGFjZShjaCkpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBMZXQncyBjdXQgdGFpbHMgbGlrZSAnICAgICMjIyAgJyBmcm9tIHRoZSBlbmQgb2Ygc3RyaW5nXG5cbiAgbWF4ID0gc3RhdGUuc2tpcFNwYWNlc0JhY2sobWF4LCBwb3MpO1xuICB0bXAgPSBzdGF0ZS5za2lwQ2hhcnNCYWNrKG1heCwgMHgyMywgcG9zKTsgLy8gI1xuICBpZiAodG1wID4gcG9zICYmIGlzU3BhY2Uoc3RhdGUuc3JjLmNoYXJDb2RlQXQodG1wIC0gMSkpKSB7XG4gICAgbWF4ID0gdG1wO1xuICB9XG5cbiAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnaGVhZGluZ19vcGVuJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgMSk7XG4gIHRva2VuLm1hcmt1cCA9ICcjIyMjIyMjIycuc2xpY2UoMCwgbGV2ZWwpO1xuICB0b2tlbi5tYXAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApO1xuICB0b2tlbi5jb250ZW50ICA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkudHJpbSgpO1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG4gIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnaGVhZGluZ19jbG9zZScsICdoJyArIFN0cmluZyhsZXZlbCksIC0xKTtcbiAgdG9rZW4ubWFya3VwID0gJyMjIyMjIyMjJy5zbGljZSgwLCBsZXZlbCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gSG9yaXpvbnRhbCBydWxlXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHIoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBtYXJrZXIsIGNudCwgY2gsIHRva2VuLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICAvLyBDaGVjayBociBtYXJrZXJcbiAgaWYgKG1hcmtlciAhPT0gMHgyQS8qICogKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHg1Ri8qIF8gKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBtYXJrZXJzIGNhbiBiZSBtaXhlZCB3aXRoIHNwYWNlcywgYnV0IHRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCAzIG9mIHRoZW1cblxuICBjbnQgPSAxO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gICAgaWYgKGNoICE9PSBtYXJrZXIgJiYgIWlzU3BhY2UoY2gpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChjaCA9PT0gbWFya2VyKSB7IGNudCsrOyB9XG4gIH1cblxuICBpZiAoY250IDwgMykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnaHInLCAnaHInLCAwKTtcbiAgdG9rZW4ubWFwICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcbiAgdG9rZW4ubWFya3VwID0gQXJyYXkoY250ICsgMSkuam9pbihTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcikpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEhUTUwgYmxvY2tcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBibG9ja19uYW1lcyA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX2Jsb2NrcycpO1xudmFyIEhUTUxfT1BFTl9DTE9TRV9UQUdfUkUgPSByZXF1aXJlKCcuLi9jb21tb24vaHRtbF9yZScpLkhUTUxfT1BFTl9DTE9TRV9UQUdfUkU7XG5cbi8vIEFuIGFycmF5IG9mIG9wZW5pbmcgYW5kIGNvcnJlc3BvbmRpbmcgY2xvc2luZyBzZXF1ZW5jZXMgZm9yIGh0bWwgdGFncyxcbi8vIGxhc3QgYXJndW1lbnQgZGVmaW5lcyB3aGV0aGVyIGl0IGNhbiB0ZXJtaW5hdGUgYSBwYXJhZ3JhcGggb3Igbm90XG4vL1xudmFyIEhUTUxfU0VRVUVOQ0VTID0gW1xuICBbIC9ePChzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhKSg/PShcXHN8PnwkKSkvaSwgLzxcXC8oc2NyaXB0fHByZXxzdHlsZXx0ZXh0YXJlYSk+L2ksIHRydWUgXSxcbiAgWyAvXjwhLS0vLCAgICAgICAgLy0tPi8sICAgdHJ1ZSBdLFxuICBbIC9ePFxcPy8sICAgICAgICAgL1xcPz4vLCAgIHRydWUgXSxcbiAgWyAvXjwhW0EtWl0vLCAgICAgLz4vLCAgICAgdHJ1ZSBdLFxuICBbIC9ePCFcXFtDREFUQVxcWy8sIC9cXF1cXF0+LywgdHJ1ZSBdLFxuICBbIG5ldyBSZWdFeHAoJ148Lz8oJyArIGJsb2NrX25hbWVzLmpvaW4oJ3wnKSArICcpKD89KFxcXFxzfC8/PnwkKSknLCAnaScpLCAvXiQvLCB0cnVlIF0sXG4gIFsgbmV3IFJlZ0V4cChIVE1MX09QRU5fQ0xPU0VfVEFHX1JFLnNvdXJjZSArICdcXFxccyokJyksICAvXiQvLCBmYWxzZSBdXG5dO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHRtbF9ibG9jayhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGksIG5leHRMaW5lLCB0b2tlbiwgbGluZVRleHQsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxpbmVUZXh0ID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KTtcblxuICBmb3IgKGkgPSAwOyBpIDwgSFRNTF9TRVFVRU5DRVMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoSFRNTF9TRVFVRU5DRVNbaV1bMF0udGVzdChsaW5lVGV4dCkpIHsgYnJlYWs7IH1cbiAgfVxuXG4gIGlmIChpID09PSBIVE1MX1NFUVVFTkNFUy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIC8vIHRydWUgaWYgdGhpcyBzZXF1ZW5jZSBjYW4gYmUgYSB0ZXJtaW5hdG9yLCBmYWxzZSBvdGhlcndpc2VcbiAgICByZXR1cm4gSFRNTF9TRVFVRU5DRVNbaV1bMl07XG4gIH1cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG5cbiAgLy8gSWYgd2UgYXJlIGhlcmUgLSB3ZSBkZXRlY3RlZCBIVE1MIGJsb2NrLlxuICAvLyBMZXQncyByb2xsIGRvd24gdGlsbCBibG9jayBlbmQuXG4gIGlmICghSFRNTF9TRVFVRU5DRVNbaV1bMV0udGVzdChsaW5lVGV4dCkpIHtcbiAgICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG4gICAgICBsaW5lVGV4dCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCk7XG5cbiAgICAgIGlmIChIVE1MX1NFUVVFTkNFU1tpXVsxXS50ZXN0KGxpbmVUZXh0KSkge1xuICAgICAgICBpZiAobGluZVRleHQubGVuZ3RoICE9PSAwKSB7IG5leHRMaW5lKys7IH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdodG1sX2Jsb2NrJywgJycsIDApO1xuICB0b2tlbi5tYXAgICAgID0gWyBzdGFydExpbmUsIG5leHRMaW5lIF07XG4gIHRva2VuLmNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIHRydWUpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIGxoZWFkaW5nICgtLS0sID09PSlcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGhlYWRpbmcoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZS8qLCBzaWxlbnQqLykge1xuICB2YXIgY29udGVudCwgdGVybWluYXRlLCBpLCBsLCB0b2tlbiwgcG9zLCBtYXgsIGxldmVsLCBtYXJrZXIsXG4gICAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDEsIG9sZFBhcmVudFR5cGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMgPSBzdGF0ZS5tZC5ibG9jay5ydWxlci5nZXRSdWxlcygncGFyYWdyYXBoJyk7XG5cbiAgLy8gaWYgaXQncyBpbmRlbnRlZCBtb3JlIHRoYW4gMyBzcGFjZXMsIGl0IHNob3VsZCBiZSBhIGNvZGUgYmxvY2tcbiAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAncGFyYWdyYXBoJzsgLy8gdXNlIHBhcmFncmFwaCB0byBtYXRjaCB0ZXJtaW5hdG9yUnVsZXNcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpOyBuZXh0TGluZSsrKSB7XG4gICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAvLyBpdCdzIGNvbnNpZGVyZWQgYSBsYXp5IGNvbnRpbnVhdGlvbiByZWdhcmRsZXNzIG9mIHdoYXQncyB0aGVyZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyBjb250aW51ZTsgfVxuXG4gICAgLy9cbiAgICAvLyBDaGVjayBmb3IgdW5kZXJsaW5lIGluIHNldGV4dCBoZWFkZXJcbiAgICAvL1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdID49IHN0YXRlLmJsa0luZGVudCkge1xuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgICBpZiAocG9zIDwgbWF4KSB7XG4gICAgICAgIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICAgICAgaWYgKG1hcmtlciA9PT0gMHgyRC8qIC0gKi8gfHwgbWFya2VyID09PSAweDNELyogPSAqLykge1xuICAgICAgICAgIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG4gICAgICAgICAgcG9zID0gc3RhdGUuc2tpcFNwYWNlcyhwb3MpO1xuXG4gICAgICAgICAgaWYgKHBvcyA+PSBtYXgpIHtcbiAgICAgICAgICAgIGxldmVsID0gKG1hcmtlciA9PT0gMHgzRC8qID0gKi8gPyAxIDogMik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBxdWlyayBmb3IgYmxvY2txdW90ZXMsIHRoaXMgbGluZSBzaG91bGQgYWxyZWFkeSBiZSBjaGVja2VkIGJ5IHRoYXQgcnVsZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgMCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG4gIH1cblxuICBpZiAoIWxldmVsKSB7XG4gICAgLy8gRGlkbid0IGZpbmQgdmFsaWQgdW5kZXJsaW5lXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmUgKyAxO1xuXG4gIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaGVhZGluZ19vcGVuJywgJ2gnICsgU3RyaW5nKGxldmVsKSwgMSk7XG4gIHRva2VuLm1hcmt1cCAgID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpO1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbmxpbmUnLCAnJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgID0gY29udGVudDtcbiAgdG9rZW4ubWFwICAgICAgPSBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSAtIDEgXTtcbiAgdG9rZW4uY2hpbGRyZW4gPSBbXTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2hlYWRpbmdfY2xvc2UnLCAnaCcgKyBTdHJpbmcobGV2ZWwpLCAtMSk7XG4gIHRva2VuLm1hcmt1cCAgID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXIpO1xuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIExpc3RzXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbi8vIFNlYXJjaCBgWy0rKl1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFmdGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkge1xuICB2YXIgbWFya2VyLCBwb3MsIG1heCwgY2g7XG5cbiAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICAvLyBDaGVjayBidWxsZXRcbiAgaWYgKG1hcmtlciAhPT0gMHgyQS8qICogKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyQi8qICsgKi8pIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBpZiAocG9zIDwgbWF4KSB7XG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKCFpc1NwYWNlKGNoKSkge1xuICAgICAgLy8gXCIgLXRlc3QgXCIgLSBpcyBub3QgYSBsaXN0IGl0ZW1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG4vLyBTZWFyY2ggYFxcZCtbLildW1xcbiBdYCwgcmV0dXJucyBuZXh0IHBvcyBhZnRlciBtYXJrZXIgb24gc3VjY2Vzc1xuLy8gb3IgLTEgb24gZmFpbC5cbmZ1bmN0aW9uIHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSB7XG4gIHZhciBjaCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIHBvcyA9IHN0YXJ0LFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgLy8gTGlzdCBtYXJrZXIgc2hvdWxkIGhhdmUgYXQgbGVhc3QgMiBjaGFycyAoZGlnaXQgKyBkb3QpXG4gIGlmIChwb3MgKyAxID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICBpZiAoY2ggPCAweDMwLyogMCAqLyB8fCBjaCA+IDB4MzkvKiA5ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGZvciAoOzspIHtcbiAgICAvLyBFT0wgLT4gZmFpbFxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgICBpZiAoY2ggPj0gMHgzMC8qIDAgKi8gJiYgY2ggPD0gMHgzOS8qIDkgKi8pIHtcblxuICAgICAgLy8gTGlzdCBtYXJrZXIgc2hvdWxkIGhhdmUgbm8gbW9yZSB0aGFuIDkgZGlnaXRzXG4gICAgICAvLyAocHJldmVudHMgaW50ZWdlciBvdmVyZmxvdyBpbiBicm93c2VycylcbiAgICAgIGlmIChwb3MgLSBzdGFydCA+PSAxMCkgeyByZXR1cm4gLTE7IH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZm91bmQgdmFsaWQgbWFya2VyXG4gICAgaWYgKGNoID09PSAweDI5LyogKSAqLyB8fCBjaCA9PT0gMHgyZS8qIC4gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaXNTcGFjZShjaCkpIHtcbiAgICAgIC8vIFwiIDEudGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcG9zO1xufVxuXG5mdW5jdGlvbiBtYXJrVGlnaHRQYXJhZ3JhcGhzKHN0YXRlLCBpZHgpIHtcbiAgdmFyIGksIGwsXG4gICAgICBsZXZlbCA9IHN0YXRlLmxldmVsICsgMjtcblxuICBmb3IgKGkgPSBpZHggKyAyLCBsID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDI7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoc3RhdGUudG9rZW5zW2ldLmxldmVsID09PSBsZXZlbCAmJiBzdGF0ZS50b2tlbnNbaV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJykge1xuICAgICAgc3RhdGUudG9rZW5zW2kgKyAyXS5oaWRkZW4gPSB0cnVlO1xuICAgICAgc3RhdGUudG9rZW5zW2ldLmhpZGRlbiA9IHRydWU7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0KHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsXG4gICAgICBjb250ZW50U3RhcnQsXG4gICAgICBpLFxuICAgICAgaW5kZW50LFxuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIsXG4gICAgICBpbml0aWFsLFxuICAgICAgaXNPcmRlcmVkLFxuICAgICAgaXRlbUxpbmVzLFxuICAgICAgbCxcbiAgICAgIGxpc3RMaW5lcyxcbiAgICAgIGxpc3RUb2tJZHgsXG4gICAgICBtYXJrZXJDaGFyQ29kZSxcbiAgICAgIG1hcmtlclZhbHVlLFxuICAgICAgbWF4LFxuICAgICAgbmV4dExpbmUsXG4gICAgICBvZmZzZXQsXG4gICAgICBvbGRMaXN0SW5kZW50LFxuICAgICAgb2xkUGFyZW50VHlwZSxcbiAgICAgIG9sZFNDb3VudCxcbiAgICAgIG9sZFRTaGlmdCxcbiAgICAgIG9sZFRpZ2h0LFxuICAgICAgcG9zLFxuICAgICAgcG9zQWZ0ZXJNYXJrZXIsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICBzdGFydCxcbiAgICAgIHRlcm1pbmF0ZSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcyxcbiAgICAgIHRva2VuLFxuICAgICAgaXNUZXJtaW5hdGluZ1BhcmFncmFwaCA9IGZhbHNlLFxuICAgICAgdGlnaHQgPSB0cnVlO1xuXG4gIC8vIGlmIGl0J3MgaW5kZW50ZWQgbW9yZSB0aGFuIDMgc3BhY2VzLCBpdCBzaG91bGQgYmUgYSBjb2RlIGJsb2NrXG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFNwZWNpYWwgY2FzZTpcbiAgLy8gIC0gaXRlbSAxXG4gIC8vICAgLSBpdGVtIDJcbiAgLy8gICAgLSBpdGVtIDNcbiAgLy8gICAgIC0gaXRlbSA0XG4gIC8vICAgICAgLSB0aGlzIG9uZSBpcyBhIHBhcmFncmFwaCBjb250aW51YXRpb25cbiAgaWYgKHN0YXRlLmxpc3RJbmRlbnQgPj0gMCAmJlxuICAgICAgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5saXN0SW5kZW50ID49IDQgJiZcbiAgICAgIHN0YXRlLnNDb3VudFtzdGFydExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gbGltaXQgY29uZGl0aW9ucyB3aGVuIGxpc3QgY2FuIGludGVycnVwdFxuICAvLyBhIHBhcmFncmFwaCAodmFsaWRhdGlvbiBtb2RlIG9ubHkpXG4gIGlmIChzaWxlbnQgJiYgc3RhdGUucGFyZW50VHlwZSA9PT0gJ3BhcmFncmFwaCcpIHtcbiAgICAvLyBOZXh0IGxpc3QgaXRlbSBzaG91bGQgc3RpbGwgdGVybWluYXRlIHByZXZpb3VzIGxpc3QgaXRlbTtcbiAgICAvL1xuICAgIC8vIFRoaXMgY29kZSBjYW4gZmFpbCBpZiBwbHVnaW5zIHVzZSBibGtJbmRlbnQgYXMgd2VsbCBhcyBsaXN0cyxcbiAgICAvLyBidXQgSSBob3BlIHRoZSBzcGVjIGdldHMgZml4ZWQgbG9uZyBiZWZvcmUgdGhhdCBoYXBwZW5zLlxuICAgIC8vXG4gICAgaWYgKHN0YXRlLnNDb3VudFtzdGFydExpbmVdID49IHN0YXRlLmJsa0luZGVudCkge1xuICAgICAgaXNUZXJtaW5hdGluZ1BhcmFncmFwaCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gRGV0ZWN0IGxpc3QgdHlwZSBhbmQgcG9zaXRpb24gYWZ0ZXIgbWFya2VyXG4gIGlmICgocG9zQWZ0ZXJNYXJrZXIgPSBza2lwT3JkZXJlZExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSB0cnVlO1xuICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcbiAgICBtYXJrZXJWYWx1ZSA9IE51bWJlcihzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gMSkpO1xuXG4gICAgLy8gSWYgd2UncmUgc3RhcnRpbmcgYSBuZXcgb3JkZXJlZCBsaXN0IHJpZ2h0IGFmdGVyXG4gICAgLy8gYSBwYXJhZ3JhcGgsIGl0IHNob3VsZCBzdGFydCB3aXRoIDEuXG4gICAgaWYgKGlzVGVybWluYXRpbmdQYXJhZ3JhcGggJiYgbWFya2VyVmFsdWUgIT09IDEpIHJldHVybiBmYWxzZTtcblxuICB9IGVsc2UgaWYgKChwb3NBZnRlck1hcmtlciA9IHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpKSA+PSAwKSB7XG4gICAgaXNPcmRlcmVkID0gZmFsc2U7XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBJZiB3ZSdyZSBzdGFydGluZyBhIG5ldyB1bm9yZGVyZWQgbGlzdCByaWdodCBhZnRlclxuICAvLyBhIHBhcmFncmFwaCwgZmlyc3QgbGluZSBzaG91bGQgbm90IGJlIGVtcHR5LlxuICBpZiAoaXNUZXJtaW5hdGluZ1BhcmFncmFwaCkge1xuICAgIGlmIChzdGF0ZS5za2lwU3BhY2VzKHBvc0FmdGVyTWFya2VyKSA+PSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gV2Ugc2hvdWxkIHRlcm1pbmF0ZSBsaXN0IG9uIHN0eWxlIGNoYW5nZS4gUmVtZW1iZXIgZmlyc3Qgb25lIHRvIGNvbXBhcmUuXG4gIG1hcmtlckNoYXJDb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKTtcblxuICAvLyBGb3IgdmFsaWRhdGlvbiBtb2RlIHdlIGNhbiB0ZXJtaW5hdGUgaW1tZWRpYXRlbHlcbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIC8vIFN0YXJ0IGxpc3RcbiAgbGlzdFRva0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgaWYgKGlzT3JkZXJlZCkge1xuICAgIHRva2VuICAgICAgID0gc3RhdGUucHVzaCgnb3JkZXJlZF9saXN0X29wZW4nLCAnb2wnLCAxKTtcbiAgICBpZiAobWFya2VyVmFsdWUgIT09IDEpIHtcbiAgICAgIHRva2VuLmF0dHJzID0gWyBbICdzdGFydCcsIG1hcmtlclZhbHVlIF0gXTtcbiAgICB9XG5cbiAgfSBlbHNlIHtcbiAgICB0b2tlbiAgICAgICA9IHN0YXRlLnB1c2goJ2J1bGxldF9saXN0X29wZW4nLCAndWwnLCAxKTtcbiAgfVxuXG4gIHRva2VuLm1hcCAgICA9IGxpc3RMaW5lcyA9IFsgc3RhcnRMaW5lLCAwIF07XG4gIHRva2VuLm1hcmt1cCA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWFya2VyQ2hhckNvZGUpO1xuXG4gIC8vXG4gIC8vIEl0ZXJhdGUgbGlzdCBpdGVtc1xuICAvL1xuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lO1xuICBwcmV2RW1wdHlFbmQgPSBmYWxzZTtcbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ2xpc3QnKTtcblxuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICdsaXN0JztcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgcG9zID0gcG9zQWZ0ZXJNYXJrZXI7XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGluaXRpYWwgPSBvZmZzZXQgPSBzdGF0ZS5zQ291bnRbbmV4dExpbmVdICsgcG9zQWZ0ZXJNYXJrZXIgLSAoc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSk7XG5cbiAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgwOSkge1xuICAgICAgICBvZmZzZXQgKz0gNCAtIChvZmZzZXQgKyBzdGF0ZS5ic0NvdW50W25leHRMaW5lXSkgJSA0O1xuICAgICAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMCkge1xuICAgICAgICBvZmZzZXQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwb3MrKztcbiAgICB9XG5cbiAgICBjb250ZW50U3RhcnQgPSBwb3M7XG5cbiAgICBpZiAoY29udGVudFN0YXJ0ID49IG1heCkge1xuICAgICAgLy8gdHJpbW1pbmcgc3BhY2UgaW4gXCItICAgIFxcbiAgM1wiIGNhc2UsIGluZGVudCBpcyAxIGhlcmVcbiAgICAgIGluZGVudEFmdGVyTWFya2VyID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIgPSBvZmZzZXQgLSBpbml0aWFsO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIDQgc3BhY2VzLCB0aGUgaW5kZW50IGlzIDFcbiAgICAvLyAodGhlIHJlc3QgaXMganVzdCBpbmRlbnRlZCBjb2RlIGJsb2NrKVxuICAgIGlmIChpbmRlbnRBZnRlck1hcmtlciA+IDQpIHsgaW5kZW50QWZ0ZXJNYXJrZXIgPSAxOyB9XG5cbiAgICAvLyBcIiAgLSAgdGVzdFwiXG4gICAgLy8gIF5eXl5eIC0gY2FsY3VsYXRpbmcgdG90YWwgbGVuZ3RoIG9mIHRoaXMgdGhpbmdcbiAgICBpbmRlbnQgPSBpbml0aWFsICsgaW5kZW50QWZ0ZXJNYXJrZXI7XG5cbiAgICAvLyBSdW4gc3VicGFyc2VyICYgd3JpdGUgdG9rZW5zXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlzdF9pdGVtX29wZW4nLCAnbGknLCAxKTtcbiAgICB0b2tlbi5tYXJrdXAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlckNoYXJDb2RlKTtcbiAgICB0b2tlbi5tYXAgICAgPSBpdGVtTGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdO1xuICAgIGlmIChpc09yZGVyZWQpIHtcbiAgICAgIHRva2VuLmluZm8gPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvc0FmdGVyTWFya2VyIC0gMSk7XG4gICAgfVxuXG4gICAgLy8gY2hhbmdlIGN1cnJlbnQgc3RhdGUsIHRoZW4gcmVzdG9yZSBpdCBhZnRlciBwYXJzZXIgc3ViY2FsbFxuICAgIG9sZFRpZ2h0ID0gc3RhdGUudGlnaHQ7XG4gICAgb2xkVFNoaWZ0ID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gICAgb2xkU0NvdW50ID0gc3RhdGUuc0NvdW50W3N0YXJ0TGluZV07XG5cbiAgICAvLyAgLSBleGFtcGxlIGxpc3RcbiAgICAvLyBeIGxpc3RJbmRlbnQgcG9zaXRpb24gd2lsbCBiZSBoZXJlXG4gICAgLy8gICBeIGJsa0luZGVudCBwb3NpdGlvbiB3aWxsIGJlIGhlcmVcbiAgICAvL1xuICAgIG9sZExpc3RJbmRlbnQgPSBzdGF0ZS5saXN0SW5kZW50O1xuICAgIHN0YXRlLmxpc3RJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgc3RhdGUuYmxrSW5kZW50ID0gaW5kZW50O1xuXG4gICAgc3RhdGUudGlnaHQgPSB0cnVlO1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gY29udGVudFN0YXJ0IC0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG4gICAgc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gPSBvZmZzZXQ7XG5cbiAgICBpZiAoY29udGVudFN0YXJ0ID49IG1heCAmJiBzdGF0ZS5pc0VtcHR5KHN0YXJ0TGluZSArIDEpKSB7XG4gICAgICAvLyB3b3JrYXJvdW5kIGZvciB0aGlzIGNhc2VcbiAgICAgIC8vIChsaXN0IGl0ZW0gaXMgZW1wdHksIGxpc3QgdGVybWluYXRlcyBiZWZvcmUgXCJmb29cIik6XG4gICAgICAvLyB+fn5+fn5+flxuICAgICAgLy8gICAtXG4gICAgICAvL1xuICAgICAgLy8gICAgIGZvb1xuICAgICAgLy8gfn5+fn5+fn5cbiAgICAgIHN0YXRlLmxpbmUgPSBNYXRoLm1pbihzdGF0ZS5saW5lICsgMiwgZW5kTGluZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLm1kLmJsb2NrLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIElmIGFueSBvZiBsaXN0IGl0ZW0gaXMgdGlnaHQsIG1hcmsgbGlzdCBhcyB0aWdodFxuICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICB0aWdodCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgIC8vIGJ1dCB3ZSBzaG91bGQgZmlsdGVyIGxhc3QgZWxlbWVudCwgYmVjYXVzZSBpdCBtZWFucyBsaXN0IGZpbmlzaFxuICAgIHByZXZFbXB0eUVuZCA9IChzdGF0ZS5saW5lIC0gc3RhcnRMaW5lKSA+IDEgJiYgc3RhdGUuaXNFbXB0eShzdGF0ZS5saW5lIC0gMSk7XG5cbiAgICBzdGF0ZS5ibGtJbmRlbnQgPSBzdGF0ZS5saXN0SW5kZW50O1xuICAgIHN0YXRlLmxpc3RJbmRlbnQgPSBvbGRMaXN0SW5kZW50O1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gb2xkVFNoaWZ0O1xuICAgIHN0YXRlLnNDb3VudFtzdGFydExpbmVdID0gb2xkU0NvdW50O1xuICAgIHN0YXRlLnRpZ2h0ID0gb2xkVGlnaHQ7XG5cbiAgICB0b2tlbiAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaXN0X2l0ZW1fY2xvc2UnLCAnbGknLCAtMSk7XG4gICAgdG9rZW4ubWFya3VwID0gU3RyaW5nLmZyb21DaGFyQ29kZShtYXJrZXJDaGFyQ29kZSk7XG5cbiAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSA9IHN0YXRlLmxpbmU7XG4gICAgaXRlbUxpbmVzWzFdID0gbmV4dExpbmU7XG4gICAgY29udGVudFN0YXJ0ID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuXG4gICAgLy9cbiAgICAvLyBUcnkgdG8gY2hlY2sgaWYgbGlzdCBpcyB0ZXJtaW5hdGVkIG9yIGNvbnRpbnVlZC5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICAgIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBmYWlsIGlmIHRlcm1pbmF0aW5nIGJsb2NrIGZvdW5kXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuXG4gICAgLy8gZmFpbCBpZiBsaXN0IGhhcyBhbm90aGVyIHR5cGVcbiAgICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgICBwb3NBZnRlck1hcmtlciA9IHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgICAgc3RhcnQgPSBzdGF0ZS5iTWFya3NbbmV4dExpbmVdICsgc3RhdGUudFNoaWZ0W25leHRMaW5lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zQWZ0ZXJNYXJrZXIgPSBza2lwQnVsbGV0TGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIGlmIChtYXJrZXJDaGFyQ29kZSAhPT0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zQWZ0ZXJNYXJrZXIgLSAxKSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gRmluYWxpemUgbGlzdFxuICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCdvcmRlcmVkX2xpc3RfY2xvc2UnLCAnb2wnLCAtMSk7XG4gIH0gZWxzZSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCdidWxsZXRfbGlzdF9jbG9zZScsICd1bCcsIC0xKTtcbiAgfVxuICB0b2tlbi5tYXJrdXAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlckNoYXJDb2RlKTtcblxuICBsaXN0TGluZXNbMV0gPSBuZXh0TGluZTtcbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBQYXJhZ3JhcGhcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyYWdyYXBoKHN0YXRlLCBzdGFydExpbmUvKiwgZW5kTGluZSovKSB7XG4gIHZhciBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsIHRva2VuLCBvbGRQYXJlbnRUeXBlLFxuICAgICAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxLFxuICAgICAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3BhcmFncmFwaCcpLFxuICAgICAgZW5kTGluZSA9IHN0YXRlLmxpbmVNYXg7XG5cbiAgb2xkUGFyZW50VHlwZSA9IHN0YXRlLnBhcmVudFR5cGU7XG4gIHN0YXRlLnBhcmVudFR5cGUgPSAncGFyYWdyYXBoJztcblxuICAvLyBqdW1wIGxpbmUtYnktbGluZSB1bnRpbCBlbXB0eSBvbmUgb3IgRU9GXG4gIGZvciAoOyBuZXh0TGluZSA8IGVuZExpbmUgJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpOyBuZXh0TGluZSsrKSB7XG4gICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAvLyBpdCdzIGNvbnNpZGVyZWQgYSBsYXp5IGNvbnRpbnVhdGlvbiByZWdhcmRsZXNzIG9mIHdoYXQncyB0aGVyZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID4gMykgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gcXVpcmsgZm9yIGJsb2NrcXVvdGVzLCB0aGlzIGxpbmUgc2hvdWxkIGFscmVhZHkgYmUgY2hlY2tlZCBieSB0aGF0IHJ1bGVcbiAgICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IDApIHsgY29udGludWU7IH1cblxuICAgIC8vIFNvbWUgdGFncyBjYW4gdGVybWluYXRlIHBhcmFncmFwaCB3aXRob3V0IGVtcHR5IGxpbmUuXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICB9XG5cbiAgY29udGVudCA9IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSwgbmV4dExpbmUsIHN0YXRlLmJsa0luZGVudCwgZmFsc2UpLnRyaW0oKTtcblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdwYXJhZ3JhcGhfb3BlbicsICdwJywgMSk7XG4gIHRva2VuLm1hcCAgICAgID0gWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXTtcblxuICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgdG9rZW4uY29udGVudCAgPSBjb250ZW50O1xuICB0b2tlbi5tYXAgICAgICA9IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF07XG4gIHRva2VuLmNoaWxkcmVuID0gW107XG5cbiAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdwYXJhZ3JhcGhfY2xvc2UnLCAncCcsIC0xKTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlZmVyZW5jZShzdGF0ZSwgc3RhcnRMaW5lLCBfZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGRlc3RFbmRQb3MsXG4gICAgICBkZXN0RW5kTGluZU5vLFxuICAgICAgZW5kTGluZSxcbiAgICAgIGhyZWYsXG4gICAgICBpLFxuICAgICAgbCxcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxFbmQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgcmVzLFxuICAgICAgc3RhcnQsXG4gICAgICBzdHIsXG4gICAgICB0ZXJtaW5hdGUsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXMsXG4gICAgICB0aXRsZSxcbiAgICAgIGxpbmVzID0gMCxcbiAgICAgIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXSxcbiAgICAgIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W3N0YXJ0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPj0gNCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU2ltcGxlIGNoZWNrIHRvIHF1aWNrbHkgaW50ZXJydXB0IHNjYW4gb24gW2xpbmtdKHVybCkgYXQgdGhlIHN0YXJ0IG9mIGxpbmUuXG4gIC8vIENhbiBiZSB1c2VmdWwgb24gcHJhY3RpY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdC9pc3N1ZXMvNTRcbiAgd2hpbGUgKCsrcG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUQgLyogXSAqLyAmJlxuICAgICAgICBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgLSAxKSAhPT0gMHg1Qy8qIFxcICovKSB7XG4gICAgICBpZiAocG9zICsgMSA9PT0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGVuZExpbmUgPSBzdGF0ZS5saW5lTWF4O1xuXG4gIC8vIGp1bXAgbGluZS1ieS1saW5lIHVudGlsIGVtcHR5IG9uZSBvciBFT0ZcbiAgdGVybWluYXRvclJ1bGVzID0gc3RhdGUubWQuYmxvY2sucnVsZXIuZ2V0UnVsZXMoJ3JlZmVyZW5jZScpO1xuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ3JlZmVyZW5jZSc7XG5cbiAgZm9yICg7IG5leHRMaW5lIDwgZW5kTGluZSAmJiAhc3RhdGUuaXNFbXB0eShuZXh0TGluZSk7IG5leHRMaW5lKyspIHtcbiAgICAvLyB0aGlzIHdvdWxkIGJlIGEgY29kZSBibG9jayBub3JtYWxseSwgYnV0IGFmdGVyIHBhcmFncmFwaFxuICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgaWYgKHN0YXRlLnNDb3VudFtuZXh0TGluZV0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBxdWlyayBmb3IgYmxvY2txdW90ZXMsIHRoaXMgbGluZSBzaG91bGQgYWxyZWFkeSBiZSBjaGVja2VkIGJ5IHRoYXQgcnVsZVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgMCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGVybWluYXRlKSB7IGJyZWFrOyB9XG4gIH1cblxuICBzdHIgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG4gIG1heCA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yIChwb3MgPSAxOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjaCA9PT0gMHg1QiAvKiBbICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHg1RCAvKiBdICovKSB7XG4gICAgICBsYWJlbEVuZCA9IHBvcztcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MEEgLyogXFxuICovKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMgLyogXFwgKi8pIHtcbiAgICAgIHBvcysrO1xuICAgICAgaWYgKHBvcyA8IG1heCAmJiBzdHIuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGxhYmVsRW5kIDwgMCB8fCBzdHIuY2hhckNvZGVBdChsYWJlbEVuZCArIDEpICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgIF5eXiBza2lwIG9wdGlvbmFsIHdoaXRlc3BhY2UgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY2ggPT09IDB4MEEpIHtcbiAgICAgIGxpbmVzKys7XG4gICAgfSBlbHNlIGlmIChpc1NwYWNlKGNoKSkge1xuICAgICAgLyplc2xpbnQgbm8tZW1wdHk6MCovXG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgXl5eXl5eXl5eXl4gcGFyc2UgdGhpc1xuICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0ciwgcG9zLCBtYXgpO1xuICBpZiAoIXJlcy5vaykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhyZXMuc3RyKTtcbiAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gcmVzLnBvcztcbiAgbGluZXMgKz0gcmVzLmxpbmVzO1xuXG4gIC8vIHNhdmUgY3Vyc29yIHN0YXRlLCB3ZSBjb3VsZCByZXF1aXJlIHRvIHJvbGxiYWNrIGxhdGVyXG4gIGRlc3RFbmRQb3MgPSBwb3M7XG4gIGRlc3RFbmRMaW5lTm8gPSBsaW5lcztcblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgXl5eIHNraXBwaW5nIHRob3NlIHNwYWNlc1xuICBzdGFydCA9IHBvcztcbiAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNoID09PSAweDBBKSB7XG4gICAgICBsaW5lcysrO1xuICAgIH0gZWxzZSBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgIC8qZXNsaW50IG5vLWVtcHR5OjAqL1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzZSB0aGlzXG4gIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RyLCBwb3MsIG1heCk7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiByZXMub2spIHtcbiAgICB0aXRsZSA9IHJlcy5zdHI7XG4gICAgcG9zID0gcmVzLnBvcztcbiAgICBsaW5lcyArPSByZXMubGluZXM7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUgPSAnJztcbiAgICBwb3MgPSBkZXN0RW5kUG9zO1xuICAgIGxpbmVzID0gZGVzdEVuZExpbmVObztcbiAgfVxuXG4gIC8vIHNraXAgdHJhaWxpbmcgc3BhY2VzIHVudGlsIHRoZSByZXN0IG9mIHRoZSBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0ci5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKCFpc1NwYWNlKGNoKSkgeyBicmVhazsgfVxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHBvcyA8IG1heCAmJiBzdHIuY2hhckNvZGVBdChwb3MpICE9PSAweDBBKSB7XG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAvLyBnYXJiYWdlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYWZ0ZXIgdGl0bGUsXG4gICAgICAvLyBidXQgaXQgY291bGQgc3RpbGwgYmUgYSB2YWxpZCByZWZlcmVuY2UgaWYgd2Ugcm9sbCBiYWNrXG4gICAgICB0aXRsZSA9ICcnO1xuICAgICAgcG9zID0gZGVzdEVuZFBvcztcbiAgICAgIGxpbmVzID0gZGVzdEVuZExpbmVObztcbiAgICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgICAgY2ggPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrOyB9XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RyLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkge1xuICAgIC8vIGdhcmJhZ2UgYXQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxhYmVsID0gbm9ybWFsaXplUmVmZXJlbmNlKHN0ci5zbGljZSgxLCBsYWJlbEVuZCkpO1xuICBpZiAoIWxhYmVsKSB7XG4gICAgLy8gQ29tbW9uTWFyayAwLjIwIGRpc2FsbG93cyBlbXB0eSBsYWJlbHNcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBSZWZlcmVuY2UgY2FuIG5vdCB0ZXJtaW5hdGUgYW55dGhpbmcuIFRoaXMgY2hlY2sgaXMgZm9yIHNhZmV0eSBvbmx5LlxuICAvKmlzdGFuYnVsIGlnbm9yZSBpZiovXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBpZiAodHlwZW9mIHN0YXRlLmVudi5yZWZlcmVuY2VzID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0YXRlLmVudi5yZWZlcmVuY2VzID0ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlc1tsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RhdGUuZW52LnJlZmVyZW5jZXNbbGFiZWxdID0geyB0aXRsZTogdGl0bGUsIGhyZWY6IGhyZWYgfTtcbiAgfVxuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gIHN0YXRlLmxpbmUgPSBzdGFydExpbmUgKyBsaW5lcyArIDE7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFBhcnNlciBzdGF0ZSBjbGFzc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cblxuZnVuY3Rpb24gU3RhdGVCbG9jayhzcmMsIG1kLCBlbnYsIHRva2Vucykge1xuICB2YXIgY2gsIHMsIHN0YXJ0LCBwb3MsIGxlbiwgaW5kZW50LCBvZmZzZXQsIGluZGVudF9mb3VuZDtcblxuICB0aGlzLnNyYyA9IHNyYztcblxuICAvLyBsaW5rIHRvIHBhcnNlciBpbnN0YW5jZVxuICB0aGlzLm1kICAgICA9IG1kO1xuXG4gIHRoaXMuZW52ID0gZW52O1xuXG4gIC8vXG4gIC8vIEludGVybmFsIHN0YXRlIHZhcnRpYWJsZXNcbiAgLy9cblxuICB0aGlzLnRva2VucyA9IHRva2VucztcblxuICB0aGlzLmJNYXJrcyA9IFtdOyAgLy8gbGluZSBiZWdpbiBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMuZU1hcmtzID0gW107ICAvLyBsaW5lIGVuZCBvZmZzZXRzIGZvciBmYXN0IGp1bXBzXG4gIHRoaXMudFNoaWZ0ID0gW107ICAvLyBvZmZzZXRzIG9mIHRoZSBmaXJzdCBub24tc3BhY2UgY2hhcmFjdGVycyAodGFicyBub3QgZXhwYW5kZWQpXG4gIHRoaXMuc0NvdW50ID0gW107ICAvLyBpbmRlbnRzIGZvciBlYWNoIGxpbmUgKHRhYnMgZXhwYW5kZWQpXG5cbiAgLy8gQW4gYW1vdW50IG9mIHZpcnR1YWwgc3BhY2VzICh0YWJzIGV4cGFuZGVkKSBiZXR3ZWVuIGJlZ2lubmluZ1xuICAvLyBvZiBlYWNoIGxpbmUgKGJNYXJrcykgYW5kIHJlYWwgYmVnaW5uaW5nIG9mIHRoYXQgbGluZS5cbiAgLy9cbiAgLy8gSXQgZXhpc3RzIG9ubHkgYXMgYSBoYWNrIGJlY2F1c2UgYmxvY2txdW90ZXMgb3ZlcnJpZGUgYk1hcmtzXG4gIC8vIGxvc2luZyBpbmZvcm1hdGlvbiBpbiB0aGUgcHJvY2Vzcy5cbiAgLy9cbiAgLy8gSXQncyB1c2VkIG9ubHkgd2hlbiBleHBhbmRpbmcgdGFicywgeW91IGNhbiB0aGluayBhYm91dCBpdCBhc1xuICAvLyBhbiBpbml0aWFsIHRhYiBsZW5ndGgsIGUuZy4gYnNDb3VudD0yMSBhcHBsaWVkIHRvIHN0cmluZyBgXFx0MTIzYFxuICAvLyBtZWFucyBmaXJzdCB0YWIgc2hvdWxkIGJlIGV4cGFuZGVkIHRvIDQtMjElNCA9PT0gMyBzcGFjZXMuXG4gIC8vXG4gIHRoaXMuYnNDb3VudCA9IFtdO1xuXG4gIC8vIGJsb2NrIHBhcnNlciB2YXJpYWJsZXNcbiAgdGhpcy5ibGtJbmRlbnQgID0gMDsgLy8gcmVxdWlyZWQgYmxvY2sgY29udGVudCBpbmRlbnQgKGZvciBleGFtcGxlLCBpZiB3ZSBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zaWRlIGEgbGlzdCwgaXQgd291bGQgYmUgcG9zaXRpb25lZCBhZnRlciBsaXN0IG1hcmtlcilcbiAgdGhpcy5saW5lICAgICAgID0gMDsgLy8gbGluZSBpbmRleCBpbiBzcmNcbiAgdGhpcy5saW5lTWF4ICAgID0gMDsgLy8gbGluZXMgY291bnRcbiAgdGhpcy50aWdodCAgICAgID0gZmFsc2U7ICAvLyBsb29zZS90aWdodCBtb2RlIGZvciBsaXN0c1xuICB0aGlzLmRkSW5kZW50ICAgPSAtMTsgLy8gaW5kZW50IG9mIHRoZSBjdXJyZW50IGRkIGJsb2NrICgtMSBpZiB0aGVyZSBpc24ndCBhbnkpXG4gIHRoaXMubGlzdEluZGVudCA9IC0xOyAvLyBpbmRlbnQgb2YgdGhlIGN1cnJlbnQgbGlzdCBibG9jayAoLTEgaWYgdGhlcmUgaXNuJ3QgYW55KVxuXG4gIC8vIGNhbiBiZSAnYmxvY2txdW90ZScsICdsaXN0JywgJ3Jvb3QnLCAncGFyYWdyYXBoJyBvciAncmVmZXJlbmNlJ1xuICAvLyB1c2VkIGluIGxpc3RzIHRvIGRldGVybWluZSBpZiB0aGV5IGludGVycnVwdCBhIHBhcmFncmFwaFxuICB0aGlzLnBhcmVudFR5cGUgPSAncm9vdCc7XG5cbiAgdGhpcy5sZXZlbCA9IDA7XG5cbiAgLy8gcmVuZGVyZXJcbiAgdGhpcy5yZXN1bHQgPSAnJztcblxuICAvLyBDcmVhdGUgY2FjaGVzXG4gIC8vIEdlbmVyYXRlIG1hcmtlcnMuXG4gIHMgPSB0aGlzLnNyYztcbiAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG5cbiAgZm9yIChzdGFydCA9IHBvcyA9IGluZGVudCA9IG9mZnNldCA9IDAsIGxlbiA9IHMubGVuZ3RoOyBwb3MgPCBsZW47IHBvcysrKSB7XG4gICAgY2ggPSBzLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmICghaW5kZW50X2ZvdW5kKSB7XG4gICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgaW5kZW50Kys7XG5cbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgb2Zmc2V0ICs9IDQgLSBvZmZzZXQgJSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZW50X2ZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2ggPT09IDB4MEEgfHwgcG9zID09PSBsZW4gLSAxKSB7XG4gICAgICBpZiAoY2ggIT09IDB4MEEpIHsgcG9zKys7IH1cbiAgICAgIHRoaXMuYk1hcmtzLnB1c2goc3RhcnQpO1xuICAgICAgdGhpcy5lTWFya3MucHVzaChwb3MpO1xuICAgICAgdGhpcy50U2hpZnQucHVzaChpbmRlbnQpO1xuICAgICAgdGhpcy5zQ291bnQucHVzaChvZmZzZXQpO1xuICAgICAgdGhpcy5ic0NvdW50LnB1c2goMCk7XG5cbiAgICAgIGluZGVudF9mb3VuZCA9IGZhbHNlO1xuICAgICAgaW5kZW50ID0gMDtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgICBzdGFydCA9IHBvcyArIDE7XG4gICAgfVxuICB9XG5cbiAgLy8gUHVzaCBmYWtlIGVudHJ5IHRvIHNpbXBsaWZ5IGNhY2hlIGJvdW5kcyBjaGVja3NcbiAgdGhpcy5iTWFya3MucHVzaChzLmxlbmd0aCk7XG4gIHRoaXMuZU1hcmtzLnB1c2gocy5sZW5ndGgpO1xuICB0aGlzLnRTaGlmdC5wdXNoKDApO1xuICB0aGlzLnNDb3VudC5wdXNoKDApO1xuICB0aGlzLmJzQ291bnQucHVzaCgwKTtcblxuICB0aGlzLmxpbmVNYXggPSB0aGlzLmJNYXJrcy5sZW5ndGggLSAxOyAvLyBkb24ndCBjb3VudCBsYXN0IGZha2UgbGluZVxufVxuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy9cblN0YXRlQmxvY2sucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAodHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpO1xuICB0b2tlbi5ibG9jayA9IHRydWU7XG5cbiAgaWYgKG5lc3RpbmcgPCAwKSB0aGlzLmxldmVsLS07IC8vIGNsb3NpbmcgdGFnXG4gIHRva2VuLmxldmVsID0gdGhpcy5sZXZlbDtcbiAgaWYgKG5lc3RpbmcgPiAwKSB0aGlzLmxldmVsKys7IC8vIG9wZW5pbmcgdGFnXG5cbiAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblN0YXRlQmxvY2sucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KGxpbmUpIHtcbiAgcmV0dXJuIHRoaXMuYk1hcmtzW2xpbmVdICsgdGhpcy50U2hpZnRbbGluZV0gPj0gdGhpcy5lTWFya3NbbGluZV07XG59O1xuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwRW1wdHlMaW5lcyA9IGZ1bmN0aW9uIHNraXBFbXB0eUxpbmVzKGZyb20pIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5saW5lTWF4OyBmcm9tIDwgbWF4OyBmcm9tKyspIHtcbiAgICBpZiAodGhpcy5iTWFya3NbZnJvbV0gKyB0aGlzLnRTaGlmdFtmcm9tXSA8IHRoaXMuZU1hcmtzW2Zyb21dKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZyb207XG59O1xuXG4vLyBTa2lwIHNwYWNlcyBmcm9tIGdpdmVuIHBvc2l0aW9uLlxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcFNwYWNlcyA9IGZ1bmN0aW9uIHNraXBTcGFjZXMocG9zKSB7XG4gIHZhciBjaDtcblxuICBmb3IgKHZhciBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjaCA9IHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoIWlzU3BhY2UoY2gpKSB7IGJyZWFrOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgc3BhY2VzIGZyb20gZ2l2ZW4gcG9zaXRpb24gaW4gcmV2ZXJzZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXNCYWNrID0gZnVuY3Rpb24gc2tpcFNwYWNlc0JhY2socG9zLCBtaW4pIHtcbiAgaWYgKHBvcyA8PSBtaW4pIHsgcmV0dXJuIHBvczsgfVxuXG4gIHdoaWxlIChwb3MgPiBtaW4pIHtcbiAgICBpZiAoIWlzU3BhY2UodGhpcy5zcmMuY2hhckNvZGVBdCgtLXBvcykpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIFNraXAgY2hhciBjb2RlcyBmcm9tIGdpdmVuIHBvc2l0aW9uXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5za2lwQ2hhcnMgPSBmdW5jdGlvbiBza2lwQ2hhcnMocG9zLCBjb2RlKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMuc3JjLmxlbmd0aDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmICh0aGlzLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IGNvZGUpIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIHJldmVyc2UgZnJvbSBnaXZlbiBwb3NpdGlvbiAtIDFcblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFyc0JhY2sgPSBmdW5jdGlvbiBza2lwQ2hhcnNCYWNrKHBvcywgY29kZSwgbWluKSB7XG4gIGlmIChwb3MgPD0gbWluKSB7IHJldHVybiBwb3M7IH1cblxuICB3aGlsZSAocG9zID4gbWluKSB7XG4gICAgaWYgKGNvZGUgIT09IHRoaXMuc3JjLmNoYXJDb2RlQXQoLS1wb3MpKSB7IHJldHVybiBwb3MgKyAxOyB9XG4gIH1cbiAgcmV0dXJuIHBvcztcbn07XG5cbi8vIGN1dCBsaW5lcyByYW5nZSBmcm9tIHNvdXJjZS5cblN0YXRlQmxvY2sucHJvdG90eXBlLmdldExpbmVzID0gZnVuY3Rpb24gZ2V0TGluZXMoYmVnaW4sIGVuZCwgaW5kZW50LCBrZWVwTGFzdExGKSB7XG4gIHZhciBpLCBsaW5lSW5kZW50LCBjaCwgZmlyc3QsIGxhc3QsIHF1ZXVlLCBsaW5lU3RhcnQsXG4gICAgICBsaW5lID0gYmVnaW47XG5cbiAgaWYgKGJlZ2luID49IGVuZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHF1ZXVlID0gbmV3IEFycmF5KGVuZCAtIGJlZ2luKTtcblxuICBmb3IgKGkgPSAwOyBsaW5lIDwgZW5kOyBsaW5lKyssIGkrKykge1xuICAgIGxpbmVJbmRlbnQgPSAwO1xuICAgIGxpbmVTdGFydCA9IGZpcnN0ID0gdGhpcy5iTWFya3NbbGluZV07XG5cbiAgICBpZiAobGluZSArIDEgPCBlbmQgfHwga2VlcExhc3RMRikge1xuICAgICAgLy8gTm8gbmVlZCBmb3IgYm91bmRzIGNoZWNrIGJlY2F1c2Ugd2UgaGF2ZSBmYWtlIGVudHJ5IG9uIHRhaWwuXG4gICAgICBsYXN0ID0gdGhpcy5lTWFya3NbbGluZV0gKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0ID0gdGhpcy5lTWFya3NbbGluZV07XG4gICAgfVxuXG4gICAgd2hpbGUgKGZpcnN0IDwgbGFzdCAmJiBsaW5lSW5kZW50IDwgaW5kZW50KSB7XG4gICAgICBjaCA9IHRoaXMuc3JjLmNoYXJDb2RlQXQoZmlyc3QpO1xuXG4gICAgICBpZiAoaXNTcGFjZShjaCkpIHtcbiAgICAgICAgaWYgKGNoID09PSAweDA5KSB7XG4gICAgICAgICAgbGluZUluZGVudCArPSA0IC0gKGxpbmVJbmRlbnQgKyB0aGlzLmJzQ291bnRbbGluZV0pICUgNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaW5lSW5kZW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZmlyc3QgLSBsaW5lU3RhcnQgPCB0aGlzLnRTaGlmdFtsaW5lXSkge1xuICAgICAgICAvLyBwYXRjaGVkIHRTaGlmdCBtYXNrZWQgY2hhcmFjdGVycyB0byBsb29rIGxpa2Ugc3BhY2VzIChibG9ja3F1b3RlcywgbGlzdCBtYXJrZXJzKVxuICAgICAgICBsaW5lSW5kZW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZmlyc3QrKztcbiAgICB9XG5cbiAgICBpZiAobGluZUluZGVudCA+IGluZGVudCkge1xuICAgICAgLy8gcGFydGlhbGx5IGV4cGFuZGluZyB0YWJzIGluIGNvZGUgYmxvY2tzLCBlLmcgJ1xcdFxcdGZvb2JhcidcbiAgICAgIC8vIHdpdGggaW5kZW50PTIgYmVjb21lcyAnICBcXHRmb29iYXInXG4gICAgICBxdWV1ZVtpXSA9IG5ldyBBcnJheShsaW5lSW5kZW50IC0gaW5kZW50ICsgMSkuam9pbignICcpICsgdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBxdWV1ZVtpXSA9IHRoaXMuc3JjLnNsaWNlKGZpcnN0LCBsYXN0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcXVldWUuam9pbignJyk7XG59O1xuXG4vLyByZS1leHBvcnQgVG9rZW4gY2xhc3MgdG8gdXNlIGluIGJsb2NrIHJ1bGVzXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVCbG9jaztcbiIsIi8vIEdGTSB0YWJsZSwgaHR0cHM6Ly9naXRodWIuZ2l0aHViLmNvbS9nZm0vI3RhYmxlcy1leHRlbnNpb24tXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbmZ1bmN0aW9uIGdldExpbmUoc3RhdGUsIGxpbmUpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLmJNYXJrc1tsaW5lXSArIHN0YXRlLnRTaGlmdFtsaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tsaW5lXTtcblxuICByZXR1cm4gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF4KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlZFNwbGl0KHN0cikge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICBwb3MgPSAwLFxuICAgICAgbWF4ID0gc3RyLmxlbmd0aCxcbiAgICAgIGNoLFxuICAgICAgaXNFc2NhcGVkID0gZmFsc2UsXG4gICAgICBsYXN0UG9zID0gMCxcbiAgICAgIGN1cnJlbnQgPSAnJztcblxuICBjaCAgPSBzdHIuY2hhckNvZGVBdChwb3MpO1xuXG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBpZiAoY2ggPT09IDB4N2MvKiB8ICovKSB7XG4gICAgICBpZiAoIWlzRXNjYXBlZCkge1xuICAgICAgICAvLyBwaXBlIHNlcGFyYXRpbmcgY2VsbHMsICd8J1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50ICsgc3RyLnN1YnN0cmluZyhsYXN0UG9zLCBwb3MpKTtcbiAgICAgICAgY3VycmVudCA9ICcnO1xuICAgICAgICBsYXN0UG9zID0gcG9zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzY2FwZWQgcGlwZSwgJ1xcfCdcbiAgICAgICAgY3VycmVudCArPSBzdHIuc3Vic3RyaW5nKGxhc3RQb3MsIHBvcyAtIDEpO1xuICAgICAgICBsYXN0UG9zID0gcG9zO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlzRXNjYXBlZCA9IChjaCA9PT0gMHg1Yy8qIFxcICovKTtcbiAgICBwb3MrKztcblxuICAgIGNoID0gc3RyLmNoYXJDb2RlQXQocG9zKTtcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQgKyBzdHIuc3Vic3RyaW5nKGxhc3RQb3MpKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGFibGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbGluZVRleHQsIHBvcywgaSwgbCwgbmV4dExpbmUsIGNvbHVtbnMsIGNvbHVtbkNvdW50LCB0b2tlbixcbiAgICAgIGFsaWducywgdCwgdGFibGVMaW5lcywgdGJvZHlMaW5lcywgb2xkUGFyZW50VHlwZSwgdGVybWluYXRlLFxuICAgICAgdGVybWluYXRvclJ1bGVzLCBmaXJzdENoLCBzZWNvbmRDaDtcblxuICAvLyBzaG91bGQgaGF2ZSBhdCBsZWFzdCB0d28gbGluZXNcbiAgaWYgKHN0YXJ0TGluZSArIDIgPiBlbmRMaW5lKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBpZiBpdCdzIGluZGVudGVkIG1vcmUgdGhhbiAzIHNwYWNlcywgaXQgc2hvdWxkIGJlIGEgY29kZSBibG9ja1xuICBpZiAoc3RhdGUuc0NvdW50W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIGZpcnN0IGNoYXJhY3RlciBvZiB0aGUgc2Vjb25kIGxpbmUgc2hvdWxkIGJlICd8JywgJy0nLCAnOicsXG4gIC8vIGFuZCBubyBvdGhlciBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkIGJ1dCBzcGFjZXM7XG4gIC8vIGJhc2ljYWxseSwgdGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiAvXlstOnxdWy06fFxcc10qJC8gcmVnZXhwXG5cbiAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gIGlmIChwb3MgPj0gc3RhdGUuZU1hcmtzW25leHRMaW5lXSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBmaXJzdENoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICBpZiAoZmlyc3RDaCAhPT0gMHg3Qy8qIHwgKi8gJiYgZmlyc3RDaCAhPT0gMHgyRC8qIC0gKi8gJiYgZmlyc3RDaCAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHBvcyA+PSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHNlY29uZENoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspO1xuICBpZiAoc2Vjb25kQ2ggIT09IDB4N0MvKiB8ICovICYmIHNlY29uZENoICE9PSAweDJELyogLSAqLyAmJiBzZWNvbmRDaCAhPT0gMHgzQS8qIDogKi8gJiYgIWlzU3BhY2Uoc2Vjb25kQ2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gaWYgZmlyc3QgY2hhcmFjdGVyIGlzICctJywgdGhlbiBzZWNvbmQgY2hhcmFjdGVyIG11c3Qgbm90IGJlIGEgc3BhY2VcbiAgLy8gKGR1ZSB0byBwYXJzaW5nIGFtYmlndWl0eSB3aXRoIGxpc3QpXG4gIGlmIChmaXJzdENoID09PSAweDJELyogLSAqLyAmJiBpc1NwYWNlKHNlY29uZENoKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICB3aGlsZSAocG9zIDwgc3RhdGUuZU1hcmtzW25leHRMaW5lXSkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjaCAhPT0gMHg3Qy8qIHwgKi8gJiYgY2ggIT09IDB4MkQvKiAtICovICYmIGNoICE9PSAweDNBLyogOiAqLyAmJiAhaXNTcGFjZShjaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgc3RhcnRMaW5lICsgMSk7XG5cbiAgY29sdW1ucyA9IGxpbmVUZXh0LnNwbGl0KCd8Jyk7XG4gIGFsaWducyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgIHQgPSBjb2x1bW5zW2ldLnRyaW0oKTtcbiAgICBpZiAoIXQpIHtcbiAgICAgIC8vIGFsbG93IGVtcHR5IGNvbHVtbnMgYmVmb3JlIGFuZCBhZnRlciB0YWJsZSwgYnV0IG5vdCBpbiBiZXR3ZWVuIGNvbHVtbnM7XG4gICAgICAvLyBlLmcuIGFsbG93IGAgfC0tLXwgYCwgZGlzYWxsb3cgYCAtLS18fC0tLSBgXG4gICAgICBpZiAoaSA9PT0gMCB8fCBpID09PSBjb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXjo/LSs6PyQvLnRlc3QodCkpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHQuY2hhckNvZGVBdCh0Lmxlbmd0aCAtIDEpID09PSAweDNBLyogOiAqLykge1xuICAgICAgYWxpZ25zLnB1c2godC5jaGFyQ29kZUF0KDApID09PSAweDNBLyogOiAqLyA/ICdjZW50ZXInIDogJ3JpZ2h0Jyk7XG4gICAgfSBlbHNlIGlmICh0LmNoYXJDb2RlQXQoMCkgPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBhbGlnbnMucHVzaCgnbGVmdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGlnbnMucHVzaCgnJyk7XG4gICAgfVxuICB9XG5cbiAgbGluZVRleHQgPSBnZXRMaW5lKHN0YXRlLCBzdGFydExpbmUpLnRyaW0oKTtcbiAgaWYgKGxpbmVUZXh0LmluZGV4T2YoJ3wnKSA9PT0gLTEpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zQ291bnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7IHJldHVybiBmYWxzZTsgfVxuICBjb2x1bW5zID0gZXNjYXBlZFNwbGl0KGxpbmVUZXh0KTtcbiAgaWYgKGNvbHVtbnMubGVuZ3RoICYmIGNvbHVtbnNbMF0gPT09ICcnKSBjb2x1bW5zLnNoaWZ0KCk7XG4gIGlmIChjb2x1bW5zLmxlbmd0aCAmJiBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0gPT09ICcnKSBjb2x1bW5zLnBvcCgpO1xuXG4gIC8vIGhlYWRlciByb3cgd2lsbCBkZWZpbmUgYW4gYW1vdW50IG9mIGNvbHVtbnMgaW4gdGhlIGVudGlyZSB0YWJsZSxcbiAgLy8gYW5kIGFsaWduIHJvdyBzaG91bGQgYmUgZXhhY3RseSB0aGUgc2FtZSAodGhlIHJlc3Qgb2YgdGhlIHJvd3MgY2FuIGRpZmZlcilcbiAgY29sdW1uQ291bnQgPSBjb2x1bW5zLmxlbmd0aDtcbiAgaWYgKGNvbHVtbkNvdW50ID09PSAwIHx8IGNvbHVtbkNvdW50ICE9PSBhbGlnbnMubGVuZ3RoKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBvbGRQYXJlbnRUeXBlID0gc3RhdGUucGFyZW50VHlwZTtcbiAgc3RhdGUucGFyZW50VHlwZSA9ICd0YWJsZSc7XG5cbiAgLy8gdXNlICdibG9ja3F1b3RlJyBsaXN0cyBmb3IgdGVybWluYXRpb24gYmVjYXVzZSBpdCdzXG4gIC8vIHRoZSBtb3N0IHNpbWlsYXIgdG8gdGFibGVzXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLm1kLmJsb2NrLnJ1bGVyLmdldFJ1bGVzKCdibG9ja3F1b3RlJyk7XG5cbiAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndGFibGVfb3BlbicsICd0YWJsZScsIDEpO1xuICB0b2tlbi5tYXAgPSB0YWJsZUxpbmVzID0gWyBzdGFydExpbmUsIDAgXTtcblxuICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0aGVhZF9vcGVuJywgJ3RoZWFkJywgMSk7XG4gIHRva2VuLm1hcCA9IFsgc3RhcnRMaW5lLCBzdGFydExpbmUgKyAxIF07XG5cbiAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndHJfb3BlbicsICd0cicsIDEpO1xuICB0b2tlbi5tYXAgPSBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0aF9vcGVuJywgJ3RoJywgMSk7XG4gICAgaWYgKGFsaWduc1tpXSkge1xuICAgICAgdG9rZW4uYXR0cnMgID0gWyBbICdzdHlsZScsICd0ZXh0LWFsaWduOicgKyBhbGlnbnNbaV0gXSBdO1xuICAgIH1cblxuICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgnaW5saW5lJywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgID0gY29sdW1uc1tpXS50cmltKCk7XG4gICAgdG9rZW4uY2hpbGRyZW4gPSBbXTtcblxuICAgIHRva2VuICAgICAgICAgID0gc3RhdGUucHVzaCgndGhfY2xvc2UnLCAndGgnLCAtMSk7XG4gIH1cblxuICB0b2tlbiAgICAgPSBzdGF0ZS5wdXNoKCd0cl9jbG9zZScsICd0cicsIC0xKTtcbiAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndGhlYWRfY2xvc2UnLCAndGhlYWQnLCAtMSk7XG5cbiAgZm9yIChuZXh0TGluZSA9IHN0YXJ0TGluZSArIDI7IG5leHRMaW5lIDwgZW5kTGluZTsgbmV4dExpbmUrKykge1xuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICB0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gdGVybWluYXRvclJ1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgIHRlcm1pbmF0ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cbiAgICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIG5leHRMaW5lKS50cmltKCk7XG4gICAgaWYgKCFsaW5lVGV4dCkgeyBicmVhazsgfVxuICAgIGlmIChzdGF0ZS5zQ291bnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHsgYnJlYWs7IH1cbiAgICBjb2x1bW5zID0gZXNjYXBlZFNwbGl0KGxpbmVUZXh0KTtcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggJiYgY29sdW1uc1swXSA9PT0gJycpIGNvbHVtbnMuc2hpZnQoKTtcbiAgICBpZiAoY29sdW1ucy5sZW5ndGggJiYgY29sdW1uc1tjb2x1bW5zLmxlbmd0aCAtIDFdID09PSAnJykgY29sdW1ucy5wb3AoKTtcblxuICAgIGlmIChuZXh0TGluZSA9PT0gc3RhcnRMaW5lICsgMikge1xuICAgICAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgndGJvZHlfb3BlbicsICd0Ym9keScsIDEpO1xuICAgICAgdG9rZW4ubWFwID0gdGJvZHlMaW5lcyA9IFsgc3RhcnRMaW5lICsgMiwgMCBdO1xuICAgIH1cblxuICAgIHRva2VuICAgICA9IHN0YXRlLnB1c2goJ3RyX29wZW4nLCAndHInLCAxKTtcbiAgICB0b2tlbi5tYXAgPSBbIG5leHRMaW5lLCBuZXh0TGluZSArIDEgXTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb2x1bW5Db3VudDsgaSsrKSB7XG4gICAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ3RkX29wZW4nLCAndGQnLCAxKTtcbiAgICAgIGlmIChhbGlnbnNbaV0pIHtcbiAgICAgICAgdG9rZW4uYXR0cnMgID0gWyBbICdzdHlsZScsICd0ZXh0LWFsaWduOicgKyBhbGlnbnNbaV0gXSBdO1xuICAgICAgfVxuXG4gICAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ2lubGluZScsICcnLCAwKTtcbiAgICAgIHRva2VuLmNvbnRlbnQgID0gY29sdW1uc1tpXSA/IGNvbHVtbnNbaV0udHJpbSgpIDogJyc7XG4gICAgICB0b2tlbi5jaGlsZHJlbiA9IFtdO1xuXG4gICAgICB0b2tlbiAgICAgICAgICA9IHN0YXRlLnB1c2goJ3RkX2Nsb3NlJywgJ3RkJywgLTEpO1xuICAgIH1cbiAgICB0b2tlbiA9IHN0YXRlLnB1c2goJ3RyX2Nsb3NlJywgJ3RyJywgLTEpO1xuICB9XG5cbiAgaWYgKHRib2R5TGluZXMpIHtcbiAgICB0b2tlbiA9IHN0YXRlLnB1c2goJ3Rib2R5X2Nsb3NlJywgJ3Rib2R5JywgLTEpO1xuICAgIHRib2R5TGluZXNbMV0gPSBuZXh0TGluZTtcbiAgfVxuXG4gIHRva2VuID0gc3RhdGUucHVzaCgndGFibGVfY2xvc2UnLCAndGFibGUnLCAtMSk7XG4gIHRhYmxlTGluZXNbMV0gPSBuZXh0TGluZTtcblxuICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBibG9jayhzdGF0ZSkge1xuICB2YXIgdG9rZW47XG5cbiAgaWYgKHN0YXRlLmlubGluZU1vZGUpIHtcbiAgICB0b2tlbiAgICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbignaW5saW5lJywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgID0gc3RhdGUuc3JjO1xuICAgIHRva2VuLm1hcCAgICAgID0gWyAwLCAxIF07XG4gICAgdG9rZW4uY2hpbGRyZW4gPSBbXTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh0b2tlbik7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubWQuYmxvY2sucGFyc2Uoc3RhdGUuc3JjLCBzdGF0ZS5tZCwgc3RhdGUuZW52LCBzdGF0ZS50b2tlbnMpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlubGluZShzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCB0b2ssIGksIGw7XG5cbiAgLy8gUGFyc2UgaW5saW5lc1xuICBmb3IgKGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRvayA9IHRva2Vuc1tpXTtcbiAgICBpZiAodG9rLnR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICBzdGF0ZS5tZC5pbmxpbmUucGFyc2UodG9rLmNvbnRlbnQsIHN0YXRlLm1kLCBzdGF0ZS5lbnYsIHRvay5jaGlsZHJlbik7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUmVwbGFjZSBsaW5rLWxpa2UgdGV4dHMgd2l0aCBsaW5rIG5vZGVzLlxuLy9cbi8vIEN1cnJlbnRseSByZXN0cmljdGVkIGJ5IGBtZC52YWxpZGF0ZUxpbmsoKWAgdG8gaHR0cC9odHRwcy9mdHBcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGFycmF5UmVwbGFjZUF0ID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuYXJyYXlSZXBsYWNlQXQ7XG5cblxuZnVuY3Rpb24gaXNMaW5rT3BlbihzdHIpIHtcbiAgcmV0dXJuIC9ePGFbPlxcc10vaS50ZXN0KHN0cik7XG59XG5mdW5jdGlvbiBpc0xpbmtDbG9zZShzdHIpIHtcbiAgcmV0dXJuIC9ePFxcL2FcXHMqPi9pLnRlc3Qoc3RyKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbmtpZnkoc3RhdGUpIHtcbiAgdmFyIGksIGosIGwsIHRva2VucywgdG9rZW4sIGN1cnJlbnRUb2tlbiwgbm9kZXMsIGxuLCB0ZXh0LCBwb3MsIGxhc3RQb3MsXG4gICAgICBsZXZlbCwgaHRtbExpbmtMZXZlbCwgdXJsLCBmdWxsVXJsLCB1cmxUZXh0LFxuICAgICAgYmxvY2tUb2tlbnMgPSBzdGF0ZS50b2tlbnMsXG4gICAgICBsaW5rcztcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMubGlua2lmeSkgeyByZXR1cm47IH1cblxuICBmb3IgKGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnIHx8XG4gICAgICAgICFzdGF0ZS5tZC5saW5raWZ5LnByZXRlc3QoYmxvY2tUb2tlbnNbal0uY29udGVudCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHRva2VucyA9IGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuO1xuXG4gICAgaHRtbExpbmtMZXZlbCA9IDA7XG5cbiAgICAvLyBXZSBzY2FuIGZyb20gdGhlIGVuZCwgdG8ga2VlcCBwb3NpdGlvbiB3aGVuIG5ldyB0YWdzIGFkZGVkLlxuICAgIC8vIFVzZSByZXZlcnNlZCBsb2dpYyBpbiBsaW5rcyBzdGFydC9lbmQgbWF0Y2hcbiAgICBmb3IgKGkgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGN1cnJlbnRUb2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgLy8gU2tpcCBjb250ZW50IG9mIG1hcmtkb3duIGxpbmtzXG4gICAgICBpZiAoY3VycmVudFRva2VuLnR5cGUgPT09ICdsaW5rX2Nsb3NlJykge1xuICAgICAgICBpLS07XG4gICAgICAgIHdoaWxlICh0b2tlbnNbaV0ubGV2ZWwgIT09IGN1cnJlbnRUb2tlbi5sZXZlbCAmJiB0b2tlbnNbaV0udHlwZSAhPT0gJ2xpbmtfb3BlbicpIHtcbiAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNraXAgY29udGVudCBvZiBodG1sIHRhZyBsaW5rc1xuICAgICAgaWYgKGN1cnJlbnRUb2tlbi50eXBlID09PSAnaHRtbF9pbmxpbmUnKSB7XG4gICAgICAgIGlmIChpc0xpbmtPcGVuKGN1cnJlbnRUb2tlbi5jb250ZW50KSAmJiBodG1sTGlua0xldmVsID4gMCkge1xuICAgICAgICAgIGh0bWxMaW5rTGV2ZWwtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMaW5rQ2xvc2UoY3VycmVudFRva2VuLmNvbnRlbnQpKSB7XG4gICAgICAgICAgaHRtbExpbmtMZXZlbCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaHRtbExpbmtMZXZlbCA+IDApIHsgY29udGludWU7IH1cblxuICAgICAgaWYgKGN1cnJlbnRUb2tlbi50eXBlID09PSAndGV4dCcgJiYgc3RhdGUubWQubGlua2lmeS50ZXN0KGN1cnJlbnRUb2tlbi5jb250ZW50KSkge1xuXG4gICAgICAgIHRleHQgPSBjdXJyZW50VG9rZW4uY29udGVudDtcbiAgICAgICAgbGlua3MgPSBzdGF0ZS5tZC5saW5raWZ5Lm1hdGNoKHRleHQpO1xuXG4gICAgICAgIC8vIE5vdyBzcGxpdCBzdHJpbmcgdG8gbm9kZXNcbiAgICAgICAgbm9kZXMgPSBbXTtcbiAgICAgICAgbGV2ZWwgPSBjdXJyZW50VG9rZW4ubGV2ZWw7XG4gICAgICAgIGxhc3RQb3MgPSAwO1xuXG4gICAgICAgIC8vIGZvcmJpZCBlc2NhcGUgc2VxdWVuY2UgYXQgdGhlIHN0YXJ0IG9mIHRoZSBzdHJpbmcsXG4gICAgICAgIC8vIHRoaXMgYXZvaWRzIGh0dHBcXDovL2V4YW1wbGUuY29tLyBmcm9tIGJlaW5nIGxpbmtpZmllZCBhc1xuICAgICAgICAvLyBodHRwOjxhIGhyZWY9XCIvL2V4YW1wbGUuY29tL1wiPi8vZXhhbXBsZS5jb20vPC9hPlxuICAgICAgICBpZiAobGlua3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgbGlua3NbMF0uaW5kZXggPT09IDAgJiZcbiAgICAgICAgICAgIGkgPiAwICYmXG4gICAgICAgICAgICB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICd0ZXh0X3NwZWNpYWwnKSB7XG4gICAgICAgICAgbGlua3MgPSBsaW5rcy5zbGljZSgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobG4gPSAwOyBsbiA8IGxpbmtzLmxlbmd0aDsgbG4rKykge1xuICAgICAgICAgIHVybCA9IGxpbmtzW2xuXS51cmw7XG4gICAgICAgICAgZnVsbFVybCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmsodXJsKTtcbiAgICAgICAgICBpZiAoIXN0YXRlLm1kLnZhbGlkYXRlTGluayhmdWxsVXJsKSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgdXJsVGV4dCA9IGxpbmtzW2xuXS50ZXh0O1xuXG4gICAgICAgICAgLy8gTGlua2lmaWVyIG1pZ2h0IHNlbmQgcmF3IGhvc3RuYW1lcyBsaWtlIFwiZXhhbXBsZS5jb21cIiwgd2hlcmUgdXJsXG4gICAgICAgICAgLy8gc3RhcnRzIHdpdGggZG9tYWluIG5hbWUuIFNvIHdlIHByZXBlbmQgaHR0cDovLyBpbiB0aG9zZSBjYXNlcyxcbiAgICAgICAgICAvLyBhbmQgcmVtb3ZlIGl0IGFmdGVyd2FyZHMuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBpZiAoIWxpbmtzW2xuXS5zY2hlbWEpIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCgnaHR0cDovLycgKyB1cmxUZXh0KS5yZXBsYWNlKC9eaHR0cDpcXC9cXC8vLCAnJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaW5rc1tsbl0uc2NoZW1hID09PSAnbWFpbHRvOicgJiYgIS9ebWFpbHRvOi9pLnRlc3QodXJsVGV4dCkpIHtcbiAgICAgICAgICAgIHVybFRleHQgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rVGV4dCgnbWFpbHRvOicgKyB1cmxUZXh0KS5yZXBsYWNlKC9ebWFpbHRvOi8sICcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsVGV4dCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybFRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBvcyA9IGxpbmtzW2xuXS5pbmRleDtcblxuICAgICAgICAgIGlmIChwb3MgPiBsYXN0UG9zKSB7XG4gICAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApO1xuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHRleHQuc2xpY2UobGFzdFBvcywgcG9zKTtcbiAgICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbDtcbiAgICAgICAgICAgIG5vZGVzLnB1c2godG9rZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2VuICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICAgICAgdG9rZW4uYXR0cnMgICA9IFsgWyAnaHJlZicsIGZ1bGxVcmwgXSBdO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbCsrO1xuICAgICAgICAgIHRva2VuLm1hcmt1cCAgPSAnbGlua2lmeSc7XG4gICAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIHRva2VuICAgICAgICAgPSBuZXcgc3RhdGUuVG9rZW4oJ3RleHQnLCAnJywgMCk7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHVybFRleHQ7XG4gICAgICAgICAgdG9rZW4ubGV2ZWwgICA9IGxldmVsO1xuICAgICAgICAgIG5vZGVzLnB1c2godG9rZW4pO1xuXG4gICAgICAgICAgdG9rZW4gICAgICAgICA9IG5ldyBzdGF0ZS5Ub2tlbignbGlua19jbG9zZScsICdhJywgLTEpO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSAtLWxldmVsO1xuICAgICAgICAgIHRva2VuLm1hcmt1cCAgPSAnbGlua2lmeSc7XG4gICAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdhdXRvJztcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIGxhc3RQb3MgPSBsaW5rc1tsbl0ubGFzdEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0UG9zIDwgdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICB0b2tlbiAgICAgICAgID0gbmV3IHN0YXRlLlRva2VuKCd0ZXh0JywgJycsIDApO1xuICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSB0ZXh0LnNsaWNlKGxhc3RQb3MpO1xuICAgICAgICAgIHRva2VuLmxldmVsICAgPSBsZXZlbDtcbiAgICAgICAgICBub2Rlcy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBub2RlXG4gICAgICAgIGJsb2NrVG9rZW5zW2pdLmNoaWxkcmVuID0gdG9rZW5zID0gYXJyYXlSZXBsYWNlQXQodG9rZW5zLCBpLCBub2Rlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiLy8gTm9ybWFsaXplIGlucHV0IHN0cmluZ1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gaHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2xpbmUtZW5kaW5nXG52YXIgTkVXTElORVNfUkUgID0gL1xcclxcbj98XFxuL2c7XG52YXIgTlVMTF9SRSAgICAgID0gL1xcMC9nO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplKHN0YXRlKSB7XG4gIHZhciBzdHI7XG5cbiAgLy8gTm9ybWFsaXplIG5ld2xpbmVzXG4gIHN0ciA9IHN0YXRlLnNyYy5yZXBsYWNlKE5FV0xJTkVTX1JFLCAnXFxuJyk7XG5cbiAgLy8gUmVwbGFjZSBOVUxMIGNoYXJhY3RlcnNcbiAgc3RyID0gc3RyLnJlcGxhY2UoTlVMTF9SRSwgJ1xcdUZGRkQnKTtcblxuICBzdGF0ZS5zcmMgPSBzdHI7XG59O1xuIiwiLy8gU2ltcGxlIHR5cG9ncmFwaGljIHJlcGxhY2VtZW50c1xuLy9cbi8vIChjKSAoQykg4oaSIMKpXG4vLyAodG0pIChUTSkg4oaSIOKEolxuLy8gKHIpIChSKSDihpIgwq5cbi8vICstIOKGkiDCsVxuLy8gKHApIChQKSAtPiDCp1xuLy8gLi4uIOKGkiDigKYgKGFsc28gPy4uLi4g4oaSID8uLiwgIS4uLi4g4oaSICEuLilcbi8vID8/Pz8/Pz8/IOKGkiA/Pz8sICEhISEhIOKGkiAhISEsIGAsLGAg4oaSIGAsYFxuLy8gLS0g4oaSICZuZGFzaDssIC0tLSDihpIgJm1kYXNoO1xuLy9cbid1c2Ugc3RyaWN0JztcblxuLy8gVE9ETzpcbi8vIC0gZnJhY3Rpb25hbHMgMS8yLCAxLzQsIDMvNCAtPiDCvSwgwrwsIMK+XG4vLyAtIG11bHRpcGxpY2F0aW9ucyAyIHggNCAtPiAyIMOXIDRcblxudmFyIFJBUkVfUkUgPSAvXFwrLXxcXC5cXC58XFw/XFw/XFw/XFw/fCEhISF8LCx8LS0vO1xuXG4vLyBXb3JrYXJvdW5kIGZvciBwaGFudG9tanMgLSBuZWVkIHJlZ2V4IHdpdGhvdXQgL2cgZmxhZyxcbi8vIG9yIHJvb3QgY2hlY2sgd2lsbCBmYWlsIGV2ZXJ5IHNlY29uZCB0aW1lXG52YXIgU0NPUEVEX0FCQlJfVEVTVF9SRSA9IC9cXCgoY3x0bXxyKVxcKS9pO1xuXG52YXIgU0NPUEVEX0FCQlJfUkUgPSAvXFwoKGN8dG18cilcXCkvaWc7XG52YXIgU0NPUEVEX0FCQlIgPSB7XG4gIGM6ICfCqScsXG4gIHI6ICfCricsXG4gIHRtOiAn4oSiJ1xufTtcblxuZnVuY3Rpb24gcmVwbGFjZUZuKG1hdGNoLCBuYW1lKSB7XG4gIHJldHVybiBTQ09QRURfQUJCUltuYW1lLnRvTG93ZXJDYXNlKCldO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlX3Njb3BlZChpbmxpbmVUb2tlbnMpIHtcbiAgdmFyIGksIHRva2VuLCBpbnNpZGVfYXV0b2xpbmsgPSAwO1xuXG4gIGZvciAoaSA9IGlubGluZVRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiAhaW5zaWRlX2F1dG9saW5rKSB7XG4gICAgICB0b2tlbi5jb250ZW50ID0gdG9rZW4uY29udGVudC5yZXBsYWNlKFNDT1BFRF9BQkJSX1JFLCByZXBsYWNlRm4pO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19vcGVuJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluay0tO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAnbGlua19jbG9zZScgJiYgdG9rZW4uaW5mbyA9PT0gJ2F1dG8nKSB7XG4gICAgICBpbnNpZGVfYXV0b2xpbmsrKztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZV9yYXJlKGlubGluZVRva2Vucykge1xuICB2YXIgaSwgdG9rZW4sIGluc2lkZV9hdXRvbGluayA9IDA7XG5cbiAgZm9yIChpID0gaW5saW5lVG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdG9rZW4gPSBpbmxpbmVUb2tlbnNbaV07XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RleHQnICYmICFpbnNpZGVfYXV0b2xpbmspIHtcbiAgICAgIGlmIChSQVJFX1JFLnRlc3QodG9rZW4uY29udGVudCkpIHtcbiAgICAgICAgdG9rZW4uY29udGVudCA9IHRva2VuLmNvbnRlbnRcbiAgICAgICAgICAucmVwbGFjZSgvXFwrLS9nLCAnwrEnKVxuICAgICAgICAgIC8vIC4uLCAuLi4sIC4uLi4uLi4gLT4g4oCmXG4gICAgICAgICAgLy8gYnV0ID8uLi4uLiAmICEuLi4uLiAtPiA/Li4gJiAhLi5cbiAgICAgICAgICAucmVwbGFjZSgvXFwuezIsfS9nLCAn4oCmJykucmVwbGFjZSgvKFs/IV0p4oCmL2csICckMS4uJylcbiAgICAgICAgICAucmVwbGFjZSgvKFs/IV0pezQsfS9nLCAnJDEkMSQxJykucmVwbGFjZSgvLHsyLH0vZywgJywnKVxuICAgICAgICAgIC8vIGVtLWRhc2hcbiAgICAgICAgICAucmVwbGFjZSgvKF58W14tXSktLS0oPz1bXi1dfCQpL21nLCAnJDFcXHUyMDE0JylcbiAgICAgICAgICAvLyBlbi1kYXNoXG4gICAgICAgICAgLnJlcGxhY2UoLyhefFxccyktLSg/PVxcc3wkKS9tZywgJyQxXFx1MjAxMycpXG4gICAgICAgICAgLnJlcGxhY2UoLyhefFteLVxcc10pLS0oPz1bXi1cXHNdfCQpL21nLCAnJDFcXHUyMDEzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX29wZW4nICYmIHRva2VuLmluZm8gPT09ICdhdXRvJykge1xuICAgICAgaW5zaWRlX2F1dG9saW5rLS07XG4gICAgfVxuXG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdsaW5rX2Nsb3NlJyAmJiB0b2tlbi5pbmZvID09PSAnYXV0bycpIHtcbiAgICAgIGluc2lkZV9hdXRvbGluaysrO1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICB2YXIgYmxrSWR4O1xuXG4gIGlmICghc3RhdGUubWQub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKFNDT1BFRF9BQkJSX1RFU1RfUkUudGVzdChzdGF0ZS50b2tlbnNbYmxrSWR4XS5jb250ZW50KSkge1xuICAgICAgcmVwbGFjZV9zY29wZWQoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGlmIChSQVJFX1JFLnRlc3Qoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY29udGVudCkpIHtcbiAgICAgIHJlcGxhY2VfcmFyZShzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbik7XG4gICAgfVxuXG4gIH1cbn07XG4iLCIvLyBDb252ZXJ0IHN0cmFpZ2h0IHF1b3RhdGlvbiBtYXJrcyB0byB0eXBvZ3JhcGhpYyBvbmVzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBpc1doaXRlU3BhY2UgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzV2hpdGVTcGFjZTtcbnZhciBpc1B1bmN0Q2hhciAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzUHVuY3RDaGFyO1xudmFyIGlzTWRBc2NpaVB1bmN0ID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNNZEFzY2lpUHVuY3Q7XG5cbnZhciBRVU9URV9URVNUX1JFID0gL1snXCJdLztcbnZhciBRVU9URV9SRSA9IC9bJ1wiXS9nO1xudmFyIEFQT1NUUk9QSEUgPSAnXFx1MjAxOSc7IC8qIOKAmSAqL1xuXG5cbmZ1bmN0aW9uIHJlcGxhY2VBdChzdHIsIGluZGV4LCBjaCkge1xuICByZXR1cm4gc3RyLnNsaWNlKDAsIGluZGV4KSArIGNoICsgc3RyLnNsaWNlKGluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NfaW5saW5lcyh0b2tlbnMsIHN0YXRlKSB7XG4gIHZhciBpLCB0b2tlbiwgdGV4dCwgdCwgcG9zLCBtYXgsIHRoaXNMZXZlbCwgaXRlbSwgbGFzdENoYXIsIG5leHRDaGFyLFxuICAgICAgaXNMYXN0UHVuY3RDaGFyLCBpc05leHRQdW5jdENoYXIsIGlzTGFzdFdoaXRlU3BhY2UsIGlzTmV4dFdoaXRlU3BhY2UsXG4gICAgICBjYW5PcGVuLCBjYW5DbG9zZSwgaiwgaXNTaW5nbGUsIHN0YWNrLCBvcGVuUXVvdGUsIGNsb3NlUXVvdGU7XG5cbiAgc3RhY2sgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICB0aGlzTGV2ZWwgPSB0b2tlbnNbaV0ubGV2ZWw7XG5cbiAgICBmb3IgKGogPSBzdGFjay5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDw9IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgIH1cbiAgICBzdGFjay5sZW5ndGggPSBqICsgMTtcblxuICAgIGlmICh0b2tlbi50eXBlICE9PSAndGV4dCcpIHsgY29udGludWU7IH1cblxuICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgIHBvcyA9IDA7XG4gICAgbWF4ID0gdGV4dC5sZW5ndGg7XG5cbiAgICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICAgIE9VVEVSOlxuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIFFVT1RFX1JFLmxhc3RJbmRleCA9IHBvcztcbiAgICAgIHQgPSBRVU9URV9SRS5leGVjKHRleHQpO1xuICAgICAgaWYgKCF0KSB7IGJyZWFrOyB9XG5cbiAgICAgIGNhbk9wZW4gPSBjYW5DbG9zZSA9IHRydWU7XG4gICAgICBwb3MgPSB0LmluZGV4ICsgMTtcbiAgICAgIGlzU2luZ2xlID0gKHRbMF0gPT09IFwiJ1wiKTtcblxuICAgICAgLy8gRmluZCBwcmV2aW91cyBjaGFyYWN0ZXIsXG4gICAgICAvLyBkZWZhdWx0IHRvIHNwYWNlIGlmIGl0J3MgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZVxuICAgICAgLy9cbiAgICAgIGxhc3RDaGFyID0gMHgyMDtcblxuICAgICAgaWYgKHQuaW5kZXggLSAxID49IDApIHtcbiAgICAgICAgbGFzdENoYXIgPSB0ZXh0LmNoYXJDb2RlQXQodC5pbmRleCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChqID0gaSAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgaWYgKHRva2Vuc1tqXS50eXBlID09PSAnc29mdGJyZWFrJyB8fCB0b2tlbnNbal0udHlwZSA9PT0gJ2hhcmRicmVhaycpIGJyZWFrOyAvLyBsYXN0Q2hhciBkZWZhdWx0cyB0byAweDIwXG4gICAgICAgICAgaWYgKCF0b2tlbnNbal0uY29udGVudCkgY29udGludWU7IC8vIHNob3VsZCBza2lwIGFsbCB0b2tlbnMgZXhjZXB0ICd0ZXh0JywgJ2h0bWxfaW5saW5lJyBvciAnY29kZV9pbmxpbmUnXG5cbiAgICAgICAgICBsYXN0Q2hhciA9IHRva2Vuc1tqXS5jb250ZW50LmNoYXJDb2RlQXQodG9rZW5zW2pdLmNvbnRlbnQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRmluZCBuZXh0IGNoYXJhY3RlcixcbiAgICAgIC8vIGRlZmF1bHQgdG8gc3BhY2UgaWYgaXQncyB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAvL1xuICAgICAgbmV4dENoYXIgPSAweDIwO1xuXG4gICAgICBpZiAocG9zIDwgbWF4KSB7XG4gICAgICAgIG5leHRDaGFyID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGogPSBpICsgMTsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh0b2tlbnNbal0udHlwZSA9PT0gJ3NvZnRicmVhaycgfHwgdG9rZW5zW2pdLnR5cGUgPT09ICdoYXJkYnJlYWsnKSBicmVhazsgLy8gbmV4dENoYXIgZGVmYXVsdHMgdG8gMHgyMFxuICAgICAgICAgIGlmICghdG9rZW5zW2pdLmNvbnRlbnQpIGNvbnRpbnVlOyAvLyBzaG91bGQgc2tpcCBhbGwgdG9rZW5zIGV4Y2VwdCAndGV4dCcsICdodG1sX2lubGluZScgb3IgJ2NvZGVfaW5saW5lJ1xuXG4gICAgICAgICAgbmV4dENoYXIgPSB0b2tlbnNbal0uY29udGVudC5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlzTGFzdFB1bmN0Q2hhciA9IGlzTWRBc2NpaVB1bmN0KGxhc3RDaGFyKSB8fCBpc1B1bmN0Q2hhcihTdHJpbmcuZnJvbUNoYXJDb2RlKGxhc3RDaGFyKSk7XG4gICAgICBpc05leHRQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChuZXh0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhcikpO1xuXG4gICAgICBpc0xhc3RXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlKGxhc3RDaGFyKTtcbiAgICAgIGlzTmV4dFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobmV4dENoYXIpO1xuXG4gICAgICBpZiAoaXNOZXh0V2hpdGVTcGFjZSkge1xuICAgICAgICBjYW5PcGVuID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGlzTmV4dFB1bmN0Q2hhcikge1xuICAgICAgICBpZiAoIShpc0xhc3RXaGl0ZVNwYWNlIHx8IGlzTGFzdFB1bmN0Q2hhcikpIHtcbiAgICAgICAgICBjYW5PcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzTGFzdFdoaXRlU3BhY2UpIHtcbiAgICAgICAgY2FuQ2xvc2UgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UHVuY3RDaGFyKSB7XG4gICAgICAgIGlmICghKGlzTmV4dFdoaXRlU3BhY2UgfHwgaXNOZXh0UHVuY3RDaGFyKSkge1xuICAgICAgICAgIGNhbkNsb3NlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRDaGFyID09PSAweDIyIC8qIFwiICovICYmIHRbMF0gPT09ICdcIicpIHtcbiAgICAgICAgaWYgKGxhc3RDaGFyID49IDB4MzAgLyogMCAqLyAmJiBsYXN0Q2hhciA8PSAweDM5IC8qIDkgKi8pIHtcbiAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IDFcIlwiIC0gY291bnQgZmlyc3QgcXVvdGUgYXMgYW4gaW5jaFxuICAgICAgICAgIGNhbkNsb3NlID0gY2FuT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5PcGVuICYmIGNhbkNsb3NlKSB7XG4gICAgICAgIC8vIFJlcGxhY2UgcXVvdGVzIGluIHRoZSBtaWRkbGUgb2YgcHVuY3R1YXRpb24gc2VxdWVuY2UsIGJ1dCBub3RcbiAgICAgICAgLy8gaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29yZHMsIGkuZS46XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIGZvbyBcIiBiYXIgXCIgYmF6IC0gbm90IHJlcGxhY2VkXG4gICAgICAgIC8vIDIuIGZvby1cIi1iYXItXCItYmF6IC0gcmVwbGFjZWRcbiAgICAgICAgLy8gMy4gZm9vXCJiYXJcImJheiAgICAgLSBub3QgcmVwbGFjZWRcbiAgICAgICAgLy9cbiAgICAgICAgY2FuT3BlbiA9IGlzTGFzdFB1bmN0Q2hhcjtcbiAgICAgICAgY2FuQ2xvc2UgPSBpc05leHRQdW5jdENoYXI7XG4gICAgICB9XG5cbiAgICAgIGlmICghY2FuT3BlbiAmJiAhY2FuQ2xvc2UpIHtcbiAgICAgICAgLy8gbWlkZGxlIG9mIHdvcmRcbiAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbkNsb3NlKSB7XG4gICAgICAgIC8vIHRoaXMgY291bGQgYmUgYSBjbG9zaW5nIHF1b3RlLCByZXdpbmQgdGhlIHN0YWNrIHRvIGdldCBhIG1hdGNoXG4gICAgICAgIGZvciAoaiA9IHN0YWNrLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuICAgICAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgICAgICAgIGlmIChpdGVtLnNpbmdsZSA9PT0gaXNTaW5nbGUgJiYgc3RhY2tbal0ubGV2ZWwgPT09IHRoaXNMZXZlbCkge1xuICAgICAgICAgICAgaXRlbSA9IHN0YWNrW2pdO1xuXG4gICAgICAgICAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgICAgICAgICAgb3BlblF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbMl07XG4gICAgICAgICAgICAgIGNsb3NlUXVvdGUgPSBzdGF0ZS5tZC5vcHRpb25zLnF1b3Rlc1szXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wZW5RdW90ZSA9IHN0YXRlLm1kLm9wdGlvbnMucXVvdGVzWzBdO1xuICAgICAgICAgICAgICBjbG9zZVF1b3RlID0gc3RhdGUubWQub3B0aW9ucy5xdW90ZXNbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdG9rZW4uY29udGVudCAqYmVmb3JlKiB0b2tlbnNbaXRlbS50b2tlbl0uY29udGVudCxcbiAgICAgICAgICAgIC8vIGJlY2F1c2UsIGlmIHRoZXkgYXJlIHBvaW50aW5nIGF0IHRoZSBzYW1lIHRva2VuLCByZXBsYWNlQXRcbiAgICAgICAgICAgIC8vIGNvdWxkIG1lc3MgdXAgaW5kaWNlcyB3aGVuIHF1b3RlIGxlbmd0aCAhPSAxXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50ID0gcmVwbGFjZUF0KHRva2VuLmNvbnRlbnQsIHQuaW5kZXgsIGNsb3NlUXVvdGUpO1xuICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQgPSByZXBsYWNlQXQoXG4gICAgICAgICAgICAgIHRva2Vuc1tpdGVtLnRva2VuXS5jb250ZW50LCBpdGVtLnBvcywgb3BlblF1b3RlKTtcblxuICAgICAgICAgICAgcG9zICs9IGNsb3NlUXVvdGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChpdGVtLnRva2VuID09PSBpKSB7IHBvcyArPSBvcGVuUXVvdGUubGVuZ3RoIC0gMTsgfVxuXG4gICAgICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgICAgICAgIG1heCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICAgICAgICBzdGFjay5sZW5ndGggPSBqO1xuICAgICAgICAgICAgY29udGludWUgT1VURVI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5PcGVuKSB7XG4gICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgIHRva2VuOiBpLFxuICAgICAgICAgIHBvczogdC5pbmRleCxcbiAgICAgICAgICBzaW5nbGU6IGlzU2luZ2xlLFxuICAgICAgICAgIGxldmVsOiB0aGlzTGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNhbkNsb3NlICYmIGlzU2luZ2xlKSB7XG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgQVBPU1RST1BIRSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzbWFydHF1b3RlcyhzdGF0ZSkge1xuICAvKmVzbGludCBtYXgtZGVwdGg6MCovXG4gIHZhciBibGtJZHg7XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLnR5cG9ncmFwaGVyKSB7IHJldHVybjsgfVxuXG4gIGZvciAoYmxrSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDE7IGJsa0lkeCA+PSAwOyBibGtJZHgtLSkge1xuXG4gICAgaWYgKHN0YXRlLnRva2Vuc1tibGtJZHhdLnR5cGUgIT09ICdpbmxpbmUnIHx8XG4gICAgICAgICFRVU9URV9URVNUX1JFLnRlc3Qoc3RhdGUudG9rZW5zW2Jsa0lkeF0uY29udGVudCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb2Nlc3NfaW5saW5lcyhzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbiwgc3RhdGUpO1xuICB9XG59O1xuIiwiLy8gQ29yZSBzdGF0ZSBvYmplY3Rcbi8vXG4ndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cblxuZnVuY3Rpb24gU3RhdGVDb3JlKHNyYywgbWQsIGVudikge1xuICB0aGlzLnNyYyA9IHNyYztcbiAgdGhpcy5lbnYgPSBlbnY7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMuaW5saW5lTW9kZSA9IGZhbHNlO1xuICB0aGlzLm1kID0gbWQ7IC8vIGxpbmsgdG8gcGFyc2VyIGluc3RhbmNlXG59XG5cbi8vIHJlLWV4cG9ydCBUb2tlbiBjbGFzcyB0byB1c2UgaW4gY29yZSBydWxlc1xuU3RhdGVDb3JlLnByb3RvdHlwZS5Ub2tlbiA9IFRva2VuO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGVDb3JlO1xuIiwiLy8gSm9pbiByYXcgdGV4dCB0b2tlbnMgd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGV4dFxuLy9cbi8vIFRoaXMgaXMgc2V0IGFzIGEgc2VwYXJhdGUgcnVsZSB0byBwcm92aWRlIGFuIG9wcG9ydHVuaXR5IGZvciBwbHVnaW5zXG4vLyB0byBydW4gdGV4dCByZXBsYWNlbWVudHMgYWZ0ZXIgdGV4dCBqb2luLCBidXQgYmVmb3JlIGVzY2FwZSBqb2luLlxuLy9cbi8vIEZvciBleGFtcGxlLCBgXFw6KWAgc2hvdWxkbid0IGJlIHJlcGxhY2VkIHdpdGggYW4gZW1vamkuXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGV4dF9qb2luKHN0YXRlKSB7XG4gIHZhciBqLCBsLCB0b2tlbnMsIGN1cnIsIG1heCwgbGFzdCxcbiAgICAgIGJsb2NrVG9rZW5zID0gc3RhdGUudG9rZW5zO1xuXG4gIGZvciAoaiA9IDAsIGwgPSBibG9ja1Rva2Vucy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICBpZiAoYmxvY2tUb2tlbnNbal0udHlwZSAhPT0gJ2lubGluZScpIGNvbnRpbnVlO1xuXG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG4gICAgbWF4ID0gdG9rZW5zLmxlbmd0aDtcblxuICAgIGZvciAoY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgICAgaWYgKHRva2Vuc1tjdXJyXS50eXBlID09PSAndGV4dF9zcGVjaWFsJykge1xuICAgICAgICB0b2tlbnNbY3Vycl0udHlwZSA9ICd0ZXh0JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGN1cnIgPSBsYXN0ID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgICBpZiAodG9rZW5zW2N1cnJdLnR5cGUgPT09ICd0ZXh0JyAmJlxuICAgICAgICAgIGN1cnIgKyAxIDwgbWF4ICYmXG4gICAgICAgICAgdG9rZW5zW2N1cnIgKyAxXS50eXBlID09PSAndGV4dCcpIHtcblxuICAgICAgICAvLyBjb2xsYXBzZSB0d28gYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICB0b2tlbnNbY3VyciArIDFdLmNvbnRlbnQgPSB0b2tlbnNbY3Vycl0uY29udGVudCArIHRva2Vuc1tjdXJyICsgMV0uY29udGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyICE9PSBsYXN0KSB7IHRva2Vuc1tsYXN0XSA9IHRva2Vuc1tjdXJyXTsgfVxuXG4gICAgICAgIGxhc3QrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VyciAhPT0gbGFzdCkge1xuICAgICAgdG9rZW5zLmxlbmd0aCA9IGxhc3Q7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUHJvY2VzcyBhdXRvbGlua3MgJzxwcm90b2NvbDouLi4+J1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLyplc2xpbnQgbWF4LWxlbjowKi9cbnZhciBFTUFJTF9SRSAgICA9IC9eKFthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSopJC87XG52YXIgQVVUT0xJTktfUkUgPSAvXihbYS16QS1aXVthLXpBLVowLTkrLlxcLV17MSwzMX0pOihbXjw+XFx4MDAtXFx4MjBdKikkLztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGF1dG9saW5rKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHVybCwgZnVsbFVybCwgdG9rZW4sIGNoLCBzdGFydCwgbWF4LFxuICAgICAgcG9zID0gc3RhdGUucG9zO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGFydCA9IHN0YXRlLnBvcztcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGZvciAoOzspIHtcbiAgICBpZiAoKytwb3MgPj0gbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY2ggPT09IDB4M0MgLyogPCAqLykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjaCA9PT0gMHgzRSAvKiA+ICovKSBicmVhaztcbiAgfVxuXG4gIHVybCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDEsIHBvcyk7XG5cbiAgaWYgKEFVVE9MSU5LX1JFLnRlc3QodXJsKSkge1xuICAgIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHVybCk7XG4gICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICB0b2tlbi5hdHRycyAgID0gWyBbICdocmVmJywgZnVsbFVybCBdIF07XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgICAgdG9rZW4uY29udGVudCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybCk7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSk7XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggKyAyO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKEVNQUlMX1JFLnRlc3QodXJsKSkge1xuICAgIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKCdtYWlsdG86JyArIHVybCk7XG4gICAgaWYgKCFzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgICB0b2tlbi5hdHRycyAgID0gWyBbICdocmVmJywgZnVsbFVybCBdIF07XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgICAgdG9rZW4uY29udGVudCA9IHN0YXRlLm1kLm5vcm1hbGl6ZUxpbmtUZXh0KHVybCk7XG5cbiAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSk7XG4gICAgICB0b2tlbi5tYXJrdXAgID0gJ2F1dG9saW5rJztcbiAgICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggKyAyO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsIi8vIFBhcnNlIGJhY2t0aWNrc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYWNrdGljayhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBzdGFydCwgbWF4LCBtYXJrZXIsIHRva2VuLCBtYXRjaFN0YXJ0LCBtYXRjaEVuZCwgb3BlbmVyTGVuZ3RoLCBjbG9zZXJMZW5ndGgsXG4gICAgICBwb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKGNoICE9PSAweDYwLyogYCAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzdGFydCA9IHBvcztcbiAgcG9zKys7XG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBzY2FuIG1hcmtlciBsZW5ndGhcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDYwLyogYCAqLykgeyBwb3MrKzsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTtcbiAgb3BlbmVyTGVuZ3RoID0gbWFya2VyLmxlbmd0aDtcblxuICBpZiAoc3RhdGUuYmFja3RpY2tzU2Nhbm5lZCAmJiAoc3RhdGUuYmFja3RpY2tzW29wZW5lckxlbmd0aF0gfHwgMCkgPD0gc3RhcnQpIHtcbiAgICBpZiAoIXNpbGVudCkgc3RhdGUucGVuZGluZyArPSBtYXJrZXI7XG4gICAgc3RhdGUucG9zICs9IG9wZW5lckxlbmd0aDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG1hdGNoU3RhcnQgPSBtYXRjaEVuZCA9IHBvcztcblxuICAvLyBOb3RoaW5nIGZvdW5kIGluIHRoZSBjYWNoZSwgc2NhbiB1bnRpbCB0aGUgZW5kIG9mIHRoZSBsaW5lIChvciB1bnRpbCBtYXJrZXIgaXMgZm91bmQpXG4gIHdoaWxlICgobWF0Y2hTdGFydCA9IHN0YXRlLnNyYy5pbmRleE9mKCdgJywgbWF0Y2hFbmQpKSAhPT0gLTEpIHtcbiAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyAxO1xuXG4gICAgLy8gc2NhbiBtYXJrZXIgbGVuZ3RoXG4gICAgd2hpbGUgKG1hdGNoRW5kIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KG1hdGNoRW5kKSA9PT0gMHg2MC8qIGAgKi8pIHsgbWF0Y2hFbmQrKzsgfVxuXG4gICAgY2xvc2VyTGVuZ3RoID0gbWF0Y2hFbmQgLSBtYXRjaFN0YXJ0O1xuXG4gICAgaWYgKGNsb3Nlckxlbmd0aCA9PT0gb3BlbmVyTGVuZ3RoKSB7XG4gICAgICAvLyBGb3VuZCBtYXRjaGluZyBjbG9zZXIgbGVuZ3RoLlxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdG9rZW4gICAgID0gc3RhdGUucHVzaCgnY29kZV9pbmxpbmUnLCAnY29kZScsIDApO1xuICAgICAgICB0b2tlbi5tYXJrdXAgID0gbWFya2VyO1xuICAgICAgICB0b2tlbi5jb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKHBvcywgbWF0Y2hTdGFydClcbiAgICAgICAgICAucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAucmVwbGFjZSgvXiAoLispICQvLCAnJDEnKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnBvcyA9IG1hdGNoRW5kO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gU29tZSBkaWZmZXJlbnQgbGVuZ3RoIGZvdW5kLCBwdXQgaXQgaW4gY2FjaGUgYXMgdXBwZXIgbGltaXQgb2Ygd2hlcmUgY2xvc2VyIGNhbiBiZSBmb3VuZFxuICAgIHN0YXRlLmJhY2t0aWNrc1tjbG9zZXJMZW5ndGhdID0gbWF0Y2hTdGFydDtcbiAgfVxuXG4gIC8vIFNjYW5uZWQgdGhyb3VnaCB0aGUgZW5kLCBkaWRuJ3QgZmluZCBhbnl0aGluZ1xuICBzdGF0ZS5iYWNrdGlja3NTY2FubmVkID0gdHJ1ZTtcblxuICBpZiAoIXNpbGVudCkgc3RhdGUucGVuZGluZyArPSBtYXJrZXI7XG4gIHN0YXRlLnBvcyArPSBvcGVuZXJMZW5ndGg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIEZvciBlYWNoIG9wZW5pbmcgZW1waGFzaXMtbGlrZSBtYXJrZXIgZmluZCBhIG1hdGNoaW5nIGNsb3Npbmcgb25lXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NEZWxpbWl0ZXJzKHN0YXRlLCBkZWxpbWl0ZXJzKSB7XG4gIHZhciBjbG9zZXJJZHgsIG9wZW5lcklkeCwgY2xvc2VyLCBvcGVuZXIsIG1pbk9wZW5lcklkeCwgbmV3TWluT3BlbmVySWR4LFxuICAgICAgaXNPZGRNYXRjaCwgbGFzdEp1bXAsXG4gICAgICBvcGVuZXJzQm90dG9tID0ge30sXG4gICAgICBtYXggPSBkZWxpbWl0ZXJzLmxlbmd0aDtcblxuICBpZiAoIW1heCkgcmV0dXJuO1xuXG4gIC8vIGhlYWRlcklkeCBpcyB0aGUgZmlyc3QgZGVsaW1pdGVyIG9mIHRoZSBjdXJyZW50ICh3aGVyZSBjbG9zZXIgaXMpIGRlbGltaXRlciBydW5cbiAgdmFyIGhlYWRlcklkeCA9IDA7XG4gIHZhciBsYXN0VG9rZW5JZHggPSAtMjsgLy8gbmVlZHMgYW55IHZhbHVlIGxvd2VyIHRoYW4gLTFcbiAgdmFyIGp1bXBzID0gW107XG5cbiAgZm9yIChjbG9zZXJJZHggPSAwOyBjbG9zZXJJZHggPCBtYXg7IGNsb3NlcklkeCsrKSB7XG4gICAgY2xvc2VyID0gZGVsaW1pdGVyc1tjbG9zZXJJZHhdO1xuXG4gICAganVtcHMucHVzaCgwKTtcblxuICAgIC8vIG1hcmtlcnMgYmVsb25nIHRvIHNhbWUgZGVsaW1pdGVyIHJ1biBpZjpcbiAgICAvLyAgLSB0aGV5IGhhdmUgYWRqYWNlbnQgdG9rZW5zXG4gICAgLy8gIC0gQU5EIG1hcmtlcnMgYXJlIHRoZSBzYW1lXG4gICAgLy9cbiAgICBpZiAoZGVsaW1pdGVyc1toZWFkZXJJZHhdLm1hcmtlciAhPT0gY2xvc2VyLm1hcmtlciB8fCBsYXN0VG9rZW5JZHggIT09IGNsb3Nlci50b2tlbiAtIDEpIHtcbiAgICAgIGhlYWRlcklkeCA9IGNsb3NlcklkeDtcbiAgICB9XG5cbiAgICBsYXN0VG9rZW5JZHggPSBjbG9zZXIudG9rZW47XG5cbiAgICAvLyBMZW5ndGggaXMgb25seSB1c2VkIGZvciBlbXBoYXNpcy1zcGVjaWZpYyBcInJ1bGUgb2YgM1wiLFxuICAgIC8vIGlmIGl0J3Mgbm90IGRlZmluZWQgKGluIHN0cmlrZXRocm91Z2ggb3IgM3JkIHBhcnR5IHBsdWdpbnMpLFxuICAgIC8vIHdlIGNhbiBkZWZhdWx0IGl0IHRvIDAgdG8gZGlzYWJsZSB0aG9zZSBjaGVja3MuXG4gICAgLy9cbiAgICBjbG9zZXIubGVuZ3RoID0gY2xvc2VyLmxlbmd0aCB8fCAwO1xuXG4gICAgaWYgKCFjbG9zZXIuY2xvc2UpIGNvbnRpbnVlO1xuXG4gICAgLy8gUHJldmlvdXNseSBjYWxjdWxhdGVkIGxvd2VyIGJvdW5kcyAocHJldmlvdXMgZmFpbHMpXG4gICAgLy8gZm9yIGVhY2ggbWFya2VyLCBlYWNoIGRlbGltaXRlciBsZW5ndGggbW9kdWxvIDMsXG4gICAgLy8gYW5kIGZvciB3aGV0aGVyIHRoaXMgY2xvc2VyIGNhbiBiZSBhbiBvcGVuZXI7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvbW1vbm1hcmsvY21hcmsvY29tbWl0LzM0MjUwZTEyY2NlYmRjNjM3MmI4YjQ5YzQ0ZmFiNTdjNzI0NDM0NjBcbiAgICBpZiAoIW9wZW5lcnNCb3R0b20uaGFzT3duUHJvcGVydHkoY2xvc2VyLm1hcmtlcikpIHtcbiAgICAgIG9wZW5lcnNCb3R0b21bY2xvc2VyLm1hcmtlcl0gPSBbIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEgXTtcbiAgICB9XG5cbiAgICBtaW5PcGVuZXJJZHggPSBvcGVuZXJzQm90dG9tW2Nsb3Nlci5tYXJrZXJdWyhjbG9zZXIub3BlbiA/IDMgOiAwKSArIChjbG9zZXIubGVuZ3RoICUgMyldO1xuXG4gICAgb3BlbmVySWR4ID0gaGVhZGVySWR4IC0ganVtcHNbaGVhZGVySWR4XSAtIDE7XG5cbiAgICBuZXdNaW5PcGVuZXJJZHggPSBvcGVuZXJJZHg7XG5cbiAgICBmb3IgKDsgb3BlbmVySWR4ID4gbWluT3BlbmVySWR4OyBvcGVuZXJJZHggLT0ganVtcHNbb3BlbmVySWR4XSArIDEpIHtcbiAgICAgIG9wZW5lciA9IGRlbGltaXRlcnNbb3BlbmVySWR4XTtcblxuICAgICAgaWYgKG9wZW5lci5tYXJrZXIgIT09IGNsb3Nlci5tYXJrZXIpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAob3BlbmVyLm9wZW4gJiYgb3BlbmVyLmVuZCA8IDApIHtcblxuICAgICAgICBpc09kZE1hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgLy8gZnJvbSBzcGVjOlxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiBvbmUgb2YgdGhlIGRlbGltaXRlcnMgY2FuIGJvdGggb3BlbiBhbmQgY2xvc2UgZW1waGFzaXMsIHRoZW4gdGhlXG4gICAgICAgIC8vIHN1bSBvZiB0aGUgbGVuZ3RocyBvZiB0aGUgZGVsaW1pdGVyIHJ1bnMgY29udGFpbmluZyB0aGUgb3BlbmluZyBhbmRcbiAgICAgICAgLy8gY2xvc2luZyBkZWxpbWl0ZXJzIG11c3Qgbm90IGJlIGEgbXVsdGlwbGUgb2YgMyB1bmxlc3MgYm90aCBsZW5ndGhzXG4gICAgICAgIC8vIGFyZSBtdWx0aXBsZXMgb2YgMy5cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKG9wZW5lci5jbG9zZSB8fCBjbG9zZXIub3Blbikge1xuICAgICAgICAgIGlmICgob3BlbmVyLmxlbmd0aCArIGNsb3Nlci5sZW5ndGgpICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKG9wZW5lci5sZW5ndGggJSAzICE9PSAwIHx8IGNsb3Nlci5sZW5ndGggJSAzICE9PSAwKSB7XG4gICAgICAgICAgICAgIGlzT2RkTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNPZGRNYXRjaCkge1xuICAgICAgICAgIC8vIElmIHByZXZpb3VzIGRlbGltaXRlciBjYW5ub3QgYmUgYW4gb3BlbmVyLCB3ZSBjYW4gc2FmZWx5IHNraXBcbiAgICAgICAgICAvLyB0aGUgZW50aXJlIHNlcXVlbmNlIGluIGZ1dHVyZSBjaGVja3MuIFRoaXMgaXMgcmVxdWlyZWQgdG8gbWFrZVxuICAgICAgICAgIC8vIHN1cmUgYWxnb3JpdGhtIGhhcyBsaW5lYXIgY29tcGxleGl0eSAoc2VlICpfKl8qXypfKl8uLi4gY2FzZSkuXG4gICAgICAgICAgLy9cbiAgICAgICAgICBsYXN0SnVtcCA9IG9wZW5lcklkeCA+IDAgJiYgIWRlbGltaXRlcnNbb3BlbmVySWR4IC0gMV0ub3BlbiA/XG4gICAgICAgICAgICBqdW1wc1tvcGVuZXJJZHggLSAxXSArIDEgOlxuICAgICAgICAgICAgMDtcblxuICAgICAgICAgIGp1bXBzW2Nsb3NlcklkeF0gPSBjbG9zZXJJZHggLSBvcGVuZXJJZHggKyBsYXN0SnVtcDtcbiAgICAgICAgICBqdW1wc1tvcGVuZXJJZHhdID0gbGFzdEp1bXA7XG5cbiAgICAgICAgICBjbG9zZXIub3BlbiAgPSBmYWxzZTtcbiAgICAgICAgICBvcGVuZXIuZW5kICAgPSBjbG9zZXJJZHg7XG4gICAgICAgICAgb3BlbmVyLmNsb3NlID0gZmFsc2U7XG4gICAgICAgICAgbmV3TWluT3BlbmVySWR4ID0gLTE7XG4gICAgICAgICAgLy8gdHJlYXQgbmV4dCB0b2tlbiBhcyBzdGFydCBvZiBydW4sXG4gICAgICAgICAgLy8gaXQgb3B0aW1pemVzIHNraXBzIGluICoqPC4uLj4qKmEqKjwuLi4+KiogcGF0aG9sb2dpY2FsIGNhc2VcbiAgICAgICAgICBsYXN0VG9rZW5JZHggPSAtMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdNaW5PcGVuZXJJZHggIT09IC0xKSB7XG4gICAgICAvLyBJZiBtYXRjaCBmb3IgdGhpcyBkZWxpbWl0ZXIgcnVuIGZhaWxlZCwgd2Ugd2FudCB0byBzZXQgbG93ZXIgYm91bmQgZm9yXG4gICAgICAvLyBmdXR1cmUgbG9va3Vwcy4gVGhpcyBpcyByZXF1aXJlZCB0byBtYWtlIHN1cmUgYWxnb3JpdGhtIGhhcyBsaW5lYXJcbiAgICAgIC8vIGNvbXBsZXhpdHkuXG4gICAgICAvL1xuICAgICAgLy8gU2VlIGRldGFpbHMgaGVyZTpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb21tb25tYXJrL2NtYXJrL2lzc3Vlcy8xNzgjaXNzdWVjb21tZW50LTI3MDQxNzQ0MlxuICAgICAgLy9cbiAgICAgIG9wZW5lcnNCb3R0b21bY2xvc2VyLm1hcmtlcl1bKGNsb3Nlci5vcGVuID8gMyA6IDApICsgKChjbG9zZXIubGVuZ3RoIHx8IDApICUgMyldID0gbmV3TWluT3BlbmVySWR4O1xuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlua19wYWlycyhzdGF0ZSkge1xuICB2YXIgY3VycixcbiAgICAgIHRva2Vuc19tZXRhID0gc3RhdGUudG9rZW5zX21ldGEsXG4gICAgICBtYXggPSBzdGF0ZS50b2tlbnNfbWV0YS5sZW5ndGg7XG5cbiAgcHJvY2Vzc0RlbGltaXRlcnMoc3RhdGUsIHN0YXRlLmRlbGltaXRlcnMpO1xuXG4gIGZvciAoY3VyciA9IDA7IGN1cnIgPCBtYXg7IGN1cnIrKykge1xuICAgIGlmICh0b2tlbnNfbWV0YVtjdXJyXSAmJiB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKSB7XG4gICAgICBwcm9jZXNzRGVsaW1pdGVycyhzdGF0ZSwgdG9rZW5zX21ldGFbY3Vycl0uZGVsaW1pdGVycyk7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gUHJvY2VzcyAqdGhpcyogYW5kIF90aGF0X1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBJbnNlcnQgZWFjaCBtYXJrZXIgYXMgYSBzZXBhcmF0ZSB0ZXh0IHRva2VuLCBhbmQgYWRkIGl0IHRvIGRlbGltaXRlciBsaXN0XG4vL1xubW9kdWxlLmV4cG9ydHMudG9rZW5pemUgPSBmdW5jdGlvbiBlbXBoYXNpcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBpLCBzY2FubmVkLCB0b2tlbixcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKG1hcmtlciAhPT0gMHg1RiAvKiBfICovICYmIG1hcmtlciAhPT0gMHgyQSAvKiAqICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHNjYW5uZWQgPSBzdGF0ZS5zY2FuRGVsaW1zKHN0YXRlLnBvcywgbWFya2VyID09PSAweDJBKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc2Nhbm5lZC5sZW5ndGg7IGkrKykge1xuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0JywgJycsIDApO1xuICAgIHRva2VuLmNvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG5cbiAgICBzdGF0ZS5kZWxpbWl0ZXJzLnB1c2goe1xuICAgICAgLy8gQ2hhciBjb2RlIG9mIHRoZSBzdGFydGluZyBtYXJrZXIgKG51bWJlcikuXG4gICAgICAvL1xuICAgICAgbWFya2VyOiBtYXJrZXIsXG5cbiAgICAgIC8vIFRvdGFsIGxlbmd0aCBvZiB0aGVzZSBzZXJpZXMgb2YgZGVsaW1pdGVycy5cbiAgICAgIC8vXG4gICAgICBsZW5ndGg6IHNjYW5uZWQubGVuZ3RoLFxuXG4gICAgICAvLyBBIHBvc2l0aW9uIG9mIHRoZSB0b2tlbiB0aGlzIGRlbGltaXRlciBjb3JyZXNwb25kcyB0by5cbiAgICAgIC8vXG4gICAgICB0b2tlbjogIHN0YXRlLnRva2Vucy5sZW5ndGggLSAxLFxuXG4gICAgICAvLyBJZiB0aGlzIGRlbGltaXRlciBpcyBtYXRjaGVkIGFzIGEgdmFsaWQgb3BlbmVyLCBgZW5kYCB3aWxsIGJlXG4gICAgICAvLyBlcXVhbCB0byBpdHMgcG9zaXRpb24sIG90aGVyd2lzZSBpdCdzIGAtMWAuXG4gICAgICAvL1xuICAgICAgZW5kOiAgICAtMSxcblxuICAgICAgLy8gQm9vbGVhbiBmbGFncyB0aGF0IGRldGVybWluZSBpZiB0aGlzIGRlbGltaXRlciBjb3VsZCBvcGVuIG9yIGNsb3NlXG4gICAgICAvLyBhbiBlbXBoYXNpcy5cbiAgICAgIC8vXG4gICAgICBvcGVuOiAgIHNjYW5uZWQuY2FuX29wZW4sXG4gICAgICBjbG9zZTogIHNjYW5uZWQuY2FuX2Nsb3NlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgKz0gc2Nhbm5lZC5sZW5ndGg7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbmZ1bmN0aW9uIHBvc3RQcm9jZXNzKHN0YXRlLCBkZWxpbWl0ZXJzKSB7XG4gIHZhciBpLFxuICAgICAgc3RhcnREZWxpbSxcbiAgICAgIGVuZERlbGltLFxuICAgICAgdG9rZW4sXG4gICAgICBjaCxcbiAgICAgIGlzU3Ryb25nLFxuICAgICAgbWF4ID0gZGVsaW1pdGVycy5sZW5ndGg7XG5cbiAgZm9yIChpID0gbWF4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBzdGFydERlbGltID0gZGVsaW1pdGVyc1tpXTtcblxuICAgIGlmIChzdGFydERlbGltLm1hcmtlciAhPT0gMHg1Ri8qIF8gKi8gJiYgc3RhcnREZWxpbS5tYXJrZXIgIT09IDB4MkEvKiAqICovKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIG9ubHkgb3BlbmluZyBtYXJrZXJzXG4gICAgaWYgKHN0YXJ0RGVsaW0uZW5kID09PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZW5kRGVsaW0gPSBkZWxpbWl0ZXJzW3N0YXJ0RGVsaW0uZW5kXTtcblxuICAgIC8vIElmIHRoZSBwcmV2aW91cyBkZWxpbWl0ZXIgaGFzIHRoZSBzYW1lIG1hcmtlciBhbmQgaXMgYWRqYWNlbnQgdG8gdGhpcyBvbmUsXG4gICAgLy8gbWVyZ2UgdGhvc2UgaW50byBvbmUgc3Ryb25nIGRlbGltaXRlci5cbiAgICAvL1xuICAgIC8vIGA8ZW0+PGVtPndoYXRldmVyPC9lbT48L2VtPmAgLT4gYDxzdHJvbmc+d2hhdGV2ZXI8L3N0cm9uZz5gXG4gICAgLy9cbiAgICBpc1N0cm9uZyA9IGkgPiAwICYmXG4gICAgICAgICAgICAgICBkZWxpbWl0ZXJzW2kgLSAxXS5lbmQgPT09IHN0YXJ0RGVsaW0uZW5kICsgMSAmJlxuICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCBmaXJzdCB0d28gbWFya2VycyBtYXRjaCBhbmQgYWRqYWNlbnRcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbaSAtIDFdLm1hcmtlciA9PT0gc3RhcnREZWxpbS5tYXJrZXIgJiZcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbaSAtIDFdLnRva2VuID09PSBzdGFydERlbGltLnRva2VuIC0gMSAmJlxuICAgICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCBsYXN0IHR3byBtYXJrZXJzIGFyZSBhZGphY2VudCAod2UgY2FuIHNhZmVseSBhc3N1bWUgdGhleSBtYXRjaClcbiAgICAgICAgICAgICAgIGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmQgKyAxXS50b2tlbiA9PT0gZW5kRGVsaW0udG9rZW4gKyAxO1xuXG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0RGVsaW0ubWFya2VyKTtcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbc3RhcnREZWxpbS50b2tlbl07XG4gICAgdG9rZW4udHlwZSAgICA9IGlzU3Ryb25nID8gJ3N0cm9uZ19vcGVuJyA6ICdlbV9vcGVuJztcbiAgICB0b2tlbi50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSc7XG4gICAgdG9rZW4ubmVzdGluZyA9IDE7XG4gICAgdG9rZW4ubWFya3VwICA9IGlzU3Ryb25nID8gY2ggKyBjaCA6IGNoO1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJztcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW5dO1xuICAgIHRva2VuLnR5cGUgICAgPSBpc1N0cm9uZyA/ICdzdHJvbmdfY2xvc2UnIDogJ2VtX2Nsb3NlJztcbiAgICB0b2tlbi50YWcgICAgID0gaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdlbSc7XG4gICAgdG9rZW4ubmVzdGluZyA9IC0xO1xuICAgIHRva2VuLm1hcmt1cCAgPSBpc1N0cm9uZyA/IGNoICsgY2ggOiBjaDtcbiAgICB0b2tlbi5jb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNTdHJvbmcpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tkZWxpbWl0ZXJzW2kgLSAxXS50b2tlbl0uY29udGVudCA9ICcnO1xuICAgICAgc3RhdGUudG9rZW5zW2RlbGltaXRlcnNbc3RhcnREZWxpbS5lbmQgKyAxXS50b2tlbl0uY29udGVudCA9ICcnO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdhbGsgdGhyb3VnaCBkZWxpbWl0ZXIgbGlzdCBhbmQgcmVwbGFjZSB0ZXh0IHRva2VucyB3aXRoIHRhZ3Ncbi8vXG5tb2R1bGUuZXhwb3J0cy5wb3N0UHJvY2VzcyA9IGZ1bmN0aW9uIGVtcGhhc2lzKHN0YXRlKSB7XG4gIHZhciBjdXJyLFxuICAgICAgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YSxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aDtcblxuICBwb3N0UHJvY2VzcyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycyk7XG5cbiAgZm9yIChjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHBvc3RQcm9jZXNzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBQcm9jZXNzIGh0bWwgZW50aXR5IC0gJiMxMjM7LCAmI3hBRjssICZxdW90OywgLi4uXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVudGl0aWVzICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL2VudGl0aWVzJyk7XG52YXIgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5oYXM7XG52YXIgaXNWYWxpZEVudGl0eUNvZGUgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1ZhbGlkRW50aXR5Q29kZTtcbnZhciBmcm9tQ29kZVBvaW50ICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmZyb21Db2RlUG9pbnQ7XG5cblxudmFyIERJR0lUQUxfUkUgPSAvXiYjKCg/OnhbYS1mMC05XXsxLDZ9fFswLTldezEsN30pKTsvaTtcbnZhciBOQU1FRF9SRSAgID0gL14mKFthLXpdW2EtejAtOV17MSwzMX0pOy9pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW50aXR5KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBjb2RlLCBtYXRjaCwgdG9rZW4sIHBvcyA9IHN0YXRlLnBvcywgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDI2LyogJiAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChwb3MgKyAxID49IG1heCkgcmV0dXJuIGZhbHNlO1xuXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG5cbiAgaWYgKGNoID09PSAweDIzIC8qICMgKi8pIHtcbiAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKERJR0lUQUxfUkUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgY29kZSA9IG1hdGNoWzFdWzBdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/IHBhcnNlSW50KG1hdGNoWzFdLnNsaWNlKDEpLCAxNikgOiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuXG4gICAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0X3NwZWNpYWwnLCAnJywgMCk7XG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSBpc1ZhbGlkRW50aXR5Q29kZShjb2RlKSA/IGZyb21Db2RlUG9pbnQoY29kZSkgOiBmcm9tQ29kZVBvaW50KDB4RkZGRCk7XG4gICAgICAgIHRva2VuLm1hcmt1cCAgPSBtYXRjaFswXTtcbiAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdlbnRpdHknO1xuICAgICAgfVxuICAgICAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MpLm1hdGNoKE5BTUVEX1JFKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlmIChoYXMoZW50aXRpZXMsIG1hdGNoWzFdKSkge1xuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCd0ZXh0X3NwZWNpYWwnLCAnJywgMCk7XG4gICAgICAgICAgdG9rZW4uY29udGVudCA9IGVudGl0aWVzW21hdGNoWzFdXTtcbiAgICAgICAgICB0b2tlbi5tYXJrdXAgID0gbWF0Y2hbMF07XG4gICAgICAgICAgdG9rZW4uaW5mbyAgICA9ICdlbnRpdHknO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCIvLyBQcm9jZXNzIGVzY2FwZWQgY2hhcnMgYW5kIGhhcmRicmVha3NcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLmlzU3BhY2U7XG5cbnZhciBFU0NBUEVEID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgRVNDQVBFRC5wdXNoKDApOyB9XG5cbidcXFxcIVwiIyQlJlxcJygpKissLi86Ozw9Pj9AW11eX2B7fH1+LSdcbiAgLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaCkgeyBFU0NBUEVEW2NoLmNoYXJDb2RlQXQoMCldID0gMTsgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gxLCBjaDIsIG9yaWdTdHIsIGVzY2FwZWRTdHIsIHRva2VuLCBwb3MgPSBzdGF0ZS5wb3MsIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHg1Qy8qIFxcICovKSByZXR1cm4gZmFsc2U7XG4gIHBvcysrO1xuXG4gIC8vICdcXCcgYXQgdGhlIGVuZCBvZiB0aGUgaW5saW5lIGJsb2NrXG4gIGlmIChwb3MgPj0gbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgY2gxID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2gxID09PSAweDBBKSB7XG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIHN0YXRlLnB1c2goJ2hhcmRicmVhaycsICdicicsIDApO1xuICAgIH1cblxuICAgIHBvcysrO1xuICAgIC8vIHNraXAgbGVhZGluZyB3aGl0ZXNwYWNlcyBmcm9tIG5leHQgbGluZVxuICAgIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICAgIGNoMSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoIWlzU3BhY2UoY2gxKSkgYnJlYWs7XG4gICAgICBwb3MrKztcbiAgICB9XG5cbiAgICBzdGF0ZS5wb3MgPSBwb3M7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlc2NhcGVkU3RyID0gc3RhdGUuc3JjW3Bvc107XG5cbiAgaWYgKGNoMSA+PSAweEQ4MDAgJiYgY2gxIDw9IDB4REJGRiAmJiBwb3MgKyAxIDwgbWF4KSB7XG4gICAgY2gyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG5cbiAgICBpZiAoY2gyID49IDB4REMwMCAmJiBjaDIgPD0gMHhERkZGKSB7XG4gICAgICBlc2NhcGVkU3RyICs9IHN0YXRlLnNyY1twb3MgKyAxXTtcbiAgICAgIHBvcysrO1xuICAgIH1cbiAgfVxuXG4gIG9yaWdTdHIgPSAnXFxcXCcgKyBlc2NhcGVkU3RyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgdG9rZW4gPSBzdGF0ZS5wdXNoKCd0ZXh0X3NwZWNpYWwnLCAnJywgMCk7XG5cbiAgICBpZiAoY2gxIDwgMjU2ICYmIEVTQ0FQRURbY2gxXSAhPT0gMCkge1xuICAgICAgdG9rZW4uY29udGVudCA9IGVzY2FwZWRTdHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRva2VuLmNvbnRlbnQgPSBvcmlnU3RyO1xuICAgIH1cblxuICAgIHRva2VuLm1hcmt1cCA9IG9yaWdTdHI7XG4gICAgdG9rZW4uaW5mbyAgID0gJ2VzY2FwZSc7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3MgKyAxO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBDbGVhbiB1cCB0b2tlbnMgYWZ0ZXIgZW1waGFzaXMgYW5kIHN0cmlrZXRocm91Z2ggcG9zdHByb2Nlc3Npbmc6XG4vLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzIGludG8gb25lIGFuZCByZS1jYWxjdWxhdGUgYWxsIHRva2VuIGxldmVsc1xuLy9cbi8vIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgaW5pdGlhbGx5IGVtcGhhc2lzIGRlbGltaXRlciBtYXJrZXJzICgqLCBfLCB+KVxuLy8gYXJlIHRyZWF0ZWQgYXMgdGhlaXIgb3duIHNlcGFyYXRlIHRleHQgdG9rZW5zLiBUaGVuIGVtcGhhc2lzIHJ1bGUgZWl0aGVyXG4vLyBsZWF2ZXMgdGhlbSBhcyB0ZXh0IChuZWVkZWQgdG8gbWVyZ2Ugd2l0aCBhZGphY2VudCB0ZXh0KSBvciB0dXJucyB0aGVtXG4vLyBpbnRvIG9wZW5pbmcvY2xvc2luZyB0YWdzICh3aGljaCBtZXNzZXMgdXAgbGV2ZWxzIGluc2lkZSkuXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJhZ21lbnRzX2pvaW4oc3RhdGUpIHtcbiAgdmFyIGN1cnIsIGxhc3QsXG4gICAgICBsZXZlbCA9IDAsXG4gICAgICB0b2tlbnMgPSBzdGF0ZS50b2tlbnMsXG4gICAgICBtYXggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuXG4gIGZvciAoY3VyciA9IGxhc3QgPSAwOyBjdXJyIDwgbWF4OyBjdXJyKyspIHtcbiAgICAvLyByZS1jYWxjdWxhdGUgbGV2ZWxzIGFmdGVyIGVtcGhhc2lzL3N0cmlrZXRocm91Z2ggdHVybnMgc29tZSB0ZXh0IG5vZGVzXG4gICAgLy8gaW50byBvcGVuaW5nL2Nsb3NpbmcgdGFnc1xuICAgIGlmICh0b2tlbnNbY3Vycl0ubmVzdGluZyA8IDApIGxldmVsLS07IC8vIGNsb3NpbmcgdGFnXG4gICAgdG9rZW5zW2N1cnJdLmxldmVsID0gbGV2ZWw7XG4gICAgaWYgKHRva2Vuc1tjdXJyXS5uZXN0aW5nID4gMCkgbGV2ZWwrKzsgLy8gb3BlbmluZyB0YWdcblxuICAgIGlmICh0b2tlbnNbY3Vycl0udHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAgIGN1cnIgKyAxIDwgbWF4ICYmXG4gICAgICAgIHRva2Vuc1tjdXJyICsgMV0udHlwZSA9PT0gJ3RleHQnKSB7XG5cbiAgICAgIC8vIGNvbGxhcHNlIHR3byBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICB0b2tlbnNbY3VyciArIDFdLmNvbnRlbnQgPSB0b2tlbnNbY3Vycl0uY29udGVudCArIHRva2Vuc1tjdXJyICsgMV0uY29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnIgIT09IGxhc3QpIHsgdG9rZW5zW2xhc3RdID0gdG9rZW5zW2N1cnJdOyB9XG5cbiAgICAgIGxhc3QrKztcbiAgICB9XG4gIH1cblxuICBpZiAoY3VyciAhPT0gbGFzdCkge1xuICAgIHRva2Vucy5sZW5ndGggPSBsYXN0O1xuICB9XG59O1xuIiwiLy8gUHJvY2VzcyBodG1sIHRhZ3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBIVE1MX1RBR19SRSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9odG1sX3JlJykuSFRNTF9UQUdfUkU7XG5cblxuZnVuY3Rpb24gaXNMaW5rT3BlbihzdHIpIHtcbiAgcmV0dXJuIC9ePGFbPlxcc10vaS50ZXN0KHN0cik7XG59XG5mdW5jdGlvbiBpc0xpbmtDbG9zZShzdHIpIHtcbiAgcmV0dXJuIC9ePFxcL2FcXHMqPi9pLnRlc3Qoc3RyKTtcbn1cblxuXG5mdW5jdGlvbiBpc0xldHRlcihjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWxfaW5saW5lKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBtYXRjaCwgbWF4LCB0b2tlbixcbiAgICAgIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoIXN0YXRlLm1kLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBDaGVjayBzdGFydFxuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLyB8fFxuICAgICAgcG9zICsgMiA+PSBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBRdWljayBmYWlsIG9uIHNlY29uZCBjaGFyXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gIGlmIChjaCAhPT0gMHgyMS8qICEgKi8gJiZcbiAgICAgIGNoICE9PSAweDNGLyogPyAqLyAmJlxuICAgICAgY2ggIT09IDB4MkYvKiAvICovICYmXG4gICAgICAhaXNMZXR0ZXIoY2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChIVE1MX1RBR19SRSk7XG4gIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgnaHRtbF9pbmxpbmUnLCAnJywgMCk7XG4gICAgdG9rZW4uY29udGVudCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIHBvcyArIG1hdGNoWzBdLmxlbmd0aCk7XG5cbiAgICBpZiAoaXNMaW5rT3Blbih0b2tlbi5jb250ZW50KSkgIHN0YXRlLmxpbmtMZXZlbCsrO1xuICAgIGlmIChpc0xpbmtDbG9zZSh0b2tlbi5jb250ZW50KSkgc3RhdGUubGlua0xldmVsLS07XG4gIH1cbiAgc3RhdGUucG9zICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyAhW2ltYWdlXSg8c3JjPiBcInRpdGxlXCIpXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGltYWdlKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGF0dHJzLFxuICAgICAgY29kZSxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRW5kLFxuICAgICAgbGFiZWxTdGFydCxcbiAgICAgIHBvcyxcbiAgICAgIHJlZixcbiAgICAgIHJlcyxcbiAgICAgIHRpdGxlLFxuICAgICAgdG9rZW4sXG4gICAgICB0b2tlbnMsXG4gICAgICBzdGFydCxcbiAgICAgIGhyZWYgPSAnJyxcbiAgICAgIG9sZFBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSAhPT0gMHgyMS8qICEgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDI7XG4gIGxhYmVsRW5kID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhdGUucG9zICsgMSwgZmFsc2UpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbGlua1xuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDI4LyogKCAqLykge1xuICAgIC8vXG4gICAgLy8gSW5saW5lIGxpbmtcbiAgICAvL1xuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgcG9zKys7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgIF5eXl5eXiBwYXJzaW5nIGxpbmsgZGVzdGluYXRpb25cbiAgICBzdGFydCA9IHBvcztcbiAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0Rlc3RpbmF0aW9uKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpO1xuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGhyZWYgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHJlcy5zdHIpO1xuICAgICAgaWYgKHN0YXRlLm1kLnZhbGlkYXRlTGluayhocmVmKSkge1xuICAgICAgICBwb3MgPSByZXMucG9zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHJlZiA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzaW5nIGxpbmsgdGl0bGVcbiAgICByZXMgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua1RpdGxlKHN0YXRlLnNyYywgcG9zLCBzdGF0ZS5wb3NNYXgpO1xuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiByZXMub2spIHtcbiAgICAgIHRpdGxlID0gcmVzLnN0cjtcbiAgICAgIHBvcyA9IHJlcy5wb3M7XG5cbiAgICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwb3MgPj0gbWF4IHx8IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MjkvKiApICovKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBvcysrO1xuICB9IGVsc2Uge1xuICAgIC8vXG4gICAgLy8gTGluayByZWZlcmVuY2VcbiAgICAvL1xuICAgIGlmICh0eXBlb2Ygc3RhdGUuZW52LnJlZmVyZW5jZXMgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVCLyogWyAqLykge1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgICAgcG9zID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgcG9zKTtcbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKyspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zID0gbGFiZWxFbmQgKyAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgfVxuXG4gICAgLy8gY292ZXJzIGxhYmVsID09PSAnJyBhbmQgbGFiZWwgPT09IHVuZGVmaW5lZFxuICAgIC8vIChjb2xsYXBzZWQgcmVmZXJlbmNlIGxpbmsgYW5kIHNob3J0Y3V0IHJlZmVyZW5jZSBsaW5rIHJlc3BlY3RpdmVseSlcbiAgICBpZiAoIWxhYmVsKSB7IGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKGxhYmVsU3RhcnQsIGxhYmVsRW5kKTsgfVxuXG4gICAgcmVmID0gc3RhdGUuZW52LnJlZmVyZW5jZXNbbm9ybWFsaXplUmVmZXJlbmNlKGxhYmVsKV07XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHN0YXRlLnBvcyA9IG9sZFBvcztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaHJlZiA9IHJlZi5ocmVmO1xuICAgIHRpdGxlID0gcmVmLnRpdGxlO1xuICB9XG5cbiAgLy9cbiAgLy8gV2UgZm91bmQgdGhlIGVuZCBvZiB0aGUgbGluaywgYW5kIGtub3cgZm9yIGEgZmFjdCBpdCdzIGEgdmFsaWQgbGluaztcbiAgLy8gc28gYWxsIHRoYXQncyBsZWZ0IHRvIGRvIGlzIHRvIGNhbGwgdG9rZW5pemVyLlxuICAvL1xuICBpZiAoIXNpbGVudCkge1xuICAgIGNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpO1xuXG4gICAgc3RhdGUubWQuaW5saW5lLnBhcnNlKFxuICAgICAgY29udGVudCxcbiAgICAgIHN0YXRlLm1kLFxuICAgICAgc3RhdGUuZW52LFxuICAgICAgdG9rZW5zID0gW11cbiAgICApO1xuXG4gICAgdG9rZW4gICAgICAgICAgPSBzdGF0ZS5wdXNoKCdpbWFnZScsICdpbWcnLCAwKTtcbiAgICB0b2tlbi5hdHRycyAgICA9IGF0dHJzID0gWyBbICdzcmMnLCBocmVmIF0sIFsgJ2FsdCcsICcnIF0gXTtcbiAgICB0b2tlbi5jaGlsZHJlbiA9IHRva2VucztcbiAgICB0b2tlbi5jb250ZW50ICA9IGNvbnRlbnQ7XG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGF0dHJzLnB1c2goWyAndGl0bGUnLCB0aXRsZSBdKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiLy8gUHJvY2VzcyBbbGlua10oPHRvPiBcInN0dWZmXCIpXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIG5vcm1hbGl6ZVJlZmVyZW5jZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykubm9ybWFsaXplUmVmZXJlbmNlO1xudmFyIGlzU3BhY2UgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNTcGFjZTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGxpbmsoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgYXR0cnMsXG4gICAgICBjb2RlLFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGxhYmVsU3RhcnQsXG4gICAgICBwb3MsXG4gICAgICByZXMsXG4gICAgICByZWYsXG4gICAgICB0b2tlbixcbiAgICAgIGhyZWYgPSAnJyxcbiAgICAgIHRpdGxlID0gJycsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIHBhcnNlUmVmZXJlbmNlID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFiZWxTdGFydCA9IHN0YXRlLnBvcyArIDE7XG4gIGxhYmVsRW5kID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtMYWJlbChzdGF0ZSwgc3RhdGUucG9zLCB0cnVlKTtcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyOC8qICggKi8pIHtcbiAgICAvL1xuICAgIC8vIElubGluZSBsaW5rXG4gICAgLy9cblxuICAgIC8vIG1pZ2h0IGhhdmUgZm91bmQgYSB2YWxpZCBzaG9ydGN1dCBsaW5rLCBkaXNhYmxlIHJlZmVyZW5jZSBwYXJzaW5nXG4gICAgcGFyc2VSZWZlcmVuY2UgPSBmYWxzZTtcblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHBvcysrO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmICghaXNTcGFjZShjb2RlKSAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gICAgfVxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAvLyAgICAgICAgICBeXl5eXl4gcGFyc2luZyBsaW5rIGRlc3RpbmF0aW9uXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgcmVzID0gc3RhdGUubWQuaGVscGVycy5wYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZS5zcmMsIHBvcywgc3RhdGUucG9zTWF4KTtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBocmVmID0gc3RhdGUubWQubm9ybWFsaXplTGluayhyZXMuc3RyKTtcbiAgICAgIGlmIChzdGF0ZS5tZC52YWxpZGF0ZUxpbmsoaHJlZikpIHtcbiAgICAgICAgcG9zID0gcmVzLnBvcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhyZWYgPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgICAgc3RhcnQgPSBwb3M7XG4gICAgICBmb3IgKDsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgaWYgKCFpc1NwYWNlKGNvZGUpICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICAgIH1cblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzaW5nIGxpbmsgdGl0bGVcbiAgICAgIHJlcyA9IHN0YXRlLm1kLmhlbHBlcnMucGFyc2VMaW5rVGl0bGUoc3RhdGUuc3JjLCBwb3MsIHN0YXRlLnBvc01heCk7XG4gICAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXJ0ICE9PSBwb3MgJiYgcmVzLm9rKSB7XG4gICAgICAgIHRpdGxlID0gcmVzLnN0cjtcbiAgICAgICAgcG9zID0gcmVzLnBvcztcblxuICAgICAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBeXiBza2lwcGluZyB0aGVzZSBzcGFjZXNcbiAgICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgICAgICBpZiAoIWlzU3BhY2UoY29kZSkgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA+PSBtYXggfHwgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyOS8qICkgKi8pIHtcbiAgICAgIC8vIHBhcnNpbmcgYSB2YWxpZCBzaG9ydGN1dCBsaW5rIGZhaWxlZCwgZmFsbGJhY2sgdG8gcmVmZXJlbmNlXG4gICAgICBwYXJzZVJlZmVyZW5jZSA9IHRydWU7XG4gICAgfVxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHBhcnNlUmVmZXJlbmNlKSB7XG4gICAgLy9cbiAgICAvLyBMaW5rIHJlZmVyZW5jZVxuICAgIC8vXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUIvKiBbICovKSB7XG4gICAgICBzdGFydCA9IHBvcyArIDE7XG4gICAgICBwb3MgPSBzdGF0ZS5tZC5oZWxwZXJzLnBhcnNlTGlua0xhYmVsKHN0YXRlLCBwb3MpO1xuICAgICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICAgIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MrKyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcyA9IGxhYmVsRW5kICsgMTtcbiAgICB9XG5cbiAgICAvLyBjb3ZlcnMgbGFiZWwgPT09ICcnIGFuZCBsYWJlbCA9PT0gdW5kZWZpbmVkXG4gICAgLy8gKGNvbGxhcHNlZCByZWZlcmVuY2UgbGluayBhbmQgc2hvcnRjdXQgcmVmZXJlbmNlIGxpbmsgcmVzcGVjdGl2ZWx5KVxuICAgIGlmICghbGFiZWwpIHsgbGFiZWwgPSBzdGF0ZS5zcmMuc2xpY2UobGFiZWxTdGFydCwgbGFiZWxFbmQpOyB9XG5cbiAgICByZWYgPSBzdGF0ZS5lbnYucmVmZXJlbmNlc1tub3JtYWxpemVSZWZlcmVuY2UobGFiZWwpXTtcbiAgICBpZiAoIXJlZikge1xuICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBocmVmID0gcmVmLmhyZWY7XG4gICAgdGl0bGUgPSByZWYudGl0bGU7XG4gIH1cblxuICAvL1xuICAvLyBXZSBmb3VuZCB0aGUgZW5kIG9mIHRoZSBsaW5rLCBhbmQga25vdyBmb3IgYSBmYWN0IGl0J3MgYSB2YWxpZCBsaW5rO1xuICAvLyBzbyBhbGwgdGhhdCdzIGxlZnQgdG8gZG8gaXMgdG8gY2FsbCB0b2tlbml6ZXIuXG4gIC8vXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucG9zID0gbGFiZWxTdGFydDtcbiAgICBzdGF0ZS5wb3NNYXggPSBsYWJlbEVuZDtcblxuICAgIHRva2VuICAgICAgICA9IHN0YXRlLnB1c2goJ2xpbmtfb3BlbicsICdhJywgMSk7XG4gICAgdG9rZW4uYXR0cnMgID0gYXR0cnMgPSBbIFsgJ2hyZWYnLCBocmVmIF0gXTtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGF0dHJzLnB1c2goWyAndGl0bGUnLCB0aXRsZSBdKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5saW5rTGV2ZWwrKztcbiAgICBzdGF0ZS5tZC5pbmxpbmUudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLmxpbmtMZXZlbC0tO1xuXG4gICAgdG9rZW4gICAgICAgID0gc3RhdGUucHVzaCgnbGlua19jbG9zZScsICdhJywgLTEpO1xuICB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2Nlc3MgbGlua3MgbGlrZSBodHRwczovL2V4YW1wbGUub3JnL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gUkZDMzk4Njogc2NoZW1lID0gQUxQSEEgKiggQUxQSEEgLyBESUdJVCAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiApXG52YXIgU0NIRU1FX1JFID0gLyg/Ol58W15hLXowLTkuKy1dKShbYS16XVthLXowLTkuKy1dKikkL2k7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5raWZ5KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcywgbWF4LCBtYXRjaCwgcHJvdG8sIGxpbmssIHVybCwgZnVsbFVybCwgdG9rZW47XG5cbiAgaWYgKCFzdGF0ZS5tZC5vcHRpb25zLmxpbmtpZnkpIHJldHVybiBmYWxzZTtcbiAgaWYgKHN0YXRlLmxpbmtMZXZlbCA+IDApIHJldHVybiBmYWxzZTtcblxuICBwb3MgPSBzdGF0ZS5wb3M7XG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICBpZiAocG9zICsgMyA+IG1heCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQS8qIDogKi8pIHJldHVybiBmYWxzZTtcbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyArIDEpICE9PSAweDJGLyogLyAqLykgcmV0dXJuIGZhbHNlO1xuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMikgIT09IDB4MkYvKiAvICovKSByZXR1cm4gZmFsc2U7XG5cbiAgbWF0Y2ggPSBzdGF0ZS5wZW5kaW5nLm1hdGNoKFNDSEVNRV9SRSk7XG4gIGlmICghbWF0Y2gpIHJldHVybiBmYWxzZTtcblxuICBwcm90byA9IG1hdGNoWzFdO1xuXG4gIGxpbmsgPSBzdGF0ZS5tZC5saW5raWZ5Lm1hdGNoQXRTdGFydChzdGF0ZS5zcmMuc2xpY2UocG9zIC0gcHJvdG8ubGVuZ3RoKSk7XG4gIGlmICghbGluaykgcmV0dXJuIGZhbHNlO1xuXG4gIHVybCA9IGxpbmsudXJsO1xuXG4gIC8vIGRpc2FsbG93ICcqJyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5rIChjb25mbGljdHMgd2l0aCBlbXBoYXNpcylcbiAgdXJsID0gdXJsLnJlcGxhY2UoL1xcKiskLywgJycpO1xuXG4gIGZ1bGxVcmwgPSBzdGF0ZS5tZC5ub3JtYWxpemVMaW5rKHVybCk7XG4gIGlmICghc3RhdGUubWQudmFsaWRhdGVMaW5rKGZ1bGxVcmwpKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCAtcHJvdG8ubGVuZ3RoKTtcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX29wZW4nLCAnYScsIDEpO1xuICAgIHRva2VuLmF0dHJzICAgPSBbIFsgJ2hyZWYnLCBmdWxsVXJsIF0gXTtcbiAgICB0b2tlbi5tYXJrdXAgID0gJ2xpbmtpZnknO1xuICAgIHRva2VuLmluZm8gICAgPSAnYXV0byc7XG5cbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ID0gc3RhdGUubWQubm9ybWFsaXplTGlua1RleHQodXJsKTtcblxuICAgIHRva2VuICAgICAgICAgPSBzdGF0ZS5wdXNoKCdsaW5rX2Nsb3NlJywgJ2EnLCAtMSk7XG4gICAgdG9rZW4ubWFya3VwICA9ICdsaW5raWZ5JztcbiAgICB0b2tlbi5pbmZvICAgID0gJ2F1dG8nO1xuICB9XG5cbiAgc3RhdGUucG9zICs9IHVybC5sZW5ndGggLSBwcm90by5sZW5ndGg7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIi8vIFByb2NlZXNzICdcXG4nXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc1NwYWNlO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbmV3bGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBwbWF4LCBtYXgsIHdzLCBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4MEEvKiBcXG4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG1heCA9IHN0YXRlLnBlbmRpbmcubGVuZ3RoIC0gMTtcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vICcgIFxcbicgLT4gaGFyZGJyZWFrXG4gIC8vIExvb2t1cCBpbiBwZW5kaW5nIGNoYXJzIGlzIGJhZCBwcmFjdGljZSEgRG9uJ3QgY29weSB0byBvdGhlciBydWxlcyFcbiAgLy8gUGVuZGluZyBzdHJpbmcgaXMgc3RvcmVkIGluIGNvbmNhdCBtb2RlLCBpbmRleGVkIGxvb2t1cHMgd2lsbCBjYXVzZVxuICAvLyBjb252ZXJ0aW9uIHRvIGZsYXQgbW9kZS5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAocG1heCA+PSAwICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4KSA9PT0gMHgyMCkge1xuICAgICAgaWYgKHBtYXggPj0gMSAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQocG1heCAtIDEpID09PSAweDIwKSB7XG4gICAgICAgIC8vIEZpbmQgd2hpdGVzcGFjZXMgdGFpbCBvZiBwZW5kaW5nIGNoYXJzLlxuICAgICAgICB3cyA9IHBtYXggLSAxO1xuICAgICAgICB3aGlsZSAod3MgPj0gMSAmJiBzdGF0ZS5wZW5kaW5nLmNoYXJDb2RlQXQod3MgLSAxKSA9PT0gMHgyMCkgd3MtLTtcblxuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCB3cyk7XG4gICAgICAgIHN0YXRlLnB1c2goJ2hhcmRicmVhaycsICdicicsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucGVuZGluZyA9IHN0YXRlLnBlbmRpbmcuc2xpY2UoMCwgLTEpO1xuICAgICAgICBzdGF0ZS5wdXNoKCdzb2Z0YnJlYWsnLCAnYnInLCAwKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wdXNoKCdzb2Z0YnJlYWsnLCAnYnInLCAwKTtcbiAgICB9XG4gIH1cblxuICBwb3MrKztcblxuICAvLyBza2lwIGhlYWRpbmcgc3BhY2VzIGZvciBuZXh0IGxpbmVcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBpc1NwYWNlKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykpKSB7IHBvcysrOyB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyBJbmxpbmUgcGFyc2VyIHN0YXRlXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgVG9rZW4gICAgICAgICAgPSByZXF1aXJlKCcuLi90b2tlbicpO1xudmFyIGlzV2hpdGVTcGFjZSAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNXaGl0ZVNwYWNlO1xudmFyIGlzUHVuY3RDaGFyICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNQdW5jdENoYXI7XG52YXIgaXNNZEFzY2lpUHVuY3QgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5pc01kQXNjaWlQdW5jdDtcblxuXG5mdW5jdGlvbiBTdGF0ZUlubGluZShzcmMsIG1kLCBlbnYsIG91dFRva2Vucykge1xuICB0aGlzLnNyYyA9IHNyYztcbiAgdGhpcy5lbnYgPSBlbnY7XG4gIHRoaXMubWQgPSBtZDtcbiAgdGhpcy50b2tlbnMgPSBvdXRUb2tlbnM7XG4gIHRoaXMudG9rZW5zX21ldGEgPSBBcnJheShvdXRUb2tlbnMubGVuZ3RoKTtcblxuICB0aGlzLnBvcyA9IDA7XG4gIHRoaXMucG9zTWF4ID0gdGhpcy5zcmMubGVuZ3RoO1xuICB0aGlzLmxldmVsID0gMDtcbiAgdGhpcy5wZW5kaW5nID0gJyc7XG4gIHRoaXMucGVuZGluZ0xldmVsID0gMDtcblxuICAvLyBTdG9yZXMgeyBzdGFydDogZW5kIH0gcGFpcnMuIFVzZWZ1bCBmb3IgYmFja3RyYWNrXG4gIC8vIG9wdGltaXphdGlvbiBvZiBwYWlycyBwYXJzZSAoZW1waGFzaXMsIHN0cmlrZXMpLlxuICB0aGlzLmNhY2hlID0ge307XG5cbiAgLy8gTGlzdCBvZiBlbXBoYXNpcy1saWtlIGRlbGltaXRlcnMgZm9yIGN1cnJlbnQgdGFnXG4gIHRoaXMuZGVsaW1pdGVycyA9IFtdO1xuXG4gIC8vIFN0YWNrIG9mIGRlbGltaXRlciBsaXN0cyBmb3IgdXBwZXIgbGV2ZWwgdGFnc1xuICB0aGlzLl9wcmV2X2RlbGltaXRlcnMgPSBbXTtcblxuICAvLyBiYWNrdGljayBsZW5ndGggPT4gbGFzdCBzZWVuIHBvc2l0aW9uXG4gIHRoaXMuYmFja3RpY2tzID0ge307XG4gIHRoaXMuYmFja3RpY2tzU2Nhbm5lZCA9IGZhbHNlO1xuXG4gIC8vIENvdW50ZXIgdXNlZCB0byBkaXNhYmxlIGlubGluZSBsaW5raWZ5LWl0IGV4ZWN1dGlvblxuICAvLyBpbnNpZGUgPGE+IGFuZCBtYXJrZG93biBsaW5rc1xuICB0aGlzLmxpbmtMZXZlbCA9IDA7XG59XG5cblxuLy8gRmx1c2ggcGVuZGluZyB0ZXh0XG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2hQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9rZW4gPSBuZXcgVG9rZW4oJ3RleHQnLCAnJywgMCk7XG4gIHRva2VuLmNvbnRlbnQgPSB0aGlzLnBlbmRpbmc7XG4gIHRva2VuLmxldmVsID0gdGhpcy5wZW5kaW5nTGV2ZWw7XG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICB0aGlzLnBlbmRpbmcgPSAnJztcbiAgcmV0dXJuIHRva2VuO1xufTtcblxuXG4vLyBQdXNoIG5ldyB0b2tlbiB0byBcInN0cmVhbVwiLlxuLy8gSWYgcGVuZGluZyB0ZXh0IGV4aXN0cyAtIGZsdXNoIGl0IGFzIHRleHQgdG9rZW5cbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uICh0eXBlLCB0YWcsIG5lc3RpbmcpIHtcbiAgaWYgKHRoaXMucGVuZGluZykge1xuICAgIHRoaXMucHVzaFBlbmRpbmcoKTtcbiAgfVxuXG4gIHZhciB0b2tlbiA9IG5ldyBUb2tlbih0eXBlLCB0YWcsIG5lc3RpbmcpO1xuICB2YXIgdG9rZW5fbWV0YSA9IG51bGw7XG5cbiAgaWYgKG5lc3RpbmcgPCAwKSB7XG4gICAgLy8gY2xvc2luZyB0YWdcbiAgICB0aGlzLmxldmVsLS07XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gdGhpcy5fcHJldl9kZWxpbWl0ZXJzLnBvcCgpO1xuICB9XG5cbiAgdG9rZW4ubGV2ZWwgPSB0aGlzLmxldmVsO1xuXG4gIGlmIChuZXN0aW5nID4gMCkge1xuICAgIC8vIG9wZW5pbmcgdGFnXG4gICAgdGhpcy5sZXZlbCsrO1xuICAgIHRoaXMuX3ByZXZfZGVsaW1pdGVycy5wdXNoKHRoaXMuZGVsaW1pdGVycyk7XG4gICAgdGhpcy5kZWxpbWl0ZXJzID0gW107XG4gICAgdG9rZW5fbWV0YSA9IHsgZGVsaW1pdGVyczogdGhpcy5kZWxpbWl0ZXJzIH07XG4gIH1cblxuICB0aGlzLnBlbmRpbmdMZXZlbCA9IHRoaXMubGV2ZWw7XG4gIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICB0aGlzLnRva2Vuc19tZXRhLnB1c2godG9rZW5fbWV0YSk7XG4gIHJldHVybiB0b2tlbjtcbn07XG5cblxuLy8gU2NhbiBhIHNlcXVlbmNlIG9mIGVtcGhhc2lzLWxpa2UgbWFya2VycywgYW5kIGRldGVybWluZSB3aGV0aGVyXG4vLyBpdCBjYW4gc3RhcnQgYW4gZW1waGFzaXMgc2VxdWVuY2Ugb3IgZW5kIGFuIGVtcGhhc2lzIHNlcXVlbmNlLlxuLy9cbi8vICAtIHN0YXJ0IC0gcG9zaXRpb24gdG8gc2NhbiBmcm9tIChpdCBzaG91bGQgcG9pbnQgYXQgYSB2YWxpZCBtYXJrZXIpO1xuLy8gIC0gY2FuU3BsaXRXb3JkIC0gZGV0ZXJtaW5lIGlmIHRoZXNlIG1hcmtlcnMgY2FuIGJlIGZvdW5kIGluc2lkZSBhIHdvcmRcbi8vXG5TdGF0ZUlubGluZS5wcm90b3R5cGUuc2NhbkRlbGltcyA9IGZ1bmN0aW9uIChzdGFydCwgY2FuU3BsaXRXb3JkKSB7XG4gIHZhciBwb3MgPSBzdGFydCwgbGFzdENoYXIsIG5leHRDaGFyLCBjb3VudCwgY2FuX29wZW4sIGNhbl9jbG9zZSxcbiAgICAgIGlzTGFzdFdoaXRlU3BhY2UsIGlzTGFzdFB1bmN0Q2hhcixcbiAgICAgIGlzTmV4dFdoaXRlU3BhY2UsIGlzTmV4dFB1bmN0Q2hhcixcbiAgICAgIGxlZnRfZmxhbmtpbmcgPSB0cnVlLFxuICAgICAgcmlnaHRfZmxhbmtpbmcgPSB0cnVlLFxuICAgICAgbWF4ID0gdGhpcy5wb3NNYXgsXG4gICAgICBtYXJrZXIgPSB0aGlzLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KTtcblxuICAvLyB0cmVhdCBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgYXMgYSB3aGl0ZXNwYWNlXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gdGhpcy5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogMHgyMDtcblxuICB3aGlsZSAocG9zIDwgbWF4ICYmIHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gbWFya2VyKSB7IHBvcysrOyB9XG5cbiAgY291bnQgPSBwb3MgLSBzdGFydDtcblxuICAvLyB0cmVhdCBlbmQgb2YgdGhlIGxpbmUgYXMgYSB3aGl0ZXNwYWNlXG4gIG5leHRDaGFyID0gcG9zIDwgbWF4ID8gdGhpcy5zcmMuY2hhckNvZGVBdChwb3MpIDogMHgyMDtcblxuICBpc0xhc3RQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChsYXN0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShsYXN0Q2hhcikpO1xuICBpc05leHRQdW5jdENoYXIgPSBpc01kQXNjaWlQdW5jdChuZXh0Q2hhcikgfHwgaXNQdW5jdENoYXIoU3RyaW5nLmZyb21DaGFyQ29kZShuZXh0Q2hhcikpO1xuXG4gIGlzTGFzdFdoaXRlU3BhY2UgPSBpc1doaXRlU3BhY2UobGFzdENoYXIpO1xuICBpc05leHRXaGl0ZVNwYWNlID0gaXNXaGl0ZVNwYWNlKG5leHRDaGFyKTtcblxuICBpZiAoaXNOZXh0V2hpdGVTcGFjZSkge1xuICAgIGxlZnRfZmxhbmtpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpc05leHRQdW5jdENoYXIpIHtcbiAgICBpZiAoIShpc0xhc3RXaGl0ZVNwYWNlIHx8IGlzTGFzdFB1bmN0Q2hhcikpIHtcbiAgICAgIGxlZnRfZmxhbmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNMYXN0V2hpdGVTcGFjZSkge1xuICAgIHJpZ2h0X2ZsYW5raW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNMYXN0UHVuY3RDaGFyKSB7XG4gICAgaWYgKCEoaXNOZXh0V2hpdGVTcGFjZSB8fCBpc05leHRQdW5jdENoYXIpKSB7XG4gICAgICByaWdodF9mbGFua2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY2FuU3BsaXRXb3JkKSB7XG4gICAgY2FuX29wZW4gID0gbGVmdF9mbGFua2luZyAgJiYgKCFyaWdodF9mbGFua2luZyB8fCBpc0xhc3RQdW5jdENoYXIpO1xuICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nICYmICghbGVmdF9mbGFua2luZyAgfHwgaXNOZXh0UHVuY3RDaGFyKTtcbiAgfSBlbHNlIHtcbiAgICBjYW5fb3BlbiAgPSBsZWZ0X2ZsYW5raW5nO1xuICAgIGNhbl9jbG9zZSA9IHJpZ2h0X2ZsYW5raW5nO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjYW5fb3BlbjogIGNhbl9vcGVuLFxuICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlLFxuICAgIGxlbmd0aDogICAgY291bnRcbiAgfTtcbn07XG5cblxuLy8gcmUtZXhwb3J0IFRva2VuIGNsYXNzIHRvIHVzZSBpbiBibG9jayBydWxlc1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLlRva2VuID0gVG9rZW47XG5cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZUlubGluZTtcbiIsIi8vIH5+c3RyaWtlIHRocm91Z2h+flxuLy9cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBJbnNlcnQgZWFjaCBtYXJrZXIgYXMgYSBzZXBhcmF0ZSB0ZXh0IHRva2VuLCBhbmQgYWRkIGl0IHRvIGRlbGltaXRlciBsaXN0XG4vL1xubW9kdWxlLmV4cG9ydHMudG9rZW5pemUgPSBmdW5jdGlvbiBzdHJpa2V0aHJvdWdoKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGksIHNjYW5uZWQsIHRva2VuLCBsZW4sIGNoLFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCk7XG5cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBzY2FubmVkID0gc3RhdGUuc2NhbkRlbGltcyhzdGF0ZS5wb3MsIHRydWUpO1xuICBsZW4gPSBzY2FubmVkLmxlbmd0aDtcbiAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG1hcmtlcik7XG5cbiAgaWYgKGxlbiA8IDIpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKGxlbiAlIDIpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ID0gY2g7XG4gICAgbGVuLS07XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUucHVzaCgndGV4dCcsICcnLCAwKTtcbiAgICB0b2tlbi5jb250ZW50ID0gY2ggKyBjaDtcblxuICAgIHN0YXRlLmRlbGltaXRlcnMucHVzaCh7XG4gICAgICBtYXJrZXI6IG1hcmtlcixcbiAgICAgIGxlbmd0aDogMCwgICAgIC8vIGRpc2FibGUgXCJydWxlIG9mIDNcIiBsZW5ndGggY2hlY2tzIG1lYW50IGZvciBlbXBoYXNpc1xuICAgICAgdG9rZW46ICBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMSxcbiAgICAgIGVuZDogICAgLTEsXG4gICAgICBvcGVuOiAgIHNjYW5uZWQuY2FuX29wZW4sXG4gICAgICBjbG9zZTogIHNjYW5uZWQuY2FuX2Nsb3NlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgKz0gc2Nhbm5lZC5sZW5ndGg7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbmZ1bmN0aW9uIHBvc3RQcm9jZXNzKHN0YXRlLCBkZWxpbWl0ZXJzKSB7XG4gIHZhciBpLCBqLFxuICAgICAgc3RhcnREZWxpbSxcbiAgICAgIGVuZERlbGltLFxuICAgICAgdG9rZW4sXG4gICAgICBsb25lTWFya2VycyA9IFtdLFxuICAgICAgbWF4ID0gZGVsaW1pdGVycy5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgc3RhcnREZWxpbSA9IGRlbGltaXRlcnNbaV07XG5cbiAgICBpZiAoc3RhcnREZWxpbS5tYXJrZXIgIT09IDB4N0UvKiB+ICovKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnREZWxpbS5lbmQgPT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBlbmREZWxpbSA9IGRlbGltaXRlcnNbc3RhcnREZWxpbS5lbmRdO1xuXG4gICAgdG9rZW4gICAgICAgICA9IHN0YXRlLnRva2Vuc1tzdGFydERlbGltLnRva2VuXTtcbiAgICB0b2tlbi50eXBlICAgID0gJ3Nfb3Blbic7XG4gICAgdG9rZW4udGFnICAgICA9ICdzJztcbiAgICB0b2tlbi5uZXN0aW5nID0gMTtcbiAgICB0b2tlbi5tYXJrdXAgID0gJ35+JztcbiAgICB0b2tlbi5jb250ZW50ID0gJyc7XG5cbiAgICB0b2tlbiAgICAgICAgID0gc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuXTtcbiAgICB0b2tlbi50eXBlICAgID0gJ3NfY2xvc2UnO1xuICAgIHRva2VuLnRhZyAgICAgPSAncyc7XG4gICAgdG9rZW4ubmVzdGluZyA9IC0xO1xuICAgIHRva2VuLm1hcmt1cCAgPSAnfn4nO1xuICAgIHRva2VuLmNvbnRlbnQgPSAnJztcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbZW5kRGVsaW0udG9rZW4gLSAxXS50eXBlID09PSAndGV4dCcgJiZcbiAgICAgICAgc3RhdGUudG9rZW5zW2VuZERlbGltLnRva2VuIC0gMV0uY29udGVudCA9PT0gJ34nKSB7XG5cbiAgICAgIGxvbmVNYXJrZXJzLnB1c2goZW5kRGVsaW0udG9rZW4gLSAxKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBhIG1hcmtlciBzZXF1ZW5jZSBoYXMgYW4gb2RkIG51bWJlciBvZiBjaGFyYWN0ZXJzLCBpdCdzIHNwbGl0dGVkXG4gIC8vIGxpa2UgdGhpczogYH5+fn5+YCAtPiBgfmAgKyBgfn5gICsgYH5+YCwgbGVhdmluZyBvbmUgbWFya2VyIGF0IHRoZVxuICAvLyBzdGFydCBvZiB0aGUgc2VxdWVuY2UuXG4gIC8vXG4gIC8vIFNvLCB3ZSBoYXZlIHRvIG1vdmUgYWxsIHRob3NlIG1hcmtlcnMgYWZ0ZXIgc3Vic2VxdWVudCBzX2Nsb3NlIHRhZ3MuXG4gIC8vXG4gIHdoaWxlIChsb25lTWFya2Vycy5sZW5ndGgpIHtcbiAgICBpID0gbG9uZU1hcmtlcnMucG9wKCk7XG4gICAgaiA9IGkgKyAxO1xuXG4gICAgd2hpbGUgKGogPCBzdGF0ZS50b2tlbnMubGVuZ3RoICYmIHN0YXRlLnRva2Vuc1tqXS50eXBlID09PSAnc19jbG9zZScpIHtcbiAgICAgIGorKztcbiAgICB9XG5cbiAgICBqLS07XG5cbiAgICBpZiAoaSAhPT0gaikge1xuICAgICAgdG9rZW4gPSBzdGF0ZS50b2tlbnNbal07XG4gICAgICBzdGF0ZS50b2tlbnNbal0gPSBzdGF0ZS50b2tlbnNbaV07XG4gICAgICBzdGF0ZS50b2tlbnNbaV0gPSB0b2tlbjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXYWxrIHRocm91Z2ggZGVsaW1pdGVyIGxpc3QgYW5kIHJlcGxhY2UgdGV4dCB0b2tlbnMgd2l0aCB0YWdzXG4vL1xubW9kdWxlLmV4cG9ydHMucG9zdFByb2Nlc3MgPSBmdW5jdGlvbiBzdHJpa2V0aHJvdWdoKHN0YXRlKSB7XG4gIHZhciBjdXJyLFxuICAgICAgdG9rZW5zX21ldGEgPSBzdGF0ZS50b2tlbnNfbWV0YSxcbiAgICAgIG1heCA9IHN0YXRlLnRva2Vuc19tZXRhLmxlbmd0aDtcblxuICBwb3N0UHJvY2VzcyhzdGF0ZSwgc3RhdGUuZGVsaW1pdGVycyk7XG5cbiAgZm9yIChjdXJyID0gMDsgY3VyciA8IG1heDsgY3VycisrKSB7XG4gICAgaWYgKHRva2Vuc19tZXRhW2N1cnJdICYmIHRva2Vuc19tZXRhW2N1cnJdLmRlbGltaXRlcnMpIHtcbiAgICAgIHBvc3RQcm9jZXNzKHN0YXRlLCB0b2tlbnNfbWV0YVtjdXJyXS5kZWxpbWl0ZXJzKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvLyBTa2lwIHRleHQgY2hhcmFjdGVycyBmb3IgdGV4dCB0b2tlbiwgcGxhY2UgdGhvc2UgdG8gcGVuZGluZyBidWZmZXJcbi8vIGFuZCBpbmNyZW1lbnQgY3VycmVudCBwb3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIFJ1bGUgdG8gc2tpcCBwdXJlIHRleHRcbi8vICd7fSQlQH4rPTonIHJlc2VydmVkIGZvciBleHRlbnRpb25zXG5cbi8vICEsIFwiLCAjLCAkLCAlLCAmLCAnLCAoLCApLCAqLCArLCAsLCAtLCAuLCAvLCA6LCA7LCA8LCA9LCA+LCA/LCBALCBbLCBcXCwgXSwgXiwgXywgYCwgeywgfCwgfSwgb3IgflxuXG4vLyAhISEhIERvbid0IGNvbmZ1c2Ugd2l0aCBcIk1hcmtkb3duIEFTQ0lJIFB1bmN0dWF0aW9uXCIgY2hhcnNcbi8vIGh0dHA6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMTUvI2FzY2lpLXB1bmN0dWF0aW9uLWNoYXJhY3RlclxuZnVuY3Rpb24gaXNUZXJtaW5hdG9yQ2hhcihjaCkge1xuICBzd2l0Y2ggKGNoKSB7XG4gICAgY2FzZSAweDBBLyogXFxuICovOlxuICAgIGNhc2UgMHgyMS8qICEgKi86XG4gICAgY2FzZSAweDIzLyogIyAqLzpcbiAgICBjYXNlIDB4MjQvKiAkICovOlxuICAgIGNhc2UgMHgyNS8qICUgKi86XG4gICAgY2FzZSAweDI2LyogJiAqLzpcbiAgICBjYXNlIDB4MkEvKiAqICovOlxuICAgIGNhc2UgMHgyQi8qICsgKi86XG4gICAgY2FzZSAweDJELyogLSAqLzpcbiAgICBjYXNlIDB4M0EvKiA6ICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNELyogPSAqLzpcbiAgICBjYXNlIDB4M0UvKiA+ICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDVCLyogWyAqLzpcbiAgICBjYXNlIDB4NUMvKiBcXCAqLzpcbiAgICBjYXNlIDB4NUQvKiBdICovOlxuICAgIGNhc2UgMHg1RS8qIF4gKi86XG4gICAgY2FzZSAweDVGLyogXyAqLzpcbiAgICBjYXNlIDB4NjAvKiBgICovOlxuICAgIGNhc2UgMHg3Qi8qIHsgKi86XG4gICAgY2FzZSAweDdELyogfSAqLzpcbiAgICBjYXNlIDB4N0UvKiB+ICovOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRleHQoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG9zID0gc3RhdGUucG9zO1xuXG4gIHdoaWxlIChwb3MgPCBzdGF0ZS5wb3NNYXggJiYgIWlzVGVybWluYXRvckNoYXIoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSkpIHtcbiAgICBwb3MrKztcbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXRlLnBvcykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGF0ZS5wb3MsIHBvcyk7IH1cblxuICBzdGF0ZS5wb3MgPSBwb3M7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBBbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgZm9yIG1lbW9yeS5cbi8vXG4vLyBJdCBjb3N0cyAxMCUgb2YgcGVyZm9ybWFuY2UsIGJ1dCBhbGxvd3MgZXh0ZW5kIHRlcm1pbmF0b3JzIGxpc3QsIGlmIHBsYWNlIGl0XG4vLyB0byBgUGFyY2VySW5saW5lYCBwcm9wZXJ0eS4gUHJvYmFibHksIHdpbGwgc3dpdGNoIHRvIGl0IHNvbWV0aW1lLCBzdWNoXG4vLyBmbGV4aWJpbGl0eSByZXF1aXJlZC5cblxuLypcbnZhciBURVJNSU5BVE9SX1JFID0gL1tcXG4hIyQlJiorXFwtOjw9PkBbXFxcXFxcXV5fYHt9fl0vO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRleHQoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgcG9zID0gc3RhdGUucG9zLFxuICAgICAgaWR4ID0gc3RhdGUuc3JjLnNsaWNlKHBvcykuc2VhcmNoKFRFUk1JTkFUT1JfUkUpO1xuXG4gIC8vIGZpcnN0IGNoYXIgaXMgdGVybWluYXRvciAtPiBlbXB0eSB0ZXh0XG4gIGlmIChpZHggPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gbm8gdGVybWluYXRvciAtPiB0ZXh0IHRpbGwgZW5kIG9mIHN0cmluZ1xuICBpZiAoaWR4IDwgMCkge1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHBvcyk7IH1cbiAgICBzdGF0ZS5wb3MgPSBzdGF0ZS5zcmMubGVuZ3RoO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBwb3MgKyBpZHgpOyB9XG5cbiAgc3RhdGUucG9zICs9IGlkeDtcblxuICByZXR1cm4gdHJ1ZTtcbn07Ki9cbiIsIi8vIFRva2VuIGNsYXNzXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vKipcbiAqIGNsYXNzIFRva2VuXG4gKiovXG5cbi8qKlxuICogbmV3IFRva2VuKHR5cGUsIHRhZywgbmVzdGluZylcbiAqXG4gKiBDcmVhdGUgbmV3IHRva2VuIGFuZCBmaWxsIHBhc3NlZCBwcm9wZXJ0aWVzLlxuICoqL1xuZnVuY3Rpb24gVG9rZW4odHlwZSwgdGFnLCBuZXN0aW5nKSB7XG4gIC8qKlxuICAgKiBUb2tlbiN0eXBlIC0+IFN0cmluZ1xuICAgKlxuICAgKiBUeXBlIG9mIHRoZSB0b2tlbiAoc3RyaW5nLCBlLmcuIFwicGFyYWdyYXBoX29wZW5cIilcbiAgICoqL1xuICB0aGlzLnR5cGUgICAgID0gdHlwZTtcblxuICAvKipcbiAgICogVG9rZW4jdGFnIC0+IFN0cmluZ1xuICAgKlxuICAgKiBodG1sIHRhZyBuYW1lLCBlLmcuIFwicFwiXG4gICAqKi9cbiAgdGhpcy50YWcgICAgICA9IHRhZztcblxuICAvKipcbiAgICogVG9rZW4jYXR0cnMgLT4gQXJyYXlcbiAgICpcbiAgICogSHRtbCBhdHRyaWJ1dGVzLiBGb3JtYXQ6IGBbIFsgbmFtZTEsIHZhbHVlMSBdLCBbIG5hbWUyLCB2YWx1ZTIgXSBdYFxuICAgKiovXG4gIHRoaXMuYXR0cnMgICAgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNtYXAgLT4gQXJyYXlcbiAgICpcbiAgICogU291cmNlIG1hcCBpbmZvLiBGb3JtYXQ6IGBbIGxpbmVfYmVnaW4sIGxpbmVfZW5kIF1gXG4gICAqKi9cbiAgdGhpcy5tYXAgICAgICA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRva2VuI25lc3RpbmcgLT4gTnVtYmVyXG4gICAqXG4gICAqIExldmVsIGNoYW5nZSAobnVtYmVyIGluIHstMSwgMCwgMX0gc2V0KSwgd2hlcmU6XG4gICAqXG4gICAqIC0gIGAxYCBtZWFucyB0aGUgdGFnIGlzIG9wZW5pbmdcbiAgICogLSAgYDBgIG1lYW5zIHRoZSB0YWcgaXMgc2VsZi1jbG9zaW5nXG4gICAqIC0gYC0xYCBtZWFucyB0aGUgdGFnIGlzIGNsb3NpbmdcbiAgICoqL1xuICB0aGlzLm5lc3RpbmcgID0gbmVzdGluZztcblxuICAvKipcbiAgICogVG9rZW4jbGV2ZWwgLT4gTnVtYmVyXG4gICAqXG4gICAqIG5lc3RpbmcgbGV2ZWwsIHRoZSBzYW1lIGFzIGBzdGF0ZS5sZXZlbGBcbiAgICoqL1xuICB0aGlzLmxldmVsICAgID0gMDtcblxuICAvKipcbiAgICogVG9rZW4jY2hpbGRyZW4gLT4gQXJyYXlcbiAgICpcbiAgICogQW4gYXJyYXkgb2YgY2hpbGQgbm9kZXMgKGlubGluZSBhbmQgaW1nIHRva2VucylcbiAgICoqL1xuICB0aGlzLmNoaWxkcmVuID0gbnVsbDtcblxuICAvKipcbiAgICogVG9rZW4jY29udGVudCAtPiBTdHJpbmdcbiAgICpcbiAgICogSW4gYSBjYXNlIG9mIHNlbGYtY2xvc2luZyB0YWcgKGNvZGUsIGh0bWwsIGZlbmNlLCBldGMuKSxcbiAgICogaXQgaGFzIGNvbnRlbnRzIG9mIHRoaXMgdGFnLlxuICAgKiovXG4gIHRoaXMuY29udGVudCAgPSAnJztcblxuICAvKipcbiAgICogVG9rZW4jbWFya3VwIC0+IFN0cmluZ1xuICAgKlxuICAgKiAnKicgb3IgJ18nIGZvciBlbXBoYXNpcywgZmVuY2Ugc3RyaW5nIGZvciBmZW5jZSwgZXRjLlxuICAgKiovXG4gIHRoaXMubWFya3VwICAgPSAnJztcblxuICAvKipcbiAgICogVG9rZW4jaW5mbyAtPiBTdHJpbmdcbiAgICpcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbjpcbiAgICpcbiAgICogLSBJbmZvIHN0cmluZyBmb3IgXCJmZW5jZVwiIHRva2Vuc1xuICAgKiAtIFRoZSB2YWx1ZSBcImF1dG9cIiBmb3IgYXV0b2xpbmsgXCJsaW5rX29wZW5cIiBhbmQgXCJsaW5rX2Nsb3NlXCIgdG9rZW5zXG4gICAqIC0gVGhlIHN0cmluZyB2YWx1ZSBvZiB0aGUgaXRlbSBtYXJrZXIgZm9yIG9yZGVyZWQtbGlzdCBcImxpc3RfaXRlbV9vcGVuXCIgdG9rZW5zXG4gICAqKi9cbiAgdGhpcy5pbmZvICAgICA9ICcnO1xuXG4gIC8qKlxuICAgKiBUb2tlbiNtZXRhIC0+IE9iamVjdFxuICAgKlxuICAgKiBBIHBsYWNlIGZvciBwbHVnaW5zIHRvIHN0b3JlIGFuIGFyYml0cmFyeSBkYXRhXG4gICAqKi9cbiAgdGhpcy5tZXRhICAgICA9IG51bGw7XG5cbiAgLyoqXG4gICAqIFRva2VuI2Jsb2NrIC0+IEJvb2xlYW5cbiAgICpcbiAgICogVHJ1ZSBmb3IgYmxvY2stbGV2ZWwgdG9rZW5zLCBmYWxzZSBmb3IgaW5saW5lIHRva2Vucy5cbiAgICogVXNlZCBpbiByZW5kZXJlciB0byBjYWxjdWxhdGUgbGluZSBicmVha3NcbiAgICoqL1xuICB0aGlzLmJsb2NrICAgID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRva2VuI2hpZGRlbiAtPiBCb29sZWFuXG4gICAqXG4gICAqIElmIGl0J3MgdHJ1ZSwgaWdub3JlIHRoaXMgZWxlbWVudCB3aGVuIHJlbmRlcmluZy4gVXNlZCBmb3IgdGlnaHQgbGlzdHNcbiAgICogdG8gaGlkZSBwYXJhZ3JhcGhzLlxuICAgKiovXG4gIHRoaXMuaGlkZGVuICAgPSBmYWxzZTtcbn1cblxuXG4vKipcbiAqIFRva2VuLmF0dHJJbmRleChuYW1lKSAtPiBOdW1iZXJcbiAqXG4gKiBTZWFyY2ggYXR0cmlidXRlIGluZGV4IGJ5IG5hbWUuXG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0ckluZGV4ID0gZnVuY3Rpb24gYXR0ckluZGV4KG5hbWUpIHtcbiAgdmFyIGF0dHJzLCBpLCBsZW47XG5cbiAgaWYgKCF0aGlzLmF0dHJzKSB7IHJldHVybiAtMTsgfVxuXG4gIGF0dHJzID0gdGhpcy5hdHRycztcblxuICBmb3IgKGkgPSAwLCBsZW4gPSBhdHRycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyc1tpXVswXSA9PT0gbmFtZSkgeyByZXR1cm4gaTsgfVxuICB9XG4gIHJldHVybiAtMTtcbn07XG5cblxuLyoqXG4gKiBUb2tlbi5hdHRyUHVzaChhdHRyRGF0YSlcbiAqXG4gKiBBZGQgYFsgbmFtZSwgdmFsdWUgXWAgYXR0cmlidXRlIHRvIGxpc3QuIEluaXQgYXR0cnMgaWYgbmVjZXNzYXJ5XG4gKiovXG5Ub2tlbi5wcm90b3R5cGUuYXR0clB1c2ggPSBmdW5jdGlvbiBhdHRyUHVzaChhdHRyRGF0YSkge1xuICBpZiAodGhpcy5hdHRycykge1xuICAgIHRoaXMuYXR0cnMucHVzaChhdHRyRGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hdHRycyA9IFsgYXR0ckRhdGEgXTtcbiAgfVxufTtcblxuXG4vKipcbiAqIFRva2VuLmF0dHJTZXQobmFtZSwgdmFsdWUpXG4gKlxuICogU2V0IGBuYW1lYCBhdHRyaWJ1dGUgdG8gYHZhbHVlYC4gT3ZlcnJpZGUgb2xkIHZhbHVlIGlmIGV4aXN0cy5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRyU2V0ID0gZnVuY3Rpb24gYXR0clNldChuYW1lLCB2YWx1ZSkge1xuICB2YXIgaWR4ID0gdGhpcy5hdHRySW5kZXgobmFtZSksXG4gICAgICBhdHRyRGF0YSA9IFsgbmFtZSwgdmFsdWUgXTtcblxuICBpZiAoaWR4IDwgMCkge1xuICAgIHRoaXMuYXR0clB1c2goYXR0ckRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnNbaWR4XSA9IGF0dHJEYXRhO1xuICB9XG59O1xuXG5cbi8qKlxuICogVG9rZW4uYXR0ckdldChuYW1lKVxuICpcbiAqIEdldCB0aGUgdmFsdWUgb2YgYXR0cmlidXRlIGBuYW1lYCwgb3IgbnVsbCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAqKi9cblRva2VuLnByb3RvdHlwZS5hdHRyR2V0ID0gZnVuY3Rpb24gYXR0ckdldChuYW1lKSB7XG4gIHZhciBpZHggPSB0aGlzLmF0dHJJbmRleChuYW1lKSwgdmFsdWUgPSBudWxsO1xuICBpZiAoaWR4ID49IDApIHtcbiAgICB2YWx1ZSA9IHRoaXMuYXR0cnNbaWR4XVsxXTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogVG9rZW4uYXR0ckpvaW4obmFtZSwgdmFsdWUpXG4gKlxuICogSm9pbiB2YWx1ZSB0byBleGlzdGluZyBhdHRyaWJ1dGUgdmlhIHNwYWNlLiBPciBjcmVhdGUgbmV3IGF0dHJpYnV0ZSBpZiBub3RcbiAqIGV4aXN0cy4gVXNlZnVsIHRvIG9wZXJhdGUgd2l0aCB0b2tlbiBjbGFzc2VzLlxuICoqL1xuVG9rZW4ucHJvdG90eXBlLmF0dHJKb2luID0gZnVuY3Rpb24gYXR0ckpvaW4obmFtZSwgdmFsdWUpIHtcbiAgdmFyIGlkeCA9IHRoaXMuYXR0ckluZGV4KG5hbWUpO1xuXG4gIGlmIChpZHggPCAwKSB7XG4gICAgdGhpcy5hdHRyUHVzaChbIG5hbWUsIHZhbHVlIF0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXR0cnNbaWR4XVsxXSA9IHRoaXMuYXR0cnNbaWR4XVsxXSArICcgJyArIHZhbHVlO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbnZhciBkZWNvZGVDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZWNvZGVDYWNoZShleGNsdWRlKSB7XG4gIHZhciBpLCBjaCwgY2FjaGUgPSBkZWNvZGVDYWNoZVtleGNsdWRlXTtcbiAgaWYgKGNhY2hlKSB7IHJldHVybiBjYWNoZTsgfVxuXG4gIGNhY2hlID0gZGVjb2RlQ2FjaGVbZXhjbHVkZV0gPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjaCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoaSk7XG4gICAgY2FjaGUucHVzaChjaCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNoID0gZXhjbHVkZS5jaGFyQ29kZUF0KGkpO1xuICAgIGNhY2hlW2NoXSA9ICclJyArICgnMCcgKyBjaC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIERlY29kZSBwZXJjZW50LWVuY29kZWQgc3RyaW5nLlxuLy9cbmZ1bmN0aW9uIGRlY29kZShzdHJpbmcsIGV4Y2x1ZGUpIHtcbiAgdmFyIGNhY2hlO1xuXG4gIGlmICh0eXBlb2YgZXhjbHVkZSAhPT0gJ3N0cmluZycpIHtcbiAgICBleGNsdWRlID0gZGVjb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RGVjb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oJVthLWYwLTldezJ9KSsvZ2ksIGZ1bmN0aW9uKHNlcSkge1xuICAgIHZhciBpLCBsLCBiMSwgYjIsIGIzLCBiNCwgY2hyLFxuICAgICAgICByZXN1bHQgPSAnJztcblxuICAgIGZvciAoaSA9IDAsIGwgPSBzZXEubGVuZ3RoOyBpIDwgbDsgaSArPSAzKSB7XG4gICAgICBiMSA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgMSwgaSArIDMpLCAxNik7XG5cbiAgICAgIGlmIChiMSA8IDB4ODApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNhY2hlW2IxXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEUwKSA9PT0gMHhDMCAmJiAoaSArIDMgPCBsKSkge1xuICAgICAgICAvLyAxMTB4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCA2KSAmIDB4N0MwKSB8IChiMiAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjaHIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKGIxICYgMHhGMCkgPT09IDB4RTAgJiYgKGkgKyA2IDwgbCkpIHtcbiAgICAgICAgLy8gMTExMHh4eHggMTB4eHh4eHggMTB4eHh4eHhcbiAgICAgICAgYjIgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDQsIGkgKyA2KSwgMTYpO1xuICAgICAgICBiMyA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNywgaSArIDkpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCAxMikgJiAweEYwMDApIHwgKChiMiA8PCA2KSAmIDB4RkMwKSB8IChiMyAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4ODAwIHx8IChjaHIgPj0gMHhEODAwICYmIGNociA8PSAweERGRkYpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaSArPSA2O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgoYjEgJiAweEY4KSA9PT0gMHhGMCAmJiAoaSArIDkgPCBsKSkge1xuICAgICAgICAvLyAxMTExMTB4eCAxMHh4eHh4eCAxMHh4eHh4eCAxMHh4eHh4eFxuICAgICAgICBiMiA9IHBhcnNlSW50KHNlcS5zbGljZShpICsgNCwgaSArIDYpLCAxNik7XG4gICAgICAgIGIzID0gcGFyc2VJbnQoc2VxLnNsaWNlKGkgKyA3LCBpICsgOSksIDE2KTtcbiAgICAgICAgYjQgPSBwYXJzZUludChzZXEuc2xpY2UoaSArIDEwLCBpICsgMTIpLCAxNik7XG5cbiAgICAgICAgaWYgKChiMiAmIDB4QzApID09PSAweDgwICYmIChiMyAmIDB4QzApID09PSAweDgwICYmIChiNCAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgY2hyID0gKChiMSA8PCAxOCkgJiAweDFDMDAwMCkgfCAoKGIyIDw8IDEyKSAmIDB4M0YwMDApIHwgKChiMyA8PCA2KSAmIDB4RkMwKSB8IChiNCAmIDB4M0YpO1xuXG4gICAgICAgICAgaWYgKGNociA8IDB4MTAwMDAgfHwgY2hyID4gMHgxMEZGRkYpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnXFx1ZmZmZFxcdWZmZmRcXHVmZmZkXFx1ZmZmZCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNociAtPSAweDEwMDAwO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwICsgKGNociA+PiAxMCksIDB4REMwMCArIChjaHIgJiAweDNGRikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkgKz0gOTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gJ1xcdWZmZmQnO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufVxuXG5cbmRlY29kZS5kZWZhdWx0Q2hhcnMgICA9ICc7Lz86QCY9KyQsIyc7XG5kZWNvZGUuY29tcG9uZW50Q2hhcnMgPSAnJztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBlbmNvZGVDYWNoZSA9IHt9O1xuXG5cbi8vIENyZWF0ZSBhIGxvb2t1cCBhcnJheSB3aGVyZSBhbnl0aGluZyBidXQgY2hhcmFjdGVycyBpbiBgY2hhcnNgIHN0cmluZ1xuLy8gYW5kIGFscGhhbnVtZXJpYyBjaGFycyBpcyBwZXJjZW50LWVuY29kZWQuXG4vL1xuZnVuY3Rpb24gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSkge1xuICB2YXIgaSwgY2gsIGNhY2hlID0gZW5jb2RlQ2FjaGVbZXhjbHVkZV07XG4gIGlmIChjYWNoZSkgeyByZXR1cm4gY2FjaGU7IH1cblxuICBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdID0gW107XG5cbiAgZm9yIChpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgY2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpO1xuXG4gICAgaWYgKC9eWzAtOWEtel0kL2kudGVzdChjaCkpIHtcbiAgICAgIC8vIGFsd2F5cyBhbGxvdyB1bmVuY29kZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnNcbiAgICAgIGNhY2hlLnB1c2goY2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZS5wdXNoKCclJyArICgnMCcgKyBpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpKS5zbGljZSgtMikpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleGNsdWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FjaGVbZXhjbHVkZS5jaGFyQ29kZUF0KGkpXSA9IGV4Y2x1ZGVbaV07XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cblxuLy8gRW5jb2RlIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZywgc2tpcHBpbmcgYWxyZWFkeVxuLy8gZW5jb2RlZCBzZXF1ZW5jZXMuXG4vL1xuLy8gIC0gc3RyaW5nICAgICAgIC0gc3RyaW5nIHRvIGVuY29kZVxuLy8gIC0gZXhjbHVkZSAgICAgIC0gbGlzdCBvZiBjaGFyYWN0ZXJzIHRvIGlnbm9yZSAoaW4gYWRkaXRpb24gdG8gYS16QS1aMC05KVxuLy8gIC0ga2VlcEVzY2FwZWQgIC0gZG9uJ3QgZW5jb2RlICclJyBpbiBhIGNvcnJlY3QgZXNjYXBlIHNlcXVlbmNlIChkZWZhdWx0OiB0cnVlKVxuLy9cbmZ1bmN0aW9uIGVuY29kZShzdHJpbmcsIGV4Y2x1ZGUsIGtlZXBFc2NhcGVkKSB7XG4gIHZhciBpLCBsLCBjb2RlLCBuZXh0Q29kZSwgY2FjaGUsXG4gICAgICByZXN1bHQgPSAnJztcblxuICBpZiAodHlwZW9mIGV4Y2x1ZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZW5jb2RlKHN0cmluZywga2VlcEVzY2FwZWQpXG4gICAga2VlcEVzY2FwZWQgID0gZXhjbHVkZTtcbiAgICBleGNsdWRlID0gZW5jb2RlLmRlZmF1bHRDaGFycztcbiAgfVxuXG4gIGlmICh0eXBlb2Yga2VlcEVzY2FwZWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAga2VlcEVzY2FwZWQgPSB0cnVlO1xuICB9XG5cbiAgY2FjaGUgPSBnZXRFbmNvZGVDYWNoZShleGNsdWRlKTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgIGlmIChrZWVwRXNjYXBlZCAmJiBjb2RlID09PSAweDI1IC8qICUgKi8gJiYgaSArIDIgPCBsKSB7XG4gICAgICBpZiAoL15bMC05YS1mXXsyfSQvaS50ZXN0KHN0cmluZy5zbGljZShpICsgMSwgaSArIDMpKSkge1xuICAgICAgICByZXN1bHQgKz0gc3RyaW5nLnNsaWNlKGksIGkgKyAzKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgcmVzdWx0ICs9IGNhY2hlW2NvZGVdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhERkZGKSB7XG4gICAgICBpZiAoY29kZSA+PSAweEQ4MDAgJiYgY29kZSA8PSAweERCRkYgJiYgaSArIDEgPCBsKSB7XG4gICAgICAgIG5leHRDb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBpZiAobmV4dENvZGUgPj0gMHhEQzAwICYmIG5leHRDb2RlIDw9IDB4REZGRikge1xuICAgICAgICAgIHJlc3VsdCArPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nW2ldICsgc3RyaW5nW2kgKyAxXSk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQgKz0gJyVFRiVCRiVCRCc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5lbmNvZGUuZGVmYXVsdENoYXJzICAgPSBcIjsvPzpAJj0rJCwtXy4hfionKCkjXCI7XG5lbmNvZGUuY29tcG9uZW50Q2hhcnMgPSBcIi1fLiF+KicoKVwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZW5jb2RlO1xuIiwiXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JtYXQodXJsKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICByZXN1bHQgKz0gdXJsLnByb3RvY29sIHx8ICcnO1xuICByZXN1bHQgKz0gdXJsLnNsYXNoZXMgPyAnLy8nIDogJyc7XG4gIHJlc3VsdCArPSB1cmwuYXV0aCA/IHVybC5hdXRoICsgJ0AnIDogJyc7XG5cbiAgaWYgKHVybC5ob3N0bmFtZSAmJiB1cmwuaG9zdG5hbWUuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIC8vIGlwdjYgYWRkcmVzc1xuICAgIHJlc3VsdCArPSAnWycgKyB1cmwuaG9zdG5hbWUgKyAnXSc7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ICs9IHVybC5ob3N0bmFtZSB8fCAnJztcbiAgfVxuXG4gIHJlc3VsdCArPSB1cmwucG9ydCA/ICc6JyArIHVybC5wb3J0IDogJyc7XG4gIHJlc3VsdCArPSB1cmwucGF0aG5hbWUgfHwgJyc7XG4gIHJlc3VsdCArPSB1cmwuc2VhcmNoIHx8ICcnO1xuICByZXN1bHQgKz0gdXJsLmhhc2ggfHwgJyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMuZW5jb2RlID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5mb3JtYXQgPSByZXF1aXJlKCcuL2Zvcm1hdCcpO1xubW9kdWxlLmV4cG9ydHMucGFyc2UgID0gcmVxdWlyZSgnLi9wYXJzZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy9cbi8vIENoYW5nZXMgZnJvbSBqb3llbnQvbm9kZTpcbi8vXG4vLyAxLiBObyBsZWFkaW5nIHNsYXNoIGluIHBhdGhzLFxuLy8gICAgZS5nLiBpbiBgdXJsLnBhcnNlKCdodHRwOi8vZm9vP2JhcicpYCBwYXRobmFtZSBpcyBgYCwgbm90IGAvYFxuLy9cbi8vIDIuIEJhY2tzbGFzaGVzIGFyZSBub3QgcmVwbGFjZWQgd2l0aCBzbGFzaGVzLFxuLy8gICAgc28gYGh0dHA6XFxcXGV4YW1wbGUub3JnXFxgIGlzIHRyZWF0ZWQgbGlrZSBhIHJlbGF0aXZlIHBhdGhcbi8vXG4vLyAzLiBUcmFpbGluZyBjb2xvbiBpcyB0cmVhdGVkIGxpa2UgYSBwYXJ0IG9mIHRoZSBwYXRoLFxuLy8gICAgaS5lLiBpbiBgaHR0cDovL2V4YW1wbGUub3JnOmZvb2AgcGF0aG5hbWUgaXMgYDpmb29gXG4vL1xuLy8gNC4gTm90aGluZyBpcyBVUkwtZW5jb2RlZCBpbiB0aGUgcmVzdWx0aW5nIG9iamVjdCxcbi8vICAgIChpbiBqb3llbnQvbm9kZSBzb21lIGNoYXJzIGluIGF1dGggYW5kIHBhdGhzIGFyZSBlbmNvZGVkKVxuLy9cbi8vIDUuIGB1cmwucGFyc2UoKWAgZG9lcyBub3QgaGF2ZSBgcGFyc2VRdWVyeVN0cmluZ2AgYXJndW1lbnRcbi8vXG4vLyA2LiBSZW1vdmVkIGV4dHJhbmVvdXMgcmVzdWx0IHByb3BlcnRpZXM6IGBob3N0YCwgYHBhdGhgLCBgcXVlcnlgLCBldGMuLFxuLy8gICAgd2hpY2ggY2FuIGJlIGNvbnN0cnVjdGVkIHVzaW5nIG90aGVyIHBhcnRzIG9mIHRoZSB1cmwuXG4vL1xuXG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBhIHNpbXBsZSBwYXRoIFVSTFxuICAgIHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kLyxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIHJlc2VydmVkIGZvciBkZWxpbWl0aW5nIFVSTHMuXG4gICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbiAgICBkZWxpbXMgPSBbICc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0JyBdLFxuXG4gICAgLy8gUkZDIDIzOTY6IGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgZm9yIHZhcmlvdXMgcmVhc29ucy5cbiAgICB1bndpc2UgPSBbICd7JywgJ30nLCAnfCcsICdcXFxcJywgJ14nLCAnYCcgXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWyAnXFwnJyBdLmNvbmNhdCh1bndpc2UpLFxuICAgIC8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4gICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuICAgIC8vIGFyZSB0aGUgb25lcyB0aGF0IGFyZSAqZXhwZWN0ZWQqIHRvIGJlIHNlZW4sIHNvIHdlIGZhc3QtcGF0aFxuICAgIC8vIHRoZW0uXG4gICAgbm9uSG9zdENoYXJzID0gWyAnJScsICcvJywgJz8nLCAnOycsICcjJyBdLmNvbmNhdChhdXRvRXNjYXBlKSxcbiAgICBob3N0RW5kaW5nQ2hhcnMgPSBbICcvJywgJz8nLCAnIycgXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXNjcmlwdC11cmwgKi9cbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1zY3JpcHQtdXJsICovXG5cbmZ1bmN0aW9uIHVybFBhcnNlKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKHVybCAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHsgcmV0dXJuIHVybDsgfVxuXG4gIHZhciB1ID0gbmV3IFVybCgpO1xuICB1LnBhcnNlKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgdmFyIGksIGwsIGxvd2VyUHJvdG8sIGhlYywgc2xhc2hlcyxcbiAgICAgIHJlc3QgPSB1cmw7XG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKCk7XG5cbiAgaWYgKCFzbGFzaGVzRGVub3RlSG9zdCAmJiB1cmwuc3BsaXQoJyMnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBUcnkgZmFzdCBwYXRoIHJlZ2V4cFxuICAgIHZhciBzaW1wbGVQYXRoID0gc2ltcGxlUGF0aFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvdG8gPSBwcm90b2NvbFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgaWYgKHByb3RvKSB7XG4gICAgcHJvdG8gPSBwcm90b1swXTtcbiAgICBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gcHJvdG87XG4gICAgcmVzdCA9IHJlc3Quc3Vic3RyKHByb3RvLmxlbmd0aCk7XG4gIH1cblxuICAvLyBmaWd1cmUgb3V0IGlmIGl0J3MgZ290IGEgaG9zdFxuICAvLyB1c2VyQHNlcnZlciBpcyAqYWx3YXlzKiBpbnRlcnByZXRlZCBhcyBhIGhvc3RuYW1lLCBhbmQgdXJsXG4gIC8vIHJlc29sdXRpb24gd2lsbCB0cmVhdCAvL2Zvby9iYXIgYXMgaG9zdD1mb28scGF0aD1iYXIgYmVjYXVzZSB0aGF0J3NcbiAgLy8gaG93IHRoZSBicm93c2VyIHJlc29sdmVzIHJlbGF0aXZlIFVSTHMuXG4gIGlmIChzbGFzaGVzRGVub3RlSG9zdCB8fCBwcm90byB8fCByZXN0Lm1hdGNoKC9eXFwvXFwvW15AXFwvXStAW15AXFwvXSsvKSkge1xuICAgIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoZWMgPSByZXN0LmluZGV4T2YoaG9zdEVuZGluZ0NoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSkge1xuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxuXG4gICAgLy8gdGhlIGhvc3QgaXMgdGhlIHJlbWFpbmluZyB0byB0aGUgbGVmdCBvZiB0aGUgZmlyc3Qgbm9uLWhvc3QgY2hhclxuICAgIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoZWMgPSByZXN0LmluZGV4T2Yobm9uSG9zdENoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSkge1xuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB3ZSBzdGlsbCBoYXZlIG5vdCBoaXQgaXQsIHRoZW4gdGhlIGVudGlyZSB0aGluZyBpcyBhIGhvc3QuXG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHJlc3RbaG9zdEVuZCAtIDFdID09PSAnOicpIHsgaG9zdEVuZC0tOyB9XG4gICAgdmFyIGhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdChob3N0KTtcblxuICAgIC8vIHdlJ3ZlIGluZGljYXRlZCB0aGF0IHRoZXJlIGlzIGEgaG9zdG5hbWUsXG4gICAgLy8gc28gZXZlbiBpZiBpdCdzIGVtcHR5LCBpdCBoYXMgdG8gYmUgcHJlc2VudC5cbiAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcblxuICAgIC8vIGlmIGhvc3RuYW1lIGJlZ2lucyB3aXRoIFsgYW5kIGVuZHMgd2l0aCBdXG4gICAgLy8gYXNzdW1lIHRoYXQgaXQncyBhbiBJUHY2IGFkZHJlc3MuXG4gICAgdmFyIGlwdjZIb3N0bmFtZSA9IHRoaXMuaG9zdG5hbWVbMF0gPT09ICdbJyAmJlxuICAgICAgICB0aGlzLmhvc3RuYW1lW3RoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMV0gPT09ICddJztcblxuICAgIC8vIHZhbGlkYXRlIGEgbGl0dGxlLlxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB2YXIgaG9zdHBhcnRzID0gdGhpcy5ob3N0bmFtZS5zcGxpdCgvXFwuLyk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSB7IGNvbnRpbnVlOyB9XG4gICAgICAgIGlmICghcGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgIHZhciBuZXdwYXJ0ID0gJyc7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBwYXJ0Lmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgICAgaWYgKHBhcnQuY2hhckNvZGVBdChqKSA+IDEyNykge1xuICAgICAgICAgICAgICAvLyB3ZSByZXBsYWNlIG5vbi1BU0NJSSBjaGFyIHdpdGggYSB0ZW1wb3JhcnkgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBzaXplIG9mIGhvc3RuYW1lIGlzIG5vdFxuICAgICAgICAgICAgICAvLyBicm9rZW4gYnkgcmVwbGFjaW5nIG5vbi1BU0NJSSBieSBub3RoaW5nXG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gJ3gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3cGFydCArPSBwYXJ0W2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSB0ZXN0IGFnYWluIHdpdGggQVNDSUkgY2hhciBvbmx5XG4gICAgICAgICAgaWYgKCFuZXdwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgICB2YXIgdmFsaWRQYXJ0cyA9IGhvc3RwYXJ0cy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIHZhciBub3RIb3N0ID0gaG9zdHBhcnRzLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgICAgIHZhciBiaXQgPSBwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFN0YXJ0KTtcbiAgICAgICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICAgICAgdmFsaWRQYXJ0cy5wdXNoKGJpdFsxXSk7XG4gICAgICAgICAgICAgIG5vdEhvc3QudW5zaGlmdChiaXRbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vdEhvc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJlc3QgPSBub3RIb3N0LmpvaW4oJy4nKSArIHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvc3RuYW1lID0gdmFsaWRQYXJ0cy5qb2luKCcuJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3N0bmFtZS5sZW5ndGggPiBob3N0bmFtZU1heExlbikge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9ICcnO1xuICAgIH1cblxuICAgIC8vIHN0cmlwIFsgYW5kIF0gZnJvbSB0aGUgaG9zdG5hbWVcbiAgICAvLyB0aGUgaG9zdCBmaWVsZCBzdGlsbCByZXRhaW5zIHRoZW0sIHRob3VnaFxuICAgIGlmIChpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnN1YnN0cigxLCB0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfVxuICBpZiAocmVzdCkgeyB0aGlzLnBhdGhuYW1lID0gcmVzdDsgfVxuICBpZiAoc2xhc2hlZFByb3RvY29sW2xvd2VyUHJvdG9dICYmXG4gICAgICB0aGlzLmhvc3RuYW1lICYmICF0aGlzLnBhdGhuYW1lKSB7XG4gICAgdGhpcy5wYXRobmFtZSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKGhvc3QpIHtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHsgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7IH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXJsUGFyc2U7XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlIHYxLjQuMSBieSBAbWF0aGlhcyAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0LyoqIERldGVjdCBmcmVlIHZhcmlhYmxlcyAqL1xuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmXG5cdFx0IWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdCFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoXG5cdFx0ZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwuc2VsZiA9PT0gZnJlZUdsb2JhbFxuXHQpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgYHB1bnljb2RlYCBvYmplY3QuXG5cdCAqIEBuYW1lIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0dmFyIHB1bnljb2RlLFxuXG5cdC8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cblx0bWF4SW50ID0gMjE0NzQ4MzY0NywgLy8gYWthLiAweDdGRkZGRkZGIG9yIDJeMzEtMVxuXG5cdC8qKiBCb290c3RyaW5nIHBhcmFtZXRlcnMgKi9cblx0YmFzZSA9IDM2LFxuXHR0TWluID0gMSxcblx0dE1heCA9IDI2LFxuXHRza2V3ID0gMzgsXG5cdGRhbXAgPSA3MDAsXG5cdGluaXRpYWxCaWFzID0gNzIsXG5cdGluaXRpYWxOID0gMTI4LCAvLyAweDgwXG5cdGRlbGltaXRlciA9ICctJywgLy8gJ1xceDJEJ1xuXG5cdC8qKiBSZWd1bGFyIGV4cHJlc3Npb25zICovXG5cdHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vLFxuXHRyZWdleE5vbkFTQ0lJID0gL1teXFx4MjAtXFx4N0VdLywgLy8gdW5wcmludGFibGUgQVNDSUkgY2hhcnMgKyBub24tQVNDSUkgY2hhcnNcblx0cmVnZXhTZXBhcmF0b3JzID0gL1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZywgLy8gUkZDIDM0OTAgc2VwYXJhdG9yc1xuXG5cdC8qKiBFcnJvciBtZXNzYWdlcyAqL1xuXHRlcnJvcnMgPSB7XG5cdFx0J292ZXJmbG93JzogJ092ZXJmbG93OiBpbnB1dCBuZWVkcyB3aWRlciBpbnRlZ2VycyB0byBwcm9jZXNzJyxcblx0XHQnbm90LWJhc2ljJzogJ0lsbGVnYWwgaW5wdXQgPj0gMHg4MCAobm90IGEgYmFzaWMgY29kZSBwb2ludCknLFxuXHRcdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG5cdH0sXG5cblx0LyoqIENvbnZlbmllbmNlIHNob3J0Y3V0cyAqL1xuXHRiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW4sXG5cdGZsb29yID0gTWF0aC5mbG9vcixcblx0c3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZSxcblxuXHQvKiogVGVtcG9yYXJ5IHZhcmlhYmxlICovXG5cdGtleTtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGVycm9yIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuXHQgKiBAcmV0dXJucyB7RXJyb3J9IFRocm93cyBhIGBSYW5nZUVycm9yYCB3aXRoIHRoZSBhcHBsaWNhYmxlIGVycm9yIG1lc3NhZ2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcnJvcih0eXBlKSB7XG5cdFx0dGhyb3cgbmV3IFJhbmdlRXJyb3IoZXJyb3JzW3R5cGVdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgYEFycmF5I21hcGAgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5IGFycmF5XG5cdCAqIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgZm4pIHtcblx0XHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR3aGlsZSAobGVuZ3RoLS0pIHtcblx0XHRcdHJlc3VsdFtsZW5ndGhdID0gZm4oYXJyYXlbbGVuZ3RoXSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcblx0ICogQSBzaW1wbGUgYEFycmF5I21hcGAtbGlrZSB3cmFwcGVyIHRvIHdvcmsgd2l0aCBkb21haW4gbmFtZSBzdHJpbmdzIG9yIGVtYWlsXG5cdCAqIGFkZHJlc3Nlcy5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5XG5cdCAqIGNoYXJhY3Rlci5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBzdHJpbmcgb2YgY2hhcmFjdGVycyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXBEb21haW4oc3RyaW5nLCBmbikge1xuXHRcdHZhciBwYXJ0cyA9IHN0cmluZy5zcGxpdCgnQCcpO1xuXHRcdHZhciByZXN1bHQgPSAnJztcblx0XHRpZiAocGFydHMubGVuZ3RoID4gMSkge1xuXHRcdFx0Ly8gSW4gZW1haWwgYWRkcmVzc2VzLCBvbmx5IHRoZSBkb21haW4gbmFtZSBzaG91bGQgYmUgcHVueWNvZGVkLiBMZWF2ZVxuXHRcdFx0Ly8gdGhlIGxvY2FsIHBhcnQgKGkuZS4gZXZlcnl0aGluZyB1cCB0byBgQGApIGludGFjdC5cblx0XHRcdHJlc3VsdCA9IHBhcnRzWzBdICsgJ0AnO1xuXHRcdFx0c3RyaW5nID0gcGFydHNbMV07XG5cdFx0fVxuXHRcdC8vIEF2b2lkIGBzcGxpdChyZWdleClgIGZvciBJRTggY29tcGF0aWJpbGl0eS4gU2VlICMxNy5cblx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShyZWdleFNlcGFyYXRvcnMsICdcXHgyRScpO1xuXHRcdHZhciBsYWJlbHMgPSBzdHJpbmcuc3BsaXQoJy4nKTtcblx0XHR2YXIgZW5jb2RlZCA9IG1hcChsYWJlbHMsIGZuKS5qb2luKCcuJyk7XG5cdFx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBudW1lcmljIGNvZGUgcG9pbnRzIG9mIGVhY2ggVW5pY29kZVxuXHQgKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG5cdCAqIHRoaXMgZnVuY3Rpb24gd2lsbCBjb252ZXJ0IGEgcGFpciBvZiBzdXJyb2dhdGUgaGFsdmVzIChlYWNoIG9mIHdoaWNoXG5cdCAqIFVDUy0yIGV4cG9zZXMgYXMgc2VwYXJhdGUgY2hhcmFjdGVycykgaW50byBhIHNpbmdsZSBjb2RlIHBvaW50LFxuXHQgKiBtYXRjaGluZyBVVEYtMTYuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZW5jb2RlYFxuXHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZGVjb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIFVuaWNvZGUgaW5wdXQgc3RyaW5nIChVQ1MtMikuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gVGhlIG5ldyBhcnJheSBvZiBjb2RlIHBvaW50cy5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdFx0dmFyIG91dHB1dCA9IFtdLFxuXHRcdCAgICBjb3VudGVyID0gMCxcblx0XHQgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcblx0XHQgICAgdmFsdWUsXG5cdFx0ICAgIGV4dHJhO1xuXHRcdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHR2YWx1ZSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHRcdC8vIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3RlclxuXHRcdFx0XHRleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHRcdC8vIGNvZGUgdW5pdCBpcyB0aGUgaGlnaCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpclxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgc3RyaW5nIGJhc2VkIG9uIGFuIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEBzZWUgYHB1bnljb2RlLnVjczIuZGVjb2RlYFxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBlbmNvZGVcblx0ICogQHBhcmFtIHtBcnJheX0gY29kZVBvaW50cyBUaGUgYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIG5ldyBVbmljb2RlIHN0cmluZyAoVUNTLTIpLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHRcdHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0XHRpZiAodmFsdWUgPiAweEZGRkYpIHtcblx0XHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHRcdHZhbHVlID0gMHhEQzAwIHwgdmFsdWUgJiAweDNGRjtcblx0XHRcdH1cblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHRcdFx0cmV0dXJuIG91dHB1dDtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGJhc2ljIGNvZGUgcG9pbnQgaW50byBhIGRpZ2l0L2ludGVnZXIuXG5cdCAqIEBzZWUgYGRpZ2l0VG9CYXNpYygpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gY29kZVBvaW50IFRoZSBiYXNpYyBudW1lcmljIGNvZGUgcG9pbnQgdmFsdWUuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludCAoZm9yIHVzZSBpblxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGluIHRoZSByYW5nZSBgMGAgdG8gYGJhc2UgLSAxYCwgb3IgYGJhc2VgIGlmXG5cdCAqIHRoZSBjb2RlIHBvaW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzaWNUb0RpZ2l0KGNvZGVQb2ludCkge1xuXHRcdGlmIChjb2RlUG9pbnQgLSA0OCA8IDEwKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gMjI7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA2NSA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gNjU7XG5cdFx0fVxuXHRcdGlmIChjb2RlUG9pbnQgLSA5NyA8IDI2KSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50IC0gOTc7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHNlZSBgYmFzaWNUb0RpZ2l0KClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBkaWdpdCBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBiYXNpYyBjb2RlIHBvaW50IHdob3NlIHZhbHVlICh3aGVuIHVzZWQgZm9yXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaXMgYGRpZ2l0YCwgd2hpY2ggbmVlZHMgdG8gYmUgaW4gdGhlIHJhbmdlXG5cdCAqIGAwYCB0byBgYmFzZSAtIDFgLiBJZiBgZmxhZ2AgaXMgbm9uLXplcm8sIHRoZSB1cHBlcmNhc2UgZm9ybSBpc1xuXHQgKiB1c2VkOyBlbHNlLCB0aGUgbG93ZXJjYXNlIGZvcm0gaXMgdXNlZC4gVGhlIGJlaGF2aW9yIGlzIHVuZGVmaW5lZFxuXHQgKiBpZiBgZmxhZ2AgaXMgbm9uLXplcm8gYW5kIGBkaWdpdGAgaGFzIG5vIHVwcGVyY2FzZSBmb3JtLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlnaXRUb0Jhc2ljKGRpZ2l0LCBmbGFnKSB7XG5cdFx0Ly8gIDAuLjI1IG1hcCB0byBBU0NJSSBhLi56IG9yIEEuLlpcblx0XHQvLyAyNi4uMzUgbWFwIHRvIEFTQ0lJIDAuLjlcblx0XHRyZXR1cm4gZGlnaXQgKyAyMiArIDc1ICogKGRpZ2l0IDwgMjYpIC0gKChmbGFnICE9IDApIDw8IDUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEJpYXMgYWRhcHRhdGlvbiBmdW5jdGlvbiBhcyBwZXIgc2VjdGlvbiAzLjQgb2YgUkZDIDM0OTIuXG5cdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNDkyI3NlY3Rpb24tMy40XG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGFwdChkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcblx0XHR2YXIgayA9IDA7XG5cdFx0ZGVsdGEgPSBmaXJzdFRpbWUgPyBmbG9vcihkZWx0YSAvIGRhbXApIDogZGVsdGEgPj4gMTtcblx0XHRkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG5cdFx0Zm9yICgvKiBubyBpbml0aWFsaXphdGlvbiAqLzsgZGVsdGEgPiBiYXNlTWludXNUTWluICogdE1heCA+PiAxOyBrICs9IGJhc2UpIHtcblx0XHRcdGRlbHRhID0gZmxvb3IoZGVsdGEgLyBiYXNlTWludXNUTWluKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZsb29yKGsgKyAoYmFzZU1pbnVzVE1pbiArIDEpICogZGVsdGEgLyAoZGVsdGEgKyBza2V3KSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzIHRvIGEgc3RyaW5nIG9mIFVuaWNvZGVcblx0ICogc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG5cdFx0Ly8gRG9uJ3QgdXNlIFVDUy0yXG5cdFx0dmFyIG91dHB1dCA9IFtdLFxuXHRcdCAgICBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aCxcblx0XHQgICAgb3V0LFxuXHRcdCAgICBpID0gMCxcblx0XHQgICAgbiA9IGluaXRpYWxOLFxuXHRcdCAgICBiaWFzID0gaW5pdGlhbEJpYXMsXG5cdFx0ICAgIGJhc2ljLFxuXHRcdCAgICBqLFxuXHRcdCAgICBpbmRleCxcblx0XHQgICAgb2xkaSxcblx0XHQgICAgdyxcblx0XHQgICAgayxcblx0XHQgICAgZGlnaXQsXG5cdFx0ICAgIHQsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBiYXNlTWludXNUO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50czogbGV0IGBiYXNpY2AgYmUgdGhlIG51bWJlciBvZiBpbnB1dCBjb2RlXG5cdFx0Ly8gcG9pbnRzIGJlZm9yZSB0aGUgbGFzdCBkZWxpbWl0ZXIsIG9yIGAwYCBpZiB0aGVyZSBpcyBub25lLCB0aGVuIGNvcHlcblx0XHQvLyB0aGUgZmlyc3QgYmFzaWMgY29kZSBwb2ludHMgdG8gdGhlIG91dHB1dC5cblxuXHRcdGJhc2ljID0gaW5wdXQubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcblx0XHRpZiAoYmFzaWMgPCAwKSB7XG5cdFx0XHRiYXNpYyA9IDA7XG5cdFx0fVxuXG5cdFx0Zm9yIChqID0gMDsgaiA8IGJhc2ljOyArK2opIHtcblx0XHRcdC8vIGlmIGl0J3Mgbm90IGEgYmFzaWMgY29kZSBwb2ludFxuXHRcdFx0aWYgKGlucHV0LmNoYXJDb2RlQXQoaikgPj0gMHg4MCkge1xuXHRcdFx0XHRlcnJvcignbm90LWJhc2ljJyk7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQucHVzaChpbnB1dC5jaGFyQ29kZUF0KGopKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGRlY29kaW5nIGxvb3A6IHN0YXJ0IGp1c3QgYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyIGlmIGFueSBiYXNpYyBjb2RlXG5cdFx0Ly8gcG9pbnRzIHdlcmUgY29waWVkOyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG90aGVyd2lzZS5cblxuXHRcdGZvciAoaW5kZXggPSBiYXNpYyA+IDAgPyBiYXNpYyArIDEgOiAwOyBpbmRleCA8IGlucHV0TGVuZ3RoOyAvKiBubyBmaW5hbCBleHByZXNzaW9uICovKSB7XG5cblx0XHRcdC8vIGBpbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IGNoYXJhY3RlciB0byBiZSBjb25zdW1lZC5cblx0XHRcdC8vIERlY29kZSBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyIGludG8gYGRlbHRhYCxcblx0XHRcdC8vIHdoaWNoIGdldHMgYWRkZWQgdG8gYGlgLiBUaGUgb3ZlcmZsb3cgY2hlY2tpbmcgaXMgZWFzaWVyXG5cdFx0XHQvLyBpZiB3ZSBpbmNyZWFzZSBgaWAgYXMgd2UgZ28sIHRoZW4gc3VidHJhY3Qgb2ZmIGl0cyBzdGFydGluZ1xuXHRcdFx0Ly8gdmFsdWUgYXQgdGhlIGVuZCB0byBvYnRhaW4gYGRlbHRhYC5cblx0XHRcdGZvciAob2xkaSA9IGksIHcgPSAxLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblxuXHRcdFx0XHRpZiAoaW5kZXggPj0gaW5wdXRMZW5ndGgpIHtcblx0XHRcdFx0XHRlcnJvcignaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGlnaXQgPSBiYXNpY1RvRGlnaXQoaW5wdXQuY2hhckNvZGVBdChpbmRleCsrKSk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0ID49IGJhc2UgfHwgZGlnaXQgPiBmbG9vcigobWF4SW50IC0gaSkgLyB3KSkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHRcdHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA8IHQpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0aWYgKHcgPiBmbG9vcihtYXhJbnQgLyBiYXNlTWludXNUKSkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dyAqPSBiYXNlTWludXNUO1xuXG5cdFx0XHR9XG5cblx0XHRcdG91dCA9IG91dHB1dC5sZW5ndGggKyAxO1xuXHRcdFx0YmlhcyA9IGFkYXB0KGkgLSBvbGRpLCBvdXQsIG9sZGkgPT0gMCk7XG5cblx0XHRcdC8vIGBpYCB3YXMgc3VwcG9zZWQgdG8gd3JhcCBhcm91bmQgZnJvbSBgb3V0YCB0byBgMGAsXG5cdFx0XHQvLyBpbmNyZW1lbnRpbmcgYG5gIGVhY2ggdGltZSwgc28gd2UnbGwgZml4IHRoYXQgbm93OlxuXHRcdFx0aWYgKGZsb29yKGkgLyBvdXQpID4gbWF4SW50IC0gbikge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0biArPSBmbG9vcihpIC8gb3V0KTtcblx0XHRcdGkgJT0gb3V0O1xuXG5cdFx0XHQvLyBJbnNlcnQgYG5gIGF0IHBvc2l0aW9uIGBpYCBvZiB0aGUgb3V0cHV0XG5cdFx0XHRvdXRwdXQuc3BsaWNlKGkrKywgMCwgbik7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdWNzMmVuY29kZShvdXRwdXQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scyAoZS5nLiBhIGRvbWFpbiBuYW1lIGxhYmVsKSB0byBhXG5cdCAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuXHRcdHZhciBuLFxuXHRcdCAgICBkZWx0YSxcblx0XHQgICAgaGFuZGxlZENQQ291bnQsXG5cdFx0ICAgIGJhc2ljTGVuZ3RoLFxuXHRcdCAgICBiaWFzLFxuXHRcdCAgICBqLFxuXHRcdCAgICBtLFxuXHRcdCAgICBxLFxuXHRcdCAgICBrLFxuXHRcdCAgICB0LFxuXHRcdCAgICBjdXJyZW50VmFsdWUsXG5cdFx0ICAgIG91dHB1dCA9IFtdLFxuXHRcdCAgICAvKiogYGlucHV0TGVuZ3RoYCB3aWxsIGhvbGQgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyBpbiBgaW5wdXRgLiAqL1xuXHRcdCAgICBpbnB1dExlbmd0aCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50UGx1c09uZSxcblx0XHQgICAgYmFzZU1pbnVzVCxcblx0XHQgICAgcU1pbnVzVDtcblxuXHRcdC8vIENvbnZlcnQgdGhlIGlucHV0IGluIFVDUy0yIHRvIFVuaWNvZGVcblx0XHRpbnB1dCA9IHVjczJkZWNvZGUoaW5wdXQpO1xuXG5cdFx0Ly8gQ2FjaGUgdGhlIGxlbmd0aFxuXHRcdGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgc3RhdGVcblx0XHRuID0gaW5pdGlhbE47XG5cdFx0ZGVsdGEgPSAwO1xuXHRcdGJpYXMgPSBpbml0aWFsQmlhcztcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHNcblx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgMHg4MCkge1xuXHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aGFuZGxlZENQQ291bnQgPSBiYXNpY0xlbmd0aCA9IG91dHB1dC5sZW5ndGg7XG5cblx0XHQvLyBgaGFuZGxlZENQQ291bnRgIGlzIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgdGhhdCBoYXZlIGJlZW4gaGFuZGxlZDtcblx0XHQvLyBgYmFzaWNMZW5ndGhgIGlzIHRoZSBudW1iZXIgb2YgYmFzaWMgY29kZSBwb2ludHMuXG5cblx0XHQvLyBGaW5pc2ggdGhlIGJhc2ljIHN0cmluZyAtIGlmIGl0IGlzIG5vdCBlbXB0eSAtIHdpdGggYSBkZWxpbWl0ZXJcblx0XHRpZiAoYmFzaWNMZW5ndGgpIHtcblx0XHRcdG91dHB1dC5wdXNoKGRlbGltaXRlcik7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBlbmNvZGluZyBsb29wOlxuXHRcdHdoaWxlIChoYW5kbGVkQ1BDb3VudCA8IGlucHV0TGVuZ3RoKSB7XG5cblx0XHRcdC8vIEFsbCBub24tYmFzaWMgY29kZSBwb2ludHMgPCBuIGhhdmUgYmVlbiBoYW5kbGVkIGFscmVhZHkuIEZpbmQgdGhlIG5leHRcblx0XHRcdC8vIGxhcmdlciBvbmU6XG5cdFx0XHRmb3IgKG0gPSBtYXhJbnQsIGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA+PSBuICYmIGN1cnJlbnRWYWx1ZSA8IG0pIHtcblx0XHRcdFx0XHRtID0gY3VycmVudFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEluY3JlYXNlIGBkZWx0YWAgZW5vdWdoIHRvIGFkdmFuY2UgdGhlIGRlY29kZXIncyA8bixpPiBzdGF0ZSB0byA8bSwwPixcblx0XHRcdC8vIGJ1dCBndWFyZCBhZ2FpbnN0IG92ZXJmbG93XG5cdFx0XHRoYW5kbGVkQ1BDb3VudFBsdXNPbmUgPSBoYW5kbGVkQ1BDb3VudCArIDE7XG5cdFx0XHRpZiAobSAtIG4gPiBmbG9vcigobWF4SW50IC0gZGVsdGEpIC8gaGFuZGxlZENQQ291bnRQbHVzT25lKSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVsdGEgKz0gKG0gLSBuKSAqIGhhbmRsZWRDUENvdW50UGx1c09uZTtcblx0XHRcdG4gPSBtO1xuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgaW5wdXRMZW5ndGg7ICsraikge1xuXHRcdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlIDwgbiAmJiArK2RlbHRhID4gbWF4SW50KSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID09IG4pIHtcblx0XHRcdFx0XHQvLyBSZXByZXNlbnQgZGVsdGEgYXMgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlclxuXHRcdFx0XHRcdGZvciAocSA9IGRlbHRhLCBrID0gYmFzZTsgLyogbm8gY29uZGl0aW9uICovOyBrICs9IGJhc2UpIHtcblx0XHRcdFx0XHRcdHQgPSBrIDw9IGJpYXMgPyB0TWluIDogKGsgPj0gYmlhcyArIHRNYXggPyB0TWF4IDogayAtIGJpYXMpO1xuXHRcdFx0XHRcdFx0aWYgKHEgPCB0KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cU1pbnVzVCA9IHEgLSB0O1xuXHRcdFx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRcdFx0b3V0cHV0LnB1c2goXG5cdFx0XHRcdFx0XHRcdHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWModCArIHFNaW51c1QgJSBiYXNlTWludXNULCAwKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRxID0gZmxvb3IocU1pbnVzVCAvIGJhc2VNaW51c1QpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWMocSwgMCkpKTtcblx0XHRcdFx0XHRiaWFzID0gYWRhcHQoZGVsdGEsIGhhbmRsZWRDUENvdW50UGx1c09uZSwgaGFuZGxlZENQQ291bnQgPT0gYmFzaWNMZW5ndGgpO1xuXHRcdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0XHQrK2hhbmRsZWRDUENvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCsrZGVsdGE7XG5cdFx0XHQrK247XG5cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dC5qb2luKCcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyByZXByZXNlbnRpbmcgYSBkb21haW4gbmFtZSBvciBhbiBlbWFpbCBhZGRyZXNzXG5cdCAqIHRvIFVuaWNvZGUuIE9ubHkgdGhlIFB1bnljb2RlZCBwYXJ0cyBvZiB0aGUgaW5wdXQgd2lsbCBiZSBjb252ZXJ0ZWQsIGkuZS5cblx0ICogaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgb24gYSBzdHJpbmcgdGhhdCBoYXMgYWxyZWFkeSBiZWVuXG5cdCAqIGNvbnZlcnRlZCB0byBVbmljb2RlLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZWQgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBjb252ZXJ0IHRvIFVuaWNvZGUuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBVbmljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBQdW55Y29kZVxuXHQgKiBzdHJpbmcuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b1VuaWNvZGUoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleFB1bnljb2RlLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/IGRlY29kZShzdHJpbmcuc2xpY2UoNCkudG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0OiBzdHJpbmc7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBVbmljb2RlIHN0cmluZyByZXByZXNlbnRpbmcgYSBkb21haW4gbmFtZSBvciBhbiBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIFB1bnljb2RlLiBPbmx5IHRoZSBub24tQVNDSUkgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHdpbGwgYmUgY29udmVydGVkLFxuXHQgKiBpLmUuIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCdzIGFscmVhZHkgaW5cblx0ICogQVNDSUkuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG8gY29udmVydCwgYXMgYVxuXHQgKiBVbmljb2RlIHN0cmluZy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFB1bnljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBkb21haW4gbmFtZSBvclxuXHQgKiBlbWFpbCBhZGRyZXNzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9BU0NJSShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4Tm9uQVNDSUkudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gJ3huLS0nICsgZW5jb2RlKHN0cmluZylcblx0XHRcdFx0OiBzdHJpbmc7XG5cdFx0fSk7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvKiogRGVmaW5lIHRoZSBwdWJsaWMgQVBJICovXG5cdHB1bnljb2RlID0ge1xuXHRcdC8qKlxuXHRcdCAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBQdW55Y29kZS5qcyB2ZXJzaW9uIG51bWJlci5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHQndmVyc2lvbic6ICcxLjQuMScsXG5cdFx0LyoqXG5cdFx0ICogQW4gb2JqZWN0IG9mIG1ldGhvZHMgdG8gY29udmVydCBmcm9tIEphdmFTY3JpcHQncyBpbnRlcm5hbCBjaGFyYWN0ZXJcblx0XHQgKiByZXByZXNlbnRhdGlvbiAoVUNTLTIpIHRvIFVuaWNvZGUgY29kZSBwb2ludHMsIGFuZCBiYWNrLlxuXHRcdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdCAqL1xuXHRcdCd1Y3MyJzoge1xuXHRcdFx0J2RlY29kZSc6IHVjczJkZWNvZGUsXG5cdFx0XHQnZW5jb2RlJzogdWNzMmVuY29kZVxuXHRcdH0sXG5cdFx0J2RlY29kZSc6IGRlY29kZSxcblx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdCd0b0FTQ0lJJzogdG9BU0NJSSxcblx0XHQndG9Vbmljb2RlJzogdG9Vbmljb2RlXG5cdH07XG5cblx0LyoqIEV4cG9zZSBgcHVueWNvZGVgICovXG5cdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuXHQvLyBsaWtlIHRoZSBmb2xsb3dpbmc6XG5cdGlmIChcblx0XHR0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJlxuXHRcdGRlZmluZS5hbWRcblx0KSB7XG5cdFx0ZGVmaW5lKCdwdW55Y29kZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHB1bnljb2RlO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUpIHtcblx0XHRpZiAobW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMpIHtcblx0XHRcdC8vIGluIE5vZGUuanMsIGlvLmpzLCBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IHB1bnljb2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yIChrZXkgaW4gcHVueWNvZGUpIHtcblx0XHRcdFx0cHVueWNvZGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IHB1bnljb2RlW2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC5wdW55Y29kZSA9IHB1bnljb2RlO1xuXHR9XG5cbn0odGhpcykpO1xuIiwibW9kdWxlLmV4cG9ydHM9L1tcXDAtXFx4MUZcXHg3Ri1cXHg5Rl0vIiwibW9kdWxlLmV4cG9ydHM9L1tcXHhBRFxcdTA2MDAtXFx1MDYwNVxcdTA2MUNcXHUwNkREXFx1MDcwRlxcdTA4RTJcXHUxODBFXFx1MjAwQi1cXHUyMDBGXFx1MjAyQS1cXHUyMDJFXFx1MjA2MC1cXHUyMDY0XFx1MjA2Ni1cXHUyMDZGXFx1RkVGRlxcdUZGRjktXFx1RkZGQl18XFx1RDgwNFtcXHVEQ0JEXFx1RENDRF18XFx1RDgyRltcXHVEQ0EwLVxcdURDQTNdfFxcdUQ4MzRbXFx1REQ3My1cXHVERDdBXXxcXHVEQjQwW1xcdURDMDFcXHVEQzIwLVxcdURDN0ZdLyIsIm1vZHVsZS5leHBvcnRzPS9bIS0jJS1cXCosLVxcLzo7XFw/QFxcWy1cXF1fXFx7XFx9XFx4QTFcXHhBN1xceEFCXFx4QjZcXHhCN1xceEJCXFx4QkZcXHUwMzdFXFx1MDM4N1xcdTA1NUEtXFx1MDU1RlxcdTA1ODlcXHUwNThBXFx1MDVCRVxcdTA1QzBcXHUwNUMzXFx1MDVDNlxcdTA1RjNcXHUwNUY0XFx1MDYwOVxcdTA2MEFcXHUwNjBDXFx1MDYwRFxcdTA2MUJcXHUwNjFFXFx1MDYxRlxcdTA2NkEtXFx1MDY2RFxcdTA2RDRcXHUwNzAwLVxcdTA3MERcXHUwN0Y3LVxcdTA3RjlcXHUwODMwLVxcdTA4M0VcXHUwODVFXFx1MDk2NFxcdTA5NjVcXHUwOTcwXFx1MDlGRFxcdTBBNzZcXHUwQUYwXFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZEXFx1MTY2RVxcdTE2OUJcXHUxNjlDXFx1MTZFQi1cXHUxNkVEXFx1MTczNVxcdTE3MzZcXHUxN0Q0LVxcdTE3RDZcXHUxN0Q4LVxcdTE3REFcXHUxODAwLVxcdTE4MEFcXHUxOTQ0XFx1MTk0NVxcdTFBMUVcXHUxQTFGXFx1MUFBMC1cXHUxQUE2XFx1MUFBOC1cXHUxQUFEXFx1MUI1QS1cXHUxQjYwXFx1MUJGQy1cXHUxQkZGXFx1MUMzQi1cXHUxQzNGXFx1MUM3RVxcdTFDN0ZcXHUxQ0MwLVxcdTFDQzdcXHUxQ0QzXFx1MjAxMC1cXHUyMDI3XFx1MjAzMC1cXHUyMDQzXFx1MjA0NS1cXHUyMDUxXFx1MjA1My1cXHUyMDVFXFx1MjA3RFxcdTIwN0VcXHUyMDhEXFx1MjA4RVxcdTIzMDgtXFx1MjMwQlxcdTIzMjlcXHUyMzJBXFx1Mjc2OC1cXHUyNzc1XFx1MjdDNVxcdTI3QzZcXHUyN0U2LVxcdTI3RUZcXHUyOTgzLVxcdTI5OThcXHUyOUQ4LVxcdTI5REJcXHUyOUZDXFx1MjlGRFxcdTJDRjktXFx1MkNGQ1xcdTJDRkVcXHUyQ0ZGXFx1MkQ3MFxcdTJFMDAtXFx1MkUyRVxcdTJFMzAtXFx1MkU0RVxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdfFxcdUQ4MDBbXFx1REQwMC1cXHVERDAyXFx1REY5RlxcdURGRDBdfFxcdUQ4MDFcXHVERDZGfFxcdUQ4MDJbXFx1REM1N1xcdUREMUZcXHVERDNGXFx1REU1MC1cXHVERTU4XFx1REU3RlxcdURFRjAtXFx1REVGNlxcdURGMzktXFx1REYzRlxcdURGOTktXFx1REY5Q118XFx1RDgwM1tcXHVERjU1LVxcdURGNTldfFxcdUQ4MDRbXFx1REM0Ny1cXHVEQzREXFx1RENCQlxcdURDQkNcXHVEQ0JFLVxcdURDQzFcXHVERDQwLVxcdURENDNcXHVERDc0XFx1REQ3NVxcdUREQzUtXFx1RERDOFxcdUREQ0RcXHVERERCXFx1RERERC1cXHVERERGXFx1REUzOC1cXHVERTNEXFx1REVBOV18XFx1RDgwNVtcXHVEQzRCLVxcdURDNEZcXHVEQzVCXFx1REM1RFxcdURDQzZcXHVEREMxLVxcdURERDdcXHVERTQxLVxcdURFNDNcXHVERTYwLVxcdURFNkNcXHVERjNDLVxcdURGM0VdfFxcdUQ4MDZbXFx1REMzQlxcdURFM0YtXFx1REU0NlxcdURFOUEtXFx1REU5Q1xcdURFOUUtXFx1REVBMl18XFx1RDgwN1tcXHVEQzQxLVxcdURDNDVcXHVEQzcwXFx1REM3MVxcdURFRjdcXHVERUY4XXxcXHVEODA5W1xcdURDNzAtXFx1REM3NF18XFx1RDgxQVtcXHVERTZFXFx1REU2RlxcdURFRjVcXHVERjM3LVxcdURGM0JcXHVERjQ0XXxcXHVEODFCW1xcdURFOTctXFx1REU5QV18XFx1RDgyRlxcdURDOUZ8XFx1RDgzNltcXHVERTg3LVxcdURFOEJdfFxcdUQ4M0FbXFx1REQ1RVxcdURENUZdLyIsIm1vZHVsZS5leHBvcnRzPS9bIFxceEEwXFx1MTY4MFxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXS8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuQW55ID0gcmVxdWlyZSgnLi9wcm9wZXJ0aWVzL0FueS9yZWdleCcpO1xuZXhwb3J0cy5DYyAgPSByZXF1aXJlKCcuL2NhdGVnb3JpZXMvQ2MvcmVnZXgnKTtcbmV4cG9ydHMuQ2YgID0gcmVxdWlyZSgnLi9jYXRlZ29yaWVzL0NmL3JlZ2V4Jyk7XG5leHBvcnRzLlAgICA9IHJlcXVpcmUoJy4vY2F0ZWdvcmllcy9QL3JlZ2V4Jyk7XG5leHBvcnRzLlogICA9IHJlcXVpcmUoJy4vY2F0ZWdvcmllcy9aL3JlZ2V4Jyk7XG4iLCJtb2R1bGUuZXhwb3J0cz0vW1xcMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLyJdfQ==
