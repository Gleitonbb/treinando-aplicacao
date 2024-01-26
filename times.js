const times = [...document.querySelectorAll('.time')]
const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#botao')

times.map((upu)=>{
    upu.addEventListener('click',(evt)=>{
        const cadaUm = evt.target
        cadaUm.classList.toggle("selecionado")
    })
     })
       botao.addEventListener('click',()=>{
     const tranEleme = [...document.querySelectorAll('.selecionado')]
     const traele = [...document.querySelectorAll('.time:not(.selecionado)')]
     tranEleme.map((upu)=>{
        caixa2.appendChild(upu)
    })
    traele.map((upu)=>{
        caixa1.appendChild(upu)
    })
   
})
