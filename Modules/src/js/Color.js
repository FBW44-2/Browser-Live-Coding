export function generateColor(){
    let colorCode = "ABCDEF0123456789"
    let color="#"
    for(let i = 0;i<6;i++){
        color += colorCode[Math.floor(Math.random()*colorCode.length)]
    }
    return color
} //name export

export const name = "red"