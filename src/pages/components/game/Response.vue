<template>
    <div v-if="response">
        {{ response }}
    </div>
</template>

<script>
export default {
  props: ['response']
}
</script>
