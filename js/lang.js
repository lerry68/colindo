    function setLanguage(lang) {
        const elements = {
            'en': {
                'home': 'Home',
                'aboutnav': 'About',
                'work': 'Projects',
                'testimonials': 'Partners',
                'kontak': 'Contact',
                'intro-title': 'All eyes on Rafah',
                'gulir': 'Scroll Down',
                'aboutlang': 'About',
                'companyprofile': 'Company Profile',
                'compabt1': 'Company Name',
                'compabt2': 'PT Kolindo Bina Nusantara',
                'compabt3': 'President Director',
                'compabt4': 'Agus Sugianto',
                'compabt5': 'Office Address',
                'compabt6': 'Level 38 Tower A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'compabt7': 'Operational Office',
                'compabt8': 'Jl.Tebet Barat IX No.21A Jakarta 12810',
                'compabt9': 'Telephone / Fax',
                'compabt10': '021 29638099 - 22983743 / 29638088',
                'compabt11': 'Email Address',
                'compabt12': 'pt.kolindo@gmail.com',
                'busslic': 'Business Licences',
                'compabt13': 'Company Incorporation',
                'compabt14': 'Notary Titiek Irawati S.SH. Jakarta, dated May 26th 2006<br>AHU : C-19258 HT. 01.01.TH.2006, July 3 2006',
                'compabt15': 'Deed of Amendment',
                'compabt16': 'Notary Boby Sofyan SH, MKN. Tangerang, dated June 05th 2024<br>AHU : AH. 01.09-210398 Th 2024',
                'compabt17': 'Company ID Number',
                'compabt18': 'LNIB : 0220303830053',
                'compabt19': 'Tax Number',
                'compabt20': 'NPWP : 02.145.159.6-048.000',
                'learnmore': 'Learn More',
                'proj': 'Projects',
                'compProj': 'Company Project',
                'projDesc': '<strong>A. STEAMING COAL TRADING & MINE OFFTAKER</strong> <br> ⠀⠀1. IUP-OP PT ANDHIKA YOGA PRATAMA, Gar 3600, Prov Jambi, 3.000ha (JORC 250 mio Mt) <br> ⠀⠀2. IUP-OP PT KATINGAN RIA Gar 4200, Central Kalimantan : 4.258ha (JORC 250 mio Mt) <br> ⠀⠀3. IUP-OP PT PACIFIC GLOBAL UTAMA Gar 5000, South Sumatra : 1.485ha (JORC = 30 mio Mt) <br> ⠀⠀4. IUP-OP PT LAHAT PULAU PINANG BARA JAYA Gar 5000, South Sumatra : 852ha (15mio Mt) <br> ⠀⠀5. IUP-OP SRISAM Gar 6000, Central Kalimantan : 7.000ha (JORC 86 mio Mt/1000ha) <br> ⠀⠀6. IUP-OP PT BORNEO PRIMA COAL INDONESIA COKING COAL, CENTRAL KALIMANTAN 4.798ha (JORC= 15mio Mt) <br> ⠀⠀7. IUP-OP KOPERASI MUFAKAT TAKA Gar 6700, East Kalimantan 95,79Ha <br> ⠀⠀8. IUP-OP PT WIRADUTHA SEJAHTERA LANGGENG Gar 4200, South Sumatra 3.120ha <br> ⠀⠀9. PT USAHA KAWAN BERSAMA, DISTRICT BANJAR,SOUTH KALIMANTAN : 200HA-GAR 5.800 (NAR 5.500) <br> ⠀⠀10. CV. SURAINDO BARA, DISTRICT BANJAR, SOUTH KALIMANTAN: 1785,25HA - GAR 4.700 <br> ⠀⠀11. CV. SATUI TERMINAL UMUM, DISTRICT TANAH LAUT, SOUTH KALIMANTAN 1976 HA-GCV 5.600 ADB = GAR 4.200 <br> ⠀⠀12. CV. DUTADHARMA UTAMA, DISTRICT TANAH LAUT, SOUTH KALIMANTAN: 724,97HA- GCV 5.600 ADB = GAR 4.200',
                'projDesc2': '<strong>B. STEAMING COAL POWER PLANT</strong> <br> ⠀⠀1. PLTU PT BANTAENG SIGMA ENERGY, South Sulawesi (2 x 300MW)',
                'projDesc3': '<strong>C. PROPERTY</strong> <br> ⠀⠀1. LAND ASSET PT BHIRAWA CAHAYA PERKASA Located at Depok City, West Java (250.000 Sqm)',
                'indSur': 'Independent Surveyor',
                'bank': 'Banker',
                'kontek': 'Contact',
                'kontek1': 'Any Questions? <br> Feel Free to Contact us at',
                'kontek3': 'Where To Find Us',
                'kontek4': '38 Tower A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'kontek5': 'Contact Infos',
                'kontek6': '+62 813 8222 5921 (Penni Octora)',
                'profile': 'Profile Perusahaan',
                'profile1': 'PT Kolindo Bina Nusantara is an Indonesian coal company dedicated to providing reliable and sustainable energy sources for the community. With a commitment to responsible and environmentally friendly mining practices, we strive to support national development and community welfare.',
                'profile2': 'Company Profile',
                'profile3': 'Company Name :',
                'profile4': 'PT Kolindo Bina Nusantara',
                'profile5': 'President Director :',
                'profile6': 'Agus Sugianto',
                'profile7': 'Office Address :',
                'profile8': 'Level 38 Tower A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'profile9': 'Operational Office :',
                'profile10': 'Jl.Tebet Barat IX No.21A Jakarta 12810',
                'profile11': 'Telephone / Fax :',
                'profile12': '021 29638099 - 22983743 / 29638088',
                'profile13': 'Email Address :',
                'profile14': 'pt.kolindo@gmail.com',
            },
            'id': {
                'home': 'Beranda',
                'aboutnav': 'Tentang',
                'work': 'Proyek',
                'testimonials': 'Mitra',
                'kontak': 'Kontak',
                'intro-title': 'Mata ke Rafah',
                'gulir': 'Gulir ke Bawah',
                'aboutlang': 'Tentang',
                'companyprofile': 'Profil Perusahaan',
                'compabt1': 'Nama Perusahaan',
                'compabt2': 'PT Kolindo Bina Nusantara',
                'compabt3': 'Direktur Utama',
                'compabt4': 'Agus Sugianto',
                'compabt5': 'Alamat Kantor',
                'compabt6': 'Lantai 38 Menara A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'compabt7': 'Kantor Operasional',
                'compabt8': 'Jl.Tebet Barat IX No.21A Jakarta 12810',
                'compabt9': 'Telepon / Faks',
                'compabt10': '021 29638099 - 22983743 / 29638088',
                'compabt11': 'Alamat Email',
                'compabt12': 'pt.kolindo@gmail.com',
                'busslic': 'Izin Usaha',
                'compabt13': 'Pendirian Perusahaan',
                'compabt14': 'Notaris Titiek Irawati S.SH. Jakarta, tertanggal 26 Mei 2006<br>AHU : C-19258 HT. 01.01.TH.2006, 3 Juli 2006',
                'compabt15': 'Akta Perubahan',
                'compabt16': 'Notaris Boby Sofyan SH, MKN. Tangerang, tertanggal 05 Juni 2024<br>AHU : AH. 01.09-210398 Th 2024',
                'compabt17': 'Nomor ID Perusahaan',
                'compabt18': 'LNIB : 0220303830053',
                'compabt19': 'Nomor Pajak',
                'compabt20': 'NPWP : 02.145.159.6-048.000',
                'learnmore': 'Pelajari Lebih Lanjut',
                'proj': 'Proyek',
                'compProj': 'Proyek Perusahaan',
                'projDesc': '<strong>A. PERDAGANGAN BATUBARA STEAMING & PENAMBANGAN</strong> <br> ⠀⠀1. IUP-OP PT ANDHIKA YOGA PRATAMA, Gar 3600, Prov Jambi, 3.000ha (JORC 250 mio Mt) <br> ⠀⠀2. IUP-OP PT KATINGAN RIA Gar 4200, Kalimantan Tengah: 4.258ha (JORC 250 mio Mt) <br> ⠀⠀3. IUP-OP PT PACIFIC GLOBAL UTAMA Gar 5000, Sumatra Selatan: 1.485ha (JORC = 30 mio Mt) <br> ⠀⠀4. IUP-OP PT LAHAT PULAU PINANG BARA JAYA Gar 5000, Sumatra Selatan: 852ha (15mio Mt) <br> ⠀⠀5. IUP-OP SRISAM Gar 6000, Kalimantan Tengah: 7.000ha (JORC 86 mio Mt/1000ha) <br> ⠀⠀6. IUP-OP PT BORNEO PRIMA COAL INDONESIA COKING COAL, KALIMANTAN TENGAH 4.798ha (JORC= 15mio Mt) <br> ⠀⠀7. IUP-OP KOPERASI MUFAKAT TAKA Gar 6700, Kalimantan Timur 95,79Ha <br> ⠀⠀8. IUP-OP PT WIRADUTHA SEJAHTERA LANGGENG Gar 4200, Sumatra Selatan 3.120ha <br> ⠀⠀9. PT USAHA KAWAN BERSAMA, DISTRICT BANJAR, KALIMANTAN SELATAN: 200HA-GAR 5.800 (NAR 5.500) <br> ⠀⠀10. CV. SURAINDO BARA, DISTRICT BANJAR, KALIMANTAN SELATAN: 1785,25HA - GAR 4.700 <br> ⠀⠀11. CV. SATUI TERMINAL UMUM, DISTRICT TANAH LAUT, KALIMANTAN SELATAN 1976 HA-GCV 5.600 ADB = GAR 4.200 <br> ⠀⠀12. CV. DUTADHARMA UTAMA, DISTRICT TANAH LAUT, KALIMANTAN SELATAN: 724,97HA- GCV 5.600 ADB = GAR 4.200',
                'projDesc2': '<strong>B. PEMBANGKIT LISTRIK TENAGA UAP BATUBARA</strong> <br> ⠀⠀1. PLTU PT BANTAENG SIGMA ENERGY, Sulawesi Selatan (2 x 300MW)',
                'projDesc3': '<strong>C. PROPERTI</strong> <br> ⠀⠀1. ASET TANAH PT BHIRAWA CAHAYA PERKASA Terletak di Kota Depok, Jawa Barat (250.000 Sqm)',
                'indSur': 'Surveyor Independen',
                'bank': 'Bankir',
                'kontek': 'Kontak',
                'kontek1': 'Ada pertanyaan? <br> Silakan hubungi kami di',
                'kontek3': 'Dimana Kami Berada',
                'kontek4': '38 Tower A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'kontek5': 'Info Kontak',
                'kontek6': '+62 813 8222 5921 (Penni Octora)',
                'profile': 'Profil Perusahaan',
                'profile1': 'PT Kolindo Bina Nusantara adalah perusahaan batu bara Indonesia yang berdedikasi untuk menyediakan sumber energi yang andal dan berkelanjutan bagi masyarakat. Dengan komitmen terhadap praktik penambangan yang bertanggung jawab dan ramah lingkungan, kami berusaha untuk mendukung pembangunan nasional dan kesejahteraan masyarakat.',
                'profile2': 'Profil Perusahaan',
                'profile3': 'Nama Perusahaan :',
                'profile4': 'PT Kolindo Bina Nusantara',
                'profile5': 'Direktur Utama :',
                'profile6': 'Agus Sugianto',
                'profile7': 'Alamat Kantor :',
                'profile8': 'Lantai 38 Menara A Kota Kasablanka, Jl. Casablanca Raya Kav.88 Jakarta, 12870',
                'profile9': 'Kantor Operasional :',
                'profile10': 'Jl.Tebet Barat IX No.21A Jakarta 12810',
                'profile11': 'Telepon / Faks :',
                'profile12': '021 29638099 - 22983743 / 29638088',
                'profile13': 'Alamat Email :',
                'profile14': 'pt.kolindo@gmail.com',
            }
        };

        document.getElementById('home').querySelector('a').textContent = elements[lang]['home'];
        document.getElementById('aboutnav').querySelector('a').textContent = elements[lang]['aboutnav'];
        document.getElementById('work').querySelector('a').textContent = elements[lang]['work'];
        document.querySelector('.s-header__menu-links li:nth-child(4) a').textContent = elements[lang]['testimonials'];
        document.getElementById('kontak').querySelector('a').textContent = elements[lang]['kontak'];
        document.getElementById('intro-title').textContent = elements[lang]['intro-title'];
        document.getElementById('gulir').querySelector('span').textContent = elements[lang]['gulir'];
        document.getElementById('aboutlang').textContent = elements[lang]['aboutlang'];
        document.getElementById('companyprofile').textContent = elements[lang]['companyprofile'];
        document.getElementById('compabt1').textContent = elements[lang]['compabt1'];
        document.getElementById('compabt2').textContent = elements[lang]['compabt2'];
        document.getElementById('compabt3').textContent = elements[lang]['compabt3'];
        document.getElementById('compabt4').textContent = elements[lang]['compabt4'];
        document.getElementById('compabt5').textContent = elements[lang]['compabt5'];
        document.getElementById('compabt6').textContent = elements[lang]['compabt6'];
        document.getElementById('compabt7').textContent = elements[lang]['compabt7'];
        document.getElementById('compabt8').textContent = elements[lang]['compabt8'];
        document.getElementById('compabt9').textContent = elements[lang]['compabt9'];
        document.getElementById('compabt10').textContent = elements[lang]['compabt10'];
        document.getElementById('compabt11').textContent = elements[lang]['compabt11'];
        document.getElementById('compabt12').textContent = elements[lang]['compabt12'];
        document.getElementById('busslic').textContent = elements[lang]['busslic'];
        document.getElementById('compabt13').textContent = elements[lang]['compabt13'];
        document.getElementById('compabt14').innerHTML = elements[lang]['compabt14'];
        document.getElementById('compabt15').textContent = elements[lang]['compabt15'];
        document.getElementById('compabt16').innerHTML = elements[lang]['compabt16'];
        document.getElementById('compabt17').textContent = elements[lang]['compabt17'];
        document.getElementById('compabt18').textContent = elements[lang]['compabt18'];
        document.getElementById('compabt19').textContent = elements[lang]['compabt19'];
        document.getElementById('compabt20').textContent = elements[lang]['compabt20'];
        document.getElementById('learnmore').textContent = elements[lang]['learnmore'];
        document.getElementById('proj').textContent = elements[lang]['proj'];
        document.getElementById('compProj').textContent = elements[lang]['compProj'];
        document.getElementById('projDesc').innerHTML = elements[lang]['projDesc'];
        document.getElementById('projDesc2').innerHTML = elements[lang]['projDesc2'];
        document.getElementById('projDesc3').innerHTML = elements[lang]['projDesc3'];
        document.getElementById('testimonials').querySelector('.section-header__pretitle').textContent = elements[lang]['testimonials']; // Partners
        document.getElementById('indSur').textContent = elements[lang]['indSur']; // Independen Surveyor
        document.getElementById('bank').textContent = elements[lang]['bank']; // Bankir
        document.getElementById('kontek').textContent = elements[lang]['kontek'];
        document.getElementById('kontek1').innerHTML = elements[lang]['kontek1'];
        document.getElementById('kontek3').textContent = elements[lang]['kontek3'];
        document.getElementById('kontek4').textContent = elements[lang]['kontek4'];
        document.getElementById('kontek5').textContent = elements[lang]['kontek5'];
        document.getElementById('kontek6').textContent = elements[lang]['kontek6'];
        document.getElementById('profile').textContent = elements[lang]['profile'];
        document.getElementById('profile1').textContent = elements[lang]['profile1'];
        document.getElementById('profile2').textContent = elements[lang]['profile2'];
        document.getElementById('profile3').textContent = elements[lang]['profile3'];
        document.getElementById('profile4').textContent = elements[lang]['profile4'];
        document.getElementById('profile5').textContent = elements[lang]['profile5'];
        document.getElementById('profile6').textContent = elements[lang]['profile6'];
        document.getElementById('profile7').textContent = elements[lang]['profile7'];
        document.getElementById('profile8').textContent = elements[lang]['profile8'];
        document.getElementById('profile9').textContent = elements[lang]['profile9'];
        document.getElementById('profile10').textContent = elements[lang]['profile10'];
        document.getElementById('profile11').textContent = elements[lang]['profile11'];
        document.getElementById('profile12').textContent = elements[lang]['profile12'];
        document.getElementById('profile13').textContent = elements[lang]['profile13'];
        document.getElementById('profile14').innerHTML = elements[lang]['profile14'];
        document.getElementById('profile15').textContent = elements[lang]['profile15'];
        document.getElementById('profile16').innerHTML = elements[lang]['profile16'];
        document.getElementById('profile17').textContent = elements[lang]['profile17'];
        document.getElementById('profile18').textContent = elements[lang]['profile18'];
        document.getElementById('profile19').textContent = elements[lang]['profile19'];
        document.getElementById('profile20').textContent = elements[lang]['profile20'];

    }

    // Set initial language to Indonesian
    window.onload = function () {
        setLanguage('id');
    };
