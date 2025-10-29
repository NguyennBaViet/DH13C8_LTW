var t;
function batDau() {
    t = setInterval("alert('Hello Javascript');", 2000);
}
function dungLai() {
    clearInterval(t)
    alert("Đã dừng lại");
}