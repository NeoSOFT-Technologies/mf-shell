import React from 'react'
import "./loading.css"
export default function Loading() {
    return (
        <div className='text-center centerMe'>
            <div className="wrapper mx-auto">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}
