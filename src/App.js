import React from 'react';
// import components
import Header from './components/Header';
import Links from './components/Links';
import Footer from './components/Footer';
// import data
import {links, profile} from './data';

function App() {
	return (
        <div className="container">
            <div className="profile-container">
                <Header {...profile}/>
                <Links links={links}/>
            </div>
            <Footer/>
        </div>
	);
}

export default App;