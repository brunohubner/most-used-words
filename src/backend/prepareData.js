import { filterValidRow } from "./filterValidRow"
import { removePonctuation } from "./removePonctuation"
import { removeTags } from "./removeTags"
import { mergeRows } from "./mergeRows"

export function prepareData(rows) {
    return new Promise((resolve, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePonctuation)
                .map(removeTags)
                .reduce(mergeRows, "")
                .split(" ")
                .map(word => word.toUpperCase())
                .map(word => word.replace('"', ""))

            resolve(words)
        } catch (e) {
            reject(e)
        }
    })
}
