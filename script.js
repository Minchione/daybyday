let array =[];
let str ="";
array[1]="C"
array[2]="Ó"
array[3]=" "
array[4]="1"
array[5]=" "
array[6]="N"
array[7]="G"
array[8]="Ư"
array[9]="Ờ"
array[10]="I"
array[11]=" "
array[12]="Đ"
array[13]="A"
array[14]="N"
array[15]="G"
array[16]=" "
array[17]="M"
array[18]="U"
array[19]="Ố"
array[20]="N"
array[21]=" "
array[22]="Đ"
array[23]="I"
array[24]=" "
array[25]="C"
array[26]="H"
array[27]="Ơ"
array[28]="I"

function thatgia()
{
    let text =document.getElementById("txt").value;
    let j= text.length;
    if (j>0)
    {for (let i=1; i<=j; i++)
        {
        str = str + array[i];
if (i === 29)
{
document.getElementById("txt").value= "";
str = "";
}
}
}
document.getElementById("txt").value = str;
str = "";
setTimeout("thatgia()", 1);
}
