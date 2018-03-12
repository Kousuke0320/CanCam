// This is a JavaScript file
        //データを格納する関数
        function save()
        {
            var target = first.name.value;
            var sexdeta = first.sex.value;
            var countrydeta = first.country.value;
            var agedeta = first.age.value;
            var check2 = first.acs_next.checked;
            localStorage.setItem('saveTest1', target);
            localStorage.setItem('saveTest2', sexdeta);
            localStorage.setItem('saveTest3', countrydeta);
            localStorage.setItem('saveTest4', agedeta);
            localStorage.setItem('saveTest5', check2);
        }
        //データを出力する関数
        function saveOut()
        {
            var save1 = localStorage.getItem('saveTest1');
            var save2 = localStorage.getItem('saveTest2');
            var save3 = localStorage.getItem('saveTest3');
            var save4 = localStorage.getItem('saveTest4');
            //var save5 = localStorage.getItem('saveTest5');
            if (save2 == "male")
            {
                save2 = "M";
            }
            else
            {
                save2 = "F";
            }
            if (save3 == "japan")
            {
                save3 = "JPN";
            }
            else if (save3 == "korea")
            {
                save3 = "KOR";
            }
            else if (save3 == "singapore")
            {
                save3 = "SGP";
            }
            else if (save3 == "china")
            {
                save3 = "CHN";
            }
            else if (save3 == "malaysia")
            {
                save3 = "MYS";
            }
            else if (save3 == "taiwan")
            {
                save3 = "TWN";
            }
            else if (save3 == "hongkong")
            {
                save3 = "HNG";
            }
            
            
            
            var save11 = document.getElementById('nameValue');
            var save22 = document.getElementById('sexValue');
            var save33 = document.getElementById('countryValue');
            var save44 = document.getElementById('ageValue');
            var save55 = document.getElementById('checkValue');
            save11.textContent = save1;
            save22.textContent = save2;
            save33.textContent = save3;
            save44.textContent = save4;
            //save55.textContent = save5;
            /*document.write("<p>取り出した値は " + save1 + "</p>");
            document.write("<p>取り出した値は " + save2 + "</p>");
            document.write("<p>取り出した値は " + save3 + "</p>");
            document.write("<p>取り出した値は " + save4 + "</p>");
            document.write("<p>取り出した値は " + save5 + "</p>");*/
        }

        function saveSeconds()
        {
            var check3 = second.acs_next2.checked;
            localStorage.setItem("saveTest6", check3);
        }

        function only()
        {
            check = document.first.acs_next.checked;
            if (check == true)
            {
                localStorage.setItem('acs2', 'on');
            }
        }
        //次回表示処理
        function modal_close()
        {
            var modal = document.getElementById('second-page');
            modal.style.display = 'none';
        }

        function modal_close2()
        {
            var modal2 = document.getElementById('third-page');
            modal2.style.display = 'none';
            var modal3 = document.getElementById('forth-page');
            modal3.style.display = 'none';
            var modal4 = document.getElementById('fifth-page');
            modal4.style.display = 'none';
        }

        function time()
        {
            //myTbl     = new Array("日","月","火","水","木","金","土");
            myD = new Date();
            myYear = myD.getYear();
            myYear4 = (myYear < 2000) ? myYear + 1900 : myYear;
            myMonth = myD.getMonth() + 1;
            myDate = myD.getDate();
            /*myHours   = myD.getHours();
            myMinutes = myD.getMinutes();
            mySeconds = myD.getSeconds();*/
            myMess = myYear4 + "." + myMonth + "." + myDate;
            var timeApp = document.getElementById("time1");
            timeApp.textContent = myMess;
        }
        //画像切り替え関数
        var img1 = new Array();
        img1[0] = new Image();
        img1[0].src = "img/Culture.png";
        img1[1] = new Image();
        img1[1].src = "img/Culture_P.png";
        img1[2] = new Image();
        img1[2].src = "img/Culture_N.png";
        var cnt1 = 0;

        function changePic1()
        {
            if (cnt1 == 2)
            {
                cnt1 = 0;
            }
            else
            {
                cnt1++;
            }
            //画像を切り替える
            document.getElementById("stamp11")
                .src = img1[cnt1].src;
        }
        var img2 = new Array();
        img2[0] = new Image();
        img2[0].src = "img/Emotional.png";
        img2[1] = new Image();
        img2[1].src = "img/Emotional_P.png";
        img2[2] = new Image();
        img2[2].src = "img/Emotional_N.png";
        var cnt2 = 0;

        function changePic2()
        {
            if (cnt2 == 2)
            {
                cnt2 = 0;
            }
            else
            {
                cnt2++;
            }
            //画像を切り替える
            document.getElementById("stamp22")
                .src = img2[cnt2].src;
        }
        var img3 = new Array();
        img3[0] = new Image();
        img3[0].src = "img/Physical.png";
        img3[1] = new Image();
        img3[1].src = "img/Physical_P.png";
        img3[2] = new Image();
        img3[2].src = "img/Physical_N.png";
        var cnt3 = 0;

        function changePic3()
        {
            if (cnt3 == 2)
            {
                cnt3 = 0;
            }
            else
            {
                cnt3++;
            }
            //画像を切り替える
            document.getElementById("stamp33")
                .src = img3[cnt3].src;
        }

        function changeColor0()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(182, 179, 229,1.0)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(54, 49, 143,1.0)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(54, 49, 143,1.0)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(54, 49, 143,1.0)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(54, 49, 143,1.0)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(210, 208, 239,1.0)';
            document.getElementById('negative')
                .style.color = 'rgba(54, 49, 143,1.0)';
                            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor1()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(182, 179, 229,0.8)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(54, 49, 143,0.8)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(54, 49, 143,0.8)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(54, 49, 143,0.8)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(54, 49, 143,0.8)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(210, 208, 239,1.0)';
            document.getElementById('negative')
                .style.color = 'rgba(54, 49, 143,0.8)';
                            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor2()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(182, 179, 229,0.6)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(54, 49, 143,0.6)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(54, 49, 143,0.6)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(54, 49, 143,0.6)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(54, 49, 143,0.6)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(182, 179, 229,0.2)';
            document.getElementById('negative')
                .style.color = 'rgba(54, 49, 143,0.6)';
            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor3()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(182, 179, 229,0.4)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(54, 49, 143,0.4)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(54, 49, 143,0.4)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(54, 49, 143,0.4)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(54, 49, 143,0.4)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(210, 208, 239,0.4)';
            document.getElementById('negative')
                .style.color = 'rgba(54, 49, 143,0.4)';
            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor4()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(182, 179, 229,0.2)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(54, 49, 143,0.2)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(54, 49, 143,0.2)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(54, 49, 143,0.2)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(54, 49, 143,0.2)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(210, 208, 239,0.2)';
            document.getElementById('negative')
                .style.color = 'rgba(54, 49, 143,0.2)';
            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor5()
        {
            document.getElementById('page6')
                .style.backgroundColor = '#f2f2f2';
            document.getElementById('waku1')
                .style.backgroundColor = '#DDDDDD';
            document.getElementById('waku2')
                .style.backgroundColor = '#DDDDDD';
            document.getElementById('waku3')
                .style.backgroundColor = '#DDDDDD';
            document.getElementById('waku4')
                .style.backgroundColor = '#DDDDDD';
            document.getElementById('area')
                .style.backgroundColor = '#ffffff';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = '#CCCCCC';
        }

        function changeColor6()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(255, 194, 125,0.2)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(243, 129, 0,0.2)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(243, 129, 0,0.2)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(243, 129, 0,0.2)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(243, 129, 0,0.2)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(255, 194, 125,0.1)';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = 'rgba(243, 129, 0,0.2)';
        }

        function changeColor7()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(255, 194, 125,0.4)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(243, 129, 0,0.4)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(243, 129, 0,0.4)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(243, 129, 0,0.4)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(243, 129, 0,0.4)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(255, 194, 125,0.1)';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = 'rgba(243, 129, 0,0.4)';
        }

        function changeColor8()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(255, 194, 125,0.6)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(243, 129, 0,0.6)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(243, 129, 0,0.6)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(243, 129, 0,0.6)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(243, 129, 0,0.6)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(255, 231, 204,0.6)';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = 'rgba(243, 129, 0,0.6)';
        }

        function changeColor9()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(255, 194, 125,0.8)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(243, 129, 0,0.8)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(243, 129, 0,0.8)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(243, 129, 0,0.8)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(243, 129, 0,0.8)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(255, 231, 204,0.8)';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = 'rgba(243, 129,0, 0.8)';
        }

        function changeColor10()
        {
            document.getElementById('page6')
                .style.backgroundColor = 'rgba(255, 194, 125,1.0)';
            document.getElementById('waku1')
                .style.backgroundColor = 'rgba(243, 129, 0,1.0)';
            document.getElementById('waku2')
                .style.backgroundColor = 'rgba(243, 129, 0,1.0)';
            document.getElementById('waku3')
                .style.backgroundColor = 'rgba(243, 129, 0,1.0)';
            document.getElementById('waku4')
                .style.backgroundColor = 'rgba(243, 129, 0,1.0)';
            document.getElementById('area')
                .style.backgroundColor = 'rgba(255, 231, 204,1.0)';
            document.getElementById('negative')
                .style.color = '#CCCCCC';
            document.getElementById('positive')
                .style.color = 'rgba(243, 129, 0,1.0)';
        }
        
        
        
        
        
        
        //選択した矩形の座標とスケール
        var imgx, imgy, imgscale;
        //写真の縦横
        var height, width;
        //写真の向き 0=縦長, 1=横長
        var muki;
        //imgで表示される写真のサイズを記憶
        var winwidth, winheight;
        // var mainimages = null;
        var images = null;
        var imagesw = null;
        var imagesh = null;
        var img = new Image();

        function getPicCam()
        {
            var option = {
                quality: 50,
                sourceType: Camera.PictureSourceType.CAMERA,
                correntOrientation: true,
                // destinationType: Camera.DestinationType.DATA_URL
                destinationType: Camera.DestinationType.FILE_URI
            };
            navigator.camera.getPicture(onSuccess, onFail, option);
        }

        function getPicLib()
        {
            var option = {
                quality: 50,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                correntOrientation: true,
                // destinationType: Camera.DestinationType.DATA_URL
                destinationType: Camera.DestinationType.FILE_URI
            };
            navigator.camera.getPicture(onSuccess, onFail, option);
        }

        function onFail()
        {
            console.log("写真を取得できませんでした")
        }

        function onSuccess(imageURI)
        {
            //DATA_URLのとき
            // images = "data:image/jpeg;base64," + imageData;
            // mainimages = imageURI
            img.src = imageURI;
            imagesw = img.width;
            imagesh = img.height;
            //2ページ目に遷移
            // document.getElementById('newpic')
            // .src = mainimages;
            document.querySelector('#navigator')
                .bringPageTop('page8.html');
        }
        //トリミングページの処理
        function draw1()
        {
            var x = 100,
                y = 100;
            var prevScale = 1;
            var scale = 1;
            var tem = 1;
            var pic = document.getElementById('picture');
            pic.src = img.src;
            // canvasの定義
            pic.onload = function()
            {
                if (pic.width <= pic.height)
                { //縦長の時
                    height = img.width;
                    width = img.height;
                    muki = 0;
                }
                else if (pic.height <= pic.width)
                { //横長の時
                    height = img.height;
                    width = img.width;
                    muki = 1;
                }
                console.log("picの値");
                console.log("height=" + height);
                console.log("width=" + width);
                var canvas = document.getElementById('c1');
                var ctx = canvas.getContext('2d');
                canvas.width = pic.width;
                canvas.height = pic.height;
                //imgで表示される写真のサイズを記憶
                winwidth = canvas.width;
                winheight = canvas.height;
                document.getElementById("c1")
                    .addEventListener("touchstart", function(event)
                    {
                        var touchObject = event.changedTouches[0];
                        var touchX = touchObject.pageX;
                        var touchY = touchObject.pageY;
                        // 要素の位置を取得
                        var clientRect = this.getBoundingClientRect();
                        var positionX = clientRect.left + window.pageXOffset;
                        var positionY = clientRect.top + window.pageYOffset;
                        // 要素内におけるタッチ位置を計算
                        x = touchX - positionX;
                        y = touchY - positionY;
                        if (x - 50 * scale < 0)
                        {
                            x = 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (x + 50 * scale > canvas.width)
                        {
                            x = canvas.width - 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (y - 50 * scale < 0)
                        {
                            y = 50 * scale;
                        }
                        else if (y + 50 * scale > canvas.height)
                        {
                            y = canvas.height - 50 * scale;
                        }
                        imgx = x - 50 * scale;
                        imgy = y - 50 * scale;
                        imgscale = scale;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.fillStyle = 'rgba(255,255,255,0.5)';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.clearRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                        ctx.lineWidth = 3;
                        ctx.strokeRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                    });
                $(document)
                    .on('drag', '#c1', function(event)
                    {
                        var gesture = event.originalEvent.gesture;
                        var clientRect = this.getBoundingClientRect();
                        var positionX = clientRect.left + window.pageXOffset;
                        var positionY = clientRect.top + window.pageYOffset;
                        x = gesture.center.pageX - positionX;
                        y = gesture.center.pageY - positionY;
                        // console.log("dragx="+x);
                        //     console.log("dragy="+y);
                        if (x - 50 * scale < 0)
                        {
                            x = 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (x + 50 * scale > canvas.width)
                        {
                            x = canvas.width - 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (y - 50 * scale < 0)
                        {
                            y = 50 * scale;
                        }
                        else if (y + 50 * scale > canvas.height)
                        {
                            y = canvas.height - 50 * scale;
                        }
                        imgx = x - 50 * scale;
                        imgy = y - 50 * scale;
                        imgscale = scale;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.fillStyle = 'rgba(255,255,255,0.5)';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.clearRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                        ctx.lineWidth = 3;
                        ctx.strokeRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                    });
                $(document)
                    .on('pinch', '#c1', function(event)
                    {
                        var gesture = event.originalEvent.gesture;
                        // scale = Math.max(0.5,Math.min(prevScale*gesture.scale,3));
                        if (x - 50 * scale < 0)
                        {
                            x = 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (x + 50 * scale > canvas.width)
                        {
                            x = canvas.width - 50 * scale;
                            if (y - 50 * scale < 0)
                            {
                                y = 50 * scale;
                            }
                            else if (y + 50 * scale > canvas.height)
                            {
                                y = canvas.height - 50 * scale;
                            }
                        }
                        else if (y - 50 * scale < 0)
                        {
                            y = 50 * scale;
                        }
                        else if (y + 50 * scale > canvas.height)
                        {
                            y = canvas.height - 50 * scale;
                        }
                        if (50 * scale + 50 * scale >= canvas.width && gesture.scale > 1.000 || 50 * scale + 50 * scale >= canvas.height && gesture.scale > 1.000)
                        {
                            scale = tem;
                        }
                        else
                        {
                            scale = prevScale + gesture.scale;
                            prevScale = gesture.scale;
                            tem = scale;
                        }
                        //console.log("ピンチイン"+gesture.scale);
                        imgx = x - 50 * scale;
                        imgy = y - 50 * scale;
                        imgscale = scale;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.fillStyle = 'rgba(255,255,255,0.5)';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        ctx.clearRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                        ctx.lineWidth = 3;
                        ctx.strokeRect(x - 50 * scale, y - 50 * scale, 100 * scale, 100 * scale);
                    });
                imgx = canvas.width / 2 - 50;
                imgy = canvas.height / 2 - 50;
                imgscale = scale;
                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.clearRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
                ctx.lineWidth = 3;
                ctx.strokeRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
                console.log("canvas.width=" + canvas.width);
                console.log("canvas.height=" + canvas.height);
                console.log("imagesw=" + imagesw);
                console.log("imagesh=" + imagesh);
            }
        }

        function drawimage()
        {
            console.log("drawimage()");
            var canvas = document.getElementById('c2');
            var ctx = canvas.getContext('2d');
            // canvas.width = 300;
            // canvas.height = 300;
            canvas.width = winwidth*0.86;
            canvas.height = winwidth*0.86;
            //選択した矩形の座標とスケール
            // var imgx,imgy,imgscale;
            //写真の縦横
            // var height,width;
            //写真の向き 0=縦長, 1=横長
            // var muki;
            //imgで表示される写真のサイズを記憶
            // var winwidth, winheight;
            var picx, picy;
            picx = imgx * (height / winheight);
            picy = imgy * (width / winwidth);
            console.log("winwidth=" + winwidth);
            console.log("winheight=" + winheight);
            console.log("height=" + height);
            console.log("width=" + width);
            console.log("muki=" + muki);
            if (muki == 0)
            {
                if (height < width)
                {
                    ctx.drawImage(img, imgx * (width / winheight), imgy * (height / winwidth), height / winwidth * (100 * imgscale), width / winheight * (100 * imgscale), 0, 0, winwidth*0.86, winwidth*0.86);
                }
                else
                {
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(90 * Math.PI / 180);
                    ctx.translate(-canvas.width / 2, -canvas.height / 2);
                    ctx.drawImage(img, picy, width - picx - width / winwidth * (100 * imgscale), width / winwidth * (100 * imgscale), height / winheight * (100 * imgscale), 0, 0, winwidth*0.86, winwidth*0.86);
                    // ctx.drawImage(img,0,0, width/winwidth*(100*imgscale), height/winheight*(100*imgscale),0,0,300,300);
                    console.log("縦");
                    // console.log("imgx="+imgx);
                    // console.log("imgy="+imgy);
                    // console.log("width="+width);
                    // console.log("height="+height);
                }
            }
            else
            {
                ctx.drawImage(img, picx, picy, width / winwidth * (100 * imgscale), height / winheight * (100 * imgscale), 0, 0, winwidth*0.86, winwidth*0.86);
                console.log("横");
                // console.log("imgx="+imgx);
                // console.log("imgy="+imgy);
                // console.log("width="+width);
                // console.log("height="+height);
                // console.log("winwidth="+winwidth);
                // console.log("winheight="+winheight);
                // console.log("picx="+picx);
                // console.log("picy="+picy);
                // 
                // console.log("(picx*imgscale)=" + (100*imgscale));
                // console.log("(picy*imgscale)=" + (100*imgscale));
            }
            var png = canvas.toDataURL();
            document.getElementById("newImg")
                .src = png;
        }
        //  $(document).on('tap','#c1',function(event){
        //     console.log("タップ");
        // });
        // 
        //  $(document).on('touchmove','#c1',function(event){
        //     event.preventDefault();
        // //    console.log("drag");
        // });
        function savePic()
        {
            window.cordova.plugins.imagesaver.saveImageToGallery(nativePathToJpegImage, onSaveImageSuccess, onSaveImageError);

            function onSaveImageSuccess()
            {
                console.log('--------------success');
            }

            function onSaveImageError(error)
            {
                console.log('--------------error: ' + error);
            }
        }

        function go7()
        {
           
            document.querySelector('#navigator')
                .bringPageTop('page7.html', {  animation: "fade" });
        }

        function go2()
        {
            document.querySelector('#navigator')
                .bringPageTop('page2.html');
        }
        /*function screenshot(){
       navigator.screenshot.save(function(error,res){
  if(error){
    console.error(error);
  }else{
    console.log('ok',res.filePath);
  }
});
        }*/
        var canvasData = null;
        /*
         var application_key = '';
    var client_key = '';
    
        function screen(){
        
          ons.ready(function()
          {
              var ncmb = new NCMB(application_key, client_key);
              document.getElementById('download')
                  .onclick = (e) =>
                  {
                      navigator.screenshot.URI(function(error, res)
                      {
                          if (error)
                          {
                              console.error(error);
                              return;
                          }
                          var img = document.getElementById('page6');
                          img.src = res.URI;
                          var blob = dataURItoBlob(res.URI, 'image/png');
                          ncmb.File.upload('screenshot.png', blob)
                              .then(function(data)
                              {
                                  alert('アップロード完了しました');
                              })
                              .catch(function(err)
                              {
                                  alert('エラーが発生しました');
                                  alert(JSON.stringify(err));
                              })
                      }, 'png', 100);
                  }
          });
        }
        
         let dataURItoBlob = function(dataURI, dataTYPE) {
        var binary = atob(dataURI.split(',')[1]), array = [];
        for(var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
        return new Blob([new Uint8Array(array)], {type: dataTYPE});
    }
    
    
        */
        
        //seikou screen but no go to folda
        /*function screen()
         {
             navigator.screenshot.URI(function(error, res)
             {
                 if (error)
                 {
                     console.error(error);
                 }
                 else
                 {
                     html = '<img style="width:100%;" src="' + res.URI + '">';*/
        //document.body.innerHTML = html;
        /*var blob = dataURItoBlob(res.URI, 'image/png');
                        ncmb.File.upload('screenshot.png', blob)
                        .then(function(data)
                            {
                                alert('アップロード完了しました');
                            })
                            .catch(function(err)
                            {
                                alert('エラーが発生しました');
                                alert(JSON.stringify(err));
                            })
                    }
                }, 50);
               
            }*/
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        //reset detea
        /*
        window.onload = function(){
        var btn = document.getElementById('reset');//resetIdのボタンにbtnという関数を付与。
        btn.addEventListener('click',function(){
        reset();
        },false);
        };*/
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        function reset()
        {
            changeColor2();
            document.getElementById("stamp11")
                .src = img1[0].src;
                cnt1=0;
            document.getElementById("stamp22")
                .src = img2[0].src;
            cnt2=0;
            document.getElementById("stamp33")
                .src = img3[0].src;
            cnt3=0;
            document.getElementById("newImg")
                .src = "img/plus4-8.png";
            var canvas = document.getElementById('c2');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, winwidth*0.86, winwidth*0.86);
            document.getElementById("area")
                .value = "";
            document.getElementById("val")
                .value = 50;
                changeColor5();
            //alert("The photo has been saved");
            ///////////////////////////////////////1/10
        ons.notification.alert({
  message: 'The photo has been saved',
  // もしくはmessageHTML: '<div>HTML形式のメッセージ</div>',
  title: 'Save',
  buttonLabel: 'OK',
  animation: 'default', // もしくは'none'
  // modifier: 'optional-modifier'
  callback: function() {
    // ボタンがタップされた
  }
});
////////////////////////////////////////////////////1/10
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //seikou hozon for android
        
        /*function screen()
        {
           navigator.screenshot.save(function(error,res){
  if(error){
    console.error(error);
  }else{
    console.log('ok',res.filePath);
  }
});
            reset();
        }*/
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        
        //screen shot for iphone
        
      function screen(){
    navigator.screenshot.save(function(error,res){
          if(error){
            console.error(error);
          }else{
            console.log('ok',res.filePath);

            var MEsuccess = function(msg){
            console.info(msg);
            }   ;

            var MEerror = function(err){
                console.error(err);
            };

            saveImageToPhone(res.filePath, MEsuccess, MEerror);
          }
        },'jpg',90);
      
}

function saveImageToPhone(url, success, error) {
    var canvas, context, imageDataUrl, imageData;
    var img = new Image();
    img.onload = function() {
        canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        context = canvas.getContext('2d');
        context.drawImage(img, 0, 0);
        try {
            imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
            imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
            cordova.exec(
                success,
                error,
                'Canvas2ImagePlugin',
                'saveImageDataToLibrary',
                [imageData]
            );
        }
        catch(e) {
            error(e.message);
        }
    };
    try {
        img.src = url;
    }
    catch(e) {
        error(e.message);
    }
     reset();
}
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /*function screen(){
                navigator.screenshot.URI(function(error,res){

    if(error){

        console.error(error);

    }else{

        var params = {data: res, prefix: 'myPrefix_', format: 'JPG', quality: 80, mediaScanner: true};

        window.imageSaver.saveBase64Image(params,  function (filePath) {

          console.log('File saved on ' + filePath);

        },
        function (msg) {

            console.error(msg);

        }

      );

     }
}, 'jpg', 50);
            }*/
        /*let dataURItoBlob = function(dataURI, dataTYPE)
            {
                var binary = atob(dataURI.split(',')[1]),
                    array = [];
                for (var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
                return new Blob([new Uint8Array(array)],
                {
                    type: dataTYPE
                });
            }*/
        // Page init event
        document.addEventListener('init', function(event)
        {
            var page = event.target;
            if (page.matches('#first-page'))
            {
                var save5 = localStorage.getItem('saveTest5');
             
                page.querySelector('#first-button')
                    .onclick = function()
                    {
                        
                               var save5 = localStorage.getItem('saveTest5');
                                  //var saveTut = localStorage.getItem('acs2');
                        if (save5 == "false")
                        {
                            document.querySelector('#navigator')
                            .pushPage("page2.html", { animation: "slide" });
                        }
                        else if(save5 == "true")
                        {
                            //次回から表示しない   
                            document.querySelector('#navigator')
                            .pushPage("page6.html", { animation: "slide" });
                        }
                        else{
                             document.querySelector('#navigator')
                            .pushPage("page2.html", { animation: "slide" });
                        }
                        /*else if(save5 == 'false' || saveTut == 'false')
                        {
                            //次回から表示しない   
                            document.querySelector('#navigator')
                            .pushPage("page6.html", { animation: "slide" });
                        }*/
                            
                    };
                page.querySelector('#login-button')
                    .onclick = function()
                    {
                        document.querySelector('#navigator')
                            .pushPage("page6.html", { animation: "slide" });
                    };
            }
            else if (page.matches('#second-page'))
            {
                page.querySelector('#push-button2')
                    .onclick = function()
                    {
                        document.querySelector('#navigator')
                            .bringPageTop("page3.html", {  animation: "slide" });　
                        save();
                        //only();
                        //ページ３で結果を入力する際は外す
                       
                    };
            }
            else if (page.matches('#third-page'))
            {
                page.querySelector('#push-button5')
                    .onclick = function()
                    {
                        document.querySelector('#navigator')
                            .bringPageTop("page6.html", {  animation: "fade" });
                             saveSeconds();
                      
                    };
            }
           /* else if (page.matches('#forth-page'))
            {
                page.querySelector('#push-button4')
                    .onclick = function()
                    {
                        document.querySelector('#navigator')
                            .bringPageTop("page5.html", {  animation: "fade" });
                    };
            }
            else if (page.matches('#fifth-page'))
            {
                page.querySelector('#push-button5')
                    .onclick = function()
                    {
                        document.querySelector('#navigator')
                            .bringPageTop("page6.html");
                        saveSeconds();
                        var save6 = localStorage.getItem('saveTest6');
                        if (save6 == "false")
                        {}
                        else
                        {
                            //次回から表示しない
                            modal_close2();
                        }
                    };
            }*/
            else if (page.matches('#sixth-page'))
            {
               
                time();
                saveOut();
                
                //drawimage();
                
                // navi.pages[2].remove();
                // document.querySelector('navigator').pages[2].remove();
            }
            else if (page.matches('#seventh-page'))
            {
               
            }
            else if (page.matches('#eight-page'))
            {
                draw1();
                page.querySelector('#push-button')
                    .onclick = function()
                    {
                        // document.querySelector('#navigator').popPage();
                        document.querySelector('#navigator')
                            .bringPageTop("page6.html");
                        // document.querySelector('#navigator').pushPage("page6.html");
                        drawimage();
                        // idchange();
                    }
            }
        });
        //
        var idchange = function()
            {
                var number = document.querySelector('#navigator')
                    .pages.length;
                document.querySelector('#navigator')
                    .pages[number - 2].remove();
            }

        function changeValue(value)
        {
            document.getElementById("val")
                .innerHTML = value;
            if (value == 0)
            {
                changeColor0();
            }
            else if (value == 10)
            {
                changeColor1();
            }
            else if (value == 20)
            {
                changeColor2();
            }
            else if (value == 30)
            {
                changeColor3();
            }
            else if (value == 40)
            {
                changeColor4();
            }
            else if (value == 50)
            {
                changeColor5();
            }
            else if (value == 60)
            {
                changeColor6();
            }
            else if (value == 70)
            {
                changeColor7();
            }
            else if (value == 80)
            {
                changeColor8();
            }
            else if (value == 90)
            {
                changeColor9();
            }
            else if (value == 100)
            {
                changeColor10();
            }
        }

