import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import DropdownAlert from 'react-native-dropdownalert'
import hoistNonReactStatic from 'hoist-non-react-statics'

class AlertProvider extends React.Component {
    static childContextTypes = {
        alertWithType: PropTypes.func,
        alert: PropTypes.func,
    }

    // WTF?
    getChildContext() {
        return {
            alert: (...args) => this.dropdown.alert(...args),
            alertWithType: (...args) => this.dropdown.alertWithType(...args),
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {React.Children.only(this.props.children)}
                <DropdownAlert
                    ref={(ref) => {
                        this.dropdown = ref
                    }}
                />
            </View>
        )
    }
}

export const connectAlert = (WrappedComponent) => {
    class ConnectedAlert extends Component {
        render() {
            const { props, context } = this
            return (
                <WrappedComponent
                    {...props}
                    alertWithType={context.alertWithType}
                    alert={context.alert}
                />
            )
        }
    }

    ConnectedAlert.contextTypes = {
        alertWithType: PropTypes.func,
        alert: PropTypes.func,
    }

    return hoistNonReactStatic(ConnectedAlert, WrappedComponent)
}

export default AlertProvider
