const dummyProducts = [
    {
        heading: "Quantum Sound Wireless Headphones",
        description:
            "Experience immersive audio with active noise-canceling technology and a 40-hour battery life.",
        price: 149.99,
        content:
            "These over-ear headphones deliver studio-quality sound with deep bass and crisp highs. Featuring plush memory foam earcups for extended comfort and seamless Bluetooth 5.2 connectivity.",
        url: "quantum-sound-wireless-headphones",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/26/600/400",
                alt: "Front view of Quantum Sound Headphones in matte black",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/26/600/401",
                alt: "Close-up of the plush memory foam earcup and controls",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/26/600/402",
                alt: "Headphones folded inside their premium travel case",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Minimalist Leather Wallet",
        description:
            "Sleek RFID-blocking cardholder crafted from premium full-grain leather.",
        price: 45.0,
        content:
            "Designed for the modern minimalist, this wallet holds up to 8 cards and includes a secure magnetic cash clip without adding bulk to your pocket.",
        url: "minimalist-leather-wallet",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/51/600/400",
                alt: "Tan leather wallet showing card slots",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/51/600/401",
                alt: "Slim profile view comparing wallet thickness to a smartphone",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/51/600/402",
                alt: "Wallet packaged in a luxury gift box",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Apex Ergonomic Office Chair",
        description:
            "High-back mesh chair designed for ultimate lumbar support and daily comfort.",
        price: 289.0,
        content:
            "Features 3D adjustable armrests, a dynamic reclining mechanism, and breathable mesh backing to keep you cool during long work sessions.",
        url: "apex-ergonomic-office-chair",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/60/600/400",
                alt: "Full view of the Apex Ergonomic Chair in charcoal grey",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/60/600/401",
                alt: "Detailed view of the adjustable lumbar support handle",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/60/600/402",
                alt: "Side profile showing the chair tilt angle options",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Titanium Smart Watch Series 5",
        description:
            "Advanced fitness tracker and smartwatch with an always-on AMOLED display.",
        price: 349.99,
        content:
            "Monitor your health with real-time heart rate tracking, blood oxygen levels, and advanced sleep insights. Water-resistant up to 50 meters with built-in GPS.",
        url: "titanium-smart-watch-series-5",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/119/600/400",
                alt: "Smartwatch main interface displaying fitness metrics",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/119/600/401",
                alt: "Close-up of the rugged titanium bezel and silicone strap",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/119/600/402",
                alt: "Watch sitting on its magnetic charging dock",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "HydroFlow Stainless Water Bottle",
        description:
            "Double-walled vacuum insulated bottle that keeps drinks cold for 24 hours.",
        price: 32.5,
        content:
            "Made from durable 18/8 kitchen-grade stainless steel. Leak-proof straw lid included. Fits standard cup holders perfectly.",
        url: "hydroflow-stainless-water-bottle",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/225/600/400",
                alt: "HydroFlow bottle standing in an outdoor setting",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/225/600/401",
                alt: "Exploded view of the leak-proof straw lid mechanism",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/225/600/402",
                alt: "Array of available vibrant color options side-by-side",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Nebula 4K Home Projector",
        description:
            "Ultra-bright smart projector with built-in streaming apps and cinematic sound.",
        price: 799.0,
        content:
            "Transform your living room into a theater. Projects up to a 150-inch crystal clear image with HDR10 support and autofocus calibration.",
        url: "nebula-4k-home-projector",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/250/600/400",
                alt: "Sleek modern design of the Nebula projector on a shelf",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/250/600/401",
                alt: "Rear input panel showing HDMI, USB, and audio ports",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/250/600/402",
                alt: "Demonstration of the projector display in a dark living room",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "AeroFoam Mechanical Keyboard",
        description:
            "Compact 75% layout keyboard with hot-swappable linear switches.",
        price: 125.0,
        content:
            "Features RGB backlighting, sound-dampening foam layers for satisfying acoustics, and dual-mode wireless connectivity via 2.4GHz or Bluetooth.",
        url: "aerofoam-mechanical-keyboard",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/364/600/400",
                alt: "Top-down view of the mechanical keyboard with custom keycaps",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/364/600/401",
                alt: "Angled shot demonstrating the RGB backlight illumination",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/364/600/402",
                alt: "Keycap pulling tool removing a mechanical switch",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Barista Pro Espresso Machine",
        description:
            "Semi-automatic espresso maker with integrated grinder and steam wand.",
        price: 649.99,
        content:
            "Go from beans to espresso in under a minute. Digital temperature control ensures precise water extraction for the perfect espresso shot every time.",
        url: "barista-pro-espresso-machine",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/425/600/400",
                alt: "Stainless steel Barista Pro machine brewing espresso",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/425/600/401",
                alt: "Frothing milk with the powerful integrated steam wand",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/425/600/402",
                alt: "Built-in conical burr grinder showing grind size adjustment",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Nomad Canvas Backpack",
        description:
            "Weather-resistant travel rucksack with dedicated 16-inch laptop compartment.",
        price: 95.0,
        content:
            "Handcrafted from waxed canvas and genuine leather accents. Heavy-duty straps and multiple hidden pockets make it ideal for commuting or weekend trips.",
        url: "nomad-canvas-backpack",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/435/600/400",
                alt: "Nomad backpack standing upright on a rustic table",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/435/600/401",
                alt: "Opened main compartment showing organized packing spaces",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/435/600/402",
                alt: "Model wearing the backpack while hiking a scenic trail",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Lumina Smart Desk Lamp",
        description:
            "Eye-caring LED desk lamp with wireless charging base and touch controls.",
        price: 54.99,
        content:
            "Adjust between 5 color modes and 6 brightness levels. The flexible arm pivots effortlessly to cast optimal light right where you need it.",
        url: "lumina-smart-desk-lamp",
        featured_product: false,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/445/600/400",
                alt: "Lumina lamp illuminating a modern workstation",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/445/600/401",
                alt: "A smartphone charging wirelessly on the lamp base",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/445/600/402",
                alt: "Close-up of the glass touch-control panel",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Siren Chef Knife 8-Inch",
        description:
            "Forged high-carbon German steel chef knife with an ergonomic G10 handle.",
        price: 79.0,
        content:
            "Razor-sharp, hand-polished edge at 15 degrees per side. Perfectly balanced weight ratio guarantees effortless chopping, dicing, and slicing.",
        url: "siren-chef-knife-8-inch",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/460/600/400",
                alt: "Siren chef knife laying flat on a dark wooden cutting board",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/460/600/401",
                alt: "Macro view of the precision edge slicing a ripe tomato",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/460/600/402",
                alt: "Close-up of the handle detailing triple rivets and bolster",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Terra Cotta Pour-Over Set",
        description:
            "Ceramic coffee dripper and matching glass server for artisanal brewing.",
        price: 38.0,
        content:
            "The ceramic cone retains heat exceptionally well for stable extraction temperature. Server holds up to 600ml of freshly brewed coffee.",
        url: "terra-cotta-pour-over-set",
        featured_product: false,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/493/600/400",
                alt: "Ceramic dripper resting on the glass carafe",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/493/600/401",
                alt: "Pouring hot water from a gooseneck kettle over coffee grounds",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/493/600/402",
                alt: "Complete set cleaned and displayed on a kitchen countertop",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Zenith Active Yoga Mat",
        description:
            "Eco-friendly natural rubber mat providing non-slip performance grip.",
        price: 68.0,
        content:
            "6mm thick high-density cushioning protects sensitive joints. Biodegradable, non-toxic materials with printed alignment guides for posture correction.",
        url: "zenith-active-yoga-mat",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/504/600/400",
                alt: "Zenith yoga mat unrolled in a sunlit home studio",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/504/600/401",
                alt: "Texture detail highlighting the non-slip rubber surface",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/504/600/402",
                alt: "Mat rolled up snugly with its convenient carrying strap",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "HyperSonic Soundbar X1",
        description:
            "3.1 channel theater soundbar system with a wireless active subwoofer.",
        price: 229.99,
        content:
            "Immerse yourself with Dolby Atmos simulation. Simple eARC HDMI hookup turns your TV setup into a cinematic powerhouse instantly.",
        url: "hypersonic-soundbar-x1",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/521/600/400",
                alt: "Soundbar positioned cleanly beneath a wall-mounted TV",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/521/600/401",
                alt: "Side view of the powerful wireless bass subwoofer",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/521/600/402",
                alt: "Remote control and included mounting bracket kit components",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Voyager Vintage Leather Duffel",
        description:
            "Rugged, spacious overnight weekend travel bag made of crazy horse leather.",
        price: 185.0,
        content:
            "Features a heavy-duty brass zipper closure, separate breathable shoe compartment, and adjustable shoulder strap padding for heavy hauls.",
        url: "voyager-vintage-leather-duffel",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/532/600/400",
                alt: "Voyager duffel bag packing clothes for a weekend getaway",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/532/600/401",
                alt: "Side angle displaying the separate integrated shoe compartment",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/532/600/402",
                alt: "Close-up of the vintage brass buckles and custom stitching",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Veloce Carbon Bike Helmet",
        description:
            "Aerodynamic cycling helmet with MIPS rotational impact protection system.",
        price: 110.0,
        content:
            "Equipped with 18 strategically placed wind tunnel vents for maximum cooling. Dial-fit system offers micrometric sizing adjustments on the go.",
        url: "veloce-carbon-bike-helmet",
        featured_product: false,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/550/600/400",
                alt: "Side profile of Veloce helmet in high-visibility yellow",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/550/600/401",
                alt: "Interior view showing the integrated yellow MIPS safety layer",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/550/600/402",
                alt: "Adjustable chin strap buckle and rear adjustment dial",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Polaris 10x42 Binoculars",
        description:
            "Waterproof HD binoculars featuring multi-coated lenses for bird watching.",
        price: 135.5,
        content:
            "Bright, crystal clear image generation via BAK-4 roof prisms. Rugged rubber armor exterior provides a secure, non-slip grip in wet conditions.",
        url: "polaris-10x42-binoculars",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/572/600/400",
                alt: "Polaris binoculars sitting upright on a boulder outside",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/572/600/401",
                alt: "View looking into the large multi-coated objective lenses",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/572/600/402",
                alt: "Binoculars stored safely inside their rugged nylon carrying case",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "GlowCast RGB LED Strip Lights",
        description:
            "Smart app-controlled strip lighting kit for behind-the-scenes ambiance.",
        price: 28.99,
        content:
            "Includes 32.8 feet of flexible strip lights. Syncs effortlessly to the beat of music or can be configured via voice assistants.",
        url: "glowcast-rgb-led-strip-lights",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/610/600/400",
                alt: "Vibrant neon purple illumination around a gaming setup desk",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/610/600/401",
                alt: "Adhesive backing rolling onto a wall surface easily",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/610/600/402",
                alt: "The smartphone app interface managing custom color themes",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Orion Mechanical Gaming Mouse",
        description:
            "Ultralight 58g mouse featuring a flawless 26K DPI optical gaming sensor.",
        price: 69.99,
        content:
            "Equipped with zero-latency 2.4GHz wireless tech and long-lasting optical microswitches rated for over 90 million clicks.",
        url: "orion-mechanical-gaming-mouse",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/646/600/400",
                alt: "Top angle of the white Orion gaming mouse showing scroll wheel",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/646/600/401",
                alt: "Underneath view highlighting pure PTFE mouse skates",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/646/600/402",
                alt: "Mouse charging alongside its small wireless USB receiver Dongle",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Alba Ceramic Essential Oil Diffuser",
        description:
            "Ultrasonic cool mist humidifier featuring a beautiful matte white ceramic cover.",
        price: 42.0,
        content:
            "Quiet operation with two misting modes and optional warm ambient nightlight. Automatically shuts off when water levels run empty.",
        url: "alba-ceramic-essential-oil-diffuser",
        featured_product: false,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/652/600/400",
                alt: "Alba ceramic diffuser operating on a bedside table nightstand",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/652/600/401",
                alt: "Removing the top ceramic cover to pour clean water inside",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/652/600/402",
                alt: "Close-up highlighting the soothing ambient glow option",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "EverGreen Cast Iron Skillet",
        description:
            "Pre-seasoned 12-inch heavy-duty cast iron pan with a helper handle.",
        price: 39.99,
        content:
            "Provides unparalleled, even heat retention for searing, baking, broiling, or frying. Usable across all cooking surfaces including open campfires.",
        url: "evergreen-cast-iron-skillet",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/674/600/400",
                alt: "Searing a thick steak to perfection inside the skillet",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/674/600/401",
                alt: "Top view of the empty black cast iron skillet showing finish",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/674/600/402",
                alt: "Skillet hanging from a rustic wall pot rack grid",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Nova Flare USB Microphone",
        description:
            "Studio condenser microphone built for podcasting, streaming, and gaming.",
        price: 89.0,
        content:
            "Plug-and-play USB connection paired with a high-res 24-bit audio capture profile. Features integrated quick tap-to-mute functionality.",
        url: "nova-flare-usb-microphone",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/703/600/400",
                alt: "Nova Flare mic mounted safely on a custom desktop stand",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/703/600/401",
                alt: "Detail view of the tap-to-mute button glowing red",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/703/600/402",
                alt: "Microphone fixed to a scissor boom arm setup inside a studio",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "ThermaGrip Electric Kettle",
        description:
            "Variable temperature control gooseneck kettle for precision brewing.",
        price: 115.0,
        content:
            "Set the exact temperature desired. Features a 1200W rapid boil element and a 60-minute warm hold setting cycle.",
        url: "thermagrip-electric-kettle",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/757/600/400",
                alt: "Matte black gooseneck kettle sitting on its heating base",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/757/600/401",
                alt: "Digital LCD display screen showing real-time heating degree values",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/757/600/402",
                alt: "Pouring hot water steadily into a ceramic pour-over cone",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Solitude Noise Isolation Earbuds",
        description:
            "True wireless earbuds packed with hybrid active noise cancelation.",
        price: 99.99,
        content:
            "Enjoy premium tuned acoustics with up to 7 hours of direct playback time. Ergonomic fit nodes keep them securely anchored during heavy exercise.",
        url: "solitude-noise-isolation-earbuds",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/785/600/400",
                alt: "Earbuds resting inside their opened pocket-sized charging case",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/785/600/401",
                alt: "Model wearing Solitude earbud while jogging outside",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/785/600/402",
                alt: "Exploded array showcasing three soft silicone ear-tip sizes",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Summit Trail Hiking Boots",
        description:
            "Waterproof leather hiking boots with deep-lug rubber outsoles.",
        price: 145.0,
        content:
            "Engineered with a breathable waterproof lining membrane and lightweight cushion midsoles to provide lasting comfort over miles of unpredictable trails.",
        url: "summit-trail-hiking-boots",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/815/600/400",
                alt: "Pair of rugged Summit boots covered lightly in trail dust",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/815/600/401",
                alt: "Close-up view highlighting the heavy durable grip rubber lugs",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/815/600/402",
                alt: "Fast-lace steel hooks detailing the ankle security setup",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Chronos Minimalist Wall Clock",
        description:
            "Modern 12-inch silent sweeping wall clock using genuine walnut wood.",
        price: 58.0,
        content:
            "No ticking sounds. Premium quartz movement mechanisms ensure exact timing precision alongside architectural aesthetic refinement.",
        url: "chronos-minimalist-wall-clock",
        featured_product: false,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/819/600/400",
                alt: "Chronos wood clock hanging beautifully in a white minimalist living room",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/819/600/401",
                alt: "Macro detail shot showing the rich natural wood grain ring",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/819/600/402",
                alt: "Rear structural assembly compartment for battery placement",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Stratus Memory Foam Pillow",
        description:
            "Ergonomic cooling gel memory foam pillow for neck pain relief.",
        price: 49.5,
        content:
            "Contoured layout shape perfectly supports correct spinal alignment. Breathable hypoallergenic bamboo cover is fully removable and machine washable.",
        url: "stratus-memory-foam-pillow",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/835/600/400",
                alt: "Stratus pillow sitting neatly arranged on a luxury bed setup",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/835/600/401",
                alt: "Demonstration of memory foam slow rebound compression tracking",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/835/600/402",
                alt: "Unzipping the outer protective textured bamboo weave cover",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "PulseFit Under-Desk Treadmill",
        description:
            "Compact walking pad treadmill for convenient under-desk remote office work.",
        price: 319.0,
        content:
            "Folds flat easily for storage out of sight. Features a quiet 2.25HP motor and integrated digital tracking display reporting speed, distance, and time.",
        url: "pulsefit-under-desk-treadmill",
        featured_product: true,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/866/600/400",
                alt: "PulseFit treadmill positioned flat underneath a standing desk station",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/866/600/401",
                alt: "Using the small wireless remote controller to adjust speed settings",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/866/600/402",
                alt: "Treadmill unit sliding effortlessly away underneath a living room couch",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "AeroSnaps Magnetic Cable Blocks",
        description:
            "Weighted premium silicone cable management organization anchors for desks.",
        price: 24.99,
        content:
            "Keep cords anchored and organized right where you left them. Magnetic split pieces clamp around any standard charging cables smoothly.",
        url: "aerosnaps-magnetic-cable-blocks",
        featured_product: false,
        best_seller: true,
        images: [
            {
                url: "https://picsum.photos/id/960/600/400",
                alt: "Three magnetic blocks alignment neatening wires on desk edge",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/960/600/401",
                alt: "Close-up showing the magnetic opening click action",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/960/600/402",
                alt: "Packaging bundle highlighting various distinct color configurations",
                isPrimary: false,
                position: 3,
            },
        ],
    },
    {
        heading: "Horizon Ultra Wide Action Cam",
        description:
            "4K/60fps rugged waterproof action camera with state-of-the-art stabilization.",
        price: 199.0,
        content:
            "Capture ultra-smooth footage across uneven paths. Includes dual touchscreen displays and deep underwater housing safety ratings down to 100 feet.",
        url: "horizon-ultra-wide-action-cam",
        featured_product: true,
        best_seller: false,
        images: [
            {
                url: "https://picsum.photos/id/1050/600/400",
                alt: "Horizon action camera mounted securely to a bicycle handlebar setup",
                isPrimary: true,
                position: 1,
            },
            {
                url: "https://picsum.photos/id/1050/600/401",
                alt: "Rear touchscreen interface showing active live scenery view matrix",
                isPrimary: false,
                position: 2,
            },
            {
                url: "https://picsum.photos/id/1050/600/402",
                alt: "Array layout displaying bundled mounting accessory arms and clips",
                isPrimary: false,
                position: 3,
            },
        ],
    },
];

console.log(JSON.stringify(dummyProducts, null, 2));
