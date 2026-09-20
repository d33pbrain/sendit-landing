export interface LegalSubSection {
  title: string;
  content: string | string[];
}

export interface LegalSection {
  id: string;
  index: number;
  title: string;
  content?: string[];
  subsections?: LegalSubSection[];
}

export interface LegalDocument {
  title: string;
  effectiveDate?: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<string, LegalDocument> = {
  privacyPolicy: {
    title: "SendIt Privacy Policy",
    effectiveDate: "01/04/2026",
    lastUpdated: "09/20/2026",
    sections: [
      {
        id: "p1",
        index: 1,
        title: "Introduction",
        content: [
          "SendIt. (\"we,\" \"our,\" \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our web application and services.",
          "By using SendIt., you agree to the terms of this Privacy Policy."
        ]
      },
      {
        id: "p2",
        index: 2,
        title: "Information We Collect",
        subsections: [
          {
            title: "Personal Information",
            content: "We collect your name, phone number, and email address for account creation, verification, and communication."
          },
          {
            title: "Identity Verification",
            content: "We collect government ID photos and selfies for trust and safety, and to prevent fraud."
          },
          {
            title: "Location Data",
            content: "We collect pickup and dropoff addresses, and live trip location to match senders with carriers and track deliveries."
          },
          {
            title: "Payment Information",
            content: "Payment details are processed by Monnify. SendIt. does not store your full payment information."
          },
          {
            title: "Usage Data",
            content: "We collect app interactions, search history, and ratings to improve our service and personalize your experience."
          },
          {
            title: "Device Information",
            content: "We collect device type, operating system version, and IP address for debugging, security, and analytics."
          }
        ]
      },
      {
        id: "p3",
        index: 3,
        title: "How We Use Your Information",
        content: [
          "We use your information to create and manage your account, verify your identity, match senders with carriers, process payments and escrow, communicate delivery updates, resolve disputes, improve our service, and prevent fraud and abuse."
        ]
      },
      {
        id: "p4",
        index: 4,
        title: "Information Sharing",
        content: [
          "We do not sell your personal information.",
          "We share your name, rating, verification status, and location for pickup/delivery with other users (senders or carriers) to facilitate transactions.",
          "We share payment amount and transaction ID with Monnify to process escrow payments.",
          "We share limited data with service providers for hosting, analytics, and push notifications.",
          "We share information with law enforcement when required by law."
        ]
      },
      {
        id: "p5",
        index: 5,
        title: "Data Security",
        content: [
          "Data is encrypted in transit (TLS) and at rest. Only authorized personnel can access user data. Identity is verified before platform access. Security practices are audited regularly.",
          "Important: No method of transmission over the Internet is 100% secure. We strive to protect your data but cannot guarantee absolute security."
        ]
      },
      {
        id: "p6",
        index: 6,
        title: "Data Retention",
        content: [
          "Account information is kept until account deletion.",
          "Transaction history is kept for 5 years (legal requirement).",
          "Chat messages are kept for 1 year.",
          "ID verification data is kept for 1 year after account closure.",
          "Location data is kept for 90 days."
        ]
      },
      {
        id: "p7",
        index: 7,
        title: "Your Rights",
        content: [
          "As a Nigerian user, you have the right to access your personal data, correct inaccurate data, delete your account and data (subject to transaction history retention), object to certain data processing, and withdraw consent where applicable.",
          "To exercise these rights, contact us at contact@senditt.com.ng."
        ]
      },
      {
        id: "p8",
        index: 8,
        title: "Children's Privacy",
        content: [
          "SendIt. is not intended for users under 18. We do not knowingly collect information from minors."
        ]
      },
      {
        id: "p9",
        index: 9,
        title: "Changes to This Policy",
        content: [
          "We may update this Privacy Policy. Material changes will be notified via app notification or email."
        ]
      },
      {
        id: "p10",
        index: 10,
        title: "Contact Us",
        content: [
          "For privacy questions, data requests, or complaints, contact contact@senditt.com.ng."
        ]
      }
    ]
  },
  termsOfService: {
    title: "SendIt Terms of Service",
    effectiveDate: "01/04/2026",
    lastUpdated: "09/20/2026",
    sections: [
      {
        id: "t1",
        index: 1,
        title: "Acceptance of Terms",
        content: [
          "By downloading, accessing, or using SendIt. (\"the App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree, do not use the App."
        ]
      },
      {
        id: "t2",
        index: 2,
        title: "Eligibility",
        content: [
          "You must be 18 years or older to use SendIt.",
          "You must be located in Nigeria (for MVP launch).",
          "You need a valid phone number and email.",
          "ID verification is required for sending packages and carrying deliveries."
        ]
      },
      {
        id: "t3",
        index: 3,
        title: "How SendIt. Works",
        content: [
          "SendIt. is a peer-to-peer platform connecting Senders (people who need packages delivered) with Carriers (travelers heading to the destination)."
        ],
        subsections: [
          {
            title: "Sender responsibilities",
            content: "Post accurate package details, pay agreed amount into escrow, release payment upon satisfactory delivery."
          },
          {
            title: "Carrier responsibilities",
            content: "Accept offers, deliver package as agreed, provide delivery proof."
          },
          {
            title: "SendIt. responsibilities",
            content: "Facilitate matching, hold escrow payments, verify users, resolve disputes."
          },
          {
            title: "Important Notice",
            content: "SendIt. is a platform connecting users, not a courier service. We do not handle or transport packages ourselves."
          }
        ]
      },
      {
        id: "t4",
        index: 4,
        title: "User Accounts",
        content: [
          "You must provide accurate, current, and complete information.",
          "You are responsible for keeping your login credentials confidential.",
          "All activity under your account is your responsibility.",
          "Report unauthorized access immediately."
        ]
      },
      {
        id: "t5",
        index: 5,
        title: "Verification",
        subsections: [
          {
            title: "Basic verification",
            content: "Requires phone and email. This allows you to browse offers only."
          },
          {
            title: "Verified status",
            content: "Requires government ID and selfie. This unlocks sending packages and accepting offers."
          },
          {
            title: "Rights reserved",
            content: "SendIt. reserves the right to require additional verification, suspend accounts with suspicious activity, and permanently ban fraudulent users."
          }
        ]
      },
      {
        id: "t6",
        index: 6,
        title: "Prohibited Items",
        content: [
          "The following items cannot be sent via SendIt.:"
        ],
        subsections: [
          {
            title: "Restricted List",
            content: [
              "Illegal substances including drugs, narcotics, and drug paraphernalia.",
              "Weapons including firearms, knives, explosives, and ammunition.",
              "Hazardous materials including flammable, corrosive, and toxic substances.",
              "Stolen goods of any kind.",
              "Cash.",
              "Live animals including pets and livestock.",
              "Perishable foods that can spoil (MVP phase).",
              "Counterfeit goods including fake products and pirated media."
            ]
          },
          {
            title: "Consequences",
            content: "Immediate account suspension, forfeiture of escrow funds, reporting to law enforcement, and legal liability for damages."
          }
        ]
      },
      {
        id: "t7",
        index: 7,
        title: "Payments & Escrow",
        content: [
          "SendIt. charges a 10% platform fee, deducted from each transaction.",
          "Funds are held by Sendit/Monnify in escrow until delivery is confirmed.",
          "When the sender confirms delivery, funds are released to the carrier.",
          "If the sender takes no action within 48 hours after delivery confirmation, funds are auto-released to the carrier.",
          "Refunds are issued only if a dispute is resolved in the sender's favor."
        ]
      },
      {
        id: "t8",
        index: 8,
        title: "Dispute Resolution",
        subsections: [
          {
            title: "Process Workflow",
            content: [
              "Step 1 — File a dispute: Within 48 hours of delivery.",
              "Step 2 — Provide evidence: Photos, messages, delivery proof.",
              "Step 3 — Review: SendIt. reviews within 1-3 business days.",
              "Step 4 — Decision: Funds released to the appropriate party.",
              "Step 5 — Appeal: Within 7 days of decision."
            ]
          },
          {
            title: "Possible outcomes",
            content: "Funds released to carrier (delivery verified), funds refunded to sender (delivery failed), or partial refund (package damaged)."
          }
        ]
      },
      {
        id: "t9",
        index: 9,
        title: "User Conduct",
        content: [
          "You agree NOT to commit fraud (falsifying delivery, fake packages), engage in harassment (abusive messages, threats), circumvent fees (taking transactions off-platform), impersonate other users, send spam, or engage in any illegal activity violating Nigerian law."
        ]
      },
      {
        id: "t10",
        index: 10,
        title: "Ratings & Reviews",
        content: [
          "Reviews must reflect genuine experience.",
          "Comments should focus on delivery experience only.",
          "Retaliatory reviews (leaving false reviews in response to a dispute) are prohibited.",
          "SendIt. may remove fraudulent or abusive reviews."
        ]
      },
      {
        id: "t11",
        index: 11,
        title: "Cancellation & Refund Policy",
        content: [
          "If the sender cancels before a carrier accepts, no fee is charged and the offer is removed.",
          "If the sender cancels after a carrier accepts, the platform fee is forfeited.",
          "If the carrier cancels after acceptance, they face penalties and potential account suspension.",
          "If no carrier accepts before expiry, the offer expires with no charge."
        ]
      },
      {
        id: "t12",
        index: 12,
        title: "Insurance (Coming soon)",
        content: [
          "Insurance is optional. Senders may purchase it at checkout for -% of the declared package value.",
          "Coverage includes lost packages, theft, and damage during transit.",
          "Not covered are prohibited items, improper packaging, and normal wear and tear.",
          "Claims must be filed within 48 hours of delivery."
        ]
      },
      {
        id: "t13",
        index: 13,
        title: "Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, SendIt. is not liable for lost, damaged, or stolen packages beyond insurance coverage purchased.",
          "SendIt. is not liable for delays caused by carriers or for user misconduct.",
          "Our maximum liability is the amount paid by you for the specific transaction."
        ]
      },
      {
        id: "t14",
        index: 14,
        title: "Indemnification",
        content: [
          "You agree to indemnify and hold SendIt. harmless from claims arising from your violation of these Terms, your violation of any law, your submitted content, or your interaction with other users."
        ]
      },
      {
        id: "t15",
        index: 15,
        title: "Termination",
        content: [
          "You may delete your account at any time.",
          "SendIt. may terminate your account immediately for cause, including prohibited items, fraud, harassment, or violation of terms.",
          "SendIt. may terminate your account without cause with 14 days notice."
        ]
      },
      {
        id: "t16",
        index: 16,
        title: "Governing Law",
        content: [
          "These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute shall be resolved by binding arbitration in Lagos."
        ]
      },
      {
        id: "t17",
        index: 17,
        title: "Changes to Terms",
        content: [
          "We may update these Terms. Continued use after changes constitutes acceptance."
        ]
      },
      {
        id: "t18",
        index: 18,
        title: "Contact Us",
        content: [
          "For questions about these Terms, to report a violation, or for legal inquiries, contact contact@senditt.com.ng."
        ]
      }
    ]
  }
};