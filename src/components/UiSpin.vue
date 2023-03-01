<template>
    <div class="ui-spin">
        <ph-circle-notch :size="30" />
    </div>
</template>
<style lang="scss" scoped>
.ui-spin {
    color: $ui-color-accent;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    pointer-events: none;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>