import readline from 'readline/promises'

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export default async function input(prompt){
    if (prompt === undefined){
        prompt = ""
    }
    const res = await read.question(prompt)
    read.close()
    return res;
}