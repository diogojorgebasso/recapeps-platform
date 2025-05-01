import { ReactNode } from "react";

export default async function PublicLayout({ children }: { children: ReactNode }) {

  return (
    <>
      <main>{children} </main>
    </>
  );
}
