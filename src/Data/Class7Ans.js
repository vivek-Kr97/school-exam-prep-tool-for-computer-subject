const Class7Ans = [
  {
    section: "SECTION A – Tick the correct option",
    type: "mcq",
    marks: "10 × 1 = 10",
    questions: [
      {
        qNo: 1,
        question: "Which number system uses base 2?",
        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
        correctAnswer: "Binary"
      },
      {
        qNo: 2,
        question: "The hexadecimal number system uses symbols:",
        options: ["0–7", "0–9", "0–9 and A–F", "0–1"],
        correctAnswer: "0–9 and A–F"
      },
      {
        qNo: 3,
        question: "Which operator gives the remainder in Python?",
        options: ["/", "//", "%", "**"],
        correctAnswer: "%"
      },
      {
        qNo: 4,
        question: "What is the output of the following Python code? print(5 + 2 * 3)",
        options: ["21", "11", "15", "10"],
        correctAnswer: "11"
      },
      {
        qNo: 5,
        question: "Which HTML tag is used for the largest heading?",
        options: ["h3", "h1", "h4", "h6"],
        correctAnswer: "h1"
      },
      {
        qNo: 6,
        question: "Which CSS property is used to change text color?",
        options: ["bgcolor", "text-color", "color", "font-color"],
        correctAnswer: "color"
      },
      {
        qNo: 7,
        question: "What is the decimal value of (101)₂?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
      },
      {
        qNo: 8,
        question: "Which of the following is a cloud storage service?",
        options: ["MS Word", "Google Drive", "Paint", "Calculator"],
        correctAnswer: "Google Drive"
      },
      {
        qNo: 9,
        question: "Which symbol is used for comments in Python?",
        options: ["//", " ", "#", "**"],
        correctAnswer: "#"
      },
      {
        qNo: 10,
        question: "Which cybercrime involves stealing personal information?",
        options: ["Phishing", "Formatting", "Debugging", "Uploading"],
        correctAnswer: "Phishing"
      }
    ]
  },

  {
    section: "SECTION B – Fill in the blanks",
    type: "fill",
    marks: "5 × 1 = 5",
    questions: [
      { qNo: 1, question: "The base of the decimal number system is __________.", answer: "10" },
      { qNo: 2, question: "(111)₂ in decimal is __________.", answer: "7" },
      { qNo: 3, question: "The operator == in Python is used for __________.", answer: "comparison" },
      { qNo: 4, question: "CSS stands for ___________________________.", answer: "Cascading Style Sheets" },
      { qNo: 5, question: "Google Maps is an example of a __________ based service.", answer: "cloud" }
    ]
  },

  {
    section: "SECTION C – True or False",
    type: "truefalse",
    marks: "5 × 1 = 5",
    questions: [
      { qNo: 1, question: "(10011)₂ is an even number.", answer: false },
      { qNo: 2, question: "HTML is used to design the structure of a webpage.", answer: true },
      { qNo: 3, question: "Inline CSS is written inside the <style> tag.", answer: false },
      { qNo: 4, question: "Cloud computing requires an internet connection.", answer: true },
      { qNo: 5, question: "Cyber security protects systems from digital attacks.", answer: true }
    ]
  },

  {
    section: "SECTION D – Short Answer Questions",
    type: "short",
    marks: "10 × 3 = 30",
    questions: [
      {
        qNo: 1,
        question: "Define number system.",
        answer: "A number system is a way of representing numbers using a set of digits and a base. Examples include binary, decimal, octal, and hexadecimal."
      },
      {
        qNo: 2,
        question: "Convert (10)₁₀ to binary.",
        answer: "(10)₁₀ = (1010)₂"
      },
      {
        qNo: 3,
        question: "What is an algorithm?",
        answer: "An algorithm is a step-by-step procedure used to solve a problem or perform a task."
      },
      {
        qNo: 4,
        question: "What is a flowchart?",
        answer: "A flowchart is a graphical representation of an algorithm using symbols and arrows."
      },
      {
        qNo: 5,
        question: "Write any two rules for writing HTML code.",
        answer: "HTML tags should be written inside angle brackets and most tags must be properly closed."
      },
      {
        qNo: 6,
        question: "What is operator precedence in Python?",
        answer: "Operator precedence defines the order in which operators are evaluated in an expression."
      },
      {
        qNo: 7,
        question: "Write a Python statement to check whether a number is greater than 10.",
        answer: "if num > 10: print('Number is greater than 10')"
      },
      {
        qNo: 8,
        question: "What is cloud computing?",
        answer: "Cloud computing is the use of internet-based services to store, manage, and process data."
      },
      {
        qNo: 9,
        question: "Name any two cyber threats.",
        answer: "Virus and phishing are examples of cyber threats."
      },
      {
        qNo: 10,
        question: "Write a Python program to check whether a character is a vowel or a consonant.",
        answer:
`ch = input("Enter a character: ")
if ch in 'aeiouAEIOU':
    print("Vowel")
else:
    print("Consonant")`
      },
      {
        qNo: 11,
        question: "What is CSS?",
        answer: "CSS is used to control the style and layout of webpages such as colors, fonts, and spacing."
      },
      {
        qNo: 12,
        question: "Differentiate between binary and decimal number system.",
        answer: "Binary uses base 2 with digits 0 and 1, while decimal uses base 10 with digits 0 to 9."
      }
    ]
  },

  {
    section: "SECTION E – Long / Application Based Questions",
    type: "long",
    marks: "5 × 6 = 30",
    questions: [
      {
        qNo: 1,
        question: "Convert the following numbers.",
        answer:
          "a) (25)₁₀ = (11001)₂\nb) (1101)₂ = (13)₁₀"
      },
      {
        qNo: 2,
        question: "Write a Python program to check whether a given number lies between 1 and 100.",
        answer:
`num = int(input("Enter a number: "))
if num >= 1 and num <= 100:
    print("Number lies between 1 and 100")
else:
    print("Number is out of range")`
      },
      {
        qNo: 3,
        question: "Write a Python program to find the greater of two numbers entered by the user.",
        answer:
`a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
if a > b:
    print(a, "is greater")
else:
    print(b, "is greater")`
      },
      {
        qNo: 4,
        question: "Explain HTML document structure with a suitable example.",
        answer:
          "An HTML document consists of <!DOCTYPE>, <html>, <head>, <title>, and <body> tags. The head contains metadata, and the body contains visible content."
      },
      {
        qNo: 5,
        question: "Write a Python program to check whether a password is valid (password = 'python123').",
        answer:
`pwd = input("Enter password: ")
if pwd == "python123":
    print("Valid password")
else:
    print("Invalid password")`
      },
      {
        qNo: 6,
        question: "Explain cybercrime and cyber security with examples.",
        answer:
          "Cybercrime refers to illegal activities done using computers, such as hacking and phishing. Cyber security protects systems and data from such attacks using tools like antivirus and firewalls."
      },
      {
        qNo: 7,
        question: "Write short notes on Google Drive and OneDrive.",
        answer:
          "Google Drive and OneDrive are cloud storage services used to store files online, access them from anywhere, and share them securely."
      }
    ]
  }
];
export default Class7Ans;