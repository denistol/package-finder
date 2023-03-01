<template>
    <small class="ui-tag">
        <slot></slot>
    </small>
</template>
<style lang="scss" scoped>
.ui-tag{
    color: $ui-color-text-secondary;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $ui-rounded;
    padding: 2px 8px;
    background-color: $ui-color-1;
    transition: all .2s ease;
    &:hover{
        cursor: pointer;
        color: $ui-color-text-primary;
        background-color: $ui-color-accent;
    }
}
</style>