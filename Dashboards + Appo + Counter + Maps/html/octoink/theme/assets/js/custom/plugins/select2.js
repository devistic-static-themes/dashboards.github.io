"use strict";var Select2=Select2||{};$(function(){Select2={init:function(){$(".select2").select2(),$(".select2-placeholder").select2({placeholder:"Select an option",allowClear:!0}),$("#select2-1").select2({data:e}),$("#select2-2").select2({ajax:{url:"https://api.github.com/search/repositories",dataType:"json",delay:250,data:function(e){return{q:e.term,page:e.page}},processResults:function(e,t){return t.page=t.page||1,{results:e.items,pagination:{more:30*t.page<e.total_count}}},cache:!0},placeholder:"Search for a repository",escapeMarkup:function(e){return e},minimumInputLength:1,templateResult:function(e){if(e.loading)return e.text;var t="<div class='select2-result-repository clearfix'><div class='select2-result-repository__avatar'><img src='"+e.owner.avatar_url+"' /></div><div class='select2-result-repository__meta'><div class='select2-result-repository__title'>"+e.full_name+"</div>";e.description&&(t+="<div class='select2-result-repository__description'>"+e.description+"</div>");return t+="<div class='select2-result-repository__statistics'><div class='select2-result-repository__forks'><i class='fa fa-flash'></i> "+e.forks_count+" Forks</div><div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> "+e.stargazers_count+" Stars</div><div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> "+e.watchers_count+" Watchers</div></div></div></div>"},templateSelection:function(e){return e.full_name||e.text}}),$("#select2-3").select2({maximumSelectionLength:2,placeholder:"Add tags"})}};var e=[{id:1,text:"Analyses"},{id:2,text:"Wire frame"},{id:3,text:"Designing"},{id:4,text:"Development"},{id:5,text:"Demo"}];$(document).ready(Select2.init)});
//# sourceMappingURL=select2.js.map