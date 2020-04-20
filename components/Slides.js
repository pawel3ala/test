import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {

    renderButtonOnLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards"
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.props.onComplete}
                >
                    GO
                </Button>
            )

        }
    }

    renderSlides() {

        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={[styles.slideStyle, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.slideText}> {slide.text}</Text>
                    {this.renderButtonOnLastSlide(index)}
                </View>
            )
        })
    }
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
            {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: 'green',
        marginTop: 15
    }
}
