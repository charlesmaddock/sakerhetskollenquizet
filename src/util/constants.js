export const HEIGHT = 440;

// Profiles
export const BANK_PROFILE = "BANK_PROFILE";
export const GAMING_PROFILE = "GAMING_PROFILE";
export const STREAMING_PROFILE = "STREAMING_PROFILE";
export const SOCIAL_MEDIA_PROFILE = "SOCIAL_MEDIA_PROFILE";
export const GENERAL_PROFILE = "GENERAL_PROFILE";

// Categories
export const SHARED_PASSWORD_QUESTION = "SHARED_PASSWORD_QUESTION";
export const PUBLIC_WIFI_QUESTION = "PUBLIC_WIFI_QUESTION";
export const WIFI_ON_QUESTION = "WIFI_ON_QUESTION";

// Question types
export const YES_NO = "YES_NO";
export const SEVERAL_OPTION = "SEVERAL_OPTION";

export const QUESTIONS = [
  {
    category: SHARED_PASSWORD_QUESTION,
    type: SEVERAL_OPTION,
    forProfile: GAMING_PROFILE,
    title: "You found the perfect CSGO skin...",
    text: "With your steam account you can log into a website called 'csgoskins.cz' get the skin you want. **Is this a good idea?**",
    moreInfo:
      "Unless it is a login through steam hackers can see your password and hijack your steam account and you could loose all your games!",
    readMoreLink:
      "https://sakerhetskollen.se/testa-din-sakerhet/ar-du-saker-pa-ditt-losenord",
    options: [
      { text: "Should be fine.", score: 0 },
      {
        text: "If I'm redirected to steam's website during the login it should be fine.",
        score: 0.8,
      },
      { text: "I'll get the skin somewhere else...", score: 1 },
    ],
  },
  {
    category: SHARED_PASSWORD_QUESTION,
    type: YES_NO,
    forProfile: SOCIAL_MEDIA_PROFILE,
    title:
      "Your friend found an app where you can see who is stalking you on instagram!",
    text: "With your instagram account you can log into an app called 'stalkwatcher' to see who's visiting your account. **Is this a good idea?**",
    moreInfo:
      "Unless it is a login through instagram hackers can see your password and hijack your account and you could loose all your pictures!",
    readMoreLink:
      "https://sakerhetskollen.se/testa-din-sakerhet/ar-du-saker-pa-ditt-losenord",
    yes_score: 0,
    no_score: 1,
  },
  {
    category: PUBLIC_WIFI_QUESTION,
    type: SEVERAL_OPTION,
    forProfile: GENERAL_PROFILE,
    title: "Free wifi at the cafe",
    text: "Nice, everyone loves free stuff! **But how much of my browsing can the cafe actually see?**",
    moreInfo:
      "With HTTPS any message or password you send is safe, but they can always know which website you visit...",
    readMoreLink:
      "https://sakerhetskollen.se/testa-din-sakerhet/ar-du-saker-pa-ditt-losenord",
    options: [
      { text: "I'm 100% protected, even without a VPN.", score: 0 },
      {
        text: "They can only see certain things I'm doing.",
        score: 1,
      },
      { text: "They can see everything I do.", score: 0.7 },
    ],
  },
];
