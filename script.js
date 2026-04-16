// --- LOGIC GIAO DIỆN CHỌN MÔN / ĐỀ THI ---
const subjectSection = document.getElementById('subject-section');
const provinceSection = document.getElementById('province-section');
const backBtn = document.getElementById('back-btn');
const pageDesc = document.getElementById('page-desc');

const countdownContainer = document.getElementById('countdown-container');

function showProvinces(subject) {
    subjectSection.style.display = 'none';
    
    // --- THÊM DÒNG NÀY ĐỂ ẨN ĐỒNG HỒ ---
    countdownContainer.style.display = 'none'; 
    
    backBtn.style.display = 'inline-block';
    pageDesc.innerText = `Danh sách đề thi thử môn ${subject}`;
    
    provinceSection.innerHTML = '';
    const provinces = (typeof dbDeThi !== 'undefined') ? dbDeThi[subject] : [];
    
    if (!provinces || provinces.length === 0) {
        provinceSection.innerHTML = '<p style="grid-column: 1/-1; color: #d97757; font-style: italic;">Hiện tại chưa có đề cập nhật cho môn này. Bạn quay lại sau nhé!</p>';
    } else {
        provinces.forEach(item => {
            const aTag = document.createElement('a');
            aTag.href = item.link;
            aTag.target = "_blank"; 
            aTag.className = 'btn';
            aTag.innerText = item.name;
            provinceSection.appendChild(aTag);
        });
    }
    provinceSection.style.display = 'grid';
}

function goBack() {
    provinceSection.style.display = 'none';
    backBtn.style.display = 'none';
    
    // --- THÊM DÒNG NÀY ĐỂ HIỆN LẠI ĐỒNG HỒ ---
    countdownContainer.style.display = 'block'; 
    
    subjectSection.style.display = 'grid';
    pageDesc.innerText = 'wao wao wao ';
}


const examDate = new Date(2026, 5, 12, 7, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = examDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "<h3>Thi Vui vẻ nhen 🌟</h3>";
        return;
    }

    // Tính toán thời gian
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);