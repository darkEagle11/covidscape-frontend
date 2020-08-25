import React from 'react'
import Navigation from './navigation/navigation';
import Footer from './footer/footer';
import '../../styles/main.scss';

const layout = ({ children, layoutPadding = false }) => {
    return (
        <div className={`layout ${layoutPadding ? 'layout-padding' : null}`}>
            <Navigation />
            <div className="site-content">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default layout
