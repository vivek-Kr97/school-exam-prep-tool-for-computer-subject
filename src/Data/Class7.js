const class7Questions = [

  // ===== MCQ (1–50) =====
  {
    id: 1,
    type: "mcq",
    question: "Which number system uses base 2?",
    options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
    answer: "Binary"
  },
  {
    id: 2,
    type: "mcq",
    question: "Hexadecimal number system uses symbols:",
    options: ["0–7", "0–9", "0–9 and A–F", "0–1"],
    answer: "0–9 and A–F"
  },
  {
    id: 3,
    type: "mcq",
    question: "Which operator gives the remainder in Python?",
    options: ["/", "//", "%", "**"],
    answer: "%"
  },
  {
    id: 4,
    type: "mcq",
    question: "What is the output of: print(5 + 2 * 3)?",
    options: ["21", "11", "15", "10"],
    answer: "11"
  },
  {
    id: 5,
    type: "mcq",
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<h4>", "<h2>", "<h1>"],
    answer: "<h1>"
  },
  {
    id: 6,
    type: "mcq",
    question: "Which CSS property changes text color?",
    options: ["bgcolor", "text-color", "color", "font-color"],
    answer: "color"
  },
  {
    id: 7,
    type: "mcq",
    question: "Decimal value of (101)₂ is:",
    options: ["3", "4", "5", "6"],
    answer: "5"
  },
  {
    id: 8,
    type: "mcq",
    question: "Which is a cloud storage service?",
    options: ["MS Word", "Google Drive", "Paint", "Calculator"],
    answer: "Google Drive"
  },
  {
    id: 9,
    type: "mcq",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "#"
  },
  {
    id: 10,
    type: "mcq",
    question: "Stealing personal information online is called:",
    options: ["Phishing", "Formatting", "Debugging", "Uploading"],
    answer: "Phishing"
  },

  // MCQ 11–50
  ...[
    ["Base of decimal number system?", ["2", "8", "10", "16"], "10"],
    ["Which operator checks equality?", ["=", "==", "!=", "<"], "=="],
    ["HTML stands for?", ["Hyper Tool Markup", "Hyper Text Markup Language", "High Text Machine Language", "None"], "Hyper Text Markup Language"],
    ["CSS is used for?", ["Logic", "Styling", "Database", "Security"], "Styling"],
    ["Cloud computing needs?", ["Printer", "Internet", "Scanner", "CPU"], "Internet"],
    ["Which is NOT a cyber threat?", ["Virus", "Trojan", "Firewall", "Worm"], "Firewall"],
    ["Which loop checks condition first?", ["for", "while", "do-while", "if"], "while"],
    ["Which tag inserts a line break?", ["<br>", "<hr>", "<p>", "<b>"], "<br>"],
    ["Which CSS type is written inside HTML tag?", ["External", "Internal", "Inline", "Embedded"], "Inline"],
    ["Binary of (2)₁₀ is?", ["10", "11", "01", "100"], "10"],
    ["Operator precedence decides?", ["Loop order", "Execution order", "Syntax", "Output"], "Execution order"],
    ["Which is a search engine?", ["Chrome", "Google", "Windows", "Linux"], "Google"],
    ["Cyber security protects from?", ["Heat", "Dust", "Digital attacks", "Electricity"], "Digital attacks"],
    ["Which Python keyword is used for condition?", ["loop", "if", "print", "def"], "if"],
    ["Which tag makes text bold?", ["<i>", "<u>", "<b>", "<p>"], "<b>"],
    ["Which number system uses A–F?", ["Binary", "Octal", "Decimal", "Hexadecimal"], "Hexadecimal"],
    ["Which service stores data online?", ["RAM", "Hard Disk", "Cloud", "CPU"], "Cloud"],
    ["Which is NOT a browser?", ["Chrome", "Firefox", "Google Drive", "Edge"], "Google Drive"],
    ["Which Python operator is logical AND?", ["&", "&&", "and", "or"], "and"],
    ["Which attack sends fake emails?", ["Hacking", "Phishing", "Spamming", "Formatting"], "Phishing"],
    ["Which tag is root of HTML?", ["<body>", "<head>", "<html>", "<title>"], "<html>"],
    ["Binary numbers use digits?", ["0–9", "0–7", "0–1", "1–9"], "0–1"],
    ["Which CSS property sets background color?", ["color", "bg", "background-color", "fill"], "background-color"],
    ["Which is an example of SaaS?", ["Google Docs", "Hard Disk", "Router", "Printer"], "Google Docs"],
    ["Which operator gives power?", ["*", "%", "**", "//"], "**"],
    ["Which is a cyber crime?", ["Debugging", "Phishing", "Coding", "Formatting"], "Phishing"],
    ["Which HTML tag creates paragraph?", ["<p>", "<h1>", "<br>", "<hr>"], "<p>"],
    ["Decimal of (111)₂?", ["5", "6", "7", "8"], "7"],
    ["Which cloud service by Microsoft?", ["Drive", "OneDrive", "Dropbox", "iCloud"], "OneDrive"],
    ["Which Python symbol means NOT equal?", ["==", "!=", "=", "<>"], "!="],
    ["Which CSS is best for large sites?", ["Inline", "Internal", "External", "Embedded"], "External"],
    ["Which cyber threat locks data?", ["Virus", "Trojan", "Ransomware", "Spyware"], "Ransomware"],
    ["Which tag creates list?", ["<list>", "<ol>", "<li>", "<ul>"], "<ul>"],
    ["Binary of (4)₁₀?", ["100", "10", "11", "101"], "100"],
    ["Which is an output of cloud?", ["Offline", "Online storage", "Printer", "UPS"], "Online storage"],
    ["Which operator is division?", ["*", "//", "/", "%"], "/"],
    ["Which cyber law deals with IT?", ["IPC", "IT Act", "RTI", "GST"], "IT Act"],
    ["Which HTML tag adds image?", ["<img>", "<src>", "<pic>", "<image>"], "<img>"],
    ["Which CSS property changes font size?", ["font", "size", "font-size", "text-size"], "font-size"]
  ].map((q, i) => ({
    id: 11 + i,
    type: "mcq",
    question: q[0],
    options: q[1],
    answer: q[2]
  })),

  // ===== TRUE / FALSE (51–75) =====
  ...[
    ["Binary system uses base 2.", "True"],
    ["(10011)₂ is even.", "False"],
    ["HTML defines webpage structure.", "True"],
    ["Inline CSS is written inside <style> tag.", "False"],
    ["Cloud computing needs internet.", "True"],
    ["== checks assignment.", "False"],
    ["CSS stands for Cascading Style Sheets.", "True"],
    ["Phishing is a cyber crime.", "True"],
    ["Decimal system uses base 8.", "False"],
    ["Python is case sensitive.", "True"],
    ["<h1> is smallest heading.", "False"],
    ["Google Drive is cloud storage.", "True"],
    ["Cyber security prevents attacks.", "True"],
    ["Binary numbers use digits 0–9.", "False"],
    ["External CSS is best for big sites.", "True"],
    ["% operator gives quotient.", "False"],
    ["Cloud data is always local.", "False"],
    ["Firewall is a cyber threat.", "False"],
    ["<br> adds new line.", "True"],
    ["Algorithm is step-by-step solution.", "True"],
    ["Flowchart uses symbols.", "True"],
    ["Ransomware locks data.", "True"],
    ["CSS controls logic.", "False"],
    ["Internet is required for cloud.", "True"],
    ["Python uses indentation.", "True"]
  ].map((q, i) => ({
    id: 51 + i,
    type: "truefalse",
    question: q[0],
    answer: q[1]
  })),

  // ===== FILL IN THE BLANKS (76–100) =====
  ...[
    ["Base of decimal system is ____.", "10"],
    ["(111)₂ in decimal is ____.", "7"],
    ["== operator is used for ____ comparison.", "equality"],
    ["CSS stands for ____.", "Cascading Style Sheets"],
    ["Google Maps is a ____ based service.", "cloud"],
    ["Binary system uses base ____.", "2"],
    ["HTML stands for ____.", "Hyper Text Markup Language"],
    ["Symbol for Python comment is ____.", "#"],
    ["Largest HTML heading tag is ____.", "<h1>"],
    ["Remainder operator is ____.", "%"],
    ["Cloud computing stores data on ____.", "servers"],
    ["Cyber crime is illegal ____ activity.", "online"],
    ["External CSS is linked using ____ tag.", "<link>"],
    ["Python uses ____ for conditions.", "if"],
    ["Decimal number system uses base ____.", "10"],
    ["Hexadecimal uses letters up to ____.", "F"],
    ["Google Drive is a ____ service.", "storage"],
    ["Operator precedence decides ____ order.", "execution"],
    ["Flowchart uses ____ symbols.", "standard"],
    ["Algorithm is a ____ by step solution.", "step"],
    ["Password stealing is called ____.", "phishing"],
    ["CSS controls ____ of webpage.", "style"],
    ["Binary digits are called ____.", "bits"],
    ["Internet is needed for ____ computing.", "cloud"],
    ["Python is a ____ level language.", "high"]
  ].map((q, i) => ({
    id: 76 + i,
    type: "fillblank",
    question: q[0],
    answer: q[1]
  })),

  // ===== ONE WORD (101–130) =====
  ...[
    ["Base of binary system?", "2"],
    ["Brain of computer?", "CPU"],
    ["Remainder operator?", "%"],
    ["Largest HTML heading?", "<h1>"],
    ["Python comment symbol?", "#"],
    ["Cloud storage by Google?", "Google Drive"],
    ["Cyber attack using fake emails?", "Phishing"],
    ["Binary digit?", "Bit"],
    ["Online data storage?", "Cloud"],
    ["Equality operator?", "=="],
    ["Not equal operator?", "!="],
    ["Webpage styling language?", "CSS"],
    ["Step-by-step solution?", "Algorithm"],
    ["Diagrammatic algorithm?", "Flowchart"],
    ["Decimal base?", "10"],
    ["Hexadecimal base?", "16"],
    ["Inline CSS written where?", "Tag"],
    ["Cyber protection?", "Security"],
    ["Microsoft cloud service?", "OneDrive"],
    ["Loop with condition first?", "While"],
    ["Python condition keyword?", "if"],
    ["HTML root tag?", "<html>"],
    ["Font color property?", "color"],
    ["Data locked by?", "Ransomware"],
    ["Online software type?", "SaaS"],
    ["Web structure language?", "HTML"],
    ["Cloud needs?", "Internet"],
    ["Cyber law in India?", "IT Act"],
    ["Binary of 1?", "1"],
    ["Binary of 0?", "0"]
  ].map((q, i) => ({
    id: 101 + i,
    type: "oneword",
    question: q[0],
    answer: q[1]
  })),

  // ===== SHORT ANSWER (131–160) =====
  ...[
    ["Define number system.", "A number system is a way to represent numbers using symbols."],
    ["Convert (10)₁₀ to binary.", "1010"],
    ["What is an algorithm?", "An algorithm is a step-by-step solution to a problem."],
    ["What is a flowchart?", "A flowchart is a graphical representation of an algorithm."],
    ["Write two HTML rules.", "Tags are enclosed in <> and must be properly closed."],
    ["Explain operator precedence.", "It decides the order in which operators are executed."],
    ["Python code to check number > 10.", "if num > 10: print('Greater')"],
    ["What is cloud computing?", "It is storing and accessing data over the internet."],
    ["Name two cyber threats.", "Virus and Phishing"],
    ["Program to check vowel.", "if ch in 'aeiou': print('Vowel')"],
    ["What is CSS?", "CSS styles and designs web pages."],
    ["Binary vs Decimal.", "Binary uses base 2, decimal uses base 10."],
    ["Define cyber security.", "Protection from digital attacks."],
    ["What is phishing?", "Stealing data using fake emails or sites."],
    ["Explain HTML.", "HTML creates the structure of webpages."],
    ["What is inline CSS?", "CSS written inside an HTML tag."],
    ["What is external CSS?", "CSS written in a separate file."],
    ["Define cloud storage.", "Online storage of data."],
    ["What is Google Drive?", "Google cloud storage service."],
    ["Explain SaaS.", "Software provided online as a service."],
    ["Define bit.", "Smallest unit of data."],
    ["What is password?", "Secret code for security."],
    ["Explain ransomware.", "Malware that locks data."],
    ["What is a browser?", "Software to access websites."],
    ["Name two browsers.", "Chrome and Firefox"],
    ["What is HTML tag?", "Instruction enclosed in <>."],
    ["Explain binary number.", "Number system using 0 and 1."],
    ["What is equality operator?", "Operator that compares values."],
    ["What is indentation in Python?", "Spaces used to define code blocks."],
    ["Why cyber security is important?", "To protect data and systems."]
  ].map((q, i) => ({
    id: 131 + i,
    type: "short",
    question: q[0],
    answer: q[1]
  }))

];

export default class7Questions;
