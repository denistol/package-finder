<template>
    <div class="ui-text-input">
        <UiSpin v-if="loading"/>
        <input
            type="text"
            :value="modelValue"
            :placeholder="placeholder"
            @input="changeValue"
        >
    </div>
</template>
<script setup lang="ts">
import UiSpin from './UiSpin.vue';

const {modelValue, placeholder, loading} = defineProps<{
    modelValue: string,
    placeholder?: string,
    loading?: boolean
}>()
const emit = defineEmits(['update:modelValue', 'change'])
function changeValue(v:Event) {
    const target = v.target as HTMLTextAreaElement;
    emit('update:modelValue', target.value);
}
</script>
<style lang="scss" scoped>
.ui-text-input{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .ui-spin{
        position: absolute;
        right: $ui-spacing;
    }
    input{
        width: 100%;
        background: transparent;
        border: 2px solid transparent;
        border-radius: $ui-rounded;
        color: $ui-color-text-primary;
        padding: 0.6rem 0.9rem;
        outline: none;
        transition: all .2s ease;
        background-color: $ui-color-2;
        &::placeholder{
            color: $ui-color-text-secondary;
        }
        &:focus{
            border-color: $ui-color-accent;
        }
    }
}
</style>