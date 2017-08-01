
import {groupBy} from 'lodash/collection'
import people from './people'

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

// ---

// import {groupBy} from 'lodash/collection'
// 
// const people = [{
//   manager: 'Jen',
//   name: 'Bob'
// }, {
//   manager: 'Jen',
//   name: 'Sue'
// }, {
//   manager: 'Bob',
//   name: 'Shirley'
// }, {
//   manager: 'Bob',
//   name: 'Terrence'
// }]
// const managerGroups = groupBy(people, 'manager')
// 
// const root = document.querySelector('#root')
// root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

// ---

// const root = document.querySelector('#root')
// root.innerHTML = `<p>Hello webpack.</p>`
