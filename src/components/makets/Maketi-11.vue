<template>
    <div class="row row-cols-lg-6 row-cols-md-3 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="cultivation_year">
                გაშენების წელი
            </label>

            <input type="number" class="form-control" id="cultivation_year">
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="soil_treatment_method">
                ნიადაგის დამუშავების მეთოდი
            </label>

            <select class="form-select" id="soil_treatment_method">
                <option selected></option>
                <option value="1">70 - პირწ.დამუშ</option>
                <option value="2">71 - ზოლ.დამუშ.</option>
                <option value="3">72 - ბაქნ.დამუშ.</option>
                <option value="4">73 - ბაქნები მომზადება მექანიზციის გამოყ.</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="planting_methods">
                დარგვის მეთოდები
            </label>

            <select class="form-select" id="planting_methods">
                <option selected></option>
                <option value="1">1 - მექანიზაც.</option>
                <option value="2">2 - ხელით</option>
                <option value="3">3 - თესვა მექ.</option>
                <option value="4">4 - თესვა ხელ.</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="rows_distance">
                რიგებს შორის მანძილი დაშორება 0,1 მ სიზუსტით
            </label>

            <input type="number" class="form-control" id="rows_distance">
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="planting_areas_number">
                სარგავი ადგილის რაოდენობა 1000ც/ჰა -ზე 0.1 მ სიზუსტით
            </label>

            <input type="number" class="form-control" id="planting_areas_number">
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="tc_condition">
                ტ/კ მდგომარეობა
            </label>

            <select class="form-select" id="tc_condition">
                <option selected></option>
                <option value="1">1- დაღუპული</option>
                <option value="2">2 - არადამაკმაყოფილებელი</option>
                <option value="3">3 - დამაკმაყოფილებელი</option>
                <option value="4">4 - კარგი</option>

            </select>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>