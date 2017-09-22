'use strict';

$ (document).ready (() => {
  const moreInfo = $ ('#more-info-modal').html ();
  const modalTemplate = Handlebars.compile (moreInfo);

  const cardData = {
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

  const context = modalTemplate (cardData);
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

  /* Dropdown menu  */
  $ ('.dropdown-toggle').click (function () {
    $ (this).next ('.dropdown').toggle ();
  });

  $ ('.dropdown-slideup').click (function () {
    $ ('.dropdown').toggle ();
  });

  /* Seasons click-through */
  let seasonsArray = [
    {
      name: 'Archery Season',
      date: 'Sep 01 - Sep 14   |   Oct 02 - Nov 16',
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
  $ ('.dates').html (seasonsArray[0].date);

  /* Arrow forward function */
  $ ('.arrow-forward-material').on ('click', function (event) {
    const id = event.target.id;
    const card = event.target.parentElement.parentElement;
    const theSeason = $ (card).find ('.archery-season')[0];
    const theDate = $ (card).find ('.dates')[0];
    const newCount = ++cardData.Search[id].Count;

    const arrowForward = $ (card).find ('.arrow-forward-material')[0];
    const arrowBack = $ (card).find ('.arrow-back-material')[0];
    const arrowEnabled = $ (card).find ('.arrow-back-enabled')[0];

    const ovalZero = $ (card).find ('#oval-0')[0];
    const ovalOne = $ (card).find ('#oval-1')[0];
    const ovalTwo = $ (card).find ('#oval-2')[0];

    $ (theSeason).html (seasonsArray[newCount].name);
    $ (theSeason).html (seasonsArray[newCount].name);
    $ (theDate).html (seasonsArray[newCount].date);

    if (newCount === 0) {
      $ (arrowForward).removeClass ('disabled');
      $ (arrowEnabled).css ('display', 'none');
    } else if (newCount === 1) {
      $ (ovalZero).removeClass ('oval-white').addClass ('oval-grey');
      $ (ovalOne).removeClass ('oval-grey').addClass ('oval-white');
      $ (arrowForward).removeClass ('disabled');
      $ (arrowEnabled).css ('display', 'block');
      $ (arrowBack).removeClass ('disabled');
      $ (arrowBack).addClass ('enabled');
      $ (arrowBack).attr ('src', './Assets/arrow_forward.svg');
    } else if (newCount === 2) {
      $ (ovalOne).removeClass ('oval-white').addClass ('oval-grey');
      $ (ovalTwo).removeClass ('oval-grey').addClass ('oval-white');
      $ (arrowBack).removeClass ('disabled');
      $ (arrowEnabled).css ('display', 'block');
      $ (arrowBack).removeClass ('disabled');
      $ (arrowBack).addClass ('enabled');
      $ (arrowBack).attr ('src', './Assets/arrow_forward.svg');
    }

    if (newCount === 2) {
      $ (arrowForward).addClass ('disabled');
    }
  });

  /* Arrrow back function */
  $ ('.arrow-back-material').on ('click', function (event) {
    const theId = event.target.id;
    const card = event.target.parentElement.parentElement;
    const theSeason = $ (card).find ('.archery-season')[0];
    const theDate = $ (card).find ('.dates')[0];
    let theNewCount = --cardData.Search[theId].Count;
    const arrowForward = $ (card).find ('.arrow-forward-material')[0];
    const arrowBack = $ (card).find ('.arrow-back-material')[0];
    const arrowEnabled = $ (card).find ('.arrow-back-enabled')[0];
    const ovalZero = $ (card).find ('#oval-0')[0];
    const ovalOne = $ (card).find ('#oval-1')[0];
    const ovalTwo = $ (card).find ('#oval-2')[0];

    if (theNewCount > 1) {
      theNewCount = theMaxCount;
    }
    if (theNewCount < 0) {
      theNewCount = theMinCount;
    }

    if (theNewCount === 0) {
      $ (ovalZero).removeClass ('oval-grey').addClass ('oval-white');
      $ (ovalOne).removeClass ('oval-white').addClass ('oval-grey');
      $ (arrowForward).removeClass ('disabled');
      $ (arrowBack).removeClass ('enabled');
      $ (arrowBack).addClass ('disabled');
      $ (arrowBack).removeAttr ('src', './Assets/arrow_forward.svg');
      $ (arrowBack).attr ('src', 'Assets/arrow_back.svg');
    } else if (theNewCount == 1) {
      $ (ovalZero).removeClass ('oval-white').addClass ('oval-grey');
      $ (ovalOne).removeClass ('oval-grey').addClass ('oval-white');
      $ (ovalTwo).removeClass ('oval-white').addClass ('oval-grey');
      $ (arrowForward).removeClass ('disabled');
      $ (arrowBack).removeClass ('disabled');
      $ (arrowBack).addClass ('enabled');
      $ (arrowBack).attr ('src', './Assets/arrow_forward.svg');
    }

    $ (theSeason).html (seasonsArray[theNewCount].name);
    $ (theDate).html (seasonsArray[theNewCount].date);
  });
});
