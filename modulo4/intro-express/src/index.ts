import express from "express"
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());


//exercício 1:
app.get("/teste",(req, res) =>{
    res.send("Hello from Express")
})

//exercício 2:

type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    website: string;
}

//exercício 3:

const users: User[] =[
    {
        id:1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "Sincere@april.biz",
        website: "hildegard.org"
    },
    {
        id:2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "Shanna@melissa.tv",
        website: "anastasia.net"
    },
    {
        id:3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
        email: "Nathan@yesenia.net",
        website: "ramiro.info"
    },
    {
        id:4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz" 
    }
]

//exercício 4:

app.get('/users',(req,res) =>{
    res.send(users)
})

//exercício 5:

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
}

//exercício 6: 
// É melhor criar os posts dentro do array de usuários devido ao fato de que um usuário pode ter vários posts e é possível acessá-los pelo id do proprio usuário. Também acaba se tornando mais fácil de manipular os dados com um map.

const userWithPost = [
    {
        id:1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        email: "Sincere@april.biz",
        website: "hildegard.org",
        posts: [
            {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "uia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
            userId: 1,
            },
            {
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                userId: 1,
            },
            {
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                userId: 1,
            }
        ]
    },
    {
        id:2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
        posts: [
            {
                id:11,
                title: "et ea vero quia laudantium autem",
                body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
                userId: 2,
            },
            {
                id:12,
                title: "in quibusdam tempore odit est dolorem",
                body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
                userId: 2,
            }
        ]
    },{
        id:3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
        posts: [
            {
                id:22,
                title: "dolor sint quo a velit explicabo quia nam",
                body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
                userId: 3,
            },
            {
                id:23,
                title: "maxime id vitae nihil numquam",
                body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
                userId: 3,
            }
        ] 
    },
    {
        id:4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz" ,
        posts: [
            {
                id: 31,
                title: "ullam ut quidem id aut vel consequuntur",
                body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
                userId:4,
            },
            {
                id:32,
                title: "doloremque illum aliquid sunt",
                body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
                userId:4,
            },
            {
                id:33,
                title: "qui explicabo molestiae dolorem",
                body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
                userId:4
            }
        ]
    }
]

//exercício 7:

app.get("/posts",(req,res)=>{
    res.send(userWithPost.map(user => user.posts))
})

//exercício 8:

app.get("/post/:userId",(req,res) =>{
    const userId = Number(req.params.userId);
    const userPosts = userWithPost.find(user => user.id == userId)
    res.send(userPosts?.posts)
})

app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")
})