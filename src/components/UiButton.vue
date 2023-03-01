<template>
<button class="ui-button">
    <small>
        <slot></slot>
    </small>
</button>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.ui-button{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $ui-color-accent;
    border-radius: $ui-rounded;
    color: $ui-color-text-primary;
    border: 2px solid transparent;
    outline: none;
    padding: 0.5rem 1rem;
    transition: all .2s ease;
    &:hover{
        border-color: $ui-color-accent;
        background-color: transparent;
        color: $ui-color-accent;
    }
}
</style>