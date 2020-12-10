var student_array=[];
function add_students(){
    student_array.push(document.getElementById("name_of_the_student_1").value);
    student_array.push(document.getElementById("name_of_the_student_2").value);
    student_array.push(document.getElementById("name_of_the_student_3").value);
    student_array.push(document.getElementById("name_of_the_student_4").value);
document.getElementById("list_students").innerHTML=student_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort_students(){
    student_array.sort();
    document.getElementById("list_students").innerHTML=student_array;
}