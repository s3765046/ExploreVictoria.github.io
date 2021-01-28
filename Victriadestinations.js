var config = {
    style: 'mapbox://styles/glakshay2475/ckfi5crkd0vut19qiigrg1eda',
    accessToken: 'pk.eyJ1IjoiZ2xha3NoYXkyNDc1IiwiYSI6ImNrMGh1M3dubTA2ZngzY3Fxc3EzYWc1b3UifQ.1y6Hhr2H83VxQYHNgSCpxA',
    showMarkers: false,
    chapters: [
    {
            id: 'Vic',
            title: 'Victoria',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Victoria_in_Australia.svg/1024px-Victoria_in_Australia.svg.png',
            description: '<audio controls><source src="Speech/Victoria.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>Victoria is the second-smallest state in Australia, covering 227,600 sq km.Victoria, south-east Australia province, occupies a continents mountainous coastal area.<br><br> Victoria is separated from New South Wales to the north by the Murray River for around 1,065 miles (1,715 km) long and by an additional border of about 110 miles (180 km) linking Cape Howe with the nearest Murray source. The western border is with South Australia, and the southern coastline on the Tasman Sea and the Indian (Southern) Ocean extends for approximately 1,045 miles (1,680 km) and includes the Port Phillip Bay peninsula. The state capital, Melbourne, sits at the head of the bay off Bass Strait. This compact area boasts a variety of diverse regions and attractions, with sweeping coastlines, sandy beaches, and wildlife-filled national parks and forests, plus wineries, lakes, and mountains offering skiing, climbing, and hiking.',
            location: {
                center: [144.74007, -36.81058],
zoom: 6,
pitch: 30.00,
bearing: 1
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Grampians',
            title: 'Grampians National Park',
            image: 'https://live.staticflickr.com/798/41155708561_97f2099df1_b.jpg',
            description: '<audio controls><source src="Speech/Grampians.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>Grampians National Park is a nature reserve in Victoria, Australia. It’s known for its sandstone mountains, wildflowers and wildlife including echidnas and wallabies. Near the village of Halls Gap, the Brambuk Aboriginal Cultural Centre gives insight into local Aboriginal history and rock art. Trails lead to waterfalls like towering MacKenzie Falls and lookouts such as the Balconies, with views of the Victoria Range.<br><br>Explore the natural beauty of the Grampians from its world-famous hiking trails. Discover majestic waterfalls, dazzling spring wildflower displays and awe-inspiring mountain panoramas. Cross paths with kangaroos, wallabies, emus and native birds.Grampians National Park is one of Australias most recognisable places. The best way to appreciate it is on one of its many world-class walks or hikes or taking a scenic drive.',
            location: {
                center: [142.53987, -37.17688],
zoom: 13.00,
pitch: 55.00,
bearing: 54.40
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Twelve',
            title: 'Twelve Apostles Marine National Park',
            image: 'https://live.staticflickr.com/8121/8637914782_7b71cac4c2_b.jpg',
            description: '<audio controls><source src="Speech/12.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>The Twelve Apostles is a collection of limestone stacks off the shore of Port Campbell National Park, by the Great Ocean Road in Victoria, Australia. Their proximity to one another has made the site a popular tourist attraction.<br> <br>Created by constant erosion of the limestone cliffs of the mainland beginning 10–20 million years ago, the stormy Southern Ocean and blasting winds gradually eroded the softer limestone, forming caves in the cliffs.The caves eventually became arches and when they collapsed rock stacks up to 45 metres high were left isolated from the shore. View the 12 Apostles at sunrise and sunset as they change colour from dark and foreboding in shadow to brilliant sandy yellow under a full sun.',
            location: {
                center: [143.10358, -38.66434],
zoom: 16.00,
pitch: 60.00,
bearing: 8.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Daylesford',
            title: 'Daylesford',
            image: 'https://live.staticflickr.com/2559/3689259239_0df556b495_b.jpg',
            description: '<audio controls><source src="Speech/Daylesford.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>Daylesford is a town in the foothills of the Great Dividing Range of Victoria, Australia. It’s known for its natural mineral springs. The leafy Wombat Hill Botanical Gardens sits atop an extinct volcano. On its grounds, a 19th-century mansion is home to the Convent Gallery. Daylesford Spa Country Railway winds through farmland and forest. Nearby, Wombat State Forest shelters rare wildlife like the spot-tailed quoll.<br> <br>Mention the word ‘Daylesford’ to people who’ve been there and you’re likely to notice a dreamy, faraway look in their eyes. That’s the remembrance of time spent in one of Victoria’s most romantic and relaxing towns, a place seemingly uniquely designed to heal what ails you. Whether it’s physical sustenance at one of Daylesford’s award-winning eateries, or spiritual nourishment in world-famous mineral springs and spa resorts, you’ll leave Daylesford planning your next return.',
            location: {
                center: [144.13882, -37.34948],
zoom: 18.00,
pitch: 58.00,
bearing: -42.40
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'City',
            title: 'City of Melbourne',
            image: 'https://global.vic.gov.au/__data/assets/image/0009/86886/1.09.A-v02r01-PhotoLarge.jpg',
            description: '<audio controls><source src="Speech/Melbourne.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>The Economist Intelligence Units 2017 Global Liveability Index awarded Melbourne as the worlds top city for seven years running.<br> <br>Melbourne is a blend of bustling laneways, world-class restaurants and captivating museums. The locals love their coffee, and serve it up in abundance at cosy cafes. Theres always a sense of excitement here – whether its in the citys fascinating flavours or fierce sporting rivalries. Attend a sports event, drink a cocktail on a rooftop and uncover the stories hidden within Melbournes art-filled alleyways.',
            location: {
               center: [144.97027, -37.82749],
zoom: 12.99,
pitch: 60.00,
bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Shire',
            title: 'Shire of Mornington Peninsulas',
            image: 'https://live.staticflickr.com/8619/28351966491_d6581c8b66_k.jpg',
            description: '<audio controls><source src="Speech/Mornington.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>The Mornington Peninsula Shire is a boot-shaped promontory separating the Port Phillip Bay and Western Port, just over 40 kms south east of Melbourne. Reminiscent of the Mediterranean with its vineyards and olive groves, historic country house retreats and intimate hotels, the Peninsula is one of the major holiday destinations for Melbourne. It encompasses some of Victorias most iconic national and state parks, world class wineries, a large and diverse range of parks and reserves, foreshore areas, wetlands, and a myriad of bay walking trails. <br> <br>Breathe in the fresh sea air, sample innovative local cuisine, and soak up the relaxed alfresco lifestyle of the Mornington Peninsula, just an hour from Melbourne. Explore the galleries, spas and cafes in breezy seaside villages, cool off with a day on the beach, or escape to the hinterland for gourmet delights at boutique wineries.',
            location: {
                center: [144.87794, -38.47218],
zoom: 13.98,
pitch: 60.00,
bearing: 13.60
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Phillip',
            title: 'Phillip Island',
            image: 'https://live.staticflickr.com/65535/49980380836_f1da3866fe_6k.jpg',
            description: '<audio controls><source src="Speech/Phillip.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>Phillip Island, a popular day trip from Melbourne, lies just off Australia’s southern coast. At Summerland Beach, spectators gather daily at sunset to watch the Penguin Parade, when Little penguins come ashore in groups. The Nobbies outcrop is the viewing site for Seal Rocks, home to a large colony of Australian fur seals. The Phillip Island Circuit is a well-known track for motorcycle and car racing. <br> <br>Pristine white beaches and hi-octane motor sports, endless family fun and iconic wildlife, youll find it all on a seaside holiday at Phillip Island, just 90 minutes from Melbourne. See little penguins and sleepy koalas in their natural habitat, teach the kids to swim on a quiet bay beach, and soak up all the action at the Australian Motorcycle Grand Prix.',
            location: {
               center: [145.15037, -38.50990],
zoom: 17.00,
pitch: 60.00,
bearing: -31.20
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Yarra',
            title: 'Yarra Valley & The Dandenongs',
            image: 'https://live.staticflickr.com/3034/3391254019_774a7b4f35_3k.jpg',
            description: '<audio controls><source src="Speech/Yarra.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>The Dandenong Ranges are a set of low mountain ranges, rising to 633 metres at Mount Dandenong, approximately 35 km east of Melbourne, Victoria, Australia. <br> <br>Take an early morning balloon flight, meet passionate food and wine producers, and encounter a platypus at Healesville Sanctuary in the Yarra Valley. Wander the walking trails, meander the villages and discover the hidden delights of the Dandenong Ranges among its scenic winding roads, abundant artist studios, craft stores and renowned gardens.',
            location: {
                center: [145.23048, -37.94544],
zoom: 16.00,
pitch: 60.00,
bearing: 116.80
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'High Country',
            title: 'High Country',
            image: 'https://live.staticflickr.com/1661/25712618380_0b061627f9_k.jpg',
            description: '<audio controls><source src="Speech/High_Country.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>Encompassing a major part of Australia’s Great Dividing Range, the High Country is one of Victoria’s most precious jewels. It offers rugged mountains, magnificent snowfields, quaint country towns, picturesque wineries, powerful rivers and a rich history kept alive by cattlemen’s huts and ruins. As part of Australia’s cool temperate zone, Victoria’s High Country experiences cold winters and mild to warm summers. Alpine weather is notoriously changeable and snow has been recorded in all months of the year. When you go will largely depend upon what you wish to do.<br> <br>The High Countrys stunning mountains, valleys, rivers and lakes are perfect places for adventure and relaxation, year-round. Hit the slopes at Alpine resorts in winter, and return in the warmer months for inspired bushwalking and cycling action, from dizzying mountain bike challenges to meandering rail trails. Rest your legs and recharge at renowned restaurants and wineries, discover the vibrant craft brewery scene, or fill your basket at provedores and farm gates, all brimming with local delights.',
            location: {
              center: [146.09747, -37.04925],
zoom: 13.5,
pitch: 56.00,
bearing: 0.80
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Mount',
            title: 'Mount Buller',
            image: 'https://live.staticflickr.com/4085/5095901981_358fe6f3aa_k.jpg',
            description: '<audio controls><source src="Speech/Mt.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br>The climate of Mt Buller is typical of high altitude alpine resorts. In winter, covered in snow, it is transformed into a white winter paradise. In summer it is the perfect place to escape the heat down below, view rare alpine wildflowers and take in the endless vista of mountains. Mt Bullers ecotourism pursuits include: Bushwalking Wildflowers Mountain biking 4WD and motorcycling A licence is required by people or businesses who conduct organised tours or recreational businesses for profit within the Mt Buller and Mt Stirling Alpine Resorts under the Crown Land (Reserves) Act 1978.',
            location: {
                center: [146.43435, -37.15055],
zoom: 14,
pitch: 60.00,
bearing: 0.80
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Foorter',
            title: '',
            description: '<a href="https://www.rmit.edu.au/news/all-news/2017/mar/tell-me-about-geospatial-science"><br><img alt="tell-me-about-geospatial-science" src="https://upload.wikimedia.org/wikipedia/commons/5/51/RMIT_University_Logo.svg" style="width: 80%;"> <br> <br> <p style="color:black;">Designed by Lakshay Gupta</p></a><a href="mailto:s3765046@student.rmit.edu.au">Email me</a><br> <a href="https://arcg.is/bWz5">Fill a survey for us!</a>',
            location: {
                center: [144.9632, -37.8077],
zoom: 18,
pitch: 60.00,
bearing: 0.80
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]

};
