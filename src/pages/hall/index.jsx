import { useAddDays } from "../../hooks/useAddDays";
import { useState, useCallback } from "react";
import { useGetDays } from "../../hooks/useGetDays";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

export const Hall = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const { addDays } = useAddDays();
  const { days } = useGetDays();

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedDates.length === 2) {
      addDays({
        daysStart: selectedDates[0].toISOString().split("T")[0],
        daysEnd: selectedDates[1].toISOString().split("T")[0],
      });
      setSelectedDates([]);
      setFeedback({ type: "success", message: "Hall reservation added!" });
    }
  };

  const tileClassName = useCallback(
    ({ date, view }) => {
      if (view === "month") {
        const isDisabled = days.some(({ daysStart, daysEnd }) => {
          const start = new Date(daysStart);
          const end = new Date(daysEnd);
          return date >= start && date <= end;
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const isSelected =
          selectedDates.length === 2 &&
          date >= selectedDates[0] &&
          date <= selectedDates[1];

        if (isSelected) return "selected-date";
        if (date < today) return "past-date";
        if (isDisabled) return "disabled-date";
        return "available-date";
      }
    },
    [days, selectedDates]
  );

  const handleDateChange = (value) => {
    setFeedback(null);
    if (Array.isArray(value)) {
      const [start, end] = value;
      if (end) {
        const isRangeValid = !days.some(({ daysStart, daysEnd }) => {
          const rangeStart = new Date(daysStart);
          const rangeEnd = new Date(daysEnd);
          return start < rangeEnd && end > rangeStart;
        });

        if (isRangeValid) {
          setSelectedDates(value);
        } else {
          setFeedback({
            type: "error",
            message: "Selected range overlaps with existing reservations.",
          });
          setSelectedDates([start]);
        }
      } else {
        setSelectedDates([start]);
      }
    } else {
      setSelectedDates([value]);
    }
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      return days.some(({ daysStart, daysEnd }) => {
        const start = new Date(daysStart);
        const end = new Date(daysEnd);
        return date >= start && date <= end;
      });
    }
  };

  return (
    <div className="reservation-container">
      <h1 className="page-title">Reserve the Great Hall</h1>
      <div className="calendar-wrapper">
        <Calendar
          onChange={handleDateChange}
          value={selectedDates}
          selectRange={true}
          tileClassName={tileClassName}
          tileDisabled={tileDisabled}
          minDetail="month"
          prev2Label={null}
          next2Label={null}
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="date-range-form"
        aria-label="Hall date range reservation form"
      >
        <div className="date-row">
          <label htmlFor="start-date">Start Date:</label>
          <span id="start-date">
            {selectedDates[0]
              ? selectedDates[0].toLocaleDateString()
              : <em>Not selected</em>}
          </span>
        </div>
        <div className="date-row">
          <label htmlFor="end-date">End Date:</label>
          <span id="end-date">
            {selectedDates[1]
              ? selectedDates[1].toLocaleDateString()
              : <em>Not selected</em>}
          </span>
        </div>
        <button
          type="submit"
          disabled={selectedDates.length !== 2}
          aria-disabled={selectedDates.length !== 2}
        >
          Add Reservation
        </button>
      </form>

      {feedback && (
        <div className={`feedback-message ${feedback.type}`}>
          {feedback.message}
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <p>Contact Us</p>
          <p>
            <a href="https://x.com/wetjenkale/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            |{" "}
            <a href="https://instagram.com/2kale3/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="mailto:kdwetjen@icloud.com">kdwetjen@icloud.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
