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


const context = modalTemplate(dummyData);
$('#info-modal').html(context);
$('#info-modal').css('visibility', 'visible');


// closing brackets
});
