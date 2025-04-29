import { Box, Card, darken, Dialog, Grid2 } from "@mui/material";
import type { Route } from "./+types/home";
import { pokedex } from "~/data/pokedex";
import { useState } from "react";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pokedex Polska" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {


  const [index_open,set_index_open] = useState(-1)
  function addi_data(index_p:number) {
    set_index_open(index_p)
    

  }
  function close_dialog() {
    set_index_open(-1)
  }

  return <Grid2 container>
    {
      pokedex.map((pokemon, index) => {
        return <Pokemon_plate pokemon={pokemon} index={index} close_dialog={close_dialog} index_open={index_open} addi_data={addi_data}>

        </Pokemon_plate>
      })

    }

  </Grid2> 
}

function Pokemon_plate({pokemon,index,close_dialog,index_open, addi_data}) {
  return <Grid2 container>
          <Card style = {{padding:16,margin:16,color:"rebeccapurple"}} onClick={() => addi_data(index)}>
            <Dialog  open={index_open === index} onClose={close_dialog}>
              name:{pokemon.name} <br/>
              height:{pokemon.height} <br/>
              weight:{pokemon.weight} <br/>
              base_experience:{pokemon.base_experience} <br/>

            </Dialog>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.back_default}/>

          </Card>
        </Grid2>
}