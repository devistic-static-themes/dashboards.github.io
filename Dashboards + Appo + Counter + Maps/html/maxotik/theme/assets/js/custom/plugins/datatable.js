"use strict";var DataTableDemo=DataTableDemo||{};$(function(){DataTableDemo={init:function(){DataTableDemo.basicDataTable(),DataTableDemo.scrollYDataTable(),DataTableDemo.scrollXDataTable(),DataTableDemo.rowSelectionDataTable()},basicDataTable:function(){$("#dataTable-1").each(function(){$(this).DataTable({order:[[3,"desc"]]})})},scrollYDataTable:function(){$("#dataTable-2").DataTable({scrollY:"320px",scrollCollapse:!0,paging:!1,fnInitComplete:function(){new PerfectScrollbar(".dataTables_scrollBody")},fnDrawCallback:function(a){new PerfectScrollbar(".dataTables_scrollBody")}})},scrollXDataTable:function(){$("#dataTable-3").DataTable({scrollX:!0,paging:!1,fnInitComplete:function(){new PerfectScrollbar(".dataTables_scrollBody")},fnDrawCallback:function(a){new PerfectScrollbar(".dataTables_scrollBody")}})},rowSelectionDataTable:function(){$("#dataTable-4").DataTable(),$("#dataTable-4 tbody").on("click","tr",function(){$(this).toggleClass("selected")})}},$(document).ready(DataTableDemo.init)});
//# sourceMappingURL=datatable.js.map