<template>
  <div class="_refresh">
         
          <svg class="spinner" style="stroke: #4b8bf4;" slot="refresh-spinner" viewBox="0 0 64 64">
            <g stroke-width="7" stroke-linecap="round">
              <line x1="10" x2="10" y1="27.3836" y2="36.4931">
                <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
                <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1"
                         repeatCount="indefinite"></animate>
              </line>
              <line x1="24" x2="24" y1="18.6164" y2="45.3836">
                <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
                <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1"
                         repeatCount="indefinite"></animate>
              </line>
              <line x1="38" x2="38" y1="16.1233" y2="47.8767">
                <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
                <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8"
                         repeatCount="indefinite"></animate>
              </line>
              <line x1="52" x2="52" y1="16" y2="48">
                <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
                <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5"
                         repeatCount="indefinite"></animate>
              </line>
            </g>
          </svg>
        </div>
</template>

<script>
  export default {
    name: 'refresh',
    data() {
      return {}
    }
  }
</script>

<style>
  ._refresh {
    text-align: center;
  }
  .spinner {
    height: 40px;
    margin: 0 auto;
    text-align: center;
  }

</style>

