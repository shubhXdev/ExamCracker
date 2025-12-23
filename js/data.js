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
    }
];
