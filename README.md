Demo at https://stackblitz.com/edit/not-redux

### Install
```bash
npm install not-redux
```

### HowTo
```js
import { createStore, connect } from 'not-redux'

var person = createStore() // create a data store

// connect component to store
var PersonFullName = connect(person, state => {
    var name = [
        state.firstName,
        state.lastName
    ].join(' ')
    return { name }
})(props => <span>{props.name}</span>)

ReactDOM.render(<PersonFullName/>, rootElement)

// set store firstName to Dan
person.set('firstName', 'Dan')
// set store lastName as object
person.set({
    lastName: 'Abramov'
})
```
