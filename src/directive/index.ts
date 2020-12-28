import type { App } from 'vue'
import { setupLazyDirective } from './v-lazy/lazy'
export function setupGlobalDirective (app: App) {
  setupLazyDirective(app)
}