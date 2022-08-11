//a) 
    type Post ={
    autor: string
    texto: string
}

// b) Entradas: posts: Post[], autor: string / Saídas: Post[]

const posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

function obterPostsAutor(posts: Post[], autor: string): Post[] {
    return posts.filter(post => post.autor === autor)
}

console.log(obterPostsAutor(posts, "Alvo Dumbledore"))

