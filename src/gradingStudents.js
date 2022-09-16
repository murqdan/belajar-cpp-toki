export function gradingStudents(grades) {
  let difference = 0;
  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 10 > 5) {
        difference = grades[i] + 10 - ((grades[i] + 10) % 10);
        if (difference - grades[i] < 3) {
          result.push(difference);
        } else {
          result.push(grades[i]);
        }
      } else if (grades[i] % 10 < 5) {
        difference = grades[i] + 10 - ((grades[i] + 10) % 10) - 5;
        if (difference - grades[i] < 3) {
          result.push(difference);
        } else {
          result.push(grades[i]);
        }
      } else {
        result.push(grades[i]);
      }
    } else {
      result.push(grades[i]);
    }
  }

  return result;
}
