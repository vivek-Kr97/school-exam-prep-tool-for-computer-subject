const class8Questions = [

  // ===== MCQ (1–50) =====
  {
    id: 1,
    type: "mcq",
    question: "Which device connects multiple computers in a network?",
    options: ["Router", "Printer", "Scanner", "Monitor"],
    answer: "Router"
  },
  {
    id: 2,
    type: "mcq",
    question: "Which topology uses a central device?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: "Star"
  },
  {
    id: 3,
    type: "mcq",
    question: "Which Photoshop tool is used to move an image?",
    options: ["Brush", "Move", "Crop", "Lasso"],
    answer: "Move"
  },
  {
    id: 4,
    type: "mcq",
    question: "Which tool is used to cut a part of an image?",
    options: ["Move", "Crop", "Zoom", "Eyedropper"],
    answer: "Crop"
  },
  {
    id: 5,
    type: "mcq",
    question: "Which operator is used for multiplication in Python?",
    options: ["+", "-", "*", "/"],
    answer: "*"
  },
  {
    id: 6,
    type: "mcq",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "<!-- -->", "**"],
    answer: "#"
  },
  {
    id: 7,
    type: "mcq",
    question: "Which statement is used for decision making in Python?",
    options: ["for", "while", "if", "print"],
    answer: "if"
  },
  {
    id: 8,
    type: "mcq",
    question: "Which loop executes a fixed number of times?",
    options: ["while", "if", "for", "elif"],
    answer: "for"
  },
  {
    id: 9,
    type: "mcq",
    question: "Which HTML tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ol>"
  },
  {
    id: 10,
    type: "mcq",
    question: "Which tag is used to insert an image in HTML?",
    options: ["<img>", "<src>", "<image>", "<pic>"],
    answer: "<img>"
  },

  // MCQ 11–50
  ...[
    ["Which HTML tag creates a hyperlink?", ["<a>", "<link>", "<href>", "<url>"], "<a>"],
    ["Which tag is used for video?", ["<media>", "<movie>", "<video>", "<mp4>"], "<video>"],
    ["Which tag is used for audio?", ["<sound>", "<music>", "<audio>", "<mp3>"], "<audio>"],
    ["Which network covers a small area?", ["LAN", "MAN", "WAN", "PAN"], "LAN"],
    ["Internet is an example of?", ["LAN", "MAN", "WAN", "PAN"], "WAN"],
    ["Which Photoshop tool selects freehand areas?", ["Lasso", "Crop", "Move", "Brush"], "Lasso"],
    ["Which tool paints color?", ["Brush", "Move", "Zoom", "Crop"], "Brush"],
    ["Variable is used to store?", ["Programs", "Values", "Errors", "Loops"], "Values"],
    ["Which operator gives remainder?", ["//", "/", "%", "**"], "%"],
    ["Which loop runs until condition is false?", ["for", "while", "if", "else"], "while"],
    ["Which HTML tag creates table rows?", ["<td>", "<th>", "<tr>", "<table>"], "<tr>"],
    ["Which tag creates table cell?", ["<tr>", "<td>", "<table>", "<th>"], "<td>"],
    ["Which app is used for messaging?", ["Calculator", "WhatsApp", "Paint", "Camera"], "WhatsApp"],
    ["Which app is used for navigation?", ["Instagram", "Google Maps", "YouTube", "Chrome"], "Google Maps"],
    ["Which operator checks equality?", ["=", "==", "!=", "<"], "=="],
    ["Which Photoshop tool zooms image?", ["Zoom", "Crop", "Move", "Brush"], "Zoom"],
    ["Which control structure repeats code?", ["Sequence", "Selection", "Iteration", "Decision"], "Iteration"],
    ["Which symbol means AND in Python?", ["&&", "&", "and", "or"], "and"],
    ["Which tag is used for unordered list?", ["<ol>", "<ul>", "<li>", "<list>"], "<ul>"],
    ["Which network device forwards data?", ["Hub", "Router", "Printer", "Monitor"], "Router"],
    ["Which app is a social media app?", ["Calculator", "Facebook", "Notepad", "Clock"], "Facebook"],
    ["Which Photoshop tool removes extra part?", ["Crop", "Move", "Brush", "Lasso"], "Crop"],
    ["Which loop may not run even once?", ["for", "while", "nested", "infinite"], "while"],
    ["Which tag defines anchor text?", ["<a>", "<href>", "<link>", "<src>"], "<a>"],
    ["Which app is used for video sharing?", ["YouTube", "Maps", "Drive", "Mail"], "YouTube"],
    ["Which operator gives power?", ["*", "%", "**", "//"], "**"],
    ["Which structure executes in order?", ["Iteration", "Selection", "Sequence", "Loop"], "Sequence"],
    ["Which HTML attribute gives link address?", ["src", "href", "link", "url"], "href"],
    ["Which device connects networks?", ["Switch", "Router", "Hub", "Cable"], "Router"],
    ["Which Photoshop tool picks color?", ["Eyedropper", "Brush", "Move", "Crop"], "Eyedropper"],
    ["Which loop repeats based on condition?", ["for", "while", "if", "elif"], "while"],
    ["Which app is used for emails?", ["Gmail", "Camera", "Gallery", "Maps"], "Gmail"],
    ["Which Python statement stops loop?", ["break", "stop", "exit", "end"], "break"],
    ["Which tag creates table heading?", ["<td>", "<tr>", "<th>", "<table>"], "<th>"],
    ["Which network device broadcasts data?", ["Router", "Switch", "Hub", "Modem"], "Hub"],
    ["Which Photoshop tool writes text?", ["Text", "Brush", "Move", "Crop"], "Text"],
    ["Which app is used for online storage?", ["Drive", "Maps", "Clock", "Dialer"], "Drive"],
    ["Which statement checks multiple conditions?", ["if", "elif", "else", "for"], "elif"]
  ].map((q, i) => ({
    id: 11 + i,
    type: "mcq",
    question: q[0],
    options: q[1],
    answer: q[2]
  })),

  // ===== TRUE / FALSE (51–75) =====
  ...[
    ["LAN covers a small area.", "True"],
    ["Router connects computers directly.", "False"],
    ["Crop tool removes unwanted area.", "True"],
    ["Python is case sensitive.", "True"],
    ["for loop runs infinite times.", "False"],
    ["<img> tag needs closing tag.", "False"],
    ["while loop checks condition first.", "True"],
    ["HTML is a programming language.", "False"],
    ["Photoshop is image editing software.", "True"],
    ["Variables store values.", "True"],
    ["Anchor tag creates link.", "True"],
    ["Audio tag supports sound.", "True"],
    ["Hub is an intelligent device.", "False"],
    ["Algorithm is step-by-step solution.", "True"],
    ["Flowchart uses symbols.", "True"],
    ["Iteration means repetition.", "True"],
    ["if statement is a loop.", "False"],
    ["Google Maps is a mobile app.", "True"],
    ["Table rows are created using <tr>.", "True"],
    ["Video tag supports multimedia.", "True"],
    ["Python uses indentation.", "True"],
    ["WAN is smaller than LAN.", "False"],
    ["Brush tool paints color.", "True"],
    ["HTML tables have rows and columns.", "True"],
    ["Apps are software programs.", "True"]
  ].map((q, i) => ({
    id: 51 + i,
    type: "truefalse",
    question: q[0],
    answer: q[1]
  })),

  // ===== FILL IN THE BLANKS (76–100) =====
  ...[
    ["A network covering a building is called ____.", "LAN"],
    ["Device that connects networks is ____.", "Router"],
    ["Crop tool is used to ____ an image.", "cut"],
    ["Symbol for Python comment is ____.", "#"],
    ["Variable stores ____.", "value"],
    ["Remainder operator is ____.", "%"],
    ["Decision making uses ____ statement.", "if"],
    ["Loop that runs fixed times is ____ loop.", "for"],
    ["<a> tag is used to create ____.", "link"],
    ["HTML table row tag is ____.", "<tr>"],
    ["Algorithm is ____ by step solution.", "step"],
    ["Flowchart uses ____ symbols.", "standard"],
    ["Iteration means ____.", "repetition"],
    ["<img> tag uses ____ attribute for image path.", "src"],
    ["Photoshop is used for ____ editing.", "image"],
    ["Eyedropper tool picks ____.", "color"],
    ["While loop runs until ____ is false.", "condition"],
    ["<ul> creates ____ list.", "unordered"],
    ["Mobile apps run on ____ phones.", "smart"],
    ["Google Maps is used for ____.", "navigation"],
    ["Python power operator is ____.", "**"],
    ["Hub sends data to ____ devices.", "all"],
    ["<video> tag is used to embed ____.", "video"],
    ["App development creates ____.", "applications"],
    ["HTML audio tag supports ____ files.", "audio"]
  ].map((q, i) => ({
    id: 76 + i,
    type: "fillblank",
    question: q[0],
    answer: q[1]
  })),

  // ===== ONE WORD (101–130) =====
  ...[
    ["Small area network?", "LAN"],
    ["Image editing software?", "Photoshop"],
    ["Python decision statement?", "if"],
    ["Loop with fixed count?", "for"],
    ["Loop with condition?", "while"],
    ["HTML hyperlink tag?", "<a>"],
    ["Image tag?", "<img>"],
    ["Audio tag?", "<audio>"],
    ["Video tag?", "<video>"],
    ["Data storage variable?", "Variable"],
    ["Remainder operator?", "%"],
    ["Step-by-step solution?", "Algorithm"],
    ["Graphical algorithm?", "Flowchart"],
    ["Network connecting device?", "Router"],
    ["List without order?", "Unordered"],
    ["App for chatting?", "WhatsApp"],
    ["App for navigation?", "Maps"],
    ["Photo cut tool?", "Crop"],
    ["Color picking tool?", "Eyedropper"],
    ["Repetition structure?", "Iteration"],
    ["Python power operator?", "**"],
    ["HTML table row?", "<tr>"],
    ["HTML table cell?", "<td>"],
    ["Text writing tool?", "Text"],
    ["Email app?", "Gmail"],
    ["Video sharing app?", "YouTube"],
    ["Mobile software?", "App"],
    ["Image moving tool?", "Move"],
    ["Python comment symbol?", "#"],
    ["Repeating loop keyword?", "while"]
  ].map((q, i) => ({
    id: 101 + i,
    type: "oneword",
    question: q[0],
    answer: q[1]
  })),

  // ===== SHORT ANSWER (131–160) =====
  ...[
    ["What is networking?", "Connecting computers to share data and resources."],
    ["Define LAN.", "LAN is a network covering a small area."],
    ["What is Photoshop?", "An image editing software."],
    ["What is a variable?", "A variable stores data values."],
    ["What is an algorithm?", "A step-by-step solution to a problem."],
    ["What is a flowchart?", "A graphical representation of an algorithm."],
    ["What is if statement?", "It checks a condition and executes code."],
    ["What is for loop?", "It repeats code a fixed number of times."],
    ["What is while loop?", "It repeats code while condition is true."],
    ["What is HTML list?", "A way to display items in list form."],
    ["What is ordered list?", "A numbered list in HTML."],
    ["What is table in HTML?", "Structure of rows and columns."],
    ["What is anchor tag?", "Tag used to create hyperlinks."],
    ["What is image tag?", "Tag used to insert images."],
    ["What is audio tag?", "Tag used to play sound."],
    ["What is video tag?", "Tag used to play videos."],
    ["What is an app?", "A software application for users."],
    ["Give two examples of apps.", "WhatsApp and YouTube"],
    ["What is iterative statement?", "Statement used for repetition."],
    ["What is conditional statement?", "Statement used for decision making."],
    ["What is Move tool?", "Tool used to move image objects."],
    ["What is Crop tool?", "Tool used to remove unwanted parts."],
    ["What is Eyedropper tool?", "Tool used to pick colors."],
    ["What is router?", "Device that connects networks."],
    ["What is hub?", "Device that broadcasts data."],
    ["Difference between for and while loop?", "for runs fixed times, while runs on condition."],
    ["What is control structure?", "Defines flow of execution."],
    ["What is Python operator?", "Symbol used to perform operations."],
    ["What is app development?", "Process of creating applications."],
    ["Why networking is important?", "To share data and resources."]
  ].map((q, i) => ({
    id: 131 + i,
    type: "short",
    question: q[0],
    answer: q[1]
  }))

];

export default class8Questions;
