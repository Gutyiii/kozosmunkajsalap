//var nev = document.getElementById("adat").value;

function feltolt(tomb) {
    var darab = Number(document.getElementById("adat").value);
//    tomb[0]=1;
//    tomb=new Array();
    for (var i = 0; i < darab; i++) {
        var vel = Math.floor(Math.random() * 10) + 1;
        tomb[i] = vel;
    }
}


function dolgozz() {
    var tomb = [];
//    document.write("Jó reggelt " + nev);                                uj oldalra irja ki
//    alert("Jó reggelt " + nev);                                         fenti kis ablkaba írja ki
//    document.getElementById("szoveg").innerHTML = "Jó reggelt " + nev;  //p tagbe irja ki
//    console.log("Hello");                                               consolra kiiras

    feltolt(tomb);
    console.log(tomb);
    document.getElementById("eredmeny").innerHTML = "Az eredmény: <br> " + tomb.join("; ");

    osszegzes(tomb);
    otteloszthato(tomb);
    paros(tomb)
}

function otteloszthato(tomb) {
    var otteloszthatoszamok = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 5 === 0) {
            otteloszthatoszamok++;
        }
    }
    document.getElementById("otszam").innerHTML = "Az 5-el oszthato számokból van: " + otteloszthatoszamok;
}

function osszegzes(tomb) {
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    document.getElementById("osszeg").innerHTML = "Az összeg: " + osszeg;
}

window.addEventListener("load", init);

function init() {
    console.log("Első üzenet");
    document.getElementById("eredmeny").innerHTML = "Rajta vagyok";
    document.getElementById("oke").addEventListener("click", dolgozz);
}


