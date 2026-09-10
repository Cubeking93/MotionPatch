/** Prefix public files with Vite's base (needed on GitHub project Pages). */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
