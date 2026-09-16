import json
import os

menu_data = [
    {
        "id": "brew",
        "slug": "brew",
        "name": "Brew",
        "shortName": "Brew",
        "subtitle": "Freshly brewed cafe classics and chilled coffee specialities",
        "accentColor": "brew-blue",
        "accentHex": "#AEDCEF",
        "subSections": [
            {
                "id": "hot-coffee",
                "title": "Freshly Brewed Hot Coffee",
                "description": "Classic cafe preparations brewed fresh to order.",
                "items": [
                    {"id": "espresso", "name": "Espresso", "description": "Fresh shot of espresso with golden crema", "price": "80/-", "priceNum": 80, "veg": True},
                    {"id": "americano", "name": "Americano", "description": "A classic espresso-based coffee drink", "price": "90/-", "priceNum": 90, "veg": True},
                    {"id": "cappuccino", "name": "Cappuccino", "description": "Classic cappuccino with silky micro foam", "price": "120/-", "priceNum": 120, "veg": True, "popular": True},
                    {"id": "cafe-mocha", "name": "Cafe Mocha", "description": "Hot cafe mocha infused with rich chocolate syrup", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "french-hot-chocolate", "name": "Special French Hot Chocolate", "description": "Chocolate drink made with smooth cocoa, warm milk and a touch of sweetness", "price": "180/-", "priceNum": 180, "veg": True, "popular": True}
                ]
            },
            {
                "id": "cold-coffee",
                "title": "Chilled & Iced Coffee Classics",
                "description": "Prepared chilled from our signature recipe notes.",
                "items": [
                    {"id": "ice-coffee", "name": "Ice Coffee", "description": "Chilled bold black coffee over ice", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "ice-latte", "name": "Ice Latte", "description": "Chilled milk, espresso & sugar syrup", "price": "150/-", "priceNum": 150, "veg": True},
                    {"id": "cold-coffee", "name": "Classic Cold Coffee", "description": "Frozen milk, bold espresso & sugar blended smooth", "price": "160/-", "priceNum": 160, "veg": True, "popular": True},
                    {"id": "caramel-latte", "name": "Caramel Latte", "description": "Frozen milk, sugar & golden caramel syrup", "price": "160/-", "priceNum": 160, "veg": True},
                    {"id": "oreo-coffee", "name": "Oreo Coffee", "description": "Coffee, crushed Oreo biscuits & frozen milk", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "chocolate-coffee", "name": "Chocolate Coffee", "description": "Rich coffee, chocolate syrup & frozen milk", "price": "180/-", "priceNum": 180, "veg": True}
                ]
            }
        ]
    },
    {
        "id": "shakes-smoothies",
        "slug": "shakes-smoothies",
        "name": "Shakes & Smoothies",
        "shortName": "Shakes",
        "subtitle": "Thick shakes, wholesome fruit smoothies and protein blends",
        "accentColor": "shake-teal",
        "accentHex": "#7FD8C8",
        "subSections": [
            {
                "id": "signature-shakes",
                "title": "Signature Shakes",
                "description": "Thick, indulgent and crafted for a sweet coastal escape.",
                "items": [
                    {"id": "vanilla-shake", "name": "Vanilla Shake", "description": "Frozen milk, sugar, vanilla ice cream & Madagascar vanilla essence", "price": "170/-", "priceNum": 170, "veg": True},
                    {"id": "oreo-shake", "name": "Oreo Shake", "description": "Frozen milk, sugar & crunchy Oreo cookies blended creamy", "price": "200/-", "priceNum": 200, "veg": True},
                    {"id": "butterscotch-shake", "name": "Butterscotch Shake", "description": "Frozen milk, butterscotch ice cream & rich caramel swirl", "price": "210/-", "priceNum": 210, "veg": True},
                    {"id": "biscoff-shake", "name": "Lotus Biscoff Shake", "description": "Frozen milk, Lotus Biscoff biscuits & spiced caramel Biscoff sauce", "price": "230/-", "priceNum": 230, "veg": True, "popular": True},
                    {"id": "nutella-shake", "name": "Nutella Shake", "description": "Frozen milk, sugar & decadent Nutella hazelnut spread", "price": "230/-", "priceNum": 230, "veg": True, "popular": True},
                    {"id": "pista-shake", "name": "Pistachio Shake", "description": "Frozen milk, sugar & aromatic pistachio sauce", "price": "240/-", "priceNum": 240, "veg": True}
                ]
            },
            {
                "id": "fruit-smoothies",
                "title": "Fruit Smoothies",
                "description": "Fresh fruit blends with a creamy cafe finish.",
                "items": [
                    {"id": "banana-smoothie", "name": "Banana Smoothie", "description": "Fresh ripe bananas blended with creamy curd and sugar", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "mango-smoothie", "name": "Mango Smoothie", "description": "Golden mango pulp, curd and a touch of sweetness", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "apple-smoothie", "name": "Apple Smoothie", "description": "Fresh apples, chilled milk, curd and sugar", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "blueberry-smoothie", "name": "Blueberry Smoothie", "description": "Blueberry syrup, frozen milk, sugar and wholesome curd", "price": "190/-", "priceNum": 190, "veg": True, "popular": True},
                    {"id": "peanut-butter-smoothie", "name": "Peanut Butter Banana Smoothie", "description": "Banana, frozen milk, creamy roasted peanut butter & curd", "price": "200/-", "priceNum": 200, "veg": True}
                ]
            },
            {
                "id": "protein-blends",
                "title": "Wholesome Protein Blends",
                "description": "Wholesome, filling and naturally satisfying post-workout blends.",
                "items": [
                    {"id": "natural-whey", "name": "Natural Whey Blend", "description": "Frozen milk, ripe banana, mixed dry fruits, sugar & whey protein", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "cashew-rich-protein", "name": "Cashew Rich Protein Shake", "description": "Frozen milk, premium dry fruits, banana, peanut butter & whey protein", "price": "200/-", "priceNum": 200, "veg": True, "popular": True}
                ]
            }
        ]
    },
    {
        "id": "mojitos-coolers",
        "slug": "mojitos-coolers",
        "name": "Mojitos & Coolers",
        "shortName": "Mojitos",
        "subtitle": "Refreshing non-alcoholic beach-style cafe coolers and sparkling sips",
        "accentColor": "mojito-coral",
        "accentHex": "#E4572E",
        "subSections": [
            {
                "id": "coolers-all",
                "title": "Coolers & Sparkling Mojitos",
                "description": "Icy, invigorating sips crafted with fresh mint, citrus and vibrant fruits.",
                "items": [
                    {"id": "cinderella", "name": "Cinderella Cooler", "description": "A bright, fruity and refreshing citrus-infused cafe cooler", "price": "100/-", "priceNum": 100, "veg": True},
                    {"id": "passion-fruit-cooler", "name": "Passion Fruit Refresher", "description": "Tangy, aromatic tropical passion fruit refreshment with sparkling fizz", "price": "120/-", "priceNum": 120, "veg": True},
                    {"id": "tropical-paradise-cooler", "name": "Tropical Paradise Cooler", "description": "Tropical fruit flavours in an invigorating sun-drenched blend", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "sex-on-the-beach-cooler", "name": "Sex On The Beach (Non-Alcoholic)", "description": "A sunny beach-style tropical cooler with peach and cranberry notes", "price": "140/-", "priceNum": 140, "veg": True, "popular": True},
                    {"id": "virgin-mojito", "name": "Virgin Mojito", "description": "Classic muddled mint leaves, lime wedges, simple syrup & sparkling soda", "price": "200/-", "priceNum": 200, "veg": True, "popular": True},
                    {"id": "blue-cooler", "name": "Blue Curacao Cooler", "description": "Cool, electric blue, citrusy and intensely refreshing", "price": "200/-", "priceNum": 200, "veg": True},
                    {"id": "watermelon-mojito", "name": "Watermelon Mojito", "description": "Fresh watermelon juice muddled with mint and citrus sparkle", "price": "230/-", "priceNum": 230, "veg": True},
                    {"id": "strawberry-mojito", "name": "Strawberry Mojito", "description": "Ripe strawberry crushed with mint leaves and zesty lime fizz", "price": "240/-", "priceNum": 240, "veg": True, "popular": True}
                ]
            }
        ]
    },
    {
        "id": "food",
        "slug": "food",
        "name": "Food & Cafe Bites",
        "shortName": "Cafe Food",
        "subtitle": "Bruschetta, cigar rolls, coastal seafood bites and loaded fries",
        "accentColor": "food-yellow",
        "accentHex": "#EFE0A0",
        "subSections": [
            {
                "id": "bruschetta",
                "title": "Bruschetta Bites",
                "description": "Crispy artisan toast, creamy toppings and irresistible cafe bites.",
                "items": [
                    {"id": "tomato-ocean-bites", "name": "Tomato Ocean Bites", "description": "Fresh diced tomatoes, fragrant basil & crisp garlic toast — vibrant & delicious", "price": "160/-", "priceNum": 160, "veg": True},
                    {"id": "palm-mushroom-bites", "name": "Palm Mushroom Bites", "description": "Earthy sauteed mushrooms on crispy toast — savoury & irresistibly satisfying", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "golden-coast-bites", "name": "Golden Coast Cheesy Bites", "description": "Crispy toast topped with molten cheese, Italian herbs and chilli flakes", "price": "180/-", "priceNum": 180, "veg": True},
                    {"id": "coco-coast-chicken-bites", "name": "Coco Coast Chicken Bites", "description": "A coastal spiced twist with tender juicy chicken on crispy toast", "price": "180/-", "priceNum": 180, "veg": False, "popular": True},
                    {"id": "goa-bay-cheesy-chicken", "name": "Goa Bay Cheesy Chicken Bites", "description": "Melted cheese blanketed over spiced flavorful chicken chunks", "price": "190/-", "priceNum": 190, "veg": False},
                    {"id": "calm-butter-garlic-chicken", "name": "Calm Butter Garlic Chicken Bites", "description": "Tender chicken in silky butter-garlic sauce — rich, creamy & comforting", "price": "190/-", "priceNum": 190, "veg": False, "popular": True}
                ]
            },
            {
                "id": "cigar-rolls",
                "title": "Cigar Rolls",
                "description": "A moment of peace, wrapped in crispy golden pastry.",
                "items": [
                    {"id": "golden-coast-rolls", "name": "Golden Coast Cheese Rolls", "description": "Golden, crispy rolls with a gooey cheesy molten centre & crunchy capsicum", "price": "180/-", "priceNum": 180, "veg": True, "popular": True},
                    {"id": "island-fire-roll", "name": "Island Fire Rolls", "description": "Golden crispy rolls packed with seasoned fillings and a fiery peri-peri kick", "price": "200/-", "priceNum": 200, "veg": True, "spicy": True}
                ]
            },
            {
                "id": "prawns-crab",
                "title": "Coastal Prawns & Crab",
                "description": "Cafe-style fresh seafood favourites tossed in bold seaside flavours.",
                "items": [
                    {"id": "crispy-fried-prawns", "name": "Crispy Fried Prawns", "description": "Golden, crunchy breaded prawns bursting with flavour in every bite", "price": "280/-", "priceNum": 280, "veg": False, "popular": True},
                    {"id": "butter-garlic-prawns", "name": "Butter Garlic Prawns", "description": "Rich, buttery and aromatic succulent prawns simmered in silky garlic butter", "price": "320/-", "priceNum": 320, "veg": False, "popular": True},
                    {"id": "crispy-fried-crab-lollipop", "name": "Crispy Fried Crab Lollipop", "description": "Crunchy, flavour-packed fried crab meat bites on bone", "price": "300/-", "priceNum": 300, "veg": False},
                    {"id": "honey-chilli-crab-lollipop", "name": "Honey Chilli Crab Lollipop", "description": "Sweet, spicy and sticky glaze with an irresistible glazed finish", "price": "350/-", "priceNum": 350, "veg": False, "popular": True}
                ]
            },
            {
                "id": "chicken-seafood-appetizers",
                "title": "Cafe Chicken Appetizers",
                "description": "Crisp and savoury bites prepared fresh.",
                "items": [
                    {"id": "marina-crispy-chicken", "name": "Marina Crispy Chicken", "description": "Golden, crunchy chicken fingers coated in a deliciously seasoned herb crust", "price": "260/-", "priceNum": 260, "veg": False, "popular": True}
                ]
            },
            {
                "id": "sea-sides",
                "title": "Sea Sides: Ocean Fries & Rings",
                "description": "Salty air, crispy fries and golden rings of pure joy.",
                "items": [
                    {"id": "sea-salt-fries", "name": "Sea Salt Fries", "description": "Golden, crispy potato fries seasoned simply with natural sea salt", "price": "150/-", "priceNum": 150, "veg": True},
                    {"id": "ocean-gold-fries", "name": "Ocean Gold Peri Peri Fries", "description": "Crisp fries with a spicy peri-peri dust twist — flavourful & addictive", "price": "170/-", "priceNum": 170, "veg": True, "spicy": True},
                    {"id": "veggies-loaded-fries", "name": "Veggies Loaded Fries", "description": "Crunchy fries loaded with colourful sauteed veggies & creamy house sauce", "price": "240/-", "priceNum": 240, "veg": True},
                    {"id": "chicken-breezy-fire-fries", "name": "Chicken Breezy Fire Fries", "description": "Fries smothered with cheesy goodness, spiced chicken bits and jalapenos", "price": "260/-", "priceNum": 260, "veg": False, "popular": True, "spicy": True},
                    {"id": "port-side-onion-rings", "name": "Port Side Onion Rings", "description": "Golden, crispy batter-fried onion rings — crunchy, savoury & irresistible", "price": "160/-", "priceNum": 160, "veg": True},
                    {"id": "harbour-heat-rings", "name": "Harbour Heat Onion Rings", "description": "Crunchy golden onion rings tossed in bold spicy peri-peri seasoning", "price": "180/-", "priceNum": 180, "veg": True, "spicy": True}
                ]
            }
        ]
    },
    {
        "id": "royal-delight",
        "slug": "royal-delight",
        "name": "Royal Delight",
        "shortName": "Royal Delight",
        "subtitle": "Kolhapur royal recipes, authentic tandoor, rich curries, biryanis and breads",
        "accentColor": "gold",
        "accentHex": "#B98B3E",
        "subSections": [
            {
                "id": "soups",
                "title": "Soups",
                "description": "Hearty, comforting broths simmered with rich aromatics.",
                "items": [
                    {"id": "cream-of-veg-soup", "name": "Cream of Veg Soup", "description": "Velvety smooth vegetable soup seasoned with mild spices", "price": "169/-", "priceNum": 169, "veg": True},
                    {"id": "lemon-coriander-soup", "name": "Lemon Coriander Soup", "description": "Tangy, fresh coriander broth infused with citrus zest", "price": "179/-", "priceNum": 179, "veg": True},
                    {"id": "cream-of-tomato-soup", "name": "Cream of Tomato Soup", "description": "Rich ripe tomato soup served with golden butter croutons", "price": "179/-", "priceNum": 179, "veg": True},
                    {"id": "burn-garlic-soup", "name": "Burn Garlic Soup", "description": "Aromatic vegetable soup infused with smoky roasted garlic", "price": "189/-", "priceNum": 189, "veg": True},
                    {"id": "veg-manchow-soup", "name": "Veg Manchow Soup", "description": "Spicy Indo-Chinese vegetable soup served with crispy noodles", "price": "189/-", "priceNum": 189, "veg": True, "spicy": True},
                    {"id": "cream-of-mushroom-soup", "name": "Cream of Mushroom Soup", "description": "Earthy button mushrooms blended in a velvety creamy broth", "price": "189/-", "priceNum": 189, "veg": True},
                    {"id": "8-tizer-soup", "name": "8 Tizer Soup", "description": "Chef special spiced vegetable soup with rich Indo-Chinese flavours", "price": "209/-", "priceNum": 209, "veg": True, "popular": True},
                    {"id": "american-chowder-soup", "name": "American Chowder Soup", "description": "Rich and creamy thick corn and vegetable chowder", "price": "219/-", "priceNum": 219, "veg": True},
                    {"id": "lung-fung-soup", "name": "Lung Fung Soup", "description": "Classic chicken and egg ribbon soup seasoned with oriental herbs", "price": "219/-", "priceNum": 219, "veg": False},
                    {"id": "chicken-clear-soup", "name": "Chicken Clear Soup", "description": "Delicate clear chicken broth with tender shredded chicken", "price": "219/-", "priceNum": 219, "veg": False},
                    {"id": "chicken-manchow-soup", "name": "Chicken Manchow Soup", "description": "Spiced chicken soup served with crispy fried noodles", "price": "229/-", "priceNum": 229, "veg": False, "spicy": True},
                    {"id": "chicken-thai-ginger-soup", "name": "Chicken Thai Ginger Soup", "description": "Warm ginger, lemongrass and chicken in fragrant Thai broth", "price": "229/-", "priceNum": 229, "veg": False, "popular": True},
                    {"id": "chicken-hot-sour-soup", "name": "Chicken Hot & Sour Soup", "description": "Tangy, spicy chicken soup with shredded vegetables", "price": "229/-", "priceNum": 229, "veg": False, "spicy": True}
                ]
            },
            {
                "id": "chinese-starters",
                "title": "Chinese Starters",
                "description": "Wok-tossed appetisers packed with fiery oriental flavour.",
                "items": [
                    {"id": "gobi-manchurian", "name": "Gobi Manchurian", "description": "Crispy cauliflower florets tossed in savoury scallion Manchurian sauce", "price": "259/-", "priceNum": 259, "veg": True},
                    {"id": "honey-chilli-potato", "name": "Honey Chilli Potato", "description": "Crispy potato batons tossed in sesame honey chilli glaze", "price": "259/-", "priceNum": 259, "veg": True},
                    {"id": "veg-manchurian", "name": "Veg Manchurian", "description": "Vegetable dumplings tossed in authentic ginger-garlic Manchurian gravy", "price": "269/-", "priceNum": 269, "veg": True},
                    {"id": "crunchy-munchy", "name": "Crunchy Munchy Veg", "description": "Crispy vegetable bites served with zesty dipping sauce", "price": "269/-", "priceNum": 269, "veg": True},
                    {"id": "honey-chilli-lotus-root", "name": "Honey Chilli Lotus Root", "description": "Crispy sliced lotus root coated in sweet and spicy chilli glaze", "price": "339/-", "priceNum": 339, "veg": True, "popular": True},
                    {"id": "paneer-thai-basil", "name": "Paneer Thai Basil", "description": "Fresh paneer tossed with aromatic Thai basil and Asian spices", "price": "349/-", "priceNum": 349, "veg": True},
                    {"id": "paneer-mongolian", "name": "Paneer Mongolian", "description": "Paneer stir-fried in rich sweet and savoury Mongolian sauce", "price": "359/-", "priceNum": 359, "veg": True},
                    {"id": "paneer-dragon", "name": "Paneer Dragon", "description": "Crispy cottage cheese tossed in fiery dragon chilli sauce", "price": "359/-", "priceNum": 359, "veg": True, "spicy": True},
                    {"id": "chicken-65", "name": "Chicken 65", "description": "Spicy South Indian style fried chicken tossed with curry leaves", "price": "379/-", "priceNum": 379, "veg": False, "spicy": True},
                    {"id": "chicken-bbq", "name": "Chicken BBQ", "description": "Succulent chicken glazed with smoky barbecue sauce", "price": "379/-", "priceNum": 379, "veg": False},
                    {"id": "chicken-satay", "name": "Chicken Satay", "description": "Tender grilled chicken skewers served with rich peanut sauce", "price": "379/-", "priceNum": 379, "veg": False},
                    {"id": "chicken-kerala", "name": "Chicken Kerala", "description": "Chicken cooked with Kerala roasted spices and fresh curry leaves", "price": "389/-", "priceNum": 389, "veg": False, "popular": True},
                    {"id": "chicken-magnate", "name": "Chicken Magnate", "description": "Crispy chicken cooked in sweet and savoury chef special gravy", "price": "399/-", "priceNum": 399, "veg": False},
                    {"id": "dragon-chicken", "name": "Dragon Chicken", "description": "Crispy strips of chicken tossed in spicy, fiery dragon sauce with cashews", "price": "399/-", "priceNum": 399, "veg": False, "popular": True, "spicy": True},
                    {"id": "crispy-chicken", "name": "Crispy Chicken", "description": "Golden fried chicken strips tossed with aromatics and roasted peppers", "price": "409/-", "priceNum": 409, "veg": False},
                    {"id": "chicken-chilly", "name": "Chicken Chilli", "description": "Chicken cubes stir-fried with green chillies, bell peppers & soya sauce", "price": "419/-", "priceNum": 419, "veg": False, "spicy": True},
                    {"id": "chicken-lollipop", "name": "Chicken Lollipop", "description": "Crisp fried chicken winglets served with spicy Schezwan dip", "price": "419/-", "priceNum": 419, "veg": False, "popular": True},
                    {"id": "kung-pao-chicken", "name": "Kung Pao Chicken", "description": "Chicken stir-fried with roasted peanuts, peppers and spicy Asian sauce", "price": "419/-", "priceNum": 419, "veg": False},
                    {"id": "jerk-chicken", "name": "Jerk Chicken", "description": "Chicken grilled with Caribbean jerk seasoning and fiery spices", "price": "439/-", "priceNum": 439, "veg": False, "spicy": True}
                ]
            },
            {
                "id": "tandoor-starters",
                "title": "Tandoor Kebabs & Starters",
                "description": "Clay oven delicacies smoked over burning charcoal with royal spices.",
                "items": [
                    {"id": "mushroom-tikka", "name": "Mushroom Tikka", "description": "Fresh mushrooms marinated with roasted spices and grilled in clay oven", "price": "349/-", "priceNum": 349, "veg": True},
                    {"id": "afghani-soya-chaap", "name": "Afghani Soya Chaap", "description": "Soya chaap cooked in a rich Afghani cashew-cream marinade", "price": "359/-", "priceNum": 359, "veg": True},
                    {"id": "paneer-angara-kebab", "name": "Paneer Angara Kebab", "description": "Cottage cheese steeped in smoky fiery spices and roasted in the tandoor", "price": "389/-", "priceNum": 389, "veg": True, "spicy": True},
                    {"id": "paneer-banjara-kebab", "name": "Paneer Banjara Kebab", "description": "Paneer cubes marinated in traditional rustic spiced yogurt masala", "price": "389/-", "priceNum": 389, "veg": True},
                    {"id": "paneer-multani-tikka", "name": "Paneer Multani Tikka", "description": "Paneer marinated in a rich creamy spiced yellow marinade and grilled", "price": "399/-", "priceNum": 399, "veg": True, "popular": True},
                    {"id": "malai-paneer-tikka", "name": "Malai Paneer Tikka", "description": "Paneer marinated in rich cream, cheese and cardamom, grilled till lightly charred", "price": "399/-", "priceNum": 399, "veg": True},
                    {"id": "jaithuni-bharva-kumbh", "name": "Jaithuni Bharva Kumbh", "description": "Stuffed mushrooms grilled in a creamy olive and cheese marinade", "price": "399/-", "priceNum": 399, "veg": True},
                    {"id": "paneer-cheese-roll", "name": "Paneer Cheese Roll", "description": "Paneer and molten cheese rolled and baked crisp in tandoor", "price": "419/-", "priceNum": 419, "veg": True},
                    {"id": "cheese-garlic-paneer-tikka", "name": "Cheese Garlic Paneer Tikka", "description": "Paneer grilled with melted cheese, roasted garlic and aromatic herbs", "price": "429/-", "priceNum": 429, "veg": True, "popular": True},
                    {"id": "veg-tandoor-platter", "name": "Royal Veg Platter", "description": "Assortment of chef special tandoori paneer, mushrooms and chaap", "price": "999/-", "priceNum": 999, "veg": True, "popular": True},
                    {"id": "tangdi-kebab", "name": "Tangdi Kebab", "description": "Chicken drumsticks marinated in roasted spices and charcoal grilled", "price": "429/-", "priceNum": 429, "veg": False},
                    {"id": "murgh-sikandar-kebab", "name": "Murgh Sikandar Kebab", "description": "Chicken marinated in rich warrior spices and grilled succulent in tandoor", "price": "449/-", "priceNum": 449, "veg": False, "popular": True},
                    {"id": "murgh-malai-kebab", "name": "Murgh Malai Kebab", "description": "Tender chicken marinated in malai, cheese and green cardamom", "price": "449/-", "priceNum": 449, "veg": False},
                    {"id": "murgh-pahadi-kebab", "name": "Murgh Pahadi Kebab", "description": "Chicken kebabs infused with fresh mint, coriander and green mountain herbs", "price": "469/-", "priceNum": 469, "veg": False},
                    {"id": "murgh-delhi-darbar", "name": "Murgh Delhi Darbar", "description": "Royal Old Delhi style chicken kebab roasted with rich saffron aromatics", "price": "469/-", "priceNum": 469, "veg": False},
                    {"id": "murgh-alishan-kebab", "name": "Murgh Alishan Kebab", "description": "Creamy chicken kebab grilled until fork tender with grand spices", "price": "479/-", "priceNum": 479, "veg": False},
                    {"id": "murgh-turkish-kebab", "name": "Murgh Turkish Kebab", "description": "Chicken marinated with Turkish herbs, sumac and smoked paprika", "price": "479/-", "priceNum": 479, "veg": False},
                    {"id": "mughlai-tandoori-chicken", "name": "Mughlai Tandoori Chicken", "description": "Chicken roasted in an authentic Mughlai-style spiced tandoor marinade", "price": "489/-", "priceNum": 489, "veg": False, "popular": True},
                    {"id": "chicken-noorani", "name": "Chicken Noorani", "description": "Creamy dual-layered chicken kebab cooked slow in the clay oven", "price": "489/-", "priceNum": 489, "veg": False},
                    {"id": "tandoori-chicken", "name": "Classic Tandoori Chicken (Full)", "description": "Whole chicken marinated in mustard oil, yogurt and Kashmiri chillies", "price": "549/-", "priceNum": 549, "veg": False, "popular": True},
                    {"id": "mutton-seekh-kebab", "name": "Mutton Seekh Kebab", "description": "Finely minced mutton skewers spiced with royal herbs and grilled over coals", "price": "549/-", "priceNum": 549, "veg": False, "popular": True},
                    {"id": "mutton-chapli-kebab", "name": "Mutton Chapli Kebab", "description": "Traditional spiced minced mutton patties shallow-grilled to perfection", "price": "560/-", "priceNum": 560, "veg": False, "popular": True},
                    {"id": "non-veg-tandoor-platter", "name": "Royal Non-Veg Platter", "description": "Grand assortment of tandoori chicken, kebabs, tangdi and seekh", "price": "1199/-", "priceNum": 1199, "veg": False, "popular": True},
                    {"id": "chicken-alani", "name": "Chicken Alani", "description": "Traditional Kolhapuri mild broth-cooked chicken starter", "price": "369/-", "priceNum": 369, "veg": False},
                    {"id": "chicken-fry", "name": "Chicken Fry", "description": "Spicy pan-fried chicken tossed with onion, garlic and red spices", "price": "469/-", "priceNum": 469, "veg": False, "spicy": True},
                    {"id": "chicken-sukka", "name": "Chicken Sukka", "description": "Dry Kolhapuri chicken preparation roasted with desiccated coconut", "price": "469/-", "priceNum": 469, "veg": False, "popular": True, "spicy": True},
                    {"id": "chicken-kharda", "name": "Chicken Kharda", "description": "Tender chicken sauteed in fiery Kolhapuri green chilli thecha / kharda", "price": "479/-", "priceNum": 479, "veg": False, "spicy": True},
                    {"id": "chicken-ghee-roast", "name": "Chicken Ghee Roast", "description": "Succulent chicken roasted in pure desi ghee with coastal Byadagi spices", "price": "489/-", "priceNum": 489, "veg": False, "popular": True},
                    {"id": "mutton-alani", "name": "Mutton Alani", "description": "Mutton cooked in mild, comforting traditional Kolhapuri broth", "price": "399/-", "priceNum": 399, "veg": False},
                    {"id": "mutton-fry", "name": "Mutton Fry", "description": "Spicy pan-fried mutton with fresh coriander and hand-ground masala", "price": "499/-", "priceNum": 499, "veg": False, "spicy": True},
                    {"id": "mutton-lonche", "name": "Mutton Lonche", "description": "Tender mutton cooked in spicy pickle-style tangy Kolhapuri masala", "price": "499/-", "priceNum": 499, "veg": False, "popular": True},
                    {"id": "mutton-kharda", "name": "Mutton Kharda", "description": "Mutton roasted with crushed green chillies, garlic and Kolhapuri spices", "price": "509/-", "priceNum": 509, "veg": False, "spicy": True},
                    {"id": "mutton-ghee-roast", "name": "Mutton Ghee Roast", "description": "Tender goat mutton slow-roasted in fragrant desi ghee and coastal red chillies", "price": "529/-", "priceNum": 529, "veg": False, "popular": True}
                ]
            },
            {
                "id": "indian-main-veg",
                "title": "Indian Main Course (Veg)",
                "description": "Simmered gravies, rich paneer preparations and comforting dals.",
                "items": [
                    {"id": "dal-fry", "name": "Dal Fry", "description": "Yellow lentils cooked and tempered with cumin, onions, and tomatoes", "price": "229/-", "priceNum": 229, "veg": True},
                    {"id": "dal-tadka", "name": "Dal Tadka", "description": "Homestyle yellow dal finished with smoking garlic and red chilli ghee tadka", "price": "249/-", "priceNum": 249, "veg": True, "popular": True},
                    {"id": "dal-makhani", "name": "Dal Makhani", "description": "Black lentils simmered overnight with cream, butter and plum tomatoes", "price": "289/-", "priceNum": 289, "veg": True, "popular": True},
                    {"id": "veg-kadai", "name": "Veg Kadai", "description": "Assorted vegetables cooked with freshly pounded kadai coriander masala", "price": "339/-", "priceNum": 339, "veg": True},
                    {"id": "veg-handi", "name": "Veg Handi", "description": "Garden fresh vegetables cooked in an earthen clay-pot spiced gravy", "price": "349/-", "priceNum": 349, "veg": True},
                    {"id": "veg-kolhapuri", "name": "Veg Kolhapuri", "description": "Spicy mixed vegetables cooked in Kolhapur signature red fiery gravy", "price": "349/-", "priceNum": 349, "veg": True, "popular": True, "spicy": True},
                    {"id": "veg-maratha", "name": "Veg Maratha", "description": "Veg koftas simmered in spicy, aromatic Maharashtrian curry", "price": "359/-", "priceNum": 359, "veg": True, "spicy": True},
                    {"id": "paneer-butter-masala", "name": "Paneer Butter Masala", "description": "Soft cottage cheese simmered in silky smooth buttery makhani gravy", "price": "389/-", "priceNum": 389, "veg": True, "popular": True},
                    {"id": "paneer-kurchan", "name": "Paneer Kurchan", "description": "Shredded paneer stir-fried dry with capsicum, tomatoes and spices", "price": "389/-", "priceNum": 389, "veg": True},
                    {"id": "paneer-tikka-masala", "name": "Paneer Tikka Masala", "description": "Charcoal grilled paneer tikkas cooked in rich spiced onion-tomato gravy", "price": "399/-", "priceNum": 399, "veg": True, "popular": True},
                    {"id": "kaju-masala", "name": "Kaju Masala", "description": "Roasted cashew nuts simmered in rich spicy onion tomato curry", "price": "399/-", "priceNum": 399, "veg": True},
                    {"id": "kaju-curry", "name": "Kaju Curry", "description": "Whole cashews in silky golden cashew-onion gravy", "price": "399/-", "priceNum": 399, "veg": True},
                    {"id": "paneer-kaju-masala", "name": "Paneer Kaju Masala", "description": "Fresh paneer and cashews simmered together in creamy decadent gravy", "price": "409/-", "priceNum": 409, "veg": True, "popular": True},
                    {"id": "paneer-banjara-masala", "name": "Paneer Banjara Masala", "description": "Paneer cooked in rustic, flavorful Banjara-style herbs", "price": "409/-", "priceNum": 409, "veg": True},
                    {"id": "paneer-rara", "name": "Paneer Rara", "description": "Paneer cubes tossed with minced paneer in a robust double-spice gravy", "price": "419/-", "priceNum": 419, "veg": True},
                    {"id": "paneer-chingari", "name": "Paneer Chingari", "description": "Special smoky spiced paneer dish finished with fiery sparks of flavour", "price": "419/-", "priceNum": 419, "veg": True, "spicy": True}
                ]
            },
            {
                "id": "indian-main-nonveg",
                "title": "Indian Main Course (Non-Veg)",
                "description": "Royal curries, fiery Kolhapuri preparations, succulent chicken, mutton and egg.",
                "items": [
                    {"id": "egg-masala", "name": "Egg Masala", "description": "Boiled eggs cooked in seasoned spicy Indian onion-tomato masala", "price": "250/-", "priceNum": 250, "veg": False},
                    {"id": "egg-curry", "name": "Egg Curry", "description": "Boiled eggs simmered in rich homestyle gravy", "price": "270/-", "priceNum": 270, "veg": False},
                    {"id": "chicken-tikka-masala", "name": "Chicken Tikka Masala", "description": "Tandoor grilled chicken tikkas simmered in velvety spiced tomato gravy", "price": "469/-", "priceNum": 469, "veg": False, "popular": True},
                    {"id": "chicken-maratha", "name": "Chicken Maratha", "description": "Authentic fiery Maharashtrian chicken curry with roasted ground spices", "price": "469/-", "priceNum": 469, "veg": False, "spicy": True},
                    {"id": "chicken-kolhapuri", "name": "Chicken Kolhapuri", "description": "Legendary Kolhapuri red curry prepared with authentic local spices", "price": "469/-", "priceNum": 469, "veg": False, "popular": True, "spicy": True},
                    {"id": "chicken-handi", "name": "Chicken Handi", "description": "Clay-pot simmered chicken in thick aromatic gravy", "price": "489/-", "priceNum": 489, "veg": False},
                    {"id": "butter-chicken", "name": "Butter Chicken", "description": "Tender shredded tandoori chicken cooked in silky smooth buttery tomato makhani", "price": "489/-", "priceNum": 489, "veg": False, "popular": True},
                    {"id": "chicken-rara", "name": "Chicken Rara", "description": "Chicken pieces cooked along with rich minced chicken gravy", "price": "499/-", "priceNum": 499, "veg": False, "popular": True},
                    {"id": "dum-ka-murgh", "name": "Dum Ka Murgh", "description": "Chicken slow cooked on gentle dum with rich saffron, nuts and brown onions", "price": "499/-", "priceNum": 499, "veg": False},
                    {"id": "mutton-do-pyaza", "name": "Mutton Do Pyaza", "description": "Mutton slow-braised with two stages of caramelized onions and whole spices", "price": "539/-", "priceNum": 539, "veg": False},
                    {"id": "mutton-lal-maas", "name": "Mutton Lal Maas", "description": "Traditional royal Rajasthani mutton cooked with fiery red Mathania chillies", "price": "539/-", "priceNum": 539, "veg": False, "spicy": True},
                    {"id": "mutton-rogan-josh", "name": "Mutton Rogan Josh", "description": "Kashmiri style aromatic mutton curry simmered with ratanjot and fennel", "price": "539/-", "priceNum": 539, "veg": False, "popular": True},
                    {"id": "mutton-shalimar", "name": "Mutton Shalimar", "description": "Royal Mughal recipe of tender mutton in luxurious aromatic brown gravy", "price": "599/-", "priceNum": 599, "veg": False},
                    {"id": "mutton-rezala", "name": "Mutton Rezala", "description": "Mutton simmered in decadent white Mughlai gravy with cashew paste and yogurt", "price": "599/-", "priceNum": 599, "veg": False, "popular": True},
                    {"id": "mutton-kheema-masala", "name": "Mutton Kheema Masala", "description": "Minced goat meat slow-cooked in robust and spicy Indian spices", "price": "609/-", "priceNum": 609, "veg": False, "popular": True},
                    {"id": "mutton-malwani", "name": "Mutton Malwani", "description": "Coastal Konkani mutton curry with fresh grated coconut and Malwani masala", "price": "619/-", "priceNum": 619, "veg": False, "spicy": True},
                    {"id": "mutton-handi", "name": "Mutton Handi", "description": "Clay-pot braised tender mutton in rich, deep onion-tomato reduction", "price": "629/-", "priceNum": 629, "veg": False},
                    {"id": "mutton-kolhapuri", "name": "Mutton Kolhapuri", "description": "The crown jewel of Kolhapur: fork-tender mutton in authentic fiery Kolhapuri gravy", "price": "649/-", "priceNum": 649, "veg": False, "popular": True, "spicy": True}
                ]
            },
            {
                "id": "indian-breads",
                "title": "Indian Breads (Tandoor)",
                "description": "Handcrafted rotis, parathas, naans and kulchas fresh out of the clay tandoor.",
                "items": [
                    {"id": "roti", "name": "Tandoori Roti", "description": "Crisp unleavened whole wheat flatbread baked on tandoor walls", "price": "30/-", "priceNum": 30, "veg": True},
                    {"id": "butter-roti", "name": "Butter Roti", "description": "Tandoori whole wheat roti brushed with fresh butter", "price": "35/-", "priceNum": 35, "veg": True},
                    {"id": "laccha-paratha", "name": "Laccha Paratha", "description": "Layered whole wheat flatbread hand-rolled with ghee and baked in tandoor", "price": "45/-", "priceNum": 45, "veg": True, "popular": True},
                    {"id": "naan", "name": "Plain Naan", "description": "Classic leavened soft flatbread baked in the tandoor", "price": "65/-", "priceNum": 65, "veg": True},
                    {"id": "butter-naan", "name": "Butter Naan", "description": "Tandoor-baked soft naan glazed with melted golden butter", "price": "69/-", "priceNum": 69, "veg": True, "popular": True},
                    {"id": "garlic-naan", "name": "Garlic Naan", "description": "Soft naan topped with minced roasted garlic and fresh coriander", "price": "79/-", "priceNum": 79, "veg": True, "popular": True},
                    {"id": "kulcha", "name": "Plain Kulcha", "description": "Soft tandoor baked leavened bread", "price": "79/-", "priceNum": 79, "veg": True},
                    {"id": "butter-kulcha", "name": "Butter Kulcha", "description": "Soft kulcha generously glazed with golden butter", "price": "89/-", "priceNum": 89, "veg": True},
                    {"id": "missi-roti", "name": "Missi Roti", "description": "Spiced gram flour and wheat bread seasoned with ajwain", "price": "101/-", "priceNum": 101, "veg": True},
                    {"id": "cheese-naan", "name": "Cheese Naan", "description": "Naan stuffed with gooey melted mozzarella cheese", "price": "169/-", "priceNum": 169, "veg": True},
                    {"id": "cheese-garlic-naan", "name": "Cheese Garlic Naan", "description": "Naan filled with molten cheese and crusted with roasted garlic", "price": "179/-", "priceNum": 179, "veg": True, "popular": True},
                    {"id": "cheese-chilli-garlic-naan", "name": "Cheese Chilli Garlic Naan", "description": "Naan loaded with molten cheese, spicy green chillies and roasted garlic", "price": "189/-", "priceNum": 189, "veg": True, "popular": True, "spicy": True}
                ]
            },
            {
                "id": "salads-raitas",
                "title": "Salads & Raitas",
                "description": "Refreshing accompaniments and seasoned yogurts.",
                "items": [
                    {"id": "dahi-kanda", "name": "Dahi Kanda", "description": "Traditional onion and yogurt accompaniment with mild seasoning", "price": "99/-", "priceNum": 99, "veg": True},
                    {"id": "green-salad", "name": "Green Salad", "description": "Fresh garden seasonal vegetables sliced crisp", "price": "119/-", "priceNum": 119, "veg": True},
                    {"id": "veg-raita", "name": "Veg Raita", "description": "Wholesome seasoned churned yogurt with cucumber and tomatoes", "price": "129/-", "priceNum": 129, "veg": True},
                    {"id": "pineapple-raita", "name": "Pineapple Raita", "description": "Sweet and refreshing chilled yogurt with juicy pineapple chunks", "price": "149/-", "priceNum": 149, "veg": True, "popular": True},
                    {"id": "tandoori-salad", "name": "Tandoori Salad", "description": "Fresh vegetables tossed with tandoori spices and lemon juice", "price": "179/-", "priceNum": 179, "veg": True}
                ]
            },
            {
                "id": "chinese-rice-noodles",
                "title": "Chinese Rice & Noodles",
                "description": "Wok-tossed long-grain rice and noodles with fresh veggies, eggs and chicken.",
                "items": [
                    {"id": "veg-fried-rice", "name": "Veg Fried Rice", "description": "Wok-tossed fragrant rice with garden vegetables and spring onions", "price": "249/-", "priceNum": 249, "veg": True},
                    {"id": "veg-hakka-noodles", "name": "Veg Hakka Noodles", "description": "Classic tossed noodles with crunchy julienned vegetables", "price": "249/-", "priceNum": 249, "veg": True},
                    {"id": "veg-schezwan-fried-rice", "name": "Veg Schezwan Fried Rice", "description": "Rice tossed in pungent house-made red Schezwan sauce", "price": "269/-", "priceNum": 269, "veg": True, "spicy": True},
                    {"id": "veg-schezwan-noodles", "name": "Veg Schezwan Noodles", "description": "Spicy noodles tossed in bold Schezwan chilli garlic sauce", "price": "269/-", "priceNum": 269, "veg": True, "spicy": True},
                    {"id": "veg-burn-garlic-rice", "name": "Veg Burn Garlic Rice", "description": "Rice tossed with golden roasted burnt garlic and vegetables", "price": "279/-", "priceNum": 279, "veg": True},
                    {"id": "veg-burn-garlic-noodles", "name": "Veg Burn Garlic Noodles", "description": "Noodles tossed with aromatic burnt garlic bits", "price": "279/-", "priceNum": 279, "veg": True},
                    {"id": "veg-hong-kong-noodles", "name": "Veg Hong Kong Noodles", "description": "Hong Kong style stir-fried noodles with bell peppers", "price": "279/-", "priceNum": 279, "veg": True},
                    {"id": "veg-singapore-rice", "name": "Veg Singapore Rice", "description": "Rice tossed with subtle curry spice and pineapple notes", "price": "289/-", "priceNum": 289, "veg": True},
                    {"id": "veg-singapore-noodles", "name": "Veg Singapore Noodles", "description": "Thin noodles tossed in Singapore curried spices and veggies", "price": "289/-", "priceNum": 289, "veg": True},
                    {"id": "chicken-hakka-noodles", "name": "Chicken Hakka Noodles", "description": "Stir-fried noodles with tender chicken strips and eggs", "price": "289/-", "priceNum": 289, "veg": False},
                    {"id": "veg-hong-kong-rice", "name": "Veg Hong Kong Rice", "description": "Rice tossed with dry red chillies, cashews and peppers", "price": "299/-", "priceNum": 299, "veg": True},
                    {"id": "chicken-fried-rice", "name": "Chicken Fried Rice", "description": "Stir fried fragrant rice with shredded chicken and eggs", "price": "319/-", "priceNum": 319, "veg": False, "popular": True},
                    {"id": "veg-triple-schezwan", "name": "Veg Triple Schezwan Rice", "description": "Combination of Schezwan rice, noodles and vegetable gravy", "price": "319/-", "priceNum": 319, "veg": True, "popular": True, "spicy": True},
                    {"id": "chicken-schezwan-noodles", "name": "Chicken Schezwan Noodles", "description": "Spicy noodles tossed with chicken and fiery Schezwan paste", "price": "319/-", "priceNum": 319, "veg": False, "spicy": True},
                    {"id": "chicken-schezwan-fried-rice", "name": "Chicken Schezwan Fried Rice", "description": "Schezwan flavoured chicken fried rice tossed high flame", "price": "339/-", "priceNum": 339, "veg": False, "popular": True, "spicy": True},
                    {"id": "egg-fried-rice", "name": "Egg Fried Rice", "description": "Fragrant rice stir-fried with scrambled eggs and scallions", "price": "339/-", "priceNum": 339, "veg": False},
                    {"id": "chicken-singapore-noodles", "name": "Chicken Singapore Noodles", "description": "Spicy curried noodles with shredded chicken and eggs", "price": "339/-", "priceNum": 339, "veg": False},
                    {"id": "chicken-hong-kong-rice", "name": "Chicken Hong Kong Rice", "description": "Rice tossed with chicken, whole chillies, cashews & bell peppers", "price": "339/-", "priceNum": 339, "veg": False},
                    {"id": "chicken-singapore-rice", "name": "Chicken Singapore Rice", "description": "Rice tossed with chicken, aromatic herbs and pineapple", "price": "349/-", "priceNum": 349, "veg": False},
                    {"id": "chicken-triple-schezwan", "name": "Chicken Triple Schezwan", "description": "Chicken Schezwan rice and noodles served with spicy chicken gravy", "price": "349/-", "priceNum": 349, "veg": False, "popular": True, "spicy": True},
                    {"id": "chicken-hong-kong-noodles", "name": "Chicken Hong Kong Noodles", "description": "Noodles tossed with chicken, dry chillies and rich soya sauce", "price": "349/-", "priceNum": 349, "veg": False},
                    {"id": "chicken-burn-garlic-noodles", "name": "Chicken Burn Garlic Noodles", "description": "Noodles tossed with chicken strips and roasted garlic bits", "price": "349/-", "priceNum": 349, "veg": False},
                    {"id": "chicken-burn-garlic-rice", "name": "Chicken Burn Garlic Rice", "description": "Rice tossed with chicken, eggs and smoky burnt garlic", "price": "369/-", "priceNum": 369, "veg": False, "popular": True}
                ]
            },
            {
                "id": "rice-biryani",
                "title": "Rice & Royal Biryani",
                "description": "Dum-cooked royal biryanis with aged basmati rice and hand-ground spices.",
                "items": [
                    {"id": "steamed-rice", "name": "Steamed Rice", "description": "Aromatic fluffy steamed long-grain basmati rice", "price": "189/-", "priceNum": 189, "veg": True},
                    {"id": "jeera-rice", "name": "Jeera Rice", "description": "Basmati rice tempered with roasted cumin seeds and desi ghee", "price": "199/-", "priceNum": 199, "veg": True, "popular": True},
                    {"id": "dal-khichdi", "name": "Dal Khichdi", "description": "Comforting rice and yellow lentil preparation tempered with ghee and garlic", "price": "219/-", "priceNum": 219, "veg": True, "popular": True},
                    {"id": "veg-pulao", "name": "Veg Pulao", "description": "Fragrant basmati rice gently spiced with garden vegetables", "price": "239/-", "priceNum": 239, "veg": True},
                    {"id": "veg-biryani", "name": "Veg Dum Biryani", "description": "Basmati rice layered with garden vegetables, saffron and spices", "price": "239/-", "priceNum": 239, "veg": True},
                    {"id": "paneer-biryani", "name": "Paneer Biryani", "description": "Basmati rice layered with succulent paneer tikkas and royal spices", "price": "299/-", "priceNum": 299, "veg": True, "popular": True},
                    {"id": "egg-biryani", "name": "Egg Dum Biryani", "description": "Basmati rice cooked on dum with boiled eggs and aromatic gravy", "price": "299/-", "priceNum": 299, "veg": False},
                    {"id": "chicken-dum-biryani", "name": "Chicken Dum Biryani", "description": "Signature dum biryani with marinated chicken and long-grain basmati", "price": "429/-", "priceNum": 429, "veg": False, "popular": True},
                    {"id": "chicken-tikka-biryani", "name": "Chicken Tikka Biryani", "description": "Smoky boneless tandoori chicken tikka layered with spiced saffron rice", "price": "449/-", "priceNum": 449, "veg": False, "popular": True},
                    {"id": "mutton-dum-biryani", "name": "Mutton Dum Biryani", "description": "Tender goat mutton marinated overnight and cooked on slow dum", "price": "549/-", "priceNum": 549, "veg": False, "popular": True},
                    {"id": "mutton-biryani-special", "name": "Royal Special Mutton Biryani", "description": "House of 666 grand recipe with double-marinated tender mutton and saffron", "price": "569/-", "priceNum": 569, "veg": False, "popular": True}
                ]
            },
            {
                "id": "papad",
                "title": "Papad Accompaniments",
                "description": "Crisp lentil wafers roasted or fried.",
                "items": [
                    {"id": "roasted-papad", "name": "Roasted Papad", "description": "Crisp papad fire-roasted on open flame", "price": "30/-", "priceNum": 30, "veg": True},
                    {"id": "fried-papad", "name": "Fried Papad", "description": "Golden deep-fried crisp papad", "price": "40/-", "priceNum": 40, "veg": True},
                    {"id": "masala-papad", "name": "Masala Papad", "description": "Crisp papad topped with tangy spiced onions, tomatoes and coriander", "price": "60/-", "priceNum": 60, "veg": True, "popular": True}
                ]
            }
        ]
    },
    {
        "id": "desserts",
        "slug": "desserts",
        "name": "Desserts",
        "shortName": "Desserts",
        "subtitle": "Handmade artisanal cheesecakes, live tiramisu and traditional Indian sweets",
        "accentColor": "dessert-pink",
        "accentHex": "#F6C9D6",
        "subSections": [
            {
                "id": "cheesecakes",
                "title": "Artisanal Cheesecakes",
                "description": "Handcrafted rich cream cheese cakes prepared by our pastry chefs.",
                "items": [
                    {"id": "cheesecake-slice", "name": "Classic Cheesecake Slice", "description": "Creamy baked cheesecake with a buttery crumb crust", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "blueberry-cheesecake", "name": "Blueberry Cheesecake", "description": "Rich velvety cheesecake topped with luscious wild blueberry compote", "price": "160/-", "priceNum": 160, "veg": True, "popular": True},
                    {"id": "biscoff-cheesecake", "name": "Lotus Biscoff Cheesecake", "description": "Creamy cheesecake infused with spiced Lotus Biscoff spread and biscuit crumble", "price": "180/-", "priceNum": 180, "veg": True, "popular": True},
                    {"id": "nutella-cheesecake", "name": "Nutella Cheesecake", "description": "Decadent chocolate hazelnut Nutella layered over creamy cheesecake", "price": "180/-", "priceNum": 180, "veg": True, "popular": True}
                ]
            },
            {
                "id": "specials-traditional",
                "title": "Chef Specials & Traditional Sweets",
                "description": "Handmade sweet creations and heritage desserts.",
                "items": [
                    {"id": "choco-strips", "name": "Choco Strips", "description": "Handmade cookie strips served with warm milk chocolate dip", "price": "90/-", "priceNum": 90, "veg": True},
                    {"id": "caramel-custard", "name": "Caramel Custard", "description": "A silky-smooth baked custard topped with a golden layer of rich caramel", "price": "110/-", "priceNum": 110, "veg": True, "popular": True},
                    {"id": "serradura", "name": "Serradura (Sawdust Pudding)", "description": "Special Goan Portuguese dessert layered with sweetened whipped cream & tea biscuit crumbs", "price": "140/-", "priceNum": 140, "veg": True, "popular": True},
                    {"id": "pull-up-cake", "name": "Pull Up Cake", "description": "A soft, moist celebration cake topped with flowing smooth frosting and rich chocolate waterfall", "price": "160/-", "priceNum": 160, "veg": True, "popular": True},
                    {"id": "tiramisu-live", "name": "Tiramisu (Live)", "description": "Classic Italian coffee-flavoured dessert with mascarpone and cocoa", "price": "200/-", "priceNum": 200, "veg": True, "popular": True},
                    {"id": "laccha-rabadi", "name": "Laccha Rabadi", "description": "Slow cooked rich milk rabadi with crunchy nuts and aromatic saffron", "price": "100/-", "priceNum": 100, "veg": True},
                    {"id": "rabadi-gulab-jamun", "name": "Rabadi with Gulab Jamun", "description": "Warm, soft gulab jamun immersed in chilled thick saffron rabadi", "price": "120/-", "priceNum": 120, "veg": True, "popular": True},
                    {"id": "vanilla-ice-cream-gulab-jamun", "name": "Vanilla Ice Cream with Gulab Jamun", "description": "Hot sweet gulab jamun paired with cool Madagascar vanilla ice cream", "price": "120/-", "priceNum": 120, "veg": True},
                    {"id": "ice-cream-with-brownie", "name": "Ice Cream with Brownie", "description": "Fudgy chocolate brownie topped with a scoop of vanilla ice cream and hot chocolate drizzle", "price": "150/-", "priceNum": 150, "veg": True, "popular": True}
                ]
            }
        ]
    },
    {
        "id": "mocktails",
        "slug": "mocktails",
        "name": "Mocktails",
        "shortName": "Mocktails",
        "subtitle": "Zero-proof signature mixology, layered punches and sparkling infusions",
        "accentColor": "mocktail-navy",
        "accentHex": "#2E3A59",
        "subSections": [
            {
                "id": "signature-mocktails",
                "title": "Signature Mixology Mocktails",
                "description": "Artisan sparkling mocktails crafted with fresh fruit reductions, herbs and botanical sodas.",
                "items": [
                    {"id": "fresh-lime-soda", "name": "Fresh Lime Soda", "description": "Fresh lime juice, rock salt, simple syrup and sparkling club soda (Sweet / Salt / Mixed)", "price": "140/-", "priceNum": 140, "veg": True},
                    {"id": "virgin-mojito-mocktail", "name": "Virgin Mojito", "description": "Muddled fresh garden mint, zesty lime wedges, cane sugar & sparkling soda", "price": "150/-", "priceNum": 150, "veg": True, "popular": True},
                    {"id": "strawberry-mojito-mocktail", "name": "Strawberry Mojito", "description": "Fresh strawberry puree, muddled mint, citrus lime & sparkling soda", "price": "200/-", "priceNum": 200, "veg": True},
                    {"id": "blue-cooler-mocktail", "name": "Blue Cooler", "description": "Blue curacao, freshly squeezed lime, effervescent soda & garden mint", "price": "200/-", "priceNum": 200, "veg": True},
                    {"id": "cinderella-mocktail", "name": "Cinderella", "description": "Pineapple juice, sweet orange juice, lime, ruby grenadine & soda", "price": "200/-", "priceNum": 200, "veg": True, "popular": True},
                    {"id": "passion-fruit-mojito", "name": "Passion Fruit Mojito", "description": "Tangy passion fruit pulp, muddled mint, citrus lime & soda sparkle", "price": "210/-", "priceNum": 210, "veg": True},
                    {"id": "watermelon-mojito-mocktail", "name": "Watermelon Mojito", "description": "Crushed summer watermelon, refreshing mint leaves, lime & soda", "price": "210/-", "priceNum": 210, "veg": True},
                    {"id": "sex-on-the-beach-mocktail", "name": "Sex On The Beach (Mocktail)", "description": "Peach schnapps reduction, fresh orange juice and tart cranberry splash", "price": "230/-", "priceNum": 230, "veg": True, "popular": True},
                    {"id": "tropical-paradise-mocktail", "name": "Tropical Paradise", "description": "Creamy coconut, pineapple, sweet orange, zesty lime & sparkling soda", "price": "300/-", "priceNum": 300, "veg": True, "popular": True}
                ]
            }
        ]
    }
]

ts_content = f'''export interface MenuItem {{
  id: string;
  name: string;
  description: string;
  price: string;
  priceNum: number;
  veg: boolean;
  popular?: boolean;
  spicy?: boolean;
}}

export interface MenuSubSection {{
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
}}

export interface MenuCategory {{
  id: string;
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  accentColor: string;
  accentHex: string;
  subSections: MenuSubSection[];
}}

export const menuCategories: MenuCategory[] = {json.dumps(menu_data, indent=2)};

export const allMenuItems: MenuItem[] = menuCategories.flatMap((cat) =>
  cat.subSections.flatMap((sub) => sub.items)
);

export const signaturePicks: MenuItem[] = [
  {{
    id: "mutton-ghee-roast",
    name: "Mutton Ghee Roast",
    description: "Tender goat mutton slow-roasted in fragrant desi ghee and coastal red chillies",
    price: "529/-",
    priceNum: 529,
    veg: false,
    popular: true,
  }},
  {{
    id: "biscoff-cheesecake",
    name: "Lotus Biscoff Cheesecake",
    description: "Creamy cheesecake infused with spiced Lotus Biscoff spread and biscuit crumble",
    price: "180/-",
    priceNum: 180,
    veg: true,
    popular: true,
  }},
  {{
    id: "butter-garlic-prawns",
    name: "Butter Garlic Prawns",
    description: "Rich, buttery and aromatic succulent prawns simmered in silky garlic butter",
    price: "320/-",
    priceNum: 320,
    veg: false,
    popular: true,
  }},
  {{
    id: "cold-coffee",
    name: "Classic Cold Coffee",
    description: "Frozen milk, bold espresso & sugar blended smooth and thick",
    price: "160/-",
    priceNum: 160,
    veg: true,
    popular: true,
  }},
  {{
    id: "murgh-sikandar-kebab",
    name: "Murgh Sikandar Kebab",
    description: "Chicken marinated in rich warrior spices and grilled succulent in tandoor",
    price: "449/-",
    priceNum: 449,
    veg: false,
    popular: true,
  }},
  {{
    id: "mutton-kolhapuri",
    name: "Mutton Kolhapuri",
    description: "The crown jewel of Kolhapur: fork-tender mutton in authentic fiery Kolhapuri gravy",
    price: "649/-",
    priceNum: 649,
    veg: false,
    popular: true,
    spicy: true,
  }},
  {{
    id: "virgin-mojito",
    name: "Virgin Mojito",
    description: "Classic muddled mint leaves, lime wedges, simple syrup & sparkling soda",
    price: "200/-",
    priceNum: 200,
    veg: true,
    popular: true,
  }},
  {{
    id: "golden-coast-rolls",
    name: "Golden Coast Cheese Rolls",
    description: "Golden, crispy rolls with a gooey cheesy molten centre & crunchy capsicum",
    price: "180/-",
    priceNum: 180,
    veg: true,
    popular: true,
  }}
];
'''

os.makedirs('data', exist_ok=True)
with open('data/menu.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

total_items = sum(len(sub["items"]) for cat in menu_data for sub in cat["subSections"])
print(f"Generated data/menu.ts successfully with {len(menu_data)} categories and {total_items} items!")
