export function removePonctuation(row) {
    return row.replace(/[,?!.-]/g, "")
}