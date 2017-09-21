'use strict';

$ (document).ready (() => {
  const moreInfo = $ ('#more-info-modal').html ();
  const modalTemplate = Handlebars.compile (moreInfo);

  const dummyData = {
    Search: [
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'Knox County',
        Animal: 'Deer',

        Count: 0,
      },
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'Moniteau County',
        Animal: 'Deer',
        Count: 0,
      },
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'Miller County',
        Animal: 'Deer',
        Count: 0,
      },
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'Cole County',
        Animal: 'Deer',
        Count: 0,
      },
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'Adair County',
        Animal: 'Deer',
        Count: 0,
      },
      {
        State: 'MISSOURI',
        Type: 'HUNTING',
        County: 'York County',
        Animal: 'Deer',
        Count: 0,
      },
    ],
  };

  const context = modalTemplate (dummyData);
  $ ('#info-modal').html (context);
  $ ('#info-modal').css ('visibility', 'visible');

  /* Click event to change the border color */
  $ ('.mask').click (function () {
    if ($ ('.mask_active').length) {
      $ ('.mask_active')
        .not ($ (this))
        .removeClass ('mask_active')
        .addClass ('mask');
    }
    $ (this).removeClass ('mask').addClass ('mask_active');
  });

  /* dropdown menu */
  $ ('.dropdown-toggle').click (function () {
    $ (this).next ('.dropdown').toggle ();
  });

  /* Seasons click-through */
  let seasonsArray = [
    {
      name: 'Archery Season',
      date: 'Sep 01 - Sep 14 | Oct 02 - Nov 16',
    },
    {
      name: 'Early Youth Portion',
      date: 'Oct 28 - 29',
    },
    {
      name: 'November Portion',
      date: 'Nov 11 - 21',
    },
  ];

  $ ('.archery-season').html (seasonsArray[0].name);
  $ ('.sep-01-sep-14-oc').html (seasonsArray[0].date);



/* This is the arrow forward function */

  $ ('.arrow-forward-material').on ('click', function (event) {

    const id = event.target.id;
    const card = event.target.parentElement.parentElement;
    const theSeason = $ (card).find ('.archery-season')[0];
    const theDate = $ (card).find ('.sep-01-sep-14-oc')[0];
    const newCount = ++dummyData.Search[id].Count;

    const arrowForward = $(card).find('.arrow-forward-material')[0];
    const arrowBack = $(card).find('.arrow-back-material')[0];

    const ovalZero = $(card).find('#oval-0')[0];
    const ovalOne = $(card).find('#oval-1')[0];
    const ovalTwo = $(card).find('#oval-2')[0];


  // const theOval = $(card).find('.the-oval')[0];
    // const updateOval = dummyData.Search[id]

    // console.log(updateOval)
    // console.log(card)

    // console.log(event.target)

// the season is the card that you are on
// change the html of the card that you are on to represent the new count
  $(theSeason).html (seasonsArray[newCount].name);





      console.log(`The forward count is ${newCount}`)

      $ (theSeason).html (seasonsArray[newCount].name);
      $ (theDate).html (seasonsArray[newCount].date);




      if (newCount === 0) {
        $(arrowForward).removeClass('disabled')

        // $('.arrow-forward-material').removeClass('disabled')
      }

      if (newCount === 1) {
        $(ovalZero).removeClass('oval-white').addClass('oval-grey');
        $(ovalOne).removeClass('oval-grey').addClass('oval-white');
        $(arrowForward).removeClass('disabled')
        $(card).$('.arrow-back-material').removeClass('disabled')
        //
        // $('#oval-0').removeClass('oval-white').addClass('oval-grey');
        // $('#oval-1').removeClass('oval-grey').addClass('oval-white');
        // $('.arrow-forward-material').removeClass('disabled')
        // $('.arrow-back-material').removeClass('disabled')
      }

      if (newCount === 2) {
        // $('#oval-1').removeClass('oval-white').addClass('oval-grey');
        // $('#oval-2').removeClass('oval-grey').addClass('oval-white');
        // $('.arrow-back-material').removeClass('disabled')
        $(ovalOne).removeClass('oval-white').addClass('oval-grey');
        $(ovalTwo).removeClass('oval-grey').addClass('oval-white');
        $(arrowBack).removeClass('disabled')
      }

      if (newCount === 2) {
        $(arrowForward).addClass('disabled')
        // $('.arrow-forward-material').addClass('disabled')
       }

});


  $ ('.arrow-back-material').on ('click', function (event) {
    // console.log (event.target);
    const theId = event.target.id;

    const card = event.target.parentElement.parentElement;

    const theSeason = $(card).find('.archery-season')[0];
    const theDate = $(card).find('.sep-01-sep-14-oc')[0];

    let theNewCount = --dummyData.Search[theId].Count;

    const arrowForward = $(card).find('.arrow-forward-material')[0];
    const arrowBack = $(card).find('.arrow-back-material')[0];

    const ovalZero = $(card).find('#oval-0')[0];
    const ovalOne = $(card).find('#oval-1')[0];
    const ovalTwo = $(card).find('#oval-2')[0];


    // const theMaxCount = 1
    // const theMinCount = 0

    if (theNewCount > 1 ) { theNewCount = theMaxCount }
    if (theNewCount < 0 ) { theNewCount = theMinCount }

    console.log(`The backward count is ${theNewCount}`)

    if (theNewCount === 0) {
      // $('#oval-0').removeClass('oval-grey').addClass('oval-white');
      // $('#oval-1').removeClass('oval-white').addClass('oval-grey');
      // $('.arrow-forward-material').removeClass('disabled')
      // $('.arrow-back-material').addClass('disabled')
      $(ovalZero).removeClass('oval-grey').addClass('oval-white');
      $(ovalOne).removeClass('oval-white').addClass('oval-grey');
      $(arrowForward).removeClass('disabled')
      $(arrowBack).addClass('disabled')

    }

    if (theNewCount == 1) {
      $(ovalZero).removeClass('oval-white').addClass('oval-grey');
      $(ovalOne).removeClass('oval-grey').addClass('oval-white');
      $(ovalTwo).removeClass('oval-white').addClass('oval-grey');
      $(arrowForward).removeClass('disabled')
      $(arrowBack).removeClass('disabled')
    }

    $ (theSeason).html (seasonsArray[theNewCount].name);
    $ (theDate).html (seasonsArray[theNewCount].date);

  });
});
