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
            .then(() => console.log('コピーが成功しました。'))
            .catch(err => console.error('コピー中にエラーが発生しました:', err));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // すべてのコードブロックをシンタックスハイライト
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });

    // コピーの処理はそのまま利用できます
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
                .then(() => console.log('コピーが成功しました。'))
                .catch(err => console.error('コピー中にエラーが発生しました:', err));
        });
    });
});
