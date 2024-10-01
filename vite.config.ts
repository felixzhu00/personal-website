import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let obfuscatorConfig = {}
  try {
    // Parse the JSON string from the environment variable
    obfuscatorConfig = JSON.parse(env.VITE_OBSTRUCT_CONFIG)
  } catch (error) {
    console.error('Invalid VITE_OBSTRUCT_CONFIG format:', error)
  }

  return {
    plugins: [react(), svgr(), vitePluginBundleObfuscator(obfuscatorConfig)],
  }
})
