"use strict";var SweetAlert2=SweetAlert2||{};$(function(){SweetAlert2={init:function(){$("#alert-demo-1").on("click",function(){Swal.fire("Good job!")}),$("#alert-demo-2").on("click",function(){Swal.fire("The Internet?","That thing is still around?","question")}),$("#alert-demo-3").on("click",function(){Swal.fire({type:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"})}),$("#alert-demo-4").on("click",function(){Swal.fire({imageUrl:"../../../assets/images/user/thumb/1.jpg",imageAlt:"User image"})}),$("#alert-demo-5").on("click",function(){Swal.fire({title:"<strong>HTML <u>example</u></strong>",type:"info",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="ion-md-thumbs-up"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="ion-md-thumbs-down"></i>',cancelButtonAriaLabel:"Thumbs down"})}),$("#alert-demo-6").on("click",function(){Swal.fire({position:"top-end",type:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})}),$("#alert-demo-7").on("click",function(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:appUtils.colors("info"),cancelButtonColor:appUtils.colors("danger"),confirmButtonText:"Yes, delete it!"}).then(e=>{e.value&&Swal.fire("Deleted!","Your file has been deleted.","success")})}),$("#alert-demo-8").on("click",function(){var e=Swal.mixin({confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",buttonsStyling:!1});e.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(t=>{t.value?e.fire("Deleted!","Your file has been deleted.","success"):t.dismiss===Swal.DismissReason.cancel&&e.fire("Cancelled","Your imaginary file is safe :)","error")})}),$("#alert-demo-9").on("click",function(){Swal.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"../../../assets/images/user/medium/1.jpg",imageWidth:300,imageHeight:360,imageAlt:"Custom image",animation:!1})}),$("#alert-demo-10").on("click",function(){var e;Swal.fire({title:"Auto close alert!",html:"I will close in <strong></strong> seconds.",timer:2e3,onBeforeOpen:()=>{Swal.showLoading(),e=setInterval(()=>{Swal.getContent().querySelector("strong").textContent=Swal.getTimerLeft()},100)},onClose:()=>{clearInterval(e)}}).then(e=>{e.dismiss===Swal.DismissReason.timer&&console.log("I was closed by the timer")})}),$("#alert-demo-11").on("click",function(){Swal.fire({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,target:document.getElementById("rtl-container")})}),$("#alert-demo-12").on("click",function(){Swal.fire({title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:e=>fetch(`//api.github.com/users/${e}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{Swal.showValidationMessage(`Request failed: ${e}`)}),allowOutsideClick:()=>!Swal.fire.isLoading()}).then(e=>{e.value&&Swal.fire({title:`${e.value.login}'s avatar`,imageUrl:e.value.avatar_url})})}),$("#alert-demo-13").on("click",function(){Swal.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2","3"]}).queue([{title:"Question 1",text:"Chaining swal2 modals is easy"},"Question 2","Question 3"]).then(e=>{e.value&&Swal.fire({title:"All done!",html:"Your answers: <pre><code>"+JSON.stringify(e.value)+"</code></pre>",confirmButtonText:"Lovely!"})})}),$("#alert-demo-14").on("click",function(){Swal.queue([{title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:()=>fetch("https://api.ipify.org?format=json").then(e=>e.json()).then(e=>Swal.insertQueueStep(e.ip)).catch(()=>{Swal.insertQueueStep({type:"error",title:"Unable to get your public IP"})})}])}),$("#alert-demo-15").on("click",function(){var e;Swal.fire({title:"Auto close alert!",html:'I will close in <strong></strong> seconds.<br/><br/><button id="increase" class="btn btn-warning">I need 5 more seconds!</button><br/><button id="stop" class="btn btn-danger">Please stop the timer!!</button><br/><button id="resume" class="btn btn-success" disabled>Phew... you can restart now!</button><br/><button id="toggle" class="btn btn-primary">Toggle</button>',timer:1e4,onBeforeOpen:()=>{var t=Swal.getContent(),n=t.querySelector.bind(t),o=n("#stop"),i=n("#resume"),l=n("#toggle"),r=n("#increase");function a(){o.disabled=!Swal.isTimerRunning(),i.disabled=Swal.isTimerRunning()}Swal.showLoading(),o.addEventListener("click",()=>{Swal.stopTimer(),a()}),i.addEventListener("click",()=>{Swal.resumeTimer(),a()}),l.addEventListener("click",()=>{Swal.toggleTimer(),a()}),r.addEventListener("click",()=>{Swal.increaseTimer(5e3)}),e=setInterval(()=>{Swal.getContent().querySelector("strong").textContent=(Swal.getTimerLeft()/1e3).toFixed(0)},100)},onClose:()=>{clearInterval(e)}})})}},$(document).ready(SweetAlert2.init)});
//# sourceMappingURL=sweetalert2.js.map