<template>
    <div class="row row-cols-lg-6 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="dominant_species">3.1 გაბატონებული
                სახეობა</label>

            <select class="form-select" id="dominant_species">
                <option selected>გაბატონებული სახეობა</option>
                <option value="1">1 - ნაძვი</option>
                <option value="2">2 - სოჭი</option>
                <option value="3">3 - ფიჭვი</option>
                <option value="4">4 - წიფელი</option>
                <option value="5">5 - წიფელი (ა)</option>
                <option value="6">6 - რცხილა</option>
                <option value="7">7 - რცხილა (ა)</option>
                <option value="8">8 - მუხა</option>
                <option value="9">9 - მუხა (ა)</option>
                <option value="10">10 - იფანი</option>
                <option value="11">11 - ნეკერჩხალი</option>
                <option value="12">12 - ნეკერჩხალი (ა)</option>
                <option value="13">13 - წაბლი</option>
                <option value="14">14 - წაბლი (ა)</option>
                <option value="15">15 - აკაცია</option>
                <option value="16">16 - აკაცია (ა)</option>
                <option value="17">17 - ჯაგრცხილა</option>
                <option value="18">18 - ვერხვი</option>
                <option value="19">19 - თელა</option>
                <option value="20">20 - თხმელა</option>
                <option value="21">21 - თხმელა (ა)</option>
                <option value="22">22 - ცაცხვი</option>
                <option value="23">23 - კაკალის ხე</option>
                <option value="24">24 - პანტა</option>
                <option value="25">25 - მაჟალო</option>
                <option value="26">26 - კრიპტომერია</option>
                <option value="27">27 - ევკალიპტი</option>
                <option value="28">28 - ტიტას ხე</option>
                <option value="29">29 - აილანთუსი</option>
                <option value="30">30 - არყი</option>
                <option value="31">31 - ტირიფი</option>
                <option value="32">32 - თხილი</option>
                <option value="33">33 - წყავი</option>
                <option value="34">34 - შქერი, ჭყორი</option>
                <option value="35">35 - ბამბუკი</option>

            </select>
        </div>

        <div class="col">
            <label class="form-label text-truncate w-100" for="credit_rating">3.2 ბონიტეტი</label>

            <select class="form-select" id="credit_rating">
                <option selected>ბონიტეტი</option>
                <option value="1">I</option>
                <option value="2">Iა</option>
                <option value="3">II</option>
                <option value="4">III</option>
                <option value="5">IV</option>
                <option value="6">V</option>
                <option value="7">Vა</option>


            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="credit_type">3.3 ბონიტეტის
                სახეობა</label>

            <select class="form-select" id="credit_type">
                <option selected>გასარკვევია რას ნიშნავს</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="forest_type">3.4 ტყის ტიპი</label>

            <select class="form-select" id="forest_type">
                <option selected>ტყის ტიპი</option>
                <option value="1">1 - წივ</option>
                <option value="2">2 - ნბხ</option>
                <option value="3">3 - დეკ</option>
                <option value="4">4 - მოც</option>
                <option value="5">5 - მკდ</option>
                <option value="6">6 - გვმ</option>
                <option value="7">7 - მაყ</option>
                <option value="8">8 - იელ</option>
                <option value="9">9 - ჭყ</option>
                <option value="10">10 - შქ</option>
                <option value="11">11 - წყ</option>
                <option value="12">12 - სუბ</option>
                <option value="13">13 - თხ</option>
                <option value="14">14 - ქრბ</option>
                <option value="15">15 - ისლ</option>
                <option value="16">16 - მლზ</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="location_type">3.5 ადგილსამყოფელის
                ტიპი</label>

            <select class="form-select" id="location_type">
                <option selected>ადგილსამყოფ.ტიპი</option>
                <option value="1">A0 კლდოვანი, ძალიან მშრალი</option>
                <option value="2">A1 კლდოვანი, მშრალი</option>
                <option value="3">A2 კლდოვანი, გრილი</option>
                <option value="4">A3 კლდოვანი, ნოტიო</option>
                <option value="5">A4 კლდოვანი, ჭარბტენიანი</option>
                <option value="6">A5 კლდოვანი, სველი</option>
                <option value="7">B0 თხელი, ძალიან მშრალი</option>
                <option value="8">B1 თხელი, მშრალი</option>
                <option value="9">B2 თხელი, გრილი</option>
                <option value="10">B3 თხელი, ნოტიო</option>
                <option value="11">B4 თხელი, ჭარბტენიანი</option>
                <option value="12">B5 თხელი, სველი</option>
                <option value="13">C0 საშ.სიღრმის, ძალიან მშრალი</option>
                <option value="14">C1 საშ.სიღრმის, მშრალი</option>
                <option value="15">C2 საშ.სიღრმის, გრილი</option>
                <option value="16">C3 საშ.სიღრმის, ნოტიო</option>
                <option value="17">C4 საშ.სიღრმის, ჭარბტენიანი</option>
                <option value="18">C5 საშ.სიღრმის, სველი</option>
                <option value="19">D0 ღრმა, ძალიან მშრალი</option>
                <option value="20">D1 ღრმა, მშრალი</option>
                <option value="21">D2 ღრმა, გრილი</option>
                <option value="22">D3 ღრმა, ნოტიო</option>
                <option value="23">D4 ღრმა, ჭარბტენიანი</option>
                <option value="24">D5 ღრმა, სველი</option>

            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="cutting_year">3.6 ჭრის წელი</label>

            <input type="number" class="form-control" id="cutting_year"/>
        </div>
    </div>
</template>

<script setup>

</script>


<style scoped>

</style>