function createStore(initialState = {}) {
    var dataValues = initialState
    var subs = []
    function set(key, value) {
        if (arguments.length === 2) {
            dataValues[key] = value
        } else {
            Object.assign(dataValues, arguments[0])
        }
        callSubscriptions()
    }
    function get(key) {
        return key ? dataValues[key] : dataValues
    }
    function subscribe(fn) {
        subs.push(fn)
        return function unsub() {
            var i = subs.indexOf(fn)
            subs.splice(i, 1)
        }
    }
    function callSubscriptions() {
        subs.forEach(fn => {
            fn(dataValues)
        })
    }
    return {
        set,
        get,
        getState: () => get(),
        subscribe
    }
}

module.exports = createStore
