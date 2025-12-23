const QUESTION_DATA = [
    {
        id: 1,
        question: "What is the approximate age of the Sun?",
        questionHindi: "सूर्य की अनुमानित आयु कितनी है?",
        options: ["2 Billion years / 2 अरब वर्ष", "5 Billion years / 5 अरब वर्ष", "10 Billion years / 10 अरब वर्ष", "1 Billion years / 1 अरब वर्ष"],
        correct: 1
    },
    {
        id: 2,
        question: "Which planet is nearest to the Earth?",
        questionHindi: "पृथ्वी के सबसे निकट कौन सा ग्रह है?",
        options: ["Venus / शुक्र", "Mars / मंगल", "Mercury / बुध", "Jupiter / बृहस्पति"],
        correct: 2
    },
    {
        id: 3,
        question: "Which planet is known as the \"Morning Star\"?",
        questionHindi: "किस ग्रह को 'भोर का तारा' कहा जाता है?",
        options: ["Mercury / बुध", "Venus / शुक्र", "Saturn / शनि", "Mars / मंगल"],
        correct: 1
    },
    {
        id: 4,
        question: "Which is the largest planet in the solar system?",
        questionHindi: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        options: ["Earth / पृथ्वी", "Neptune / वरुण", "Jupiter / बृहस्पति", "Saturn / शनि"],
        correct: 2
    },
    {
        id: 5,
        question: "Who discovered the planet Saturn?",
        questionHindi: "शनि ग्रह की खोज किसने की थी?",
        options: ["Newton / न्यूटन", "Galileo / गैलीलियो", "Copernicus / कोपरनिकस", "Kepler / केप्लर"],
        correct: 1
    },
    {
        id: 6,
        question: "Which is the coldest and smallest of all planets?",
        questionHindi: "सभी ग्रहों में सबसे ठंडा और सबसे छोटा कौन सा है?",
        options: ["Mercury / बुध", "Mars / मंगल", "Pluto / प्लूटो", "Uranus / अरुण"],
        correct: 2
    },
    {
        id: 7,
        question: "What is the total surface area of the Earth?",
        questionHindi: "पृथ्वी का कुल सतही क्षेत्रफल कितना है?",
        options: ["410,100,500 Sq.Kms", "510,100,500 Sq.Kms", "610,100,500 Sq.Kms", "710,100,500 Sq.Kms"],
        correct: 1
    },
    {
        id: 8,
        question: "What is the minimum escape velocity from the Earth?",
        questionHindi: "पृथ्वी से न्यूनतम पलायन वेग क्या है?",
        options: ["8 Km per Sec.", "15 Km per Sec.", "11 Km per Sec.", "5 Km per Sec."],
        correct: 2
    },
    {
        id: 9,
        question: "On which date is the Vernal Equinox?",
        questionHindi: "वसंत विषुव (Vernal Equinox) किस तिथि को होता है?",
        options: ["September 23", "March 21", "June 21", "December 22"],
        correct: 1
    },
    {
        id: 10,
        question: "How many minutes does it take for 1 degree of longitude to pass under the Sun?",
        questionHindi: "सूर्य के नीचे से 1 डिग्री देशांतर गुजरने में कितने मिनट लगते हैं?",
        options: ["2 minutes", "8 minutes", "4 minutes", "10 minutes"],
        correct: 2
    },
    {
        id: 11,
        question: "Which layer is the outer crust of the Earth?",
        questionHindi: "पृथ्वी की बाहरी परत कौन सी है?",
        options: ["Lithosphere / स्थलमंडल", "Atmosphere / वायुमंडल", "Core / कोर", "Mantle / मेंटल"],
        correct: 0
    },
    {
        id: 12,
        question: "Granite is an example of which type of rock?",
        questionHindi: "ग्रेनाइट किस प्रकार की चट्टान का उदाहरण है?",
        options: ["Sedimentary / अवसादी", "Metamorphic / कायांतरित", "Igneous / आग्नेय", "Volcanic / ज्वालामुखी"],
        correct: 2
    },
    {
        id: 13,
        question: "Which layer of the atmosphere contains the Ozone layer?",
        questionHindi: "वायुमंडल की किस परत में ओजोन परत होती है?",
        options: ["Troposphere / क्षोभमंडल", "Stratosphere / समतापमंडल", "Mesosphere / मध्यमंडल", "Ionosphere / आयनमंडल"],
        correct: 1
    },
    {
        id: 14,
        question: "What percentage of the air is composed of Nitrogen?",
        questionHindi: "हवा में नाइट्रोजन का प्रतिशत कितना है?",
        options: ["21%", "0.03%", "78%", "0.9%"],
        correct: 2
    },
    {
        id: 15,
        question: "Which is the greatest of all oceans?",
        questionHindi: "सभी महासागरों में सबसे बड़ा कौन सा है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Arctic / आर्कटिक", "Pacific / प्रशांत"],
        correct: 3
    },
    {
        id: 16,
        question: "What is the recorded depth of the Marianas Trench?",
        questionHindi: "मरियाना ट्रेंच की रिकॉर्ड की गई गहराई कितनी है?",
        options: ["20,000 feet", "35,800 feet", "40,500 feet", "12,500 feet"],
        correct: 1
    },
    {
        id: 17,
        question: "High tides occurring at new and full moon are called:",
        questionHindi: "अमावस्या और पूर्णिमा पर आने वाले उच्च ज्वार कहलाते हैं:",
        options: ["Neap tides / लघु ज्वार", "Ebb tides / भाटा", "Spring tides / स्प्रिंग ज्वार", "Low tides / निम्न ज्वार"],
        correct: 2
    },
    {
        id: 18,
        question: "Which place is known as the \"Dark Continent\"?",
        questionHindi: "किस स्थान को 'अंध महाद्वीप' कहा जाता है?",
        options: ["Asia / एशिया", "Australia / ऑस्ट्रेलिया", "Africa / अफ्रीका", "South America / दक्षिण अमेरिका"],
        correct: 2
    },
    {
        id: 19,
        question: "Which line demarcates India and Pakistan?",
        questionHindi: "भारत और पाकिस्तान को कौन सी रेखा सीमांकित करती है?",
        options: ["Durand Line / डूरंड रेखा", "Mac Mohan Line / मैकमोहन रेखा", "Radcliffe Line / रेडक्लिफ रेखा", "Maginot Line / मैजिनॉट रेखा"],
        correct: 2
    },
    {
        id: 20,
        question: "Who discovered the sea-route to India in 1498?",
        questionHindi: "1498 में भारत के समुद्री मार्ग की खोज किसने की थी?",
        options: ["Columbus / कोलंबस", "Vasco-da-Gama / वास्को-डि-गामा", "Robert Peary / रॉबर्ट पियरी", "Amundsen / अमुंडसेन"],
        correct: 1
    },
    {
        id: 21,
        question: "What is the smallest state in India by area?",
        questionHindi: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        options: ["Goa / गोवा", "Sikkim / सिक्किम", "Kerala / केरल", "Nagaland / नागालैंड"],
        correct: 0
    },
    {
        id: 22,
        question: "Which is the tallest animal?",
        questionHindi: "सबसे ऊँचा जानवर कौन सा है?",
        options: ["Elephant / हाथी", "Blue Whale / ब्लू व्हेल", "Giraffe / जिराफ", "Cheetah / चीता"],
        correct: 2
    },
    {
        id: 23,
        question: "Which bird is the smallest?",
        questionHindi: "सबसे छोटा पक्षी कौन सा है?",
        options: ["Ostrich / शुतुरमुर्ग", "Humming Bird / हमिंग बर्ड", "Albatross / अल्बाट्रॉस", "Nightingale / बुलबुल"],
        correct: 1
    },
    {
        id: 24,
        question: "The longest railway bridge in India is:",
        questionHindi: "भारत का सबसे लंबा रेलवे पुल है:",
        options: ["Sone Bridge / सोन ब्रिज", "Howrah Bridge / हावड़ा ब्रिज", "Pamban Bridge / पंबन ब्रिज", "Godavari Bridge / गोदावरी ब्रिज"],
        correct: 0
    },
    {
        id: 25,
        question: "Which is the largest continent?",
        questionHindi: "सबसे बड़ा महाद्वीप कौन सा है?",
        options: ["Africa / अफ्रीका", "Europe / यूरोप", "Asia / एशिया", "Australia / ऑस्ट्रेलिया"],
        correct: 2
    },
    {
        id: 26,
        question: "Which country is the largest in population?",
        questionHindi: "जनसंख्या में सबसे बड़ा देश कौन सा है?",
        options: ["India / भारत", "USA / अमेरिका", "China / चीन (As per traditional GK data)", "Russia / रूस"],
        correct: 2
    },
    {
        id: 27,
        question: "The longest dam in India is:",
        questionHindi: "भारत का सबसे लंबा बांध है:",
        options: ["Bhakra Nangal / भाखड़ा नांगल", "Hirakud Dam / हीराकुंड बांध", "Tehri Dam / टिहरी बांध", "Mettur Dam / मेट्टूर बांध"],
        correct: 1
    },
    {
        id: 28,
        question: "The largest desert in the world is:",
        questionHindi: "विश्व का सबसे बड़ा मरुस्थल है:",
        options: ["Gobi / गोबी", "Thar / थार", "Sahara / सहारा", "Antarctica / अंटार्कटिका"],
        correct: 2
    },
    {
        id: 29,
        question: "Which is the highest peak in the world?",
        questionHindi: "विश्व की सबसे ऊँची चोटी कौन सी है?",
        options: ["Godwin Austen / गॉडविन ऑस्टेन", "Kanchenjunga / कंचनजंगा", "Everest / एवरेस्ट", "Anaimudi / अनाइमुडी"],
        correct: 2
    },
    {
        id: 30,
        question: "Which ocean is the deepest and largest?",
        questionHindi: "कौन सा महासागर सबसे गहरा और सबसे बड़ा है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Pacific / प्रशांत", "Arctic / आर्कटिक"],
        correct: 2
    },
    {
        id: 31,
        question: "The hottest place in the world is:",
        questionHindi: "विश्व का सबसे गर्म स्थान है:",
        options: ["Barmer / बाड़मेर", "Azizia / अजीजिया", "Death Valley / डेथ वैली", "Jodhpur / जोधपुर"],
        correct: 1
    },
    {
        id: 32,
        question: "Which place records the heaviest rainfall in the world?",
        questionHindi: "विश्व में सर्वाधिक वर्षा कहाँ होती है?",
        options: ["Cherrapunji / चेरापूंजी", "Mawsynram / मौसिनराम", "Assam / असम", "Meghalaya / मेघालय"],
        correct: 1
    },
    {
        id: 33,
        question: "The longest river in the world is:",
        questionHindi: "विश्व की सबसे लंबी नदी है:",
        options: ["Amazon / अमेज़न", "Ganges / गंगा", "Nile / नील", "Brahmaputra / ब्रह्मपुत्र"],
        correct: 2
    },
    {
        id: 34,
        question: "Which is the longest wall in the world?",
        questionHindi: "विश्व की सबसे लंबी दीवार कौन सी है?",
        options: ["Berlin Wall / बर्लिन की दीवार", "Great Wall of China / चीन की महान दीवार", "Hadrian's Wall / हेड्रियन की दीवार", "Red Fort Wall / लाल किले की दीवार"],
        correct: 1
    },
    {
        id: 35,
        question: "What is the capital of Australia?",
        questionHindi: "ऑस्ट्रेलिया की राजधानी क्या है?",
        options: ["Sydney / सिडनी", "Melbourne / मेलबर्न", "Canberra / कैनबरा", "Perth / पर्थ"],
        correct: 2
    },
    {
        id: 36,
        question: "The currency of Japan is:",
        questionHindi: "जापान की मुद्रा है:",
        options: ["Yuan / युआन", "Won / वोन", "Yen / येन", "Rial / रियाल"],
        correct: 2
    },
    {
        id: 37,
        question: "Where is the Golden Temple located?",
        questionHindi: "स्वर्ण मंदिर कहाँ स्थित है?",
        options: ["Ludhiana / लुधियाना", "Amritsar / अमृतसर", "Jalandhar / जालंधर", "Patiala / पटियाला"],
        correct: 1
    },
    {
        id: 38,
        question: "The Jallianwala Bagh tragedy occurred on:",
        questionHindi: "जलियांवाला बाग त्रासदी हुई थी:",
        options: ["April 13, 1919", "August 15, 1947", "January 26, 1950", "October 2, 1869"],
        correct: 0
    },
    {
        id: 39,
        question: "Where is the Eiffel Tower located?",
        questionHindi: "एफिल टॉवर कहाँ स्थित है?",
        options: ["London / लंदन", "New York / न्यूयॉर्क", "Paris / पेरिस", "Rome / रोम"],
        correct: 2
    },
    {
        id: 40,
        question: "Which city is known as the \"Holy City\"?",
        questionHindi: "किस शहर को 'पवित्र शहर' के रूप में जाना जाता है?",
        options: ["Mecca / मक्का", "Jerusalem / यरूशलेम", "Varanasi / वाराणसी", "Rome / रोम"],
        correct: 1
    },
    {
        id: 41,
        question: "The state animal of India is:",
        questionHindi: "भारत का राष्ट्रीय पशु है:",
        options: ["Lion / शेर", "Elephant / हाथी", "Tiger / बाघ", "Peacock / मोर"],
        correct: 2
    },
    {
        id: 42,
        question: "The ratio of the width of the National Flag to its length is:",
        questionHindi: "राष्ट्रीय ध्वज की चौड़ाई और उसकी लंबाई का अनुपात है:",
        options: ["3:2", "2:3", "1:2", "4:3"],
        correct: 1
    },
    {
        id: 43,
        question: "Who composed the National Anthem \"Jana-gana-mana\"?",
        questionHindi: "\"जन-गण-मन\" की रचना किसने की थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sarojini Naidu / सरोजिनी नायडू", "Subhash Chandra Bose / सुभाष चंद्र बोस"],
        correct: 1
    },
    {
        id: 44,
        question: "The National Calendar commenced on:",
        questionHindi: "राष्ट्रीय कैलेंडर कब शुरू हुआ?",
        options: ["March 22, 1957", "August 15, 1947", "January 26, 1950", "April 1, 1951"],
        correct: 0
    },
    {
        id: 45,
        question: "Which schedule of the Constitution lists the official languages?",
        questionHindi: "संविधान की कौन सी अनुसूची आधिकारिक भाषाओं को सूचीबद्ध करती है?",
        options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
        correct: 1
    },
    {
        id: 46,
        question: "Which state is known as the \"Garden City of India\"?",
        questionHindi: "भारत का 'उद्यान शहर' किसे कहा जाता है?",
        options: ["Kolkata / कोलकाता", "Bangalore / बैंगलोर", "Chandigarh / चंडीगढ़", "Mysore / मैसूर"],
        correct: 1
    },
    {
        id: 47,
        question: "The largest state in India by area is:",
        questionHindi: "क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य है:",
        options: ["Uttar Pradesh / उत्तर प्रदेश", "Madhya Pradesh / मध्य प्रदेश", "Rajasthan / राजस्थान", "Maharashtra / महाराष्ट्र"],
        correct: 2
    },
    {
        id: 48,
        question: "What is the tenure of the President of India?",
        questionHindi: "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
        options: ["4 years", "6 years", "5 years", "10 years"],
        correct: 2
    },
    {
        id: 49,
        question: "The minimum age to become the President of India is:",
        questionHindi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु क्या है?",
        options: ["25 years", "30 years", "35 years", "18 years"],
        correct: 2
    },
    {
        id: 50,
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
        options: ["Prime Minister / प्रधानमंत्री", "President / राष्ट्रपति", "Vice-President / उपराष्ट्रपति", "Speaker / अध्यक्ष"],
        correct: 2
    },
    {
        id: 51,
        question: "A Money Bill can only originate in:",
        questionHindi: "धन विधेयक केवल कहाँ उत्पन्न हो सकता है?",
        options: ["Rajya Sabha / राज्यसभा", "Lok Sabha / लोकसभा", "Supreme Court / सुप्रीम कोर्ट", "Planning Commission / योजना आयोग"],
        correct: 1
    },
    {
        id: 52,
        question: "The retirement age for a Supreme Court judge is:",
        questionHindi: "सुप्रीम कोर्ट के न्यायाधीश की सेवानिवृत्ति की आयु है:",
        options: ["60 years", "62 years", "65 years", "70 years"],
        correct: 2
    },
    {
        id: 53,
        question: "Which writ means \"you should have the body\"?",
        questionHindi: "किस रिट का अर्थ है 'शरीर आपके पास होना चाहिए'?",
        options: ["Mandamus / परमादेश", "Quo Warranto / अधिकार पृच्छा", "Habeas Corpus / बंदी प्रत्यक्षीकरण", "Certiorari / उत्प्रेषण"],
        correct: 2
    },
    {
        id: 54,
        question: "The 42nd Amendment Act (1976) added which word to the Preamble?",
        questionHindi: "42वें संशोधन अधिनियम (1976) ने प्रस्तावना में कौन सा शब्द जोड़ा?",
        options: ["Sovereign / संप्रभु", "Socialist / समाजवादी", "Democratic / लोकतांत्रिक", "Republic / गणतंत्र"],
        correct: 1
    },
    {
        id: 55,
        question: "The Indus Valley Civilization flourished between:",
        questionHindi: "सिंधु घाटी सभ्यता कब फली-फूली?",
        options: ["1000-500 BC", "2000-1700 BC", "3000-2500 BC", "1500-1000 BC"],
        correct: 1
    },
    {
        id: 56,
        question: "Where was the \"Great Bath\" found?",
        questionHindi: "'विशाल स्नानागार' कहाँ पाया गया था?",
        options: ["Harappa / हड़प्पा", "Lothal / लोथल", "Mohen-jo-Daro / मोहनजोदड़ो", "Kalibangan / कालीबंगन"],
        correct: 2
    },
    {
        id: 57,
        question: "Siddhartha was the original name of:",
        questionHindi: "सिद्धार्थ किसका मूल नाम था?",
        options: ["Mahavira / महावीर", "Ashoka / अशोक", "Buddha / बुद्ध", "Kanishka / कनिष्क"],
        correct: 2
    },
    {
        id: 58,
        question: "Who was the founder of the Maurya Dynasty?",
        questionHindi: "मौर्य वंश का संस्थापक कौन था?",
        options: ["Bindusara / बिन्दुसार", "Ashoka / अशोक", "Chandra Gupta Maurya / चंद्रगुप्त मौर्य", "Kanishka / कनिष्क"],
        correct: 2
    },
    {
        id: 59,
        question: "Which king is known as the \"Indian Napoleon\"?",
        questionHindi: "किस राजा को 'भारतीय नेपोलियन' कहा जाता है?",
        options: ["Ashoka / अशोक", "Samudra Gupta / समुद्रगुप्त", "Chandra Gupta II / चंद्रगुप्त द्वितीय", "Akbar / अकबर"],
        correct: 1
    },
    {
        id: 60,
        question: "The First Battle of Panipat was fought in:",
        questionHindi: "पानीपत की पहली लड़ाई लड़ी गई थी:",
        options: ["1556", "1761", "1526", "1191"],
        correct: 2
    },
    {
        id: 61,
        question: "Who founded the religion \"Din-i-Ilahi\"?",
        questionHindi: "'दीन-ए-इलाही' धर्म की स्थापना किसने की?",
        options: ["Babar / बाबर", "Akbar / अकबर", "Shah Jahan / शाहजहाँ", "Aurangzeb / औरंगजेब"],
        correct: 1
    },
    {
        id: 62,
        question: "Who was the first Governor-General of Free India?",
        questionHindi: "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
        options: ["C. Rajagopalachari / सी. राजगोपालाचारी", "Lord Mountbatten / लॉर्ड माउंटबेटन", "Lord Canning / लॉर्ड कैनिंग", "Warren Hastings / वारेन हेस्टिंग्स"],
        correct: 1
    },
    {
        id: 63,
        question: "The Jallianwala Bagh massacre was ordered by:",
        questionHindi: "जलियांवाला बाग हत्याकांड का आदेश किसने दिया था?",
        options: ["Lord Curzon / लॉर्ड कर्जन", "General Dyer / जनरल डायर", "Lord Chelmsford / लॉर्ड चेम्सफोर्ड", "Robert Clive / रॉबर्ट क्लाइव"],
        correct: 1
    },
    {
        id: 64,
        question: "Who gave the slogan \"Do or Die\"?",
        questionHindi: "'करो या मरो' का नारा किसने दिया?",
        options: ["Nehru / नेहरू", "Bhagat Singh / भगत सिंह", "Mahatma Gandhi / महात्मा गांधी", "Subhash Chandra Bose / सुभाष चंद्र बोस"],
        correct: 2
    },
    {
        id: 65,
        question: "Archimedes' Principle deals with:",
        questionHindi: "आर्कमिडीज का सिद्धांत संबंधित है:",
        options: ["Gravity / गुरुत्वाकर्षण", "Upward thrust in liquid / तरल में ऊपर की ओर उछाल", "Laws of Motion / गति के नियम", "Electricity / बिजली"],
        correct: 1
    },
    {
        id: 66,
        question: "Which instrument measures atmospheric pressure?",
        questionHindi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Ammeter / एमीटर", "Barometer / बैरोमीटर", "Hygrometer / हाइग्रोमीटर", "Thermometer / थर्मामीटर"],
        correct: 1
    },
    {
        id: 67,
        question: "Knot is a unit for measuring:",
        questionHindi: "नॉट (Knot) किसकी माप की इकाई है?",
        options: ["Sound / ध्वनि", "Light / प्रकाश", "Speed of ships / जहाजों की गति", "Depth of water / पानी की गहराई"],
        correct: 2
    },
    {
        id: 68,
        question: "Who discovered Penicillin?",
        questionHindi: "पेनिसिलिन की खोज किसने की?",
        options: ["Louis Pasteur / लुई पाश्चर", "Alexander Fleming / अलेक्जेंडर फ्लेमिंग", "Ronald Ross / रोनाल्ड रॉस", "Edward Jenner / एडवर्ड जेनर"],
        correct: 1
    },
    {
        id: 69,
        question: "Deficiency of Vitamin C causes:",
        questionHindi: "विटामिन सी की कमी से होता है:",
        options: ["Rickets / रिकेट्स", "Beriberi / बेरीबेरी", "Scurvy / स्कर्वी", "Night Blindness / रतौंधी"],
        correct: 2
    },
    {
        id: 70,
        question: "Goitre is caused by the deficiency of:",
        questionHindi: "घेंघा रोग किसकी कमी से होता है:",
        options: ["Iron / लोहा", "Calcium / कैल्शियम", "Iodine / आयोडीन", "Sodium / सोडियम"],
        correct: 2
    },
    {
        id: 71,
        question: "Which virus is responsible for AIDS?",
        questionHindi: "एड्स के लिए कौन सा वायरस जिम्मेदार है?",
        options: ["Myxovirus", "HIV (AIDS virus)", "Poliovirus", "Varicella"],
        correct: 1
    },
    {
        id: 72,
        question: "Why does the sky appear blue?",
        questionHindi: "आकाश नीला क्यों दिखाई देता है?",
        options: ["Reflection / परावर्तन", "Refraction / अपवर्तन", "Scattering of light / प्रकाश का प्रकीर्णन", "Polarization / ध्रुवीकरण"],
        correct: 2
    },
    {
        id: 73,
        question: "Which animal is called the \"Ship of the Desert\"?",
        questionHindi: "किस जानवर को 'रेगिस्तान का जहाज' कहा जाता है?",
        options: ["Horse / घोड़ा", "Camel / ऊंट", "Elephant / हाथी", "Donkey / गधा"],
        correct: 1
    },
    {
        id: 74,
        question: "The fastest land animal is:",
        questionHindi: "सबसे तेज़ दौड़ने वाला ज़मीनी जानवर है:",
        options: ["Lion / शेर", "Cheetah / चीता", "Tiger / बाघ", "Leopard / तेंदुआ"],
        correct: 1
    },
    {
        id: 75,
        question: "Which is the largest existing sea animal?",
        questionHindi: "वर्तमान में सबसे बड़ा समुद्री जानवर कौन सा है?",
        options: ["Shark / शार्क", "Octopus / ऑक्टोपस", "Blue Whale / ब्लू व्हेल", "Dolphin / डॉल्फिन"],
        correct: 2
    },
    {
        id: 76,
        question: "Where is the Central Drug Research Institute located?",
        questionHindi: "केंद्रीय औषधि अनुसंधान संस्थान कहाँ स्थित है?",
        options: ["Delhi / दिल्ली", "Kolkata / कोलकाता", "Lucknow / लखनऊ", "Mumbai / मुंबई"],
        correct: 2
    },
    {
        id: 77,
        question: "India's first satellite was named:",
        questionHindi: "भारत के पहले उपग्रह का नाम क्या था?",
        options: ["Bhaskara / भास्कर", "Rohini / रोहिणी", "Aryabhata / आर्यभट्ट", "Insat / इनसैट"],
        correct: 2
    },
    {
        id: 78,
        question: "Who was the first Indian to travel in space?",
        questionHindi: "अंतरिक्ष में यात्रा करने वाले पहले भारतीय कौन थे?",
        options: ["Kalpana Chawla / कल्पना चावला", "Rakesh Sharma / राकेश शर्मा", "Sunita Williams / सुनीता विलियम्स", "Ravish Malhotra / रवीश मल्होत्रा"],
        correct: 1
    },
    {
        id: 79,
        question: "Bharatnatyam is the classical dance of which state?",
        questionHindi: "भरतनाट्यम किस राज्य का शास्त्रीय नृत्य है?",
        options: ["Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु", "Orissa / उड़ीसा"],
        correct: 2
    },
    {
        id: 80,
        question: "Which was the first newspaper in India?",
        questionHindi: "भारत का पहला समाचार पत्र कौन सा था?",
        options: ["Times of India", "Bengal Gazette", "The Hindu", "Samachar Darpan"],
        correct: 1
    },
    {
        id: 81,
        question: "Who wrote the book \"The Discovery of India\"?",
        questionHindi: "'द डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी थी?",
        options: ["Mahatma Gandhi / महात्मा गांधी", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Sardar Patel / सरदार पटेल", "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर"],
        correct: 1
    },
    {
        id: 82,
        question: "The first woman Prime Minister of a country was:",
        questionHindi: "किसी देश की पहली महिला प्रधानमंत्री थीं:",
        options: ["Indira Gandhi / इंदिरा गांधी", "Margaret Thatcher / मार्गरेट थेचर", "S. Bandaranaike / एस. भंडारनायके", "Benazir Bhutto / बेनजीर भुट्टो"],
        correct: 2
    },
    {
        id: 83,
        question: "Who was the first person to land on the Moon?",
        questionHindi: "चंद्रमा पर उतरने वाला पहला व्यक्ति कौन था?",
        options: ["Yuri Gagarin / यूरी गागरिन", "Neil Armstrong / नील आर्मस्ट्रांग", "Edwin Aldrin / एडविन एल्ड्रिन", "Michael Collins / माइकल कोलिन्स"],
        correct: 1
    },
    {
        id: 84,
        question: "The first Five-Year Plan in India was launched in:",
        questionHindi: "भारत में पहली पंचवर्षीय योजना शुरू की गई थी:",
        options: ["1947", "1950", "1951", "1956"],
        correct: 2
    },
    {
        id: 85,
        question: "When did the United Nations officially come into existence?",
        questionHindi: "संयुक्त राष्ट्र आधिकारिक तौर पर कब अस्तित्व में आया?",
        options: ["Oct 24, 1944", "Oct 24, 1945", "June 26, 1945", "Aug 15, 1947"],
        correct: 1
    },
    {
        id: 86,
        question: "How many permanent members are in the UN Security Council?",
        questionHindi: "संयुक्त राष्ट्र सुरक्षा परिषद में कितने स्थायी सदस्य हैं?",
        options: ["5", "10", "15", "20"],
        correct: 0
    },
    {
        id: 87,
        question: "Which vitamin is synthesized by the body in the presence of sunlight?",
        questionHindi: "सूर्य के प्रकाश की उपस्थिति में शरीर द्वारा किस विटामिन का संश्लेषण किया जाता है?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
    },
    {
        id: 88,
        question: "Who is known as the \"Iron Man of India\"?",
        questionHindi: "\"भारत के लौह पुरुष\" के रूप में किसे जाना जाता है?",
        options: ["Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Bhagat Singh / भगत सिंह", "Lala Lajpat Rai / लाला लाजपत राय"],
        correct: 0
    },
    {
        id: 89,
        question: "The headquarters of ISRO is in:",
        questionHindi: "इसरो (ISRO) का मुख्यालय कहाँ है?",
        options: ["Mumbai / मुंबई", "New Delhi / नई दिल्ली", "Bangalore / बैंगलोर", "Chennai / चेन्नई"],
        correct: 2
    },
    {
        id: 90,
        question: "Which instrument is used to measure the purity of milk?",
        questionHindi: "दूध की शुद्धता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Hydrometer / हाइड्रोमीटर", "Lactometer / लैक्टोमीटर", "Barometer / बैरोमीटर", "Thermometer / थर्मामीटर"],
        correct: 1
    },
    {
        id: 91,
        question: "Who was the President of the Constituent Assembly?",
        questionHindi: "संविधान सभा के अध्यक्ष कौन थे?",
        options: ["Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Sardar Patel / सरदार पटेल"],
        correct: 1
    },
    {
        id: 92,
        question: "The \"Quit India\" resolution was passed in:",
        questionHindi: "'भारत छोड़ो' प्रस्ताव कब पारित किया गया था?",
        options: ["1930", "1942", "1919", "1947"],
        correct: 1
    },
    {
        id: 93,
        question: "What is the unit of electrical resistance?",
        questionHindi: "विद्युत प्रतिरोध की इकाई क्या है?",
        options: ["Volt / वोल्ट", "Ampere / एम्पीयर", "Ohm / ओम", "Watt / वाट"],
        correct: 2
    },
    {
        id: 94,
        question: "Who discovered America in 1492?",
        questionHindi: "1492 में अमेरिका की खोज किसने की थी?",
        options: ["Vasco-da-Gama / वास्को-डि-गामा", "Christopher Columbus / क्रिस्टोफर कोलंबस", "Magellan / मैगलन", "Robert Peary / रॉबर्ट पियरी"],
        correct: 1
    },
    {
        id: 95,
        question: "Which planet is known as the \"Red Planet\"?",
        questionHindi: "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        options: ["Venus / शुक्र", "Mars / मंगल", "Jupiter / बृहस्पति", "Saturn / शनि"],
        correct: 1
    },
    {
        id: 96,
        question: "The Battle of Plassey was fought in:",
        questionHindi: "प्लासी का युद्ध लड़ा गया था:",
        options: ["1526", "1757", "1764", "1857"],
        correct: 1
    },
    {
        id: 97,
        question: "Who founded the Arya Samaj?",
        questionHindi: "आर्य समाज की स्थापना किसने की?",
        options: ["Raja Rammohan Roy / राजा राममोहन राय", "Swami Dayanand Saraswati / स्वामी दयानंद सरस्वती", "Swami Vivekananda / स्वामी विवेकानंद", "Ishwar Chandra Vidyasagar / ईश्वर चंद्र विद्यासागर"],
        correct: 1
    },
    {
        id: 98,
        question: "Which is the longest epic in the world?",
        questionHindi: "विश्व का सबसे लंबा महाकाव्य कौन सा है?",
        options: ["Ramayana / रामायण", "Mahabharata / महाभारत", "Iliad / इलियड", "Odyssey / ओडिसी"],
        correct: 1
    },
    {
        id: 99,
        question: "The first Indian woman to scale Mount Everest was:",
        questionHindi: "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला थीं:",
        options: ["Santosh Yadav / संतोष यादव", "Bachendri Pal / बछेंद्री पाल", "Arati Saha / आरती साहा", "Dickey Dolma / डिकी डोलमा"],
        correct: 1
    },
    {
        id: 100,
        question: "Who was the first Viceroy of India?",
        questionHindi: "भारत के प्रथम वायसराय कौन थे?",
        options: ["Warren Hastings / वारेन हेस्टिंग्स", "Lord Canning / लॉर्ड कैनिंग", "Lord Mountbatten / लॉर्ड माउंटबेटन", "Robert Clive / रॉबर्ट क्लाइव"],
        correct: 1
    },
    {
        id: 101,
        question: "Which represents the 'Pink City' of India?",
        questionHindi: "भारत का 'गुलाबी शहर' कौन सा है?",
        options: ["Udaipur / उदयपुर", "Jaipur / जयपुर", "Jodhpur / जोधपुर", "Bikaner / बीकानेर"],
        correct: 1
    },
    {
        id: 102,
        question: "What is the chemical symbol for Gold?",
        questionHindi: "सोने का रासायनिक प्रतीक क्या है?",
        options: ["Ag", "Au", "Fe", "Cu"],
        correct: 1
    },
    {
        id: 103,
        question: "Which is the largest organ in the human body?",
        questionHindi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        options: ["Liver / लिवर", "Heart / दिल", "Skin / त्वचा", "Brain / दिमाग"],
        correct: 2
    },
    {
        id: 104,
        question: "Who wrote the epic 'Ramcharitmanas'?",
        questionHindi: "'रामचरितमानस' महाकाव्य किसने लिखा था?",
        options: ["Valmiki / वाल्मीकि", "Ved Vyas / वेद व्यास", "Tulsidas / तुलसीदास", "Kabir / कबीर"],
        correct: 2
    },
    {
        id: 105,
        question: "Study of birds is called:",
        questionHindi: "पक्षियों के अध्ययन को क्या कहा जाता है:",
        options: ["Zoology / जूलॉजी", "Ornithology / ओर्निथोलॉजी", "Entomology / एंटोमोलॉजी", "Botany / वनस्पति विज्ञान"],
        correct: 1
    },
    {
        id: 106,
        question: "Which gas is filled in electric bulbs?",
        questionHindi: "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
        options: ["Nitrogen / नाइट्रोजन", "Hydrogen / हाइड्रोजन", "Carbon Dioxide / कार्बन डाइऑक्साइड", "Oxygen / ऑक्सीजन"],
        correct: 0
    },
    {
        id: 107,
        question: "Who is known as the 'Flying Sikh'?",
        questionHindi: "'फ्लाइंग सिख' के नाम से किसे जाना जाता है?",
        options: ["Kapil Dev / कपिल देव", "Milkha Singh / मिल्खा सिंह", "P.T. Usha / पी.टी. उषा", "Dhyan Chand / ध्यानचंद"],
        correct: 1
    },
    {
        id: 108,
        question: "What is the capital of Japan?",
        questionHindi: "जापान की राजधानी क्या है?",
        options: ["Beijing / बीजिंग", "Seoul / सियोल", "Tokyo / टोक्यो", "Bangkok / बैंकॉक"],
        correct: 2
    },
    {
        id: 109,
        question: "Richter scale is used to measure:",
        questionHindi: "रिक्टर स्केल का उपयोग मापने के लिए किया जाता है:",
        options: ["Wind Speed / हवा की गति", "Earthquake Intensity / भूकंप की तीव्रता", "Temperature / तापमान", "Depth of Ocean / समुद्र की गहराई"],
        correct: 1
    },
    {
        id: 110,
        question: "Which is the hardest natural substance on Earth?",
        questionHindi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
        options: ["Iron / लोहा", "Gold / सोना", "Diamond / हीरा", "Platinum / प्लेटिनम"],
        correct: 2
    },
    {
        id: 111,
        question: "Who invented the Telephone?",
        questionHindi: "टेलीफोन का आविष्कार किसने किया?",
        options: ["Edison / एडिसन", "Graham Bell / ग्राहम बेल", "Marconi / मारकोनी", "Newton / न्यूटन"],
        correct: 1
    },
    {
        id: 112,
        question: "Which is the largest fresh water lake in India?",
        questionHindi: "भारत की सबसे बड़ी ताजे पानी की झील कौन सी है?",
        options: ["Dal Lake / डल झील", "Wular Lake / वुलर झील", "Chilka Lake / चिल्का झील", "Sambhar Lake / सांभर झील"],
        correct: 1
    },
    {
        id: 113,
        question: "How many bones are there in an adult human body?",
        questionHindi: "एक वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
        options: ["206", "208", "300", "205"],
        correct: 0
    },
    {
        id: 114,
        question: "National Flower of India is:",
        questionHindi: "भारत का राष्ट्रीय फूल है:",
        options: ["Rose / गुलाब", "Lotus / कमल", "Sunflower / सूरजमुखी", "Lily / लिली"],
        correct: 1
    },
    {
        id: 115,
        question: "Who was the first woman President of India?",
        questionHindi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        options: ["Indira Gandhi / इंदिरा गांधी", "Pratibha Patil / प्रतिभा पाटिल", "Sarojini Naidu / सरोजिनी नायडू", "Sushma Swaraj / सुषमा स्वराज"],
        correct: 1
    },
    {
        id: 116,
        question: "What is the boiling point of water?",
        questionHindi: "पानी का क्वथनांक क्या है?",
        options: ["100°C", "90°C", "110°C", "80°C"],
        correct: 0
    },
    {
        id: 117,
        question: "Which blood group is known as the 'Universal Donor'?",
        questionHindi: "किस रक्त समूह को 'सार्वभौमिक दाता' के रूप में जाना जाता है?",
        options: ["A+", "B+", "AB+", "O-"],
        correct: 3
    },
    {
        id: 118,
        question: "The currency of Bangladesh is:",
        questionHindi: "बांग्लादेश की मुद्रा है:",
        options: ["Rupee / रुपया", "Taka / टका", "Yen / येन", "Dollar / डॉलर"],
        correct: 1
    },
    {
        id: 119,
        question: "Which planet is known as the 'Blue Planet'?",
        questionHindi: "किस ग्रह को 'नीला ग्रह' कहा जाता है?",
        options: ["Earth / पृथ्वी", "Neptune / वरुण", "Jupiter / बृहस्पति", "Mars / मंगल"],
        correct: 0
    },
    {
        id: 120,
        question: "Full form of Wi-Fi is:",
        questionHindi: "Wi-Fi का पूर्ण रूप है:",
        options: ["Wireless Fidelity", "Wireless Finance", "Wired Fidelity", "Wireless Field"],
        correct: 0
    },
    {
        id: 121,
        question: "What is the temperature of the Sun's photosphere?",
        questionHindi: "सूर्य के प्रकाशमंडल (photosphere) का तापमान कितना है?",
        options: ["6,000 K", "5,770 K", "10,000 K", "4,500 K"],
        correct: 1
    },
    {
        id: 122,
        question: "What percentage of the Sun consists of Hydrogen?",
        questionHindi: "सूर्य में हाइड्रोजन का प्रतिशत कितना है?",
        options: ["50%", "90%", "71%", "25%"],
        correct: 2
    },
    {
        id: 123,
        question: "How long do the rays of the Sun take to reach the Earth?",
        questionHindi: "सूर्य की किरणों को पृथ्वी तक पहुँचने में कितना समय लगता है?",
        options: ["5 minutes", "10 minutes", "About 8 minutes / लगभग 8 मिनट", "2 minutes"],
        correct: 2
    },
    {
        id: 124,
        question: "Which planet is known as the brightest of all planets?",
        questionHindi: "किस ग्रह को सभी ग्रहों में सबसे चमकीला माना जाता है?",
        options: ["Mars / मंगल", "Jupiter / बृहस्पति", "Venus / शुक्र", "Saturn / शनि"],
        correct: 2
    },
    {
        id: 125,
        question: "Which planet is also known as the 'Evening Star'?",
        questionHindi: "किस ग्रह को 'सांझ का तारा' भी कहा जाता है?",
        options: ["Mercury / बुध", "Venus / शुक्र", "Mars / मंगल", "Jupiter / बृहस्पति"],
        correct: 1
    },
    {
        id: 126,
        question: "What is the equatorial diameter of the Earth?",
        questionHindi: "पृथ्वी का भूमध्यरेखीय व्यास कितना है?",
        options: ["10,000 Km", "15,000 Km", "12,756 Km", "6,400 Km"],
        correct: 2
    },
    {
        id: 127,
        question: "How long does Mars take to complete one revolution around the Sun?",
        questionHindi: "मंगल को सूर्य की एक परिक्रमा पूरी करने में कितना समय लगता है?",
        options: ["365 days / 365 दिन", "687 days / 687 दिन", "88 days / 88 दिन", "12 years / 12 वर्ष"],
        correct: 1
    },
    {
        id: 128,
        question: "Which is the largest planet in the solar system?",
        questionHindi: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        options: ["Earth / पृथ्वी", "Jupiter / बृहस्पति", "Saturn / शनि", "Uranus / अरुण"],
        correct: 1
    },
    {
        id: 129,
        question: "Who discovered the planet Saturn?",
        questionHindi: "शनि ग्रह की खोज किसने की थी?",
        options: ["Newton / न्यूटन", "Copernicus / कोपरनिकस", "Galileo / गैलीलियो", "Kepler / केप्लर"],
        correct: 2
    },
    {
        id: 130,
        question: "How many years does Uranus take for one revolution?",
        questionHindi: "अरुण (Uranus) को एक परिक्रमा में कितने वर्ष लगते हैं?",
        options: ["12 years", "165 years", "29 years", "84 years"],
        correct: 3
    },
    {
        id: 131,
        question: "Which is the coldest and smallest of all planets?",
        questionHindi: "सभी ग्रहों में सबसे ठंडा और सबसे छोटा कौन सा है?",
        options: ["Mercury / बुध", "Venus / शुक्र", "Pluto / प्लूटो", "Mars / मंगल"],
        correct: 2
    },
    {
        id: 132,
        question: "What is the total surface area of the Earth?",
        questionHindi: "पृथ्वी का कुल सतही क्षेत्रफल कितना है?",
        options: ["510,100,500 Sq.Kms", "150,000,000 Sq.Kms", "360,000,000 Sq.Kms", "400,000,000 Sq.Kms"],
        correct: 0
    },
    {
        id: 133,
        question: "What is the minimum escape velocity from the Earth?",
        questionHindi: "पृथ्वी से न्यूनतम पलायन वेग क्या है?",
        options: ["9.8 Km/s", "11 Km/s", "5 Km/s", "20 Km/s"],
        correct: 1
    },
    {
        id: 134,
        question: "On which date does the Vernal Equinox occur?",
        questionHindi: "वसंत विषुव (Vernal Equinox) किस तिथि को होता है?",
        options: ["June 21", "December 22", "September 23", "March 21"],
        correct: 3
    },
    {
        id: 135,
        question: "How many minutes does it take for 1 degree of longitude to pass under the Sun?",
        questionHindi: "सूर्य के नीचे से 1 डिग्री देशांतर गुजरने में कितने मिनट लगते हैं?",
        options: ["2 minutes", "15 minutes", "4 minutes", "60 minutes"],
        correct: 2
    },
    {
        id: 136,
        question: "Which meridian is numbered 0°?",
        questionHindi: "किस मध्याह्न रेखा (meridian) को 0° क्रमांक दिया गया है?",
        options: ["Equator / भूमध्य रेखा", "Greenwich / ग्रीनविच", "International Date Line / अंतर्राष्ट्रीय तिथि रेखा", "Cancer / कर्क रेखा"],
        correct: 1
    },
    {
        id: 137,
        question: "What is the name of the outer crust of the Earth?",
        questionHindi: "पृथ्वी की बाहरी परत का क्या नाम है?",
        options: ["Core / कोर", "Mantle / मेंटल", "Lithosphere / स्थलमंडल", "Hydrosphere / जलमंडल"],
        correct: 2
    },
    {
        id: 138,
        question: "Granite is an example of which type of rock?",
        questionHindi: "ग्रेनाइट किस प्रकार की चट्टान का उदाहरण है?",
        options: ["Sedimentary / अवसादी", "Metamorphic / कायांतरित", "Igneous / आग्नेय", "Fossil / जीवाश्म"],
        correct: 2
    },
    {
        id: 139,
        question: "Which gas makes up 78% of the Earth's atmosphere?",
        questionHindi: "पृथ्वी के वायुमंडल में 78% कौन सी गैस है?",
        options: ["Oxygen / ऑक्सीजन", "Carbon Dioxide / कार्बन डाइऑक्साइड", "Nitrogen / नाइट्रोजन", "Argon / आर्गन"],
        correct: 2
    },
    {
        id: 140,
        question: "Which layer of the atmosphere contains the Ozone layer?",
        questionHindi: "वायुमंडल की किस परत में ओजोन परत स्थित है?",
        options: ["Troposphere / क्षोभमंडल", "Mesosphere / मध्यमंडल", "Stratosphere / समतापमंडल", "Exosphere / बहिर्मंडल"],
        correct: 2
    },
    {
        id: 141,
        question: "What is the recorded depth of the Marianas Trench?",
        questionHindi: "मरियाना ट्रेंच की रिकॉर्ड की गई गहराई कितनी है?",
        options: ["10,000 feet", "25,000 feet", "35,800 feet", "50,000 feet"],
        correct: 2
    },
    {
        id: 142,
        question: "Which ocean covers one-third of the Earth's surface?",
        questionHindi: "कौन सा महासागर पृथ्वी की सतह के एक-तिहाई हिस्से को कवर करता है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Pacific / प्रशांत", "Arctic / आर्कटिक"],
        correct: 2
    },
    {
        id: 143,
        question: "High tides occurring at new and full moon are called:",
        questionHindi: "अमावस्या और पूर्णिमा पर आने वाले उच्च ज्वार कहलाते हैं:",
        options: ["Neap tides / लघु ज्वार", "Spring tides / स्प्रिंग ज्वार", "Ebb tides / भाटा", "Low tides / निम्न ज्वार"],
        correct: 1
    },
    {
        id: 144,
        question: "Which continent is known as the 'Dark Continent'?",
        questionHindi: "किस महाद्वीप को 'अंध महाद्वीप' कहा जाता है?",
        options: ["Asia / एशिया", "Africa / अफ्रीका", "South America / दक्षिण अमेरिका", "Australia / ऑस्ट्रेलिया"],
        correct: 1
    },
    {
        id: 145,
        question: "Which country is known as the 'Land of the Rising Sun'?",
        questionHindi: "किस देश को 'उगते सूरज की भूमि' कहा जाता है?",
        options: ["Norway / नॉर्वे", "Japan / जापान", "New Zealand / न्यूजीलैंड", "Thailand / थाईलैंड"],
        correct: 1
    },
    {
        id: 146,
        question: "Which line demarcates India and Pakistan?",
        questionHindi: "भारत और पाकिस्तान के बीच कौन सी सीमा रेखा है?",
        options: ["MacMahon Line / मैकमोहन रेखा", "Durand Line / डूरंड रेखा", "Radcliffe Line / रेडक्लिफ रेखा", "38th Parallel / 38वीं समानांतर"],
        correct: 2
    },
    {
        id: 147,
        question: "Who discovered the sea-route to India in 1498?",
        questionHindi: "1498 में भारत के समुद्री मार्ग की खोज किसने की थी?",
        options: ["Columbus / कोलंबस", "Magellan / मैगलन", "Vasco-da-Gama / वास्को-डि-गामा", "Cook / कुक"],
        correct: 2
    },
    {
        id: 148,
        question: "Who designed the Suez Canal?",
        questionHindi: "स्वेज नहर का डिजाइन किसने तैयार किया था?",
        options: ["Eiffel / एफिल", "Ferdinand de Lesseps / फर्डिनेंड डी लेसेप्स", "Lutyens / लुटियंस", "Curzon / कर्जन"],
        correct: 1
    },
    {
        id: 149,
        question: "What is the name of the Parliament of Israel?",
        questionHindi: "इजराइल की संसद का नाम क्या है?",
        options: ["Diet / डाइट", "Duma / ड्यूमा", "Knesset / नेसेट", "Congress / कांग्रेस"],
        correct: 2
    },
    {
        id: 150,
        question: "What is the national emblem of Australia?",
        questionHindi: "ऑस्ट्रेलिया का राष्ट्रीय प्रतीक क्या है?",
        options: ["Kiwi / कीवी", "Eagle / ईगल", "Kangaroo / कंगारू", "Lion / शेर"],
        correct: 2
    },
    {
        id: 151,
        question: "Which symbol is used for Family Planning in India?",
        questionHindi: "भारत में परिवार नियोजन के लिए किस प्रतीक का उपयोग किया जाता है?",
        options: ["Red Cross / रेड क्रॉस", "Red Triangle / लाल त्रिकोण", "White Flag / सफेद झंडा", "Blue Wheel / नीला चक्र"],
        correct: 1
    },
    {
        id: 152,
        question: "Which is the largest archipelago in the world?",
        questionHindi: "विश्व का सबसे बड़ा द्वीप समूह (archipelago) कौन सा है?",
        options: ["Japan / जापान", "Philippines / फिलीपींस", "Indonesia / इंडोनेशिया", "Maldives / मालदीव"],
        correct: 2
    },
    {
        id: 153,
        question: "Which state is the smallest in area in India?",
        questionHindi: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        options: ["Sikkim / सिक्किम", "Goa / गोवा", "Tripura / त्रिपुरा", "Kerala / केरल"],
        correct: 1
    },
    {
        id: 154,
        question: "Which is the tallest animal in the world?",
        questionHindi: "विश्व का सबसे ऊँचा जानवर कौन सा है?",
        options: ["Elephant / हाथी", "Camel / ऊंट", "Giraffe / जिराफ", "Ostrich / शुतुरमुर्ग"],
        correct: 2
    },
    {
        id: 155,
        question: "Which is the smallest bird?",
        questionHindi: "सबसे छोटा पक्षी कौन सा है?",
        options: ["Sparrow / गौरैया", "Humming Bird / हमिंग बर्ड", "Penguin / पेंगुइन", "Kiwi / कीवी"],
        correct: 1
    },
    {
        id: 156,
        question: "Which is the longest railway bridge in India?",
        questionHindi: "भारत का सबसे लंबा रेलवे पुल कौन सा है?",
        options: ["Howrah Bridge", "Sone Bridge (Bihar) / सोन ब्रिज", "Pamban Bridge", "Bogibeel Bridge"],
        correct: 1
    },
    {
        id: 157,
        question: "Which is the largest continent?",
        questionHindi: "सबसे बड़ा महाद्वीप कौन सा है?",
        options: ["Africa / अफ्रीका", "North America / उत्तरी अमेरिका", "Asia / एशिया", "Antarctica / अंटार्कटिका"],
        correct: 2
    },
    {
        id: 158,
        question: "Which country has the largest population?",
        questionHindi: "सबसे अधिक जनसंख्या वाला देश कौन सा है?",
        options: ["India / भारत", "USA / अमेरिका", "China / चीन", "Russia / रूस"],
        correct: 2
    },
    {
        id: 159,
        question: "Which is the longest epic in the world?",
        questionHindi: "विश्व का सबसे लंबा महाकाव्य कौन सा है?",
        options: ["Ramayana / रामायण", "Mahabharata / महाभारत", "Iliad / इलियड", "Odyssey / ओडिसी"],
        correct: 1
    },
    {
        id: 160,
        question: "Where is the highest filling station (petrol pump) located?",
        questionHindi: "सबसे ऊँचा फिलिंग स्टेशन (पेट्रोल पंप) कहाँ स्थित है?",
        options: ["Shimla / शिमला", "Leh / लेह", "Srinagar / श्रीनगर", "Kathmandu / काठमांडू"],
        correct: 1
    },
    {
        id: 161,
        question: "Which is the largest gulf in the world?",
        questionHindi: "विश्व की सबसे बड़ी खाड़ी कौन सी है?",
        options: ["Persian Gulf / फारस की खाड़ी", "Gulf of Kutch / कच्छ की खाड़ी", "Gulf of Mexico / मैक्सिको की खाड़ी", "Bay of Bengal / बंगाल की खाड़ी"],
        correct: 2
    },
    {
        id: 162,
        question: "Which is the deepest lake in the world?",
        questionHindi: "विश्व की सबसे गहरी झील कौन सी है?",
        options: ["Superior / सुपीरियर", "Victoria / विक्टोरिया", "Lake Baikal / बैकाल झील", "Caspian Sea / कैस्पियन सागर"],
        correct: 2
    },
    {
        id: 163,
        question: "Which is the highest peak in the world?",
        questionHindi: "विश्व की सबसे ऊँची चोटी कौन सी है?",
        options: ["K2 / के2", "Kangchenjunga / कंचनजंगा", "Everest / एवरेस्ट", "Makalu / मकालू"],
        correct: 2
    },
    {
        id: 164,
        question: "Which is the hottest place in the world?",
        questionHindi: "विश्व का सबसे गर्म स्थान कौन सा है?",
        options: ["Sahara / सहारा", "Death Valley / डेथ वैली", "Azizia / अजीजिया", "Thar / थार"],
        correct: 2
    },
    {
        id: 165,
        question: "Which place records the heaviest rainfall in the world?",
        questionHindi: "विश्व में सर्वाधिक वर्षा कहाँ दर्ज की जाती है?",
        options: ["Cherrapunji / चेरापूंजी", "Mawsynram / मौसिनराम", "London / लंदन", "Amazon / अमेज़न"],
        correct: 1
    },
    {
        id: 166,
        question: "Which planet is known as the 'Red Planet'?",
        questionHindi: "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        options: ["Venus / शुक्र", "Jupiter / बृहस्पति", "Mars / मंगल", "Saturn / शनि"],
        correct: 2
    },
    {
        id: 167,
        question: "Which is the longest river in the world?",
        questionHindi: "विश्व की सबसे लंबी नदी कौन सी है?",
        options: ["Amazon / अमेज़न", "Ganges / गंगा", "Nile / नील", "Yangtze / यांग्त्ज़ी"],
        correct: 2
    },
    {
        id: 168,
        question: "What is the capital of Australia?",
        questionHindi: "ऑस्ट्रेलिया की राजधानी क्या है?",
        options: ["Sydney / सिडनी", "Melbourne / मेलबर्न", "Canberra / कैनबरा", "Perth / पर्थ"],
        correct: 2
    },
    {
        id: 169,
        question: "What is the currency of Japan?",
        questionHindi: "जापान की मुद्रा क्या है?",
        options: ["Yuan / युआन", "Won / वोन", "Yen / येन", "Dollar / डॉलर"],
        correct: 2
    },
    {
        id: 170,
        question: "Where are the Dilwara temples located?",
        questionHindi: "दिलवाड़ा मंदिर कहाँ स्थित हैं?",
        options: ["Khajuraho / खजुराहो", "Mt. Abu / माउंट आबू", "Bhubaneswar / भुवनेश्वर", "Madurai / मदुरै"],
        correct: 1
    },
    {
        id: 171,
        question: "Where did the Jallianwala Bagh tragedy take place?",
        questionHindi: "जलियांवाला बाग त्रासदी कहाँ हुई थी?",
        options: ["Lahore / लाहौर", "Amritsar (Punjab) / अमृतसर (पंजाब)", "Delhi / दिल्ली", "Chandigarh / चंडीगढ़"],
        correct: 1
    },
    {
        id: 172,
        question: "What is the ratio of the width of the Indian National Flag to its length?",
        questionHindi: "भारतीय राष्ट्रीय ध्वज की चौड़ाई और लंबाई का अनुपात क्या है?",
        options: ["3:2", "2:3", "1:2", "4:3"],
        correct: 1
    },
    {
        id: 173,
        question: "Who composed the National Anthem 'Jana-gana-mana'?",
        questionHindi: "राष्ट्रगान 'जन-गण-मन' की रचना किसने की थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Sarojini Naidu / सरोजिनी नायडू"],
        correct: 1
    },
    {
        id: 174,
        question: "When did the Indian National Calendar commence?",
        questionHindi: "भारतीय राष्ट्रीय कैलेंडर कब शुरू हुआ?",
        options: ["August 15, 1947", "January 26, 1950", "March 22, 1957", "April 1, 1951"],
        correct: 2
    },
    {
        id: 175,
        question: "Which is the National Animal of India?",
        questionHindi: "भारत का राष्ट्रीय पशु कौन सा है?",
        options: ["Lion / शेर", "Elephant / हाथी", "Tiger / बाघ", "Peacock / मोर"],
        correct: 2
    },
    {
        id: 176,
        question: "Which schedule of the Constitution contains the list of recognized languages?",
        questionHindi: "संविधान की किस अनुसूची में मान्यता प्राप्त भाषाओं की सूची है?",
        options: ["7th Schedule / 7वीं अनुसूची", "8th Schedule / 8वीं अनुसूची", "9th Schedule / 9वीं अनुसूची", "10th Schedule / 10वीं अनुसूची"],
        correct: 1
    },
    {
        id: 177,
        question: "What is the capital of Chhattisgarh?",
        questionHindi: "छत्तीसगढ़ की राजधानी क्या है?",
        options: ["Ranchi / रांची", "Raipur / रायपुर", "Bhopal / भोपाल", "Patna / पटना"],
        correct: 1
    },
    {
        id: 178,
        question: "Which city is known for its Lock industry?",
        questionHindi: "कौन सा शहर अपने ताला उद्योग के लिए जाना जाता है?",
        options: ["Moradabad / मुरादाबाद", "Aligarh / अलीगढ़", "Kanpur / कानपुर", "Agra / आगरा"],
        correct: 1
    },
    {
        id: 179,
        question: "Where is the Integral Coach Factory located?",
        questionHindi: "इंटीग्रल कोच फैक्ट्री कहाँ स्थित है?",
        options: ["Kapurthala / कपूरथला", "Perambur (Chennai) / पेरम्बूर (चेन्नई)", "Bangalore / बैंगलोर", "Mumbai / मुंबई"],
        correct: 1
    },
    {
        id: 180,
        question: "Which place is known as the 'Rose Pink City'?",
        questionHindi: "किस स्थान को 'गुलाबी शहर' (Rose Pink City) कहा जाता है?",
        options: ["Jodhpur / जोधपुर", "Jaipur / जयपुर", "Udaipur / उदयपुर", "Bikaner / बीकानेर"],
        correct: 1
    },
    {
        id: 181,
        question: "Which state is known as the 'Spice Garden of India'?",
        questionHindi: "किस राज्य को 'भारत का मसालों का बगीचा' कहा जाता है?",
        options: ["Karnataka / कर्नाटक", "Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश", "Assam / असम"],
        correct: 1
    },
    {
        id: 182,
        question: "Which river is known as 'Bengal’s Sorrow'?",
        questionHindi: "किस नदी को 'बंगाल का शोक' कहा जाता है?",
        options: ["Ganga / गंगा", "Damodar River / दामोदर नदी", "Brahmaputra / ब्रह्मपुत्र", "Kosi / कोसी"],
        correct: 1
    },
    {
        id: 183,
        question: "When did the Constituent Assembly first meet?",
        questionHindi: "संविधान सभा की पहली बैठक कब हुई थी?",
        options: ["August 15, 1947", "December 9, 1946 / 9 दिसंबर, 1946", "January 26, 1950", "November 26, 1949"],
        correct: 1
    },
    {
        id: 184,
        question: "Who was the Chairman of the Drafting Committee?",
        questionHindi: "मसौदा समिति (Drafting Committee) के अध्यक्ष कौन थे?",
        options: ["Jawaharlal Nehru / जवाहरलाल नेहरू", "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "Sardar Patel / सरदार पटेल"],
        correct: 1
    },
    {
        id: 185,
        question: "What is the minimum age to become the President of India?",
        questionHindi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु क्या है?",
        options: ["25 years", "30 years", "35 years / 35 वर्ष", "40 years"],
        correct: 2
    },
    {
        id: 186,
        question: "Who conducts the oath of office for the President?",
        questionHindi: "राष्ट्रपति को पद की शपथ कौन दिलाता है?",
        options: ["Prime Minister / प्रधानमंत्री", "The Chief Justice of India / भारत के मुख्य न्यायाधीश", "Vice President / उपराष्ट्रपति", "Speaker / अध्यक्ष"],
        correct: 1
    },
    {
        id: 187,
        question: "What is the tenure of the President of India?",
        questionHindi: "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
        options: ["4 years", "6 years", "5 years / 5 वर्ष", "Life / जीवन भर"],
        correct: 2
    },
    {
        id: 188,
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
        options: ["President / राष्ट्रपति", "The Vice-President / उपराष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Home Minister / गृह मंत्री"],
        correct: 1
    },
    {
        id: 189,
        question: "Where can a Money Bill only originate?",
        questionHindi: "धन विधेयक केवल कहाँ पेश किया जा सकता है?",
        options: ["Rajya Sabha / राज्यसभा", "Lok Sabha / लोकसभा", "Both Houses / दोनों सदन", "President's Office / राष्ट्रपति कार्यालय"],
        correct: 1
    },
    {
        id: 190,
        question: "What is the minimum age for a member of the Lok Sabha?",
        questionHindi: "लोकसभा सदस्य के लिए न्यूनतम आयु क्या है?",
        options: ["21 years", "30 years", "25 years / 25 वर्ष", "35 years"],
        correct: 2
    },
    {
        id: 191,
        question: "Which writ literally means 'you should have the body'?",
        questionHindi: "किस रिट का शाब्दिक अर्थ है 'आपके पास शरीर होना चाहिए'?",
        options: ["Mandamus / परमादेश", "Habeas Corpus / बंदी प्रत्यक्षीकरण", "Certiorari / उत्प्रेषण", "Quo Warranto / अधिकार पृच्छा"],
        correct: 1
    },
    {
        id: 192,
        question: "At what age does a Supreme Court judge retire?",
        questionHindi: "सुप्रीम कोर्ट के न्यायाधीश किस आयु में सेवानिवृत्त होते हैं?",
        options: ["60 years", "62 years", "65 years / 65 वर्ष", "70 years"],
        correct: 2
    },
    {
        id: 193,
        question: "In which year was the 42nd Amendment Act passed?",
        questionHindi: "42वां संशोधन अधिनियम किस वर्ष पारित किया गया था?",
        options: ["1972", "1974", "1976", "1978"],
        correct: 2
    },
    {
        id: 194,
        question: "Which amendment reduced the voting age from 21 to 18?",
        questionHindi: "किस संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
        options: ["42nd", "44th", "61st Amendment (1989)", "73rd"],
        correct: 2
    },
    {
        id: 195,
        question: "Where was the 'Great Bath' found in the Indus Valley?",
        questionHindi: "सिंधु घाटी में 'विशाल स्नानागार' कहाँ पाया गया था?",
        options: ["Harappa / हड़प्पा", "Lothal / लोथल", "Mohen-jo-Daro / मोहनजोदड़ो", "Kalibangan / कालीबंगन"],
        correct: 2
    },
    {
        id: 196,
        question: "Which is the oldest Veda?",
        questionHindi: "सबसे प्राचीन वेद कौन सा है?",
        options: ["Sama Veda / सामवेद", "Yajur Veda / यजुर्वेद", "Rig Veda / ऋग्वेद", "Atharva Veda / अथर्ववेद"],
        correct: 2
    },
    {
        id: 197,
        question: "Who was the founder of the Maurya Dynasty?",
        questionHindi: "मौर्य वंश का संस्थापक कौन था?",
        options: ["Ashoka / अशोक", "Bindusara / बिन्दुसार", "Chandra Gupta Maurya / चंद्रगुप्त मौर्य", "Kanishka / कनिष्क"],
        correct: 2
    },
    {
        id: 198,
        question: "Which king is known as the 'Indian Napoleon'?",
        questionHindi: "किस राजा को 'भारतीय नेपोलियन' कहा जाता है?",
        options: ["Chandragupta I / चंद्रगुप्त प्रथम", "Samudra Gupta / समुद्रगुप्त", "Skandagupta / स्कंदगुप्त", "Harsha / हर्ष"],
        correct: 1
    },
    {
        id: 199,
        question: "Who founded the Nalanda University?",
        questionHindi: "नालंदा विश्वविद्यालय की स्थापना किसने की थी?",
        options: ["Samudragupta / समुद्रगुप्त", "Kumara Gupta / कुमारगुप्त", "Harshavardhana / हर्षवर्धन", "Dharmapala / धर्मपाल"],
        correct: 1
    },
    {
        id: 200,
        question: "In which year was the First Battle of Panipat fought?",
        questionHindi: "पानीपत की पहली लड़ाई किस वर्ष लड़ी गई थी?",
        options: ["1556", "1761", "1526", "1504"],
        correct: 2
    },
    {
        id: 201,
        question: "Who was the first and only Muslim lady to sit on the throne of Delhi?",
        questionHindi: "दिल्ली के सिंहासन पर बैठने वाली पहली और एकमात्र मुस्लिम महिला कौन थी?",
        options: ["Chand Bibi / चांद बीबी", "Razia Begum / रजिया बेगम", "Nur Jahan / नूरजहाँ", "Mumtaz Mahal / मुमताज महल"],
        correct: 1
    },
    {
        id: 202,
        question: "Who founded the 'Din-i-Ilahi' religion?",
        questionHindi: "'दीन-ए-इलाही' धर्म की स्थापना किसने की थी?",
        options: ["Babar / बाबर", "Humayun / हुमायूं", "Akbar / अकबर", "Shah Jahan / शाहजहाँ"],
        correct: 2
    },
    {
        id: 203,
        question: "Who laid the foundation of the British Rule in India at the Battle of Plassey?",
        questionHindi: "प्लासी के युद्ध में भारत में ब्रिटिश शासन की नींव किसने रखी थी?",
        options: ["Lord Dalhousie / लॉर्ड डलहौजी", "Robert Clive / रॉबर्ट क्लाइव", "Warren Hastings / वारेन हेस्टिंग्स", "Lord Cornwallis / लॉर्ड कॉर्नवालिस"],
        correct: 1
    },
    {
        id: 204,
        question: "In which year was the first Railway line laid in India?",
        questionHindi: "भारत में पहली रेलवे लाइन किस वर्ष बिछाई गई थी?",
        options: ["1850", "1853 (Bombay to Thana)", "1857", "1860"],
        correct: 1
    },
    {
        id: 205,
        question: "Who gave the slogan 'Swaraj is my birthright'?",
        questionHindi: "'स्वराज मेरा जन्मसिद्ध अधिकार है' का नारा किसने दिया था?",
        options: ["Mahatma Gandhi / महात्मा गांधी", "Lala Lajpat Rai / लाला लाजपत राय", "Bal Gangadhar Tilak / बाल गंगाधर तिलक", "Subhash Chandra Bose / सुभाष चंद्र बोस"],
        correct: 2
    },
    {
        id: 206,
        question: "When did the Dandi March start?",
        questionHindi: "दांडी मार्च कब शुरू हुआ था?",
        options: ["March 12, 1930 / 12 मार्च, 1930", "April 6, 1930 / 6 अप्रैल, 1930", "August 15, 1942 / 15 अगस्त, 1942", "January 26, 1950 / 26 जनवरी, 1950"],
        correct: 0
    },
    {
        id: 207,
        question: "Who is known as the 'Iron Man of India'?",
        questionHindi: "'भारत के लौह पुरुष' के रूप में किसे जाना जाता है?",
        options: ["Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Bhagat Singh / भगत सिंह"],
        correct: 0
    },
    {
        id: 208,
        question: "Which instrument measures atmospheric pressure?",
        questionHindi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Thermometer / थर्मामीटर", "Barometer / बैरोमीटर", "Hygrometer / हाइग्रोमीटर", "Altimeter / अल्टीमीटर"],
        correct: 1
    },
    {
        id: 209,
        question: "Which instrument is used to determine the purity of milk?",
        questionHindi: "दूध की शुद्धता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Hydrometer / हाइड्रोमीटर", "Lactometer / लैक्टोमीटर", "Manometer / मैनोमीटर", "Barometer / बैरोमीटर"],
        correct: 1
    },
    {
        id: 210,
        question: "Who discovered Penicillin?",
        questionHindi: "पेनिसिलिन की खोज किसने की थी?",
        options: ["Alexander Fleming / अलेक्जेंडर फ्लेमिंग", "Louis Pasteur / लुई पाश्चर", "Edward Jenner / एडवर्ड जेनर", "Robert Koch / रॉबर्ट कोच"],
        correct: 0
    },
    {
        id: 211,
        question: "Deficiency of which vitamin causes Scurvy?",
        questionHindi: "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 2
    },
    {
        id: 212,
        question: "Goitre is caused by the deficiency of:",
        questionHindi: "घेंघा (Goitre) किसकी कमी के कारण होता है?",
        options: ["Iron / लोहा", "Calcium / कैल्शियम", "Iodine / आयोडीन", "Protein / प्रोटीन"],
        correct: 2
    },
    {
        id: 213,
        question: "Which animal is called the 'Ship of the Desert'?",
        questionHindi: "किस जानवर को 'रेगिस्तान का जहाज' कहा जाता है?",
        options: ["Elephant / हाथी", "Horse / घोड़ा", "Camel / ऊंट", "Donkey / गधा"],
        correct: 2
    },
    {
        id: 214,
        question: "Where is the headquarters of ISRO?",
        questionHindi: "इसरो (ISRO) का मुख्यालय कहाँ है?",
        options: ["Mumbai / मुंबई", "Visakhapatnam / विशाखापत्तनम", "Bangalore / बैंगलोर", "New Delhi / नई दिल्ली"],
        correct: 2
    },
    {
        id: 215,
        question: "Who was the first person to land on the moon?",
        questionHindi: "चंद्रमा पर उतरने वाला पहला व्यक्ति कौन था?",
        options: ["Yuri Gagarin / यूरी गागरिन", "Neil A. Armstrong / नील आर्मस्ट्रांग", "Buzz Aldrin / बज़ एल्ड्रिन", "Michael Collins / माइकल कोलिन्स"],
        correct: 1
    },
    {
        id: 216,
        question: "Bharatnatyam is the classical dance of which state?",
        questionHindi: "भरतनाट्यम किस राज्य का शास्त्रीय नृत्य है?",
        options: ["Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु", "Odisha / ओडिशा"],
        correct: 2
    },
    {
        id: 217,
        question: "Who is considered the Father of Indian Cinema?",
        questionHindi: "भारतीय सिनेमा का जनक किसे माना जाता है?",
        options: ["Raj Kapoor / राज कपूर", "Dadasaheb Phalke / दादा साहब फाल्के", "Satyajit Ray / सत्यजीत रे", "Prithviraj Kapoor / पृथ्वीराज कपूर"],
        correct: 1
    },
    {
        id: 218,
        question: "Who wrote the book 'Gitanjali'?",
        questionHindi: "'गीतांजलि' पुस्तक किसने लिखी थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sarojini Naidu / सरोजिनी नायडू", "Premchand / प्रेमचंद"],
        correct: 1
    },
    {
        id: 219,
        question: "Who was Mahatma Gandhi's political guru?",
        questionHindi: "महात्मा गांधी के राजनीतिक गुरु कौन थे?",
        options: ["Lokmanya Tilak / लोकमान्य तिलक", "Gopalakrishna Gokhale / गोपालकृष्ण गोखले", "Dadabhai Naoroji / दादाभाई नौरोजी", "Lal Bahadur Shastri / लाल बहादुर शास्त्री"],
        correct: 1
    },
    {
        id: 220,
        question: "In which year did India attain Independence?",
        questionHindi: "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
        options: ["1942", "1950", "1947", "1952"],
        correct: 2
    },
    {
        id: 221,
        question: "What is the approximate core temperature of the Sun?",
        questionHindi: "सूर्य के केंद्र (core) का अनुमानित तापमान क्या है?",
        options: ["5,770 K", "100,000 K", "150,000,000 K", "5,000,000 K"],
        correct: 2
    },
    {
        id: 222,
        question: "Which gas accounts for 26.5% of the Sun's composition?",
        questionHindi: "सूर्य के संगठन में कौन सी गैस 26.5% है?",
        options: ["Hydrogen / हाइड्रोजन", "Helium / हीलियम", "Oxygen / ऑक्सीजन", "Nitrogen / नाइट्रोजन"],
        correct: 1
    },
    {
        id: 223,
        question: "What is the period of revolution for the planet Venus?",
        questionHindi: "शुक्र ग्रह की परिक्रमा अवधि क्या है?",
        options: ["88 days", "225 days", "365 days", "687 days"],
        correct: 1
    },
    {
        id: 224,
        question: "Which planet is known as the 'Morning Star'?",
        questionHindi: "किस ग्रह को 'भोर का तारा' कहा जाता है?",
        options: ["Mercury / बुध", "Mars / मंगल", "Venus / शुक्र", "Saturn / शनि"],
        correct: 2
    },
    {
        id: 225,
        question: "What is the polar diameter of the Earth?",
        questionHindi: "पृथ्वी का ध्रुवीय व्यास कितना है?",
        options: ["12,756 Kms", "12,714 Kms", "40,075 Kms", "6,377 Kms"],
        correct: 1
    },
    {
        id: 226,
        question: "Which planet takes 11.9 years to complete one revolution around the Sun?",
        questionHindi: "किस ग्रह को सूर्य की एक परिक्रमा पूरी करने में 11.9 वर्ष लगते हैं?",
        options: ["Saturn / शनि", "Uranus / अरुण", "Jupiter / बृहस्पति", "Neptune / वरुण"],
        correct: 2
    },
    {
        id: 227,
        question: "Who discovered the planet Saturn?",
        questionHindi: "शनि ग्रह की खोज किसने की थी?",
        options: ["William Herschel", "Copernicus", "Galileo", "Newton"],
        correct: 2
    },
    {
        id: 228,
        question: "What is the period of rotation for the planet Uranus?",
        questionHindi: "अरुण (Uranus) ग्रह की घूर्णन अवधि क्या है?",
        options: ["10 hrs 14 mts", "16 hrs 10 mts", "18 hrs 26 mts", "24 hrs"],
        correct: 1
    },
    {
        id: 229,
        question: "Which is the coldest and smallest of all planets?",
        questionHindi: "सभी ग्रहों में सबसे ठंडा और सबसे छोटा कौन सा है?",
        options: ["Neptune / वरुण", "Pluto / प्लूटो", "Mars / मंगल", "Mercury / बुध"],
        correct: 1
    },
    {
        id: 230,
        question: "What is the period of rotation and revolution for the Moon?",
        questionHindi: "चंद्रमा की घूर्णन और परिक्रमा की अवधि क्या है?",
        options: ["27 days", "29 ½ days", "31 days", "24 hours"],
        correct: 1
    },
    {
        id: 231,
        question: "What percentage of the Earth's surface is covered by water?",
        questionHindi: "पृथ्वी की सतह का कितना प्रतिशत जल से ढका है?",
        options: ["29.08%", "50%", "70.92%", "85%"],
        correct: 2
    },
    {
        id: 232,
        question: "What is the minimum escape velocity from the Earth?",
        questionHindi: "पृथ्वी से न्यूनतम पलायन वेग क्या है?",
        options: ["8 Km/sec", "11 Km/sec", "15 Km/sec", "25 Km/sec"],
        correct: 1
    },
    {
        id: 233,
        question: "On which date is the Sun overhead at the Equator during the Vernal Equinox?",
        questionHindi: "वसंत विषुव के दौरान भूमध्य रेखा पर सूर्य किस तिथि को सीधा चमकता है?",
        options: ["June 21", "September 23", "March 21", "December 22"],
        correct: 2
    },
    {
        id: 234,
        question: "How many minutes does it take for 1 degree of longitude to pass under the Sun?",
        questionHindi: "सूर्य के नीचे से 1 डिग्री देशांतर गुजरने में कितने मिनट लगते हैं?",
        options: ["1 minute", "4 minutes", "15 minutes", "60 minutes"],
        correct: 1
    },
    {
        id: 235,
        question: "The meridian passing through Greenwich is numbered as:",
        questionHindi: "ग्रीनविच से गुजरने वाली मध्याह्न रेखा को किस संख्या से अंकित किया गया है?",
        options: ["180°", "90°", "0°", "45°"],
        correct: 2
    },
    {
        id: 236,
        question: "Which layer of the Earth is called the Lithosphere?",
        questionHindi: "पृथ्वी की किस परत को स्थलमंडल (Lithosphere) कहा जाता है?",
        options: ["Core / कोर", "Mantle / मेंटल", "Outer Crust / बाहरी क्रस्ट", "Atmosphere / वायुमंडल"],
        correct: 2
    },
    {
        id: 237,
        question: "Granite is an example of which type of rock?",
        questionHindi: "ग्रेनाइट किस प्रकार की चट्टान का उदाहरण है?",
        options: ["Volcanic / ज्वालामुखी", "Plutonic / प्लूटोनिक", "Sedimentary / अवसादी", "Metamorphic / कायांतरित"],
        correct: 1
    },
    {
        id: 238,
        question: "Which layer of the atmosphere protects us from ultraviolet radiation?",
        questionHindi: "वायुमंडल की कौन सी परत हमें पराबैंगनी विकिरण से बचाती है?",
        options: ["Troposphere / क्षोभमंडल", "Stratosphere / समतापमंडल", "Mesosphere / मध्यमंडल", "Ionosphere / आयनमंडल"],
        correct: 1
    },
    {
        id: 239,
        question: "Which ocean is the greatest of all and covers one-third of the Earth’s surface?",
        questionHindi: "कौन सा महासागर सबसे बड़ा है और पृथ्वी की सतह के एक-तिहाई हिस्से को कवर करता है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Arctic / आर्कटिक", "Pacific / प्रशांत"],
        correct: 3
    },
    {
        id: 240,
        question: "High tides occurring at new and full moon are called:",
        questionHindi: "अमावस्या और पूर्णिमा पर आने वाले उच्च ज्वार कहलाते हैं:",
        options: ["Neap tides / लघु ज्वार", "Ebb tides / भाटा", "Spring tides / स्प्रिंग ज्वार", "Low tides / निम्न ज्वार"],
        correct: 2
    },
    {
        id: 241,
        question: "Which continent is known as the 'Dark Continent'?",
        questionHindi: "किस महाद्वीप को 'अंध महाद्वीप' कहा जाता है?",
        options: ["Asia / एशिया", "Australia / ऑस्ट्रेलिया", "Africa / अफ्रीका", "South America / दक्षिण अमेरिका"],
        correct: 2
    },
    {
        id: 242,
        question: "Which line demarcates the border between India and China?",
        questionHindi: "भारत और चीन के बीच कौन सी सीमा रेखा है?",
        options: ["Radcliffe Line / रेडक्लिफ रेखा", "Durand Line / डूरंड रेखा", "Mac Mohan Line / मैकमोहन रेखा", "Maginot Line / मैजिनॉट रेखा"],
        correct: 2
    },
    {
        id: 243,
        question: "Who designed the Suez Canal?",
        questionHindi: "स्वेज नहर का डिजाइन किसने तैयार किया था?",
        options: ["Christopher Columbus", "Vasco-da-Gama", "Ferdinand de Lesseps", "Amundsen"],
        correct: 2
    },
    {
        id: 244,
        question: "Which city is known as the 'City of Skyscrapers'?",
        questionHindi: "किस शहर को 'गगनचुंबी इमारतों का शहर' कहा जाता है?",
        options: ["London", "New York", "Chicago", "Paris"],
        correct: 1
    },
    {
        id: 245,
        question: "Which country is known as the 'Land of the Rising Sun'?",
        questionHindi: "किस देश को 'उगते सूरज की भूमि' कहा जाता है?",
        options: ["Norway", "Japan", "Korea", "United Kingdom"],
        correct: 1
    },
    {
        id: 246,
        question: "What is the name of the Parliament of Japan?",
        questionHindi: "जापान की संसद का नाम क्या है?",
        options: ["Diet", "Knesset", "Congress", "Majlis"],
        correct: 0
    },
    {
        id: 247,
        question: "What is the national emblem of Australia?",
        questionHindi: "ऑस्ट्रेलिया का राष्ट्रीय प्रतीक क्या है?",
        options: ["Lily / लिली", "Rose / गुलाब", "Kangaroo / कंगारू", "Eagle / ईगल"],
        correct: 2
    },
    {
        id: 248,
        question: "Which is the largest archipelago in the world?",
        questionHindi: "विश्व का सबसे बड़ा द्वीप समूह (Archipelago) कौन सा है?",
        options: ["Japan / जापान", "Indonesia / इंडोनेशिया", "Philippines / फिलीपींस", "West Indies / वेस्ट इंडीज"],
        correct: 1
    },
    {
        id: 249,
        question: "Which is the tallest animal in the world?",
        questionHindi: "विश्व का सबसे ऊँचा जानवर कौन सा है?",
        options: ["Elephant / हाथी", "Blue Whale / ब्लू व्हेल", "Giraffe / जिराफ", "Ostrich / शुतुरमुर्ग"],
        correct: 2
    },
    {
        id: 250,
        question: "Which is the smallest bird in the world?",
        questionHindi: "विश्व का सबसे छोटा पक्षी कौन सा है?",
        options: ["Sparrow / गौरैया", "Nightingale / बुलबुल", "Humming Bird / हमिंग बर्ड", "Swift / स्विफ्ट"],
        correct: 2
    },
    {
        id: 251,
        question: "Where is the longest railway bridge in India located?",
        questionHindi: "भारत का सबसे लंबा रेलवे पुल कहाँ स्थित है?",
        options: ["Kerala / केरल", "Tamil Nadu / तमिलनाडु", "Sone Bridge (Bihar) / सोन ब्रिज (बिहार)", "West Bengal / पश्चिम बंगाल"],
        correct: 2
    },
    {
        id: 252,
        question: "Which is the largest continent?",
        questionHindi: "सबसे बड़ा महाद्वीप कौन सा है?",
        options: ["Africa / अफ्रीका", "Europe / यूरोप", "Asia / एशिया", "North America / उत्तरी अमेरिका"],
        correct: 2
    },
    {
        id: 253,
        question: "Which country has the largest population?",
        questionHindi: "सबसे अधिक जनसंख्या वाला देश कौन सा है?",
        options: ["India / भारत", "China / चीन", "USA / अमेरिका", "Russia / रूस"],
        correct: 1
    },
    {
        id: 254,
        question: "What is the longest epic in the world?",
        questionHindi: "विश्व का सबसे लंबा महाकाव्य कौन सा है?",
        options: ["Ramayana / रामायण", "Mahabharatha / महाभारत", "Iliad / इलियड", "Odyssey / ओडिसी"],
        correct: 1
    },
    {
        id: 255,
        question: "Where is the world's highest filling station (petrol pump) located?",
        questionHindi: "विश्व का सबसे ऊँचा फिलिंग स्टेशन (पेट्रोल पंप) कहाँ स्थित है?",
        options: ["Leh / लेह", "Manali / मनाली", "Lhasa / ल्हासा", "Siachen / सियाचिन"],
        correct: 0
    },
    {
        id: 256,
        question: "Which is the deepest lake in the world?",
        questionHindi: "विश्व की सबसे गहरी झील कौन सी है?",
        options: ["Caspian Sea / कैस्पियन सागर", "Lake Superior / सुपीरियर झील", "Lake Baikal / बैकाल झील", "Lake Titicaca / टिटिकाका झील"],
        correct: 2
    },
    {
        id: 257,
        question: "Which place records the heaviest rainfall in the world?",
        questionHindi: "विश्व में सर्वाधिक वर्षा किस स्थान पर होती है?",
        options: ["Cherrapunji / चेरापूंजी", "Mawsynram / मौसिनराम", "Assam / असम", "Amazon Valley / अमेज़न घाटी"],
        correct: 1
    },
    {
        id: 258,
        question: "Which planet is nearest to the Sun?",
        questionHindi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
        options: ["Venus / शुक्र", "Earth / पृथ्वी", "Mercury / बुध", "Mars / मंगल"],
        correct: 2
    },
    {
        id: 259,
        question: "What is the currency of Japan?",
        questionHindi: "जापान की मुद्रा क्या है?",
        options: ["Yuan / युआन", "Yen / येन", "Won / वोन", "Rial / रियाल"],
        correct: 1
    },
    {
        id: 260,
        question: "Where is the Jallianwala Bagh tragedy memorial located?",
        questionHindi: "जलियांवाला बाग त्रासदी स्मारक कहाँ स्थित है?",
        options: ["Ludhiana / लुधियाना", "Amritsar / अमृतसर", "Jalandhar / जालंधर", "Patiala / पटियाला"],
        correct: 1
    },
    {
        id: 261,
        question: "What is the ratio of the width of the Indian National Flag to its length?",
        questionHindi: "भारतीय राष्ट्रीय ध्वज की चौड़ाई और लंबाई का अनुपात क्या है?",
        options: ["3:2", "2:3", "1:2", "4:3"],
        correct: 1
    },
    {
        id: 262,
        question: "On which date was the National Anthem of India adopted?",
        questionHindi: "भारतीय राष्ट्रगान को किस तिथि को अपनाया गया था?",
        options: ["August 15, 1947", "January 26, 1950", "January 24, 1950", "July 22, 1947"],
        correct: 2
    },
    {
        id: 263,
        question: "Which is the national animal of India?",
        questionHindi: "भारत का राष्ट्रीय पशु कौन सा है?",
        options: ["Lion / शेर", "Elephant / हाथी", "Tiger / बाघ", "Leopard / तेंदुआ"],
        correct: 2
    },
    {
        id: 264,
        question: "Which schedule of the Indian Constitution lists the 18 officially recognised languages?",
        questionHindi: "भारतीय संविधान की कौन सी अनुसूची 18 आधिकारिक भाषाओं को सूचीबद्ध करती है?",
        options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
        correct: 1
    },
    {
        id: 265,
        question: "What is the capital of Arunachal Pradesh?",
        questionHindi: "अरुणाचल प्रदेश की राजधानी क्या है?",
        options: ["Dispur / दिसपुर", "Itanagar / ईटानगर", "Shillong / शिलांग", "Kohima / कोहिमा"],
        correct: 1
    },
    {
        id: 266,
        question: "Which city is famous for its Lock industry?",
        questionHindi: "कौन सा शहर अपने ताला उद्योग के लिए प्रसिद्ध है?",
        options: ["Aligarh / अलीगढ़", "Agra / आगरा", "Ahmedabad / अहमदाबाद", "Amritsar / अमृतसर"],
        correct: 0
    },
    {
        id: 267,
        question: "Where is the Integral Coach Factory (ICF) located?",
        questionHindi: "इंटीग्रल कोच फैक्ट्री (ICF) कहाँ स्थित है?",
        options: ["Bengaluru / बेंगलुरु", "Perambur (Chennai) / पेरम्बूर (चेन्नई)", "Kapurthala / कपूरथला", "Varanasi / वाराणसी"],
        correct: 1
    },
    {
        id: 268,
        question: "Which state is known as the 'Spice Garden of India'?",
        questionHindi: "किस राज्य को 'भारत का मसालों का बगीचा' कहा जाता है?",
        options: ["Tamil Nadu / तमिलनाडु", "Karnataka / कर्नाटक", "Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश"],
        correct: 2
    },
    {
        id: 269,
        question: "When did the Constituent Assembly of India first meet?",
        questionHindi: "भारतीय संविधान सभा की पहली बैठक कब हुई थी?",
        options: ["August 14, 1947", "January 26, 1950", "December 9, 1946", "November 26, 1949"],
        correct: 2
    },
    {
        id: 270,
        question: "Who was the Chairman of the Drafting Committee of the Constitution?",
        questionHindi: "संविधान की मसौदा समिति के अध्यक्ष कौन थे?",
        options: ["Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Sardar Patel / सरदार पटेल"],
        correct: 2
    },
    {
        id: 271,
        question: "What is the minimum age required to become the President of India?",
        questionHindi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु क्या है?",
        options: ["25 years", "30 years", "35 years", "40 years"],
        correct: 2
    },
    {
        id: 272,
        question: "Who conducts the oath of office for the President of India?",
        questionHindi: "भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?",
        options: ["Prime Minister / प्रधानमंत्री", "Vice-President / उपराष्ट्रपति", "Chief Justice of India / भारत के मुख्य न्यायाधीश", "Speaker of Lok Sabha / लोकसभा अध्यक्ष"],
        correct: 2
    },
    {
        id: 273,
        question: "What is the tenure of the President of India?",
        questionHindi: "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
        options: ["4 years", "5 years", "6 years", "Lifetime / जीवन भर"],
        correct: 1
    },
    {
        id: 274,
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
        options: ["President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Vice-President / उपराष्ट्रपति", "Speaker / अध्यक्ष"],
        correct: 2
    },
    {
        id: 275,
        question: "In which house can a Money Bill only originate?",
        questionHindi: "धन विधेयक केवल किस सदन में उत्पन्न हो सकता है?",
        options: ["Rajya Sabha / राज्यसभा", "Lok Sabha / लोकसभा", "Both Houses / दोनों सदन", "Supreme Court / सुप्रीम कोर्ट"],
        correct: 1
    },
    {
        id: 276,
        question: "At what age does a judge of the Supreme Court retire?",
        questionHindi: "सुप्रीम कोर्ट का न्यायाधीश किस आयु में सेवानिवृत्त होता है?",
        options: ["60 years", "62 years", "65 years", "70 years"],
        correct: 2
    },
    {
        id: 277,
        question: "Which writ literally means 'you should have the body'?",
        questionHindi: "किस रिट का शाब्दिक अर्थ है 'आपके पास शरीर होना चाहिए'?",
        options: ["Mandamus / परमादेश", "Quo-Warranto / अधिकार पृच्छा", "Habeas Corpus / बंदी प्रत्यक्षीकरण", "Certiorari / उत्प्रेषण"],
        correct: 2
    },
    {
        id: 278,
        question: "Which amendment reduced the voting age from 21 to 18?",
        questionHindi: "किस संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        correct: 2
    },
    {
        id: 279,
        question: "Where was the 'Great Bath' found in the Indus Valley Civilization?",
        questionHindi: "सिंधु घाटी सभ्यता में 'विशाल स्नानागार' कहाँ पाया गया था?",
        options: ["Harappa / हड़प्पा", "Mohen-jo-Daro / मोहनजोदड़ो", "Lothal / लोथल", "Kalibangan / कालीबंगन"],
        correct: 1
    },
    {
        id: 280,
        question: "Which is the oldest Veda?",
        questionHindi: "सबसे प्राचीन वेद कौन सा है?",
        options: ["Sama Veda / सामवेद", "Yajur Veda / यजुर्वेद", "Rig Veda / ऋग्वेद", "Atharvana Veda / अथर्ववेद"],
        correct: 2
    },
    {
        id: 281,
        question: "Who was the founder of the Maurya Dynasty?",
        questionHindi: "मौर्य वंश का संस्थापक कौन था?",
        options: ["Ashoka / अशोक", "Bindusara / बिन्दुसार", "Chandra Gupta Maurya / चंद्रगुप्त मौर्य", "Samudra Gupta / समुद्रगुप्त"],
        correct: 2
    },
    {
        id: 282,
        question: "Which king is known as the 'Indian Napoleon'?",
        questionHindi: "किस राजा को 'भारतीय नेपोलियन' कहा जाता है?",
        options: ["Chandra Gupta I", "Samudra Gupta", "Ashoka", "Harsha Vardhana"],
        correct: 1
    },
    {
        id: 283,
        question: "Who founded the Nalanda University?",
        questionHindi: "नालंदा विश्वविद्यालय की स्थापना किसने की थी?",
        options: ["Kumara Gupta / कुमारगुप्त", "Skanda Gupta / स्कन्दगुप्त", "Chandra Gupta II / चंद्रगुप्त द्वितीय", "Harsha / हर्ष"],
        correct: 0
    },
    {
        id: 284,
        question: "Who was the first and only Muslim lady to sit on the throne of Delhi?",
        questionHindi: "दिल्ली के सिंहासन पर बैठने वाली पहली और एकमात्र मुस्लिम महिला कौन थी?",
        options: ["Chand Bibi / चाँद बीबी", "Razia Begum / रजिया बेगम", "Noor Jahan / नूरजहाँ", "Mumtaz Mahal / मुमताज़ महल"],
        correct: 1
    },
    {
        id: 285,
        question: "Who founded the 'Din-i-Ilahi' religion?",
        questionHindi: "'दीन-ए-इलाही' धर्म की स्थापना किसने की थी?",
        options: ["Babar / बाबर", "Akbar / अकबर", "Shah Jahan / शाहजहाँ", "Aurangzeb / औरंगजेब"],
        correct: 1
    },
    {
        id: 286,
        question: "In which year was the First Battle of Panipat fought?",
        questionHindi: "पानीपत की पहली लड़ाई किस वर्ष लड़ी गई थी?",
        options: ["1526", "1556", "1761", "1191"],
        correct: 0
    },
    {
        id: 287,
        question: "Who discovered the sea route to India in 1498?",
        questionHindi: "1498 में भारत के समुद्री मार्ग की खोज किसने की थी?",
        options: ["Columbus / कोलंबस", "Vasco-da-Gama / वास्को-डि-गामा", "Magellan / मैगलन", "Robert Clive / रॉबर्ट क्लाइव"],
        correct: 1
    },
    {
        id: 288,
        question: "Who was the first Governor-General of Bengal?",
        questionHindi: "बंगाल का प्रथम गवर्नर-जनरल कौन था?",
        options: ["Lord Canning / लॉर्ड कैनिंग", "Robert Clive / रॉबर्ट क्लाइव", "Warren Hastings / वारेन हेस्टिंग्स", "Lord Dalhousie / लॉर्ड डलहौजी"],
        correct: 2
    },
    {
        id: 289,
        question: "Which Governor-General introduced the 'Doctrine of Lapse'?",
        questionHindi: "किस गवर्नर-जनरल ने 'व्यपगत का सिद्धांत' (Doctrine of Lapse) पेश किया था?",
        options: ["Lord Ripon / लॉर्ड रिपन", "Lord Canning / लॉर्ड कैनिंग", "Lord Dalhousie / लॉर्ड डलहौजी", "Lord Curzon / लॉर्ड कर्जन"],
        correct: 2
    },
    {
        id: 290,
        question: "Who was the first Viceroy of India?",
        questionHindi: "भारत का प्रथम वायसराय कौन था?",
        options: ["Warren Hastings / वारेन हेस्टिंग्स", "Lord Canning / लॉर्ड कैनिंग", "Lord Mountbatten / लॉर्ड माउंटबेटन", "C. Rajagopalachari / सी. राजगोपालाचारी"],
        correct: 1
    },
    {
        id: 291,
        question: "In which year was the first railway line opened in India (Bombay to Thana)?",
        questionHindi: "भारत में पहली रेलवे लाइन किस वर्ष शुरू की गई थी (बॉम्बे से ठाणे)?",
        options: ["1857", "1853", "1901", "1885"],
        correct: 1
    },
    {
        id: 292,
        question: "Who gave the slogan 'Swaraj is my birthright'?",
        questionHindi: "'स्वराज मेरा जन्मसिद्ध अधिकार है' का नारा किसने दिया था?",
        options: ["Mahatma Gandhi / महात्मा गांधी", "Bal Gangadhar Tilak / बाल गंगाधर तिलक", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Jawaharlal Nehru / जवाहरलाल नेहरू"],
        correct: 1
    },
    {
        id: 293,
        question: "In which year did the Jallianwala Bagh massacre occur?",
        questionHindi: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
        options: ["1914", "1919", "1920", "1942"],
        correct: 1
    },
    {
        id: 294,
        question: "Who started the Dandi March in 1930?",
        questionHindi: "1930 में दांडी मार्च किसने शुरू किया था?",
        options: ["Sardar Patel / सरदार पटेल", "Mahatma Gandhi / महात्मा गांधी", "Bhagat Singh / भगत सिंह", "Nehru / नेहरू"],
        correct: 1
    },
    {
        id: 295,
        question: "Who is known as the 'Iron Man of India'?",
        questionHindi: "किसे 'भारत के लौह पुरुष' के रूप में जाना जाता है?",
        options: ["Bhagat Singh / भगत सिंह", "Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Lala Lajpat Rai / लाला लाजपत राय"],
        correct: 1
    },
    {
        id: 296,
        question: "Which instrument is used to measure atmospheric pressure?",
        questionHindi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Ammeter / एमीटर", "Barometer / बैरोमीटर", "Thermometer / थर्मामीटर", "Hygrometer / हाइग्रोमीटर"],
        correct: 1
    },
    {
        id: 297,
        question: "Which instrument measures the purity of milk?",
        questionHindi: "दूध की शुद्धता किस उपकरण से मापी जाती है?",
        options: ["Hydrometer / हाइड्रोमीटर", "Lactometer / लैक्टोमीटर", "Barometer / बैरोमीटर", "Galvanometer / गैल्वेनोमीटर"],
        correct: 1
    },
    {
        id: 298,
        question: "Who discovered Penicillin?",
        questionHindi: "पेनिसिलिन की खोज किसने की थी?",
        options: ["Louis Pasteur / लुई पाश्चर", "Alexander Fleming / अलेक्जेंडर फ्लेमिंग", "Ronald Ross / रोनाल्ड रॉस", "Edward Jenner / एडवर्ड जेनर"],
        correct: 1
    },
    {
        id: 299,
        question: "Deficiency of Vitamin C causes which disease?",
        questionHindi: "विटामिन सी की कमी से कौन सा रोग होता है?",
        options: ["Rickets / रिकेट्स", "Beriberi / बेरीबेरी", "Scurvy / स्कर्वी", "Night Blindness / रतौंधी"],
        correct: 2
    },
    {
        id: 300,
        question: "Goitre is caused by the deficiency of:",
        questionHindi: "घेंघा रोग किसकी कमी के कारण होता है?",
        options: ["Iron / लोहा", "Iodine / आयोडीन", "Calcium / कैल्शियम", "Vitamin D / विटामिन डी"],
        correct: 1
    },
    {
        id: 301,
        question: "Which animal is called the 'Ship of the Desert'?",
        questionHindi: "किस जानवर को 'रेगिस्तान का जहाज' कहा जाता है?",
        options: ["Elephant / हाथी", "Camel / ऊंट", "Horse / घोड़ा", "Donkey / गधा"],
        correct: 1
    },
    {
        id: 302,
        question: "Where is the Central Drug Research Institute located?",
        questionHindi: "केंद्रीय औषधि अनुसंधान संस्थान कहाँ स्थित है?",
        options: ["New Delhi / नई दिल्ली", "Lucknow / लखनऊ", "Mumbai / मुंबई", "Kolkata / कोलकाता"],
        correct: 1
    },
    {
        id: 303,
        question: "Where is the headquarters of ISRO?",
        questionHindi: "इसरो (ISRO) का मुख्यालय कहाँ है?",
        options: ["Mumbai / मुंबई", "Bengaluru / बेंगलुरु", "Chennai / चेन्नई", "New Delhi / नई दिल्ली"],
        correct: 1
    },
    {
        id: 304,
        question: "Who was the first person to land on the Moon?",
        questionHindi: "चंद्रमा पर उतरने वाला पहला व्यक्ति कौन था?",
        options: ["Yuri Gagarin / यूरी गागरिन", "Neil A. Armstrong / नील आर्मस्ट्रांग", "Rakesh Sharma / राकेश शर्मा", "Edwin Aldrin / एडविन एल्ड्रिन"],
        correct: 1
    },
    {
        id: 305,
        question: "Bharatnatyam is the classical dance of which state?",
        questionHindi: "भरतनाट्यम किस राज्य का शास्त्रीय नृत्य है?",
        options: ["Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु", "Odisha / ओडिशा"],
        correct: 2
    },
    {
        id: 306,
        question: "Who is considered the Father of Indian Cinema?",
        questionHindi: "भारतीय सिनेमा का जनक किसे माना जाता है?",
        options: ["Satyajit Ray / सत्यजीत रे", "Dadasaheb Phalke / दादा साहब फाल्के", "Raj Kapoor / राज कपूर", "Amitabh Bachchan / अमिताभ बच्चन"],
        correct: 1
    },
    {
        id: 307,
        question: "Who wrote the book 'Gitanjali'?",
        questionHindi: "'गीतांजलि' पुस्तक किसने लिखी थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sarojini Naidu / सरोजिनी नायडू", "Mahatma Gandhi / महात्मा गांधी"],
        correct: 1
    },
    {
        id: 308,
        question: "When was the United Nations (UN) officially founded?",
        questionHindi: "संयुक्त राष्ट्र (UN) की आधिकारिक स्थापना कब हुई थी?",
        options: ["October 24, 1944", "October 26, 1945", "August 15, 1947", "January 26, 1950"],
        correct: 1
    },
    {
        id: 309,
        question: "How many permanent members are in the UN Security Council?",
        questionHindi: "संयुक्त राष्ट्र सुरक्षा परिषद में कितने स्थायी सदस्य हैं?",
        options: ["5", "10", "15", "20"],
        correct: 0
    },
    {
        id: 310,
        question: "Where is the International Court of Justice located?",
        questionHindi: "अंतर्राष्ट्रीय न्यायालय कहाँ स्थित है?",
        options: ["Geneva / जिनेवा", "New York / न्यूयॉर्क", "The Hague / हेग", "Paris / पेरिस"],
        correct: 2
    },
    {
        id: 311,
        question: "Who was the first President of the Indian Republic?",
        questionHindi: "भारतीय गणतंत्र के प्रथम राष्ट्रपति कौन थे?",
        options: ["Dr. S. Radhakrishnan / डॉ. एस. राधाकृष्णन", "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "V.V. Giri / वी.वी. गिरि", "Zakir Hussain / जाकिर हुसैन"],
        correct: 1
    },
    {
        id: 312,
        question: "In which year was Mahatma Gandhi born?",
        questionHindi: "महात्मा गांधी का जन्म किस वर्ष हुआ था?",
        options: ["1857", "1869", "1885", "1901"],
        correct: 1
    },
    {
        id: 313,
        question: "Where did Mahatma Gandhi start his first Satyagraha in India?",
        questionHindi: "महात्मा गांधी ने भारत में अपना पहला सत्याग्रह कहाँ शुरू किया था?",
        options: ["Dandi / दांडी", "Champaran / चंपारण", "Sabarmati / साबरमती", "Kheda / खेड़ा"],
        correct: 1
    },
    {
        id: 314,
        question: "Who was the political guru of Mahatma Gandhi?",
        questionHindi: "महात्मा गांधी के राजनीतिक गुरु कौन थे?",
        options: ["Bal Gangadhar Tilak / बाल गंगाधर तिलक", "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sardar Patel / सरदार पटेल"],
        correct: 1
    },
    {
        id: 315,
        question: "What is the name of Mahatma Gandhi's autobiography?",
        questionHindi: "महात्मा गांधी की आत्मकथा का नाम क्या है?",
        options: ["Discovery of India / भारत की खोज", "My Experiments with Truth / सत्य के साथ मेरे प्रयोग", "Gitanjali / गीतांजलि", "Unhappy India / दुखी भारत"],
        correct: 1
    },
    {
        id: 316,
        question: "Who gave the title 'Mahatma' to Gandhiji?",
        questionHindi: "गांधीजी को 'महात्मा' की उपाधि किसने दी थी?",
        options: ["Subhash Chandra Bose / सुभाष चंद्र बोस", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Winston Churchill / विंस्टन चर्चिल"],
        correct: 1
    },
    {
        id: 317,
        question: "In which year did India get independence?",
        questionHindi: "भारत को किस वर्ष स्वतंत्रता मिली?",
        options: ["1942", "1947", "1950", "1930"],
        correct: 1
    },
    {
        id: 318,
        question: "What is the retirement age of a High Court judge?",
        questionHindi: "उच्च न्यायालय के न्यायाधीश की सेवानिवृत्ति की आयु क्या है?",
        options: ["60 years", "62 years", "65 years", "70 years"],
        correct: 1
    },
    {
        id: 319,
        question: "Which city is known as the 'Pink City'?",
        questionHindi: "किस शहर को 'गुलाबी शहर' के रूप में जाना जाता है?",
        options: ["Jodhpur / जोधपुर", "Jaipur / जयपुर", "Udaipur / उदयपुर", "Bikaner / बीकानेर"],
        correct: 1
    },
    {
        id: 320,
        question: "Who was the first Indian woman to go into space?",
        questionHindi: "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थी?",
        options: ["Sunita Williams / सुनीता विलियम्स", "Kalpana Chawla / कल्पना चावला", "Arati Saha / आरती साहा", "Bachendri Pal / बछेंद्री पाल"],
        correct: 1
    },
    {
        id: 321,
        question: "What is the approximate age of the Sun?",
        questionHindi: "सूर्य की अनुमानित आयु लगभग कितनी है?",
        options: ["2 Billion years", "5 Billion years", "10 Billion years", "1 Billion years"],
        correct: 1
    },
    {
        id: 322,
        question: "What percentage of the Sun consists of Hydrogen?",
        questionHindi: "सूर्य में हाइड्रोजन का प्रतिशत कितना है?",
        options: ["26.5%", "71%", "2.5%", "50%"],
        correct: 1
    },
    {
        id: 323,
        question: "Which planet is the brightest of all planets?",
        questionHindi: "सभी ग्रहों में सबसे चमकीला ग्रह कौन सा है?",
        options: ["Mercury / बुध", "Venus / शुक्र", "Mars / मंगल", "Jupiter / बृहस्पति"],
        correct: 1
    },
    {
        id: 324,
        question: "What is the equatorial diameter of the Earth?",
        questionHindi: "पृथ्वी का भूमध्यरेखीय व्यास क्या है?",
        options: ["12,714 Kms", "12,756 Kms", "40,075 Kms", "6,377 Kms"],
        correct: 1
    },
    {
        id: 325,
        question: "Which planet is known as the 'largest planet in the solar system'?",
        questionHindi: "सौर मंडल के 'सबसे बड़े ग्रह' के रूप में किसे जाना जाता है?",
        options: ["Saturn / शनि", "Neptune / वरुण", "Jupiter / बृहस्पति", "Uranus / अरुण"],
        correct: 2
    },
    {
        id: 326,
        question: "Who discovered the planet Saturn?",
        questionHindi: "शनि ग्रह की खोज किसने की थी?",
        options: ["Newton / न्यूटन", "William Herschel / विलियम हर्शेल", "Galileo / गैलीलियो", "Copernicus / कोपरनिकस"],
        correct: 2
    },
    {
        id: 327,
        question: "Which planet is the coldest and smallest of all planets?",
        questionHindi: "सभी ग्रहों में सबसे ठंडा और सबसे छोटा ग्रह कौन सा है?",
        options: ["Pluto / प्लूटो", "Mercury / बुध", "Neptune / वरुण", "Mars / मंगल"],
        correct: 0
    },
    {
        id: 328,
        question: "How long does it take for 1 degree of longitude to pass under the Sun?",
        questionHindi: "सूर्य के नीचे से 1 डिग्री देशांतर गुजरने में कितना समय लगता है?",
        options: ["1 minute", "4 minutes", "15 minutes", "60 minutes"],
        correct: 1
    },
    {
        id: 329,
        question: "What is the minimum escape velocity from the Earth?",
        questionHindi: "पृथ्वी से न्यूनतम पलायन वेग क्या है?",
        options: ["8 Km/sec", "11 Km/sec", "15 Km/sec", "25 Km/sec"],
        correct: 1
    },
    {
        id: 330,
        question: "On which date is the Vernal Equinox?",
        questionHindi: "वसंत विषुव (Vernal Equinox) किस तिथि को होता है?",
        options: ["September 23", "March 21", "June 21", "December 22"],
        correct: 1
    },
    {
        id: 331,
        question: "Which layer is the outer crust of the Earth?",
        questionHindi: "पृथ्वी की बाहरी परत (क्रस्ट) को क्या कहते हैं?",
        options: ["Core / कोर", "Mantle / मेंटल", "Lithosphere / स्थलमंडल", "Atmosphere / वायुमंडल"],
        correct: 2
    },
    {
        id: 332,
        question: "Granite is an example of which type of rock?",
        questionHindi: "ग्रेनाइट किस प्रकार की चट्टान का उदाहरण है?",
        options: ["Sedimentary / अवसादी", "Volcanic / ज्वालामुखी", "Plutonic / प्लूटोनिक", "Metamorphic / कायांतरित"],
        correct: 2
    },
    {
        id: 333,
        question: "What percentage of the atmosphere is Nitrogen?",
        questionHindi: "वायुमंडल में नाइट्रोजन का प्रतिशत कितना है?",
        options: ["21%", "0.03%", "78%", "0.9%"],
        correct: 2
    },
    {
        id: 334,
        question: "Which layer of the atmosphere contains the Ozone layer?",
        questionHindi: "वायुमंडल की किस परत में ओजोन परत होती है?",
        options: ["Troposphere / क्षोभमंडल", "Stratosphere / समतापमंडल", "Mesosphere / मध्यमंडल", "Ionosphere / आयनमंडल"],
        correct: 1
    },
    {
        id: 335,
        question: "Which ocean covers one-third of the Earth’s surface?",
        questionHindi: "कौन सा महासागर पृथ्वी की सतह के एक-तिहाई हिस्से को ढकता है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Pacific / प्रशांत", "Arctic / आर्कटिक"],
        correct: 2
    },
    {
        id: 336,
        question: "What is the recorded depth of the Marianas Trench?",
        questionHindi: "मरियाना ट्रेंच की दर्ज की गई गहराई कितनी है?",
        options: ["25,000 feet", "35,800 feet", "12,500 feet", "40,000 feet"],
        correct: 1
    },
    {
        id: 337,
        question: "High tides occurring at new and full moon are called:",
        questionHindi: "अमावस्या और पूर्णिमा को आने वाले उच्च ज्वार कहलाते हैं:",
        options: ["Neap tides / लघु ज्वार", "Spring tides / स्प्रिंग ज्वार", "Ebb tides / भाटा", "Low tides / निम्न ज्वार"],
        correct: 1
    },
    {
        id: 338,
        question: "Which place is known as the 'Dark Continent'?",
        questionHindi: "किस स्थान को 'अंध महाद्वीप' के रूप में जाना जाता है?",
        options: ["Asia / एशिया", "Africa / अफ्रीका", "Australia / ऑस्ट्रेलिया", "Europe / यूरोप"],
        correct: 1
    },
    {
        id: 339,
        question: "Which line demarcates the border between India and China?",
        questionHindi: "भारत और चीन के बीच की सीमा रेखा कौन सी है?",
        options: ["Radcliffe Line / रेडक्लिफ रेखा", "Durand Line / डूरंड रेखा", "Mac Mohan Line / मैकमोहन रेखा", "Maginot Line / मैजिनॉट रेखा"],
        correct: 2
    },
    {
        id: 340,
        question: "Who discovered the sea-route to India in 1498?",
        questionHindi: "1498 में भारत के समुद्री मार्ग की खोज किसने की थी?",
        options: ["Columbus / कोलंबस", "Vasco-da-Gama / वास्को-डि-गामा", "Robert Peary / रॉबर्ट पियरी", "Amundsen / अमुंडसेन"],
        correct: 1
    },
    {
        id: 341,
        question: "What is the smallest state in area in India?",
        questionHindi: "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        options: ["Goa / गोवा", "Sikkim / सिक्किम", "Kerala / केरल", "Nagaland / नागालैंड"],
        correct: 0
    },
    {
        id: 342,
        question: "Which is the tallest animal in the world?",
        questionHindi: "विश्व का सबसे ऊँचा जानवर कौन सा है?",
        options: ["Elephant / हाथी", "Giraffe / जिराफ", "Blue Whale / ब्लू व्हेल", "Ostrich / शुतुरमुर्ग"],
        correct: 1
    },
    {
        id: 343,
        question: "Which bird is the smallest?",
        questionHindi: "सबसे छोटा पक्षी कौन सा है?",
        options: ["Ostrich / शुतुरमुर्ग", "Humming Bird / हमिंग बर्ड", "Albatross / अल्बाट्रॉस", "Nightingale / बुलबुल"],
        correct: 1
    },
    {
        id: 344,
        question: "The longest railway bridge in India is:",
        questionHindi: "भारत का सबसे लंबा रेलवे पुल है:",
        options: ["Howrah Bridge / हावड़ा ब्रिज", "Sone Bridge / सोन ब्रिज", "Pamban Bridge / पंबन ब्रिज", "Godavari Bridge / गोदावरी ब्रिज"],
        correct: 1
    },
    {
        id: 345,
        question: "Which is the largest continent?",
        questionHindi: "सबसे बड़ा महाद्वीप कौन सा है?",
        options: ["Africa / अफ्रीका", "Europe / यूरोप", "Asia / एशिया", "Australia / ऑस्ट्रेलिया"],
        correct: 2
    },
    {
        id: 346,
        question: "Which country is the largest in population?",
        questionHindi: "जनसंख्या में सबसे बड़ा देश कौन सा है?",
        options: ["India / भारत", "China / चीन", "USA / अमेरिका", "Russia / रूस"],
        correct: 1
    },
    {
        id: 347,
        question: "The longest dam in India is:",
        questionHindi: "भारत का सबसे लंबा बांध है:",
        options: ["Bhakra Nangal / भाखड़ा नांगल", "Hirakud Dam / हीराकुंड बांध", "Tehri Dam / टिहरी बांध", "Mettur Dam / मेट्टूर बांध"],
        correct: 1
    },
    {
        id: 348,
        question: "The largest desert in the world is:",
        questionHindi: "विश्व का सबसे बड़ा मरुस्थल है:",
        options: ["Gobi / गोबी", "Thar / थार", "Sahara / सहारा", "Antarctica / अंटार्कटिका"],
        correct: 2
    },
    {
        id: 349,
        question: "The longest epic in the world is:",
        questionHindi: "विश्व का सबसे लंबा महाकाव्य है:",
        options: ["Ramayana / रामायण", "Mahabharatha / महाभारत", "Iliad / इलियड", "Odyssey / ओडिसी"],
        correct: 1
    },
    {
        id: 350,
        question: "Which ocean is the deepest and largest?",
        questionHindi: "कौन सा महासागर सबसे गहरा और सबसे बड़ा है?",
        options: ["Atlantic / अटलांटिक", "Indian / हिंद", "Pacific / प्रशांत", "Arctic / आर्कटिक"],
        correct: 2
    },
    {
        id: 351,
        question: "The hottest place in the world is:",
        questionHindi: "विश्व का सबसे गर्म स्थान है:",
        options: ["Barmer / बाड़मेर", "Azizia / अजीजिया", "Death Valley / डेथ वैली", "Jodhpur / जोधपुर"],
        correct: 1
    },
    {
        id: 352,
        question: "Which place records the heaviest rainfall in the world?",
        questionHindi: "विश्व में सर्वाधिक वर्षा वाला स्थान कौन सा है?",
        options: ["Cherrapunji / चेरापूंजी", "Mawsynram / मौसिनराम", "Assam / असम", "Meghalaya / मेघालय"],
        correct: 1
    },
    {
        id: 353,
        question: "The longest river in the world is:",
        questionHindi: "विश्व की सबसे लंबी नदी है:",
        options: ["Amazon / अमेज़न", "Ganges / गंगा", "Nile / नील", "Brahmaputra / ब्रह्मपुत्र"],
        correct: 2
    },
    {
        id: 354,
        question: "Which is the longest wall in the world?",
        questionHindi: "विश्व की सबसे लंबी दीवार कौन सी है?",
        options: ["Berlin Wall / बर्लिन की दीवार", "Great Wall of China / चीन की महान दीवार", "Hadrian's Wall / हेड्रियन की दीवार", "Red Fort Wall / लाल किले की दीवार"],
        correct: 1
    },
    {
        id: 355,
        question: "What is the capital of Australia?",
        questionHindi: "ऑस्ट्रेलिया की राजधानी क्या है?",
        options: ["Sydney / सिडनी", "Melbourne / मेलबर्न", "Canberra / कैनबरा", "Perth / पर्थ"],
        correct: 2
    },
    {
        id: 356,
        question: "The currency of Japan is:",
        questionHindi: "जापान की मुद्रा है:",
        options: ["Yuan / युआन", "Won / वोन", "Yen / येन", "Rial / रियाल"],
        correct: 2
    },
    {
        id: 357,
        question: "Where is the Golden Temple located?",
        questionHindi: "स्वर्ण मंदिर कहाँ स्थित है?",
        options: ["Ludhiana / लुधियाना", "Amritsar / अमृतसर", "Jalandhar / जालंधर", "Patiala / पटियाला"],
        correct: 1
    },
    {
        id: 358,
        question: "The Jallianwala Bagh tragedy occurred on:",
        questionHindi: "जलियांवाला बाग त्रासदी कब हुई थी?",
        options: ["April 13, 1919", "August 15, 1947", "January 26, 1950", "October 2, 1869"],
        correct: 0
    },
    {
        id: 359,
        question: "Where is the Eiffel Tower located?",
        questionHindi: "एफिल टॉवर कहाँ स्थित है?",
        options: ["London / लंदन", "New York / न्यूयॉर्क", "Paris / पेरिस", "Rome / रोम"],
        correct: 2
    },
    {
        id: 360,
        question: "Which city is known as the 'Holy City'?",
        questionHindi: "किस शहर को 'पवित्र शहर' (Holy City) कहा जाता है?",
        options: ["Mecca / मक्का", "Jerusalem / यरूशलेम", "Varanasi / वाराणसी", "Rome / रोम"],
        correct: 1
    },
    {
        id: 361,
        question: "The national animal of India is:",
        questionHindi: "भारत का राष्ट्रीय पशु है:",
        options: ["Lion / शेर", "Elephant / हाथी", "Tiger / बाघ", "Peacock / मोर"],
        correct: 2
    },
    {
        id: 362,
        question: "The ratio of the width of the National Flag to its length is:",
        questionHindi: "राष्ट्रीय ध्वज की चौड़ाई और उसकी लंबाई का अनुपात है:",
        options: ["3:2", "2:3", "1:2", "4:3"],
        correct: 1
    },
    {
        id: 363,
        question: "Who composed the National Anthem 'Jana-gana-mana'?",
        questionHindi: "'जन-गण-मन' की रचना किसने की थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sarojini Naidu / सरोजिनी नायडू", "Subhash Chandra Bose / सुभाष चंद्र बोस"],
        correct: 1
    },
    {
        id: 364,
        question: "The National Calendar commenced on:",
        questionHindi: "राष्ट्रीय कैलेंडर कब शुरू हुआ?",
        options: ["March 22, 1957", "August 15, 1947", "January 26, 1950", "April 1, 1951"],
        correct: 0
    },
    {
        id: 365,
        question: "Which schedule of the Constitution lists the recognized languages?",
        questionHindi: "संविधान की कौन सी अनुसूची मान्यता प्राप्त भाषाओं की सूची देती है?",
        options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
        correct: 1
    },
    {
        id: 366,
        question: "Which state is known as the 'Garden City of India'?",
        questionHindi: "भारत का 'उद्यान शहर' (Garden City) किसे कहा जाता है?",
        options: ["Kolkata / कोलकाता", "Bangalore / बैंगलोर", "Chandigarh / चंडीगढ़", "Mysore / मैसूर"],
        correct: 1
    },
    {
        id: 367,
        question: "The largest state in India by area is:",
        questionHindi: "क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य है:",
        options: ["Uttar Pradesh / उत्तर प्रदेश", "Madhya Pradesh / मध्य प्रदेश", "Rajasthan / राजस्थान", "Maharashtra / महाराष्ट्र"],
        correct: 2
    },
    {
        id: 368,
        question: "When did the Constituent Assembly first meet?",
        questionHindi: "संविधान सभा की पहली बैठक कब हुई थी?",
        options: ["August 15, 1947", "January 26, 1950", "December 9, 1946", "November 26, 1949"],
        correct: 2
    },
    {
        id: 369,
        question: "Who was the Chairman of the Drafting Committee of the Constitution?",
        questionHindi: "संविधान की मसौदा समिति के अध्यक्ष कौन थे?",
        options: ["Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Sardar Patel / सरदार पटेल"],
        correct: 2
    },
    {
        id: 370,
        question: "What is the tenure of the President of India?",
        questionHindi: "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
        options: ["4 years", "6 years", "5 years", "10 years"],
        correct: 2
    },
    {
        id: 371,
        question: "The minimum age to become the President of India is:",
        questionHindi: "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु क्या है?",
        options: ["25 years", "30 years", "35 years", "18 years"],
        correct: 2
    },
    {
        id: 372,
        question: "Who is the ex-officio Chairman of the Rajya Sabha?",
        questionHindi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
        options: ["Prime Minister / प्रधानमंत्री", "President / राष्ट्रपति", "Vice-President / उपराष्ट्रपति", "Speaker / अध्यक्ष"],
        correct: 2
    },
    {
        id: 373,
        question: "A Money Bill can only originate in:",
        questionHindi: "धन विधेयक केवल कहाँ पेश किया जा सकता है?",
        options: ["Rajya Sabha / राज्यसभा", "Lok Sabha / लोकसभा", "Supreme Court / सुप्रीम कोर्ट", "Planning Commission / योजना आयोग"],
        correct: 1
    },
    {
        id: 374,
        question: "The retirement age for a Supreme Court judge is:",
        questionHindi: "सुप्रीम कोर्ट के न्यायाधीश की सेवानिवृत्ति की आयु है:",
        options: ["60 years", "62 years", "65 years", "70 years"],
        correct: 2
    },
    {
        id: 375,
        question: "Which writ literally means 'you should have the body'?",
        questionHindi: "किस रिट का शाब्दिक अर्थ है 'आपके पास शरीर होना चाहिए'?",
        options: ["Mandamus / परमादेश", "Quo Warranto / अधिकार पृच्छा", "Habeas Corpus / बंदी प्रत्यक्षीकरण", "Certiorari / उत्प्रेषण"],
        correct: 2
    },
    {
        id: 376,
        question: "The 42nd Amendment Act (1976) added which word to the Preamble?",
        questionHindi: "42वें संशोधन अधिनियम (1976) ने प्रस्तावना में कौन सा शब्द जोड़ा?",
        options: ["Sovereign / संप्रभु", "Socialist / समाजवादी", "Democratic / लोकतांत्रिक", "Republic / गणतंत्र"],
        correct: 1
    },
    {
        id: 377,
        question: "The Indus Valley Civilization flourished between:",
        questionHindi: "सिंधु घाटी सभ्यता का काल क्या था?",
        options: ["1000-500 BC", "2000-1700 BC", "3000-2500 BC", "1500-1000 BC"],
        correct: 1
    },
    {
        id: 378,
        question: "Where was the 'Great Bath' found?",
        questionHindi: "'विशाल स्नानागार' (Great Bath) कहाँ पाया गया था?",
        options: ["Harappa / हड़प्पा", "Lothal / लोथल", "Mohen-jo-Daro / मोहनजोदड़ो", "Kalibangan / कालीबंगन"],
        correct: 2
    },
    {
        id: 379,
        question: "Siddhartha was the original name of:",
        questionHindi: "सिद्धार्थ किसका मूल नाम था?",
        options: ["Mahavira / महावीर", "Ashoka / अशोक", "Buddha / बुद्ध", "Kanishka / कनिष्क"],
        correct: 2
    },
    {
        id: 380,
        question: "Who was the founder of the Maurya Dynasty?",
        questionHindi: "मौर्य वंश का संस्थापक कौन था?",
        options: ["Bindusara / बिन्दुसार", "Ashoka / अशोक", "Chandra Gupta Maurya / चंद्रगुप्त मौर्य", "Samudra Gupta / समुद्रगुप्त"],
        correct: 2
    },
    {
        id: 381,
        question: "Which king is known as the 'Indian Napoleon'?",
        questionHindi: "किस राजा को 'भारतीय नेपोलियन' कहा जाता है?",
        options: ["Ashoka / अशोक", "Samudra Gupta / समुद्रगुप्त", "Chandra Gupta II / चंद्रगुप्त द्वितीय", "Harsha / हर्ष"],
        correct: 1
    },
    {
        id: 382,
        question: "The First Battle of Panipat was fought in:",
        questionHindi: "पानीपत की पहली लड़ाई किस वर्ष हुई थी?",
        options: ["1556", "1761", "1526", "1191"],
        correct: 2
    },
    {
        id: 383,
        question: "Who founded the religion 'Din-i-Ilahi'?",
        questionHindi: "'दीन-ए-इलाही' धर्म की स्थापना किसने की?",
        options: ["Babar / बाबर", "Akbar / अकबर", "Shah Jahan / शाहजहाँ", "Aurangzeb / औरंगजेब"],
        correct: 1
    },
    {
        id: 384,
        question: "Who was the first Governor-General of Free India?",
        questionHindi: "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
        options: ["C. Rajagopalachari / सी. राजगोपालाचारी", "Lord Mountbatten / लॉर्ड माउंटबेटन", "Lord Canning / लॉर्ड कैनिंग", "Warren Hastings / वारेन हेस्टिंग्स"],
        correct: 1
    },
    {
        id: 385,
        question: "Who gave the slogan 'Swaraj is my birthright'?",
        questionHindi: "'स्वराज मेरा जन्मसिद्ध अधिकार है' का नारा किसने दिया था?",
        options: ["Nehru / नेहरू", "Bhagat Singh / भगत सिंह", "Bal Gangadhar Tilak / बाल गंगाधर तिलक", "Mahatma Gandhi / महात्मा गांधी"],
        correct: 2
    },
    {
        id: 386,
        question: "Archimedes' Principle deals with:",
        questionHindi: "आर्कमिडीज का सिद्धांत किससे संबंधित है?",
        options: ["Gravity / गुरुत्वाकर्षण", "Upward thrust in liquid / तरल में ऊपर की ओर उछाल", "Laws of Motion / गति के नियम", "Electricity / बिजली"],
        correct: 1
    },
    {
        id: 387,
        question: "Which instrument measures atmospheric pressure?",
        questionHindi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options: ["Ammeter / एमीटर", "Barometer / बैरोमीटर", "Hygrometer / हाइग्रोमीटर", "Thermometer / थर्मामीटर"],
        correct: 1
    },
    {
        id: 388,
        question: "Knot is a unit for measuring:",
        questionHindi: "नॉट (Knot) किसकी माप की इकाई है?",
        options: ["Sound / ध्वनि", "Light / प्रकाश", "Speed of ships / जहाजों की गति", "Depth of water / पानी की गहराई"],
        correct: 2
    },
    {
        id: 389,
        question: "Who discovered Penicillin?",
        questionHindi: "पेनिसिलिन की खोज किसने की थी?",
        options: ["Louis Pasteur / लुई पाश्चर", "Alexander Fleming / अलेक्जेंडर फ्लेमिंग", "Ronald Ross / रोनाल्ड रॉस", "Edward Jenner / एडवर्ड जेनर"],
        correct: 1
    },
    {
        id: 390,
        question: "Deficiency of Vitamin C causes:",
        questionHindi: "विटामिन सी की कमी से कौन सा रोग होता है?",
        options: ["Rickets / रिकेट्स", "Beriberi / बेरीबेरी", "Scurvy / स्कर्वी", "Night Blindness / रतौंधी"],
        correct: 2
    },
    {
        id: 391,
        question: "Which animal is called the 'Ship of the Desert'?",
        questionHindi: "किस जानवर को 'रेगिस्तान का जहाज' कहा जाता है?",
        options: ["Horse / घोड़ा", "Camel / ऊंट", "Elephant / हाथी", "Donkey / गधा"],
        correct: 1
    },
    {
        id: 392,
        question: "India's first satellite was named:",
        questionHindi: "भारत के पहले उपग्रह का नाम क्या था?",
        options: ["Bhaskara / भास्कर", "Rohini / रोहिणी", "Aryabhata / आर्यभट्ट", "Insat / इनसैट"],
        correct: 2
    },
    {
        id: 393,
        question: "Who was the first Indian to travel in space?",
        questionHindi: "अंतरिक्ष में यात्रा करने वाले पहले भारतीय कौन थे?",
        options: ["Kalpana Chawla / कल्पना चावला", "Rakesh Sharma / राकेश शर्मा", "Sunita Williams / सुनीता विलियम्स", "Ravish Malhotra / रवीश मल्होत्रा"],
        correct: 1
    },
    {
        id: 394,
        question: "Bharatnatyam is the classical dance of which state?",
        questionHindi: "भरतनाट्यम किस राज्य का शास्त्रीय नृत्य है?",
        options: ["Kerala / केरल", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु", "Odisha / उड़ीसा"],
        correct: 2
    },
    {
        id: 395,
        question: "Who wrote the book 'Gitanjali'?",
        questionHindi: "'गीतांजलि' पुस्तक किसने लिखी थी?",
        options: ["Bankim Chandra Chatterjee / बंकिम चंद्र चटर्जी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sarojini Naidu / सरोजिनी नायडू", "Mahatma Gandhi / महात्मा गांधी"],
        correct: 1
    },
    {
        id: 396,
        question: "The first person to land on the Moon was:",
        questionHindi: "चंद्रमा पर उतरने वाला पहला व्यक्ति कौन था?",
        options: ["Yuri Gagarin / यूरी गागरिन", "Neil Armstrong / नील आर्मस्ट्रांग", "Edwin Aldrin / एडविन एल्ड्रिन", "Michael Collins / माइकल कोलिन्स"],
        correct: 1
    },
    {
        id: 397,
        question: "The first Five-Year Plan in India was launched in:",
        questionHindi: "भारत में पहली पंचवर्षीय योजना कब शुरू हुई?",
        options: ["1947", "1950", "1951", "1956"],
        correct: 2
    },
    {
        id: 398,
        question: "When did the United Nations officially come into existence?",
        questionHindi: "संयुक्त राष्ट्र आधिकारिक तौर पर कब अस्तित्व में आया?",
        options: ["Oct 24, 1944", "Oct 24, 1945", "June 26, 1945", "Aug 15, 1947"],
        correct: 1
    },
    {
        id: 399,
        question: "Who is known as the 'Iron Man of India'?",
        questionHindi: "किसे 'भारत के लौह पुरुष' के रूप में जाना जाता है?",
        options: ["Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल", "Subhash Chandra Bose / सुभाष चंद्र बोस", "Bhagat Singh / भगत सिंह", "Lala Lajpat Rai / लाला लाजपत राय"],
        correct: 0
    },
    {
        id: 400,
        question: "Which instrument measures the purity of milk?",
        questionHindi: "दूध की शुद्धता किस उपकरण से मापी जाती है?",
        options: ["Hydrometer / हाइड्रोमीटर", "Lactometer / लैक्टोमीटर", "Barometer / बैरोमीटर", "Thermometer / थर्मामीटर"],
        correct: 1
    },
    {
        id: 401,
        question: "Who was the President of the Constituent Assembly?",
        questionHindi: "संविधान सभा के अध्यक्ष कौन थे?",
        options: ["Dr. B.R. Ambedkar / डॉ. बी.आर. अंबेडकर", "Dr. Rajendra Prasad / डॉ. राजेंद्र प्रसाद", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Sardar Patel / सरदार पटेल"],
        correct: 1
    },
    {
        id: 402,
        question: "The 'Quit India' resolution was passed in:",
        questionHindi: "'भारत छोड़ो' प्रस्ताव कब पारित किया गया था?",
        options: ["1930", "1942", "1919", "1947"],
        correct: 1
    },
    {
        id: 403,
        question: "What is the unit of electrical resistance?",
        questionHindi: "विद्युत प्रतिरोध की इकाई क्या है?",
        options: ["Volt / वोल्ट", "Ampere / एम्पीयर", "Ohm / ओम", "Watt / वाट"],
        correct: 2
    },
    {
        id: 404,
        question: "Who discovered America in 1492?",
        questionHindi: "1492 में अमेरिका की खोज किसने की थी?",
        options: ["Vasco-da-Gama / वास्को-डि-गामा", "Christopher Columbus / क्रिस्टोफर कोलंबस", "Magellan / मैगलन", "Robert Peary / रॉबर्ट पियरी"],
        correct: 1
    },
    {
        id: 405,
        question: "Which planet is known as the 'Red Planet'?",
        questionHindi: "किस ग्रह को 'लाल ग्रह' के रूप में जाना जाता है?",
        options: ["Venus / शुक्र", "Mars / मंगल", "Jupiter / बृहस्पति", "Saturn / शनि"],
        correct: 1
    },
    {
        id: 406,
        question: "The Battle of Plassey was fought in:",
        questionHindi: "प्लासी की लड़ाई किस वर्ष हुई थी?",
        options: ["1526", "1757", "1764", "1857"],
        correct: 1
    },
    {
        id: 407,
        question: "Who founded the Arya Samaj?",
        questionHindi: "आर्य समाज की स्थापना किसने की?",
        options: ["Raja Rammohan Roy / राजा राममोहन राय", "Swami Dayanand Saraswati / स्वामी दयानंद सरस्वती", "Swami Vivekananda / स्वामी विवेकानंद", "Ishwar Chandra Vidyasagar / ईश्वर चंद्र विद्यासागर"],
        correct: 1
    },
    {
        id: 408,
        question: "The first Indian woman to scale Mount Everest was:",
        questionHindi: "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला कौन थी?",
        options: ["Santosh Yadav / संतोष यादव", "Bachendri Pal / बछेंद्री पाल", "Arati Saha / आरती साहा", "Dicky Dolma / डिकी डोलमा"],
        correct: 1
    },
    {
        id: 409,
        question: "Who was the first Viceroy of India?",
        questionHindi: "भारत के प्रथम वायसराय कौन थे?",
        options: ["Warren Hastings / वारेन हेस्टिंग्स", "Lord Canning / लॉर्ड कैनिंग", "Lord Mountbatten / लॉर्ड माउंटबेटन", "Robert Clive / रॉबर्ट क्लाइव"],
        correct: 1
    },
    {
        id: 410,
        question: "Mahatma Gandhi's birthday, October 2, is observed as:",
        questionHindi: "महात्मा गांधी के जन्मदिन, 2 अक्टूबर को किस रूप में मनाया जाता है?",
        options: ["Teachers' Day / शिक्षक दिवस", "Martyrs' Day / शहीद दिवस", "National Day in USA / यूएसए में राष्ट्रीय दिवस", "Children’s Day / बाल दिवस"],
        correct: 2
    },
    {
        id: 411,
        question: "Who was the political guru of Mahatma Gandhi?",
        questionHindi: "महात्मा गांधी के राजनीतिक गुरु कौन थे?",
        options: ["Bal Gangadhar Tilak / बाल गंगाधर तिलक", "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Sardar Patel / सरदार पटेल"],
        correct: 1
    },
    {
        id: 412,
        question: "What is the name of Mahatma Gandhi's autobiography?",
        questionHindi: "महात्मा गांधी की आत्मकथा का नाम क्या है?",
        options: ["Discovery of India / भारत की खोज", "My Experiments with Truth / सत्य के साथ मेरे प्रयोग", "Gitanjali / गीतांजलि", "Unhappy India / दुखी भारत"],
        correct: 1
    },
    {
        id: 413,
        question: "Who gave the title 'Mahatma' to Gandhiji?",
        questionHindi: "गांधीजी को 'महात्मा' की उपाधि किसने दी थी?",
        options: ["Subhash Chandra Bose / सुभाष चंद्र बोस", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Winston Churchill / विंस्टन चर्चिल"],
        correct: 1
    },
    {
        id: 414,
        question: "In which year was Mahatma Gandhi born?",
        questionHindi: "महात्मा गांधी का जन्म किस वर्ष हुआ था?",
        options: ["1857", "1869", "1885", "1901"],
        correct: 1
    },
    {
        id: 415,
        question: "Where did Mahatma Gandhi start his first Satyagraha in India?",
        questionHindi: "महात्मा गांधी ने भारत में अपना पहला सत्याग्रह कहाँ शुरू किया था?",
        options: ["Dandi / दांडी", "Champaran / चंपारण", "Sabarmati / साबरमती", "Kheda / खेड़ा"],
        correct: 1
    },
    {
        id: 416,
        question: "The 'Dandi March' was started in which year?",
        questionHindi: "'दांडी मार्च' किस वर्ष शुरू किया गया था?",
        options: ["1919", "1930", "1942", "1947"],
        correct: 1
    },
    {
        id: 417,
        question: "Who is considered the 'Father of Modern India'?",
        questionHindi: "'आधुनिक भारत का जनक' किसे माना जाता है?",
        options: ["Mahatma Gandhi / महात्मा गांधी", "Raja Rammohan Roy / राजा राममोहन राय", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Swami Vivekananda / स्वामी विवेकानंद"],
        correct: 1
    },
    {
        id: 418,
        question: "The headquarters of WHO is in:",
        questionHindi: "WHO का मुख्यालय कहाँ है?",
        options: ["New York / न्यूयॉर्क", "Paris / पेरिस", "Geneva / जिनेवा", "Rome / रोम"],
        correct: 2
    },
    {
        id: 419,
        question: "Which is the highest peak in India?",
        questionHindi: "भारत की सबसे ऊँची चोटी कौन सी है?",
        options: ["Everest / एवरेस्ट", "Godwin Austen (K2) / गॉडविन ऑस्टेन", "Kanchenjunga / कंचनजंगा", "Anaimudi / अनाइमुडी"],
        correct: 1
    },
    {
        id: 420,
        question: "In which year did India become a Sovereign Democratic Republic?",
        questionHindi: "भारत किस वर्ष एक संप्रभु लोकतांत्रिक गणराज्य बना?",
        options: ["1947", "1949", "1950", "1952"],
        correct: 2
    }
];
