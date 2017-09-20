
'use strict';

$(document).ready(() => {

const moreInfo = $('#more-info-modal').html();
const modalTemplate = Handlebars.compile(moreInfo);

const dummyData = {
  Search: [
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Knox County',
      Animal: 'Deer'
      // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
      // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Moniteau County',
      Animal: 'Deer'
      // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
      // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16' },
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Miller County',
      Animal: 'Deer'
      // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
      // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
    State: 'MISSOURI',
    Type: 'HUNTING',
    County: 'Cole County',
    Animal: 'Deer'
    // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
    // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
  },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Adair County',
      Animal: 'Deer'
      // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
      // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'York County',
      Animal: 'Deer'
      // Season: ['Archery Season', 'Early Youth Portion', 'November Portion'],
      // Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    }
  ],

};


const context = modalTemplate(dummyData);
$('#info-modal').html(context);
$('#info-modal').css('visibility', 'visible');


/* Click event to change the border color */
  $('.mask').click(function() {
    if($('.mask_active').length) {
      $('.mask_active').not($(this)).removeClass('mask_active').addClass('mask');
    }
    $(this).removeClass('mask').addClass('mask_active');
  })

/* dropdown menu */
$('.dropdown-toggle').click(function() {
  $(this).next('.dropdown').toggle();
});


let seasonsArray = ['Archery Season', 'Early Youth Portion', 'November Portion'];
// let index = 1;
// let seasonsH1 = $('.archery-season');

$('.archery-season').html(seasonsArray[0]);
// $('.archery-season').css('visibility', 'visible');
// $('.archery-season').css('font-color', '#0DFF8B');

let count = 0;


$(".arrow-forward-material").on('click', function(){
    count += 1;
    // console.log(count);
    let index = seasonsArray[0]

    for (var i = 0; i < count; i++) {
      for (let j = 0; j < seasonsArray.length; j++) {
      $('.archery-season').html(seasonsArray[i]);
      }
    }
});


$(".arrow-back-material").on('click', function(){
  // let reverseArray = seasonsArray.reverse()
    count -= 1;
    // console.log(count);
    let index = seasonsArray[0]

    for (var i = 0; i < count; i++) {
      for (let j = 0; j < seasonsArray.length; j++) {
      $('.archery-season').html(seasonsArray[i]);
      }
    }
});




});
