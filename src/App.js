import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import CreateQuestion from "./components/CreateQuestion/CreateQuestion";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Question />
        </Route>
        <Route exact path="/createquestion">
          <CreateQuestion />
        </Route>
        <Route path="/questions/:questionId">
          <QuestionDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
