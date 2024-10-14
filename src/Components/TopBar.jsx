import React, { Component } from 'react'

export class TopBar extends Component {
    render() {
        return (
            <div className= "tb tn-expand-lg tb-dark bg-dark" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/dk.png" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
                <h1 className="text-center my-3" style={{ fontFamily: 'Old English Text MT, sans-serif', fontWeight: 'normal', color: 'white' }}>Dewakoo News</h1>
            </div>
        )
    }
}

export default TopBar