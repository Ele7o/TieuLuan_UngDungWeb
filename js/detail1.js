// $(document).ready(function(){
//     let txt = "";
//     var image = document.createElement("img");
//     for(let i = 0; i <24; i++){
//         txt = i;
//         if(i<10){
//             txt = "0" + i;
//         }
//         img = image.setAttribute("src", "../images/manga" + txt + ".jpg");
//         document.getElementById("imgdiv").appendChild(img);
//     }
// });
$(document).ready(function(){
    $('#chapterSelectRun').on('change', function(){
        var url = $(this).val();
        if(url){
            window.location = url;
        }
        return false;
    });
    $('#chapterSelectRund').on('change', function(){
        var url = $(this).val();
        if(url){
            window.location = url;
        }
        return false;
    })
});