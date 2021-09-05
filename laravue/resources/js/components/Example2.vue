<template>
    <v-row>
        <v-col cols="12">
            Example2
        </v-col>
        <v-col>
            <router-link to="/">Top</router-link>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
    setup: () => {
        onMounted(() => {
            console.log('Example2.vue mounted')
        })
    }
})
</script>
