<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox :currentQuestion="questions[index]" :next="next" :increment="increment" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          question: "Which planet in our solar system is closest to the sun?",
          choices: ["Yellow", "Blue", "White"],
          answer: "Mercury"
        },
        {
          id: 2,
          question:
            "Which actor played Richard III in the 1995 British film drama of the same title?",
          choices: ["McKellen", "Partrick Stewart", "Elijah Wood"],
          answer: "Ian McKellen"
        },
        {
          id: 3,
          question:
            "Which Marvel superhero, also known as Steve Rogers, made his first appearance in March 1941?",
          choices: ["Liverpool", "Southend United", "Wolverhampton"],
          answer: "Captain America"
        },
        {
          id: 4,
          question: "Which English football club play at Roots Hall?",
          choices: ["Liverpool", "Southend United", "Wolverhampton"],
          answer: "Southend United"
        },
        {
          id: 5,
          question: "Apple?",
          choices: ["Yellow", "Blue", "White"],
          answer: "Red"
        },
        {
          id: 6,
          question: "Bird?",
          choices: ["cow", "Dog", "Elephant"],
          answer: "Peacock"
        },
        {
          id: 7,
          question: "What is the HTTP Code 200 Indicates?",
          choices: ["Error", "Completed", "Warning"],
          answer: "Success"
        },
        {
          id: 8,
          question: "What is the HTTP Code Related to Page Not Found?",
          choices: ["104", "403", "402"],
          answer: "404"
        },
        {
          id: 9,
          question: "What is the HTTP Code Related to Internal Server Error?",
          choices: ["504", "501", "403"],
          answer: "500"
        },
        {
          id: 10,
          question: "What is WSDL Stands for? ",
          choices: [
            "Webservice Document Language",
            "Webservice Dictionary Language",
            "Webservice Definition Language"
          ],
          answer: " Webservice Description Language"
        }
      ],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
    // console.log(questions)
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    }
  }

  // mounted: function() {
  //   fetch("./data.json").then(response => {
  //     console.log(response.json());
  //   });
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
