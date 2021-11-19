// for clearing display 
function clearCal(){
    document.getElementById('calciDisplay').value='';
    }
    

    // for displaying what button we click 
    function display(val){
        document.getElementById('calciDisplay').value+=val;
    }
    

    // for calculating 
    function calculationss(){
    let x = document.getElementById("calciDisplay").value;
    let y = eval(x);
    document.getElementById("calciDisplay").value = y;
    }
    