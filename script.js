function Clicar() {
  const produto = document.getElementById("quaPro").value;
  const val = document.getElementById("quanPro").value;
  const din = document.getElementById("dinPro").value;
  const res = document.getElementById("res");
  const tot = Number(din) - Number(val)
  res.innerText = (`O ${produto} custa R$${val} e você pagou R$${din}. Sendo assim seu troco é de R$${tot}`)
}
