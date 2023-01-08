(this["webpackJsonpreact-boiler-plate"]=this["webpackJsonpreact-boiler-plate"]||[]).push([[0],{80:function(e,n,t){e.exports=t(94)},93:function(e,n,t){},94:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(29),i=t.n(c),E=t(24),u=t(72),l=t(20),O=t(43),A=t(14),s=t(57),f=t(66),d=t(117),S=t(115),h=t(75),T=t(111),I=t(52),R=t(110),N=t(17),m=Object(O.b)({name:"app",initialState:{loggedIn:!1,accessToken:""},reducers:{setLoginState:function(e,n){var t=n.payload.accessToken;return Object(N.a)(e,(function(e){e.accessToken=t,e.loggedIn=!0}))},setGame:function(e,n){n.payload}}}),L=m.actions,p=L.setLoginState,D=L.setGame,g=m.reducer,v=Object(d.a)((function(e,n){return e.pipe(Object(h.a)(p),Object(R.a)((function(){return Object(T.a)((function(){return Promise.resolve(!0)})).pipe(Object(R.a)((function(){return Object(I.a)()})))})))})),b=Object(d.a)(v),M=Object(A.a)(),w=(r=M,Object(l.c)({router:Object(s.b)(r),app:g})),H=Object(S.a)(),C=Object(O.a)({middleware:[].concat(Object(u.a)(Object(O.c)()),[H,Object(f.a)(M)]),reducer:w});H.run(b);var U=t(69),P=t(70),W=t(73),K=t(74),j=function(e){Object(K.a)(t,e);var n=Object(W.a)(t);function t(){var e;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={hasError:!1},e}return Object(P.a)(t,[{key:"componentDidCatch",value:function(e,n){}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}]),t}(a.Component),y=t(112),F=t(113),B=function(){return o.a.createElement("div",{className:"absolute top-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50 flex-col"},o.a.createElement(y.a,null),o.a.createElement(F.a,{variant:"button",color:"inherit",className:"pt-4"},"Loading..."))},x=t(39),G=t(6),Y=t(26),V=t(27),k=t(8);function J(){var e=Object(Y.a)(["\n    background-color: rgb(72 209 204);\n  "]);return J=function(){return e},e}function X(){var e=Object(Y.a)(["\n    background-color: navajowhite;\n  "]);return X=function(){return e},e}function Z(){var e=Object(Y.a)(["\n  font-size: 30px;\n  border: 2px solid #fff;\n  cursor: pointer;\n  padding: 2vh 2vw;\n  border-radius: 8px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return Z=function(){return e},e}function z(){var e=Object(Y.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n"]);return z=function(){return e},e}var q,Q,$,_,ee,ne=Object(V.a)(z()),te=Object(V.a)(Z()),re=Object(k.a)(te,Object(V.a)(X())),ae=Object(k.a)(te,Object(V.a)(J())),oe=function(){var e=Object(G.f)(),n=Object(E.d)(),t=Object(a.useCallback)((function(t){var r=t.currentTarget.dataset.type;n(D(r)),e.push("/".concat(r))}),[n,e]);return o.a.createElement("div",{className:ne},o.a.createElement("div",{className:re,onClick:t,"data-type":"words"},"Words"),o.a.createElement("div",{className:ae,onClick:t,"data-type":"numbers"},"Numbers"))},ce=t(116);!function(e){e.WORDS="words",e.NUMBERS="numbers"}(q||(q={})),function(e){e.ADMIN="admin",e.USER="user"}(Q||(Q={})),function(e){e.POSITIVE="+",e.NEGATIVE="-"}($||($={})),function(e){e.Y="y",e.X="x"}(_||(_={})),function(e){e.MOUSEDOWN="mousedown",e.MOUSEUP="pressup",e.MOUSEMOVE="pressmove",e.TICK="tick"}(ee||(ee={}));var ie=t(64),Ee=t.n(ie),ue=t(71),le=t(28),Oe=t(118),Ae=t(68),se=t(51),fe=t(114),de={speed:1,letter:{size:"60px",font:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif",color:"#000",alpha:.3},container:{width:60,height:60,radius:5,spacer:10},window:{width:window.innerWidth,height:window.innerHeight}},Se=["red","orange","yellow","green","blue","indigo","violet","pink","gray"],he=["DOG","COW","BIRD","MOUSE","PIG","HEN","CHICKEN","GIRAFFE","HIPPO","ELPHANT","PARROT","LIZARD","MONKEY","GOAT","SHEEP","FISH","SHARK"].concat(["ABLE","ACID","AGED","ALSO","ARMY","BACK","BAND","BANK","BASE","BATH","BEAR","BEAT","BELT","BEST","BIRD","BLOW","BLUE","BOAT","BODY","BOND","BONE","BORN","BOTH","BOWL","BULK","BURN","BUSH","BUSY","CALM","CAME","CAMP","CARD","CARE","CASE","CASH","CAST","CHAT","CHIP","CITY","CLUB","COAL","COAT","CODE","COLD","COME","COPE","COPY","CORE","COST","CREW","CROP","DARK","DATE","DAWN","DAYS","DEAL","DEAN","DEAR","DEBT","DENY","DESK","DIAL","DICK","DIET","DISC","DISK","DOES","DONE","DOSE","DOWN","DRAW","DREW","DROP","DRUG","DUAL","DUKE","DUST","DUTY","EACH","EARN","EAST","EASY","EVIL","EXIT","FACE","FACT","FAIL","FAIR","FARM","FAST","FATE","FEAR","FELT","FILE","FILM","FIND","FINE","FIRE","FIRM","FISH","FIVE","FLAT","FLOW","FORD","FORM","FORT","FOUR","FROM","FUEL","FUND","GAIN","GAME","GATE","GAVE","GEAR","GIFT","GIRL","GIVE","GLAD","GOAL","GOES","GOLD","GOLF","GONE","GRAY","GREW","GREY","GROW","GULF","HAIR","HALF","HAND","HANG","HARD","HARM","HATE","HAVE","HEAD","HEAR","HEAT","HELD","HELP","HERO","HIRE","HOLD","HOLE","HOLY","HOME","HOPE","HOST","HOUR","HUGE","HUNG","HUNT","HURT","IDEA","INCH","INTO","IRON","ITEM","JACK","JANE","JEAN","JOHN","JOIN","JUMP","JURY","JUST","KENT","KEPT","KIND","KING","KNEW","KNOW","LACK","LADY","LAID","LAKE","LAND","LANE","LAST","LATE","LEAD","LEFT","LIFE","LIFT","LIKE","LINE","LINK","LIST","LIVE","LOAD","LOAN","LOCK","LONG","LORD","LOSE","LOST","LOVE","LUCK","MADE","MAIL","MAIN","MAKE","MALE","MANY","MARK","MEAL","MEAN","MEAT","MENU","MIKE","MILE","MILK","MIND","MINE","MODE","MORE","MOST","MOVE","MUCH","MUST","NAME","NAVY","NEAR","NECK","NEWS","NEXT","NICE","NICK","NOSE","NOTE","OKAY","ONCE","ONLY","OPEN","ORAL","OVER","PACE","PACK","PAGE","PAID","PAIN","PAIR","PALM","PARK","PART","PAST","PATH","PEAK","PICK","PINK","PLAN","PLAY","PLOT","PLUG","PLUS","PORT","POST","PURE","PUSH","RACE","RAIL","RAIN","RANK","RATE","READ","REAL","RELY","RENT","REST","RICE","RICH","RIDE","RING","RISE","RISK","ROAD","ROCK","ROLE","ROSE","RULE","RUSH","RUTH","SAFE","SAID","SAKE","SALE","SALT","SAME","SAND","SAVE","SEAT","SELF","SEND","SENT","SEPT","SHIP","SHOP","SHOT","SHOW","SHUT","SICK","SIDE","SIGN","SITE","SIZE","SKIN","SLIP","SLOW","SNOW","SOFT","SOIL","SOLD","SOLE","SOME","SONG","SORT","SOUL","SPOT","STAR","STAY","STEP","STOP","SUCH","SUIT","SURE","TAKE","TALE","TALK","TANK","TAPE","TASK","TEAM","TECH","TEND","TERM","THAN","THEM","THEN","THEY","THIN","THIS","THUS","TIME","TINY","TOLD","TONE","TONY","TOUR","TOWN","TRIP","TRUE","TUNE","TURN","TWIN","TYPE","UNIT","UPON","USED","USER","VARY","VAST","VERY","VICE","VIEW","VOTE","WAGE","WAIT","WAKE","WALK","WANT","WARD","WARM","WASH","WAVE","WAYS","WEAK","WEAR","WENT","WEST","WHAT","WHEN","WHOM","WIDE","WIFE","WILD","WIND","WINE","WING","WIRE","WISE","WISH","WITH","WORD","WORE","WORK","YARD","YEAH","YEAR","YOUR","ZERO","ZONE"]),Te={height:function(e){var n=de.container.width,t=Math.floor(Math.random()*e);return t+n>=e?t-n:t},width:function(e){var n=de.container.width,t=Math.floor(Math.random()*e);return t+n>=e?t-n:t},fromTwoValues:function(e,n){return Math.floor(333*Math.random())%2?e:n},color:function(){var e=Math.floor(Math.random()*Se.length);return Se[e]},fromArray:function(e){return e[Math.floor(Math.random()*e.length)]},numberString:function(e,n){var t=String(Math.max(e,Math.floor(Math.random()*n))),r=t.split("");return Ie(r)?Te.numberString(e,n):t}},Ie=function(e){return Boolean(function(e){return e.filter((function(n,t){return e.indexOf(n)!==t}))}(e).length)},Re=navigator.userAgent.includes("Windows")||navigator.userAgent.includes("Android")?0:5,Ne=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=new le.Text(e,"".concat(de.letter.size," ").concat(de.letter.font),de.letter.color);t.textAlign="middle",t.textBaseline="bottom",t.x=(de.container.width-t.getBounds().width)/2,t.y=de.container.height-(de.container.height-t.getBounds().height)+Re,t.name=e,t.setBounds(0,0,de.container.width,de.container.height),t.color=n?Te.color():"#000";var r=me(t);return r},me=function(e){var n=new le.Container,t=e.getBounds().height,r=new le.Shape;return r.graphics.beginFill("#fff").drawRoundRect(0,0,de.container.width,t,de.container.radius),n.name=e.name,n.addChild(r,e),n},Le=function(e){var n=Ne(e,!1);return n.alpha=de.letter.alpha,n},pe=function(e){var n=!0,t=!1;e.y=Te.height(de.window.height),e.x=Te.width(de.window.width);var r={direction:Te.fromTwoValues($.POSITIVE,$.NEGATIVE),axis:Te.fromTwoValues(_.X,_.Y)},a=r.direction,o=r.axis,c=o===_.Y?de.window.height-e.getBounds().height:function(e,n){return e-n.getBounds().width}(de.window.width,e);return e.on(ee.MOUSEDOWN,(function(){return n=!1})),e.on(ee.MOUSEUP,(function(){return n=!0})),e.on(ee.TICK,(function(){!1===t&&n&&(a=function(e,n,t,r){return t===$.POSITIVE?e[n]+de.speed>=r?(t=$.NEGATIVE,e[n]=r,t):(e[n]+=de.speed,t):e[n]-de.speed<=0?(t=$.POSITIVE,e[n]=0,t):(e[n]-=de.speed,t)}(e,o,a,c))})),function(){t=!0}},De=function(e){return new Promise((function(n){ge.next({word:e,resolve:n})}))},ge=new Oe.a;ge.pipe(Object(se.a)((function(e){return e})),Object(fe.a)((function(e){var n=e.word,t=e.resolve,r=function(e){var n=new SpeechSynthesisUtterance;return n.rate=1,n.pitch=1,n.volume=1,n.text=e,n}(n);return window.speechSynthesis.speak(r),r.onend=function(){return t()},Object(Ae.a)(n)}))).subscribe();var ve=function e(n,t){var r=q.WORDS===n?Te.fromArray(he):Te.numberString(0,99),a=r.split(""),o=a.map(Le),c=0,i=!0,E=-1,u=function(e){var n=Math.floor(de.window.width/2),t=Math.floor(de.window.height/2),r=de.container.width*e.length+(e.length-1)*de.container.spacer,a=n-de.container.width-r/2;return e.map((function(e,n){var r=a+de.container.width+de.container.spacer;return e.x=r,e.y=t,a=r,e}))}(o).map((function(e){return t.addChild(e),e})),l=a.map((function(e,n){var r=Ne(e),o=pe(r);return t.addChild(r),function(e,n,t){var r=e.x+e.getBounds().width/2,a=e.y+e.getBounds().height/2,o=!1,c={x:0,y:0},i=n.on(ee.MOUSEDOWN,(function(){c.x=n.x,c.y=n.y})),E=n.on(ee.MOUSEMOVE,(function(t){if(!o){var c=t;n.x=c.stageX,n.y=c.stageY,function(e,n){var t=e.centerX,r=e.centerY,a=n.x,o=n.y,c=n.x+n.getBounds().width,i=n.y+n.getBounds().height;return a<=t&&c>=t&&o<=r&&i>=r}({centerX:r,centerY:a},n)&&(n.x=e.x,n.y=e.y,o=!0,n.off(ee.MOUSEMOVE,E),n.off(ee.MOUSEDOWN,i))}})),u=n.on(ee.MOUSEUP,(function(r){var a=r;if(n.x=a.stageX,n.y=a.stageY,o)return n.x=e.x,n.y=e.y,n.off(ee.MOUSEUP,u),De(n.name),void t(e,n);n.x=c.x,n.y=c.y}))}(u[n],r,(function(e,n){var r=u.findIndex((function(n){return n===e}));E>r&&(i=!1),E=r,e.alpha=1,t.removeChild(n),o(),++c===a.length&&O()})),r})),O=function(){var o=Object(ue.a)(Ee.a.mark((function o(){return Ee.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return i||a.forEach(De),o.next=3,De(r);case 3:u.forEach((function(e){return t.removeChild(e)})),l.forEach((function(e){return t.removeChild(e)})),e(n,t);case 6:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}()};var be=function(e){var n=new le.Stage("canvas");le.Touch.enable(n),ve(e,n),le.Ticker.setFPS(60),le.Ticker.addEventListener("tick",n)},Me=function(e,n){Object(a.useLayoutEffect)((function(){if(n.current){var t=document.querySelector("body");if(t){var r=t.getBoundingClientRect(),a=r.height,o=r.width;Object.assign(de.window,{height:a,width:o}),n.current.height=a,n.current.width=o}}be(e)}),[])};function we(){var e=Object(Y.a)(["\n  position: absolute !important;\n  top: 1em;\n  right: 1em;\n"]);return we=function(){return e},e}var He=function(){var e=Object(a.useRef)(null),n=Object(G.f)();return Me(q.WORDS,e),o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{id:"canvas",ref:e}),o.a.createElement(ce.a,{variant:"contained",color:"primary",onClick:function(){n.push("/")},className:Ce},"Home"))},Ce=Object(V.a)(we());function Ue(){var e=Object(Y.a)(["\n  position: absolute !important;\n  top: 1em;\n  right: 1em;\n"]);return Ue=function(){return e},e}var Pe=function(){var e=Object(a.useRef)(null),n=Object(G.f)();return Me(q.NUMBERS,e),o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{id:"canvas",ref:e}),o.a.createElement(ce.a,{variant:"contained",color:"primary",onClick:function(){return n.push("/")},className:We},"Home"))},We=Object(V.a)(Ue()),Ke=function(){return o.a.createElement(x.a,null,o.a.createElement(G.c,null,o.a.createElement(G.a,{path:"/numbers"},o.a.createElement(Pe,null)),o.a.createElement(G.a,{path:"/words"},o.a.createElement(He,null)),o.a.createElement(G.a,{path:"/",exact:!0},o.a.createElement(oe,null))))},je=o.a.createContext({}),ye=function(){return o.a.createElement(je.Provider,{value:{}},o.a.createElement(Ke,null))},Fe=(t(93),window);Fe.oncontextmenu=function(){return!1},Fe.selectstart=function(){return!1},i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null,o.a.createElement(E.a,{store:C},o.a.createElement(s.a,{history:M},o.a.createElement(a.Suspense,{fallback:o.a.createElement(B,null)},o.a.createElement(ye,null)))))),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.2111aad4.chunk.js.map