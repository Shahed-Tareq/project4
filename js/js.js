$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  
  new WOW().init();

const show = document.getElementById('show');
const list = document.getElementById('list')
function show_list(){
    list.classList.toggle('active');
}
show.addEventListener('click' , show_list , false);
let one = document.getElementById('first_div');
let two = document.getElementById('second_div');
let three = document.getElementById('third_div');
let four = document.getElementById('fourth_div');
let ones = document.getElementById('one_d');
let twos = document.getElementById('two_d');
let threes = document.getElementById('three_d');
let fours = document.getElementById('four_d');

function show_first_Div(){
ones.style.display="block";
twos.style.display="none";
threes.style.display="none";
fours.style.display="none";
}
function show_second_Div(){
    ones.style.display="none";
    twos.style.display="block";
    threes.style.display="none";
    fours.style.display="none";
}
function show_third_Div(){
    ones.style.display="none";
    twos.style.display="none";
    threes.style.display="block";
    fours.style.display="none";
 }
 function show_fourth_Div(){
    ones.style.display="none";
    twos.style.display="none";
    threes.style.display="none";
    fours.style.display="block";
 }
 one.addEventListener('click' , show_first_Div , false);
 two.addEventListener('click' , show_second_Div , false);
three.addEventListener('click' , show_third_Div , false);
 four.addEventListener('click' , show_fourth_Div , false);


            

