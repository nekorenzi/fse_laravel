document.getElementById('copy-button').addEventListener('click', function() {
  var codeBlock = document.getElementById('code-block');
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
});
document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "sidemenu.html", true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("sidemenu").innerHTML = xhr.responseText;
      }
  };
  xhr.send();
});