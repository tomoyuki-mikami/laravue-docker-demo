<template>
    <v-app>
        <v-navigation-drawer app>
            <!-- -->
        </v-navigation-drawer>
        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import {defineComponent, onMounted} from '@vue/composition-api';

export default defineComponent({
    setup: () => {
        onMounted(() => {
            console.log('App.vue mounted')
        })
    }
})
</script>
