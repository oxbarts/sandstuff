import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

export function ensureUniqueValues(collection: Record<string, any>[], keys: string[], file: string | null = null) {
  keys.forEach(key => {
    if (collection.length !== (new Set(collection.map(n => n[key]))).size) {
      const uniques = new Set()
      collection.forEach(({ name, [key]: item }) => {
        if (item === null) return
        if (uniques.has(item)) {
          throw new Error(`${file ? `[${file}] ` : ''}Duplicate ${key} at ${name}: ${item}`)
        }
        uniques.add(item)
      })
    }
  })
}
