// var audio = document.getElementById('myAudio');
// var playLink = document.getElementById('playLink');

// var observer = new IntersectionObserver(function(entries) {
//    entries.forEach(function(entry) {
//        if (entry.isIntersecting) {
//            audio.play();
//            observer.disconnect(); // Parar de observar após a reprodução
//        }
//    });
// });

// observer.observe(playLink);

// document.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById('myAudio');
//     audio.play();
// });

document.window('load', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
});

document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
});