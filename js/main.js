// tekstai
console.log('asfsgdghb');

// skaiciai
console.log(852545);

// boolean - logine reiksme
console.log(true);
console.log(false);

// sarasai - array
console.log( [1, 2, 3, 4, 5] );
console.log( ['a', 'b', 'c'] );
console.log( ['a', 87, 'b', 5451, 'c', [1, 2, 's']] );

// objektai - object
console.log( {name: 'Rimantas', age: 31.8} );

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');

const PI = 3.141592654;
console.log(PI);

const vardas = 'Rimantas';
console.log(vardas);

let manoAmzius = 9;
console.log(manoAmzius);

manoAmzius = 10;
console.log(manoAmzius);

const sunsVardas = 'Rexas';
console.log(sunsVardas);

let miestas = "Vilnius";
console.log(miestas);

let personazas = "Don' Ki Chotas";
console.log(personazas);

const kabutes = 'Kabuciu buna: viengubos(\') ir dvygubos(").';
console.log(kabutes);

const kabutes2 = "Kabuciu buna: viengubos(') ir dvygubos(\").";
console.log(kabutes2);

var kintamasis = 'x';
console.log(kintamasis);

const skaitmenys = [9, 1, 7];
console.log(skaitmenys);

const raides = ['', 'a', 'b', 'c'];
console.log(raides);

let arBlaivas = true;
console.log(arBlaivas);

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');

console.log(skaitmenys);

const skaitmenuSuma = skaitmenys[0] + skaitmenys[1] + skaitmenys[2];
console.log(skaitmenuSuma);

const s1 = 2;
const s2 = 15;

const suma = s1 + s2;
console.log(suma);

const skirtumas = s1 - s2;
console.log(skirtumas);

const dalmuo = s1 / s2;
console.log(dalmuo);

const sandauga = s1 * s2;
console.log(sandauga);

const vidurkis = (s1 + s2) / 2;
console.log(vidurkis);

const pirmoSaknis = Math.sqrt( s1 );
console.log(pirmoSaknis);

const maziausias = Math.min(s1, s2);
console.log(maziausias);

const didziausiais = Math.max(s1, s2);
console.log(didziausiais);

const didziausiaisSarase = Math.max(skaitmenys);
console.log(didziausiaisSarase);

const t1 = 'Labas';
const t2 = 'rytas';

const tekstas = t1 + t2;
console.log(tekstas);

const pasisveikinimas = t1 + ' ' + t2;
console.log(pasisveikinimas);

// negalimos operacijos su ne skaiciais
console.log( t1 - t2 );
console.log( t1 * t2 );
console.log( t1 / t2 );

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);

const abcIsGalo = abc[4] + ', ' + abc[3]
                        + ', ' + abc[2]
                        + ', ' + abc[1]
                        + ', ' + abc[0];
console.log(abcIsGalo);

const taiKaipTen = true + false + true + 2;
console.log(taiKaipTen);

console.log('-------------------------');
console.log('-------------------------');
console.log('-------------------------');
console.log('PALYGINIMAS');

// >, <, ===, >=, <=, !==
// s1 = 2; s2 = 15;

const s2t = '15';

if ( s2t !== s2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą');
}

const m = 0;

if ( m < 0 ) {
    console.log('Neigiamas');
} else {
    if ( m === 0 ) {
        console.log('Nei neigiamas, nei teigiamas');
    } else {
        console.log('Teigiamas');
    }
}

if ( m < 0 ) {
    console.log('Neigiamas');
}
if ( m === 0 ) {
    console.log('Nei neigiamas, nei teigiamas');
}
if ( m >0 ) {
    console.log('Teigiamas');
}

if ( m < 0 ) {
    console.log('Neigiamas');
} else if ( m === 0 ) {
    console.log('Nei neigiamas, nei teigiamas');
} else {
    console.log('Teigiamas');
}

const akys = 'melynas';

if ( akys === 'rudos' ) {
    console.log('Melagis');
} else if ( akys === 'zalios' ) {
    console.log('5%');
} else if ( akys === 'melynas') {
    console.log('Cia mano');
} else {
    console.log('A tu bent turi akis?');
}


if ( 4 > 2) {
    console.log(true);
}

if ( '4' > 2) {
    console.log(true);
}

if ( 4 > '2') {
    console.log(true);
}

if ( '2' > '4') {
    console.log(true);
} else {
    console.log(false);
}

if ( '+' > 'Z') {
    console.log(true);
} else {
    console.log(false);
}

const manoNumeris = '370612345678';

if ( '370600000000' < manoNumeris) {
    console.log(true);
} else {
    console.log(false);
} 
