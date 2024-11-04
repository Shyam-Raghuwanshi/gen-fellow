import { generateEmbeddings, ModelTypes } from "@gen-fellow/rust-lib"

const res = generateEmbeddings(["hi there"], ModelTypes.BGESmallENV15);

console.log(res)