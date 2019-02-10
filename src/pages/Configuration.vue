<template>
  <q-page>
    <h3 class="row justify-center">
      {{ $t('configuration.menu.label') }}
    </h3>
    <div class="row">
      <div class="col-6 q-pa-sm">
        <div>{{ $t('configuration.number_of_digits.label') }}</div>
        <q-slider
          :value="numberOfDigits"
          @input="setNumberOfDigits($event)"
          :min="3"
          :max="8"
          :step="1"
          label
          snap
        />
      </div>
      <div class="col-6 q-pa-sm">
        <div>{{ $t('configuration.range.label') }}</div>
        <q-range
          :value="range"
          @input="setRange($event)"
          :min="0"
          :max="9"
          :step="1"
          label
          snap
        />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ConfigurationStore from './mixins/ConfigurationStore.vue'
export default {
  mixins: [ConfigurationStore],
  name: 'PageConfiguration'
}
</script>
