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
        
        // コードブロックのテキストを取得してクリップボードにコピー
        var codeText = codeBlock.innerText;
        navigator.clipboard.writeText(codeText)
            .then(() => console.log('コピーが成功しました。'))
            .catch(err => console.error('コピー中にエラーが発生しました:', err));
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
  