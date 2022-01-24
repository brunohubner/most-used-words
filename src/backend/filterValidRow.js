export function filterValidRow(row) {
    const notNumber = !parseInt(row.trim())
    const notEmpty = !!row.trim()
    const notInterval = !row.includes("-->")
    return notNumber && notEmpty && notInterval
}
