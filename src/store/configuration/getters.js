import _ from 'lodash'

export function numberOfDigits (state) {
  return state.numberOfDigits
}

export function range (state) {
  return _.clone(state.range)
}
