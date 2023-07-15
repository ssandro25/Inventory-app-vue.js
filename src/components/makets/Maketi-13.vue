<template>
    <div class="row row-cols-lg-4 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="track_width">
                ტრასის სიგანე 0,1 მ სიზუსტით
            </label>

            <input type="number" class="form-control" id="track_width">
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="track_length">
                ტრასის სიგრძე
            </label>

            <input type="number" class="form-control" id="track_length">
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="condition">
                მდგომარეობა(შეივსოს აუცილებლად)
            </label>

            <select class="form-select" id="condition">
                <option selected></option>
                <option value="1">61 - სუფთა</option>
                <option value="2">62 - სუფთა მინერალიზირებული</option>
                <option value="3">3 - 63 - დაფარულია მერქნიანი სახეობებით</option>
                <option value="4">64 - დაფ.მინერ.</option>
                <option value="5">65 - ჩაგერხილი</option>
                <option value="6">66 - გავლა შეს.</option>
                <option value="7">67 - გაუვალი</option>
                <option value="8">68 - დამაკ.გზი.</option>
                <option value="9">69 - არადამაკ.გზისთვის</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="road_destination">
                გზის დანიშნულება
            </label>

            <select class="form-select" id="road_destination">
                <option selected></option>
                <option value="1">1 - სატყეო-სამ.</option>
                <option value="2">2 - ტყესაზიდი</option>
                <option value="3">3 - ხანძარსაწინააღმდეგო</option>
                <option value="4">4 - საერთო გამოყენების</option>
                <option value="5">5 - დამხმარე გზები</option>

            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="cover_type">
                საფარის ტიპი
            </label>

            <select class="form-select" id="cover_type">
                <option selected></option>
                <option value="1">2 - ასფალტი</option>
                <option value="2">3 - მოხრეშილი</option>
                <option value="3">5 - დაფარ. ადგ. მასალით</option>
                <option value="4">8 - მკვრივი გრუნტი</option>
                <option value="5">9 - გრუნტის</option>

            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="carriageway_width">
                გზის სავალი ნაწილის სიგანე 0,1 მ სიზუსტით
            </label>

            <input type="number" class="form-control" id="carriageway_width">
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="seasonal_action">
                სეზონური მოქმედება
            </label>

            <select class="form-select" id="seasonal_action">
                <option selected></option>
                <option value="1">2 - ზაფხ.</option>
                <option value="2">4 - ზამთ.</option>
                <option value="3">5 - მთელი წლის განმავ.</option>

            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="requires_measures">
                საჭიროებს ღონისძიებებს (სიგრძე, სიზუსტით 1კმ-მდე)
            </label>

            <input type="number" class="form-control" id="requires_measures">
        </div>
    </div>
</template>
<script setup>
</script>