import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importando as rotas e a rota específica
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

const App = () => {
  return (
    <BrowserRouter> 
    {/* Navegador que vai gerenciar as rotas da nossa aplicação */}
    <Header />
    <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/artists" element= {<Artists />} />
        <Route path="/artists/:id" element= {<Artist />} />
        <Route path="/songs" element= {<Songs />} />
        <Route path="/song/:id" element= {<Song />} />
    {/* Os dois pontos após as rotas significam que aquela rota será acessada e todas as informações que vierem depois dela serão um "id" e poderão ser acessadas */}
    </Routes>
  </BrowserRouter>
)};

export default App;