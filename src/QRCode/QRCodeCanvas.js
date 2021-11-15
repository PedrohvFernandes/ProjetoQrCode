import React, { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

// A propriedade text é o estado que eu tenho na minha aplicação, mandando pra ca pra gerar o QRCode
export default function QRCodeCanvas({text}){

    // Essa referencia/variavel serve pra eu querer desenhar e fazer coisas com ele via codigo js
    const canvasRef = useRef()

    /*Ele vai ser atualizado toda vez que alguma coisa atualizar, por exemplo se o array estiver vazio quer dizer que 
    ele vai ser atualizado quando meu QRCode for criado apenas e depois ele nunca mais vai passar por dentro, agora
    se eu colocar algo no array quer dizer que sempre esse algo for atualizado ele vai passar aqui e vai atualizar,
    então eu quero que sempre que o meu texto no input mude o qrcode tambem mude, no caso ele cria um novo qrcode
    e é colocado no canvas e quem gerencia esse useEffect é o text que é o meu estado, sempre que ele faz algo dentro do metodo
    useEffect
    */
    useEffect(()=>{
        // É gerado um qrcode pro canvas toda vez que o text muda
        // Current -> atual daquela referencia
        QRCode.toCanvas(canvasRef.current,text,{width: 500},(error =>{
            console.log(error)
        }))

    },[text])

    return(
        <div>
            {/*Um elemento canvas*/}
            {/*ref={canvasRef} -> linkando o elemento que o react cria na tela, com a minha variavel que eu utilizo no 
            codigo JS pra modifciar*/}
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>

    )
}