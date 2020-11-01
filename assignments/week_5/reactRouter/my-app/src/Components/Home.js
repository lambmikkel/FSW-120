import React from "react"

function Home(props) {
    return(
        <div className= "homePage">
            <h1>We are "Real Deal Plumbing"</h1>
            <p>
                Common work orders:
            </p>
            <div className= "table">
                <ul>
                    <li>Flushing drainage pipes</li>
                    <li>Installing water softners</li>
                    <li>Residential and commercial inspections</li>
                    <li>Installing irrigation systems</li>
                </ul>
            </div>
            <p>Feel free to give us a call for a free consultation</p>
        </div>
    )
}
export default Home