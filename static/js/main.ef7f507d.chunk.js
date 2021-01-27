(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),c=n.n(r),i=n(6),s=n.n(i),o=n(1),u=n.n(o),d=n(3),h=n(7),l=n(8),p=n(4),j=n(11),m=n(10),b=function(e){var t=e.temp;return Object(a.jsxs)("span",{children:[t,"\xb0"]})},v=function(e){var t=e.iconId,n="https://openweathermap.org/img/wn/".concat(t,"@2x.png");return Object(a.jsx)("img",{src:n,alt:"weather icon"})},O=function(e){var t=e.dayOfWeek,n=e.icon,r=e.highTemp,c=e.lowTemp,i=e.isActive,s=e.index,o=e.onSelected;return Object(a.jsxs)("div",{className:"WeatherSummary ".concat(i?"WeatherSummary-active":""),onClick:function(){return o(s)},children:[Object(a.jsx)("p",{children:t}),Object(a.jsx)(v,{iconId:n}),Object(a.jsxs)("div",{className:"WeatherSummary-temps",children:[Object(a.jsx)(b,{temp:r}),Object(a.jsx)(b,{temp:c})]})]})},x=function(e){var t=e.forecast,n=e.activeDay,r=e.onActiveDayChanged;return Object(a.jsx)("div",{children:t.slice(0,5).map((function(e,t){return Object(a.jsx)(O,{dayOfWeek:e.dayOfWeek,index:t,icon:e.icon,highTemp:Math.round(e.highTemp),lowTemp:Math.round(e.lowTemp),isActive:n===t,onSelected:function(e){return r(e)}},t)}))})},f=n(9),w=function(e){var t=e.handleSearch,n=Object(r.useState)(""),c=Object(f.a)(n,2),i=c[0],s=c[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(i),s("")},children:[Object(a.jsx)("input",{type:"search",id:"locationSearch",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Search city name",required:!0}),Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]})})},g=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mW3pOkOn5a9DsB3t0KzLdaWwjT6ntCYC","https://www.mapquestapi.com/geocoding/v1/address",e.next=4,fetch("".concat("https://www.mapquestapi.com/geocoding/v1/address","?key=").concat("mW3pOkOn5a9DsB3t0KzLdaWwjT6ntCYC","&location=").concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a.results[0].locations[0].latLng);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t+","+n,"mW3pOkOn5a9DsB3t0KzLdaWwjT6ntCYC","https://www.mapquestapi.com/geocoding/v1/reverse",e.next=5,fetch("".concat("https://www.mapquestapi.com/geocoding/v1/reverse","?key=").concat("mW3pOkOn5a9DsB3t0KzLdaWwjT6ntCYC","&location=").concat(a));case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c.results[0].locations[0].adminArea5);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a,r,c,i,s,o,d,h=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.length>2&&void 0!==h[2]?h[2]:"imperial",r="1ca5b6840f89213a0a4a26028692e59f",c="".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(t,"&lon=").concat(n,"&units=").concat(a,"&appid=").concat(r),e.next=6,fetch(c);case 6:return i=e.sent,e.next=9,i.json();case 9:return s=e.sent,o=s.current,d=s.daily,e.abrupt("return",{current:o,daily:d});case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getDay()]},C=function(e){return Object(a.jsxs)("div",{className:"WeatherDetails",children:[Object(a.jsx)("p",{className:"text_large",children:e.location}),Object(a.jsx)("p",{children:e.dayOfWeek}),Object(a.jsx)("p",{children:e.weatherCondition}),Object(a.jsxs)("div",{className:"details_wrapper",children:[Object(a.jsxs)("div",{className:"icon_and_current",children:[Object(a.jsx)(v,{iconId:e.icon}),Object(a.jsx)("span",{className:"text_large",children:isNaN(e.currentTemp)?e.currentTemp:Math.round(e.currentTemp)}),Object(a.jsx)("span",{children:"\xb0F"}),Object(a.jsx)("span",{children:"|"}),Object(a.jsx)("span",{children:"\xb0C"})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["High: ",Math.round(e.highTemp),"\xb0"]}),Object(a.jsxs)("p",{children:["Low: ",Math.round(e.lowTemp),"\xb0"]}),Object(a.jsxs)("p",{children:["Precipitation: ",e.precipitation.toFixed(0),"%"]}),Object(a.jsxs)("p",{children:["Humidity: ",e.humidity,"%"]}),Object(a.jsxs)("p",{children:["Wind: ",e.windSpeed," ","imperial"===e.units?"mph":"km/h"]})]})]})]})},T=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,weather:null,error:null,activeDay:0,latitude:null,longitude:null,city:"Fresno"},a.handleActiveDayChange=a.handleActiveDayChange.bind(Object(p.a)(a)),a.handleSearchSubmit=a.handleSearchSubmit.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.coords,r=a.latitude,c=a.longitude,t.prev=1,t.next=4,S(r,c);case 4:i=t.sent,e.setState({weather:i,isLoading:!1}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({error:"Oh no \ud83d\ude14 We were unable to get weather data at this time.",isLoading:!1});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.setState({error:"Ooops \ud83d\ude13 We were unable to get your current location.",isLoading:!1})}))}},{key:"componentDidUpdate",value:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.latitude===this.state.latitude){e.next=11;break}return e.prev=1,e.next=4,S(this.state.latitude,this.state.longitude);case 4:a=e.sent,this.setState({weather:a,isLoading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({error:"Oh no \ud83d\ude14 We were unable to get weather data at this time.",isLoading:!1});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleActiveDayChange",value:function(e){this.setState({activeDay:e})}},{key:"handleSearchSubmit",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,a=n.lat,r=n.lng,e.next=7,y(a,r);case 7:c=e.sent,this.setState({longitude:r,latitude:a,city:c});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.weather,r=e.error,c=e.activeDay,i=Object(a.jsx)(a.Fragment,{children:r?Object(a.jsx)("p",{children:r}):n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{handleSearch:this.handleSearchSubmit}),Object(a.jsx)(C,{location:this.state.city,dayOfWeek:k(1e3*n.daily[c].dt),weatherCondition:n.daily[c].weather[0].description,icon:n.daily[c].weather[0].icon,units:"imperial",currentTemp:0===c?n.current.temp:"-",lowTemp:n.daily[c].temp.min,highTemp:n.daily[c].temp.max,precipitation:100*n.daily[c].pop,humidity:n.daily[c].humidity,windSpeed:n.daily[c].wind_speed}),Object(a.jsx)(x,{forecast:n.daily.map((function(e){return{dayOfWeek:k(1e3*e.dt),icon:e.weather[0].icon,highTemp:e.temp.max,lowTemp:e.temp.min}})),activeDay:c,onActiveDayChanged:this.handleActiveDayChange})]})});return Object(a.jsx)("div",{children:t?Object(a.jsx)("p",{children:"Loading...\u23f3"}):Object(a.jsx)(a.Fragment,{children:i})})}}]),n}(c.a.Component),W=(n(18),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),W()}},[[19,1,2]]]);
//# sourceMappingURL=main.ef7f507d.chunk.js.map