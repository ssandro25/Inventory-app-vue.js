<template>
    <div class="row row-cols-lg-4 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="raw_material_category">
                ნედლეულის კატეგორია
            </label>

            <select class="form-select" id="raw_material_category">
                <option selected></option>
                <option value="1">6 - ქერქი</option>
                <option value="2">10 - ფესვები</option>
                <option value="3">12 - ფოთლები</option>
                <option value="4">15 - კაკალი</option>
                <option value="5">18 - ნაყოფი</option>
                <option value="6">24 - ნეკერი</option>
                <option value="7">26 - ყვავილები</option>
                <option value="8">28 - კენკროვანი</option>

            </select>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="woody_species">
                მერქნიანი სახეობა
            </label>

            <select class="form-select" id="woody_species">
                <option selected></option>
                <option value="1">1 - ერთი</option>
                <option value="2">2 - ორი</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="abundance_year">
                ხნოვანება, წელი
            </label>

            <input type="number" class="form-control" id="abundance_year">
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="height">
                სიმაღლე, 0,1მ სიზუსტით
            </label>

            <input type="number" class="form-control" id="height">
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="measurement_units">
                ზომის ერთეული
            </label>

            <select class="form-select" id="measurement_units">
                <option selected></option>
                <option value="1">1 - კგ</option>
                <option value="2">2 - ტ</option>
                <option value="3">3 - მ3</option>

            </select>
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="yield_per">
                მოსავლიანობა 1 ჰა-ზე სიზუსტით 0,1-მდე
            </label>

            <input type="number" class="form-control" id="yield_per">
        </div>

        <div class="col mt-3">
            <label class="form-label text-truncate w-100" for="collection_accessible">
                მისადგომი შეგროვებისათვის
            </label>

            <select class="form-select" id="collection_accessible">
                <option selected></option>
                <option value="1">1 - მიწიდან</option>
                <option value="2">2 - მექ.მოწყობ. და ხმარ.</option>
                <option value="3">3 - სპეც.მოწყ.დახმარებ.</option>

            </select>
        </div>

    </div>
</template>

<script setup></script>