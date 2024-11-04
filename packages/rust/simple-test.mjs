console.time("gentime")
import { generateEmbeddings } from './index.js';

// const res = mainScFun("https://hono.dev/")
// console.info(res.length)

const res = generateEmbeddings([
    "how are you"
]);
console.log(res)
