window._pa = window._pa || {};
_pa.segments = [{"name":"Signed up users","id":1705534,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 30 days","id":1731229,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 60 days","id":1731232,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 90 days","id":1731234,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 180 days","id":1731237,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 360 days","id":1731239,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 14 days","id":1731247,"regex":"/s.*/?([?#].*)*$"},{"name":"Signed up users - 7 days","id":1731246,"regex":"/s.*/?([?#].*)*$"},{"name":"All visitors","id":1702321,"regex":".*"},{"name":"Landing Page","id":2198081,"regex":"https?://[^/]+/?([?#].*)*$"},{"name":"Landing Page - 1 Day","id":2198067,"regex":"https?://[^/]+/?([?#].*)*$"},{"name":"Landing Page - 14 Days","id":2198069,"regex":"https?://[^/]+/?([?#].*)*$"},{"name":"Landing Page - 7 Days","id":2198068,"regex":"https?://[^/]+/?([?#].*)*$"},{"name":"Landing Page - 90 Days","id":2198080,"regex":"https?://[^/]+/?([?#].*)*$"},{"name":"Landing Page - 30 Days","id":2198070,"regex":"https?://[^/]+/?([?#].*)*$"}];
_pa.conversions = [];
_pa.conversionEvents = [{"name":"Registration - Succeed","id":"187840"},{"name":"Pricing - Subscription","id":"189246"},{"name":"Editor - Click Publish","id":"382047"},{"name":"NewPageCreated","id":"382049"}];
_pa.segmentEvents = [{"name":"User page - visit - pitch_new","id":1706158},{"name":"User page - visit - minimal","id":1706161},{"name":"User page - visit - app","id":1706150},{"name":"User page - visit - fresh","id":1706153},{"name":"hitLandingPage","id":1722534},{"name":"hitLandingPage","id":1731259},{"name":"hitLandingPage","id":1731256},{"name":"Pricing - Subscription Hit Page","id":1733041},{"name":"Pricing - Subscription Hit Page","id":1733053},{"name":"Pricing - Subscription Hit Page","id":1733044},{"name":"Pricing - Subscription Hit Page","id":1733043},{"name":"Pricing - Subscription Hit Page","id":1733042},{"name":"Pricing - Subscription Hit Page","id":1733039},{"name":"Pricing - Subscription","id":1735391},{"name":"Landing - Invitation v2","id":1775209},{"name":"Gallery - Landing Page","id":1775155},{"name":"Landing - Dashboard v1","id":1775169},{"name":"Editor - Use Editor","id":1775173},{"name":"Landing - Dashboard v1","id":1775170},{"name":"Landing - Analytics v1","id":1775176},{"name":"Registration - Succeed","id":1775144},{"name":"Landing - Analytics v1","id":1775174},{"name":"Registration - Succeed","id":1775145},{"name":"Landing - Invitation v2","id":1775210},{"name":"Pricing - Subscription Hit Page","id":1775212},{"name":"User page - visit","id":1702432},{"name":"hitLandingPage","id":1731248},{"name":"hitLandingPage","id":1731250},{"name":"hitLandingPage","id":1731253},{"name":"hitLandingPage","id":1731254},{"name":"hitLandingPage","id":1731255},{"name":"viewPricing","id":1733035},{"name":"viewPricing","id":1733036},{"name":"viewPricing","id":1733045},{"name":"viewPricing","id":1733047},{"name":"viewPricing","id":1733049},{"name":"Gallery - Landing Page","id":1775156},{"name":"Editor - Use Editor","id":1775172},{"name":"viewPricing","id":1775211},{"name":"Launch App - iOS App","id":1925016},{"name":"Launch App - iOS App","id":1925022},{"name":"Launch App - iOS App","id":1925021},{"name":"Editor - Click Publish","id":2133318},{"name":"Editor - Click Publish","id":2133319},{"name":"Editor - Click Publish","id":2133320},{"name":"Editor - Click Publish","id":2133321},{"name":"NewPageCreated","id":2133332},{"name":"NewPageCreated","id":2133333},{"name":"NewPageCreated","id":2133334},{"name":"NewPageCreated","id":2133335},{"name":"NewPageCreated","id":2133336},{"name":"NewPageCreated","id":2133337},{"name":"Editor - Click Publish","id":2133329},{"name":"Editor - Click Publish","id":2133331},{"name":"Registration - Succeed","id":2133338},{"name":"Registration - Succeed","id":2198453}];
_pa.rtbId = '23495';
_pa.siteId = '537ac978a8e4d4dda4000009';
_pa.tapAdSync = true;
!function(){function e(e,a,t){if(null==t||isNaN(t))var n=_pa.pixelHost+"seg?t=2&add="+e;else var n=_pa.pixelHost+"seg?t=2&add="+e+":"+t;_pa.createImageTag("segments",e,n,a)}function a(e,a){var t=_pa.paRtbHost+"seg/?add="+e;_pa.productId&&(t+=":"+encodeURIComponent(_pa.productId)),_pa.tapAdSync&&(t+="&tap=1"),d?_pa.createImageTag("paRtbSegments",e,t,a):s.push({id:e,name:a})}function t(){if(d=!0,0!==s.length){for(var e=[],a=[],t=0;t<s.length;t++){var n=s[t],p=n.id,r=n.name;_pa.productId&&(p+=":"+encodeURIComponent(_pa.productId)),e.push(p),a.push(r)}var p=e.join(","),r=a.join(","),o=_pa.paRtbHost+"seg/?add="+p;_pa.tapAdSync&&(o+="&tap=1"),_pa.createImageTag("paRtbSegments",p,o,r)}}function n(e,a,t){a=a||_pa.orderId,t=t||_pa.revenue;var n=e.id,r=e.name,o=_pa.rtbId;if(p(n,r,a,t,o),e.cofires)for(var i=0;i<e.cofires.length;i++){var c=e.cofires[i];p(c.appnexus_id,c.name,a,t,c.rtb_id)}}function p(e,a,t,n,p){var r="";t&&""!==t&&(t=t.toString().replace(/@.*/,"@"),r+="&order_id="+encodeURIComponent(t)),n&&""!==n&&(r+="&value="+encodeURIComponent(n)),r+="&other="+function(){for(var e="",a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=0;16>t;t++){var n=Math.floor(Math.random()*a.length);e+=a.charAt(n)}return e}();var o=_pa.pixelHost+"px?t=2&id="+e+r,i=_pa.paRtbHost+"px/?id="+e+r;p&&(i+="&a_id="+p),_pa.createImageTag("conversions",e,o,a),_pa.createImageTag("paRtbConversions",e,i,a)}function r(e){for(var a=e.shift(),t=a.split("."),n=_pa,p=0;p<t.length;p++)n=n[t[p]];var r=n.apply(_pa,e);return o(a,e),r}function o(e,a){var t=_pa.callbacks[e];if("undefined"!=typeof t)for(var n=0;n<t.length;n++)t[n].apply(_pa,a)}function i(){for(var e,a=Array.prototype.slice.call(arguments,0),t=a.shift(),n=t.split("."),p=_pa,r=0;r<n.length;r++)p=p[n[r]],e=n[r];p.apply(_pa,a),o(e,a)}function c(){var e=window.navigator.userAgent;(/MSIE 7/.test(e)||/(iPod|iPhone|iPad)/.test(e)&&/AppleWebKit/.test(e))&&(_pa.skip=!0)}_pa.head=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];var d=!1,s=[];_pa.init=function(){_pa.fired={segments:[],conversions:[]},_pa.url=document.location.href,_pa.pixelHost=("https:"===document.location.protocol?"https://secure":"http://ib")+".adnxs.com/",_pa.paRtbHost=("https:"===document.location.protocol?"https://":"http://")+"pixel.prfct.co/",_pa.callbacks={},c()},_pa.addFired=function(e,a){"undefined"==typeof _pa.fired[e]&&(_pa.fired[e]=[]),_pa.fired[e].push(a)},_pa.detect=function(){for(var e=0;e<_pa.segments.length;e++){var a=_pa.segments[e];_pa.url.match(new RegExp(a.regex,"i"))&&i("fireSegment",a)}for(var e=0;e<_pa.conversions.length;e++){var t=_pa.conversions[e];_pa.url.match(new RegExp(t.regex,"i"))&&n(t)}},_pa.track=function(e,a){a="undefined"!=typeof a?a:{};var t=_pa.trackSegments(e,a),n=_pa.trackConversions(e,a);return t||n},_pa.trackSegments=function(e,a){for(var t=!1,n=0;n<_pa.segmentEvents.length;n++){var p=_pa.segmentEvents[n];p.name===e&&(t=!0,i("fireSegment",p,a.segment_value))}return t},_pa.trackConversions=function(e,a){for(var t=!1,p=0;p<_pa.conversionEvents.length;p++){var r=_pa.conversionEvents[p];r.name===e&&(t=!0,n(r,a.orderId,a.revenue))}return t},_pa.trackProduct=function(e){_pa.productId=e;for(var t=_pa.fired.segments,n={},p=0;p<t.length;p++){var r=t[p],o=r.id;n[o]=!0}for(var i in n)a(i,"product refire")},_pa.fireLoadEvents=function(){if("undefined"!=typeof _pa.onLoadEvent)if("function"==typeof _pa.onLoadEvent)_pa.onLoadEvent();else if("string"==typeof _pa.onLoadEvent)for(var e=_pa.onLoadEvent.split(","),a=0;a<e.length;a++){var t=e[a];_pa.track(t)}},_pa.createImageTag=function(e,a,t,n){if(!_pa.skip){var p=document.createElement("img");p.src=t,p.width=1,p.height=1,p.border=0,_pa.head.appendChild(p),_pa.addFired(e,{id:a,name:n,tag:p})}},_pa.start=function(){_pa.fireLoadEvents(),_pa.detect(),_pa.initQ(),t()},_pa.fireSegment=function(t,n){e(t.id,t.name,n),a(t.id,t.name)},_pa.initQ=function(){if("undefined"!=typeof window._pq)for(var e=0;e<_pq.length;e++){var a=_pq[e];r(a)}window._pq={push:function(e){return r(e)}}},_pa.addListener=function(e,a){"undefined"==typeof _pa.callbacks[e]&&(_pa.callbacks[e]=[]),_pa.callbacks[e].push(a)},_pa.removeListener=function(e,a){for(var t=_pa.callbacks[e],n=t.length;n--;)t[n]===a&&t.splice(n,1)},_pa.init()}();(function(){
	if (_pa.initAfterLoad) {
		if (window.document && window.document.readyState === "complete") {
			_pa.start();
		} else {
			function hookLoad(handler) {
				if(window.addEventListener) {
					window.addEventListener("load", handler, false);
				} else if(window.attachEvent) {
					window.attachEvent("onload", handler);
				}
			}
			hookLoad(function() {
				_pa.start();
			});
		}
	} else {
		_pa.start();
	}
})();