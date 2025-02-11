import { Tour } from '../../app/models/tour.model';


export const mockTours: Tour[] = [
  {
    id: 1,
    name: {
      en: 'Garni, Geghard',
      ru: 'Гарни, Гегард',
      am: 'Գառնի, Գեղարդ'
    },
    description: {
      en: `Garni and Geghard: A Tapestry of History and Spirituality in Armenia
        In the heart of Armenia, two remarkable historical landmarks—Garni and Geghard—stand as enduring testaments to the country’s rich cultural and spiritual heritage. Nestled among dramatic landscapes and steep gorges, these sites invite visitors on an immersive journey through centuries marked by artistic innovation and profound religious transformation.
        Garni is famed for its magnificent pagan temple, the sole surviving example of Greco-Roman architecture in Armenia. Constructed in the first century AD and dedicated to the sun god Mihr, the temple’s elegant columns and open-air structure offer breathtaking views of the surrounding valleys. This ancient edifice not only showcases the ingenuity of early builders but also reflects an era when Armenia’s spiritual life was closely intertwined with nature and cosmic forces.
        Just a short distance away, the Geghard Monastery enchants with its unique fusion of natural beauty and medieval craftsmanship. Carved directly into rugged rock faces, Geghard was founded in the 4th century and later expanded during the medieval period. Its intricately hewn chambers, sacred relics, and serene chapels evoke a profound sense of devotion, making it a cherished pilgrimage site for believers and history enthusiasts alike. The monastery’s seamless integration into the natural landscape is a striking reminder of how art and faith can flourish even in the most challenging environments.
        Together, Garni and Geghard illustrate the dynamic evolution of Armenian culture—from ancient pagan traditions to the embrace of Christianity—each site weaving its own narrative that resonates with the legacy of a resilient people. As you wander through these ancient corridors, the whispers of bygone eras invite you to reflect on the enduring connection between human creativity, nature, and the divine.
        Visiting Garni and Geghard is not merely a tour of historic ruins but a soulful exploration of Armenia itself. These landmarks continue to inspire awe and reverence, serving as living monuments to the nation’s artistic mastery and spiritual endurance, and inviting every visitor to partake in the timeless story of Armenia.`,
      ru: `Гарни и Гегард: Полотно истории и духовности в Армении
        В самом сердце Армении два выдающихся исторических памятника — Гарни и Гегард — стоят как неувядающие свидетельства богатого культурного и духовного наследия страны. Расположенные среди драматичных пейзажей и узких ущелий, эти места приглашают посетителей окунуться в многовековой путь художественных новаций и глубоких религиозных преобразований.
        Гарни знаменит своим великолепным языческим храмом, являющимся единственным сохранившимся примером греко-римской архитектуры в Армении. Построенный в I веке н.э. и посвящённый солнечному богу Михру, храм с элегантными колоннами и открытой конструкцией открывает захватывающие виды на окружающие долины. Это древнее сооружение не только демонстрирует гениальность первых строителей, но и отражает эпоху, когда духовная жизнь Армении была неразрывно связана с природой и космическими силами.
        Всего в нескольких километрах отсюда монастырь Гегард очаровывает своим уникальным сочетанием природной красоты и средневекового мастерства. Высеченный прямо в скалистых утёсов, Гегард был основан в IV веке и впоследствии расширен в средневековый период. Его изящно вырезанные камеры, священные реликвии и спокойные часовни вызывают глубокое чувство преданности, делая это место любимым для паломников и ценителей истории. Гармоничное слияние монастыря с окружающим ландшафтом служит ярким напоминанием о том, как искусство и вера могут процветать даже в самых суровых условиях.
        Гарни и Гегард вместе демонстрируют динамичное развитие армянской культуры — от древних языческих традиций до принятия христианства — каждое место рассказывает свою уникальную историю, созвучную наследию стойкого народа. Прогуливаясь по этим древним коридорам, можно услышать шёпот минувших эпох, который приглашает задуматься о неразрывной связи между человеческим творчеством, природой и божественным.
        Посещение Гарни и Гегарда — это не просто экскурсия по историческим руинам, это глубокое знакомство с душой Армении. Эти памятники продолжают вызывать восхищение и трепет, служа живыми монументами художественного мастерства и духовной стойкости страны, приглашая каждого посетителя прикоснуться к вечной истории Армении.`,
      am: `Գառնին և Գեղարդը՝ Հայաստանի պատմության և հոգևորության զարդերը
        Հայաստանի սրտում գտնվում են երկու բացառիկ պատմական վայր՝ Գառնին և Գեղարդը, որոնք վկայում են երկրում հարուստ մշակութային և հոգևոր ժառանգության գոյության մասին: Դրամատիկ լանդշաֆտների և խորուկ գերչիների մեջ հարմարած, այս վայրերը հրավիրում են այցելուներին դարերի ընթացքում ստեղծված արվեստի նորարարության և խորքային կրոնական վերափոխությունների պատմությունը զգալ:
        Գառնին հայտնի է իր հիասքանչ լեզվական տեմպլով, որը հանդիսանում է Հայաստանի մնացած միայնակ греко-հռոմեական ճարտարապետական նմուշը: Ստեղծված առաջին դարում և նվիրված արևի աստծուն «Միհրին», տեմպլը իր քաղցր ձևավորված սյուններով ու բաց օդային կառուցվածքով առաջարկում է շրջապատող դաշտերի ընդհրալիչ տեսարաններ: Այս հնագույն շինույթը ոչ միայն արտահայտում է վաղմեռ ավանդական ճարտարապետության վարպետությունը, այլ նաև արձանագրում է այն շրջանը, երբ հայկական հոգևոր կյանքը խորը կցված էր բնական իրերի և ընդլայնող տիեզերքի ուժերի հետ:
        Մի քիչ հեռավորության վրա, Գեղարդի վանքն գրավիչ է իր յուրահատուկ համադրությամբ՝ բնական գեղեցկության և միջնադարյան ձեռագործության: Ուղիղ կոտրված կեղևային կղզիներում, Գեղարդը հիմնվել է չորրորդ դարում և հետագայում ընդլայնվել է միջնադարյան ժամանակաշրջանում: Վանքի մանրակրկիտ հուշարձանները, սուրբ ժառանգական առարկությունները ու հանգիստ միսարձանները խորքային նվիրատվության զգացում են ಮೂġած, դարձնելով այն սիրելի համար հոգեւորների և պատմասիրելների: Վանքի բնական շրջակա տարածքի հետ անբաժանելի ինտեգրությունը տպավորիչ վկայություն է այն մասին, թե ինչպես արվեստը և հավատքը կարող են համադրվել նույնիսկ ամեն դժվար պայմաններում:
        Գառնին և Գեղարդը միասին ներկայացնում են հայկական մշակույթի դինամիկ զարգացումը՝ հնագույն լեզվական ավանդույթներից մինչեւ քրիստոնեության ընդունումը, յուրաքանչյուրը ներկայացնելով իր յուրօրինակ պատմությունը, որը արտասանոթանում է այդ վստահ ու դուրին ժողովրդի ժառանգությանը: Անդորավ եռող այս հնագույն անցուղիները հրավիրում են լսել անցյալ դարերի շշուկները, որոնք խրախուսում են մտածել մարդկային ստեղծագործության, բնական աշխարհի և աստվածային հավասարության մասին:
        Գառնին և Գեղարդը այցելելը ավելին է, քան պարզապես պատմական ավերակների դիտում, դա հայկական հոգքի խորը ուսումնասիրությունն է: Այս հուշարձանները շարունակում են ոգեշնչել և հարգանք բերել, ծառայելով որպես կենդանի մենակուիներ երկրի գեղարվեստական ձեռագործության և հոգևոր ընդհուժության, և հրավիրում են յուրաքանչյուր այցելուն մասն դառնալ Հայաստանի անչափ ժամանակով պատմության:`
    },
    images: [
      'assets/images/garni-geghard/garni-geghard-1.jpg',
      'assets/images/garni-geghard/garni-geghard-2.jpg',
      'assets/images/garni-geghard/garni-geghard-3.jpg',
      'assets/images/garni-geghard/garni-geghard-4.jpg',
      'assets/images/garni-geghard/garni-geghard-5.jpg'
    ],
    locationImg: 'assets/images/garni-geghard/garni-geghard-location.png'
  },
  {
    id: 2,
    name: {
      en: 'Khor Virap',
      ru: 'Хор Вирап',
      am: 'Խոր Վիրապ'
    },
    description: {
      en: `Khor Virap: The Sacred Monastery Beneath Mount Ararat
      Nestled in the vast plains of the Ararat Valley, with the legendary Mount Ararat towering in the background, Khor Virap is one of Armenia’s most significant historical and religious landmarks. More than just a monastery, it is a symbol of the nation’s spiritual transformation and resilience, drawing countless pilgrims, historians, and travelers each year.
      Khor Virap holds profound historical importance as the site where Saint Gregory the Illuminator, the patron saint of Armenia, was imprisoned for thirteen years in an underground pit before emerging to convert the Armenian king to Christianity. This pivotal moment in history led Armenia to become the first country in the world to adopt Christianity as a state religion in 301 AD. Today, visitors can descend into the very pit where Saint Gregory was held, a dark yet powerful reminder of faith and endurance.
      The monastery itself, though modest in scale, exudes a timeless aura of devotion. Its red stone walls, ancient chapels, and serene courtyards create an atmosphere of profound spirituality. With the majestic silhouette of Mount Ararat rising dramatically in the distance, Khor Virap offers some of the most breathtaking panoramic views in Armenia, making it a prime destination for photography and meditation.
      But Khor Virap is more than just a religious site—it is also a bridge between past and present. It stands as a testament to Armenia’s long and complex history, from pagan traditions to Christianity, from medieval struggles to modern identity. Every stone in its walls whispers tales of resilience, reminding visitors of the enduring faith that has shaped the Armenian people for centuries.
      A visit to Khor Virap is a deeply moving experience, offering not just a glimpse into Armenia’s past, but also a connection to its unshakable spirit. Whether standing before the monastery’s sacred halls, gazing at Mount Ararat’s snow-capped peaks, or descending into the legendary pit, one cannot help but feel the weight of history and the boundless power of faith.`,
      ru: `Хор Вирап: Священный монастырь у подножия горы Арарат
      Посреди бескрайних равнин Араратской долины, на фоне легендарной горы Арарат, возвышается Хор Вирап — одно из самых значимых исторических и религиозных мест Армении. Это не просто монастырь, а символ духовного преображения и стойкости нации, ежегодно привлекающий паломников, историков и путешественников.
      Хор Вирап имеет глубокое историческое значение, так как именно здесь святой Григорий Просветитель, покровитель Армении, был заключен в темницу на тринадцать лет в подземной яме, прежде чем привести армянского царя к христианству. Этот ключевой момент в истории сделал Армению первой страной в мире, принявшей христианство как государственную религию в 301 году н.э. Сегодня посетители могут спуститься в ту самую темницу, где содержался святой Григорий, — мрачное, но мощное напоминание о силе веры.
      Сам монастырь, хотя и небольшой, обладает неповторимой атмосферой духовности. Его красные каменные стены, древние часовни и тихие дворы создают ощущение святости и вечности. На фоне величественной горы Арарат, возвышающейся вдалеке, Хор Вирап предлагает одни из самых захватывающих панорамных видов в Армении, что делает его популярным местом для фотографии и размышлений.
      Однако Хор Вирап — это не только религиозный объект, но и мост между прошлым и настоящим. Он является живым свидетельством долгой и сложной истории Армении, от языческих традиций до христианства, от средневековых испытаний до формирования современной национальной идентичности. Каждая плита его стен хранит истории стойкости, напоминая посетителям о несокрушимой вере армянского народа.
      Посещение Хор Вирапа — это глубокое и трогательное переживание, открывающее не только страницы истории Армении, но и её непреклонный дух. Стоя перед священными стенами монастыря, глядя на заснеженные вершины Арарата или спускаясь в легендарную яму, невозможно не почувствовать величие истории и силу веры.`,
      am: `Խոր Վիրապ՝ Սուրբ վանքը Արարատի գագաթի ներքո
      Հայաստանի Արտարատի հարթավայրում, լեգենդար Արարատ լեռան շքեղ տեսարանի ներքո, գտնվում է Խոր Վիրապ վանքը՝ երկրի ամենասուրբ և կարևոր պատմական վայրերից մեկը: Այն ոչ միայն վանք է, այլև ազգային ինքնության, հոգևոր ամրության և հավատքի խորհրդանիշ, որը տարեկան հազարավոր ուխտավորների ու ճանապարհորդների է հրավիրում:
      Խոր Վիրապը պատմական մեծ կարևորություն ունի, քանի որ այստեղ Սուրբ Գրիգոր Լուսավորիչը, ով դարձավ Հայաստանի հովանավորը, տասներեք տարի բանտարկված մնաց ստորգետնյա խցում, նախքան հայկական թագավորին քրիստոնեության տանելը: Այս շրջադարձային պահը դարձավ պատճառը, որ Հայաստանը 301 թվականին դարձավ առաջին երկիրը աշխարհում, որ քրիստոնեությունը ընդունեց որպես պետական կրոն: Այսօր այցելուները կարող են իջնել նույն խորանարդաձև խցի մեջ, որտեղ պահվել էր Սուրբ Գրիգորը՝ հզոր ու խորհրդանշական հիշեցում՝ հավատքի ու տոկունության մասին:
      Վանքի համեստ, բայց տպավորիչ ճարտարապետությունը հոգևորության հավերժական զգացողություն է փոխանցում: Կարմիր քարե պատերը, հնագույն մատուռները և խաղաղ բակը ստեղծում են մի մթնոլորտ, որը գերազանցում է ժամանակը: Իսկ վանքի խորքում կանգնած, Արարատ լեռան վեհաշուք ուրվագծի ներքո, այցելուն կարող է զգալ աննկարագրելի ներդաշնակություն՝ պատմության և հավատի միջև:
      Սակայն Խոր Վիրապը միայն կրոնական վայր չէ. այն կամուրջ է անցյալի և ներկայի միջև: Այստեղ արտացոլված է Հայաստանի դարավոր պատմությունը՝ հեթանոսությունից մինչև քրիստոնեություն, միջնադարյան պայքարներից մինչև ազգային ինքնության ձևավորում: Նրա պատերը լուռ վկաներն են դիմակայության և հավատի, որոնք շարունակում են ներշնչել այսօրվա սերունդներին:
      Խոր Վիրապ այցելելը ավելին է, քան պատմական հուշարձան այցելելը. դա ներհոգևոր ճանապարհորդություն է դեպի հայկական ոգու խորքերը: Այն վայրը, որտեղ պատմությունն ու հավատի ուժը միահյուսվում են՝ թողնելով անմոռանալի տպավորություն յուրաքանչյուր այցելուի սրտում:`
    },
    images: [
      'assets/images/khor-virap/khor-virap-1.jpg',
      'assets/images/khor-virap/khor-virap-2.jpg',
      'assets/images/khor-virap/khor-virap-3.jpg',
      'assets/images/khor-virap/khor-virap-4.jpg',
      'assets/images/khor-virap/khor-virap-5.jpg'
    ],
    locationImg: 'assets/images/khor-virap/khor-virap-location.png'
  },
  {
    id: 3,
    name: {
      en: 'Sevan Lake',
      ru: 'Озеро Севан',
      am: 'Սևանա Լիճ'
    },
    description: {
      en: `Lake Sevan: The Pearl of Armenia’s Highlands
      Nestled high in the Armenian mountains at an altitude of 1,900 meters (6,234 feet) above sea level, Lake Sevan is often called the "Pearl of Armenia". As the largest freshwater lake in the Caucasus region, it is not only a natural wonder but also a vital part of Armenia’s history, culture, and identity. Covering an area of approximately 1,242 square kilometers (480 square miles), it is a shimmering blue oasis surrounded by rolling hills, ancient monasteries, and breathtaking landscapes.
      Lake Sevan has been an essential resource for Armenia for centuries, providing fresh water, abundant fish, and a serene escape for locals and travelers alike. The lake’s deep blue waters reflect the vast sky, creating a tranquil yet powerful presence in the heart of the country. Its shores are dotted with charming villages, lush meadows, and historic landmarks, making it one of the most beloved destinations in Armenia.
      One of the lake’s most iconic sites is Sevanavank Monastery, a 9th-century monastic complex perched on a peninsula. Originally built on an island, the monastery now stands on a hilltop due to the water level changes in the 20th century. The ancient stone walls of Sevanavank, set against the endless blue of the lake, create a picture-perfect harmony between nature and history. The monastery’s high vantage point offers spectacular panoramic views of the shimmering waters and distant peaks.
      Beyond its historical and spiritual significance, Lake Sevan is also a beloved recreational destination. In the summer months, visitors flock to its sandy beaches, enjoying swimming, sailing, and fishing. The region is famous for its delicious Sevan trout, known as "Ishkhan" (meaning "prince" in Armenian), a delicacy that has been cherished since ancient times. The lake’s changing colors—from deep blue to turquoise depending on the season and sunlight—make it a mesmerizing sight all year round.
      But Lake Sevan is more than just a scenic retreat; it is deeply woven into the Armenian soul. It has inspired poets, artists, and musicians for generations, symbolizing purity, endurance, and life. Despite environmental challenges in the past century, dedicated conservation efforts continue to restore and protect this vital jewel of Armenia.
      To stand on the shores of Lake Sevan is to experience a timeless connection with nature and heritage. Whether admiring its vast, glassy surface, exploring its ancient monasteries, or tasting the fresh fish from its waters, visitors are left with an unforgettable sense of peace, wonder, and admiration for one of Armenia’s most cherished treasures.`,
      ru: `Озеро Севан: Жемчужина Армянского нагорья
      Расположенное на высоте 1 900 метров над уровнем моря, озеро Севан часто называют «Жемчужиной Армении». Это крупнейшее пресноводное озеро Кавказа, не только природное чудо, но и важная часть истории, культуры и самобытности страны. Занимая площадь около 1 242 квадратных километров, оно представляет собой сверкающий синий оазис, окруженный зелеными холмами, древними монастырями и потрясающими пейзажами.
      На протяжении веков озеро Севан играло ключевую роль в жизни Армении, обеспечивая пресной водой, богатой рыбой и возможностью отдохнуть от повседневных забот. Его глубокие синие воды, отражающие бескрайнее небо, создают атмосферу умиротворения и величия в сердце страны. Берега озера украшены живописными деревнями, цветущими лугами и историческими памятниками, что делает его одним из самых любимых мест в Армении.
      Одним из самых известных памятников Севана является монастырь Севанаванк, основанный в IX веке на полуострове. Первоначально монастырь стоял на острове, но из-за изменения уровня воды в XX веке теперь возвышается на холме. Древние каменные стены Севанаванка на фоне бескрайнего синего озера создают завораживающую картину единства природы и истории. С высоты монастыря открываются великолепные панорамные виды на сверкающую водную гладь и дальние горные вершины.
      Кроме духовного значения, озеро Севан является и популярным местом отдыха. Летом сюда приезжают туристы, чтобы отдохнуть на песчаных пляжах, поплавать, покататься на лодке или заняться рыбалкой. Особенно знаменита севанская форель, известная как «Ишхан» (что означает «князь»), которую ценили еще в древние времена. В зависимости от времени года и освещения озеро меняет цвет—от насыщенно-синего до бирюзового, завораживая своим великолепием.
      Но Севан — это не только природная достопримечательность. Он глубоко вплетен в армянскую культуру, вдохновляя поэтов, художников и музыкантов на протяжении веков. Несмотря на экологические вызовы, стоявшие перед озером в XX веке, сегодня предпринимаются активные меры по его защите и восстановлению.
      Стоя на берегу Севана, ощущаешь неразрывную связь с природой и историей. Независимо от того, любуетесь ли вы его зеркальной гладью, исследуете древние монастыри или пробуете свежую рыбу, это место оставляет в душе незабываемое чувство мира, восхищения и уважения к одному из величайших сокровищ Армении.`,
      am: `Սևանա լիճ՝ Հայկական Լեռնաշխարհի Մարգարիտը
      Հայաստանի սրտում, 1,900 մետր բարձրության վրա ծովի մակարդակից, փռված է Սևանա լիճը՝ Կովկասի ամենամեծ քաղցրահամ լիճը։ Այն իրավամբ կոչվում է «Հայաստանի Մարգարիտ», քանի որ ոչ միայն շլացուցիչ գեղեցկություն ունի, այլև դարեր շարունակ եղել է երկրի պատմության, մշակույթի և ինքնության անբաժանելի մասը։ 1,242 քառակուսի կիլոմետր տարածքով, Սևանը զբաղեցնում է երկրի ջրային պաշարների գերակշիռ մասը՝ դառնալով բնության իսկական գանձ։
      Սևանը Հայաստանի ամենակարևոր բնական հարստություններից մեկն է, որն ապահովել է ջուր, սնունդ և հանգստի վայր ինչպես հնագույն ժամանակներում, այնպես էլ այսօր։ Լճի խոր կապույտ ջրերը, արտացոլելով երկինքը, ստեղծում են աներևակայելի ներդաշնակ և հանգստացնող մթնոլորտ։ Նրա ափերը զարդարված են գեղատեսիլ գյուղերով, ալպիական մարգագետիններով և հինավուրց եկեղեցիներով, որոնք ներդաշնակորեն միահյուսված են շրջակա բնապատկերին։
      Լճի խորհրդանշական վայրերից է Սևանավանք վանական համալիրը, որը կառուցվել է IX դարում։ Նախկինում այն կանգնած էր կղզու վրա, բայց ջրի մակարդակի իջնելու հետևանքով այժմ գտնվում է թերակղզու բարձունքում։ Սևանավանքի հնագույն տուֆե պատերը, որոնցից բացվում են աննկարագրելի տեսարաններ դեպի ծովահայաց կապույտ լիճն ու հեռավոր լեռնաշղթաները, պատմության և բնության կատարյալ միաձուլման օրինակ են։
      Սևանա լիճը ոչ միայն հոգևոր նշանակություն ունի, այլև Հայաստանի ամենահայտնի հանգստի գոտիներից մեկն է։ Ամռանը լճի ափերին կարելի է հանդիպել բազմաթիվ զբոսաշրջիկների, ովքեր վայելում են լողը, նավարկությունը, ձկնորսությունը և պարզապես բնության գրկում գտնվելու հաճույքը։ Լիճը հայտնի է իր սևանյան իշխանը, որը դարեր շարունակ համարվել է հայկական խոհանոցի իսկական համեղ ուտեստներից մեկը։
      Բայց Սևանը միայն գեղեցիկ բնապատկեր չէ։ Այն հանդիսանում է հայ ժողովրդի ազգային հպարտության և դիմադրողականության խորհրդանիշը։ Դարեր շարունակ այն ոգեշնչել է բանաստեղծների, նկարիչների և երաժիշտների, արտացոլելով հայ ժողովրդի կապը բնության և հայրենի հողի հետ։ Չնայած XX դարում լիճը կանգնած է եղել էկոլոգիական մարտահրավերների առաջ, այսօր ձեռնարկվում են բազմաթիվ քայլեր նրա պահպանման և վերականգնման համար։
      Սևանա ափին կանգնելիս զգում ես ժամանակի կանգառը, բնության զարմանալի ուժը և պատմության շունչը։ Անկախ նրանից՝ հետևում ես նրա հայելային մակերևույթին, ուսումնասիրում հինավուրց վանքերը, թե համտեսում ես լճի անմոռանալի համով ձուկը, Սևանը թողնում է անջնջելի տպավորություն յուրաքանչյուր այցելուի սրտում։`
    },
    images: [
      'assets/images/sevan/sevan-1.jpg',
      'assets/images/sevan/sevan-2.jpg',
      'assets/images/sevan/sevan-3.jpg',
      'assets/images/sevan/sevan-4.jpg',
      'assets/images/sevan/sevan-5.jpg'
    ],
    locationImg: 'assets/images/sevan/sevan-location.png'
  }
]
