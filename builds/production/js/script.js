!function e(l,t,r){function n(o,i){if(!t[o]){if(!l[o]){var u="function"==typeof require&&require;if(!i&&u)return u(o,!0);if(a)return a(o,!0);throw new Error("Cannot find module '"+o+"'")}var s=t[o]={exports:{}};l[o][0].call(s.exports,function(e){var t=l[o][1][e];return n(t||e)},s,s.exports,e,l,t,r)}return t[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)n(r[o]);return n}({1:[function(e,l,t){d3.json("./data/surveyIsolate.json",function(e,l){d3.json("./data/surveyIsolate2012.json",function(e,t){$.getJSON("shapefiles/minneapolis_groups.json",function(e){function r(e,l,t,r,a,o){var i=["#999","#C22A22"];d3.format("%");d3.select(l+" svg").datum(n(t,r,a)).transition().duration(300).call(e[o].color(i)),nv.utils.windowResize(e[o].update);d3.selectAll("rect").filter(function(e,l){return 0==l||1==l}).style("fill","#000"),d3.selectAll("rect").filter(function(e,l){return 2==l||3==l||4==l}).style("fill","#777"),d3.selectAll("rect").filter(function(e,l){return 5==l||6==l||7==l}).style("fill","#333"),d3.selectAll("rect").filter(function(e,l){return 8==l||9==l||10==l}).style("fill","#bbb"),d3.selectAll("rect").filter(function(e,l){return 11==l||12==l||13==l}).style("fill","#666"),d3.selectAll("rect").filter(function(e,l){return 14==l}).style("fill","#ddd")}function n(e,l,t){for(var r=0;r<b.length;r++)if(b[r].group==t)var n=b[r].no_internet,a=b[r].cell_no_internet+b[r].cell_no,o=(b[r].dialup,b[r].cable,b[r].dsl,b[r].satellite,b[r].cellular,b[r].wifi,b[r].unsure,b[r].computer_no_internet+b[r].computer_internet),i=b[r].tablet_internet+b[r].tablet_no_internet,u=b[r].cell_internet+b[r].cell_no_internet,s=(b[r].gaming_internet,b[r].gaming_no_internet,b[r].less_highschool,b[r].highschool),c=b[r].associates_some,f=b[r].bachelors,v=b[r].graduate,d=b[r].i_10k_24k+b[r].i_less_10k,h=b[r].i_25k_50k,p=b[r].i_50k_75k+b[r].i_75k_100k,m=b[r].i_100k_150k+b[r].i_150k_200k+b[r].i_more_200k,_=b[r].native,y=b[r].asian,g=b[r].black,w=b[r].white,k=(b[r].y_18_24,b[r].y_25_34,b[r].y_35_44,b[r].y_45_54,b[r].y_55_64),$=b[r].y_65_74+b[r].y_75_older;return"Overall"==t?[{key:"Citywide Percentage",values:[{label:"No Home Internet",value:n},{label:"No Mobile Internet",value:a},{label:"Own Computer",value:o},{label:"Own Tablet",value:i},{label:"Own Cellphone",value:u},{label:"High School/Less",value:s},{label:"Some/Associates",value:c},{label:"Bachelor's or More",value:f+v},{label:"$0-$24k",value:d},{label:"$25k-$49k",value:h},{label:"$50k+",value:p+m},{label:"Other Race",value:y+_},{label:"Black",value:g},{label:"White",value:w},{label:"Age 55+",value:k+$}]}]:[{key:"Citywide Percentage",values:[{label:"No Home Internet",value:.09},{label:"No Mobile Internet",value:.21},{label:"Own Computer",value:.88},{label:"Own Tablet",value:.56},{label:"Own Cellphone",value:.91},{label:"High School/Less",value:.04},{label:"Some/Associates",value:.19},{label:"Bachelor's or More",value:.61},{label:"$0-$24k",value:.28},{label:"$25k-$49k",value:.22},{label:"$50k+",value:.5},{label:"Other Race",value:.07},{label:"Black",value:.17},{label:"White",value:.75},{label:"Age 55+",value:.2}]},{key:"Region Percentage",values:[{label:"No Home Internet",value:n},{label:"No Mobile Internet",value:a},{label:"Own Computer",value:o},{label:"Own Tablet",value:i},{label:"Own Cellphone",value:u},{label:"High School/Less",value:s},{label:"Some/Associates",value:c},{label:"Bachelor's or More",value:f+v},{label:"$0-$24k",value:d},{label:"$25k-$49k",value:h},{label:"$50k+",value:p+m},{label:"Other Race",value:y+_},{label:"Black",value:g},{label:"White",value:w},{label:"Age 55+",value:k+$}]}]}function a(e){return{weight:2,opacity:1,color:"#333",fillOpacity:1,fillColor:o(e.properties.GrpName)}}function o(e){for(var l=0;l<b.length;l++)if(e==b[l].group){if(b[l].no_internet>=.2)return"#9C0004";if(b[l].no_internet>=.15)return"#C22A22";if(b[l].no_internet>=.1)return"#F2614C";if(b[l].no_internet>=.5)return"#F28670";if(b[l].no_internet>0)return"#F2AC93";if(0==b[l].no_internet)return"#F2D2A4"}}function i(e,l){l.on({mousemove:u,mouseout:s,click:c})}function u(e){var l=e.target;w.setLatLng(e.latlng);for(var t=0;t<b.length;t++){if(l.feature.properties.GrpName==b[t].group){var r='<div class="num" style="color:'+o(l.feature.properties.GrpName)+';">'+d3.format("%")(b[t].no_internet)+" without home Internet</div>";break}r=""}w.setContent('<div class="marker-title">'+l.feature.properties.GrpName+"</div>"+r),w._map||w.openOn(y),window.clearTimeout(g),l.setStyle({color:"#fff"}),L.Browser.ie||L.Browser.opera||l.bringToFront()}function s(e){e.target.setStyle({color:"#333"}),g=window.setTimeout(function(){y.closePopup()},100)}function c(e){var l=e.target;y.fitBounds(l.getBounds()),$("#nbName").html(l.feature.properties.GrpName),r(d,"#chart","tech",b,l.feature.properties.GrpName,0)}var f=l.surveyIsolate,v=t.surveyIsolate2012,b=f;$(".switch").click(function(){$(".switch").removeClass("selected"),$(this).addClass("selected"),y.setView([44.974514,-93.268433],m),$("#nbName").html("Minneapolis")}),$("#y2012").click(function(){b=v,statesLayer.eachLayer(function(e){e.setStyle({fillColor:o(e.feature.properties.GrpName)})}),r(d,"#chart","tech",b,"Overall",0)}),$("#y2014").click(function(){b=f,statesLayer.eachLayer(function(e){e.setStyle({fillColor:o(e.feature.properties.GrpName)})}),r(d,"#chart","tech",b,"Overall",0)});var d=[],h=["#999","#C22A22"],p=d3.format("%");nv.addGraph(function(){d[0]=nv.models.multiBarHorizontalChart().x(function(e){return e.label}).y(function(e){return e.value}).margin({top:30,right:30,bottom:20,left:130}).showValues(!1).tooltips(!0).stacked(!1).showLegend(!0).color(h).showControls(!1),d[0].forceY([0,1]),d[0].yAxis.tickFormat(p),d3.select("#chart svg").datum(n("tech",b,"Overall")).transition().duration(500).call(d[0]),nv.utils.windowResize(d[0].update);d3.selectAll("rect").filter(function(e,l){return 0==l||1==l}).style("fill","#000"),d3.selectAll("rect").filter(function(e,l){return 2==l||3==l||4==l}).style("fill","#777"),d3.selectAll("rect").filter(function(e,l){return 5==l||6==l||7==l}).style("fill","#333"),d3.selectAll("rect").filter(function(e,l){return 8==l||9==l||10==l}).style("fill","#bbb"),d3.selectAll("rect").filter(function(e,l){return 11==l||12==l||13==l}).style("fill","#666"),d3.selectAll("rect").filter(function(e,l){return 14==l}).style("fill","#ddd");return d[0]});var m=11;m=$(window).width()<=845?10:11,$(window).on("load resize",function(){var e=$(window).width();m=e<=845?10:11,y.setView([44.974514,-93.268433],m)}),$(".zoom").click(function(){y.setView([44.974514,-93.268433],m),$("#nbName").html("Minneapolis"),r(d,"#chart","tech",f,"Overall",0)});var _=new L.LatLngBounds(new L.LatLng(39.1982,-128.1445),new L.LatLng(50.5414,-68.2031));L.mapbox.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg";var y=L.mapbox.map("map","mapbox.light",{maxZoom:17,minZoom:11,bounds:_}).setView([44.974514,-93.268433],m);y.dragging.disable(),y.touchZoom.disable(),y.doubleClickZoom.disable(),y.scrollWheelZoom.disable(),statesLayer=L.geoJson(e,{style:a,onEachFeature:i}).addTo(y);var g,w=new L.Popup({autoPan:!1})})})})},{}]},{},[1]);