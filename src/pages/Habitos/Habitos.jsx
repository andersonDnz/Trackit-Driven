import React, { useState, useEffect, useContext } from "react";

import {
  getHabits,
  createHabit
} from "../../services/api";

import { UserContext } from "../../contexts/UserContext";


import {
  Actions,
  Container,
  DaysContainer,
  Header,
  Form
} from "./styles";

const weekDays = [
  { name: "D", number: 0 },
  { name: "S", number: 1 },
  { name: "T", number: 2 },
  { name: "Q", number: 3 },
  { name: "Q", number: 4 },
  { name: "S", number: 5 },
  { name: "S", number: 6 },
];

const Habitos = () => {
  const { user } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.token) {
      getHabits(user.token)
        .then((res) => setHabits(res.data))
        .catch((err) => alert("Erro ao carregar hábitos"));
    }
  }, [user]);

  const toggleDay = (day) => {
    setNewHabit((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createHabit(newHabit, user.token)
      .then(() => {
        setNewHabit({ name: "", days: [] });
        setShowForm(false);
        return getHabits(user.token); // atualiza lista
      })
      .then((res) => setHabits(res.data))
      .catch(() => alert("Erro ao criar hábito"))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Header>
        <h2>Meus hábitos</h2>
        <button onClick={() => setShowForm(!showForm)}>+</button>
      </Header>

      {showForm && (
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nome do hábito"
            value={newHabit.name}
            onChange={(e) =>
              setNewHabit({ ...newHabit, name: e.target.value })
            }
            disabled={loading}
            required
          />
          <DaysContainer>
            {weekDays.map((d) => (
              <DayButton
                key={d.number}
                type="button"
                selected={newHabit.days.includes(d.number)}
                onClick={() => toggleDay(d.number)}
                disabled={loading}
              >
                {d.name}
              </DayButton>
            ))}
          </DaysContainer>
          <Actions>
            <span onClick={() => setShowForm(false)}>Cancelar</span>
            <button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </Actions>
        </Form>
      )}

      {habits.length === 0 ? (
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      ) : (
        habits.map((habit) => (
          <HabitCard key={habit.id}>
            <h3>{habit.name}</h3>
            <DaysContainer>
              {weekDays.map((d) => (
                <DayButton
                  key={d.number}
                  type="button"
                  selected={habit.days.includes(d.number)}
                  disabled
                >
                  {d.name}
                </DayButton>
              ))}
            </DaysContainer>
          </HabitCard>
        ))
      )}
    </Container>
  );
};

export default Habitos;
