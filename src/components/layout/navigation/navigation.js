import React from 'react'

//Icons
import { GiGasMask } from 'react-icons/gi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { GrSearch } from 'react-icons/gr';

const navigation = () => {
    return (
        <React.Fragment>
            <nav className="nav">
                <div className="nav__page-links"><HiOutlineMenuAlt2 className="nav-icon" /> </div>
                <div className="nav__brand"><GiGasMask /></div>

                <div className="nav__user-section">
                    <GrSearch className="nav__search-icon" />
                    <div className="nav__cart-num">
                        <span>3</span>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default navigation
