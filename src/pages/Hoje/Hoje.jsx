import React, { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import {
  getTodayHabits,
  checkHabit,
  uncheckHabit,
} from "../../services/api";

import { UserContext } from "../../contexts/UserContext";


import {
  CheckButton,
  Container,
  HabitCard,
  HabitsList,
  Header
} from "./styles";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


dayjs.locale("pt-br");

const Hoje = () => {
  const { user } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  const today = dayjs().format("dddd, DD/MM");

  const fetchHabits = () => {
    getTodayHabits(user.token)
      .then((res) => setHabits(res.data))
      .catch(() => alert("Erro ao carregar hábitos do dia"));
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const toggleHabit = (habit) => {
    setLoading(true);
    const request = habit.done
      ? uncheckHabit(habit.id, user.token)
      : checkHabit(habit.id, user.token);

    request
      .then(() => fetchHabits())
      .catch(() => alert("Erro ao atualizar hábito"))
      .finally(() => setLoading(false));
  };

  const doneCount = habits.filter((h) => h.done).length;
  const progress = habits.length
    ? Math.round((doneCount / habits.length) * 100)
    : 0;

  return (
    <Container>
      <Navbar />
      <Header>
        <h2>{today}</h2>
        <p>
          {doneCount > 0 ? (
            <span>{progress}% dos hábitos concluídos</span>
          ) : (
            <span className="gray">Nenhum hábito concluído ainda</span>
          )}
        </p>
      </Header>

      <HabitsList>
        {habits.map((habit) => (
          <HabitCard key={habit.id}>
            <div>
              <h3>{habit.name}</h3>
              <p>
                Sequência atual:{" "}
                <span className={habit.done ? "green" : ""}>
                  {habit.currentSequence} dias
                </span>
              </p>
              <p>
                Seu recorde:{" "}
                <span
                  className={
                    habit.currentSequence === habit.highestSequence &&
                      habit.highestSequence !== 0
                      ? "green"
                      : ""
                  }
                >
                  {habit.highestSequence} dias
                </span>
              </p>
            </div>
            <CheckButton
              done={habit.done}
              disabled={loading}
              onClick={() => toggleHabit(habit)}
            >
              ✓
            </CheckButton>
          </HabitCard>
        ))}
      </HabitsList>
      <Footer />
    </Container>
  );
};

export default Hoje;
