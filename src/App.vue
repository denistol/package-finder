<template>
<div class="ui-layout">
    <UiModal :visible="!!selectedObject" @close="selectedObject = null">
        <div class="ui-container w-100">
            <UiCard :p="selectedObject" class="w-100" />
        </div>
    </UiModal>
    <header class="py-4 sticky-top">
        <div class="ui-container">
            <UiTextInput
                @update:model-value="onUpdateSearchQuery"
                placeholder="lodash"
                v-model.trim="searchQuery"
                :loading="store.loading"
            />
        </div>
    </header>
    <main :class="{ loading: store.loading }">
        <div class="ui-container">
            <UiCard v-for="(p, pk) in store.objects"
                :key="pk"
                :p="p"
                @click="selectedObject = p"
            />
            <UiButton
                v-if="store.hasMore"
                class="mx-auto my-5"
                @click="debouncedSearch">
                More ({{ store.count }} / {{ store.total }})
            </UiButton>
        </div>
    </main>
    <footer class="py-5 ui-text-secondary">
        <small class="ui-container text-center">
            {{ new Date().getFullYear() }}
        </small>
    </footer>
</div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core'
import { useDefaultStore } from './store';
import UiCard from './components/UiCard.vue';
import UiModal from './components/UiModal.vue';
import UiTextInput from './components/UiTextInput.vue';
import UiButton from './components/UiButton.vue';

const store = useDefaultStore()
const searchQuery = ref('')
const size = 20
const page = ref(0)
const selectedObject = ref()

const fetchParams = computed(() => ({
    size,
    text: searchQuery.value,
    from: page.value === 0 ? 0 : page.value * size
}))

const debouncedSearch = useDebounceFn(async () => {
        await store.fetchPackages(fetchParams.value)
        page.value += 1
}, 500)

const onUpdateSearchQuery = async () => {
    page.value = 0
    debouncedSearch()
}

</script>
<style lang="scss">
.ui-layout{
    display: flex;
    flex-direction: column;
    header{
        background-color: $ui-color-1;
    }
    main{
        flex-grow: 1;
        transition: all .2s ease;
        &.loading{
            opacity: .35;
            pointer-events: none;
        }
    }
    footer{
        background-color: $ui-color-2;
    }
}


</style>