export type Lang = "el" | "en";

export const PROPERTY = {
  name: "Lekko Dimitris Rooms",
  location: { el: "Γεφύρα · Μονεμβασιά", en: "Gefyra · Monemvasia" },
  phone: "+30 698 000 0000",
  whatsapp: "https://wa.me/306980000000",
  email: "info@lekkodimitrisrooms.gr",
  address: { el: "Γεφύρα, Νέα Μονεμβασιά, 230 70", en: "Gefyra, Nea Monemvasia, 230 70" },
  guideUrl: "https://lekkodimitrisrooms.gr/guide",
  booking: "https://www.booking.com",
  google: "https://www.google.com/search?q=Lekko+Dimitris+Rooms+Monemvasia",
  wifi: { network: "LekkoRooms_WiFi", password: "monemvasia2025" },
  keybox: "B#2580",
  checkin: "14:00",
  checkout: "11:00",
  host: {
    el: "Είμαι ο Δημήτρης Λέκκος. Είμαι πάντα διαθέσιμος για οτιδήποτε χρειαστείτε. Η φιλοξενία για μένα δεν είναι δουλειά — είναι χαρά.",
    en: "I'm Dimitris Lekko. I'm always available for anything you need. Hospitality is not work for me — it's joy.",
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
    { step: "Ανεβείτε στον 1ο όροφο — πρώτη πόρτα δεξιά.", sub: "Καλωσήρθατε!" },
  ],
  en: [
    { step: "Find the key box next to the front door (small grey box on the wall).", sub: "" },
    { step: "Enter the code", sub: "Press ✓ to confirm." },
    { step: "Take the key and close the key box again.", sub: "" },
    { step: "Go up to the 1st floor — first door on the right.", sub: "Welcome!" },
  ],
};

export const CHECKOUT_STEPS = {
  el: [
    "Αφήστε το κλειδί μέσα στο δωμάτιο, πάνω στο τραπέζι.",
    "Κλείστε καλά πόρτες & παράθυρα, σβήστε τον κλιματισμό.",
    "Πετάξτε τα σκουπίδια στον κάδο έξω από το κτίριο.",
    "Στείλτε μου ένα WhatsApp όταν φύγετε — καλό ταξίδι!",
  ],
  en: [
    "Leave the key inside the room on the table.",
    "Close all doors & windows, switch off the A/C.",
    "Dispose of rubbish in the bin outside the building.",
    "Send me a WhatsApp when you leave — have a great trip!",
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
        "Βάλτε ρούχα — μη γεμίζετε πάνω από 2/3 του κάδου.",
        "Απορρυπαντικό στο συρτάρι: Α = προπλύση, Β = κύρια πλύση.",
        "Επιλέξτε πρόγραμμα: 40°C κανονικά · 30°C λεπτά υφάσματα.",
        "Πατήστε START. Διάρκεια: ~1.5 ώρα.",
      ],
      note: "",
    },
    {
      id: "kitchen",
      title: "Κουζίνα & Φούρνος",
      note: "Εστία επαγωγής (induction) — απαιτεί μαγνητικά σκεύη.",
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
        "Ο boiler λειτουργεί αυτόματα — πάντα υπάρχει ζεστό νερό.",
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
        "Add clothes — do not fill more than 2/3 of the drum.",
        "Detergent in drawer: A = pre-wash, B = main wash.",
        "Select programme: 40°C normal · 30°C delicates.",
        "Press START. Duration: ~1.5 hours.",
      ],
      note: "",
    },
    {
      id: "kitchen",
      title: "Kitchen & Oven",
      note: "Induction hob — requires magnetic cookware.",
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
        "The boiler runs automatically — hot water is always available.",
        "If no hot water: check the boiler switch in the bathroom (ON).",
        "Heating wait time: ~20 minutes.",
      ],
    },
  ],
};

export const AREA_PLACES = {
  el: {
    sights: [
      { name: "Μονεμβασιά — Κάστρο", info: "Βυζαντινή κάτω πόλη, Γουλάς, Αγία Σοφία", dist: "2΄ πεζή" },
      { name: "Γέρακας (Φιόρδ)", info: "Γραφικό χωριό μέσα σε βαθύ φιόρδ", dist: "22 χλμ." },
      { name: "Κυπαρίσσι", info: "Απομονωμένο χωριό, κρυστάλλινα νερά", dist: "50 χλμ." },
      { name: "Ελαφόνησος", info: "Παραλία Σίμος, ferry από Πούντα", dist: "55 χλμ." },
      { name: "Μυστράς", info: "UNESCO — Παλάτια Παλαιολόγων", dist: "100 χλμ." },
    ],
    beaches: [
      { name: "Παραλία Γεφύρας", info: "Αμμουδιά, ρηχά γαλαζοπράσινα νερά", dist: "5΄ πεζή" },
      { name: "Πορτέλλο", info: "Κολύμπι δίπλα στα θαλάσσια τείχη", dist: "3΄ πεζή" },
      { name: "Μαραθιάς", info: "Χρυσαφένια άμμος, ρηχά νερά", dist: "25 χλμ." },
    ],
    food: [
      { name: "Ταβέρνες Λιμανιού", info: "Φρέσκα ψάρια, θαλασσινά", dist: "5΄ πεζή" },
      { name: "Εστιατόρια Κάστρου", info: "Τοπική κουζίνα, θέα Αιγαίο", dist: "5΄ πεζή" },
      { name: "Εργαστήρια Γλυκών", info: "Γλυκά κουταλιού, λουκούμια", dist: "3΄ πεζή" },
      { name: "Super Market", info: "Βασικά τρόφιμα & ανάγκες", dist: "4΄ πεζή" },
    ],
  },
  en: {
    sights: [
      { name: "Monemvasia Castle", info: "Byzantine lower town, Goulas, Hagia Sophia", dist: "2 min walk" },
      { name: "Gerakas (Fjord)", info: "Picturesque village inside a deep fjord", dist: "22 km" },
      { name: "Kyparissi", info: "Isolated village, crystal-clear waters", dist: "50 km" },
      { name: "Elafonisos Island", info: "Simos beach, ferry from Pounta", dist: "55 km" },
      { name: "Mystras", info: "UNESCO — Palaiologos Palaces", dist: "100 km" },
    ],
    beaches: [
      { name: "Gefyra Beach", info: "Sandy beach, shallow turquoise water", dist: "5 min walk" },
      { name: "Portello", info: "Swimming next to the sea walls", dist: "3 min walk" },
      { name: "Marathias", info: "Golden sand, shallow water", dist: "25 km" },
    ],
    food: [
      { name: "Harbour Tavernas", info: "Fresh fish & seafood", dist: "5 min walk" },
      { name: "Castle Restaurants", info: "Local cuisine, Aegean views", dist: "5 min walk" },
      { name: "Sweet Workshops", info: "Spoon sweets, loukoumia", dist: "3 min walk" },
      { name: "Super Market", info: "Basic groceries & essentials", dist: "4 min walk" },
    ],
  },
};

export const SERVICES = {
  el: [
    { id: "late", title: "Αργό Check-out", sub: "Αναχώρηση μετά τις 11:00" },
    { id: "early", title: "Πρώιμο Check-in", sub: "Άφιξη πριν τις 14:00" },
    { id: "transfer", title: "Μεταφορά (Transfer)", sub: "Αεροδρόμιο, σταθμός, προορισμός" },
    { id: "clean", title: "Επιπλέον Καθαρισμός", sub: "Ενδιάμεσος καθαρισμός δωματίου" },
    { id: "tour", title: "Εκδρομή & Ξενάγηση", sub: "Τοπικές εκδρομές, boat trips" },
    { id: "other", title: "Άλλο Αίτημα", sub: "Ό,τι άλλο χρειαστείτε" },
  ],
  en: [
    { id: "late", title: "Late Check-out", sub: "Depart after 11:00" },
    { id: "early", title: "Early Check-in", sub: "Arrive before 14:00" },
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
