/**
 * GOLDEN SPARROW — Destinations Data Store
 * Handcrafted, detailed, and dynamic travel content for all 10 luxury destinations.
 */
const destinations = {
  japan: {
    slug: 'japan',
    name: 'Japan',
    country: 'Japan',
    subtitle: 'Cherry Blossom Season',
    color: '#8C52FF',
    secondaryColor: '#FF6B81',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    season: 'Mar - Apr',
    shortStory: 'A land where ancient traditions meet futuristic wonders. Walk through silent bamboo paths and vermillion torii gates under cherry blossom showers.',
    description: 'Japan is a study in contrasts. From the hyper-neon pulse of Tokyo to the tranquil zen gardens of Kyoto, it is a country that honors its deep cultural heritage while leading the world in modern design and hospitality. Experience private tea ceremonies, soak in volcanic hot springs, and savor Michelin-star dining.',
    quote: 'Every moment in Japan feels like poetry written in the language of cherry blossoms and silent shrines.',
    quoteAuthor: 'Dr. Evelyn Sterling',
    historyText: 'Dating back thousands of years, Japan’s history is defined by the periods of imperial rule, samurai honor, and deep spiritual introspection. Zen Buddhism and Shintoism have shaped the architecture, aesthetics, and everyday rituals, emphasizing harmony with nature and mindfulness in design.',
    stats: [
      { label: 'Best Time', value: 'Mar - Apr / Oct - Nov', icon: 'calendar' },
      { label: 'Weather', value: '12°C - 20°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '7 - 10 Days', icon: 'clock' },
      { label: 'Language', value: 'Japanese', icon: 'languages' },
      { label: 'Currency', value: 'Japanese Yen (¥)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent (Rank 5)', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.95 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Sakura Season', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Rich Heritage', desc: 'Step back in time in Kyoto with thousands of temples, wooden tea houses, and ancient castle fortresses.', icon: 'award' },
      { title: 'Breathtaking Beauty', desc: 'Watch Mount Fuji rise above pink clouds, or walk through golden maple forests in Autumn.', icon: 'sparkles' },
      { title: 'Exquisite Cuisine', desc: 'Indulge in authentic multi-course Kaiseki, fresh sushi, and hand-pulled ramen crafted by masters.', icon: 'utensils' },
      { title: 'Warm Hospitality', desc: 'Experience "Omotenashi" — the legendary Japanese art of selfless, meticulous hospitality.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Festivals', desc: 'Celebrate the Gion Matsuri or view cherry blossoms lit by paper lanterns at night.', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Food', desc: 'A gastronomic journey of seasonal delicacies, matcha ceremonies, and fresh street food.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Participate in calligraphy classes, watch Kabuki theatre, or try on a traditional Kimono.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Bathe in dynamic hot springs, explore mountain hiking trails, or walk the silent bamboo paths.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'trees' }
    ],
    highlights: [
      { title: 'Cherry Blossom Spots', desc: 'Walk under pink tunnels along the Philosopher\'s Path or the Meguro River.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ancient Kyoto Shrines', desc: 'Witness the iconic Fushimi Inari vermillion gates and the glittering Golden Pavilion.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80' },
      { title: 'Onsen Ryokan Escapes', desc: 'Stay in a traditional wooden inn, soak in thermal mineral pools, and wear yukatas.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80' },
      { title: 'Modern Neon Wonders', desc: 'Experience the electric streets of Shinjuku, futuristic robot cafes, and towering skyscrapers.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Sakura Escape', duration: '5 Days / 4 Nights', price: '₹1,85,000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Luxury Sakura Trail', duration: '7 Days / 6 Nights', price: '₹2,35,000', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=80' },
      { name: 'Family Sakura Fun', duration: '6 Days / 5 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' },
      { name: 'Sakura & Culture Tour', duration: '8 Days / 7 Nights', price: '₹2,75,000', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival & Shibuya Sunset', desc: 'Arrive in Tokyo. Check into your luxury skyline suite. Walk the famous Shibuya Crossing and enjoy a premium rooftop sushi dinner.' },
      { day: 'Day 2', title: 'Historic Senso-ji & Digital Art', desc: 'Visit Tokyo\'s oldest temple in Asakusa. Contrast it with an immersive digital art experience at teamLab Planets.' },
      { day: 'Day 3', title: 'bullet Train to Kyoto', desc: 'Ride the Shinkansen bullet train past Mt. Fuji. Arrive in Kyoto and witness Gion district lit by red lanterns.' },
      { day: 'Day 4', title: 'Bamboo Groves & Golden Temple', desc: 'Wake up early to stroll through the serene Arashiyama Bamboo Grove, followed by the breathtaking Kinkaku-ji temple.' },
      { day: 'Day 5', title: 'Tea Ceremony & Return', desc: 'Partake in a private tea ceremony led by a master, buy traditional fans, and head to Osaka/Tokyo for departure.' }
    ],
    mapPoints: [
      { name: 'Tokyo Tower', type: 'Landmark', x: '75%', y: '45%' },
      { name: 'Mt. Fuji', type: 'Nature', x: '68%', y: '58%' },
      { name: 'Kyoto Temple', type: 'Culture', x: '52%', y: '68%' },
      { name: 'Osaka Castle', type: 'Landmark', x: '48%', y: '72%' }
    ],
    reviews: [
      { name: 'Sophia Sterling', rating: 5, text: 'A completely flawless experience. The transition from bustling cities to silent shrines was unforgettable.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Liam Henderson', rating: 5, text: 'The cherry blossoms were magical. Every reservation and hotel was absolutely top-notch.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  iceland: {
    slug: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    subtitle: 'Fire & Ice Wonders',
    color: '#70A1FF',
    secondaryColor: '#2F3542',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80',
    season: 'Nov - Feb',
    shortStory: 'A raw, dramatic volcanic landscape defined by towering glaciers, roaring geothermal waterfalls, and the dancing lights of the aurora borealis.',
    description: 'Iceland is a masterclass in nature\'s sheer power. From natural steam geysers bursting into cold air to deep blue glacial ice caves that glow from within, this northern island is a playground of geologic wonder. Relax in thermal lagoons surrounded by black basalt rock and watch the sky ignite.',
    quote: 'In Iceland, the silence is broken only by the crackle of moving ice and the roar of basalt cliffs.',
    quoteAuthor: 'Marcus Vance',
    historyText: 'Settled by Norse Vikings in the 9th century, Iceland holds a rich legacy of mythic sagas and folklore. Its isolation has preserved its language and custom, while its volatile volcanic environment has shaped a resilient culture bound strictly to the elements.',
    stats: [
      { label: 'Best Time', value: 'Jun - Aug / Dec - Feb', icon: 'calendar' },
      { label: 'Weather', value: '-3°C - 10°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '6 - 8 Days', icon: 'clock' },
      { label: 'Language', value: 'Icelandic', icon: 'languages' },
      { label: 'Currency', value: 'Krona (kr)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent (Rank 1)', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.98 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Northern Lights', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Volcanic Wonders', desc: 'Hike active lava valleys and stand on black volcanic sand beaches under basalt columns.', icon: 'award' },
      { title: 'Northern Lights', desc: 'Watch neon green, purple, and blue auroras twirl across the dark arctic night sky.', icon: 'sparkles' },
      { title: 'Glacial Caves', desc: 'Walk inside solid neon-blue ice caves that are carved naturally by melting glaciers.', icon: 'snowflake' },
      { title: 'Geothermal Spas', desc: 'Soak in the mineral-rich, warm milky waters of the world-famous Blue Lagoon.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Adventure', desc: 'Snowmobile over massive glaciers or walk between tectonic plates.', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Chasing towering waterfalls like Skogafoss and Gullfoss.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Cuisine', desc: 'Savor fresh arctic char, langoustines, and volcanic rye bread baked in sand.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Relaxation', desc: 'Boutique eco-resorts with private geothermal heated pools.', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' }
    ],
    highlights: [
      { title: 'The Golden Circle', desc: 'Thingvellir Rift Valley, Strokkur Geyser, and the iconic Gullfoss waterfall.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' },
      { title: 'Black Sand Beach', desc: 'Basalt stacks and massive crashing waves at Reynisfjara near Vik.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' },
      { title: 'Glacial Lagoon', desc: 'Witness floating blue icebergs drift out to sea at Jokulsarlon Diamond Beach.', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80' },
      { title: 'Blue Lagoon Spa', desc: 'Luxury geothermal bathing with silica mud masks and volcanic views.', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Aurora Explorer', duration: '5 Days / 4 Nights', price: '₹2,10,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' },
      { name: 'Glacier Expedition', duration: '7 Days / 6 Nights', price: '₹2,85,000', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=500&q=80' },
      { name: 'Icelandic Ring Road', duration: '10 Days / 9 Nights', price: '₹3,50,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival & Blue Lagoon Bathing', desc: 'Arrive in Keflavík. Travel directly to the Blue Lagoon. Rejuvenate in mineral waters and dine at the lava restaurant.' },
      { day: 'Day 2', title: 'The Golden Circle Tour', desc: 'Walk between continents at Thingvellir National Park, watch geysers shoot into the sky, and see the Gullfoss waterfall.' },
      { day: 'Day 3', title: 'Black Sand & Basalt Stacks', desc: 'Drive the southern coast. Climb behind Seljalandsfoss waterfall and explore Reynisfjara beach.' },
      { day: 'Day 4', title: 'Ice Cave Exploration', desc: 'Take a super-jeep to the Vatnajokull glacier. Explore neon-blue ice tunnels carved by ancient frozen rivers.' },
      { day: 'Day 5', title: 'Diamond Beach & Aurora Hunt', desc: 'Watch chunks of crystal glacier ice wash up on volcanic diamond sands. Search the night skies for Northern Lights.' }
    ],
    mapPoints: [
      { name: 'Reykjavik', type: 'Landmark', x: '15%', y: '65%' },
      { name: 'Blue Lagoon', type: 'Relax', x: '10%', y: '75%' },
      { name: 'Gullfoss', type: 'Nature', x: '28%', y: '55%' },
      { name: 'Jokulsarlon', type: 'Nature', x: '72%', y: '68%' }
    ],
    reviews: [
      { name: 'Elena Rostova', rating: 5, text: 'Hiking the glaciers was incredible. The blue ice caves felt like walking inside a diamond.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Oliver Bennett', rating: 5, text: 'We saw the Aurora on three different nights. Unbelievable curation by Golden Sparrow.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  switzerland: {
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    subtitle: 'Alpine Serenity',
    color: '#2ED573',
    secondaryColor: '#1E2C22',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    season: 'Jun - Sep',
    shortStory: 'Glistering peak horizons, emerald alpine valleys dotted with historic wooden chalets, and crystal-clear lakes mirroring the sky.',
    description: 'Switzerland defines mountain luxury. From the iconic peak of the Matterhorn in Zermatt to the dramatic lake settings of Interlaken and Lucerne, this country offers quiet grandeur. Ride luxury panoramic trains through high mountain passes, enjoy gourmet fondue, and explore pristine alpine trails.',
    quote: 'The peaks of Switzerland teach us that silence is the highest expression of elegance.',
    quoteAuthor: 'Jean-Pierre Dubois',
    historyText: 'An independent confederation since 1291, Switzerland’s historical neutrality has made it a sanctuary of peace, finance, and watchmaking. Its culture is a harmonious blend of German, French, Italian, and Romansh influences, visible in its regional cuisines and architecture.',
    stats: [
      { label: 'Best Time', value: 'Jun - Aug / Dec - Mar', icon: 'calendar' },
      { label: 'Weather', value: '5°C - 22°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '6 - 9 Days', icon: 'clock' },
      { label: 'Language', value: 'German/French/Italian', icon: 'languages' },
      { label: 'Currency', value: 'Swiss Franc (CHF)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent (Rank 2)', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.96 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Alpine Hiking', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Peak Landscapes', desc: 'Stand below the towering, jagged peak of the iconic Matterhorn and Jungfraujoch.', icon: 'award' },
      { title: 'Panoramic Trains', desc: 'Travel on the Glacier Express, crossing high stone bridges and mountain tunnels.', icon: 'train' },
      { title: 'Lakeside Villas', desc: 'Breathe the crisp air of Lake Geneva and Lake Lucerne from luxury private docks.', icon: 'sparkles' },
      { title: 'Alpine Chalets', desc: 'Unwind in five-star wooden chalets equipped with roaring fireplaces and warm spas.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Adventure', desc: 'Ski the premium slopes of Zermatt or paraglide over Interlaken.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Walk under crystal mountain waterfalls in Lauterbrunnen Valley.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Cuisine', desc: 'Private chocolate tastings and authentic bubbling Gruyère cheese fondue.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Luxury Stays', desc: 'Chalet resorts with personal butler service and heated infinity pools.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' }
    ],
    highlights: [
      { title: 'Matterhorn Zermatt', desc: 'No-car alpine village with access to year-round snow peaks.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80' },
      { title: 'Lauterbrunnen Valley', desc: 'The valley of 72 cascading waterfalls amidst massive granite cliffs.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' },
      { title: 'Glacier Express', desc: 'World\'s slowest luxury train journey across pristine Swiss Alps.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80' },
      { title: 'Jungfraujoch Peak', desc: 'Visit the "Top of Europe" observatory at 3,454 meters altitude.', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Alpine Serenity', duration: '6 Days / 5 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=500&q=80' },
      { name: 'Glacier Train Tour', duration: '8 Days / 7 Nights', price: '₹3,15,000', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=500&q=80' },
      { name: 'Zermatt Winter Luxury', duration: '7 Days / 6 Nights', price: '₹2,95,000', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Lucerne Lakeside Welcome', desc: 'Arrive in Zurich. Travel to Lucerne. Walk the historic Chapel Bridge and board a private sunset lake cruise.' },
      { day: 'Day 2', title: 'Mount Pilatus Summit', desc: 'Ride the world\'s steepest cogwheel railway to Pilatus Peak for panoramic views of the Swiss Alps.' },
      { day: 'Day 3', title: '72 Waterfalls of Lauterbrunnen', desc: 'Travel to Interlaken. Wander through Lauterbrunnen, walking behind the Staubbach falls.' },
      { day: 'Day 4', title: 'Panoramic Glacier Express', desc: 'Board the panoramic train in Brig. Journey through snow bridges and gorges to the base of the Matterhorn in Zermatt.' },
      { day: 'Day 5', title: 'Matterhorn Peak Paradise', desc: 'Ride the cable car to Glacier Paradise. Soak in a luxury thermal pool with views of the Matterhorn.' }
    ],
    mapPoints: [
      { name: 'Zurich', type: 'Landmark', x: '58%', y: '22%' },
      { name: 'Lucerne', type: 'Landmark', x: '52%', y: '35%' },
      { name: 'Lauterbrunnen', type: 'Nature', x: '45%', y: '50%' },
      { name: 'Zermatt', type: 'Nature', x: '35%', y: '78%' }
    ],
    reviews: [
      { name: 'Charlotte Dubois', rating: 5, text: 'Zermatt was a fairy tale. The panoramic trains were perfectly organized. Excellent stays.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Devendra Nair', rating: 5, text: 'The Lauterbrunnen valley is easily the most beautiful place on Earth. Worth every rupee.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  turkey: {
    slug: 'turkey',
    name: 'Turkey',
    country: 'Turkey',
    subtitle: 'Byzantine Treasures',
    color: '#FF6B81',
    secondaryColor: '#3A1F24',
    heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1600&q=80',
    season: 'Apr - Jun / Sep - Nov',
    shortStory: 'A cultural bridge connecting East and West, rich with grand Byzantine mosques, glittering bazaars, and thermal limestone cascades.',
    description: 'Turkey is a mosaic of history and landscape. Sail the sapphire waters of the Bosphorus Strait in Istanbul, explore the ancient Greek ruins of Ephesus, and bathe in the white travertine mineral pools of Pamukkale. Indulge in aromatic spices, Turkish coffee, and historic hamams.',
    quote: 'In Turkey, history is not recorded in books; it is carved in the stone of bazaars and domes.',
    quoteAuthor: 'Yasmin Can',
    historyText: 'From the Hittites to the Romans, Byzantines, and Ottomans, Turkey has been the center of powerful empires. Its historical ruins, such as the Hagia Sophia and Troy, tell tales of trade, conquest, and magnificent architectural achievements.',
    stats: [
      { label: 'Best Time', value: 'Apr - May / Sep - Oct', icon: 'calendar' },
      { label: 'Weather', value: '15°C - 26°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '7 - 10 Days', icon: 'clock' },
      { label: 'Language', value: 'Turkish', icon: 'languages' },
      { label: 'Currency', value: 'Turkish Lira (₺)', icon: 'banknote' },
      { label: 'Safety', value: 'Good', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.92 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Spring & Autumn', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Byzantine Domes', desc: 'Marvel at the historic structural genius of Hagia Sophia and the Blue Mosque.', icon: 'award' },
      { title: 'Ancient Ruins', desc: 'Walk down the marble pathways of Ephesus, one of the best-preserved classical cities.', icon: 'landmark' },
      { title: 'Thermal Pools', desc: 'Bathe in the natural travertine pools of Pamukkale, ancient Roman spa pools.', icon: 'sparkles' },
      { title: 'Grand Bazaars', desc: 'Explore thousands of colorful shops filled with Turkish carpets, spices, and lamps.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Culture', desc: 'Watch Sufi Whirling Dervishes perform and soak in a historic Turkish bath.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Explore the white calcified terraces and mineral pools of Pamukkale.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Gourmet Turkish mezes, slow-cooked kebabs, and pistachio baklavas.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Sailing', desc: 'Charter a private wooden gulet yacht across the Aegean coastline.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'compass' }
    ],
    highlights: [
      { title: 'Hagia Sophia Istanbul', desc: 'A stunning Byzantine church turned majestic mosque with a floating golden dome.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ephesus Library', desc: 'Stand before the iconic Library of Celsus in the ancient Roman metropolis.', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80' },
      { title: 'Pamukkale Travertines', desc: 'Breathtaking white limestone thermal waters cascading down mountains.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Bosphorus Yacht Cruise', desc: 'Sail past palaces and bridges bridging the Asian and European continents.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Ottoman Heritage', duration: '7 Days / 6 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
      { name: 'Aegean Gulet Cruise', duration: '8 Days / 7 Nights', price: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
      { name: 'Classic Turkey Tour', duration: '9 Days / 8 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Istanbul Welcome & Bosphorus Yacht', desc: 'Arrive in Istanbul. Check in to a Bosphorus-facing palace suite. Board a luxury private yacht at sunset.' },
      { day: 'Day 2', title: 'Grand Mosque & Hagia Sophia', desc: 'Wander the historic Sultanahmet district. Tour the majestic Hagia Sophia and walk the Spice Bazaar.' },
      { day: 'Day 3', title: 'Grand Bazaar & Hamam Spa', desc: 'Shop in the historic Grand Bazaar, followed by a private marble hamam scrub ritual.' },
      { day: 'Day 4', title: 'Ancient Ruins of Ephesus', desc: 'Fly to Izmir and travel to Ephesus. Walk the marble Arcadian way and photograph the library ruins.' },
      { day: 'Day 5', title: 'Pamukkale Cotton Castle', desc: 'Bathe in the white mineral travertine terraces of Pamukkale and swim in Cleopatra\'s pool.' }
    ],
    mapPoints: [
      { name: 'Istanbul', type: 'Landmark', x: '25%', y: '25%' },
      { name: 'Ephesus', type: 'Landmark', x: '18%', y: '55%' },
      { name: 'Pamukkale', type: 'Nature', x: '26%', y: '65%' },
      { name: 'Antalya', type: 'Relax', x: '42%', y: '78%' }
    ],
    reviews: [
      { name: 'Aditya Sen', rating: 5, text: 'Ephesus library was amazing. The tour guide was incredibly knowledgeable. Great food.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Lara Croft', rating: 5, text: 'Soaking in Pamukkale terraces felt magical. A highly coordinated and premium journey.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  indonesia: {
    slug: 'indonesia',
    name: 'Indonesia',
    country: 'Indonesia',
    subtitle: 'Tropical Emerald Oasis',
    color: '#10AC84',
    secondaryColor: '#0E3D30',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    season: 'May - Sep',
    shortStory: 'An emerald archipelago of deep volcanic lakes, tropical jungles, ancient Hindu temples, and turquoise coral reefs.',
    description: 'Indonesia is a volcanic paradise. Beyond the serene spiritual pulse of Bali, explore the towering active caldera of Mount Bromo, cruise past Komodo dragons on private boats, and dive into the crystal clear reefs of Raja Ampat. Relax in boutique bamboo villas under jungle canopies.',
    quote: 'The tropical wind of Indonesia carries the scent of incense, frangipani, and ancient forest spirits.',
    quoteAuthor: 'Made Wira',
    historyText: 'Comprising over 17,000 islands, Indonesia has been shaped by maritime spice trade, Hindu-Buddhist kingdoms, and Islamic sultanates. Bali remains a unique spiritual enclave, where daily life is closely intertwined with tri hita karana — the harmony between humans, nature, and the divine.',
    stats: [
      { label: 'Best Time', value: 'May - Sep', icon: 'calendar' },
      { label: 'Weather', value: '24°C - 31°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '7 - 10 Days', icon: 'clock' },
      { label: 'Language', value: 'Indonesian (Bahasa)', icon: 'languages' },
      { label: 'Currency', value: 'Rupiah (IDR)', icon: 'banknote' },
      { label: 'Safety', value: 'Very Good', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.94 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Dry Season', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Temples & Rice Terraces', desc: 'Visit Uluwatu on seaside cliffs and hike through the emerald Tegalalang Rice Fields.', icon: 'award' },
      { title: 'Volcanic Adventures', desc: 'Watch the sunrise over Mount Bromo, surrounded by a vast sea of volcanic sand.', icon: 'sparkles' },
      { title: 'Komodo Islands', desc: 'Sail on a private wooden Phinisi yacht to see pink sand beaches and giant Komodo dragons.', icon: 'compass' },
      { title: 'Luxury Eco-Villas', desc: 'Stay in sustainable bamboo structures featuring hanging pools suspended over jungle gorges.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Culture', desc: 'Witness traditional Kecak fire dances and participate in spiritual cleansing.', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Adventure', desc: 'Snorkel with manta rays in Nusa Penida and explore deep river canyons.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Gourmet Balinese cuisine, charcoal roasted suckling pig, and fresh coconut water.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Spas', desc: 'Flower baths, traditional Balinese deep tissue massages under open pavilions.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', icon: 'heart' }
    ],
    highlights: [
      { title: 'Uluwatu Sunset Temple', desc: 'Dramatic cliffside temple featuring fire dancing against ocean waves.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
      { title: 'Tegalalang Rice Terraces', desc: 'Emerald green valley cascades farmed using historic irrigation methods.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80' },
      { title: 'Komodo Island Sailing', desc: 'Unforgettable Phinisi wooden yacht cruise past pink sand islands.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ubud Jungle Sanctuary', desc: 'Relaxing bamboo retreats surrounded by towering palm trees and river gorges.', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Island of Gods', duration: '6 Days / 5 Nights', price: '₹1,45,000', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80' },
      { name: 'Komodo Luxury Cruise', duration: '8 Days / 7 Nights', price: '₹2,35,000', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80' },
      { name: 'Ubud Wellness Retreat', duration: '7 Days / 6 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Welcome to Ubud Jungle', desc: 'Arrive in Denpasar. Travel to Ubud. Check into your luxury valley resort. Dine next to a roaring river gorge.' },
      { day: 'Day 2', title: 'Rice Field Walks & Temple Cleanse', desc: 'Walk Tegalalang rice field at sunrise. Visit Tirta Empul for a private spiritual spring water purification.' },
      { day: 'Day 3', title: 'Manta Ray Swim at Nusa Penida', desc: 'Take a private speedboat to Nusa Penida. Swim alongside wild giant manta rays in turquoise bays.' },
      { day: 'Day 4', title: 'Mount Batur Sunrise Hike', desc: 'Wake up early to climb Mount Batur. Enjoy breakfast cooked in volcanic steam as the sun breaks over clouds.' },
      { day: 'Day 5', title: 'Uluwatu Cliffs & Kecak Dance', desc: 'Travel to southern Bali. Visit Uluwatu temple. Witness the Kecak dance on cliffs at sunset.' }
    ],
    mapPoints: [
      { name: 'Ubud', type: 'Relax', x: '52%', y: '50%' },
      { name: 'Uluwatu', type: 'Landmark', x: '45%', y: '78%' },
      { name: 'Nusa Penida', type: 'Nature', x: '65%', y: '75%' },
      { name: 'Mount Batur', type: 'Nature', x: '58%', y: '35%' }
    ],
    reviews: [
      { name: 'Rohan Malhotra', rating: 5, text: 'Swimming with manta rays was a life-changing experience. Highly recommended packages.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Emma Watson', rating: 5, text: 'Omotenashi in Japan, but Balinese hospitality has a warmth that is unmatched.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  italy: {
    slug: 'italy',
    name: 'Italy',
    country: 'Italy',
    subtitle: 'Amalfi Coast Dreams',
    color: '#8C52FF',
    secondaryColor: '#FF9F43',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    season: 'May - Sep',
    shortStory: 'A timeless Mediterranean paradise of pastel-colored villages cascading down sheer cliffs into a deep, sapphire-blue sea.',
    description: 'Italy\'s Amalfi Coast is the pinnacle of coastal luxury. Positano, Amalfi, and Ravello cling to steep cliffsides above a shimmering sea. Scented with giant local lemons, these historic villages offer luxury hotels housed in former monasteries, private yacht cruises, and exquisite Michelin-star dining with views.',
    quote: 'To look at the Amalfi Coast from the sea is to see a vertical painting painted by the hands of giants.',
    quoteAuthor: 'Giosuè Carducci',
    historyText: 'Once a powerful maritime republic in the Middle Ages, the Amalfi Coast was an important trading center linking Europe with the Byzantine and Arab worlds. Today, its historic stone churches, vaulted lanes, and terraced lemon groves are protected as a UNESCO World Heritage site.',
    stats: [
      { label: 'Best Time', value: 'May - Jun / Sep', icon: 'calendar' },
      { label: 'Weather', value: '20°C - 28°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '5 - 7 Days', icon: 'clock' },
      { label: 'Language', value: 'Italian', icon: 'languages' },
      { label: 'Currency', value: 'Euro (€)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.97 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Mediterranean Summer', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Pastel Cliffside Towns', desc: 'Explore Positano\'s famous vertical lanes, stone archways, and pastel-hued facades.', icon: 'award' },
      { title: 'Private Yacht Cruises', desc: 'Sail past dramatic sea cliffs, dive into glowing green grottoes, and swim in private bays.', icon: 'compass' },
      { title: 'Ravello Cliff Gardens', desc: 'Visit Villa Cimbrone to stand on the "Terrace of Infinity" high above the blue gulf.', icon: 'sparkles' },
      { title: 'Lemon Grove Dining', desc: 'Dine under pergolas of massive Sfuzato lemons, tasting handmade pasta and limoncello.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Sailing', desc: 'Private wooden gozzo boat tours around the island of Capri.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh seafood, hand-crushed pesto, local mozzarella, and lemon soufflés.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Tour historic cathedrals, paper-making mills, and terracotta workshops.', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Cliffside infinity pools that merge seamlessly with the Mediterranean horizon.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', icon: 'heart' }
    ],
    highlights: [
      { title: 'Positano Cliffside View', desc: 'Timeless view of vertical houses clinging to sheer rock cliffs above the beach.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
      { title: 'Ravello Infinity Terrace', desc: 'Stunning historic villa garden featuring marble busts looking out to the sea.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
      { title: 'Capri & Blue Grotto', desc: 'Sail to Capri to dive into caves illuminated by glowing blue light.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
      { title: 'Path of the Gods Hike', desc: 'Incredible hiking trail high above the coast with views from Amalfi to Capri.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Amalfi Coast Luxury', duration: '5 Days / 4 Nights', price: '₹2,65,000', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80' },
      { name: 'Mediterranean Romance', duration: '7 Days / 6 Nights', price: '₹3,45,000', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80' },
      { name: 'Capri & Positano Escape', duration: '6 Days / 5 Nights', price: '₹2,95,000', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival in Positano', desc: 'Arrive via private luxury car from Naples. Check into your cliffside hotel. Enjoy dinner on a balcony overlooking POSITANO.' },
      { day: 'Day 2', title: 'Capri Yacht Cruise', desc: 'Board a private wooden gozzo boat. Sail around Faraglioni rocks, swim inside the green grotto, and dine in Capri.' },
      { day: 'Day 3', title: 'Ravello Clifftop Gardens', desc: 'Travel up to historic Ravello. Tour Villa Cimbrone\'s gardens and stand on the Terrace of Infinity.' },
      { day: 'Day 4', title: 'Lemon Groves & Cooking Class', desc: 'Walk through family-owned terraced lemon farms. Learn to roll fresh pasta and make authentic limoncello.' },
      { day: 'Day 5', title: 'Path of the Gods Hike', desc: 'Walk the famous Path of the Gods, taking in views of the coastline, concluding with a seaside seafood lunch.' }
    ],
    mapPoints: [
      { name: 'Positano', type: 'Relax', x: '35%', y: '65%' },
      { name: 'Amalfi', type: 'Landmark', x: '52%', y: '55%' },
      { name: 'Ravello', type: 'Culture', x: '58%', y: '45%' },
      { name: 'Capri', type: 'Nature', x: '18%', y: '78%' }
    ],
    reviews: [
      { name: 'Isabella Rossi', rating: 5, text: 'Positano took my breath away. Staying in a former monastery was the height of luxury.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Karan Johar', rating: 5, text: 'A completely customized yacht charter. Every detail of the journey was flawless.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  maldives: {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    subtitle: 'Paradise on Earth',
    color: '#00D2C4',
    secondaryColor: '#0A3B37',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80',
    season: 'Nov - Apr',
    shortStory: 'A pristine string of turquoise coral atolls where private overwater bungalows float over warm, glowing marine lagoons.',
    description: 'The Maldives is the ultimate luxury escape. Comprising hundreds of low-lying coral islands, it is home to some of the world\'s most exclusive overwater resorts. Walk on powdery white sand, swim with gentle whale sharks, and dine in glass restaurants built entirely underwater.',
    quote: 'The ocean in the Maldives does not reflect the sky; it defines the color of light itself.',
    quoteAuthor: 'Dr. Lucas Thorne',
    historyText: 'A historic crossroads of Indian Ocean trade routes, the Maldives holds a unique cultural identity built on maritime traditions. Today, it leads the world in eco-luxury hospitality, working closely to protect its coral reefs and marine biospheres.',
    stats: [
      { label: 'Best Time', value: 'Nov - Apr', icon: 'calendar' },
      { label: 'Weather', value: '26°C - 31°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '5 - 7 Days', icon: 'clock' },
      { label: 'Language', value: 'Dhivehi / English', icon: 'languages' },
      { label: 'Currency', value: 'Rufiyaa (MVR)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.98 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Dry Season', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Overwater Bungalows', desc: 'Step from your bedroom directly into warm turquoise lagoon waters filled with colorful fish.', icon: 'award' },
      { title: 'Underwater Dining', desc: 'Savor multi-course gourmet lunches under a curved glass dome six meters beneath the sea.', icon: 'utensils' },
      { title: 'Whale Shark Swims', desc: 'Snorkel alongside whale sharks and giant manta rays in protected marine sanctuaries.', icon: 'compass' },
      { title: 'Private Sandbank Dinners', desc: 'Enjoy a customized candlelit seafood dinner on a solitary sandbank surrounded by the ocean.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Relaxation', desc: 'Overwater spa treatment rooms featuring glass floors looking into coral reefs.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Nature', desc: 'Dive into protected house reefs, spotting sea turtles and clownfish.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Freshly caught yellowfin tuna, coconut curries, and tropical fruit platters.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Sailing', desc: 'Sunset cruises on traditional wooden dhonis, watching wild dolphins jump.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', icon: 'compass' }
    ],
    highlights: [
      { title: 'Underwater Restaurant', desc: 'A stunning glass dome dining room surrounded by active marine coral reefs.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
      { title: 'Protected Marine Atolls', desc: 'Snorkel in Hanifaru Bay, a global hotspot for manta ray feeding groups.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
      { title: 'Luxury Overwater Villa', desc: 'Private water villas featuring slides, glass floors, and overwater nets.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
      { title: 'Solitary Sandbanks', desc: 'Stunning white powder strips of sand that emerge only during low tide.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Paradise Escape', duration: '5 Days / 4 Nights', price: '₹2,85,000', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80' },
      { name: 'Underwater Luxury Tour', duration: '7 Days / 6 Nights', price: '₹3,95,000', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Private Sandbank Voyage', duration: '6 Days / 5 Nights', price: '₹3,45,000', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Seaplane Flight & Water Villa', desc: 'Fly past atolls on a private seaplane. Land at your resort dock. Walk to your overwater villa and watch sunset from your private net.' },
      { day: 'Day 2', title: 'Snorkeling with Manta Rays', desc: 'Snorkel at a nearby house reef. See turtles, reef sharks, and walk down white sand paths.' },
      { day: 'Day 3', title: 'Underwater Dinner', desc: 'Savor gourmet dishes in the glass underwater dining hall, watching fish swim above your table.' },
      { day: 'Day 4', title: 'Private Sandbank Sunset', desc: 'Travel via private boat to a solitary sandbank. Relax with champagne and watch the sun dip below the horizon.' },
      { day: 'Day 5', title: 'Overwater Spa & Departure', desc: 'Rejuvenate with a massage on a glass-floored pavilion, followed by a speedboat transfer back to Male.' }
    ],
    mapPoints: [
      { name: 'Male Atoll', type: 'Landmark', x: '45%', y: '35%' },
      { name: 'Ari Atoll', type: 'Relax', x: '35%', y: '50%' },
      { name: 'Baa Atoll Reef', type: 'Nature', x: '38%', y: '25%' },
      { name: 'Hanifaru Bay', type: 'Nature', x: '42%', y: '20%' }
    ],
    reviews: [
      { name: 'Aarav Malhotra', rating: 5, text: 'The underwater restaurant was incredible. Standing on a sandbank with no one else around is a feeling that cannot be put in words.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Chloe Vance', rating: 5, text: 'Unbelievable overwater villas. Golden Sparrow provided absolute perfection from the seaplane to the spa.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  cappadocia: {
    slug: 'cappadocia',
    name: 'Cappadocia',
    country: 'Turkey',
    subtitle: 'Balloon Dreams',
    color: '#E59E30',
    secondaryColor: '#4A2F08',
    heroImage: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1600&q=80',
    season: 'Apr - Oct',
    shortStory: 'A mythical volcanic valley defined by tall stone fairy chimneys, historic cave hotels, and hundreds of colorful balloons taking flight.',
    description: 'Cappadocia is a landscape from a dream. Formed by volcanic ash over millions of years, its towering stone "fairy chimneys" and cave networks house centuries of Byzantine history. Wake up at dawn to watch hundreds of hot air balloons rise, and explore ancient underground stone cities.',
    quote: 'To float above Cappadocia at dawn is to witness a ancient stone landscape waking under a pastel sky.',
    quoteAuthor: 'Elena Petrova',
    historyText: 'An important Christian sanctuary during the Byzantine era, Cappadocia\'s soft volcanic rock was carved into churches, monasteries, and complex underground cities like Kaymakli that could house thousands of people seeking refuge during wars.',
    stats: [
      { label: 'Best Time', value: 'Apr - Jun / Sep - Oct', icon: 'calendar' },
      { label: 'Weather', value: '8°C - 24°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '3 - 5 Days', icon: 'clock' },
      { label: 'Language', value: 'Turkish / English', icon: 'languages' },
      { label: 'Currency', value: 'Turkish Lira (₺)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.97 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Hot Air Balloons', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Dawn Balloon Flight', desc: 'Float 3,000 feet above volcanic valleys as hundreds of colorful balloons rise.', icon: 'award' },
      { title: 'Luxury Cave Suites', desc: 'Stay in historic stone cave chambers equipped with high ceilings and hot tubs.', icon: 'sparkles' },
      { title: 'Underground Cities', desc: 'Descend eight levels into ancient hand-carved stone cities that housed thousands.', icon: 'landmark' },
      { title: 'Sunset Horse Rides', desc: 'Ride horses through the Rose and Red Valleys as the rocks glow gold.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Adventure', desc: 'Dawn balloon rides and ATV valley expeditions.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Culture', desc: 'Explore historic rock-cut churches and hand-paint clay pots.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Food', desc: 'Taste slow-cooked pottery kebabs and locally brewed volcanic wines.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Photography', desc: 'Capture sunrise views from private cave terraces covered in carpets.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' }
    ],
    highlights: [
      { title: 'Goreme Open Air Museum', desc: 'UNESCO site featuring rock-cut churches covered in Byzantine frescoes.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80' },
      { title: 'Love Valley Chimneys', desc: 'Stunning volcanic rock towers carved by millions of years of wind.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Kaymakli Underground City', desc: 'Intricate underground network of tunnels, kitchens, and chapels.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
      { title: 'Uchisar Stone Castle', desc: 'The highest point in Cappadocia, offering views over the entire valley.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Balloon Dreams', duration: '4 Days / 3 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=500&q=80' },
      { name: 'Cave Luxury Trail', duration: '5 Days / 4 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
      { name: 'Volcanic Valley Voyage', duration: '6 Days / 5 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival & Cave Suite Welcome', desc: 'Arrive via private car. Check into your luxury cave suite. Enjoy wine on a terrace overlooking Uchisar Castle.' },
      { day: 'Day 2', title: 'Sunrise Balloon & Goreme Tour', desc: 'Board your private hot air balloon at dawn. Toast with champagne. Later, tour Goreme Open Air Museum.' },
      { day: 'Day 3', title: 'Kaymakli Underground City', desc: 'Explore the historic underground tunnels of Kaymakli. Savor a pottery kebab for lunch.' },
      { day: 'Day 4', title: 'Clay Pottery & Horse Ride', desc: 'Visit Avanos to throw clay pots on traditional wheels. Take a sunset horse ride through Rose Valley.' },
      { day: 'Day 5', title: 'Valley Walk & Departure', desc: 'Walk through Devrent Valley to photograph animal-shaped rocks before transferring to Nevsehir airport.' }
    ],
    mapPoints: [
      { name: 'Goreme', type: 'Landmark', x: '45%', y: '45%' },
      { name: 'Uchisar Castle', type: 'Culture', x: '35%', y: '52%' },
      { name: 'Love Valley', type: 'Nature', x: '38%', y: '35%' },
      { name: 'Kaymakli Underground', type: 'Culture', x: '42%', y: '78%' }
    ],
    reviews: [
      { name: 'Vikram Malhotra', rating: 5, text: 'Floating above the valleys was a dream. The cave suite was incredibly cozy and luxury.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Sophia Smith', rating: 5, text: 'The underground city was mind-blowing. Handcrafted clay potting was so much fun.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  kyoto: {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    subtitle: 'Ancient Japan Heritage',
    color: '#FF4757',
    secondaryColor: '#3D0E13',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    season: 'Apr - May / Oct - Nov',
    shortStory: 'The historic soul of Japan, home to thousands of classical Buddhist temples, Zen gardens, wooden chalets, and geisha traditions.',
    description: 'Kyoto is the heart of traditional Japan. For over a thousand years it was the imperial capital, and today it remains a cultural treasure. Walk through silent bamboo paths, gaze at the glittering Golden Pavilion, experience private tea ceremonies, and sleep in cozy traditional ryokans. Savor seasonal kaiseki dinners.',
    quote: 'In Kyoto, time does not pass; it waits in the shadow of temple eaves and mossy stone basins.',
    quoteAuthor: 'Reiko Sato',
    historyText: 'Founded in 794 as Heian-kyo, Kyoto was the seat of Japan\'s Imperial Court for eleven centuries. Miraculously spared from much of the destruction of World War II, it preserves an unmatched collection of historical structures, classical gardens, and living arts.',
    stats: [
      { label: 'Best Time', value: 'Apr - May / Oct - Nov', icon: 'calendar' },
      { label: 'Weather', value: '8°C - 20°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '4 - 6 Days', icon: 'clock' },
      { label: 'Language', value: 'Japanese', icon: 'languages' },
      { label: 'Currency', value: 'Yen (¥)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.96 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Spring Cherry / Fall Maples', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Buddhist Temples', desc: 'Visit Kinkaku-ji (Golden Pavilion) and Kiyomizu-dera built on massive wooden pillars.', icon: 'award' },
      { title: 'Zen Moss Gardens', desc: 'Contemplate silent raked gravel and mossy stones at Ryoan-ji zen temple.', icon: 'sparkles' },
      { title: 'Geisha Heritage', desc: 'Walk through Gion district at twilight, looking out for geishas inside wooden tea houses.', icon: 'bookmark' },
      { title: 'Arashiyama Bamboo', desc: 'Walk under towering stalks of bamboo that rustle in the gentle mountain wind.', icon: 'trees' }
    ],
    experiences: [
      { title: 'Culture', desc: 'Participate in a private tea ceremony led by a master, learning ritual movements.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Wander the Philosopher\'s Path alongside cherry blossoms and stone shrines.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Indulge in seasonal multi-course Kaiseki cuisine, tofu dishes, and green matcha.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Crafts', desc: 'Try woodblock printing and gold-leaf decoration at local family workshops.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' }
    ],
    highlights: [
      { title: 'Fushimi Inari Gates', desc: 'Incredible path of over 10,000 red vermillion gates leading up a sacred mountain.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80' },
      { title: 'The Golden Pavilion', desc: 'Stunning Zen temple covered in gold leaf, reflecting on a silent lake.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80' },
      { title: 'Arashiyama Bamboo Forest', desc: 'Serene path winding between towering green bamboo stalks.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
      { title: 'Kiyomizu-dera Temple', desc: 'Historic temple with a massive wooden veranda looking over Kyoto.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Kyoto Heritage Tour', duration: '4 Days / 3 Nights', price: '₹1,55,000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Zen Garden Luxury', duration: '5 Days / 4 Nights', price: '₹1,85,000', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=80' },
      { name: 'Geisha & Culture Voyage', duration: '6 Days / 5 Nights', price: '₹2,15,000', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival & Gion Twilight Walk', desc: 'Arrive via bullet train. Check into your luxury ryokan. Walk Gion wooden lanes at sunset.' },
      { day: 'Day 2', title: 'Golden Pavilion & Ryoan-ji Zen', desc: 'Tour Kinkaku-ji in morning light. Contemplate the rock garden at Ryoan-ji and enjoy a tofu lunch.' },
      { day: 'Day 3', title: 'Fushimi Inari Vermillion Hike', desc: 'Hike Fushimi Inari Shrine, walking under thousands of red gates. Savor a Kaiseki dinner.' },
      { day: 'Day 4', title: 'Bamboo Groves & Monkey Park', desc: 'Explore Arashiyama Bamboo Grove early, followed by a walk up to the monkey park.' },
      { day: 'Day 5', title: 'Tea Ceremony & Departure', desc: 'Learn the ritual art of tea making, shop for incense, and take the bullet train back.' }
    ],
    mapPoints: [
      { name: 'Gion District', type: 'Culture', x: '52%', y: '55%' },
      { name: 'Kinkaku-ji Temple', type: 'Landmark', x: '35%', y: '28%' },
      { name: 'Fushimi Inari', type: 'Landmark', x: '58%', y: '78%' },
      { name: 'Arashiyama Bamboo', type: 'Nature', x: '18%', y: '45%' }
    ],
    reviews: [
      { name: 'Ananya Roy', rating: 5, text: 'Wandering Gion at night felt like step back in time. The ryokan was absolutely exceptional.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Kenji Tanaka', rating: 5, text: 'Beautiful curation. The tea ceremony was peaceful and felt highly authentic.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  santorini: {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    subtitle: 'Greek Island Bliss',
    color: '#1A8CFF',
    secondaryColor: '#0E2E5C',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    season: 'May - Oct',
    shortStory: 'A dramatic caldera island of stark white cliffside villas, iconic blue domes, and sunsets that turn the sky pink.',
    description: 'Santorini is the crown jewel of the Aegean Sea. Formed by a massive historic volcanic eruption, its towns cling to high cliffs above a water-filled caldera. Explore the narrow, winding lanes of Oia, visit blue-domed churches, taste volcanic white wines, and sail into hot springs.',
    quote: 'The light of Santorini is not from the sun; it reflects off white walls and deep blue dome ceilings.',
    quoteAuthor: 'Alexander Marin',
    historyText: 'Known as Thera in antiquity, Santorini was the site of the Minoan eruption, one of the largest volcanic events in human history. The volcanic ash preserved the prehistoric city of Akrotiri, and has created a highly fertile soil ideal for vineyards.',
    stats: [
      { label: 'Best Time', value: 'May - Oct', icon: 'calendar' },
      { label: 'Weather', value: '18°C - 29°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '3 - 5 Days', icon: 'clock' },
      { label: 'Language', value: 'Greek / English', icon: 'languages' },
      { label: 'Currency', value: 'Euro (€)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.95 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Caldera Sunsets', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'White Cliff Villages', desc: 'Explore Oia and Fira, filled with whitewashed houses, stone pathways, and infinity pools.', icon: 'award' },
      { title: 'Aegean Sailing', desc: 'Board a luxury catamaran to sail into the caldera volcanic hot springs.', icon: 'compass' },
      { title: 'Volcanic Vineyards', desc: 'Savor crisp Assyrtiko white wines at cliffside vineyards looking over the sea.', icon: 'utensils' },
      { title: 'Oia Sunset Views', desc: 'Witness the world\'s most famous sunset as Oia\'s cliffs light up pink and orange.', icon: 'sparkles' }
    ],
    experiences: [
      { title: 'Sailing', desc: 'Caldera catamaran cruises with seafood lunches cooked on board.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh octopus, Greek salads with local feta, cherry tomatoes, and honey pastries.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Visit the prehistoric ruins of Akrotiri and explore local art galleries.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Infinity pool caves looking down at the deep blue caldera.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'heart' }
    ],
    highlights: [
      { title: 'Oia Blue Domes', desc: 'The iconic blue domes of Anastasi Church looking out to the Aegean.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
      { title: 'Amoudi Bay Seafood', desc: 'Descend 300 stone steps to dine on fresh seafood right next to crashing waves.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
      { title: 'Akrotiri Ruins', desc: 'Walk inside the prehistoric Bronze Age city preserved under volcanic ash.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
      { title: 'Volcanic Red Beach', desc: 'Stunning beach flanked by massive, soaring red volcanic stone cliffs.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Aegean Romance', duration: '4 Days / 3 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' },
      { name: 'Caldera Luxury Cruise', duration: '5 Days / 4 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' },
      { name: 'Santorini Wine Voyage', duration: '6 Days / 5 Nights', price: '₹2,15,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival & Oia Cliff Sunset', desc: 'Arrive via private transfer. Check into your cave hotel in Oia. Watch sunset from your hot tub.' },
      { day: 'Day 2', title: 'Caldera Catamaran Sailing', desc: 'Board a luxury catamaran. Swim in hot springs, see red beach cliffs, and enjoy an on-board seafood meal.' },
      { day: 'Day 3', title: 'Volcanic Vineyards & Tasting', desc: 'Tour three local vineyards. Taste white Assyrtiko wines paired with cheese as you overlook the sea.' },
      { day: 'Day 4', title: 'Akrotiri Ruins & Fira Walk', desc: 'Visit Akrotiri ruins. Walk the paved caldera cliff path from Firostefani to Fira.' },
      { day: 'Day 5', title: 'Amoudi Bay & Departure', desc: 'Descend to Amoudi Bay for lunch next to the sea before your flight back.' }
    ],
    mapPoints: [
      { name: 'Oia', type: 'Relax', x: '25%', y: '20%' },
      { name: 'Fira', type: 'Landmark', x: '35%', y: '45%' },
      { name: 'Akrotiri', type: 'Culture', x: '22%', y: '78%' },
      { name: 'Kamari Beach', type: 'Nature', x: '58%', y: '65%' }
    ],
    reviews: [
      { name: 'Sophie Laurent', rating: 5, text: 'Cave hotel in Oia was beautiful. Seamless arrangements by Golden Sparrow.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  france: {
    slug: 'france',
    name: 'France',
    country: 'France',
    subtitle: 'Provence & Riviera Sun',
    color: '#4158D0',
    secondaryColor: '#C850C0',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    season: 'Jun - Aug',
    shortStory: 'A luxury landscape of rolling purple lavender fields in Provence, legendary azure coastlines along the French Riviera, and the fine culinary masters of the south.',
    description: 'France is an matchless study in elegance. From the golden sandy beaches of Cannes to the sweet scent of blooming purple lavender in Luberon, it is a country that defined luxury living. Stay in historic châteaux, cruise on private yachts along the Mediterranean, and savor fine vintage wines in Bordeaux.',
    quote: 'To walk through the lavender fields of Provence is to see the earth dressed in the color of perfume and sunsets.',
    quoteAuthor: 'Jean-Luc Godard',
    historyText: 'With roots tracing back to Celtic tribes, Roman conquest, and the grand monarchy of Versailles, France has been Europe\'s cultural heart for centuries. Its history of art, revolution, and philosophy has shaped modern aesthetics, fine dining, and haute couture.',
    stats: [
      { label: 'Best Time', value: 'May - Sep', icon: 'calendar' },
      { label: 'Weather', value: '18°C - 28°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '6 - 8 Days', icon: 'clock' },
      { label: 'Language', value: 'French / English', icon: 'languages' },
      { label: 'Currency', value: 'Euro (€)', icon: 'banknote' },
      { label: 'Safety', value: 'Excellent', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.92 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Summer Season', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Lavender Fields', desc: 'Walk through rows of deep purple blooms in Provence during mid-summer.', icon: 'award' },
      { title: 'French Riviera', desc: 'Relax on exclusive beaches in Saint-Tropez, Monaco, and Nice.', icon: 'compass' },
      { title: 'Gourmet Gastronomy', desc: 'Dine in Michelin-starred restaurants and taste the world\'s finest cheeses.', icon: 'utensils' },
      { title: 'Historic Châteaux', desc: 'Stay in grand renaissance palaces and historic vineyard estates.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Sailing', desc: 'Private yacht charters along the glittering blue Côte d\'Azur.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh pastries, truffles, local olives, and fine vintage Bordeaux wines.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Explore perfume distilleries in Grasse and stroll historic hill towns.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Luxury infinity pools looking out over the Mediterranean cliffs.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'heart' }
    ],
    highlights: [
      { title: 'Valensole Lavender', desc: 'Stunning purple rolling hills stretching to the horizon under golden sun.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
      { title: 'Monaco Harbor', desc: 'Glittering superyachts, luxury casinos, and dramatic coastal cliffs.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
      { title: 'Grasse Perfumeries', desc: 'Create your own custom scent in the perfume capital of the world.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
      { title: 'Eze Medieval Village', desc: 'A stone hill town perched high above the Mediterranean Sea.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Riviera Romance', duration: '5 Days / 4 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' },
      { name: 'Provence Lavender Trail', duration: '6 Days / 5 Nights', price: '₹2,15,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' },
      { name: 'Château & Wine Voyage', duration: '7 Days / 6 Nights', price: '₹3,10,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Arrival in Nice & Monaco Harbor', desc: 'Arrive in Nice. Drive along the coastal cliffs to Monaco. Check into your luxury suite overlooking the yacht harbor.' },
      { day: 'Day 2', title: 'Medieval Eze & Grasse Scent', desc: 'Walk the stone pathways of Eze medieval village, then create a bespoke perfume at a private Grasse workshop.' },
      { day: 'Day 3', title: 'Provence Lavender Fields Drive', desc: 'Journey to the Valensole plateau. Wander through blooming purple fields and visit historic stone distilleries.' },
      { day: 'Day 4', title: 'Private Yacht to Saint-Tropez', desc: 'Board a luxury yacht in Cannes. Sail along the Côte d\'Azur coastline to Saint-Tropez for a private beachside dinner.' },
      { day: 'Day 5', title: 'Cannes Coast Departure', desc: 'Walk the famous Boulevard de la Croisette in Cannes before heading to Nice airport for departure.' }
    ],
    mapPoints: [
      { name: 'Monaco', type: 'Landmark', x: '82%', y: '68%' },
      { name: 'Cannes', type: 'Relax', x: '72%', y: '78%' },
      { name: 'Grasse', type: 'Culture', x: '68%', y: '70%' },
      { name: 'Valensole', type: 'Nature', x: '45%', y: '58%' }
    ],
    reviews: [
      { name: 'Isabelle Moreau', rating: 5, text: 'The lavender scent in Valensole was dreamlike. Excellent service from start to finish.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Jean-Pierre Lacroix', rating: 5, text: 'Our yacht cruise to Saint-Tropez was the highlight. Absolutely spectacular planning.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  },
  egypt: {
    slug: 'egypt',
    name: 'Egypt',
    country: 'Egypt',
    subtitle: 'Land of Pharaohs',
    color: '#D4AF37',
    secondaryColor: '#3F000F',
    heroImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1600&q=80',
    season: 'Oct - Apr',
    shortStory: 'An ancient land where the towering Pyramids of Giza rise above golden sands, and the mighty Nile River carries secrets of thousands of years.',
    description: 'Egypt is an awe-inspiring journey through human history. From the monumental temples of Luxor to the bustling historic alleys of Cairo, it is a country of boundless archaeological wonders. Cruise the Nile in luxury wooden sailboats, explore secret royal tombs, and relax on the pristine beaches of the Red Sea.',
    quote: 'Egypt is a gift of the Nile, where every stone tells a story that was written before time began.',
    quoteAuthor: 'Herodotus',
    historyText: 'As one of the world\'s earliest civilizations, ancient Egypt developed monumental architecture, hieroglyphic writing, and complex religious beliefs that continue to captivate the human imagination. Today, its historic mosques, museums, and tombs stand as a testament to its eternal legacy.',
    stats: [
      { label: 'Best Time', value: 'Oct - Apr', icon: 'calendar' },
      { label: 'Weather', value: '15°C - 28°C', icon: 'cloud-sun' },
      { label: 'Duration', value: '6 - 8 Days', icon: 'clock' },
      { label: 'Language', value: 'Arabic / English', icon: 'languages' },
      { label: 'Currency', value: 'Egyptian Pound (EGP)', icon: 'banknote' },
      { label: 'Safety', value: 'Very Good', icon: 'shield-check' },
      { label: 'Traveler Rating', value: '4.90 / 5.0', icon: 'star' },
      { label: 'Popular Season', value: 'Winter Season', icon: 'compass' }
    ],
    whyVisit: [
      { title: 'Giza Pyramids', desc: 'Stand before the Great Pyramid, the only remaining wonder of the ancient world.', icon: 'award' },
      { title: 'Nile Cruises', desc: 'Sail the historic river on a private Dahabiya sailboat in absolute comfort.', icon: 'compass' },
      { title: 'Valley of the Kings', desc: 'Walk inside colorful tombs of ancient pharaohs, including Tutankhamun.', icon: 'utensils' },
      { title: 'Red Sea Diving', desc: 'Explore some of the world\'s best coral reefs and marine life in Sharm El-Sheikh.', icon: 'heart' }
    ],
    experiences: [
      { title: 'Adventure', desc: 'Desert safari expeditions on camels over towering golden sand dunes.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Diving in the crystal clear, coral-rich waters of the Red Sea.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Taste traditional Koshary, grilled meats, and sweet baklavas.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Explore the massive new Grand Egyptian Museum and historic Cairo bazaars.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' }
    ],
    highlights: [
      { title: 'Great Sphinx', desc: 'The legendary half-man, half-lion monument guarding the pyramids.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
      { title: 'Abu Simbel Temples', desc: 'Massive rock temples carved into a mountainside by Ramesses II.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
      { title: 'Luxor Temple', desc: 'Witness the illuminated columns and avenues of sphinxes at night.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
      { title: 'Red Sea Reefs', desc: 'Vibrant coral walls and schools of exotic fish in Ras Mohammed.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' }
    ],
    packages: [
      { name: 'Pyramids & Pharaohs', duration: '5 Days / 4 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' },
      { name: 'Nile Luxury Dahabiya', duration: '7 Days / 6 Nights', price: '₹2,65,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' },
      { name: 'Red Sea & Ruins', duration: '6 Days / 5 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80'
    ],
    timeline: [
      { day: 'Day 1', title: 'Cairo & Great Pyramids', desc: 'Arrive in Cairo. Check into your luxury suite looking at the Pyramids. Take a sunset camel ride over the Giza plateau.' },
      { day: 'Day 2', title: 'Museum & Historic Cairo', desc: 'Tour the grand treasures in the new Grand Egyptian Museum, then stroll historic El Moez street at night.' },
      { day: 'Day 3', title: 'Nile Sailing on Dahabiya', desc: 'Fly to Luxor. Board a traditional wooden Dahabiya sailboat. Cruise the peaceful Nile past ancient palms.' },
      { day: 'Day 4', title: 'Luxor Temples & Tombs', desc: 'Explore the monumental Karnak Temple and cross the river to descend into colorful royal tombs in the Valley of the Kings.' },
      { day: 'Day 5', title: 'Abu Simbel & Return', desc: 'Take a private excursion to see Abu Simbel rock temples, then fly to Cairo for departure.' }
    ],
    mapPoints: [
      { name: 'Cairo Pyramids', type: 'Landmark', x: '42%', y: '25%' },
      { name: 'Luxor Temple', type: 'Culture', x: '45%', y: '52%' },
      { name: 'Aswan High Dam', type: 'Landmark', x: '48%', y: '68%' },
      { name: 'Abu Simbel', type: 'Culture', x: '41%', y: '82%' }
    ],
    reviews: [
      { name: 'Amir Mansour', rating: 5, text: 'Standing before the Pyramids at sunset was spiritual. Perfect coordination by Golden Sparrow.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80' },
      { name: 'Nadia Hegazi', rating: 5, text: 'The Dahabiya Nile cruise was peaceful, luxurious, and beautifully private. Highly recommend.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80' }
    ]
  }
};

// Aliases for matching other slug variants or uppercase forms
destinations['italy (amalfi coast)'] = destinations['italy'];
destinations['amalfi coast'] = destinations['italy'];
destinations['amalfi'] = destinations['italy'];
destinations['bali'] = destinations['indonesia'];
destinations['zermatt'] = destinations['switzerland'];

// Expose to window object to prevent shadowing in app.js
if (typeof window !== 'undefined') {
  window.destinations = destinations;
}

// Node exports if ever required in tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = destinations;
}

// ==========================================================================
// DYNAMIC TEMPLATE PATCHER FOR 1ST 3 SECTIONS
// ==========================================================================
(function() {
  const customExperiences = {
    japan: [
      { title: 'Festivals', desc: 'Celebrate the Gion Matsuri or view cherry blossoms lit by paper lanterns at night.', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Food', desc: 'A gastronomic journey of seasonal delicacies, matcha ceremonies, and fresh street food.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Participate in calligraphy classes, watch Kabuki theatre, or try on a traditional Kimono.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Bathe in volcanic hot springs, explore mountain hiking trails, or walk the silent bamboo paths.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Experiences', desc: 'Ride the Shinkansen bullet train past Mt. Fuji or visit digital art museums.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Luxury', desc: 'Relax in 5-star mountain ryokans featuring open-air hot spring baths.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ],
    iceland: [
      { title: 'Adventure', desc: 'Snowmobile over massive glaciers or walk between tectonic plates.', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Chasing towering waterfalls like Skogafoss and Gullfoss.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Cuisine', desc: 'Savor fresh arctic char, langoustines, and volcanic rye bread baked in sand.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Relaxation', desc: 'Boutique eco-resorts with private geothermal heated pools.', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Ice Caves', desc: 'Walk inside natural solid neon-blue ice caves carved by glaciers.', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80', icon: 'snowflake' },
      { title: 'Auroras', desc: 'Watch magical green and purple northern lights twirl across the dark sky.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' }
    ],
    switzerland: [
      { title: 'Adventure', desc: 'Ski the premium slopes of Zermatt or paraglide over Interlaken.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Walk under crystal mountain waterfalls in Lauterbrunnen Valley.', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Cuisine', desc: 'Private chocolate tastings and authentic bubbling Gruyère cheese fondue.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Luxury Stays', desc: 'Chalet resorts with personal butler service and heated infinity pools.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Scenic Rail', desc: 'Ride the Glacier Express across historic stone bridges and gorges.', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', icon: 'train' },
      { title: 'Wellness', desc: 'Unwind in alpine thermal spas with direct views of the Matterhorn.', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80', icon: 'heart' }
    ],
    turkey: [
      { title: 'Culture', desc: 'Watch Sufi Whirling Dervishes perform and soak in a historic Turkish bath.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Explore the white calcified terraces and mineral pools of Pamukkale.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Gourmet Turkish mezes, slow-cooked kebabs, and pistachio baklavas.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Sailing', desc: 'Charter a private wooden gulet yacht across the Aegean coastline.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Architecture', desc: 'Tour grand Byzantine domes like the Hagia Sophia and Blue Mosque.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'landmark' },
      { title: 'Bazaars', desc: 'Explore the historic Grand Bazaar filled with spices, carpets, and lamps.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' }
    ],
    indonesia: [
      { title: 'Culture', desc: 'Witness traditional Kecak fire dances and participate in spiritual cleansing.', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Adventure', desc: 'Snorkel with manta rays in Nusa Penida and explore deep river canyons.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Gourmet Balinese cuisine, charcoal roasted suckling pig, and fresh coconut water.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Spas', desc: 'Flower baths, traditional Balinese deep tissue massages under open pavilions.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Wildlife', desc: 'Sail on a private Phinisi yacht to see giant Komodo dragons.', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Eco-Retreats', desc: 'Stay in sustainable bamboo structures suspended over lush jungle gorges.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ],
    italy: [
      { title: 'Sailing', desc: 'Private wooden gozzo boat tours around the island of Capri.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh seafood, hand-crushed pesto, local mozzarella, and lemon soufflés.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Tour historic cathedrals, paper-making mills, and terracotta workshops.', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Cliffside infinity pools that merge seamlessly with the Mediterranean horizon.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Gardens', desc: 'Stroll through cliffside gardens looking out to the blue Salerno gulf.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Lemon Groves', desc: 'Dine under pergolas of massive local lemons in family-owned orchards.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' }
    ],
    maldives: [
      { title: 'Relaxation', desc: 'Overwater spa treatment rooms featuring glass floors looking into coral reefs.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Nature', desc: 'Dive into protected house reefs, spotting sea turtles and clownfish.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Freshly caught yellowfin tuna, coconut curries, and tropical fruit platters.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Sailing', desc: 'Sunset cruises on traditional wooden dhonis, watching wild dolphins jump.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Marine Life', desc: 'Snorkel alongside gentle whale sharks in protected marine atolls.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Water Villas', desc: 'Stay in luxury overwater villas with private water slides and nets.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ],
    cappadocia: [
      { title: 'Adventure', desc: 'Dawn balloon rides and ATV valley expeditions.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Culture', desc: 'Explore historic rock-cut churches and hand-paint clay pots.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Food', desc: 'Taste slow-cooked pottery kebabs and locally brewed volcanic wines.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Photography', desc: 'Capture sunrise views from private cave terraces covered in carpets.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Undergrounds', desc: 'Descend eight levels into ancient hand-carved stone cities.', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', icon: 'landmark' },
      { title: 'Horseback', desc: 'Ride horses through the Rose and Red Valleys as the rocks turn gold.', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80', icon: 'trees' }
    ],
    kyoto: [
      { title: 'Culture', desc: 'Participate in a private tea ceremony led by a master, learning ritual movements.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Nature', desc: 'Wander the Philosopher\'s Path alongside cherry blossoms and stone shrines.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Indulge in seasonal multi-course Kaiseki cuisine, tofu dishes, and green matcha.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Crafts', desc: 'Try woodblock printing and gold-leaf decoration at local family workshops.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Temples', desc: 'Visit iconic Kinkaku-ji and Kiyomizu-dera built on massive pillars.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80', icon: 'landmark' },
      { title: 'Ryokans', desc: 'Soak in hot mineral pools at traditional wooden hot spring inns.', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ],
    santorini: [
      { title: 'Sailing', desc: 'Caldera catamaran cruises with seafood lunches cooked on board.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh octopus, Greek salads with local feta, cherry tomatoes, and honey pastries.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Visit the prehistoric ruins of Akrotiri and explore local art galleries.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Infinity pool caves looking down at the deep blue caldera.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Sunsets', desc: 'Watch the famous pink and gold sunset from the ruins of Oia castle.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Vineyards', desc: 'Taste Assyrtiko white wines at cliffside volcanic vineyards.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', icon: 'utensils' }
    ],
    france: [
      { title: 'Sailing', desc: 'Private yacht charters along the glittering blue Côte d\'Azur.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Food', desc: 'Fresh pastries, truffles, local olives, and fine vintage Bordeaux wines.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Explore perfume distilleries in Grasse and stroll historic hill towns.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Relaxation', desc: 'Luxury infinity pools looking out over the Mediterranean cliffs.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'heart' },
      { title: 'Lavender', desc: 'Stroll Valensole\'s rolling purple hills under summer heat.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'sparkles' },
      { title: 'Eco-Luxury', desc: 'Relax in sustainable 5-star mountain châteaux and vineyard villas.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ],
    egypt: [
      { title: 'Adventure', desc: 'Desert safari expeditions on camels over towering golden sand dunes.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'compass' },
      { title: 'Nature', desc: 'Diving in the crystal clear, coral-rich waters of the Red Sea.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'trees' },
      { title: 'Food', desc: 'Taste traditional Koshary, grilled meats, and sweet baklavas.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'utensils' },
      { title: 'Culture', desc: 'Explore the massive new Grand Egyptian Museum and historic Cairo bazaars.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'bookmark' },
      { title: 'Sailing', desc: 'Nile sailboat cruises past historic temples and sandbanks.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'ship' },
      { title: 'Ancient Luxury', desc: 'Stay in historic palace hotels and private luxury suites.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', icon: 'bed' }
    ]
  };

  const destinationFestivalData = {
    japan: {
      places: [
        { name: 'Kinkaku-ji Temple', rating: '4.9', meta: 'Zen Garden, Golden Leaf Temple, Mirror Lake', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80' },
        { name: 'Fushimi Inari Torii Path', rating: '4.8', meta: 'Torii Path, Mountain Shrine, Fox Statues', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80' },
        { name: 'Arashiyama Bamboo Grove', rating: '4.7', meta: 'Bamboo Paths, Tenryu-ji Temple, River Views', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
        { name: 'Tokyo Shinjuku Lights', rating: '4.8', meta: 'Neon Streets, Skyline Decks, Robot Shows', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Traditional Tea Ceremony', icon: 'cup-soda', badge: 'Cultural', color: '#E5C060' },
        { name: 'Bullet Train Shinkansen Ride', icon: 'train', badge: 'Modern Tech', color: '#8C52FF' },
        { name: 'Hot Spring Onsen Relaxation', icon: 'thermometer', badge: 'Wellness', color: '#FD79A8' },
        { name: 'Michelin Kaiseki Gastronomy', icon: 'utensils', badge: 'Gastronomy', color: '#FF6B81' }
      ],
      packages: [
        { name: 'Sakura & Shrines Luxury', duration: '6 Days / 5 Nights', price: '₹2,10,000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80' },
        { name: 'Tokyo & Kyoto Golden Trail', duration: '8 Days / 7 Nights', price: '₹2,65,000', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' },
        { name: 'Onsen & Alpine Wellness', duration: '7 Days / 6 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=80' },
        { name: 'Samurai History & Culture', duration: '7 Days / 6 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    iceland: {
      places: [
        { name: 'Strokkur Geyser', rating: '4.8', meta: 'Geothermal Steam, Golden Circle, Bubbling Mud', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' },
        { name: 'Vatnajökull Ice Cave', rating: '4.9', meta: 'Neon-Blue Glaciers, Frozen Tunnels, Crystal Caves', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80' },
        { name: 'Reynisfjara Black Beach', rating: '4.8', meta: 'Basalt Stacks, Volcanic Sands, Crashing Waves', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
        { name: 'Blue Lagoon Thermal Spa', rating: '4.9', meta: 'Silica Mud Baths, Milky-Blue Waters, Lava Views', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Northern Lights Hunting', icon: 'sparkles', badge: 'Astro', color: '#10AC84' },
        { name: 'Glacier Snowmobiling', icon: 'snowflake', badge: 'Adventure', color: '#70A1FF' },
        { name: 'Waterfalls Exploration', icon: 'compass', badge: 'Nature', color: '#2ED573' },
        { name: 'Volcanic Rye Bread Tasting', icon: 'utensils', badge: 'Cuisine', color: '#FF9F43' }
      ],
      packages: [
        { name: 'Northern Lights Deluxe Hunt', duration: '5 Days / 4 Nights', price: '₹2,35,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' },
        { name: 'Ring Road Glacier Voyage', duration: '10 Days / 9 Nights', price: '₹3,75,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' },
        { name: 'Geothermal Spa & Relax', duration: '6 Days / 5 Nights', price: '₹2,20,000', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80' },
        { name: 'Volcanoes & Ice Caves Tour', duration: '8 Days / 7 Nights', price: '₹2,95,000', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    switzerland: {
      places: [
        { name: 'Zermatt & Matterhorn', rating: '4.9', meta: 'Peak Views, Cable Cars, Car-Free Village', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80' },
        { name: 'Lauterbrunnen Valley', rating: '4.9', meta: '72 Waterfalls, Granite Cliffs, Wooden Chalets', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' },
        { name: 'Jungfraujoch Peak', rating: '4.8', meta: 'Top of Europe, Ice Palace, Sphinx Deck', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Lake Lucerne', rating: '4.7', meta: 'Chapel Bridge, Sunset Cruises, Lakeside Villas', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Glacier Express Scenic Rail', icon: 'train', badge: 'Scenic Rail', color: '#8C52FF' },
        { name: 'Alpine Cheese Fondue Tasting', icon: 'utensils', badge: 'Gastronomy', color: '#E5C060' },
        { name: 'Zermatt Skiing & Boarding', icon: 'snowflake', badge: 'Sport', color: '#70A1FF' },
        { name: 'Paragliding over Interlaken', icon: 'compass', badge: 'Adventure', color: '#FF6B81' }
      ],
      packages: [
        { name: 'Alpine Grand Panoramic Tour', duration: '7 Days / 6 Nights', price: '₹2,85,000', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=500&q=80' },
        { name: 'Lauterbrunnen Valley Retreat', duration: '6 Days / 5 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' },
        { name: 'Zermatt Skiing & Chalet Escape', duration: '8 Days / 7 Nights', price: '₹3,15,000', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80' },
        { name: 'Swiss Chocolate & Cheese Trail', duration: '5 Days / 4 Nights', price: '₹2,10,000', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    turkey: {
      places: [
        { name: 'Hagia Sophia Grand Dome', rating: '4.9', meta: 'Byzantine Dome, Islamic Art, Golden Mosaics', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ephesus Ancient City', rating: '4.8', meta: 'Celsus Library, Marble Streets, Roman Theater', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Pamukkale Travertines', rating: '4.9', meta: 'Mineral Cascades, White Terraces, Cleopatra Pool', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Istanbul Grand Bazaar', rating: '4.7', meta: 'Spices & Sweets, Turkish Lamps, Antique Rugs', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Whirling Dervishes Ritual', icon: 'sparkles', badge: 'Spiritual', color: '#D17A7A' },
        { name: 'Private Bosphorus Yacht Sail', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Traditional Hamam Spa Scrub', icon: 'heart', badge: 'Wellness', color: '#FD79A8' },
        { name: 'Gourmet Turkish Kebab Tasting', icon: 'utensils', badge: 'Cuisine', color: '#E5C060' }
      ],
      packages: [
        { name: 'Ottoman Domes & Palaces', duration: '6 Days / 5 Nights', price: '₹1,85,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
        { name: 'Aegean Yacht & Sailing', duration: '8 Days / 7 Nights', price: '₹2,75,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
        { name: 'Pamukkale Thermal Springs', duration: '6 Days / 5 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
        { name: 'Turkish Spices & Bazaars', duration: '5 Days / 4 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    indonesia: {
      places: [
        { name: 'Uluwatu Sunset Temple', rating: '4.8', meta: 'Cliffside Shrines, Kecak Dance, Ocean Views', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Tegalalang Rice Terraces', rating: '4.8', meta: 'Emerald Cascades, Jungle Swings, Subak Farming', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80' },
        { name: 'Mount Bromo Sunrise Crater', rating: '4.9', meta: 'Volcanic Caldera, Sunrise Trails, Sea of Sand', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
        { name: 'Kelingking Beach Cliffs', rating: '4.7', meta: 'T-Rex Cliff, Manta Rays, Limestone Arches', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Kecak Fire Dance Show', icon: 'music', badge: 'Performance', color: '#FF6B81' },
        { name: 'Snorkeling with Manta Rays', icon: 'fish', badge: 'Wildlife', color: '#00D2C4' },
        { name: 'Spiritual Tirta Empul Cleanse', icon: 'sparkles', badge: 'Cultural', color: '#E5C060' },
        { name: 'Luxury Flower Bath Spa', icon: 'heart', badge: 'Wellness', color: '#FD79A8' }
      ],
      packages: [
        { name: 'Bali Spiritual & Eco Retreat', duration: '6 Days / 5 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80' },
        { name: 'Komodo Wooden Phinisi Cruise', duration: '8 Days / 7 Nights', price: '₹2,55,000', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80' },
        { name: 'Volcanoes & Rice Terraces Trail', duration: '7 Days / 6 Nights', price: '₹1,85,000', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=80' },
        { name: 'Nusa Penida Island Escape', duration: '5 Days / 4 Nights', price: '₹1,45,000', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    italy: {
      places: [
        { name: 'Positano Cliffside Houses', rating: '4.9', meta: 'Pastel Houses, Pebbled Beaches, Coastal Paths', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
        { name: 'Villa Cimbrone Ravello', rating: '4.8', meta: 'Infinity Terrace, Marble Busts, Cliff Gardens', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80' },
        { name: 'Capri Blue Grotto Caves', rating: '4.7', meta: 'Glowing Blue Caves, Limestone Cliffs, Yacht Docks', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
        { name: 'Amalfi Cathedral Square', rating: '4.8', meta: 'Amalfi Cathedral, Paper Museums, Historic Ports', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Private Gozzo Boat Charter', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Lemongrow Cooking Class', icon: 'utensils', badge: 'Cuisine', color: '#E5C060' },
        { name: 'Path of the Gods Hiking', icon: 'compass', badge: 'Adventure', color: '#2ED573' },
        { name: 'Limoncello Liqueur Tasting', icon: 'award', badge: 'Tasting', color: '#FF9F43' }
      ],
      packages: [
        { name: 'Amalfi Coast Cliffside Luxury', duration: '6 Days / 5 Nights', price: '₹2,75,000', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80' },
        { name: 'Capri Yachting & Romance', duration: '7 Days / 6 Nights', price: '₹3,55,000', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80' },
        { name: 'Ravello Gardens & Music Festival', duration: '6 Days / 5 Nights', price: '₹2,95,000', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80' },
        { name: 'Italian Pasta & Lemon Groves', duration: '5 Days / 4 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    maldives: {
      places: [
        { name: 'Baa Atoll Biosphere', rating: '4.9', meta: 'UNESCO Biosphere, Manta Rays, Coral Gardens', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Hanifaru Bay Coral Lagoon', rating: '4.8', meta: 'Manta Feeding Groups, Whale Sharks, Crystal Lagoons', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
        { name: 'Solitary Powder Sandbank', rating: '4.9', meta: 'White Powder Sand, Turquoise Horizons, Low Tide Strips', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ithaa Undersea Diner', rating: '4.8', meta: 'Glass Undersea Dome, Marine Coral Views, Seafood', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Whale Shark Snorkeling', icon: 'fish', badge: 'Wildlife', color: '#00D2C4' },
        { name: 'Sunset Dhoni Boat Cruise', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Glass-Floored Overwater Spa', icon: 'heart', badge: 'Wellness', color: '#FD79A8' },
        { name: 'Private Sandbank Dining', icon: 'utensils', badge: 'Gastronomy', color: '#E5C060' }
      ],
      packages: [
        { name: 'Maldives Overwater Bliss', duration: '5 Days / 4 Nights', price: '₹2,95,000', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=500&q=80' },
        { name: 'Undersea Fine Dining Tour', duration: '7 Days / 6 Nights', price: '₹3,95,000', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80' },
        { name: 'Private Island Sandbank Voyage', duration: '6 Days / 5 Nights', price: '₹3,45,000', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=500&q=80' },
        { name: 'Manta Ray & Coral Expedition', duration: '6 Days / 5 Nights', price: '₹3,15,000', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    cappadocia: {
      places: [
        { name: 'Goreme Open Air Museum', rating: '4.9', meta: 'Frescoed Churches, Cave Monasteries, Byzantine Art', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Uchisar Rock Castle', rating: '4.8', meta: 'Highest Peak Views, Volcanic Rock, Valley Panoramas', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80' },
        { name: 'Kaymakli Underground City', rating: '4.8', meta: '8 Underground Levels, Stone Vent Shafts, Cave Tunnels', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
        { name: 'Love Valley Chimneys', rating: '4.7', meta: 'Fairy Chimneys, Sunrise Trails, Rock Formations', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Dawn Hot Air Balloon Flight', icon: 'cloud', badge: 'Aero Flight', color: '#FF9F43' },
        { name: 'Clay Pottery Throwing', icon: 'award', badge: 'Crafts', color: '#E5C060' },
        { name: 'Rose Valley Horseback Riding', icon: 'compass', badge: 'Adventure', color: '#2ED573' },
        { name: 'Slow-Cooked Pottery Kebab', icon: 'utensils', badge: 'Gastronomy', color: '#FF6B81' }
      ],
      packages: [
        { name: 'Balloon Flight & Fairy Chimneys', duration: '4 Days / 3 Nights', price: '₹1,75,000', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=500&q=80' },
        { name: 'Cave Suite Luxury Escape', duration: '5 Days / 4 Nights', price: '₹2,10,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' },
        { name: 'Volcanic Valley Horse Trails', duration: '5 Days / 4 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=500&q=80' },
        { name: 'Underground Cities Exploration', duration: '4 Days / 3 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    kyoto: {
      places: [
        { name: 'Kiyomizu-dera Wooden Stage', rating: '4.9', meta: 'Wooden Stage, Sacred Spring, Maple Forests', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
        { name: 'Golden Pavilion Kinkaku-ji', rating: '4.9', meta: 'Golden Leaf Zen Temple, Reflecting Lake, Pine Gardens', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80' },
        { name: 'Arashiyama Bamboo Paths', rating: '4.8', meta: 'Green Bamboo Stalks, River Bridges, Monkey Park', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
        { name: 'Fushimi Inari Torii Path', rating: '4.8', meta: '10,000 Torii Gates, Mountain Hiking, Fox Shrines', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Private Master Tea Ceremony', icon: 'cup-soda', badge: 'Cultural', color: '#E5C060' },
        { name: 'Traditional Kaiseki Dining', icon: 'utensils', badge: 'Gastronomy', color: '#FF6B81' },
        { name: 'Gion Geisha Twilight Walk', icon: 'bookmark', badge: 'History', color: '#D17A7A' },
        { name: 'Zen Temple Moss Meditation', icon: 'sparkles', badge: 'Wellness', color: '#10AC84' }
      ],
      packages: [
        { name: 'Kyoto Shrines & Temples Tour', duration: '4 Days / 3 Nights', price: '₹1,65,000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80' },
        { name: 'Zen Garden Luxury Retreat', duration: '5 Days / 4 Nights', price: '₹1,85,000', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=80' },
        { name: 'Geisha Culture & Kaiseki Dinner', duration: '6 Days / 5 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' },
        { name: 'Arashiyama Bamboo & River Boat', duration: '5 Days / 4 Nights', price: '₹1,75,000', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    santorini: {
      places: [
        { name: 'Oia Blue Domes Church', rating: '4.9', meta: 'Anastasi Church, White Cliff Lanes, Caldera Panoramas', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
        { name: 'Amoudi Bay Seafood Docks', rating: '4.8', meta: '300 Stone Steps, Waterfront Tavernas, Red Cliffs', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
        { name: 'Akrotiri Minoan Ruins', rating: '4.7', meta: 'Volcanic Ash Preservation, Bronze Age Art, Stone Lanes', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' },
        { name: 'Santorini Volcanic Red Beach', rating: '4.7', meta: 'Iron-Rich Volcanic Cliffs, Red Sands, Turquoise Waters', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Caldera Catamaran Cruise', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Assyrtiko Wine Cliffside Tasting', icon: 'glass-water', badge: 'Tasting', color: '#E5C060' },
        { name: 'Sunset Oia Castle Viewing', icon: 'sparkles', badge: 'Scenic View', color: '#FF9F43' },
        { name: 'Volcanic Cave Pool Wellness', icon: 'heart', badge: 'Wellness', color: '#FD79A8' }
      ],
      packages: [
        { name: 'Aegean Romance & Cave Pools', duration: '4 Days / 3 Nights', price: '₹2,10,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' },
        { name: 'Caldera Catamaran Deluxe Voyage', duration: '5 Days / 4 Nights', price: '₹2,55,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' },
        { name: 'Santorini Volcanic Wine Tour', duration: '6 Days / 5 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' },
        { name: 'Oia Sunsets & Akrotiri History', duration: '4 Days / 3 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    france: {
      places: [
        { name: 'Monaco Yacht Port', rating: '4.9', meta: 'Casino Square, Superyachts, Formula 1 Tracks', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
        { name: 'Eze Stone Village', rating: '4.8', meta: 'Medieval Streets, Exotic Gardens, Sea Panoramas', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
        { name: 'Valensole Plateau', rating: '4.9', meta: 'Lavender Fields, Honey Farms, Lavender Ice Cream', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
        { name: 'Cannes Boulevard', rating: '4.7', meta: 'Cannes Red Carpet, Sandy Beaches, Film Palaces', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Grasse Perfume Designing', icon: 'award', badge: 'Crafts', color: '#8C52FF' },
        { name: 'Saint-Tropez Yacht Sailing', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Provence Lavender Harvesting', icon: 'sparkles', badge: 'Nature', color: '#2ED573' },
        { name: 'Michelin Star Gastronomy', icon: 'utensils', badge: 'Gastronomy', color: '#FF6B81' }
      ],
      packages: [
        { name: 'Cote d\'Azur Luxury Yachting', duration: '5 Days / 4 Nights', price: '₹2,45,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' },
        { name: 'Provence Lavender Retreat', duration: '6 Days / 5 Nights', price: '₹2,15,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' },
        { name: 'Chateau & Wine Degustation', duration: '7 Days / 6 Nights', price: '₹3,10,000', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80' }
      ]
    },
    egypt: {
      places: [
        { name: 'Great Pyramid of Giza', rating: '4.9', meta: 'Ancient Wonder, Great Sphinx, Camel Trails', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
        { name: 'Karnak Pillar Temple', rating: '4.8', meta: 'Luxor Temple, Sphinx Avenues, Hieroglyph Walls', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
        { name: 'Abu Simbel Mountain Temple', rating: '4.9', meta: 'Pharaoh Statues, Sun Alignment, High Dam Reservoir', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ras Mohammed Red Sea Coral', rating: '4.8', meta: 'Vibrant Coral Walls, Reef Sharks, Exotic Fish', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80' }
      ],
      experiences: [
        { name: 'Nile Sailing Cruise', icon: 'ship', badge: 'Sailing', color: '#70A1FF' },
        { name: 'Pyramids camel safari', icon: 'compass', badge: 'Adventure', color: '#FF9F43' },
        { name: 'Valley of Kings Exploration', icon: 'sparkles', badge: 'History', color: '#E5C060' },
        { name: 'Red Sea Deep Reef Diving', icon: 'fish', badge: 'Wildlife', color: '#00D2C4' }
      ],
      packages: [
        { name: 'Ancient Pharoahs & Pyramids', duration: '5 Days / 4 Nights', price: '₹1,95,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' },
        { name: 'Luxury Nile Dahabiya Sail', duration: '7 Days / 6 Nights', price: '₹2,65,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' },
        { name: 'Red Sea Diving Resort', duration: '6 Days / 5 Nights', price: '₹2,25,000', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80' }
      ]
    }
  };

  // Expose to window so festivals.js overlay can read it (const is NOT auto-added to window)
  window.destinationFestivalData = destinationFestivalData;

  // Assign exactly 6 custom, rich experiences to each destination
  for (let slug in destinations) {
    if (destinations[slug]) {
      const customExps = customExperiences[slug];
      if (customExps) {
        destinations[slug].experiences = customExps;
      }
    }
  }

  // Set up DOM Interceptor
  const originalGetElementById = document.getElementById;
  document.getElementById = function(id) {
    const el = originalGetElementById.call(document, id);
    if (id === 'detail-dynamic-content' && el) {
      if (!el.__patched) {
        el.__patched = true;
        const innerHTMLDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
        const originalSet = innerHTMLDescriptor.set;
        const originalGet = innerHTMLDescriptor.get;

        Object.defineProperty(el, 'innerHTML', {
          get() {
            return originalGet.call(this);
          },
          set(val) {
            // Capture current slug for festival navigation click handlers
            const _path = window.location.pathname;
            const _pathMatch = _path.match(/\/destination\/([a-zA-Z0-9_-]+)/);
            el._currentSlug = _pathMatch ? _pathMatch[1].toLowerCase() : 'japan';

            const modifiedVal = patchTemplateHTML(val);
            originalSet.call(this, modifiedVal);

            // Re-trigger Lucide icons
            if (window.lucide) {
              window.lucide.createIcons();
            }

            // Initialize Luxury Itinerary scroll listeners
            setTimeout(() => {
              if (window.initLuxuryItineraryScroll) {
                window.initLuxuryItineraryScroll();
              }
            }, 200);

            // Reposition Sticky Sub-Navigation Bar dynamically below the new Hero section
            const subnav = document.getElementById('detail-subnav-wrapper');
            const heroWrapper = document.getElementById('detail-overview');
            if (subnav && heroWrapper) {
              heroWrapper.parentNode.insertBefore(subnav, heroWrapper.nextSibling);
              subnav.style.display = 'block';
            }

            // Tag the destination-view with the current slug for back-navigation in festival view
            const destView = document.getElementById('destination-view');
            if (destView && el._currentSlug) {
              destView.dataset.loadedSlug = el._currentSlug;
            }

            // Attach festival navigation click handlers via FestivalView API
            setTimeout(() => {
              const slug = el._currentSlug || 'japan';
              if (window.FestivalView && window.FestivalView.attachClickHandlers) {
                window.FestivalView.attachClickHandlers(slug);
              }
            }, 150);
          },
          configurable: true
        });
      }
    }
    return el;
  };

  // Inject CSS Styles
  const style = document.createElement('style');
  style.textContent = `
    /* Absolute sticky header for full bleed hero integration */
    .detail-header-wrapper {
      position: absolute !important;
      top: 1.25rem !important;
      left: 0 !important;
      width: 100% !important;
      z-index: 100 !important;
      background: transparent !important;
      box-shadow: none !important;
      border: none !important;
      padding: 0 !important;
      display: flex !important;
      justify-content: center !important;
      pointer-events: none !important;
    }
    
    /* Hide the share and heart buttons next to Nest Balance in destination detail header */
    .detail-header .btn-detail-share,
    .detail-header .btn-detail-heart {
      display: none !important;
    }

    /* Premium full-bleed hero banner extending under the header */
    .new-detail-hero {
      position: relative;
      width: 100%;
      height: 85vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      padding: 120px 8% 0 8% !important; /* Top padding to prevent header overlap */
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom: 0rem; /* No margin - connects directly to discover section */
    }
    
    /* Reduced white overlay: Fades out quickly to show the beautiful destination imagery */
    .new-detail-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #FAF6EE 12%, rgba(250, 246, 238, 0.85) 30%, rgba(250, 246, 238, 0) 65%);
      z-index: 1;
    }
    .new-detail-hero-content {
      position: relative;
      z-index: 2;
      max-width: 520px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
    }
    .new-hero-welcome {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: #A97C37;
      letter-spacing: 0.25em;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    .new-hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 5.2rem;
      font-weight: 300;
      line-height: 1.05;
      color: #1E2C22;
      margin: 0.4rem 0 1.2rem 0;
    }
    .new-hero-divider {
      width: 60px;
      height: 2px;
      background-color: #A97C37;
      margin-bottom: 1.5rem;
    }
    .new-hero-desc {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.05rem;
      line-height: 1.6;
      color: #555;
      margin-bottom: 2rem;
    }
    .btn-watch-story {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #FFFFFF !important;
      border: 1px solid #A97C37 !important;
      padding: 8px 24px 8px 8px !important;
      border-radius: 50px !important;
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 0.95rem !important;
      font-weight: 600 !important;
      color: #A97C37 !important;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04) !important;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    }
    .btn-watch-story:hover {
      background: #FBF9F6 !important;
      border-color: #A97C37 !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 6px 20px rgba(169, 124, 55, 0.15) !important;
    }
    
    /* Play icon circle styled with gold outline, transparent background matching ref image */
    .play-icon-circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: transparent !important;
      border: 1px solid #A97C37 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #A97C37 !important;
    }
    .play-icon-circle i, .play-icon-circle svg {
      width: 14px;
      height: 14px;
      margin-left: 2px;
    }

    /* Discover experiences section with sparrow separator line */
    .new-discover-section {
      padding: 5rem 0 8rem 0;
      text-align: center;
    }
    .new-discover-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: #A97C37;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }
    .new-discover-separator {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
      width: 100%;
    }
    .sep-line {
      flex: 1;
      max-width: 120px;
      height: 1px;
      background-color: rgba(169, 124, 55, 0.25);
    }
    .new-discover-sparrow {
      width: 24px;
      height: 24px;
      display: inline-block;
    }
    .new-discover-sparrow-img {
      width: 24px;
      height: 24px;
      display: inline-block;
    }
    .new-discover-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1.25rem;
      width: 100%;
      box-sizing: border-box;
    }
    @media (max-width: 1200px) {
      .new-discover-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
    }
    @media (max-width: 768px) {
      .new-discover-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 480px) {
      .new-discover-grid {
        grid-template-columns: 1fr;
      }
    }
    
    /* Framed experiences cards exactly matching reference image */
    .new-disc-card {
      background: #FFFFFF !important;
      border-radius: 28px !important;
      overflow: visible !important;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 14px 14px 1rem 14px !important; /* Inset padding for framed effect */
      border: 1px solid rgba(30, 26, 21, 0.08) !important;
      box-shadow: 
        0 15px 35px rgba(0, 0, 0, 0.04),
        0 4px 15px rgba(0, 0, 0, 0.01) !important;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
      position: relative;
      -webkit-box-reflect: below 8px linear-gradient(transparent, transparent 55%, rgba(255, 255, 255, 0.12));
    }
    .new-disc-card:hover {
      transform: translateY(-8px) scale(1.02) !important;
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.08),
        0 8px 25px rgba(0, 0, 0, 0.03) !important;
      border-color: rgba(30, 26, 21, 0.15) !important;
    }
    .new-disc-card-img {
      width: 100%;
      height: 160px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 18px !important; /* Framed nested image */
    }
    .new-disc-card-icon-wrapper {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.12);
      color: #FFFFFF;
      z-index: 2;
      transition: all 0.3s ease;
    }
    .new-disc-card:hover .new-disc-card-icon-wrapper {
      transform: translateX(-50%) scale(1.08);
      box-shadow: 0 6px 18px rgba(0,0,0,0.18);
    }
    .new-disc-card-icon-wrapper i, .new-disc-card-icon-wrapper svg {
      width: 18px;
      height: 18px;
    }
    .new-disc-card-body {
      margin-top: 30px;
      padding: 0 0.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }
    .new-disc-card-title {
      font-family: 'Cormorant Garamond', serif !important;
      font-size: 1.65rem !important;
      font-weight: 600 !important;
      color: #1E2C22 !important;
      margin-bottom: 0.2rem !important;
      line-height: 1.2;
    }
    .new-disc-card-divider {
      width: 32px;
      height: 1.5px;
      background: var(--card-accent, #A97C37);
      margin: 8px auto 12px auto;
      opacity: 0.6;
      transition: width 0.3s ease;
    }
    .new-disc-card:hover .new-disc-card-divider {
      width: 55px;
    }
    .new-disc-card-desc {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 0.78rem !important;
      color: #555 !important;
      line-height: 1.5 !important;
      margin-bottom: 1.2rem !important;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      height: 3.0em;
    }
    .new-disc-card-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: auto;
    }
    .new-disc-card-dots span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--card-accent, #A97C37);
      opacity: 0.25;
      transition: all 0.3s ease;
    }
    .new-disc-card-dots span:nth-child(2) {
      opacity: 1;
      transform: scale(1.2);
    }
    .new-disc-card:hover .new-disc-card-dots span:nth-child(1),
    .new-disc-card:hover .new-disc-card-dots span:nth-child(3) {
      opacity: 0.55;
    }
    
    /* Dynamic glows and sparkles on edges matching ref image */
    .new-disc-card::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 30px;
      background: radial-gradient(circle at 10% 85%, var(--card-accent), transparent 35%),
                  radial-gradient(circle at 90% 80%, var(--card-accent), transparent 35%);
      opacity: 0.15;
      filter: blur(6px);
      z-index: -1;
      pointer-events: none;
      transition: opacity 0.5s ease, filter 0.5s ease;
    }
    .new-disc-card:hover::after {
      opacity: 0.35;
      filter: blur(10px);
    }
    

    /* Handpicked highlights section without sub-headline */
    .new-highlights-section {
      padding: 4rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(250, 246, 238, 0.4) 100%) !important;
      backdrop-filter: blur(15px);
    }
    
    /* Force hiding of the redundant subtitle/section title inside highlights section */
    .new-highlights-section .detail-section-title {
      display: none !important;
    }
    
    .new-hl-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.2rem;
      width: 100%;
    }
    .new-hl-tag {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #A97C37;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin: 0;
    }
    .new-hl-view-all {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: #A97C37;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.2s;
    }
    .new-hl-view-all:hover {
      opacity: 0.8;
    }
    .new-highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      width: 100%;
    }
    @media (max-width: 1024px) {
      .new-highlights-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 560px) {
      .new-highlights-grid {
        grid-template-columns: 1fr;
      }
    }
    .new-hl-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
      backdrop-filter: blur(25px) saturate(135%) !important;
      -webkit-backdrop-filter: blur(25px) saturate(135%) !important;
      border-radius: 28px !important;
      padding: 12px 12px 1.4rem 12px !important; /* inset padding for glass frame */
      border: 1px solid rgba(255, 255, 255, 0.45) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.6), 
        inset 0 15px 25px rgba(255, 255, 255, 0.2), 
        0 15px 35px rgba(0, 0, 0, 0.04) !important;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
    }
    .new-hl-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 100%, var(--card-accent, rgba(169, 124, 55, 0.15)) 0%, transparent 60%);
      opacity: 0;
      z-index: 0;
      transition: opacity 0.5s ease;
      border-radius: 28px;
      pointer-events: none;
    }
    .new-hl-card:hover {
      transform: translateY(-6px) scale(1.01) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.7), 
        inset 0 15px 25px rgba(255, 255, 255, 0.25), 
        0 20px 45px rgba(0, 0, 0, 0.08) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
      background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 169, 124, 55), 0.18) 0%, rgba(var(--card-accent-rgb, 169, 124, 55), 0.06) 100%) !important;
    }
    .new-hl-card:hover::after {
      opacity: 0.35;
    }
    .new-hl-card-img {
      height: 180px;
      background-size: cover;
      background-position: center;
      border-radius: 18px !important; /* Framed nested image */
      position: relative;
    }
    .new-hl-card-icon-wrapper {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      z-index: 10;
      transition: transform 0.3s ease;
    }
    .new-hl-card:hover .new-hl-card-icon-wrapper {
      transform: translateX(-50%) scale(1.08);
    }
    .new-hl-card-icon-wrapper i, .new-hl-card-icon-wrapper svg {
      width: 18px;
      height: 18px;
    }
    .new-hl-card-body {
      padding: 1.5rem 0.5rem 0 0.5rem !important;
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: center;
      z-index: 1;
    }
    .new-hl-card-title {
      font-family: 'Cormorant Garamond', serif !important;
      font-size: 1.65rem !important;
      font-weight: 600 !important;
      color: #1E2C22 !important;
      margin-bottom: 0.2rem !important;
      line-height: 1.2;
    }
    .new-hl-card-divider {
      width: 32px;
      height: 1.5px;
      background: var(--card-accent, #A97C37);
      margin: 8px auto 12px auto;
      opacity: 0.6;
      transition: width 0.3s ease;
    }
    .new-hl-card:hover .new-hl-card-divider {
      width: 55px;
    }
    .new-hl-card-desc {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 0.78rem !important;
      color: #555 !important;
      line-height: 1.5 !important;
      margin-bottom: 1.2rem !important;
      font-weight: 400;
    }
    .new-hl-card-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-top: auto;
    }
    .new-hl-card-dots span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--card-accent, #A97C37);
      opacity: 0.25;
      transition: all 0.3s ease;
    }
    .new-hl-card:hover .new-hl-card-dots span:nth-child(2) {
      opacity: 1;
      transform: scale(1.2);
    }
    .new-hl-card-btn {
      position: absolute;
      bottom: 1.4rem;
      right: 1.4rem;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #A97C37;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      color: #FFFFFF;
      transition: all 0.3s;
    }
    .new-hl-card-btn:hover {
      background: #1E2C22;
      transform: scale(1.08);
    }
    .new-hl-card-btn i, .new-hl-card-btn svg {
      width: 14px;
      height: 14px;
    }

    /* Move subnav to stick properly below header */
    .detail-subnav-wrapper {
      background: rgba(250, 246, 238, 0.45) !important;
      backdrop-filter: blur(25px) saturate(120%) !important;
      -webkit-backdrop-filter: blur(25px) saturate(120%) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important;
      top: 0px !important; /* Stick at top of the viewport since header is absolute */
    }
    
    /* Make section containers take full width (with 5% side gutters) */
    .new-discover-section.container,
    .new-highlights-section.container,
    .new-festival-section .container,
    .signature-exp-section .container,
    .curated-packages-section .container,
    .detail-gallery-section.container,
    .detail-timeline-section.container {
      max-width: 100% !important;
      width: 100% !important;
      padding-left: 5% !important;
      padding-right: 5% !important;
      box-sizing: border-box !important;
    }
    
    /* Circular back button styled gold/brown */
    .detail-header .btn-detail-back {
      width: 48px !important;
      height: 48px !important;
      border-radius: 50% !important;
      background: rgba(255, 255, 255, 0.45) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border: 1px solid rgba(255, 255, 255, 0.4) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0 !important;
      color: var(--text-dark) !important;
      box-shadow: 0 4px 12px rgba(30, 26, 21, 0.03) !important;
      transition: all 0.3s ease !important;
    }
    .detail-header .btn-detail-back:hover {
      transform: scale(1.05) !important;
      border-color: rgba(169, 124, 55, 0.45) !important;
    }
    .detail-header .btn-detail-back span {
      display: none !important;
    }
    .detail-header .btn-detail-back i, .detail-header .btn-detail-back svg {
      margin: 0 !important;
      width: 18px !important;
      height: 18px !important;
    }

    /* Centered Header Brand Group */
    .detail-header .brand-group {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 2px !important;
    }
    .detail-header .brand-logo {
      width: 32px !important;
      height: 32px !important;
      margin: 0 0 4px 0 !important;
      filter: sepia(1) saturate(5) hue-rotate(15deg) !important;
    }
    .detail-header .brand-name {
      font-size: 0.85rem !important;
      letter-spacing: 0.25em !important;
      font-weight: 700 !important;
      color: #A97C37 !important;
      margin: 0 !important;
      text-transform: uppercase !important;
    }

    /* Transparent header details wallet pill override matching home-view / ref image */
    .detail-header .wallet-pill {
      background: rgba(255, 255, 255, 0.45) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border: 1px solid rgba(255, 255, 255, 0.4) !important;
      box-shadow: 0 4px 12px rgba(30, 26, 21, 0.03) !important;
      display: flex !important;
      align-items: center !important;
      gap: 12px !important;
      padding: 6px 16px !important;
      border-radius: 50px !important;
    }
    .detail-header .wallet-icon {
      background: rgba(169, 124, 55, 0.08) !important;
      border-radius: 50% !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .detail-header .wallet-arrow {
      color: #A97C37 !important;
      width: 16px !important;
      height: 16px !important;
      margin-left: 4px !important;
      display: inline-block !important;
    }

    /* Section 4a: Local Festivals & Top Places - Full width 4-col grid */
    .new-festival-section {
      padding: 5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      background: linear-gradient(180deg, rgba(250, 246, 238, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%) !important;
      backdrop-filter: blur(15px);
    }
    .places-grid-full {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .places-grid-full {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 576px) {
      .places-grid-full {
        grid-template-columns: 1fr;
      }
    }

    /* Section 4b: Signature Experiences - Alternating bg, full-width 2x2 grid of cards */
    .signature-exp-section {
      padding: 5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      background: linear-gradient(180deg, rgba(250, 249, 246, 0.45) 0%, rgba(245, 243, 238, 0.2) 100%) !important;
      backdrop-filter: blur(15px);
    }
    .sig-exp-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .sig-exp-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 576px) {
      .sig-exp-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .place-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
      backdrop-filter: blur(20px) saturate(130%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(130%) !important;
      border-radius: 24px !important;
      padding: 10px 10px 1.2rem 10px !important; /* inset padding for glass frame */
      border: 1px solid rgba(255, 255, 255, 0.45) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.6), 
        inset 0 15px 25px rgba(255, 255, 255, 0.2), 
        0 15px 35px rgba(0, 0, 0, 0.04) !important;
      display: flex;
      flex-direction: column;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      position: relative;
      -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
    }
    .place-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 100%, var(--card-accent, rgba(169, 124, 55, 0.15)) 0%, transparent 60%);
      opacity: 0;
      z-index: 0;
      transition: opacity 0.5s ease;
      border-radius: 24px;
      pointer-events: none;
    }
    .place-card:hover {
      transform: translateY(-5px) scale(1.01) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.7), 
        inset 0 15px 25px rgba(255, 255, 255, 0.25), 
        0 20px 45px rgba(0, 0, 0, 0.08) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
      background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 229, 192, 96), 0.18) 0%, rgba(var(--card-accent-rgb, 229, 192, 96), 0.06) 100%) !important;
    }
    .place-card:hover::after {
      opacity: 0.35;
    }
    
    .place-card-img {
      height: 140px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 16px !important; /* Framed nested image */
    }
    .place-card-icon-wrapper {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      z-index: 10;
      transition: transform 0.3s ease;
    }
    .place-card:hover .place-card-icon-wrapper {
      transform: translateX(-50%) scale(1.08);
    }
    .place-card-icon-wrapper i, .place-card-icon-wrapper svg {
      width: 18px;
      height: 18px;
    }
    
    .rating-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(8px);
      padding: 4px 10px;
      border-radius: 50px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      color: #1E2C22;
      display: flex;
      align-items: center;
      gap: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      z-index: 10;
    }
    
    .place-card-body {
      padding: 1.5rem 0.4rem 0 0.4rem !important;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      z-index: 1;
    }
    
    .place-card-title {
      font-family: 'Cormorant Garamond', serif !important;
      font-size: 1.5rem !important;
      font-weight: 600 !important;
      color: #1E2C22 !important;
      margin-bottom: 0.2rem !important;
      line-height: 1.2;
    }
    .place-card-divider {
      width: 32px;
      height: 1.5px;
      background: var(--card-accent, #A97C37);
      margin: 8px auto 12px auto;
      opacity: 0.6;
      transition: width 0.3s ease;
    }
    .place-card:hover .place-card-divider {
      width: 55px;
    }
    
    .place-card-meta {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 0.78rem !important;
      color: #555 !important;
      line-height: 1.5 !important;
      margin-bottom: 1.2rem !important;
      font-weight: 400;
    }
    .place-card-btn {
      transition: all 0.3s ease !important;
    }
    .place-card:hover .place-card-btn {
      background: #1E2C22 !important;
      color: #FFFFFF !important;
      box-shadow: 0 4px 12px rgba(30, 44, 34, 0.2) !important;
    }
    
    /* Imageless Cards - First Reference Image Style */
    .experience-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      min-height: 200px;
      padding: 24px !important;
      border-radius: 24px !important;
      background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 255, 255, 255), 0.06) 0%, rgba(var(--card-accent-rgb, 255, 255, 255), 0.02) 100%) !important;
      backdrop-filter: blur(25px) saturate(130%) !important;
      -webkit-backdrop-filter: blur(25px) saturate(130%) !important;
      border: 1px solid rgba(255, 255, 255, 0.45) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.6), 
        inset 0 10px 20px rgba(255, 255, 255, 0.15), 
        0 10px 30px rgba(0, 0, 0, 0.03) !important;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      cursor: pointer;
      overflow: hidden;
    }
    .experience-item::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 80% 20%, var(--card-accent, rgba(169, 124, 55, 0.15)) 0%, transparent 60%);
      opacity: 0.25;
      z-index: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .experience-item:hover {
      transform: translateY(-5px) scale(1.01) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.7), 
        inset 0 10px 20px rgba(255, 255, 255, 0.2), 
        0 15px 40px rgba(0, 0, 0, 0.06) !important;
      background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 255, 255, 255), 0.12) 0%, rgba(var(--card-accent-rgb, 255, 255, 255), 0.04) 100%) !important;
    }
    .experience-item:hover::before {
      opacity: 0.45;
    }
    .exp-card-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      z-index: 1;
    }
    .exp-card-icon-badge {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 4px 10px rgba(0,0,0,0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--card-accent, #A97C37);
      transition: transform 0.3s ease;
    }
    .experience-item:hover .exp-card-icon-badge {
      transform: scale(1.05);
    }
    .exp-card-icon-badge i,
    .exp-card-icon-badge svg {
      width: 20px;
      height: 20px;
    }
    .exp-card-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1.5px solid rgba(0,0,0,0.15);
      opacity: 0.5;
    }
    .exp-card-title {
      font-family: 'Plus Jakarta Sans', sans-serif !important;
      font-size: 1.15rem !important;
      font-weight: 700 !important;
      color: #1E2C22 !important;
      margin: 1.2rem 0 0.6rem 0 !important;
      text-align: left;
      line-height: 1.3;
      z-index: 1;
      width: 100%;
    }
    .exp-card-footer-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: auto;
      z-index: 1;
    }
    .exp-card-badge {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.68rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 50px;
      letter-spacing: 0.03em;
    }
    .exp-card-action-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: transparent;
      color: #1E2C22;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .experience-item:hover .exp-card-action-btn {
      background: #1E2C22;
      color: #FFFFFF;
      border-color: #1E2C22;
    }
    .exp-card-action-btn i,
    .exp-card-action-btn svg {
      width: 14px;
      height: 14px;
    }
    
    .curated-packages-section {
      padding: 5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      background: linear-gradient(180deg, rgba(250, 246, 238, 0.4) 0%, rgba(255, 255, 255, 0.15) 100%) !important;
      backdrop-filter: blur(15px);
    }
    
    .packages-premium-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      width: 100%;
    }
    @media (max-width: 1200px) {
      .packages-premium-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 600px) {
      .packages-premium-grid {
        grid-template-columns: 1fr;
      }
    }
    
    .package-card-premium {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
      backdrop-filter: blur(20px) saturate(130%) !important;
      -webkit-backdrop-filter: blur(20px) saturate(130%) !important;
      border-radius: 24px !important;
      padding: 10px 10px 1.2rem 10px !important; /* inset padding for glass frame */
      border: 1px solid rgba(255, 255, 255, 0.45) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.6), 
        inset 0 15px 25px rgba(255, 255, 255, 0.2), 
        0 15px 35px rgba(0, 0, 0, 0.04) !important;
      display: flex;
      flex-direction: column;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
      position: relative;
      -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
    }
    .package-card-premium::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 100%, var(--card-accent, rgba(169, 124, 55, 0.15)) 0%, transparent 60%);
      opacity: 0;
      z-index: 0;
      transition: opacity 0.5s ease;
      border-radius: 24px;
      pointer-events: none;
    }
    .package-card-premium:hover {
      transform: translateY(-5px) scale(1.01) !important;
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.7), 
        inset 0 15px 25px rgba(255, 255, 255, 0.25), 
        0 20px 45px rgba(0, 0, 0, 0.08) !important;
      border-color: rgba(255, 255, 255, 0.6) !important;
      background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 169, 124, 55), 0.18) 0%, rgba(var(--card-accent-rgb, 169, 124, 55), 0.06) 100%) !important;
    }
    .package-card-premium:hover::after {
      opacity: 0.35;
    }
    
    .pkg-img-wrapper {
      height: 160px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 16px !important; /* Framed nested image */
    }
    .pkg-card-icon-wrapper {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      z-index: 10;
      transition: transform 0.3s ease;
    }
    .package-card-premium:hover .pkg-card-icon-wrapper {
      transform: translateX(-50%) scale(1.08);
    }
    .pkg-card-icon-wrapper i, .pkg-card-icon-wrapper svg {
      width: 18px;
      height: 18px;
    }
    
    .pkg-duration-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(30, 44, 34, 0.85);
      backdrop-filter: blur(8px);
      padding: 4px 10px;
      border-radius: 50px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.72rem;
      font-weight: 700;
      color: #FFFFFF;
      z-index: 10;
    }
    
    .pkg-card-body {
      padding: 1.5rem 0.5rem 0 0.5rem !important;
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      z-index: 1;
    }
    
    .pkg-name {
      font-family: 'Cormorant Garamond', serif !important;
      font-size: 1.5rem !important;
      font-weight: 600 !important;
      color: #1E2C22 !important;
      margin-bottom: 0.2rem !important;
      line-height: 1.2;
    }
    .pkg-card-divider {
      width: 32px;
      height: 1.5px;
      background: var(--card-accent, #A97C37);
      margin: 8px auto 12px auto;
      opacity: 0.6;
      transition: width 0.3s ease;
    }
    .package-card-premium:hover .pkg-card-divider {
      width: 55px;
    }
    .pkg-card-dots {
      display: flex;
      justify-content: center;
      gap: 6px;
      margin-bottom: 1rem;
    }
    .pkg-card-dots span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--card-accent, #A97C37);
      opacity: 0.25;
      transition: all 0.3s ease;
    }
    .package-card-premium:hover .pkg-card-dots span:nth-child(2) {
      opacity: 1;
      transform: scale(1.2);
    }
    
    .pkg-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
    }
    
    .pkg-price-group {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    
    .pkg-price-label {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 0.7rem;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .pkg-price-val {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: #A97C37;
    }
    
    .pkg-btn-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #A97C37;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .pkg-btn-circle:hover {
      background: #1E2C22;
      transform: scale(1.05);
    }
    .pkg-btn-circle i, .pkg-btn-circle svg {
      width: 18px;
      height: 18px;
    }
  `;
  document.head.appendChild(style);

  function patchTemplateHTML(val) {
    const path = window.location.pathname;
    const hash = window.location.hash;
    let slug = 'japan';

    const pathMatch = path.match(/\/destination\/([a-zA-Z0-9_-]+)/);
    if (pathMatch) {
      slug = pathMatch[1].toLowerCase();
    } else if (hash.startsWith('#/destination/')) {
      slug = hash.replace('#/destination/', '').toLowerCase();
    }

    const dataStore = window.destinations || {};
    let data = dataStore[slug];
    if (!data) {
      const matchKey = Object.keys(dataStore).find(k => k.toLowerCase() === slug.toLowerCase());
      data = matchKey ? dataStore[matchKey] : dataStore['japan'];
    }

    document.title = `${data.name.toUpperCase()} UNIVERSE — Travel Refined`;
    
    // Update Brand logo/name inside header
    const detailBrandName = document.querySelector('.detail-header .brand-name');
    if (detailBrandName) {
      detailBrandName.innerHTML = `${data.name.toUpperCase()} <span style="font-family: 'Cormorant Garamond', serif; font-weight: 300; font-style: italic; text-transform: uppercase;">UNIVERSE</span>`;
    }
    const detailSub = document.querySelector('.detail-header .brand-sub');
    if (detailSub) {
      detailSub.style.display = 'none';
    }

    // Enhance the wallet pill in detail header dynamically to match ref image
    const walletPill = document.querySelector('.detail-header .wallet-pill');
    if (walletPill) {
      const walletIcon = walletPill.querySelector('.wallet-icon');
      if (walletIcon && !walletPill.querySelector('.sparrow-wallet-logo')) {
        walletIcon.innerHTML = `
          <svg class="sparrow-wallet-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" style="filter: sepia(1) saturate(5) hue-rotate(15deg);">
            <path d="M22 45 C22 28, 42 22, 58 32 C64 35, 73 37, 78 34 C76 40, 70 46, 63 49 C58 51, 50 53, 43 56 C33 61, 23 71, 18 81 C20 71, 26 63, 33 59 C36 57, 40 56, 43 56 M58 32 C56 37, 53 44, 48 50 M43 44 C46 42, 50 42, 53 44" stroke="#A97C37" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        `;
      }
      if (!walletPill.querySelector('.wallet-arrow')) {
        const arrow = document.createElement('i');
        arrow.className = 'wallet-arrow';
        arrow.setAttribute('data-lucide', 'chevron-down');
        walletPill.appendChild(arrow);
      }
    }

    function getRGBColor(hex) {
      if (!hex) return '169, 124, 55';
      if (hex.startsWith('#')) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
      }
      return '169, 124, 55';
    }

    const expColors = ['#FD79A8', '#E5C060', '#D17A7A', '#2ED573', '#10AC84', '#8C52FF'];
    let discoverHTML = '';
    let exps = data.experiences || [];

    exps.slice(0, 6).forEach((ex, idx) => {
      const color = expColors[idx % expColors.length];
      discoverHTML += `
        <div class="new-disc-card" style="--card-accent: ${color}; --card-accent-rgb: ${getRGBColor(color)};">
          <div class="new-disc-card-img" style="background-image: url('${ex.image}');">
            <div class="new-disc-card-icon-wrapper" style="background: ${color}; border: 4px solid rgba(255, 255, 255, 0.95) !important;">
              <i data-lucide="${ex.icon || 'compass'}"></i>
            </div>
          </div>
          <div class="new-disc-card-body">
            <h3 class="new-disc-card-title">${ex.title}</h3>
            <div class="new-disc-card-divider"></div>
            <p class="new-disc-card-desc">${ex.desc || ''}</p>
            <div class="new-disc-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      `;
    });

    let highlightsHTML = '';
    const hls = data.highlights || [];
    hls.slice(0, 4).forEach(hl => {
      highlightsHTML += `
        <div class="new-hl-card" style="--card-accent: #A97C37; --card-accent-rgb: 169, 124, 55;">
          <div class="new-hl-card-img" style="background-image: url('${hl.image}');">
            <div class="new-hl-card-icon-wrapper" style="background: #A97C37; border: 4px solid rgba(255, 255, 255, 0.95) !important;">
              <i data-lucide="sparkles"></i>
            </div>
          </div>
          <div class="new-hl-card-body">
            <h3 class="new-hl-card-title">${hl.title}</h3>
            <div class="new-hl-card-divider"></div>
            <p class="new-hl-card-desc">${hl.desc}</p>
            <div class="new-hl-card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      `;
    });

    const newHeroHTML = `
      <section class="new-detail-hero" style="background-image: url('${data.heroImage}');">
        <div class="new-detail-hero-content">
          <span class="new-hero-welcome">WELCOME TO</span>
          <h1 class="new-hero-title">${data.name}</h1>
          <div class="new-hero-divider"></div>
          <p class="new-hero-desc">${data.shortStory}</p>
          <button class="btn-watch-story" onclick="window.scrollTo({ top: document.getElementById('detail-experiences').offsetTop - 100, behavior: 'smooth' })">
            <span class="play-icon-circle"><i data-lucide="play"></i></span>
            <span>Watch ${data.name} Story</span>
          </button>
        </div>
      </section>
    `;

    const newDiscoverHTML = `
      <section id="detail-experiences" class="new-discover-section container">
        <h2 class="new-discover-title">DISCOVER ${data.name.toUpperCase()} THROUGH</h2>
        <div class="new-discover-separator">
          <span class="sep-line"></span>
          <img src="/images/logo.png" alt="Sparrow Logo" class="new-discover-sparrow-img" style="width: 24px; height: 24px; filter: sepia(1) saturate(5) hue-rotate(15deg); margin-top: -4px;" />
          <span class="sep-line"></span>
        </div>
        <div class="new-discover-grid">
          ${discoverHTML}
        </div>
      </section>
    `;

    const newHighlightsHTML = `
      <section id="detail-highlights" class="new-highlights-section container">
        <div class="new-hl-header">
          <span class="new-hl-tag">HANDPICKED HIGHLIGHTS</span>
          <a href="#" class="new-hl-view-all" onclick="event.preventDefault(); window.scrollTo({ top: document.querySelector('.detail-gallery-section').offsetTop - 100, behavior: 'smooth' })">
            <span>View all</span>
            <i data-lucide="chevron-right" style="width: 14px; height: 14px; margin-top: 1px;"></i>
          </a>
        </div>
        <div class="new-highlights-grid">
          ${highlightsHTML}
        </div>
      </section>
    `;

    // Resolve slug for festival & places dataset mapping
    let festData = destinationFestivalData[slug];
    if (!festData) {
      if (slug === 'bali') festData = destinationFestivalData['indonesia'];
      else if (slug === 'zermatt') festData = destinationFestivalData['switzerland'];
      else if (slug === 'amalfi' || slug === 'amalfi coast' || slug.includes('italy')) festData = destinationFestivalData['italy'];
      else festData = destinationFestivalData['japan']; // fallback
    }

    let placesHTML = '';
    let experiencesHTML = '';
    let curatedPackagesHTML = '';

    if (festData) {
      festData.places.forEach(p => {
        placesHTML += `
          <div class="place-card" style="--card-accent: #E5C060; --card-accent-rgb: 229, 192, 96;">
            <div class="place-card-img" style="background-image: url('${p.image}');">
              <span class="rating-badge">⭐ ${p.rating}</span>
              <div class="place-card-icon-wrapper" style="background: #E5C060; border: 4px solid rgba(255, 255, 255, 0.95) !important;">
                <i data-lucide="star"></i>
              </div>
            </div>
            <div class="place-card-body">
              <h4 class="place-card-title">${p.name}</h4>
              <div class="place-card-divider"></div>
              <p class="place-card-meta" style="margin-bottom: 1rem !important;">${p.meta}</p>
              <button class="place-card-btn" style="border: none; background: #E5C060; color: #FFF; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.72rem; font-weight: 700; padding: 8px 16px; border-radius: 99px; cursor: pointer; transition: all 0.3s ease; margin-top: auto; display: flex; align-items: center; justify-content: center; gap: 0.4rem; width: 100%;">
                <span>Explore Festival</span>
                <i data-lucide="arrow-right" style="width: 12px; height: 12px;"></i>
              </button>
            </div>
          </div>
        `;
      });

      festData.experiences.forEach(e => {
        const color = e.color || '#A97C37';
        experiencesHTML += `
          <div class="experience-item" style="--card-accent: ${color}; --card-accent-rgb: ${getRGBColor(color)};">
            <div class="exp-card-header-row">
              <div class="exp-card-icon-badge">
                <i data-lucide="${e.icon || 'compass'}"></i>
              </div>
              <span class="exp-card-dot"></span>
            </div>
            <h4 class="exp-card-title">${e.name}</h4>
            <div class="exp-card-footer-row">
              <span class="exp-card-badge" style="background: ${color}15; color: ${color}; border: 1px solid ${color}25;">${e.badge}</span>
              <button class="exp-card-action-btn" aria-label="View Details" style="width: auto; height: auto; border-radius: 99px; border: none; background: ${color}; color: #FFF; padding: 6px 14px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; gap: 4px; cursor: pointer; transition: all 0.3s ease;">
                <span>Explore</span>
                <i data-lucide="arrow-right" style="width: 12px; height: 12px;"></i>
              </button>
            </div>
          </div>
        `;
      });

      festData.packages.forEach(pkg => {
        curatedPackagesHTML += `
          <div class="package-card-premium" style="--card-accent: #A97C37; --card-accent-rgb: 169, 124, 55;">
            <div class="pkg-img-wrapper" style="background-image: url('${pkg.image}');">
              <span class="pkg-duration-badge">${pkg.duration}</span>
              <div class="pkg-card-icon-wrapper" style="background: #A97C37; border: 4px solid rgba(255, 255, 255, 0.95) !important;">
                <i data-lucide="compass"></i>
              </div>
            </div>
            <div class="pkg-card-body">
              <h3 class="pkg-name">${pkg.name}</h3>
              <div class="pkg-card-divider"></div>
              <div class="pkg-card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="pkg-footer">
                <div class="pkg-price-group">
                  <span class="pkg-price-label">Starts From</span>
                  <span class="pkg-price-val">${pkg.price}</span>
                </div>
                <button class="pkg-btn-circle" aria-label="Book Package">
                  <i data-lucide="arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    const newPlacesHTML = `
      <section id="detail-places" class="new-festival-section">
        <div class="container">
          <div class="new-hl-header" style="margin-bottom: 2rem;">
            <div>
              <span class="new-hl-tag">LOCAL FESTIVALS &amp; TOP PLACES</span>
              <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;color:#888;margin-top:0.3rem;font-style:italic;">Discover iconic sites and cultural jewels of ${data.name}</p>
            </div>
          </div>
          <div class="places-grid-full">
            ${placesHTML}
          </div>
        </div>
      </section>

      <section id="detail-signature-experiences" class="signature-exp-section">
        <div class="container">
          <div class="new-hl-header" style="margin-bottom: 2rem;">
            <div>
              <span class="new-hl-tag">SIGNATURE EXPERIENCES</span>
              <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;color:#888;margin-top:0.3rem;font-style:italic;">Handpicked moments that define ${data.name}</p>
            </div>
          </div>
          <div class="sig-exp-grid">
            ${experiencesHTML}
          </div>
        </div>
      </section>
    `;

    const newFestivalPackagesHTML = `
      <section id="detail-packages" class="curated-packages-section">
        <div class="container">
          <div class="new-hl-header" style="margin-bottom: 2.2rem;">
            <div>
              <span class="new-hl-tag">CURATED PACKAGES</span>
              <p style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.9rem;color:#888;margin-top:0.3rem;font-style:italic;">Perfectly designed journeys for every traveller</p>
            </div>
          </div>
          <div class="packages-premium-grid">
            ${curatedPackagesHTML}
          </div>
        </div>
      </section>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(val, 'text/html');

    const oldHero = doc.querySelector('.detail-hero-section');
    if (oldHero) oldHero.remove();

    const oldStats = doc.querySelector('#detail-overview');
    if (oldStats) oldStats.remove();

    const oldStory = doc.querySelector('.detail-story-section');
    if (oldStory) oldStory.remove();

    const oldExperiences = doc.querySelector('#detail-experiences');
    if (oldExperiences) oldExperiences.remove();

    const oldHighlights = doc.querySelector('#detail-highlights');
    if (oldHighlights) oldHighlights.remove();

    const oldPackages = doc.querySelector('#detail-packages');
    if (oldPackages) oldPackages.remove();

    const oldItinerary = doc.querySelector('#detail-itinerary') || doc.querySelector('.detail-timeline-section');
    if (oldItinerary) oldItinerary.remove();

    const remainingHTML = doc.body.innerHTML;

    const tlItems = data.timeline || [];
    let timelineHTML = '';
    let leftTimelineNavHTML = '';

    const mockMetrics = [
      { time: '6:30 PM', label1: 'Best Time', val2: '24°C', label2: 'Weather', val3: '3 Hrs', label3: 'Duration', icon: 'map' },
      { time: '10:00 AM', label1: 'Start Time', val2: '18°C', label2: 'Weather', val3: '6 Hrs', label3: 'Duration', icon: 'compass' },
      { time: '4:00 PM', label1: 'Start Time', val2: '20°C', label2: 'Weather', val3: 'Wine', label3: 'Tasting', icon: 'glass-water' },
      { time: '9:00 AM', label1: 'Start Time', val2: '22°C', label2: 'Weather', val3: 'Scenic', label3: 'Highlights', icon: 'landmark' },
      { time: '11:00 AM', label1: 'Best Time', val2: '19°C', label2: 'Weather', val3: 'Local', label3: 'Guide', icon: 'camera' },
      { time: '7:30 PM', label1: 'Dinner Time', val2: '16°C', label2: 'Weather', val3: 'Meals', label3: 'Included', icon: 'utensils' }
    ];

    tlItems.forEach((item, index) => {
      const metrics = mockMetrics[index % mockMetrics.length];
      const imgUrl = (data.gallery && data.gallery.length > 0) 
        ? data.gallery[index % data.gallery.length] 
        : data.heroImage;
      
      leftTimelineNavHTML += `
        <div class="luxury-timeline-nav-item ${index === 0 ? 'active' : ''}" data-day-index="${index}">
          <div class="luxury-timeline-nav-circle">
            <span class="luxury-timeline-nav-pulse"></span>
          </div>
          <span class="luxury-timeline-nav-label">${item.day}</span>
        </div>
      `;

      timelineHTML += `
        <div class="luxury-day-card ${index === 0 ? 'active' : ''}" id="luxury-day-card-${index}" data-day-index="${index}">
          <div class="luxury-day-card-left">
            <div class="luxury-day-number-badge">${item.day}</div>
            <h3 class="luxury-day-title">${item.title}</h3>
            <div class="luxury-day-location">
              <i data-lucide="map-pin"></i>
              <span>${data.name}, ${data.country || ''}</span>
            </div>
            <p class="luxury-day-desc">${item.desc}</p>
            <button class="luxury-day-btn">
              <span>View Details</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
          <div class="luxury-day-card-right">
            <div class="luxury-day-img-container">
              <img src="${imgUrl}" alt="${item.title}" class="luxury-day-img">
              <div class="luxury-day-img-overlay"></div>
              
              <div class="luxury-day-floating-icon" title="Activity Icon">
                <i data-lucide="${metrics.icon}"></i>
              </div>
              
              <div class="luxury-day-metrics-panel">
                <div class="luxury-metric-group">
                  <span class="luxury-metric-val">${metrics.time}</span>
                  <span class="luxury-metric-label">${metrics.label1}</span>
                </div>
                <div class="luxury-metric-divider"></div>
                <div class="luxury-metric-group">
                  <span class="luxury-metric-val">${metrics.val2}</span>
                  <span class="luxury-metric-label">${metrics.label2}</span>
                </div>
                <div class="luxury-metric-divider"></div>
                <div class="luxury-metric-group">
                  <span class="luxury-metric-val">${metrics.val3}</span>
                  <span class="luxury-metric-label">${metrics.label3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    const newItineraryHTML = `
      <section id="detail-itinerary" class="luxury-itinerary-section">
        <div class="luxury-itinerary-header">
          <span class="luxury-itinerary-sup">CURATED ITINERARY</span>
          <h2 class="luxury-itinerary-h2">Day-by-Day Journey</h2>
          <p class="luxury-itinerary-p">Every day unfolds a carefully crafted experience designed for slow luxury travel.</p>
        </div>
        
        <div class="luxury-itinerary-container container">
          <div class="luxury-timeline-sidebar">
            <div class="luxury-timeline-track">
              <div class="luxury-timeline-progress-bar"></div>
            </div>
            <div class="luxury-timeline-nav-items">
              ${leftTimelineNavHTML}
            </div>
          </div>
          
          <div class="luxury-timeline-content">
            ${timelineHTML}
          </div>
        </div>
        
        <div class="container luxury-itinerary-cta-container">
          <div class="luxury-itinerary-custom-cta">
            <div class="luxury-cta-icon-box">
              <i data-lucide="briefcase"></i>
            </div>
            <div class="luxury-cta-text-box">
              <h4>This journey is fully customizable</h4>
              <p>Personalize your itinerary with our travel expert.</p>
            </div>
            <button class="luxury-cta-gold-btn" id="btn-customize-journey">
              <span>Customize My Journey</span>
              <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    `;

    return `
      <div id="detail-overview">
        ${newHeroHTML}
      </div>
      ${newDiscoverHTML}
      ${newPlacesHTML}
      ${newFestivalPackagesHTML}
      ${newItineraryHTML}
      ${remainingHTML}
    `;
  }

  window.initLuxuryItineraryScroll = function() {
    const cards = document.querySelectorAll('.luxury-day-card');
    if (cards.length === 0) return;

    function updateTimelineProgress() {
      const cards = document.querySelectorAll('.luxury-day-card');
      if (cards.length === 0) return;
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];
      const progressLine = document.querySelector('.luxury-timeline-progress-bar');
      if (!progressLine) return;
      
      const viewportCenter = window.innerHeight / 2;
      let activeIndex = 0;
      let minDistance = Infinity;
      
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);
        
        if (rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.25) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
        
        if (distance < minDistance) {
          minDistance = distance;
          activeIndex = idx;
        }
      });
      
      const navItems = document.querySelectorAll('.luxury-timeline-nav-item');
      navItems.forEach((nav, idx) => {
        if (idx === activeIndex) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      });
      
      const startY = firstCard.getBoundingClientRect().top + window.scrollY;
      const endY = lastCard.getBoundingClientRect().top + window.scrollY;
      const currentY = window.scrollY + viewportCenter;
      
      let percent = 0;
      if (currentY > startY) {
        percent = ((currentY - startY) / (endY - startY)) * 100;
      }
      percent = Math.max(0, Math.min(100, percent));
      
      progressLine.style.height = `${percent}%`;
    }

    window.removeEventListener('scroll', updateTimelineProgress);
    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    updateTimelineProgress();

    document.querySelectorAll('.luxury-timeline-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = item.getAttribute('data-day-index');
        const card = document.getElementById(`luxury-day-card-${idx}`);
        if (card) {
          const yOffset = -180;
          const y = card.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });

  };
})();

