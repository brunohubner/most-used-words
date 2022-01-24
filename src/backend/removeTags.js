export function removeTags(row) {
    return row.replace(/(<[^>]+)>/gi, "").trim()
}
