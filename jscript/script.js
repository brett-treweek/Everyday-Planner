var sixam = $('#sixam');
var sevenam = $('#sevenam');
var eightam = $('#eightam');
var nineam = $('#nineam')
var tenam = $('#tenam')
var elevenam = $('#elevenam')
var twelvepm = $('#twelvepm')
var onepm = $('#onepm')
var twopm = $('#twopm')
var threepm = $('#threepm')
var fourpm = $('#fourpm')
var fivepm = $('#fivepm')
var sixpm = $('#sixpm')

var del6 = $('#x6a');
var del7 = $('#x7a');
var del8 = $('#x8a');
var del9 = $('#x9a');
var del10 = $('#x10a');
var del11 = $('#x11a');
var del12 = $('#x12p');
var del13 = $('#x1p');
var del14 = $('#x2p');
var del15 = $('#x3p');
var del16 = $('#x4p');
var del17 = $('#x5p');
var del18 = $('#x6p');


var storage6am = localStorage.getItem('6am');
var storage7am = localStorage.getItem('7am');
var storage8am = localStorage.getItem('8am');
var storage9am = localStorage.getItem('9am')
var storage10am = localStorage.getItem('10am')
var storage11am = localStorage.getItem('11am')
var storage12pm = localStorage.getItem('12pm')
var storage1pm = localStorage.getItem('1pm')
var storage2pm = localStorage.getItem('2pm')
var storage3pm = localStorage.getItem('3pm')
var storage4pm = localStorage.getItem('4pm')
var storage5pm = localStorage.getItem('5pm')
var storage6pm = localStorage.getItem('6pm')



var mainArray = [{
    time: 6,
    del: del6,
    selector: sixam,
    storage: storage6am,
    storageArray: '6am'
},

{   time: 7,
    del: del7,
    selector: sevenam,
    storage: storage7am,
    storageArray: '7am'
},

{   time: 8,
    del: del8,
    selector: eightam,
    storage: storage8am,
    storageArray: '8am'
},
{   time: 9,
    del: del9,
    selector: nineam,
    storage: storage9am,
    storageArray: '9am'
},
{   time: 10,
    del: del10,
    selector: tenam,
    storage: storage10am,
    storageArray: '10am'
},
{   time: 11,
    del: del11,
    selector: elevenam,
    storage: storage11am,
    storageArray: '11am'
},
{   time: 12,
    del: del12,
    selector: twelvepm,
    storage: storage12pm,
    storageArray: '12pm'
},
{   time: 13,
    del: del13,
    selector: onepm,
    storage: storage1pm,
    storageArray: '1pm'
},
{   time: 14,
    del: del14,
    selector: twopm,
    storage: storage2pm,
    storageArray: '2pm'
},
{   time: 15,
    del: del15,
    selector: threepm,
    storage: storage3pm,
    storageArray: '3pm'
},
{   time: 16,
    del: del16,
    selector: fourpm,
    storage: storage4pm,
    storageArray: '4pm'
},
{   time: 17,
    del: del17,
    selector: fivepm,
    storage: storage5pm,
    storageArray: '5pm'
},
{   time: 18,
    del: del18,
    selector: sixpm,
    storage: storage6pm,
    storageArray: '6pm'
}]
 
function storeValue(){
    for (let i = 0; i < mainArray.length; i++) {
        const element = mainArray[i];
        element.selector[0].value = element.storage
    }
}
storeValue()




$('.fa-save').click(function(){
    for (let i = 0; i < mainArray.length; i++) {
        const element = mainArray[i];
        const elementValue = element.selector.val()
        localStorage.setItem(element.storageArray, elementValue)
        location.reload()
    }
})

 $('.Btn').click(function(e){
    for (let i = 0; i < mainArray.length; i++) {
        const element = mainArray[i];
        const b = e.currentTarget;
        
        if (b === element.del[0])
        var c = element.storageArray;
        localStorage.removeItem(c);
        element.selector[0].value = ''
        location.reload()
    }})




console.log(localStorage)
console.log(mainArray)
localStorage.clear()

// --------------------------------------------------------------------
// Moment.js stuff
const m = moment();
var date = $('#currentDay');
var currentMoment = m.format('dddd MMMM Do');
var currentHour = m.format('H');
date.text(currentMoment);




for (let i = 0; i < mainArray.length; i++) {
    const element = mainArray[i];
    if(currentHour == element.time){
        element.selector.addClass('present')
    }  else if(currentHour > element.time){
        element.selector.addClass('past')
    } else element.selector.addClass('future')
}

