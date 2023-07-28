// console.log("hello my frined");

// alert("hello");
let str="";
let btns=document.querySelectorAll('.div1');
Array.from(btns).forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        if (e.target.innerHTML == 'AC')
        {
            str="";
            document.querySelector('.display').value=str;
            
        }
        else if(e.target.innerHTML=='='){
            str=eval(str);
            document.querySelector('.display').value=str;
        }
        else
        {
            str=str+e.target.innerHTML;
            document.querySelector('.display').value=str;
        }
    })
})