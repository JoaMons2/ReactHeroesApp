import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
//import { DashboardRoutes } from './DashboardRoutes';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SerchScreen } from '../components/search/SearchScreen';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<MarvelScreen/>} />
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SerchScreen/>} />
            <Route path="login" element={<LoginScreen/>} />
        </Routes>
    </BrowserRouter>
  )
}
