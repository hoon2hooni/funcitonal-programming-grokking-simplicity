function payrollCalc(employees) {
  return payrollChecks;
}

function payrollCalcSafe(employees) {
  const copyEmployees = deepCopy(employees);
  payrollCalc(copyEmployees);
  return copyEmployees;
}

const payrollCalcSafe = makeSafe(payrollCalc)