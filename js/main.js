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

  $ ('.arrow-forward-material').on ('click', function (event) {
    const id = event.target.id;
    const card = event.target.parentElement.parentElement;
    const theSeason = $ (card).find ('.archery-season')[0];
    const theDate = $ (card).find ('.sep-01-sep-14-oc')[0];
    const newCount = ++dummyData.Search[id].Count;
    // console.log(newCount)

    $ (theSeason).html (seasonsArray[newCount].name);
    $ (theDate).html (seasonsArray[newCount].date);

    if (newCount === 1) {
      $('#oval-1').removeClass('oval-white').addClass('oval-grey');
      $('#oval-2').removeClass('oval-grey').addClass('oval-white');
    }

    if (newCount === 2) {
      $('#oval-2').removeClass('oval-white').addClass('oval-grey');
      $('#oval-3').removeClass('oval-grey').addClass('oval-white');
    }
});






  $ ('.arrow-back-material').on ('click', function (event) {
    // console.log (event.target);
    const theId = event.target.id;

    const card = event.target.parentElement.parentElement;

    const theSeason = $ (card).find ('.archery-season')[0];
    const theDate = $ (card).find ('.sep-01-sep-14-oc')[0];

    const theNewCount = --dummyData.Search[theId].Count;
    console.log(theNewCount)

    if (theNewCount === 0) {
      $('#oval-1').removeClass('oval-grey').addClass('oval-white');
      $('#oval-2').removeClass('oval-white').addClass('oval-grey');
    }

    if (theNewCount == 1) {
      $('#oval-1').removeClass('oval-white').addClass('oval-grey');
      $('#oval-2').removeClass('oval-grey').addClass('oval-white');
      $('#oval-3').removeClass('oval-white').addClass('oval-grey');
    }
    //
    // if (theNewCount === 2) {
    //   $('#oval-2').removeClass('oval-white').addClass('oval-grey');
    //   $('#oval-3').removeClass('oval-grey').addClass('oval-white');
    // }

    $ (theSeason).html (seasonsArray[theNewCount].name);
    $ (theDate).html (seasonsArray[theNewCount].date);

  });
});
