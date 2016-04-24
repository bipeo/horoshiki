

 $(document).ready(function(){
       /*var line1 = [14, 32, 41, 44, 40, 47, 53, 67];
  
  var plot1 = $.jqplot('chart_1', [line1], {
      title: 'Chart with Point Labels', 
      seriesDefaults: { 
        showMarker:true,
        pointLabels: {
            show:true,
            labels:['119', '91', '12']
            }
       
      },
      
  }); */
     
var chart = new Chartist.Line('.ct-chart', {
   
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20],
  series: [
      
    [4, 2, 4, 6, 7, 5, 8, 4, 3, 5, 6, 4, 6, 4, 2, 3, 7, 9 ],
    
    
  ]
}, {
  showLine: true,
  fullWidth: true,
  showLabel: false,
  low: 0,
  chartPadding: 0,
  height:'40px',
  axisY: {
      showLabel: false,
      showGrid:false,
      
  },
  axisX: {
   showLabel: false,
   showGrid: false,
   offset: 10
  },
  
  lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  }),
});

  


   


 })
 
 
 
 
