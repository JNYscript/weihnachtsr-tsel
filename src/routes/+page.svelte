<script>
  import { base } from "$app/paths";
  import {goto} from "$app/navigation";

  function handle_button(){
      goto(base+"/1234")

  }
</script>



<div class="flex flex-col justify-evenly items-center w-screen h-screen bg-green-700">
<h1 class="text-4xl text-red-600 font-extrabold">löse alle Rätsel um an Ziel zu kommen</h1>

<button class="bg-amber-500 p-4" onmousedown={() => handle_button()}>START</button>

</div>