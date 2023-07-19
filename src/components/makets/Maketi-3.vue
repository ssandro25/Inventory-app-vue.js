<template>
    <div class="row row-cols-lg-6 row-cols-2 m-0">
        <div class="col">
            <label class="form-label text-truncate w-100" for="dominant_species">
                3.1 გაბატონებული სახეობა
            </label>

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
            <label class="form-label text-truncate w-100" for="credit_rating">
                3.2 ბონიტეტი
            </label>

            <select class="form-select" id="credit_rating">
                <option selected>ბონიტეტი</option>
                <option v-for="item in boniteti" :key="item" :value="item.id">{{item.name}}</option>
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
                <option selected>ტყის ტიპი </option>
                <option v-for="item in tkisTipi" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="location_type">
                3.5 ადგილსამყოფელის ტიპი
            </label>

            <select class="form-select" id="location_type">
                <option selected>ადგილსამყოფ.ტიპი</option>
                <option v-for="item in adgilsamyofelis_tipi" :key="item" :value="item.id">{{item.name}}</option>
            </select>
        </div>

        <div class="col mt-lg-0 mt-3">
            <label class="form-label text-truncate w-100" for="cutting_year">3.6 ჭრის წელი</label>

            <input type="number" class="form-control" id="cutting_year"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Maketi-3',

    computed: {
        ...mapGetters([
            'adgilsamyofelisTipi',
            'boniteti',
            'tkisTipi'
        ])
    }
}
</script>


<style scoped>

</style>