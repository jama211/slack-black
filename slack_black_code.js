// Put the following in C:\Users\jamiewilliamson\AppData\Local\slack\app-4.2.0\resources\[open app.asar archive with 7zip]\dist\renderer.vendor.js

// Dark Mode Code! 
document.addEventListener('DOMContentLoaded', function() {    
    fetch('https://raw.githubusercontent.com/jama211/slack-black/master/NewStylesOnly3.css')    
    .then(function(response) {
        return response.text();
    })
    .then(function(css) {
        const style = document.createElement('style'); 
        style.innerHTML = css;
        document.head.appendChild(style);
    });  
}); 