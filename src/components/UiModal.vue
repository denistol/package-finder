<template>
    <div class="ui-modal" :class="{ 'ui-modal--visible': props.visible }">
        <div class="ui-modal__inner" v-if="props.visible" ref="target">
            <slot></slot>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, watchEffect } from 'vue';
const target = ref(null)
const props = defineProps<{visible?: boolean}>()
const emit = defineEmits(['close'])

onClickOutside(target, () => emit('close'))
watchEffect(() => {
    document.body.classList[props.visible ? 'add' : 'remove']('ui-body-lock')
})

</script>

<style lang="scss" scoped>
.ui-modal{
    z-index: 999999;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition: all .3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    &--visible{
        opacity: 1;
        pointer-events: all;
        visibility: visible;
    }
    &__inner{

    }
}
</style>