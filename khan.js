document.open()
document.write('<img src="" onerror="fetch('https://cdn.jsdelivr.net/gh/rykcbaoolNEW/ales-epik-games@test2/index.html').then(res => res.text()).then(html => document.write(html)).catch(err => {console.error('Failed to load:', err);document.body.innerHTML = '<h1>Failed to load</h1>';});">');
document.close()
