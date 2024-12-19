<script lang="ts">
  import { base } from "$app/paths";
  import {goto} from "$app/navigation";

  let loesung:string = $state('');
  let wrong:boolean = $state(false);

  function handle_button(){

      console.log(loesung);
      if (loesung.toLowerCase() === "boxing day"){
          goto(base+"/");
          console.log("richtig");
      }else{
          wrong = true;
      }


  }
</script>



<div class="flex flex-col justify-evenly items-center w-screen h-screen bg-green-700">
<h1 class="text-4xl text-red-600 font-extrabold">3. Rätsel</h1>
<div class="w-3/5 bg-white text-xl">Wie heißt der Feiertag, der in Großbritannien und einigen anderen Ländern direkt nach Weihnachten, am 26. Dezember, gefeiert wird?</div>
<input bind:value={loesung} placeholder="Antwort" />
<button class="bg-amber-500 p-4" onmousedown={() => handle_button()}>Abschicken</button>
    {#if wrong}
<div>Falsch!!</div>
        {/if}
</div>