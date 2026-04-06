// ============================================================
//  CONFIG
// ============================================================
const API = "https://project-fextnexus.onrender.com"

// ============================================================
//  DATA
// ============================================================
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
// ============================================================
//  DATA
// ============================================================


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
  { date:'Mar 20-22, 2026', fest:'Engifest 2026',   college:'DTU',        type:'Cultural', seeking:true,  tags:['Cultural','50k+ footfall'] },
  { date:'Apr 4–6, 2026',   fest:'Odyssey 2026',    college:'IIIT Delhi', type:'Cultural',        seeking:true,  tags:['Cultural','15k footfall'] },
  { date:'Apr 11–13, 2026', fest:'Moksha',       college:'NSUT',       type:'Cultural Fest',       seeking:false, tags:['Cultural','30k footfall'] },
  { date:'Apr 18–20, 2026', fest:'Crossroads 2026', college:'SRCC',       type:'Cultural',        seeking:true,  tags:['Cultural'] },
  { date:'May 2–4, 2026',   fest:'Rendezvous 2026', college:'IIT Delhi',  type:'Cultural',        seeking:false,  tags:['Cultural','60k+ footfall'] },
  { date:'April 9–11, 2026',  fest:'Tarang 2026',     college:'LSR',        type:'Cultural',        seeking:true, tags:['Cultural',"Women's College"] },
]

const TYPE_BADGE = {
  iit:'badge-iit', du:'badge-du', nit:'badge-nit', iiit:'badge-iiit', state:'badge-state',
}

let currentFilter = 'all'

// ============================================================
//  MODAL STYLES — injected into page head
// ============================================================

;(function injectStyles() {
  const s = document.createElement('style')
  s.textContent = `
    .fn-overlay {
      display:none; position:fixed; inset:0; z-index:999;
      background:rgba(0,0,0,0.7); backdrop-filter:blur(4px);
      align-items:center; justify-content:center;
    }
    .fn-overlay.open { display:flex; }
    .fn-modal {
      background:#111118; border:1px solid rgba(255,255,255,0.1);
      border-radius:20px; padding:36px; width:100%; max-width:520px;
      max-height:90vh; overflow-y:auto; position:relative;
      animation:modalIn 0.25s ease;
    }
    @keyframes modalIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
    .fn-modal h2 { font-family:'Syne',sans-serif; font-size:22px; font-weight:800; letter-spacing:-0.5px; margin-bottom:6px; color:#f0eff8; }
    .fn-modal p  { font-size:13px; color:#7c7b8a; margin-bottom:24px; line-height:1.6; }
    .fn-modal label { display:block; font-size:12px; color:#7c7b8a; margin-bottom:6px; }
    .fn-modal input, .fn-modal select, .fn-modal textarea {
      width:100%; background:#1a1a24; border:1px solid rgba(255,255,255,0.08);
      border-radius:10px; padding:10px 14px; color:#f0eff8;
      font-family:'DM Sans',sans-serif; font-size:14px;
      outline:none; margin-bottom:16px; transition:border-color 0.2s;
      box-sizing:border-box;
    }
    .fn-modal input:focus, .fn-modal select:focus, .fn-modal textarea:focus { border-color:rgba(255,255,255,0.2); }
    .fn-modal select option { background:#1a1a24; }
    .fn-modal textarea { resize:vertical; min-height:80px; }
    .fn-modal .row2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .fn-btn-primary {
      width:100%; padding:12px; background:#6c63ff; color:#fff;
      border:none; border-radius:10px; font-family:'DM Sans',sans-serif;
      font-size:14px; font-weight:500; cursor:pointer; transition:opacity 0.2s;
      margin-top:4px;
    }
    .fn-btn-primary:hover { opacity:0.88; }
    .fn-close {
      position:absolute; top:16px; right:16px; background:rgba(255,255,255,0.06);
      border:none; color:#7c7b8a; width:30px; height:30px; border-radius:8px;
      cursor:pointer; font-size:16px; display:flex; align-items:center; justify-content:center;
      transition:background 0.2s;
    }
    .fn-close:hover { background:rgba(255,255,255,0.12); }
    .fn-success { text-align:center; padding:20px 0; }
    .fn-success .fn-check { font-size:48px; margin-bottom:12px; }
    .fn-success h3 { font-family:'Syne',sans-serif; font-size:18px; font-weight:700; color:#f0eff8; margin-bottom:8px; }
    .fn-success p  { font-size:13px; color:#7c7b8a; }
    .sponsor-fest-card {
      background:#1a1a24; border:1px solid rgba(255,255,255,0.07);
      border-radius:14px; padding:20px; margin-bottom:12px; cursor:pointer;
      transition:border-color 0.2s, transform 0.2s;
    }
    .sponsor-fest-card:hover { border-color:rgba(108,99,255,0.4); transform:translateY(-2px); }
    .sponsor-fest-card .sf-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
    .sponsor-fest-card .sf-name { font-family:'Syne',sans-serif; font-size:16px; font-weight:700; color:#f0eff8; }
    .sponsor-fest-card .sf-college { font-size:12px; color:#7c7b8a; margin-top:2px; }
    .sponsor-fest-card .sf-date { font-size:11px; color:#6c63ff; font-weight:600; text-transform:uppercase; letter-spacing:0.5px; }
    .sponsor-fest-card .sf-tags { display:flex; gap:6px; flex-wrap:wrap; margin-top:10px; }
    .sponsor-fest-card .sf-tag { font-size:11px; padding:2px 8px; border-radius:6px; background:rgba(255,255,255,0.05); color:#7c7b8a; }
    .sponsor-fest-card .sf-seeking { display:inline-flex; align-items:center; gap:4px; font-size:11px; font-weight:600; color:#43e8c0; background:rgba(67,232,192,0.08); padding:3px 9px; border-radius:6px; }
    .sponsor-fest-card .sf-dot { width:5px; height:5px; background:#43e8c0; border-radius:50%; animation:pulse 1.5s ease-in-out infinite; }
    .sponsor-view-header { display:flex; align-items:center; gap:12px; margin-bottom:24px; }
    .sponsor-view-back { background:rgba(255,255,255,0.06); border:none; color:#7c7b8a; padding:8px 14px; border-radius:8px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:13px; transition:all 0.2s; }
    .sponsor-view-back:hover { background:rgba(255,255,255,0.1); color:#f0eff8; }
    .sponsor-view-title { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; color:#f0eff8; letter-spacing:-0.5px; }
    .empty-state { text-align:center; padding:60px 20px; color:#7c7b8a; font-size:14px; }
  `
  document.head.appendChild(s)
})()

// ============================================================
//  HTML MODALS — injected into body
// ============================================================

;(function injectModals() {
  document.body.insertAdjacentHTML('beforeend', `

    <!-- LIST YOUR FEST MODAL -->
    <div class="fn-overlay" id="listFestOverlay" onclick="closeModal('listFestOverlay')">
      <div class="fn-modal" onclick="event.stopPropagation()">
        <button class="fn-close" onclick="closeModal('listFestOverlay')">✕</button>
        <h2>List your fest</h2>
        <p>Add your college fest to FestNexus and connect with sponsors actively looking for opportunities.</p>
        <div id="listFestForm">
          <div class="row2">
            <div>
              <label>Fest name *</label>
              <input type="text" id="lf-name" placeholder="e.g. Engifest 2026">
            </div>
            <div>
              <label>College *</label>
              <input type="text" id="lf-college" placeholder="e.g. DTU">
            </div>
          </div>
          <div class="row2">
            <div>
              <label>Fest type *</label>
              <select id="lf-type">
                <option value="">Select type</option>
                <option value="cultural">Cultural</option>
                <option value="tech">Technical</option>
                <option value="sports">Sports</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Expected footfall</label>
              <input type="text" id="lf-footfall" placeholder="e.g. 20,000+">
            </div>
          </div>
          <div class="row2">
            <div>
              <label>Fest date *</label>
              <input type="text" id="lf-date" placeholder="e.g. Mar 20–22, 2026">
            </div>
            <div>
              <label>Coordinator email *</label>
              <input type="email" id="lf-email" placeholder="you@college.edu">
            </div>
          </div>
          <label>What are you looking for from sponsors?</label>
          <textarea id="lf-desc" placeholder="e.g. Title sponsor for main stage, food & beverage partners, media coverage..."></textarea>
          <label>Are you currently seeking sponsors?</label>
          <select id="lf-seeking">
            <option value="yes">Yes — actively looking</option>
            <option value="no">No — just listing for visibility</option>
          </select>
          <button class="fn-btn-primary" onclick="submitListFest()">Submit fest →</button>
        </div>
        <div class="fn-success" id="listFestSuccess" style="display:none">
          <div class="fn-check">🎉</div>
          <h3>Fest listed successfully!</h3>
          <p>Your fest is now visible to companies and startups looking to sponsor. We'll notify you when someone shows interest.</p>
        </div>
      </div>
    </div>

    <!-- SPONSOR CONNECT MODAL -->
    <div class="fn-overlay" id="sponsorConnectOverlay" onclick="closeModal('sponsorConnectOverlay')">
      <div class="fn-modal" onclick="event.stopPropagation()">
        <button class="fn-close" onclick="closeModal('sponsorConnectOverlay')">✕</button>
        <h2 id="sc-title">Connect as sponsor</h2>
        <p id="sc-subtitle">Fill in your details and the fest team will reach out to you within 48 hours.</p>
        <div id="sponsorConnectForm">
          <div class="row2">
            <div>
              <label>Company / Brand name *</label>
              <input type="text" id="sc-company" placeholder="e.g. Acme Startup">
            </div>
            <div>
              <label>Industry</label>
              <input type="text" id="sc-industry" placeholder="e.g. Fintech, FMCG">
            </div>
          </div>
          <div class="row2">
            <div>
              <label>Contact person *</label>
              <input type="text" id="sc-name" placeholder="Your name">
            </div>
            <div>
              <label>Email *</label>
              <input type="email" id="sc-email" placeholder="you@company.com">
            </div>
          </div>
          <label>Sponsorship budget (approx.)</label>
          <select id="sc-budget">
            <option value="">Select range</option>
            <option>Under ₹50,000</option>
            <option>₹50,000 – ₹2,00,000</option>
            <option>₹2,00,000 – ₹10,00,000</option>
            <option>₹10,00,000+</option>
          </select>
          <label>Message to fest team</label>
          <textarea id="sc-message" placeholder="What kind of sponsorship are you interested in? Any specific requirements?"></textarea>
          <button class="fn-btn-primary" onclick="submitSponsorConnect()">Send enquiry →</button>
        </div>
        <div class="fn-success" id="sponsorConnectSuccess" style="display:none">
          <div class="fn-check">✅</div>
          <h3>Enquiry sent!</h3>
          <p>The fest coordinator will reach out to you within 48 hours. Keep an eye on your inbox.</p>
        </div>
      </div>
    </div>

    <!-- FESTS TO SPONSOR VIEW -->
    <div class="fn-overlay" id="sponsorViewOverlay" onclick="closeModal('sponsorViewOverlay')">
      <div class="fn-modal" style="max-width:640px" onclick="event.stopPropagation()">
        <button class="fn-close" onclick="closeModal('sponsorViewOverlay')">✕</button>
        <h2>Fests seeking sponsors</h2>
        <p>These fests are actively looking for sponsors right now. Click any to send an enquiry.</p>
        <div id="sponsorFestList"></div>
      </div>
    </div>

  `)
})()

// ============================================================
//  MODAL HELPERS
// ============================================================

function openModal(id) {
  document.getElementById(id).classList.add('open')
  document.body.style.overflow = 'hidden'
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open')
  document.body.style.overflow = ''
}

function openListFest() {
  document.getElementById('listFestForm').style.display = 'block'
  document.getElementById('listFestSuccess').style.display = 'none'
  openModal('listFestOverlay')
}

function submitListFest() {
  const name    = document.getElementById('lf-name').value.trim()
  const college = document.getElementById('lf-college').value.trim()
  const type    = document.getElementById('lf-type').value
  const date    = document.getElementById('lf-date').value.trim()
  const email   = document.getElementById('lf-email').value.trim()
  if (!name || !college || !type || !date || !email) {
    alert('Please fill in all required fields.')
    return
  }
  // In real app: POST to /api/fests with this data
  document.getElementById('listFestForm').style.display = 'none'
  document.getElementById('listFestSuccess').style.display = 'block'
}

let currentSponsorFest = null

function openSponsorConnect(festName, collegeName) {
  currentSponsorFest = { festName, collegeName }
  document.getElementById('sc-title').textContent = `Sponsor ${festName}`
  document.getElementById('sc-subtitle').textContent = `Connect with the ${festName} team at ${collegeName}. Fill in your details and they'll reach out within 48 hours.`
  document.getElementById('sponsorConnectForm').style.display = 'block'
  document.getElementById('sponsorConnectSuccess').style.display = 'none'
  // clear fields
  ;['sc-company','sc-industry','sc-name','sc-email','sc-message'].forEach(id => {
    document.getElementById(id).value = ''
  })
  document.getElementById('sc-budget').value = ''
  openModal('sponsorConnectOverlay')
}

function submitSponsorConnect() {
  const company = document.getElementById('sc-company').value.trim()
  const name    = document.getElementById('sc-name').value.trim()
  const email   = document.getElementById('sc-email').value.trim()
  if (!company || !name || !email) {
    alert('Please fill in company name, your name and email.')
    return
  }
  // In real app: POST to /api/sponsors/enquiry
  document.getElementById('sponsorConnectForm').style.display = 'none'
  document.getElementById('sponsorConnectSuccess').style.display = 'block'
}

function openSponsorView() {
  const seeking = UPCOMING.filter(u => u.seeking)
  const list = document.getElementById('sponsorFestList')
  if (!seeking.length) {
    list.innerHTML = `<div class="empty-state">No fests are actively seeking sponsors right now.<br>Check back soon!</div>`
  } else {
    list.innerHTML = seeking.map(u => `
      <div class="sponsor-fest-card" onclick="openSponsorConnect('${u.fest}', '${u.college}'); closeModal('sponsorViewOverlay')">
        <div class="sf-header">
          <div>
            <div class="sf-name">${u.fest}</div>
            <div class="sf-college">${u.college} · ${u.type}</div>
          </div>
          <div class="sf-date">${u.date}</div>
        </div>
        <div class="sf-tags">
          ${u.tags.map(t => `<span class="sf-tag">${t}</span>`).join('')}
          <span class="sf-seeking"><span class="sf-dot"></span> Seeking sponsors</span>
        </div>
      </div>
    `).join('')
  }
  openModal('sponsorViewOverlay')
}

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
//  UPCOMING — with sponsor connect buttons
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
      ${u.seeking ? `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-top:12px; flex-wrap:wrap; gap:8px;">
          <div class="seeking-badge"><span class="seeking-dot"></span> Seeking sponsors</div>
          <button onclick="openSponsorConnect('${u.fest}','${u.college}')"
            style="background:#6c63ff;color:#fff;border:none;padding:6px 14px;border-radius:8px;
                   font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;cursor:pointer;
                   transition:opacity 0.2s;" onmouseover="this.style.opacity=0.85" onmouseout="this.style.opacity=1">
            Connect →
          </button>
        </div>
      ` : ''}
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

function getCurrentCollegeId() {
  return document.getElementById('detailHero').dataset.collegeId || ''
}

function switchTab(type, btn) {
  document.querySelectorAll('.fest-tab').forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  const collegeId = getCurrentCollegeId()
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
            <button class="email-template-btn" onclick="openEmailTemplate('${f.id}'); event.stopPropagation()">
              ✉️ Email template
            </button>
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

// ============================================================
//  LINKEDIN SEARCH MAP
// ============================================================

const SPONSOR_LINKEDIN = {
  'Razorpay':       'https://www.linkedin.com/company/razorpay',
  'PhonePe':        'https://www.linkedin.com/company/phonepe-internet',
  'Cred':           'https://www.linkedin.com/company/cred-club',
  'Paytm':          'https://www.linkedin.com/company/paytm',
  'MakeMyTrip':     'https://www.linkedin.com/company/makemytrip',
  'Juspay':         'https://www.linkedin.com/company/juspay',
  'Meesho':         'https://www.linkedin.com/company/meesho',
  'Unacademy':      'https://www.linkedin.com/company/unacademy',
  'Coding Ninjas':  'https://www.linkedin.com/company/coding-ninjas',
  'GeeksforGeeks':  'https://www.linkedin.com/company/geeksforgeeks',
  'Course Hero':    'https://www.linkedin.com/company/course-hero',
  'Next IAS':       'https://www.linkedin.com/company/next-ias',
  'Vision IAS':     'https://www.linkedin.com/company/vision-ias',
  'Internshala':    'https://www.linkedin.com/company/internshala',
  'Unstop':         'https://www.linkedin.com/company/unstop',
  'Ola':            'https://www.linkedin.com/company/olacabs',
  'Rapido':         'https://www.linkedin.com/company/rapido-bike-taxi',
  'Freedo':         'https://www.linkedin.com/company/freedo-rentals',
  'AbhiBus':        'https://www.linkedin.com/company/abhibus',
  'Swiggy':         'https://www.linkedin.com/company/swiggy',
  'Zomato':         'https://www.linkedin.com/company/zomato',
  'Eazydiner':      'https://www.linkedin.com/company/eazydiner',
  'Nykaa':          'https://www.linkedin.com/company/nykaa',
  'Myntra':         'https://www.linkedin.com/company/myntra',
  'Bewakoof':       'https://www.linkedin.com/company/bewakoof-com',
  'Mamaearth':      'https://www.linkedin.com/company/mamaearth',
  'Clovia':         'https://www.linkedin.com/company/clovia',
  'Plum':           'https://www.linkedin.com/company/plum-goodness',
  'Beardo':         'https://www.linkedin.com/company/beardo',
  'Snitch':         'https://www.linkedin.com/company/snitch-co',
  'boAt':           'https://www.linkedin.com/company/boat-lifestyle',
  'Noise':          'https://www.linkedin.com/company/go-noise',
  'Boult Audio':    'https://www.linkedin.com/company/boult-audio',
  'Portronics':     'https://www.linkedin.com/company/portronics',
  'GitHub':         'https://www.linkedin.com/company/github',
  'Postman':        'https://www.linkedin.com/company/postman-platform',
  'JetBrains':      'https://www.linkedin.com/company/jetbrains',
  'Atlassian':      'https://www.linkedin.com/company/atlassian',
  'Decathlon':      'https://www.linkedin.com/company/decathlon',
  'Sparx':          'https://www.linkedin.com/company/sparx-shoes',
  'Spotify':        'https://www.linkedin.com/company/spotify',
  'JioSaavn':       'https://www.linkedin.com/company/jiosaavn',
  'WinZo':          'https://www.linkedin.com/company/winzo-games',
  'Chaupal':        'https://www.linkedin.com/company/chaupal-ott',
  'StockGro':       'https://www.linkedin.com/company/stockgro',
  'MuscleBlaze':    'https://www.linkedin.com/company/muscleblaze',
  'Alpino':         'https://www.linkedin.com/company/alpino-health-foods',
  'Max Protein':    'https://www.linkedin.com/company/max-protein',
  'Fastrack':       'https://www.linkedin.com/company/fastrack',
  'Dream11':        'https://www.linkedin.com/company/dream11',
  'Dunzo':          'https://www.linkedin.com/company/dunzo',
  'Wakefit':        'https://www.linkedin.com/company/wakefit',
  'Lenskart':       'https://www.linkedin.com/company/lenskart',
  'Groww':          'https://www.linkedin.com/company/groww',
  'Zepto':          'https://www.linkedin.com/company/zepto-app',
  'BlinkIt':        'https://www.linkedin.com/company/blinkit',
  'Ola Electric':   'https://www.linkedin.com/company/ola-electric',
  'Bigmuscles Nutrition': 'https://www.linkedin.com/company/bigmuscles-nutrition',
  'Hover Robotix':  'https://www.linkedin.com/company/hover-robotix',
  'BoostGrad':      'https://www.linkedin.com/company/boostgrad',
}

function getLinkedInUrl(companyName) {
  if (SPONSOR_LINKEDIN[companyName]) return SPONSOR_LINKEDIN[companyName]
  const q = encodeURIComponent(`marketing head ${companyName} India`)
  return `https://www.linkedin.com/search/results/people/?keywords=${q}`
}

function renderSponsors(sponsors) {
  if (!sponsors || !sponsors.length) {
    return `<p style="color:var(--muted);font-size:13px;padding:10px 0">No sponsors listed.</p>`
  }
  return sponsors.map(s => {
    const linkedinUrl = getLinkedInUrl(s.name)
    const skipLinkedIn = ['Google','Microsoft','Amazon','Apple','Meta','Samsung','Intel','IBM','Qualcomm','Goldman Sachs','Deloitte','EY','KPMG','PwC','Jio','Reliance Jio','Pepsi','Coca-Cola','Nestle','Nike','Adidas','Puma','HDFC Bank','ICICI Bank','Audi','BMW','Mercedes','Honda','Hero','Gatorade'].includes(s.name)
    return `
      <div class="sponsor-card">
        <div class="sponsor-tier tier-${s.tier}">${s.tier}</div>
        <div class="sponsor-name">${s.name}</div>
        <div class="sponsor-card-footer">
          <div class="sponsor-category">${s.category}</div>
          <button class="contacts-btn" onclick="openContactsPanel('${s.name.replace(/'/g,"\\'")}'); event.stopPropagation()">👤 Contacts</button>
          ${!skipLinkedIn ? `
            <a class="linkedin-btn" href="${linkedinUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          ` : ''}
        </div>
      </div>
    `
  }).join('')
}

function toggleFest(id) {
  document.getElementById(`fi-${id}`).classList.toggle('expanded')
}

function switchYear(festId, year, btn) {
  document.querySelectorAll(`#yt-${festId} .year-tab`).forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  const collegeId = getCurrentCollegeId()
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
//  CROSS-COLLEGE SPONSOR SEARCH
// ============================================================

let _sponsorIndex = null

function buildSponsorIndex() {
  if (_sponsorIndex) return _sponsorIndex
  const idx = {}
  for (const [colId, types] of Object.entries(FEST_DATA)) {
    const col = COLLEGES.find(c => c.id === colId)
    for (const fests of Object.values(types)) {
      for (const fest of fests) {
        for (const [yr, sponsors] of Object.entries(fest.years)) {
          const year = parseInt(yr)
          if (year < 2023) continue           // only show 2023–2025
          for (const s of sponsors) {
            if (!idx[s.name]) idx[s.name] = []
            idx[s.name].push({
              colId,
              colShort:  col?.short  || colId.toUpperCase(),
              colColor:  col?.color  || '#aaa',
              festId:    fest.id,
              festName:  fest.name,
              year,
              tier:      s.tier,
              category:  s.category,
            })
          }
        }
      }
    }
  }
  for (const v of Object.values(idx)) v.sort((a, b) => b.year - a.year)
  _sponsorIndex = idx
  return idx
}

function doSponsorSearch() {
  const q   = (document.getElementById('ssInput')?.value || '').trim()
  const res = document.getElementById('ssResults')
  if (!res) return

  if (q.length < 2) {
    res.innerHTML = `<div class="ss-hint">Start typing a company name — searches across every college & fest</div>`
    return
  }

  const idx     = buildSponsorIndex()
  const ql      = q.toLowerCase()
  const TORDER  = ['title','gold','silver','bronze','partner','associate']
  const matches = Object.entries(idx)
    .filter(([name]) => name.toLowerCase().includes(ql))
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 20)

  if (!matches.length) {
    res.innerHTML = `<div class="ss-hint">No results for "<strong>${q}</strong>" — try a shorter name</div>`
    return
  }

  res.innerHTML = matches.map(([name, apps]) => {
    const topTier = TORDER.find(t => apps.some(a => a.tier === t)) || apps[0].tier
    const colleges = [...new Set(apps.map(a => a.colShort))].join(', ')
    const liUrl   = getLinkedInUrl(name)
    const safeName = name.replace(/\\/g,'\\\\').replace(/'/g,"\\'")
    return `
      <div class="ss-card">
        <div class="ss-card-head">
          <div class="ss-card-info">
            <div class="ss-cname">${name}</div>
            <div class="ss-cmeta">${apps[0].category || '—'} &nbsp;·&nbsp; ${apps.length} appearance${apps.length > 1 ? 's' : ''} &nbsp;·&nbsp; ${colleges}</div>
          </div>
          <div class="ss-card-actions">
            <span class="sponsor-tier tier-${topTier}" style="font-size:10px">${topTier}</span>
            <button class="ss-contacts-btn" onclick="openContactsPanel('${safeName}')">👤 Contacts</button>
            <a class="linkedin-btn" href="${liUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div class="ss-rows">
          ${apps.map(a => `
            <div class="ss-row" onclick="openCollege('${a.colId}')">
              <span class="ss-col" style="color:${a.colColor}">${a.colShort}</span>
              <span class="ss-fest">${a.festName}</span>
              <span class="ss-yr">${a.year}</span>
              <span class="sponsor-tier tier-${a.tier}" style="font-size:9px;padding:2px 6px">${a.tier}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `
  }).join('')
}

function toggleSponsorSearch(btn) {
  const view    = document.getElementById('sponsorSearchView')
  const grid    = document.getElementById('collegesGrid')
  const filters = document.getElementById('filtersRow')
  const isOpen  = view.classList.contains('active')

  if (!isOpen) {
    view.classList.add('active')
    grid?.classList.add('hidden')
    filters?.classList.add('hidden')
    btn.textContent = '← Back to colleges'
    buildSponsorIndex()   // warm the index
    document.getElementById('ssInput')?.focus()
    doSponsorSearch()
  } else {
    view.classList.remove('active')
    grid?.classList.remove('hidden')
    filters?.classList.remove('hidden')
    btn.textContent = '🔍 Search sponsors'
  }
}


// ============================================================
//  SPONSOR CONTACT DATABASE
// ============================================================

// Seed of known / publicly available partnership contacts
const SEED_CONTACTS = {
  'Razorpay':    [{ name: 'Partnerships Team',    role: 'Partnerships',       contact: 'partnerships@razorpay.com',  type: 'email', verified: true  }],
  'Swiggy':      [{ name: 'Brand Solutions',      role: 'Marketing',          contact: 'brandsolutions@swiggy.in',   type: 'email', verified: true  }],
  'Zomato':      [{ name: 'Campus Team',          role: 'Campus Outreach',    contact: 'college@zomato.com',         type: 'email', verified: true  }],
  'Internshala': [{ name: 'Campus Team',          role: 'Outreach',           contact: 'campus@internshala.com',     type: 'email', verified: true  }],
  'Unstop':      [{ name: 'Partnerships',         role: 'Campus',             contact: 'hello@unstop.com',           type: 'email', verified: true  }],
  'Dream11':     [{ name: 'Brand Team',           role: 'Sponsorships',       contact: 'sponsorships@dream11.com',   type: 'email', verified: false }],
  'boAt':        [{ name: 'Marketing',            role: 'Brand Partnerships', contact: 'https://www.linkedin.com/company/boat-lifestyle', type: 'linkedin', verified: false }],
  'PhonePe':     [{ name: 'Brand Partnerships',   role: 'Marketing',          contact: 'https://www.linkedin.com/company/phonepe-internet', type: 'linkedin', verified: false }],
  'Cred':        [{ name: 'Partnerships',         role: 'Brand',              contact: 'https://www.linkedin.com/company/cred-club',  type: 'linkedin', verified: false }],
  'GeeksforGeeks':[{ name: 'Campus Team',         role: 'Outreach',           contact: 'campus@geeksforgeeks.org',   type: 'email', verified: true  }],
}

async function fetchContacts(company) {
  try {
    const r = await fetch(`${API}/api/contacts?company=${encodeURIComponent(company)}`)
    if (!r.ok) return []
    return await r.json()
  } catch { return [] }
}

async function openContactsPanel(company) {
  const panel = document.getElementById('contactsPanel')
  const title = document.getElementById('contactsTitle')
  const list  = document.getElementById('contactsList')
  if (!panel) return

  title.textContent = company
  list.innerHTML = `<div class="ct-loading">Fetching contacts…</div>`
  panel.classList.add('open')
  document.body.style.overflow = 'hidden'

  // reset submit form
  ;['ctName','ctRole','ctContact'].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.value = ''
  })
  const msg = document.getElementById('ctMsg')
  if (msg) msg.style.display = 'none'

  // merge seed + backend
  const seed   = (SEED_CONTACTS[company] || []).map(c => ({ ...c, source: 'seed' }))
  const remote = await fetchContacts(company)
  const all    = [...seed, ...remote]

  if (!all.length) {
    list.innerHTML = `<div class="ct-empty">No contacts yet — be the first to add one below!</div>`
    return
  }

  list.innerHTML = all.map(c => `
    <div class="ct-card">
      <div class="ct-card-top">
        <div>
          <div class="ct-name">${c.name}</div>
          <div class="ct-role">${c.role || '—'}</div>
        </div>
        ${c.verified ? `<span class="ct-badge">✓ verified</span>` : `<span class="ct-badge ct-badge-unv">unverified</span>`}
      </div>
      <div class="ct-contact">
        ${c.type === 'email'
          ? `<a href="mailto:${c.contact}">✉ ${c.contact}</a>`
          : `<a href="${c.contact}" target="_blank" rel="noopener">🔗 LinkedIn profile</a>`}
      </div>
    </div>
  `).join('')
}

function closeContactsPanel() {
  document.getElementById('contactsPanel')?.classList.remove('open')
  document.body.style.overflow = ''
}

async function submitContactForm() {
  const company = document.getElementById('contactsTitle')?.textContent
  const name    = document.getElementById('ctName').value.trim()
  const role    = document.getElementById('ctRole').value.trim()
  const contact = document.getElementById('ctContact').value.trim()
  const type    = document.getElementById('ctType').value
  const msg     = document.getElementById('ctMsg')

  if (!name || !contact) {
    msg.textContent = 'Please fill in at least name and contact.'
    msg.style.cssText = 'display:block;color:#ff6584'
    return
  }

  try {
    const r = await fetch(`${API}/api/contacts`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ company, name, role, contact, type }),
    })
    if (r.ok) {
      msg.textContent = '✓ Submitted! It will appear after a quick review.'
      msg.style.cssText = 'display:block;color:#43e8c0'
    } else {
      throw new Error()
    }
  } catch {
    msg.textContent = 'Could not submit — try again.'
    msg.style.cssText = 'display:block;color:#ff6584'
  }
}


// ============================================================
//  EMAIL TEMPLATE GENERATOR
// ============================================================

function openEmailTemplate(festId) {
  const collegeId = getCurrentCollegeId()
  const allFests  = Object.values(FEST_DATA[collegeId] || {}).flat()
  const fest      = allFests.find(f => f.id === festId)
  const college   = COLLEGES.find(c => c.id === collegeId)
  if (!fest || !college) return

  const latestYear   = Object.keys(fest.years).sort((a,b) => b-a)[0]
  const sponsors     = fest.years[latestYear] || []
  const titleSponsor = sponsors.find(s => s.tier === 'title')?.name || 'N/A'
  const goldSponsors = sponsors.filter(s => s.tier === 'gold').map(s => s.name).join(', ') || 'N/A'
  const totalSpons   = sponsors.length

  const subject = `Sponsorship Opportunity — ${fest.name} ${new Date().getFullYear()}, ${college.short} (${fest.footfall} footfall)`

  const body = `Subject: ${subject}

Hi [Marketing Head's Name],

I'm [Your Name], [Your Role] at ${college.name}. I'm reaching out regarding a sponsorship opportunity for ${fest.name} ${new Date().getFullYear()}.

About ${fest.name}:
• ${fest.tagline}
• Expected footfall: ${fest.footfall}
• College: ${college.name}, ${college.location}
• Established: ${college.established} | Students: ${college.students}

Past sponsors (${latestYear}):
• Title Sponsor: ${titleSponsor}
• Gold Sponsors: ${goldSponsors}
• Total sponsors: ${totalSpons}+

We have multiple sponsorship tiers available — Title, Gold, Silver, Bronze, and Associate — each with customised branding and engagement benefits. We would love to explore how [Company Name] can be a part of ${fest.name} this year.

Could we schedule a brief call to discuss further?

Looking forward to hearing from you.

Best regards,
[Your Name]
[Your Role] | ${fest.name} ${new Date().getFullYear()}
${college.name}
[Your Phone Number] | [Your Email]`

  document.getElementById('emailSubject').value = subject
  document.getElementById('emailBody').value = body
  document.getElementById('emailCopyMsg').style.display = 'none'
  document.getElementById('emailOverlay').classList.add('open')
  document.body.style.overflow = 'hidden'
}

function copyEmail(field) {
  const el = document.getElementById(field)
  navigator.clipboard.writeText(el.value).then(() => {
    const msg = document.getElementById('emailCopyMsg')
    msg.textContent = field === 'emailSubject' ? '✓ Subject copied!' : '✓ Email copied!'
    msg.style.display = 'block'
    setTimeout(() => msg.style.display = 'none', 2000)
  })
}

function closeEmailModal() {
  document.getElementById('emailOverlay').classList.remove('open')
  document.body.style.overflow = ''
}


// ============================================================
//  INJECT MODAL STYLES + HTML
// ============================================================

;(function injectUI() {
  const s = document.createElement('style')
  s.textContent = `
    .fn-overlay {
      display:none; position:fixed; inset:0; z-index:9999;
      background:rgba(0,0,0,0.75); backdrop-filter:blur(6px);
      align-items:center; justify-content:center; padding:16px;
    }
    .fn-overlay.open { display:flex; }
    .fn-modal {
      background:#111118; border:1px solid rgba(255,255,255,0.1);
      border-radius:20px; padding:32px; width:100%; max-width:580px;
      max-height:90vh; overflow-y:auto; position:relative;
      animation:modalIn 0.22s ease;
    }
    @keyframes modalIn { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
    .fn-modal h2 { font-family:'Syne',sans-serif; font-size:20px; font-weight:800; letter-spacing:-0.5px; margin-bottom:6px; color:#f0eff8; }
    .fn-modal .fn-sub { font-size:12px; color:#7c7b8a; margin-bottom:20px; line-height:1.6; }
    .fn-modal label { display:block; font-size:11px; color:#7c7b8a; margin-bottom:5px; text-transform:uppercase; letter-spacing:0.05em; font-weight:500; }
    .fn-modal input[type=text], .fn-modal textarea {
      width:100%; background:#1a1a24; border:1px solid rgba(255,255,255,0.08);
      border-radius:10px; padding:10px 14px; color:#f0eff8;
      font-family:'DM Sans',sans-serif; font-size:13px; outline:none;
      margin-bottom:4px; box-sizing:border-box; transition:border-color 0.2s;
    }
    .fn-modal textarea { min-height:300px; resize:vertical; font-size:12px; line-height:1.7; }
    .fn-modal input[type=text]:focus, .fn-modal textarea:focus { border-color:rgba(108,99,255,0.5); }
    .fn-copy-btn {
      background:rgba(108,99,255,0.15); color:#a09aff; border:1px solid rgba(108,99,255,0.3);
      padding:5px 14px; border-radius:7px; font-family:'DM Sans',sans-serif;
      font-size:12px; font-weight:500; cursor:pointer; margin-bottom:16px;
      transition:background 0.2s;
    }
    .fn-copy-btn:hover { background:rgba(108,99,255,0.25); }
    .fn-copy-msg { font-size:12px; color:#43e8c0; display:none; margin-bottom:12px; }
    .fn-close-btn {
      position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.06);
      border:none; color:#7c7b8a; width:28px; height:28px; border-radius:7px;
      cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center;
      transition:background 0.2s;
    }
    .fn-close-btn:hover { background:rgba(255,255,255,0.12); color:#f0eff8; }
    .email-template-btn {
      display:inline-flex; align-items:center; gap:5px;
      background:rgba(67,232,192,0.1); color:#43e8c0;
      border:1px solid rgba(67,232,192,0.25); padding:5px 12px;
      border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12px;
      font-weight:500; cursor:pointer; transition:background 0.2s; margin-left:8px;
    }
    .email-template-btn:hover { background:rgba(67,232,192,0.18); }
    .linkedin-btn {
      display:inline-flex; align-items:center; gap:4px;
      background:rgba(10,102,194,0.12); color:#6ba3d6;
      border:1px solid rgba(10,102,194,0.25); padding:3px 9px;
      border-radius:6px; font-size:10px; font-weight:500; cursor:pointer;
      text-decoration:none; transition:background 0.2s; white-space:nowrap;
    }
    .linkedin-btn:hover { background:rgba(10,102,194,0.22); }
    .sponsor-card-footer { display:flex; align-items:center; justify-content:space-between; margin-top:6px; gap:6px; flex-wrap:wrap; }
    .contacts-btn {
      display:inline-flex; align-items:center; gap:4px;
      background:rgba(255,183,77,0.1); color:#ffb74d;
      border:1px solid rgba(255,183,77,0.25); padding:3px 9px;
      border-radius:6px; font-size:10px; font-weight:500; cursor:pointer;
      transition:background 0.2s; white-space:nowrap;
    }
    .contacts-btn:hover { background:rgba(255,183,77,0.2); }

    /* ── Sponsor search view ── */
    #sponsorSearchView { display:none; padding:0 0 40px; }
    #sponsorSearchView.active { display:block; }
    .ss-search-wrap { position:relative; margin-bottom:24px; }
    #ssInput {
      width:100%; background:#1a1a24; border:1px solid rgba(255,255,255,0.1);
      border-radius:14px; padding:14px 48px 14px 18px; color:#f0eff8;
      font-family:'DM Sans',sans-serif; font-size:15px; outline:none;
      transition:border-color 0.2s; box-sizing:border-box;
    }
    #ssInput:focus { border-color:rgba(108,99,255,0.5); }
    .ss-search-icon {
      position:absolute; right:16px; top:50%; transform:translateY(-50%);
      color:#7c7b8a; font-size:18px; pointer-events:none;
    }
    .ss-hint { padding:40px 0; text-align:center; color:var(--muted,#7c7b8a); font-size:14px; line-height:1.6; }
    .ss-card {
      background:#111118; border:1px solid rgba(255,255,255,0.07);
      border-radius:16px; padding:20px; margin-bottom:14px; transition:border-color 0.2s;
    }
    .ss-card:hover { border-color:rgba(255,255,255,0.14); }
    .ss-card-head {
      display:flex; align-items:flex-start; justify-content:space-between;
      gap:12px; margin-bottom:14px; flex-wrap:wrap;
    }
    .ss-cname { font-size:16px; font-weight:700; color:#f0eff8; margin-bottom:3px; }
    .ss-cmeta { font-size:12px; color:#7c7b8a; }
    .ss-card-actions { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
    .ss-contacts-btn {
      display:inline-flex; align-items:center; gap:4px;
      background:rgba(255,183,77,0.1); color:#ffb74d;
      border:1px solid rgba(255,183,77,0.25); padding:4px 10px;
      border-radius:7px; font-size:11px; font-weight:500; cursor:pointer; transition:background 0.2s;
    }
    .ss-contacts-btn:hover { background:rgba(255,183,77,0.2); }
    .ss-rows { display:flex; flex-direction:column; gap:6px; }
    .ss-row {
      display:flex; align-items:center; gap:10px; padding:8px 12px;
      border-radius:10px; background:rgba(255,255,255,0.03); cursor:pointer;
      transition:background 0.15s; flex-wrap:wrap;
    }
    .ss-row:hover { background:rgba(255,255,255,0.07); }
    .ss-col  { font-size:12px; font-weight:700; min-width:40px; }
    .ss-fest { font-size:12px; color:#c8c7d8; flex:1; }
    .ss-yr   { font-size:11px; color:#7c7b8a; }
    .ss-toggle-btn {
      display:inline-flex; align-items:center; gap:6px;
      background:rgba(108,99,255,0.1); color:#a09aff;
      border:1px solid rgba(108,99,255,0.25); padding:8px 16px;
      border-radius:10px; font-family:'DM Sans',sans-serif; font-size:13px;
      font-weight:500; cursor:pointer; transition:background 0.2s; margin-bottom:20px;
    }
    .ss-toggle-btn:hover { background:rgba(108,99,255,0.2); }

    /* ── Contacts slide panel ── */
    #contactsPanel {
      position:fixed; top:0; right:-440px; width:420px; max-width:100vw;
      height:100vh; background:#0e0e16; border-left:1px solid rgba(255,255,255,0.09);
      z-index:10000; overflow-y:auto; transition:right 0.3s ease;
      padding:28px 24px; box-sizing:border-box;
    }
    #contactsPanel.open { right:0; }
    .ct-backdrop {
      display:none; position:fixed; inset:0; z-index:9999;
      background:rgba(0,0,0,0.5); backdrop-filter:blur(3px);
    }
    .ct-backdrop.open { display:block; }
    .ct-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; }
    .ct-header h3 { font-family:'Syne',sans-serif; font-size:18px; font-weight:800; color:#f0eff8; }
    .ct-close {
      background:rgba(255,255,255,0.06); border:none; color:#7c7b8a;
      width:30px; height:30px; border-radius:8px; cursor:pointer; font-size:15px;
      display:flex; align-items:center; justify-content:center;
    }
    .ct-close:hover { background:rgba(255,255,255,0.12); color:#f0eff8; }
    .ct-subtitle { font-size:12px; color:#7c7b8a; margin-bottom:20px; }
    .ct-loading, .ct-empty { padding:24px 0; font-size:13px; color:#7c7b8a; text-align:center; }
    .ct-card {
      background:#1a1a24; border:1px solid rgba(255,255,255,0.07);
      border-radius:12px; padding:14px 16px; margin-bottom:10px;
    }
    .ct-card-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px; }
    .ct-name { font-size:14px; font-weight:600; color:#f0eff8; }
    .ct-role { font-size:12px; color:#7c7b8a; margin-top:2px; }
    .ct-badge {
      font-size:10px; font-weight:600; padding:2px 7px; border-radius:5px;
      background:rgba(67,232,192,0.12); color:#43e8c0; white-space:nowrap;
    }
    .ct-badge-unv { background:rgba(255,255,255,0.07); color:#7c7b8a; }
    .ct-contact { font-size:12px; margin-top:8px; }
    .ct-contact a { color:#a09aff; text-decoration:none; word-break:break-all; }
    .ct-contact a:hover { text-decoration:underline; }
    .ct-divider { border:none; border-top:1px solid rgba(255,255,255,0.07); margin:20px 0; }
    .ct-section-title {
      font-size:12px; font-weight:600; color:#7c7b8a;
      text-transform:uppercase; letter-spacing:0.05em; margin-bottom:12px;
    }
    .ct-form-field { margin-bottom:10px; }
    .ct-form-field label { display:block; font-size:11px; color:#7c7b8a; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.04em; }
    .ct-form-field input, .ct-form-field select {
      width:100%; background:#111118; border:1px solid rgba(255,255,255,0.08);
      border-radius:9px; padding:9px 12px; color:#f0eff8;
      font-family:'DM Sans',sans-serif; font-size:13px; outline:none;
      box-sizing:border-box; transition:border-color 0.2s;
    }
    .ct-form-field input:focus, .ct-form-field select:focus { border-color:rgba(108,99,255,0.45); }
    .ct-form-field select option { background:#1a1a24; }
    .ct-submit-btn {
      width:100%; padding:10px; background:rgba(108,99,255,0.15); color:#a09aff;
      border:1px solid rgba(108,99,255,0.3); border-radius:10px;
      font-family:'DM Sans',sans-serif; font-size:13px; font-weight:600;
      cursor:pointer; margin-top:4px; transition:background 0.2s;
    }
    .ct-submit-btn:hover { background:rgba(108,99,255,0.25); }
    #ctMsg { font-size:12px; margin-top:8px; display:none; }
  `
  document.head.appendChild(s)

  // ── Sponsor search toggle + view — injected before #collegesGrid ──
  const grid = document.getElementById('collegesGrid')
  if (grid) {
    grid.insertAdjacentHTML('beforebegin', `
      <button class="ss-toggle-btn" id="ssToggleBtn" onclick="toggleSponsorSearch(this)">
        🔍 Search sponsors
      </button>
      <div id="sponsorSearchView">
        <div class="ss-search-wrap">
          <input id="ssInput" type="text" placeholder="e.g. Razorpay, boAt, Nykaa, Decathlon…"
            oninput="doSponsorSearch()" autocomplete="off" spellcheck="false">
          <span class="ss-search-icon">🔍</span>
        </div>
        <div id="ssResults">
          <div class="ss-hint">Start typing a company name — searches across every college &amp; fest</div>
        </div>
      </div>
    `)
  }

  // ── Contacts panel + backdrop ──
  document.body.insertAdjacentHTML('beforeend', `
    <div class="ct-backdrop" id="ctBackdrop" onclick="closeContactsPanel()"></div>
    <div id="contactsPanel">
      <div class="ct-header">
        <h3 id="contactsTitle">Company</h3>
        <button class="ct-close" onclick="closeContactsPanel()">✕</button>
      </div>
      <div class="ct-subtitle">Known marketing &amp; sponsorship contacts</div>
      <div id="contactsList"></div>
      <hr class="ct-divider">
      <div class="ct-section-title">➕ Submit a contact</div>
      <p style="font-size:12px;color:#7c7b8a;margin-bottom:14px;line-height:1.6">
        Know someone at this company? Add their details — it helps every fest committee.
        Contacts are reviewed before going live.
      </p>
      <div class="ct-form-field">
        <label>Full name *</label>
        <input id="ctName" type="text" placeholder="e.g. Priya Sharma">
      </div>
      <div class="ct-form-field">
        <label>Role / title</label>
        <input id="ctRole" type="text" placeholder="e.g. Head of Brand Partnerships">
      </div>
      <div class="ct-form-field">
        <label>Contact type</label>
        <select id="ctType">
          <option value="email">Email address</option>
          <option value="linkedin">LinkedIn URL</option>
        </select>
      </div>
      <div class="ct-form-field">
        <label>Email / LinkedIn URL *</label>
        <input id="ctContact" type="text" placeholder="priya@company.com or linkedin.com/in/…">
      </div>
      <button class="ct-submit-btn" onclick="submitContactForm()">Submit contact</button>
      <div id="ctMsg"></div>
    </div>
  `)

  // keep backdrop in sync with panel open state
  const cp = document.getElementById('contactsPanel')
  if (cp) {
    new MutationObserver(() => {
      const isOpen = cp.classList.contains('open')
      document.getElementById('ctBackdrop')?.classList.toggle('open', isOpen)
    }).observe(cp, { attributes: true, attributeFilter: ['class'] })
  }

  // ── Email modal ──
  document.body.insertAdjacentHTML('beforeend', `
    <div class="fn-overlay" id="emailOverlay" onclick="closeEmailModal()">
      <div class="fn-modal" onclick="event.stopPropagation()">
        <button class="fn-close-btn" onclick="closeEmailModal()">✕</button>
        <h2>✉️ Sponsor outreach email</h2>
        <p class="fn-sub">Copy the subject and email body below. Replace the <strong>[bracketed]</strong> parts with your actual details before sending.</p>

        <label>Subject line</label>
        <input type="text" id="emailSubject" readonly>
        <button class="fn-copy-btn" onclick="copyEmail('emailSubject')">Copy subject</button>

        <label>Email body</label>
        <textarea id="emailBody" readonly></textarea>
        <button class="fn-copy-btn" onclick="copyEmail('emailBody')">Copy full email</button>

        <div class="fn-copy-msg" id="emailCopyMsg"></div>
      </div>
    </div>
  `)
})()


// ============================================================
//  INIT
// ============================================================

renderColleges(COLLEGES)
renderUpcoming()

// keep Render backend alive
setInterval(() => {
  fetch('https://project-fextnexus.onrender.com/api/colleges').catch(() => {})
}, 10 * 60 * 1000)