// ============================================================
//  DATA
// ============================================================
const API_URL = "https://project-fextnexus.onrender.com";
const COLLEGES = [
  { id:'dtu',      name:'Delhi Technological University',         short:'DTU',   type:'state', typeName:'State Univ.', location:'Rohini, Delhi',       color:'#6c63ff', glow:'rgba(108,99,255,0.12)',  fests:14, sponsors:85,  years:5, established:1941, students:'10,000+', fesTypes:['cultural','tech','sports'] },
  { id:'nsut',     name:'Netaji Subhas University of Technology', short:'NSUT',  type:'state', typeName:'State Univ.', location:'Dwarka, Delhi',        color:'#ff6584', glow:'rgba(255,101,132,0.12)', fests:10, sponsors:62,  years:4, established:1983, students:'7,500+',  fesTypes:['cultural','tech','sports'] },
  { id:'iitd',     name:'IIT Delhi',                              short:'IITD',  type:'iit',   typeName:'IIT',         location:'Hauz Khas, Delhi',      color:'#43e8c0', glow:'rgba(67,232,192,0.12)',  fests:18, sponsors:130, years:5, established:1961, students:'8,500+',  fesTypes:['cultural','tech','sports'] },
  { id:'iiitd',    name:'IIIT Delhi',                             short:'IIITD', type:'iiit',  typeName:'IIIT',         location:'Okhla, Delhi',          color:'#ffb74d', glow:'rgba(255,183,77,0.12)',  fests:8,  sponsors:44,  years:4, established:2008, students:'3,000+',  fesTypes:['cultural','tech'] },
  { id:'srcc',     name:'Shri Ram College of Commerce',           short:'SRCC',  type:'du',    typeName:'DU College',  location:'North Campus, Delhi',   color:'#ff6584', glow:'rgba(255,101,132,0.12)', fests:6,  sponsors:48,  years:5, established:1926, students:'2,500+',  fesTypes:['cultural','other'] },
  { id:'stephens', name:"St. Stephen's College",                  short:'STC',   type:'du',    typeName:'DU College',  location:'North Campus, Delhi',   color:'#64dc64', glow:'rgba(100,220,100,0.12)', fests:5,  sponsors:32,  years:4, established:1881, students:'2,000+',  fesTypes:['cultural','sports'] },
  { id:'iitb',     name:'IIT Bombay',                             short:'IITB',  type:'iit',   typeName:'IIT',         location:'Powai, Mumbai',          color:'#43e8c0', glow:'rgba(67,232,192,0.12)',  fests:20, sponsors:160, years:5, established:1958, students:'11,000+', fesTypes:['cultural','tech','sports'] },
  { id:'iitk',     name:'IIT Kanpur',                             short:'IITK',  type:'iit',   typeName:'IIT',         location:'Kanpur, UP',             color:'#43e8c0', glow:'rgba(67,232,192,0.12)',  fests:16, sponsors:110, years:5, established:1959, students:'9,000+',  fesTypes:['cultural','tech','sports'] },
  { id:'lsr',      name:'Lady Shri Ram College',                  short:'LSR',   type:'du',    typeName:'DU College',  location:'Lajpat Nagar, Delhi',   color:'#ff6584', glow:'rgba(255,101,132,0.12)', fests:7,  sponsors:40,  years:4, established:1956, students:'2,800+',  fesTypes:['cultural','sports'] },
]

const FEST_DATA = {

  // ── DTU ──────────────────────────────────────────────────────
  dtu: {
    cultural: [{
      id: 'engifest', name: 'Engifest', tagline: "DTU's flagship cultural & technical fest",
      icon: '🎭', iconBg: 'rgba(108,99,255,0.15)', footfall: '50,000+', sponsors_count: '100+',
      years: {
        // ── 2025 — real data from Instagram research ──
        2025: [
          { name: 'Paree',                   tier: 'title',     category: 'Feminine Hygiene' },
          { name: 'OnePlus',                 tier: 'gold',      category: 'Consumer Electronics' },
          { name: 'Nestle',                  tier: 'gold',      category: 'FMCG' },
          { name: 'Denver',                  tier: 'silver',    category: 'Personal Care' },
          { name: 'Real Fruit Power',        tier: 'silver',    category: 'Beverages' },
          { name: 'JioSaavn',                tier: 'silver',    category: 'Music Streaming' },
          { name: 'WinZo',                   tier: 'silver',    category: 'Gaming' },
          { name: 'Alpino',                  tier: 'silver',    category: 'Health & Nutrition' },
          { name: 'MuscleBlaze',             tier: 'silver',    category: 'Sports Nutrition' },
          { name: 'Plum',                    tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Instax',                  tier: 'silver',    category: 'Photography' },
          { name: 'Archies',                 tier: 'bronze',    category: 'Gifts & Stationery' },
          { name: 'Tic Tac',                 tier: 'bronze',    category: 'Confectionery' },
          { name: 'Ottogi India',            tier: 'bronze',    category: 'Food & Beverages' },
          { name: 'Delhi Tourism',           tier: 'bronze',    category: 'Tourism' },
          { name: 'Smaash',                  tier: 'bronze',    category: 'Entertainment' },
          { name: 'StockGro',                tier: 'partner',   category: 'Stock Market Education' },
          { name: 'AbhiBus',                 tier: 'partner',   category: 'Travel & Bus Booking' },
          { name: 'Red FM 93.5',             tier: 'partner',   category: 'Radio' },
          { name: 'Times Prime',             tier: 'partner',   category: 'Subscription Services' },
          { name: 'Amar Ujala',              tier: 'partner',   category: 'Print Media' },
          { name: 'Punjab Kesari',           tier: 'partner',   category: 'Print Media' },
          { name: 'Prabhat Khabar',          tier: 'partner',   category: 'Print Media' },
          { name: 'M2K Cinemas',             tier: 'partner',   category: 'Entertainment' },
          { name: 'G3S Cinemas',             tier: 'partner',   category: 'Entertainment' },
          { name: 'MovieTime',               tier: 'partner',   category: 'Entertainment' },
          { name: 'Global Connect',          tier: 'associate', category: 'Telecom' },
          { name: 'Detalytics',              tier: 'associate', category: 'Data Analytics' },
          { name: 'Google Gemini',           tier: 'associate', category: 'AI & Technology' },
          { name: 'Hilary Rhoda',            tier: 'associate', category: 'Fashion' },
          { name: 'French Essence',          tier: 'associate', category: 'Perfumes & Fragrances' },
          { name: 'Hashtag Eyewear',         tier: 'associate', category: 'Eyewear' },
          { name: 'Tattoo Tatva',            tier: 'associate', category: 'Tattoo Studio' },
          { name: 'Ningen',                  tier: 'associate', category: 'Skincare' },
          { name: 'Good Seoul',              tier: 'associate', category: 'Korean Food & Lifestyle' },
          { name: 'Dopamine Store',          tier: 'associate', category: 'Lifestyle & Fashion' },
          { name: 'Chic Avenue',             tier: 'associate', category: 'Fashion' },
          { name: '1.5 Degree',              tier: 'associate', category: 'Sustainable Fashion' },
          { name: 'Yocto',                   tier: 'associate', category: 'Technology' },
          { name: 'HX London',               tier: 'associate', category: 'Fashion' },
          { name: 'Ocean',                   tier: 'associate', category: 'Beverages' },
          { name: 'Damak',                   tier: 'associate', category: 'Food & Beverages' },
          { name: 'Qoneqt',                  tier: 'associate', category: 'Social Networking' },
          { name: 'Airattix',                tier: 'associate', category: 'Travel' },
          { name: 'Fore School of Management', tier: 'associate', category: 'Education' },
          { name: 'ARU',                     tier: 'associate', category: 'Education' },
          { name: 'Khabar Fast',             tier: 'associate', category: 'Digital Media' },
          { name: 'DS Group',                tier: 'associate', category: 'FMCG' },
          { name: 'Ace Media',               tier: 'associate', category: 'Media' },
          { name: 'Team BSR',                tier: 'associate', category: 'Sports' },
        ],
        // ── 2024 — real data from Instagram research ──
        2024: [
          { name: 'Philips India',           tier: 'title',     category: 'Consumer Electronics' },
          { name: 'Delhi Capitals',          tier: 'gold',      category: 'Sports (IPL Team)' },
          { name: 'Instax',                  tier: 'gold',      category: 'Photography' },
          { name: 'Castrol',                 tier: 'gold',      category: 'Lubricants & Automotive' },
          { name: 'Too Yumm',                tier: 'silver',    category: 'Snacks & FMCG' },
          { name: 'French Essence',          tier: 'silver',    category: 'Perfumes & Fragrances' },
          { name: 'Tattoo Tatva',            tier: 'silver',    category: 'Tattoo Studio' },
          { name: 'Sparx',                   tier: 'silver',    category: 'Footwear' },
          { name: 'Plum',                    tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Chaupal',                 tier: 'silver',    category: 'OTT Platform' },
          { name: 'Safe Express',            tier: 'silver',    category: 'Logistics' },
          { name: 'Punjab Kesari',           tier: 'silver',    category: 'Print Media' },
          { name: 'Next IAS',                tier: 'silver',    category: 'UPSC Coaching' },
          { name: 'M2K Cinemas',             tier: 'partner',   category: 'Entertainment' },
          { name: 'Red FM 93.5',             tier: 'partner',   category: 'Radio' },
          { name: 'Day Zero',                tier: 'partner',   category: 'Events & Entertainment' },
          { name: 'Impresiot',               tier: 'partner',   category: 'Events Management' },
          { name: 'Groove Nexus',            tier: 'partner',   category: 'Music & Events' },
          { name: 'VYLD',                    tier: 'associate', category: 'Youth Lifestyle' },
          { name: 'Fleye',                   tier: 'associate', category: 'Eyewear' },
          { name: 'SAM',                     tier: 'associate', category: 'Technology' },
          { name: 'Guitar Music Shop',       tier: 'associate', category: 'Music Instruments' },
          { name: 'Algocs',                  tier: 'associate', category: 'Algo Trading' },
          { name: 'AlgoQuant',               tier: 'associate', category: 'Quantitative Finance' },
          { name: 'ACT',                     tier: 'associate', category: 'Broadband & Internet' },
          { name: 'TVG',                     tier: 'associate', category: 'Media' },
          { name: 'Apna Adda',               tier: 'associate', category: 'Coworking & Social' },
          { name: 'Bungee',                  tier: 'associate', category: 'Fintech' },
          { name: 'Qelica',                  tier: 'associate', category: 'Technology' },
          { name: '2.oh',                    tier: 'associate', category: 'Fashion' },
          { name: 'Makeο Toothsi',           tier: 'associate', category: 'Dental Care' },
          { name: 'Snap4Me',                 tier: 'associate', category: 'Photography' },
          { name: 'Love Earth',              tier: 'associate', category: 'Sustainable Products' },
          { name: 'Fever',                   tier: 'associate', category: 'Events & Entertainment' },
        ],
        2023: [
          { name: 'Airtel',    tier: 'title',     category: 'Telecom' },
          { name: 'Paytm',     tier: 'gold',      category: 'Fintech' },
          { name: 'Zomato',    tier: 'gold',      category: 'Food Delivery' },
          { name: 'Samsung',   tier: 'silver',    category: 'Electronics' },
          { name: 'Ola',       tier: 'silver',    category: 'Mobility' },
          { name: 'Puma',      tier: 'bronze',    category: 'Sportswear' },
          { name: 'Spotify',   tier: 'partner',   category: 'Music Streaming' },
          { name: 'Cred',      tier: 'associate', category: 'Fintech' },
        ],
        2022: [
          { name: 'Dream11',   tier: 'title',     category: 'Fantasy Sports' },
          { name: 'Jio',       tier: 'gold',      category: 'Telecom' },
          { name: "BYJU'S",    tier: 'silver',    category: 'EdTech' },
          { name: 'RedBull',   tier: 'partner',   category: 'Beverages' },
          { name: 'Noise',     tier: 'associate', category: 'Electronics' },
        ],
        2021: [
          { name: "BYJU'S",    tier: 'title',   category: 'EdTech' },
          { name: 'Unacademy', tier: 'gold',    category: 'EdTech' },
          { name: 'Flipkart',  tier: 'silver',  category: 'E-commerce' },
          { name: 'Zomato',    tier: 'partner', category: 'Food Delivery' },
        ],
      },
    }],
    tech: [{
      id: 'invictus_dtu', name: 'Invictus', tagline: "DTU's annual technical festival",
      icon: '⚙️', iconBg: 'rgba(67,232,192,0.12)', footfall: '20,000+', sponsors_count: '40+',
      years: {
        2025: [
          { name: 'MATIKS.COM', tier:'gold', category:'Quant'     },
          { name: 'Yocto',    tier: 'associate',     category: 'Medical' },
          { name: 'KGEN', tier: 'gold',      category: 'Registration' },
          { name: 'EA FC Delhi NCR',  tier: 'gold',      category: 'Gaming' },
          { name: 'NSSS',  tier: 'silver',    category: 'Social Outreach' },
          { name: 'Wayspire',    tier: 'partner',   category: 'upskilling' },
          { name: 'GNK Jewellers', tier: 'associate', category: 'Jewellery' },
          { name: 'Telerang', tier: 'associate', category: 'Work Readiness' },
          { name: 'XTCY', tier: 'associate', category: 'Energy Drink' },
          { name: 'Suzuki', tier: 'associate', category: 'Bike' },
          { name: 'Freedo', tier: 'associate', category: 'Mobility' },
          { name: 'SAFEXPRESS', tier: 'associate', category: 'Logistics' },
          { name: 'Ace Media House', tier: 'associate', category: 'Management' },
          { name: 'StockGro', tier: 'associate', category: 'Trading' },
          { name: 'DD national', tier: 'associate', category: 'Coverage' },
          { name: 'PCMB Memes', tier: 'associate', category: 'Media' },
          { name: 'HT City', tier: 'associate', category: 'Media' },
          { name: 'Fateh Education', tier: 'associate', category: 'Study Abroad' },
          { name: 'Qualcomm', tier: 'gold', category: '' },
          { name: 'amdocs', tier: 'gold', category: '' },
          { name: 'HDFC BANKING', tier: 'associate', category: 'Bank' },
          { name: 'Bank Of Baroda', tier: 'associate', category: 'Bank' },
          { name: 'Aditya Birla', tier: 'associate', category: 'Multinational Conglomerate' },
          { name: 'chess.com', tier: 'associate', category: 'Games' },
          { name: 'Adobe', tier: 'associate', category: 'Technology' },
          { name: 'GeeksforGeeks', tier: 'silver', category: 'EdTech' },
          { name: 'Farmley', tier: 'associate', category: 'Snacks' },
          { name: 'DS Group', tier: 'associate', category: 'Food' },
          { name: 'Fresca', tier: 'associate', category: 'Beverage' },
          { name: 'Jagran Josh', tier: 'associate', category: 'Media' },
          { name: 'Hindustan Times', tier: 'associate', category: 'Media' },


        ],
        2024: [
          { name: 'Google',    tier: 'title',     category: 'Technology' },
          { name: 'Microsoft', tier: 'gold',      category: 'Technology' },
          { name: 'Flipkart',  tier: 'gold',      category: 'E-commerce' },
          { name: 'Razorpay',  tier: 'silver',    category: 'Fintech' },
          { name: 'GitHub',    tier: 'partner',   category: 'Dev Tools' },
          { name: 'JetBrains', tier: 'associate', category: 'Dev Tools' },
        ],
        2023: [
          { name: 'Amazon',   tier: 'title',  category: 'Technology' },
          { name: 'Flipkart', tier: 'gold',   category: 'E-commerce' },
          { name: 'Postman',  tier: 'silver', category: 'Dev Tools' },
          { name: 'Cred',     tier: 'bronze', category: 'Fintech' },
        ],
      },
    }],
    sports: [{
      id: 'aahvahn', name: 'Aahvahn', tagline: "DTU's annual sports meet",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '8,000+', sponsors_count: 10,
      years: {
        2024: [
          { name: 'Decathlon', tier: 'title',  category: 'Sporting Goods' },
          { name: 'Puma',      tier: 'gold',   category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
          { name: 'Nike',      tier: 'bronze', category: 'Sportswear' },
        ],
        2023: [
          { name: 'Adidas',    tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },   
  // ── NSUT ─────────────────────────────────────────────────────
  nsut: { 
    cultural: [
      {
      id: 'moksha', name: 'Moksha', tagline: "NSUT's flagship annual cultural festival",
      icon: '🎭', iconBg: 'rgba(255,101,132,0.15)', footfall: '50,000+', sponsors_count: "100+",
      years: {
        // ── 2025 — real data ──
        2025: [
          { name: 'Sparx',               tier: 'title',     category: 'Footwear' },
          { name: 'Delhi Capitals',       tier: 'gold',      category: 'Sports (IPL Team)' },
          { name: 'Rapido',               tier: 'gold',      category: 'Bike Taxi & Mobility' },
          { name: 'Mars',                 tier: 'gold',      category: 'Confectionery & FMCG' },
          { name: 'PNB',                  tier: 'gold',      category: 'Banking' },
          { name: 'Paree',                tier: 'silver',    category: 'Feminine Hygiene' },
          { name: 'Ningen',               tier: 'silver',    category: 'Skincare' },
          { name: 'Nescafe',              tier: 'silver',    category: 'Beverages' },
          { name: 'GAIL',                 tier: 'silver',    category: 'Oil & Gas (PSU)' },
          { name: 'Bharat Petroleum',     tier: 'silver',    category: 'Oil & Gas (PSU)' },
          { name: 'Plum Body Lovin',      tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Hilary Rhoda',         tier: 'silver',    category: 'Fashion' },
          { name: 'French Essence',       tier: 'silver',    category: 'Perfumes & Fragrances' },
          { name: 'Snitch',               tier: 'silver',    category: 'Men\'s Fashion' },
          { name: 'Trends',               tier: 'silver',    category: 'Fashion Retail' },
          { name: 'Chase Protein',        tier: 'silver',    category: 'Sports Nutrition' },
          { name: 'Oatey',                tier: 'bronze',    category: 'Plumbing Products' },
          { name: 'Yostar',               tier: 'bronze',    category: 'Gaming' },
          { name: 'Jolen',                tier: 'bronze',    category: 'Beauty & Skincare' },
          { name: 'Vision IAS',           tier: 'bronze',    category: 'UPSC Coaching' },
          { name: 'Amar Ujala',           tier: 'partner',   category: 'Print Media' },
          { name: 'Eazydiner',            tier: 'partner',   category: 'Restaurant Booking' },
          { name: 'BoostGrad',            tier: 'partner',   category: 'Career & EdTech' },
          { name: 'Throttle Tribe',       tier: 'partner',   category: 'Biking Community' },
          { name: 'Muddy Water',          tier: 'partner',   category: 'Beverages' },
          { name: 'Mindmill',             tier: 'associate', category: 'Mental Health & Wellness' },
          { name: 'Detalytics',           tier: 'associate', category: 'Data Analytics' },
          { name: 'Viberse',              tier: 'associate', category: 'Social App' },
          { name: 'Clova',                tier: 'associate', category: 'Technology' },
          { name: 'O Hi',                 tier: 'associate', category: 'Social App' },
          { name: 'IFA',                  tier: 'associate', category: 'Finance & Investment' },
          { name: 'Nuke',                 tier: 'associate', category: 'Technology' },
          { name: 'Blood Connect',        tier: 'associate', category: 'NGO / Blood Donation' },
          { name: 'Qadar Daan',           tier: 'associate', category: 'NGO' },
          { name: 'Herody',               tier: 'associate', category: 'Electric Vehicles' },
        ],
        // ── 2024 — real data ──
        2024: [
          { name: 'Philips',              tier: 'title',     category: 'Consumer Electronics' },
          { name: 'Delhi Capitals',       tier: 'gold',      category: 'Sports (IPL Team)' },
          { name: 'Myntra',               tier: 'gold',      category: 'Fashion E-commerce' },
          { name: 'Hero',                 tier: 'gold',      category: 'Two-Wheelers' },
          { name: 'GAIL',                 tier: 'gold',      category: 'Oil & Gas (PSU)' },
          { name: 'Gold\'s Gym',          tier: 'silver',    category: 'Fitness & Gym' },
          { name: 'Storia',               tier: 'silver',    category: 'Beverages' },
          { name: 'Max Protein',          tier: 'silver',    category: 'Sports Nutrition' },
          { name: 'Himalaya Herbals',     tier: 'silver',    category: 'Personal Care' },
          { name: 'Sparx',                tier: 'silver',    category: 'Footwear' },
          { name: 'Bingo',                tier: 'silver',    category: 'Snacks' },
          { name: 'Gigabyte',             tier: 'silver',    category: 'Computer Hardware' },
          { name: 'Boult Audio',          tier: 'silver',    category: 'Audio Electronics' },
          { name: 'Stock Edge',           tier: 'silver',    category: 'Stock Market Education' },
          { name: 'Next IAS',             tier: 'silver',    category: 'UPSC Coaching' },
          { name: 'Vision IAS',           tier: 'silver',    category: 'UPSC Coaching' },
          { name: 'Freedo',               tier: 'bronze',    category: 'EV Rentals' },
          { name: 'Bauli',                tier: 'bronze',    category: 'Bakery & Confectionery' },
          { name: 'Bonkers Corner',       tier: 'bronze',    category: 'Fashion' },
          { name: 'Crispee Snacks',       tier: 'bronze',    category: 'Snacks' },
          { name: 'Omdocs',               tier: 'bronze',    category: 'Healthcare' },
          { name: 'Day Zero',             tier: 'partner',   category: 'Events & Entertainment' },
          { name: 'Groove Nexus',         tier: 'partner',   category: 'Music & Events' },
          { name: 'Hover Robotix',        tier: 'partner',   category: 'Robotics & EdTech' },
          { name: 'Qelica',               tier: 'associate', category: 'Technology' },
          { name: 'Bungee',               tier: 'associate', category: 'Fintech' },
          { name: 'Bitget',               tier: 'associate', category: 'Crypto Exchange' },
          { name: 'SSPS Global',          tier: 'associate', category: 'Education' },
          { name: 'AppWars',              tier: 'associate', category: 'Gaming' },
          { name: 'Maltiplai',            tier: 'associate', category: 'Fintech' },
          { name: 'HypedIN',              tier: 'associate', category: 'Social Commerce' },
          { name: 'MentorX',             tier: 'associate', category: 'Career Mentorship' },
          { name: 'RevUp',                tier: 'associate', category: 'Automotive' },
          { name: 'LUCR8',                tier: 'associate', category: 'Fintech' },
        ],
        // ── 2023 — real data ──
        2023: [
          { name: 'Central Bank of India', tier: 'title',    category: 'Banking' },
          { name: 'Coding Ninjas',         tier: 'gold',     category: 'EdTech' },
          { name: 'Manforce',              tier: 'gold',     category: 'Personal Care & FMCG' },
          { name: 'Gold\'s Gym',           tier: 'gold',     category: 'Fitness & Gym' },
          { name: 'Paytm',                 tier: 'silver',   category: 'Fintech' },
          { name: 'Top One Percent',       tier: 'silver',   category: 'EdTech' },
          { name: 'Fan2Play',              tier: 'silver',   category: 'Fantasy Sports' },
          { name: 'IGL',                   tier: 'silver',   category: 'Gas Distribution (PSU)' },
          { name: 'Instax',                tier: 'silver',   category: 'Photography' },
          { name: 'Philips',               tier: 'silver',   category: 'Consumer Electronics' },
          { name: 'Oatey',                 tier: 'silver',   category: 'Plumbing Products' },
          { name: 'Beardo',                tier: 'silver',   category: 'Men\'s Grooming' },
          { name: 'Clovia',                tier: 'silver',   category: 'Lingerie & Apparel' },
          { name: 'Insights IAS',          tier: 'silver',   category: 'UPSC Coaching' },
          { name: 'Freedo',                tier: 'bronze',   category: 'EV Rentals' },
          { name: 'Course Hero',           tier: 'bronze',   category: 'EdTech' },
          { name: 'Fitnastic',             tier: 'bronze',   category: 'Fitness' },
          { name: 'Union Bank',            tier: 'bronze',   category: 'Banking' },
          { name: 'Manipal Hospitals',     tier: 'bronze',   category: 'Healthcare' },
          { name: 'Unirely',               tier: 'partner',  category: 'EdTech' },
          { name: 'Hunch',                 tier: 'partner',  category: 'Social App' },
          { name: 'Cotton Candy',          tier: 'partner',  category: 'Fashion' },
          { name: 'Algocs',                tier: 'associate',category: 'Algo Trading' },
          { name: 'Anita International',   tier: 'associate',category: 'Jewellery' },
          { name: 'BeReal',                tier: 'associate',category: 'Social Media' },
          { name: 'KIARA',                 tier: 'associate',category: 'Fashion' },
          { name: 'Welcomhotel',           tier: 'associate',category: 'Hospitality' },
          { name: 'Benling',               tier: 'associate',category: 'Electric Vehicles' },
          { name: 'Red Bull',              tier: 'associate',category: 'Energy Drinks' },
          { name: 'Jindal Steel and Power',tier: 'associate',category: 'Steel & Power' },
          { name: 'Poster Laga',           tier: 'associate',category: 'Advertising' },
        ],
      },
    },
     {
      id: 'resonanz', name: 'Resonanz', tagline: "NSUT's annual intra college cultural festival",
      icon: '🎭', iconBg: 'rgba(128, 49, 64, 0.15)', footfall: '30,000+', sponsors_count: 40,
      years: {
        2025: [
           { name: 'Instax',     tier: 'silver',   category: 'Photography' },
           { name: 'Plum Body Lovin', tier: 'silver',  category: 'Beauty & Skincare' },
           { name: 'Vision IAS',      tier: 'bronze',    category: 'UPSC Coaching' },
           { name: 'GAIL',            tier: 'gold',      category: 'Oil & Gas (PSU)' },
           { name: 'Amar Ujala',      tier: 'bronze',    category: 'Print Media' },
           { name: 'Tattoo Tatva',     tier: 'silver',    category: 'Tattoo Studio' },
        ],
    },
  },

  ], 
    tech: [{
      id: 'innovision', name: 'Innovision', tagline: "NSUT's annual technical symposium",
      icon: '⚙️', iconBg: 'rgba(34, 97, 81, 0.12)', footfall: '12,000+', sponsors_count: 14,
      years: {
        2024: [
          { name: 'Microsoft', tier: 'title',     category: 'Technology' },
          { name: 'IBM',       tier: 'gold',      category: 'IT Services' },
          { name: 'Razorpay',  tier: 'silver',    category: 'Fintech' },
          { name: 'GitHub',    tier: 'partner',   category: 'Dev Tools' },
          { name: 'Postman',   tier: 'associate', category: 'Dev Tools' },
        ],
        2023: [
          { name: 'Google',   tier: 'title',  category: 'Technology' },
          { name: 'Infosys',  tier: 'gold',   category: 'IT Services' },
          { name: 'Juspay',   tier: 'silver', category: 'Fintech' },
        ],
      },
    }],
    sports: [{
      id: 'nsut_sports', name: 'Nexus Sports Meet', tagline: "NSUT's inter-college sports tournament",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '5,000+', sponsors_count: 8,
      years: {
        2024: [
          { name: 'Decathlon', tier: 'title',  category: 'Sporting Goods' },
          { name: 'Nike',      tier: 'gold',   category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
        ],
        2023: [
          { name: 'Adidas',    tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },

  // ── IIT DELHI ────────────────────────────────────────────────
  iitd: {
    cultural: [{
      id: 'rendezvous', name: 'Rendezvous', tagline: "IIT Delhi's flagship cultural festival",
      icon: '🎭', iconBg: 'rgba(67,232,192,0.15)', footfall: '60,000+', sponsors_count: 35,
      years: {
        2024: [
          { name: 'HDFC Bank',   tier: 'title',     category: 'Banking' },
          { name: 'Coca-Cola',   tier: 'gold',      category: 'Beverages' },
          { name: 'Myntra',      tier: 'gold',      category: 'Fashion E-commerce' },
          { name: 'boAt',        tier: 'silver',    category: 'Consumer Electronics' },
          { name: 'Swiggy',      tier: 'silver',    category: 'Food Delivery' },
          { name: 'Spotify',     tier: 'partner',   category: 'Music Streaming' },
          { name: 'Razorpay',    tier: 'associate', category: 'Fintech' },
          { name: 'Fastrack',    tier: 'bronze',    category: 'Fashion' },
        ],
        2023: [
          { name: 'Jio',         tier: 'title',     category: 'Telecom' },
          { name: 'Amazon',      tier: 'gold',      category: 'E-commerce' },
          { name: 'Nykaa',       tier: 'gold',      category: 'Beauty' },
          { name: 'Dream11',     tier: 'silver',    category: 'Fantasy Sports' },
          { name: 'Ola',         tier: 'silver',    category: 'Mobility' },
          { name: 'PhonePe',     tier: 'partner',   category: 'Fintech' },
        ],
        2022: [
          { name: 'Airtel',      tier: 'title',     category: 'Telecom' },
          { name: 'Flipkart',    tier: 'gold',      category: 'E-commerce' },
          { name: 'Puma',        tier: 'silver',    category: 'Sportswear' },
          { name: 'Cred',        tier: 'partner',   category: 'Fintech' },
        ],
      },
    }],
    tech: [{
      id: 'tryst_iitd', name: 'Tryst', tagline: "IIT Delhi's premier technical festival",
      icon: '⚙️', iconBg: 'rgba(67,232,192,0.12)', footfall: '30,000+', sponsors_count: 25,
      years: {
        2024: [
          { name: 'Google',       tier: 'title',     category: 'Technology' },
          { name: 'Microsoft',    tier: 'gold',      category: 'Technology' },
          { name: 'Adobe',        tier: 'gold',      category: 'Software' },
          { name: 'Goldman Sachs',tier: 'silver',    category: 'Finance' },
          { name: 'GitHub',       tier: 'partner',   category: 'Dev Tools' },
        ],
        2023: [
          { name: 'Amazon',       tier: 'title',     category: 'Technology' },
          { name: 'Flipkart',     tier: 'gold',      category: 'E-commerce' },
          { name: 'Atlassian',    tier: 'silver',    category: 'Dev Tools' },
        ],
      },
    }],
    sports: [{
      id: 'iitd_sports', name: 'Sportech', tagline: "IIT Delhi's annual sports extravaganza",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '10,000+', sponsors_count: 12,
      years: {
        2024: [
          { name: 'Decathlon', tier: 'title',  category: 'Sporting Goods' },
          { name: 'Puma',      tier: 'gold',   category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
        ],
        2023: [
          { name: 'Adidas',    tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },

  // ── IIIT DELHI ───────────────────────────────────────────────
  iiitd: {
    cultural: [{
      id: 'odyssey', name: 'Odyssey', tagline: "IIIT Delhi's growing cultural extravaganza",
      icon: '🎭', iconBg: 'rgba(255,183,77,0.15)', footfall: '15,000+', sponsors_count: 16,
      years: {
        2024: [
          { name: 'Airtel',   tier: 'title',     category: 'Telecom' },
          { name: 'Zomato',   tier: 'gold',      category: 'Food Delivery' },
          { name: 'boAt',     tier: 'gold',      category: 'Consumer Electronics' },
          { name: 'Swiggy',   tier: 'silver',    category: 'Food Delivery' },
          { name: 'Cred',     tier: 'partner',   category: 'Fintech' },
          { name: 'Spotify',  tier: 'associate', category: 'Music Streaming' },
        ],
        2023: [
          { name: 'Pepsi',    tier: 'title',     category: 'Beverages' },
          { name: 'Myntra',   tier: 'gold',      category: 'Fashion E-commerce' },
          { name: 'PhonePe',  tier: 'silver',    category: 'Fintech' },
        ],
      },
    }],
    tech: [{
      id: 'esya', name: 'Esya', tagline: "IIIT Delhi's flagship technical festival",
      icon: '⚙️', iconBg: 'rgba(67,232,192,0.12)', footfall: '10,000+', sponsors_count: 14,
      years: {
        2024: [
          { name: 'Microsoft', tier: 'title',     category: 'Technology' },
          { name: 'Google',    tier: 'gold',      category: 'Technology' },
          { name: 'Razorpay',  tier: 'silver',    category: 'Fintech' },
          { name: 'GitHub',    tier: 'partner',   category: 'Dev Tools' },
        ],
        2023: [
          { name: 'Amazon',   tier: 'title',  category: 'Technology' },
          { name: 'IBM',      tier: 'gold',   category: 'IT Services' },
        ],
      },
    }],
  },

  // ── SRCC ─────────────────────────────────────────────────────
  srcc: {
    cultural: [{
      id: 'crossroads', name: 'Crossroads', tagline: "SRCC's iconic annual cultural festival",
      icon: '🎭', iconBg: 'rgba(255,101,132,0.15)', footfall: '20,000+', sponsors_count: '50+',
      years: {
        // ── 2025 — real data ──
        2025: [
          { name: 'PlayStation India',   tier: 'title',     category: 'Gaming' },
          { name: 'McDonald\'s',         tier: 'gold',      category: 'QSR / Food' },
          { name: 'Croma',               tier: 'gold',      category: 'Electronics Retail' },
          { name: 'PS5',                 tier: 'gold',      category: 'Gaming Console' },
          { name: 'Sparx',               tier: 'silver',    category: 'Footwear' },
          { name: 'Lotus Botanicals',    tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Bellavita',           tier: 'silver',    category: 'Perfumes & Fragrances' },
          { name: 'Plum Body Lovin',     tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Nescafe',             tier: 'silver',    category: 'Beverages' },
          { name: 'KitKat',              tier: 'silver',    category: 'Confectionery' },
          { name: 'Bingo',               tier: 'silver',    category: 'Snacks' },
          { name: 'NIC Ice Cream',       tier: 'silver',    category: 'Ice Cream' },
          { name: 'Rapido',              tier: 'silver',    category: 'Bike Taxi & Mobility' },
          { name: 'Portronics',          tier: 'silver',    category: 'Tech Accessories' },
          { name: 'Unstop',              tier: 'bronze',    category: 'Career & Competitions' },
          { name: 'Zenonik',             tier: 'bronze',    category: 'Technology' },
          { name: 'Pulse',               tier: 'bronze',    category: 'Confectionery' },
          { name: 'Orbit Wallet',        tier: 'bronze',    category: 'Fintech' },
          { name: 'PETA India',          tier: 'bronze',    category: 'NGO / Animal Rights' },
          { name: 'Herody',              tier: 'bronze',    category: 'Electric Vehicles' },
          { name: 'Collegify',           tier: 'partner',   category: 'College Admissions' },
          { name: 'Safar',               tier: 'partner',   category: 'Travel' },
          { name: 'Sand Martin',         tier: 'partner',   category: 'Hospitality' },
          { name: 'My Cool Canvas',      tier: 'partner',   category: 'Art & Lifestyle' },
          { name: 'Papa Nata',           tier: 'partner',   category: 'Food & Beverages' },
          { name: 'Piyaau',              tier: 'associate', category: 'Sustainable Products' },
          { name: 'Leviore',             tier: 'associate', category: 'Fashion' },
          { name: 'Bottoms',             tier: 'associate', category: 'Fashion' },
          { name: 'HypedIN',             tier: 'associate', category: 'Social Commerce' },
          { name: 'JSV',                 tier: 'associate', category: 'Technology' },
          { name: 'Mehta Jewels',        tier: 'associate', category: 'Jewellery' },
        ],
        // ── 2024 — real data ──
        2024: [
          { name: 'HONOR Smartphones',   tier: 'title',     category: 'Smartphones' },
          { name: 'Honda',               tier: 'gold',      category: 'Automobile' },
          { name: 'ASUS',                tier: 'gold',      category: 'Consumer Electronics' },
          { name: 'ICICI Direct',        tier: 'gold',      category: 'Stock Broking' },
          { name: 'Pizza Hut',           tier: 'gold',      category: 'QSR / Food' },
          { name: 'Nestle',              tier: 'silver',    category: 'FMCG' },
          { name: 'Uniqlo',              tier: 'silver',    category: 'Fashion Retail' },
          { name: 'MyGlamm',             tier: 'silver',    category: 'Beauty & Cosmetics' },
          { name: 'Lotus Herbals',       tier: 'silver',    category: 'Beauty & Skincare' },
          { name: 'Monster Energy',      tier: 'silver',    category: 'Energy Drinks' },
          { name: 'Instax',              tier: 'silver',    category: 'Photography' },
          { name: 'Sparx',               tier: 'silver',    category: 'Footwear' },
          { name: 'Bigmuscles Nutrition',tier: 'silver',    category: 'Sports Nutrition' },
          { name: 'JioSaavn',            tier: 'silver',    category: 'Music Streaming' },
          { name: 'Ocean',               tier: 'silver',    category: 'Beverages' },
          { name: 'Internshala',         tier: 'bronze',    category: 'Internship Platform' },
          { name: 'Business Standard',   tier: 'bronze',    category: 'Print Media' },
          { name: 'Amar Ujala',          tier: 'bronze',    category: 'Print Media' },
          { name: 'NDTV',                tier: 'bronze',    category: 'News Media' },
          { name: 'The Statesman',       tier: 'bronze',    category: 'Print Media' },
          { name: 'Silicon India',       tier: 'bronze',    category: 'Tech Media' },
          { name: 'Ishq FM',             tier: 'partner',   category: 'Radio' },
          { name: 'Aspirant Learning',   tier: 'partner',   category: 'EdTech' },
          { name: 'Drink Free',          tier: 'partner',   category: 'Beverages' },
          { name: 'Taali',               tier: 'partner',   category: 'OTT Platform' },
          { name: 'Orion Hostels',       tier: 'partner',   category: 'Hospitality' },
          { name: 'KES',                 tier: 'associate', category: 'Education' },
          { name: 'Music Verse Entertainment', tier: 'associate', category: 'Music & Entertainment' },
          { name: 'Maltiplai',           tier: 'associate', category: 'Fintech' },
          { name: 'Nexus Gaming',        tier: 'associate', category: 'Gaming' },
          { name: 'Interview Buddy',     tier: 'associate', category: 'Career & Interview Prep' },
          { name: 'Digitalpreneur',      tier: 'associate', category: 'Digital Marketing' },
          { name: 'Beanut Butter',       tier: 'associate', category: 'Health Food' },
          { name: 'ICSI',                tier: 'associate', category: 'Education' },
        ],
        2022: [
          { name: 'Mercedes', tier: 'title',  category: 'Automobile' },
          { name: 'Pepsi',    tier: 'gold',   category: 'Beverages' },
          { name: 'Nykaa',    tier: 'silver', category: 'Beauty' },
          { name: 'Cred',     tier: 'partner',category: 'Fintech' },
        ],
      },
    }],
    other: [{
      id: 'interface', name: 'Interface', tagline: "SRCC's commerce & entrepreneurship conclave",
      icon: '💼', iconBg: 'rgba(255,183,77,0.12)', footfall: '5,000+', sponsors_count: 12,
      years: {
        2024: [
          { name: 'Deloitte',     tier: 'title',  category: 'Consulting' },
          { name: 'EY',           tier: 'gold',   category: 'Consulting' },
          { name: 'KPMG',         tier: 'silver', category: 'Consulting' },
          { name: 'Razorpay',     tier: 'partner',category: 'Fintech' },
        ],
        2023: [
          { name: 'PwC',          tier: 'title',  category: 'Consulting' },
          { name: 'Goldman Sachs',tier: 'gold',   category: 'Finance' },
        ],
      },
    }],
  },

  // ── ST. STEPHEN'S ────────────────────────────────────────────
  stephens: {
    cultural: [{
      id: 'stephania', name: 'Stephania', tagline: "St. Stephen's prestigious annual cultural festival",
      icon: '🎭', iconBg: 'rgba(100,220,100,0.15)', footfall: '10,000+', sponsors_count: 14,
      years: {
        2024: [
          { name: 'Pepsi',    tier: 'title',     category: 'Beverages' },
          { name: 'HDFC Bank',tier: 'gold',      category: 'Banking' },
          { name: 'Myntra',   tier: 'silver',    category: 'Fashion E-commerce' },
          { name: 'Spotify',  tier: 'partner',   category: 'Music Streaming' },
          { name: 'Cred',     tier: 'associate', category: 'Fintech' },
        ],
        2023: [
          { name: 'Coca-Cola',tier: 'title',     category: 'Beverages' },
          { name: 'Flipkart', tier: 'gold',      category: 'E-commerce' },
          { name: 'boAt',     tier: 'silver',    category: 'Consumer Electronics' },
        ],
      },
    }],
    sports: [{
      id: 'stephens_sports', name: 'Stephanians Cup', tagline: "St. Stephen's inter-college sports meet",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '3,000+', sponsors_count: 6,
      years: {
        2024: [
          { name: 'Nike',      tier: 'title',  category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'gold',   category: 'Beverages' },
          { name: 'Decathlon', tier: 'silver', category: 'Sporting Goods' },
        ],
        2023: [
          { name: 'Puma',      tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },

  // ── IIT BOMBAY ───────────────────────────────────────────────
  iitb: {
    cultural: [{
      id: 'moodindigo', name: 'Mood Indigo', tagline: "Asia's largest college cultural festival",
      icon: '🎭', iconBg: 'rgba(67,232,192,0.15)', footfall: '1,50,000+', sponsors_count: '50+',
      years: {
        2024: [
          { name: 'Jio',        tier: 'title',     category: 'Telecom' },
          { name: 'Coca-Cola',  tier: 'gold',      category: 'Beverages' },
          { name: 'Amazon',     tier: 'gold',      category: 'E-commerce' },
          { name: 'Myntra',     tier: 'silver',    category: 'Fashion E-commerce' },
          { name: 'boAt',       tier: 'silver',    category: 'Consumer Electronics' },
          { name: 'Swiggy',     tier: 'partner',   category: 'Food Delivery' },
          { name: 'Spotify',    tier: 'partner',   category: 'Music Streaming' },
          { name: 'Razorpay',   tier: 'associate', category: 'Fintech' },
        ],
        2023: [
          { name: 'Airtel',     tier: 'title',     category: 'Telecom' },
          { name: 'Flipkart',   tier: 'gold',      category: 'E-commerce' },
          { name: 'Pepsi',      tier: 'gold',      category: 'Beverages' },
          { name: 'Dream11',    tier: 'silver',    category: 'Fantasy Sports' },
          { name: 'HDFC Bank',  tier: 'silver',    category: 'Banking' },
        ],
        2022: [
          { name: 'HDFC Bank',  tier: 'title',     category: 'Banking' },
          { name: 'Coca-Cola',  tier: 'gold',      category: 'Beverages' },
          { name: 'Ola',        tier: 'silver',    category: 'Mobility' },
        ],
      },
    }],
    tech: [{
      id: 'techfest', name: 'Techfest', tagline: "Asia's largest science & technology festival",
      icon: '⚙️', iconBg: 'rgba(67,232,192,0.12)', footfall: '1,80,000+', sponsors_count: '30',
      years: {
        2024: [
          { name: 'Google',       tier: 'title',     category: 'Technology' },
          { name: 'Microsoft',    tier: 'gold',      category: 'Technology' },
          { name: 'Samsung',      tier: 'gold',      category: 'Electronics' },
          { name: 'Goldman Sachs',tier: 'silver',    category: 'Finance' },
          { name: 'Adobe',        tier: 'silver',    category: 'Software' },
        ],
        2023: [
          { name: 'Amazon',     tier: 'title',  category: 'Technology' },
          { name: 'Qualcomm',   tier: 'gold',   category: 'Semiconductors' },
          { name: 'Flipkart',   tier: 'silver', category: 'E-commerce' },
        ],
      },
    }],
    sports: [{
      id: 'iitb_sports', name: 'Inter IIT Sports Meet', tagline: 'Premier sports competition among IITs',
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '15,000+', sponsors_count: 15,
      years: {
        2024: [
          { name: 'Decathlon', tier: 'title',  category: 'Sporting Goods' },
          { name: 'Puma',      tier: 'gold',   category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
        ],
        2023: [
          { name: 'Adidas',    tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },

  // ── IIT KANPUR ───────────────────────────────────────────────
  iitk: {
    cultural: [{
      id: 'antaragni', name: 'Antaragni', tagline: "IIT Kanpur's iconic cultural festival since 1965",
      icon: '🎭', iconBg: 'rgba(67,232,192,0.15)', footfall: '80,000+', sponsors_count: 35,
      years: {
        2024: [
          { name: 'Pepsi',      tier: 'title',     category: 'Beverages' },
          { name: 'Jio',        tier: 'gold',      category: 'Telecom' },
          { name: 'Amazon',     tier: 'gold',      category: 'E-commerce' },
          { name: 'boAt',       tier: 'silver',    category: 'Consumer Electronics' },
          { name: 'Swiggy',     tier: 'silver',    category: 'Food Delivery' },
          { name: 'PhonePe',    tier: 'partner',   category: 'Fintech' },
          { name: 'Spotify',    tier: 'associate', category: 'Music Streaming' },
        ],
        2023: [
          { name: 'Airtel',     tier: 'title',     category: 'Telecom' },
          { name: 'Coca-Cola',  tier: 'gold',      category: 'Beverages' },
          { name: 'Flipkart',   tier: 'gold',      category: 'E-commerce' },
          { name: 'Ola',        tier: 'silver',    category: 'Mobility' },
        ],
        2022: [
          { name: 'Dream11',    tier: 'title',     category: 'Fantasy Sports' },
          { name: 'HDFC Bank',  tier: 'gold',      category: 'Banking' },
          { name: 'Myntra',     tier: 'silver',    category: 'Fashion E-commerce' },
        ],
      },
    }],
    tech: [{
      id: 'techkriti', name: 'Techkriti', tagline: "IIT Kanpur's annual technical & entrepreneurship festival",
      icon: '⚙️', iconBg: 'rgba(67,232,192,0.12)', footfall: '40,000+', sponsors_count: 28,
      years: {
        2024: [
          { name: 'Google',       tier: 'title',     category: 'Technology' },
          { name: 'Microsoft',    tier: 'gold',      category: 'Technology' },
          { name: 'Qualcomm',     tier: 'gold',      category: 'Semiconductors' },
          { name: 'Goldman Sachs',tier: 'silver',    category: 'Finance' },
        ],
        2023: [
          { name: 'Amazon',   tier: 'title',  category: 'Technology' },
          { name: 'Adobe',    tier: 'gold',   category: 'Software' },
          { name: 'Razorpay', tier: 'silver', category: 'Fintech' },
        ],
      },
    }],
    sports: [{
      id: 'udghosh', name: 'Udghosh', tagline: "IIT Kanpur's national level sports meet",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '12,000+', sponsors_count: 12,
      years: {
        2024: [
          { name: 'Decathlon', tier: 'title',  category: 'Sporting Goods' },
          { name: 'Nike',      tier: 'gold',   category: 'Sportswear' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
        ],
        2023: [
          { name: 'Adidas',    tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },

  // ── LSR ──────────────────────────────────────────────────────
  lsr: {
    cultural: [{
      id: 'tarang', name: 'Tarang', tagline: "LSR's celebrated annual cultural festival",
      icon: '🎭', iconBg: 'rgba(255,101,132,0.15)', footfall: '12,000+', sponsors_count: 16,
      years: {
        2024: [
          { name: 'Nykaa',      tier: 'title',     category: 'Beauty' },
          { name: 'Myntra',     tier: 'gold',      category: 'Fashion E-commerce' },
          { name: 'Spotify',    tier: 'gold',      category: 'Music Streaming' },
          { name: 'Zomato',     tier: 'silver',    category: 'Food Delivery' },
          { name: 'Bewakoof',   tier: 'silver',    category: 'Fashion' },
          { name: 'Mamaearth',  tier: 'associate', category: 'Beauty & Personal Care' },
        ],
        2023: [
          { name: 'Nykaa',      tier: 'title',     category: 'Beauty' },
          { name: 'Flipkart',   tier: 'gold',      category: 'E-commerce' },
          { name: 'boAt',       tier: 'silver',    category: 'Consumer Electronics' },
        ],
        2022: [
          { name: 'Myntra',     tier: 'title',     category: 'Fashion E-commerce' },
          { name: 'Amazon',     tier: 'gold',      category: 'E-commerce' },
          { name: 'Pepsi',      tier: 'silver',    category: 'Beverages' },
        ],
      },
    }],
    sports: [{
      id: 'lsr_sports', name: 'LSR Sports Week', tagline: "LSR's annual inter-college sports tournament",
      icon: '🏆', iconBg: 'rgba(255,183,77,0.12)', footfall: '3,500+', sponsors_count: 6,
      years: {
        2024: [
          { name: 'Nike',      tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
          { name: 'Gatorade',  tier: 'silver', category: 'Beverages' },
        ],
        2023: [
          { name: 'Puma',      tier: 'title',  category: 'Sportswear' },
          { name: 'Decathlon', tier: 'gold',   category: 'Sporting Goods' },
        ],
      },
    }],
  },
}

const UPCOMING = [
  { date:'Mar 20-22, 2025', fest:'Engifest 2025',   college:'DTU',        type:'Cultural', seeking:true,  tags:['Cultural','50k+ footfall'] },
  { date:'Apr 4–6, 2025',   fest:'Odyssey 2025',    college:'IIIT Delhi', type:'Cultural',        seeking:true,  tags:['Cultural','15k footfall'] },
  { date:'Apr 11–13, 2025', fest:'Moksha',       college:'NSUT',       type:'Cultural Fest',       seeking:false, tags:['Cultural','30k footfall'] },
  { date:'Apr 18–20, 2025', fest:'Crossroads 2025', college:'SRCC',       type:'Cultural',        seeking:true,  tags:['Cultural'] },
  { date:'May 2–4, 2025',   fest:'Rendezvous 2025', college:'IIT Delhi',  type:'Cultural',        seeking:false,  tags:['Cultural','60k+ footfall'] },
  { date:'April 9–11, 2025',  fest:'Tarang 2025',     college:'LSR',        type:'Cultural',        seeking:true, tags:['Cultural',"Women's College"] },
]

const TYPE_BADGE = {
  iit:'badge-iit', du:'badge-du', nit:'badge-nit', iiit:'badge-iiit', state:'badge-state',
}

let currentFilter = 'all'


// ============================================================
//  RENDER — COLLEGE GRID
// ============================================================

function renderColleges(list) {
  const grid = document.getElementById('collegesGrid')
  if (!list.length) {
    grid.innerHTML = `<p style="color:var(--muted);padding:40px">No colleges found.</p>`
    return
  }
  grid.innerHTML = list.map((c, i) => `
    <div class="college-card"
      data-type="${c.type}"
      style="--card-glow:${c.glow}; animation-delay:${i * 0.05}s"
      onmousemove="trackMouse(event,this)"
      onclick="openCollege('${c.id}')">
      <div class="card-top">
        <div class="college-initials" style="background:${c.glow};color:${c.color}">${c.short}</div>
        <div class="college-type-badge ${TYPE_BADGE[c.type]}">${c.typeName}</div>
      </div>
      <div class="college-name">${c.name}</div>
      <div class="college-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        ${c.location}
      </div>
      <div class="card-stats">
        <div class="card-stat">
          <div class="card-stat-num" style="color:${c.color}">${c.fests}</div>
          <div class="card-stat-label">Fests</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-num">${c.sponsors}</div>
          <div class="card-stat-label">Sponsors</div>
        </div>
        <div class="card-stat">
          <div class="card-stat-num">${c.years}</div>
          <div class="card-stat-label">Yrs data</div>
        </div>
      </div>
      <div class="card-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17 17 7M7 7h10v10"/>
        </svg>
      </div>
    </div>
  `).join('')
}

function trackMouse(e, el) {
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%')
  el.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%')
}


// ============================================================
//  FILTER + SEARCH
// ============================================================

function filterType(type, btn) {
  currentFilter = type
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  applyFilters()
}

function filterCards() { applyFilters() }

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase()
  const filtered = COLLEGES.filter(c => {
    const matchType   = currentFilter === 'all' || c.type === currentFilter
    const matchSearch = !q
      || c.name.toLowerCase().includes(q)
      || c.short.toLowerCase().includes(q)
      || c.location.toLowerCase().includes(q)
    return matchType && matchSearch
  })
  renderColleges(filtered)
}


// ============================================================
//  UPCOMING
// ============================================================

function renderUpcoming() {
  document.getElementById('upcomingGrid').innerHTML = UPCOMING.map(u => `
    <div class="upcoming-card">
      <div class="upcoming-date">${u.date}</div>
      <div class="upcoming-fest-name">${u.fest}</div>
      <div class="upcoming-college">${u.college} · ${u.type}</div>
      <div class="upcoming-tags">
        ${u.tags.map(t => `<span class="upcoming-tag">${t}</span>`).join('')}
      </div>
      ${u.seeking ? `<div class="seeking-badge"><span class="seeking-dot"></span> Seeking sponsors</div>` : ''}
    </div>
  `).join('')
}


// ============================================================
//  COLLEGE DETAIL
// ============================================================

function openCollege(id) {
  const college = COLLEGES.find(c => c.id === id)
  if (!college) return

  document.getElementById('homeView').classList.add('hidden')
  document.getElementById('detailView').classList.add('active')
  window.scrollTo({ top: 0, behavior: 'smooth' })

  const hero = document.getElementById('detailHero')
  hero.dataset.collegeId = id
  renderDetailHero(college)

  const fests = FEST_DATA[id] || {}
  renderFestTabs(college, fests)
  renderFestsByType(fests, college.fesTypes?.[0] || 'cultural')
}

function renderDetailHero(college) {
  document.getElementById('detailHero').innerHTML = `
    <div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
        <div class="college-initials" style="width:64px;height:64px;font-size:18px;background:${college.glow};color:${college.color}">${college.short}</div>
        <div class="college-type-badge ${TYPE_BADGE[college.type]}">${college.typeName}</div>
      </div>
      <div class="detail-college-name">${college.name}</div>
      <div class="detail-college-sub">${college.location}</div>
      <div class="detail-meta">
        <div class="meta-chip">📅 Est. ${college.established}</div>
        <div class="meta-chip">👥 ${college.students} students</div>
        <div class="meta-chip">🎪 ${college.fests} fests</div>
        <div class="meta-chip">🤝 ${college.sponsors}+ sponsor records</div>
      </div>
    </div>
    <div class="detail-quick-stats">
      <div class="quick-stat">
        <span class="quick-stat-label">Total sponsors logged</span>
        <span class="quick-stat-val" style="color:${college.color}">${college.sponsors}</span>
      </div>
      <div class="quick-stat">
        <span class="quick-stat-label">Years of data</span>
        <span class="quick-stat-val">${college.years} yrs</span>
      </div>
      <div class="quick-stat">
        <span class="quick-stat-label">Active fests</span>
        <span class="quick-stat-val">${college.fests}</span>
      </div>
    </div>
  `
}


// ============================================================
//  FEST TABS
// ============================================================

function renderFestTabs(college, fests) {
  const typeMeta = {
    cultural: { label: 'Cultural fests', icon: '🎭' },
    tech:     { label: 'Tech fests',     icon: '⚙️' },
    sports:   { label: 'Sports events',  icon: '🏆' },
    other:    { label: 'Other events',   icon: '💼' },
  }
  const types = (college.fesTypes || []).filter(t => fests[t]?.length)
  document.getElementById('festTabs').innerHTML = types.map((t, i) => `
    <button class="fest-tab ${i === 0 ? 'active' : ''}" onclick="switchTab('${t}', this)">
      <span class="fest-tab-icon">${typeMeta[t]?.icon || '📌'}</span>
      ${typeMeta[t]?.label || t}
      <span class="tab-count">${fests[t]?.length || 0}</span>
    </button>
  `).join('')
}

function switchTab(type, btn) {
  document.querySelectorAll('.fest-tab').forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  const collegeId = document.getElementById('detailHero').dataset.collegeId
  renderFestsByType(FEST_DATA[collegeId] || {}, type)
}


// ============================================================
//  FEST LIST
// ============================================================

function renderFestsByType(fests, type) {
  const list      = fests[type] || []
  const container = document.getElementById('festList')

  if (!list.length) {
    container.innerHTML = `<div style="padding:40px;text-align:center;color:var(--muted);font-size:14px">No data yet — be the first to submit!</div>`
    return
  }

  container.innerHTML = list.map(f => {
    const yearKeys  = Object.keys(f.years).sort((a, b) => b - a)
    const firstYear = yearKeys[0]
    return `
      <div class="fest-item" id="fi-${f.id}">
        <div class="fest-item-header">
          <div class="fest-item-left">
            <div class="fest-icon" style="background:${f.iconBg}">${f.icon}</div>
            <div>
              <div class="fest-name">${f.name}</div>
              <div class="fest-tagline">${f.tagline}</div>
            </div>
          </div>
          <div class="fest-item-right">
            <div class="fest-stat">
              <div class="fest-stat-num">${f.footfall}</div>
              <div class="fest-stat-label">Footfall</div>
            </div>
            <div class="fest-stat">
              <div class="fest-stat-num">${f.sponsors_count}</div>
              <div class="fest-stat-label">Sponsors</div>
            </div>
            <button class="expand-btn" onclick="toggleFest('${f.id}')">+</button>
          </div>
        </div>
        <div class="fest-detail" id="fd-${f.id}">
          <div class="year-tabs" id="yt-${f.id}">
            ${yearKeys.map((yr, i) => `
              <button class="year-tab ${i === 0 ? 'active' : ''}"
                onclick="switchYear('${f.id}', '${yr}', this)">${yr}</button>
            `).join('')}
          </div>
          <div class="sponsors-grid" id="sg-${f.id}">
            ${renderSponsors(f.years[firstYear])}
          </div>
        </div>
      </div>
    `
  }).join('')
}

function renderSponsors(sponsors) {
  if (!sponsors || !sponsors.length) {
    return `<p style="color:var(--muted);font-size:13px;padding:10px 0">No sponsors listed.</p>`
  }
  return sponsors.map(s => `
    <div class="sponsor-card">
      <div class="sponsor-tier tier-${s.tier}">${s.tier}</div>
      <div class="sponsor-name">${s.name}</div>
      <div class="sponsor-category">${s.category}</div>
    </div>
  `).join('')
}

function toggleFest(id) {
  document.getElementById(`fi-${id}`).classList.toggle('expanded')
}

function switchYear(festId, year, btn) {
  document.querySelectorAll(`#yt-${festId} .year-tab`).forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  const collegeId = document.getElementById('detailHero').dataset.collegeId
  const allFests  = Object.values(FEST_DATA[collegeId] || {}).flat()
  const fest      = allFests.find(f => f.id === festId)
  document.getElementById(`sg-${festId}`).innerHTML =
    fest ? renderSponsors(fest.years[year]) : ''
}


// ============================================================
//  NAVIGATION
// ============================================================

function goHome() {
  document.getElementById('homeView').classList.remove('hidden')
  document.getElementById('detailView').classList.remove('active')
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


// ============================================================
//  INIT
// ============================================================

renderColleges(COLLEGES)
renderUpcoming()