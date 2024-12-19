<script>
  import { base } from "$app/paths";
  import {goto} from "$app/navigation";

  let loesung = $state('');

  function handle_button(){

      if (loesung === " Weihnachtsbaum" || loesung === " weihnachtsbaum"){}
      goto(base+"/1234")

  }
</script>



<div class="flex flex-col justify-evenly items-center w-screen h-screen bg-green-700">
<h1 class="text-4xl text-red-600 font-extrabold">2. Rätsel</h1>
<div class="w-3/5 bg-white text-xl">Ich komme in Stuben, wenn’s draußen wird kalt,
Bin grün wie ein Wald, doch oft nicht so alt.
Geschmückt werde ich mit Lichtern und Glanz,
Die Kinder umringen mich voller Tanz.

An meiner Spitze strahlt hell ein Stern,
Ich bringe den Zauber der Weihnacht gern.
Doch nur für die Tage, dann trag ich mein Leid,
Denn am Ende erwartet mich die Ewigkeit.

Was bin ich?</div>
<input bind:value={loesung} placeholder="enter your name" />
<button class="bg-amber-500 p-4">Abschicken</button>

</div>