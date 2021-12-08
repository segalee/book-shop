'use strict';
const DEFAULT_LANG = 'en';
var gCurrLang = DEFAULT_LANG;
var gTrans = {
    UNKNOWN: {
        en: 'UNKNOWN',
        he: 'לא הוגדר',
    },
    title: {
        en: 'Welcome to my bookshop',
        he: 'ברוכים הבאים לחנות הספרים שלי',
    },
    'create-new-btn': {
        en: 'Create new book',
        he: 'צור ספר חדש',
    },
    'create-btn': {
        en: 'Create',
        he: 'צור',
    },
    'create-price-placeholder': {
        en: 'Price ($)',
        he: 'מחיר (₪)',
    },
    'create-title-placeholder': {
        en: 'Book Title',
        he: 'שם הספר',
    },
    'th-actions': {
        en: 'Actions',
        he: 'פעולות',
    },
    'th-price': {
        en: 'Price',
        he: 'מחיר',
    },
    'th-title': {
        en: 'Title',
        he: 'שם הספר',
    },
    'th-id': {
        en: 'Id',
        he: 'מקט',
    },
    'update-price-lable': {
        en: 'Price ($)',
        he: 'מחיר',
    },
    'update-title-lable': {
        en: 'Book Title',
        he: 'שם הספר',
    },
    'update-price-placeholder': {
        en: 'Price ($)',
        he: 'מחיר (₪)',
    },
    'update-title-placeholder': {
        en: 'Book Title',
        he: 'שם הספר',
    },
    'delete-btn': {
        en: 'Delete',
        he: 'מחק',
    },
    'update-btn': {
        en: 'Update',
        he: 'שינוי',
    },
    'read-btn': {
        en: 'Read',
        he: 'קרא עוד...',
    },
    'submit-update-btn': {
        en: 'Update book details',
        he: 'עדכן פרטים',
    },
    'cancel-update-btn': {
        en: 'Cancel',
        he: 'ביטול',
    },
    'sort-title': {
        en: 'Title',
        he: 'שם הספר',
    },
    'sort-by': {
        en: 'Sort By',
        he: 'מיין לפי',
    },
    'sort-price': {
        en: 'Price',
        he: 'מחיר',
    },
    'sort-id': {
        en: 'Id',
        he: 'מקט',
    },
};

function getTrans(transKey) {
    // if key is unknown return 'UNKNOWN'
    // get from gTrans
    const tranLangsMap = gTrans[transKey];
    console.log('gTrans:', gTrans);

    console.log('transKey:', transKey);

    console.log('tranLangsMap:', tranLangsMap);

    if (!tranLangsMap) return gTrans['UNKNOWN'][gCurrLang];
    const word = tranLangsMap[gCurrLang];
    //If translation not found - use english
    console.log(word);
    if (!word) return tranLangsMap[DEFAULT_LANG];
    return word;
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    // get the data-trans and use getTrans to replace the innerText
    els.forEach((el) => {
        const transKey = el.dataset.trans;
        console.log('el:', el);

        if (el.nodeName === 'INPUT') {
            // for placeholders
            el.placeholder = getTrans(transKey);
            console.log('getTrans(transKey):', getTrans(transKey));
        } else {
            el.innerText = getTrans(transKey);
            console.log('getTrans(transKey):', getTrans(transKey));
        }
    });
}

function setLang(lang) {
    gCurrLang = lang;
}