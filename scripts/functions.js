var imageHover = function () {
     var $this = $(this);
     var newSource = $this.data('wiggle');
     $this.data('wiggle', $this.attr('src'));
     $this.attr('src', newSource);
 }

 var imageClick = function () {
     var $this = $(this);
     if ($this.attr('src').substring(9) == 'open.gif'){
        var letters = $this.attr('src').substring(7,9);
        switch (letters){
            case 'gt':
                window.open("https://github.com/arod0719");
                break;
            case 'ln':
                window.open("https://www.linkedin.com/in/alexander-rodriguez-7278b2182/");
                break;
            case 'rs':
                 window.open('./resources/AlexRodriguezResume.pdf');
                break;
        }
     }
     else{
         var newSource = $this.data('open');
         $this.data('open', $this.attr('src'));
         $this.attr('src', newSource);
     }
 }

 var imageRevert = function () {
      var $this = $(this);
      $this.data('static', 'images/static.png');
      console.log($this.data('wiggle').substring(9));
      if ($this.data('wiggle').substring(9) == 'open.gif'){
        $this.data('open', $this.data('wiggle'));
        $this.data('wiggle', 'images/wiggle.gif');
       }
  }

$(function () {
  $('img.playgif').hover(imageHover, imageHover);
});

$(function () {
  $('img.playgif').click(imageClick, imageClick);
});

$(function () {
  $('img.playgif').mouseleave(imageRevert);
});