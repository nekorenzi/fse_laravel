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
                // コピーが成功したらコピーしましたテキストを表示する
                var copyStatus = this.nextElementSibling;
                copyStatus.style.display = 'inline';
                // 2秒後にテキストを非表示にする
                setTimeout(() => {
                    copyStatus.style.display = 'none';
                }, 2000);
            })
            .catch(err => console.error('コピー中にエラーが発生しました:', err));
    });
});
