var referer = document.referrer;

                    let gracias_mx = referer.includes("/mx/");
                    let gracias_co = referer.includes("/co/");
                    
                    if(gracias_mx == true){
                        console.log("Desde MX");
                        // document.getElementById("redirect").value = '/gracias-contacto/?ref=mx';
                        
                        var redirect_contacto = "https://www.XXXXXX.com/gracias-contacto/?ref=mx";
                        // console.log(redirect_contacto);
                    }else{
                        // console.log("Diferente");
                    }
                    if(gracias_co == true){
                        console.log("Desde CO");
                        // document.getElementById("redirect").value = '/gracias-contacto/?ref=co';
                        var redirect_contacto = "https://www.XXXXXXX.com/gracias-contacto/?ref=co";
                        // console.log(redirect_contacto);
                    }else{
                        // console.log("Diferente");
                    }
                    
                    (function() {
                    try{
                    var f = document.createElement("iframe");
                    f.src = 'https://forms.zohopublic.com/XXXXXX/form/XXXXXXXX/formperma/lJwjNGN64_CJHX8sDuPPUHSH7GQ6UG7zMtTpJ_aUUvI?zf_rszfm=1&redirecciona='+redirect_contacto;
                    
                    f.style.border="none";
                    f.style.height="1130px";
                    f.style.width="100%";
                    f.style.transition="all 0.5s ease";
                    var d = document.getElementById("zf_div_lJwjNGN64_CJHX8sDuPPUHSH7GQ6UG7zMtTpJ_aUUvI");
                    d.appendChild(f);
                    window.addEventListener('message', function (){
                    var evntData = event.data;
                    if( evntData && evntData.constructor == String ){
                    var zf_ifrm_data = evntData.split("|");
                    if ( zf_ifrm_data.length == 2 ) {
                    var zf_perma = zf_ifrm_data[0];
                    var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                    var iframe = document.getElementById("zf_div_lJwjNGN64_CJHX8sDuPPUHSH7GQ6UG7zMtTpJ_aUUvI").getElementsByTagName("iframe")[0];
                    if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                    var prevIframeHeight = iframe.style.height;
                    if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    iframe.style.height = zf_ifrm_ht_nw;
                    }
                    }
                    }
                    }
                    }, false);
                    }catch(e){}
                    })();
