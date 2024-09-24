import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.post('/users', async (req, res) =>{

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

app.put('/users/:id', async (req, res) =>{

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)

})

    app.delete('/users/:id', async (req, res) => {
        await prisma.user.delete({
            where: { 
                id: req.params.id
            }
        })

        res.status(200).json({mesage: "Usuário deletado com sucesso" })
    })

// req = request , res = response

app.get('/users', async (req, res) => {

    console.log(req)

    const usuarios = await prisma.user.findMany()

    res.status(200).json(usuarios)
}) 

// Porta do Servidor que a aplicação vai rodar
app.listen(3000)

/*
Criar Nossa API de usuario 

- Criar um Usuario
- Listar todos os usuarios
- Editar um usuario
- Deleter um usuario
*/

// username : vhgsa12 passowrd: vh120404