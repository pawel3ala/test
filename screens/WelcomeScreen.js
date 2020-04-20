import React, { Component } from 'react'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JOb data', color: '#03A9F4' },
    { text: 'dupa 2nd', color: '#03A9F4' }
]

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('AuthScreen')
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        )
    }
}

export default WelcomeScreen
