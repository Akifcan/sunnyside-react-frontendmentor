export const isOdd = (num) => num % 2 === 0 ? true : false
export const image = (width, imageName) => {
    let type = width >= 365 ? 'desktop' : 'mobile'
    return type
}
