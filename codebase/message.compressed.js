if(!window.dhtmlx){window.dhtmlx={}}(function(){var I=null;function K(P,N){var O=P.callback;J(false);P.box.parentNode.removeChild(P.box);I=box=P.box=null;if(O){O(N)}}function A(O){if(I){var N=O.which||event.keyCode;if(dhtmlx.message.keyboard){if(N==13||N==32){K(I,true)}if(N==27){K(I,false)}}if(O.preventDefault){O.preventDefault()}return !(O.cancelBubble=true)}}if(document.attachEvent){document.attachEvent("onkeydown",A)}else{document.addEventListener("keydown",A,false)}function J(O){if(!J.cover){J.cover=document.createElement("DIV");J.cover.className="dhx_modal_cover";document.body.appendChild(J.cover)}var N=document.body.scrollHeight;J.cover.style.display=O?"inline-block":"none"}function F(N,O){return"<div class='dhtmlx_popup_button' "+(O?"result='true' ":"")+"><div>"+N+"</div></div>"}function C(O){if(!L.area){L.area=document.createElement("DIV");L.area.className="dhtmlx_message_area";L.area.style[L.position]="5px";document.body.appendChild(L.area)}L.hide(O.id);var N=document.createElement("DIV");N.innerHTML="<div>"+O.text+"</div>";N.className="dhtmlx-info dhtmlx-"+O.type;N.onclick=function(){L.hide(O.id);O=null};if(L.position=="bottom"&&L.area.firstChild){L.area.insertBefore(N,L.area.firstChild)}else{L.area.appendChild(N)}if(O.expire>0){L.timers[O.id]=window.setTimeout(function(){L.hide(O.id)},O.expire)}L.pull[O.id]=N;N=null;return O.id}function M(P,Q,S){var R=document.createElement("DIV");R.className=" dhtmlx_modal_box dhtmlx-"+P.type;var O="";if(P.title){O+='<div class="dhtmlx_popup_title">'+P.title+"</div>"}O+='<div class="dhtmlx_popup_text"><span>'+P.text+'</span></div><div  class="dhtmlx_popup_controls">';if(Q){O+=F(P.ok||"OK",true)}if(S){O+=F(P.cancel||"Cancel",false)}O+="</div>";R.innerHTML=O;R.onclick=function(V){V=V||event;var U=V.target||V.srcElement;if(!U.className){U=U.parentNode}if(U.className=="dhtmlx_popup_button"){K(P,U.getAttribute("result")=="true")}};P.box=R;I=P;J(true,R);document.body.appendChild(R);var N=Math.abs(Math.floor(((window.innerWidth||document.documentElement.offsetWidth)-R.offsetWidth)/2));var T=Math.abs(Math.floor(((window.innerHeight||document.documentElement.offsetHeight)-R.offsetHeight)/2));R.style.top=T+"px";R.style.left=N+"px";R.focus()}function E(N,O){return function(){L.hide(N.id);if(typeof N.callback=="function"){N.callback(O)}}}function H(N){var O=M(N,true,false)}function B(N){var O=M(N,true,true)}function G(O,N,P){if(typeof O!="object"){if(typeof N=="function"){P=N;N=""}O={text:O,type:N,callback:P}}return O}function D(P,O,N,Q){if(typeof P!="object"){P={text:P,type:O,expire:N,id:Q}}P.id=P.id||L.uid();P.expire=P.expire||L.expire;return P}dhtmlx.alert=function(){text=G.apply(this,arguments);text.type=text.type||"confirm";H(text)};dhtmlx.confirm=function(){text=G.apply(this,arguments);text.type=text.type||"alert";B(text)};var L=dhtmlx.message=function(Q,P,O,R){Q=D.apply(this,arguments);Q.type=Q.type||"info";var N=Q.type.split("-")[0];switch(N){case"alert":return H(Q);break;case"confirm":return B(Q);break;default:return C(Q);break}};L.seed=(new Date()).valueOf();L.uid=function(){return L.seed++};L.expire=4000;L.keyboard=true;L.position="top";L.pull={};L.timers={};L.hideAll=function(){for(var N in L.pull){L.hide(N)}};L.hide=function(O){var N=L.pull[O];if(N&&N.parentNode){window.setTimeout(function(){N.parentNode.removeChild(N);N=null},2000);N.className+=" hidden";if(L.timers[O]){window.clearTimeout(L.timers[O])}delete L.pull[O]}}})();