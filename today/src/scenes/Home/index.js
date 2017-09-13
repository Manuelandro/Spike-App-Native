import React from 'react'
import { withState, withHandlers, compose } from 'recompose'
import Modal from 'react-native-modal'
import { Wrapper, Text } from './style'

const Home = props => (
    <Wrapper>
        <Text>Home</Text>
        <Text onPress={() => props.toggleHandler()}>Modal</Text>
        <Modal
            isVisible={props.visible}
            animationInTiming={1}
            animationOutTiming={1}
            onBackButtonPress={() => props.toggleHandler()}
            onBackdropPress={() => props.toggleHandler()}
        >
            <Wrapper>
                <Text>Modal!</Text>
            </Wrapper>
        </Modal>
    </Wrapper>
)

const HighOrderComponent = compose(
    withState('visible', 'toggle', false),
    withHandlers({
        toggleHandler: ({ toggle }) => () => toggle(n => !n),
    }),
)

export default HighOrderComponent(Home)
