export type Lang = "el" | "en";

export const PROPERTY = {
  name: "LImeraView",
  location: { el: "Μονεμβασιά", en: "Gefyra · Monemvasia" },
  phone: "+30 6984419929",
  whatsapp: "https://wa.me/306984419929",
  email: "limeraview@gmail.com",
  website: "www.limeraview.gr",
  address: { el: "Γεφύρα, Νέα Μονεμβασιά, 230 70", en: "Gefyra, Nea Monemvasia, 230 70" },
  guideUrl: "https://lekkodimitrisrooms.gr/guide",
  booking: "https://www.booking.com",
  google: "https://www.google.com/search?q=Lekko+Dimitris+Rooms+Monemvasia",
  wifi: { network: "LImeraView Guest", password: "Limera2026" },
  keybox: "B#2580",
  checkin: "12:00",
  checkout: "11:00",
  host: {
    el: "Η φιλοξενία για μένα δεν είναι δουλειά, είναι χαρά.",
    en: "I'm Dimitris Lekko. I'm always available for anything you need. Hospitality is not work for me it's joy.",
  },
};

export const NAV_ITEMS = {
  el: [
    { id: "welcome", label: "Αρχική" },
    { id: "wifi", label: "WiFi & Άφιξη" },
    { id: "rules", label: "Κανόνες" },
    { id: "appliances", label: "Συσκευές" },
    { id: "area", label: "Περιοχή" },
    { id: "services", label: "Αιτήματα" },
    { id: "faq", label: "FAQ" },
    { id: "review", label: "Αξιολόγηση" },
    { id: "qr", label: "QR Code" },
  ],
  en: [
    { id: "welcome", label: "Home" },
    { id: "wifi", label: "WiFi & Arrival" },
    { id: "rules", label: "Rules" },
    { id: "appliances", label: "Appliances" },
    { id: "area", label: "Area Guide" },
    { id: "services", label: "Requests" },
    { id: "faq", label: "FAQ" },
    { id: "review", label: "Reviews" },
    { id: "qr", label: "QR Code" },
  ],
};

export const CHECKIN_STEPS = {
  el: [
    { step: "Βρείτε το key box δίπλα στην εξώπορτα (μικρό γκρι κουτί στον τοίχο).", sub: "" },
    { step: "Εισάγετε τον κωδικό", sub: "Πατήστε ✓ για επιβεβαίωση." },
    { step: "Πάρτε το κλειδί και κλείστε ξανά το key box.", sub: "" },
    { step: "Ανεβείτε στον 1ο όροφο πρώτη πόρτα δεξιά.", sub: "Καλωσήρθατε!" },
  ],
  en: [
    { step: "Find the key box next to the front door (small grey box on the wall).", sub: "" },
    { step: "Enter the code", sub: "Press ✓ to confirm." },
    { step: "Take the key and close the key box again.", sub: "" },
    { step: "Go up to the 1st floor first door on the right.", sub: "Welcome!" },
  ],
};

export const CHECKOUT_STEPS = {
  el: [
    "Αφήστε το κλειδί μέσα στο δωμάτιο, πάνω στο τραπέζι.",
    "Κλείστε καλά πόρτες & παράθυρα, σβήστε τον κλιματισμό.",
    "Πετάξτε τα σκουπίδια στον κάδο έξω από το κτίριο.",
    "Στείλτε μου ένα WhatsApp όταν φύγετε καλό ταξίδι!",
  ],
  en: [
    "Leave the key inside the room on the table.",
    "Close all doors & windows, switch off the A/C.",
    "Dispose of rubbish in the bin outside the building.",
    "Send me a WhatsApp when you leave have a great trip!",
  ],
};

export const PROPERTY_INFO = {
  el: [
    { label: "Τύπος", value: "Ανεξάρτητο Δωμάτιο" },
    { label: "Όροφος", value: "1ος" },
    { label: "Χωρητικότητα", value: "2 άτομα (+ 1 παιδί)" },
    { label: "Κρεβάτι", value: "Διπλό 160×200 cm" },
    { label: "Επιφάνεια", value: "35 τ.μ. + βεράντα" },
    { label: "Ελάχιστη διαμονή", value: "2 νύχτες", badge: true },
  ],
  en: [
    { label: "Type", value: "Private Room" },
    { label: "Floor", value: "1st" },
    { label: "Capacity", value: "2 adults (+ 1 child)" },
    { label: "Bed", value: "Double 160×200 cm" },
    { label: "Size", value: "35 sqm + terrace" },
    { label: "Minimum stay", value: "2 nights", badge: true },
  ],
};

export const HOUSE_RULES = {
  el: [
    { ok: true, text: "Κατοικίδια επιτρέπονται", badge: "ΝΑΙ", type: "ok" },
    { ok: false, text: "Κάπνισμα εντός δωματίου", badge: "Μόνο βεράντα", type: "warn" },
    { ok: false, text: "Πάρτι ή εκδηλώσεις", badge: "ΌΧΙ", type: "no" },
    { ok: true, text: "Αφαίρεση παπουτσιών στην είσοδο", badge: "Παρακαλώ", type: "info" },
    { ok: true, text: "Ώρες ησυχίας 23:00 – 08:00", badge: "Σεβαστείτε γείτονες", type: "info" },
    { ok: true, text: "Αναφορά βλαβών αμέσως", badge: "Σημαντικό", type: "info" },
  ],
  en: [
    { ok: true, text: "Pets allowed", badge: "YES", type: "ok" },
    { ok: false, text: "Smoking indoors", badge: "Terrace only", type: "warn" },
    { ok: false, text: "Parties or events", badge: "NO", type: "no" },
    { ok: true, text: "Remove shoes at entrance", badge: "Please", type: "info" },
    { ok: true, text: "Quiet hours 23:00 – 08:00", badge: "Respect neighbours", type: "info" },
    { ok: true, text: "Report any damage immediately", badge: "Important", type: "info" },
  ],
};

export const APPLIANCES = {
  el: [
    {
      id: "washing",
      title: "Πλυντήριο Ρούχων",
      steps: [
        "Βάλτε ρούχα μη γεμίζετε πάνω από 2/3 του κάδου.",
        "Απορρυπαντικό στο συρτάρι: Α = προπλύση, Β = κύρια πλύση.",
        "Επιλέξτε πρόγραμμα: 40°C κανονικά · 30°C λεπτά υφάσματα.",
        "Πατήστε START. Διάρκεια: ~1.5 ώρα.",
      ],
      note: "",
    },
    {
      id: "kitchen",
      title: "Κουζίνα & Φούρνος",
      note: "Εστία επαγωγής (induction) απαιτεί μαγνητικά σκεύη.",
      steps: [
        "Τοποθετήστε το σκεύος στην εστία και πατήστε ON.",
        "Ρυθμίστε θερμοκρασία: 1–9 (1 = χαμηλή, 9 = μέγιστη).",
        "Φούρνος: στρέψτε στο πρόγραμμα, ρυθμίστε °C, πατήστε ON.",
        "Μετά τη χρήση: πατήστε OFF, καθαρίστε μετά την ψύξη.",
      ],
    },
    {
      id: "ac",
      title: "Κλιματισμός A/C",
      note: "",
      steps: [
        "Τηλεχειριστήριο: κόκκινο κουμπί ON/OFF.",
        "COOL = ψύξη · HEAT = θέρμανση · AUTO = αυτόματο.",
        "Προτεινόμενη θερμοκρασία: 24–26°C για άνετο ύπνο.",
        "Κλείνετε παράθυρα όταν λειτουργεί ο κλιματισμός.",
      ],
    },
    {
      id: "boiler",
      title: "Boiler & Ζεστό Νερό",
      note: "",
      steps: [
        "Ο boiler λειτουργεί αυτόματα πάντα υπάρχει ζεστό νερό.",
        "Αν δεν ζεσταίνει: ελέγξτε τον διακόπτη στο μπάνιο (ON).",
        "Αναμονή θέρμανσης: ~20 λεπτά.",
      ],
    },
  ],
  en: [
    {
      id: "washing",
      title: "Washing Machine",
      steps: [
        "Add clothes do not fill more than 2/3 of the drum.",
        "Detergent in drawer: A = pre-wash, B = main wash.",
        "Select programme: 40°C normal · 30°C delicates.",
        "Press START. Duration: ~1.5 hours.",
      ],
      note: "",
    },
    {
      id: "kitchen",
      title: "Kitchen & Oven",
      note: "Induction hob requires magnetic cookware.",
      steps: [
        "Place cookware on the hob and press ON.",
        "Set temperature: 1–9 (1 = low, 9 = maximum).",
        "Oven: turn to programme, set °C, press ON.",
        "After use: press OFF, clean once cooled.",
      ],
    },
    {
      id: "ac",
      title: "Air Conditioning A/C",
      note: "",
      steps: [
        "Remote control: red ON/OFF button.",
        "COOL = cooling · HEAT = heating · AUTO = automatic.",
        "Recommended temperature: 24–26°C for comfortable sleep.",
        "Keep windows closed when A/C is running.",
      ],
    },
    {
      id: "boiler",
      title: "Water Heater (Boiler)",
      note: "",
      steps: [
        "The boiler runs automatically hot water is always available.",
        "If no hot water: check the boiler switch in the bathroom (ON).",
        "Heating wait time: ~20 minutes.",
      ],
    },
  ],
};

export const AREA_PLACES = {
  el: {
    sights: [
      { name: "Μονεμβασιά Κάστρο", info: "Βυζαντινή κάτω πόλη, Γουλάς, Αγία Σοφία", dist: "2΄ πεζή" },
      { name: "Γέρακας (Φιόρδ)", info: "Γραφικό χωριό μέσα σε βαθύ φιόρδ", dist: "22 χλμ." },
      { name: "Κυπαρίσσι", info: "Απομονωμένο χωριό, κρυστάλλινα νερά", dist: "50 χλμ." },
      { name: "Ελαφόνησος", info: "Παραλία Σίμος, ferry από Πούντα", dist: "55 χλμ." },
      { name: "Μυστράς", info: "UNESCO Παλάτια Παλαιολόγων", dist: "100 χλμ." },
    ],
    beaches: [
      { name: "Κάκκαβος", info: "Βοτσαλωτή παραλία, κρυστάλλινα νερά, θέα στον βράχο Μονεμβασίας", dist: "300μ. · 4΄ πεζή" },
      { name: "Κουρκούλα", info: "Απάνεμος μώλος πριν την πύλη του Κάστρου ιδανικός για βουτιές", dist: "300μ. · 4΄ πεζή" },
      { name: "Πορτέλο", info: "Κρυμμένο γραφικό λιμανάκι στη νότια πλευρά των τειχών", dist: "2,1 χλμ. · 6΄ αυτ." },
      { name: "Αμπελάκια", info: "Ήρεμα νερά, beach bar με ξαπλώστρες και ελεύθερος χώρος", dist: "6 χλμ. · 9΄ αυτ." },
      { name: "Τηγάνια", info: "Μεγάλη αμμώδης παραλία με καταγάλανα νερά, τμήμα οργανωμένο", dist: "32 χλμ. · 32΄ αυτ." },
      { name: "Βλυχάδα", info: "Μια από τις ωραιότερες της Πελοποννήσου βουνό & θάλασσα", dist: "40 χλμ. · 60΄ αυτ." },
      { name: "Σίμος (Ελαφόνησος)", info: "Κορυφαία παραλία Μεσογείου, αμμόθινες, Natura με ferryboat από Πούντα", dist: "~1 ώρα" },
    ],
    food: [
      { name: "Ήδυσμα & Άρτυμα", info: "Δημιουργική ελληνική κουζίνα με ιδιαίτερες γεύσεις και όμορφη ατμόσφαιρα", dist: "Γεφύρα" },
      { name: "Αθίβολι", info: "Από τις πιο γνωστές γαστρονομικές επιλογές — σύγχρονη ελληνική κουζίνα", dist: "Γεφύρα" },
      { name: "Βόλτες", info: "Ατμοσφαιρικό περιβάλλον και προσεγμένα πιάτα, ιδανικό για βραδινό", dist: "Γεφύρα" },
      { name: "Οινόμελο", info: "Wine restaurant με τοπικές γεύσεις και χαλαρή ατμόσφαιρα μέσα στο κάστρο", dist: "Κάστρο" },
      { name: "Το Κανόνι", info: "Κλασική επιλογή στην Καστροπολιτεία με όμορφη θέα και ελληνική κουζίνα", dist: "Κάστρο" },
      { name: "Ματούλα Restaurant", info: "Παραδοσιακό εστιατόριο μέσα στο κάστρο με αυθεντικές ελληνικές γεύσεις", dist: "Κάστρο" },
      { name: "Ματθαίος", info: "Φρέσκο ψάρι και θαλασσινά δίπλα στη θάλασσα, με οικογενειακή ατμόσφαιρα", dist: "Λιμάνι" },
      { name: "Tartaruga di Mare", info: "Μεσογειακές γεύσεις και ρομαντική ατμόσφαιρα", dist: "Γεφύρα" },
      { name: "Akrogiali", info: "Παραθαλάσσια ταβέρνα με χαλαρό καλοκαιρινό vibe", dist: "Παραλία" },
      { name: "Kastraki", info: "Χαλαρό σημείο για φαγητό και καφέ με όμορφη θέα και ήρεμο περιβάλλον", dist: "Γεφύρα" },
      { name: "Aktaion", info: "Ήρεμο σημείο για φαγητό κοντά στη θάλασσα και θέα προς τον βράχο", dist: "Γεφύρα" },
      { name: "Μελιτζανάκια", info: "Παραδοσιακοί μεζέδες και αυθεντικές γεύσεις σε οικογενειακό περιβάλλον", dist: "Γεφύρα" },
    ],
    cafes: [
      { name: "Emvasis Café", info: "Από τα πιο ατμοσφαιρικά spots στο κάστρο — brunch, cocktail και βραδινό ποτό με μοναδική θέα", dist: "Κάστρο" },
      { name: "Malvasia Café", info: "Πρωινό, καφέ ή γλυκό με θέα στο Μυρτώο Πέλαγος και ήρεμη ατμόσφαιρα", dist: "Κάστρο" },
      { name: "Enetiko Café", info: "Χαλαρό σημείο για καφέ ή cocktail με θέα στον βράχο της Μονεμβασίας", dist: "Γεφύρα" },
      { name: "4 Lines", info: "Μοντέρνο café spot για καφέ, brunch, cocktail και καλοκαιρινές στιγμές δίπλα στη θάλασσα", dist: "Λιμάνι" },
      { name: "Da Vinci", info: "Cozy επιλογή για καφέ, γλυκό και απογευματινό χαλάρωμα με όμορφη ατμόσφαιρα", dist: "Γεφύρα" },
      { name: "Μορέως Ηδίστα", info: "Ιδανική επιλογή για take away καφέ, σνακ και γρήγορες στάσεις μέσα στη μέρα", dist: "Γεφύρα" },
    ],
  },
  en: {
    sights: [
      { name: "Monemvasia Castle", info: "Byzantine lower town, Goulas, Hagia Sophia", dist: "2 min walk" },
      { name: "Gerakas (Fjord)", info: "Picturesque village inside a deep fjord", dist: "22 km" },
      { name: "Kyparissi", info: "Isolated village, crystal-clear waters", dist: "50 km" },
      { name: "Elafonisos Island", info: "Simos beach, ferry from Pounta", dist: "55 km" },
      { name: "Mystras", info: "UNESCO Palaiologos Palaces", dist: "100 km" },
    ],
    beaches: [
      { name: "Kakkavos", info: "Pebble beach, crystal-clear water, view of the Monemvasia rock", dist: "300m · 4 min walk" },
      { name: "Kourkula", info: "Sheltered pier before the Castle gate ideal for diving", dist: "300m · 4 min walk" },
      { name: "Portelo", info: "Hidden picturesque cove on the south side of the castle walls", dist: "2.1 km · 6 min drive" },
      { name: "Ampelakia", info: "Calm waters, beach bar with sunbeds and free access area", dist: "6 km · 9 min drive" },
      { name: "Tigania", info: "Large sandy beach with turquoise water, partly organised", dist: "32 km · 32 min drive" },
      { name: "Vlichada", info: "One of the most beautiful in the Peloponnese mountain & sea", dist: "40 km · 60 min drive" },
      { name: "Simos (Elafonisos)", info: "Top Mediterranean beach, sand dunes, Natura protected ferry from Pounta", dist: "~1 hour" },
    ],
    food: [
      { name: "Idysma & Artima", info: "Creative Greek cuisine with distinctive flavours and a beautiful atmosphere", dist: "Gefyra" },
      { name: "Athivoli", info: "One of the best-known gastronomic spots in the area — modern Greek cuisine", dist: "Gefyra" },
      { name: "Voltes", info: "Atmospheric setting and refined dishes, ideal for dinner", dist: "Gefyra" },
      { name: "Oinomelo", info: "Wine restaurant with local flavours and a relaxed atmosphere inside the castle", dist: "Castle" },
      { name: "To Kanoni", info: "Classic choice in the Castle town with beautiful views and Greek cuisine", dist: "Castle" },
      { name: "Matoula Restaurant", info: "Traditional restaurant inside the castle with authentic Greek cuisine", dist: "Castle" },
      { name: "Matthaios", info: "Fresh fish and seafood by the sea, with a family atmosphere", dist: "Harbour" },
      { name: "Tartaruga di Mare", info: "Mediterranean flavours and a romantic atmosphere", dist: "Gefyra" },
      { name: "Akrogiali", info: "Seafront tavern with a relaxed summer vibe", dist: "Beach" },
      { name: "Kastraki", info: "Relaxed spot for food and coffee with a lovely view and calm setting", dist: "Gefyra" },
      { name: "Aktaion", info: "Peaceful dining close to the sea with views of the rock", dist: "Gefyra" },
      { name: "Melitzanakia", info: "Traditional mezes and authentic flavours in a family setting", dist: "Gefyra" },
    ],
    cafes: [
      { name: "Emvasis Café", info: "One of the most atmospheric spots in the castle — brunch, cocktails and evening drinks with a unique view", dist: "Castle" },
      { name: "Malvasia Café", info: "Breakfast, coffee or sweets with a view of the Mirtoon Sea and a calm atmosphere", dist: "Castle" },
      { name: "Enetiko Café", info: "Relaxed spot for coffee or cocktails with a view of the Monemvasia rock", dist: "Gefyra" },
      { name: "4 Lines", info: "Modern café spot for coffee, brunch, cocktails and relaxed summer moments by the sea", dist: "Harbour" },
      { name: "Da Vinci", info: "Cosy choice for coffee, sweets and an afternoon unwind in a lovely atmosphere", dist: "Gefyra" },
      { name: "Moreos Idista", info: "Ideal for take-away coffee, snacks and quick stops during the day", dist: "Gefyra" },
    ],
  },
};

export const SERVICES = {
  el: [
    { id: "late", title: "Αργό Check-out", sub: "Αναχώρηση μετά τις 11:00" },
    { id: "early", title: "Πρώιμο Check-in", sub: "Άφιξη πριν τις 12:00" },
    { id: "transfer", title: "Μεταφορά (Transfer)", sub: "Αεροδρόμιο, σταθμός, προορισμός" },
    { id: "clean", title: "Επιπλέον Καθαρισμός", sub: "Ενδιάμεσος καθαρισμός δωματίου" },
    { id: "tour", title: "Εκδρομή & Ξενάγηση", sub: "Τοπικές εκδρομές, boat trips" },
    { id: "other", title: "Άλλο Αίτημα", sub: "Ό,τι άλλο χρειαστείτε" },
  ],
  en: [
    { id: "late", title: "Late Check-out", sub: "Depart after 11:00" },
    { id: "early", title: "Early Check-in", sub: "Arrive before 12:00" },
    { id: "transfer", title: "Transfer", sub: "Airport, station, or other destination" },
    { id: "clean", title: "Extra Cleaning", sub: "Mid-stay room cleaning" },
    { id: "tour", title: "Tour & Excursion", sub: "Local tours, boat trips" },
    { id: "other", title: "Other Request", sub: "Anything else you need" },
  ],
};

export const FAQS = {
  el: [
    { q: "Πού παρκάρω το αυτοκίνητό μου;", a: "Δωρεάν parking υπάρχει μπροστά από το κτίριο. Δεν χρειάζεται κράτηση." },
    { q: "Υπάρχει σούπερ μάρκετ κοντά;", a: "Ναι, σε απόσταση 4 λεπτών με τα πόδια υπάρχουν τοπικά μίνι μάρκετ." },
    { q: "Μπορώ να φέρω κατοικίδιο;", a: "Ναι! Κατοικίδια επιτρέπονται. Παρακαλώ ενημερώστε με κατά την κράτηση." },
    { q: "Τι ώρα είναι ανοιχτό το κάστρο;", a: "Καθημερινά 08:00–20:00 (θερινό) και 08:30–17:00 (χειμερινό). Η είσοδος είναι ελεύθερη." },
    { q: "Πώς πάω στην Ελαφόνησο;", a: "Οδηγήστε 55 χλμ. νοτιοδυτικά μέχρι την Πούντα, εκεί παίρνετε ferry. Συνιστούμε πρωινή αναχώρηση." },
    { q: "Υπάρχει φαρμακείο κοντά;", a: "Φαρμακείο: 5 λεπτά πεζή. Κέντρο Υγείας Μολάων: 25 χλμ. Νοσοκομείο Σπάρτης: 75 χλμ." },
    { q: "Πού πετώ τα σκουπίδια;", a: "Κάδοι αποριμμάτων & ανακύκλωσης βρίσκονται έξω από την κεντρική είσοδο." },
    { q: "Μπορώ να κάνω check-in νωρίτερα;", a: "Στείλτε αίτημα μέσα από την ενότητα «Αιτήματα». Εξαρτάται από τη διαθεσιμότητα." },
  ],
  en: [
    { q: "Where do I park my car?", a: "Free parking is available in front of the building. No reservation needed." },
    { q: "Is there a supermarket nearby?", a: "Yes, local mini-markets are within 4 minutes' walk with basic essentials." },
    { q: "Can I bring my pet?", a: "Yes! Pets are welcome. Please let me know at the time of booking." },
    { q: "What time is the castle open?", a: "Daily 08:00–20:00 (summer) and 08:30–17:00 (winter). Admission is free." },
    { q: "How do I get to Elafonisos?", a: "Drive 55 km southwest to Pounta and take the ferry. We recommend an early morning departure." },
    { q: "Is there a pharmacy nearby?", a: "Pharmacy: 5 min walk. Health Centre Molaoi: 25 km. Hospital Sparti: 75 km." },
    { q: "Where do I put the rubbish?", a: "Rubbish and recycling bins are outside the main building entrance." },
    { q: "Can I check in early?", a: "Send a request via the 'Requests' section. It depends on availability." },
  ],
};

export const QR_TIPS = {
  el: ["Στην πόρτα του δωματίου", "Στο ψυγείο / κουζίνα", "Στο email επιβεβαίωσης κράτησης", "Στο WhatsApp μήνυμα αφίξεως"],
  en: ["On the room door", "On the fridge / kitchen", "In the booking confirmation email", "In the WhatsApp arrival message"],
};

export const AMENITIES = {
  el: [
    "Ανεμιστήρες",
    "Αίθριο & μπαλκόνι",
    "Ανιχνευτής καπνού",
    "Πυροσβεστήρας",
    "Κλιματισμός",
    "Πλυντήριο πιάτων",
    "Πλυντήριο ρούχων",
    "Μηχανή espresso",
    "Βραστήρας",
    "Φούρνος & εστίες",
    "Κουτί πρώτων βοηθειών",
    "Καφετιέρα φίλτρου",
    "Επιτρέπονται κατοικίδια",
    "Ψυγείο",
    "Πλήρως εξοπλισμένη κουζίνα",
    "Σεσουάρ μαλλιών",
    "Σίδερο & σιδερώστρα",
    "Πετσέτες & σεντόνια",
    "Απλώστρα ρούχων",
  ],
  en: [
    "Fans",
    "Atrium & balcony",
    "Smoke detector",
    "Fire extinguisher",
    "Air conditioning",
    "Dishwasher",
    "Washing machine",
    "Espresso machine",
    "Kettle",
    "Oven & stove",
    "First aid kit",
    "Filter coffee maker",
    "Pets allowed",
    "Refrigerator",
    "Fully equipped kitchen",
    "Hair dryer",
    "Iron & ironing board",
    "Towels & bed linen",
    "Clothesline",
  ],
};
