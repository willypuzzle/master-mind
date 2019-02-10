<template>
    <div v-if="response" class="row">
        <div v-if="response.won" class="col-2 q-pa-sm">
            {{ $t('response.won.text') }}
        </div>
        <div v-else-if="response.surrender" class="col-6 q-pa-sm">
            {{ $t('response.surrender.text') }}, {{ $t('response.surrender.result') }}: {{ response.secret }}
        </div>
        <div v-else class="col-12 column justify-start">
            <div style="flex-basis: 30px" class="row q-pa-sm">
                <div class="col-4">
                    {{ $t('response.right_value_right_place.text') }}:
                </div>
                <div class="col-8">
                    {{ response.rightPosition }}
                </div>
            </div>
            <div style="flex-basis: 30px" class="row q-pa-sm">
                <div class="col-4">
                    {{ $t('response.right_value_wrong_place.text') }}:
                </div>
                <div class="col-8">
                    {{ response.wrongPosition }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['response']
}
</script>
