import type { Route } from "./+types/home";
import {Box, Card, Dialog, Grid2 } from "@mui/material";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  const [pokedex, setPokedex] = useState ([])
  if (pokedex.length==0){
    fetch("https://kwasow.pl/static/pokemony.json", {mode: "no-cors"})
    .then (res => res.json())
    .then (pokemony => setPokedex (pokemony))
  }
  
  return <Grid2 container>
    {
    pokedex.map((pokemon, index) => {
      const [open, setOpen] = useState(false)
      function klik() {
        setOpen(true)
      }
      return <Grid2 onClick={()=>klik()}>
        <Dialog open={open} onClose={()=>setOpen(false)}>
          <Box style={{padding: "1em", margin: "1em"}}>
            <p><b>{pokemon.id}</b></p>
            <img src={pokemon.sprites.front_default}/>
            <p><b>Imię: </b>{pokemon.name}</p>
            <p><b>Doświadczenie: </b>{pokemon.base_experience}</p>
            <p><b>Wzrost: </b>{pokemon.height}</p>
            <p><b>Waga: </b>{pokemon.weight}</p>
          </Box>
        </Dialog>

        <Card elevation={6} style={{padding: "1em", margin: "1em"}}>
          <p><b>{pokemon.id}</b></p>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default}/>

        </Card>
      </Grid2>
    })
    }
  </Grid2>
}
