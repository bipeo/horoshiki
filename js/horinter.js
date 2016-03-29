        
        
         $(document).ready(function()
        {
        $('.tab_st5 tr').each(function() {
            var el  = $(this).find('td[rowspan]');
            var num  = el.attr('rowspan');
            el.parent().addClass('firstrow');
           
            });
        });