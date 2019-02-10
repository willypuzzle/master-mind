<template>
  <q-page>
    <h3 class="row justify-center">
      {{ $t('game.menu.label') }}
    </h3>
    <h5 class="row justify-center">
      {{ $t('configuration.number_of_digits.label') }}: {{ numberOfDigits }}, {{ $t('configuration.range.label') }}: {{ range.min }} - {{ range.max }}
    </h5>
    <div class="row">
      <div class="col-3 q-pa-sm">
        <q-btn
          :color="gameStarted ? 'white' : 'primary'"
          :text-color="gameStarted ? 'black' : 'white'"
          :label="gameStarted ? $t('game.buttons.stop') : $t('game.buttons.start')"
          @click="toggleGame"
        />
      </div>
      <div class="col-6 q-pa-sm">
        <q-input
          v-if="gameStarted"
          v-model="inputData"
          :float-label="$t('game.inputs.main')"
          :error="error"
          @keyup.enter="tryOn"
        />
      </div>
      <div class="col-3 q-pa-sm">
        <q-btn
          v-if="gameStarted"
          color="primary"
          :label="$t('game.buttons.try')"
          @click="tryOn"
        />
      </div>
    </div>
    <response :response="guessingResponse" />
  </q-page>
</template>

<style>
</style>

<script>
import ConfigurationStore from './mixins/ConfigurationStore.vue'
import {buildGuessingData, guess, makeStringFromGuessingData} from './helpers/game.js'
import Response from './components/game/Response.vue'
export default {
  mixins: [ConfigurationStore],
  name: 'PageGame',
  components: {
    Response
  },
  data () {
    return {
      gameStarted: false,
      inputData: '',
      error: false,
      guessingData: null,
      guessingResponse: false
    }
  },
  methods: {
    toggleGame () {
      if (this.gameStarted) {
        this.gameStarted = false
        this.surrender()
      } else {
        this.gameStarted = true
        this.guessingData = buildGuessingData({
          range: this.range,
          numberOfDigits: this.numberOfDigits
        })
      }
    },
    surrender () {
      this.guessingResponse = {
        surrender: true,
        secret: makeStringFromGuessingData(this.guessingData)
      }
    },
    tryOn () {
      this.error = false
      if (!this.validateData(this.inputData, this.guessingData.length)) {
        this.error = true
        return
      }
      this.guessingResponse = guess({input: this.inputData, data: this.guessingData})
    },
    validateData (inputData, length) {
      const inputValue = String(inputData).trim()
      return !(inputValue.length === 0 || inputValue.indexOf('.') !== -1 || isNaN(parseInt(inputValue)) || length !== inputValue.length)
    }
  }
}
</script>
