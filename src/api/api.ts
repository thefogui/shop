import clothes from './clothes.json'

export const getAllClothes = (actualItem : number, totalItems : number, sizes : string[] = []) => {
    let filteredClothes : any[] = []

    if (sizes.length > 0) {
        for (const c of clothes) {
            for(const s of c.size) {
                if (sizes.includes(s.toLowerCase())) {
                    if (!(filteredClothes.includes(c))) {
                        filteredClothes.push(clothes)
                    }
                }
            }
        }
    } else {
        filteredClothes = clothes
    }

    let newClothes = filteredClothes.slice(actualItem, actualItem + totalItems)

    return Promise.resolve(newClothes)
}
