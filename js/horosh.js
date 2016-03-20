$(function(){
            $('.navtogg').on('click',function() {
                
                $('.navtogg').toggleClass('open');
                
                 $(".opsidebar.uncollapse").toggle('fast');
                
                  $(".opsidebar.collapsed").animate({
                width: "toggle"
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

        }
    );