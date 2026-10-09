export interface AboutCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface SafetyTipItem {
  id: string;
  category: 'personal' | 'transport' | 'workplace' | 'online' | 'travel';
  title: string;
  shortDesc: string;
  doList: string[];
  avoidList: string[];
  keyAdvice: string;
  icon: string;
}

export interface SelfDefenceTip {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoints: string[];
  icon: string;
}

export interface DigitalSafetyCard {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  alertLevel: 'Essential' | 'High Priority' | 'Best Practice';
  icon: string;
}

export interface LegalRightCard {
  id: string;
  title: string;
  actName: string;
  summary: string;
  keyProvisions: string[];
  howToExercise: string;
  officialPortalUrl?: string;
  portalLabel?: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  service: string;
  availability: string;
  description: string;
  actionType: 'tel' | 'link';
  url?: string;
  isPrimary?: boolean;
}

export interface ChecklistItem {
  id: string;
  task: string;
  category: 'Daily' | 'Travel' | 'Digital' | 'Emergency';
  tip: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: 'importance',
    icon: 'ShieldCheck',
    title: 'Importance of Safety Awareness',
    description:
      'Understanding situational dynamics, identifying subtle red flags, and taking proactive measures significantly diminishes vulnerabilities in daily routines.',
    tag: 'Core Principle',
  },
  {
    id: 'empowerment',
    icon: 'Sparkles',
    title: 'Confidence & Self-Empowerment',
    description:
      'Safety stems from self-assurance and clear personal boundaries. When women are equipped with knowledge, they navigate environments with decisive strength.',
    tag: 'Empowerment',
  },
  {
    id: 'prevention',
    icon: 'Eye',
    title: 'Prevention & Risk Recognition',
    description:
      'Cultivating keen situational alertness allows early detection of unsafe circumstances before escalation, enabling calm and timely exit strategies.',
    tag: 'Proactive Action',
  },
  {
    id: 'resources',
    icon: 'Compass',
    title: 'Support Ecosystem Awareness',
    description:
      'Familiarity with institutional helplines, legal remedies, community safety networks, and rapid intervention protocols guarantees you are never alone.',
    tag: 'Support Systems',
  },
];

export const SAFETY_CATEGORIES = [
  { id: 'personal', label: 'Personal Safety' },
  { id: 'transport', label: 'Public Transport' },
  { id: 'workplace', label: 'Workplace Safety' },
  { id: 'online', label: 'Online Safety' },
  { id: 'travel', label: 'Travel Safety' },
] as const;

export const SAFETY_TIPS: SafetyTipItem[] = [
  {
    id: 'tip-personal-1',
    category: 'personal',
    title: 'Cultivating Situational Alertness',
    shortDesc: 'Stay conscious of spatial surroundings without feeling hyper-anxious.',
    doList: [
      'Keep your head up, maintain confident upright posture, and make periodic eye scans.',
      'Limit headphone usage to one ear at low volume while walking alone on streets.',
      'Take well-lit, active avenues even if the route takes a couple of minutes longer.',
    ],
    avoidList: [
      'Do not remain glued to your phone screen in unfamiliar or low-visibility areas.',
      'Avoid taking untested shortcuts through isolated alleys or desolate open parks.',
    ],
    keyAdvice: 'Trust gut instincts unconditionally. If a location or person feels off, alter your direction immediately.',
    icon: 'Compass',
  },
  {
    id: 'tip-personal-2',
    category: 'personal',
    title: 'Verbal Boundaries & Body Language',
    shortDesc: 'Command respect through decisive, non-aggressive communication.',
    doList: [
      'Use loud, clear, firm phrases like "Step back, please" or "Do not touch me".',
      'Keep a two-arm-distance buffer zone when engaging with strangers seeking directions.',
      'Direct inquiries toward nearby public shops or official security personnel.',
    ],
    avoidList: [
      'Avoid smiling out of awkward politeness when someone crosses comfort thresholds.',
      'Do not hesitate to draw public bystander attention if an individual persists.',
    ],
    keyAdvice: 'Your comfort and safety take absolute precedence over anyone else feeling embarrassed.',
    icon: 'Volume2',
  },
  {
    id: 'tip-transport-1',
    category: 'transport',
    title: 'Cabs, Rideshares & Auto Rickshaws',
    shortDesc: 'Essential verification protocols before boarding and en route.',
    doList: [
      'Verify number plate, driver photo, and vehicle model before opening the door.',
      'Activate app-based "Share Ride Status" or WhatsApp Live Location with a trusted contact.',
      'Sit directly behind the driver where you have physical space and rear mirror visibility.',
    ],
    avoidList: [
      'Never board an unmetered vehicle or one with tinted windows and hidden handles.',
      'Never accept open food, drinks, or unplanned route deviations without clear justification.',
    ],
    keyAdvice: 'Ensure child-lock features are deactivated by testing the interior handle upon settling inside.',
    icon: 'Car',
  },
  {
    id: 'tip-transport-2',
    category: 'transport',
    title: 'Buses, Metros & Suburban Trains',
    shortDesc: 'Strategic seating and crowd awareness on mass public transit.',
    doList: [
      'Prefer dedicated women-only coaches or seating areas near driver/conductor booths.',
      'Position yourself near exit doors during off-peak hours so you can disembark at any stop.',
      'Memorize station SOS alarm points and station master intercom locations.',
    ],
    avoidList: [
      'Avoid sleeping or wearing noise-canceling headphones when compartments are nearly empty.',
      'Do not disembark at pitch-black or deserted stops without confirmed pick-up arrangements.',
    ],
    keyAdvice: 'If followed while commuting, move immediately toward the station help kiosk or security staff.',
    icon: 'Navigation',
  },
  {
    id: 'tip-workplace-1',
    category: 'workplace',
    title: 'Navigating Late Shifts & Work Commutes',
    shortDesc: 'Securing safe departure and corporate transport accountability.',
    doList: [
      'Ensure company-provided cabs offer certified security escorts for drops post 8:00 PM.',
      'Insist that female employees are not dropped off last in an isolated location.',
      'Inform team leads or family when beginning a late evening commute from office premises.',
    ],
    avoidList: [
      'Do not rely on unverified freelance drivers for after-hours organizational travel.',
      'Avoid working alone in completely deserted floors without notifying on-duty building security.',
    ],
    keyAdvice: 'Familiarize yourself with company transport SOPs and emergency panic buttons on transport apps.',
    icon: 'Briefcase',
  },
  {
    id: 'tip-workplace-2',
    category: 'workplace',
    title: 'Professional Boundaries & POSH Awareness',
    shortDesc: 'Recognizing workplace harassment and knowing institutional channels.',
    doList: [
      'Keep written records (emails, chat logs, timestamps) of uncomfortable interactions.',
      'Know the members and contact email of your company’s Internal Complaints Committee (ICC).',
      'Address micro-transgressions early in written correspondence for an objective audit trail.',
    ],
    avoidList: [
      'Do not normalize unwelcome personal comments, inappropriate gifts, or coerced off-duty meets.',
      'Do not accept informal brush-offs when reporting persistent professional misconduct.',
    ],
    keyAdvice: 'Every organization with 10+ employees is legally mandated in India to maintain an active ICC.',
    icon: 'FileText',
  },
  {
    id: 'tip-online-1',
    category: 'online',
    title: 'Social Media & Profile Discretion',
    shortDesc: 'Preventing digital stalking and unwanted identity exposure.',
    doList: [
      'Set personal accounts to private mode and periodically audit follower lists.',
      'Disable automated geotagging in photos and stories before publishing them.',
      'Delay posting vacation pictures and exact venue tags until you have left the premises.',
    ],
    avoidList: [
      'Never reveal personal schedules, boarding pass barcodes, home landmarks, or routine jogging paths.',
      'Avoid accepting friend requests from newly created accounts with no mutual acquaintances.',
    ],
    keyAdvice: 'Digital footprints are durable; what you withhold from public spaces protects your physical reality.',
    icon: 'Lock',
  },
  {
    id: 'tip-online-2',
    category: 'online',
    title: 'Handling Stalking & Harassment Online',
    shortDesc: 'Systematic steps to preserve evidence and secure digital boundaries.',
    doList: [
      'Take high-resolution screenshots with visible URLs, handles, and timestamps before blocking.',
      'File complaints on the National Cyber Crime Reporting Portal (cybercrime.gov.in).',
      'Use platform-native harassment reporting tools with categorized evidence.',
    ],
    avoidList: [
      'Do not engage in hostile message exchanges that might escalate perpetrator aggression.',
      'Do not delete threatening messages before archiving certified copies for police reference.',
    ],
    keyAdvice: 'Online harassment, morphing, and non-consensual image distribution are cognizable offenses under IT Act.',
    icon: 'ShieldAlert',
  },
  {
    id: 'tip-travel-1',
    category: 'travel',
    title: 'Solo Travel & Lodging Safety',
    shortDesc: 'Smart hotel choices, check-in checks, and navigation strategies.',
    doList: [
      'Choose accommodations with 24/7 manned front desks, high security ratings, and central locations.',
      'Inspect room door deadbolts, secondary latches, and window locks immediately upon entry.',
      'Carry a lightweight portable rubber door stopper for added physical reinforcement inside.',
    ],
    avoidList: [
      'Never announce your room number loudly at reception or in crowded elevator spaces.',
      'Avoid arriving in unfamiliar cities past midnight without pre-booked verified transport.',
    ],
    keyAdvice: 'Always keep an emergency kit with offline maps, power bank, and local police station numbers.',
    icon: 'MapPin',
  },
];

export const SELF_DEFENCE_MODULES: SelfDefenceTip[] = [
  {
    id: 'sd-awareness',
    title: '1. Spatial & Situational Awareness',
    subtitle: 'The First & Most Crucial Defense Barrier',
    description:
      'True self-defense begins long before physical engagement. Being conscious of exits, light levels, room density, and behavioral shifts allows you to avoid danger entirely.',
    actionPoints: [
      'Scan perimeter exits whenever entering new spaces or transit vehicles.',
      'Observe behavioral anomalies like individuals lingering without purpose or shadowing paces.',
      'Maintain head-high posture that signals alertness and high difficulty as a target.',
    ],
    icon: 'Radar',
  },
  {
    id: 'sd-distance',
    title: '2. Maintaining The Reaction Buffer Zone',
    subtitle: 'Preserving Reaction Time & Physical Space',
    description:
      'Distance equals reaction time. Never let an aggressive stranger invade your intimate spatial radius without active disengagement.',
    actionPoints: [
      'Establish a strict 5 to 6 foot physical buffer zone between yourself and strangers.',
      'Use natural obstacles (benches, railings, store counters, vehicle hoods) as physical shields.',
      'Step back decisively with hands raised in open-palm stance to protect chest and face.',
    ],
    icon: 'Maximize2',
  },
  {
    id: 'sd-boundaries',
    title: '3. Firm Boundary Assertion & Verbal Command',
    subtitle: 'Breaking the Illusion of Compliance',
    description:
      'Perpetrators often rely on social pressure and hesitation. A piercing, decisive vocal command shatters intimidation and summons public witnesses.',
    actionPoints: [
      'Speak from the diaphragm with low, commanding volume: "NO! STOP! BACK OFF!"',
      'Avoid passive apologies or ambiguous phrasing like "Maybe later".',
      'Point directly at bystanders when asking for assistance: "You in the blue shirt, call 112 now!"',
    ],
    icon: 'Megaphone',
  },
  {
    id: 'sd-basics',
    title: '4. Basic Defensive Escape Awareness',
    subtitle: 'Disruption With Immediate Intent to Flee',
    description:
      'Self-defense is not sparring; its sole objective is sudden disruption followed by immediate sprinting to high-traffic, safe locations.',
    actionPoints: [
      'Vulnerable targets for escape include eyes, throat, groin, shins, and ear slaps.',
      'Utilize everyday objects like metal water bottles, key clusters, or pens as impact multipliers.',
      'The moment an opening is created, disengage completely and sprint toward crowds or illuminated stores.',
    ],
    icon: 'Zap',
  },
  {
    id: 'sd-instructor',
    title: '5. Finding Qualified Professional Training',
    subtitle: 'Building Muscle Memory & De-escalation Skills',
    description:
      'Theoretical knowledge cannot replace hands-on adrenaline management. Look for practical combat defense programs over rigid sport tournaments.',
    actionPoints: [
      'Search for certified Krav Maga, Brazilian Jiu-Jitsu, or practical reality-based self-defense academies.',
      'Ensure the instructor emphasizes situational de-escalation, conflict prevention, and legal awareness.',
      'Attend regular refresher workshops to keep physical response instincts sharp and unhesitant.',
    ],
    icon: 'Award',
  },
];

export const DIGITAL_SAFETY_CARDS: DigitalSafetyCard[] = [
  {
    id: 'passwords-2fa',
    title: 'Robust Credentials & Two-Factor Authentication (2FA)',
    summary: 'Prevent unauthorized credential takeovers across personal and financial accounts.',
    steps: [
      'Use passphrases of 14+ characters combining symbols, numerals, and distinct phrases.',
      'Activate Authenticator Apps (Google/Microsoft Authenticator) instead of SMS OTPs where possible.',
      'Never reuse passwords between entertainment services and critical email or banking portals.',
      'Utilize encrypted password managers like Bitwarden or 1Password for zero-knowledge vaulting.',
    ],
    alertLevel: 'Essential',
    icon: 'KeyRound',
  },
  {
    id: 'social-privacy',
    title: 'Granular Social Media Privacy Configurations',
    summary: 'Seal information leaks that could enable real-life physical shadowing.',
    steps: [
      'Switch Instagram, Facebook, and personal LinkedIn accounts to private or restricted connection views.',
      'Turn off "Find me by phone number or email" in account discovery options.',
      'Review tagged photos before they appear on your public wall or profile feed.',
      'Revoke third-party app permissions connected to Facebook or Google sign-in.',
    ],
    alertLevel: 'Essential',
    icon: 'EyeOff',
  },
  {
    id: 'phishing-scams',
    title: 'Spotting Phishing, Malicious Links & Spoofing',
    summary: 'Identify deceitful psychological traps designed to extract sensitive data.',
    steps: [
      'Never click suspicious parcel delivery, job offer, or lottery links sent via SMS/WhatsApp.',
      'Verify sender domains: Look for subtle typos (e.g., support@paypa1.com instead of paypal.com).',
      'Never reveal bank OTP, UPI PIN, or card CVV to callers claiming to represent authorities.',
      'Verify bank or delivery queries by independently calling the official corporate customer care.',
    ],
    alertLevel: 'High Priority',
    icon: 'AlertTriangle',
  },
  {
    id: 'abuse-reporting',
    title: 'Blocking, Reporting & Archiving Cyberstalking',
    summary: 'Establish an airtight digital evidence trail while severing unwanted contacts.',
    steps: [
      'Do not delete abusive DMs; capture complete full-screen screenshots showing handles and date/time.',
      'Download complete message exports before blocking the harasser on WhatsApp or Telegram.',
      'Lodge formal reports on cybercrime.gov.in (National Cyber Crime Reporting Portal).',
      'Report abusive accounts to platform safety boards for terms-of-service violations.',
    ],
    alertLevel: 'High Priority',
    icon: 'UserX',
  },
  {
    id: 'photos-location',
    title: 'Protecting Personal Photos & Real-Time Geo-Data',
    summary: 'Prevent image misuse, deepfakes, and live spatial tracking.',
    steps: [
      'Disable GPS location metadata (EXIF tags) inside camera settings on your smartphone.',
      'Avoid sharing high-resolution photos that display house numbers, vehicle plates, or workplace badges.',
      'Be cautious with AI face morphing apps that upload your biometric likeness to overseas cloud servers.',
      'Audit app permissions to ensure maps and ride apps only access location "While Using the App".',
    ],
    alertLevel: 'Best Practice',
    icon: 'ShieldCheck',
  },
];

export const LEGAL_RIGHTS_DATA: LegalRightCard[] = [
  {
    id: 'dv-act',
    title: 'Protection from Domestic Violence',
    actName: 'Protection of Women from Domestic Violence Act (PWDVA), 2005',
    summary:
      'Offers civil remedies for women facing physical, emotional, verbal, economic, or sexual violence within a shared household.',
    keyProvisions: [
      'Right to Reside: Protects woman from illegal eviction from the shared matrimonial home.',
      'Protection Orders: Restrains the abuser from entering workplace or contacting the victim.',
      'Monetary Relief: Maintenance support for daily expenses, medical costs, and children upkeep.',
      'Custody & Shelter: Emergency interim custody of children and access to safe shelter homes.',
    ],
    howToExercise:
      'File an application before a Judicial Magistrate directly or through a Protection Officer / Service Provider in your district.',
    officialPortalUrl: 'https://ncw.nic.in',
    portalLabel: 'NCW Guidelines Portal',
  },
  {
    id: 'posh-act',
    title: 'Workplace Sexual Harassment Protections',
    actName: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH)',
    summary:
      'Guarantees safe working environments free from harassment, inappropriate advances, hostile work climates, or quid-pro-quo coercion.',
    keyProvisions: [
      'Internal Complaints Committee (ICC): Mandatory in every company or institution with 10+ employees.',
      'Local Complaints Committee (LCC): Setup at district level for unorganized sector or small firms.',
      'Confidentiality: Stringent protection of complainant identity with penalties for unauthorized disclosure.',
      'Interim Relief: Complainant can request paid leave up to 3 months or transfer during inquiry.',
    ],
    howToExercise:
      'Submit a written complaint to your workplace ICC within 3 months of the incident date.',
    officialPortalUrl: 'https://shebox.wcd.gov.in',
    portalLabel: 'SHe-Box Redressal Portal',
  },
  {
    id: 'zero-fir',
    title: 'Right to "Zero FIR" & Police Station Protocols',
    actName: 'Criminal Procedure Code & Supreme Court Guidelines (BNS)',
    summary:
      'Ensures that women can lodge a First Information Report (FIR) irrespective of jurisdictional boundaries.',
    keyProvisions: [
      'Zero FIR: Any police station in India must register an FIR for cognizable crimes without citing jurisdiction.',
      'Right to Privacy: Examination of female victims of sexual violence must occur at their residence or preferred venue.',
      'No Night Detention: Women cannot be summoned to police stations between sunset and sunrise for questioning.',
      'Female Police Officer: Statement must be recorded by a woman police officer or in presence of female attendants.',
    ],
    howToExercise:
      'Approach any nearest police post. If refusal occurs, escalate immediately to the Superintendent of Police or 112.',
    officialPortalUrl: 'https://ncrb.gov.in',
    portalLabel: 'NCRB Citizen Resources',
  },
  {
    id: 'dowry-harassment',
    title: 'Protection from Dowry & Cruelty',
    actName: 'Dowry Prohibition Act, 1961 & Indian Penal Code (IPC 498A / BNS 85-86)',
    summary:
      'Strict legal remedies against demands for dowry, mental harassment, emotional abuse, or physical cruelty by husband or in-laws.',
    keyProvisions: [
      'Demand of Dowry is an Offence: Giving, taking, or abetting dowry attracts prison terms.',
      'Non-Bailable Cognizable Offence: Police can take immediate cognizance of cruelty charges.',
      'Recovery of Stridhan: Woman holds absolute legal ownership over all gifts, jewelry, and property given to her.',
      'Special Women Cells: CAW (Crime Against Women) cells conduct structured mediation and legal inquiry.',
    ],
    howToExercise:
      'Submit written complaint to the local Women Cell, District Magistrate, or lodge formal FIR at the local police station.',
    officialPortalUrl: 'https://ncw.nic.in',
    portalLabel: 'NCW Complaint Cell',
  },
  {
    id: 'legal-aid',
    title: 'Right to Free Legal Services & Legal Aid',
    actName: 'Legal Services Authorities Act, 1987 (NALSA)',
    summary:
      'Statutory guarantee ensuring all women, regardless of their financial income or background, receive free state-sponsored legal counsel.',
    keyProvisions: [
      'Universal Entitlement: Section 12(c) explicitly entitles every woman to free legal representation.',
      'Appointed Advocates: State covers counsel fees, filing charges, certified copy costs, and court expenses.',
      'NALSA & DLSA: District and High Court legal service authorities provide immediate panel lawyers.',
      'Tele-Law Services: Video consultation with panel advocates at grassroots Common Service Centres (CSCs).',
    ],
    howToExercise:
      'Visit the DLSA office at your district court complex, call NALSA helpline 15100, or apply online at nalsa.gov.in.',
    officialPortalUrl: 'https://nalsa.gov.in',
    portalLabel: 'NALSA Official Portal',
  },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'erss-112',
    name: 'National Emergency Support (ERSS)',
    number: '112',
    service: 'Police • Fire • Medical • Disaster',
    availability: '24/7 • All India • Toll-Free',
    description:
      'Integrated pan-India single emergency response number for instant police dispatch, ambulance, and disaster intervention.',
    actionType: 'tel',
    isPrimary: true,
  },
  {
    id: 'women-181',
    name: 'Women Helpline',
    number: '181',
    service: 'Crisis Intervention • Shelter • Counseling',
    availability: '24/7 • Toll-Free (State-supported)',
    description:
      'Provides integrated support for women in distress, including emergency rescue, psycho-social counseling, and shelter referrals.',
    actionType: 'tel',
    isPrimary: true,
  },
  {
    id: 'ncw-helpline',
    name: 'National Commission for Women (NCW)',
    number: '7827170170',
    service: 'Legal Aid & Harassment Grievance Support',
    availability: '24/7 Specialized Support Desk',
    description:
      'Statutory helpline by NCW for women facing violence, workplace harassment, or seeking institutional legal interventions.',
    actionType: 'tel',
    url: 'https://ncw.nic.in',
  },
  {
    id: 'cyber-crime',
    name: 'National Cyber Crime Reporting',
    number: '1930',
    service: 'Financial Fraud & Digital Crimes Against Women',
    availability: '24/7 National Coordination',
    description:
      'Official portal and helpline to report online stalking, morphing, identity theft, unauthorized images, and cyber financial fraud.',
    actionType: 'link',
    url: 'https://cybercrime.gov.in',
  },
  {
    id: 'childline-1098',
    name: 'Childline & Youth Support',
    number: '1098',
    service: 'Protection for Minor Girls & Children',
    availability: '24/7 • Pan-India Toll-Free',
    description:
      'Specialized care and rescue mechanism for young girls, children in distress, and runaway minors requiring emergency custody.',
    actionType: 'tel',
  },
  {
    id: 'telemanas',
    name: 'Tele-MANAS Mental Health Support',
    number: '14416',
    service: 'Trauma & Psychological Crisis Helpline',
    availability: '24/7 Multi-Lingual Counseling',
    description:
      'National mental health helpline for psychological first aid, trauma recovery counseling, and emotional distress de-escalation.',
    actionType: 'tel',
  },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  {
    id: 'chk-1',
    task: 'Share travel plans and live trip route with a trusted person before leaving.',
    category: 'Travel',
    tip: 'Use WhatsApp Live Location or ride app trip sharing with at least one close contact.',
  },
  {
    id: 'chk-2',
    task: 'Configure emergency SOS shortcuts on your smartphone.',
    category: 'Emergency',
    tip: 'On iOS / Android, test the rapid 5-press power button SOS trigger with verified emergency contacts.',
  },
  {
    id: 'chk-3',
    task: 'Review social media profile privacy and disable automated geo-tagging.',
    category: 'Digital',
    tip: 'Ensure location data is stripped from camera images and posts are shared with trusted circles only.',
  },
  {
    id: 'chk-4',
    task: 'Plan return transit routes and verify last-mile connectivity in advance.',
    category: 'Travel',
    tip: 'Identify well-lit interchange stations, operational taxi stands, or schedule verified pick-ups.',
  },
  {
    id: 'chk-5',
    task: 'Save verified national and local support numbers (112, 181) to speed dial.',
    category: 'Daily',
    tip: 'Name contacts clearly in phonebooks so emergency medical services can find ICE (In Case of Emergency) entries.',
  },
  {
    id: 'chk-6',
    task: 'Keep phone battery above 30% and carry a compact, charged power bank.',
    category: 'Daily',
    tip: 'Connectivity and flashlight availability are essential during unexpected travel delays.',
  },
  {
    id: 'chk-7',
    task: 'Identify your company’s Internal Complaints Committee (ICC) points of contact.',
    category: 'Daily',
    tip: 'Keep the official POSH email address bookmarked for confidential workplace guidance.',
  },
  {
    id: 'chk-8',
    task: 'Trust your intuition: Exit uncomfortable or suspicious situations without hesitation.',
    category: 'Daily',
    tip: 'Never worry about being considered rude; your physical peace of mind is unconditionally non-negotiable.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What should I do immediately if I feel unsafe in public?',
    answer:
      'First, change your immediate trajectory and head toward a brightly lit, populated venue like an open pharmacy, restaurant, or metro station. Draw calm public attention by speaking assertively or approaching security guards. If someone is following you, make a loud phone call stating your exact location, activate live location sharing with family, or call 112 immediately. Trust your gut instincts without delay.',
    category: 'Personal Safety',
  },
  {
    id: 'faq-2',
    question: 'How can I dramatically improve my online privacy and prevent digital stalking?',
    answer:
      'Audit your social media privacy settings so only confirmed friends see your feed. Turn off camera geotagging to prevent location metadata leaks. Never share routine travel schedules, hotel room numbers, or current locations in real-time—post updates after you have left. Use strong, unique passphrases with Authenticator app two-factor authentication, and decline friend requests from unverified profiles.',
    category: 'Digital Safety',
  },
  {
    id: 'faq-3',
    question: 'Where can I find free legal support in India if I cannot afford a lawyer?',
    answer:
      'Under Section 12 of the Legal Services Authorities Act, 1987, all women in India are universally entitled to free legal aid regardless of financial means. You can approach the District Legal Services Authority (DLSA) at your local court, contact the National Legal Services Authority (NALSA) helpline at 15100, or reach out to the National Commission for Women (NCW) legal cell.',
    category: 'Legal Rights',
  },
  {
    id: 'faq-4',
    question: 'What is a "Zero FIR" and can police refuse to register it?',
    answer:
      'A "Zero FIR" can be lodged at ANY police station across India, regardless of where the crime occurred or territorial jurisdiction boundaries. The police station is legally required to record the crime, assign a serial number of "0", initiate initial inquiry/medical assistance, and subsequently transfer the case to the appropriate jurisdiction. Refusing to register a Zero FIR for a cognizable offense against a woman is an offense under Section 166A of the Indian Penal Code.',
    category: 'Legal Rights',
  },
  {
    id: 'faq-5',
    question: 'How do I officially report cybercrime or unauthorized picture leaks in India?',
    answer:
      'You can register an anonymous or formal complaint at the National Cyber Crime Reporting Portal (https://cybercrime.gov.in) or call 1930. The portal has dedicated sections for crimes against women and children, including morphing, non-consensual image distribution, and online blackmail. Preserve high-resolution screenshots with visible URLs, handles, and dates before the content is altered or removed.',
    category: 'Cyber Safety',
  },
  {
    id: 'faq-6',
    question: 'What is the purpose of this website?',
    answer:
      'HER SHIELD is a 100% static educational and awareness platform designed to spread safety literacy, inform women of their constitutional and statutory rights, offer actionable self-defense tips, and aggregate verified official emergency resources. It does not replace 112/police dispatch or licensed legal counsel.',
    category: 'General',
  },
];
