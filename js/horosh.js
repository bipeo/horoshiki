$(function(){
            $('.navtogg').on('click',function() {
                
                $('.navtogg, body').toggleClass('open');
                
                 $(".opsidebar.uncollapse").toggle('fast');
                
                  $(".opsidebar.collapsed").animate({
                width: "toggle"
            });

            });
            
            
                $(".checkbox").change(function() {
                    $(this).parent('.chlabel').toggleClass('chkd');
                });

    
            
          
            
            
            
            
     $('.drop.outer-sel .styledSelect').on('click',function() {
         $('.outer-sel.cldbox').find('.opts').hide();
         $('.drop.outer-sel').find('.opts').hide();
         $(this).toggleClass('active').next('.opts').toggle();
     });

     $('.buter').find('.btog').on('click',function() {
        
       
        if($(this).parent().find('.opts').is(':visible')) {
            $('.buter').find('.opts').hide();
            $(this).parent().find('.opts').hide()
        } else {
             $('.buter').find('.opts').hide();
            $(this).parent().find('.opts').show()
        } //for buter
          
     });
     
       $('.tabs_2.pref > ul > li > .tg_oun').on('click',function() {
        if($(this).parent().find('.blcom').is(':visible')) {
            $('.tabs_2.pref > ul > li').removeClass('act');
             $(this).parent().removeClass('act');
            $('.tabs_2.pref > ul > li').find('.blcom').hide();
            $(this).parent().find('.blcom').hide()
        } else {
              $('.tabs_2.pref > ul > li').removeClass('act');
            $(this).parent().addClass('act');
             $('.tabs_2.pref > ul > li').find('.blcom').hide();
            $(this).parent().find('.blcom').show()
        } //for tabs_2
//         var c = $(".tabs_2 > ul > li");
//           c.each(function(b, a) {
//           $(a).bind('click',function(e) {
//           c.not($(a).toggleClass('show_with')).removeClass("show_with");
//            return false;
//           })
//       
//            });
     });  
     
     
    
     $('.drtab').on('click',function() {
         $(this).next().find('.opts').toggle(); //for drtab
     });
     
     $('.compare_but').on('click',function() {
         $('.drop.outer-sel').find('.opts').hide(); 
         $(this).next().find('.opts').toggle(); //for drtab
     });
     
     
     $('.drop.outer-sel .but').on('click',function() {
         $('.drop.outer-sel').find('.opts').hide();
     });
            
             $(document).mouseup(function (e)
    {
        var container = $(".drop.outer-sel .opts, .drop.outer-sel .select,  .drtab, .cldbox .opts, .compare_but, .btog, .tg_oun, .ui-datepicker ");

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
           $('.drop.outer-sel .opts').hide();
           $('.cldbox .opts').hide()
           $('.outer-sel .options, .outer-sel .opts').hide()
          
            $('.tabs_2.pref > ul > li').removeClass('act'); //remove tabs_2 class
         
        }
    });

            
            
            // Iterate over each select element
$('select.cus-sel').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
         
           
            
           
                 
        
    }); 
    
    
     $(document).ready(function()
        {

            $(window).load(function()
                {
                    getWidthAndHeight()
                }
            );


            $(window).resize(function()
                {
                    getWidthAndHeight()
                }
            );


            function getWidthAndHeight() {
                //var ass = $('.ass_box').show();
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);

                    var wpbar = $('.cabtop').outerHeight();
                   scrollHeight -=   wpbar;
                $(".opsidebar").css("min-height", scrollHeight + "px");
                
            }
            
            
            
                $(window).load(function()
                {
                    setPos();
                }
            );
            $(window).resize(function()
                {
                   
                     setPos();
                }
            );
    
    
            function setPos() {
                setTimeout(function(){
              $('.grnums').find('li').remove();       
             $('.ct-series-a .ct-point').each(function() {
                 var it = $(this).attr('ct:value');
                 var xpos = "left:"+parseInt($(this).attr('x1')) + "px";
                 var ypos = "top:"+parseInt($(this).attr('y1')) + "px;";
                 $('.grnums.box_a').append('<li style='+ xpos +';'+ ypos + '>'+it+  '</li>');
             });
             
             
               $('.ct-series-b .ct-point').each(function() {
                 var it = $(this).attr('ct:value');
                 var xpos = "left:"+parseInt($(this).attr('x1')) + "px";
                 var ypos = "top:"+parseInt($(this).attr('y1')) + "px;";
                 $('.grnums.box_b').append('<li style='+ xpos +';'+ ypos + '>'+it+  '</li>');


             });
             
         }, 0);
         }
            
            
            
            //attach keypress to input
            $('.input_01.intd').keydown(function(event) {
                // Allow special chars + arrows 
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 
                    || event.keyCode == 27 || event.keyCode == 13 
                    || (event.keyCode == 65 && event.ctrlKey === true) 
                    || (event.keyCode >= 35 && event.keyCode <= 39)){
                        return;
                }else {
                    // If it's not a number stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                        event.preventDefault(); 
                    }   
                }
            });
            
            
     
            
          
            
            
        }
    );
    
    
    
    
    
    