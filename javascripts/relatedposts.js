function removeHtmlTag(e,t){for(var r=e.split("<"),l=0;l<r.length;l++)-1!=r[l].indexOf(">")&&(r[l]=r[l].substring(r[l].indexOf(">")+1,r[l].length));return r=r.join(""),r=r.substring(0,t-1)}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts2<=e.feed.entry.length?maxpost=numposts2:maxpost=e.feed.entry.length;for(var t=0;t<maxpost;t++){var r,l,n=e.feed.entry[t],i=n.title.$t;if(t==e.feed.entry.length)break;for(var m=0;m<n.link.length;m++)if("alternate"==n.link[m].rel){l=n.link[m].href;break}for(var m=0;m<n.link.length;m++)if("replies"==n.link[m].rel&&"text/html"==n.link[m].type){r=n.link[m].title.split(" ")[0];break}if("content"in n)var o=n.content.$t;else if("summary"in n)var o=n.summary.$t;else var o="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=o,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var u=[1,2,3,4,5,6,7,8,9,10,11,12],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),f=(postdate.split("-")[0],0);f<u.length;f++)if(parseInt(g)==u[f]){g=h[f];break}r='<a href="'+l+'">'+r+" comments</a>";var p='<div class="col_maskolis"><h2 class="posttitle"><a href="'+l+'">'+i+'</a></h2><a href="'+l+'"><img class="related_img" src="'+img[t]+'"/></a><div class="clear"></div></div>';document.write(p),j++}}function related_results_labels_thumbs(e){for(var t=0;t<e.feed.entry.length;t++){var r=e.feed.entry[t];relatedTitles[relatedTitlesNum]=r.title.$t;try{thumburl[relatedTitlesNum]=r.gform_foot.url}catch(l){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d?thumburl[relatedTitlesNum]=d:thumburl[relatedTitlesNum]="http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png"}relatedTitles[relatedTitlesNum].length>35&&(relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...");for(var n=0;n<r.link.length;n++)"alternate"==r.link[n].rel&&(relatedUrls[relatedTitlesNum]=r.link[n].href,relatedTitlesNum++)}}function removeRelatedDuplicates_thumbs(){for(var e=new Array(0),t=new Array(0),r=new Array(0),l=0;l<relatedUrls.length;l++)contains_thumbs(e,relatedUrls[l])||(e.length+=1,e[e.length-1]=relatedUrls[l],t.length+=1,r.length+=1,t[t.length-1]=relatedTitles[l],r[r.length-1]=thumburl[l]);relatedTitles=t,relatedUrls=e,thumburl=r}function contains_thumbs(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function printRelatedLabels_thumbs(){for(var e=0;e<relatedUrls.length;e++)relatedUrls[e]!=currentposturl&&relatedTitles[e]||(relatedUrls.splice(e,1),relatedTitles.splice(e,1),thumburl.splice(e,1),e--);var t=Math.floor((relatedTitles.length-1)*Math.random()),e=0;for(relatedTitles.length>0&&document.write("<h2>"+relatedpoststitle+"</h2>"),document.write('<div style="clear: both;"/>');e<relatedTitles.length&&20>e&&e<maxresults;)document.write('<a style="text-decoration:none;margin:0 4px 10px 0;float:left;'),0!=e?document.write('"'):document.write('"'),document.write(' href="'+relatedUrls[t]+'"><img class="related_img" src="'+thumburl[t]+'"/><br/><div id="related-title">'+relatedTitles[t]+"</div></a>"),t<relatedTitles.length-1?t++:t=0,e++;document.write("</div>"),relatedUrls.splice(0,relatedUrls.length),thumburl.splice(0,thumburl.length),relatedTitles.splice(0,relatedTitles.length)}imgr=new Array,imgr[0]="http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png",showRandomImg=!0,aBold=!0,summaryPost=400,summaryTitle=20,numposts1=12,numposts2=4;var relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;