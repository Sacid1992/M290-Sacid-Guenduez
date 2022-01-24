const SERVER = 'http://localhost:3000';

function getWelcome(){
    return fetch(SERVER+'/welcome')

        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}

function sendForm2(data) {
    //DO NOT FORGET the return!
    return fetch(SERVER+'/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })

}
