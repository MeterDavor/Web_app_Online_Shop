import React from 'react'
import './homepage.css'
import HadesFrontPage from './HadesFrontPage/HadesFrontPage'
import SeriousSamFrontPage from './SeriousSamFrontPage/SeriousSamFrontPage'
import X4FrontPage from './X4FrontPage/X4FrontPage'
import NSFFrontPage from './NSFFrontPage/NSFFrontPage'

const HomePage = () => (
    <div className="container_HP">
        <HadesFrontPage/>
        <div className="splitter">
            <SeriousSamFrontPage/>
            <div className="dvijeIgre">
                <X4FrontPage/>
                <NSFFrontPage/>
            </div>
        </div>
    </div>
)

export default HomePage