
const bttnToCopy=document.querySelector('#button-addon2')
const input=document.querySelector('.form-control')

bttnChar=document.querySelectorAll('.btn-outline-danger')

bttnChar.forEach((element) => {
  element.addEventListener("click",()=>{
		input.value+=element.textContent
  })
})


bttnToCopy.addEventListener("click",()=>{
	input.select()
	document.execCommand("copy")
})

const arrBttnFonts = document.querySelectorAll('.btn-outline-dark')

arrBttnFonts.forEach((element) => {
	temp=element.id
  element.style.fontFamily = `${temp}, serif`;
})

arrBttnFonts.forEach((element)=>{
	element.addEventListener('click',()=>{
		temp=element.id
		input.style.fontFamily = `${temp}, serif`;
	})
})










