let a = document.getElementsByClassName('b');
let string = " ";
Array.from(a).forEach((btn)=>{
   btn.addEventListener('click' , (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = " ";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "DE"){
            string = document.querySelector('input').value.toString().slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
   })
})
