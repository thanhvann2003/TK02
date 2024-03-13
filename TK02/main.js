
function giaiPhuongtrinh() {
    var a = parseFloat(document.dataform.hsa.value);
    var b = parseFloat(document.dataform.hsb.value);

    var result = "Phương trình: "+ a + "x + "+ b+ " = 0 <br> ";

    if(a==0 && b==0)
        result += "Phương trình có vô số nghiệm "
    if(a==0 && b!=0)
        result += " Phương trình vô nghiệm "
    if(a!=0)
        result += "kết quả có nghiệm là:" + (-b / a).toFixed(2)

        document.getElementsByClassName("result")[0].innerHTML = result; 


}

// Hàm bài 2

function send() {
    var arr = document.getElementsByClassName("input-grp2");
    var hvt = arr[0].value;
    var sdt = arr[1].value;
    var mathe = arr[2].value;
    var email = arr[3].value;
    var hoadon = arr[4].value;
    var diachi = arr[5].value;
    var select = document.getElementById('select-value').value;
    var required = document.getElementById('input-description').value;
    
    // Hàm đặt thêm
    var fullname = 'Họ và tên:';
    var tel = 'Số điện thoại:';
    var codecard ='Mã thẻ:';
    var mail ='Email:';
    var bill ='Mã hóa đơn:';
    var choice = 'Lựa chọn:';
    var require = 'Chi tiết mô tả:';
    var address = 'Địa chỉ:';

    if(hvt == "" || sdt == "" || mathe == "" || email == "" || hoadon == "" || diachi ==""){
        alert ("please fill all fields");
        return;
    }
    if(isNaN(sdt)){
        alert (" Số điện thoại Must be a number");
        return;
    }
    if(isNaN(mathe)){
        alert (" Mã thẻ Must be a number");
        return;
    }
    if(isNaN(hoadon)){
        alert (" Mã hóa đơn Must be a number");
        return;
    }
    var co = confirm('confirm your information:\n'+ fullname+" " +hvt+"\n"+tel+" "+sdt+"\n"+codecard+" "+ mathe+"\n"+mail+" "+email+"\n"+bill+" "+hoadon+"\n"+address+" "+diachi+"\n"+choice+" "+select+"\n"+require+" "+required+"\n");
     if(co==1){
        alert('information sent');
        return;
     }

}   

// Hàm bài 3


 
function sent(){
    var tieude = 'Tiêu đề:';
    var name = 'Họ và tên:';
    var imail = 'Email:';
    var phonenumber = 'Số điện thoại:';
    var phanhoi = 'Thông tin phản hồi:';
    var ten = document.dataform3.ten.value;
    var mail3 = document.dataform3.mail3.value;
    var title = document.dataform3.title.value;
    var phone = document.dataform3.phone.value;
    var contact =document.getElementById('contact-p3').value;

    if(ten == "" || mail3 == "" || title == "" || phone == "" || contact == ""){
        alert("please fill all fields");
        return;
    }

    if(isNaN(phone)){
        alert("must be a number");
        return;
    }

    var dung  = confirm('confirm your information:\n'+ name +" " + ten + "\n"+imail+" "+mail3+"\n" + tieude +" "+title +"\n"+ phonenumber + " " +phone+ "\n"+ phanhoi+" "+contact+"\n"   );
       
        if(dung==1){
            alert("informtion sent");
            return;
        }
}






function calculate() {
    let weight = document.getElementById('weight').value
    let height= document.getElementById('height').value /100
    let bmi = (weight / (height * height))
    
    document.getElementById('bmi-output').innerHTML= 'Your BMI is' +" "+ bmi.toFixed(2)
    // tofixed làm tròn 

    if(bmi < 18.5){
        document.getElementById('total').innerHTML =  'Tình trạng : Dưới chuẩn '
    } else if (bmi >= 18.5 && bmi <= 24.9 ){
        document.getElementById('total').innerHTML =  'Tình trạng : Bình thường '
    } else if (bmi >= 25 && bmi <= 29.9){
        document.getElementById('total').innerHTML =  'Tình trạng : Thừa cân '
    } else if(bmi>=30 && bmi<34.9){
        document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 1 nè lêu lêu nhớ đi khám định kì'
    } else if(bmi>=35&&bmi<=39.9){
        document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 2 nè lêu lêu đứng lên vận động đi ' 
    } else if(bmi>=40){
        document.getElementById('total').innerHTML =  'Tình trạng : Béo phì cấp độ 3 nè lêu lêu nhớ hạn chế nuốt mỡ lại' 

    }
    
    if(weight == "" || height =="" || isNaN(weight) || isNaN(height) ){
        document.getElementById('total').innerHTML =  'vui lòng nhập đúng thông tin'
        document.getElementById('bmi-output').innerHTML= 'No calculate'
        
    }
}

// Bài 5
    function login(){
        var matkhau = document.form5.pass.value;
        var tendangnhap = document.form5.username.value;

        if(tendangnhap==""&& matkhau == ""){
            alert('Thông tin đăng nhập không để trống');
            return;
        }

        var co = confirm('Bạn muốn hiện mật khẩu' );
            if(co=1){
                confirm('mật khẩu:\n' + matkhau);
            }


    }
    