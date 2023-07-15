<template>
    <div class="row row-cols-lg-auto row-cols-md-3 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="river">მდინარე</label>

            <select class="form-select" id="river">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="well">წყარო</label>

            <select class="form-select" id="well">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="river_width">მდინარის სიგანე</label>

            <input type="number" class="form-control" id="river_width"/>
        </div>
    </div>
</template>

<script setup></script>