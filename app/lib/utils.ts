import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function htmlDecode(input: string) {
  var doc = new DOMParser().parseFromString(input, 'text/html')
  return doc.documentElement.textContent
}
