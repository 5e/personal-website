/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

import { createClient } from '@supabase/supabase-js'
import { useAppStore } from './store/app.js'
registerPlugins(app)
const SUPABASE_URL = "https://rjghsdhobisxfxxrlusw.supabase.co"
//public anon key
const supabase = createClient(SUPABASE_URL, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2hzZGhvYmlzeGZ4eHJsdXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NzMwOTksImV4cCI6MjAxMzE0OTA5OX0.VlU8Uo6dpAnOCEE2P99tQLhrm8n-DxExaiB11-Bps1Q");
app.config.globalProperties.$supabase = supabase

supabase.auth.onAuthStateChange((event, session) => {
    const authStore = useAppStore();
    if (event === 'SIGNED_IN') {
        authStore.user = session.user;
    } else if (event !== 'INITIAL_SESSION') {
        authStore.user = null;
    }
});



app.mount('#app')
