document.querySelectorAll('.copy-button').forEach(button => {
  button.addEventListener('click', function() {
      // コードブロックを囲む親要素を取得
      var codeWrapper = this.closest('.code-wrap');
      if (!codeWrapper) {
          console.error('コードブロックを囲む親要素が見つかりませんでした。');
          return;
      }
      
      // 親要素からコードブロックを取得
      var codeBlock = codeWrapper.querySelector('.code-block');
      if (!codeBlock) {
          console.error('コードブロックが見つかりませんでした。');
          return;
      }
      
      // コードブロックのテキストを選択してコピー
      var range = document.createRange();
      range.selectNode(codeBlock);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  });
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