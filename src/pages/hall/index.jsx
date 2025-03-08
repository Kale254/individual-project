import { useAddDays } from "../../hooks/useAddDays"
import { useState, useCallback } from "react"
import { useGetDays } from "../../hooks/useGetDays"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './styles.css';

export const Hall = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const {addDays} = useAddDays()
    const {days} = useGetDays()

    const onSubmit = (e) => {
        e.preventDefault()
        if (selectedDates.length === 2) {
            addDays({
                daysStart: selectedDates[0].toISOString().split('T')[0],
                daysEnd: selectedDates[1].toISOString().split('T')[0]
            })
            setSelectedDates([]);
        }
    }


    const tileClassName = useCallback(({ date, view }) => {
        if (view === 'month') {
            const isDisabled = days.some(({ daysStart, daysEnd }) => {
                const start = new Date(daysStart);
                const end = new Date(daysEnd);
                return date >= start && date <= end;
            });

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const isSelected = selectedDates.length === 2 && 
                date >= selectedDates[0] && 
                date <= selectedDates[1];

            if (isSelected) {
                return 'selected-date';
            } else if (date < today) {
                return 'past-date';
            } else if (isDisabled) {
                return 'disabled-date';
            } else {
                return 'available-date';
            }
        }
    }, [days, selectedDates]);

    const handleDateChange = (value) => {
        if (Array.isArray(value)) {
          const [start, end] = value;
          if (end) {
            // Both start and end dates are selected
            const isRangeValid = !days.some(({ daysStart, daysEnd }) => {
              const rangeStart = new Date(daysStart);
              const rangeEnd = new Date(daysEnd);
              // Adjusted condition to allow ranges to be adjacent
              return (start < rangeEnd && end > rangeStart);
            });
      
            if (isRangeValid) {
              setSelectedDates(value);
            } else {
              // Display a user-friendly error message
              alert("Selected range overlaps with existing dates");
              setSelectedDates([start]); // Keep only the start date
            }
          } else {
            // Only start date is selected
            setSelectedDates([start]);
          }
        } else {
          // Single date selection (shouldn't happen with selectRange={true})
          setSelectedDates([value]);
        }
      }
      

      const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
          return days.some(({ daysStart, daysEnd }) => {
            const start = new Date(daysStart);
            const end = new Date(daysEnd);
            return date >= start && date <= end;
          });
        }
      };

    return ( 
        <div>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Calendar 
                onChange={handleDateChange} 
                value={selectedDates} 
                selectRange={true}
                tileClassName={tileClassName}
                tileDisabled={tileDisabled}
                />

                <form onSubmit={onSubmit} className="date-range-form">
                <div>
                    <label>Start Date: </label>
                    <span>{selectedDates[0] ? selectedDates[0].toDateString() : 'Not selected'}</span>
                </div>
                <div>
                    <label>End Date: </label>
                    <span>{selectedDates[1] ? selectedDates[1].toDateString() : 'Not selected'}</span>
                </div>
                <button type="submit" disabled={selectedDates.length !== 2}>Add days</button>
                </form>

            </div>
        </div>
    )
}
