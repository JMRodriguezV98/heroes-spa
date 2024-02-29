import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPages } from "../auth"


export const AppRouter = () => {
  return (
    <>
      <Routes>

          <Route path="/*" element={ <HeroesRoutes /> } />

          <Route path="login" element={ <LoginPages /> } />
      </Routes>
    </>
  )
}
