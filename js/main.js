// Main JS
(function (window, document, $, undefined) {
  $(document).ready(function ($) {
    //On load Price
    PriceCalculator();
   
    
    // product gallery
    $('.thumb-wrapper img').each(function() {
      var $thumb =$(this)
      $thumb.click(function() {
        $thumb.parent().parent().parent().find('.product-thumbnails .thumb-wrapper').removeClass('active');
        $thumb.closest('.thumb-wrapper').addClass('active');
        $thumb.parent().parent().parent().find('.product-gallery img').attr('src',$(this).attr('src'));
      });
    });

    $('.product-color-variation span').on('click',function (e){
        e.preventDefault();
        var $link = $(this);
        $('.product-color-variation span').removeClass('active');
        $link.addClass('active');
        var $color = $link.data('color');
        var parent = $(`.product-gallery-wrapper_${$color}`);

        $('.product-thumbnails').removeClass('active');
        $('.thumb-wrapper').removeClass('active');
        $('.product-gallery-wrapper').removeClass('active');

        parent.find('.product-gallery').addClass('active');
        parent.find('.product-thumbnails').addClass('active');
        parent.addClass('active');
    });

    $('.products-swatches-variation li').on('click',function (e){
      e.preventDefault();
      var $link = $(this);
      $('.products-swatches-variation li').removeClass('active');
      $link.addClass('active');
          
  });

  //price calculator
    var $priceLinks = ['.product-color-variation span','.products-swatches-variation li']
    $priceLinks.forEach(element => 
      $(element).on('click',function (e){
        e.preventDefault();
        PriceCalculator();
      })
      );

      function PriceCalculator () {
        var $colorPrice = $('.product-color-variation span.active').data('price');
        var $sizePrice = $('.products-swatches-variation li.active').data('price');
        var $totalPrice = $colorPrice + $sizePrice;
        // $('.product-price').text($totalPrice+'€').fadeIn(500);
        $('.product-price').fadeOut(500, function() {
          $(this).text($totalPrice+'€').fadeIn(500);
      });
      }
  }); // Document ready
})(window, document, jQuery);
