//自定义轮播，img为存有图片地址的数组
function insertCarousel(img) {
  html =
    '<div id="Carousel" class="carousel slide" data-ride="carousel"><ul class="carousel-indicators">';

  for (i = 0; i < img.length; i++) {
    if (i > 0) {
      html += '<li data-target="#Carousel" data-slide-to="' + i + '"></li>';
    } else {
      html += '<li data-target="#Carousel" data-slide-to="0" class="active"></li>';
    }
  }
  html += '</ul><div class="carousel-inner">';
  for (i = 0; i < img.length; i++) {
    if (i > 0) {
      html += '<div class="carousel-item">';
    } else {
      html += '<div class="carousel-item active">';
    }
    html += '<img style="height:100%;width:100%" src="' + img[i] + '"></div>';
  }
  html +=
    '</div><a class="carousel-control-prev" href="#Carousel" data-slide="prev"><span class="carousel-control-prev-icon"></span></a><a class="carousel-control-next" href="#Carousel" data-slide="next"><span class="carousel-control-next-icon"></span></a></div>';
  return html;
}

function insertPhoto(number) {
  html = '<div class="col-lg-4 col-sm-4 col-md-6">'
  for (var i = 1; i < number; i++) {
    html += '<div><div class="portfolio-box zoom-effect">';
    html += '<a href="images/' + i + '.jpg" data-lightbox="example-set"><img src="images/' + i + '-thumb.jpg" class="img-responsive" alt="">';
    html += '<div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-social"><ul class="list-inline"><li><i class="fa fa-search">'
    html += '图片'
    html += '</i></li></ul></div></div></div></a></div></div>'
    if ((i>=number/3-1&&i<number/3)||(i>=2*number/3-1&&i<2*number/3)) {
      html+='</div><div class="col-lg-4 col-sm-4 col-md-6">'
    }
  }
  html+='</div>'
  return html;
}
