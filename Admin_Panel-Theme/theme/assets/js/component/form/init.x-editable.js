"use strict";var XEditable={init:function(){$.fn.editable.defaults.mode="inline",$.fn.editableform.buttons='<button type="submit" class="btn btn-primary editable-submit"><i class="fa fa-fw fa-check"></i></button><button type="button" class="btn btn-default editable-cancel"><i class="fa fa-fw fa-times"></i></button>',$("#username").editable({url:"/post",type:"text",pk:1,name:"username",title:"Enter username"}),$("#firstname").editable({validate:function(e){if(""==$.trim(e))return"This field is required"}}),$("#sex").editable({prepend:"not selected",source:[{value:1,text:"Male"},{value:2,text:"Female"}],display:function(e,t){var a=$.grep(t,function(t){return t.value==e});a.length?$(this).text(a[0].text).css("color",{"":"gray",1:"green",2:"blue"}[e]):$(this).empty()}}),$("#dob").editable(),$("#event").editable({placement:"right",combodate:{firstItem:"name"}}),$("#comments").editable({showbuttons:"bottom"}),$("#fruits").editable({pk:1,limit:3,source:[{value:1,text:"banana"},{value:2,text:"peach"},{value:3,text:"apple"},{value:4,text:"watermelon"},{value:5,text:"orange"}]})}};$(document).ready(function(){XEditable.init()});
//# sourceMappingURL=init.x-editable.js.map