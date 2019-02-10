// This is just an example,
// so you can safely delete all default props below

export default {
  application: {
    title: 'Master Mind',
    subtitle: 'Running on Quasar v{version}'
  },
  buttons: {
    cancel: {
      text: 'Cancel'
    },
    ok: {
      text: 'Ok'
    }
  },
  configuration: {
    menu: {
      label: 'Configuration'
    },
    number_of_digits: {
      label: 'Number of Digits'
    },
    range: {
      label: 'Range'
    }
  },
  game: {
    buttons: {
      play_again: 'Play again!',
      start: 'Start',
      stop: 'Give up!',
      try: 'Try!'
    },
    inputs: {
      main: 'Insert Guessing...'
    },
    menu: {
      label: 'Game'
    },
    warning: {
      leave: {
        title: 'Do you want to leave?',
        message: 'if you leave the page you will lose the game'
      }
    }
  },
  response: {
    right_value_right_place: {
      text: 'Right value and right position'
    },
    right_value_wrong_place: {
      text: 'Right value but wrong position'
    },
    surrender: {
      text: 'You gave up!',
      result: 'The secret code is'
    },
    won: {
      text: 'Correct! You won!'
    }
  },
  failed: 'Action failed',
  success: 'Action was successful'
}
