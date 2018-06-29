/* eslint-disable guard-for-in */
// //  ex. 1 ------------------------------------------------------------------------------------------------------------------------------------------------
// //  We have a plane with 3 passengers( Robert, Catalin, Paul ) and we have to print the passengers list in order ( Catalin, Paul, Robert ) using the function below.
// //  Please implement this 3 ways using: callbacks, promise and async / await.
// //  Callbacks
// let namesArray = [];

// function printString( string, callback ) {
//     setTimeout(
//         () => {
//             callback( string, namesArray );
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// }

// const returnSortedArray = array => {
//     const newArray = array.sort( ( firstElement, secondElement ) => firstElement > secondElement );
//     return newArray;
// };

// const printArray = array => {
//     if ( array.length === 3 ) {
//         console.log( returnSortedArray( namesArray ) );
//     }
// };

// const logSortedNamesArray = ( name, array ) => {
//     array.push( name );
//     printArray( array );
// };

// printString( "Cata", logSortedNamesArray );
// printString( "Robert", logSortedNamesArray );
// printString( "Paul", logSortedNamesArray );

// // Promises
// const bolName = true;

// const promise1 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( bolName ) {
//                 resolve( "Robert" );
//             } else {
//                 reject( new Error( "error" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// const promise2 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( bolName ) {
//                 resolve( "Paul" );
//             } else {
//                 reject( new Error( "a aparut o eroare" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// const promise3 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( bolName ) {
//                 resolve( "Cata" );
//             } else {
//                 reject( new Error( "error" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// Promise.all( [ promise3, promise2, promise1 ] )
//     .then( data => console.log( data ) )
//     .catch( err => console.log( `error: ${ err }` ) );

// //  Async/await
// async function asyncDisplayString() {
//     try {
//         const firstName = await ( promise3 );
//         const secondName = await ( promise2 );
//         const thirdName = await ( promise1 );
//         return `${ firstName }, ${ secondName }, ${ thirdName }`;
//     } catch ( error ) {
//         return error;
//     }
// }

// asyncDisplayString( asyncDisplayString )
//     .then( data => console.log( data ) );

// ex2 ------------------------------------------------------------------------------------------------------------------------------------------------
// We have an badly implemented api, you can only get one information at a time about a user, you have the id of the user.

// * We need to get in this order: lastName, firstName and age.
// * While we get the information about the user we what to show a spinner on the website.
// * Once we have all the information required we display it and hide the spinner.
// Implement this using in 2 ways using: Promises and Async / Await.
//  start JSON dev server: $ json-server --watch users.json
//  install JSON dev server: $ npm install -g json-server

//  promises
const firstNamePromise = ( fetch( "/api/users/1" )
    .then( data => data.json() )
    .then( data => data.firstName ) );

const lastNamePromise = ( fetch( "/api/users/1" )
    .then( data => data.json() )
    .then( data => data.lastName ) );

const agePromise = ( fetch( "/api/users/1" )
    .then( data => data.json() )
    .then( data => data.age ) );

const displayUserDetails = () => {
    console.log( "spinner hidden class removed" );
    Promise.all( [ firstNamePromise, lastNamePromise, agePromise ] )
        .then( data => {
            console.log( data );
        } )
        .catch( err => console.log( err ) )
        .finally( () => console.log( "spinner hidden class added" ) );
};

//displayUserDetails();

// Async/Await
async function asyncDisplayUserDetails() {
    console.log( "spinner hidden class removed" );
    try {
        const fetchUserAge = await fetch( "/api/users/1" );
        const jsonUserDetailsByAge = await fetchUserAge.json();
        const jsonUserDetailsAge = await jsonUserDetailsByAge.age;
        const fetchUserFirstName = await fetch( "/api/users/1" );
        const jsonUserDetailsByFirstName = await fetchUserFirstName.json();
        const jsonUserDetailsFirstName = await jsonUserDetailsByFirstName.firstName;
        const fetchUserLastName = await fetch( "/api/users/1" );
        const jsonUserDetailsByLastName = await fetchUserLastName.json();
        const jsonUserDetailsLastName = await jsonUserDetailsByLastName.lastName;
        console.log( jsonUserDetailsLastName, jsonUserDetailsFirstName, jsonUserDetailsAge );
    } catch ( err ) {
        console.log( err );
    } finally {
        console.log( "spinner hidden class added" );
    }
}

asyncDisplayUserDetails();

// ex3 ------------------------------------------------------------------------------------------------------------------------------------------------
// We have available 3 apis that return the same information, they randomly returning the information faster. We need to get the ID of Cluj city from our api.
// Write a solution using promises, that returns the result from the fastest response.
// After we receive the id of Cluj we have to retrieve the following informations: temperature, humidity and wind.
// We can only do a single call to the same api at a time ( in theory ), you can use the previous available 3 apis to get the information required.
// Our main goal is to show the information as fast as possible.
// const tempBolean = true;

// const weatherPromise1 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( tempBolean ) {
//                 resolve( {
//                     cities: [
//                         {
//                             id: "Cluj",
//                             temperature: 20,
//                             humidity: "20%",
//                             wind: "10 km/h",
//                         },
//                         {
//                             id: "Timisoara",
//                             temperature: 25,
//                             humidity: "25%",
//                             wind: "10 km/h",
//                         },
//                     ],
//                 } );
//             } else {
//                 reject( new Error( "error" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// const weatherPromise2 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( tempBolean ) {
//                 resolve( {
//                     cities: [
//                         {
//                             id: "Cluj",
//                             temperature: 20,
//                             humidity: "20%",
//                             wind: "10 km/h",
//                         },
//                         {
//                             id: "Timisoara",
//                             temperature: 25,
//                             humidity: "25%",
//                             wind: "10 km/h",
//                         },
//                     ],
//                 } );
//             } else {
//                 reject( new Error( "error" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// const weatherPromise3 = new Promise( ( resolve, reject ) => {
//     setTimeout(
//         () => {
//             if ( tempBolean ) {
//                 resolve( {
//                     cities: [
//                         {
//                             id: "Cluj",
//                             temperature: 20,
//                             humidity: "20%",
//                             wind: "10 km/h",
//                         },
//                         {
//                             id: "Timisoara",
//                             temperature: 25,
//                             humidity: "25%",
//                             wind: "10 km/h",
//                         },
//                     ],
//                 } );
//             } else {
//                 reject( new Error( "error" ) );
//             }
//         },
//         Math.floor( Math.random() * 100 ) + 1,
//     );
// } );

// Promise.race( [ weatherPromise1, weatherPromise2, weatherPromise3 ] )
//     .then( data => data.cities )
//     .then( data => {
//         const filtredData = data.filter( ( el ) => el.id === "Cluj" );
//         return filtredData[ 0 ];
//     } )
//     .then( data => console.log( `temperature: ${ data.temperature }, humidity: ${ data.humidity }, wind: ${ data.wind }` ) )
//     .catch( err => console.log( err ) );

//  Cluj weather exercise ------------------------------------------------------------------------------------------------------------------------------------------------
const getWeatherDetailsByCity = ( state, city ) =>
    fetch( `https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/${ state }/${ city }.json` )
        .then( data => data.json() )
        .then( data => data.current_observation );

const getTemperatureByCity = ( state, city ) => {
    getWeatherDetailsByCity( state, city )
        .then( data => {
            document.write( `In Orasul ${ city } temperatura este de ${ data.temp_c } grade Celsius (${ data.temp_f } Farenheit), 
            dar se resimte o temperatura de ${ data.feelslike_c } grade Celsius (${ data.feelslike_f } Farenheit) ` );
        } );
};

const getAllDetailsByCity = ( state, city ) => {
    getWeatherDetailsByCity( state, city )
        .then( data => {
            for ( let el in data ) { /* eslint-disable-line no-restricted-syntax */
                console.log( `In ${ city } ${ el } are o valoare de ${ data[ el ] }` ); /* eslint-disable-line no-console */
            }
        } );
};

//getTemperatureByCity( "RO", "Cluj_Napoca" );
//getAllDetailsByCity( "RO", "Cluj_Napoca" );
