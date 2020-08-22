import React from 'react'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import '../../styles/main.scss';

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navigation />
            {children}
            <Footer />
        </React.Fragment>
    )
}

export default layout
