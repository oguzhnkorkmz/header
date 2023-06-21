const Links = [
    {
        name: 'HİZMETLERİMİZ',
        submenu: true,
        sublinks: [
            {
                head: 'TEKNİK HİZMETLERİMİZ',
                sublink: [
                    { sublinkname: 'FRONTEND TEKNOLOJİLERİ' },
                    { sublinkname: 'BACKEND TEKNOLOJİLERİ' },
                    { sublinkname: 'AWS HİZMETLERİ' },
                ],
            },
            {
                head: 'DANIŞMANLIK HİZMETLERİMİZ',
                sublink: [
                    { sublinkname: 'TEKNİK DESTEK' },
                    { sublinkname: 'BİLGİLENDİRME HİZMETLERİ' },
                    { sublinkname: 'MENTORLUK HİZMETLERİ' },
                    { sublinkname: 'DANIŞMANLIK EĞİTİMLERİ' },
                    { sublinkname: 'EĞİTİM ÖĞRETİM PLANLAMA' },
                    { sublinkname: 'YAZILIM DANIŞMANLIĞI' },
                    { sublinkname: 'PROJE DANIŞMANLIĞI' },
                ],
            },
            { head: 'HATALI ALTYAPI ONARIMI' },
        ],
    },
    {
        name: 'HAKKIMIZDA',
        submenu: true,
        sublinks: [
            { head: 'BİZ KİMİZ?' },
            { head: 'KURUMSAL' },
            {
                head: 'REFERANSLARIMIZ',
                sublink: [
                    { sublinkname: 'GEÇMİŞ REFERANSLARIMIZ' },
                    { sublinkname: 'GELECEK REFERANSLARIMIZ' },
                ],
            },
            { head: 'VİZYON' },
            { head: 'MİSYON' },
        ],
    },
    { name: 'İLETİŞİM', submenu: false },
    { name: 'KAYIT OL', submenu: false },
    { name: 'GİRİŞ YAP', submenu: false },
];

export default Links