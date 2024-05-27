
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <>
      <header className="dark:bg-tremor-background-emphasis bg-blue-800 max-h-72 py-8 rounded-b-tremor-default">
        <h1 className="uppercase text-tremor-brand-inverted text-tremor-metric font-bold text-center ">
          Administrador de Gastos
        </h1>
      </header>
    
      <div className="flex flex-col items-center justify-center h-full">
          <Outlet />
        </div>
        {/* <ProgressBard/> */}
    </>
  );
};

export default AppLayout;
