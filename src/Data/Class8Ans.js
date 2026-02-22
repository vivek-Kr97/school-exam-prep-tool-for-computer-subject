const Class8Ans = [
  {
    section: "SECTION A – MULTIPLE CHOICE QUESTIONS",
    type: "mcq",
    marks: "10 × 1 = 10",
    questions: [
      { qNo: 1, question: "What does type(25) return in Python?", options: ["float", "str", "Boolean", "int"], correctAnswer: "int" },
      { qNo: 2, question: "__ operator gives true if any one condition is true?", options: ["AND", "OR", "NOT", "none"], correctAnswer: "OR" },
      { qNo: 3, question: "Which tool in Photoshop is used to remove unwanted outer areas of an image?", options: ["Lasso", "Move", "Crop", "Brush"], correctAnswer: "Crop" },
      { qNo: 4, question: "Which symbol is used for comments in Python?", options: ["//", "&", "#", "**"], correctAnswer: "#" },
      { qNo: 5, question: "Which data type is used to store whole numbers?", options: ["float", "str", "int", "bool"], correctAnswer: "int" },
      { qNo: 6, question: "Which operator reverses the result?", options: ["AND", "OR", "NOT", "none"], correctAnswer: "NOT" },
      { qNo: 7, question: "Which tag is used to create an ordered list?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: "<ol>" },
      { qNo: 8, question: "Which tag is used to display images in HTML?", options: ["<image>", "<pic>", "<img>", "<src>"], correctAnswer: "<img>" },
      { qNo: 9, question: "_________ provides alternate text for an image?", options: ["src", "alt", "href", "link"], correctAnswer: "alt" },
      { qNo: 10, question: "___ statement executes when condition is false.", options: ["if", "else", "if..else", "elif"], correctAnswer: "else" }
    ]
  },

  {
    section: "SECTION B – FILL IN THE BLANKS",
    type: "fill",
    marks: "5 × 1 = 5",
    questions: [
      { qNo: 1, question: "___ is mandatory in conditional statement.", answer: "Condition" },
      { qNo: 2, question: "The default extension of a Photoshop file is __.", answer: ".psd" },
      { qNo: 3, question: "____ selects rectangular area of an image.", answer: "Rectangular Marquee Tool" },
      { qNo: 4, question: "An unordered list is created using the __ tag.", answer: "<ul>" },
      { qNo: 5, question: "____() function checks for data type.", answer: "type" }
    ]
  },

  {
    section: "SECTION C – TRUE / FALSE",
    type: "truefalse",
    marks: "5 × 1 = 5",
    questions: [
      { qNo: 1, question: "// is an arithmetical operator.", answer: false },
      { qNo: 2, question: "Python is a case-sensitive language.", answer: true },
      { qNo: 3, question: "The <a> tag is used to link web pages.", answer: true },
      { qNo: 4, question: "The Move Tool is used to paint images.", answer: false },
      { qNo: 5, question: "PW apps come under entertainment apps.", answer: false }
    ]
  },

  {
    section: "SECTION D – SHORT ANSWER QUESTIONS",
    type: "short",
    marks: "10 × 3 = 30",
    questions: [
      { qNo: 1, question: "What is algorithm?", answer: "An algorithm is a step-by-step method used to solve a problem logically." },
      { qNo: 2, question: "Explain ordered and unordered list in HTML?", answer: "Ordered lists use numbers and are created using <ol>. Unordered lists use bullets and are created using <ul>." },
      { qNo: 3, question: "What are data types in Python?", answer: "Data types specify the type of data stored in a variable such as int, float, string, and boolean." },
      { qNo: 4, question: "What are conditional statements?", answer: "Conditional statements execute code based on whether a condition is true or false." },
      { qNo: 5, question: "What are variables in Python?", answer: "Variables are used to store data values in memory." },
      { qNo: 6, question: "Write the use of the print() function.", answer: "print() is used to display output on the screen." },
      { qNo: 7, question: "What are operators in Python? Name them.", answer: "Operators perform operations on values. Types include arithmetic, relational, logical, and assignment operators." },
      { qNo: 8, question: "Differentiate between AND and OR operators.", answer: "AND returns true only if both conditions are true, while OR returns true if any one condition is true." },
      { qNo: 9, question: "What is an ordered list?", answer: "An ordered list displays items in a numbered sequence using <ol> tag." },
      { qNo: 10, question: "What are tables in HTML?", answer: "Tables are used to display data in rows and columns using <table>, <tr>, and <td> tags." },
      { qNo: 11, question: "What is hyperlinking?", answer: "Hyperlinking connects one webpage to another using clickable links." },
      { qNo: 12, question: "Name any three types of mobile apps.", answer: "Educational apps, Entertainment apps, Utility apps." }
    ]
  },

  {
    section: "SECTION E – LONG ANSWER TYPE QUESTIONS",
    type: "long",
    marks: "5 × 6 = 30",
    questions: [
      {
        qNo: 1,
        question: "Explain if-else with a Python program to check whether a number is even or odd.",
        answer:
`num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Number is Even")
else:
    print("Number is Odd")`
      },
      {
        qNo: 2,
        question: "Explain the for loop in Python. Write a program to print numbers from 1 to 10.",
        answer:
`for i in range(1, 11):
    print(i)`
      },
      {
        qNo: 3,
        question: "What is a while loop? Write a Python program to find the factorial of a number.",
        answer:
`num = int(input("Enter a number: "))
fact = 1

while num > 0:
    fact = fact * num
    num = num - 1

print("Factorial is:", fact)`
      },
      {
        qNo: 4,
        question: "Differentiate between for loop and while loop with examples.",
        answer:
`# for loop example
for i in range(3):
    print(i)

# while loop example
i = 0
while i < 3:
    print(i)
    i += 1`
      },
      {
        qNo: 5,
        question: "Write a Python program to find the largest of three numbers.",
        answer:
`a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))

if a > b and a > c:
    print("Largest number is:", a)
elif b > c:
    print("Largest number is:", b)
else:
    print("Largest number is:", c)`
      },
      {
        qNo: 6,
        question: "What is an infinite loop? Write a Python example and explain how to stop it.",
        answer:
`while True:
    print("This is an infinite loop")
    break`
      },
      {
        qNo: 7,
        question: "What is <img> tag? Explain its attributes.",
        answer:
          "The <img> tag is used to display images in HTML. Important attributes include src (image path), alt (alternate text), width, and height."
      }
    ]
  }
];
export default Class8Ans;