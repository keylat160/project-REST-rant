const React = require('react')
const Default = require('../layout/Default')

function new_form () {
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form action='/places' method='POST'>
                    <div className="form-group">
                        <label html For="name">Place Name</label>
                        <input className="form-control" id="name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label html For="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic"/>
                    </div>
                    <div className="form-group">
                        <label html For="city">City</label>
                        <input className="form-control" id="city" name="city"/>
                    </div>
                    <div className="form-group">
                        <label html For="state">State</label>
                        <input className="form-control" id="state" name="state"/>
                    </div>
                    <div className="form-group">
                        <label html For="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                         <input className="form-control" id="founded" name="founded" defaultValue={new Date() .getFullYear()} />
                       </div>

                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = new_form;