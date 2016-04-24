
 $(document).ready(function(){
     
var chart = new Chartist.Line('.ct-chart', {
   
  //labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20],
  series: [
      
    [3,  3, 5,  4,  3, 4,  3,  3,  3, 4,  3,  2,  3,  4, 3,  4,  3,  2,   ],
    [10, 9, 11, 10, 9, 11, 12, 11, 9, 10, 11, 11, 10, 9, 10, 11, 10, 9, ,  ],
    
    
  ]
}, {
  showLine: true,
  fullWidth: true,
  showLabel: false,
  low: 0,
  height:'100px',
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