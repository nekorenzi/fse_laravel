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
                this.textContent = 'コピーしました';
                // 2秒後にテキストを元に戻す
                setTimeout(() => {
                    this.textContent = 'コピー';
                }, 2000);
            })
            .catch(err => console.error('コピー中にエラーが発生しました:', err));
    });
});
