//<![CDATA[
imgr=new Array();imgr[0]="http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png";showRandomImg=true;aBold=true;summaryPost=400;summaryTitle=20;numposts1=12;numposts2=4;function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}
  function showrecentposts1(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();if(numposts2<=json.feed.entry.length){maxpost=numposts2}else{maxpost=json.feed.entry.length}for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;pcm='<a href="'+posturl+'">'+pcm+' comments</a>';var trtd='<div class="col_maskolis"><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><a href="'+posturl+'"><img class="related_img" src="'+img[i]+'"/></a><div class="clear"></div></div>';document.write(trtd);j++}}var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='http://2.bp.blogspot.com/-ex3V86fj4dQ/UrCQQa4cLsI/AAAAAAAAFdA/j2FCTmGOrog/s1600/no-thumbnail.png'}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<h2>'+relatedpoststitle+'</h2>');document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;margin:0 4px 10px 0;float:left;');if(i!=0)document.write('"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img class="related_img" src="'+thumburl[r]+'"/><br/><div id="related-title">'+relatedTitles[r]+'</div></a>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
//]]>

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 I;6 i;6 f;6 n;1f();C 1g(15){6 5=\'\';J=K(N/2);4(J==N-J){N=J*2+1}A=f-J;4(A<1)A=1;d=K(15/j)+1;4(d-1==15/j)d=d-1;D=A+N-1;4(D>d)D=d;5+="<3 7=\'1y\'>1z "+f+\' 1A \'+d+"</3>";6 16=K(f)-1;4(f>1){4(f==2){4(i=="o"){5+=\'<3 7="1B"><a 9="\'+B+\'">\'+O+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">\'+O+\'</a></3>\'}}b{4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+16+\');w x">\'+O+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+16+\');w x">\'+O+\'</a></3>\'}}}4(A>1){4(i=="o"){5+=\'<3 7="g"><a 9="\'+B+\'">1</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">1</a></3>\'}}4(A>2){5+=\' ... \'}1h(6 l=A;l<=D;l++){4(f==l){5+=\'<3 7="1C">\'+l+\'</3>\'}b 4(l==1){4(i=="o"){5+=\'<3 7="g"><a 9="\'+B+\'">1</a></3>\'}b{5+=\'<3 7="g"><a 9="/r/s/\'+n+\'?&c-k=\'+j+\'">1</a></3>\'}}b{4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+l+\');w x">\'+l+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+l+\');w x">\'+l+\'</a></3>\'}}}4(D<d-1){5+=\'...\'}4(D<d){4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+d+\');w x">\'+d+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+d+\');w x">\'+d+\'</a></3>\'}}6 17=K(f)+1;4(f<d){4(i=="o"){5+=\'<3 7="g"><a 9="#" v="L(\'+17+\');w x">\'+1i+\'</a></3>\'}b{5+=\'<3 7="g"><a 9="#" v="M(\'+17+\');w x">\'+1i+\'</a></3>\'}}6 E=y.1D("E");6 18=y.1E("1F-1G");1h(6 p=0;p<E.P;p++){E[p].1j=5}4(E&&E.P>0){5=\'\'}4(18){18.1j=5}}C 1a(Q){6 R=Q.R;6 1k=K(R.1H$1I.$t,10);1g(1k)}C 1f(){6 h=u;4(h.e("/r/s/")!=-1){4(h.e("?S-c")!=-1){n=h.F(h.e("/r/s/")+14,h.e("?S-c"))}b{n=h.F(h.e("/r/s/")+14,h.e("?&c"))}}4(h.e("?q=")==-1&&h.e(".5")==-1){4(h.e("/r/s/")==-1){i="o";4(u.e("#G=")!=-1){f=u.F(u.e("#G=")+8,u.P)}b{f=1}y.1l("<m T=\\""+B+"U/V/W?c-k=1&X=Y-Z-m&11=1a\\"><\\/m>")}b{i="s";4(h.e("&c-k=")==-1){j=1J}4(u.e("#G=")!=-1){f=u.F(u.e("#G=")+8,u.P)}b{f=1}y.1l(\'<m T="\'+B+\'U/V/W/-/\'+n+\'?X=Y-Z-m&11=1a&c-k=1" ><\\/m>\')}}}C L(H){12=(H-1)*j;I=H;6 13=y.1m(\'1n\')[0];6 z=y.1o(\'m\');z.1p=\'1q/1r\';z.1s("T",B+"U/V/W?1t-1u="+12+"&c-k=1&X=Y-Z-m&11=1b");13.1v(z)}C M(H){12=(H-1)*j;I=H;6 13=y.1m(\'1n\')[0];6 z=y.1o(\'m\');z.1p=\'1q/1r\';z.1s("T",B+"U/V/W/-/"+n+"?1t-1u="+12+"&c-k=1&X=Y-Z-m&11=1b");13.1v(z)}C 1b(Q){1c=Q.R.1K[0];6 1w=1c.1x.$t.F(0,19)+1c.1x.$t.F(1L,1M);6 1d=1N(1w);4(i=="o"){6 1e="/r?S-c="+1d+"&c-k="+j+"#G="+I}b{6 1e="/r/s/"+n+"?S-c="+1d+"&c-k="+j+"#G="+I}1O.9=1e}',62,113,'|||span|if|html|var|class||href||else|max|maksimal|indexOf|nomerhal|showpageNum|thisUrl|jenis|postperpage|results|jj|script|lblname1|page|||search|label||urlactivepage|onclick|return|false|document|newInclude|mulai|home_page|function|akhir|pageArea|substring|PageNo|numberpage|nopage|nomerkiri|parseInt|redirectpage|redirectlabel|numshowpage|upPageWord|length|root|feed|updated|src|feeds|posts|summary|alt|json|in||callback|jsonstart|nBody||banyakdata|prevnomer|nextnomer|blogPager||hitungtotaldata|finddatepost|post|timestamp|alamat|halamanblogger|loophalaman|for|downPageWord|innerHTML|totaldata|write|getElementsByTagName|head|createElement|type|text|javascript|setAttribute|start|index|appendChild|timestamp1|published|showpageOf|Page|of|showpage|showpagePoint|getElementsByName|getElementById|blog|pager|openSearch|totalResults|20|entry|23|29|encodeURIComponent|location'.split('|'),0,{}))
