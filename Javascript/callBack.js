function downloadAvartar(url, onSave){

    // download xong thì callack lại hàm onSave

    console.log(url);
    onSave();
}


var updateAvartar = function(){
    console.log("Done update avartar !!!");
}


downloadAvartar("http://sis.hust.edu.vn", updateAvartar);

downloadAvartar("http://sis.hust.edu.vn", function(){
    console.log("Đã chạy thử của viết trực tiếp hàm trong tham số ");
});

