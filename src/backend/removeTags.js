export function removeTags(row) {
    return row.replace(/(<[^>]+)>/ig, "").trim()
}