export const courses = {
  // 1. DATA STRUCTURES
  ds: {
    id: 1,
    imageSrc: "../assets/imgs/hierarchy-structure.png",
    name: "Data Structures",
    category: "Computer Science",
    description:
      "Fundamental concepts including arrays, stacks, queues, trees, and algorithms.",
    easy: [
      {
        id: 1,
        text: "Which data structure follows FIFO?",
        code: `#include&lt;stdio.h&gt;
int main()
{ int x = 10;
  float y = 10.0;
  if(x == y)
  printf("x and y are equal");
  else
  printf("x and y are not equal");
  return 0; 
}`,
        status: "none",
        answers: [
          { id: 1, text: "Stack", isCorrect: false },
          { id: 2, text: "Queue", isCorrect: true },
          { id: 3, text: "Tree", isCorrect: false },
          { id: 4, text: "Graph", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Accessing an array element by index is?",
        status: "none",
        answers: [
          { id: 1, text: "$O(1)$", isCorrect: true },
          { id: 2, text: "$O(n)$", isCorrect: false },
          { id: 3, text: "$O(log n)$", isCorrect: false },
          { id: 4, text: "$O(n^2)$", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Which structure uses LIFO?",
        status: "none",
        answers: [
          { id: 1, text: "Queue", isCorrect: false },
          { id: 2, text: "Stack", isCorrect: true },
          { id: 3, text: "Array", isCorrect: false },
          { id: 4, text: "Linked List", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "A linked list node typically contains data and a ___?",
        status: "none",
        answers: [
          { id: 1, text: "Pointer", isCorrect: true },
          { id: 2, text: "Integer", isCorrect: false },
          { id: 3, text: "Float", isCorrect: false },
          { id: 4, text: "Header", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Which of these is a linear data structure?",
        status: "none",
        answers: [
          { id: 1, text: "Tree", isCorrect: false },
          { id: 2, text: "Graph", isCorrect: false },
          { id: 3, text: "Array", isCorrect: true },
          { id: 4, text: "BST", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "What is the top of a tree called?",
        status: "none",
        answers: [
          { id: 1, text: "Leaf", isCorrect: false },
          { id: 2, text: "Root", isCorrect: true },
          { id: 3, text: "Branch", isCorrect: false },
          { id: 4, text: "Node", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Adding an item to a stack is called?",
        status: "none",
        answers: [
          { id: 1, text: "Pop", isCorrect: false },
          { id: 2, text: "Push", isCorrect: true },
          { id: 3, text: "Enqueue", isCorrect: false },
          { id: 4, text: "Peek", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Removing from a queue is called?",
        status: "none",
        answers: [
          { id: 1, text: "Dequeue", isCorrect: true },
          { id: 2, text: "Pop", isCorrect: false },
          { id: 3, text: "Push", isCorrect: false },
          { id: 4, text: "Delete", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Which structure allows only one-way traversal?",
        status: "none",
        answers: [
          { id: 1, text: "Doubly Linked List", isCorrect: false },
          { id: 2, text: "Singly Linked List", isCorrect: true },
          { id: 3, text: "Circular List", isCorrect: false },
          { id: 4, text: "Array", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "A tree where each node has at most 2 children?",
        status: "none",
        answers: [
          { id: 1, text: "B-Tree", isCorrect: false },
          { id: 2, text: "Binary Tree", isCorrect: true },
          { id: 3, text: "Heap", isCorrect: false },
          { id: 4, text: "Trie", isCorrect: false },
        ],
      },
    ],
    medium: [
      {
        id: 1,
        text: "Which is used for implementing recursion?",
        code: `#include&lt;stdio.h&gt;
int main()
{ int x = 10;
  float y = 10.0;
  if(x == y)
  printf("x and y are equal");
  else
  printf("x and y are not equal");
  return 0; 
}`,
        status: "none",
        answers: [
          { id: 1, text: "Stack", isCorrect: true },
          { id: 2, text: "Queue", isCorrect: false },
          { id: 3, text: "Heap", isCorrect: false },
          { id: 4, text: "Hash Map", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Binary Search worst-case complexity?",
        status: "none",
        answers: [
          { id: 1, text: "$O(n)$", isCorrect: false },
          { id: 2, text: "$O(log n)$", isCorrect: true },
          { id: 3, text: "$O(1)$", isCorrect: false },
          { id: 4, text: "$O(n log n)$", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "Complexity of Bubble Sort in worst case?",
        status: "none",
        answers: [
          { id: 1, text: "$O(n)$", isCorrect: false },
          { id: 2, text: "$O(n^2)$", isCorrect: true },
          { id: 3, text: "$O(log n)$", isCorrect: false },
          { id: 4, text: "$O(1)$", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Which sort is Divide and Conquer?",
        status: "none",
        answers: [
          { id: 1, text: "Bubble", isCorrect: false },
          { id: 2, text: "Merge Sort", isCorrect: true },
          { id: 3, text: "Insertion", isCorrect: false },
          { id: 4, text: "Selection", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "A graph with no cycles is a?",
        status: "none",
        answers: [
          { id: 1, text: "Tree", isCorrect: true },
          { id: 2, text: "Complete Graph", isCorrect: false },
          { id: 3, text: "Bipartite", isCorrect: false },
          { id: 4, text: "Directed", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Hash collision resolution technique?",
        status: "none",
        answers: [
          { id: 1, text: "Chaining", isCorrect: true },
          { id: 2, text: "Sorting", isCorrect: false },
          { id: 3, text: "Searching", isCorrect: false },
          { id: 4, text: "Popping", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Height of a balanced BST with $n$ nodes?",
        status: "none",
        answers: [
          { id: 1, text: "$O(n)$", isCorrect: false },
          { id: 2, text: "$O(log n)$", isCorrect: true },
          { id: 3, text: "$O(n^2)$", isCorrect: false },
          { id: 4, text: "$O(1)$", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Postfix expression for 1+2?",
        status: "none",
        answers: [
          { id: 1, text: "+12", isCorrect: false },
          { id: 2, text: "12+", isCorrect: true },
          { id: 3, text: "1+2", isCorrect: false },
          { id: 4, text: "21+", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "Heap is usually implemented as a?",
        status: "none",
        answers: [
          { id: 1, text: "Linked List", isCorrect: false },
          { id: 2, text: "Array", isCorrect: true },
          { id: 3, text: "Stack", isCorrect: false },
          { id: 4, text: "Queue", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Circular queue is useful for?",
        status: "none",
        answers: [
          { id: 1, text: "Memory management", isCorrect: true },
          { id: 2, text: "Fast search", isCorrect: false },
          { id: 3, text: "Recursion", isCorrect: false },
          { id: 4, text: "Sorting", isCorrect: false },
        ],
      },
    ],
    hard: [
      {
        id: 1,
        text: "Sorted output from a BST requires?",
        status: "none",
        answers: [
          { id: 1, text: "Preorder", isCorrect: false },
          { id: 2, text: "Inorder", isCorrect: true },
          { id: 3, text: "Postorder", isCorrect: false },
          { id: 4, text: "Level order", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "Average complexity of Quick Sort?",
        code: "void quicksort(int arr[], int low, int high) { ... }",
        status: "none",
        answers: [
          { id: 1, text: "$O(n^2)$", isCorrect: false },
          { id: 2, text: "$O(n log n)$", isCorrect: true },
          { id: 3, text: "$O(n)$", isCorrect: false },
          { id: 4, text: "$O(log n)$", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "What is an AVL tree?",
        status: "none",
        answers: [
          { id: 1, text: "Self-balancing BST", isCorrect: true },
          { id: 2, text: "Heap", isCorrect: false },
          { id: 3, text: "B-Tree", isCorrect: false },
          { id: 4, text: "Unordered list", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "Worst-case complexity of Quick Sort?",
        status: "none",
        answers: [
          { id: 1, text: "$O(n log n)$", isCorrect: false },
          { id: 2, text: "$O(n^2)$", isCorrect: true },
          { id: 3, text: "$O(n)$", isCorrect: false },
          { id: 4, text: "$O(log n)$", isCorrect: false },
        ],
      },
      {
        id: 5,
        text: "Dijkstra's algorithm is used for?",
        status: "none",
        answers: [
          { id: 1, text: "Sorting", isCorrect: false },
          { id: 2, text: "Shortest path", isCorrect: true },
          { id: 3, text: "Minimum spanning tree", isCorrect: false },
          { id: 4, text: "Searching", isCorrect: false },
        ],
      },
      {
        id: 6,
        text: "Space complexity of Merge Sort?",
        status: "none",
        answers: [
          { id: 1, text: "$O(1)$", isCorrect: false },
          { id: 2, text: "$O(n)$", isCorrect: true },
          { id: 3, text: "$O(log n)$", isCorrect: false },
          { id: 4, text: "$O(n log n)$", isCorrect: false },
        ],
      },
      {
        id: 7,
        text: "Which traversal is used to delete a tree?",
        status: "none",
        answers: [
          { id: 1, text: "Inorder", isCorrect: false },
          { id: 2, text: "Postorder", isCorrect: true },
          { id: 3, text: "Preorder", isCorrect: false },
          { id: 4, text: "Level order", isCorrect: false },
        ],
      },
      {
        id: 8,
        text: "Red-Black tree root property?",
        status: "none",
        answers: [
          { id: 1, text: "Must be red", isCorrect: false },
          { id: 2, text: "Must be black", isCorrect: true },
          { id: 3, text: "Either red or black", isCorrect: false },
          { id: 4, text: "Has no color", isCorrect: false },
        ],
      },
      {
        id: 9,
        text: "What is a Trie used for?",
        status: "none",
        answers: [
          { id: 1, text: "Searching strings", isCorrect: true },
          { id: 2, text: "Sorting numbers", isCorrect: false },
          { id: 3, text: "Balancing trees", isCorrect: false },
          { id: 4, text: "Storing bits", isCorrect: false },
        ],
      },
      {
        id: 10,
        text: "Prim's algorithm finds what?",
        status: "none",
        answers: [
          { id: 1, text: "Shortest path", isCorrect: false },
          { id: 2, text: "MST", isCorrect: true },
          { id: 3, text: "Max flow", isCorrect: false },
          { id: 4, text: "Cycle", isCorrect: false },
        ],
      },
    ],
  },

  // 2. WEB DEVELOPMENT
  web: {
    id: 2,
    imageSrc: "../assets/imgs/domain.png",
    name: "Web Development",
    category: "Programming",
    description:
      "Modern frontend and backend technologies including HTML5, CSS3, and JavaScript.",
    easy: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "HTML stands for?",
        "Which tag is used for images?",
        "CSS stands for?",
        "Which tag defines a link?",
        "JavaScript is used for?",
        "HTML element for largest heading?",
        "How to make a list?",
        "What tag is for a line break?",
        "Property for background color?",
        "JS variable declaration?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "HyperText Markup Language", isCorrect: i === 0 },
        { id: 2, text: "Cascading Style Sheets", isCorrect: i === 2 },
        { id: 3, text: "Dynamic Styling", isCorrect: false },
        { id: 4, text: "Other", isCorrect: ![0, 2].includes(i) },
      ],
    })),
    medium: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is the Box Model?",
        "How do you select an ID in CSS?",
        "Difference between '==' and '==='?",
        "What is a closure?",
        "Purpose of 'z-index'?",
        "What is Flexbox?",
        "Which event triggers on click?",
        "What is JSON?",
        "How to center a div?",
        "What is the DOM?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Answer A", isCorrect: true },
        { id: 2, text: "Answer B", isCorrect: false },
        { id: 3, text: "Answer C", isCorrect: false },
        { id: 4, text: "Answer D", isCorrect: false },
      ],
    })),
    hard: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "Explain Event Delegation",
        "What are Web Workers?",
        "Explain CORS",
        "Difference between Prototypes and Classes",
        "What is the Virtual DOM?",
        "How does SSR work?",
        "Explain 'this' keyword",
        "What is Debouncing?",
        "Explain PWAs",
        "Purpose of 'use strict'",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct explanation", isCorrect: true },
        { id: 2, text: "Incorrect", isCorrect: false },
        { id: 3, text: "Incorrect", isCorrect: false },
        { id: 4, text: "Incorrect", isCorrect: false },
      ],
    })),
  },

  // 3. OPERATING SYSTEMS
  os: {
    id: 3,
    imageSrc: "../assets/imgs/system-update.png",
    name: "Operating Systems",
    category: "Systems",
    description: "Process management, memory hierarchy, and file systems.",
    easy: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is an OS?",
        "RAM is what type of memory?",
        "What is a Kernel?",
        "GUI stands for?",
        "What is a file extension?",
        "Purpose of a Task Manager?",
        "What is a bootloader?",
        "BIOS stands for?",
        "What is a shortcut?",
        "Which is an OS?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "System Software", isCorrect: i === 0 },
        { id: 2, text: "Volatile", isCorrect: i === 1 },
        { id: 3, text: "Core of OS", isCorrect: i === 2 },
        { id: 4, text: "None", isCorrect: i > 2 },
      ],
    })),
    medium: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is a Deadlock?",
        "Define Paging",
        "Context Switching is?",
        "What is a Mutex?",
        "Define Throughput",
        "What is Virtual Memory?",
        "Round Robin scheduling?",
        "Critical Section problem?",
        "SPOOLing is?",
        "Demand Paging?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Option A", isCorrect: true },
        { id: 2, text: "Option B", isCorrect: false },
      ],
    })),
    hard: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "Banker's Algorithm",
        "Belady's Anomaly",
        "Thrashing in OS",
        "RAID 5 vs RAID 10",
        "Page Replacement: LRU vs FIFO",
        "Interrupt vs Trap",
        "Microkernel architecture",
        "Inodes in Linux",
        "Process Control Block",
        "System Calls",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "High-level concept", isCorrect: true },
        { id: 2, text: "Low-level", isCorrect: false },
      ],
    })),
  },

  // 4. DATABASE MANAGEMENT (DBMS)
  dbms: {
    id: 4,
    imageSrc: "../assets/imgs/database-management.png",
    name: "Database Systems",
    category: "Data Science",
    description: "SQL, NoSQL, Relational algebra, and Normalization.",
    easy: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is SQL?",
        "What is a Primary Key?",
        "Select command usage?",
        "What is a table?",
        "What is a database?",
        "CRUD stands for?",
        "Which is a DB?",
        "What is a row?",
        "What is a column?",
        "What is a query?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
    medium: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "Inner Join vs Outer Join",
        "What is Normalization?",
        "Foreign Key purpose?",
        "What is a View?",
        "Stored Procedures?",
        "Index in DB",
        "ACID properties?",
        "Unique Constraint?",
        "SQL Group By",
        "SQL Having clause",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
    hard: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "B-Trees in Indexing",
        "Concurrency Control",
        "2PL Protocol",
        "Sharding vs Replication",
        "NoSQL CAP Theorem",
        "Deadlock detection",
        "Third Normal Form (3NF)",
        "BCNF vs 3NF",
        "Query Optimization",
        "Materialized Views",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
  },

  // 5. NETWORKING
  net: {
    id: 5,
    imageSrc: "../assets/imgs/computer.png",
    name: "Computer Networks",
    category: "Infrastructure",
    description: "OSI layers, TCP/IP, routing, and switching.",
    easy: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is IP?",
        "DNS stands for?",
        "HTTP stands for?",
        "What is a LAN?",
        "What is a WAN?",
        "Purpose of a router?",
        "What is a port?",
        "Which is a browser?",
        "What is a URL?",
        "Wi-Fi is?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Answer", isCorrect: true },
        { id: 2, text: "Wrong", isCorrect: false },
      ],
    })),
    medium: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "OSI 7 Layers",
        "TCP vs UDP",
        "IPv4 vs IPv6",
        "What is a Subnet?",
        "MAC Address vs IP",
        "What is a Gateway?",
        "DHCP purpose?",
        "What is Ping?",
        "SMTP vs POP3",
        "What is a Firewall?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
    hard: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "BGP Protocol",
        "Subnet Masking Calculation",
        "Handshake in TCP",
        "ARP Spoofing",
        "Network Congestion Control",
        "Error Detection (CRC)",
        "VLAN configuration",
        "Encapsulation process",
        "VPN tunneling",
        "Load Balancing",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
  },

  // 6. CYBERSECURITY
  sec: {
    id: 6,
    imageSrc: "../assets/imgs/cyber-security.png",
    name: "Cybersecurity",
    category: "Security",
    description:
      "Protection of systems from digital attacks and data breaches.",
    easy: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "What is Phishing?",
        "What is Malware?",
        "A strong password has?",
        "What is an Antivirus?",
        "What is a Virus?",
        "What is Encryption?",
        "What is Decryption?",
        "Two-factor auth?",
        "What is a Hacker?",
        "What is a Firewall?",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
    medium: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "SQL Injection",
        "Cross-site Scripting (XSS)",
        "Brute Force attack",
        "What is a VPN?",
        "Symmetric vs Asymmetric",
        "Hashing vs Encryption",
        "What is a Botnet?",
        "Zero-day vulnerability",
        "What is Pentesting?",
        "Social Engineering",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
    hard: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: [
        "RSA Algorithm logic",
        "Diffie-Hellman Key Exchange",
        "Buffer Overflow exploit",
        "AES Encryption standard",
        "Man-in-the-Middle (MITM)",
        "Intrusion Detection (IDS)",
        "Digital Signatures",
        "Kerberos Protocol",
        "Stuxnet case study",
        "Cloud Security Models",
      ][i],
      status: "none",
      answers: [
        { id: 1, text: "Correct", isCorrect: true },
        { id: 2, text: "False", isCorrect: false },
      ],
    })),
  },
};
