<template>
    <div class="row row-cols-md-2 cols-1 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="niadagis_jgufi">
                24.1. ნიადაგის ჯგუფი
            </label>

            <select class="form-select" id="niadagis_jgufi">
                <option value="0"></option>
                <option value="1">იხ.შიფ.ცხრ.კონკრ.ობიექტ.ადგენს პროექტის ავტორი</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="niadagis_meqanikuri_shemadgenloba">
                24.2. ნიადაგის მექანიკური შემადგენლობა
            </label>

            <select class="form-select" id="niadagis_meqanikuri_shemadgenloba">
                <option value="0"></option>
                <option value="1">1 - ქვიშნარი</option>
                <option value="2">2 - თიხნარი</option>
                <option value="3">3 - მსუბუქ.თიხნ.</option>
                <option value="4">4 - საშ.თიხნარი</option>
                <option value="5">5 - ძლიერი თიხნ</option>
                <option value="6">6 - თიხა</option>
            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="sinestis_xarisxi">
                24.3. სინესტის ხარისხი
            </label>

            <select class="form-select" id="sinestis_xarisxi">
                <option value="0"></option>
                <option value="1">1 - ძლიერ მშრალი</option>
                <option value="2">2 - მშრალი</option>
                <option value="3">3 - გრილი</option>
                <option value="4">4 - ტენიანი</option>
                <option value="5">5 - ჭარბტენიანი</option>
            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="dakordebis_xarisxi">
                24.4. დაკორდების ხარისხი
            </label>

            <select class="form-select" id="dakordebis_xarisxi">
                <option value="0"></option>
                <option value="1">1 - სუსტი</option>
                <option value="2">2 - საშუალო</option>
                <option value="3">3 - ძლიერი</option>
                <option value="4">4 - დაკორდება არ არის</option>
            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="niadagis_simkvrive">
                24.5. ნიადაგის სიმკვრივე
            </label>

            <select class="form-select" id="niadagis_simkvrive">
                <option value="0"></option>
                <option value="1">1 - სუსტი</option>
                <option value="2">2 - საშუალო</option>
                <option value="3">3 - ძლიერი</option>
            </select>
        </div>

        <div class="col mt-3">

            <label class="form-label text-truncate w-100" for="dedaqanis_dafarulobis_proc">
                24.6. დედაქანის დაფარულობის % (ეროზირებული და ჩამორეცხილი ნიადაგის აღწერის დროს 5-100%)
            </label>

            <input type="number" class="form-control" step="1" min="5" max="100" id="dedaqanis_dafarulobis_proc">
        </div>
    </div>
</template>

<script setup></script>