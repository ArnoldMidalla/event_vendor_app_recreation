export const locations = [
  { key: "1", value: "Lekki phase 1, Lagos" },
  { key: "2", value: "Victoria Island, Lagos" },
  { key: "3", value: "Ikeja, Lagos" },
  { key: "4", value: "Yaba, Lagos" },
  { key: "5", value: "Surulere, Lagos" },
];

export const Data = [
  {
    id: 1,
    title: "Asake's Nu Tour",
    address: "Teslim Balogun Stadium, Surulere",
    date: "02.August.2025 - 5:00pm",
    image:
      "https://i.pinimg.com/1200x/56/ec/bc/56ecbc3200d4cf12f489881c5269cfc7.jpg",
    price: 45000,
    vipPrice: 75000,
    backstagePass: 120000,
    type: "Concert",
    about:
      "Get ready for an electrifying night with Asake live in Lagos! Asake's Nu Tour is set to tale over the Teslim Balogun Stadium with energetic performances, stunning visuals, and unforgettable vibes.",
    heart: false,
    dateMon: "Sept",
    dateDay: "02",
    dateTime: 4,
    color: "purple-900",
  },
  {
    id: 2,
    title: "Lagos Food Fest",
    address: "Landmark Centre, Ikeja",
    date: "03.August.2025 - 5:00pm",
    image:
      "https://images.unsplash.com/photo-1705359573945-bcf2d0b70b0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 15000,
    vipPrice: 75000,
    backstagePass: 120000,
    type: "Food",
    about:
      "The Lagos Food Fest is basically an all you can eat buffet where you get to taste different kinds of meals and dishes you'd probably never have tasted in your lifetime. Get ready to eat toy your satisfaction",
    heart: false,
    dateMon: "Aug",
    dateDay: "27",
    dateTime: 5,
    color: "emerald-900",
  },

  {
    id: 3,
    title: "Paint & Sip: Art x Vibes",
    address: "The Yellow House, Lekki",
    date: "03.August.2025 - 5:00pm",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFpbnR8ZW58MHx8MHx8fDA%3D",
    price: 15000,
    vipPrice: 75000,
    backstagePass: 120000,
    type: "Fun",
    about:
      "The Lagos Food Fest is basically an all you can eat buffet where you get to taste different kinds of meals and dishes you'd probably never have tasted in your lifetime. Get ready to eat toy your satisfaction",
    heart: false,
    dateMon: "Aug",
    dateDay: "15",
    dateTime: 3,
    color: "rose-800",
  },
];

export const VendorsData = [
  {
    id: 1,
    title: "Chef Ireti's kitchen",
    rating: 4.8,
    noStars: 5,
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bookings: 100,
    type: "Catering",
    subType: "Caterer",
    price: 8000,
    about:
      "Chef Ireti brings over 15 years of culinary experience, crafting meals that blend Nigerian tradition with a modern twist. Weather it's a wedding, corporate event, or intimate gathering, every dish is cooked with love and served with style.",
    address: "Lekki Phase 1, Lagos",
    service: ["Bullet Setup", "Small Chops", "Party Trays"],
    isVerified: true,
    packageVal: "Basic package",
    dateTime: "13.August.2025 - 9:00am",
  },
  {
    id: 2,
    title: "DJ Shakur",
    rating: 5,
    noStars: 5,
    image:
      "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bookings: 80,
    type: "Music",
    subType: "DJ",
    price: 20000,
    about:
      "DJ Shakur puts the dj in bombasitc danceable music (if there is one). He electrifies the room with his soothing but extatic mixes as if he is God (he claims to be). Check him out. Recommended",
    address: "Victoria Island, Lagos",
    service: ["Music mixing", "Production", "Parties and celebrations"],
    isVerified: false,
    packageVal: "Custom package",
    dateTime: "24.August.2025 - 9:00am",
  },
  {
    id: 3,
    title: "Daniel Adeyemi",
    rating: 4.8,
    noStars: 5,
    image:
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D",
    bookings: 100,
    type: "Photography",
    subType: "Photographer",
    price: 200000,
    about:
      "Daniel is a world renowned photographer. Famous for his collaboration and stellar images of the queen of England, his work invites his presence",
    address: "Lekki Phase 1, Lagos",
    service: ["Photography", "Video Coverage", "Photo Shoots"],
    isVerified: true,
    packageVal: "Premium package",
    dateTime: "16.August.2025 - 11:00am",
  },
];

export const promotionData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Lagos Food Fest",
    subText: "Landmark Centre, Ikeja",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1628336707631-68131ca720c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Ibadan wine tasting",
    subText: "Market Road, Ibadan",
  },
];

export const eventFilter = ["All", "Food", "Concert", "Art", "Fests", "Sports"];

export const vendorsFilters = [
  "All",
  "Catering",
  "Photography",
  "Logistics",
  "Decorations",
  "Lightening",
];

export const VendorsPromotionData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "This weeks top catering discounts",
    subText: "10% off orders booked before Aug 6",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Capture the moment",
    subText: "Up to 20% off on select products",
  },
];

export const MessageData = [
  {
    id: 1,
    profileImage: "",
    name: "Daniel Adeyemi",
    message:
      "Our 2-hour vacation includes edits. We need to be able to deliver as soon as possible",
    unread: 0,
    time: "9:00pm",
    isVerified: true,
    delivered: true,
  },
  {
    id: 2,
    profileImage: "",
    name: "Frames by Seyi",
    message: "Can you share the live location pin again, I think I'm lost",
    unread: 1,
    time: "5:45pm",
    isVerified: false,
    delivered: false,
  },
  {
    id: 3,
    profileImage: "",
    name: "Chef Ireti's Kitchen",
    message: "Certainly, I can create a quick quote based on your preferences",
    unread: 3,
    time: "4:20pm",
    isVerified: true,
    delivered: false,
  },
];

export const starters = ["Cesar Salad", "Spring Rolls", "Pepper Soup"];
export const main = ["Jollof Rice", "Medium Rare Steak", "Suya"];
export const drink = ["Mocktail", "Cranberry Juice", "Red Wine"];
