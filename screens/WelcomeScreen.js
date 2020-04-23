import React from 'react'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JOb data', color: '#03A9F4' },
    { text: 'dupa 2nd', color: '#03A9F4' }
]

function WelcomeScreen(props) {
    const onSlidesComplete = () => {
        props.navigation.navigate('AuthScreen')
    }
    return (
        <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
    )
}

export default WelcomeScreen
