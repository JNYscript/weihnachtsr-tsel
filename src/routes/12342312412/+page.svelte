<script lang="ts">
  import { base } from "$app/paths";
  import {goto} from "$app/navigation";

  let loesung:string = $state('');
  let wrong:boolean = $state(false);

  function handle_button(){


      if (loesung.toLowerCase() === "3"){
          goto(base+"/567567456343453");
          console.log("richtig");
      }else{
          wrong = true;
      }



  }
</script>



<div class="flex flex-col justify-evenly items-center w-screen h-screen bg-green-700">
<h1 class="text-4xl text-red-600 font-extrabold">2. Rätsel</h1>
<div class="w-3/5 bg-white text-xl">🎄 Das Plätzchen-Rätsel 🎄

Du hast 3 Sorten Plätzchen: Vanillekipferl, Zimtsterne und Lebkuchen.
Du möchtest 2 Plätzchen zum Probieren auswählen.
Frage:

Wie viele verschiedene Kombinationen von 2 Plätzchen kannst du wählen?</div>
<input bind:value={loesung} placeholder="Antwort" />
<button class="bg-amber-500 p-4" onmousedown={() => handle_button()}>Abschicken</button>
        {#if wrong}
<div>Falsch!!</div>
        {/if}

</div>