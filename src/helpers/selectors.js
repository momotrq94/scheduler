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

export function getInterview(state, interview) {
  const outputObj = {};
  if (!interview) return null;
  outputObj["student"] = interview.student;
  const interviewerId = interview.interviewer;
  outputObj["interviewer"] = state.interviewers[interviewerId];
  return outputObj;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const filteredDay = state.days.filter((theDay) => theDay.name === day)[0];
  const outputArray = [];
  if (!filteredDay) {
    return outputArray;
  }
  if (filteredDay.interviewers.length === 0) {
    return outputArray;
  }
  for (const element of filteredDay.interviewers) {
    outputArray.push(state.interviewers[element]);
  }
  return outputArray;
}
