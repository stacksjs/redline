import { Window } from 'happy-dom'

const window = new Window({ url: 'http://localhost:3333' })

// Copy all properties from happy-dom Window to globalThis
const windowKeys = Object.getOwnPropertyNames(window).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(window)))
for (const key of windowKeys) {
  if (key === 'undefined' || key === 'globalThis' || key === 'NaN' || key === 'Infinity')
    continue
  if (key in globalThis)
    continue
  try {
    const descriptor = Object.getOwnPropertyDescriptor(window, key) || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), key)
    if (descriptor) {
      const value = (window as any)[key]
      if (typeof value === 'function') {
        Object.defineProperty(globalThis, key, {
          value: typeof value === 'function' && value.bind ? value.bind(window) : value,
          writable: true,
          configurable: true,
        })
      }
      else {
        Object.defineProperty(globalThis, key, {
          value,
          writable: true,
          configurable: true,
        })
      }
    }
  }
  catch {
    // skip properties that can't be set
  }
}

// Ensure critical globals are set
Object.assign(globalThis, {
  window,
  document: window.document,
  navigator: window.navigator,
  location: window.location,
})
