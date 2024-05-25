// Bài tập quản lý sinh viên
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Điểm chuẩn hội đồng
 * Điểm 3 môn thi
 * Khu vực ưu tiên (select/ nhập X)
 * Đối tượng ưu tiên (select/ nhập 0)
 *
 *
 *
 *
 * Các bước xử lí:
 * Tính tổng điểm 3 môn
 * Xét ưu tiên để cộng điểm
 * So với điểm chuẩn hội đồng
 *
 * Đầu ra:
 * Thí sinh đậu/rớt (điểm tổng >= điểm chuẩn && không có điểm 0 )
 * Điểm tổng
 */

document
  .getElementById("ketQuaTuyenSinh")
  .addEventListener("click", function () {
    let diemChuan = document.getElementById("diemChuan").value * 1;
    let diemKhuVuc = document.getElementById("diemKhuVuc").value * 1;
    let diemDoiTuong = document.getElementById("diemDoiTuong").value * 1;
    let diemMonThuNhat = document.getElementById("diemMonThuNhat").value * 1;
    let diemMonThuHai = document.getElementById("diemMonThuHai").value * 1;
    let diemMonThuBa = document.getElementById("diemMonThuBa").value * 1;
    let diemTong =
      diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemKhuVuc + diemDoiTuong;
    let theP = document.createElement("p");
    theP.className = "mt-3 fw-semibold";
    if (diemMonThuNhat == 0 || diemMonThuHai == 0 || diemMonThuBa == 0) {
      theP.innerHTML = `Bạn đã rớt do có điểm 0`;
      console.log(diemTong);
    } else if (diemTong < diemChuan) {
      theP.innerHTML = `Bạn đã rớt với điểm tổng: ${diemTong}`;
    } else {
      theP.innerHTML = `Bạn đã đậu với điểm tổng: ${diemTong}`;
    }
    document.getElementById("BT01").appendChild(theP);
  });

// Bài tập tính tiền điện
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Tên khách hàng
 * Số Kw điện tiêu thụ
 *
 *
 * Các bước xử lí:
 * 0-50kw: 500đ
 * 51-100kw: 650đ
 * 101-200kw: 850đ
 * 201-350kw: 1100đ
 * >350kw: 1300đ
 *
 * Đầu ra:
 * Tên khách hàng: XX, tiền điện tháng này: XX
 */

const giaTien50KwDauTien = 500;
const giaTienTu50KwDen100Kw = 650;
const giaTienTu100KwDen200Kw = 850;
const giaTienTu200kWDen350Kw = 1100;
const giaTienTu350KwTroLen = 1300;

function tinhTienDien(event) {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;
  let thongBao = document.createElement("div");
  let tienDien = 0;
  if (soKw <= 50) {
    tienDien = soKw * giaTien50KwDauTien;
  } else if (soKw > 50 && soKw <= 100) {
    tienDien = 50 * giaTien50KwDauTien + (soKw - 50) * giaTienTu50KwDen100Kw;
  } else if (soKw > 100 && soKw <= 200) {
    tienDien =
      50 * giaTien50KwDauTien +
      50 * giaTienTu50KwDen100Kw +
      (soKw - 100) * giaTienTu100KwDen200Kw;
  } else if (soKw > 200 && soKw <= 350) {
    tienDien =
      50 * giaTien50KwDauTien +
      50 * giaTienTu50KwDen100Kw +
      100 * giaTienTu100KwDen200Kw +
      (soKw - 200) * giaTienTu200kWDen350Kw;
  } else {
    tienDien =
      50 * giaTien50KwDauTien +
      50 * giaTienTu50KwDen100Kw +
      100 * giaTienTu100KwDen200Kw +
      150 * giaTienTu200kWDen350Kw +
      (soKw - 350) * giaTienTu350KwTroLen;
  }
  console.log(tienDien);
  thongBao.className = "mt-3 p-2 fw-semibold rounded";
  thongBao.innerHTML = `Tiền điện tháng này của khách hàng ${hoTen} là: ${tienDien.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
  document.getElementById("BT02").appendChild(thongBao);
}

// Bài tập tính thuế TNCN
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Họ tên
 * Tổng thu nhập năm
 * Số người phụ thuộc
 *
 *
 *
 * Các bước xử lí:
 * Tính tổng thu nhập chịu thế: Tổng năm - 4 triệu - 1.6 tr * số người phụ thuộc
 * Tính ra thuế suất theo tổng thu nhập chịu thuế
 * Thuế TNCN: Tổng thu nhập chịu thuế * thuế suất
 *
 *
 * Đầu ra:
 * Thuế TNCN của XX là: XX
 */

document.getElementById("ketQuaTNCN").onclick = function () {
  let hoVaTen = document.getElementById("hoVaTen").value;
  let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let tongThuNhapChiuThue = tongThuNhap - 4000000 - 1600000 * soNguoiPhuThuoc;
  let thueTNCN = 0;
  if (tongThuNhapChiuThue <= 0) {
    thueTNCN = 0;
  } else if (tongThuNhapChiuThue > 0 && tongThuNhapChiuThue <= 60000000) {
    thueTNCN = tongThuNhapChiuThue * 0.05;
  } else if (
    tongThuNhapChiuThue > 60000000 &&
    tongThuNhapChiuThue <= 120000000
  ) {
    thueTNCN = tongThuNhapChiuThue * 0.1;
  } else if (
    tongThuNhapChiuThue > 120000000 &&
    tongThuNhapChiuThue <= 210000000
  ) {
    thueTNCN = tongThuNhapChiuThue * 0.15;
  } else if (
    tongThuNhapChiuThue > 210000000 &&
    tongThuNhapChiuThue <= 384000000
  ) {
    thueTNCN = tongThuNhapChiuThue * 0.2;
  } else if (
    tongThuNhapChiuThue > 384000000 &&
    tongThuNhapChiuThue <= 624000000
  ) {
    thueTNCN = tongThuNhapChiuThue * 0.25;
  } else if (
    tongThuNhapChiuThue > 624000000 &&
    tongThuNhapChiuThue <= 960000000
  ) {
    thueTNCN = tongThuNhapChiuThue * 0.3;
  } else {
    thueTNCN = tongThuNhapChiuThue * 0.35;
  }
  document.getElementById(
    "thongBaoThue"
  ).innerHTML = `Thuế TNCN của ${hoVaTen} là: ${thueTNCN.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}`;
};

// Bài tập tính tiền cáp
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Chọn loại khách hàng (option, nếu là khách Doanh nghiệp thì dùng onchange để bật input số kết nối)
 * Nhà dân:
 * phí hóa đơn (mặc định $4.5)
 * phí dịch vụ (mặc định $20.5)
 * phí thuê kênh $7.5/kênh
 *
 * Doanh nghiệp
 * phí hóa đơn (mặc định $15)
 * phí dịch vụ (75$ cho 10 kết nối đầu, sau đó mỗi kết nối là $5)
 * phí thuê kênh $50/kênh
 *
 *
 *
 * Các bước xử lí:
 * Tính ra 3 loại phí theo loại khách hàng
 * Cộng tổng
 *
 * Đầu ra:
 * Tiền cáp
 */

// document.getElementById("tinhTienCap").onclick = function () {
//   let loaiKhachHang = document.getElementById("loaiKhachHang").value;
//   console.log(loaiKhachHang);
// };

function hienThiTinhSoKetNoi() {
  let x = document.getElementById("loaiKhachHang").value;
  console.log(x);
  if (x == "Doanh nghiệp") {
    let soKetNoi = document.createElement("div");
    soKetNoi.className = "mb-3";
    soKetNoi.innerHTML = `<label for="" class="form-label" id="ketNoi">Số kết nối</label>
    <input type="text" class="form-control" name="" id="soKetNoi" aria-describedby="helpId" placeholder="Nhập số kết nối" />`;
    document.getElementById("thongTin").appendChild(soKetNoi);
  } else if (x == "Nhà dân") {
    ketNoi.remove();
    soKetNoi.remove();
  }
}

const kiemTraPhiXuLyHoaDon = (loaiKhachHang) => {
  switch (loaiKhachHang) {
    case "Nhà dân":
      return 4.5;

    case "Doanh nghiệp":
      return 15;
  }
};

const kiemTraPhiThueKenhCaoCap = (loaiKhachHang) => {
  switch (loaiKhachHang) {
    case "Nhà dân":
      return 7.5;

    case "Doanh nghiệp":
      return 50;
  }
};

document.getElementById("tinhTienCap").onclick = function () {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;

  let phiHoaDon = kiemTraPhiXuLyHoaDon(loaiKhachHang);
  let phiThueKenhCaoCap =
    kiemTraPhiThueKenhCaoCap(loaiKhachHang) * soKenhCaoCap;

  let phiDichVuCoBan = 0;
  let tongTienCap = 0;
  if (loaiKhachHang == "Nhà dân") {
    phiDichVuCoBan = 20.5;
    tongTienCap = phiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  } else {
    let soKetNoi = document.getElementById("soKetNoi").value * 1;

    if (soKetNoi <= 10) {
      phiDichVuCoBan = 75;
    } else {
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    }
    tongTienCap = phiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
  }
  document.getElementById(
    "thongBaoCuoc"
  ).innerHTML = `Tổng tiền cáp của Quý khách là: $${tongTienCap}`;
};
