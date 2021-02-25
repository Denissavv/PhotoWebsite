AOS.init({
  duration: 1200,
})

function shuffle( array ) {
  for(var j, x, i = array.length;
    i;
    j = parseInt(Math.random() * i),
    x = array[--i],
    array[i] = array[j],
    array[j] = x
  );
}

function getRandom(min, max) {
  var arr = Array.from(Array(max - min + 1).keys(), x => x + min);
  shuffle(arr);

  return arr;
}

var a = getRandom(1,74);




let postAnImage1 = "portraits/portraits/" + a[0] + ".jpg"
document.querySelectorAll("img")[0].setAttribute("src", postAnImage1);


let postAnImage2 = "portraits/portraits/" + a[1] + ".jpg"
document.querySelectorAll("img")[1].setAttribute("src", postAnImage2);


let postAnImage3 = "portraits/portraits/" + a[2] + ".jpg"
document.querySelectorAll("img")[2].setAttribute("src", postAnImage3);

let postAnImage4 = "portraits/portraits/" + a[3] + ".jpg"
document.querySelectorAll("img")[3].setAttribute("src", postAnImage4);


let postAnImage5 = "portraits/portraits/" + a[4] + ".jpg"
document.querySelectorAll("img")[4].setAttribute("src", postAnImage5);


let postAnImage6 = "portraits/portraits/" + a[5] + ".jpg"
document.querySelectorAll("img")[5].setAttribute("src", postAnImage6);

let postAnImage7 = "portraits/portraits/" + a[6] + ".jpg"
document.querySelectorAll("img")[6].setAttribute("src", postAnImage7);

let postAnImage8 = "portraits/portraits/" + a[7] + ".jpg"
document.querySelectorAll("img")[7].setAttribute("src", postAnImage8);


let postAnImage9 = "portraits/portraits/" + a[8] + ".jpg"
document.querySelectorAll("img")[8].setAttribute("src", postAnImage9);


let postAnImage10 = "portraits/portraits/" + a[9] + ".jpg"
document.querySelectorAll("img")[9].setAttribute("src", postAnImage10);



let postAnImage11 = "portraits/portraits/" + a[10] + ".jpg"
document.querySelectorAll("img")[10].setAttribute("src", postAnImage11);



let postAnImage12 = "portraits/portraits/" + a[11] + ".jpg"
document.querySelectorAll("img")[11].setAttribute("src", postAnImage12);



let postAnImage13 = "portraits/portraits/" + a[12] + ".jpg"
document.querySelectorAll("img")[12].setAttribute("src", postAnImage13);



let postAnImage14 = "portraits/portraits/" + a[13] + ".jpg"
document.querySelectorAll("img")[13].setAttribute("src", postAnImage14);



let postAnImage15 = "portraits/portraits/" + a[14] + ".jpg"
document.querySelectorAll("img")[14].setAttribute("src", postAnImage15);


let postAnImage16 = "portraits/portraits/" + a[15] + ".jpg"
document.querySelectorAll("img")[15].setAttribute("src", postAnImage16);


let postAnImage17 = "portraits/portraits/" + a[16] + ".jpg"
document.querySelectorAll("img")[16].setAttribute("src", postAnImage17);


let postAnImage18 = "portraits/portraits/" + a[17] + ".jpg"
document.querySelectorAll("img")[17].setAttribute("src", postAnImage18);


let postAnImage19 = "portraits/portraits/" + a[18] + ".jpg"
document.querySelectorAll("img")[18].setAttribute("src", postAnImage19);

let postAnImage20 = "portraits/portraits/" + a[19] + ".jpg"
document.querySelectorAll("img")[19].setAttribute("src", postAnImage20);

let postAnImage21 = "portraits/portraits/" + a[20] + ".jpg"
document.querySelectorAll("img")[20].setAttribute("src", postAnImage21);

let postAnImage22 = "portraits/portraits/" + a[21] + ".jpg"
document.querySelectorAll("img")[21].setAttribute("src", postAnImage22);

let postAnImage23 = "portraits/portraits/" + a[22] + ".jpg"
document.querySelectorAll("img")[22].setAttribute("src", postAnImage23);

let postAnImage24 = "portraits/portraits/" + a[23] + ".jpg"
document.querySelectorAll("img")[23].setAttribute("src", postAnImage24);

let postAnImage25 = "portraits/portraits/" + a[24] + ".jpg"
document.querySelectorAll("img")[24].setAttribute("src", postAnImage25);

let postAnImage26 = "portraits/portraits/" + a[25] + ".jpg"
document.querySelectorAll("img")[25].setAttribute("src", postAnImage26);
