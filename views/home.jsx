const React = require('react');
const Default = require('./layout/Default');

const home = () => {
    return (
        <Default>
            <main>
           <h1>Home</h1>
               <div>
                <img src='https://images.pexels.com/photos/7937485/pexels-photo-7937485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                alt='Fruit Shakes on pexels' />
               </div>
               <a href='/places'>
                <button className='btn-primary'>Places Page</button>
               </a>
            </main>
        </Default>
    );
};

module.exports = home;