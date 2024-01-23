const caixa1 = document.getElementById('caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#btn_copiar')
const times = [...document.querySelectorAll('.time')]

times.map((upu)=>{
    upu.addEventListener('click',(evt)=>{
     const cli = evt.target
     cli.classList.toggle('selecionado')
    })
    botao.addEventListener('click',()=>{
        let tdTime = [...document.querySelectorAll('.selecionado')]
        let tdTime2 = [...document.querySelectorAll('.time:not(.selecionado)')]
        tdTime.map((tpt)=>{
        caixa2.appendChild(tpt)

        })
        tdTime2.map((tpt)=>{
            caixa1.appendChild(tpt)
        })
        
    })
})