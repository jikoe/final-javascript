function upDate(previewPic){
    console.log("Hover ever trigger");
    console.log("Image alt:", previewPic.alt);
    console.log("Image src:", previewPic.src);
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

}
function undo(){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
function addTabFocus() {
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
    console.log("Tabindex added to all images.");
}

// Event listener for window load
window.addEventListener('load', function() {
    console.log("Page has loaded.");
    addTabFocus();
});