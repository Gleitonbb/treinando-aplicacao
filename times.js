const caixa1 = document.getElementById('caixa1')
const caixa2 = document.querySelector('#caixa2')
const botao = document.querySelector('#btn_copiar')
const times = [...document.querySelectorAll('.time')]

times.map((upu)=>{
    upu.addEventListener('click',(evt)=>{
    upu.classList.toggle('selecionado')
    })
})
botao.addEventListener('click',()=>{
    const timesSelecionados = [...document.querySelectorAll('.selecionado')]
   timesSelecionados.map((epe)=>{
    caixa2.appendChild(epe)
   })
})