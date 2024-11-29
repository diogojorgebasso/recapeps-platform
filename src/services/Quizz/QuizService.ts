import { getQuizzesFromMock } from "./MockDataSource";

import { fetchQuizzesBySubject } from "@/api/getQuizzesFromFirebase";

export async function getQuizzes() {
  if (import.meta.env.MODE === "production") {
    return getQuizzesFromFirebase();
  } else {
    return getQuizzesFromMock();
  }
}
