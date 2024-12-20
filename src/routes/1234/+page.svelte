<script lang="ts">
  import { base } from "$app/paths";
  import {goto} from "$app/navigation";

  let loesung:string = $state('');
  let wrong:boolean = $state(false);

  function handle_button(){


      if (loesung.toLowerCase() === "weihnachtsbaum" || loesung.toLowerCase() === "tannenbaum"){
          goto(base+"/12342312412");
          console.log("richtig");
      }else{
          wrong = true;
      }



  }
</script>



<div class="flex flex-col justify-evenly items-center w-screen h-screen bg-green-700">
<h1 class="text-4xl text-red-600 font-extrabold">1. Rätsel</h1>
<div class="w-3/5 bg-white text-xl">Ich komme in Stuben, wenn’s draußen wird kalt,
Bin grün wie ein Wald, doch oft nicht so alt.
Geschmückt werde ich mit Lichtern und Glanz,
Die Kinder umringen mich voller Tanz.

An meiner Spitze strahlt hell ein Stern,
Ich bringe den Zauber der Weihnacht gern.
Doch nur für die Tage, dann trag ich mein Leid,
Denn am Ende erwartet mich die Ewigkeit.

Was bin ich?</div>
<input bind:value={loesung} placeholder="Antwort" />
<button class="bg-amber-500 p-4" onmousedown={() => handle_button()}>Abschicken</button>
        {#if wrong}
<div>Falsch!!</div>
        {/if}

</div>