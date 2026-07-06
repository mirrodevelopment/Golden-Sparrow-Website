/**
 * GOLDEN SPARROW — Festival Universe
 * Each place card and experience item opens its OWN unique festival detail page.
 * Call: FestivalView.show(slug, type, index)
 *   slug  = destination slug (e.g. 'japan', 'switzerland')
 *   type  = 'place' | 'experience'
 *   index = card index (0-3)
 */

(function () {
  'use strict';

  /* =========================================================
     CHERRY BLOSSOM SPECIAL FESTIVAL DATA
     ========================================================= */
  const cherryBlossomFestival = {
    festivalName: 'Cherry Blossom',
    festivalSubtitle: 'Sakura Season ✿',
    emoji: '🌸', tag: 'FEATURED FESTIVAL', accentColor: '#FF6B81',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
    description: 'A pink canopy of cherry blossom (sakura) trees in full bloom against a majestic view of Mt Fuji.',
    about: 'Sakura season in Japan is a national celebration of spring\'s arrival, bringing millions of visitors to view the breathtaking cherry blossoms. It is a time for hanami (flower viewing) picnics under the canopy of pink.',
    bestTime: 'Apr', popularity: '★★★★★', experience: '15k',
    tradition: '1,000+ years', bestFor: 'Hanami Picnics', vibes: 'Ethereal • Festive', crowd: 'Lively',
    highlights: [
      { title: 'Fuji Hanami Picnic', desc: 'Picnics under cherry blossoms with Mt Fuji views', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
      { title: 'Kyoto Night Lights', desc: 'Cherry blossoms lit by lanterns along canals', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
      { title: 'Meguro River Canopy', desc: 'Staggering canopy of pink blossoms over Tokyo canal', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }
    ],
    places: [
      { name: 'Fuji', rating: '4.9', meta: 'Scenic View, Lake Kawaguchi, Pagoda Views', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Kyoto', rating: '4.8', meta: 'Maruyama Park, Gion Canals, Weeping Trees', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80' },
      { name: 'Tokyo', rating: '4.8', meta: 'Shinjuku Gyoen, Ueno Park, Yozakura Lights', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80' },
      { name: 'Yoshino', rating: '4.9', meta: 'Mount Yoshino, 30,000 Trees, Ancient Trails', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80' }
    ],
    experiences: [
      { name: 'Hanami Party', icon: 'sparkles', badge: 'Picnic', color: '#FF6B81' },
      { name: 'Sakura Sweets', icon: 'utensils', badge: 'Culinary', color: '#E5C060' },
      { name: 'Yozakura', icon: 'compass', badge: 'Night Walk', color: '#8C52FF' },
      { name: 'Tea Ceremony', icon: 'cup-soda', badge: 'Ceremony', color: '#10AC84' }
    ],
    packages: [
      { name: 'Sakura Express', duration: '7 Days', price: '₹1,20,000', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Grand Sakura Tour', duration: '10 Days', price: '₹1,80,000', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=500&q=80' },
      { name: 'Hanami & Hot Springs', duration: '5 Days', price: '₹95,000', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' },
      { name: 'Tokyo & Kyoto Sakura', duration: '6 Days', price: '₹1,10,000', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80' }
    ]
  };

  /* =========================================================
     PER-PLACE FESTIVAL DATA  (slug → array of 4 festivals matching place cards)
     ========================================================= */
  const placeFestivals = {
    japan: [
      {
        festivalName: 'Kinkaku-ji Golden Temple',
        festivalSubtitle: 'The Golden Pavilion Festival',
        emoji: '🏯', tag: 'HERITAGE FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85',
        description: 'A millennium-old Zen temple wrapped in gold leaf that blazes like the sun at dawn.',
        about: 'The Kinkaku-ji, or Golden Pavilion, is Kyoto\'s most iconic landmark. Surrounded by mirror-still ponds and ancient pine trees, the temple hosts the Kinrin-ko autumn festival each November when its golden facade reflects brilliantly in the pond.',
        bestTime: 'Nov / Mar', popularity: '★★★★★', experience: 'Majestic',
        tradition: '700+ years', bestFor: 'Culture & History', vibes: 'Serene • Grand', crowd: 'Busy',
        highlights: [
          { title: 'Zen Garden Walk', desc: 'Meditative paths among ancient mossy stones', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
          { title: 'Mirror Lake Reflection', desc: 'Golden temple mirrored in Kyoko-chi pond', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Autumn Maple Canopy', desc: 'Crimson and gold leaves frame the pavilion', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Fushimi Inari Fox Festival',
        festivalSubtitle: 'The Thousand Torii Gates',
        emoji: '⛩️', tag: 'SPIRITUAL FESTIVAL', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=85',
        description: 'Ten thousand vermillion torii gates wind up sacred Inari Mountain through cedar groves.',
        about: 'The Fushimi Inari Taisha shrine complex is home to one of Japan\'s most iconic festivals — the Hatsuuma Matsuri. Thousands of devotees trek the 4km mountain path bearing offerings of fried tofu to the fox spirits (kitsune) who guard the harvest.',
        bestTime: 'Feb / Nov', popularity: '★★★★★', experience: 'Mystical',
        tradition: '1,300+ years', bestFor: 'Spiritual & Photography', vibes: 'Sacred • Ethereal', crowd: 'Moderate',
        highlights: [
          { title: 'Hatsuuma Ceremony', desc: 'Torchlit procession of hundreds of devotees', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' },
          { title: 'Fox Spirit Shrine', desc: 'Stone kitsune fox statues wearing red bibs', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80' },
          { title: 'Summit Sunrise View', desc: 'Kyoto panorama from the mountain peak at dawn', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Arashiyama Bamboo Festival',
        festivalSubtitle: 'Whispers of the Bamboo Forest',
        emoji: '🎋', tag: 'NATURE FESTIVAL', accentColor: '#10AC84',
        heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
        description: 'The bamboo forest of Arashiyama creaks and sways in the wind like a living symphony.',
        about: 'Each December, Arashiyama is illuminated in the Hanatouro light festival — thousands of lanterns and light installations transform the bamboo grove into an otherworldly corridor of glowing green. Tenryu-ji temple garden opens for special moonlit viewing.',
        bestTime: 'Dec / May', popularity: '★★★★☆', experience: 'Enchanting',
        tradition: '600+ years', bestFor: 'Nature & Couples', vibes: 'Dreamy • Quiet', crowd: 'Moderate',
        highlights: [
          { title: 'Hanatouro Light Walk', desc: 'Lanterns transform bamboo into glowing emerald', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' },
          { title: 'Tenryu-ji Moon Garden', desc: 'Moonlit reflections in the Zen pond garden', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sagano Romantic Train', desc: 'Open-top trolley through autumn mountain valleys', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Shinjuku Neon Festival',
        festivalSubtitle: 'Tokyo\'s Electric Night Carnival',
        emoji: '🌆', tag: 'URBAN FESTIVAL', accentColor: '#8C52FF',
        heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85',
        description: 'Tokyo\'s Shinjuku district pulses with neon light, street food, and an electric urban carnival atmosphere.',
        about: 'The Shinjuku Obon Festival transforms the busiest train station\'s district into a spectacle of taiko drumming, yosakoi dance, and neon food markets. Robot restaurants, rooftop lanterns, and LED art installations compete for attention under the neon sky.',
        bestTime: 'Aug / Dec', popularity: '★★★★★', experience: 'Electrifying',
        tradition: '50+ years', bestFor: 'Night Owls & Foodies', vibes: 'Vibrant • Wild', crowd: 'Lively',
        highlights: [
          { title: 'Golden Gai Lantern Bars', desc: 'Tiny bar alleyways strung with paper lanterns', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80' },
          { title: 'Taiko Drum Parade', desc: 'Thundering drums echo through neon-lit streets', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Robot Restaurant Show', desc: 'Futuristic LED robots perform synchronized dance', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    kyoto: [
      {
        festivalName: 'Kiyomizu-dera Autumn Festival',
        festivalSubtitle: 'Festival of the Sacred Spring',
        emoji: '🍁', tag: 'AUTUMN FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
        description: 'The wooden stage of Kiyomizu-dera floats above a sea of crimson and gold autumn maple trees.',
        about: 'Kiyomizu-dera\'s autumn illumination turns the temple into a breathtaking spectacle. The wooden main hall — built without a single nail — is bathed in golden spotlight while the valley below blazes with autumn foliage. Thousands come to see the "stage drop" where brave visitors traditionally walked the edge.',
        bestTime: 'Nov', popularity: '★★★★★', experience: 'Breathtaking',
        tradition: '1,200+ years', bestFor: 'Culture & Photography', vibes: 'Majestic • Serene', crowd: 'Busy',
        highlights: [
          { title: 'Night Illumination', desc: 'Temple glows gold above autumn maple sea', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sacred Spring Ritual', desc: 'Drink from the three lucky Otowa waterfall streams', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sannenzaka Stone Path', desc: 'Cobblestone streets lined with tea houses and crafts', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Golden Pavilion Festival',
        festivalSubtitle: 'Kinkaku-ji Winter Snowfall',
        emoji: '❄️', tag: 'WINTER FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85',
        description: 'Snow dusts the golden rooftop of Kinkaku-ji, creating one of the rarest and most magical sights in Japan.',
        about: 'On rare winter days, Kyoto\'s Golden Pavilion is capped with snow that makes the gold leaf shimmer beneath a silver-white blanket. The frozen Kyoko-chi pond reflects the image perfectly — local festivals offer exclusive dawn viewings with matcha and mochi in the traditional teahouse.',
        bestTime: 'Jan – Feb', popularity: '★★★★★', experience: 'Rare & Magical',
        tradition: '650+ years', bestFor: 'Photography & Couples', vibes: 'Silent • Magical', crowd: 'Intimate',
        highlights: [
          { title: 'Snow-Capped Temple Dawn', desc: 'Golden roof under a white winter snowfall', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
          { title: 'Frozen Pond Reflection', desc: 'Icy surface mirrors the winter golden pavilion', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' },
          { title: 'Teahouse Matcha Ritual', desc: 'Warm matcha tea served in centuries-old ceramic', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Arashiyama Bamboo Hanatouro',
        festivalSubtitle: 'Festival of Light in the Bamboo',
        emoji: '🏮', tag: 'LANTERN FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
        description: 'Thousands of glowing lanterns transform the bamboo grove into a cathedral of warm golden light.',
        about: 'Held every December, the Arashiyama Hanatouro festival lights up the bamboo path, Tenryu-ji and the riverside with thousands of bamboo lanterns and floral light installations. Artists from across Kyoto create illuminated sculptures along the 5km festival route.',
        bestTime: 'Dec', popularity: '★★★★★', experience: 'Enchanting',
        tradition: '20+ years', bestFor: 'Couples & Artists', vibes: 'Romantic • Artistic', crowd: 'Moderate',
        highlights: [
          { title: 'Bamboo Lantern Corridor', desc: 'Thousands of tiny lanterns line the grove path', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' },
          { title: 'Tenryu-ji Illumination', desc: 'Zen garden ponds glow with floating light boats', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' },
          { title: 'Riverside Food Market', desc: 'Street food stalls along the Oi River banks', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Gion Matsuri',
        festivalSubtitle: 'Japan\'s Greatest Summer Festival',
        emoji: '⛩️', tag: 'GRAND FESTIVAL', accentColor: '#D17A7A',
        heroImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=85',
        description: 'Kyoto\'s greatest festival — enormous golden floats parade through ancient streets to the beat of flutes and drums.',
        about: 'Dating back 1,150 years to 869 AD, the Gion Matsuri fills all of July with festivities. The Yamaboko Junkō float parade on July 17th features 23 enormous wooden floats draped in 400-year-old Flemish tapestries — each a designated UNESCO Intangible Heritage.',
        bestTime: 'July', popularity: '★★★★★', experience: 'Grand & Cultural',
        tradition: '1,150+ years', bestFor: 'Culture & History', vibes: 'Majestic • Festive', crowd: 'Lively',
        highlights: [
          { title: 'Yamaboko Float Parade', desc: 'Giant ancient floats carrying hayashi musicians', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' },
          { title: 'Gion Lantern Evenings', desc: 'Paper lanterns light every building in Gion district', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Yukata Street Fashion', desc: 'Everyone wears traditional summer kimono', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    switzerland: [
      {
        festivalName: 'Matterhorn Alpine Gala',
        festivalSubtitle: 'Zermatt Peak Festival',
        emoji: '🏔️', tag: 'ALPINE FESTIVAL', accentColor: '#8C52FF',
        heroImage: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1400&q=85',
        description: 'Zermatt\'s car-free village comes alive with alpine folk music, fondue feasts, and fireworks over the iconic Matterhorn peak.',
        about: 'The Zermatt Unplugged Music Festival brings world-class acoustic musicians to the shadow of the Matterhorn every April. Village squares fill with warm chalets serving raclette and Glühwein, while the snow-capped peak provides a dramatic natural stage backdrop.',
        bestTime: 'Apr / Jul', popularity: '★★★★★', experience: 'Majestic',
        tradition: '150+ years', bestFor: 'Music & Adventure', vibes: 'Grand • Festive', crowd: 'Moderate',
        highlights: [
          { title: 'Matterhorn Fireworks', desc: 'Festival fireworks reflected on Stellisee lake', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80' },
          { title: 'Village Folk Music', desc: 'Alpenhorn and yodeling in the car-free streets', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Summit Cable Car Night', desc: 'Late-night gondola rides to 3,883m under stars', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Lauterbrunnen Waterfall Festival',
        festivalSubtitle: '72 Waterfalls in Full Flow',
        emoji: '💧', tag: 'NATURE FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
        description: 'The Valley of 72 Waterfalls thunders with springmelt as BASE jumpers soar between granite cliffs.',
        about: 'Every May, Lauterbrunnen holds its Frühlingsfest where farmers bring decorated cows down from alpine pastures, local cheesemakers compete, and hang-gliders and BASE jumpers perform aerobatics between the towering waterfall cliffs. Staubbach Falls glows iridescent in afternoon light.',
        bestTime: 'May / Jun', popularity: '★★★★★', experience: 'Dramatic',
        tradition: '200+ years', bestFor: 'Nature & Adventure', vibes: 'Wild • Dramatic', crowd: 'Moderate',
        highlights: [
          { title: 'Staubbach Falls Glow', desc: 'Sunlight turns the 300m fall into a rainbow arc', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Cow Descent Festival', desc: 'Bell-adorned cows parade through the valley', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80' },
          { title: 'BASE Jump Championships', desc: 'World\'s best jumpers leap from the cliff faces', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Jungfraujoch Ice Festival',
        festivalSubtitle: 'Top of Europe Celebration',
        emoji: '🧊', tag: 'ICE FESTIVAL', accentColor: '#10AC84',
        heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
        description: 'At 3,454m, the Jungfraujoch Ice Palace hosts an extraordinary winter carnival above the clouds.',
        about: 'Every winter, the Jungfraujoch hosts an ice sculpture festival where artists from across Europe carve elaborate pieces inside the glacial ice palace tunnels. Visitors can explore over a kilometer of hand-carved ice corridors, watch the Aletsch Glacier glow at sunset, and dine in the Sky Lounge at Europe\'s highest railway station.',
        bestTime: 'Jan – Mar', popularity: '★★★★★', experience: 'Otherworldly',
        tradition: '100+ years', bestFor: 'Families & Adventurers', vibes: 'Epic • Pure', crowd: 'Busy',
        highlights: [
          { title: 'Aletsch Glacier Sunset', desc: 'Europe\'s largest glacier blazes orange at dusk', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Ice Sculpture Gallery', desc: 'Masters carve intricate art inside glacial tunnels', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80' },
          { title: 'Snow Plateau Sled Race', desc: 'Traditional wooden sled races on the plateau', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Lake Lucerne Music Festival',
        festivalSubtitle: 'Switzerland\'s Grandest Cultural Festival',
        emoji: '🎶', tag: 'MUSIC FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1400&q=85',
        description: 'The world\'s greatest orchestras perform on the shores of Lake Lucerne under the Swiss Alps.',
        about: 'The Lucerne Festival attracts the finest classical musicians from across the globe for three weeks each August. The concert hall\'s famous acoustic "cloud" ceiling hovers over the lake while world-class orchestras perform Beethoven and Brahms with the Swiss Alps as backdrop. Festival boats cross the lake between concerts.',
        bestTime: 'Aug', popularity: '★★★★★', experience: 'Refined',
        tradition: '80+ years', bestFor: 'Music & Culture', vibes: 'Elegant • Soulful', crowd: 'Sophisticated',
        highlights: [
          { title: 'Lakeside Concert Stage', desc: 'Orchestra performs with the Alps in the background', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80' },
          { title: 'Chapel Bridge Promenade', desc: 'Medieval bridge illuminated for festival evenings', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80' },
          { title: 'Festival Boat Cruise', desc: 'Candlelit lake cruise between concert venues', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    indonesia: [
      {
        festivalName: 'Uluwatu Kecak Fire Festival',
        festivalSubtitle: 'Dance of the Hindu Epics',
        emoji: '🔥', tag: 'FIRE FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85',
        description: 'At sunset, 100 Balinese men chant "cak" in hypnotic unison as fire dancers perform the Ramayana on the clifftop stage.',
        about: 'The Kecak Dance at Uluwatu temple is performed every evening as the sun sets over the Indian Ocean 70 meters below. The rhythmic chanting of 100 shirtless men creates a sound that resonates across the cliffs. During festival months, special Barong and Legong dances are added to the nightly program.',
        bestTime: 'Jul / Aug', popularity: '★★★★★', experience: 'Hypnotic',
        tradition: '80+ years', bestFor: 'Culture & Performance', vibes: 'Dramatic • Sacred', crowd: 'Lively',
        highlights: [
          { title: 'Clifftop Kecak Ritual', desc: 'Fire dancers encircled by 100 chanting men', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sunset Over Ocean', desc: 'Fiery Indian Ocean sunset from the cliffside temple', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80' },
          { title: 'Barong Temple Dance', desc: 'Sacred Barong lion battles the demon Rangda', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Tegalalang Harvest Festival',
        festivalSubtitle: 'Subak Rice Terrace Celebration',
        emoji: '🌾', tag: 'HARVEST FESTIVAL', accentColor: '#10AC84',
        heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=85',
        description: 'Bali\'s emerald-green rice terraces glow gold at harvest time as farmers celebrate with offerings and music.',
        about: 'The Subak UNESCO irrigation system that feeds Tegalalang\'s terraces has been used for over 1,000 years. During harvest season, the Ngendag ritual involves entire villages making elaborate offerings to Dewi Sri, the goddess of rice, with processions of golden palm-leaf sculptures through the terraces.',
        bestTime: 'Apr / Sep', popularity: '★★★★☆', experience: 'Authentic',
        tradition: '1,000+ years', bestFor: 'Culture & Nature', vibes: 'Peaceful • Sacred', crowd: 'Moderate',
        highlights: [
          { title: 'Golden Harvest Terraces', desc: 'Ripened golden rice glowing in the morning sun', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80' },
          { title: 'Dewi Sri Procession', desc: 'Elaborate palm-leaf offerings carried through fields', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Jungle Swing Sunrise', desc: 'Bamboo swings above the emerald terrace valley', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Mount Bromo Fire Crater Festival',
        festivalSubtitle: 'Yadnya Kasada Volcano Offering',
        emoji: '🌋', tag: 'VOLCANIC FESTIVAL', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85',
        description: 'The Tenggerese people climb into the smoking crater of Mount Bromo at dawn to make offerings to the mountain gods.',
        about: 'The annual Yadnya Kasada festival is one of Indonesia\'s most dramatic — the entire Tenggerese tribe climbs the active volcano at midnight, throwing livestock, vegetables, money, and flowers into the glowing crater as offerings to Hyang Widhi. Thousands of tourists witness this ancient ritual from the crater rim.',
        bestTime: 'Jul', popularity: '★★★★★', experience: 'Awe-Inspiring',
        tradition: '700+ years', bestFor: 'Adventure & Spirituality', vibes: 'Otherworldly • Sacred', crowd: 'Moderate',
        highlights: [
          { title: 'Midnight Crater Climb', desc: 'Torch-lit procession to the active crater rim', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Crater Offering Ritual', desc: 'Flowers and crops thrown into the volcanic caldera', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sea of Sand Sunrise', desc: 'Dawn over the vast volcanic Sand Sea plain', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Nyepi Day of Silence',
        festivalSubtitle: 'Bali\'s Sacred New Year',
        emoji: '🕯️', tag: 'SACRED FESTIVAL', accentColor: '#8C52FF',
        heroImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1400&q=85',
        description: 'The entire island of Bali goes completely silent for 24 hours — no lights, no travel, no noise — as it enters the new year.',
        about: 'The night before Nyepi, the Ogoh-Ogoh parade fills the streets with enormous papier-mâché demon effigies carried by thousands of men. Then at sunrise, silence falls over the entire island. The airport closes, streets empty, and Bali sits in complete darkness, meditation, and prayer.',
        bestTime: 'Mar', popularity: '★★★★★', experience: 'Spiritual',
        tradition: '1,200+ years', bestFor: 'Spiritual Seekers', vibes: 'Sacred • Silent', crowd: 'Intimate',
        highlights: [
          { title: 'Ogoh-Ogoh Parade Night', desc: 'Giant demon effigies carried through lit streets', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=400&q=80' },
          { title: 'Island-Wide Blackout', desc: 'Bali in complete darkness — only stars and moonlight', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Temple Meditation', desc: 'Mass prayer at water temples at first light', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    iceland: [
      {
        festivalName: 'Golden Circle Geyser Festival',
        festivalSubtitle: 'Geothermal Wonder Celebration',
        emoji: '♨️', tag: 'GEOTHERMAL FESTIVAL', accentColor: '#10AC84',
        heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
        description: 'Strokkur geyser erupts every 5 minutes in a pillar of steam as Iceland celebrates its volcanic heritage.',
        about: 'The Golden Circle Festival connects Iceland\'s three great wonders — the Þingvellir national park, the Geysir geothermal field, and the mighty Gullfoss waterfall. In summer, midnight sun bathes everything in golden light as traditional Viking games, sheep round-ups, and hot spring soaks mark the highland season.',
        bestTime: 'Jun / Jul', popularity: '★★★★★', experience: 'Elemental',
        tradition: '1,000+ years', bestFor: 'Nature & Adventure', vibes: 'Raw • Wild', crowd: 'Moderate',
        highlights: [
          { title: 'Strokkur Eruption Show', desc: 'Boiling water launches 30m into the arctic sky', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Gullfoss Rainbow Falls', desc: 'Mist creates permanent rainbow over the gorge', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=400&q=80' },
          { title: 'Viking Sheep Round-Up', desc: 'Traditional rettir herding on highland horseback', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Ice Cave Crystal Festival',
        festivalSubtitle: 'Vatnajökull Glacier Light Show',
        emoji: '🧊', tag: 'ICE FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=1400&q=85',
        description: 'Neon-blue glacial caves inside Europe\'s largest ice sheet glow as if lit from within by trapped light.',
        about: 'Each winter, new ice caves form inside Vatnajökull glacier — no two are ever alike. Expert glacier guides lead festival groups through crystal tunnels where compressed ice creates shades of blue that exist nowhere else on earth. Overnight glacier camps let visitors witness the caves under the Northern Lights.',
        bestTime: 'Nov – Mar', popularity: '★★★★★', experience: 'Otherworldly',
        tradition: '20+ years', bestFor: 'Explorers & Photographers', vibes: 'Ethereal • Pure', crowd: 'Exclusive',
        highlights: [
          { title: 'Crystal Ice Tunnel', desc: 'Translucent blue ice walls glow from within', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=400&q=80' },
          { title: 'Aurora over Glacier', desc: 'Northern Lights shimmer above the white ice field', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Glacier Camp Midnight', desc: 'Overnight base camp on the glacier at midnight sun', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Black Beach Viking Festival',
        festivalSubtitle: 'Reynisfjara Coastal Celebration',
        emoji: '⚔️', tag: 'VIKING FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
        description: 'On Iceland\'s dramatic black volcanic beach, Viking reenactors clash shields as waves crash against basalt columns.',
        about: 'The Reynisfjara Viking Festival is a celebration of Norse heritage held on the world\'s most dramatic volcanic beach. Longships anchor offshore, shield-maidens perform traditional dances, and blacksmiths forge iron tools on the black sand. The towering Reynisdrangar sea stacks form a mythological backdrop.',
        bestTime: 'Jun', popularity: '★★★★☆', experience: 'Epic',
        tradition: '15+ years', bestFor: 'History & Adventure', vibes: 'Wild • Epic', crowd: 'Moderate',
        highlights: [
          { title: 'Longship Arrival', desc: 'Viking longships row to shore through crashing waves', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
          { title: 'Shield-Wall Battle', desc: 'Full-armor Viking combat reenactment on black sand', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Basalt Column Drums', desc: 'Drummers echo off the towering hexagonal columns', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Blue Lagoon Spa Festival',
        festivalSubtitle: 'Geothermal Wellness Carnival',
        emoji: '💙', tag: 'WELLNESS FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1400&q=85',
        description: 'Milky-blue mineral waters steam under the midnight sun as Iceland\'s iconic Blue Lagoon hosts its annual wellness festival.',
        about: 'The Blue Lagoon Wellness Festival celebrates Iceland\'s healing geothermal culture with outdoor concerts in the silica lagoon, pop-up gourmet dining over the steaming water, and guided meditation sessions. The lagoon glows electric blue under the aurora in winter, or golden under the midnight sun in summer.',
        bestTime: 'Jun / Feb', popularity: '★★★★★', experience: 'Healing',
        tradition: '40+ years', bestFor: 'Wellness & Couples', vibes: 'Serene • Healing', crowd: 'Exclusive',
        highlights: [
          { title: 'Silica Mud Mask Ritual', desc: 'White silica mud face mask in steaming blue water', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80' },
          { title: 'Lagoon Acoustic Concert', desc: 'Singer performs on a floating platform in the water', image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=400&q=80' },
          { title: 'Midnight Sun Lava Views', desc: 'Brilliant pink sky over ancient lava fields at midnight', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    turkey: [
      {
        festivalName: 'Hagia Sophia Sacred Festival',
        festivalSubtitle: 'Byzantine to Ottoman Celebration',
        emoji: '🕌', tag: 'HERITAGE FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85',
        description: 'Istanbul\'s greatest monument hosts a festival of Islamic calligraphy, Byzantine music, and Ottoman grandeur.',
        about: 'The Hagia Sophia Heritage Festival celebrates 1,500 years of the world\'s most magnificent building — from its Byzantine Christian origins to its Ottoman Islamic transformation. The Bosphorus shores light up with calligraphy light projections while the interior hosts sacred music concerts whose harmonics fill the massive dome.',
        bestTime: 'Apr / Oct', popularity: '★★★★★', experience: 'Spiritual',
        tradition: '1,500+ years', bestFor: 'History & Culture', vibes: 'Sacred • Grand', crowd: 'Busy',
        highlights: [
          { title: 'Dome Light Projection', desc: 'Byzantine mosaics illuminated by colored light shows', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sacred Music Concert', desc: 'Byzantine choir fills the 55m dome with harmonics', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Bosphorus Night Cruise', desc: 'Festival boat circles the illuminated waterfront skyline', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Ephesus Ancient Ruins Festival',
        festivalSubtitle: 'Roman Theatre Performance Season',
        emoji: '🏛️', tag: 'ANCIENT FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=85',
        description: 'Ancient Greek theatre comes alive in Ephesus\'s 25,000-seat Roman amphitheatre under a blanket of stars.',
        about: 'The Ephesus International Festival of Culture and Art transforms the 2,000-year-old Great Theatre into a stage for world-class opera, classical concerts, and theatrical performances. Marble streets glow golden under moon and torch-light while the Library of Celsus serves as a breathtaking backdrop.',
        bestTime: 'May – Jul', popularity: '★★★★★', experience: 'Timeless',
        tradition: '2,000+ years', bestFor: 'History & Arts', vibes: 'Ancient • Grand', crowd: 'Sophisticated',
        highlights: [
          { title: 'Roman Theatre Opera', desc: 'World-class opera in the ancient 25,000-seat theatre', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Library of Celsus Glow', desc: 'Ancient marble façade lit by golden torches at night', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Marble Street Procession', desc: 'Costumed Romans and Greeks parade the ancient road', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Pamukkale Cotton Castle Festival',
        festivalSubtitle: 'Thermal Spring Carnival',
        emoji: '🌊', tag: 'THERMAL FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85',
        description: 'Snow-white calcium terraces cascade with warm mineral water as visitors bathe in Cleopatra\'s ancient thermal pools.',
        about: 'Pamukkale\'s Cotton Castle Festival celebrates Turkey\'s most surreal landscape. During the festival, the terraces are lit at dusk, thermal pool concerts are performed, and visitors can participate in traditional Phrygian harvest ceremonies in the hilltop village of Karahayıt — famous for red mineral springs.',
        bestTime: 'May / Sep', popularity: '★★★★★', experience: 'Surreal',
        tradition: '2,000+ years', bestFor: 'Nature & Wellness', vibes: 'Otherworldly • Healing', crowd: 'Moderate',
        highlights: [
          { title: 'Terrace Sunset Glow', desc: 'White calcium pools turn pink and gold at sunset', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Cleopatra Pool Soak', desc: 'Swim among Roman columns in an ancient thermal bath', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80' },
          { title: 'Hierapolis Necropolis Walk', desc: 'Ancient Roman tombs illuminated for night festival', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Grand Bazaar Spice Festival',
        festivalSubtitle: 'Istanbul\'s 4,000-Shop Carnival',
        emoji: '🌶️', tag: 'CULTURE FESTIVAL', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85',
        description: 'Istanbul\'s Grand Bazaar transforms into a festival of spices, Turkish lamps, silk, and the world\'s best street food.',
        about: 'The 560-year-old Grand Bazaar hosts its annual Spice & Crafts Festival where master craftsmen demonstrate carpet weaving, copper hammering, and calligraphy. The Egyptian Spice Bazaar opens its 400-year-old rooftop terrace for a festival feast overlooking the Bosphorus.',
        bestTime: 'Oct / Apr', popularity: '★★★★★', experience: 'Vibrant',
        tradition: '560+ years', bestFor: 'Shopping & Culture', vibes: 'Vibrant • Aromatic', crowd: 'Lively',
        highlights: [
          { title: 'Spice Tower Displays', desc: 'Pyramids of colorful spices fill every corridor', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Turkish Lamp Gallery', desc: 'Hundreds of mosaic lamps cast rainbow light', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Carpet Weaving Masters', desc: 'Artisans hand-weave silk carpets in festival stalls', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    maldives: [
      {
        festivalName: 'Baa Atoll Manta Festival',
        festivalSubtitle: 'UNESCO Biosphere Celebration',
        emoji: '🐠', tag: 'OCEAN FESTIVAL', accentColor: '#00D2C4',
        heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
        description: 'Hundreds of manta rays gather to feed in Hanifaru Bay — the largest manta feeding aggregation on earth.',
        about: 'The Baa Atoll Marine Festival celebrates the UNESCO Biosphere Reserve\'s extraordinary marine life. During peak manta season (May–November), over 200 mantas can be seen feeding simultaneously in a cyclone formation. The festival brings marine biologists, underwater photographers, and conservation divers from around the world.',
        bestTime: 'Jun – Sep', popularity: '★★★★★', experience: 'Life-Changing',
        tradition: '20+ years', bestFor: 'Ocean Lovers & Divers', vibes: 'Wild • Humbling', crowd: 'Exclusive',
        highlights: [
          { title: 'Manta Ray Tornado', desc: '200 mantas feeding in a tight spiraling formation', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Whale Shark Snorkel', desc: 'Swimming alongside the ocean\'s gentle giant', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' },
          { title: 'Coral Garden Dive', desc: 'Rainbow coral gardens teeming with tropical fish', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Hanifaru Bay Light Festival',
        festivalSubtitle: 'Bioluminescent Lagoon Night',
        emoji: '💙', tag: 'NATURE FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=85',
        description: 'Electric blue bioluminescent waves lap the shores of Hanifaru Bay under a sky blazing with stars.',
        about: 'When seasonal currents bring plankton blooms to Hanifaru Bay, the waves turn electric blue as millions of bioluminescent organisms light up with every movement. Resort boats gather offshore for guided midnight lagoon swims while the sky reflects in the glowing water — one of the most magical natural events on earth.',
        bestTime: 'Nov – Jan', popularity: '★★★★★', experience: 'Magical',
        tradition: 'Natural', bestFor: 'Couples & Dreamers', vibes: 'Ethereal • Romantic', crowd: 'Very Exclusive',
        highlights: [
          { title: 'Bioluminescent Wave Walk', desc: 'Every footstep in the shallows sparks blue light', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' },
          { title: 'Lagoon Night Swim', desc: 'Swimming through glowing blue plankton at midnight', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Starfield Kayaking', desc: 'Transparent kayak on glowing water under the Milky Way', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Sandbank Sunset Festival',
        festivalSubtitle: 'Private Island Celebration',
        emoji: '🌅', tag: 'LUXURY FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=85',
        description: 'A pristine private sandbank hosts an exclusive sunset festival with champagne, seafood, and live acoustic music.',
        about: 'The Maldives Sandbank Festival is the ultimate in exclusive luxury. A temporary island of pure white sand appears at low tide and disappears with the rising ocean — and for one night, it hosts champagne, a gourmet seafood barbecue, and an acoustic duo as the sun bleeds orange and pink across the horizon.',
        bestTime: 'Nov – Apr', popularity: '★★★★★', experience: 'Exclusive',
        tradition: 'Seasonal', bestFor: 'Couples & Luxury', vibes: 'Romantic • Dreamy', crowd: 'Very Exclusive',
        highlights: [
          { title: 'Champagne Horizon Toast', desc: 'Sunset toast on the edge of the turquoise ocean', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80' },
          { title: 'Private Island Barbecue', desc: 'Fresh lobster and seafood on your own sandbank', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Acoustic Sunset Concert', desc: 'Guitarist plays as the sandbank glows in last light', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Ithaa Undersea Dining Festival',
        festivalSubtitle: 'World\'s Most Spectacular Restaurant',
        emoji: '🐟', tag: 'GASTRONOMY FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
        description: 'Dine 5 metres underwater as manta rays and reef sharks glide silently above your glass ceiling table.',
        about: 'Ithaa Undersea Restaurant hosts an exclusive annual Underwater Gourmet Festival — a 6-course tasting menu prepared by a guest Michelin-star chef, paired with rare wines, served in the world\'s only all-glass undersea dining room. Whale sharks and coral formations are your dinner companions.',
        bestTime: 'Jan / Dec', popularity: '★★★★★', experience: 'Extraordinary',
        tradition: '20+ years', bestFor: 'Gastronomy & Luxury', vibes: 'Extraordinary • Intimate', crowd: 'Very Exclusive',
        highlights: [
          { title: 'Manta Ray Flyover', desc: 'Giant mantas glide inches above your table glass', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80' },
          { title: 'Michelin 6-Course Menu', desc: 'Exquisite seafood pairings in the ocean\'s embrace', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
          { title: 'Coral Garden Backdrop', desc: 'Technicolor coral gardens visible on all sides', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    cappadocia: [
      {
        festivalName: 'Goreme Open Air Museum Festival',
        festivalSubtitle: 'Byzantine Frescoes Come Alive',
        emoji: '🎨', tag: 'HERITAGE FESTIVAL', accentColor: '#D17A7A',
        heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85',
        description: 'The world\'s most remarkable open-air museum hosts Byzantine art festivals in its 1,000-year-old cave churches.',
        about: 'The Göreme Open Air Museum Heritage Festival brings together Byzantine scholars, icon painters, and medieval musicians to celebrate the frescoed cave churches. Candlelit performances are held inside the ancient churches, and master painters demonstrate historical techniques under the incredible natural light.',
        bestTime: 'Sep / Oct', popularity: '★★★★★', experience: 'Cultural',
        tradition: '1,000+ years', bestFor: 'Art & History', vibes: 'Sacred • Ancient', crowd: 'Moderate',
        highlights: [
          { title: 'Candlelit Cave Concert', desc: 'Medieval choral music echoes in 1,000-year-old church', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Byzantine Fresco Restoration', desc: 'Watch expert restorers bring ancient paintings back to life', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' },
          { title: 'Icon Painting Workshop', desc: 'Learn traditional gold-leaf icon painting techniques', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Uchisar Rock Castle Festival',
        festivalSubtitle: 'Valley of the Fairy Chimneys',
        emoji: '🏰', tag: 'HERITAGE FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1400&q=85',
        description: 'The volcanic rock castle of Uchisar towers over the valley as the backdrop for Cappadocia\'s ultimate sunset festival.',
        about: 'Perched at Cappadocia\'s highest point, Uchisar Castle hosts summer sunset concerts from its castle roof — a panoramic stage 1,400m above sea level. The famous Pink Valley and Pigeon Valley are illuminated below as folk musicians and whirling dervishes perform against the backdrop of hundreds of fairy chimneys.',
        bestTime: 'Jun – Aug', popularity: '★★★★☆', experience: 'Epic',
        tradition: '500+ years', bestFor: 'Music & Views', vibes: 'Dramatic • Cultural', crowd: 'Moderate',
        highlights: [
          { title: 'Castle Roof Concert', desc: 'Folk musicians play as the valley glows golden', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' },
          { title: 'Pink Valley Sunset', desc: 'Rose-colored tuff formations at the golden hour', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Whirling Dervish Show', desc: 'Sufi dervishes spin on the hilltop platform at dusk', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Underground City Exploration Festival',
        festivalSubtitle: 'Kaymakli\'s Hidden World',
        emoji: '🕯️', tag: 'HISTORY FESTIVAL', accentColor: '#8C52FF',
        heroImage: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85',
        description: 'A 2,000-year-old underground city that sheltered 20,000 people opens for a torchlit festival exploration.',
        about: 'Kaymakli Underground City Festival takes visitors deep into the 8-level subterranean labyrinth that once sheltered early Christians from Roman persecution. Festival guides dressed in period costume lead torchlit groups through wine cellars, churches, stables, and ventilation shafts — all carved into volcanic tuff over 2,000 years ago.',
        bestTime: 'Oct / Apr', popularity: '★★★★★', experience: 'Adventurous',
        tradition: '2,000+ years', bestFor: 'History & Adventure', vibes: 'Mysterious • Historic', crowd: 'Moderate',
        highlights: [
          { title: 'Torchlit Level 4 Descent', desc: 'Guide leads you through carved tunnels by torchlight', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Ancient Wine Cellar', desc: 'Stone wine jars still lining the 2,000-year-old cellar', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' },
          { title: 'Underground Church', desc: 'Rock-carved Byzantine church with original frescoes', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Hot Air Balloon Dawn Festival',
        festivalSubtitle: '100 Balloons at Sunrise',
        emoji: '🎈', tag: 'SKY FESTIVAL', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1400&q=85',
        description: 'At dawn, over 100 brilliantly coloured balloons lift silently from the valley floor, drifting over the fairy chimneys.',
        about: 'The Cappadocia Balloon Dawn Festival is the greatest spectacle in sky tourism. Hundreds of colourful hot air balloons launch simultaneously at sunrise from Göreme valley — filling the sky with colour and shadow over thousands of ancient fairy chimney formations. Riders sip champagne 1,000m above the volcanic landscape.',
        bestTime: 'Apr – Jun', popularity: '★★★★★', experience: 'Breathtaking',
        tradition: '30+ years', bestFor: 'Adventure & Photography', vibes: 'Magical • Serene', crowd: 'Moderate',
        highlights: [
          { title: 'Mass Dawn Balloon Launch', desc: '100 balloons rise in silence as the sun breaks the horizon', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' },
          { title: 'Love Valley Flyover', desc: 'Drifting over thousands of phallic rock chimneys', image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=400&q=80' },
          { title: 'Champagne Landing Toast', desc: 'Traditional post-flight champagne ceremony on landing', image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    italy: [
      {
        festivalName: 'Positano Limoncello Festival',
        festivalSubtitle: 'Amalfi Coast Citrus Harvest',
        emoji: '🍋', tag: 'HARVEST FESTIVAL', accentColor: '#FFD93D',
        heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
        description: 'Celebrate the citrus harvest in Positano, where cliffside paths are scented with local lemons and limoncello flows freely.',
        about: 'Positano\'s citrus harvest is a celebration of the legendary Sfusato Amalfitano lemon. Terraced groves clinging to sheer cliffs host local tastings, culinary masterclasses, and music as the sun sets over the Tyrrhenian Sea.',
        bestTime: 'Jul / Aug', popularity: '★★★★★', experience: 'Elegance',
        tradition: '100+ years', bestFor: 'Culinary & Views', vibes: 'Sun-kissed • Festive', crowd: 'Lively',
        highlights: [
          { title: 'Terraced Lemon Grove Walk', desc: 'Walk through lush terraced gardens with incredible coastal views.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
          { title: 'Limoncello Tastings', desc: 'Sample freshly made, chilled organic limoncello from family recipes.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
          { title: 'Clifftop Candlelit Dinner', desc: 'Dine under lemon trellises overlooking Positano\'s illuminated bay.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Ravello Chamber Music Festival',
        festivalSubtitle: 'Harmonies Above the Clouds',
        emoji: '🎻', tag: 'MUSIC FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85',
        description: 'Listen to world-class chamber music on clifftop stages suspended between the sky and the Mediterranean Sea.',
        about: 'The Ravello Music Festival dates back to 1953, dedicated to Richard Wagner who was inspired by the gardens of Villa Rufolo. Historic concerts take place in the open air, where standard concert halls are replaced by panoramas of the Amalfi coast from 350 meters above the sea.',
        bestTime: 'Jul / Aug', popularity: '★★★★★', experience: 'Refined',
        tradition: '70+ years', bestFor: 'Music & Culture', vibes: 'Romantic • Ethereal', crowd: 'Sophisticated',
        highlights: [
          { title: 'Belvedere Stage Concert', desc: 'Classical music performed on a stage cantilevered over the sea.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
          { title: 'Infinity Garden Walk', desc: 'Walk the paths of Villa Cimbrone to the Terrace of Infinity at dusk.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
          { title: 'Midnight Candlelit Recitals', desc: 'Acoustic recitals in ancient stone ruins under starry skies.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Capri Blue Light Regatta',
        festivalSubtitle: 'Sailing the Island of Emperors',
        emoji: '⛵', tag: 'SAILING FESTIVAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85',
        description: 'A parade of classic yachts circles the legendary cliffs of Capri, illuminated by standard lanterns and natural glowing water.',
        about: 'The Capri Regatta celebrates the island\'s long-standing connection to maritime adventure. From historic Roman emperors to modern superyachts, the waters of Capri host classic sailboat parades, swimming races near the Faraglioni rock pillars, and private sunset beach gatherings.',
        bestTime: 'Jun / Sep', popularity: '★★★★★', experience: 'Elite',
        tradition: '50+ years', bestFor: 'Sailing & Sunsets', vibes: 'Luxurious • Coastal', crowd: 'Exclusive',
        highlights: [
          { title: 'Grotto Swim Tour', desc: 'Swim in the glowing turquoise caves of the Blue and Green Grottoes.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80' },
          { title: 'Classic Gozzo Parade', desc: 'Traditional wooden gozzo boats lining the Capri coast at sunset.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80' },
          { title: 'Beach Club Soiree', desc: 'Live music and fine dining at an exclusive seaside beach club.', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Sant\'Andrea Festival',
        festivalSubtitle: 'The Running of the Saint',
        emoji: '⛪', tag: 'HERITAGE FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=1400&q=85',
        description: 'Amalfi\'s historic cathedral stairs host a spectacular run as locals carry the statue of St. Andrew up the steep steps.',
        about: 'Twice a year, the former maritime capital of Amalfi honors its patron saint, St. Andrew. Devotees dressed in red run up the 62 steps of the Byzantine-style cathedral carrying the heavy bronze statue, followed by classical brass band parades and fireworks reflecting on the historic harbor.',
        bestTime: 'Jun / Nov', popularity: '★★★★★', experience: 'Awe-Inspiring',
        tradition: '400+ years', bestFor: 'History & Folklore', vibes: 'Sacred • Lively', crowd: 'Busy',
        highlights: [
          { title: 'Cathedral Stairs Run', desc: 'Dozens of runners sprint up the steps carrying the Saint\'s statue.', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=400&q=80' },
          { title: 'Historic Regatta Parade', desc: 'Traditional boat crews compete in historic dress in the harbor.', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=400&q=80' },
          { title: 'Bay Fireworks Show', desc: 'A stunning fireworks show illuminating the entire cliffs of Amalfi.', image: 'https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    france: [
      {
        festivalName: 'Monaco Superyacht Gala',
        festivalSubtitle: 'The Monaco Yacht Show',
        emoji: '🛥️', tag: 'LUXURY REGATTA', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85',
        description: 'The world\'s most luxurious superyachts anchor in Monaco\'s Port Hercules for a weekend of glamour and design.',
        about: 'Every September, the Monaco Yacht Show exhibits over 120 extraordinary superyachts. Port Hercules comes alive with private champagne parties, designer debuts, and helicopter shuttles, attracting elite travelers and yacht designers from across the globe.',
        bestTime: 'Sep', popularity: '★★★★★', experience: 'Super-Premium',
        tradition: '30+ years', bestFor: 'Luxury & Design', vibes: 'Ultra-Glamorous', crowd: 'Elite',
        highlights: [
          { title: 'Superyacht Tenders', desc: 'Tour the most innovative and luxurious yachts in Port Hercules.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Casino Square Gala', desc: 'Attend the exclusive charity gala under the stars in front of Monte Carlo Casino.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Helicopter Coast Flight', desc: 'Experience a thrilling helicopter tour over the coast of Monaco.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Eze Medieval Artisans Fair',
        festivalSubtitle: 'Crafts in the Eagle\'s Nest',
        emoji: '🏰', tag: 'MEDIEVAL FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85',
        description: 'Step back in time inside the medieval walls of Eze village, perched 400 meters above the French Riviera.',
        about: 'The Eze Medieval Fair celebrates the village\'s rich artistic history. Local stone streets fill with master glassblowers, leather craftspeople, and perfumers from Grasse, demonstrating ancient techniques against a background of medieval lute music and stunning sea views.',
        bestTime: 'Jun / Jul', popularity: '★★★★☆', experience: 'Charming',
        tradition: '100+ years', bestFor: 'History & Crafts', vibes: 'Historic • Magical', crowd: 'Moderate',
        highlights: [
          { title: 'Glassblowing Masterclass', desc: 'Watch local masters forge delicate colored glass sculptures.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Exotic Botanical Garden', desc: 'Walk among ancient cacti and marble statues at the village summit.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Perfume Custom Blending', desc: 'Design a signature scent guided by Eze\'s master perfumers.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Valensole Lavender Festival',
        festivalSubtitle: 'The Sea of Purple',
        emoji: '🪻', tag: 'NATURE FESTIVAL', accentColor: '#8C52FF',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85',
        description: 'Witness the infinite fields of purple lavender in full bloom, celebrating the summer harvest with perfume and honey.',
        about: 'Held in mid-July, the Lavender Festival celebrates the peak bloom of Valensole\'s rolling fields. The entire village celebrates with traditional folk dancing, lavender essential oil distillations, and markets selling lavender honey, soap, and ice cream.',
        bestTime: 'Jul', popularity: '★★★★★', experience: 'Poetic',
        tradition: '60+ years', bestFor: 'Photography & Nature', vibes: 'Ethereal • Aromatic', crowd: 'Lively',
        highlights: [
          { title: 'Lavender Field Harvest', desc: 'Participate in traditional lavender harvesting and oil distillation.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Lavender Honey Tasting', desc: 'Sample sweet, aromatic honey directly from local beehives.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Sunset Fields Photo Tour', desc: 'Capture the purple rows under golden skies at sunset.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Cannes Film Celebration',
        festivalSubtitle: 'The Cannes Film Festival',
        emoji: '🎬', tag: 'CINEMATIC FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85',
        description: 'The world\'s most prestigious film festival transforms Cannes into a city of red carpets and beachside screens.',
        about: 'Every May, the Cannes Film Festival brings together filmmakers, actors, and journalists. The Boulevard de la Croisette glows with glamour as designers debut fashion, yachts host private launch dinners, and historic films screen on the public beach at night.',
        bestTime: 'May', popularity: '★★★★★', experience: 'Glamorous',
        tradition: '70+ years', bestFor: 'Cinema & Fashion', vibes: 'Vibrant • Glamorous', crowd: 'Very Busy',
        highlights: [
          { title: 'Red Carpet Walk', desc: 'Witness film stars ascending the stairs of the Palais des Festivals.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Cinema de la Plage', desc: 'Watch classic films under the stars on a giant beach screen.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
          { title: 'Croisette Parade', desc: 'Walk the illuminated boulevard lined with palm trees and boutiques.', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    egypt: [
      {
        festivalName: 'Pyramids Sound & Light Show',
        festivalSubtitle: 'Echoes of the Ancients',
        emoji: '🔺', tag: 'HISTORY SPECTACLE', accentColor: '#D4AF37',
        heroImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1400&q=85',
        description: 'The last remaining wonder of the ancient world is illuminated by dramatic lasers and narration at night.',
        about: 'The Sound and Light Show at the Giza Pyramids tells the legendary history of the Pharaohs. The Sphinx tells the story, while the Great Pyramid of Khufu, Khafre, and Menkaure are painted in light and laser designs, bringing ancient Egyptian mythology to life.',
        bestTime: 'Oct – Apr', popularity: '★★★★★', experience: 'Epic',
        tradition: '50+ years', bestFor: 'History & Lights', vibes: 'Mystical • Grand', crowd: 'Busy',
        highlights: [
          { title: 'Sphinx Narration Show', desc: 'Listen to history narrated from the perspective of the Sphinx.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Pyramid Laser Projection', desc: 'See the monumental stones painted in colored animations.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Midnight Desert Safari', desc: 'Ride a camel under a canopy of stars with illuminated pyramids.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Luxor Opet Festival',
        festivalSubtitle: 'Rebirth of the Nile Ritual',
        emoji: '🏛', tag: 'ANCIENT RITUAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1400&q=85',
        description: 'Witness the reconstruction of the ancient Opet festival parade, connecting Karnak and Luxor temples.',
        about: 'The Opet Festival was an ancient Egyptian celebration of fertility and rebirth. Today, the festival is recreated with thousands of costumed performers marching along the newly restored Avenue of Sphinxes, carrying golden replica barques accompanied by drums and music.',
        bestTime: 'Nov / Dec', popularity: '★★★★★', experience: 'Awe-Inspiring',
        tradition: '3,000+ years', bestFor: 'Folklore & History', vibes: 'Mystical • Festive', crowd: 'Lively',
        highlights: [
          { title: 'Avenue of Sphinxes March', desc: 'Watch thousands of costumed performers parade between temples.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Golden Barque Parade', desc: 'See replica sacred boats carried through stone temple ruins.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Karnak Pillar Illuminations', desc: 'The colossal pillars of the Hypostyle Hall lit up at night.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Abu Simbel Sun Festival',
        festivalSubtitle: 'Ramses II Alignment Feast',
        emoji: '☀️', tag: 'SOLAR FESTIVAL', accentColor: '#E5C060',
        heroImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1400&q=85',
        description: 'Twice a year, the rising sun aligns perfectly to illuminate the sanctuary of Ramses II deep inside the mountain.',
        about: 'This engineering marvel happens only on February 22 and October 22. The sun rays penetrate 60 meters inside the dark rock temple to illuminate the statues of Ramses II, Ra-Horakhty, and Amun-Ra, while leaving Ptah, the god of darkness, in shadow. Locals celebrate with traditional Nubian dance and music.',
        bestTime: 'Feb / Oct', popularity: '★★★★★', experience: 'Sacred',
        tradition: '3,200+ years', bestFor: 'Astronomy & Culture', vibes: 'Sacred • Awe-Inspiring', crowd: 'Very Busy',
        highlights: [
          { title: 'Solar Sanctuary Alignment', desc: 'Witness the exact moment the sun rays illuminate Ramses\' face.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Nubian Folk Dance', desc: 'Celebrate with vibrant Nubian dances outside the temple walls.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Nasser Lake Cruise', desc: 'Enjoy a morning cruise past the illuminated temple façade.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Red Sea Coral Reef Festival',
        festivalSubtitle: 'Underwater Marine Gala',
        emoji: '🪸', tag: 'OCEAN FESTIVAL', accentColor: '#00D2C4',
        heroImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1400&q=85',
        description: 'Explore the pristine coral walls of Sinai, celebrating the Red Sea\'s rich marine biodiversity.',
        about: 'Ras Mohammed National Park hosts an annual Marine and Coral conservation festival. Divers, photographers, and biologists gather for underwater photography contests, guided night dives to see glowing bioluminescent coral, and seaside Bedouin feasts under the stars.',
        bestTime: 'Oct / Nov', popularity: '★★★★☆', experience: 'Adventurous',
        tradition: '15+ years', bestFor: 'Diving & Wildlife', vibes: 'Wild • Humbling', crowd: 'Moderate',
        highlights: [
          { title: 'Night Coral Dive', desc: 'Dive at night to see coral reefs glowing under specialized UV light.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Shark Reef Expedition', desc: 'Swim with schools of barracuda, snapper, and reef sharks.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' },
          { title: 'Seaside Bedouin Dinner', desc: 'Enjoy traditional grilled meats and sweet tea in a beach tent.', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ],
    santorini: [
      {
        festivalName: 'Oia Sunset & Blue Domes Gala',
        festivalSubtitle: 'Aegean White Night',
        emoji: '⛪', tag: 'SCENIC FESTIVAL', accentColor: '#1A8CFF',
        heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
        description: 'A celebration of cycladic architecture, where white walls and blue domes reflect the sunset.',
        about: 'The Oia Sunset Gala celebrates Santorini\'s iconic design. As the sun sets, local classical musicians play from cliffside balconies, whitewashed lanes are lit by candle baskets, and local Assyrtiko wine tasting bars open along the paths looking over the caldera.',
        bestTime: 'May – Oct', popularity: '★★★★★', experience: 'Romantic',
        tradition: '20+ years', bestFor: 'Romance & Photography', vibes: 'Ethereal • Dreamy', crowd: 'Busy',
        highlights: [
          { title: 'Caldera Cliff Concerts', desc: 'Violinists perform classical symphonies as the sun sets.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Assyrtiko Wine Tasting', desc: 'Sample Santorini\'s famous volcanic white wines overlooking the sea.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'White Lanes Sunset Walk', desc: 'Stroll the cobblestone path of Oia under warm golden light.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Amoudi Bay Fish Festival',
        festivalSubtitle: 'Seaside Harvest Feast',
        emoji: '🐙', tag: 'CULINARY FESTIVAL', accentColor: '#FF6B81',
        heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
        description: 'Dine on fresh seafood right next to crashing waves at the bottom of Oia\'s towering red cliffs.',
        about: 'The Amoudi Bay Fish Festival brings together local fisherman and chefs for a celebration of the Aegean harvest. Tavernas set up open-air grills next to the docks, serving fresh grilled octopus, lobster, and calamari accompanied by Greek music and wine.',
        bestTime: 'Jun / Sep', popularity: '★★★★★', experience: 'Charming',
        tradition: '40+ years', bestFor: 'Seafood & Culture', vibes: 'Rustic • Lively', crowd: 'Lively',
        highlights: [
          { title: 'Open-Air Seafood Grills', desc: 'Watch local chefs grill fresh octopus over hot coals.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Traditional Greek Music', desc: 'Enjoy live bouzouki performances right on the waterfront.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Cliff Diving Show', desc: 'Watch local divers jump from the volcanic rocks into deep waters.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Akrotiri Bronze Age Festival',
        festivalSubtitle: 'Prehistoric History Reborn',
        emoji: '🏺', tag: 'HERITAGE FESTIVAL', accentColor: '#FF9F43',
        heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
        description: 'Explore the prehistoric city preserved under volcanic ash, celebrating Minoan art and history.',
        about: 'The Akrotiri Heritage Festival brings together archaeologists and historians to celebrate the Minoan Pompeii. Special torchlit evening tours are offered inside the archaeological site, and artists teach ancient fresco painting and pottery techniques to visitors.',
        bestTime: 'Oct', popularity: '★★★★☆', experience: 'Educational',
        tradition: '20+ years', bestFor: 'History & Archaeology', vibes: 'Ancient • Introspective', crowd: 'Moderate',
        highlights: [
          { title: 'Torchlit Ruins Tour', desc: 'Walk the ancient streets of the prehistoric town by torchlight.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Minoan Fresco Workshop', desc: 'Learn to paint replicas of Akrotiri\'s famous frescoes.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Ancient Pottery Throwing', desc: 'Throw clay vessels using designs from Bronze Age artifacts.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' }
        ]
      },
      {
        festivalName: 'Red Beach Volcanic Sunset Gala',
        festivalSubtitle: 'Feast of the Iron Cliffs',
        emoji: '🏖️', tag: 'GEOLOGICAL RITUAL', accentColor: '#70A1FF',
        heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
        description: 'Celebrate the dramatic geological history of Santorini on its red volcanic sand beach at twilight.',
        about: 'The Volcanic Red Beach Festival is a celebration of Santorini\'s elemental geological beauty. Visitors arrive by boat to view the red volcanic cliffs as they glow deep crimson at sunset, while local guides explain the history of the Minoan eruption over Greek wines and food.',
        bestTime: 'Jun – Sep', popularity: '★★★★☆', experience: 'Dramatic',
        tradition: '10+ years', bestFor: 'Nature & Geology', vibes: 'Wild • Elemental', crowd: 'Moderate',
        highlights: [
          { title: 'Red Cliffs sunset View', desc: 'See the red iron-rich cliffs turn fiery crimson at sunset.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Volcano boat Tour', desc: 'Sail around the active volcanic islets and swim in sulfur hot springs.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' },
          { title: 'Beachside Wine tasting', desc: 'Taste local Vinsanto sweet wines on the beach at twilight.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80' }
        ]
      }
    ]
  };

  // Default fallback: use same structure for destinations without specific data
  const defaultFestivals = placeFestivals.japan;

  /* =========================================================
     EXPERIENCE FESTIVALS — each experience item opens unique page
     ========================================================= */
  const experienceFestivals = {
    japan: [
      { festivalName: 'Traditional Tea Ceremony', festivalSubtitle: 'Chado — The Way of Tea', emoji: '🍵', tag: 'CULTURAL RITUAL', accentColor: '#E5C060', heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85', description: 'Japan\'s ancient tea ceremony transforms the simple act of making tea into a moving meditation of beauty and mindfulness.', about: 'Chado, the Way of Tea, is one of Japan\'s most refined cultural arts. A single ceremony involves months of training for the host, who must perfect every movement — from the folding of the silk cloth to the exact angle of the tea bowl. Festival tea events allow guests to participate in a full 45-minute ceremony.', bestTime: 'All Year', popularity: '★★★★★', experience: 'Meditative', tradition: '500+ years', bestFor: 'Culture & Mindfulness', vibes: 'Serene • Refined', crowd: 'Intimate', highlights: [{ title: 'Matcha Ceremony Room', desc: 'Private tatami tea room lined with bamboo screens', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Whisk & Bowl Ritual', desc: 'Master demonstrates the 48-step ceremony process', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }, { title: 'Wagashi Sweet Pairing', desc: 'Seasonal handmade sweets served before bitter matcha', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Shinkansen Bullet Train Festival', festivalSubtitle: 'Japan\'s Icon of Speed', emoji: '🚄', tag: 'MODERN MARVEL', accentColor: '#8C52FF', heroImage: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1400&q=85', description: 'Japan celebrates 60 years of the bullet train — the technology that transformed a nation.', about: 'The Shinkansen Anniversary Festival celebrates Japan\'s greatest engineering achievement. Special heritage trains run alongside modern N700S trains at Odawara station while exhibitions showcase 60 years of innovation. Night runs at 320km/h with panoramic Mt Fuji views are offered to festival pass holders.', bestTime: 'Oct', popularity: '★★★★★', experience: 'Thrilling', tradition: '60+ years', bestFor: 'Families & Engineers', vibes: 'Dynamic • Modern', crowd: 'Busy', highlights: [{ title: 'Heritage Train Ride', desc: 'Original 1964 0-series Shinkansen on special festival run', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=400&q=80' }, { title: 'Mt Fuji Night Run', desc: '320km/h night journey with panoramic Fuji views', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }, { title: 'Bento Box Festival', desc: 'Hundreds of regional ekiben bento boxes at the station', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Onsen Hot Spring Festival', festivalSubtitle: 'Rotenburo Outdoor Bath Tradition', emoji: '♨️', tag: 'WELLNESS FESTIVAL', accentColor: '#FD79A8', heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85', description: 'Japan\'s volcanic springs flow freely as winter onsen festivals celebrate the healing art of the hot bath.', about: 'The Hakone Onsen Festival celebrates Japan\'s most beloved wellness tradition in the shadow of Mount Fuji. Dozens of historic ryokan inns open their finest rotenburo outdoor baths to festival guests, with sake ceremonies held beside steaming stone pools under falling snow or cherry blossoms.', bestTime: 'Feb / Apr', popularity: '★★★★★', experience: 'Healing', tradition: '1,300+ years', bestFor: 'Wellness & Couples', vibes: 'Peaceful • Healing', crowd: 'Intimate', highlights: [{ title: 'Snow Rotenburo Soak', desc: 'Open-air hot spring while snowflakes fall on the water', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }, { title: 'Sake & Spring Ceremony', desc: 'Warm sake and seasonal kaiseki served poolside', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Yukata Evening Walk', desc: 'Strolling the lantern-lit onsen street in cotton yukata', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Kaiseki Gastronomy Festival', festivalSubtitle: 'Japan\'s Finest Culinary Art', emoji: '🍱', tag: 'GASTRONOMY FESTIVAL', accentColor: '#FF6B81', heroImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=85', description: 'Japan\'s most refined multi-course cuisine celebrated by Michelin-star chefs in Kyoto\'s finest traditional restaurants.', about: 'The Kyoto Kaiseki Grand Festival brings together the city\'s finest ryotei restaurants for a multi-day culinary celebration. Michelin-starred chefs showcase seasonal ingredients in the traditional 13-course format — each course inspired by the season\'s colors, textures, and philosophy. Festival passes include sake pairings and pottery workshops.', bestTime: 'Oct / Apr', popularity: '★★★★★', experience: 'Refined', tradition: '400+ years', bestFor: 'Gastronomy & Culture', vibes: 'Elegant • Refined', crowd: 'Sophisticated', highlights: [{ title: 'Seasonal Ingredient Market', desc: 'Kyoto\'s finest market chefs select festival ingredients', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' }, { title: 'Live Knife Skills Demo', desc: 'Michelin-star chef demonstrates ultra-precise knife work', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Lacquerware Ceremony', desc: 'Kaiseki served in 200-year-old lacquer bowls and plates', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }] }
    ],
    kyoto: [
      { festivalName: 'Private Tea Ceremony Festival', festivalSubtitle: 'Urasenke School of Chado', emoji: '🍵', tag: 'CULTURAL RITUAL', accentColor: '#E5C060', heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85', description: 'Kyoto\'s most prestigious tea school opens its private garden and ceremony rooms for an exclusive festival experience.', about: 'The Urasenke Grand Tea Festival is held annually at the 400-year-old tea school that has instructed Japanese emperors. Festival guests are received by a certified tea master who guides them through the full thick-tea and thin-tea ceremony sequence in a perfectly maintained tea garden that blooms with seasonal flowers.', bestTime: 'Apr / Nov', popularity: '★★★★★', experience: 'Meditative', tradition: '400+ years', bestFor: 'Culture & Mindfulness', vibes: 'Serene • Sacred', crowd: 'Very Intimate', highlights: [{ title: 'Urasenke Garden Ceremony', desc: 'Tea ceremony in Japan\'s most prestigious private garden', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }, { title: 'Roji Dewy Path Walk', desc: 'Traditional stone path that prepares the mind for tea', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Temae Bowl Lesson', desc: 'Guests practice making tea using antique Raku bowls', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Kyoto Kaiseki Festival', festivalSubtitle: 'Festival of Michelin-Star Ryotei', emoji: '🍱', tag: 'GASTRONOMY FESTIVAL', accentColor: '#FF6B81', heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=85', description: 'Kyoto\'s finest traditional restaurants open their private rooms for a historic culinary festival.', about: 'The Kyoto Kaiseki Grand Festival gathers the city\'s most celebrated ryotei — many with generations of history — for a celebration of Japan\'s highest culinary art. Each multi-course dinner is designed around the current seasonal landscape, and guests receive handwritten menus on washi paper to keep as festival mementos.', bestTime: 'Nov', popularity: '★★★★★', experience: 'Refined', tradition: '400+ years', bestFor: 'Gastronomy & Culture', vibes: 'Elegant • Intimate', crowd: 'Sophisticated', highlights: [{ title: '13-Course Autumn Menu', desc: 'Red maple leaves inspire every colour and texture', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Dojo Private Garden Dining', desc: 'Dinner in a lantern-lit garden overlooking a moss garden', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }, { title: 'Festival Sake Pairing', desc: 'Six premium sakes matched to the kaiseki courses', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Gion Geisha Twilight Festival', festivalSubtitle: 'An Evening in the Floating World', emoji: '🏮', tag: 'PERFORMING ARTS', accentColor: '#D17A7A', heroImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=85', description: 'Lantern-lit Gion district comes alive as maiko and geisha perform traditional arts in the preserved ochaya teahouses.', about: 'The Gion Twilight Geisha Festival offers rare access to Kyoto\'s most private world. During three evenings each year, select ochaya teahouses open their doors to allow guests to watch a maiko perform traditional Kyomai dance, play the shamisen, and engage in ozashiki games — a tradition usually reserved for the city\'s most exclusive clientele.', bestTime: 'Oct / Nov', popularity: '★★★★★', experience: 'Exquisite', tradition: '300+ years', bestFor: 'Culture & Romance', vibes: 'Enchanting • Intimate', crowd: 'Very Exclusive', highlights: [{ title: 'Maiko Kyomai Dance', desc: 'Young maiko performs the delicate Kyoto dance style', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' }, { title: 'Lantern-Lit Hanamachi Walk', desc: 'Geisha district glows with amber paper lanterns at dusk', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }, { title: 'Ozashiki Banquet Games', desc: 'Traditional drinking games in an authentic teahouse', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80' }] },
      { festivalName: 'Zen Temple Meditation Festival', festivalSubtitle: 'Moss Garden Mindfulness Retreat', emoji: '🧘', tag: 'WELLNESS FESTIVAL', accentColor: '#10AC84', heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85', description: 'Kyoto\'s ancient moss temples host a three-day meditation festival in Japan\'s most tranquil gardens.', about: 'The Zen Garden Meditation Festival at Ryoan-ji, Saihoji (Moss Temple), and Daitoku-ji gathers participants for a three-day mindfulness immersion. Early morning zazen sitting meditation is guided by resident priests in stone gardens. Afternoon sessions involve raking the famous Ryoan-ji rock garden under guidance — a rare privilege normally denied to visitors.', bestTime: 'May / Sep', popularity: '★★★★★', experience: 'Transformative', tradition: '800+ years', bestFor: 'Wellness & Seekers', vibes: 'Serene • Sacred', crowd: 'Very Intimate', highlights: [{ title: 'Ryoan-ji Rock Garden Raking', desc: 'Rare permission to rake the famous Zen garden', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' }, { title: 'Dawn Zazen Meditation', desc: 'Sitting meditation at 5am with resident Zen priests', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80' }, { title: 'Moss Garden Silent Walk', desc: 'Guided silent meditation walk in the sacred moss garden', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=400&q=80' }] }
    ]
  };

  // For other destinations, generate experience festivals from their data
  function getExperienceFestival(slug, index, expItem, dest) {
    const colors = ['#FF9F43','#10AC84','#8C52FF','#70A1FF','#FF6B81','#E5C060'];
    const ac = expItem.color || colors[index % colors.length];
    const name = dest ? dest.name : slug;
    return {
      festivalName: expItem.name,
      festivalSubtitle: `${expItem.badge || 'Experience'} in ${name}`,
      emoji: '✨',
      tag: (expItem.badge || 'EXPERIENCE').toUpperCase(),
      accentColor: ac,
      heroImage: (dest && dest.heroImage) ? dest.heroImage : `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85`,
      description: `An exclusive ${expItem.name.toLowerCase()} experience in ${name} — one of the world\'s most extraordinary destinations.`,
      about: `This ${expItem.badge || 'experience'} is among the most memorable activities available in ${name}. Carefully curated by Golden Sparrow\'s travel experts, this experience combines authentic local culture with premium comfort to create an unforgettable memory.`,
      bestTime: 'Year Round',
      popularity: '★★★★★',
      experience: expItem.badge || 'Unique',
      tradition: 'Time-Honored',
      bestFor: 'All Travellers',
      vibes: 'Authentic • Premium',
      crowd: 'Intimate',
      highlights: dest ? (dest.highlights || []).slice(0,3).map(h => ({ title: h.title, desc: h.desc, image: h.image })) : []
    };
  }

  // For other destinations, generate place festivals dynamically
  function getPlaceFestival(slug, index, placeItem, dest) {
    const colors = ['#E5C060', '#FF6B81', '#10AC84', '#8C52FF', '#FF9F43', '#70A1FF'];
    const ac = colors[index % colors.length];
    const countryName = dest ? dest.name : slug.charAt(0).toUpperCase() + slug.slice(1);
    const highlights = dest && dest.highlights ? dest.highlights.slice(0, 3).map(h => ({
      title: h.title,
      desc: h.desc,
      image: h.image
    })) : [];
    return {
      festivalName: placeItem.name,
      festivalSubtitle: placeItem.meta || `${placeItem.name} in ${countryName}`,
      emoji: '🏛️',
      tag: 'LOCAL WONDER',
      accentColor: ac,
      heroImage: placeItem.image || (dest && dest.heroImage) || 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
      description: `Explore the breathtaking beauty of ${placeItem.name} in the heart of ${countryName}.`,
      about: `Discover ${placeItem.name}, a premier destination in ${countryName}. Characterized by its unique local charm and rich history, this landmark offers visitors a truly authentic travel experience.`,
      bestTime: (dest && dest.season) || 'Year Round',
      popularity: '★★★★★',
      experience: 'Premium',
      tradition: 'Historic',
      bestFor: 'Sightseeing & Culture',
      vibes: 'Charming • Scenic',
      crowd: 'Moderate',
      highlights: highlights
    };
  }

  /* =========================================================
     CSS INJECTION
     ========================================================= */
  function injectCSS() {
    if (document.getElementById('festival-overlay-css')) return;
    const style = document.createElement('style');
    style.id = 'festival-overlay-css';
    style.textContent = `
      #festival-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: linear-gradient(135deg, rgba(254, 248, 240, 0.72) 0%, rgba(248, 244, 237, 0.45) 100%) !important;
        backdrop-filter: blur(35px) saturate(125%) !important;
        -webkit-backdrop-filter: blur(35px) saturate(125%) !important;
        overflow-y: auto; overflow-x: hidden;
        display: none; font-family: 'Plus Jakarta Sans', sans-serif;
      }
      #festival-overlay.fv-active { display: block; }
      /* ===== HEADER ===== */
      .fv-header {
        position: absolute !important;
        top: 1.25rem !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        width: 90% !important;
        max-width: 1200px !important;
        height: 4.8rem !important;
        border-radius: 999px !important;
        z-index: 100 !important;
        background: rgba(255, 255, 255, 0.35) !important;
        backdrop-filter: blur(28px) saturate(180%) !important;
        -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        box-shadow:
          0 20px 40px rgba(30, 26, 21, 0.08) !important,
          0 1px 3px rgba(30, 26, 21, 0.03) !important,
          inset 0 1px 2px rgba(255, 255, 255, 0.8) !important,
          inset 0 -1px 2px rgba(255, 255, 255, 0.3) !important,
          inset 0 10px 20px rgba(255, 255, 255, 0.15) !important,
          inset 0 0 12px rgba(169, 124, 55, 0.05) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        padding: 0 1.5rem 0 2rem !important;
      }
      .fv-back-btn {
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
        cursor: pointer !important;
        color: var(--text-dark) !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 12px rgba(30, 26, 21, 0.03) !important;
      }
      .fv-back-btn:hover {
        transform: scale(1.05) !important;
        background: rgba(255, 255, 255, 0.65) !important;
        border-color: rgba(169, 124, 55, 0.35) !important;
      }
      .fv-back-btn svg, .fv-back-btn i { width: 18px !important; height: 18px !important; pointer-events: none; }
      .fv-header-center {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 2px !important;
      }
      .fv-header-bird { display: none !important; }
      .fv-brand-name {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 0.85rem !important;
        font-weight: 700 !important;
        letter-spacing: 0.25em !important;
        color: #A97C37 !important;
        text-transform: uppercase !important;
        margin: 0 !important;
      }
      .fv-brand-sub { display: none !important; }
      .fv-wallet {
        display: flex !important;
        align-items: center !important;
        gap: 0.8rem !important;
        background: rgba(255, 255, 255, 0.45) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
        border-radius: 999px !important;
        padding: 0.5rem 1.1rem !important;
        box-shadow:
          0 4px 12px rgba(30, 26, 21, 0.03) !important,
          inset 0 1px 1.5px rgba(255, 255, 255, 0.8) !important,
          inset 0 -1px 1px rgba(255, 255, 255, 0.2) !important;
        transition: all 0.3s ease !important;
        cursor: pointer !important;
      }
      .fv-wallet:hover {
        background: rgba(255, 255, 255, 0.65) !important;
        transform: translateY(-1px) !important;
        border-color: rgba(169, 124, 55, 0.35) !important;
        box-shadow:
          0 6px 16px rgba(30, 26, 21, 0.06) !important,
          inset 0 1px 1.5px rgba(255, 255, 255, 0.95) !important;
      }
      .fv-wallet-icon { width: 24px; height: 24px; background: linear-gradient(135deg,#A97C37,#E5C060); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.65rem; font-weight: 700; }
      .fv-wallet-info { display: flex; flex-direction: column; line-height: 1.2; }
      .fv-wallet-label { font-size: 0.54rem; color: #999; font-weight: 600; letter-spacing: 0.04em; }
      .fv-wallet-amount { font-size: 0.78rem !important; font-weight: 800 !important; color: var(--text-dark) !important; }
      /* ===== HERO ===== */
      .fv-hero-wrapper {
        position: relative;
        width: 100%;
        height: 75vh;
        min-height: 520px;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
      .fv-hero-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #FAF6EE 15%, rgba(250, 246, 238, 0.88) 35%, rgba(250, 246, 238, 0) 70%);
        z-index: 1;
      }
      .fv-hero-left {
        position: relative;
        display: flex; flex-direction: column; justify-content: center;
        padding: 7.5rem 8% 2.5rem 8% !important;
        background: transparent !important; z-index: 2;
        max-width: 550px;
        box-sizing: border-box;
      }
      .fv-hero-tag {
        display: inline-flex; align-items: center; gap: 0.4rem;
        padding: 0.3rem 0.9rem; border-radius: 50px;
        font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em;
        margin-bottom: 1.1rem; width: fit-content;
      }
      .fv-hero-tag-dot { width: 5px; height: 5px; border-radius: 50%; }
      .fv-hero-main-title {
        font-family: 'Cormorant Garamond',serif;
        font-size: clamp(2.8rem,5.5vw,5rem);
        font-weight: 300; line-height: 1; color: #1E2C22; margin: 0 0 0.15rem;
      }
      .fv-hero-subtitle {
        font-family: 'Cormorant Garamond',serif;
        font-size: clamp(1.6rem,3vw,2.6rem);
        font-weight: 400; font-style: italic; margin: 0 0 1rem; line-height: 1;
      }
      .fv-hero-location {
        display: flex; align-items: center; gap: 0.4rem;
        font-size: 0.78rem; font-weight: 600; color: #888; margin-bottom: 0.9rem;
      }
      .fv-hero-location i { width: 13px; height: 13px; color: #A97C37; }
      .fv-hero-divider { width: 1px; height: 12px; background: rgba(0,0,0,0.2); display: inline-block; margin: 0 0.25rem; }
      .fv-hero-desc { font-size: 0.84rem; line-height: 1.8; color: #777; max-width: 360px; margin-bottom: 1.4rem; }
      .fv-hero-meta-row { display: flex; gap: 1.8rem; margin-bottom: 1.6rem; align-items: flex-start; }
      .fv-hero-meta-item { display: flex; flex-direction: column; gap: 0.15rem; }
      .fv-meta-label { font-size: 0.58rem; font-weight: 600; color: #bbb; letter-spacing: 0.06em; text-transform: uppercase; }
      .fv-meta-stars { color: #A97C37; font-size: 0.7rem; }
      .fv-meta-value { font-size: 0.78rem; font-weight: 700; color: #444; }
      .fv-hero-actions { display: flex; align-items: center; gap: 0.85rem; }
      .fv-explore-btn {
        display: inline-flex; align-items: center; gap: 0.6rem;
        padding: 0.78rem 1.8rem; border-radius: 50px;
        color: #FFF; font-size: 0.82rem; font-weight: 700;
        border: none; cursor: pointer; transition: all 0.3s ease;
      }
      .fv-explore-btn:hover { opacity: 0.88; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
      .fv-explore-btn i { width: 14px; height: 14px; }
      .fv-heart-btn {
        width: 40px; height: 40px; border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.1); background: white;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; color: #bbb; transition: all 0.2s ease;
      }
      .fv-heart-btn:hover { color: #FF6B81; border-color: #FF6B81; }
      .fv-heart-btn i { width: 16px; height: 16px; }

      /* Vertical floating nav on far right */
      .fv-side-nav {
        position: fixed; right: 1rem; top: 50%; transform: translateY(-50%);
        z-index: 200;
        display: flex; flex-direction: column; gap: 0.3rem;
        background: white; border-radius: 18px;
        padding: 0.6rem 0.4rem;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        border: 1px solid rgba(169,124,55,0.1);
      }
      .fv-side-nav-item {
        display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
        padding: 0.5rem 0.6rem; border-radius: 12px;
        cursor: pointer; border: none; background: transparent;
        color: #bbb; font-size: 0.56rem; font-weight: 700;
        letter-spacing: 0.04em; text-transform: uppercase;
        transition: all 0.2s ease; min-width: 52px;
      }
      .fv-side-nav-item.active { background: #F5EFE7; color: #A97C37; }
      .fv-side-nav-item:hover { background: #F8F4EE; color: #A97C37; }
      .fv-side-nav-item i { width: 18px; height: 18px; }
      .fv-about-section {
        padding: 5rem 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      }
      .fv-about-grid { display: grid; grid-template-columns: 1.1fr 1.9fr; gap: 4rem; max-width: 1240px; margin: 0 auto; padding: 0 2.5rem; }
      .fv-section-sup { font-size: 0.85rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #A97C37; margin-bottom: 0.7rem; }
      .fv-section-h2 { font-family: 'Cormorant Garamond',serif; font-size: 2.2rem; font-weight: 400; color: #1E2C22; line-height: 1.2; margin-bottom: 1.2rem; }
      .fv-about-body { font-size: 1.05rem; line-height: 1.9; color: #555; margin-bottom: 2rem; }
      .fv-stats-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
      .fv-stat-item { display: flex; flex-direction: column; gap: 0.25rem; }
      .fv-stat-icon { width: 44px; height: 44px; border-radius: 50%; background: rgba(169,124,55,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 0.3rem; color: #A97C37; }
      .fv-stat-icon i { width: 18px; height: 18px; }
      .fv-stat-val { font-size: 0.95rem; font-weight: 800; color: #1E2C22; }
      .fv-stat-label { font-size: 0.78rem; color: #999; font-weight: 500; }
      .fv-highlights-label { font-size: 0.85rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #A97C37; margin-bottom: 1.2rem; }
      .fv-highlights-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
      .fv-highlight-card {
        border-radius: 28px !important;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
        backdrop-filter: blur(20px) saturate(130%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(130%) !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        padding: 12px 12px 1.4rem 12px !important; /* Inset padding for glass frame */
        box-shadow: 
          inset 0 1px 1px rgba(255, 255, 255, 0.65), 
          inset 0 12px 20px rgba(255, 255, 255, 0.2), 
          0 10px 24px rgba(0, 0, 0, 0.04) !important;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
        -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
      }
      .fv-highlight-card::after {
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
      .fv-highlight-card:hover {
        transform: translateY(-5px) scale(1.01) !important;
        box-shadow: 
          inset 0 1px 1px rgba(255, 255, 255, 0.75), 
          inset 0 12px 20px rgba(255, 255, 255, 0.25), 
          0 15px 35px rgba(0, 0, 0, 0.08) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 169, 124, 55), 0.18) 0%, rgba(var(--card-accent-rgb, 169, 124, 55), 0.06) 100%) !important;
      }
      .fv-highlight-card:hover::after {
        opacity: 0.35;
      }
      .fv-hl-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-radius: 18px !important; display: block; }
      .fv-hl-body { padding: 1.5rem 0.5rem 0 0.5rem !important; display: flex; flex-direction: column; position: relative; z-index: 1; text-align: center; }
      .fv-hl-title { font-family: 'Cormorant Garamond', serif !important; font-size: 1.65rem !important; font-weight: 600 !important; color: #1E2C22 !important; margin-bottom: 0.2rem !important; line-height: 1.2; }
      .fv-hl-desc { font-family: 'Plus Jakarta Sans', sans-serif !important; font-size: 0.78rem !important; color: #555 !important; line-height: 1.5 !important; margin-bottom: 1.2rem !important; font-weight: 400; }
      
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
      .fv-highlight-card:hover .new-hl-card-icon-wrapper {
        transform: translateX(-50%) scale(1.08);
      }
      .new-hl-card-icon-wrapper i, .new-hl-card-icon-wrapper svg { width: 18px; height: 18px; }
      .new-hl-card-divider {
        width: 32px;
        height: 1.5px;
        background: var(--card-accent, #A97C37);
        margin: 8px auto 12px auto;
        opacity: 0.6;
        transition: width 0.3s ease;
      }
      .fv-highlight-card:hover .new-hl-card-divider { width: 55px; }
      .new-hl-card-dots { display: flex; justify-content: center; gap: 6px; margin-top: auto; }
      .new-hl-card-dots span {
        width: 5px; height: 5px; border-radius: 50%;
        background: var(--card-accent, #A97C37); opacity: 0.25;
        transition: all 0.3s ease;
      }
      .fv-highlight-card:hover .new-hl-card-dots span:nth-child(2) { opacity: 1; transform: scale(1.2); }

      .fv-places-section {
        padding: 5rem 0;
        background: linear-gradient(180deg, rgba(250, 249, 246, 0.35) 0%, rgba(245, 243, 238, 0.15) 100%) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      }
      .fv-places-container { max-width: 1240px; margin: 0 auto; padding: 0 2.5rem; display: grid; grid-template-columns: 1.4fr 1fr; gap: 4rem; }
      .fv-places-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
      .fv-view-all { font-size: 0.75rem; font-weight: 600; color: #A97C37; text-decoration: none; display: flex; align-items: center; gap: 0.3rem; cursor: pointer; }
      .fv-view-all:hover { opacity: 0.7; }
      .fv-view-all i { width: 12px; height: 12px; }
      .fv-places-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.2rem; }
      .fv-place-card {
        border-radius: 24px !important;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
        backdrop-filter: blur(20px) saturate(130%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(130%) !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        padding: 10px 10px 1.2rem 10px !important; /* Inset padding for glass frame */
        box-shadow: 
          inset 0 1px 1px rgba(255, 255, 255, 0.65), 
          inset 0 12px 20px rgba(255, 255, 255, 0.2), 
          0 10px 24px rgba(0, 0, 0, 0.04) !important;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        display: flex;
        flex-direction: column;
        position: relative;
        -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
      }
      .fv-place-card::after {
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
      .fv-place-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 10px 24px rgba(0,0,0,0.06) !important;
        border-color: rgba(169, 124, 55, 0.2) !important;
      }
      .fv-place-card:hover::after {
        opacity: 0.35;
      }
      .fv-place-img-wrap { height: 120px !important; position: relative !important; overflow: hidden !important; border-radius: 14px !important; }
      .fv-place-img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block; transition: transform 0.5s ease; }
      .fv-place-card:hover .fv-place-img { transform: scale(1.05); }
      .fv-place-rating { position: absolute !important; top: 6px !important; right: 6px !important; left: auto !important; background: rgba(255,255,255,0.92) !important; backdrop-filter: blur(8px) !important; border-radius: 50px !important; padding: 2px 8px !important; font-size: 0.68rem !important; font-weight: 700 !important; color: #1E2C22 !important; display: flex !important; align-items: center !important; gap: 3px !important; z-index: 10; }
      
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
      .fv-place-card:hover .place-card-icon-wrapper {
        transform: translateX(-50%) scale(1.08);
      }
      .place-card-icon-wrapper i, .place-card-icon-wrapper svg { width: 18px; height: 18px; }

      .fv-place-card-body { padding: 1.5rem 0.4rem 0 0.4rem !important; display: flex; flex-direction: column; flex-grow: 1; text-align: center; z-index: 1; }
      .fv-place-name { font-family: 'Cormorant Garamond', serif !important; font-size: 1.5rem !important; font-weight: 600 !important; color: #1E2C22 !important; margin-bottom: 0.2rem !important; line-height: 1.2; }
      .place-card-divider {
        width: 32px;
        height: 1.5px;
        background: var(--card-accent, #A97C37);
        margin: 8px auto 12px auto;
        opacity: 0.6;
        transition: width 0.3s ease;
      }
      .fv-place-card:hover .place-card-divider { width: 55px; }
      .fv-place-meta { font-family: 'Plus Jakarta Sans', sans-serif !important; font-size: 0.78rem !important; color: #555 !important; line-height: 1.5 !important; margin-bottom: 1.2rem !important; font-weight: 400; }
      .place-card-dots { display: flex; justify-content: center; gap: 6px; margin-top: auto; }
      .place-card-dots span {
        width: 5px; height: 5px; border-radius: 50%;
        background: var(--card-accent, #E5C060); opacity: 0.25;
        transition: all 0.3s ease;
      }
      .fv-place-card:hover .place-card-dots span:nth-child(2) { opacity: 1; transform: scale(1.2); }

      .fv-place-country { display: none !important; }
      .fv-exp-section-title { font-family: 'Cormorant Garamond',serif; font-size: 1.6rem; font-weight: 400; color: #1E2C22; margin-bottom: 1.2rem; line-height: 1.2; }
      
      .fv-exp-list {
        display: flex !important;
        flex-direction: column !important;
        gap: 0.75rem !important;
      }
      @media (max-width: 768px) {
        .fv-exp-list { flex-direction: column !important; }
      }
      
      /* Imageless Cards in Overlay - First Reference Image Style */
      .fv-exp-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        min-height: 200px;
        padding: 24px !important;
        border-radius: 24px !important;
        background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 255, 255, 255), 0.15) 0%, rgba(var(--card-accent-rgb, 255, 255, 255), 0.05) 100%) !important;
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
      .fv-exp-item::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 80% 20%, var(--card-accent, rgba(169, 124, 55, 0.15)) 0%, transparent 60%);
        opacity: 0.7;
        z-index: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .fv-exp-item:hover {
        transform: translateY(-5px) scale(1.01) !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        box-shadow: 
          inset 0 1px 1px rgba(255, 255, 255, 0.7), 
          inset 0 10px 20px rgba(255, 255, 255, 0.2), 
          0 15px 40px rgba(0, 0, 0, 0.06) !important;
        background: linear-gradient(135deg, rgba(var(--card-accent-rgb, 255, 255, 255), 0.28) 0%, rgba(var(--card-accent-rgb, 255, 255, 255), 0.12) 100%) !important;
      }
      .fv-exp-item:hover::before { opacity: 1; }
      .exp-card-header-row { display: flex; justify-content: space-between; align-items: center; width: 100%; z-index: 1; }
      .exp-card-icon-badge {
        width: 42px; height: 42px; border-radius: 12px;
        background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        display: flex; align-items: center; justify-content: center;
        color: var(--card-accent, #A97C37); transition: transform 0.3s ease;
      }
      .fv-exp-item:hover .exp-card-icon-badge { transform: scale(1.05); }
      .exp-card-icon-badge i, .exp-card-icon-badge svg { width: 20px; height: 20px; }
      .exp-card-dot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid rgba(0,0,0,0.15); opacity: 0.5; }
      .exp-card-title {
        font-family: 'Plus Jakarta Sans', sans-serif !important; font-size: 1.15rem !important; font-weight: 700 !important;
        color: #1E2C22 !important; margin: 1.2rem 0 0.6rem 0 !important; text-align: left; line-height: 1.3; z-index: 1; width: 100%;
      }
      .exp-card-footer-row { display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: auto; z-index: 1; }
      .exp-card-badge { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.68rem; font-weight: 700; padding: 3px 8px; border-radius: 50px; letter-spacing: 0.03em; }
      .exp-card-action-btn {
        width: 32px; height: 32px; border-radius: 50%; border: 1px solid rgba(0, 0, 0, 0.1);
        background: transparent; color: #1E2C22; display: flex; align-items: center; justify-content: center;
        cursor: pointer; transition: all 0.3s ease;
      }
      .fv-exp-item:hover .exp-card-action-btn { background: #1E2C22; color: #FFFFFF; border-color: #1E2C22; }
      .exp-card-action-btn i, .exp-card-action-btn svg { width: 14px; height: 14px; }

      .fv-packages-section {
        padding: 5rem 0;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.45) !important;
      }
      .fv-packages-container { max-width: 1240px; margin: 0 auto; padding: 0 2.5rem; }
      
      /* Make overlay section containers take full width (with 5% side gutters) */
      .fv-about-grid,
      .fv-places-container,
      .fv-packages-container {
        max-width: 100% !important;
        width: 100% !important;
        padding-left: 5% !important;
        padding-right: 5% !important;
        box-sizing: border-box !important;
      }
      .fv-packages-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; }
      .fv-packages-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.4rem; }
      .fv-pkg-card {
        border-radius: 24px !important;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 100%) !important;
        backdrop-filter: blur(20px) saturate(130%) !important;
        -webkit-backdrop-filter: blur(20px) saturate(130%) !important;
        border: 1px solid rgba(255, 255, 255, 0.45) !important;
        padding: 10px 10px 1.2rem 10px !important; /* Inset padding for glass frame */
        box-shadow: 
          inset 0 1px 1px rgba(255, 255, 255, 0.65), 
          inset 0 12px 20px rgba(255, 255, 255, 0.2), 
          0 10px 24px rgba(0, 0, 0, 0.04) !important;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
        -webkit-box-reflect: below 8px linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.06));
      }
      .fv-pkg-card::after {
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
      .fv-pkg-card:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 10px 24px rgba(0,0,0,0.06) !important;
        border-color: rgba(169, 124, 55, 0.2) !important;
      }
      .fv-pkg-card:hover::after {
        opacity: 0.35;
      }
      .fv-pkg-img-wrap { height: 150px !important; position: relative !important; overflow: hidden !important; border-radius: 14px !important; }
      .fv-pkg-img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block; transition: transform 0.5s ease; }
      .fv-pkg-card:hover .fv-pkg-img { transform: scale(1.05); }
      
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
      .fv-pkg-card:hover .pkg-card-icon-wrapper {
        transform: translateX(-50%) scale(1.08);
      }
      .pkg-card-icon-wrapper i, .pkg-card-icon-wrapper svg { width: 18px; height: 18px; }

      .fv-pkg-duration-badge { position: absolute !important; top: 10px !important; left: 10px !important; bottom: auto !important; background: rgba(30,44,34,0.85) !important; backdrop-filter: blur(8px) !important; border-radius: 50px !important; padding: 4px 10px !important; font-size: 0.72rem !important; font-weight: 700 !important; color: #FFF !important; z-index: 10; }
      
      .fv-pkg-body { padding: 1.5rem 0.5rem 0 0.5rem !important; display: flex; flex-direction: column; flex-grow: 1; text-align: center; z-index: 1; }
      .fv-pkg-name { font-family: 'Cormorant Garamond', serif !important; font-size: 1.5rem !important; font-weight: 600 !important; color: #1E2C22 !important; margin-bottom: 0.2rem !important; line-height: 1.2; }
      .pkg-card-divider {
        width: 32px;
        height: 1.5px;
        background: var(--card-accent, #A97C37);
        margin: 8px auto 12px auto;
        opacity: 0.6;
        transition: width 0.3s ease;
      }
      .fv-pkg-card:hover .pkg-card-divider { width: 55px; }
      .pkg-card-dots { display: flex; justify-content: center; gap: 6px; margin-bottom: 1rem; }
      .pkg-card-dots span {
        width: 5px; height: 5px; border-radius: 50%;
        background: var(--card-accent, #A97C37); opacity: 0.25;
        transition: all 0.3s ease;
      }
      .fv-pkg-card:hover .pkg-card-dots span:nth-child(2) { opacity: 1; transform: scale(1.2); }

      .fv-pkg-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.3) !important; }
      .fv-pkg-price-label { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.7rem; color: #888; text-transform: uppercase; letter-spacing: 0.05em; text-align: left; }
      .fv-pkg-price { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.25rem; font-weight: 700; color: #A97C37; }
      .fv-pkg-btn { width: 40px; height: 40px; border-radius: 50%; background: #A97C37; color: white; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; }
      .fv-pkg-btn:hover { background: #1E2C22; transform: scale(1.05); }
      .fv-pkg-btn i { width: 18px; height: 18px; }
      @media (max-width: 1100px) {
        .fv-header-wrapper { width: 92% !important; }
        .fv-hero { grid-template-columns: 1fr; }
        .fv-hero-left { padding: 3.5rem 2rem 2rem; min-height: auto; }
        .fv-hero-right { height: 50vw; }
        .fv-about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        .fv-places-container { grid-template-columns: 1fr; gap: 2.5rem; }
        .fv-packages-grid { grid-template-columns: repeat(2,1fr) !important; }
        .fv-stats-row { grid-template-columns: repeat(2,1fr); }
      }
      @media (max-width: 680px) {
        .fv-header-wrapper {
          width: 96% !important;
          top: 0.5rem !important;
        }
        .fv-header {
          height: 3.6rem !important;
          padding: 0 0.6rem !important;
        }
        .fv-back-btn {
          position: absolute !important;
          left: 0.6rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .fv-brand-group {
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          margin: 0 !important;
        }
        .fv-brand-name {
          display: none !important;
        }
        .fv-wallet-pill {
          position: absolute !important;
          right: 0.6rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
        }
        .fv-nav-pills { display: none; }
        .fv-hero-left { padding: 2.5rem 1.5rem; }
        .fv-highlights-grid { grid-template-columns: 1fr !important; }
        .fv-places-grid { grid-template-columns: 1fr !important; }
        .fv-packages-grid { grid-template-columns: 1fr !important; }

        .fv-place-card {
          width: 85% !important;
          max-width: 330px !important;
          margin: 0 auto !important;
        }
        .fv-place-img-wrap {
          height: 170px !important;
        }
        .fv-highlight-card,
        .fv-pkg-card {
          width: 85% !important;
          max-width: 340px !important;
          margin: 0 auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /* =========================================================
     BUILD HTML for a specific festival
     ========================================================= */
  function buildPage(fest, slug, destFestData, dest) {
    const ac = fest.accentColor;
    const name = dest ? dest.name : slug.charAt(0).toUpperCase() + slug.slice(1);
    const packages = fest.packages || (destFestData && destFestData.packages) || (dest ? (dest.packages || []) : []);
    const places   = fest.places || (destFestData && destFestData.places) || [];
    const exps     = fest.experiences || (destFestData && destFestData.experiences) || [];

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

    const placesHTML = places.slice(0,4).map(p => `
      <div class="fv-place-card" style="border-radius: 20px; overflow: hidden; background: #FFF; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 16px rgba(0,0,0,0.02); padding: 8px !important; display: flex; flex-direction: column; text-align: left; transition: all 0.3s ease; --card-accent: #E5C060;">
        <div class="fv-place-img-wrap" style="position: relative; border-radius: 14px; overflow: hidden; height: 135px; width: 100%;">
          <img class="fv-place-img" src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover; border-radius:0 !important;">
          <div class="fv-place-rating" style="position: absolute; top: 8px; left: 8px; background: rgba(255,255,255,0.9); padding: 3px 8px; border-radius: 99px; font-family: var(--font-sans); font-size: 0.65rem; font-weight: 800; color: var(--text-dark); display: flex; align-items: center; gap: 2px;">
            <i data-lucide="star" style="width: 10px; height: 10px; fill: #E5C060; color: #E5C060;"></i>
            <span>${p.rating}</span>
          </div>
        </div>
        <div class="fv-place-card-body" style="padding: 0.8rem 0.4rem 0.4rem 0.4rem !important; display: flex; flex-direction: column; text-align: left !important; align-items: flex-start !important;">
          <h4 class="fv-place-name" style="font-family: var(--font-sans) !important; font-size: 0.88rem !important; font-weight: 800 !important; color: var(--text-dark) !important; margin: 0 !important; line-height: 1.2;">${p.name}</h4>
          <p class="fv-place-meta" style="font-family: var(--font-sans) !important; font-size: 0.72rem !important; color: var(--text-muted) !important; line-height: 1.4 !important; margin: 4px 0 8px 0 !important;">${p.meta}</p>
          <span style="font-family: var(--font-sans); font-size: 0.65rem; color: var(--text-muted); display: flex; align-items: center; gap: 3px; margin-top: auto;">
            <i data-lucide="map-pin" style="width: 10px; height: 10px; color: var(--accent-gold);"></i>
            <span>${name}</span>
          </span>
        </div>
      </div>`).join('');

    const cols = ['#FF9F43','#10AC84','#8C52FF','#70A1FF','#FF6B81','#E5C060'];

    // Rich detail content for accordion dropdowns
    const expDetailMap = {
      'Traditional Tea Ceremony': { desc: 'Participate in a 45-minute Chado tea ceremony guided by a certified master in an authentic tatami room.', duration: '45 min', groupSize: 'Up to 6 guests', details: ['Full matcha preparation ritual', 'Seasonal wagashi sweet pairing', 'Handcrafted Raku ceramic bowl', 'English-guided cultural commentary'] },
      'Bullet Train Shinkansen Ride': { desc: 'Experience Japan\'s 320km/h bullet train from Tokyo to Kyoto with panoramic Mt Fuji window views.', duration: '2.5 hrs', groupSize: 'Any group', details: ['Reserved Green Car seating', 'Onboard premium bento box', 'Mt Fuji window-seat arrangement', 'JR Pass included'] },
      'Hot Spring Onsen Relaxation': { desc: 'Soak in mineral-rich volcanic hot springs in a private outdoor rotenburo bath at a historic Hakone ryokan.', duration: '3 hrs', groupSize: 'Couples / Solo', details: ['Private rotenburo outdoor bath', 'Traditional yukata robe provided', 'Sake and seasonal snack tray', 'In-room kaiseki dinner option'] },
      'Michelin Kaiseki Gastronomy': { desc: 'Savour a 13-course Michelin-star kaiseki dinner in a centuries-old Kyoto ryotei with private garden views.', duration: '3 hrs', groupSize: 'Up to 8 guests', details: ['13-course seasonal kaiseki menu', 'Curated sake and wine pairings', 'Private tatami dining room', 'Handwritten washi paper menu keepsake'] },
      'Northern Lights Hunting': { desc: 'Chase the aurora borealis with expert guides on a night tour to Iceland\'s darkest and clearest sky locations.', duration: '4–5 hrs', groupSize: 'Up to 12 guests', details: ['Expert aurora forecast guide', 'Luxury heated minibus transport', 'Hot chocolate & blankets provided', 'Professional photography tips'] },
      'Glacier Snowmobiling': { desc: 'Race across the vast Langjökull ice cap on powerful snowmobiles with jaw-dropping volcanic landscape views.', duration: '2.5 hrs', groupSize: 'Up to 20 guests', details: ['Full safety gear and snowsuit', 'Certified glacier guide escort', 'Ice cave visit option add-on', 'GoPro recording available'] },
      'Waterfalls Exploration': { desc: 'Trek behind Seljalandsfoss and beneath Skógafoss on a guided waterfall hike along Iceland\'s stunning south coast.', duration: '6 hrs', groupSize: 'Up to 16 guests', details: ['Guided hike behind Seljalandsfoss', 'Skógafoss rainbow viewpoint', 'Coastal basalt cliff walk', 'Packed gourmet Icelandic lunch'] },
      'Volcanic Rye Bread Tasting': { desc: 'Taste traditional Hverabrauð rye bread baked underground in geothermal heat, paired with smoked trout.', duration: '1.5 hrs', groupSize: 'Up to 10 guests', details: ['Geothermal bread baking demo', 'Smoked arctic trout pairing', 'Skyr yogurt dessert tasting', 'Take-home recipe card'] },
      'Glacier Express Scenic Rail': { desc: 'Journey across 291 bridges through the Swiss Alps on the legendary Glacier Express — the world\'s slowest express train.', duration: '8 hrs', groupSize: 'Any group', details: ['1st Class panoramic window seats', 'Onboard 3-course Swiss lunch', 'Passes through 91 tunnels', 'Zermatt to St. Moritz route'] },
      'Alpine Cheese Fondue Tasting': { desc: 'Enjoy an authentic alpine cheese fondue in a restored 300-year-old chalet with views of the Bernese Alps.', duration: '2 hrs', groupSize: 'Up to 8 guests', details: ['Traditional Gruyère & Emmental fondue', 'Swiss raclette board pairing', 'Local wine and schnapps tasting', 'Cheesemaker cellar tour'] },
      'Zermatt Skiing & Boarding': { desc: 'Ski 360km of pistes on the glacier above Zermatt with unobstructed views of the iconic Matterhorn peak.', duration: 'Full Day', groupSize: 'Any group', details: ['All-inclusive ski pass included', 'Professional ski instructor option', 'Helmet and equipment rental', 'Mountain restaurant lunch reservation'] },
      'Paragliding over Interlaken': { desc: 'Soar above turquoise lakes Thun and Brienz in tandem with a certified paragliding pilot from Beatenberg peak.', duration: '30–40 min flight', groupSize: 'Solo or pairs', details: ['Certified tandem pilot', 'Take-off from 1,070m altitude', 'Video recording included', 'Spectacular Eiger Nordwand views'] },
      'Whirling Dervishes Ritual': { desc: 'Witness the sacred Sema ceremony of the Mevlevi Order — a UNESCO-listed spiritual ritual of spinning meditation.', duration: '1.5 hrs', groupSize: 'Any group', details: ['Authentic Mevlevi Sema performance', 'Pre-ceremony cultural talk', 'Traditional flute & ney music live', 'Private seating in historic lodge'] },
      'Private Bosphorus Yacht Sail': { desc: 'Cruise the legendary Bosphorus strait between Europe and Asia on a private traditional gulet yacht at sunset.', duration: '3 hrs', groupSize: 'Up to 12 guests', details: ['Private gulet yacht charter', 'Sunset Golden Horn cruise', 'Turkish meze and raki onboard', 'Bosphorus bridge-lit night option'] },
      'Traditional Hamam Spa Scrub': { desc: 'Indulge in a full royal hamam ritual at a 500-year-old Ottoman bathhouse — a centuries-old Turkish wellness tradition.', duration: '2 hrs', groupSize: 'Couples / Solo', details: ['Full kese exfoliation scrub', 'Foam massage by trained tellak', 'Olive oil soap and towel set', 'Traditional çay tea post-treatment'] },
      'Gourmet Turkish Kebab Tasting': { desc: 'Taste 8 legendary Turkish kebab varieties at a private chef\'s table in Istanbul\'s historic Sultanahmet district.', duration: '2 hrs', groupSize: 'Up to 10 guests', details: ['8 regional kebab varieties tasted', 'Meze and fresh pita selection', 'Turkish dessert baklava platter', 'Cooking demonstration included'] },
      'Manta Ray Snorkeling': { desc: 'Snorkel alongside hundreds of giant manta rays in Hanifaru Bay — the world\'s largest marine feeding aggregation.', duration: '3 hrs', groupSize: 'Up to 8 guests', details: ['Marine biologist guide', 'Snorkel & wetsuit gear', 'Underwater video recording', 'Dolphin boat transfer'] },
      'Private Sunset Sandbank Dinner': { desc: 'Dine on a private disappearing sandbank as the Maldivian sun melts into the turquoise horizon with champagne and seafood.', duration: '3 hrs', groupSize: 'Couples only', details: ['Private candlelit table setup', 'Champagne & lobster feast', 'Acoustic guitarist serenade', 'Seaplane or speedboat transfer'] },
      'Caldera Catamaran Sailing': { desc: 'Sail around Santorini\'s dramatic caldera on a luxury catamaran, stopping at volcanic hot springs and Oia for sunset cocktails.', duration: '5 hrs', groupSize: 'Up to 16 guests', details: ['Full catamaran with crew', 'Volcanic hot spring swim stop', 'Onboard BBQ lunch & open bar', 'Oia sunset front-row view'] },
      'Nile Sailing Cruise': { desc: 'Sail the legendary Nile on a traditional felucca or luxury dahabiya past ancient temples and sandbanks at sunset.', duration: '3 hrs', groupSize: 'Up to 10 guests', details: ['Traditional felucca or dahabiya', 'Sunset sailing past temples', 'Egyptian tea and snacks', 'Expert Egyptologist commentary'] },
      'Pyramids Camel Safari': { desc: 'Ride a camel through the Giza desert at sunrise as the Great Pyramid reveals itself from behind the dunes in golden light.', duration: '2 hrs', groupSize: 'Up to 15 guests', details: ['Sunrise desert camel ride', 'Experienced camel handlers', 'Sphinx viewpoint photostop', 'Traditional Bedouin tea break'] },
      'Valley of Kings Exploration': { desc: 'Descend into Tutankhamun\'s burial chamber and explore royal tombs with a private Egyptologist guide.', duration: '4 hrs', groupSize: 'Up to 8 guests', details: ['Private Egyptologist guide', 'Tutankhamun tomb access', 'Hieroglyph interpretation tour', 'Nefertari painted tomb option'] },
      'Red Sea Deep Reef Diving': { desc: 'Dive the pristine coral walls of Ras Mohammed — one of the world\'s top dive sites with sharks and technicolor reefs.', duration: '4 hrs', groupSize: 'Up to 8 guests', details: ['PADI certified dive guide', 'Full scuba equipment rental', 'Two 45-minute deep dives', 'Reef shark & eagle ray sightings'] }
    };

    const expsHTML = exps.slice(0,4).map((e,i) => {
      const c = e.color || cols[i % cols.length];
      const detail = expDetailMap[e.name] || {
        desc: `An exclusive ${(e.badge || 'experience').toLowerCase()} curated by Golden Sparrow — a truly unforgettable encounter.`,
        duration: 'Varies', groupSize: 'Any group',
        details: ['Expert local guide included', 'Premium transport & logistics', 'Authentic cultural immersion', 'Golden Sparrow exclusive access']
      };
      const uid = `exp-drop-${i}-${Math.random().toString(36).slice(2,7)}`;
      const detailsHTML = detail.details.map(d => `
        <li style="display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:0.72rem;color:#444;line-height:1.5;">
          <span style="width:5px;height:5px;border-radius:50%;background:${c};flex-shrink:0;"></span>${d}
        </li>`).join('');
      return `
        <div class="fv-loved-exp-item" data-exp-id="${uid}" style="background:#FFF;border-radius:16px;margin-bottom:0.75rem;border:1px solid rgba(0,0,0,0.05);box-shadow:0 2px 8px rgba(0,0,0,0.02);overflow:hidden;transition:all 0.35s ease;">
          <div class="fv-exp-row" style="display:flex;align-items:center;gap:0.8rem;padding:0.85rem 1rem;cursor:pointer;">
            <div style="background:${c}18;color:${c};width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.3s ease;"><i data-lucide="${e.icon||'star'}" style="width:16px;height:16px;"></i></div>
            <div style="display:flex;flex-direction:column;text-align:left;line-height:1.4;flex:1;min-width:0;">
              <h4 style="font-family:var(--font-sans)!important;font-size:0.82rem!important;font-weight:800!important;margin:0!important;color:var(--text-dark)!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${e.name}</h4>
              <span style="font-family:var(--font-sans);font-size:0.68rem;color:${c};font-weight:600;">${e.badge||'Experience'}</span>
            </div>
            <div class="fv-exp-arrow" style="width:28px;height:28px;border-radius:50%;border:1px solid rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.3s ease;background:transparent;">
              <i data-lucide="chevron-down" style="width:13px;height:13px;color:#888;transition:transform 0.3s ease;"></i>
            </div>
          </div>
          <div class="fv-exp-dropdown" style="max-height:0;overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);">
            <div style="padding:0 1rem 1rem 1rem;border-top:1px solid rgba(0,0,0,0.04);">
              <p style="font-family:var(--font-sans);font-size:0.78rem;color:#555;line-height:1.65;margin:0.85rem 0 1rem 0;">${detail.desc}</p>
              <div style="display:flex;gap:1.5rem;margin-bottom:1rem;">
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.08em;">Duration</span>
                  <span style="font-family:var(--font-sans);font-size:0.78rem;font-weight:700;color:var(--text-dark);display:flex;align-items:center;gap:4px;"><span style="color:${c};">&#9711;</span>${detail.duration}</span>
                </div>
                <div style="display:flex;flex-direction:column;gap:2px;">
                  <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;color:#999;text-transform:uppercase;letter-spacing:0.08em;">Group Size</span>
                  <span style="font-family:var(--font-sans);font-size:0.78rem;font-weight:700;color:var(--text-dark);display:flex;align-items:center;gap:4px;"><span style="color:${c};">&#9711;</span>${detail.groupSize}</span>
                </div>
              </div>
              <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px;">${detailsHTML}</ul>
              <button style="margin-top:1rem;width:100%;padding:0.6rem 0;background:${c}12;border:1px solid ${c}25;border-radius:10px;font-family:var(--font-sans);font-size:0.72rem;font-weight:700;color:${c};cursor:pointer;transition:all 0.25s ease;letter-spacing:0.03em;">Book This Experience</button>
            </div>
          </div>
        </div>`;
    }).join('');

    const pkgsHTML = packages.slice(0,4).map(p => `
      <div class="fv-pkg-card" style="border-radius: 20px; overflow: hidden; background: #FFF; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 16px rgba(0,0,0,0.02); padding: 8px !important; display: flex; flex-direction: column; text-align: left; transition: all 0.3s ease; position: relative; min-height: 270px; --card-accent: #A97C37;">
        <div class="fv-pkg-img-wrap" style="position: relative; border-radius: 14px; overflow: hidden; height: 130px; width: 100%;">
          <img class="fv-pkg-img" src="${p.image}" alt="${p.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover; border-radius:0 !important;">
          <div class="fv-pkg-duration-badge" style="position: absolute; top: 8px; left: 8px; background: rgba(255,255,255,0.9); padding: 3px 8px; border-radius: 99px; font-family: var(--font-sans); font-size: 0.65rem; font-weight: 800; color: var(--text-dark);">${p.duration}</div>
        </div>
        <div class="fv-pkg-body" style="padding: 0.8rem 0.4rem 0.4rem 0.4rem !important; display: flex; flex-direction: column; flex-grow: 1; text-align: left !important; align-items: flex-start !important; justify-content: space-between;">
          <h4 class="fv-pkg-name" style="font-family: var(--font-sans) !important; font-size: 0.85rem !important; font-weight: 800 !important; color: var(--text-dark) !important; margin: 0 0 1rem 0 !important; line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 2.3rem;">${p.name}</h4>
          <div class="fv-pkg-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: auto; border-top: 1px solid rgba(0,0,0,0.04); padding-top: 0.6rem;">
            <div class="fv-pkg-price-group" style="display: flex; flex-direction: column; text-align: left; line-height: 1.1;">
              <span class="fv-pkg-price-label" style="font-family: var(--font-sans); font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase;">Starts From</span>
              <span class="fv-pkg-price" style="font-family: var(--font-sans); font-size: 1.05rem; font-weight: 800; color: var(--text-dark); margin-top: 2px;">${p.price}</span>
            </div>
            <button class="fv-pkg-btn" style="width: 28px; height: 28px; border-radius: 50%; border: none; background: rgba(169,124,55,0.08); color: #A97C37; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; padding: 0;"><i data-lucide="arrow-right" style="width: 12px; height: 12px;"></i></button>
          </div>
        </div>
      </div>`).join('');

    const hlHTML = (fest.highlights || []).map(h => `
      <div class="fv-highlight-card" style="border-radius: 20px; overflow: hidden; background: #FFF; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 4px 16px rgba(0,0,0,0.02); display: flex; flex-direction: column; transition: all 0.3s ease; padding: 0 !important;">
        <img class="fv-hl-img" src="${h.image}" alt="${h.title}" loading="lazy" style="width: 100%; height: 160px; object-fit: cover; border-radius: 0 !important;">
        <div class="fv-hl-body" style="padding: 1.25rem 1rem !important; text-align: left; background: #FFF; display: flex; flex-direction: column; gap: 0.5rem;">
          <h4 class="fv-hl-title" style="font-family: var(--font-sans) !important; font-size: 1.05rem !important; font-weight: 800 !important; color: var(--text-dark) !important; margin: 0 !important; line-height: 1.35;">${h.title}</h4>
          <p class="fv-hl-desc" style="font-family: var(--font-sans) !important; font-size: 0.85rem !important; color: var(--text-muted) !important; line-height: 1.5 !important; margin: 0 !important;">${h.desc}</p>
        </div>
      </div>`).join('');

    const starsCount = (fest.popularity || '★★★★★').length;
    let starsHTML = '';
    for(let k=0; k<5; k++) {
      starsHTML += `<i data-lucide="star" style="width:11px;height:11px;fill:${k < starsCount ? '#A97C37' : 'none'};color:#A97C37;margin-right:2px;"></i>`;
    }

    return `
      <div class="fv-header-wrapper" style="position: absolute; top: 1.2rem; left: 50%; transform: translateX(-50%); width: 70%; max-width: 950px; z-index: 100; box-sizing: border-box;">
        <header class="fv-header glass-panel" style="display: flex; justify-content: space-between; align-items: center; padding: 0.35rem 1.25rem; border-radius: 99px; border: 1px solid rgba(255, 255, 255, 0.4); background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(30, 26, 21, 0.05);">
          <!-- Left Back Button -->
          <button class="fv-back-btn" id="fv-back-btn" style="border: none; background: rgba(255,255,255,0.85); width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-dark); box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s ease; padding: 0;">
            <i data-lucide="arrow-left" style="width: 15px; height: 15px;"></i>
          </button>
          
          <!-- Center Logo & Brand -->
          <div class="fv-brand-group" style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer; margin: 0 auto; transform: translateX(18px);">
            <img src="/images/logo.png" alt="Golden Sparrow Logo" width="24" height="24" style="object-fit: contain;">
            <span class="fv-brand-name" style="font-family: var(--font-sans); font-size: 0.76rem; font-weight: 800; letter-spacing: 0.15em; color: var(--accent-gold); text-transform: uppercase;">${fest.festivalName.toUpperCase()} UNIVERSE</span>
          </div>
          
          <!-- Right Wallet Pill -->
          <div class="fv-wallet-pill" style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.85); border: 1px solid rgba(169, 124, 55, 0.15); box-shadow: 0 4px 12px rgba(169,124,55,0.05); cursor: pointer; transition: all 0.3s ease;">
            <i data-lucide="wallet" style="width: 14px; height: 14px; color: var(--accent-gold);"></i>
          </div>
        </header>
      </div>


      <!-- HERO -->
      <section class="fv-hero-wrapper" style="background-image: url('${fest.heroImage}');">
        <div class="fv-hero-left" style="display: flex; flex-direction: column; justify-content: center; padding: 10.5rem 8% 2.5rem 8% !important; background: transparent; z-index: 2; align-items: flex-start; text-align: left; max-width: 550px; box-sizing: border-box;">
          <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 800; letter-spacing: 0.12em; color: var(--accent-gold); text-transform: uppercase;">${fest.tag}</span>
          <h1 class="fv-hero-main-title" style="font-family: 'Cormorant Garamond', serif; font-size: clamp(3.2rem, 5.5vw, 4.8rem); font-weight: 400; color: #1E2C22; margin: 0.4rem 0 0.15rem 0; line-height: 1.1;">${fest.festivalName}</h1>
          <div style="width: 70px; height: 2px; background: var(--accent-gold); margin: 0.8rem 0 1.2rem 0; opacity: 0.8;"></div>
          
          <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; font-weight: 600; color: #888; margin-bottom: 1.2rem;">
            <i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--accent-gold);"></i><strong style="color:#444">${name}</strong>
            <span style="width: 1px; height: 12px; background: rgba(0,0,0,0.2); display: inline-block; margin: 0 0.25rem;"></span>
            <i data-lucide="calendar" style="width: 14px; height: 14px; color: var(--accent-gold);"></i><span>${fest.bestTime}</span>
          </div>
          
          <p class="fv-hero-desc" style="max-width: 500px; font-size: 1.05rem; line-height: 1.85; color: #555; margin-bottom: 1.5rem;">${fest.description}</p>
          <div class="fv-hero-meta-row" style="margin-bottom: 1.8rem; gap: 2.2rem;">
            <div class="fv-hero-meta-item">
              <span class="fv-meta-label">Best Time</span>
              <span class="fv-meta-value" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;font-weight:800;color:var(--text-dark);">${fest.bestTime}</span>
            </div>
            <div class="fv-hero-meta-item">
              <span class="fv-meta-label">Popularity</span>
              <span class="fv-meta-stars" style="display:flex;align-items:center;margin-top:2px;">${starsHTML}</span>
            </div>
            <div class="fv-hero-meta-item">
              <span class="fv-meta-label">Experience</span>
              <span class="fv-meta-value" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.8rem;font-weight:800;color:var(--text-dark);">${fest.experience}</span>
            </div>
          </div>
          <div class="fv-hero-actions">
            <button class="fv-explore-btn" style="background:${ac};padding:0.75rem 2rem;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:0.85rem;border-radius:99px;box-shadow:0 6px 20px ${ac}30;">
              <span>Explore Festival</span>
              <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
            </button>
            <button class="fv-heart-btn" style="width:44px;height:44px;border:1px solid rgba(0,0,0,0.08);background:#FFF;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-muted);"><i data-lucide="heart" style="width:16px;height:16px;"></i></button>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section class="fv-about-section" style="padding: 5rem 0 4rem 0;">
        <div class="fv-about-grid">
          <div>
            <div class="fv-section-sup">About the Festival</div>
            <p class="fv-about-body" style="text-align: left; margin-bottom: 2.5rem; font-size: 1.05rem; line-height: 1.85;">${fest.about}</p>
            
            <div class="fv-stats-row" style="grid-template-columns: repeat(2, 1fr); gap: 1.5rem 1rem;">
              <div class="fv-stat-item" style="flex-direction: row; align-items: center; gap: 0.6rem; text-align: left;">
                <div class="fv-stat-icon" style="margin-bottom:0; background: ${ac}12; color: ${ac}; flex-shrink: 0;"><i data-lucide="award"></i></div>
                <div>
                  <div class="fv-stat-label">Tradition</div>
                  <div class="fv-stat-val">${fest.tradition}</div>
                </div>
              </div>
              <div class="fv-stat-item" style="flex-direction: row; align-items: center; gap: 0.6rem; text-align: left;">
                <div class="fv-stat-icon" style="margin-bottom:0; background: ${ac}12; color: ${ac}; flex-shrink: 0;"><i data-lucide="camera"></i></div>
                <div>
                  <div class="fv-stat-label">Best For</div>
                  <div class="fv-stat-val">${fest.bestFor}</div>
                </div>
              </div>
              <div class="fv-stat-item" style="flex-direction: row; align-items: center; gap: 0.6rem; text-align: left;">
                <div class="fv-stat-icon" style="margin-bottom:0; background: ${ac}12; color: ${ac}; flex-shrink: 0;"><i data-lucide="leaf"></i></div>
                <div>
                  <div class="fv-stat-label">Vibes</div>
                  <div class="fv-stat-val">${fest.vibes}</div>
                </div>
              </div>
              <div class="fv-stat-item" style="flex-direction: row; align-items: center; gap: 0.6rem; text-align: left;">
                <div class="fv-stat-icon" style="margin-bottom:0; background: ${ac}12; color: ${ac}; flex-shrink: 0;"><i data-lucide="users"></i></div>
                <div>
                  <div class="fv-stat-label">Crowd</div>
                  <div class="fv-stat-val">${fest.crowd}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="fv-highlights-label" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#A97C37;margin-bottom:1.5rem;text-align:left;">Festival Highlights</div>
            <div class="fv-highlights-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
              ${hlHTML}
            </div>
          </div>
        </div>
      </section>

      <!-- PLACES + EXPERIENCES -->
      <section class="fv-places-section" style="padding: 4rem 0;">
        <div class="fv-places-container">
          <div>
            <div class="fv-places-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
              <div class="fv-section-sup" style="margin-bottom:0">Top Places to Experience</div>
              <span class="fv-view-all" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.7rem;font-weight:700;color:var(--accent-gold);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;">View all <i data-lucide="chevron-right" style="width:12px;height:12px;vertical-align:middle;"></i></span>
            </div>
            <div class="fv-places-grid" style="display: grid; grid-template-columns: repeat(2,1fr); gap: 1.2rem;">
              ${placesHTML || '<p style="color:#aaa;font-size:.85rem;padding:1rem 0">Exploring top places…</p>'}
            </div>
            <div class="fv-carousel-dots" style="display:flex;justify-content:center;gap:6px;margin-top:1.5rem;">
              <div class="fv-dot active" style="width:6px;height:6px;border-radius:50%;background:var(--accent-gold);"></div>
              <div class="fv-dot" style="width:6px;height:6px;border-radius:50%;background:#ddd;"></div>
              <div class="fv-dot" style="width:6px;height:6px;border-radius:50%;background:#ddd;"></div>
              <div class="fv-dot" style="width:6px;height:6px;border-radius:50%;background:#ddd;"></div>
            </div>
          </div>
          <div>
            <h3 class="fv-exp-section-title" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.68rem;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#A97C37;margin:0 0 1.5rem 0;text-align:left;">Experiences You'll Love</h3>
            <div class="fv-exp-list" style="display: flex; flex-direction: column;">
              ${expsHTML || '<p style="color:#aaa;font-size:.85rem">Discovering experiences…</p>'}
            </div>
          </div>
        </div>
      </section>

      <!-- PACKAGES -->
      <section class="fv-packages-section" style="padding: 4rem 0 7rem 0;">
        <div class="fv-packages-container">
          <div class="fv-packages-header" style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
            <div>
              <div class="fv-section-sup">Curated Festival Packages</div>
              <h2 class="fv-section-h2" style="margin: 0.2rem 0 0 0; font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:400;color:var(--text-dark);">Perfectly Designed Journeys</h2>
            </div>
            <span class="fv-view-all" style="font-family:'Plus Jakarta Sans',sans-serif;font-size:0.7rem;font-weight:700;color:var(--accent-gold);text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;">View all packages <i data-lucide="chevron-right" style="width:12px;height:12px;vertical-align:middle;"></i></span>
          </div>
          <div class="fv-packages-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem;">
            ${pkgsHTML || '<p style="color:#aaa">No packages found.</p>'}
          </div>
        </div>
      </section>`;
  }

  /* =========================================================
     SHOW
     show(slug, type, index)
       type  = 'place' | 'experience'
       index = 0-3
     ========================================================= */
  function show(slug, type, index) {
    injectCSS();

    const aliasMap = { 
      bali: 'indonesia', 
      zermatt: 'switzerland', 
      istanbul: 'turkey', 
      vaadhoo: 'maldives', 
      oia: 'santorini', 
      greece: 'santorini', 
      amalfi: 'italy',
      'amalfi coast': 'italy' 
    };
    const resolvedSlug = aliasMap[slug] || slug;

    const dest = (typeof destinations !== 'undefined') ? (destinations[resolvedSlug] || destinations[slug]) : null;
    let destFestData = null;
    const destFestivalDataGlobal = window.destinationFestivalData || (typeof destinationFestivalData !== 'undefined' ? destinationFestivalData : null);
    if (destFestivalDataGlobal) {
      destFestData = destFestivalDataGlobal[resolvedSlug] || destFestivalDataGlobal[slug];
    }

    let fest;
    if (type === 'cherry-blossom') {
      fest = cherryBlossomFestival;
    } else if (type === 'experience') {
      const expList = (experienceFestivals[resolvedSlug] || []);
      if (expList[index]) {
        fest = expList[index];
      } else {
        // Build a festival from the experience data in destFestData
        const expItem = destFestData && destFestData.experiences ? destFestData.experiences[index] : null;
        fest = expItem ? getExperienceFestival(resolvedSlug, index, expItem, dest)
                       : (defaultFestivals[0]);
      }
    } else {
      // place
      let placeList = placeFestivals[resolvedSlug];
      if (!placeList) {
        if (destFestData && destFestData.places) {
          placeList = destFestData.places.map((p, i) => getPlaceFestival(resolvedSlug, i, p, dest));
        } else {
          placeList = defaultFestivals;
        }
      }
      fest = placeList[index] || placeList[0];
    }

    let overlay = document.getElementById('festival-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'festival-overlay';
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = buildPage(fest, resolvedSlug, destFestData, dest);
    overlay.classList.add('fv-active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();

    // ── Remove any previous overlay-level click handler to prevent stacking ──
    if (overlay._fvClickHandler) {
      overlay.removeEventListener('click', overlay._fvClickHandler);
    }

    // ── Master overlay click handler (delegation for ALL interactive elements) ──
    overlay._fvClickHandler = function(ev) {

      // 1. EXPERIENCE ACCORDION TOGGLE — arrow or anywhere in the header row
      const expRow = ev.target.closest('.fv-exp-row');
      if (expRow) {
        const card = expRow.closest('.fv-loved-exp-item');
        const dropdown = card.querySelector('.fv-exp-dropdown');
        const arrowIcon = card.querySelector('.fv-exp-arrow i');
        const isOpen = card.classList.contains('fv-exp-open');

        // Close all other open accordions
        overlay.querySelectorAll('.fv-loved-exp-item.fv-exp-open').forEach(openCard => {
          if (openCard !== card) {
            openCard.classList.remove('fv-exp-open');
            const dd = openCard.querySelector('.fv-exp-dropdown');
            const ar = openCard.querySelector('.fv-exp-arrow i');
            if (dd) dd.style.maxHeight = '0';
            if (ar) { ar.style.transform = 'rotate(0deg)'; ar.style.color = '#888'; }
            openCard.style.borderColor = 'rgba(0,0,0,0.05)';
            openCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
          }
        });

        if (isOpen) {
          card.classList.remove('fv-exp-open');
          dropdown.style.maxHeight = '0';
          if (arrowIcon) { arrowIcon.style.transform = 'rotate(0deg)'; arrowIcon.style.color = '#888'; }
          card.style.borderColor = 'rgba(0,0,0,0.05)';
          card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
        } else {
          card.classList.add('fv-exp-open');
          // Force browser to recalculate, then set exact content height
          dropdown.style.maxHeight = 'none';
          const fullH = dropdown.scrollHeight;
          dropdown.style.maxHeight = '0';
          // Trigger reflow so the transition fires
          void dropdown.offsetHeight;
          dropdown.style.maxHeight = fullH + 'px';
          if (arrowIcon) { arrowIcon.style.transform = 'rotate(180deg)'; arrowIcon.style.color = '#A97C37'; }
          card.style.borderColor = 'rgba(169,124,55,0.2)';
          card.style.boxShadow = '0 4px 18px rgba(0,0,0,0.06)';
        }
        return;
      }

      // 2. EXPLORE FESTIVAL BUTTON
      if (ev.target.closest('.fv-explore-btn')) {
        if (window.showToast) window.showToast(`Welcome to the magical world of ${fest.festivalName}!`, 'success');
        if (window.triggerConfetti) window.triggerConfetti();
        return;
      }

      // 3. HEART / FAVOURITE BUTTON
      const heartBtn = ev.target.closest('.fv-heart-btn');
      if (heartBtn) {
        const icon = heartBtn.querySelector('i, svg');
        const isFaved = heartBtn.classList.toggle('fv-heart-active');
        heartBtn.style.background = isFaved ? '#FFF0F3' : '#FFF';
        heartBtn.style.borderColor = isFaved ? '#FF6B81' : 'rgba(0,0,0,0.08)';
        heartBtn.style.color = isFaved ? '#FF6B81' : '';
        if (icon) { icon.style.fill = isFaved ? '#FF6B81' : 'none'; icon.style.color = isFaved ? '#FF6B81' : 'var(--text-muted)'; }
        if (window.showToast) window.showToast(isFaved ? `${fest.festivalName} saved to your wishlist!` : 'Removed from wishlist', isFaved ? 'success' : 'info');
        return;
      }

      // 4. BOOK THIS EXPERIENCE BUTTON — close popup then scroll to packages on main page
      if (ev.target.closest('.fv-book-exp-btn') || (ev.target.tagName === 'BUTTON' && ev.target.textContent.trim() === 'Book This Experience')) {
        const expCard = ev.target.closest('.fv-loved-exp-item');
        const expName = expCard ? expCard.querySelector('h4')?.textContent : fest.festivalName;
        hide();
        setTimeout(() => {
          const pkgSection = document.getElementById('detail-packages') || document.querySelector('.curated-packages-section');
          if (pkgSection) {
            pkgSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            pkgSection.style.transition = 'box-shadow 0.4s ease';
            pkgSection.style.boxShadow = '0 0 0 3px rgba(169,124,55,0.35)';
            setTimeout(() => { pkgSection.style.boxShadow = ''; }, 1400);
          }
          if (window.showToast) window.showToast(`Choose a package for ${expName}!`, 'info');
        }, 320);
        return;
      }

      // 5. PACKAGE BOOK / ARROW BUTTON
      const pkgBtn = ev.target.closest('.fv-pkg-btn');
      if (pkgBtn) {
        const pkgCard = pkgBtn.closest('.fv-pkg-card');
        const pkgName = pkgCard ? pkgCard.querySelector('.fv-pkg-name')?.textContent : 'this package';
        if (window.showToast) window.showToast(`Enquiry sent for "${pkgName}"!`, 'success');
        return;
      }

      // 6. VIEW ALL PLACES
      if (ev.target.closest('.fv-view-all') && ev.target.closest('.fv-places-header')) {
        if (window.showToast) window.showToast(`Showing all places in ${fest.festivalName}...`, 'info');
        return;
      }

      // 7. VIEW ALL PACKAGES — close popup then scroll to packages on main page
      if (ev.target.closest('.fv-view-all') && ev.target.closest('.fv-packages-header')) {
        hide();
        setTimeout(() => {
          const pkgSection = document.getElementById('detail-packages') || document.querySelector('.curated-packages-section');
          if (pkgSection) {
            pkgSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            pkgSection.style.transition = 'box-shadow 0.4s ease';
            pkgSection.style.boxShadow = '0 0 0 3px rgba(169,124,55,0.35)';
            setTimeout(() => { pkgSection.style.boxShadow = ''; }, 1400);
          }
          if (window.showToast) window.showToast(`Explore all ${fest.festivalName} packages!`, 'info');
        }, 320);
        return;
      }

      // 8. PLACE CARD — clicking a place card
      const placeCard = ev.target.closest('.fv-place-card');
      if (placeCard) {
        const placeName = placeCard.querySelector('.fv-place-name')?.textContent;
        if (window.showToast) window.showToast(`Exploring ${placeName}...`, 'info');
        return;
      }

      // 9. WALLET PILL — currency / budget
      if (ev.target.closest('.fv-wallet-pill')) {
        if (window.showToast) window.showToast('Plan your budget with Golden Sparrow advisors!', 'info');
        return;
      }

      // 10. CAROUSEL DOTS — visual indicator only (no real paging needed)
      const dot = ev.target.closest('.fv-dot');
      if (dot) {
        overlay.querySelectorAll('.fv-dot').forEach(d => { d.style.background = '#ddd'; d.style.width = '6px'; });
        dot.style.background = 'var(--accent-gold, #A97C37)';
        dot.style.width = '18px';
        dot.style.borderRadius = '3px';
        return;
      }
    };

    overlay.addEventListener('click', overlay._fvClickHandler);

    // Back button (uses its own scoped handler)
    const backBtn = document.getElementById('fv-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', function h() {
        hide();
        backBtn.removeEventListener('click', h);
      });
    }

    overlay.scrollTop = 0;
  }

  function hide() {
    const overlay = document.getElementById('festival-overlay');
    if (overlay) overlay.classList.remove('fv-active');
    document.body.style.overflow = '';
  }

  /* =========================================================
     ATTACH CLICK HANDLERS — called after destination detail renders
     ========================================================= */
  function attachClickHandlers(slug) {
    // Place cards
    const placeCards = document.querySelectorAll('#detail-places .place-card');
    placeCards.forEach((card, index) => {
      if (!card._festClick) {
        card._festClick = true;
        card.style.cursor = 'pointer';
        card.title = 'View Festival Details';
        card.addEventListener('click', () => show(slug, 'place', index));
      }
    });

    // Experience items
    const expItems = document.querySelectorAll('#detail-signature-experiences .experience-item');
    expItems.forEach((item, index) => {
      if (!item._festClick) {
        item._festClick = true;
        item.addEventListener('click', () => show(slug, 'experience', index));
      }
    });

    const aliasMap = { bali: 'indonesia', zermatt: 'switzerland', istanbul: 'turkey', vaadhoo: 'maldives', oia: 'greece' };
    function showMajorFestival(s) {
      const resolvedSlug = aliasMap[s] || s;
      if (resolvedSlug === 'japan' || resolvedSlug === 'kyoto') {
        show('japan', 'cherry-blossom', 0);
      } else {
        show(s, 'place', 0);
      }
    }

    // Popular Season indicator card in Essential Indicators
    const statCards = document.querySelectorAll('.detail-stat-card');
    statCards.forEach(card => {
      const labelEl = card.querySelector('.detail-stat-lbl');
      if (labelEl && labelEl.textContent.trim() === 'Popular Season') {
        if (!card._festClick) {
          card._festClick = true;
          card.style.cursor = 'pointer';
          card.title = 'View Major Festival Details';
          card.addEventListener('click', () => showMajorFestival(slug));
        }
      }
    });

    // Festivals card in Discover Experiences grid
    const discCards = document.querySelectorAll('.new-disc-card');
    discCards.forEach(card => {
      const titleEl = card.querySelector('.new-disc-card-title');
      if (titleEl && titleEl.textContent.trim() === 'Festivals') {
        if (!card._festClick) {
          card._festClick = true;
          card.style.cursor = 'pointer';
          card.title = 'View Major Festival Details';
          card.addEventListener('click', () => showMajorFestival(slug));
        }
      }
    });
  }

  /* Public API */
  window.FestivalView = { show, hide, attachClickHandlers };

})();
