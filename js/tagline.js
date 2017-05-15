var time = new Date().getMinutes();
var index = Math.floor(time/10);
var json = {
    0:"Mostly notes to my future self.",
    1:"A clever arrangement of pixels.",
    2:"Coding blog for the masses.",
    3:"Here there be unicorns.",
    4:"We've got the semicolon you forgot.",
    5:"Instructions for coding like I do.",
    6:"That's all she wrote.",
    7:"Seriously. That's as clever as I get.",
    8:"Okay maybe one more.",
    9:"Stop clicking me, it tickles."
};
function getTagline(json, index) {
    $('#tagline').html(json[index]);
}
$(document).ready(function() {
    getTagline(json, index);
    $('#tagline').on('click', function(){
        if (index == 9) {index = -1;}
        getTagline(json, index+=1);
    })
})