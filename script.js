// --- LOGIC GIAO DIỆN CHỌN MÔN / ĐỀ THI ---
const subjectSection = document.getElementById("subject-section");
const provinceSection = document.getElementById("province-section");
const backBtn = document.getElementById("back-btn");
const pageDesc = document.getElementById("page-desc");
const countdownContainer = document.getElementById("countdown-container");

function showProvinces(subject) {
  // Ẩn các phần không cần thiết
  subjectSection.style.display = "none";
  countdownContainer.style.display = "none";
  
  // Hiện nút Back và cập nhật Text
  backBtn.style.display = "inline-flex";
  pageDesc.innerHTML = `Đang hiển thị đề thi môn <b style="color: var(--primary-orange)">${subject}</b>`;

  provinceSection.innerHTML = "";
  const provinces = typeof dbDeThi !== "undefined" ? dbDeThi[subject] : [];

  if (!provinces || provinces.length === 0) {
    provinceSection.innerHTML = "<p style='color: var(--text-muted); width: 100%; text-align: center; grid-column: 1/-1;'>Đang cập nhật đề thi...</p>";
  } else {
    provinces.forEach((item, index) => {
      const aTag = document.createElement("a");
      aTag.className = "btn glass-effect";
      // Thêm delay nhỏ để tạo hiệu ứng xuất hiện lần lượt
      aTag.style.animationDelay = `${index * 0.05}s`;
      aTag.innerText = item.name;

      if (item.type === "file") {
        aTag.href = item.link;
        aTag.target = "_blank";
      } else {
        aTag.href = item.link;
        aTag.target = "_blank";
      }
      provinceSection.appendChild(aTag);
    });
  }
  
  // Reset animation class để lần nào bấm cũng có hiệu ứng
  provinceSection.classList.remove('animate-enter');
  void provinceSection.offsetWidth; // Trigger reflow
  provinceSection.classList.add('animate-enter');
  
  provinceSection.style.display = "grid";
}

// --- LOGIC MỞ MODAL ĐỌC FILE ---
function openDoc(title, fileName) {
  const modal = document.getElementById("doc-modal");
  const docTitle = document.getElementById("doc-title");
  const downloadBtn = document.getElementById("download-btn");
  const pdfViewer = document.getElementById("pdf-viewer");

  docTitle.innerText = title;
  downloadBtn.href = fileName;
  downloadBtn.download = fileName;

  pdfViewer.src = fileName;
  modal.style.display = "block";
}

// --- LOGIC ĐÓNG MODAL ---
function closeDoc() {
  document.getElementById("doc-modal").style.display = "none";
  document.getElementById("viewer-container").innerHTML = '<iframe id="pdf-viewer" src="" frameborder="0" style="width: 100%; height: 100%"></iframe>';
}

function goBack() {
  provinceSection.style.display = "none";
  backBtn.style.display = "none";
  
  // Trả lại giao diện ban đầu
  countdownContainer.style.display = "block";
  
  // Reset animation cho danh sách môn
  subjectSection.classList.remove('animate-enter');
  void subjectSection.offsetWidth;
  subjectSection.classList.add('animate-enter');
  subjectSection.style.display = "grid";
  
  pageDesc.innerText = "🚀🚀🚀";
}

// --- LOGIC ĐẾM NGƯỢC ---
const examDate = new Date(2026, 5, 11, 7, 0, 0).getTime(); // 11/06/2026

function updateCountdown() {
  const now = new Date().getTime();
  const distance = examDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      "<h3 class='gradient-text' style='font-size: 1.5rem; text-align: center; width: 100%'>🎉 Chúc các bạn thi tốt! 🌟</h3>";
    return;
  }

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