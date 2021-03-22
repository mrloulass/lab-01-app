import './App.css';
import React from 'react';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}


// deleted:
// logo.svg
// setupTest.js
// reportWebVitals.js
// from index.js, the import report WEbVitals and the last line
// most of the code in App.js
export default App;
