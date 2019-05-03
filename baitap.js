function ngay() {
a = parseInt(document.getElementById("Thang").value);
switch (a) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        let kq1= ("Tháng " + a +" có 31 ngày");
        document.getElementById("kq").innerHTML=kq1;
        break;
    case 2:
        let kq2= ("Tháng " + a +" có 28 hoặc 29 ngày");
        document.getElementById("kq").innerHTML=kq2;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        let kq3= ("Tháng " + a +" có 30 ngày");
        document.getElementById("kq").innerHTML=kq3;
        break;
    default:
        let kq4= ("Không hợp lệ");
        document.getElementById("kq").innerHTML=kq4;

}
    
}