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
           $('.drop.outer-sel').find('.opts').hide();
         $(this).toggleClass('active').next('.opts').show();
        
     });
     $('.drop.outer-sel .but').on('click',function() {
         $('.drop.outer-sel').find('.opts').hide();
     });
            
             $(document).mouseup(function (e)
    {
        var container = $(".drop.outer-sel .opts, .drop.outer-sel .select");

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
            $('.drop.outer-sel .opts').hide();
         
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
                $(".opsidebar, .ymap_opt").css("min-height", scrollHeight + "px");
                
            }
            
            
            
          
            
            
        }
    );
    
    
    
    