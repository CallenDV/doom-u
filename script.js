window.addEventListener('load', function() {
    Dos(document.getElementById('dosbox'), {
        wdosboxUrl: 'https://v8.js-dos.com/latest/',
    }).ready((fs, main) => {
        fetch('doom19s.zip')
            .then(response => response.blob())
            .then(blob => fs.writeFile('doom19s.zip', blob))
            .then(() => fs.extract('doom19s.zip'))
            .then(() => {
                main(['-c', 'doom.exe']);
            });
    });
});
