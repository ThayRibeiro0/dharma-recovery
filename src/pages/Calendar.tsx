import { useState, useRef } from 'react';
import '../styles/calendar.css';

const Calendar = () => {
  const [message, setMessage] = useState('');
  const [celebrations, setCelebrations] = useState<{ [key: string]: string }>({
    '2025-06-01': 'John Doe',
    '2025-06-05': 'Jane Smith',
  });
  const [participants, setParticipants] = useState<{ [key: string]: number }>({
    'John Doe': 30,
    'Jane Smith': 15,
  });

  const recoveryNameRef = useRef<HTMLInputElement>(null);
  const recoveryDaysRef = useRef<HTMLInputElement>(null);
  const celebrationDateRef = useRef<HTMLInputElement>(null);
  const celebrationNameRef = useRef<HTMLInputElement>(null);

  const handleRecoverySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = recoveryNameRef.current?.value.trim();
    const days = recoveryDaysRef.current?.value;

    if (!name || !days) {
      setMessage('Please fill out all recovery fields.');
      return;
    }

    setParticipants((prev) => ({
      ...prev,
      [name]: Number(days),
    }));

    setMessage('Recovery time saved!');

    if (recoveryNameRef.current) recoveryNameRef.current.value = '';
    if (recoveryDaysRef.current) recoveryDaysRef.current.value = '';
  };

  const handleCelebrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = celebrationDateRef.current?.value;
    const name = celebrationNameRef.current?.value.trim();

    if (!date || !name) {
      setMessage('Please fill out all celebration fields.');
      return;
    }

    setCelebrations((prev) => ({
      ...prev,
      [date]: name,
    }));

    setMessage('Celebration saved!');

    if (celebrationDateRef.current) celebrationDateRef.current.value = '';
    if (celebrationNameRef.current) celebrationNameRef.current.value = '';
  };

  const handleDeleteCelebration = (date: string) => {
    const newCelebrations = { ...celebrations };
    delete newCelebrations[date];
    setCelebrations(newCelebrations);
  };

  const handleDeleteParticipant = (name: string) => {
    const newParticipants = { ...participants };
    delete newParticipants[name];
    setParticipants(newParticipants);
  };

  return (
    <section className="calendar-section">
      {message && <p><strong>{message}</strong></p>}

      <div className="form-container">
        <h2 className="save1">Record Recovery Time</h2>
        <form onSubmit={handleRecoverySubmit}>
          <label htmlFor="name">Participant name:</label><br />
          <input type="text" id="name" name="name" ref={recoveryNameRef} required /><br />
          <label htmlFor="days_clean">🙌 Days clean/recovered:</label><br />
          <input type="number" id="days_clean" name="days_clean" min="0" ref={recoveryDaysRef} required /><br /><br />
          <button type="submit">Save Recovery</button>
        </form>

        <h2 className="save1">Save Celebration Date</h2>
        <form onSubmit={handleCelebrationSubmit}>
          <label htmlFor="celebration_date">Date:</label><br />
          <input type="date" id="celebration_date" name="celebration_date" ref={celebrationDateRef} required /><br />
          <label htmlFor="celebration_description">🎉 Participant name:</label><br />
          <input type="text" id="celebration_description" name="celebration_description" ref={celebrationNameRef} required /><br /><br />
          <button type="submit">Save Celebration</button>
        </form>
      </div>

      <div className="celebrations-list">
        <h2 className='save1'>Saved Celebration Dates</h2>
        <ul>
          {Object.entries(celebrations).length > 0 ? (
            Object.entries(celebrations).map(([date, description]) => (
              <li key={date}>
                {date}: {description}
                <button
                  className="delete-button"
                  onClick={() => handleDeleteCelebration(date)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No celebration dates saved yet.</li>
          )}
        </ul>
      </div>

      <h2 className='save1'>Participants and recovery days</h2>
      <ul>
        {Object.entries(participants).length > 0 ? (
          Object.entries(participants).map(([name, days]) => (
            <li key={name}>
              {name}: {days} days
              <button
                className="delete-button"
                onClick={() => handleDeleteParticipant(name)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li>No participants registered yet.</li>
        )}
      </ul>
    </section>
  );
};

export default Calendar;
