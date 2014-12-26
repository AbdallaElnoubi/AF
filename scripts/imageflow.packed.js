function ImageFlow(){this.defaults={aspectRatio:1.964,buttons:false,captions:true,imageCursor:'default',ImageFlowID:'imageflow',imageFocusM:1.0,imageFocusMax:4,imageScaling:true,imagesHeight:0.67,imagesM:1.0,onClick:function(){document.location=this.url},opacity:false,opacityArray:[10,8,6,4,2],percentLandscape:118,percentOther:100,preloadImages:true,reflections:true,reflectionGET:'',reflectionP:0.5,reflectionPNG:false,scrollbarP:0.6,slider:true,sliderCursor:'e-resize',sliderWidth:14,startID:1,startAnimation:false,xStep:150};var s=this;this.init=function(a){var b=new Array('aspectRatio','buttons','captions','imageCursor','imagesM','ImageFlowID','imageFocusM','imageFocusMax','imagesHeight','onClick','opacity','opacityArray','percentLandscape','percentOther','preloadImages','reflections','reflectionGET','reflectionP','reflectionPNG','imageScaling','scrollbarP','slider','sliderCursor','sliderWidth','startID','startAnimation','xStep');var c=b.length;for(var i=0;i<c;i++){var d=b[i];this[d]=(a!==undefined&&a[d]!==undefined)?a[d]:s.defaults[d]}var e=document.getElementById(s.ImageFlowID);if(e){e.style.visibility='visible';this.ImageFlowDiv=e;if(this.createStructure()){this.imagesDiv=document.getElementById(s.ImageFlowID+'_images');this.captionDiv=document.getElementById(s.ImageFlowID+'_caption');this.navigationDiv=document.getElementById(s.ImageFlowID+'_navigation');this.scrollbarDiv=document.getElementById(s.ImageFlowID+'_scrollbar');this.sliderDiv=document.getElementById(s.ImageFlowID+'_slider');this.buttonNextDiv=document.getElementById(s.ImageFlowID+'_next');this.buttonPreviousDiv=document.getElementById(s.ImageFlowID+'_previous');this.indexArray=[];this.current=0;this.imageID=0;this.target=0;this.memTarget=0;this.firstRefresh=true;this.firstCheck=true;this.busy=false;if(this.slider===false){this.scrollbarDiv.style.display='none'}var f=this.ImageFlowDiv.offsetWidth;var g=Math.round(f/s.aspectRatio);document.getElementById(s.ImageFlowID+'_loading_txt').style.paddingTop=((g*0.5)-22)+'px';e.style.height=g+'px';this.loadingProgress()}}};this.createStructure=function(){var a=s.Helper.createDocumentElement('div','images');var b=null;var c=this.ImageFlowDiv.childNodes.length;for(var d=0;d<c;d++){b=this.ImageFlowDiv.childNodes[d];if(b&&b.nodeType==1&&b.nodeName=='IMG'){if(s.reflections===true){var e='2';if(s.reflectionPNG===true){e='3'}var f=b.getAttribute('src',2);f='reflect'+e+'.php?img='+f+s.reflectionGET;b.setAttribute('src',f)}var g=b.cloneNode(true);a.appendChild(g)}}var h=s.Helper.createDocumentElement('p','loading_txt');var i=document.createTextNode(' ');h.appendChild(i);var j=s.Helper.createDocumentElement('div','loading');var k=s.Helper.createDocumentElement('div','loading_bar');j.appendChild(k);var l=s.Helper.createDocumentElement('div','caption');var m=s.Helper.createDocumentElement('div','scrollbar');var n=s.Helper.createDocumentElement('div','slider');m.appendChild(n);if(s.buttons){var o=s.Helper.createDocumentElement('div','previous','button');var p=s.Helper.createDocumentElement('div','next','button');m.appendChild(o);m.appendChild(p)}var q=s.Helper.createDocumentElement('div','navigation');q.appendChild(l);q.appendChild(m);var r=false;if(s.ImageFlowDiv.appendChild(a)&&s.ImageFlowDiv.appendChild(h)&&s.ImageFlowDiv.appendChild(j)&&s.ImageFlowDiv.appendChild(q)){for(d=0;d<c;d++){b=this.ImageFlowDiv.childNodes[d];if(b&&b.nodeType==1&&b.nodeName=='IMG'){this.ImageFlowDiv.removeChild(b)}}r=true}return r};this.loadingProgress=function(){var p=s.loadingStatus();if(p<100||s.firstCheck===true&&s.preloadImages===true){if(s.firstCheck===true&&p==100){s.firstCheck=false;window.setTimeout(s.loadingProgress,100)}else{window.setTimeout(s.loadingProgress,40)}}else{document.getElementById(s.ImageFlowID+'_loading_txt').style.display='none';document.getElementById(s.ImageFlowID+'_loading').style.display='none';window.setTimeout(s.Helper.addResizeEvent,1000);s.MouseWheel.init();s.MouseDrag.init();s.Touch.init();s.Key.init();s.refresh(true);document.getElementById(s.ImageFlowID+'_scrollbar').style.visibility='visible';var a=s.startID-1;if(a<0){a=0}if(a>s.max){a=s.max-1}s.glideTo(a);if(s.startAnimation===true){s.moveTo(5000)}}};this.loadingStatus=function(){var a=s.imagesDiv.childNodes.length;var i=0,completed=0;var b=null;for(var c=0;c<a;c++){b=s.imagesDiv.childNodes[c];if(b&&b.nodeType==1&&b.nodeName=='IMG'){if(b.complete===true){completed++}i++}}var d=Math.round((completed/i)*100);var e=document.getElementById(s.ImageFlowID+'_loading_bar');e.style.width=d+'%';var f=document.getElementById(s.ImageFlowID+'_loading_txt');var g=document.createTextNode('loading images '+completed+'/'+i);f.replaceChild(g,f.firstChild);return d};this.refresh=function(){this.imagesDivWidth=s.imagesDiv.offsetWidth+s.imagesDiv.offsetLeft;this.maxHeight=Math.round(s.imagesDivWidth/s.aspectRatio);this.maxFocus=s.imageFocusMax*s.xStep;this.size=s.imagesDivWidth*0.5;this.sliderWidth=s.sliderWidth*0.5;this.scrollbarWidth=(s.imagesDivWidth-(Math.round(s.sliderWidth)*2))*s.scrollbarP;this.imagesDivHeight=Math.round(s.maxHeight*s.imagesHeight);s.ImageFlowDiv.style.height=s.maxHeight+'px';s.imagesDiv.style.height=s.imagesDivHeight+'px';s.navigationDiv.style.height=(s.maxHeight-s.imagesDivHeight)+'px';s.captionDiv.style.width=s.imagesDivWidth+'px';s.captionDiv.style.paddingTop=Math.round(s.imagesDivWidth*0.02)+'px';s.scrollbarDiv.style.width=s.scrollbarWidth+'px';s.scrollbarDiv.style.marginTop=Math.round(s.imagesDivWidth*0.02)+'px';s.scrollbarDiv.style.marginLeft=Math.round(s.sliderWidth+((s.imagesDivWidth-s.scrollbarWidth)/2))+'px';s.sliderDiv.style.cursor=s.sliderCursor;s.sliderDiv.onmousedown=function(){s.MouseDrag.start(this);return false};if(s.buttons){s.buttonPreviousDiv.onclick=function(){s.MouseWheel.handle(1)};s.buttonNextDiv.onclick=function(){s.MouseWheel.handle(-1)}}var a=(s.reflections===true)?s.reflectionP+1:1;var b=s.imagesDiv.childNodes.length;var i=0;var c=null;for(var d=0;d<b;d++){c=s.imagesDiv.childNodes[d];if(c!==null&&c.nodeType==1&&c.nodeName=='IMG'){this.indexArray[i]=d;c.url=c.getAttribute('longdesc');c.xPosition=(-i*s.xStep);c.i=i;if(s.firstRefresh){if(c.getAttribute('width')!==null&&c.getAttribute('height')!==null){c.w=c.getAttribute('width');c.h=c.getAttribute('height')*a}else{c.w=c.width;c.h=c.height}}if((c.w)>(c.h/(s.reflectionP+1))){c.pc=s.percentLandscape;c.pcMem=s.percentLandscape}else{c.pc=s.percentOther;c.pcMem=s.percentOther}if(s.imageScaling===false){c.style.position='relative';c.style.display='inline'}c.style.cursor=s.imageCursor;i++}}this.max=s.indexArray.length;if(s.imageScaling===false){var c=s.imagesDiv.childNodes[s.indexArray[0]];this.totalImagesWidth=c.w*s.max;c.style.paddingLeft=(s.imagesDivWidth/2)+(c.w/2)+'px';s.imagesDiv.style.height=c.h+'px';s.navigationDiv.style.height=(s.maxHeight-c.h)+'px'}if(s.firstRefresh){s.firstRefresh=false}s.glideTo(s.imageID);s.moveTo(s.current)};this.moveTo=function(x){this.current=x;this.zIndex=s.max;for(var a=0;a<s.max;a++){var b=s.imagesDiv.childNodes[s.indexArray[a]];var c=a*-s.xStep;if(s.imageScaling){if((c+s.maxFocus)<s.memTarget||(c-s.maxFocus)>s.memTarget){b.style.visibility='hidden';b.style.display='none'}else{var z=(Math.sqrt(10000+x*x)+100)*s.imagesM;var d=x/z*s.size+s.size;b.style.display='block';var e=(b.h/b.w*b.pc)/z*s.size;var f=0;switch(e>s.maxHeight){case false:f=b.pc/z*s.size;break;default:e=s.maxHeight;f=b.w*e/b.h;break}var g=(s.imagesDivHeight-e)+((e/(s.reflectionP+1))*s.reflectionP);b.style.left=d-(b.pc/2)/z*s.size+'px';if(f&&e){b.style.height=e+'px';b.style.width=f+'px';b.style.top=g+'px'}b.style.visibility='visible';switch(x<0){case true:this.zIndex++;break;default:this.zIndex=s.zIndex-1;break}switch(b.i==s.imageID){case false:b.onclick=function(){s.glideTo(this.i)};break;default:this.zIndex=s.zIndex+1;if(b.url!==''){b.onclick=s.onClick}break}b.style.zIndex=s.zIndex}}else{if((c+s.maxFocus)<s.memTarget||(c-s.maxFocus)>s.memTarget){b.style.visibility='hidden'}else{b.style.visibility='visible';switch(b.i==s.imageID){case false:b.onclick=function(){s.glideTo(this.i)};break;default:if(b.url!==''){b.onclick=s.onClick}break}}s.imagesDiv.style.marginLeft=(x-s.totalImagesWidth)+'px'}x+=s.xStep}};this.glideTo=function(a){var x=-a*s.xStep;this.target=x;this.memTarget=x;this.imageID=a;var b=s.imagesDiv.childNodes[a].getAttribute('alt');if(b===''||s.captions===false){b='&nbsp;'}s.captionDiv.innerHTML=b;if(s.MouseDrag.busy===false){this.newSliderX=(a*s.scrollbarWidth)/(s.max-1)-s.MouseDrag.newX;s.sliderDiv.style.marginLeft=(s.newSliderX-s.sliderWidth)+'px'}if(s.opacity===true||s.imageFocusM!==s.defaults.imageFocusM){s.Helper.setOpacity(s.imagesDiv.childNodes[a],s.opacityArray[0]);s.imagesDiv.childNodes[a].pc=s.imagesDiv.childNodes[a].pc*s.imageFocusM;var c=0;var d=0;var e=0;var f=s.opacityArray.length;for(var i=1;i<(s.imageFocusMax+1);i++){if((i+1)>f){c=s.opacityArray[f-1]}else{c=s.opacityArray[i]}d=a+i;e=a-i;if(d<s.max){s.Helper.setOpacity(s.imagesDiv.childNodes[d],c);s.imagesDiv.childNodes[d].pc=s.imagesDiv.childNodes[d].pcMem}if(e>=0){s.Helper.setOpacity(s.imagesDiv.childNodes[e],c);s.imagesDiv.childNodes[e].pc=s.imagesDiv.childNodes[e].pcMem}}}if(s.busy===false){window.setTimeout(s.animate,50);s.busy=true}};this.animate=function(){switch(s.target<s.current-1||s.target>s.current+1){case true:s.moveTo(s.current+(s.target-s.current)/3);window.setTimeout(s.animate,50);s.busy=true;break;default:s.busy=false;break}};this.MouseWheel={init:function(){if(window.addEventListener){s.ImageFlowDiv.addEventListener('DOMMouseScroll',s.MouseWheel.get,false)}s.Helper.addEvent(s.ImageFlowDiv,'mousewheel',s.MouseWheel.get)},get:function(a){var b=0;if(!a){a=window.event}if(a.wheelDelta){b=a.wheelDelta/120}else if(a.detail){b=-a.detail/3}if(b){s.MouseWheel.handle(b)}s.Helper.suppressBrowserDefault(a)},handle:function(a){var b=false;var c=0;if(a>0){if(s.imageID>=1){c=s.imageID-1;b=true}}else{if(s.imageID<(s.max-1)){c=s.imageID+1;b=true}}if(b===true){s.glideTo(c)}}};this.MouseDrag={object:null,objectX:0,mouseX:0,newX:0,busy:false,init:function(){s.Helper.addEvent(s.ImageFlowDiv,'mousemove',s.MouseDrag.drag);s.Helper.addEvent(s.ImageFlowDiv,'mouseup',s.MouseDrag.stop);s.Helper.addEvent(document,'mouseup',s.MouseDrag.stop);s.ImageFlowDiv.onselectstart=function(){var a=true;if(s.MouseDrag.busy===true){a=false}return a}},start:function(o){s.MouseDrag.object=o;s.MouseDrag.objectX=s.MouseDrag.mouseX-o.offsetLeft+s.newSliderX},stop:function(){s.MouseDrag.object=null;s.MouseDrag.busy=false},drag:function(e){var a=0;if(!e){e=window.event}if(e.pageX){a=e.pageX}else if(e.clientX){a=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft}s.MouseDrag.mouseX=a;if(s.MouseDrag.object!==null){var b=(s.MouseDrag.mouseX-s.MouseDrag.objectX)+s.sliderWidth;if(b<(-s.newSliderX)){b=-s.newSliderX}if(b>(s.scrollbarWidth-s.newSliderX)){b=s.scrollbarWidth-s.newSliderX}var c=(b+s.newSliderX)/(s.scrollbarWidth/(s.max-1));var d=Math.round(c);s.MouseDrag.newX=b;s.MouseDrag.object.style.left=b+'px';if(s.imageID!==d){s.glideTo(d)}s.MouseDrag.busy=true}}};this.Touch={x:0,startX:0,stopX:0,busy:false,first:true,init:function(){s.Helper.addEvent(s.navigationDiv,'touchstart',s.Touch.start);s.Helper.addEvent(document,'touchmove',s.Touch.handle);s.Helper.addEvent(document,'touchend',s.Touch.stop)},isOnNavigationDiv:function(e){var a=false;if(e.touches){if(e.touches[0].target===s.navigationDiv){a=true}}return a},getX:function(e){var x=0;if(e.touches){x=e.touches[0].pageX}return x},start:function(e){s.Touch.startX=s.Touch.getX(e);s.Touch.busy=true;s.Helper.suppressBrowserDefault(e)},isBusy:function(){var a=false;if(s.Touch.busy===true){a=true}return a},handle:function(e){if(s.Touch.isBusy&&s.Touch.isOnNavigationDiv(e)){if(s.Touch.first){s.Touch.stopX=((s.max-1)-s.imageID)*(s.imagesDivWidth/(s.max-1));s.Touch.first=false}var a=-(s.Touch.getX(e)-s.Touch.startX-s.Touch.stopX);if(a<0){a=0}if(a>s.imagesDivWidth){a=s.imagesDivWidth}s.Touch.x=a;var b=Math.round(a/(s.imagesDivWidth/(s.max-1)));b=(s.max-1)-b;if(s.imageID!==b){s.glideTo(b)}s.Helper.suppressBrowserDefault(e)}},stop:function(){s.Touch.stopX=s.Touch.x;s.Touch.busy=false}};this.Key={init:function(){document.onkeydown=function(a){s.Key.handle(a)}},handle:function(a){var b=s.Key.get(a);switch(b){case 39:s.MouseWheel.handle(-1);break;case 37:s.MouseWheel.handle(1);break}},get:function(a){a=a||window.event;return a.keyCode}};this.Helper={addEvent:function(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a["e"+b+c]=c;a[b+c]=function(){a["e"+b+c](window.event)};a.attachEvent("on"+b,a[b+c])}},setOpacity:function(a,b){if(s.opacity===true){a.style.opacity=b/10;a.style.filter='alpha(opacity='+b*10+')'}},createDocumentElement:function(a,b,c){var d=document.createElement(a);d.setAttribute('id',s.ImageFlowID+'_'+b);if(c!==undefined){b+=' '+c}d.setAttribute('class',b);d.setAttribute('className',b);return d},suppressBrowserDefault:function(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}return false},addResizeEvent:function(){var a=window.onresize;if(typeof window.onresize!='function'){window.onresize=function(){s.refresh()}}else{window.onresize=function(){if(a){a()}s.refresh()}}}}}var domReadyEvent={name:"domReadyEvent",events:{},domReadyID:1,bDone:false,DOMContentLoadedCustom:null,add:function(a){if(!a.$$domReadyID){a.$$domReadyID=this.domReadyID++;if(this.bDone){a()}this.events[a.$$domReadyID]=a}},remove:function(a){if(a.$$domReadyID){delete this.events[a.$$domReadyID]}},run:function(){if(this.bDone){return}this.bDone=true;for(var i in this.events){this.events[i]()}},schedule:function(){if(this.bDone){return}if(/KHTML|WebKit/i.test(navigator.userAgent)){if(/loaded|complete/.test(document.readyState)){this.run()}else{setTimeout(this.name+".schedule()",100)}}else if(document.getElementById("__ie_onload")){return true}if(typeof this.DOMContentLoadedCustom==="function"){if(typeof document.getElementsByTagName!=='undefined'&&(document.getElementsByTagName('body')[0]!==null||document.body!==null)){if(this.DOMContentLoadedCustom()){this.run()}else{setTimeout(this.name+".schedule()",250)}}}return true},init:function(){if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){domReadyEvent.run()},false)}setTimeout("domReadyEvent.schedule()",100);function run(){domReadyEvent.run()}if(typeof addEvent!=="undefined"){addEvent(window,"load",run)}else if(document.addEventListener){document.addEventListener("load",run,false)}else if(typeof window.onload==="function"){var a=window.onload;window.onload=function(){domReadyEvent.run();a()}}else{window.onload=run}/*@cc_on@if(@_win32||@_win64)document.write("<script id=__ie_onload defer src=\"//:\"><\/script>");var b=document.getElementById("__ie_onload");b.onreadystatechange=function(){if(this.readyState=="complete"){domReadyEvent.run()}};@end@*/}};var domReady=function(a){domReadyEvent.add(a)};domReadyEvent.init();