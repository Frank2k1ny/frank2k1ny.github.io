   var img = new Image();
   var div = document.getElementById('gif');

   img.onload = function() {
      div.appendChild(img);
   };

   var imgs = ['https://media.giphy.com/media/zdq4DT1gHlxny/giphy.gif',
               'https://media.giphy.com/media/aP6UZVDPzAlvW/giphy.gif'];
   var s = Date.now();
   s = s % imgs.length;
   img.src = imgs[s];
