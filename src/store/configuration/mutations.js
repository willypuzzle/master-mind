import _ from 'lodash'

export function setNumberOfDigits (state, data) {
  state.numberOfDigits = data
}

export function setRange (state, data) {
  state.range = _.clone(data)
}
