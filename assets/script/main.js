    gsap.from('.nama p', {duration: 1.5, x: '50%', opacity: 0, ease: 'back'})

    gsap.registerPlugin(TextPlugin);
    gsap.to('.agung', {duration: 1.5, delay:1, text: 'Blog Ini Membahas Tentang Teknologi Baik Linux, Pemograman, Serta Berisikan, Catatan Harian Seputar Teknologi Terbaru.'})

    gsap.to('.rizki', {duration: 1.5, delay:1, text: 'Blog Ini Membahas Tentang Teknologi, Serta Terdapat Tutorial Web Desain, Web Development, Yang DapatMembantu Menyelesaikan Masalah dalam Dunia Web Programmer..'})

    gsap.from('.containerButton', {duration: 1.5, y: '-100%', opacity: 0, delay: 1.7, ease: 'bounce'})
