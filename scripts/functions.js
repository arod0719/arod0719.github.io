var imageHover = function () {
     var $this = $(this);
     var newSource = $this.data('wiggle');
     $this.data('wiggle', $this.attr('src'));
     $this.attr('src', newSource);
 }

 var imageClick = function () {
     var $this = $(this);
     var newSource = $this.data('open');
     $this.data('open', $this.attr('src'));
     $this.attr('src', newSource);
 }

 var imageRevert = function () {
      var $this = $(this);
      $this.data('wiggle', 'images/wiggle.gif');
      $this.data('static', 'images/static.png');
      $this.data('open', 'images/open.gif');
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