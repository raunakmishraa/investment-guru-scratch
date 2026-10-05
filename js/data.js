/**
 * Investment Guru — Central Data Store
 * =====================================
 * Edit this file to add, remove, or modify:
 *   • Trainings      → TRAININGS
 *   • Contact info   → CONTACT
 *   • Hero stats     → STATS
 *   • Social media   → SOCIAL_MEDIA
 *
 * No HTML changes required for content updates.
 */

/* ─── TRAININGS ─────────────────────────────────────────────────────────── */
const TRAININGS = [
  {
    id: "ig-basic-share-market",
    number: "01",
    tag: "BEGINNER",
    title: "IG Basic Share Market (Zero to Hero)",
    description:
      "For beginners who want to learn about the Share Market from zero.",
    fullDescription:
      "This course is designed for beginners who want to learn about the Share Market from zero. It covers everything from the basic understanding of NEPSE to buying and selling shares. The topics are explained in a simple, practical, and easy-to-understand way.",
    features: [
      "Basic introduction to the Share Market and NEPSE",
      "Understanding IPO, FPO, Dividend, Right Share, and Bonus Share",
      "How to use DEMAT, Mero Share, and TMS",
      "How to Buy and Sell Shares through a broker account",
      "Basic knowledge of Fundamental Analysis",
      "Basic knowledge of Technical Analysis",
      "Understanding Market Risks and Risk Management",
    ],
    keyFeatures: ["Diversified Investments","Risk Assessment","Regular Rebalancing"],
    duration: "8 Weeks",
    price: "Rs. 3,000",
    featured: true,
  },
  {
    id: "ig-basic-to-advance",
    number: "02",
    tag: "BEGINNER",
    title: "IG Basic to Advance (Fundamental Analysis, Technical Analysis & The Strategy)",
    description:
      "From basic to advanced level in a simple and practical way.",
    fullDescription:
      "This course is designed to help you to understand the share market from basic to advanced level in a simple and practical way. You will learn how to analyze stocks, understand market trends, identify good investment opportunities, and make better buy and sell decisions using both fundamental and technical analysis.",
    features: [
      "Learn how to choose short term and long term stocks that have the potential to grow significantly over time",
      "Understand the basics of the stock market, even if you are a complete beginner",
      "Learn how to analyze stocks using both technical charts and fundamentals analysis",
      "Learn how to build a balanced stock portfolio and manage it effectively",
      "Understanding when the market is strongly rising (Bull market) or falling (Bear Market)",
      "Learn strategies of entry and exit points for buying and selling shares",
      "Learn how to identify signs of strong participation by large or institutional investors in stocks (broker analysis)",
      "Understand the power of compounding and how long-term investments can potentially grow over time",
    ],
    keyFeatures: ["Risk Analysis", "Insurance Planning", "Emergency Funds"],
    duration: "6 weeks",
    price: "10,000",
    featured: false,
  },
  {
    id: "smc-ict",
    number: "03",
    tag: "INTERMEDIATE",
    title: "Advance Smart Money Concept / Inner Circle Trading (SMC /ICT)",
    description:
      "In-depth understanding of Smart Money Concepts and institutional market participation.",
    fullDescription:
      "This course provides an in depth understanding of Smart Money Concepts (SMC) and explains how institutional players participate in the financial market and how their activities influence price movements. From the basics of market structure to modern trading techniques, the course focuses on practical learning. Through the example of real market scenario, chart analysis, and chart drills, participants will learn how to understand price movements, identify liquidity zones, and apply SMC strategies in market. The goal of this course is not only to teach SMC strategies but also to help traders to analyze the market systematically and make clear, more disciplined, and strategic trading decisions.",
    features: [
      "Understand the key concepts and strategies of Smart Money Concepts (SMC)",
      "Identify and use important reference points used by institutional traders",
      "Learn to analyze Market Structure using a Top Down Approach",
      "Use SMC tools to apply advanced trading strategies",
      "Develop a better understanding of Trading Psychology and Risk Management",
      "Understand Price Movement and Liquidity to make more structured trading decisions",
      "Learn how institutional trading techniques can influence market behavior",
      "Develop the ability to study Market Dynamics and Price Action more effectively",
    ],
    keyFeatures: ["Tax Planning", "Deduction Strategies", "Compliance Support"],
    duration: "10 weeks",
    price: "15,000",
    featured: false,
  },
  {
    id: "intraday-trading",
    number: "04",
    tag: "COMING SOON",
    title: "Intraday Trading (Coming Soon)",
    description:
      "Intraday Trading means process of buying and selling shares within the same trading day.",
    fullDescription:
      "Intraday Trading means process of buying and selling shares within the same trading day. In Intraday trading, traders close their positions before the market closes. The main objective is to take advantage of short-term price movements to generate potential profits.",
    features: [
      "Short-Term Trading: Shares are bought and sold within the same trading day",
      "Focus on Price Movement: Traders look for opportunities from short-term price fluctuations",
      "Market Analysis: Charts, trends, support and resistance, volume, and other technical indicators are used to analysed the market",
      "Entry & Exit Planning: The price at which to enter and exit a trade is planned in advance",
      "Stop Loss: A stop-loss is used to control and limit potential losses",
      "Risk Management: Managing how much risk to take on each trade is given high priority",
      "Timing: Identifying the right time to enter and exit the market is very important",
      "Quality Over Quantity: Instead of taking too many trades, traders focus on high-quality trading opportunities",
      "Same-Day Position Closing: Intraday positions are generally closed before the market closes on the same trading day",
      "Systematic Trading: Short-term market movements are treated as opportunities, while trading is conducted systematically with proper risk management",
    ],
    keyFeatures: [],
    duration: "",
    price: "",
    featured: false,
  },
];

/* ─── CONTACT DETAILS ───────────────────────────────────────────────────── */
const CONTACT = {
  email: "investmentguru.np@gmail.com",
  emailOfficial: "investmentguruofficial@gmail.com",
  phones: [
    { label: "01-5313800", tel: "+97715313800" },
    { label: "9767473560", tel: "+9779767473560" },
  ],
  whatsapp: { number: "9779767473560", display: "9767473560" },
  address: {
    line1: "Ghattekulo, Anamnagar, Kathmandu",
    line2: "Opposite to Bigmart, Anamnagar",
  },
  hours: "Sun - Fri: 10:00 AM – 6:00 PM",
};

/* ─── HERO STATS / COUNTERS ─────────────────────────────────────────────── */
const STATS = [
  { count: 5, suffix: "+", label: "Years Experience", delay: 50 },
  { count: 500, suffix: "+", label: "Happy Clients", delay: 120 },
  { count: 25, suffix: "%", label: "Portfolio Growth", delay: 190 },
];

/* ─── SOCIAL MEDIA ──────────────────────────────────────────────────────── */
const SOCIAL_MEDIA = [
  {
    platform: "facebook",
    label: "Facebook",
    followers: "23K+",
    followerLabel: "Followers",
    url: "https://www.facebook.com/profile.php?id=61577410238664",
    color: "#1877F2",
    svgPath:
      "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    platform: "instagram",
    label: "Instagram",
    followers: "1K+",
    followerLabel: "Followers",
    url: "https://www.instagram.com/investmentguru_np",
    color: "url(#igGrad)",
    svgPath:
      "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    platform: "youtube",
    label: "YouTube",
    followers: "6K+",
    followerLabel: "Subscribers",
    url: "https://www.youtube.com/@InvestmentGuru_np",
    color: "#FF0000",
    svgPath:
      "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    followers: "49K+",
    followerLabel: "Followers",
    url: "https://www.tiktok.com/@investmentguru.np",
    color: "#000000",
    svgPath:
      "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z",
  },
];