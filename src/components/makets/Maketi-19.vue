<template>
    <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="chaobis_tipi">
                19.1. ჭაობის ტიპი
            </label>

            <select class="form-select" id="chaobis_tipi">
                <option value="1">1- დაბლობის</option>
                <option value="2">2- მაღლობის</option>
                <option value="3">3- გარდამავალი</option>
            </select>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="tke_mcenareulobis_tipi">
                19.2. ტყე-მცენარეულობის ტიპი
            </label>

            <select class="form-select" id="tke_mcenareulobis_tipi">
                <option value="1">1- ისლიანი</option>
                <option value="2">2- ღეღიანი</option>
                <option value="3">3- ისლ-ღეღიანი</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="torfiani_fenis_simkrive">
                19.3. ტორფიანი ფენის სიმკრივე
            </label>

            <input type="number" class="form-control" step="0.1" min="0.1" max="9.9" id="torfiani_fenis_simkrive">
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="merkniani_saxeoba">
                19.4. მერქნიანი სახეობა (თუ ჭაობი დაბურულია - ძირ.შიფრ.ცხრლ)
            </label>

            <select class="form-select" id="merkniani_saxeoba">
                <option value="1">1- Fagus</option>
                <option value="2">2- Carpinus</option>
                <option value="3">3- Quercus</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="daburulobis_procenti">
                19.5. დაბურულობის პროცენტი
            </label>

            <input type="number" class="form-control" step="1" min="5" max="100" id="daburulobis_procenti">
        </div>
    </div>
</template>

<script setup></script>