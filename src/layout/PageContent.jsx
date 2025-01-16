import { Outlet } from "react-router-dom";

export default function PageContent() {
  return (
    <main className="flex flex-col ">
      <Outlet />
    </main>
  );
}