export const courses = {
  ds: {
    id: 1,
    name: "Data Structures",
    description:
      "This course tests fundamental concepts of data structures including arrays, stacks, queues, trees, and algorithms.",

    easy: [
      {
        id: 1,
        text: "Which data structure follows the FIFO principle?",
        status: "none", //  none - answered - marked
        answers: [
          { id: 1, text: "Stack", isCorrect: false },
          { id: 2, text: "Queue", isCorrect: true },
          { id: 3, text: "Tree", isCorrect: false },
          { id: 4, text: "Graph", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "What is the time complexity of accessing an element in an array?",
        status: "marked", //  none - answered - marked
        answers: [
          { id: 1, text: "O(1)", isCorrect: true },
          { id: 2, text: "O(n)", isCorrect: false },
          { id: 3, text: "O(log n)", isCorrect: false },
          { id: 4, text: "O(n²)", isCorrect: false },
        ],
      },
    ],

    medium: [
      {
        id: 1,
        text: "Which data structure is used for implementing recursion?",
        status: "none", // none - answered - marked
        answers: [
          { id: 1, text: "Queue", isCorrect: false },
          { id: 2, text: "Stack", isCorrect: true },
          { id: 3, text: "Heap", isCorrect: false },
          { id: 4, text: "Linked List", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "What is the worst-case time complexity of Binary Search?",
        status: "none", // none - answered - marked
        answers: [
          { id: 1, text: "O(n)", isCorrect: false },
          { id: 2, text: "O(log n)", isCorrect: true },
          { id: 3, text: "O(1)", isCorrect: false },
          { id: 4, text: "O(n log n)", isCorrect: false },
        ],
      },
    ],

    hard: [
      {
        id: 1,
        text: "Which traversal method is used to get sorted output from a BST?",
        status: "answered", // answered - marked
        answers: [
          { id: 1, text: "Preorder", isCorrect: false },
          { id: 2, text: "Postorder", isCorrect: false },
          { id: 3, text: "Inorder", isCorrect: true },
          { id: 4, text: "Level order", isCorrect: false },
        ],
      },
      {
        id: 2,
        text: "What is the average time complexity of Quick Sort?",
        status: "none", // none - answered - marked
        code: `int main()
{ int x = 10;
  float y = 10.0;
  if(x == y)
  printf("x and y are equal");
  else
  printf("x and y are not equal");
  return 0; 
}`,
        status: "none", // answered - marked
        answers: [
          { id: 1, text: "O(n²)", isCorrect: false },
          { id: 2, text: "O(n log n)", isCorrect: true },
          { id: 3, text: "O(log n)", isCorrect: false },
          { id: 4, text: "O(n)", isCorrect: false },
        ],
      },
      {
        id: 3,
        text: "What is the average time complexity of Quick Sort?",
        status: "marked", // answered - marked
        answers: [
          { id: 1, text: "O(n²)", isCorrect: false },
          { id: 2, text: "O(n log n)", isCorrect: true },
          { id: 3, text: "O(log n)", isCorrect: false },
          { id: 4, text: "O(n)", isCorrect: false },
        ],
      },
      {
        id: 4,
        text: "What is the average time complexity of Quick Sort?",
        status: "none", // answered - marked
        answers: [
          { id: 1, text: "O(n²)", isCorrect: false },
          { id: 2, text: "O(n log n)", isCorrect: true },
          { id: 3, text: "O(log n)", isCorrect: false },
          { id: 4, text: "O(n)", isCorrect: false },
        ],
      },
    ],
  },
};
