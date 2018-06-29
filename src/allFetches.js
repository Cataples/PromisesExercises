/*eslint-disable*/
const get = url => {
    return fetch( url, {
        method: "GET"
    } )
        .then( data => data.json() )
        .catch( ( err ) => console.log( "err: " + err ) );
}

const post = ( url, data ) => {
    return fetch( url, {
        method: "POST",
        body: JSON.stringify( data ),
        headers: {
            'content-type': 'application/json'
        },
    }).then( data => data.json() )
    .then( data => console.log( "Succes posted " + JSON.stringify( data ) ) )
    .catch( error => console.log( error + " - " + JSON.stringify( data ) ) );
}

const put = ( url, data ) => {
    return fetch( url, {
        method: "PUT",
        body: JSON.stringify( data ),
        headers: {
            'content-type': 'application/json'
        }
    }).then( data => data.json() )
        .then( data => console.log( "success: " + JSON.stringify( data ) ) )
        .catch( err => console.log( err ) );
}

const deleteItem = url => {
    return fetch( url, {
        method: "DELETE"
    } ).then( data => data.json() )
        .then( data => console.log( "delete success: " + JSON.stringify( data ) ) )
        .catch( err => console.log( err ) );
}


const patch = ( url, data ) => {
    return fetch( url, {
        method: "PATCH",
        body: JSON.stringify( data ),
        headers: {
            'content-type': 'application/json'
        }
    }).then( data => data.json() )
        .then( data => console.log( "success: " + JSON.stringify( data ) ) )
        .catch( err => console.log( err ) );
}

export { get, post, put, deleteItem, patch };