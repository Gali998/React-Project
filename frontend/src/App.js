import QuestionList from "./components/QuestionList";
import QuestionContextProvider from "./contexts/QuestionContext";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <QuestionContextProvider>
            <QuestionList />
          </QuestionContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
