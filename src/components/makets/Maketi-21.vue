<template>
    <div class="row row-cols-lg-4 row-cols-md-3 row-cols-1 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="peizazhuri_tipebi">
                21.1. პეიზაჟური ტიპები
            </label>

            <select class="form-select" id="peizazhuri_tipebi">
                <option value="1">11- დახურული ჰორიზონტალური შეკრულობით</option>
                <option value="2">12- დახურული ვერტიკალურული შეკრულობით</option>
                <option value="3">21- ნახევრად ღია თანაბარი გავრცხელების</option>
                <option value="4">22- ნახევრად ღია ჯგუფური გავრცხელების</option>
                <option value="5">31- მეჩხერები</option>
                <option value="6">32- უბნები ერთეული ხეებით</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="estetikuri_shefaseba">
                21.2. ესთეყიკური შეფასება
            </label>

            <select class="form-select" id="estetikuri_shefaseba">
                <option value="1">1- 1 კლასი</option>
                <option value="2">2- 2 კლასი</option>
                <option value="3">3- 3 კლასი</option>
            </select>
        </div>

        <div class="col mt-md-0 mt-3">
            <label class="form-label text-truncate w-100" for="rekreaciuli_shefaseba">
                21.3. რეკრეაციული შეფასება
            </label>

            <select class="form-select" id="rekreaciuli_shefaseba">
                <option value="1">1- მაღალი</option>
                <option value="2">2- საშუალო</option>
                <option value="3">3- დაბალი</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="mdgradoba">
                21.4. მდგრადობა
            </label>

            <select class="form-select" id="mdgradoba">
                <option value="1">1- 1 კლასი</option>
                <option value="2">2- 2 კლასი</option>
                <option value="3">3- 3 კლასი</option>
                <option value="3">4- 4 კლასი</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="ubnis_gasavloba">
                21.5. უბნის გასავლობა
            </label>

            <select class="form-select" id="ubnis_gasavloba">
                <option value="1">4- კარგი</option>
                <option value="2">3- საშუალო</option>
                <option value="3">2- ცუდი</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="ubnis_atvaliereba">
                21.6. უბნის ათვალიერება
            </label>

            <select class="form-select" id="ubnis_atvaliereba">
                <option value="1">4- კარგი</option>
                <option value="2">3- საშუალო</option>
                <option value="3">2- ცუდი</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="degradaciis_stadia">
                21.7. დეგრადაციის სტადია
            </label>

            <select class="form-select" id="degradaciis_stadia">
                <option value="1">1- 1 სტადია</option>
                <option value="2">2- 2 სტადია</option>
                <option value="3">3- 3 სტადია</option>
                <option value="4">4- 4 სტადია</option>
                <option value="5">5- 5 სტადია</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="ark_formebi">
                21.8. მცირე არქიტექტორული ფორმები
            </label>

            <select class="form-select" id="ark_formebi">
                <option value="1">100- სტენდური აგიტაცია</option>
                <option value="2">200- დეკორ.სკულპტ</option>
                <option value="3">300- მცირე დროის დასას. ადგილები</option>
                <option value="4">500- კეთილ მოწყობილი ადგილები</option>
            </select>
        </div>
    </div>
</template>

<script setup></script>