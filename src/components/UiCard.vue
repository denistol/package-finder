<template>
    <div class="ui-card p-3 d-flex flex-column gap-3 w-100">
        <div class="row">
            <div class="col-md-8 fs-3 fw-semibold">
                <span>
                    {{ p.package.name }}
                </span>
                <span class="ui-text-secondary px-2">
                    {{ p.package.version }}
                </span>
            </div>
            <div class="col-md-4 d-flex justify-content-md-end pt-2 pt-md-0 gap-2">
                <UiLink target="_blank" :href="links.homepage">
                    <ph-globe-simple :size="20" />
                </UiLink>
                <UiLink target="_blank" :href="links.repository">
                    <ph-link-simple :size="20" />
                </UiLink>
                <UiLink target="_blank" :href="links.bugs">
                    <ph-bug-droid :size="20" />
                </UiLink>
            </div>
        </div>
        <div class="ui-text-secondary">
            {{ p.package.description }}
        </div>
        <div class="ui-card__tags d-flex gap-2 flex-wrap">
            <UiTag v-for="(t, tk) in tags" :key="tk">{{ t }}</UiTag>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { PackageObject } from '../api';
import UiLink from './UiLink.vue';
import UiTag from './UiTag.vue';

const {p} = defineProps<{p: PackageObject}>()
const tags = p.package.keywords
const links = p.package.links

</script>
<style lang="scss">
.ui-card{
    cursor: pointer;
    background-color: $ui-color-3;
    transition: all .2s ease;
    border: 2px solid transparent;
    border-radius: $ui-rounded;
    &:hover{
        border-color: $ui-color-accent;
    }
    &__title{
        transition: all .2s ease;
    }
    &__description{
        color: $ui-color-text-secondary;
    }
}

</style>