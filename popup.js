document.getElementById('refreshButton').addEventListener('click', function() {
    var proverbs = [
        "Ağzı kulağına varmak.",
        "Alıcı gözüyle bakmak.",
        "Ayaklar altında çiğnenmek.",
        "Bir dokun bin ah işit.",
        "Bülbül gibi şakımak.",
        "Ciğeri yanmak.",
        "Ekmeğini kazanmak.",
        "Dört gözle beklemek.",
        "Dut yemiş bülbüle dönmek.",
        "Kulağı aslan kesilmek.",
        "Kulak misafiri olmak.",
        "Dili açılmak.",
        "Et tırnak olmak.",
        "Göz hapsine almak.",
        "Har vurup harman savurmak.",
        "Huyunu suyunu almak.",
        "İpe un sermek.",
        "Kabuğuna çekilmek."

        // Daha fazla atasözü ekleyebilirsiniz.
    ];
    var randomIndex = Math.floor(Math.random() * proverbs.length);
    document.getElementById('quote').textContent = proverbs[randomIndex];
});