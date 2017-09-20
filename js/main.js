
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
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Moniteau County',
      Animal: 'Deer'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Miller County',
      Animal: 'Deer'
    },
    {
    State: 'MISSOURI',
    Type: 'HUNTING',
    County: 'Cole County',
    Animal: 'Deer'
  },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Adair County',
      Animal: 'Deer'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'York County',
      Animal: 'Deer'
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

/* Seasons click-through */
let seasonsArray = [
    {
      name: 'Archery Season',
      date: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
      name: 'Early Youth Portion',
      date: 'Oct 28 - 29'
    },
    {
      name: 'November Portion',
      date: 'Nov 11 - 21'
    }
  ];

$('.archery-season').html(seasonsArray[0].name);
$('.sep-01-sep-14-oc').html(seasonsArray[0].date);

let count = 0;


$(".arrow-forward-material").on('click', function(){
    count += 1;

    for (var i = 0; i < count; i++) {
      for (let j = 0; j < seasonsArray.length; j++) {
      $('.archery-season').html(seasonsArray[i].name);
      $('.sep-01-sep-14-oc').html(seasonsArray[i].date);

      }
    }
});


$(".arrow-back-material").on('click', function(){
    count -= 1;

    for (var i = 0; i < count; i++) {
      for (let j = 0; j < seasonsArray.length; j++) {
      $('.archery-season').html(seasonsArray[i].name);
      $('.sep-01-sep-14-oc').html(seasonsArray[i].date);
      }
    }
});




});
