const React = require('react')
const Default = require('./layout/Default')

function error404 () {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src= 'https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png' alt= 'error'/>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Default>
    )
}

module.exports = error404;