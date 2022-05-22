class conNguoi{
    ten:string;
    tuoi:number;
    gioiTinh:number;
    diaChi:string;

    constructor(ten:string, tuoi:number, gioiTinh: number, diaChi:string){
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;   
    }

    gt(): string{
        if (this.gioiTinh == 1){
            return "Nam";
        } else if(this.gioiTinh){
            return "Nu";
        } else{
            return "Gioi tinh thu 3";
        }
    }

    hienThiThongTin(): void{
        var tbody = document.getElementById('tbody');
        tbody.innerHTML +=
        `<tr>
            <td>${this.ten}</td>
            <td>${this.tuoi}</td>
            <td>${this.gt()}</td>
            <td>${this.diaChi}</td>
        </tr>`
    }
}

var conNguoi1 = new conNguoi('KimYen', 18,2,'Ha Noi')
conNguoi1.hienThiThongTin()
var conNguoi2 = new conNguoi('NgocAnh', 18,1,'Ha Noi')
conNguoi2.hienThiThongTin()
var conNguoi3 = new conNguoi('ThiHai', 19,3,'Ha Noi')
conNguoi3.hienThiThongTin()

class sinhVien extends conNguoi{
    msv: string;
    diemToan: number;
    diemLy: number;
    diemHoa: number;

    constructor(ten:string, tuoi:number, gioiTinh: number, diaChi:string, msv: string, diemToan: number, diemLy: number, diemHoa: number){
        super(ten, tuoi, gioiTinh, diaChi);
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    diemTB(): number {
        return((this.diemToan + this.diemLy + this.diemHoa) / 3);
    };

    checkDiemTB(): string {
        let xepLoai = this.diemTB();
        if (xepLoai < 5){
            return 'Kem';
        } else if (xepLoai >=5 && xepLoai <8){
            return 'Kha';
        } else {
            return 'Gioi';
        } 
    }
    showSinhVien(): void{
        var tbody_sv = document.getElementById("tbody-sv");
        tbody_sv.innerHTML += `
            <tr>
                <td>${this.msv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>
                <td>${this.diemToan}</td>
                <td>${this.diemLy}</td>
                <td>${this.diemHoa}</td>
                <td>${this.diemTB().toFixed(2)}</td>
                <td>${this.checkDiemTB()}</td>
            </tr>
        `;
    }

}

var sinhvien1 = new sinhVien('KimYen',18,2,'Ha Noi','B9170',9,8,9);
sinhvien1.showSinhVien();
var sinhvien2 = new sinhVien('NgocAnh',18,2,'Ha Noi','B9165',7,5,6);
sinhvien2.showSinhVien();
var sinhvien3 = new sinhVien('ThiHai',19,2,'Ha Noi','B9168',4,4,4);
sinhvien3.showSinhVien();

class nhanVien extends conNguoi{
    mnv: string;
    luongCB: number;
    soNgayCong: number;

    constructor(ten:string, tuoi:number, gioiTinh: number, diaChi:string, mnv: string, luongCB: number, soNgayCong: number){
        super(ten,tuoi,gioiTinh,diaChi);
        super.gt();
        this.mnv = mnv;
        this.luongCB = luongCB;
        this.soNgayCong = soNgayCong;
    }

    tinhLuong(): number{
        return this.luongCB * this.soNgayCong;
    }

    checkLuong():string{
        var tongLuong = this.tinhLuong();
        
        if (tongLuong <= 5000000) {
            return "Nhan vien moi";
        } else if (tongLuong > 5000000 && tongLuong < 10000000) {
            return "Nhan vien chinh thuc";
        }else{
            return "Nhan vien lau nam";
        }
    }

    showNhanVien(): void{
        var tbody_gv = document.getElementById("tbody-gv");
        tbody_gv.innerHTML += `
            <tr>
                <td>${this.mnv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>
                <td>${this.soNgayCong}</td>
                <td>${this.luongCB}</td>
                <td>${this.tinhLuong()}</td>
                <td>${this.checkLuong()}</td>
            </tr>
        `

    }
}

var nhanVien1 = new nhanVien('NgocAnh',18,2,'Ha Noi','B9165',500000,12);
nhanVien1.showNhanVien();
var nhanVien2 = new nhanVien('ThiHai',19,1,'Ha Noi','B9173',1000000,30);
nhanVien2.showNhanVien();