// pc service gallery
var all_ImgBox = document.getElementById("all_ImgBox");
var full_Img = document.getElementById("full_Img");
function openFull_Img(pic){
   all_ImgBox.style.display = "flex";
   full_Img.src = pic;

}
function closeFull_Img(){
   all_ImgBox.style.display = "none";
}