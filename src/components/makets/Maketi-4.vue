<template>
    <div class="row row-cols-lg-auto row-cols-md-3 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="suffocation_general">4.1 ჩახერგილობა
                საერთო</label>

            <input type="number" class="form-control" id="suffocation_general"/>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="suffocation_liquid">4.2 ჩახერგილობა
                ლიკვიდი</label>

            <input type="number" class="form-control" id="suffocation_liquid" disabled/>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="pressed">4.3 ძველი ზეხმელის ჩახერგილობა</label>

            <input type="number" class="form-control" id="pressed"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>