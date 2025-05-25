export const toQueryString = (params: Record<string, string | number | null | undefined>) => {
  const filteredEntries = Object.entries(params)
    .filter(([_, v]) => v !== null && v !== undefined)
    .map(([k, v]) => [k, String(v)])

  return new URLSearchParams(filteredEntries).toString()
}
