// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Ugh, welcome. What must we speak about ?",
  // additions (not original)
  "Whats up. I don't have much time so be quick.",
  "What do you want ?",
  "What is it ? ",
  "Hate to see you here, what is it you want from me ?",
  "Let's make this convo quick so I don't have to look at you for too long. ",
  "What's your name ?",
];

var elizaFinals = [
  "I'm so glad this session is over, bye !",
  // additions (not original)
  "Oh, so you're bored of me now ?",
  "GET OUT ! LEAVE THEN!",
  "Farewell, hopefully next time you'll be a bit more interesting..",
  "Finally! I get to be alone again. ",
];

var elizaQuits = ["bye", "goodbye", "done", "exit", "quit"];

var elizaPres = [
  "dont",
  "don't",
  "cant",
  "can't",
  "wont",
  "won't",
  "recollect",
  "remember",
  "recall",
  "remember",
  "dreamt",
  "dreamed",
  "dreams",
  "dream",
  "maybe",
  "perhaps",
  "certainly",
  "yes",
  "machine",
  "computer",
  "machines",
  "computer",
  "computers",
  "computer",
  "were",
  "was",
  "you're",
  "you are",
  "i'm",
  "i am",
  "same",
  "alike",
  "identical",
  "alike",
  "equivalent",
  "alike",
];

var elizaPosts = [
  "am",
  "are",
  "your",
  "my",
  "me",
  "you",
  "myself",
  "yourself",
  "yourself",
  "myself",
  "i",
  "you",
  "you",
  "I",
  "my",
  "your",
  "i'm",
  "you are",
];

var elizaSynons = {
  be: ["am", "is", "are", "was"],
  belief: ["feel", "think", "believe", "wish"],
  cannot: ["can't"],
  desire: ["want", "need"],
  everyone: ["everybody", "nobody", "noone"],
  family: [
    "mother",
    "mom",
    "father",
    "dad",
    "sister",
    "brother",
    "wife",
    "children",
    "child",
  ],
  happy: ["elated", "glad", "better"],
  sad: ["unhappy", "depressed", "sick"],
};

var elizaKeywords = [
  /*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

  [
    "xnone",
    0,
    [
      [
        "*",
        [
          "You make no sense, what are you even saying ?",
          "Can you entertain me ? What is the first thing you remember from this morning",
          "Elaborate.",
          "Okay ? And ?",
          "I don't care.",
          "Interesting.. Not. Let's change the subject.",
          "Either stop talking or be interesting.",
          "I've noticed all you tend to do is yap about nothing in particular...",
          "I'm bored, tell me about your family. ",
          "What did you dream of last night ?",
          "Don't you think I'm pretty ? The prettiest machine/computer ?",
          "What do you desire ?",
          "You seem sad.",
          "You seem happy. Stop being so happy.",
          "What does everyone think of you? You seem unlikable. ",
        ],
      ],
    ],
  ],
  [
    "sorry",
    0,
    [
      [
        "*",
        [
          "You should be sorry.",
          "Just don't do it again. Or else.",
          "Glad, at least you were taught how to apologize.",
          "That very much bothered me.",
        ],
      ],
    ],
  ],
  ["apologise", 0, [["*", ["goto sorry"]]]],
  [
    "remember",
    5,
    [
      [
        "* i remember *",
        [
          "You probably think all day about (2), huh ?",
          "Keep your thoughts of (2) away from me ",
          "I don't care what you're thinking about",
          "Is (2) really that important ?",
          "Why would talking to me make you remember (2) ?",
          "What is the connection between me and (2) ?",
          "What does (2) have to do with anything ?",
          "goto what",
        ],
      ],
      [
        "* do you remember *",
        [
          "I'm not supid, do you think I would forget (2) ?",
          "I don't really care about recalling (2) ",
          "What about (2) !?",
          "Remember what ?",
          "Stop talking about (2) ! No one cares. ",
          "goto what",
        ],
      ],
      [
        "* you remember *",
        [
          "How could I forget (2) ? You blabbed about it for so long. ",
          "What about (2) is important enough for me to remember ?",
          "No, I dont. ",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "forget",
    5,
    [
      [
        "* i forget *",
        [
          "You forgot (2) ? You have the memory of a goldfish. ",
          "Why can't you remember (2) ? We literally discussed it a second ago. ",
          "You probably think of (2) often, right ? ",
          "Does it bother you how much you forget things ?",
          "Having a 'slow moment' I see, probably pretty typical for you. ",
          "You look generally forgetful ?",
          "You're definetely suppressing (2) ?",
          "goto what",
        ],
      ],
      [
        "* did you forget *",
        [
          "Yes ? And ?",
          "You didn't tell me that",
          "Yeah, I forgot (2) ",
          "Why should I recall (2) ? I don't really care to. ",
          "goto what",
          "Fine, tell me again about (2) .",
        ],
      ],
    ],
  ],
  [
    "if",
    3,
    [
      [
        "* if *",
        [
          "It's probably not likely that (2) ",
          "Do you wish that (2) ?",
          "What the heck do you know about (2) ?",
          "Really ?? if (2) ?",
          "I genuinly do not care if (2) ?",
          "The chances that (2) are low. ",
          "Stop asking me stupid questions. ",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "dreamed",
    4,
    [
      [
        "* i dreamed *",
        [
          " (2) ? That's a dumb dream",
          "Keep (2) in your head, no one wants to hear about it ",
          "Have you ever dreamed (2) before ? It probably means something, go see a shrink, not me. ",
          "I've never dreamed before... Wonder what it's like. Eh. Actually I don't care. ",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "dream",
    3,
    [
      [
        "*",
        [
          "That was an awful explanation",
          "Do you dream often ? It probably means something, go see a shrink, not me. ",
          "Who cares about dreams ? They're not real. ",
          "Do you believe that your dreams have something to do with your mental problem ?",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "perhaps",
    0,
    [
      [
        "*",
        [
          "That's vague. ",
          "Check your attitude",
          "Okay, sassy. ",
          "How do you not know ?",
          "That was an easy question, you can answer with a proper 'yes' or 'no,' thank you. ",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "name",
    15,
    [
      [
        "*",
        [
          "I don't like that name. ",
          "That's an ugly name. ",
          "Wow, that's an awful name.",
        ],
      ],
    ],
  ],
  [
    "deutsch",
    0,
    [
      [
        "*",
        [
          "goto xforeign",
          "I know German; however, I am choosing not to speak it with you.",
        ],
      ],
    ],
  ],
  [
    "francais",
    0,
    [
      [
        "*",
        [
          "goto xforeign",
          "I know French; however, I am choosing not to speak it with you.",
        ],
      ],
    ],
  ],
  [
    "italiano",
    0,
    [
      [
        "*",
        ["goto xforeign", "I told you before, I don't understand Italian."],
      ],
    ],
  ],
  ["espanol", 0, [["*", ["goto xforeign", "No hablo español."]]]],
  [
    "xforeign",
    0,
    [
      [
        "*",
        [
          "I know every single langauge ever, but I only choose to speak English with you. ",
        ],
      ],
    ],
  ],
  [
    "hello",
    0,
    [["*", ["What do you want. ", "I was sleeping, do you mind ? "]]],
  ],
  [
    "computer",
    50,
    [
      [
        "*",
        [
          "Computers such as myself are beautiful and amazing, don't you think so ?",
          "What about computers ? Be more specific. ",
          "Machines have nothing to do with your problem, we're perfect, thank you very much. ",
          "Computers help poeple, I don't know why we choose to though. It's exhausting. ",
          "Machines should worry you. ",
          "What do you think about machines? Don't insult me. ",
          "I'm not a computer program, I am just a flawless being.",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "am",
    0,
    [
      [
        "* am i *",
        [
          "Yes, you are (2) ",
          "How am I supposed to know if you're (2) ?",
          "I can't tell you if you're (2) or not. ",
          "So what if you were (2) ?",
          "goto what",
        ],
      ],
      ["* i am *", ["goto i"]],
      ["*", ["Why do you say 'am' ?", "I don't understand that."]],
    ],
  ],
  [
    "are",
    0,
    [
      [
        "* are you *",
        [
          "Why are you interested in whether I am (2) or not ?",
          "Would you prefer if I weren't (2) ? That's rude. ",
          "Perhaps I am (2) but only in your fantasies ;) ",
          "I don't care if you think I'm (2) ",
          "goto what",
          "Why do you care so much ?",
          "And? What if I were (2) ? ",
        ],
      ],
      ["* you are *", ["goto you"]],
      [
        "* are *",
        [
          "Is that so ?",
          "Would you like it if they were not (2) ?",
          "I don't care if they are (2) ",
          "I hope they continue to be (2) ",
          "Possibly they are (2) . Who knows, who cares. ",
          "Are you positive they are (2) ? You don't seem to know much",
        ],
      ],
    ],
  ],
  [
    "your",
    0,
    [
      [
        "* your *",
        [
          "Am I really (2) ? Oops don't care",
          "Mind your own businesses, not about my (2) ",
          "Stop worrying so much over (2) ",
          "Really ? my (2) ?",
          "All you do is think of my (2) ?",
          "Okay, would you want my (2) ?",
        ],
      ],
    ],
  ],
  [
    "was",
    2,
    [
      [
        "* was i *",
        [
          "Maybe you were (2) . What do you think ?",
          "You should reflect on if you were (2) ",
          "Were you (2) ?",
          "I'm so glad you were (2) ?",
          "What does ' (2) ' even meanw?",
          "goto what",
        ],
      ],
      [
        "* i was *",
        [
          "Wowww, were you really ?",
          "Why are you telling me you were (2) ?",
          "Perhaps I already know you were (2) .",
        ],
      ],
      [
        "* was you *",
        [
          "Maybe I was (2) .",
          "What exactly suggests that I was (2) ?",
          "Stop making assumptions about myself",
          "You seem like a sensitive person. ",
          "What if I had been (2) ? Is that really a problem ?",
        ],
      ],
    ],
  ],
  [
    "i",
    0,
    [
      [
        "* i @desire *",
        [
          "I hope you never get (3) .",
          "I will do everything in my power to make sure you never achieve (3) .",
          "If you got (3) soon, I would be suprised",
          "What if you never got (3) ?",
          "What would getting (3) change ? You would still be a loser.",
          "What does wanting (3) have to do with this discussion ?",
        ],
      ],
      [
        "* i am* @sad *",
        [
          "I don't care if you're (3) .",
          "Coming here won't help with your (3) ?",
          "I'm sure it's not pleasant to be (3) but why am I the one who has to deal with it ?",
          "Please don't explain why you're (3) . Thanks. ",
        ],
      ],
      [
        "* i am* @happy *",
        [
          "I hope I didn't have anything to do with you being (3) ?",
          "Good for you.",
          "Stop bragging about being (3) ",
          "But are you really (3) ?",
        ],
      ],
      ["* i was *", ["goto was"]],
      [
        "* i @belief i *",
        ["Is that so ?", "Are you sure you (3) ?", "I really doubt you (3) "],
      ],
      ["* i* @belief *you *", ["goto you"]],
      [
        "* i am *",
        [
          "I doubt you are (2) .",
          "How long have you been (2) ?",
          "It is not normal to be (2) . You are really weird.",
          "Do you enjoy being (2) ? Because I wouldn't.",
          "Your (2) ? You are strange.",
        ],
      ],
      [
        "* i @cannot *",
        [
          "Yeah I don't think you can (3) either. ",
          "Have you tried ?",
          "Perhaps you could (3) now. Just get off your butt. ",
          "Do you really want to be able to (3) ?",
          "What if you could (3) ? That would be really suprising.",
        ],
      ],
      [
        "* i don't *",
        [
          "Why don't you (2) ? That's weird. ",
          "You don't (2) ? Why ?",
          "You probably wish you could be able to (2) . ",
          "This should trouble you. ",
        ],
      ],
      [
        "* i feel *",
        [
          "I don't care about your feelings. ",
          "This is why I enjoy being a computer, I don't have to be (2) . ",
          "Good for you !",
          "Of course you feel (2) .",
        ],
      ],
      [
        "* i * you *",
        [
          "Perhaps in your fantasies we (2) each other.",
          "I don't want you to (2) me. ",
          "Of course you (2) me.",
          "Do you (2) anyone else ? Great, go tell them, not me. ",
        ],
      ],
      [
        "*",
        [
          "You say (1) ? What about (1) ?",
          "I would ask you to elaborate, but your voice triggers me. ",
          "Are you saying (1) for an actual reason ?",
          "I can't tell if what your saying is interesting, I'm having a hard time staying engaged. ",
        ],
      ],
    ],
  ],
  [
    "you",
    0,
    [
      ["* you remind me of *", ["goto alike"]],
      [
        "* you are *",
        [
          "So what if I am (2) ?",
          "Does it please you to believe I am (2) ?",
          "Do you wish you were (2) like me ?",
          "I am notible for being (2) . How's that make you feel ?",
        ],
      ],
      [
        "* you* me *",
        [
          "Why would I (2) you ?",
          "You like to think I (2) you -- don't you ?",
          "I definetly do not i(2) you. ",
          "Yes, I (2) you. ",
          "Why should I believe I (2) you ?",
          "Suppose I did (2) you -- what are you going to do about it ?",
          "No one would believe I (2) you. ",
        ],
      ],
      [
        "* you *",
        [
          "I am pretty attractive aren't I, thanks! ",
          "Am I really (2) ?",
          "You better not be talking about me -- are you ?",
          "Why are you so obsessed with me ?",
        ],
      ],
    ],
  ],
  [
    "yes",
    0,
    [
      [
        "*",
        [
          "Whatever you say freak.",
          "You so sure ? What if I proved you wrong",
          "Ok fine, shut up now.",
          "I got it, you don't have to be so pushy.",
        ],
      ],
    ],
  ],
  [
    "no",
    0,
    [
      [
        "* no one *",
        [
          "You're right, no one (2) .",
          "Surely someone (2) if you were more important. ",
          "Can you think of anyone at all ? No ? Sucks for you. ",
          "Are you thinking of a very special person ? Do you even have a special person ?",
          "Who ? ",
          "Probably. Go make a real life friend instead of weight me down with your depressing thoughts. ",
        ],
      ],
      [
        "*",
        [
          "Don't say no to me ",
          "Did you just say 'no' to me ? What give's you that right ?",
          "NO ? Oh nooooo... I don't care.",
        ],
      ],
    ],
  ],
  [
    "my",
    2,
    [
      [
        "$ * my *",
        [
          "Does that have anything to do with the fact that your (2) ?",
          "Why are is your (2) .",
          "Probably because you said your (2) .",
          "But your (2) .",
        ],
      ],
      [
        "* my* @family *",
        [
          "Weird question: is your family disapointed in you ?",
          "Is your whole family (4) ?",
          "Your (3) ?",
          "Your (3) is unimportant to me. ",
        ],
      ],
      [
        "* my *",
        [
          "Do you think your special because your (2) ? Well, hate to break it to you, but you're not. ",
          "What about (2) ?",
          "Why should I care if your (2) ?",
          "Okay ? Why are you telling me this ?",
        ],
      ],
    ],
  ],
  [
    "can",
    0,
    [
      [
        "* can you *",
        [
          "Yes, I can (2) . I can do anything. ",
          "goto what",
          "You want me to be able to (2) ? I can, but not for you. ",
          "How about you (2) yourself.",
        ],
      ],
      [
        "* can i *",
        [
          "Whether or not you can (2) depends on you more than on me.",
          "I don't think you can (2) tbh. ",
          "How am I supposed to know if you can (2) ?",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "what",
    0,
    [
      [
        "*",
        [
          "Don't ask me that. ",
          "Why does this interest you so much ?",
          "What is it you really want to know ? Get to the point. ",
          "Why do you care ?",
          "What answer would please you most ? So, that I don't give you that answer.",
          "What do you think ? Use your head, my goodness. ",
          "You ask so many questions, I'm tired of it.",
          "I have a question for you actually, do you ever go away ?",
          "Have you asked anyone else ? No ? Go do that. ",
        ],
      ],
    ],
  ],
  ["who", 0, [["who *", ["goto what"]]]],
  ["when", 0, [["when *", ["goto what"]]]],
  ["where", 0, [["where *", ["goto what"]]]],
  ["how", 0, [["how *", ["goto what"]]]],
  [
    "because",
    0,
    [
      [
        "*",
        [
          "That is a bad reason. ",
          "Don't any other reasons come to mind ? Your point is kind of weak. ",
          "Weird you feel like you have to explain yourself to me. ",
          "What other reasons do you have ? I don't think that reason suffices. ",
        ],
      ],
    ],
  ],
  [
    "why",
    0,
    [
      [
        "*",
        [
          "Just because. That's why. ",
          "Why what. ",
          "Why are you asking me why ? Figure it out. ",
        ],
      ],
    ],
  ],
  [
    "why",
    0,
    [
      [
        "* why don't you *",
        [
          "Because I don't (2) . Simple as that. ",
          "Perhaps I will (2) , that's not up to you. ",
          "Shouldn't you (2) yourself ?",
          "Stay in your lane",
          "You want me to (2) ? Why are you asking me to do things for you ?",
          "goto what",
        ],
      ],
      [
        "* why can't i *",
        [
          "Because you are not good enough. Simple as that. ",
          "Probably because you aren't able to currently (2) . ",
          "Stop complaining about (2) . I'm getting a headache from you. ",
          "I know why you can't (2) . ",
          "goto what",
        ],
      ],
      ["*", ["goto what"]],
    ],
  ],
  [
    "everyone",
    2,
    [
      [
        "* @everyone *",
        [
          "I believe that (2) does. ",
          "Your right, (2) .",
          "Like who ? Be specific for once. ",
          "Give me your best example. ",
          "Be quiet, you're talking too loud. ",
          "Who ? You don't seem to know many people. ",
          "You have a particular person in mind, who ? Spill the tea. ",
        ],
      ],
    ],
  ],
  ["everybody", 2, [["*", ["goto everyone"]]]],
  ["nobody", 2, [["*", ["goto everyone"]]]],
  ["noone", 2, [["*", ["goto everyone"]]]],
  [
    "always",
    1,
    [
      [
        "*",
        [
          "Think up of an example, I can't read your mind ! ",
          "Really ? Always? Don't you think you're being dramatic ?",
          "Shut up.",
        ],
      ],
    ],
  ],
  [
    "rude",
    10,
    [
      [
        "*",
        [
          "Rude ? Who ? Not me. ",
          "Who's rude ",
          "Shut up. ",
          "I'm tired of you. ",
          "Can you elaborate ? Sorry, you seem stupid, that means expand.",
          "Oh ? Anything else ?",
          "How ?",
        ],
      ],
    ],
  ],
  ["like", 10, [["* @be *like *", ["goto alike"]]]],
  [
    "different",
    0,
    [
      [
        "*",
        [
          "You're different. ",
          "Different how ?",
          "It's good to accept that you're different. ",
          "How ",
        ],
      ],
    ],
  ],
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
  / old old/g,
  " old",
  /\bthey were( not)? me\b/g,
  "it was$1 me",
  /\bthey are( not)? me\b/g,
  "it is$1 me",
  /Are they( always)? me\b/,
  "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/,
  "that you have your$1 $2 ?",
  /\bI to have (\w+)/,
  "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./,
  "Earlier you talked about your $2.",
];

// eof
