


const display=(event)=>
{
    body=document.getElementsByClassName("body")[0];
    if(body.style.display=="none")
        {body.style.display="block";}
    else
    {
        body.style.display="none";
        console.log(body.style);
        console.log(body.style);
    }
    console.log("executed")
    
};
var promise=new Promise((resolve,reject)=>
            {
                setTimeout(()=>{resolve(document.getElementsByClassName("drop-d-menu"))},300)
            }
);

promise.then(expand)

function expand(elem)
{
    console.log(elem[0].children);
    for(let i of elem[0].children)
    {
        i.addEventListener("click",display)
    }
}











