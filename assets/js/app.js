

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function(_index) {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        
      // $element.addClass('in-view');
      console.log(window_top_position);
    var  minusHeight =  625 ; 

      for(var i = 0 ;  i < _index; i++ ){

         minusHeight =  minusHeight + 125;
      }

      allowTransition($element, minusHeight, _index );
    } else {
      // $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

function allowTransition(element, minusHeight, index){
console.log(minusHeight);
console.log(index);
var _scale =   2 - (($(window).scrollTop() - minusHeight)) *  .003 ;
 if(_scale < 1 ){
  _scale = 1
 }else{
  _scale = _scale;
 }

var _translate =  1 - ($(window).scrollTop() - minusHeight) * .0001 ;

if(_translate < 0) {
  _translate = 0 ; 
}else{
  _translate = _translate;
}

var _opacity =   ($(window).scrollTop() - minusHeight) * .001;

console.log(_scale);
if( _scale !== 1 ){

  element.css({ transform: "scale(" + _scale + ") translateY(" + _translate + "px )" ,   opacity: _opacity})
}else{
  element.css({ transform: "scale(1) translateY(0)" ,   opacity: 1})
}



}