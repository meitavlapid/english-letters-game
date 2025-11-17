const letters = [
  {
    letter: "A",
    words: [
      { text: "Arrow", hebrew: "חץ", imageId: "arrow_w3oaji" },
      { text: "Apple", hebrew: "תפוח", imageId: "apple_b85rt9" },
      { text: "Ant", hebrew: "נמלה", imageId: "ant_tt2k42" },
      { text: "Alligator", hebrew: "תנין", imageId: "alligator_shuwue" },
      { text: "Airplane", hebrew: "מטוס", imageId: "airplane_pma5z4" },
    ],
  },
  {
    letter: "B",
    words: [
      { text: "Bear", hebrew: "דוב", imageId: "bear_vheql1" },
      { text: "Bird", hebrew: "ציפור", imageId: "Bird_x7pshl" },
      { text: "Banana", hebrew: "בננה", imageId: "banana_fj49tt" },
      { text: "Ball", hebrew: "כדור", imageId: "ball_n6vjzf" },
      { text: "Bus", hebrew: "אוטובוס", imageId: "bus_llnz7i" },
    
    ],
  },
  {
    letter: "C",
    words: [
      { text: "Cat", hebrew: "חתול", imageId: "cat_xfd8hb" },
      { text: "Cup", hebrew: "כוס", imageId: "cup_vfn71p" },
      { text: "Cow", hebrew: "פרה", imageId: "cow_v929bp" },
      { text: "Car", hebrew: "מכונית", imageId: "car_kakuww" },
      { text: "Cakes", hebrew: "עוגות", imageId: "cakes_rzp58p" },
    ],
  },
  {
    letter: "D",
    words: [
      { text: "Drum", hebrew: "תוף", imageId: "drum_lga75v" },
      { text: "Duck", hebrew: "ברווז", imageId: "duck_c3vdtz" },
      { text: "Door", hebrew: "דלת", imageId: "door_tusbwo" },
      { text: "Doll", hebrew: "בובה", imageId: "doll_jqz2xj" },
      { text: "Dog", hebrew: "כלב", imageId: "dog_mmyoj1" },
    ],
  },
  {
    letter: "E",
    words: [
      { text: "Engine", hebrew: "מנוע", imageId: "Engine_vjfo5f" },
      { text: "Elephant", hebrew: "פיל", imageId: "elephant_qaboih" },
      { text: "Egg", hebrew: "ביצה", imageId: "egg_e8izgh" },
      { text: "Ear", hebrew: "אוזן", imageId: "ear_dah049" },
      { text: "Eagle", hebrew: "נשר", imageId: "eagle_f3auij" },
    ],
  },
  {
    letter: "F",
    words: [
      { text: "Frog", hebrew: "צפרדע", imageId: "frog_isxiik" },
      { text: "Fish", hebrew: "דג", imageId: "fish_zukz3l" },
      { text: "Fire", hebrew: "אש", imageId: "fire_blnjbx" },
      { text: "Feather", hebrew: "נוצה", imageId: "feather_fsrido" },
      { text: "Fan", hebrew: "מניפה", imageId: "fan_qgsunw" },
    ],
  },
  {
    letter: "G",
    words: [
      { text: "Guitar", hebrew: "גיטרה", imageId: "guitar_w09ige" },
      { text: "Grapes", hebrew: "ענבים", imageId: "grapes_jyzfa2" },
      { text: "Glass", hebrew: "זכוכית", imageId: "glass_gkobvl" },
      { text: "Goat", hebrew: "עז", imageId: "goat_yfxkxg" },
      { text: "Gift", hebrew: "מתנה", imageId: "gift_vtu65z" },
    ],
  },
  {
    letter: "H",
    words: [
      { text: "House", hebrew: "בית", imageId: "house_fe67g7" },
      { text: "Horse", hebrew: "סוס", imageId: "horse_adlqpe" },
      { text: "Helicopter", hebrew: "מסוק", imageId: "helicopter_pejdna" },
      { text: "Hat", hebrew: "כובע", imageId: "hat_snpmhd" },
      { text: "Hand", hebrew: "יד", imageId: "hand_g2pxf0" },
    ],
  },
  {
    letter: "I",
    words: [
      { text: "Island", hebrew: "אי", imageId: "island_purr35" },
      { text: "Iron", hebrew: "ברזל", imageId: "iron_aking3" },
      { text: "Insect", hebrew: "חרק", imageId: "insect_iaidgz" },
      { text: "Igloo", hebrew: "איגלו", imageId: "igloo_hknsyb" },
      { text: "Ice", hebrew: "קרח", imageId: "ice_xmylsr" },
    ],
  },
  {
    letter: "J",
    words: [
      { text: "Juice", hebrew: "מיץ", imageId: "juice_wskv14" },
      { text: "Jeep", hebrew: "ג'יפ", imageId: "jeep_jjvaq8" },
      { text: "Jar", hebrew: "צנצנת", imageId: "jar_azujq8" },
      { text: "Jacket", hebrew: "ג'קט", imageId: "jacket_k1v0mo" },
      { text: "Jam", hebrew: "ריבה", imageId: "jam_ynxtzy" },
    ],
  },
  {
    letter: "K",
    words: [
      { text: "Koala", hebrew: "קואלה", imageId: "koala_phtba3" },
      { text: "King", hebrew: "מלך", imageId: "king_pxuqvm" },
      { text: "Kite", hebrew: "עפיפון", imageId: "kite_h5wkyg" },
      { text: "Key", hebrew: "מפתח", imageId: "key_uytouj" },
      { text: "Kangaroos", hebrew: "קנגורו", imageId: "kangaroos_c49tkk" },
    ],
  },
  {
    letter: "L",
    words: [
      { text: "Lion", hebrew: "אריה", imageId: "lion_zl5ugw" },
      { text: "Lemon", hebrew: "לימון", imageId: "lemon_hj3pen" },
      { text: "Leaf", hebrew: "עלה", imageId: "leaf_rm6mzc" },
      { text: "Lamp", hebrew: "מנורה", imageId: "lamp_pn1xqb" },
      { text: "Ladybug", hebrew: "פרת משה רבנו", imageId: "ladybug_ra3iro" },
    ],
  },
  {
    letter: "M",
    words: [
      { text: "Mouse", hebrew: "עכבר", imageId: "mouse_dzvgdg" },
      { text: "Moon", hebrew: "ירח", imageId: "moon_mln7k3" },
      { text: "Monkey", hebrew: "קוף", imageId: "monkey_ulgtky" },
      { text: "Milk", hebrew: "חלב", imageId: "milk_dqaqzs" },
      { text: "Map", hebrew: "מפה", imageId: "map_kny9nc" },
    ],
  },
  {
    letter: "N",
    words: [
      { text: "Notebook", hebrew: "מחברת", imageId: "notebook_fwm2tt" },
      { text: "Nose", hebrew: "אף", imageId: "nose_rbeets" },
      { text: "Ninja", hebrew: "נינג׳ה", imageId: "ninja_cmc5kl" },
      { text: "Net", hebrew: "רשת", imageId: "net_jxmkc9" },
      { text: "Nest", hebrew: "קן", imageId: "nest_jcfvjo" },
    ],
  },
  {
    letter: "O",
    words: [
      { text: "Owl", hebrew: "ינשוף", imageId: "owl_srm2bj" },
      { text: "Orange", hebrew: "תפוז", imageId: "orange_uz1kzl" },
      { text: "Oven", hebrew: "תנור", imageId: "oven_ydro1f" },
      { text: "Olive", hebrew: "זית", imageId: "olive_cv2dbe" },
      { text: "Octopus", hebrew: "תמנון", imageId: "octopus_avhl5k" },
    ],
  },
  {
    letter: "P",
    words: [
      { text: "Pizza", hebrew: "פיצה", imageId: "pizza_ybnswc" },
      { text: "Pig", hebrew: "חזיר", imageId: "pig_xqnjcu" },
      { text: "Pencil", hebrew: "עיפרון", imageId: "pencil_ozijph" },
      { text: "Pen", hebrew: "עט", imageId: "pen_xbnixt" },
      { text: "Panda", hebrew: "פנדה", imageId: "panda_n4odz4" },
    ],
  },
  {
    letter: "Q",
    words: [
      { text: "Quilt", hebrew: "שמיכת טלאים", imageId: "quilt_v6iwnl" },
      { text: "Quiet", hebrew: "שקט", imageId: "quiet_iddkso" },
      { text: "Queen", hebrew: "מלכה", imageId: "queen_ttyp62" },
      { text: "Quail", hebrew: "שליו", imageId: "quail_puyqg4" },
      { text: "Quarter", hebrew: "רבע", imageId: "quarter_e1xvfm" },
    ],
  },
  {
    letter: "R",
    words: [
      { text: "Rocket", hebrew: "טיל", imageId: "rocket_m61t9b" },
      { text: "Robot", hebrew: "רובוט", imageId: "robot_sklirb" },
      { text: "Rainbow", hebrew: "קשת בענן", imageId: "rainbow_ieobjj" },
      { text: "Ring", hebrew: "טבעת", imageId: "ring_cfydcm" },
      { text: "Rabbit", hebrew: "ארנב", imageId: "rabbit_geuclx" },
    ],
  },
  {
    letter: "S",
    words: [
      { text: "Sun", hebrew: "שמש", imageId: "sun_anxscl" },
      { text: "Star", hebrew: "כוכב", imageId: "star_mcikav" },
      { text: "Sock", hebrew: "גרב", imageId: "sock_xngpri" },
      { text: "Snake", hebrew: "נחש", imageId: "snake_rnvqqx" },
      { text: "Ship", hebrew: "ספינה", imageId: "ship_vpac1l" },
    ],
  },
  {
    letter: "T",
    words: [
      { text: "Tree", hebrew: "עץ", imageId: "tree_skoedz" },
      { text: "Train", hebrew: "רכבת", imageId: "train_tpaz59" },
      { text: "Tomato", hebrew: "עגבנייה", imageId: "tomato_pczutr" },
      { text: "Tiger", hebrew: "נמר", imageId: "tiger_qjluje" },
      { text: "Table", hebrew: "שולחן", imageId: "Table_lakwuv" },
    ],
  },
  {
    letter: "U",
    words: [
      { text: "Utensils", hebrew: "כלי מטבח", imageId: "utensils_chseey" },
      { text: "Upside-down", hebrew: "הפוך", imageId: "Upside-down_wrpfww" },
      { text: "Uniform", hebrew: "מדים", imageId: "Uniform_nnkvsu" },
      { text: "Unicorn", hebrew: "חד-קרן", imageId: "unicorn_gbmsik" },
      { text: "Umbrella", hebrew: "מטרייה", imageId: "umbrella_dylpby" },
    ],
  },
  {
    letter: "V",
    words: [
      { text: "Volcano", hebrew: "הר געש", imageId: "volcano_lsb13p" },
      { text: "Vegetables", hebrew: "ירקות", imageId: "vegetables_aucw62" },
      { text: "Violin", hebrew: "כינור", imageId: "violin_migsfg" },
      { text: "Vase", hebrew: "אגרטל", imageId: "vase_pj3tf2" },
      { text: "Van", hebrew: "ואן", imageId: "van_nbhogv" },
    ],
  },
  {
    letter: "W",
    words: [
      { text: "Whale", hebrew: "לווייתן", imageId: "whale_k7tmug" },
      { text: "Wolf", hebrew: "זאב", imageId: "wolf_f9jqkd" },
      { text: "Window", hebrew: "חלון", imageId: "window_wbgen5" },
      { text: "Water", hebrew: "מים", imageId: "water_otnmng" },
      { text: "Watch", hebrew: "שעון ", imageId: "watch_nwltlf" },
    ],
  },
  {
    letter: "X",
    words: [
      { text: "Box", hebrew: "קופסה", imageId: "box_vfruzy" },
      { text: "Fox", hebrew: "שועל", imageId: "fox_tk7b8g" },
      { text: "Six", hebrew: "שש", imageId: "six_czhguk" },
      { text: "Mix", hebrew: "תערובת", imageId: "mix_mlurm7" },
      { text: "Fix", hebrew: "תיקון", imageId: "fix_gzyeu8" },
    ],
  },
  {
    letter: "Y",
    words: [
      { text: "Yacht", hebrew: "יאכטה", imageId: "yacht_fkekvh" },
      { text: "Yoyo", hebrew: "יויו", imageId: "yoyo_recxfq" },
      { text: "Yellow", hebrew: "צהוב", imageId: "yellow_plpiwy" },
      { text: "Yarn", hebrew: "חוט צמר", imageId: "yarn_qprqst" },
      { text: "Yak", hebrew: "יאק", imageId: "yak_f7pbxv" },
    ],
  },
  {
    letter: "Z",
    words: [
      { text: "Zoo", hebrew: "גן חיות", imageId: "zoo_teaeyg" },
      { text: "Zucchini", hebrew: "קישוא", imageId: "zucchini_obko2i" },
      { text: "Zip", hebrew: "רוכסן", imageId: "zip_hirajv" },
      { text: "Zero", hebrew: "אפס", imageId: "zero_cevzpg" },
      { text: "Zebra", hebrew: "זברה", imageId: "zebra_b2u3hh" },
    ],
  },
];

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dt5nnq3ew/image/upload/f_auto,q_auto";

function buildImageUrl(id) {
  return `${CLOUDINARY_BASE}/${id}`;
}

function getRandomRound(allowedLetters) {
  let pool = letters;

  if (Array.isArray(allowedLetters) && allowedLetters.length > 0) {
    pool = letters.filter((l) => allowedLetters.includes(l.letter));
  }

  if (!pool.length) {
    pool = letters;
  }

  const correctLetter = pool[Math.floor(Math.random() * pool.length)];

  let distractorPool = letters.filter((l) => l.letter !== correctLetter.letter);
  distractorPool = distractorPool.sort(() => 0.5 - Math.random()).slice(0, 2);

  const options = [
    correctLetter.letter,
    ...distractorPool.map((l) => l.letter),
  ].sort(() => 0.5 - Math.random());

  const randomWord =
    correctLetter.words[Math.floor(Math.random() * correctLetter.words.length)];

  return {
    letter: correctLetter.letter,
    exampleWord: randomWord.text,
    exampleHebrew: randomWord.hebrew,
    exampleImage: buildImageUrl(randomWord.imageId),
    options,
  };
}

function getRandomPictureRound(allowedLetters) {
  let pool = letters;

  if (Array.isArray(allowedLetters) && allowedLetters.length > 0) {
    pool = letters.filter((l) => allowedLetters.includes(l.letter));
  }

  const correctLetterObj = pool[Math.floor(Math.random() * pool.length)];

  const correctWord =
    correctLetterObj.words[
      Math.floor(Math.random() * correctLetterObj.words.length)
    ];

  const distractorSource = pool.length === 1 ? letters : pool;

  const allWordsFromOtherLetters = distractorSource
    .filter((l) => l.letter !== correctLetterObj.letter)
    .flatMap((l) =>
      l.words.map((w) => ({
        letter: l.letter,
        text: w.text,
        imageId: w.imageId,
      }))
    );

  const shuffled = allWordsFromOtherLetters.sort(() => 0.5 - Math.random());
  const distractors = shuffled.slice(0, 2);

  const options = [
    {
      letter: correctLetterObj.letter,
      text: correctWord.text,
      imageUrl: buildImageUrl(correctWord.imageId),
      hebrew: correctWord.hebrew || null,
      isCorrect: true,
    },
    ...distractors.map((w) => ({
      letter: w.letter,
      text: w.text,
      imageUrl: buildImageUrl(w.imageId),
      hebrew: null,
      isCorrect: false,
    })),
  ].sort(() => 0.5 - Math.random());

  const correctIndex = options.findIndex((opt) => opt.isCorrect);

  return {
    mode: "picture",
    letter: correctLetterObj.letter,
    options,
    correctIndex,
  };
}

module.exports = {
  letters,
  getRandomRound,
  getRandomPictureRound,
  buildImageUrl,
};
