import * as mydata from 'data/4x4.json';

var example = document.getElementById('example'),
        ctx     = example.getContext('2d');
        example.width  = 512;
            example.height = 512;
        
    
    ctx.strokeRect( 0, 0, 512/4,512/4);
let jsonfile ='data/4x4.json';
var mydata =JSON.eval('('+'(data/4x4.json)'+')' );
    
    console.log (mydata);