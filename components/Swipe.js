import React, { useEffect, useState } from 'react';

import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const SwipeFunctional = (props) => {

  const [position, setPosition] = useState(new Animated.ValueXY())
  const [index, setIndex] = useState(0)
  const [panResponder, _] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      }
    })
  )

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }, [])

  function forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => onSwipeComplete(direction));
  }

  function onSwipeComplete(direction) {
    const {
      onSwipeLeft: onSwipeLeft = () => { },
      onSwipeRight: onSwipeRight = () => { },
      data
    } = props;
    const item = data[index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setPosition(position)
    setIndex(prevIndex => prevIndex + 1);
  }

  function resetPosition() {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  function getCardStyle() {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  function renderCards() {    
    if (index >= props.data.length) {
      return props.renderNoMoreCards();
    }

    const deck = props.data.map((item, i) => {
      if (i < index) { return null; }

      if (i === index) {
        return (
          <Animated.View
            key={item[props.keyProp]}
            style={[getCardStyle(), styles.cardStyle, { zIndex: 99 }]}
            {...panResponder.panHandlers}
          >
            {props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item[props.keyProp]}
          style={[styles.cardStyle, { top: 10 * (i - index), zIndex: -i }]}
        >
          {props.renderCard(item)}
        </Animated.View>
      );
    });
    return Platform.OS === 'android' ? deck : deck.reverse();
  }
  return (
    <View>
      {renderCards()}
    </View>
  );
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default SwipeFunctional;