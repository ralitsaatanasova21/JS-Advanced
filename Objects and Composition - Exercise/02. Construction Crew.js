function solve(worker) {
  if (worker.dizziness === true) {
    worker.levelOfHydrated += (0, 1 * worker.weight) * worker.experience;
    worker.dizziness = false;
  }
  return worker;
}
solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });
