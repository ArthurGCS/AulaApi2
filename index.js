//chamando o express:
const a = require('express')
//criando uma cópia para manipular:
const b = a()
port= 3011


//API com method GET trazendo a mensagem 'sua...'
b.get('/meuendpoint', (request, response)=>{
    response.send('sua resposta aqui!!!')
})

b.listen(port,()=>{
    console.log("Abriu a porta")
})