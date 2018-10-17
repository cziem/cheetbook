import React from 'react'
import CardContainer from './card';
import Footer from './footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <CardContainer />
                <Footer />
            </div>
        )
    }
}

export default App;