const React = require('react')
const Default = require('./Default')

function index (data) {
    let placesFormatted = date.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
        <Default><main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
            </main>
            </Default>
    )
}
  
  
  