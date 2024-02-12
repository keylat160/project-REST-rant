const React = require('react');
const Default = require('./default');

const home = () => {
    return (
        <Default>
            <main>
           <h1>Home</h1>
               <div>
                <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' />
               </div>
               <a href='/places'>
                <button className='btn-primary'>Places Page</button>
               </a>
            </main>
        </Default>
    );
};

module.exports = home;