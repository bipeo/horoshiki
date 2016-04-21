
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
  //labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20],
  series: [
    [3, 3, 5, 4, 3, 4, 3, 3, 3, 4, 3, 2, 3, 4, 3, 4, 3, 2, 4,5],
    [10, 9, 11, 10, 9, 11, 12, 11, 9, 10, 11, 11, 10, 9, 10, 11, 10, 9, 10, 9 ],
    
  ]
}, {
  showLine: true,
  fullWidth: true,
  showLabel: false,
  low: 0,
  chartPadding: 0,
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