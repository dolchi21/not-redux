var React = require('react')

function connectRaw(store, Component, mapStateToProps = s => s) {
    return class Connected extends React.Component {
        constructor(props) {
            super(props)
            this.state = mapStateToProps(store.getState(), this.props)
        }
        componentWillMount() {
            this.unsub = store.subscribe(state => {
                var nextState = mapStateToProps(store.getState(), this.props)
                this.setState(nextState)
            })
        }
        componentWillUnmount() {
            this.unsub()
        }
        render() {
            var { props, state } = this
            return React.createElement(Component, Object.assign({}, props, state))
        }
    }
}

function connect(store, mapStateToProps) {
    return Component => connectRaw(store, Component, mapStateToProps)
}

module.exports = connect
