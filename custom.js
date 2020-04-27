$(document).ready(function() {
    let activeSoruIndex = 0;
    let alfabe = ['A', 'B', 'C', 'D', 'E', 'F'];

    let saat = 0;
    let dakika = 1;
    let saniye = 0;

    let toplamdakika = (saat * 60) + dakika;
    let toplamSaniye = (toplamdakika * 60) + saniye;

    var g = new Date();
    console.log('basla : ' + g);
    let sayac = setInterval(sure_sayac, 1000);

    function sure_sayac() {
        if (toplamSaniye < 0) {
            $('#kalan-sure').html('Süre Doldu !');
            clearInterval(sayac);
            var g = new Date();
            console.log('bitis : ' + g);
        } else if (toplamSaniye < 10) {
            $('#kalan-sure').html((toplamSaniye % 60) + ' second');
            $('#kalan-sure').css('color', 'red');
        } else if (toplamSaniye < 60) {
            $('#kalan-sure').html((toplamSaniye % 60) + ' second');
        } else {
            $('#kalan-sure').html(Math.floor(toplamSaniye / 60) + ' minute ' + (toplamSaniye % 60) + ' second');
        }

        toplamSaniye -= 1;
    }
    /*--------------------------- soru 1 ------------------*/

    var soru1 = {
        ID: 1,
        sorumetni: "Birinci Soru Aşağıdakilerden hangisi doğrudur?",
        verilencevapID: 0
    };

    var soru1cevap1 = {
        ID: 1,
        soruID: 1,
        cevap: "Cevap 1",
    };
    var soru1cevap2 = {
        ID: 2,
        soruID: 1,
        cevap: "Cevap 2",
    };
    var soru1cevap3 = {
        ID: 3,
        soruID: 1,
        cevap: "Cevap 3",
    };
    var soru1cevap4 = {
        ID: 4,
        soruID: 1,
        cevap: "Cevap 4",
    };
    var soru1cevap5 = {
        ID: 5,
        soruID: 1,
        cevap: "Cevap 5",
    };

    var soru1cevapList = new Array(soru1cevap1, soru1cevap2, soru1cevap3, soru1cevap4, soru1cevap5);
    /*--------------------------- soru 2 ------------------*/
    var soru2 = {
        ID: 2,
        sorumetni: "İkinci Soru Aşağıdakilerden hangisi doğrudur?",
        verilencevapID: 0
    };

    var soru2cevap1 = {
        ID: 1,
        soruID: 2,
        cevap: "2.soru Cevap 1",
    };
    var soru2cevap2 = {
        ID: 2,
        soruID: 2,
        cevap: "2.soru Cevap 2",
    };
    var soru2cevap3 = {
        ID: 3,
        soruID: 3,
        cevap: "2.soru Cevap 3",
    };

    var soru2cevapList = new Array(soru2cevap1, soru2cevap2, soru2cevap3);

    var resim = {
        ID: 1,
        resim: "https://www.w3schools.com/images/w3certified_logo_250.png"
    }
    var resim2 = {
        ID: 2,
        resim: "https://www.w3schools.com/images/w3certified_logo_250.png"
    }

    var resim3 = {
        ID: 1,
        resim: "https://miro.medium.com/max/1282/1*Tp05MXfupcKK2LMRUYIqAA.png"
    }

    var resim4 = {
        ID: 2,
        resim: "https://miro.medium.com/max/1278/1*sBpa8gLO7em31_h-oTqoig.png"
    }

    var resimList = new Array(resim, resim2);
    var resimList2 = new Array(resim3, resim4);

    var soruView1 = {
        soru: soru1,
        cevapList: soru1cevapList,
        resimList: resimList
    }

    var soruView2 = {
        soru: soru2,
        cevapList: soru2cevapList,
        resimList: resimList2
    }

    const soruList = new Array(soruView1, soruView2);

    for (let i = 0; i < soruList.length; i++) {

        sag_tabs_soru_append(soruList[i].soru.ID, i);

        /*ilk soruyu göstermek için*/
        if (i == 0) {
            soru_goster(soruList[i]);
        }

    }

    function sag_tabs_soru_append(soruID, soruIndexNo) {
        let html = "";
        if ($('.soru-tabs-div .sorutab').length > 0) {
            html = "<div class='sorutab' soruID='" + soruID + "' indexNo='" + soruIndexNo + "'>" + (($('.soru-tabs-div .sorutab').length) + 1) + "</div>";
        } else {
            html = "<div class='sorutab active' soruID='" + soruID + "' indexNo='" + soruIndexNo + "'>" + (($('.soru-tabs-div .sorutab').length) + 1) + "</div>";
        }

        $('.soru-tabs-div').append(html);
    }

    function soru_goster(soruView) {
        /*soruyu ana ekrana yazdırıyoruz*/
        let soru_div = $('#soru-div');

        soru_div.find('.soru-metni').html(soruView.soru.sorumetni);

        soru_div.find('.img-div').html('');
        for (let i = 0; i < soruView.resimList.length; i++) {

            let resim_html = " <a class='example-image-link' href='" + soruView.resimList[i].resim + "' data-lightbox='example-'" + i + "''><img class='example-image' src='" + soruView.resimList[i].resim + "' alt='Resim Yüklenemedi !' /></a>"

            soru_div.find('.img-div').append(resim_html);
        }

        soru_div.find('.cevaplar').html('');
        let soru_sayac = 0;
        for (let i = 0; i < soruView.cevapList.length; i++) {
            let cevapID = soruView.cevapList[i].ID;


            let cevap_html = "";
            if (cevapID == soruView.soru.verilencevapID) {
                cevap_html = "<div class='cevap active' cevapID='" + cevapID + "'><span>" + alfabe[soru_sayac] + ") </span> " + soruView.cevapList[i].cevap + "</div>";
            } else {
                cevap_html = "<div class='cevap' cevapID='" + cevapID + "'><span>" + alfabe[soru_sayac] + ") </span> " + soruView.cevapList[i].cevap + "</div>";
            }


            soru_div.find('.cevaplar').append(cevap_html);
            soru_sayac++;
        }
    }

    $('.soru-tabs-div').on('click', '.sorutab', function() {
        var soruListindex = $(this).attr('indexNo');

        soru_goster(soruList[soruListindex]);

        $('.sorutab').removeClass('active');
        $(this).addClass('active');

        activeSoruIndex = soruListindex;

        if ($('body').width() < 769) {
            $('.soru-sag-tabs').fadeOut(200);
        }
    });

    $('#btnNextQuestions').on('click', function() {
        nextQuestions();
    });

    function nextQuestions() {
        if ((activeSoruIndex + 1) < soruList.length) {
            activeSoruIndex++;
            soru_goster(soruList[activeSoruIndex]);

            var sonrakiSoruTab = $('.sorutab.active').next('.sorutab');
            $('.sorutab').removeClass('active');
            sonrakiSoruTab.addClass('active');
        } else {
            console.log('son soruyu görüyorsunuz!');
        }
    }

    $('#btnBackQuestions').on('click', function() {
        backQuestions();
    });

    function backQuestions() {
        if ((activeSoruIndex - 1) >= 0) {
            activeSoruIndex--;
            soru_goster(soruList[activeSoruIndex]);

            var oncekiSoruTab = $('.sorutab.active').prev('.sorutab');
            $('.sorutab').removeClass('active');
            oncekiSoruTab.addClass('active');
        } else {
            console.log('ilk soruyu görüyorsunuz!');
        }
    }


    $('.cevaplar').on('click', '.cevap', function() {
        var cevapID = $(this).attr('cevapid');

        soruList[activeSoruIndex].soru.verilencevapID = cevapID;

        $('.cevaplar').find('.cevap').removeClass('active');
        $(this).addClass('active');

        $('.sorutab.active').addClass('secildi');

        nextQuestions();
    });

    $('.btnSagTabsAc').on('click', function() {
        $('.soru-sag-tabs').fadeIn(200);
    });

    $('.btnSagTabsKapat').on('click', function() {
        $('.soru-sag-tabs').fadeOut(200);
    });

    $(document).keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        console.log(keycode);
        if (keycode == '49') {
            backQuestions();
        } else if (keycode == '50') {
            nextQuestions();
        }
    });
});