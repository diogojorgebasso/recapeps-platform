import { getQuizzesFromMock } from "./MockDataSource";

import { getQuizzesFromFirebase } from "@/api/getQuizzesFromFirebase";

export async function getQuizzes() {
  if (import.meta.env.MODE === "production") {
    return getQuizzesFromFirebase();
  } else {
    return getQuizzesFromMock();
  }
}
