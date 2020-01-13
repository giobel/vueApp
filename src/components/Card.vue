<template>
<div class="col-auto mb-3">
    <div class="card bg-light mb-3" style="width: 10rem">
		<h2 class="card-title">{{title.count}}</h2>
		<h6 class="card-subtitle mb-2 text-muted">{{title.titolo}}</h6>
		<div class="card-body">
			<p class="card-text">{{title.count}}</p>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: Object
  },
  created: function () {
       // eslint-disable-next-line no-console
       //console.log(this.title);
    },
}
</script>