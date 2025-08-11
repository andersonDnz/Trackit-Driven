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
  Form,
  DayButton,
  HabitCard,
  EmptyMessage
} from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"




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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.token) {
      setError("User not authenticated");
      return;
    }

    const fetchHabits = async () => {
      try {
        const res = await getHabits(user.token);
        setHabits(res.data);
      } catch (err) {
        setError("Error loading habits");
        console.error("Error loading habits:", err);
      }
    };

    fetchHabits();
  }, [user]);

  const toggleDay = (day) => {
    setNewHabit((prev) => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newHabit.name.trim()) {
      setError("Habit name cannot be empty");
      return;
    }

    if (newHabit.days.length === 0) {
      setError("Please select at least one day");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createHabit(newHabit, user.token);
      setNewHabit({ name: "", days: [] });
      setShowForm(false);

      const res = await getHabits(user.token);
      setHabits(res.data);
    } catch (err) {
      setError("Error creating habit");
      console.error("Error creating habit:", err);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <Container>
        <Navbar userImage={user?.image} />
        <Header>
          <h2>Meus hábitos</h2>
        </Header>
        <p>Error: {error}</p>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Navbar userImage={user?.image} />
      <Header>
        <h2>Meus hábitos</h2>
        <button onClick={() => setShowForm(!showForm)} disabled={loading}>
          +
        </button>
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Actions>
            <span onClick={() => {
              setShowForm(false);
              setError(null);
            }} disabled={loading}>
              Cancelar
            </span>
            <button type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </Actions>
        </Form>
      )}

      {habits.length === 0 ? (

        <EmptyMessage>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </EmptyMessage>
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
      <Footer />
    </Container >
  );
};

export default Habitos;