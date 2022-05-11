function loadScript(src){
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript("asset/index.js");

loadScript("asset/index.js", function(){
    loadScript("asset/index2.js", function(){
        loadScript("asset/index3.js", function(){
            AfterLoading();
        })
    })
})