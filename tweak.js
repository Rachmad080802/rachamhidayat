console.log("starting tweak")
const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")
const productBox1 = document.getElementById("productBox1")

function getDetail(nomor) {
  console.log('produk: ', nomor)
  newBox.style.display = 'block'
  wrapper.style.display = "none"
}