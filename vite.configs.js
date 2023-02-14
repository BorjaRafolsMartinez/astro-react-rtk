export default {
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['@reduxjs/toolkit'],
      noExternal: ['@reduxjs/toolkit']
    }
  }
}
