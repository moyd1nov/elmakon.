fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                var img1 = document.getElementById('img1');
                img1.setAttribute('src', json[0].image);
                var h11 = document.getElementById('h11')
                h11.innerText = json[0].category
                var h12 = document.getElementById('h12')
                h12.innerText = json[0].price + " $"
                var p11 = document.getElementById('p11')
                p11.innerText = json[0].title
                var p12 = document.getElementById('p12')
                p12.innerText = json[0].rating.rate
                var p13 = document.getElementById('p13')
                p13.innerText = json[0].rating.count

                var img2 = document.getElementById('img2');
                img2.setAttribute('src', json[1].image);
                var h21 = document.getElementById('h21')
                h21.innerText = json[1].category
                var h22 = document.getElementById('h22')
                h22.innerText = json[1].price + " $"
                var p21 = document.getElementById('p21')
                p21.innerText = json[1].title
                var p22 = document.getElementById('p22')
                p22.innerText = json[1].rating.rate
                var p23 = document.getElementById('p23')
                p23.innerText = json[1].rating.count

                var img3 = document.getElementById('img3');
                img3.setAttribute('src', json[2].image);
                var h31 = document.getElementById('h31')
                h31.innerText = json[2].category
                var h32 = document.getElementById('h32')
                h32.innerText = json[2].price + " $"
                var p31 = document.getElementById('p31')
                p31.innerText = json[2].title
                var p32 = document.getElementById('p32')
                p32.innerText = json[2].rating.rate
                var p33 = document.getElementById('p33')
                p33.innerText = json[2].rating.count

                
                var img4 = document.getElementById('img4');
                img4.setAttribute('src', json[3].image);
                var h41 = document.getElementById('h41')
                h41.innerText = json[3].category
                var h42 = document.getElementById('h42')
                h42.innerText = json[3].price + " $"
                var p41 = document.getElementById('p41')
                p41.innerText = json[3].title
                var p42 = document.getElementById('p42')
                p42.innerText = json[3].rating.rate
                var p43 = document.getElementById('p43')
                p43.innerText = json[3].rating.count

                var img5 = document.getElementById('img5');
                img5.setAttribute('src', json[4].image);
                var h51 = document.getElementById('h51')
                h51.innerText = json[4].category
                var h52 = document.getElementById('h52')
                h52.innerText = json[4].price + " $"
                var p51 = document.getElementById('p51')
                p51.innerText = json[4].title
                var p52 = document.getElementById('p52')
                p52.innerText = json[4].rating.rate
                var p53 = document.getElementById('p53')
                p53.innerText = json[4].rating.count

                //////////////////////////////////////
                
                var img11 = document.getElementById('img11');
                img11.setAttribute('src', json[5].image);
                var h111 = document.getElementById('h111')
                h111.innerText = json[5].category
                var h112 = document.getElementById('h112')
                h112.innerText = json[5].price + " $"
                var p111 = document.getElementById('p111')
                p111.innerText = json[5].title
                var p112 = document.getElementById('p112')
                p112.innerText = json[5].rating.rate
                var p113 = document.getElementById('p113')
                p113.innerText = json[5].rating.count

                var img12 = document.getElementById('img12');
                img12.setAttribute('src', json[6].image);
                var h121 = document.getElementById('h121')
                h121.innerText = json[6].category
                var h122 = document.getElementById('h122')
                h122.innerText = json[6].price + " $"
                var p121 = document.getElementById('p121')
                p121.innerText = json[6].title
                var p122 = document.getElementById('p122')
                p122.innerText = json[6].rating.rate
                var p123 = document.getElementById('p123')
                p123.innerText = json[6].rating.count

                var img13 = document.getElementById('img13');
                img13.setAttribute('src', json[7].image);
                var h131 = document.getElementById('h131')
                h131.innerText = json[7].category
                var h132 = document.getElementById('h132')
                h132.innerText = json[7].price + " $"
                var p131 = document.getElementById('p131')
                p131.innerText = json[7].title
                var p132 = document.getElementById('p132')
                p132.innerText = json[7].rating.rate
                var p133 = document.getElementById('p133')
                p133.innerText = json[7].rating.count

                
                var img14 = document.getElementById('img14');
                img14.setAttribute('src', json[8].image);
                var h141 = document.getElementById('h141')
                h141.innerText = json[8].category
                var h142 = document.getElementById('h142')
                h142.innerText = json[8].price + " $"
                var p141 = document.getElementById('p141')
                p141.innerText = json[8].title
                var p142 = document.getElementById('p142')
                p142.innerText = json[8].rating.rate
                var p143 = document.getElementById('p143')
                p143.innerText = json[8].rating.count

                var img15 = document.getElementById('img15');
                img15.setAttribute('src', json[9].image);
                var h151 = document.getElementById('h151')
                h151.innerText = json[9].category
                var h152 = document.getElementById('h152')
                h152.innerText = json[9].price + " $"
                var p151 = document.getElementById('p151')
                p151.innerText = json[9].title
                var p152 = document.getElementById('p152')
                p152.innerText = json[9].rating.rate
                var p153 = document.getElementById('p153')
                p153.innerText = json[9].rating.count

                ////////////////////////////////////////////

                var img51 = document.getElementById('img51');
                img51.setAttribute('src', json[10].image);
                var h511 = document.getElementById('h511')
                h511.innerText = json[10].category
                var h512 = document.getElementById('h512')
                h512.innerText = json[10].price + " $"
                var p511 = document.getElementById('p511')
                p511.innerText = json[10].title
                var p512 = document.getElementById('p512')
                p512.innerText = json[10].rating.rate
                var p513 = document.getElementById('p513')
                p513.innerText = json[10].rating.count

                var img52 = document.getElementById('img52');
                img52.setAttribute('src', json[11].image);
                var h521 = document.getElementById('h521')
                h521.innerText = json[11].category
                var h522 = document.getElementById('h522')
                h522.innerText = json[11].price + " $"
                var p521 = document.getElementById('p521')
                p521.innerText = json[11].title
                var p522 = document.getElementById('p522')
                p522.innerText = json[11].rating.rate
                var p523 = document.getElementById('p523')
                p523.innerText = json[11].rating.count

                var img53 = document.getElementById('img53');
                img53.setAttribute('src', json[12].image);
                var h531 = document.getElementById('h531')
                h531.innerText = json[12].category
                var h532 = document.getElementById('h532')
                h532.innerText = json[12].price + " $"
                var p531 = document.getElementById('p531')
                p531.innerText = json[12].title
                var p532 = document.getElementById('p532')
                p532.innerText = json[12].rating.rate
                var p533 = document.getElementById('p533')
                p533.innerText = json[12].rating.count

                
                var img54 = document.getElementById('img54');
                img54.setAttribute('src', json[13].image);
                var h541 = document.getElementById('h541')
                h541.innerText = json[13].category
                var h542 = document.getElementById('h542')
                h542.innerText = json[13].price + " $"
                var p541 = document.getElementById('p541')
                p541.innerText = json[13].title
                var p542 = document.getElementById('p542')
                p542.innerText = json[13].rating.rate
                var p543 = document.getElementById('p543')
                p543.innerText = json[13].rating.count

                var img55 = document.getElementById('img55');
                img55.setAttribute('src', json[14].image);
                var h551 = document.getElementById('h551')
                h551.innerText = json[14].category
                var h552 = document.getElementById('h552')
                h552.innerText = json[14].price + " $"
                var p551 = document.getElementById('p551')
                p551.innerText = json[14].title
                var p552 = document.getElementById('p552')
                p552.innerText = json[14].rating.rate
                var p553 = document.getElementById('p553')
                p553.innerText = json[14].rating.count
            })
            
