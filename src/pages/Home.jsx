import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Button, TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Send } from "@material-ui/icons";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Home = ({ logedIn, setLogedIn }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    { question: "", questionId: "" },
  ]);
  const [error, setError] = useState(false);

  const checkLogin = () => {
    if (logedIn === false) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleChangeInput = (event, index) => {
    const values = [...questions];
    values[index][event.target.name] = event.target.value;
    values[index].questionId = index + 1;
    setQuestions(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(questions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: "", questionId: "" }]);
  };
  const handleRemoveQuestion = (index) => {
    const values = [...questions];
    if (
      values[0].question === "" ||
      values[0].question === values[index].question
    ) {
      console.log("empty");
      console.log(values);
      alert("Can not delete first question! ⚠️");
    } else {
      values.splice(index, 1);
    }
    setQuestions(values);
  };

  useEffect(() => {
    questions.map((question) =>
      question.question === "" ? setError(true) : setError(false)
    );
  }, [questions]);

  return (
    <div className="h-screen my-font bg-customs">
      <Container>
        <div className="py-[20px] text-center ">
          <h1 className=" text-xl lg:text-4xl text-white font-black ">
            <span className="underline decoration-wavy underline-offset-4 decoration-red-600">Create</span>{" "}
            <span className="underline decoration-wavy underline-offset-4 decoration-blue-600">Your</span>{" "}
            <span className="underline decoration-wavy underline-offset-4 decoration-green-800">Chatbot</span>{" "}
            <span className="underline decoration-wavy underline-offset-4 decoration-purple-500">Questions</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="h-[calc(100vh-150px)] pr-[10px] lg:pr-[30px] overflow-y-auto mb-[10px] lg:mb-[20px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-transparent">
            {questions.map((question, index) => (
              <div key={index}>
                <div className="my-[10px] lg:my-[30px] w-full flex shadow-lg rounded-lg border border-gray-100 p-[10px] lg:p-[20px] glasss">
                  <TextField
                    name="question"
                    label="Enter Your Question"
                    variant="outlined"
                    required
                    onChange={(event) => handleChangeInput(event, index)}
                    value={question.question}
                    className="w-full "
                  />
                  <IconButton onClick={() => handleRemoveQuestion(index)}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={() => handleAddQuestion()}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            ))}
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Please fill the required <strong>detail</strong>
              </Alert>
            )}
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Send />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Home;
