type StringOnly = string
type StringOrNumber = string | number


let a:StringOnly = "Hello"
let b = a as StringOrNumber

// another way to cast type
// but this syntax cannot be used in JSX/TSX
let c = <StringOnly>'world'


const addOrConcat = (a:number, b:number, op: 'add' | 'concat'): number | string => {
    if(op === 'add') return a + b
    return '' + a + b
}

// we know 'concat' will always return a string
let newString:string = addOrConcat(2, 3, 'concat') as string


const img = document.querySelector('img') as HTMLImageElement
img.src = "http://localhost/images/1.jpg"

// or use non-null assertion
const img1 = document.querySelector('img')!

const logo = document.getElementById('logo') as HTMLImageElement

logo.src = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
