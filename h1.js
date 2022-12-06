
  var person=[]
  person.push({email:'annwer@live.fr',
password:'annwer'})

var need=$("#cnt").click(function login(){
   
   
   console.log(document.getElementById("psw").value)
   console.log(document.getElementById("em").value)
  var x=0
   for (var index = 0; index < person.length; index++) {
    if(document.getElementById("psw").value===person[index].password&&document.getElementById("em").value===person[index].email){
    x++
   }
}
if(x===1){
   $('#gues').show()
   alert('Hello user')
   
}
else{
   text='try again'
}
})
$("#cnt1").click(function add(){
   
   
   console.log(document.getElementById("psw1").value)
   console.log(document.getElementById("em1").value)
  
   
person.push({email:document.getElementById("em1").value,password:document.getElementById("psw1").value})
alert('welcome!!enjoy your watch')

})

$('#home').click(function(){
   $('#1').show(3000)
   $('#videos').show(3000)
})
$('#about').click(function(){
   $('#one').show(1500)
   $('#two').show(1500)
   $('#three').hide(1200)
})
$('#home').click(function(){
   $('#two').hide(3000)
   $('#one').hide(3000)
   $('#two').hide(1200)
})
$('#contact').click(function(){
   $('#two').hide(3000)
   $('#one').hide(3000)
   $('#three').show(1200)
})
