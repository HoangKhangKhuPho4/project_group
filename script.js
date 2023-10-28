document.getElementById("search-button").addEventListener("click", function () {
  let query = document.getElementById("search-input").value;
  if (query) {
    // Tìm kiếm hoặc thực hiện chức năng bạn muốn
    console.log("Searching for: " + query);
  }
});

document
  .getElementById("document-button")
  .addEventListener("click", function () {
    // Thực hiện chức năng mở tài liệu hoặc chức năng bạn muốn
    console.log("Document button clicked");
  });
