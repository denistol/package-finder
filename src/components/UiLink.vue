<template>
    <a :target="props.target" class="ui-link" :href="props.href">
        <slot></slot>
    </a>
</template>
<script setup lang="ts">
const props = defineProps<{target: string, href: string}>()
</script>
<style lang="scss">
.ui-link{
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $ui-rounded;
    background-color: $ui-color-1;
    transition: all .2s ease;
    color: $ui-color-text-primary;

    &:focus, &:hover{
        color: $ui-color-text-primary;
        background: $ui-color-accent;
    }
}
</style>