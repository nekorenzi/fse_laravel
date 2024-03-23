document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', function() {
        var codeWrapper = this.closest('.code-wrap');
        if (!codeWrapper) {
            console.error('コードブロックを囲む親要素が見つかりませんでした。');
            return;
        }
        
        var codeBlock = codeWrapper.querySelector('.code-block');
        if (!codeBlock) {
            console.error('コードブロックが見つかりませんでした。');
            return;
        }
        
        var codeText = codeBlock.innerText;
        navigator.clipboard.writeText(codeText)
            .then(() => {
                console.log('コピーが成功しました。');
                // ボタンのテキストを「コピーしました」に変更する
                button.textContent = 'コピーしました';
                // 画像要素を作成し、ボタンの内部に挿入する
                    var imgElement = document.createElement('img');
                    imgElement.src = 'img/copy2.svg';
                    imgElement.alt = 'Copy icon';
                    imgElement.classList.add('cicon');
                    // サイズ指定
                    imgElement.width = 15;
                    imgElement.height = 15;
                    button.innerHTML = '';
                    button.appendChild(imgElement);
                    button.appendChild(document.createTextNode(' コピーしました'));
                // 2秒後に元の状態に戻す
                setTimeout(() => {
                    button.textContent = 'コピー';
                    var imgElement = document.createElement('img');
                    imgElement.src = 'img/copy1.svg';
                    imgElement.alt = 'Copy icon';
                    imgElement.classList.add('cicon');
                    // サイズ指定
                    imgElement.width = 15;
                    imgElement.height = 15;
                    button.innerHTML = '';
                    button.appendChild(imgElement);
                    button.appendChild(document.createTextNode(' コピー'));
                }, 2000);
            })
            .catch(err => console.error('コピー中にエラーが発生しました:', err));
    });
});
