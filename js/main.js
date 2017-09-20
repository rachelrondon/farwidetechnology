
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
      Season: 'Archery Season',
      Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Moniteau County',
      Animal: 'Deer',
      Season: 'Archery Season',
      Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16' },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Miller County',
      Animal: 'Deer',
      Season: 'Archery Season',
      Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    { State: 'MISSOURI',
    Type: 'HUNTING',
    County: 'Cole County',
    Animal: 'Deer',
    Season: 'Archery Season',
    Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
  },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'Adair County',
      Animal: 'Deer',
      Season: 'Archery Season',
      Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    },
    {
      State: 'MISSOURI',
      Type: 'HUNTING',
      County: 'York County',
      Animal: 'Deer',
      Season: 'Archery Season',
      Dates: 'Sep 01 - Sep 14 | Oct 02 - Nov 16'
    }
  ]
};

const dropdownData = {
  Dropdown: [
    {
      Title: 'Area Size (Ascending)'
    },
    {
      Title: 'Area Size (Descending)'
    },
    {
      Title: 'Area Name (A to Z)'
    },
    {
      Title: 'Season (Soonest First)'
    }
  ]
};

// const moreInfo = $('#more-info-modal').html();
// const modalTemplate = Handlebars.compile(moreInfo);

// const dropdownInfo = $('#dropdown-info-modal').html();
// const modalTemplate = Handlebars.compile(dropdownInfo);

const dropdownContext = modalTemplate(dropdownData);
$('dropdown-modal').html(dropdownContext);
$('dropdown-modal').css('visibility', 'visible');


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






});
