<template>
    <v-row>
        <v-col cols="12">
            Top
        </v-col>
        <v-col>
            <router-link to="/example1">Example1</router-link>
        </v-col>
        <v-col>
            <router-link to="/example2">Example2</router-link>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
    setup: () => {
        onMounted(() => {
            console.log('Top.vue mounted')
        })
    }
})
</script>
