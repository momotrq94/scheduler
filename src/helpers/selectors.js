export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const filteredDay = state.days.filter((theDay) => theDay.name === day)[0];
  const outputArray = [];
  if (!filteredDay) {
    return outputArray;
  }
  if (filteredDay.appointments.length === 0) {
    return outputArray;
  }
  for (const element of filteredDay.appointments) {
    outputArray.push(state.appointments[element]);
  }
  return outputArray;
}