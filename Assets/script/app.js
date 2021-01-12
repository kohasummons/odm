var now = new Date();
var day = now.getDate() - 3;

let deferredPrompt;
var dayHook = document.getElementById('day');
var dateHook = document.getElementById('selectDate');
var TitleHook = document.getElementById('selectTitle');
var showTitleHook = document.getElementById('selectShowTitle');
var showDateHook = document.getElementById('selectShowDate');
var btnback = document.getElementById('btn-back');
var readbtn = document.getElementById('readbtn');
var contentlist = document.getElementById('content-list');
var verses = document.getElementById('verses');
var textbody = document.getElementById('body');
var textprayers = document.getElementById('prayers');
var character = document.getElementById('character');
var ww = document.getElementById('ww');
var cwg = document.getElementById('cwg');
var header = document.getElementById('bogery');
var showhero = document.getElementById('heroanchor');
var buttonInstall = document.getElementById('install__button');
var setdisplaynone;
var openShowWithData;

function randomImage(target){
    var twizz = Math.ceil(Math.random() * 10);
    target.style.background = `url(Assets/images/${twizz}.jpg) #111`;
    target.style.backgroundSize = 'cover';
    target.style.backgroundPosition = '0 30%';
}
randomImage(header);

// Open show

function openShow() {
    index.classList.add('hide', 'opacity-0');
    var setdisptime = setTimeout(() => {
        showpage.classList.remove('display-none');
        index.classList.add('opacity-0');
    }, 10);

    var sethidetime = setTimeout(() => {
        showpage.classList.remove('hide');
    }, 60);

    var sethideindex = setTimeout(() => {
        index.classList.add('display-none');
    }, 1500);

    randomImage(showhero);
}

//Date Calculator func
var calcdate = (day) => {
    var virdate = day + 3;
    return virdate;
};

//Page var
var index = document.getElementById('index');
var showpage = document.getElementById('showpage');

var data = [
    {
        "title": "GIVING OF THANKS",
        "readings":["Psalm 92",
                    "Psalm 103:1-5",
                    "Psalm 100:2",
                    "Psalm 50:23",
                    "Psalm 67",
                    "Psalm 149",
                    "Psalm 150"],
        "body":"🏴    🏴      🏴",
        "pray":[
          "Prayer of thanksgiving",
          "Father in Jesus Name, I thank you:",
          "For making me a partaker in this year's Operation Daniel.",
          "For my salvation and baptism of the Holy Spirit.",
          "The gifts and the fruits of the Spirit in my life ",
          "All the ways you have intervened in all my affairs in the past years.",
          "Your divine plan for my life and your presence with me all the time",
          "Lifting me up when | fell and keeping me in perfect peace and also making all things to work together for my good",
          "Delivering me from the snare of the fowler and from noisome pestilence. ",
          "Covering me with your feather and making your truth to be my shield and buckler. ",
          "Making your word and the blood of Jesus to answer for me and giving your angels charge over me. ",
          "Fighting for me against my adversaries and making me more than conqueror. ",
          "Supplying all my needs according to your riches on glory and your healing power upon my spirit, soul and body.",
          "Always causing me to triumph in Christ Jesus, turning my curses into blessings and enabling me to dwelling safety.",
          "being on my right hand and causing me never to be moved. ",
          "Leading me and making me able to face tomorrow. ",
          "Not allowing my enemies to rejoice over me and teaching me the secret of my household enemies. ",
          "Delivering my soul from death and my feet from stumbling.",
          "Being my fortress and refuge in times of trouble. ",
          "Your Faithfulness, marvellous deeds your act of power and surpassing greatness, your wondrous work and fathomless love that touches the heavens. ",
          "Lifting me out of the depths and staying my feet on the rock to stand. Giving songs of joy and noise of happiness unto me.",
          "Preserving me and keeping my feet from slipping."
        ],
        "character": "Jesus Christ: He is always thankful to HIS FATHER",
        "wisdom": "When you see God as your Father you will be more appreciative",
        "cwg": "Your Praise Shall Continually Be in my mouth"
    },
    {
        "title": "Be Fruitful GOD'S Mandate",
        "readings":[
          "Genesis 1:26-30",
          "Genesis 2:8-17",
          "Jeremiah 29:11"
        ],
        "body":"And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it:"+
                  "and have dominion over the fish of the sea, and over the fowl of the air, and over every living things that moveth upon the earth. After God created man in his own image,"+
                  "the first command he gave him was “Be fruitful”. To be fruitful does not simply mean to have children. Having children was part of it in God’s opinion but it much more. To be fruitful"+
                  "means to be PRODUCTIVE. It is to PRODUCE. <br /><br />The year 2021 to some, is a new beginning of a productive life. There are seven areas where most of us have been setting goals in the last"+
                  "couple of years. Many of us do not even wait a minute to make assessment of our productivity and progress. It’s always a good idea to cross-check these areas for productivity: Physical,"+
                  "Financial, Spiritual, Mental, Family, Career and Ministry. Are you producing? Be fruitful Be productive. Produce !<br /><br />Fruits or produce includes the following: Humankind (Baby), Fruit of the Spirit,"+
                  "Fruit of our Labour, Fruit of Soul winning, Fruit of answered prayers, Fruit of family cultures, Fruit of Discipline, Fruit of our Praise, Fruit of our Innovation and Creativities.",
        "pray":[
          "Lord, give a baby",
          "Lord, help me to manifest the fruit of the Spirit",
          "Lord, help me to manifest the gifts of the Spirit",
          "Lord, look favorably upon my labour and help me to bring much fruit.",
          "Lord, bless my efforts and give me mind for innovation/creativity.",
          "Pray Genesis 12:2-3",
          "Lord make me a great nation",
          "Lord bless me exceedingly Lord make my name great Lord bless those who bless me Lord curse those who curse me",
          "Lord bless people of the earth through me."
        ],
        "character": "Abraham",
        "wisdom": "Fruitfulness was the target, so Abraham believed against hope",
        "cwg": "I will keep on looking to you to you to be fruitful/productive in all of my life."
    },
    {
        "title": "IF GOD SAYS IT, THAT SETTLES IT",
        "readings":[
          "Psalm 119:89",
          "Titus 1:2",
          "Deut. 4:31",
          "Heb6.8",
          "John 4:24",
          "Job 36:5",
          "James 1:13",
          "John 14:6",
        ],
        "body":"Many of us have erroneous believe and impression about God. <br /><br />We use our limited knowledge of people to judge God. God is divine. People are human. <br /><br />There is a big gap between a Deity (Divine) and Humanity. what is common to man is not with God, Number 23:190 says God cannot lie, 1 Samuel 15:29 says God will not repent, Malachi 3:6 says God will not change, Hosea 11:9 says God will not destroy. <br /><br />Therefore, if God says a thing, it is forever    settled. Psalm 119 verse 89 says God's word in forever settled in heaven come rain, come shine!. Never again look at God will the eye of human beings you have net before, He's different, He's divine, The Bible and His word, Apply them And stay stable.<br /><br /> The Bible says fear not 365 times Love 310 times in KJV 348 (NAS) 551 (NIV) and 538 (NRSV). It also say peace 420 times. Believe them Believe God’s word, Claim it.",
        "pray":[
          "Psalm 23",
          "Psalm 914",
          "Psalm 103",
          "Isaiah 54",
          "Eph. 1:16-23",
          "Eph. 3:14-20",
          "Col. 1:9-14",
          "Thess. 5:23",
          "Mark 16:15-20"
        ],
        "character": "Jeremiah",
        "wisdom": "Jeremiah 1:5, The Lord knew, chose, consecrated and appointed you as a prophet to the nation. that was the thought he has towards you to be fruitful.",
        "cwg": "I will continue to believe your word, Lord."
    },
    {
        "title": "GOD, THE GARDENER",
        "readings":[
          "Genesis 2:8",
          "John 15:1",
          "Genesis 2:8-25",
          "John 15:4-17"
        ],
        "body": "Everything in our world was God's idea. He created all things for his pleasure. You and myself are God’s and He has plans toward. God planted you where you are presently. <br />Your name, positions, opportunities, strength, friendship and involvements were God's plan to make your life worthwhile and work-living. Whenever things go wrong, " +
        "He expects you to get back to him. However, one of his biggest job is being the Gardener of the world you are planted. He knows and understands your reasons. He knows you need rain for watering. You need the sun to shine. You need good condition to produce and be fruitful and so, He will never leave or forsake you (Heb 13:5).<br /><br />God, being the Gardener, knows all our needs. He has put people in place to help us on our journey of life. He knows our weakness, so He puts people in place to strengthen us. He puts your Pastors and Leaders in place to help mentor you on your journey. Above all, He gave us the Holy Spirit to standby us, stand with us and be in us all the time, all the way and everywhere.",
        "pray":[
          "Lord, water me again and again",
          "Lord, cause your face to shine on me",
          "Lord, culture me Lord, send me helper",
          "Lord, send intercessors into my life Lord, send me defenders"
        ],
        "character": " Disciple",
        "wisdom": "Jeremiah 1:5, Peter said “Lord, to whom shall we go? You have the words of eternal life.",
        "cwg": "Lord, I will remain in your  garden for you to cultivate me."
    },
    {
        "title": "THE SEED IS IN ME",
        "readings":[
          'Genesis 1:20 - 31',
          'Matthew 13: 1 - 21',
          'Philip 4 : 13'
        ],
        "body":"Everything God created was on purpose and full of seeds for the same kind. Mango has seed to produce more Mangoes, Orange has seed in them to produce many more oranges. However, for Humans, the definition of seeds seem different a little bit. What then is a seed?. Aseed is anything in you that can bless another person. They maybe gifting, capacities, capabilities, wisdom, money and etc. Just anything that can be released to bless another person. Seeds can also be seen as anything that can"+ "constitute a solution to a problem in another person’s life. It could also be an answer to the questions in the heart or life of another person."+
        "<p>I'm super-excited to let you know that many of them are in you. The seeds, Solutions or Answers are all in you. They have always been there waiting for you to “Plant” them. The seed is in you.</p>",
        "pray":[
          "Lord, help me Cultivate the following seeds:",
          "Eager spirit to act on your word",
          "To furiously resist the enemy",
          "Praying fervently",
          " Acting promptly",
          "Violet aggression in snatching Me from the kingdom of Satan ",
          "Down to-earth hatred for evil"
        ],
        "character": " Daniel",
        "wisdom": " Daniel 1:17, God gave them knowledge skills in ail kind of Iiterature and wisdom",
        "cwg": "I will nurture your gifts in my life, Lord."
    },
    {
        "title": "THE LAND IS GOOD",
        "readings":[
          "Psalm 1:3",
          "Jeremiah 17:8",
          "Psalm 1:1-5",
          "Jeremiah 1:1-10"
        ],
        "body":"Good land usually support good crops and trees which eventually yield abundant harvest.<br />"+
                "<br />Tree planted in good soil send out their roots by the stream. It does not fear when heat comes, its leaves are always green, they yield fruit in season and do well all year round. Water is essential to all life and living. It helps the plant access the nourishment in the good land. The sun shine also provide the biological requirement to produce abundant food. Therefore, a good land is determined by its location availability of water to it and sunshine on it. It’s also evident by the presence"+ "of big flourishing trees/plant bearing lots of  ‘fruits. Your life is a rich land, cultivate it so that it bears lots of fruits. People are waiting to eat, drink and refresh in the land of your life. This is key point.<br />",
        "pray":[
          "Lord, plant me by rivers of water",
          "Lord, let the sun-shine of your glory be focused on me",
          "Father, remove all drought from my life Lord, let me blossom and flourish",
          "Lord, help me to still bring our fruit now and in old age",
          "Father, let my life yield her increase to bless my generation.", "Father, let my life make your way known on the earth and thy saving health among all nations. (Psalm 67:2,6)",
        ],
        "character": "Paul",
        "wisdom": "Gal 1:15, I did not confer with flesh and blood.",
        "cwg": "I will maintain the land of my life, fertile and producing."
    },
    {
        "title": "PLANTING: THE SEED MEETS THE LAND",
        "readings":[
          "Genesis 26:12",
          "Genesis 26:1-14",
          "Matthew 13:18-23"
        ],
        "body":"<strong>“Then Isaac sowed in that land”</strong><br /> A.Seeds are very precious and good. They contain basic materials waiting for expression. Seed may remain the same forever if left unplanted."+
        "All the good expressions that they contain will remain potential. Therefore, seeds must meet the land. They must be planted. No matter how great the potential of a seed is, it remains unrealized "+
        "if not planted in a good ground. Planting then helps the seed to meet the good land.",
        "pray":[
          "Father, lead me to the good land",
          "Father, help me to plant my seeds",
        ],
        "character": "Isaac",
        "wisdom": "“...waxed great, and went forward, and grew until he became very great” Gen 26:13",
        "cwg": "I will keep planting my seeds."
    },
    {
        "title": "WATERING: THE RAIN",
        "readings":[
          "Joel 2:23",
          "Hosea 6:3",
          "Joel 2:1-27",
          "Psalm 126:1-6"
        ],
        "body":"When the seed meets the good ground, the miracle of multiplication has initiated. There is an important step that must follow; that is the watering of the ground. This can happen either naturally as both early and latter rain or artificially through irrigation. There is a measure of watering that is always required. Less will mean inadequate watering,"+
        "much could mean flooding and neither of them is good for abundant fruitfulness. For the believer, the word of God is the usual  watering our" + "lives need. Ephesians 5:26 say to satisfy and cleanse with the washing of water by the word. That is when the life can produce abundant of fruit.",
        "pray":[
          "Lord, pour out your rain upon me and the works of your hand. ",
          "Lord, breathe upon me and all mine"
        ],
        "character": "The Sower",
        "wisdom": "I heard the side sower saying: I need more than my good seed. I need the good ground and abundance of rain for a great harvest.",
        "cwg": "Lord, I will not waste your investment on my life"
    },
    {
        "title": "THE SHINE",
        "readings":[
          "Genesis 1:16",
          "Psalm 136:6-9",
          "Proverbs 4:18"
        ],
        "body":"In biology. we were told that photosynthesis leads to the production of food both for the plant itself and a reserve for the harvest. "+
              "However, it was emphasized that sun shine is a critical requirement for effective photosynthesis Therefore, the sun or the shine is directly associated with fruitfulness when God's light shines on us, we reflect on His light The more we absorb His light (Shine) the more we shine to our world Proverbs 4:18 becomes a reality in our lives The following help us to achieve this level of shining more and more"+
              "The <strong>RSMMD</strong> Formula: <br />R - Read God's word<br />S - Study God's word<br />M - Meditate on God's word<br />M - Memorize God's word<br />D - Do God's word<br />"+
              "<br />Then your path will be that of the just, a shining light that shines more and more unto the perfect day Proverbs 4:18",
        "pray":[
          "Lord open me up to the light of your word",
          "Lord give me deep understanding of your word Lord let my life shine as light to all people that see me",
        ],
        "character": "Job",
        "wisdom": "Job 3:30, To bring back his soul from the pit, to be enlightened with the light of the living.",
        "cwg": "I will always put my life in the light of God's word"
    },
    {
        "title": "WEEDING",
        "readings":[
          "John 15:1-27 ",
          "Prov. 29:15 ",
          "2 TIM 3:16"
        ],
        "body":"The unwanted plants that grow in between crops are called weeds. Weeding is the process of removing such unwanted plants on a piece of land. Weeds are nuisance and compete with real crops for space, nutrients, water and sunshine. "+
                "When weeds are removed, crops have more space, more nutrients and water for growths and fruitfulness. The amount of sun shine also increase on our farm. We noticed that all the corns and plants under the big Cashew tree did not do well. Right now, it looked as if we didn’t plant anything there. "+
                "whereas, the space was planted like any other part of the farm. The Cashew tree took must of the sun shine and denied the crops from doing well. Weeding will always help the crop. The major challenge of weed on the farm is reduction in harvest, poor fruitfulness or lack of fruitfulness. "+
                "Therefore, weeding helps remove the competitors for nutrients, water, space and sunshine and therefore resulting in plenty of harvest (Fruitfulness)."+
                "In the Christian life, weeding involve disciplining, corrections, reprimands, teaching and punishment.",
        "pray":[
          "Lord, open my eyes to see your direction", "Lord, open my ears to hear your instruction.",
          "Lord, Purge me that i may bring forth much fruit",
          "Lord, send men and women to my life to help me be more fruitful",
          "Lord, give me innovative mind for productivity help me stay under authority"
        ],
        "character": "🦄",
        "wisdom": "🧠",
        "cwg": "Lord, I will abide in you whatever it costs me"
    },
    {
        "title": "GUIDE Against Pests",
        "readings":[
          "Gal 5:22, 23",
          "Prov. 11:10",
          "Dan 12:3",
          "Jeremiah 2:18",
          "1 Samuel 2:1-10",
          "Prov. 18:18, 22:6",
          "Psalm 33:1",
          "Psalm 147: 1",
          "Psalm 22:3",
          "John 6:12",
          "Acts 16:25-27"
        ],
        "body":"Pests are feeders that attacks or damages plants and reduces their fruitfulness A pest is any animal or plant which has a harmful effect on humans their food and their conditions." +
                "For the believers, anything that has harmful effect on your Christian live affect your passion for God Christ and the Church of Christ is a pest Anything that reduces your commitment to the Christian faith a pest or diverts your attention away from pleasing the Lord or carrying out his biddings like preaching His Gospel is a Pest. " +
                "They must be destroyed because they are set to reduce your fruitfulness. Take a quick check on the fruits you are supposed to be producing:" +
                "<br />- Fruit of the Spirit (Gal 5:22-23)<br />- Fruit of Soul winning (Prov. 11:30 and Daniel 12:3)<br />- Fruit of Answered prayer<br />- Fruit of Family Culture<br />- Fruit of Discipleship<br />- Fruit of our Labour<br />- Fruit of our Praise<br />",
        "pray":["Rise up and pray against everything that will attack you and reduce your faithfulness."],
        "character": "Paul",
        "wisdom": " And he shook off the beast into the fire, and felt no harm. Shake every past into the fire. Acts 28:5",
        "cwg": "I will not tolerate any past in my life anymore."
    },
    {
        "title": "TRIMMING AND MOULDING",
        "readings":[
          "Matthew 13:24-30 ",
          "Philemon 1:10-19",
        ],
        "body":"Trimming is to remove unwanted part from something, cutting off small pieces from something is called trimming. It can be clothing or plants. There are some plants when you want it to reach great height or attain good rooting you trim them. Trimming allows you to maintain clean trunk, reduce over-growth and burden of extracting lots of nutrients from the main plant. The plant then has access to more nutrients, water and sunshine. Again, this has great potential to improve"+ "all need arrangement. Not"+ "just arrangement, we must arrange for strength. If a relationship is not strengthening your Jove for God, His people and the Gospel, cut it off. “Trim off’. Review your whole life and determine all that require a trimming!",
        "pray":[
          "Father, help me to plan my line",
          "Father, help me to organize my friendship",
          "Father, give me wisdom to organize my resources",
          "Father, give me wisdom to manage my time",
          "Father, help me to manage my positions",
          "Father, give me wisdom to organize my family", "Father, give me strength to utilize my opportunities",
          "Father, send people to help trim several areas of my life for me.",
        ],
        "character": "Onesimus",
        "wisdom": "Philemon 1:11, Which in times past was to thee unprofitable but now profitable to thee and to me",
        "cwg": "I will keep on trimming myself for a higher calling in Christ Jesus"
    },
    {
        "title": "WATCH THE PLANTATION GROW",
        "readings":["Exodus 14:1-31","Exodus 14:13,14","2 Chronicles 20:1-37"],
        "body":"When a farmer has done all he needed to do, s/he should just wait and watch his plantation grow Watch and mature, watch it ready for harvest. Though there may still be natural forces that may influence the volume of yield or fruitfulness but they are mostly out of his control. That was the emphatic instruction given to us “Watch and pray To which means to do all you can do humanly speaking. Then pray to the father in the name of Jesus particularly for all that are beyond human control"+
        "<br /><br />As believers do all you can do to fulfil God's mandate for you stretch out your faith sharpen your leading edge improve fellowship with others etc. Then watch God work through, within with and by you Moses after doing all God told him to do in Exodus 14:13-14 said to the people: 'Fear not stand still and see the salvation of the lord... The Lord will fight for you and ye shall hold your peace.' At this stage as believers just wait and left God's incubation period be over so that you"+ "can enter into harvest time",
        "pray":[
          "Lord give me rest on all sides", "Lord give me peace in all ways",
          "Lord, secure me everywhere", "Lord lighten my park all times",
          "Lord, fight all my battles", "Lord, send me mentors un all areas",
          "Lord, let my life bring you glory all the time in Jesus Mighty"
        ],
        "character": "Moses",
        "wisdom": "Stand still and see the Salvation of God.",
        "cwg": "I will do all i can and watch you win my battles"
    },
    {
        "title": "IT's HARVEST TIME",
        "readings":[
          "Genesis 8:22",
          "Matthew 13:23"
        ],
        "body":"Time of harvest is the conclusion of field work for a farmer. It is usually a time of great joy because one sees the conclusion of the planting process. It's evidence of God's faithfulness, and reassurance of great future became food and foods are available and seeds are a So available for next planting season It is also a time for hard work Harvest is a hard job when done effectively Classes of harvest includes Spiritual, financial, Emotional, Physical, Academic while types of  harvest can include Soul winning, Answered prayers, harvest of the labour of our hands, harvest of answered prayer, and harvest of favour. <br />There are three types of harvest: <strong>Harvest of Other Peoples Labour (OPL), Harvest of Other People Prayers (OPP) and Harvest of Other People Money (OPM)</strong> When the field is mature then harvest comes on line",
        "pray":[
          "Lord, bless the labour of my hand",
          "Lord grant me favour before you and all men"
        ],
        "character": "Joseph",
        "wisdom": "...The Lord blessed the egyptian's house for Joseph's sake. Genesis 39:5",
        "cwg": "I will prepare for all harvest everyday"
    },
    {
        "title": "Keep the Harvest SAFE",
        "readings":["Luke 12: 16-21"],
        "body":"After a successful harvest, another responsibility: Which the farmer has to contend with The safety of the crop or produce and the threats of the thieves. There are some seven ways to handle our harvest when ft comes to storage of produce. <br />1. Wasted harvest <br />2.Expended harvest <br />3. No interest yielding storage (keep at home) <br />4. Low interest yielding storage (Keep in savings in Banks)"+
        "<br />5. High interest yielding storage (Fixed deposits or Business investment) <br />6. Life investment storage (Invest in people) <br />7. Uncommonly high yield storage (Store up in heaven)<br /><br />Our passage examines life of a farmer with heavy harvest. He was not called a fool because he was a farmer, or being hardworking or being good at bringing in the harvest."+
        "He was Called a fool because he left God out of his life. He planned his life all by himself. When it comes to storage, he focused on himself (See verse 18). The word '!' appeared three times and not once was God mentioned. He didn't acknowledge that God was in-charge. He lost his very life itself, Believers must always recognize God in spite of their abilities, intelligence and connections. Give God all the Glory.",
        "pray":[
          "Lord, help me never to waste my harvest",
          "Lord, help me correctly save my harvest",
          "Lord, give me understanding of heavenly storage or investment.",
          "Lord, deliver me my harvest from all enemies of harvest and thieves."
        ],
        "character": "The Rich Fool",
        "wisdom": "Involve God in all your efforts",
        "cwg": "I will always involve God in all that concerns me"
    },
    {
        "title": "TREASURES IN HEAVEN",
        "readings":[
          "Matthew 6:19-21 ",
          "King 4:6-10 ",
          "Genesis 16:1-10"
        ],
        "body":"The best Investment anyone can make is to store up in heaven. it le an uncommonly high yielding storage, Why? Because, the Bible says in Verse 20 that heaven, Moth Or rust Cannot Corrupt and thieves do not break through to steal. In heaven, there is no loss of any kind, so it is reliable play to store our treasure. How exactly do we store up our treasures in heaven? <br />"
                + "1. Pay your tithes <br />2. Cheerfully give good offerings<br />3. Support evangelistic activities<br />4. Support projects that build God's kingdom<br />5. Give to the poor and needy people <br />6. Provide for members of your household<br />7. Honour and give to your parents<br />",
        "pray":[
          "Pray Ephesians 1:17-23 ",
          "Pray Ephesians 3:14-24",
          "Pray Malachi 3:10-12 ",
          "Pray Job 29"
        ],
        "character": "David",
        "wisdom": "1 Chro 21:24, He Will not give to God what costs nothing",
        "cwg": "I shall keep my treasures in heaven"
    },
    {
        "title": "He That Gives to the Poor",
        "readings":[
          "Romans 12:13",
          "Heb. 13:16",
          "Luke 3:10-11",
          "Eph. 4:27-28",
          "Mat. 5:42",
          "Proverbs 22 : 9",
          "Luke 6:38",
          "Psalm 4:1-3"
        ],
        "body":"The poor are the base of the society. They lack respect and honour. They hold no future threat to the rich. So, when anyone shows them any act of kindness, its considered as a loan to the Lord. He that gives to the poor has given God a credit facility and God will pay. God who is rich in all dimension is able to payback. You supply the needs of the saints."+
        "Share what you have. If you have 2 coats, share with someone with none. Give generously to others in need. Give to everyone who asks you. Share your bread with those who have none, Give and it shall be given to you. ",
        "pray":[
          "Lord, Open my eye to the poor and needy around me",
          "Lord, Let me know which family to assist",
          "Lord, Show me which church or Ministry to bless",
        ],
        "character": "Boaz",
        "wisdom": "Ruth 2:8-9, Boaz told Ruth, don't go to any other place, stay here. Reap, go to no other place, drink and no one will touch you.",
        "cwg": "I will continue to give to the Poor"
    },
    {
        "title": "DON'T EAT ALL YOUR HARVEST, KEEP SEEDS FOR THE NEXT PLANTING SEASON",
        "readings":[
          "Eccl 3:2",
          "2 Cor 9:10",
          "Mark 4:8, 31",
          "Matthew 13:25",
          "1 Peter 1:23",
          "Zechariah 8:12",
          "Gen 1:29"
        ],
        "body":"Your seed qualify your next planting season. Your seed is future. Your business seeds is the assurance that you have business tomorrow. Where are no seeds, there is no future. Whether a forest, a plantation or an orchard or garden, all are inside the seed. At harvest, you are to preserve part as seed for the next planting season. There is that temptation to eat everything from the harvest, but never yield! When you spend your income from a contract, you have killed your business, when you eat everything from your harvest, you have killed your future. Never yield to that temptation. Always leave enough seeds for the next planting season. <br /><br />Don't forget that your harvest for the next season is determined by the amount of the seeds you have. So, determine what your next harvest should be now, and reserve enough seeds to help you meet that target.",
        "pray":[
          "Lord, help me in selection of my seeds",
          "Lord, help me in determining the quantity of my seed",
          "Lord, show me where to go for planting",
          "Lord, strengthen me to plant my seed",
          "Lord, help me to culture and care for my planted seeds",
          "Lord, i need different seeds for different needs in my life"
        ],
        "character": "Isaac",
        "wisdom": "Genesis 26:12, Then isaac sowed in that land, and received in the same year an hundred fold and the lord blessed him",
        "cwg": "I will keep sowing my seeds"
    },
    {
        "title": "SAVE PART OF YOUR INCOME FROM THE HARVEST",
        "readings":["Proverbs 21:20",
                    "Proverbs 6:6 - 11 ",
                    "Proverbs 21:5 ",
                    "Genesis 41:1 - 57"
                  ],
        "body":"A good personal culture for a believer is not only to pay tithe, give offerings, support church project, it is equally good and important to have a saving. Savings account may not be really bug but good. When “little” accumulate over a long period of time, it becomes very significant. You try this and see for yourself; leave your tap partially closed such that drops of water still comes out of it into a bucket. "+
        "Allow 2-3 hours to pass and go to see how much water would already accumulate in your bucket. It’s simple, little of a time becomes really Significant.. Therefore, I challenge you to set small aside as your saving each month or week and you'll see the result."+
        "<br /><br /><br />Lets do a little calculation; If you save N100 each week, there are 52 weeks in a year. At the end of the year, you have 52 X 100 = 5200. Make your saving N1000, you will have 52,000. Then try 810,000, that will give you N520,000 at the end of the saving year. The principles of saving you should understand here is that “Little over time is significant.",
        "pray":[
          "Lord, teach me to save money",
          "Lord, teach me to save my energy",
          "Lord, teach me wise spending",
          "Lord, teach me to a path of abundance"
        ],
        "character": "Joseph",
        "wisdom": "Genesis 41:33-36, And Let them Gather all the food of these good year...and let them keep food in the cities... for store(Vs 35, 36)",
        "cwg": "I shall cultivate a saving habit"
    },
    {
        "title": "GOD HAS PLEASURE IN MY PROSPERITY",
        "readings":[
          "Psalm 25:13",
          "Psalm 35:27",
          "Psalm 67:1 - 7"
        ],
        "body":"God commanded you to be fruitful. You have the potential to be fruitful. You only need to be willing to be fruitful. One attribute of prosperity that God gives is to let it run in linage Your seed or children too will be prosperous and many generation to follow. God truly have Gemini for interest and pleasure in your prosperity. This prosperity cannot be caged by pestilence and pandemic like Covid-19. Nor even Satan, no one can stop God love for you. As we close this year Operation Daniel's"+ "activities, let me remind you of the principles of bringing in your harvest, that will lead to prosperity.<br /><br />"+
        "<strong>Principle #1</strong>: Sow seed for your harvest, Galatians 6:7<br /><strong>Principle #2</strong>: Get aggressive about reaping your harvest, Matthew 11:12<br /><strong>Principle #3</strong>: Don't give up on your seed, Galatian 6:9<br />"+
        "<strong>Principle #4</strong>: Keep the weeds out of the crops, Gen 2:15<br /><strong>Principle #5</strong>: Give part of your harvest to the poor and needy<br /><strong>Principle #6</strong>: Put in the sickle for your harvest, Mark 4:29<br /><strong>Principle #7</strong>: Command your harvest to come, James 5:4<br /><strong>Principle #8</strong>: Safely Keep your harvest<br /><strong>Principle #9</strong>: Give part of your harvest to the" + "poor and needy<br /><strong>Principle #10</strong>: Reserve portion for the next planting season <br /><strong>rinciple #11</strong>: Save part of the income from your harvest for the future<br />",
        "pray":["Psalm 67:1-7"],
        "character": "David, the Psalmist",
        "wisdom": "Psalm 67:6, Then shall the earth yield her increase and God even our own God, shall bless us.",
        "cwg": "I will Keep praising you Lord all the days of my life"
    },
    {
        "title": "Jubilee Night 🍗",
        "readings":["🍟", "🍤"],
        "body":"Jubilee Night released",
        "pray":["🥂"],
        "character": "🥳🥳🥳🥳🥳",
        "wisdom": "🥳🥳🥳🥳🥳",
        "cwg": "🥳"
    }
]

var dateshow = calcdate(day);
var dayval = day - 1;

// Set Header to initial data
dayHook.innerHTML = day;
dateHook.innerHTML = now.getDate();
TitleHook.innerHTML = data[dayval].title;

//button Listener
btnback.addEventListener('click', () =>{
    // index.classList.remove('opacity-0');
    showpage.classList.add('hide');
    setdisplaynone = setInterval(() => {
        showpage.classList.add('display-none');
    },800);

    setTimeout(() => {
        clearInterval(setdisplaynone);
    }, 850);

    index.classList.remove('display-none');

    setTimeout(() => {
        index.classList.remove('opacity-0');
    }, 100);
    // btnback.classList.add('hide')
});



readbtn.addEventListener('click', () =>{
    openShowWithData(dayval);
    openShow();
});


function loadContentItem(){
    for(var i = 0; i < data.length; i++){
        var item="";
        item +=`<li value="${i}" onclick="openShowWithData(this.value)"><div class="wrap-group"><p class="item-title">${i+1}. ${data[i].title}</p><p class="sub-date">${i+4} of January, 2021</p></div><p class="caret"></p></li>`;
        contentlist.insertAdjacentHTML('beforeend', item);
    }
}
loadContentItem();

function openShowWithData(value) {
    showTitleHook.innerHTML = data[value].title;
    showDateHook.innerHTML = value + 4;
    var booksofthebible = '';
    var prayer = '';
    var valtext = '';
    valtext += `<p class="text">${data[value].body}</p>`;
    textbody.innerHTML = valtext;

    for(var i = 0; i < data[value].readings.length; i++){
        booksofthebible += `<li>${data[value].readings[i]}</li>`;
    }

    for(var x = 0; x < data[value].pray.length; x++){
        prayer += `<li>${data[value].pray[x]}</li>`;
    }

    verses.innerHTML = booksofthebible;
    textprayers.innerHTML = prayer;
    character.innerHTML = data[value].character;
    ww.innerHTML = `<h3 class="faded-section-title no-padding">Wisdom waves</h3><p class="text" id="ww-text">${data[value].wisdom}</p>`;
    cwg.innerHTML = `<h3 class="faded-section-title no-padding" style="font-size: 1.5em;">Covenant With God</h3><p class="text" id="cwg-text">${data[value].cwg}</p>`;

    openShow();
}







////////////PWA part

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

buttonInstall.addEventListener('click', (e) => {
  deferredPrompt.prompt();

  deferredPrompt.userChoice.then((choiceResult) => {
    if(choiceResult.outcome === 'accepted'){
      console.log('User accepted the install')
    }else {
      console.log('Install Dismissed');
    }
  })
});

window.addEventListener('appinstalled', (e) => {
  alert('INSTALLED SUCCESSFULLY: ODM \n APP CAN NOW BE LAUCHED FROM YOUR HOMESCREEN...')
});
