import * as React from 'react'
import "../LandingPage/Landing.scss"
// import Marquee from 'react-fast-marquee'
const Announcements = (props: any) => {
    return (
        <div className='rowMain'>
            <div className='row2'>
                <h2>Announcements</h2>
            </div>
            <div className='row1'>
                {props.data?.map((x: any) => {
                    return (
                        <div className='mark'>       <p> {x.Title}<br /><br /></p> </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Announcements;

















