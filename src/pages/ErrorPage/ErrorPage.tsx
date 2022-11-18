import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app`);
  };

  return (
    <>
      <div>Error page.</div>
      <div>Тут попадаются только отбитые)</div>
      <div>Можете себя поздравить</div>
      <button onClick={() => handleClick()}>Вернуться назад</button>
    </>
  );
};

export default ErrorPage;
