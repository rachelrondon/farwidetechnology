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
      Animal: 'Deer',
      Count: 0
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Moniteau County',
      Animal: 'Deer',
      Count: 0
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Miller County',
      Animal: 'Deer',
      Count: 0
    },
    {
    State: 'MISSOURI',
    Type: 'HUNTING',
    County: 'Cole County',
    Animal: 'Deer',
    Count: 0
  },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Adair County',
      Animal: 'Deer',
      Count: 0
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'York County',
      Animal: 'Deer',
      Count: 0
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

// let count = 0;


$(".arrow-forward-material").on('click', function(event){
  console.log(event.target);

  const id = event.target.id;

  const card = event.target.parentElement.parentElement;
  console.log($(card).find('.archery-season'));
  console.log($(card).find('.sep-01-sep-14-oc'));

  const theSeason = $(card).find('.archery-season')[0];
  const theDate = $(card).find('.sep-01-sep-14-oc')[0];

    // count += 1;
    // dummyData.Search[id].Count += 1;
    // below = math.min(below + 1, below.length)
    const newCount = ++dummyData.Search[id].Count;

    // for (var i = 0; i < count; i++) {
      // for (let j = 0; j < seasonsArray.length; j++) {
      $(theSeason).html(seasonsArray[newCount].name);
      $(theDate).html(seasonsArray[newCount].date);

      // }
    // }
});


$(".arrow-back-material").on('click', function(){
    count -= 1;

    if ($('#mask-div').is('.mask_active')) {
      for (var i = 0; i < count; i++) {
        for (let j = 0; j < seasonsArray.length; j++) {
        $('.archery-season').html(seasonsArray[i].name);
        $('.sep-01-sep-14-oc').html(seasonsArray[i].date);
        }
      }
    }
});




// $('.mask_active').each(function() {
//   if ($('.mask_active').length > 0) {
//
//   }
// })

});



// $('.mask').focus(function() {

  //   $(".arrow-forward-material").on('click', function(){
  //       count += 1;
  //
  //       for (var i = 0; i < count; i++) {
  //         for (let j = 0; j < seasonsArray.length; j++) {
  //           $('.mask').siblings('h1.archery-season:first').html(seasonsArray[i].name);
  //           $('.mask').siblings('h1.sep-01-sep-14-oc:first').html(seasonsArray[i].date);
  //         }
  //       }
  //   });
  // // });
  //
  //
  // // $('.mask').focus(function() {
  //
  //   $(".arrow-back-material").on('click', function(){
  //       count -= 1;
  //
  //       for (var i = 0; i < count; i++) {
  //         for (let j = 0; j < seasonsArray.length; j++) {
  //           $('.mask').siblings('h1.archery-season:first').html(seasonsArray[i].name);
  //           $('.mask').siblings('h1.sep-01-sep-14-oc:first').html(seasonsArray[i].date);
  // // $('.body').find('.mask_active').siblings('.archery-season').html(seasonsArray[i].name);
  // // $('.body').find('.mask_active').siblings('.sep-01-sep-14-oc').html(seasonsArray[i].date);
  //
  //         // $('.mask').siblings('h1.archery-season:first').html(seasonsArray[i].name);
  //         // $('.mask').siblings('h1.sep-01-sep-14-oc:first').html(seasonsArray[i].date);
  //         }
  //       }
  //   });
  // });
