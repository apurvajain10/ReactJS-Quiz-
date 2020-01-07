const qBank = [
  {
    question:
      "What function allows you to render React content in an HTML page?",
    answer: ["ReactDOM.start()","React.render()","ReactDOM.render()","React.mount()"],
    correct: "ReactDOM.render()",
    questionId: "099099"
  },
  {
    question:
      "What is ReactJS?",
    answer: ["Server-side Framework", "User-interface framework", " Both", "None"],
    correct: "Both",
    questionId: "183452"
  },
  {
    question:
      " How can you access the state of a component from inside of a member function?",
    answer: ["this.getState()", "this.prototype.stateValue", " this.state", "this.values"],
    correct: "this.values",
    questionId: "267908"
  },
  {
    question: " Props are __________ into other components",
    answer: [
      " Injected",
      "Methods",
      "Both A and B",
      "All of these"
    ],
    correct: "Methods",
    questionId: "333247"
  },
  {
    question: "Which of the following API is a MUST for every ReactJS component?",
    answer: [" getInitialState", " render", "renderComponent", "Evans"],
    correct: " renderComponent",
    questionId: "496293"
  },
  {
    question:
      "JSX is typesafe?",
    answer: [
      "true",
      "false"],
    correct: "true",
    questionId: "588909"
  },
  {
    question:
      'What are Arbitrary inputs of components called?',
    answer: ["Keys", "Props", "Elements", "Ref"],
    correct: "Props",
    questionId: "648452"
  },
  {
    question: "What  can be done while more than one element needs to be returned from a component?",
    answer: ["Abstraction", "Packing", "Insulation", "Wrapping"],
    correct: "Packing",
    questionId: "786649"
  },
  {
    question:
      "Which of the following needs to be updated to achieve dynamic UI updates?",
    answer: [
      "State",
      "Props"],
    correct: "State",
    questionId: "98390"
  },
  {
    question: "Lifecycle methods are mainly used ___________",
    answer: ["To keep track of event history", "to enhance components", "freeup resources", "none of the options"],
    correct: "freeup resources",
    questionId: "1071006"
  },
  {
    question: "In JSX most of the errors can be caught during _________",
    answer: ["Interpretation", "Execution", "Compilation", "Build"],
    correct: "Compilation",
    questionId: "1174154"
  },
  {
    question: "JSX is faster because it performs ____________ while compiling code to JavaScript",
    answer: ["Modification", "Compression", "Optimization", "Encryption"],
    correct: "Optimization",
    questionId: "1226535"
  },
  {
    question: "What is the smallest building block of ReactJS?",
    answer: ["none of the options", " props", "elements", "components"],
    correct: "elements",
    questionId: "1310938"
  },
  {
    question: "React considers everything as _______.",
    answer: ["User interface", "elements", "components", "Objects"],
    correct: "components",
    questionId: "1436873"
  },
  {
    question: "React keeps track of what items have changed, been added, or been removed from a list using ________.",
    answer: ["state", "props", "keys", "ref"],
    correct: "keys",
    questionId: "1515110"
  },
  {
    question: " React supports all the syntax of ________________",
    answer: ["ES6", "Redux", "None of options", "Native Java"],
    correct: "19",
    questionId: "1642728"
  },
  {
    question:
      "How can we prevent default behavior in React?",
    answer: ["None of the options", "using revokeDefault()", "Using preventDefault()", "using avoidDefault()"],
    correct: "Using preventDefault()",
    questionId: "1747256"
  },
  {
    question:
      "Invoked once, only on the client, after rendering occurs.",
    answer: ["componentWillUnmount", "shouldComponentUpdate", "componentWillMount", "componentDidMount"],
    correct: "componentDidMount",
    questionId: "1822532"
  },
  {
    question: "What is Babel?",
    answer: ["Transpilr", "Compiler", "Interpreter", "Both Compiler and Transpilar"],
    correct: "Both Compiler and Transpilar",
    questionId: "1226535"
  },
  {
    question: "n React what is used to pass data to a component from outside?",
    answer: ["setState", "render with arguments", "props", "Prop Types"],
    correct: "props",
    questionId: "1226535"
  },
  {
    question: "What is ReactJS?",
    answer: ["Server side Framework", "User-interface framework", "A Library for building interation interfaces", "none"],
    correct: "A Library for building interation interfaces",
    questionId: "1226535"
  }

];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));