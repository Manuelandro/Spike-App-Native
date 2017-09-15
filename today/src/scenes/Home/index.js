import React, { Component } from 'react'
import Modal from 'react-native-modal'
import { Wrapper, Text } from './style'

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
        headerTitle: 'Home',
        headerLeft: () => <Text>menu</Text>,
        gesturesEnabled: true,
    }

    constructor(props) {
        super(props)
        this.toggleHandler = this.toggleHandler.bind(this)
        this.state = {
            modal: false,
        }
    }

    toggleHandler() {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        return (
            <Wrapper>
                <Text>Home</Text>
                <Text onPress={this.toggleHandler}>Modal</Text>
                <Modal
                    isVisible={this.state.modal}
                    animationInTiming={1}
                    animationOutTiming={1}
                    onBackButtonPress={() => this.toggleHandler()}
                    onBackdropPress={() => this.toggleHandler()}
                >
                    <Wrapper>
                        <Text>Modal!</Text>
                    </Wrapper>
                </Modal>
            </Wrapper>
        )
    }
}

export default Home
