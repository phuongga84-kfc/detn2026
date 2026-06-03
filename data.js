// Bạn có thể dễ dàng thêm, sửa, xóa các link đề thi ở đây
const dbDeThi = {
    "Toán": [
        { name: "THPT Mỹ Đình - Hà Nội", link: "https://azota.vn/de-thi/cpkyt9" },
        { name: "Liên trường Nghệ An lần 5", link: "https://azota.vn/de-thi/uorr05" },
        { name: "Sở GD&ĐT Ninh Bình lần 4", link: "https://azota.vn/de-thi/11kynd" },
        { name: "THPT Lê Hồng Phong Thái Nguyên Lần 3", link: "https://azota.vn/de-thi/90zj2y" },
        { name: "THPT Văn Lang - Hà Nội", link: "https://azota.vn/de-thi/dppwyr" },
        { name: "Sở GD&ĐT Sơn La lần 3", link: "https://azota.vn/de-thi/dmos5t" },
        { name: "Sở GD&ĐT Vĩnh Long", link: "https://azota.vn/de-thi/6or5kz" },
        { name: "Sở GD&ĐT Gia Lai", link: "https://azota.vn/de-thi/bpyy35" },
        { name: "Sở GD&ĐT Lâm Đồng", link: "https://azota.vn/de-thi/1ixh2n" },
        { name: "Sở GD&ĐT Hà Tĩnh lần 2", link: "https://azota.vn/de-thi/vwoly6" },
        { name: "Sở GD&ĐT Nghệ An lần 3", link: "https://azota.vn/de-thi/4y3icu" },
        { name: "Sở GD&ĐT Hải Phòng lần 2", link: "https://azota.vn/de-thi/3urwrq" },
        { name: "Sở GD&ĐT Bắc Ninh lần 2", link: "https://azota.vn/de-thi/xxtl7w" },
        { name: "Sở GD&ĐT Cần Thơ", link: "https://azota.vn/de-thi/xezwxf" },
        { name: "Sở GD&ĐT An Giang", link: "https://azota.vn/de-thi/t18bns" },
        { name: "Sở GD&ĐT Đồng Tháp", link: "https://azota.vn/de-thi/cidtth" },
        { name: "Sở GD&ĐT Đồng Nai lần 2", link: "https://azota.vn/de-thi/2cfsrd" },
        { name: "Sở GD&ĐT Hưng Yên lần 2", link: "https://azota.vn/de-thi/rngbuq" },
        { name: "Sở GD&ĐT Ninh Bình lần 3", link: "https://azota.vn/de-thi/go9qvd" },
        { name: "Sở GD&ĐT Tuyên Quang lần 2", link: "https://azota.vn/de-thi/y2vlli" },
        { name: "Sở GD&ĐT Thanh Hóa lần 2", link: "https://azota.vn/de-thi/biacwx" },
        { name: "Sở GD&ĐT Thái Nguyên", link: "https://azota.vn/de-thi/5zme4n" },
        { name: "Sở GD&ĐT Cà Mau", link: "https://azota.vn/de-thi/7llwlp" },
        { name: "Sở GD&ĐT Đà Nẵng", link: "https://azota.vn/de-thi/5cc4l6" },
        { name: "Sở GD&ĐT Nghệ An lần 2", link: "https://azota.vn/de-thi/gng32n" },
        { name: "Sở GD&ĐT Hải Phòng", link: "https://azota.vn/de-thi/08yzgk" },
        { name: "Sở GD&ĐT Sơn La", link: "https://azota.vn/de-thi/m5ii9l" },
        { name: "Sở Phú Thọ lần 2", link: "https://azota.vn/de-thi/6mil1r" },
        { name: "THPT Phụ Dực – Hưng Yên", link: "https://azota.vn/de-thi/lfn5hy" },
        { name: "THPT Mộ Đức 2 – Quảng Ngãi", link: "https://azota.vn/de-thi/ucwlph" },
        { name: "Sở Quảng Ninh", link: "https://azota.vn/de-thi/fy3ao5" },
        { name: "Sở Đồng Nai", link: "https://azota.vn/de-thi/lbmash" },
        { name: "cụm chuyên môn số 04 – Đắk Lắk", link: "https://azota.vn/de-thi/7r5ozl" },
        { name: "Sở Cao Bằng", link: "https://azota.vn/de-thi/2ugg6a" },
        { name: "Sở Hà Tĩnh", link: "https://azota.vn/de-thi/3q2ivu" },
        { name: "Sở Thái Nguyên lần 1", link: "https://azota.vn/de-thi/hvbkep" },
        { name: "THPT HÀM RỒNG", link: "https://azota.vn/de-thi/umjuzn" },
        { name: "cụm các trường THPT – Bắc Ninh", link: "https://azota.vn/vi/de-thi/8juqfm" },
        { name: "KSCL THPT Lê Thánh Tông - TP.HCM", link: "https://azota.vn/de-thi/atsmqs" },
        { name: "Sở Bắc Ninh", link: "https://azota.vn/de-thi/mzkok6" },
        { name: "Sở Ninh Bình lần 1", link: "https://azota.vn/de-thi/iqknyu" }
    ],
    "Sử": [
        { name: "Sở Đồng Nai lần 2", link: "https://azota.vn/de-thi/yb3jrd" },
        { name: "Sở Điện Biên", link: "https://azota.vn/de-thi/o3dflk" },
        { name: "Sở Ninh Bình Lần 3", link: "https://azota.vn/de-thi/rtah0m" },
        { name: "Sở Tuyên Quang Lần 2", link: "https://azota.vn/de-thi/tuxaj9" },
        { name: "Sở Thanh Hóa Lần 2", link: "https://azota.vn/de-thi/pq5y3i" },
        { name: "Sở Thái Nguyên Lần 2", link: "https://azota.vn/de-thi/64ey8k" },
        { name: "Sở Đà Nẵng", link: "https://azota.vn/de-thi/rebfz5" },
        { name: "Sở Cà Mau", link: "https://azota.vn/de-thi/mjqkmh" },
        { name: "THPT Thanh Thuỷ", link: "https://azota.vn/de-thi/hzqqyv" },
        { name: "Cụm THPT Hiệp Hoà - Tiên Du ", link: "https://azota.vn/vi/de-thi/iivzj8" },
        { name: "Sở GD&ĐT Ninh Bình - Lần 1", link: "https://azota.vn/vi/de-thi/ivtuje" },
        { name: "THPT Chuyên Hạ Long", link: "https://azota.vn/de-thi/icpucn" },
        { name: "Trường THPT May Hà Nội", link: "https://azota.vn/de-thi/lyhwrk" },
        { name: "Liên trường THPT Nghệ An - Lần 1", link: "https://azota.vn/de-thi/ebiucj" },
        { name: "Cụm trường THPT Bắc Ninh", link: "https://azota.vn/de-thi/b5zo3j" }
    ],
    "Địa": [
        { name: "Sở Ninh Bình lần 4 ", link: "https://azota.vn/de-thi/jcsa76" },
        { name: "Sở Hải Phòng lần 2 ", link: "https://azota.vn/de-thi/jcsa76" },
        { name: "THPT Cụm 9 Hà Nội Lần 3", link: "https://azota.vn/de-thi/itk8a5" },
        { name: "Sở Sơn La lần 3 ", link: "https://azota.vn/de-thi/zsp6h3" },
        { name: "Sở Vĩnh Long ", link: "https://azota.vn/de-thi/c3uw25" },
        { name: "Sở Hà Tĩnh ", link: "https://azota.vn/de-thi/cdy2gkon" },
        { name: "Sở Thái Nguyên lần 2 ", link: "https://azota.vn/de-thi/ezc5on" },
        { name: "Sở Cà Mau ", link: "https://azota.vn/de-thi/pbxycq" },
        { name: "Sở Gia Lai ", link: "https://azota.vn/de-thi/tztssd" },
        { name: "Sở Cần Thơ ", link: "https://azota.vn/de-thi/ogfyan" },
        { name: "Sở Ninh Bình lần 3", link: "https://azota.vn/de-thi/dj0rnq" },
        { name: "Sở Hưng Yên lần 2", link: "https://azota.vn/de-thi/ypudxr" },
        { name: "Sở Thanh Hóa lần 2", link: "https://azota.vn/de-thi/8an4be" },
        { name: "Sở Đà Nẵng", link: "https://azota.vn/de-thi/pzk6yw" },
        { name: "Sở Nghệ An lần 2", link: "https://azota.vn/de-thi/eq2zzq" },
        { name: "Sở Huế", link: "https://azota.vn/de-thi/hem8q0" },
        { name: "Sở Lạng Sơn", link: "https://azota.vn/de-thi/jquaah" },
        { name: "Sở Cao Bằng", link: "https://azota.vn/de-thi/cpdbil" },
        { name: "Sở GD&ĐT Lào Cai", link: "https://azota.vn/de-thi/2dlzsv" },
        { name: "Sở Giáo Dục Ninh Bình - Lần 1", link: "https://azota.vn/de-thi/msd93j" },
        { name: "Sở GD Thái Nguyên Lần 1", link: "https://azota.vn/de-thi/wtgl0o" }
    ],
    "Ngữ Văn": [
        { 
            name: "Bộ 20 đề Đồng Nai", 
            link: "Van/Bộ 20 đề Đồng Nai.docx",
            type: "file" 
        },
        { 
            name: "Sở Cao Bằng", 
            link: "Van/Cao Bằng.docx",
            type: "file" 
        },
        { 
            name: "Sở Hà Tĩnh", 
            link: "Van/Hà Tĩnh.docx",
            type: "file" 
        },
        { 
            name: "Sở Hải Phòng", 
            link: "Van/Hải Phòng.docx",
            type: "file" 
        },
        { 
            name: "Sở Phú Thọ", 
            link: "Van/Phú Thọ.docx", 
            type: "file" 
        },
        { 
            name: "Sở Sơn La", 
            link: "Van/Sơn La.docx", 
            type: "file" 
        },
        { 
            name: "Sở Tuyên Quang", 
            link: "Van/Tuyên Quang.docx",
            type: "file" 
        }
    ]
};