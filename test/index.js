var NotRedux = require('../lib')

describe('NotRedux', () => {

    it('sub runs on change.', done => {

        var store = NotRedux.createStore()

        var unsub = store.subscribe(() => {
            var state = store.getState()
            if (state.success) {
                done()
            }
        })

        store.set('success', true)

    })

    it('sub runs once then unsubs.', () => {
        var throwError = true
        
        var store = NotRedux.createStore()
        
        var unsub = store.subscribe(() => {
            throwError = !throwError
        })
        
        store.set('key', 'value1')
        unsub()
        store.set('key', 'value2')

        if (throwError) throw new Error('Sub ran more than once.')

    })

})